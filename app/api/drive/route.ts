import { configuredTeamFolder } from '@/lib/drive-team-folders';
import { driveTarget } from '@/lib/drive-proxy-policy';
import { driveConfigured, googleDriveToken, requireDriveMember, ServerDriveError } from '@/lib/drive-server';
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
    const token = await googleDriveToken();
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
