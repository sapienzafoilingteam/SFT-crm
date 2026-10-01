import { TEAMS } from './model';
import { DRIVE_FOLDER, DriveFile } from './google-drive';
type TeamFolder = DriveFile & { appProperties?: Record<string, string> };
export interface TeamFolderStore {
  list(): Promise<TeamFolder[]>;
  create(name: string, teamId: string): Promise<TeamFolder>;
  mark(folder: TeamFolder, teamId: string): Promise<void>;
}
/** Provision once, preserving existing folders and identifying them independently of their name. */
export async function ensureTeamFolders(store: TeamFolderStore) {
  const existing = await store.list();
  const mapping: Record<string, string> = {};
  for (const team of TEAMS) {
    const marked = existing.filter(f => f.mimeType === DRIVE_FOLDER && f.appProperties?.sftTeam === team.id);
    const matching = marked.length ? marked : existing.filter(f => f.mimeType === DRIVE_FOLDER && f.name === team.name && !f.appProperties?.sftTeam);
    if (matching.length > 1) throw new Error(`Più cartelle corrispondono al reparto ${team.name}: selezionare quella corretta prima di procedere.`);
    let folder = matching[0];
    if (!folder) { folder = await store.create(team.name, team.id); existing.push(folder); }
    else if (!folder.appProperties?.sftTeam) await store.mark(folder, team.id);
    mapping[team.id] = folder.id;
  }
  return mapping;
}
export function configuredTeamFolder(teamId: string, raw: string | undefined) {
  if (!TEAMS.some(t => t.id === teamId)) return null;
  try {
    const value = JSON.parse(raw || '{}')[teamId];
    return typeof value === 'string' && /^[a-zA-Z0-9_-]+$/.test(value) ? value : null;
  } catch { return null; }
}
