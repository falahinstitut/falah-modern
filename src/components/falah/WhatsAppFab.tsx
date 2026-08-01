import { WA_GENERAL } from "@/data/falah";
import { Icon } from "./Icon";

export function WhatsAppFab() {
  return (
    <>
      {/* Mobile: fixed full-width bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/90 p-3 backdrop-blur-md sm:hidden">
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-card"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Écrire sur WhatsApp
        </a>
      </div>

      {/* Desktop: floating action button */}
      <a
        href={WA_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Falah Institut sur WhatsApp"
        className="fixed bottom-7 right-7 z-50 hidden h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-300 hover:scale-105 sm:grid"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </>
  );
}
