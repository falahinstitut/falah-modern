import { WA_GENERAL } from "@/data/falah";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { href: "#cursus", label: "Programmes" },
  { href: "#avis", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/conditions-generales", label: "CGV" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
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
                Lecture du Coran & Tajwid
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Apprenez à lire le Coran et maîtrisez les règles du Tajwid en ligne, en petit groupe, avec des enseignants qualifiés.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Légal */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Informations
          </p>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp transition-colors hover:opacity-80"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <span className="text-sm text-muted-foreground">
                Disponible 7j/7 de 9h à 21h
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Falah Institut. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
