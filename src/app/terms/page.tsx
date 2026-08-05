import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you order from Treats From, covering pricing, delivery, allergens, returns and liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 2026">
      <p>
        These terms apply when you use {site.domain} or buy from us. By placing
        an order you agree to them, so please read them first.
      </p>

      <section>
        <h2>Who we are</h2>
        <p>
          {site.name} is an independent importer and retailer of packaged food.
          We are not affiliated with, endorsed by, or acting on behalf of any
          of the brands we stock. All product names and trademarks belong to
          their respective owners.
        </p>
      </section>

      <section>
        <h2>Orders</h2>
        <p>
          An order is an offer to buy. We accept it when we email your
          confirmation. We may decline or cancel an order if an item is out of
          stock, if the price was listed incorrectly, if we cannot legally ship
          to your address, or if we suspect fraud. If we cancel after taking
          payment, we refund you in full.
        </p>
        <p>
          Box contents vary with what is in stock. If an item is unavailable we
          substitute a similar product of equal or greater value rather than
          send the box short.
        </p>
      </section>

      <section>
        <h2>Prices and payment</h2>
        <p>
          Prices are in US dollars and exclude sales tax, which is added at
          checkout where it applies. Payment is taken by Stripe at the time you
          order. We may change prices at any time, but not for an order we have
          already confirmed.
        </p>
      </section>

      <section>
        <h2>Delivery</h2>
        <p>
          We ship to addresses in the United States and Canada only. Delivery
          estimates are estimates, not guarantees, and we are not responsible
          for delays caused by carriers, weather or customs inspection. Risk
          passes to you when the carrier delivers to your address.
        </p>
        <p>
          Some products cannot be shipped to every destination. Meat products
          cannot enter Canada, and those boxes are restricted to US addresses
          at checkout. See our{" "}
          <Link href="/shipping">shipping page</Link> for details.
        </p>
      </section>

      <section>
        <h2>Food safety and allergens</h2>
        <p>
          Our boxes contain branded snacks that commonly include milk, wheat,
          soy, peanuts and tree nuts. We cannot guarantee any box is free of a
          given allergen, and products are packed in a facility that handles
          nuts. Ingredient information is printed on each item, and the
          manufacturer&apos;s packaging is the authoritative source. If you have
          a serious allergy, contact us before ordering.
        </p>
        <p>
          Check the packaging on arrival and do not consume anything past its
          date or with damaged packaging.
        </p>
      </section>

      <section>
        <h2>Returns</h2>
        <p>
          Because we sell food, we cannot accept returns of opened boxes. If
          your order arrives damaged, incomplete, or past its date, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> within 14 days with
          a photo and we will replace it or refund you.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>
          Do not use the site to break the law, interfere with its operation,
          scrape it at scale, or resell our products commercially without
          written agreement. We may refuse service to anyone who does.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          We provide the site as it is. To the fullest extent the law allows,
          our total liability for any order is limited to what you paid for it.
          Nothing in these terms limits liability for death or personal injury
          caused by our negligence, or for fraud. Some states do not allow
          certain limits, so parts of this section may not apply to you.
        </p>
      </section>

      <section>
        <h2>Governing law and changes</h2>
        <p>
          These terms are governed by the laws of the State of the US. We may
          update them, and the version in force is the one published here when
          you order. Questions go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
