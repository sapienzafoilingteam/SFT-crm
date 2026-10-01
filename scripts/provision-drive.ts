import { loadEnvConfig } from '@next/env';
import { readFileSync, writeFileSync, chmodSync } from 'node:fs';
import { ensureTeamFolders } from '../lib/drive-team-folders';
import { googleDriveToken } from '../lib/drive-server';
import { driveQuery, DRIVE_FOLDER } from '../lib/google-drive';
async function main() {
  loadEnvConfig(process.cwd(), false, { info() {}, error() {} });
  const token = await googleDriveToken();
  const root = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_ID || 'root';
  const fields = 'id,name,mimeType,appProperties';
  const api = 'https://www.googleapis.com/drive/v3/files';
  async function call(url: string, init: RequestInit = {}) {
    const response = await fetch(url, { ...init, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
    if (!response.ok) throw new Error(`Operazione cartelle Drive non riuscita (${response.status}).`);
    return response.json();
  }
  const mapping = await ensureTeamFolders({
    async list() {
      const files = []; let page = '';
      do {
        const query = new URLSearchParams({ q: `${driveQuery(root)} and mimeType = '${DRIVE_FOLDER}'`, fields: `nextPageToken,files(${fields})`, pageSize: '100', supportsAllDrives: 'true', includeItemsFromAllDrives: 'true' });
        if (page) query.set('pageToken', page);
        const result = await call(`${api}?${query}`); files.push(...result.files); page = result.nextPageToken || '';
      } while (page);
      return files;
    },
    create(name, teamId) { return call(`${api}?supportsAllDrives=true&fields=${fields}`, { method: 'POST', body: JSON.stringify({ name, mimeType: DRIVE_FOLDER, parents: [root], appProperties: { sftTeam: teamId } }) }); },
    async mark(folder, teamId) { await call(`${api}/${folder.id}?supportsAllDrives=true`, { method: 'PATCH', body: JSON.stringify({ appProperties: { ...folder.appProperties, sftTeam: teamId } }) }); }
  });
  let env = readFileSync('.env.local', 'utf8').replace(/^GOOGLE_DRIVE_TEAM_FOLDERS=.*\r?\n?/gm, '');
  env += `\nGOOGLE_DRIVE_TEAM_FOLDERS=${JSON.stringify(mapping)}\n`;
  writeFileSync('.env.local', env, { mode: 0o600 }); chmodSync('.env.local', 0o600);
  console.log(`Cartelle dei ${Object.keys(mapping).length} reparti pronte. Associazioni salvate senza esporre credenziali.`);
}
main().catch(() => { console.error('Creazione delle cartelle non completata: controllare collegamento Google e cartelle duplicate.'); process.exitCode = 1; });
