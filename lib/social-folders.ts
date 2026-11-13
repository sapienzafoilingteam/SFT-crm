'use client';
import { live, supabase } from './repository';
import { getAccess } from './social-repository';
export interface SocialFolder { id: string; name: string }
const key = 'sft-social-demo-drive-folders';
export async function listSocialFolders(): Promise<SocialFolder[]> {
  if (!live) { const raw = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(raw) ? raw : []; }
  if (!supabase) throw new Error('Configurazione Supabase mancante.');
  const { data, error } = await supabase.from('social_drive_folders').select('id,name').order('name');
  if (error) throw new Error('Impossibile caricare le cartelle Drive collegate.');
  return data as SocialFolder[];
}
export async function saveSocialFolder(folder: SocialFolder): Promise<SocialFolder[]> {
  if (!/^[\w-]+$/.test(folder.id) || !folder.name.trim() || folder.name.length > 300) throw new Error('Cartella Drive non valida.');
  if (!live) { const previous = await listSocialFolders(); localStorage.setItem(key, JSON.stringify([...previous.filter(f => f.id !== folder.id), folder])); }
  else {
    const access = await getAccess(); if (!access.allowed || !supabase) throw new Error('Accesso Social non abilitato.');
    const { error } = await supabase.from('social_drive_folders').upsert({ ...folder, created_by: access.userId });
    if (error) throw new Error('Collegamento cartella non riuscito.');
  }
  return listSocialFolders();
}
