import type { Collection } from './model';

type EditorField = { key: string; required?: boolean };
const essentials: Partial<Record<Collection, string[]>> = {
  sponsors: ['title', 'contact', 'email'],
  events: ['title', 'date', 'start_time'],
  deliveries: ['title', 'date'],
  costs: ['title', 'amount_cents', 'date'],
  contracts: ['title', 'url'],
  templates: ['title', 'subject', 'body'],
  offers: ['title', 'description'],
  documents: ['title', 'url'],
  links: ['title', 'url'],
  reports: ['title', 'date', 'content'],
  recurrences: ['title', 'day'],
};
const groups = [
  { id: 'organization', label: 'Organizzazione', keys: ['type', 'stage', 'status', 'category', 'team_id', 'priority', 'day', 'date', 'end_time'] },
  { id: 'contacts', label: 'Contatti e follow-up', keys: ['contact', 'email', 'next_action', 'due_date', 'interviewers'] },
  { id: 'value', label: 'Contributo e accordi', keys: ['amount_cents', 'technical_cents', 'conditions'] },
  { id: 'connections', label: 'Collegamenti e documenti', keys: ['url', 'sponsor_id', 'event_id', 'document_url', 'pitch_url', 'location', 'vendor', 'paid_by', 'icon'] },
  { id: 'notes', label: 'Note e dettagli', keys: ['notes', 'description', 'recap', 'completion_url'] },
];
export function editorLayout<T extends EditorField>(collection: Collection, fields: T[], values: Record<string, string>, existing: boolean, recruitingEvent = false, initialValues = values) {
  const main = new Set(recruitingEvent ? ['date', 'start_time'] : essentials[collection] || fields.map(f => f.key));
  if (existing) main.add(collection === 'sponsors' ? 'stage' : 'status');
  // Never hide a required decision that hasn't already been supplied by the context.
  for (const f of fields) if (f.required && !initialValues[f.key]?.trim()) main.add(f.key);
  if (collection === 'deliveries' && values.status === 'Consegnato / Pubblicato') main.add('completion_url');
  const primary = fields.filter(f => main.has(f.key));
  const secondary = fields.filter(f => !main.has(f.key));
  const sections = groups.map(g => ({ ...g, fields: secondary.filter(f => g.keys.includes(f.key)) })).filter(g => g.fields.length);
  const extra = secondary.filter(f => !groups.some(g => g.keys.includes(f.key)));
  if (extra.length) sections.push({ id: 'extra', label: 'Altri dettagli', keys: extra.map(f => f.key), fields: extra });
  return { primary, groups: sections };
}
