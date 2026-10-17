export const MOBILE_TABS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/agenda', label: 'Agenda', key: 'agenda' },
  { href: '/reparti', label: 'Reparti', key: 'reparti' },
  { href: '/drive', label: 'Drive', key: 'drive' },
  { href: '/altro', label: 'Altro', key: 'altro' },
] as const;
export function mobileTab(section: string) {
  if (section === 'team' || section === 'reparti') return 'reparti';
  return ['home', 'agenda', 'drive'].includes(section) ? section : 'altro';
}
export function mobileParent(path: readonly string[]) {
  if (path[0] === 'team') return path.length > 2 ? `/team/${path[1]}` : '/reparti';
  return MOBILE_TABS.some(tab => tab.href === `/${path.join('/')}`) || !path.length ? null : '/altro';
}
