import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { SiteFooter } from "@/components/falah/SiteFooter";

const TITLE = "Mentions légales — Falah Institut";
const DESCRIPTION = "Mentions légales de Falah Institut, cours d’arabe et de Coran en ligne.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            Mentions légales
          </h1>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-primary">
                Éditeur du site
              </h2>
              <p className="mt-2">
                Le site Falah Institut est édité par Falah Institut, dont le
                siège social est situé en France.
              </p>
              <p className="mt-2">
                Contact : via WhatsApp au numéro affiché sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Directeur de la publication
              </h2>
              <p className="mt-2">Le directeur de la publication est Falah Institut.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">Hébergement</h2>
              <p className="mt-2">
                Le site est hébergé par Lovable, dont les serveurs sont situés
                dans l’Union européenne.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Propriété intellectuelle
              </h2>
              <p className="mt-2">
                L’ensemble des contenus (textes, images, graphismes, logo, icônes,
                etc.) présents sur ce site sont la propriété exclusive de Falah
                Institut, sauf mention contraire. Toute reproduction,
                représentation, modification ou adaptation, totale ou partielle,
                est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Données personnelles
              </h2>
              <p className="mt-2">
                Pour plus d’informations sur la collecte et le traitement de vos
                données personnelles, consultez notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-primary underline underline-offset-2 hover:text-gold"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
