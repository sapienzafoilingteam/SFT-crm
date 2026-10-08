import { exactSecret } from '@/lib/recruiting-security';
import { recruitingAdmin, recruitingFailure, syncRecruiting } from '@/lib/recruiting-server';
export const runtime = 'nodejs';
export const maxDuration = 60;
export async function GET(request: Request) {
  if (!exactSecret(request.headers.get('authorization') || '', process.env.RECRUITING_CRON_SECRET || ''))
    return Response.json({ error: 'Accesso negato.' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });
  try { return Response.json(await syncRecruiting(recruitingAdmin()), { headers: { 'Cache-Control': 'no-store' } }); }
  catch (error) { return recruitingFailure(error); }
}
