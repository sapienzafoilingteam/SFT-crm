import { randomUUID } from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';
import { ServerDriveError } from './drive-server';
import { direction, googleBody, googleDate, googleHash, googleId, importId, localHash, pullFields,
  type AgendaRow, type AgendaTable, type CalendarLink, type GoogleEvent } from './calendar';
export const CALENDAR_ACCOUNT = 'sapienzafoilingteam@gmail.com';
export function calendarConfigured() {
  return Boolean(process.env.GOOGLE_CALENDAR_REFRESH_TOKEN && process.env.GOOGLE_DRIVE_CLIENT_ID && process.env.GOOGLE_DRIVE_CLIENT_SECRET);
}
async function calendarToken() {
  if (!calendarConfigured()) throw new ServerDriveError('Completa l’autorizzazione Google Calendar dell’account del team.', 503);
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', cache: 'no-store', signal: AbortSignal.timeout(8000), headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: process.env.GOOGLE_DRIVE_CLIENT_ID!, client_secret: process.env.GOOGLE_DRIVE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN!, grant_type: 'refresh_token' }) });
  if (!response.ok) throw new ServerDriveError('Rinnova il collegamento Google Calendar del team.', 503);
  const result = await response.json();
  if (!result.access_token) throw new ServerDriveError('Google Calendar non disponibile.', 503);
  return result.access_token as string;
}
export async function syncCalendar(client: SupabaseClient, background = false) {
  const started = Date.now();
  const lock = randomUUID();
  const { data: acquired, error: lockError } = await client.rpc('acquire_calendar_sync', { lock_token: lock });
  if (lockError) throw new ServerDriveError('Applica la migrazione Calendar al database prima di sincronizzare.', 503);
  if (!acquired) throw new ServerDriveError('Una sincronizzazione è già in corso. Riprova tra poco.', 409);
  const result = { imported: 0, exported: 0, updated: 0, archived: 0, conflicts: [] as string[], skipped: 0, pending: false };
  try {
    const token = await calendarToken();
    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ACCOUNT)}/events`;
    async function google(path: string, method = 'GET', body?: unknown, etag?: string): Promise<GoogleEvent | { items?: GoogleEvent[]; nextPageToken?: string } | null> {
      const response = await fetch(endpoint + path, { method, cache: 'no-store', signal: AbortSignal.timeout(8000),
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...(etag ? { 'If-Match': etag } : {}) },
        ...(body ? { body: JSON.stringify(body) } : {}) });
      if ((response.status === 404 || response.status === 410) && method === 'GET') return null;
      if ((response.status === 404 || response.status === 410) && method === 'DELETE') return null;
      if (response.status === 412) throw new ServerDriveError('Evento modificato durante la sincronizzazione. Riprova.', 409);
      if (response.status === 409 && method === 'POST') return null;
      if (!response.ok) throw new ServerDriveError(response.status === 403 ? 'Google Calendar non autorizzato: verifica API e consenso per il calendario.' : 'Google Calendar non disponibile. Riprova.', 502);
      return response.status === 204 ? null : response.json();
    }
    async function readAll(table: string, filterCalendar = false) {
      const records: Record<string, unknown>[] = [];
      for (let offset = 0; ; offset += 1000) {
        if (Date.now() - started > 25000) throw new ServerDriveError('Agenda troppo grande per questa richiesta. Nessun dato è stato modificato.', 503);
        let query = client.from(table).select('*').order(table === 'calendar_links' ? 'google_id' : 'id').range(offset, offset + 999);
        if (filterCalendar) query = query.eq('calendar_id', CALENDAR_ACCOUNT);
        const response = await query;
        if (response.error) return response;
        records.push(...response.data);
        if (response.data.length < 1000) return { data: records, error: null };
      }
    }
    const dbResults = await Promise.all([readAll('events'), readAll('deliveries'), readAll('calendar_links', true), readAll('seasons')]);
    if (dbResults.some(r => r.error)) throw new ServerDriveError('Impossibile leggere l’agenda o i collegamenti Calendar.', 503);
    const rows = { events: dbResults[0].data as unknown as AgendaRow[], deliveries: dbResults[1].data as unknown as AgendaRow[] };
    const links = dbResults[2].data as unknown as CalendarLink[];
    const seasons = dbResults[3].data as { id: string; starts_on: string; ends_on: string }[];
    const remote = new Map<string, GoogleEvent>();
    let page = '';
    do {
      if (Date.now() - started > 25000) throw new ServerDriveError('Calendario troppo grande per questa richiesta. Nessun dato è stato modificato.', 503);
      const response = await google('?' + new URLSearchParams({ maxResults: '2500', showDeleted: 'true', singleEvents: 'false', ...(page ? { pageToken: page } : {}) })) as { items?: GoogleEvent[]; nextPageToken?: string } | null;
      if (!response) throw new ServerDriveError('Calendario del team non trovato.', 503);
      for (const event of response.items || []) remote.set(event.id, event);
      page = response.nextPageToken || '';
    } while (page);
    async function remember(table: AgendaTable, row: AgendaRow, event: GoogleEvent) {
      const { error } = await client.from('calendar_links').upsert({ calendar_id: CALENDAR_ACCOUNT, google_id: event.id,
        collection: table, record_id: row.id, local_hash: localHash(table, row), google_hash: googleHash(event) }, { onConflict: 'calendar_id,google_id' });
      if (error) throw new ServerDriveError('Salvataggio collegamento Calendar non riuscito. Riprova: gli ID impediscono duplicati.', 503);
    }
    async function apply(table: AgendaTable, row: AgendaRow, fields: object, insert = false) {
      const record = { ...row, ...fields };
      let error;
      if (background) {
        const response = insert ? await client.from(table).insert(record as unknown as Record<string, unknown>).select('id')
          : await client.from(table).update(fields).eq('id', row.id).eq('version', row.version).select('id');
        error = response.error || (response.data?.length !== 1 ? new Error('Conflitto versione') : null);
      } else {
        ({ error } = await client.rpc('apply_changes', { changes: [{ table, record, expected_version: insert ? null : row.version }] }));
      }
      if (error) throw new ServerDriveError('Agenda modificata durante la sincronizzazione. Riprova per aggiornare i dati.', 409);
      return record;
    }
    const budget = () => { if (Date.now() - started > 40000) { result.pending = true; return false; } return true; };
    // Existing links first: never interpret absence in a paginated list as deletion.
    for (const link of links) {
      if (!budget()) break;
      const row = rows[link.collection].find(r => r.id === link.record_id);
      if (!row) { result.conflicts.push('Voce CRM mancante: ' + link.record_id); continue; }
      let event = remote.get(link.google_id);
      if (!event) event = await google('/' + encodeURIComponent(link.google_id)) as GoogleEvent | null || { id: link.google_id, status: 'cancelled' };
      if (event.recurrence || event.recurringEventId) { result.skipped++; continue; }
      const action = direction(link, link.collection, row, event);
      if (action === 'conflict') {
        const aligned = { ...row, ...pullFields(link.collection, event) } as AgendaRow;
        if (localHash(link.collection, aligned) === localHash(link.collection, row)) await remember(link.collection, row, event);
        else result.conflicts.push(row.title);
        continue;
      }
      if (action === 'pull') {
        const saved = await apply(link.collection, row, pullFields(link.collection, event));
        await remember(link.collection, saved, event);
        if (event.status === 'cancelled') result.archived++; else result.updated++;
      } else if (action === 'push') {
        if (row.archived) {
          if (event.status !== 'cancelled') await google('/' + encodeURIComponent(event.id), 'DELETE', undefined, event.etag);
          await remember(link.collection, row, { id: event.id, status: 'cancelled' }); result.archived++;
        } else if (event.status === 'cancelled' || !row.date) {
          result.conflicts.push(row.title + ' (ripristino o data da risolvere)');
        } else {
          const saved = await google('/' + encodeURIComponent(event.id), 'PATCH', googleBody(link.collection, row, event), event.etag) as GoogleEvent;
          await remember(link.collection, row, saved); result.updated++;
        }
      }
    }
    const linkedGoogle = new Set(links.map(l => l.google_id));
    const linkedLocal = new Set(links.map(l => l.collection + ':' + l.record_id));
    // Export only CRM records with dates. Deterministic Google IDs make retries safe.
    for (const table of ['events', 'deliveries'] as const) for (const row of rows[table]) {
      if (!budget()) break;
      if (linkedLocal.has(table + ':' + row.id) || row.archived || !row.date) continue;
      const id = googleId(table, row.id);
      let event = remote.get(id) || await google('/' + id) as GoogleEvent | null;
      if (!event) event = await google('', 'POST', { id, ...googleBody(table, row) }) as GoogleEvent | null;
      if (!event) event = await google('/' + id) as GoogleEvent | null;
      if (!event || event.status === 'cancelled' || event.summary !== row.title || googleDate(event) !== row.date ||
        (event.description || '') !== (table === 'events' ? (row as import('./model').EventRecord).description : (row as import('./model').Delivery).notes) ||
        (table === 'events' && (event.location || '') !== (row as import('./model').EventRecord).location)) {
        result.conflicts.push(row.title + ' (collegamento da verificare)'); continue;
      }
      await remember(table, row, event); linkedGoogle.add(id); result.exported++;
    }
    for (const event of remote.values()) {
      if (!budget()) break;
      if (linkedGoogle.has(event.id) || event.status === 'cancelled') continue;
      if (event.recurrence || event.recurringEventId || (event.eventType && event.eventType !== 'default')) { result.skipped++; continue; }
      const date = googleDate(event);
      const season = seasons.find(s => date && s.starts_on <= date && date <= s.ends_on);
      if (!season) { result.skipped++; continue; }
      // An orphaned SFT event must not become an unrelated duplicate CRM event.
      if (event.extendedProperties?.private?.sft_record) { result.conflicts.push(event.summary || event.id); continue; }
      const id = importId(CALENDAR_ACCOUNT, event.id);
      const existing = rows.events.find(r => r.id === id);
      const fields = pullFields('events', event);
      const row = { id, season_id: season.id, version: 1, updated_at: new Date().toISOString(),
        title: '', type: 'Evento team', status: 'Confermato', date, location: '', description: '', checklist: [], sponsor_id: null,
        document_url: '', recap: '', ...fields } as unknown as AgendaRow;
      if (existing && localHash('events', existing) !== localHash('events', row)) { result.conflicts.push(existing.title); continue; }
      if (!existing) await apply('events', row, {}, true);
      await remember('events', existing || row, event); result.imported++;
    }
    return result;
  } finally { await client.rpc('release_calendar_sync', { lock_token: lock }); }
}
