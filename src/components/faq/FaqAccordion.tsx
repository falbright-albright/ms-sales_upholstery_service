"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";
import type { FaqItem } from "@/lib/faq-data";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-tan-light border-y border-tan-light">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-charcoal hover:text-brown md:text-lg"
              >
                {item.question}
                <ChevronDownIcon
                  className={`flex-none text-brown transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-charcoal-soft"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
