import type { Metadata } from "next";
import Link from "next/link";
import { countries, liveCountries } from "@/content/countries";
import { site } from "@/content/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import ProductCard from "@/components/ProductCard";
import AirmailRule from "@/components/AirmailRule";

export const metadata: Metadata = {
  title: "Shop All Countries — International Snack Boxes",
  description:
    "Every snack box we stock, by country of origin. Imported in bulk, packed in Ohio, shipped across the US and Canada in 2-4 days.",
  alternates: { canonical: "/treats-from" },
};

export default function TreatsFromIndexPage() {
  const everything = liveCountries.flatMap((country) =>
    country.products.map((product) => ({ country, product }))
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop all", path: "/treats-from" },
        ])}
      />

      <section className="border-b-2 border-ink bg-panel">
        <div className="shell py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="label text-muted">
            <Link href="/" className="hover:text-post">
              Home
            </Link>
            <span aria-hidden> / </span>
            <span aria-current="page">Shop all</span>
          </nav>
          <h1 className="display mt-6 text-[clamp(2.4rem,10vw,5.5rem)]">
            Every box we stock
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {site.description}
          </p>
        </div>
      </section>

      <section className="shell py-14">
        <h2 className="label text-post">By country</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {countries.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/treats-from/${c.slug}`}
                className="label inline-block border-2 border-ink px-4 py-3 hover:bg-ink hover:text-paper"
              >
                {c.name}
                {c.status === "coming-soon" && (
                  <span className="ml-2 opacity-60">soon</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AirmailRule />

      <section className="shell py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {everything.map(({ country, product }, idx) => (
            <ProductCard
              key={`${country.slug}-${product.slug}`}
              country={country}
              product={product}
              priority={idx === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
