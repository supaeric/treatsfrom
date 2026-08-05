import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const runtime = "nodejs";
/** Stripe signature verification needs the raw, unparsed body. */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json(
      { error: "Webhook is not configured." },
      { status: 400 }
    );
  }

  const raw = await request.text();
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(raw, signature, secret);
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      // TODO: fulfilment hook.
      // session.customer          -> Stripe Customer id (order history lives here)
      // session.customer_details  -> name, email, phone
      // session.shipping_details  -> delivery address
      // session.metadata.cart     -> "south-africa/lekker-box x1,..."
      // session.metadata.giftNote -> handwritten note text
      //
      // Send this to your pick-and-pack process (email, Shippo, Airtable,
      // whatever you use) and send the buyer a confirmation.
      console.log("Paid order", session.id, session.customer_details?.email);
      break;
    }
    case "checkout.session.expired":
      console.log("Abandoned checkout", event.data.object.id);
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
