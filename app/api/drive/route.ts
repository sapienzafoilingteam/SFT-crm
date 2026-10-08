import { configuredTeamFolder } from '@/lib/drive-team-folders';
import { driveTarget } from '@/lib/drive-proxy-policy';
import { driveConfigured, googleDriveToken, requireDriveMember, ServerDriveError } from '@/lib/drive-server';
import { recruitingDriveAccess, touchesProtectedFile } from '@/lib/recruiting-drive-policy';
export const runtime = 'nodejs';
export const maxDuration = 60;
function failure(error: unknown) {
  return Response.json({ error: error instanceof ServerDriveError ? error.message : 'Operazione Drive non riuscita. Riprova.' },
    { status: error instanceof ServerDriveError ? error.status : 502, headers: { 'Cache-Control': 'no-store' } });
}
export async function GET(request: Request) {
  try {
    await requireDriveMember(request);
    const teamId = new URL(request.url).searchParams.get('team');
    const folderId = teamId ? configuredTeamFolder(teamId, process.env.GOOGLE_DRIVE_TEAM_FOLDERS) : null;
    if (teamId && !folderId && driveConfigured()) throw new ServerDriveError('La cartella Drive di questo reparto non è ancora configurata.', 503);
    return Response.json({ connected: driveConfigured(), folderId }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return failure(error); }
}
export async function POST(request: Request) {
  try {
    await requireDriveMember(request);
    const text = await request.text();
    if (text.length > 64000) throw new ServerDriveError('Richiesta troppo grande.', 413);
    const input = JSON.parse(text);
    let target: URL;
    try { target = driveTarget(input.url, input.method); }
    catch { throw new ServerDriveError('Operazione non consentita.', 400); }
    if (input.body !== undefined && (typeof input.body !== 'string' || input.method === 'GET'))
      throw new ServerDriveError('Richiesta non valida.', 400);
    const recruiting = await recruitingDriveAccess(request);
    if (!recruiting.unlocked && touchesProtectedFile(target, input.body, recruiting.ids))
      throw new ServerDriveError('Sblocca il recruiting per accedere a questo documento.', 423);
    const fileList = target.pathname === '/drive/v3/files' && input.method === 'GET';
    if (fileList && !recruiting.unlocked) {
      target.searchParams.set('fields', (target.searchParams.get('fields') || 'nextPageToken,files(*)') + ',files(id,parents)');
    }
    const token = await googleDriveToken();
    const directFile = target.pathname.match(/\/files\/([\w-]+)/)?.[1];
    if (directFile && !recruiting.unlocked && (process.env.RECRUITING_PASSWORD_HASH || process.env.SUPABASE_SERVICE_ROLE_KEY)) {
      const meta = await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(directFile)}?fields=parents`, {
        headers: { Authorization: `Bearer ${token}` }, cache: 'no-store', signal: AbortSignal.timeout(8000),
      });
      if (!meta.ok) throw new ServerDriveError('File non disponibile o permessi non verificabili.', 403);
      const parents: string[] = (await meta.json()).parents || [];
      if (parents.some(id => recruiting.ids.has(id))) throw new ServerDriveError('Sblocca il recruiting per accedere a questo documento.', 423);
    }
    const headers = new Headers({ Authorization: `Bearer ${token}` });
    if (input.body !== undefined) headers.set('Content-Type', 'application/json');
    if (target.pathname.startsWith('/upload/')) {
      headers.set('X-Upload-Content-Type', String(input.contentType || 'application/octet-stream').slice(0, 200));
      // Google enables CORS on the resumable session for this CRM origin.
      headers.set('Origin', new URL(request.url).origin);
    }
    const response = await fetch(target, { method: input.method, headers, body: input.body, cache: 'no-store', redirect: 'error' });
    if (!response.ok) {
      const message = response.status === 403 ? 'Google non consente questa operazione. Controlla i permessi sul file.'
        : response.status === 404 ? 'File o cartella non disponibile.' : 'Google Drive non ha completato l’operazione. Riprova.';
      throw new ServerDriveError(message, response.status === 401 ? 503 : response.status);
    }
    const outgoing = new Headers({ 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    if (fileList && !recruiting.unlocked) {
      const result = await response.json();
      result.files = (result.files || []).filter((file: { id: string; parents?: string[] }) => !recruiting.ids.has(file.id) && !file.parents?.some(id => recruiting.ids.has(id)));
      return Response.json(result, { headers: outgoing });
    }
    outgoing.set('Content-Type', response.headers.get('Content-Type') || 'application/octet-stream');
    const location = response.headers.get('Location');
    if (location && target.pathname.startsWith('/upload/')) {
      const session = new URL(location);
      if (session.origin !== 'https://www.googleapis.com' || !session.pathname.startsWith('/upload/drive/v3/files'))
        throw new ServerDriveError('Sessione di caricamento non valida.', 502);
      // This URL permits only the requested upload, never general Drive access.
      outgoing.set('Location', location);
    }
    return new Response(response.body, { status: response.status, headers: outgoing });
  } catch (error) { return failure(error); }
}
