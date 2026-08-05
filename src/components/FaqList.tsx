import type { Faq } from "@/content/types";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y-2 divide-ink border-y-2 border-ink">
      {faqs.map((faq) => (
        <details key={faq.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <span className="display text-xl sm:text-2xl">{faq.q}</span>
            <span
              aria-hidden
              className="font-stamp mt-1 shrink-0 text-xl transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
