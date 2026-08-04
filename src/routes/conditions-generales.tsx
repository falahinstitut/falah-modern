import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { SiteFooter } from "@/components/falah/SiteFooter";

const TITLE = "Conditions générales de vente — Falah Institut";
const DESCRIPTION = "Conditions générales de vente de Falah Institut : modalités d’inscription, paiement et annulation.";

export const Route = createFileRoute("/conditions-generales")({
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
  component: ConditionsGenerales,
});

function ConditionsGenerales() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            Conditions générales de vente
          </h1>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-primary">
                Objet
              </h2>
              <p className="mt-2">
                Les présentes conditions générales de vente régissent la
                fourniture de cours d’arabe et de Coran en ligne par Falah
                Institut, accessibles sur inscription via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Inscription
              </h2>
              <p className="mt-2">
                L’inscription se fait par message WhatsApp. Après validation de
                votre niveau et de vos disponibilités, vous recevez les
                informations de paiement et les liens de connexion aux cours.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Tarifs et paiement
              </h2>
              <p className="mt-2">
                Les tarifs en vigueur sont ceux affichés sur le site au moment de
                l’inscription. Le paiement s’effectue mensuellement, en début de
                mois. L’offre « 1er cours à 1 €, pour découvrir notre méthode avant
                de vous engager » s’applique au premier cours uniquement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Modalités des cours
              </h2>
              <p className="mt-2">
                Les cours ont lieu en ligne via Zoom. L’élève est responsable de
                sa connexion internet et de son équipement. En cas d’absence de
                l’élève, le cours n’est pas reporté sauf accord préalable de
                l’enseignant.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Résiliation
              </h2>
              <p className="mt-2">
                L’abonnement est sans engagement. Vous pouvez arrêter à tout
                moment en nous informant avant la prochaine échéance de
                paiement. Aucun remboursement n’est effectué pour un mois déjà
                commencé.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Modification des conditions
              </h2>
              <p className="mt-2">
                Falah Institut se réserve le droit de modifier les présentes
                conditions à tout moment. Les conditions applicables sont celles
                en vigueur au moment de l’inscription.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
