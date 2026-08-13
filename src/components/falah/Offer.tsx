import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

const offerItems = [
  {
    icon: "clock" as const,
    title: "Durée",
    text: "4 mois pour construire une lecture du Coran fluide et solide.",
    highlight: "4 mois",
  },
  {
    icon: "users" as const,
    title: "Format",
    text: "2 séances de groupe (1h30) + 1 séance individuelle (30 min) par semaine.",
    highlight: "2 groupes + 1 individuel",
  },
  {
    icon: "cap" as const,
    title: "Ce que nous enseignons",
    text: "Les lettres arabes (reconnaissance, écriture, bonne prononciation), la lecture fluide et les règles fondamentales du Tajwid, avec un suivi personnalisé.",
    highlight: "Lecture fluide & Tajwid",
  },
];

export function Offer() {
  return (
    <section id="offre" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Notre offre"
          title="Un parcours de 4 mois pour lire le Coran avec confiance"
          subtitle="Un rythme soutenu et un encadrement personnalisé pour progresser sereinement, du débutant aux règles de Tajwid."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerItems.map((item) => (
            <article
              key={item.title}
              className="surface-card flex flex-col p-7 sm:p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold">
                <Icon name="check" className="h-4 w-4" />
                {item.highlight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
