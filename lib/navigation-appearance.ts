'use client';
import { useSyncExternalStore } from 'react';

type NavigationPreference = 'auto' | 'ios' | 'android';
const storageKey = 'sft-navigation-appearance-v1';
const changeEvent = 'sft:navigation-appearance';
let fallback: NavigationPreference | null = null;
function readPreference(): NavigationPreference {
  if (fallback) return fallback;
  try {
    const value = localStorage.getItem(storageKey);
    return value === 'ios' || value === 'android' ? value : 'auto';
  } catch { return 'auto'; }
}
function subscribe(notify: () => void) {
  const storageChanged = (event: StorageEvent) => { if (!event.key || event.key === storageKey) notify(); };
  window.addEventListener(changeEvent, notify);
  window.addEventListener('storage', storageChanged);
  return () => { window.removeEventListener(changeEvent, notify); window.removeEventListener('storage', storageChanged); };
}
function setPreference(value: NavigationPreference) {
  try { localStorage.setItem(storageKey, value); fallback = null; } catch { fallback = value; }
  window.dispatchEvent(new Event(changeEvent));
}
function readAppearance() {
  const preference = readPreference();
  const platform = /Android/i.test(navigator.userAgent) ? 'android' : 'ios';
  return `${preference}:${preference === 'auto' ? platform : preference}`;
}
export function useNavigationAppearance() {
  const snapshot = useSyncExternalStore(subscribe, readAppearance, () => 'auto:ios');
  const [preference, style] = snapshot.split(':') as [NavigationPreference, 'ios' | 'android'];
  return { preference, style, setPreference };
}
