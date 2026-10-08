import { NextResponse } from 'next/server';
import { requireDriveMember, ServerDriveError } from '@/lib/drive-server';
import { calendarConfigured, syncCalendar } from '@/lib/calendar-server';
export const runtime = 'nodejs';
export const maxDuration = 60;
function failure(error: unknown) {
  return NextResponse.json({ error: error instanceof ServerDriveError ? error.message : 'Sincronizzazione non riuscita. Riprova.' },
    { status: error instanceof ServerDriveError ? error.status : 503, headers: { 'Cache-Control': 'no-store' } });
}
export async function GET(request: Request) {
  try { await requireDriveMember(request); return NextResponse.json({ configured: calendarConfigured() }, { headers: { 'Cache-Control': 'no-store' } }); }
  catch (error) { return failure(error); }
}
export async function POST(request: Request) {
  try {
    const client = await requireDriveMember(request);
    if (!calendarConfigured()) throw new ServerDriveError('Completa l’autorizzazione Google Calendar dell’account del team.', 503);
    return NextResponse.json(await syncCalendar(client), { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return failure(error); }
}
