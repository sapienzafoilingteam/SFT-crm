import { timingSafeEqual } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { calendarConfigured, syncCalendar } from '@/lib/calendar-server';
import { ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export const maxDuration = 60;
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const supplied = Buffer.from(request.headers.get('authorization') || '');
  const expected = Buffer.from(`Bearer ${secret || ''}`);
  const reply = (body: object, status = 200) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
  if (!secret || supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return reply({ error: 'Accesso negato.' }, 401);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key || !calendarConfigured()) return reply({ error: 'Sincronizzazione automatica non configurata.' }, 503);
  try {
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    return reply(await syncCalendar(client, true));
  } catch (error) { return reply({ error: error instanceof ServerDriveError ? error.message : 'Sincronizzazione non riuscita.' }, error instanceof ServerDriveError ? error.status : 503); }
}
