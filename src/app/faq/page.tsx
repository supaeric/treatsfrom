import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import { site } from "@/content/site";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { countries } from "@/content/countries";

export const metadata: Metadata = {
  title: "FAQ | Buying Imported Snacks in the USA and Canada",
  description:
    "Answers on buying imported snacks online in the USA and Canada: shipping times, customs and duty, freshness, allergens, gifting and returns.",
  alternates: { canonical: "/faq" },
};

const general = [
  {
    q: "Where do you ship from?",
    a: "the US. Every box is packed and posted inside North America, so delivery takes days rather than weeks.",
  },
  {
    q: "Where do you deliver to?",
    a: "The United States and Canada. Mexico is the next market we're looking at.",
  },
  {
    q: "Will I be charged customs or duty?",
    a: "No. We handle the import side before anything reaches the shelf, so the price on the site is what you pay.",
  },
  {
    q: "Are these genuine products?",
    a: "Yes. Everything is the version sold at home rather than a recipe adjusted for the American market, which is the difference most people notice first.",
  },
  {
    q: "Do I need an account to order?",
    a: "No. Checkout is guest only and takes about a minute. Your receipt and tracking arrive by email.",
  },
  {
    q: "Do you do subscriptions?",
    a: "Not yet, though it's the next thing we're building. Email us if you want to know when it launches.",
  },
  {
    q: "Can I order a custom or bulk box?",
    a: "Yes, we do corporate gifting and bulk orders. Email us rough quantities and a delivery date and we'll quote you.",
  },
  {
    q: "What about allergens?",
    a: "Our boxes contain branded snacks that commonly include milk, wheat, soy and nuts, and we can't guarantee an allergen-free box. Each product page lists what it contains. If you have a serious allergy, email us before ordering.",
  },
];

export default function FaqPage() {
  return (
    <div className="shell max-w-3xl py-16">
      {/* Only the general set is emitted here. Country FAQs are unique to
          their own pages so the same Q&A never appears on two URLs. */}
      <JsonLd data={faqJsonLd(general)} />
      <p className="label text-post">FAQ</p>
      <h1 className="display mt-5 text-4xl sm:text-5xl">
        Buying imported snacks in the USA
      </h1>

      <p className="mt-6 text-lg text-muted">
        Answers on ordering imported snacks in the United States and Canada. If
        your question is about a specific range, each country page has its own
        set covering shipping restrictions, freshness and what is in the boxes.
      </p>

      <div className="mt-10">
        <FaqList faqs={general} />
      </div>

      <h2 className="display mt-14 text-2xl">Questions by country</h2>
      <ul className="mt-5 space-y-3">
        {countries.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/treats-from/${c.slug}`}
              className="underline underline-offset-4 hover:text-post"
            >
              {c.demonym} snack boxes
            </Link>
            <span className="text-muted">
              {" "}
              {c.status === "live"
                ? "shipping now"
                : "coming soon, join the list"}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-muted">
        Still stuck? Email{" "}
        <a
          href={`mailto:${site.email}`}
          className="underline underline-offset-4"
        >
          {site.email}
        </a>{" "}
        and a person will answer. Delivery rates and returns are set out on the{" "}
        <Link href="/shipping" className="underline underline-offset-4">
          shipping page
        </Link>
        .
      </p>
    </div>
  );
}
