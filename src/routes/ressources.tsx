import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Icon } from "@/components/falah/Icon";
import { SiteFooter } from "@/components/falah/SiteFooter";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { getRessources, lockRessources, unlockRessources } from "@/lib/gate.functions";

const TITLE = "Espace élèves — Falah Institut";
const DESCRIPTION =
  "Espace réservé aux élèves de Falah Institut : liens Zoom récurrents et documents (livret d'accueil, règlement intérieur, supports de cours).";

export const Route = createFileRoute("/ressources")({
  loader: () => getRessources(),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RessourcesPage,
});

function RessourcesPage() {
  const data = Route.useLoaderData();

  return (
    <div className="relative min-h-screen pb-20 sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">Espace élèves</p>
          <h1 className="mt-3 text-3xl font-semibold leading-[1.1] text-primary sm:text-4xl md:text-[2.75rem]">
            Vos ressources de cours
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Retrouvez ici les liens Zoom de vos cours récurrents ainsi que les documents
            de l'institut.
          </p>

          {data.unlocked ? <Unlocked data={data} /> : <UnlockForm />}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function UnlockForm() {
  const router = useRouter();
  const unlock = useServerFn(unlockRessources);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    setPending(true);
    setError(false);
    const { ok } = await unlock({ data: { password } });
    setPending(false);
    if (ok) await router.invalidate();
    else setError(true);
  }

  return (
    <div className="mt-10 max-w-md">
      <div className="surface-card p-6 sm:p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold">
          <Icon name="check" className="h-5 w-5" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-primary">Accès protégé</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Saisissez le mot de passe communiqué par l'institut pour accéder à vos
          ressources.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <label htmlFor="password" className="sr-only">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Mot de passe"
            className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
          />
          {error ? (
            <p className="px-2 text-sm text-destructive">
              Mot de passe incorrect. Réessayez ou contactez-nous sur WhatsApp.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60"
          >
            {pending ? "Vérification…" : "Entrer"}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Unlocked({
  data,
}: {
  data: Extract<ReturnType<typeof Route.useLoaderData>, { unlocked: true }>;
}) {
  const router = useRouter();
  const lock = useServerFn(lockRessources);

  return (
    <div className="mt-12 space-y-16">
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Liens Zoom récurrents</p>
            <h2 className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">
              Rejoindre vos cours
            </h2>
          </div>
          <button
            onClick={async () => {
              await lock({});
              await router.invalidate();
            }}
            className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-gold"
          >
            Se déconnecter
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {data.zoomRooms.map((room) => (
            <a
              key={room.title}
              href={room.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card group flex flex-col p-6"
            >
              <span className="eyebrow">{room.audience}</span>
              <span className="mt-2 font-display text-lg font-semibold text-primary">
                {room.title}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{room.schedule}</span>
              {room.meetingId ? (
                <span className="mt-3 text-xs text-muted-foreground">
                  ID : {room.meetingId}
                  {room.passcode ? ` · Code : ${room.passcode}` : ""}
                </span>
              ) : null}
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
                Rejoindre la réunion
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <p className="eyebrow">Documents</p>
        <h2 className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">
          Livrets et supports
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {data.documents.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card group flex flex-col p-6"
            >
              <span className="inline-flex w-fit rounded-full bg-gold-soft px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-gold">
                {doc.kind}
              </span>
              <span className="mt-4 font-display text-lg font-semibold text-primary">
                {doc.title}
              </span>
              <span className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {doc.description}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ouvrir
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
