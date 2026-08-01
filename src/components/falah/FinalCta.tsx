import { WA_GENERAL } from "@/data/falah";
import { Icon } from "./Icon";

export function FinalCta() {
  return (
    <section className="relative px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-emerald), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow">Inscription en 1 message</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl">
            Prêt(e) à commencer votre apprentissage ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
            Rejoignez nos élèves et progressez dans une ambiance sérieuse et
            bienveillante. Un simple message suffit pour démarrer.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold text-whatsapp-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:text-base"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
