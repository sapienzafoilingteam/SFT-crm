/** Only Drive file endpoints can receive the server's Google credential. */
export function driveTarget(raw: string, method: string) {
  const url = new URL(raw);
  if (url.origin !== 'https://www.googleapis.com' || url.username || url.password || url.hash)
    throw new Error('Destinazione non consentita.');
  const file = /^\/drive\/v3\/files(?:\/[a-zA-Z0-9_-]+(?:\/export)?)?$/.test(url.pathname);
  const about = url.pathname === '/drive/v3/about' && method === 'GET';
  const upload = /^\/upload\/drive\/v3\/files(?:\/[a-zA-Z0-9_-]+)?$/.test(url.pathname)
    && ['POST', 'PATCH'].includes(method) && url.searchParams.get('uploadType') === 'resumable';
  if ((!file && !about && !upload) || !['GET', 'POST', 'PATCH'].includes(method))
    throw new Error('Operazione non consentita.');
  if (url.searchParams.has('access_token') || url.searchParams.has('key'))
    throw new Error('Credenziali nella URL non consentite.');
  return url;
}
