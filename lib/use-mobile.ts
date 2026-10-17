'use client';
import { useSyncExternalStore } from 'react';
const query = '(max-width: 800px)';
const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};
export function useMobile() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}
