import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { findByProductId } from "@/content/countries";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Body = {
  lines?: { id: string; qty: number }[];
  note?: string;
};

/**
 * Prices are resolved server-side from the content layer. The browser only
 * ever sends product ids and quantities, so a tampered cart cannot change
 * what anything costs.
 */
export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lines = body.lines ?? [];
  if (lines.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const lineItems = [];
  let subtotalCents = 0;
  /** Start permissive, then narrow by any product-level restriction. */
  let allowedCountries = [...site.shipsTo];

  for (const line of lines) {
    const hit = findByProductId(line.id);
    if (!hit) {
      return NextResponse.json(
        { error: "One of those boxes is no longer available." },
        { status: 400 }
      );
    }

    const qty = Math.max(1, Math.min(Math.floor(line.qty), 20));
    const { country, product } = hit;

    if (product.shipsTo) {
      allowedCountries = allowedCountries.filter((c) =>
        product.shipsTo!.includes(c)
      );
    }

    subtotalCents += product.priceCents * qty;

    lineItems.push({
      quantity: qty,
      price_data: {
        currency: "usd",
        unit_amount: product.priceCents,
        product_data: {
          name: `${product.name}, Treats from ${country.name}`,
          description: product.tagline,
          metadata: { sku: line.id, origin: country.code },
        },
      },
    });
  }

  if (allowedCountries.length === 0) {
    return NextResponse.json(
      {
        error:
          "Those boxes can't ship to the same place. The Braai Box is US only because of meat import rules, so please order it separately.",
      },
      { status: 400 }
    );
  }

  const shippingOptions = allowedCountries.map((code) => {
    const rate = site.shipping[code];
    const free = subtotalCents >= (site.freeShipping[code] ?? Infinity);
    return {
      shipping_rate_data: {
        type: "fixed_amount" as const,
        display_name: free
          ? `Free ${code} Shipping (${site.delivery[code].label})`
          : `${rate.label} (${site.delivery[code].label})`,
        fixed_amount: {
          amount: free ? 0 : rate.cents,
          currency: "usd",
        },
        delivery_estimate: {
          minimum: {
            unit: "business_day" as const,
            value: site.delivery[code].min,
          },
          maximum: {
            unit: "business_day" as const,
            value: site.delivery[code].max,
          },
        },
      },
    };
  });

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      // Creates or reuses a Stripe Customer keyed on email. This is what
      // gives us order history for free when accounts ship later.
      customer_creation: "always",
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: allowedCountries as never },
      shipping_options: shippingOptions,
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      automatic_tax: { enabled: false },
      metadata: {
        giftNote: (body.note ?? "").slice(0, 480),
        cart: lines.map((l) => `${l.id}x${l.qty}`).join(","),
      },
      success_url: `${site.url}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site.url}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout failed", err);
    return NextResponse.json(
      { error: "We could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
