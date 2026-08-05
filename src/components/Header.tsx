"use client";

import Link from "next/link";
import { useState } from "react";
import { countries } from "@/content/countries";
import { useCart } from "@/lib/cart";
import Wordmark from "./Wordmark";
import AirmailRule from "./AirmailRule";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count, ready } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
          <span className="sr-only">Treats From — home</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/treats-from/${c.slug}`}
              className="label hover:text-post"
            >
              {c.name}
              {c.status === "coming-soon" && (
                <span className="ml-1 text-muted">·soon</span>
              )}
            </Link>
          ))}
          <Link href="/how-it-works" className="label hover:text-post">
            How it works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="label border-2 border-ink px-3 py-2">
            Cart{ready && count > 0 ? ` (${count})` : ""}
          </Link>
          <button
            type="button"
            className="label border-2 border-ink px-3 py-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t-2 border-ink bg-panel md:hidden"
        >
          <ul className="shell divide-y divide-ink/15 py-2">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/treats-from/${c.slug}`}
                  className="flex items-center justify-between py-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="display text-2xl">{c.name}</span>
                  <span className="label text-muted">
                    {c.status === "live" ? "Shop" : "Soon"}
                  </span>
                </Link>
              </li>
            ))}
            {[
              ["/how-it-works", "How it works"],
              ["/shipping", "Shipping"],
              ["/faq", "FAQ"],
              ["/about", "About"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="label block py-4"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <AirmailRule />
    </header>
  );
}
