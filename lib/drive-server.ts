import { createClient } from '@supabase/supabase-js';
export class ServerDriveError extends Error {
  constructor(message: string, public status: number) { super(message); }
}
export async function requireDriveMember(request: Request) {
  const auth = request.headers.get('authorization') || '';
  if (!/^Bearer [^\s]+$/.test(auth)) throw new ServerDriveError('Accedi al CRM per usare il Drive.', 401);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new ServerDriveError('CRM non configurato.', 503);
  const client = createClient(url, key, { global: { headers: { Authorization: auth } },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } });
  const { data: { user }, error } = await client.auth.getUser(auth.slice(7));
  if (error || !user) throw new ServerDriveError('Sessione CRM scaduta. Accedi di nuovo.', 401);
  const { data: member, error: memberError } = await client.from('members').select('active').eq('id', user.id).maybeSingle();
  if (memberError) throw new ServerDriveError('Non riesco a verificare i permessi CRM.', 503);
  if (!member?.active) throw new ServerDriveError('Accesso consentito solo ai membri attivi.', 403);
}
export function driveConfigured() {
  return Boolean(process.env.GOOGLE_DRIVE_CLIENT_ID && process.env.GOOGLE_DRIVE_CLIENT_SECRET && process.env.GOOGLE_DRIVE_REFRESH_TOKEN);
}
export async function googleDriveToken() {
  if (!driveConfigured()) throw new ServerDriveError('Il responsabile deve completare il collegamento del Drive del team.', 503);
  // Refresh on the server; no Google credential is returned to a CRM browser.
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', cache: 'no-store', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: process.env.GOOGLE_DRIVE_CLIENT_ID!, client_secret: process.env.GOOGLE_DRIVE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN!, grant_type: 'refresh_token' })
  });
  if (!response.ok) throw new ServerDriveError('Il collegamento del Drive va rinnovato dal responsabile.', 503);
  const result = await response.json();
  if (!result.access_token) throw new ServerDriveError('Collegamento Drive non disponibile.', 503);
  return result.access_token as string;
}
