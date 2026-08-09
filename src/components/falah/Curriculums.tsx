import { WA_ADVICE, curriculums } from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading, WhatsAppButton } from "./Primitives";

export function Curriculums() {
  return (
    <section id="cursus" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programmes"
          title="Nos 3 cursus, expliqués"
          subtitle="Imaginez lire le Coran couramment, sans hésiter sur chaque mot — c'est ce que nos élèves vivent après quelques mois d'accompagnement. Découvrez le contenu précis de chaque cursus pour choisir celui qui correspond à votre objectif."
        />


        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {curriculums.map((c) => (
            <article
              key={c.title}
              className="surface-card flex flex-col p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {c.subtitle}
                  </p>
                </div>
                <span className="font-display text-3xl font-semibold text-gold/45">
                  {c.number}
                </span>
              </div>

              <dl className="mt-7 space-y-4 border-t border-border pt-6">
                <div>
                  <dt className="eyebrow">À qui ça s'adresse</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                    {c.audience}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">L'objectif</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                    {c.goal}
                  </dd>
                </div>
                {c.duration ? (
                  <div>
                    <dt className="eyebrow">Durée</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                      {c.duration}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <p className="mt-7 text-sm font-semibold text-primary">
                Ce que l'élève maîtrise à la fin du cursus
              </p>
              <ul className="mt-3 space-y-2.5">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex min-w-0 gap-2.5">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                    />
                    <span className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>

              {c.included ? (
                <p className="mt-6 rounded-xl bg-secondary p-4 text-xs leading-relaxed text-foreground/75">
                  <span className="font-semibold text-primary">Inclus : </span>
                  {c.included}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
