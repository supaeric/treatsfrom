import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AirmailRule from "@/components/AirmailRule";
import { countries, liveCountries, upcomingCountries } from "@/content/countries";
import { JsonLd, faqJsonLd } from "@/lib/seo";

const homeFaqs = [
  {
    q: "Where does my box actually ship from?",
    a: "Ohio. We import by the pallet, clear customs once, and warehouse everything here — so your order moves as a domestic parcel and lands in 2-4 business days.",
  },
  {
    q: "Do I pay import duties?",
    a: "No. Duties are paid once, by us, at the border. The price you see is the price you pay.",
  },
  {
    q: "Which countries can you deliver to?",
    a: "The United States and Canada. Mexico is next on our list.",
  },
];

export default function HomePage() {
  const featured = liveCountries.flatMap((country) =>
    country.products.map((product) => ({ country, product }))
  );

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />

      {/* The problem this business solves, stated plainly. */}
      <section className="shell py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="label text-post">The difference</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Everyone else posts it from overseas
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted">
            <p>
              That is why an order takes five weeks, arrives crushed, costs $40
              to ship, and occasionally gets held at the border for a duty
              payment nobody warned you about.
            </p>
            <p className="text-ink">
              We do the importing once, in bulk, so you do not have to do it at
              all. Your box leaves an Ohio warehouse the same way a domestic
              order does — because that is exactly what it is.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid gap-px border-2 border-ink bg-ink sm:grid-cols-3">
          {[
            [
              "We buy at source",
              "Direct from wholesalers in each country. Real branded product, never grey-market repacks.",
            ],
            [
              "We fly it in",
              "Air freight by the pallet, cleared and duty-paid at the border once, in bulk.",
            ],
            [
              "You get it in days",
              "Packed to order in Ohio and shipped domestically across the US and Canada.",
            ],
          ].map(([title, copy], idx) => (
            <li key={title} className="bg-paper p-7">
              <span className="label text-post">
                Step {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-3 text-2xl">{title}</h3>
              <p className="mt-3 text-muted">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <AirmailRule />

      {/* Products */}
      <section className="shell py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label text-post">In stock now</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">The boxes</h2>
          </div>
          <Link href="/treats-from/south-africa" className="btn btn-ghost">
            Shop all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ country, product }, idx) => (
            <ProductCard
              key={`${country.slug}-${product.slug}`}
              country={country}
              product={product}
              priority={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* Roadmap — this section grows on its own as you add countries */}
      <section id="route-map" className="bg-ink py-20 text-paper">
        <div className="shell">
          <p className="label text-kraft">The route map</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">
            Where we are landing next
          </h2>
          <ul className="mt-10 divide-y divide-paper/15 border-y border-paper/15">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/treats-from/${c.slug}`}
                  className="flex items-center justify-between gap-6 py-6 transition-colors hover:text-kraft"
                >
                  <span className="display text-3xl sm:text-5xl">{c.name}</span>
                  <span className="label shrink-0 text-paper/50">
                    {c.status === "live"
                      ? `${c.products.length} boxes`
                      : "Coming soon"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {upcomingCountries.length > 0 && (
            <p className="mt-8 max-w-lg text-paper/60">
              Want somewhere that is not on this list? Tell us and we will look
              at the freight.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
