import { readFileSync, writeFileSync, chmodSync } from 'node:fs';
import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
const source = process.argv[2];
if (!source) throw new Error('Indica il percorso del JSON OAuth.');
const config = JSON.parse(readFileSync(source, 'utf8')).web;
if (!config?.client_id || !config?.client_secret) throw new Error('Serve un client OAuth Web.');
const redirect = 'http://localhost:4387/callback';
const state = randomBytes(32).toString('hex');
const verifier = randomBytes(48).toString('base64url');
const { createHash } = await import('node:crypto');
const challenge = createHash('sha256').update(verifier).digest('base64url');
function save(values) {
  let text = ''; try { text = readFileSync('.env.local', 'utf8'); } catch {}
  for (const [key, value] of Object.entries(values)) {
    text = text.replace(new RegExp(`^${key}=.*\\r?\\n?`, 'gm'), '');
    text += `\n${key}=${JSON.stringify(value)}\n`;
  }
  writeFileSync('.env.local', text, { mode: 0o600 }); chmodSync('.env.local', 0o600);
}
save({ GOOGLE_DRIVE_CLIENT_ID: config.client_id, GOOGLE_DRIVE_CLIENT_SECRET: config.client_secret });
const server = createServer(async (req, res) => {
  const url = new URL(req.url, redirect);
  if (url.pathname !== '/callback') { res.writeHead(404).end(); return; }
  if (url.searchParams.get('state') !== state || !url.searchParams.get('code')) {
    res.writeHead(400).end('Autorizzazione non valida. Riprova.'); return;
  }
  try {
    const reply = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: config.client_id, client_secret: config.client_secret,
        code: url.searchParams.get('code'), grant_type: 'authorization_code', redirect_uri: redirect, code_verifier: verifier })
    });
    if (!reply.ok) throw new Error('Google non ha completato il collegamento.');
    const tokens = await reply.json();
    if (!tokens.refresh_token || !tokens.scope?.split(' ').includes('https://www.googleapis.com/auth/drive'))
      throw new Error('Autorizza l’accesso a Drive e riprova.');
    const identity = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers: { Authorization: `Bearer ${tokens.access_token}` } });
    if (!identity.ok || (await identity.json()).email?.toLowerCase() !== 'sapienzafoilingteam@gmail.com')
      throw new Error('Seleziona sapienzafoilingteam@gmail.com.');
    save({ GOOGLE_DRIVE_REFRESH_TOKEN: tokens.refresh_token });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Security-Policy', "default-src 'none'");
    res.end('<h1>Drive del team collegato</h1><p>Puoi chiudere questa pagina e tornare al CRM.</p>');
    console.log('Autorizzazione completata. Credenziali salvate solo in .env.local.');
    server.close(); clearTimeout(deadline);
  } catch (e) { res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' }).end(e.message); }
});
const deadline = setTimeout(() => { console.log('Tempo scaduto: riesegui il collegamento.'); server.close(); }, 15 * 60 * 1000);
server.listen(4387, '127.0.0.1', () => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.search = new URLSearchParams({ client_id: config.client_id, redirect_uri: redirect,
    response_type: 'code', access_type: 'offline', prompt: 'consent select_account', state,
    code_challenge: challenge, code_challenge_method: 'S256', login_hint: 'sapienzafoilingteam@gmail.com',
    scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.email' }).toString();
  console.log('Aggiungi prima questo redirect nel client Google: ' + redirect);
  console.log('Apri per autorizzare il Drive del team:\n' + url.href);
});
