import type { Metadata } from "next";
import Link from "next/link";
import { countries, liveCountries } from "@/content/countries";
import { site } from "@/content/site";
import {
  JsonLd,
  breadcrumbJsonLd,
  itemListJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";
import ProductCard from "@/components/ProductCard";
import AirmailRule from "@/components/AirmailRule";

export const metadata: Metadata = {
  title: "Shop Imported Snack Boxes | South African, British and Japanese",
  description:
    "Every imported snack box we stock, by country of origin. South African snacks shipping now, British and Japanese coming soon. Delivered across the USA and Canada in 7-10 days.",
  alternates: { canonical: "/treats-from" },
};

export default function TreatsFromIndexPage() {
  const everything = liveCountries.flatMap((country) =>
    country.products.map((product) => ({ country, product }))
  );

  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: "Imported snack boxes by country",
          description:
            "South African, British and Japanese snack boxes shipped across the USA and Canada.",
          path: "/treats-from",
        })}
      />
      {everything.length > 0 && (
        <JsonLd
          data={itemListJsonLd(everything, "Imported snack boxes in stock")}
        />
      )}
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
            Imported snack boxes
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {site.description}
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            South African snacks are shipping now. British and Japanese boxes
            are in sourcing, and you can join the list on either page to hear
            when they land. Every box is warehoused in the US and posted as a
            domestic parcel, so there is no customs form to complete and no
            import duty to settle on arrival.
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
        <h2 className="display text-3xl sm:text-4xl">In stock now</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <AirmailRule />

      <section className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="label text-post">Who buys these</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Mostly people who moved
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted">
            <p>
              Most of our orders go to people who left one country for another
              and cannot buy the things they grew up eating. South Africans in
              Texas and California, British families in Ontario, students who
              have discovered that the chocolate here is not the chocolate they
              remember. A snack box is a small fix for that, and it works.
            </p>
            <p>
              The rest are gifts. Parents sending a care package to a child at
              university, partners buying for someone whose stories about
              Peppermint Crisp tart have gone on long enough, and offices
              putting together something for a colleague who has relocated.
              Every box takes a free handwritten note at checkout and ships
              without a receipt inside.
            </p>
            <p>
              Whichever you are, the mechanics are the same. Pick a box, pay,
              and it leaves our US warehouse as a normal domestic parcel. Two
              to four business days to most US addresses, ten to fourteen to
              Canada, with tracking emailed when the label prints. Nothing to
              declare and nothing to pay at the door.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
