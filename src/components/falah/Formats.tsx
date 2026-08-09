import {
  collectiveFormat,
  individualFormats,
  type Format,
} from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

function FormatCard({ format }: { format: Format }) {
  return (
    <article
      className={`surface-card flex flex-col p-7 sm:p-8 ${
        format.featured ? "border-gold/50 shadow-card" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-primary">
          <Icon
            name={format.kind === "Cours collectif" ? "users" : "person"}
            className="h-3.5 w-3.5"
          />
          {format.kind}
        </span>
        {format.featured ? (
          <span className="rounded-full bg-gold-soft px-3 py-1.5 text-[0.68rem] font-semibold tracking-wide text-primary">
            Le plus complet
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-primary">{format.name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{format.tagline}</p>

      <p className="mt-6 text-sm font-semibold text-emerald">{format.promo}</p>
      <p className="mt-1 text-xs text-muted-foreground">Sans engagement</p>


      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
        {format.features.map((f) => (
          <li key={f} className="flex min-w-0 gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span className="min-w-0 text-sm leading-relaxed text-muted-foreground">
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={format.wa}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
          format.featured
            ? "bg-primary text-primary-foreground shadow-soft hover:shadow-lift"
            : "border border-border bg-card text-primary hover:border-gold"
        }`}
      >
        <Icon name="whatsapp" className="h-4 w-4" />
        Choisir cette offre
      </a>
    </article>
  );
}

export function Formats() {
  return (
    <section
      id="formats"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Formats"
          title="Choisissez votre format de cours"
          subtitle="Quel que soit le programme choisi ci-dessus (Fondations, Langue Arabe ou Mémorisation), il est disponible dans l'un de ces 3 formats."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div className="min-w-0">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-soft text-emerald">
                <Icon name="users" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-base font-semibold text-primary">
                  Cours collectifs
                </h3>
                <p className="truncate text-xs text-muted-foreground">
                  Créneaux fixes hebdomadaires, groupes non mixtes
                </p>
              </div>
            </div>
            <FormatCard format={collectiveFormat} />
          </div>

          <div className="min-w-0">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-soft text-gold">
                <Icon name="person" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-base font-semibold text-primary">
                  Cours individuels
                </h3>
                <p className="truncate text-xs text-muted-foreground">
                  Horaires libres, 7j/7 de 9h à 21h
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {individualFormats.map((f) => (
                <FormatCard key={f.name} format={f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
