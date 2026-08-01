import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";

import type { ZoomRoom } from "@/data/ressources";

export type StoredDoc = {
  name: string;
  title: string;
  size: number;
  updatedAt: string | null;
  url: string;
};

export type RessourcesPayload =
  | { unlocked: false }
  | {
      unlocked: true;
      admin: boolean;
      zoomRooms: ZoomRoom[];
      uploads: StoredDoc[];
    };

async function getSession() {
  const { sessionConfig } = await import("./gate.server");
  return useSession<{ unlocked?: boolean; admin?: boolean }>(sessionConfig());
}

export const unlockRessources = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => ({
    password: String(data?.password ?? "").slice(0, 200),
  }))
  .handler(async ({ data }) => {
    const { passwordMatches } = await import("./gate.server");
    const expected = process.env["SITE_PASSWORD"];
    const adminPassword = process.env["ADMIN_PASSWORD"];
    const session = await getSession();

    if (adminPassword && passwordMatches(data.password, adminPassword)) {
      await session.update({ unlocked: true, admin: true });
      return { ok: true as const, admin: true };
    }
    if (expected && passwordMatches(data.password, expected)) {
      await session.update({ unlocked: true, admin: false });
      return { ok: true as const, admin: false };
    }
    return { ok: false as const, admin: false };
  });

export const lockRessources = createServerFn({ method: "POST" }).handler(async () => {
  const session = await getSession();
  await session.clear();
  return { ok: true as const };
});

export const getRessources = createServerFn({ method: "GET" }).handler(
  async (): Promise<RessourcesPayload> => {
    const { zoomRooms } = await import("@/data/ressources");
    const session = await getSession();
    if (!session.data.unlocked) return { unlocked: false };

    const { listDocuments } = await import("./documents.server");
    return {
      unlocked: true,
      admin: Boolean(session.data.admin),
      zoomRooms,
      uploads: await listDocuments(),
    };
  },
);

/** Renvoie une URL d'upload signée (admin uniquement). Le fichier part directement vers le stockage. */
export const requestDocumentUpload = createServerFn({ method: "POST" })
  .inputValidator((data: { fileName: string }) => ({
    fileName: String(data?.fileName ?? "").slice(0, 200),
  }))
  .handler(async ({ data }) => {
    const session = await getSession();
    if (!session.data.admin) return { ok: false as const, error: "unauthorized" };

    const { safePdfName } = await import("./gate.server");
    const name = safePdfName(data.fileName);
    if (!name) return { ok: false as const, error: "invalid-name" };

    const { createSignedUpload } = await import("./documents.server");
    return createSignedUpload(name);
  });

export const deleteDocument = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string }) => ({
    name: String(data?.name ?? "").slice(0, 200),
  }))
  .handler(async ({ data }) => {
    const session = await getSession();
    if (!session.data.admin) return { ok: false as const, error: "unauthorized" };

    const { safePdfName } = await import("./gate.server");
    const name = safePdfName(data.name);
    if (!name) return { ok: false as const, error: "invalid-name" };

    const { removeDocument } = await import("./documents.server");
    return removeDocument(name);
  });
