import { cookies } from 'next/headers';
import { recruitingAdmin, recruitingFailure, recruitingInput, recruitingMember, recruitingSecrets } from '@/lib/recruiting-server';
import { issueUnlock, RECRUITING_COOKIE, UNLOCK_SECONDS, verifyPassword } from '@/lib/recruiting-security';
import { ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    const { user, token } = await recruitingMember(request);
    const { hash, secret } = recruitingSecrets();
    const input = await recruitingInput(request);
    if (typeof input.password !== 'string' || input.password.length > 256) throw new ServerDriveError('Inserisci la password recruiting.', 400);
    const admin = recruitingAdmin();
    const attempt = await admin.rpc('recruiting_attempt', { member: user.id });
    if (attempt.error) throw new ServerDriveError('Applica la migrazione Recruiting al database.', 503);
    if (!attempt.data) throw new ServerDriveError('Troppi tentativi. Riprova fra 15 minuti.', 429);
    if (!verifyPassword(input.password, hash)) throw new ServerDriveError('Password recruiting non corretta.', 403);
    await admin.from('recruiting_unlock_attempts').delete().eq('member_id', user.id);
    (await cookies()).set(RECRUITING_COOKIE, issueUnlock(user.id, token, hash, secret), {
      httpOnly: true, secure: new URL(request.url).protocol === 'https:', sameSite: 'strict', path: '/api', maxAge: UNLOCK_SECONDS,
    });
    return Response.json({ unlocked: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return recruitingFailure(error); }
}
export async function DELETE() {
  (await cookies()).set(RECRUITING_COOKIE, '', { httpOnly: true, sameSite: 'strict', path: '/api', maxAge: 0 });
  return Response.json({ unlocked: false }, { headers: { 'Cache-Control': 'no-store' } });
}
