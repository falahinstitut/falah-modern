import { createFileRoute } from "@tanstack/react-router";
import { Advantages } from "@/components/falah/Advantages";
import { Curriculums } from "@/components/falah/Curriculums";
import { Faq } from "@/components/falah/Faq";
import { FloatingLetters } from "@/components/falah/FloatingLetters";
import { FinalCta } from "@/components/falah/FinalCta";
import { Formats } from "@/components/falah/Formats";
import { Hero } from "@/components/falah/Hero";
import { SiteFooter } from "@/components/falah/SiteFooter";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { Testimonials } from "@/components/falah/Testimonials";
import { TrustpilotSection } from "@/components/falah/TrustpilotSection";
import { Reveal } from "@/components/falah/Reveal";
import { WhatsAppFab } from "@/components/falah/WhatsAppFab";

const TITLE = "Falah Institut — Cours d'arabe et de Coran en ligne";
const DESCRIPTION =
  "Cours d'arabe et de Coran en ligne via Zoom pour hommes, femmes et enfants : cursus débutant, langue arabe et mémorisation, en groupe ou individuel, 7j/7 de 9h à 21h.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Falah Institut",
  description: DESCRIPTION,
  url: "https://falahinstitut.com",
  telephone: "+33 6 51 96 97 50",
  areaServed: "FR",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cours d’arabe et de Coran",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Cours collectif d’arabe et de Coran",
          description: "Cours en petit groupe, 2h/semaine, groupes non mixtes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Cours individuel d’arabe et de Coran",
          description: "Cours privés 1h ou 2h/semaine, horaires flexibles.",
        },
      },
    ],
  },
};

const CANONICAL_URL = "https://falahinstitut.com";
const OG_IMAGE_URL = "https://falahinstitut.com/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Falah Institut — Cours d'arabe et de Coran en ligne" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(SCHEMA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen pb-20 sm:pb-0">
      <FloatingLetters />
      <SiteHeader />
      <main>

        <Hero />
        <Reveal>
          <Advantages />
        </Reveal>
        <Reveal>
          <Curriculums />
        </Reveal>
        <Reveal>
          <Formats />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>
      <TrustpilotSection />
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
