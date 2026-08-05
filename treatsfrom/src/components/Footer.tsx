import Link from "next/link";
import { countries } from "@/content/countries";
import { site } from "@/content/site";
import Wordmark from "./Wordmark";
import AirmailRule from "./AirmailRule";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <AirmailRule />
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" className="text-2xl">
            <Wordmark />
          </Link>
          <p className="mt-3 max-w-sm text-sm text-paper/70">
            {site.tagline} We import in bulk, warehouse in Ohio, and ship
            domestically across the US and Canada.
          </p>
          <p className="label mt-6 text-paper/50">
            Ships to United States &amp; Canada
          </p>
        </div>

        <div>
          <h2 className="label text-paper/50">Shop</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/treats-from/${c.slug}`}
                  className="hover:text-kraft"
                >
                  Treats from {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label text-paper/50">Help</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/how-it-works" className="hover:text-kraft">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-kraft">
                Shipping &amp; returns
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-kraft">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-kraft">
                About us
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-kraft">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-paper/15 py-6 sm:flex-row sm:justify-between">
        <p className="label text-paper/40">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="label text-paper/40">
          Brand names are trademarks of their owners. We are an independent
          importer.
        </p>
      </div>
    </footer>
  );
}
