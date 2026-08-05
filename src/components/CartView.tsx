"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart, remainingForFreeShipping } from "@/lib/cart";
import { findByProductId } from "@/content/countries";
import { money } from "@/lib/format";
import { site } from "@/content/site";
import BoxImage from "./BoxImage";

export default function CartView() {
  const { lines, ready, setQty, remove, subtotalCents } = useCart();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const items = lines
    .map((line) => {
      const hit = findByProductId(line.id);
      return hit ? { ...hit, qty: line.qty, id: line.id } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const shortfall = remainingForFreeShipping(subtotalCents);

  async function checkout() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines, note }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Checkout could not start.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Checkout could not start. Try again in a moment."
      );
      setBusy(false);
    }
  }

  if (!ready) {
    return <p className="label mt-10 text-muted">Loading your cart...</p>;
  }

  if (items.length === 0) {
    return (
      <div className="mt-10 max-w-lg border-2 border-ink bg-panel p-8">
        <p className="display text-2xl">Nothing in here yet</p>
        <p className="mt-3 text-muted">
          Pick a box and we will get it moving. Free US shipping over{" "}
          {money(site.freeShipping.US)}.
        </p>
        <Link href="/treats-from/south-africa" className="btn btn-primary mt-6">
          Shop South Africa
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <ul className="divide-y-2 divide-ink border-y-2 border-ink">
        {items.map((item) => (
          <li key={item.id} className="flex gap-5 py-6">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden border-2 border-ink">
              <BoxImage
                country={item.country}
                product={item.product}
                sizes="96px"
              />
            </div>

            <div className="flex-1">
              <h2 className="display text-xl">{item.product.name}</h2>
              <p className="label mt-1 text-muted">{item.country.name}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center border-2 border-ink">
                  <button
                    type="button"
                    className="px-3 py-1 font-stamp"
                    aria-label={`Reduce quantity of ${item.product.name}`}
                    onClick={() => setQty(item.id, item.qty - 1)}
                  >
                    &minus;
                  </button>
                  <span className="font-stamp min-w-8 text-center">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 font-stamp"
                    aria-label={`Increase quantity of ${item.product.name}`}
                    onClick={() => setQty(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>

                <span className="font-stamp font-bold">
                  {money(item.product.priceCents * item.qty)}
                </span>

                <button
                  type="button"
                  className="label text-muted underline underline-offset-4 hover:text-post"
                  onClick={() => remove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit border-2 border-ink bg-panel p-7">
        <h2 className="display text-2xl">Summary</h2>

        <div className="mt-6 flex justify-between border-b border-ink/20 pb-4">
          <span>Subtotal</span>
          <span className="font-stamp font-bold">{money(subtotalCents)}</span>
        </div>

        <p className="label mt-4 text-muted">
          {shortfall === 0
            ? "US shipping is free on this order"
            : `Add ${money(shortfall)} for free US shipping`}
        </p>

        <label className="label mt-7 block text-muted" htmlFor="gift-note">
          Gift note (optional)
        </label>
        <textarea
          id="gift-note"
          rows={3}
          maxLength={280}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="We write this by hand and tuck it inside the box."
          className="mt-2 w-full border-2 border-ink bg-paper p-3 text-sm"
        />

        <button
          type="button"
          onClick={checkout}
          disabled={busy}
          className="btn btn-primary mt-6 w-full"
        >
          {busy ? "Opening checkout..." : "Checkout"}
        </button>

        {error && (
          <p className="mt-3 text-sm text-post" role="alert">
            {error}
          </p>
        )}

        <p className="label mt-5 leading-relaxed text-muted">
          Shipping and tax are calculated at checkout. We deliver to the US and
          Canada.
        </p>
      </aside>
    </div>
  );
}
