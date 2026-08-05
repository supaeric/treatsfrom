import type { Metadata } from "next";
import Link from "next/link";
import AirmailRule from "@/components/AirmailRule";

export const metadata: Metadata = {
  title: "How It Works — Imported Snacks, Shipped Domestically",
  description:
    "We import snacks by the pallet, clear customs once, and ship from Ohio. No duties, no customs forms, and delivery in 2-4 days across the US and Canada.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    title: "We buy at source",
    copy: "Our buyers work directly with wholesalers in each country. Everything is genuine branded product bought on the domestic market there — the same Peppermint Crisp sold in a Pick n Pay, not a re-labelled export version.",
  },
  {
    title: "We fly it in by the pallet",
    copy: "Air freight, not sea freight. It costs us more, but it means product reaches the warehouse with most of its shelf life intact instead of half of it burned at sea.",
  },
  {
    title: "We clear customs once",
    copy: "Duties, FDA prior notice and import paperwork are handled in bulk, by us, on the way in. You never see a customs form and never get a surprise bill at the door.",
  },
  {
    title: "We pack to order in Ohio",
    copy: "Boxes are packed the day they ship, not pre-assembled and left on a shelf. If something is out of stock we swap in a like-for-like favourite rather than shorting the box.",
  },
  {
    title: "You get it in days",
    copy: "US orders arrive in 2-4 business days, Canadian orders in 4-8. Tracking is emailed the moment the label is printed.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-panel">
        <div className="shell py-16 sm:py-24">
          <p className="label text-post">How it works</p>
          <h1 className="display mt-5 text-[clamp(2.4rem,10vw,5.5rem)]">
            We do the importing
            <br />
            so you do not have to
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted sm:text-xl">
            Most international snack shops post your order from overseas. That
            is why it takes five weeks and sometimes arrives with a duty bill.
            We work the other way round.
          </p>
        </div>
      </section>

      <section className="shell py-16">
        <ol className="divide-y-2 divide-ink border-y-2 border-ink">
          {steps.map((step, idx) => (
            <li key={step.title} className="grid gap-4 py-9 sm:grid-cols-[7rem_1fr]">
              <span className="label text-post">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="display text-2xl sm:text-3xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-muted">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <AirmailRule />

      <section className="shell py-16">
        <h2 className="display text-3xl sm:text-4xl">Us versus posting it home</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-2 border-ink text-left">
            <thead className="bg-ink text-paper">
              <tr>
                <th className="label p-4">&nbsp;</th>
                <th className="label p-4">Treats From</th>
                <th className="label p-4">Posted from overseas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/20">
              {[
                ["Delivery time", "2-4 business days", "3-6 weeks"],
                ["Customs form", "None", "Required"],
                ["Import duty", "Included in the price", "Billed on arrival"],
                ["Shelf life on arrival", "4+ months", "Often weeks"],
                ["Returns", "US and Canada address", "International return"],
              ].map(([label, ours, theirs]) => (
                <tr key={label}>
                  <th scope="row" className="label p-4 text-muted">
                    {label}
                  </th>
                  <td className="p-4 font-medium">{ours}</td>
                  <td className="p-4 text-muted">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/treats-from/south-africa" className="btn btn-primary mt-10">
          Shop the boxes
        </Link>
      </section>
    </>
  );
}
