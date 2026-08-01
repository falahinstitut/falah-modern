import { createHash, timingSafeEqual } from "node:crypto";

export type GateSession = { unlocked?: boolean; admin?: boolean };

export const DOCUMENTS_BUCKET = "documents";

export function sessionConfig() {
  return {
    password: process.env["SESSION_SECRET"]!,
    name: "falah-espace-eleves",
    maxAge: 60 * 60 * 24 * 30,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

export function passwordMatches(input: string, expected: string) {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

/** Nom de fichier sûr : pas de chemin, pas de caractères exotiques, .pdf imposé. */
export function safePdfName(name: string) {
  const base = name.split(/[\\/]/).pop() ?? "";
  const cleaned = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\.pdf$/i, "")
    .replace(/[^a-zA-Z0-9 _-]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return cleaned ? `${cleaned}.pdf` : "";
}

export function titleFromFileName(name: string) {
  const raw = name.replace(/\.pdf$/i, "").replace(/[-_]+/g, " ").trim();
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}
