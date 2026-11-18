import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { requireMemberAccess, ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  try {
    const { client, user } = await requireMemberAccess(request);
    const { data, error } = await client.from('members').select('is_admin,social_enabled').eq('id', user.id).single();
    if (error || !(data?.is_admin || data?.social_enabled)) return Response.json({ error: 'Chiedi a un amministratore l’abilitazione a Social.' }, { status: 403 });
    const seed = await readFile(path.join(process.cwd(), 'data/social/sft-day.json'), 'utf8');
    return new Response(seed, { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' } });
  } catch (error) {
    return Response.json({ error: error instanceof ServerDriveError ? error.message : 'Esempio SFT Day non disponibile.' }, { status: error instanceof ServerDriveError ? error.status : 503 });
  }
}
