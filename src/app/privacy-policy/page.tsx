import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Treats From collects, uses and protects your personal information, including your rights under US and Canadian privacy law.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026">
      <p>
        This policy explains what information {site.name} collects when you use{" "}
        {site.domain}, why we collect it, and what control you have over it. It
        applies to everyone who visits the site or places an order with us.
      </p>

      <section>
        <h2>Information we collect</h2>
        <p>When you place an order we collect:</p>
        <ul>
          <li>Your name, email address and phone number</li>
          <li>Your shipping and billing address</li>
          <li>The contents of your order and any gift note you write</li>
        </ul>
        <p>
          We do not collect or store your card number. Payments are handled
          entirely by Stripe, and your card details go to Stripe rather than to
          us. Stripe returns only a confirmation and the last four digits.
        </p>
        <p>
          When you browse the site we also receive standard technical
          information such as your IP address, browser type, referring page and
          the pages you visit. This is collected automatically by our hosting
          provider.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To process, pack and deliver your order</li>
          <li>To send order confirmations, tracking and delivery updates</li>
          <li>To answer questions and handle returns or replacements</li>
          <li>To detect and prevent fraudulent transactions</li>
          <li>To meet our tax, customs and food import record-keeping duties</li>
          <li>
            To send marketing email, but only if you have asked us to. Every
            marketing message has an unsubscribe link.
          </li>
        </ul>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>
          We do not sell your personal information, and we do not share it for
          cross-context behavioural advertising. We share only what is needed
          with:
        </p>
        <ul>
          <li>Stripe, to take payment and prevent fraud</li>
          <li>Shipping carriers, to deliver your order</li>
          <li>Our hosting and email providers, to run the site and send receipts</li>
          <li>
            Government agencies or law enforcement, where the law requires it
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We use a small number of cookies and similar storage. Some are
          necessary for the site to work at all, such as remembering the
          contents of your cart. Others help us understand which pages people
          find useful. You can block cookies in your browser settings, though
          the cart will stop working if you do.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          Order records are kept for seven years to meet tax and food import
          record-keeping requirements. Marketing contact details are kept until
          you unsubscribe. Technical logs are kept for a short period and then
          deleted.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to see the
          personal information we hold about you, correct it, delete it, or ask
          us to stop using it for marketing. Residents of California, Colorado,
          Connecticut, Utah and Virginia have specific rights under state
          privacy law, including the right not to be discriminated against for
          exercising them. Canadian residents have equivalent rights under
          PIPEDA.
        </p>
        <p>
          To make a request, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond
          within 45 days. We may need to verify your identity first, usually by
          confirming details of a recent order.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect their personal information. If you believe a child
          has given us information, email us and we will delete it.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          The site runs over HTTPS and payment data is handled by a PCI
          compliant provider. No system is perfectly secure, but we take
          reasonable steps to protect what we hold.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          If we change this policy we will update the date at the top of the
          page. Questions go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>, or see our{" "}
          <Link href="/terms">terms of service</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
