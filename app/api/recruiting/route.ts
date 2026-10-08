import { loadRecruiting, recruitingFailure, requireRecruiting } from '@/lib/recruiting-server';
import { SEASONS } from '@/lib/model';
import { ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  try {
    const { admin } = await requireRecruiting(request);
    const season = new URL(request.url).searchParams.get('season') || SEASONS[0].id;
    if (!/^[a-f0-9-]{36}$/i.test(season)) throw new ServerDriveError('Stagione non valida.', 400);
    return Response.json(await loadRecruiting(admin, season), { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return recruitingFailure(error); }
}
