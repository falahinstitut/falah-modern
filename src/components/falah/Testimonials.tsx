import { testimonials, videoTestimonials } from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-3.5 w-3.5" filled strokeWidth={1} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avis" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos élèves"
          subtitle="Ils nous font confiance, voici leurs retours."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card break-inside-avoid p-6">
              <Stars />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex min-w-0 items-center gap-3 border-t border-border pt-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-primary">
                    {t.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    Avis vérifié via {t.via}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
              <Icon name="play" className="h-5 w-5" />
            </span>
            <h3 className="min-w-0 font-display text-base font-semibold text-primary">
              Témoignages vidéo de nos élèves
            </h3>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((v, i) => (
              <article key={v.id} className="surface-card overflow-hidden">
                <div className="aspect-video w-full bg-secondary">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={`Témoignage de ${v.name}`}
                    loading={i > 1 ? "lazy" : undefined}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="min-w-0 p-5">
                  <p className="truncate text-sm font-semibold text-primary">
                    {v.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {v.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
