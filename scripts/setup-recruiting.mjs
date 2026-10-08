import { createInterface } from 'node:readline/promises';
import { randomBytes, scryptSync } from 'node:crypto';
import { readFileSync, writeFileSync, chmodSync } from 'node:fs';
import { Writable } from 'node:stream';

// Password input is masked and is never written in plain text or printed.
if (!process.stdin.isTTY) throw new Error('Esegui questo setup in un terminale interattivo.');
let muted = false;
const output = new Writable({ write(chunk, encoding, callback) { if (!muted) process.stdout.write(chunk, encoding); callback(); } });
const terminal = createInterface({ input: process.stdin, output, terminal: true });
async function secretQuestion(prompt) {
  process.stdout.write(prompt); muted = true;
  try { return await terminal.question(''); } finally { muted = false; process.stdout.write('\n'); }
}
try {
  const password = await secretQuestion('Scegli la password recruiting (almeno 12 caratteri): ');
  if (password.length < 12 || password.length > 256) throw new Error('La password deve contenere da 12 a 256 caratteri.');
  const repeat = await secretQuestion('Ripeti la password: ');
  if (password !== repeat) throw new Error('Le password non coincidono. Nessuna modifica salvata.');
  const salt = randomBytes(16).toString('hex');
  let env = ''; try { env = readFileSync('.env.local', 'utf8'); } catch {}
  const previousSecret = key => {
    const raw = env.match(new RegExp(`^${key}=(.*)$`, 'm'))?.[1]?.trim();
    if (!raw) return randomBytes(48).toString('base64url');
    const value = raw.startsWith('"') ? JSON.parse(raw) : raw;
    if (!/^[A-Za-z0-9_-]{32,}$/.test(value)) throw new Error(`Valore ${key} non valido.`);
    return value;
  };
  // Keep the scheduler's existing credential when setting or rotating the page password.
  const values = { RECRUITING_PASSWORD_HASH: `scrypt:${salt}:${scryptSync(password,salt,64).toString('hex')}`, RECRUITING_SESSION_SECRET: previousSecret('RECRUITING_SESSION_SECRET'), RECRUITING_CRON_SECRET: previousSecret('RECRUITING_CRON_SECRET') };
  for (const [key,value] of Object.entries(values)) { env = env.replace(new RegExp(`^${key}=.*\r?\n?`, 'gm'), ''); env += `\n${key}=${JSON.stringify(value)}\n`; }
  writeFileSync('.env.local', env, { mode: 0o600 }); chmodSync('.env.local', 0o600);
  const serverKey = env.match(/^SUPABASE_SERVICE_ROLE_KEY=.*$/m)?.[0];
  const vercel = [...(serverKey ? [serverKey] : []), ...Object.entries(values).map(([key,value])=>`${key}=${JSON.stringify(value)}`)].join('\n')+'\n';
  writeFileSync('.env.recruiting.vercel',vercel,{mode:0o600}); chmodSync('.env.recruiting.vercel',0o600);
  console.log('Password e segreti configurati localmente. Le variabili da copiare su Vercel sono in .env.recruiting.vercel, escluso da Git. Nessuna password è stata salvata in chiaro.');
} finally { terminal.close(); }
