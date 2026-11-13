import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const runtime = 'nodejs';
export async function GET() {
  if (process.env.NODE_ENV !== 'development' || process.env.NEXT_PUBLIC_DATA_MODE === 'supabase') return new Response(null, { status: 404 });
  return new Response(await readFile(path.join(process.cwd(), 'data/social/sft-day.json'), 'utf8'), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}
