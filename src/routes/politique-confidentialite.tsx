import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { SiteFooter } from "@/components/falah/SiteFooter";

const TITLE = "Politique de confidentialité — Falah Institut";
const DESCRIPTION = "Politique de confidentialité de Falah Institut : comment nous protégeons vos données personnelles.";

export const Route = createFileRoute("/politique-confidentialite")({
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
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            Politique de confidentialité
          </h1>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-primary">
                Qui sommes-nous ?
              </h2>
              <p className="mt-2">
                Falah Institut propose des cours d’arabe et de Coran en ligne.
                La présente politique explique comment nous collectons,
                utilisons et protégeons vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Données collectées
              </h2>
              <p className="mt-2">
                Nous collectons uniquement les données que vous nous transmettez
                volontairement : nom, prénom, numéro de téléphone, adresse
                e-mail et niveau en arabe. Ces données nous servent à vous
                recontacter, à organiser votre évaluation de niveau et à gérer
                votre inscription.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Utilisation des données
              </h2>
              <p className="mt-2">
                Vos données sont utilisées uniquement dans le cadre de la
                relation pédagogique : planification des cours, suivi de votre
                progression et envoi des liens de connexion Zoom. Nous ne
                vendons jamais vos données à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Conservation et sécurité
              </h2>
              <p className="mt-2">
                Vos données sont conservées pendant la durée de votre
                inscription, puis pendant un délai raisonnable à des fins
                administratives. Nous mettons en œuvre des mesures techniques et
                organisationnelles pour protéger vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">Vos droits</h2>
              <p className="mt-2">
                Conformément au Règlement général sur la protection des données
                (RGPD), vous disposez d’un droit d’accès, de rectification, de
                suppression et de portabilité de vos données. Pour exercer ces
                droits, contactez-nous via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary">
                Cookies et traceurs
              </h2>
              <p className="mt-2">
                Le site utilise uniquement des cookies techniques nécessaires à
                son bon fonctionnement. Aucun cookie publicitaire ou de
                traçage tiers n’est déposé sans votre consentement.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
