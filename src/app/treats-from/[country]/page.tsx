import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/content/countries";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import AirmailRule from "@/components/AirmailRule";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return {
    title: country.seoTitle,
    description: country.seoDescription,
    alternates: { canonical: `/treats-from/${country.slug}` },
    openGraph: {
      title: country.seoTitle,
      description: country.seoDescription,
      url: `/treats-from/${country.slug}`,
    },
  };
}

export default async function CountryPage({ params }: Params) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: country.name, path: `/treats-from/${country.slug}` },
        ])}
      />
      {country.faqs.length > 0 && <JsonLd data={faqJsonLd(country.faqs)} />}

      <section
        className="border-b-2 border-ink"
        style={{ backgroundColor: `${country.accent}1f` }}
      >
        <div className="shell py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="label text-muted">
            <Link href="/" className="hover:text-post">
              Home
            </Link>
            <span aria-hidden> / </span>
            <span aria-current="page">{country.name}</span>
          </nav>

          <h1 className="display mt-6 text-[clamp(2.4rem,10vw,6rem)]">
            Treats From{" "}
            <span
              className="stamp"
              style={
                {
                  "--accent": country.accent,
                  "--accent-ink": country.accentInk,
                } as React.CSSProperties
              }
            >
              {country.name}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {country.blurb}
          </p>

          {country.status === "coming-soon" && (
            <p className="customs-mark mt-10 inline-block text-post">
              Not yet cleared
            </p>
          )}
        </div>
      </section>

      {country.status === "live" ? (
        <section className="shell py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {country.products.map((product, idx) => (
              <ProductCard
                key={product.slug}
                country={country}
                product={product}
                priority={idx === 0}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="shell py-20">
          <div className="max-w-2xl border-2 border-ink bg-panel p-8">
            <h2 className="display text-3xl">{country.story}</h2>
            <p className="mt-4 text-muted">
              We will email you the day the first pallet clears. No other mail,
              and one click to stop.
            </p>
            <Link href="/#route-map" className="btn btn-primary mt-6">
              Tell me when it lands
            </Link>
          </div>
        </section>
      )}

      <AirmailRule />

      <section className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="label text-post">Sourcing</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Straight from {country.name}
            </h2>
          </div>
          <p className="text-lg text-muted">{country.story}</p>
        </div>
      </section>

      {country.faqs.length > 0 && (
        <section className="shell pb-24">
          <h2 className="display mb-8 text-3xl sm:text-4xl">
            Questions about {country.demonym} boxes
          </h2>
          <FaqList faqs={country.faqs} />
        </section>
      )}
    </>
  );
}
