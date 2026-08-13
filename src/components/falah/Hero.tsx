import { CALENDLY_CALL, highlights } from "@/data/falah";

import { Icon } from "./Icon";
import { WhatsAppButton } from "./Primitives";
import heroPattern from "@/assets/hero-pattern.jpg";





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
          <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Envie de lire le{" "}
            <span className="italic text-gold">Coran</span> mais vous ne savez
            pas par où commencer ?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            En 4 mois, apprenez à lire le Coran fluidement et maîtrisez les
            règles fondamentales du Tajwid — en petit groupe, avec un suivi
            personnalisé, pour les hommes, les femmes et les enfants.
          </p>




          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

            <WhatsAppButton href={CALENDLY_CALL} iconName="phone">
              Réservez un appel gratuit
            </WhatsAppButton>

            <a
              href="#cursus"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-gold sm:text-base"
            >
              Voir le programme
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
          <div className="mx-auto w-full max-w-[26rem] sm:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/50 bg-primary/5 shadow-card ring-1 ring-primary/10">
              <img
                src={heroPattern}
                alt="Livre saint du Coran ouvert sur un lutrin en bois, motifs géométriques islamiques dorés et bleu marine"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
