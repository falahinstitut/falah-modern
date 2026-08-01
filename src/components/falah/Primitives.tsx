import { Icon } from "./Icon";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-[1.1] text-primary sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function WhatsAppButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 sm:text-base";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5"
      : "border border-border bg-card text-primary hover:border-gold hover:-translate-y-0.5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
      <span className="min-w-0">{children}</span>
      <Icon
        name="arrow"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
