import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const TRUSTPILOT_URL = "https://www.trustpilot.com/review/falahinstitut.com";

const reviews = [
  {
    name: "Garba Ousmanou",
    title: "Je recommande vivement !!",
    text: "As salam aleykoum wa rahmatuLlah, je fais des cours de langue arabe avec falah institut, cette année nous avons commencé un livre nommé \"Al-arabiyyah-beyna yaddeyk\" j'ai donc commencé par le premier livre A1 puis le second A2. Mon expérience fut très positive j'ai beaucoup progresser au niveau de l'expression orale surtout, mais aussi au niveau de la compréhension orale et écrite. Pour la première quand il y avait pas cours d'arabe exceptionnellement, j'étais un peu déçu tellement que j'aime leur manière d'enseigner et je prends beaucoup de plaisir avec les élèves et l'enseignant.",
  },
  {
    name: "Chems Meslem",
    title: "Super institut",
    text: "Super institut, les professeurs sont à votre écoute patients et très gentil et les progrès se font voir rapidement. Je remercie l'équipe et recommande fortement.",
  },
  {
    name: "Tony",
    title: "Cours très bien",
    text: "Cours très bien, très bon suivi 👌",
  },
  {
    name: "Myriam",
    title: "Très satisfaite !",
    text: "Je suis vraiment très satisfaite, mon enseignante est à l'écoute, disponible. Elle prend le temps d'expliquer les choses clairement et s'adapte à mon rythme. J'ai vraiment bien progressé grâce à ses cours. Je tiens également à souligner la disponibilité et la réactivité de toute l'équipe de l'institut. Ils sont toujours à l'écoute et répondent rapidement aux demandes. Une très bonne expérience que je recommande sans hésiter !",
  },
  {
    name: "Kira",
    title: "tres belle experience prof tres…",
    text: "tres belle experience prof tres pedagogue formation tres positive",
  },
  {
    name: "Boukhanoufa",
    title: "G appris très vite ce sont des cours sérieux...",
    text: "G appris très vite ce sont des cours sérieux comme la plus part d'ailleurs et les profs sont très à l'écoute de nos besoin en matière d'apprentissage je recommande les cours Fallah institut. Ce sont des cours très sérieux les profs sont très à l'écoute on va à son rythme et on apprend vite je recommande les cours Fallah institut vivement allez y ss hésiter",
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 90}>
              <article className="surface-card flex h-full flex-col p-6">
                <TrustpilotStars />
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {review.title}
                </p>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">
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
