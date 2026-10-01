import { createClient } from "@supabase/supabase-js";
import { COLLECTIONS, Workspace, Base } from "./model";
// Capture callback intent before the SDK consumes the URL fragment.
export const initialAuthMode =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.hash.slice(1)).get("type")
    : null;
export const live = process.env.NEXT_PUBLIC_DATA_MODE === "supabase";
export const supabase =
  live &&
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      )
    : null;
const KEY = "sft-workspace-demo-v1";
export function loadMock(fallback: Workspace): Workspace {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (
      parsed.version !== 1 ||
      !COLLECTIONS.every((k) => Array.isArray(parsed.data?.[k]))
    )
      throw new Error("Formato demo non valido");
    return parsed.data;
  } catch {
    return fallback;
  }
}
export async function loadRemote(): Promise<Workspace> {
  if (!supabase) throw new Error("Configura URL e chiave pubblica Supabase.");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("LOGIN");
  const { data: member, error: memberError } = await supabase
    .from("members")
    .select("active")
    .eq("id", user.id)
    .maybeSingle();
  if (memberError)
    throw new Error(
      `Non riesco a verificare l’abilitazione al CRM (${memberError.code || "connessione"}). Verifica che la migrazione sia stata applicata al progetto collegato.`,
    );
  if (!member)
    throw new Error(
      "Account verificato, ma non ancora abilitato al CRM. Aggiungi questo utente alla tabella members nel progetto Supabase collegato.",
    );
  if (!member.active)
    throw new Error(
      "Il tuo account è registrato nel CRM ma disattivato. Imposta active = true nella tabella members.",
    );
  const results = await Promise.all(
    COLLECTIONS.map(async (k) => {
      const { data, error } = await supabase!
        .from(k)
        .select("*")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return [
        k,
        data?.map((row) =>
          Object.fromEntries(
            Object.entries(row).map(([key, value]) => [
              key,
              value === null &&
              ["team_id", "sponsor_id", "event_id"].includes(key)
                ? ""
                : value,
            ]),
          ),
        ),
      ] as const;
    }),
  );
  return Object.fromEntries(results) as unknown as Workspace;
}
export async function persist(next: Workspace, previous: Workspace) {
  if (!live) {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, data: next }));
    return;
  }
  if (!supabase) throw new Error("Configurazione Supabase mancante.");
  const changes = COLLECTIONS.flatMap((table) => {
    const before = new Map((previous[table] as Base[]).map((r) => [r.id, r]));
    return (next[table] as Base[])
      .filter((r) => before.get(r.id) !== r)
      .map((record) => ({
        table,
        record,
        expected_version: before.get(record.id)?.version ?? null,
      }));
  });
  const { error } = await supabase.rpc("apply_changes", { changes });
  if (error) throw error;
}
export async function uploadDocument(
  file: File,
): Promise<{ url: string; storage_path: string }> {
  if (!live)
    throw new Error(
      "In demo usa un link: il caricamento file si attiva con Supabase.",
    );
  if (!supabase) throw new Error("Configurazione mancante");
  if (file.size > 20 * 1024 * 1024) throw new Error("Il file supera 20 MB.");
  const allowed = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/webp",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];
  if (!allowed.includes(file.type))
    throw new Error("Usa PDF, DOCX, PPTX oppure un’immagine PNG/JPG/WebP.");
  const path =
    crypto.randomUUID() + "/" + file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const { error } = await supabase.storage
    .from("team-documents")
    .upload(path, file);
  if (error) throw error;
  return { url: "", storage_path: path };
}
export async function documentUrl(url: string, path: string) {
  if (!path) return url;
  if (!supabase) throw new Error("Documento non disponibile");
  const { data, error } = await supabase.storage
    .from("team-documents")
    .createSignedUrl(path, 60);
  if (error) throw error;
  return data.signedUrl;
}
