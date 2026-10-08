import { createHash, randomUUID } from 'node:crypto';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { googleDriveToken, requireDriveMember, ServerDriveError } from './drive-server';
import { RECRUITING_COOKIE, verifyUnlock } from './recruiting-security';
import { RECRUITING_SHEET, RECRUITING_TAB, parseCandidate, type RecruitingData, type Candidate, type RecruitingActivity, type RecruitingInterview } from './recruiting';
import { SEASONS } from './model';

export function recruitingAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new ServerDriveError('Configura la chiave server Supabase per attivare il recruiting.', 503);
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
export async function recruitingMember(request: Request) {
  const client = await requireDriveMember(request);
  const token = (request.headers.get('authorization') || '').slice(7);
  const { data: { user }, error } = await client.auth.getUser(token);
  if (error || !user) throw new ServerDriveError('Sessione scaduta. Accedi di nuovo.', 401);
  return { user, token };
}
export function recruitingSecrets() {
  const hash = process.env.RECRUITING_PASSWORD_HASH, secret = process.env.RECRUITING_SESSION_SECRET;
  if (!hash || !secret || secret.length < 32) throw new ServerDriveError('La password recruiting deve essere configurata dal responsabile.', 503);
  return { hash, secret };
}
export async function requireRecruiting(request: Request) {
  const member = await recruitingMember(request);
  const { hash, secret } = recruitingSecrets();
  const cookie = (await cookies()).get(RECRUITING_COOKIE)?.value || '';
  if (!verifyUnlock(cookie, member.user.id, member.token, hash, secret)) throw new ServerDriveError('Sblocca il recruiting con la password.', 423);
  return { ...member, admin: recruitingAdmin() };
}
export async function readAll(client: SupabaseClient, table: string, column = 'id', value?: string) {
  const rows: Record<string, unknown>[] = [];
  for (let offset = 0; ; offset += 1000) {
    let query = client.from(table).select('*').order('id').range(offset, offset + 999);
    if (value !== undefined) query = query.eq(column, value);
    const result = await query;
    if (result.error) throw new ServerDriveError('Database recruiting non disponibile: verifica la migrazione e la configurazione.', 503);
    rows.push(...result.data);
    if (result.data.length < 1000) return rows;
  }
}
export async function loadRecruiting(admin: SupabaseClient, season: string): Promise<RecruitingData> {
  const candidates = await readAll(admin, 'recruiting_candidates', 'season_id', season) as unknown as Candidate[];
  const ids = new Set(candidates.map(c => c.id));
  const [activities, interviews, sync] = await Promise.all([
    readAll(admin, 'recruiting_activities'), readAll(admin, 'recruiting_interviews'), admin.from('recruiting_sync').select('last_sync,error').eq('id', true).single(),
  ]);
  if (sync.error) throw new ServerDriveError('Stato della sincronizzazione non disponibile.', 503);
  const relevant = interviews.filter(i => ids.has(String(i.candidate_id)));
  const events = relevant.length ? await readAll(admin, 'events') : [];
  const byId = new Map(events.map(e => [e.id, e]));
  return { candidates, activities: activities.filter(a => ids.has(String(a.candidate_id))) as unknown as RecruitingActivity[],
    interviews: relevant.map(i => ({ ...i, event: byId.get(i.event_id) })).filter(i => i.event) as unknown as RecruitingInterview[],
    last_sync: sync.data.last_sync, sync_error: sync.data.error };
}
function columnName(index: number) {
  let name = '';
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) name = String.fromCharCode(65 + (n - 1) % 26) + name;
  return name;
}
export async function syncRecruiting(admin: SupabaseClient, force = false) {
  const started = Date.now();
  const token = randomUUID();
  const acquired = await admin.rpc('acquire_recruiting_sync', { token });
  if (acquired.error) throw new ServerDriveError('Applica la migrazione Recruiting prima di sincronizzare.', 503);
  if (!acquired.data) return { skipped: true };
  try {
    const state = await admin.from('recruiting_sync').select('last_sync,header_hash').eq('id', true).single();
    if (state.error) throw new ServerDriveError('Stato della sincronizzazione recruiting non disponibile.', 503);
    if (!force && state.data?.last_sync && Date.now() - Date.parse(state.data.last_sync) < 60000) return { skipped: true };
    const access = await googleDriveToken();
    const sheetId = process.env.RECRUITING_SPREADSHEET_ID || RECRUITING_SHEET;
    const sheetTab = Number(process.env.RECRUITING_SHEET_GID || RECRUITING_TAB);
    const root = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}`;
    async function google(path: string, method = 'GET', body?: object) {
      const response = await fetch(root + path, { method, headers: { Authorization: `Bearer ${access}`, 'Content-Type': 'application/json' }, cache: 'no-store', signal: AbortSignal.timeout(12000), ...(body ? { body: JSON.stringify(body) } : {}) });
      if (!response.ok) throw new ServerDriveError('Impossibile leggere il foglio recruiting. Verifica accesso e attivazione della Google Sheets API.', 502);
      return response.json();
    }
    const metadata = await google('?fields=sheets.properties');
    const tab = metadata.sheets?.find((s: { properties: { sheetId: number } }) => s.properties.sheetId === sheetTab)?.properties;
    if (!tab) throw new ServerDriveError('Il tab del recruiting non è stato trovato nel foglio configurato.', 503);
    const quoted = "'" + tab.title.replaceAll("'", "''") + "'";
    const result = await google('/values/' + encodeURIComponent(quoted) + '?valueRenderOption=FORMATTED_VALUE');
    const rows: string[][] = (result.values || []).map((r: unknown[]) => r.map(v => String(v ?? '')));
    const headers = rows[0];
    if (!headers || headers.length < 32 || !/nome/i.test(headers[1]) || !/cognome/i.test(headers[2]) || !/mail/i.test(headers[3]) || !/reparto/i.test(headers[11]))
      throw new ServerDriveError('La struttura del modulo è cambiata. Verifica la corrispondenza delle colonne prima di importare.', 409);
    const headerHash = createHash('sha256').update(JSON.stringify(headers.slice(0,32).map(h => h.trim()))).digest('hex');
    if (state.data.header_hash && state.data.header_hash !== headerHash) throw new ServerDriveError('Le colonne del modulo sono cambiate. Verifica la mappatura prima di riprendere l’importazione.', 409);
    let idColumn = headers.indexOf('CRM_ID');
    const writes: { range: string; values: string[][] }[] = [];
    if (idColumn < 0) {
      idColumn = headers.length;
      if (idColumn >= tab.gridProperties.columnCount) await google(':batchUpdate', 'POST', { requests: [{ appendDimension: { sheetId: sheetTab, dimension: 'COLUMNS', length: 1 } }] });
      writes.push({ range: `${quoted}!${columnName(idColumn)}1`, values: [['CRM_ID']] });
    }
    const seen = new Set<string>();
    const season = process.env.RECRUITING_SEASON_ID || SEASONS[0].id;
    const candidates = rows.slice(1).flatMap((r, i) => {
      if (!r.slice(0, 32).some(v => v.trim())) return [];
      const id = r[idColumn] || randomUUID();
      if (!/^[a-f0-9-]{36}$/i.test(id) || seen.has(id)) throw new ServerDriveError('Identificativi recruiting duplicati o non validi. Nessuna candidatura è stata importata.', 409);
      seen.add(id);
      const parsed = parseCandidate(headers, r, id, season);
      if (!r[idColumn]) writes.push({ range: `${quoted}!${columnName(idColumn)}${i + 2}`, values: [[id]] });
      return [{ ...parsed, source_hash: createHash('sha256').update(JSON.stringify(parsed)).digest('hex') }];
    });
    // Only the technical ID column is changed; form answers are never written back.
    if (writes.length) await google('/values:batchUpdate', 'POST', { valueInputOption: 'RAW', data: writes });
    // Protect document folders in the existing shared Drive proxy as well.
    const protectedIds = new Set([sheetId, ...candidates.flatMap(c => c.attachments.map(a => a.id))]);
    const known = new Set<string>();
    for (let offset = 0; ; offset += 1000) {
      const result = await admin.from('recruiting_drive_files').select('file_id').order('file_id').range(offset, offset + 999);
      if (result.error) throw new ServerDriveError('Protezione dei documenti non disponibile.', 503);
      result.data.forEach(r => known.add(r.file_id));
      if (result.data.length < 1000) break;
    }
    const files = [...new Set(candidates.flatMap(c => c.attachments.map(a => a.id)))].filter(id => !known.has(id));
    let cursor = 0;
    const folderResults = await Promise.allSettled(Array.from({ length: Math.min(6, files.length) }, async () => {
      while (cursor < files.length) {
        const file = files[cursor++];
        if (Date.now() - started > 40000) throw new ServerDriveError('Preparazione dei documenti ancora in corso. Il prossimo aggiornamento riprenderà dal punto salvato.', 503);
        let id = file;
        const group = [file];
        for (let depth = 0; depth < 2; depth++) {
          const response = await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}?fields=parents`, { headers: { Authorization: `Bearer ${access}` }, cache: 'no-store', signal: AbortSignal.timeout(8000) });
          if (response.status === 404) break;
          if (!response.ok) throw new ServerDriveError('Impossibile verificare le cartelle degli allegati. Controlla i permessi Google.', 502);
          const parents: string[] = (await response.json()).parents || [];
          if (!parents.length) break;
          group.push(...parents); id = parents[0];
        }
        group.forEach(p => protectedIds.add(p));
        const saved = await admin.from('recruiting_drive_files').upsert(group.map(file_id => ({ file_id })), { onConflict: 'file_id' });
        if (saved.error) throw new ServerDriveError('Protezione degli allegati non salvata.', 503);
      }
    }));
    const folderFailure = folderResults.find(r => r.status === 'rejected');
    if (folderFailure?.status === 'rejected') throw folderFailure.reason;
    const protectedFiles = await admin.from('recruiting_drive_files').upsert([...protectedIds].map(file_id => ({ file_id })), { onConflict: 'file_id' });
    if (protectedFiles.error) throw new ServerDriveError('Protezione dei documenti recruiting non disponibile. Importazione sospesa.', 503);
    const imported = await admin.rpc('import_recruiting', { records: candidates, season, headers_hash: headerHash });
    if (imported.error) throw new ServerDriveError('Importazione non riuscita. I dati precedenti sono stati conservati.', 503);
    return { skipped: false, count: candidates.length };
  } catch (error) {
    const message = error instanceof ServerDriveError ? error.message : 'Sincronizzazione recruiting non riuscita. Riprova.';
    await admin.from('recruiting_sync').update({ error: message }).eq('id', true);
    throw new ServerDriveError(message, error instanceof ServerDriveError ? error.status : 503);
  } finally { await admin.rpc('release_recruiting_sync', { token }); }
}
export function recruitingFailure(error: unknown) {
  return Response.json({ error: error instanceof ServerDriveError ? error.message : 'Operazione recruiting non riuscita. Riprova.' },
    { status: error instanceof ServerDriveError ? error.status : 503, headers: { 'Cache-Control': 'no-store' } });
}
export async function recruitingInput(request: Request) {
  const text = await request.text();
  if (text.length > 64000) throw new ServerDriveError('Richiesta troppo grande.', 413);
  try { const input = JSON.parse(text); if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error(); return input as Record<string, unknown>; } catch { throw new ServerDriveError('Richiesta non valida.', 400); }
}
