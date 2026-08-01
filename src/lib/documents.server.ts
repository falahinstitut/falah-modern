import { supabaseAdmin } from "@/integrations/supabase/client.server";

import { DOCUMENTS_BUCKET, titleFromFileName } from "./gate.server";
import type { StoredDoc } from "./gate.functions";

const SIGNED_READ_TTL = 60 * 60; // 1 h

export async function listDocuments(): Promise<StoredDoc[]> {
  const { data, error } = await supabaseAdmin.storage
    .from(DOCUMENTS_BUCKET)
    .list("", { limit: 100, sortBy: { column: "name", order: "asc" } });
  if (error || !data) return [];

  const files = data.filter((f) => f.name.toLowerCase().endsWith(".pdf"));
  const signed = await Promise.all(
    files.map(async (file) => {
      const { data: url } = await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .createSignedUrl(file.name, SIGNED_READ_TTL);
      return {
        name: file.name,
        title: titleFromFileName(file.name),
        size: Number(file.metadata?.["size"] ?? 0),
        updatedAt: file.updated_at ?? null,
        url: url?.signedUrl ?? "",
      } satisfies StoredDoc;
    }),
  );
  return signed.filter((doc) => doc.url);
}

export async function createSignedUpload(name: string) {
  const { data, error } = await supabaseAdmin.storage
    .from(DOCUMENTS_BUCKET)
    .createSignedUploadUrl(name, { upsert: true });
  if (error || !data) {
    return { ok: false as const, error: error?.message ?? "upload-failed" };
  }
  return { ok: true as const, path: data.path, token: data.token, name };
}

export async function removeDocument(name: string) {
  const { error } = await supabaseAdmin.storage.from(DOCUMENTS_BUCKET).remove([name]);
  if (error) return { ok: false as const, error: error.message };
  return { ok: true as const };
}
