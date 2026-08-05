import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { countries } from "@/content/countries";

export const metadata: Metadata = {
  title: "FAQ — Imported Snack Boxes",
  description:
    "Answers on shipping to the US and Canada, freshness, allergens, gifting, customs and returns for Treats From snack boxes.",
  alternates: { canonical: "/faq" },
};

const general = [
  {
    q: "Where do you ship from?",
    a: "Ohio. Every box is packed and posted inside North America, which is why delivery takes days rather than weeks.",
  },
  {
    q: "Where do you deliver to?",
    a: "The United States and Canada. Mexico is the next market we are looking at.",
  },
  {
    q: "Will I be charged customs or duty?",
    a: "No. We pay duty once, in bulk, when the freight arrives. The price on the site is the price you pay.",
  },
  {
    q: "Are these genuine products?",
    a: "Yes. We buy from established wholesalers in each country. Everything is real branded product bought on the domestic market there.",
  },
  {
    q: "Do I need an account to order?",
    a: "No. Checkout is guest-only and takes about a minute. Your receipt and tracking arrive by email.",
  },
  {
    q: "Do you do subscriptions?",
    a: "Not yet, but it is the next thing we are building. If you want to be told when it launches, email us.",
  },
  {
    q: "Can I order a custom or bulk box?",
    a: "Yes, we do corporate gifting and bulk orders. Email us with rough quantities and a delivery date and we will quote you.",
  },
  {
    q: "What about allergens?",
    a: "Our boxes contain real branded snacks that commonly include milk, wheat, soy and nuts, and we cannot guarantee an allergen-free box. Each product page lists what it contains. If you have a serious allergy, email us before ordering.",
  },
];

export default function FaqPage() {
  const countryFaqs = countries.flatMap((c) => c.faqs);
  const all = [...general, ...countryFaqs];

  return (
    <div className="shell max-w-3xl py-16">
      <JsonLd data={faqJsonLd(all)} />
      <p className="label text-post">FAQ</p>
      <h1 className="display mt-5 text-5xl">Questions</h1>

      <h2 className="display mt-12 text-2xl">General</h2>
      <div className="mt-5">
        <FaqList faqs={general} />
      </div>

      {countries
        .filter((c) => c.faqs.length > 0)
        .map((c) => (
          <section key={c.slug}>
            <h2 className="display mt-14 text-2xl">{c.name}</h2>
            <div className="mt-5">
              <FaqList faqs={c.faqs} />
            </div>
          </section>
        ))}
    </div>
  );
}
