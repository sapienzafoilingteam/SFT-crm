import test from 'node:test';
import assert from 'node:assert/strict';
import { GET } from '../app/api/projects/[slug]/route';
import { PROJECTS, readmeUrl } from '../lib/software-projects';
import { defaultUrlTransform } from 'react-markdown';

test('README endpoint rejects unknown projects before contacting GitHub and falls back on service failure', async () => {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => { calls++; return new Response('', { status: 429 }); };
  try {
    const missing = await GET(new Request('http://localhost/api/projects/unknown'), { params: Promise.resolve({ slug: 'unknown' }) });
    assert.equal(missing.status, 404);
    assert.equal(calls, 0);
    for (const project of PROJECTS) {
      const response = await GET(new Request(`http://localhost/api/projects/${project.slug}`), { params: Promise.resolve({ slug: project.slug }) });
      const data = await response.json();
      assert.equal(data.source, 'snapshot');
      assert.equal(data.snapshotDate, '2026-10-13');
      assert.ok(data.markdown.startsWith('# '));
    }
  } finally { globalThis.fetch = original; }
});

test('README endpoint returns updated public content when GitHub responds', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => new Response('# Updated README');
  try {
    const response = await GET(new Request('http://localhost/api/projects/crm'), { params: Promise.resolve({ slug: 'crm' }) });
    assert.deepEqual(await response.json(), { markdown: '# Updated README', source: 'github' });
  } finally { globalThis.fetch = original; }
});

test('README links resolve documentation and images on GitHub and reject executable URLs', () => {
  const project = PROJECTS[2];
  assert.equal(readmeUrl('docs/PROTOCOL.md#gps', project), 'https://github.com/sapienzafoilingteam/sft-telemetry-lab/blob/main/docs/PROTOCOL.md#gps');
  assert.equal(readmeUrl('assets/chart.png', project, true), 'https://raw.githubusercontent.com/sapienzafoilingteam/sft-telemetry-lab/main/assets/chart.png');
  assert.equal(readmeUrl('#avvio', project), 'https://github.com/sapienzafoilingteam/sft-telemetry-lab#avvio');
  for (const value of ['javascript:alert(1)', 'data:text/html,<script>', 'vbscript:msgbox(1)']) assert.equal(defaultUrlTransform(readmeUrl(value, project)), '');
});
