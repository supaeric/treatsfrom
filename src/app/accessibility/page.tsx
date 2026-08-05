import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Our commitment to keeping treatsfrom.com usable for everyone, and how to tell us when something is not working.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" updated="August 2026">
      <p>
        We want {site.domain} to be usable by everyone, including people who
        browse with a screen reader, a keyboard, or magnification.
      </p>

      <section>
        <h2>What we do</h2>
        <ul>
          <li>We aim to meet WCAG 2.1 Level AA</li>
          <li>Every page works without a mouse, and focus is always visible</li>
          <li>Images carry descriptive alternative text</li>
          <li>Animation is reduced automatically if your device asks for it</li>
          <li>Text and background colours are checked for contrast</li>
        </ul>
      </section>

      <section>
        <h2>Where we fall short</h2>
        <p>
          We test as we build, but we are a small team and we will miss things.
          If part of the site is hard to use, we would rather hear about it than
          not.
        </p>
      </section>

      <section>
        <h2>How the site is built</h2>
        <p>
          Pages are ordinary HTML rendered on the server, so they work before
          any JavaScript loads and remain readable if it fails. Headings run in
          order and describe the section beneath them rather than being chosen
          for size. Interactive controls are real buttons and links, which
          means they work with a keyboard, a screen reader and browser
          shortcuts without us reimplementing that behaviour.
        </p>
        <p>
          The cart and quantity controls carry labels naming the product they
          affect, so a screen reader announces which item is changing rather
          than reading an unlabelled plus or minus. Colour is never the only
          way information is conveyed, and text meets the contrast ratio WCAG
          sets for its size.
        </p>
      </section>

      <section>
        <h2>Tell us</h2>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> with the page
          and what went wrong. We aim to reply within five business days, and if
          something blocks you from ordering we will take the order by email in
          the meantime.
        </p>
      </section>
    </LegalPage>
  );
}
