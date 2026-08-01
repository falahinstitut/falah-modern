import { useState } from "react";
import { faq } from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Vous vous posez des questions ?"
          subtitle="Voici les réponses aux questions les plus fréquentes de nos futurs élèves."
        />

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="min-w-0 font-display text-[0.95rem] font-semibold leading-snug text-primary sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden px-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
