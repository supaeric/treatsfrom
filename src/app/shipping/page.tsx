import type { Metadata } from "next";
import { money } from "@/lib/format";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Shipping & Returns — US and Canada Delivery",
  description:
    "Free US shipping over $30, flat $14.95 to Canada and free over $75. Delivery in 2-4 business days in the US. Full returns policy.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="shell max-w-3xl py-16">
      <p className="label text-post">Shipping &amp; returns</p>
      <h1 className="display mt-5 text-5xl">Where we deliver</h1>

      <p className="mt-7 text-lg text-muted">
        We ship to the United States and Canada only. Everything leaves our
        warehouse in Ohio as a domestic parcel, so there is no customs
        paperwork and no duty to pay on arrival.
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
            <td className="p-4">2-4 business days</td>
          </tr>
          <tr>
            <th scope="row" className="p-4 font-medium">Canada</th>
            <td className="p-4">{money(site.shipping.CA.cents)}</td>
            <td className="p-4">{money(site.freeShipping.CA)}</td>
            <td className="p-4">4-8 business days</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-12 space-y-9">
        <section>
          <h2 className="display text-2xl">Dispatch</h2>
          <p className="mt-3 text-muted">
            We pack Monday to Friday. Orders placed before 1pm ET usually ship
            the same day. You will get tracking by email as soon as the label
            is printed.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Restricted items</h2>
          <p className="mt-3 text-muted">
            Meat products — biltong and droëwors — cannot cross into Canada, so
            The Braai Box ships to US addresses only. If you have a Canadian
            address, that box will not appear as an option at checkout.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Returns</h2>
          <p className="mt-3 text-muted">
            Food is perishable, so we cannot take back an opened box. If
            anything arrives damaged, expired or missing, email{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            within 14 days with a photo and we will replace it or refund you.
            No return shipping required.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Wrong address</h2>
          <p className="mt-3 text-muted">
            Email us within two hours of ordering and we can usually correct it
            before the box is packed. After dispatch we cannot reroute a parcel.
          </p>
        </section>
      </div>
    </div>
  );
}
