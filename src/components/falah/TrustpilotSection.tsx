import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const TRUSTPILOT_URL = "https://www.trustpilot.com/review/falahinstitut.com";

const reviews = [
  {
    name: "Tony",
    text: "Cours très bien, très bon suivi",
  },
  {
    name: "Chems Meslem",
    text: "Les professeurs sont à l'écoute, patients et très gentils",
  },
  {
    name: "Kira",
    text: "Très belle expérience, prof très pédagogue, formation très positive",
  },
  {
    name: "Boukhanoufa",
    text: "Les profs sont très à l'écoute de nos besoins d'apprentissage",
  },
  {
    name: "Myriam",
    text: "Mon enseignante est à l'écoute et disponible, j'ai vraiment bien progressé",
  },
  {
    name: "Nehla",
    text: "Un cadre respectueux, sérieux et serein, on apprend en toute quiétude",
  },
];


function TrustpilotStars({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-emerald ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" filled strokeWidth={1} />
      ))}
    </div>
  );
}

export function TrustpilotSection() {
  return (
    <section className="relative scroll-mt-24 border-t border-border bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="min-w-0">
              <a
                href={TRUSTPILOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:text-emerald"
              >
                <span className="text-emerald">★</span>
                Avis Trustpilot
              </a>
            </div>

            <a
              href={TRUSTPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 transition-colors hover:text-emerald"
            >
              Voir tous nos avis sur Trustpilot
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 90}>
              <article className="surface-card flex h-full flex-col p-6">
                <TrustpilotStars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{review.text}”
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-primary">
                  {review.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

