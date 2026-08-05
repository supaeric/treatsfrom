import type { Metadata } from "next";
import Link from "next/link";
import AirmailRule from "@/components/AirmailRule";
import { site, deliveryLabel } from "@/content/site";
import { money } from "@/lib/format";

export const metadata: Metadata = {
  title: "How It Works | Imported Snacks With No Customs or Duty",
  description:
    "Order imported snacks online in the USA and Canada with no customs form and no duty to pay. Delivered in 7-10 business days, packed fresh and ready to gift.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    title: "Pick a box",
    copy: "Choose by size or by what is in it. Every box lists its full contents and allergens before you buy, so there are no surprises when it opens.",
  },
  {
    title: "Add a note if it is a gift",
    copy: "There is a note field at checkout. We write it out by hand, tuck it inside, and leave the receipt out so the price is never on show.",
  },
  {
    title: "We pack it to order",
    copy: "Boxes are packed the day they ship rather than sitting pre-assembled on a shelf. If something is out of stock we swap in a similar favourite of the same value.",
  },
  {
    title: "It arrives within the week",
    copy: `${deliveryLabel("US")} anywhere in the United States and ${deliveryLabel("CA")} to Canada. Tracking is emailed as soon as your box is on its way.`,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-panel">
        <div className="shell py-16 sm:py-24">
          <p className="label text-post">How it works</p>
          <h1 className="display mt-5 text-[clamp(2.4rem,10vw,5.5rem)]">
            Order it here,
            <br />
            not overseas
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted sm:text-xl">
            Buying imported snacks usually means a long wait, expensive
            shipping and a customs charge you did not expect. We hold stock in
            the United States, so ordering from us works like ordering anything
            else.
          </p>
        </div>
      </section>

      <section className="shell py-16">
        <ol className="divide-y-2 divide-ink border-y-2 border-ink">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="grid gap-4 py-9 sm:grid-cols-[7rem_1fr]"
            >
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
        <h2 className="display text-3xl sm:text-4xl">
          Compared with ordering from abroad
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          The difference is not the snacks. It is everything that happens
          between paying and opening the box.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-2 border-ink text-left">
            <thead className="bg-ink text-paper">
              <tr>
                <th className="label p-4">&nbsp;</th>
                <th className="label p-4">Treats From</th>
                <th className="label p-4">Ordering from overseas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/20">
              {[
                ["Delivery time", deliveryLabel("US"), "Four to six weeks"],
                ["Customs form", "None", "Required"],
                ["Import duty", "Nothing to pay", "Billed on arrival"],
                ["Shelf life on arrival", "Four months minimum", "Often weeks"],
                ["Returns", "US or Canadian address", "International return"],
                [
                  "Shipping cost",
                  `Free over ${money(site.freeShipping.US)}`,
                  "Often more than the snacks",
                ],
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
      </section>

      <section className="shell pb-20">
        <h2 className="display text-3xl sm:text-4xl">What you can expect</h2>
        <div className="mt-6 grid gap-8 text-muted sm:grid-cols-2">
          <p>
            Everything we sell is the version sold at home rather than a recipe
            adjusted for the American market, which is the difference most
            people notice first. Boxes arrive rigid and padded, not loose in a
            mailer, and we hold chocolate-heavy orders a day rather than send
            them into a heatwave.
          </p>
          <p>
            If anything turns up damaged, short or past its date, email us
            within 14 days with a photo and we will replace it or refund you.
            You will not need to send anything back. Full terms are on the{" "}
            <Link href="/shipping" className="underline underline-offset-4">
              shipping and returns page
            </Link>
            .
          </p>
        </div>

        <Link href="/treats-from/south-africa" className="btn btn-primary mt-10">
          Shop the boxes
        </Link>
      </section>
    </>
  );
}
