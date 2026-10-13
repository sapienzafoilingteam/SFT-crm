import test from 'node:test';
import assert from 'node:assert/strict';
import { base, SEASONS, type Report } from '../lib/model';
import { readRequest } from '../lib/feature-requests';
import { routeCollections } from '../lib/workspace-resources';
test('CRM requests remain distinguishable from ordinary department reports', () => {
  const report: Report = { ...base(SEASONS[0].id), team_id: 'elettronica', title: 'Richiesta', content: '', date: '2026-10-13', url: '' };
  const request = { kind: 'crm-feature-request', requester: 'Mario', team: 'scafo', problem: 'Problema', proposal: 'Proposta', priority: 'Normale', status: 'Da valutare', response: '' };
  assert.equal(readRequest(report), null);
  assert.equal(readRequest({ ...report, content: 'Aggiornamento del reparto' }), null);
  assert.deepEqual(readRequest({ ...report, content: JSON.stringify(request) }), request);
  assert.equal(readRequest({ ...report, content: JSON.stringify({ ...request, status: 'invalid' }) }), null);
  assert.equal(readRequest({ ...report, team_id: 'scafo', content: JSON.stringify(request) }), null);
  assert.ok(routeCollections(['richieste-crm']).includes('reports'));
});
