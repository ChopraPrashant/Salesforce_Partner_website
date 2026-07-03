import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-100 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-navy">{item.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
