import { recruitingFailure, requireRecruiting, syncRecruiting } from '@/lib/recruiting-server';
export const runtime = 'nodejs';
export const maxDuration = 60;
export async function POST(request: Request) {
  try { const { admin } = await requireRecruiting(request); return Response.json(await syncRecruiting(admin), { headers: { 'Cache-Control': 'no-store' } }); }
  catch (error) { return recruitingFailure(error); }
}
