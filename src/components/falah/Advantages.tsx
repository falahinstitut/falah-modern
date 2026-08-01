import { advantages } from "@/data/falah";
import { Icon } from "./Icon";
import { SectionHeading } from "./Primitives";

export function Advantages() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Une pédagogie qui fait la différence"
          subtitle="Tout est pensé pour que vous progressiez sereinement, où que vous soyez."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <article key={a.title} className="surface-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                <Icon name={a.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {a.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {a.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
