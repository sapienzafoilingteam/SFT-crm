import { supabase } from './repository';
import { createDriveClient, DriveError } from './google-drive';
async function crmHeaders() {
  const session = await supabase?.auth.getSession();
  const token = session?.data.session?.access_token;
  if (!token) throw new DriveError('Accedi al CRM per usare il Drive.', 401);
  return { Authorization: `Bearer ${token}` };
}
export async function driveStatus(teamId?: string, signal?: AbortSignal) {
  const response = await fetch(`/api/drive${teamId ? '?team=' + encodeURIComponent(teamId) : ''}`, { headers: await crmHeaders(), cache: 'no-store', signal });
  const result = await response.json();
  if (!response.ok) throw new DriveError(result.error, response.status);
  return result as { connected: boolean; folderId: string | null };
}
const transport: typeof fetch = async (input, init = {}) => {
  const url = String(input);
  if (init.method === 'PUT') {
    // Resumable upload goes directly to its single-use Google session, with no OAuth token.
    const target = new URL(url);
    if (target.origin !== 'https://www.googleapis.com' || !target.pathname.startsWith('/upload/drive/v3/files') || !target.searchParams.has('upload_id'))
      throw new DriveError('Sessione di caricamento non valida.');
    return fetch(url, { method: 'PUT', headers: { 'Content-Type': new Headers(init.headers).get('Content-Type') || 'application/octet-stream' }, body: init.body });
  }
  const response = await fetch('/api/drive', {
    method: 'POST', headers: { ...(await crmHeaders()), 'Content-Type': 'application/json' },
    signal: init.signal,
    body: JSON.stringify({ url, method: init.method || 'GET', body: init.body,
      contentType: new Headers(init.headers).get('X-Upload-Content-Type') }),
  });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new DriveError(result.error || 'Operazione Drive non riuscita.', response.status);
  }
  return response;
};
export function sharedDriveClient(signal?: AbortSignal) { return createDriveClient('', (input, init = {}) => transport(input, { ...init, signal: signal || init.signal })); }
export interface DriveStorage { limit?: string; usage?: string; usageInDrive?: string; usageInDriveTrash?: string }
export async function driveStorage(signal?: AbortSignal): Promise<DriveStorage> {
  return (await transport('https://www.googleapis.com/drive/v3/about?fields=storageQuota', { signal })).json().then(result => result.storageQuota);
}
