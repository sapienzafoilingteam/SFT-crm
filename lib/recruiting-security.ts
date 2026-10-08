import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

export const RECRUITING_COOKIE = 'sft_recruiting';
export const UNLOCK_SECONDS = 4 * 60 * 60;
export function hashPassword(password: string, salt = randomBytes(16).toString('hex')) {
  return `scrypt:${salt}:${scryptSync(password, salt, 64).toString('hex')}`;
}
export function verifyPassword(password: string, encoded: string) {
  const [kind, salt, hash] = encoded.split(':');
  if (kind !== 'scrypt' || !/^[a-f0-9]{32}$/.test(salt || '') || !/^[a-f0-9]{128}$/.test(hash || '') || password.length > 256) return false;
  const derived = scryptSync(password, salt, 64);
  return timingSafeEqual(derived, Buffer.from(hash, 'hex'));
}
function signature(body: string, secret: string) { return createHmac('sha256', secret).update(body).digest('base64url'); }
export function sessionBinding(token: string) { return createHash('sha256').update(token).digest('hex'); }
export function issueUnlock(user: string, token: string, passwordHash: string, secret: string, now = Date.now()) {
  const body = Buffer.from(JSON.stringify({ user, binding: sessionBinding(token), password: sessionBinding(passwordHash), exp: Math.floor(now / 1000) + UNLOCK_SECONDS })).toString('base64url');
  return body + '.' + signature(body, secret);
}
export function verifyUnlock(cookie: string, user: string, token: string, passwordHash: string, secret: string, now = Date.now()) {
  try {
    const [body, mac, extra] = cookie.split('.');
    if (extra !== undefined || !body || !mac || body.length > 2048) return false;
    const expected = Buffer.from(signature(body, secret)), supplied = Buffer.from(mac);
    if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return false;
    const claims = JSON.parse(Buffer.from(body, 'base64url').toString());
    return claims.user === user && claims.binding === sessionBinding(token) && claims.password === sessionBinding(passwordHash)
      && typeof claims.exp === 'number' && claims.exp > Math.floor(now / 1000);
  } catch { return false; }
}
export function exactSecret(supplied: string, secret: string) {
  const a = Buffer.from(supplied), b = Buffer.from(`Bearer ${secret}`);
  return Boolean(secret) && a.length === b.length && timingSafeEqual(a, b);
}
