import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Icon } from "@/components/falah/Icon";
import { SiteFooter } from "@/components/falah/SiteFooter";
import { SiteHeader } from "@/components/falah/SiteHeader";
import {
  deleteDocument,
  getRessources,
  lockRessources,
  requestDocumentUpload,
  unlockRessources,
  type RessourcesPayload,
  type StoredDoc,
} from "@/lib/gate.functions";

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
  data: Extract<RessourcesPayload, { unlocked: true }>;
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

      <DocumentsSection uploads={data.uploads} admin={data.admin} />
    </div>
  );
}

function formatSize(bytes: number) {
  if (!bytes) return "";
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} Mo` : `${Math.max(1, Math.round(bytes / 1024))} Ko`;
}

function DocumentsSection({
  uploads,
  admin,
}: {
  uploads: StoredDoc[];
  admin: boolean;
}) {
  const router = useRouter();
  const requestUpload = useServerFn(requestDocumentUpload);
  const removeDoc = useServerFn(deleteDocument);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setBusy(true);
    setMessage(null);
    try {
      for (const file of Array.from(files)) {
        if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
          setMessage("Seuls les fichiers PDF sont acceptés.");
          continue;
        }
        if (file.size > 25 * 1024 * 1024) {
          setMessage(`${file.name} dépasse 25 Mo.`);
          continue;
        }
        const res = await requestUpload({ data: { fileName: file.name } });
        if (!res.ok) {
          setMessage("Téléversement refusé. Reconnectez-vous en tant qu'administrateur.");
          continue;
        }
        const { supabase } = await import("@/integrations/supabase/client");
        const { error } = await supabase.storage
          .from("documents")
          .uploadToSignedUrl(res.path, res.token, file, {
            contentType: "application/pdf",
            upsert: true,
          });
        if (error) setMessage(`Échec du téléversement de ${file.name}.`);
      }
      await router.invalidate();
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(name: string) {
    if (!window.confirm(`Supprimer définitivement « ${name} » ?`)) return;
    setBusy(true);
    setMessage(null);
    const res = await removeDoc({ data: { name } });
    if (!res.ok) setMessage("Suppression impossible.");
    await router.invalidate();
    setBusy(false);
  }

  return (
    <section>
      <p className="eyebrow">Documents</p>
      <h2 className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">
        Livrets et supports
      </h2>

      {admin ? (
        <div className="surface-card mt-6 p-6">
          <p className="text-sm font-semibold text-primary">Espace administrateur</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Ajoutez des PDF (25 Mo max). Un fichier portant le même nom remplace
            l'ancien.
          </p>
          <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            {busy ? "Envoi en cours…" : "Téléverser des PDF"}
            <input
              type="file"
              accept="application/pdf"
              multiple
              disabled={busy}
              className="sr-only"
              onChange={(e) => {
                void onFiles(e.currentTarget.files);
                e.currentTarget.value = "";
              }}
            />
          </label>
          {message ? (
            <p className="mt-3 text-sm text-destructive">{message}</p>
          ) : null}
        </div>
      ) : null}

      {uploads.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Aucun document disponible pour le moment.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {uploads.map((doc) => (
            <div key={doc.name} className="surface-card group flex flex-col p-6">
              <span className="inline-flex w-fit rounded-full bg-gold-soft px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-gold">
                PDF
              </span>
              <span className="mt-4 font-display text-lg font-semibold text-primary">
                {doc.title}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {formatSize(doc.size)}
              </span>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Ouvrir
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              {admin ? (
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => void onDelete(doc.name)}
                  className="mt-4 w-fit rounded-full border border-border px-4 py-2 text-xs font-semibold text-destructive transition-colors hover:border-destructive disabled:opacity-60"
                >
                  Supprimer
                </button>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
