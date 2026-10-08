import { cookies } from 'next/headers';
import { recruitingAdmin, recruitingMember, recruitingSecrets } from './recruiting-server';
import { RECRUITING_COOKIE, verifyUnlock } from './recruiting-security';
import { RECRUITING_SHEET } from './recruiting';
import { ServerDriveError } from './drive-server';

export function touchesProtectedFile(target: URL, body: string | undefined, ids: Set<string>) {
  const direct = target.pathname.match(/\/files\/([\w-]+)/)?.[1];
  if (direct && ids.has(direct)) return true;
  if ([...target.searchParams.values()].some(value => [...ids].some(id => value.includes(id)))) return true;
  if (body) {
    const values: unknown[] = [JSON.parse(body)];
    while (values.length) {
      const item = values.pop();
      if (typeof item === 'string' && ids.has(item)) return true;
      if (Array.isArray(item)) values.push(...item);
      else if (item && typeof item === 'object') values.push(...Object.values(item));
    }
  }
  return false;
}
export async function recruitingDriveAccess(request: Request) {
  const ids = new Set([process.env.RECRUITING_SPREADSHEET_ID || RECRUITING_SHEET]);
  if (!process.env.RECRUITING_PASSWORD_HASH && !process.env.SUPABASE_SERVICE_ROLE_KEY) return { ids, unlocked: false };
  let unlocked = false;
  if (process.env.RECRUITING_PASSWORD_HASH) {
    const member = await recruitingMember(request);
    const { hash, secret } = recruitingSecrets();
    unlocked = verifyUnlock((await cookies()).get(RECRUITING_COOKIE)?.value || '', member.user.id, member.token, hash, secret);
  }
  if (unlocked) return { ids, unlocked: true };
  const admin = recruitingAdmin();
  for (let offset = 0; ; offset += 1000) {
    const result = await admin.from('recruiting_drive_files').select('file_id').order('file_id').range(offset, offset + 999);
    if (result.error) throw new ServerDriveError('Verifica la configurazione recruiting prima di accedere al Drive.', 503);
    result.data.forEach(r => ids.add(r.file_id));
    if (result.data.length < 1000) break;
  }
  return { ids, unlocked };
}
