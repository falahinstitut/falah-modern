import { Link } from "@tanstack/react-router";
import { WA_GENERAL } from "@/data/falah";
import logo from "@/assets/logo.jpeg";


export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Falah Institut"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-primary">
              Falah Institut
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Cours d'arabe et de Coran en ligne, 7j/7 de 9h à 21h.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href="#cursus" className="transition-colors hover:text-primary">
            Cursus
          </a>
          <a href="#formats" className="transition-colors hover:text-primary">
            Formats
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </a>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Falah Institut. Tous droits réservés.
      </p>
    </footer>
  );
}
