// Load configuration within the terminal process. Never print values or child-process output.
const { loadEnvConfig } = require('@next/env');
const { spawnSync } = require('node:child_process');
loadEnvConfig(process.cwd(), false, {info() {}, error() {}});
const names = ['NEXT_PUBLIC_DATA_MODE', 'NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'];
for (const name of names) {
  if (!process.env[name]?.trim()) throw new Error(`Variabile mancante: ${name}. Nessun valore è stato mostrato.`);
}
if (process.env.NEXT_PUBLIC_DATA_MODE !== 'supabase') throw new Error('Per il deploy condiviso imposta la modalità supabase nel file locale.');
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.trim();
if (key.startsWith('sb_secret_')) throw new Error('La chiave deve essere pubblica.');
if (!key.startsWith('sb_publishable_')) {
  let payload;
  try {payload = JSON.parse(Buffer.from(key.split('.')[1], 'base64url').toString());} catch {}
  if (payload?.role !== 'anon') throw new Error('Serve una publishable key oppure una anon key legacy.');
}
const url = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL);
if (url.protocol !== 'https:') throw new Error('Serve un URL Supabase HTTPS.');
for (const name of names) {
  const result = spawnSync('vercel', ['env', 'add', name, 'production,preview', '--type', 'config', '--yes', '--scope', 'nannipy-projects'], {input: process.env[name].trim(), encoding:'utf8', stdio:['pipe','pipe','pipe']});
  if (result.status !== 0) throw new Error(`Configurazione non riuscita per ${name}; nessun valore o output privato è stato mostrato.`);
  console.log(`Configurata: ${name}`);
}
