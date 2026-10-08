import { recruitingFailure, requireRecruiting } from '@/lib/recruiting-server';
import { googleDriveToken, ServerDriveError } from '@/lib/drive-server';
import { uuid } from '@/lib/recruiting-validation';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  try {
    const { admin } = await requireRecruiting(request);
    const params = new URL(request.url).searchParams, candidate = params.get('candidate'), file = params.get('file');
    if (!uuid(candidate) || !file || !/^[\w-]{10,200}$/.test(file)) throw new ServerDriveError('Allegato non valido.', 400);
    const result = await admin.from('recruiting_candidates').select('attachments').eq('id', candidate).single();
    if (result.error || !result.data.attachments.some((a: { id: string }) => a.id === file)) throw new ServerDriveError('Allegato non disponibile per questa candidatura.', 404);
    const token = await googleDriveToken();
    const root = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(file)}`;
    const meta = await fetch(root + '?fields=mimeType,size', { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store', signal: AbortSignal.timeout(12000) });
    if (!meta.ok) throw new ServerDriveError('Allegato non accessibile. Verifica i permessi Google del team.', 502);
    const info = await meta.json();
    if (info.mimeType !== 'application/pdf') throw new ServerDriveError('L’anteprima supporta allegati PDF.', 400);
    if (Number(info.size) > 20 * 1024 * 1024) throw new ServerDriveError('L’allegato supera 20 MB.', 413);
    const response = await fetch(root + '?alt=media', { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store', signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new ServerDriveError('Download dell’allegato non riuscito.', 502);
    return new Response(response.body, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="documento.pdf"', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
  } catch (error) { return recruitingFailure(error); }
}
