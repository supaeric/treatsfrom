import type { Metadata } from "next";
import { money } from "@/lib/format";
import { site, deliveryLabel } from "@/content/site";

export const metadata: Metadata = {
  title: "Shipping & Returns: US and Canada Delivery",
  description:
    "Free US shipping over $30, flat $14.95 to Canada and free over $75. US delivery in 7-10 business days. Full returns policy.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="shell max-w-3xl py-16">
      <p className="label text-post">Shipping &amp; returns</p>
      <h1 className="display mt-5 text-5xl">Where we deliver</h1>

      <p className="mt-7 text-lg text-muted">
        We ship to the United States and Canada only. Everything leaves our
        warehouse in the US as a domestic parcel, so there&apos;s no customs
        paperwork and nothing to pay on arrival.
      </p>

      <table className="mt-10 w-full border-2 border-ink text-left">
        <thead className="bg-ink text-paper">
          <tr>
            <th className="label p-4">Destination</th>
            <th className="label p-4">Cost</th>
            <th className="label p-4">Free over</th>
            <th className="label p-4">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/20">
          <tr>
            <th scope="row" className="p-4 font-medium">United States</th>
            <td className="p-4">{money(site.shipping.US.cents)}</td>
            <td className="p-4">{money(site.freeShipping.US)}</td>
            <td className="p-4">{deliveryLabel("US")}</td>
          </tr>
          <tr>
            <th scope="row" className="p-4 font-medium">Canada</th>
            <td className="p-4">{money(site.shipping.CA.cents)}</td>
            <td className="p-4">{money(site.freeShipping.CA)}</td>
            <td className="p-4">{deliveryLabel("CA")}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-12 space-y-9">
        <section>
          <h2 className="display text-2xl">Dispatch</h2>
          <p className="mt-3 text-muted">
            We pack Monday to Friday. Orders placed before 1pm ET usually ship
            the same day, and we email tracking as soon as the label is
            printed.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Restricted items</h2>
          <p className="mt-3 text-muted">
            Meat products (biltong and droewors) can&apos;t cross into Canada, so
            The Braai Box ships to US addresses only. With a Canadian address,
            that box won&apos;t appear as an option at checkout.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Returns</h2>
          <p className="mt-3 text-muted">
            Food is perishable, so we can&apos;t take back an opened box. If
            anything arrives damaged, expired or missing, email{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            within 14 days with a photo and we&apos;ll replace it or refund you.
            You won&apos;t need to ship anything back.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Customs and duty</h2>
          <p className="mt-3 text-muted">
            There is none to pay. This is the main difference between buying
            imported snacks from us and ordering them from overseas. We hold
            stock in the United States and handle the import side before
            anything reaches the shelf, so your order travels as an ordinary
            domestic parcel. No customs declaration is attached to it, and no
            carrier will ask you for a payment before releasing it.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Packaging</h2>
          <p className="mt-3 text-muted">
            Boxes ship in rigid cartons with paper padding, not loose in a
            mailer. Chocolate travels well for most of the year, but in a
            genuine heatwave we may hold a chocolate-heavy order a day or two
            rather than send it into a hot delivery van. If we do that we will
            email you first.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Wrong address</h2>
          <p className="mt-3 text-muted">
            Email us within two hours of ordering and we can usually fix it
            before the box is packed. Once it&apos;s dispatched we can&apos;t reroute it.
          </p>
        </section>
      </div>
    </div>
  );
}
