import { useEffect, useState } from "react";
import { WA_GENERAL } from "@/data/falah";
import logo from "@/assets/logo.jpeg";
import { Icon } from "./Icon";

const links = [
  { href: "#cursus", label: "Programmes" },
  { href: "#formats", label: "Tarifs" },
  { href: "#avis", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = scrolled
    ? "glass-bar fixed inset-x-0 top-0 z-50"
    : "border-b border-transparent fixed inset-x-0 top-0 z-50";

  return (
    <header className={headerClass}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
        
        {/* Logo + Texte */}
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img 
            src="/logo.jpeg" 
            alt="Falah Institut" 
            className="h-10 w-10 rounded-full object-cover shrink-0" 
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] font-semibold leading-tight text-primary">
              Falah Institut
            </span>
            <span className="block truncate text-[0.7rem] tracking-wide text-muted-foreground">
              Arabe & Coran en ligne
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map(function (l) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
          
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift sm:text-sm"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span className="hidden sm:inline">Nous écrire</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
