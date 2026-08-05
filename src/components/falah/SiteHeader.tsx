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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = scrolled
    ? "glass-bar fixed inset-x-0 top-0 z-50"
    : "border-b border-transparent fixed inset-x-0 top-0 z-50";

  return (
    <>
      <header className={headerClass}>
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
          {/* Logo + Texte */}
          <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={logo}
              alt="Falah Institut"
              className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-[0.8rem] font-semibold leading-tight text-primary sm:text-[0.95rem]">
                Falah Institut
              </span>
              <span className="block truncate text-[0.6rem] tracking-wide text-muted-foreground sm:text-[0.7rem]">
                Arabe et Coran en ligne
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

            <button
              type="button"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full text-primary md:hidden"
            >
              <Icon
                name={mobileOpen ? "close" : "menu"}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed inset-x-0 top-[4.5rem] z-40 mx-5 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 md:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <hr className="my-2 border-border" />
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Nous écrire sur WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
