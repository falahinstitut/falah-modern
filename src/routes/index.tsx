import { createFileRoute } from "@tanstack/react-router";
import { Advantages } from "@/components/falah/Advantages";
import { Curriculums } from "@/components/falah/Curriculums";
import { Faq } from "@/components/falah/Faq";
import { FinalCta } from "@/components/falah/FinalCta";
import { Formats } from "@/components/falah/Formats";
import { Hero } from "@/components/falah/Hero";
import { SiteFooter } from "@/components/falah/SiteFooter";
import { SiteHeader } from "@/components/falah/SiteHeader";
import { Testimonials } from "@/components/falah/Testimonials";
import { WhatsAppFab } from "@/components/falah/WhatsAppFab";

const TITLE = "Falah Institut — Cours d'arabe et de Coran en ligne";
const DESCRIPTION =
  "Cours d'arabe et de Coran en ligne via Zoom pour hommes, femmes et enfants : cursus débutant, langue arabe et mémorisation, en groupe ou individuel, 7j/7 de 9h à 21h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-0">
      <SiteHeader />
      <main>
        <h1 className="sr-only">
          Falah Institut — cours d'arabe et de Coran en ligne
        </h1>
        <Hero />
        <Advantages />
        <Curriculums />
        <Formats />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
