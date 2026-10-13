import type { Report } from './model';
export const REQUEST_STATUSES = ['Da valutare', 'In programma', 'In sviluppo', 'Completata', 'Non prevista'] as const;
export type RequestStatus = typeof REQUEST_STATUSES[number];
export interface FeatureRequest {
  kind: 'crm-feature-request';
  requester: string;
  team: string;
  problem: string;
  proposal: string;
  priority: 'Normale' | 'Alta';
  status: RequestStatus;
  response: string;
}
export function readRequest(report: Report): FeatureRequest | null {
  if (report.team_id !== 'elettronica') return null;
  try {
    const value = JSON.parse(report.content);
    return value?.kind === 'crm-feature-request' && typeof value.requester === 'string' && typeof value.problem === 'string' && typeof value.proposal === 'string' && typeof value.team === 'string' && typeof value.response === 'string' && ['Normale', 'Alta'].includes(value.priority) && REQUEST_STATUSES.includes(value.status) ? value : null;
  } catch { return null; }
}
