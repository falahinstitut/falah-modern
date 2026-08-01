import { WA_GENERAL, WA_LEVEL_TEST, highlights } from "@/data/falah";
import { HeroVideo } from "./HeroVideo";
import { Icon } from "./Icon";
import { WhatsAppButton } from "./Primitives";


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-60" />
      <div
        className="pointer-events-none absolute -left-40 -top-32 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold-soft), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-[22rem] w-[22rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-emerald-soft), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-wide text-primary">
            <Icon name="star" className="h-3.5 w-3.5 text-gold" filled strokeWidth={1} />
            −50% sur votre 1er mois
          </span>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.03] text-primary sm:text-6xl lg:text-[4.25rem]">
            Apprenez l'
            <span className="italic text-gold">Arabe</span>
            <br />et le <span className="italic text-gold">Coran</span> en
            ligne
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des cours pour les hommes, les femmes et les enfants, en petit
            groupe ou individuels, avec des enseignants qualifiés et
            bienveillants. Depuis chez vous, à votre rythme, dès aujourd'hui.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton href={WA_GENERAL}>
              Démarrer sur WhatsApp
            </WhatsAppButton>
            <a
              href="#formats"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-gold sm:text-base"
            >
              Voir les offres
            </a>
          </div>

          <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex min-w-0 items-center gap-2.5 text-sm text-muted-foreground"
              >
                <Icon name="check" className="h-4 w-4 shrink-0 text-emerald" />
                <span className="min-w-0">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0">
          <HeroVideo />


          <a
            href={WA_LEVEL_TEST}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card mt-4 flex items-center justify-between gap-4 p-4 lg:absolute lg:-left-8 lg:top-10 lg:mt-0 lg:w-64 lg:flex-col lg:items-start"
          >
            <div className="min-w-0">
              <p className="eyebrow">Gratuit — 15 min</p>
              <p className="mt-1 font-display text-sm font-semibold leading-snug text-primary">
                Évaluer mon niveau avec un enseignant
              </p>
            </div>
            <Icon name="arrow" className="h-5 w-5 shrink-0 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
