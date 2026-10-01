import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ensureTeamFolders, configuredTeamFolder } from '../lib/drive-team-folders';
import { TEAMS } from '../lib/model';
import { DRIVE_FOLDER } from '../lib/google-drive';

test('seven department folders are created once and keep their association after renaming', async () => {
  const folders: {id: string; name: string; mimeType: string; appProperties?: Record<string, string>}[] = [];
  let creates = 0;
  const store = {
    async list() { return [...folders]; },
    async create(name: string, teamId: string) { creates++; const folder = { id: `folder-${teamId}`, name, mimeType: DRIVE_FOLDER, appProperties: { sftTeam: teamId } }; folders.push(folder); return folder; },
    async mark(folder: typeof folders[number], teamId: string) { folder.appProperties = { ...folder.appProperties, sftTeam: teamId }; }
  };
  const first = await ensureTeamFolders(store);
  assert.equal(creates, 7);
  folders[0].name = 'Nome personalizzato';
  assert.deepEqual(await ensureTeamFolders(store), first);
  assert.equal(creates, 7);
  assert.equal(new Set(Object.values(first)).size, 7);
  for (const team of TEAMS) assert.equal(configuredTeamFolder(team.id, JSON.stringify(first)), `folder-${team.id}`);
  assert.equal(configuredTeamFolder('unknown', JSON.stringify(first)), null);
  assert.equal(configuredTeamFolder('scafo', '{invalid-json'), null);
});

test('existing folder is reused, and ambiguous duplicate names do not select arbitrary content', async () => {
  let creates = 0;
  let marked = 0;
  const old = { id: 'existing', name: TEAMS[0].name, mimeType: DRIVE_FOLDER };
  const store = {
    async list() { return [old]; },
    async create(name: string, teamId: string) { creates++; return { id: teamId, name, mimeType: DRIVE_FOLDER }; },
    async mark() { marked++; }
  };
  const map = await ensureTeamFolders(store);
  assert.equal(map.scafo, 'existing'); assert.equal(creates, 6); assert.equal(marked, 1);
  creates = 0;
  await assert.rejects(ensureTeamFolders({ ...store, async list() { return [old, { ...old, id: 'duplicate' }]; } }), /Più cartelle/);
  assert.equal(creates, 0);
});
