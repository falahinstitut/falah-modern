import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

const parcoursItems = [
  {
    icon: "clock" as const,
    label: "Durée",
    text: "4 mois",
  },
  {
    icon: "users" as const,
    label: "Format",
    text: "2 séances de groupe (1h30) + 1 séance individuelle (30 min) par semaine",
  },
  {
    icon: "target" as const,
    label: "À qui ça s'adresse",
    text: "Du débutant complet jusqu'à la lecture fluide et autonome avec les règles fondamentales du Tajwid",
  },
  {
    icon: "cap" as const,
    label: "Ce que nous enseignons",
    text: "Les lettres arabes (reconnaissance, écriture, bonne prononciation), la lecture fluide, les règles fondamentales du Tajwid, avec un suivi personnalisé",
  },
];

export function Curriculums() {
  return (
    <section id="cursus" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Notre parcours"
          subtitle="Un parcours unique de 4 mois pour apprendre à lire le Coran avec confiance et maîtriser les bases du Tajwid."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {parcoursItems.map((item) => (
            <article
              key={item.label}
              className="surface-card flex flex-col p-7 sm:p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
                {item.label}
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
