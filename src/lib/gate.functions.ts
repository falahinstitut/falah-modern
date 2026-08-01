import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";

import type { ResourceDoc, ZoomRoom } from "@/data/ressources";

export type RessourcesPayload =
  | { unlocked: false }
  | { unlocked: true; zoomRooms: ZoomRoom[]; documents: ResourceDoc[] };

export const unlockRessources = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => ({
    password: String(data?.password ?? "").slice(0, 200),
  }))
  .handler(async ({ data }) => {
    const { sessionConfig, passwordMatches } = await import("./gate.server");
    const expected = process.env["SITE_PASSWORD"];
    if (!expected) return { ok: false as const };
    if (!passwordMatches(data.password, expected)) return { ok: false as const };

    const session = await useSession<{ unlocked?: boolean }>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const lockRessources = createServerFn({ method: "POST" }).handler(async () => {
  const { sessionConfig } = await import("./gate.server");
  const session = await useSession<{ unlocked?: boolean }>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const getRessources = createServerFn({ method: "GET" }).handler(
  async (): Promise<RessourcesPayload> => {
    const { sessionConfig } = await import("./gate.server");
    const { documents, zoomRooms } = await import("@/data/ressources");
    const session = await useSession<{ unlocked?: boolean }>(sessionConfig());
    if (!session.data.unlocked) return { unlocked: false };
    return { unlocked: true, zoomRooms, documents };
  },
);
