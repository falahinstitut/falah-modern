import { videoTestimonials } from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";
import { LazyVideo } from "./LazyVideo";

export function Testimonials() {
  return (
    <section id="avis" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos élèves"
          subtitle="Ils nous font confiance, voici leurs retours en vidéo."
        />

        <div className="mt-14">
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
              <Reveal key={v.id} delay={(i % 3) * 90}>
                <article className="surface-card overflow-hidden">
                  <div className="aspect-video w-full bg-secondary">
                    <LazyVideo id={v.id} title={`Témoignage de ${v.name}`} />
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
