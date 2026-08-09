import { WA_GENERAL, highlights } from "@/data/falah";
import heroPattern from "@/assets/hero-pattern.jpg";
import { Icon } from "./Icon";
import { WhatsAppButton } from "./Primitives";
import { LazyVideo } from "./LazyVideo";



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
          <p className="max-w-md text-sm font-semibold leading-snug text-gold sm:text-base">
            1 ère séance à 1 €, pour découvrir nos cours avant de vous engager.
          </p>

          <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Vous repoussez l'apprentissage de l'
            <span className="italic text-gold">Arabe</span> et du{" "}
            <span className="italic text-gold">Coran</span> depuis trop
            longtemps ?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des cours pour les hommes, les femmes et les enfants, en petit
            groupe ou individuels, avec des enseignants qualifiés et
            bienveillants. Depuis chez vous, à votre rythme, dès aujourd'hui.
          </p>

          <div className="mt-8 mx-auto w-full max-w-[19rem] sm:max-w-[21rem]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-gold/50 bg-primary/5 shadow-card ring-1 ring-primary/10">
              <LazyVideo id="qF54f6sBMEQ" title="Présentation de Falah Institut" />
            </div>
          </div>

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
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img
              src={heroPattern}
              alt="Motif géométrique islamique abstrait en bleu marine, or et vert émeraude"
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
              width={1200}
              height={800}
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
