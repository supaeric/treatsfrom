import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/content/countries";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import AirmailRule from "@/components/AirmailRule";
import { site } from "@/content/site";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  const path = `/treats-from/${country.slug}`;
  return {
    title: country.seoTitle,
    description: country.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: country.seoTitle,
      description: country.seoDescription,
      url: path,
    },
  };
}

export default async function CountryPage({ params }: Params) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const path = `/treats-from/${country.slug}`;

  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: country.seoTitle,
          description: country.seoDescription,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop all", path: "/treats-from" },
          { name: country.name, path },
        ])}
      />
      {country.products.length > 0 && (
        <JsonLd
          data={itemListJsonLd(
            country.products.map((product) => ({ country, product })),
            `${country.demonym} snack boxes`
          )}
        />
      )}
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
            <Link href="/treats-from" className="hover:text-post">
              Shop all
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
            {country.status === "live" ? (
              <>
                Buy {country.demonym} snacks online in the USA and Canada.{" "}
                {country.blurb}
              </>
            ) : (
              country.blurb
            )}
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
          <h2 className="display text-3xl sm:text-4xl">
            {country.demonym} snack boxes
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Every box ships from within the US. Free US shipping over{" "}
            $30, and Canadian delivery in ten to fourteen business days.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <section className="shell py-16">
          <div className="max-w-2xl border-2 border-ink bg-panel p-8">
            <h2 className="display text-2xl">{country.story}</h2>
            <p className="mt-4 text-muted">
              We will email you the day these go on sale. No other mail, and
              one click to stop.
            </p>
            <Link href="/#route-map" className="btn btn-primary mt-6">
              Tell me when it lands
            </Link>
          </div>
        </section>
      )}

      <AirmailRule />

      {/* Long-form body. Carries the page's keyword coverage and word count. */}
      <section className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="label text-post">Sourcing</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Where {country.demonym} snacks come from
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted">
            {country.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {country.brands.length > 0 && (
        <section className="shell pb-16">
          <h2 className="display text-3xl sm:text-4xl">
            {country.demonym} brands we stock
          </h2>
          <dl className="mt-8 grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {country.brands.map((brand) => (
              <div key={brand.name} className="bg-paper p-6">
                <dt className="display text-xl">{brand.name}</dt>
                <dd className="mt-2 text-sm text-muted">{brand.note}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Brand names are the trademarks of their owners. We are an
            independent importer and retailer, and we are not affiliated with
            or endorsed by any of them.
          </p>
        </section>
      )}

      {country.faqs.length > 0 && (
        <section className="shell pb-24">
          <h2 className="display mb-8 text-3xl sm:text-4xl">
            Questions about {country.demonym} snack boxes
          </h2>
          <FaqList faqs={country.faqs} />
          <p className="mt-8 text-muted">
            More on delivery times and costs is on our{" "}
            <Link href="/shipping" className="underline underline-offset-4">
              shipping page
            </Link>
            , and our{" "}
            <Link href="/how-it-works" className="underline underline-offset-4">
              how it works page
            </Link>{" "}
            explains why ordering from us is quicker than ordering from
            abroad.
          </p>
        </section>
      )}
    </>
  );
}
