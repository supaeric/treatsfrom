import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AirmailRule from "@/components/AirmailRule";
import FaqList from "@/components/FaqList";
import { countries, liveCountries } from "@/content/countries";
import { site, deliveryLabel } from "@/content/site";
import { money } from "@/lib/format";
import { JsonLd, faqJsonLd, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "South African Snacks Online in the USA | Treats From",
  description:
    "Buy South African snacks online in the USA and Canada. Ouma Rusks, Peppermint Crisp, Simba and biltong, delivered from within the US. Free US shipping over $30.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "How long does delivery take?",
    a: `${deliveryLabel("US")} to anywhere in the United States, and ${deliveryLabel(
      "CA"
    )} to Canada. We email tracking as soon as your box is on its way.`,
  },
  {
    q: "Do I pay customs or import duty?",
    a: "No. Your order ships from within the United States, so there is nothing to declare and no bill waiting at the door. The price you see is what you pay.",
  },
  {
    q: "How fresh are the snacks?",
    a: "We never ship anything with less than four months of shelf life left, and most items arrive with a good deal more than that.",
  },
  {
    q: "Can I send a box as a gift?",
    a: "Yes. Add a handwritten note at checkout at no cost, and we ship to any US or Canadian address with no receipt in the box.",
  },
];

export default function HomePage() {
  const featured = liveCountries.flatMap((country) =>
    country.products.map((product) => ({ country, product }))
  );

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      {featured.length > 0 && (
        <JsonLd data={itemListJsonLd(featured, "Snack boxes in stock")} />
      )}

      <Hero />

      {/* Trust bar: the four things a first-time buyer checks before scrolling. */}
      <section className="border-b-2 border-ink bg-panel">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-6 py-8 lg:grid-cols-4">
          {[
            ["Free US shipping", `On orders over ${money(site.freeShipping.US)}`],
            ["Nothing to declare", "No customs forms, no duty"],
            ["Always fresh", "Four months minimum shelf life"],
            ["Gift ready", "Free handwritten note"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="display text-lg sm:text-xl">{title}</p>
              <p className="label mt-1 text-muted">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products first. This is what people came for. */}
      <section className="shell py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label text-post">Shipping now</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              South African snack boxes
            </h2>
          </div>
          <Link href="/treats-from/south-africa" className="btn btn-ghost">
            See all boxes
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-lg text-muted">
          Rusks, Peppermint Crisp, Simba, Romany Creams and the rest of the
          tuck shop shelf. Packed to order and delivered anywhere in the US in{" "}
          {deliveryLabel("US")}.
        </p>

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

      <AirmailRule />

      {/* Why buy from us: benefits, not process. */}
      <section className="shell py-16">
        <h2 className="display text-4xl sm:text-5xl">
          Why order from us
        </h2>
        <div className="mt-10 grid gap-px border-2 border-ink bg-ink sm:grid-cols-3">
          {[
            [
              "The real thing",
              "Everything we sell is the version sold at home, not a recipe reformulated for the American market. If the wrapper looks right, the bar tastes right.",
            ],
            [
              "Here, not overseas",
              "We hold stock in the United States, so your order arrives like any other domestic parcel. No customs paperwork, no duty, and no waiting a month and a half.",
            ],
            [
              "Packed for giving",
              "Boxes arrive in a rigid gift box with paper padding rather than loose in a mailer. Add a handwritten note free, and we leave the receipt out.",
            ],
          ].map(([title, copy]) => (
            <div key={title} className="bg-paper p-7">
              <h3 className="display text-2xl">{title}</h3>
              <p className="mt-3 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap. Grows on its own as you add countries. */}
      <section id="route-map" className="bg-ink py-16 text-paper">
        <div className="shell">
          <p className="label text-kraft">More countries</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">
            What we&apos;re adding next
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
          <p className="mt-8 max-w-lg text-paper/60">
            Somewhere you want that isn&apos;t listed? Tell us and we&apos;ll
            look into it.
          </p>
        </div>
      </section>

      <section className="shell py-16">
        <h2 className="display text-4xl sm:text-5xl">Before you order</h2>
        <div className="mt-8">
          <FaqList faqs={homeFaqs} />
        </div>
        <p className="mt-8 text-muted">
          More detail on our{" "}
          <Link href="/shipping" className="underline underline-offset-4">
            shipping and returns page
          </Link>{" "}
          and in the{" "}
          <Link href="/faq" className="underline underline-offset-4">
            full FAQ
          </Link>
          .
        </p>
      </section>
    </>
  );
}
