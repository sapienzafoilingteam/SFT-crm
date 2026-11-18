import test from 'node:test';
import assert from 'node:assert/strict';
import { GET as getSeed } from '../app/api/social/seed/route';
import { GET as getDemoSeed } from '../app/api/social/demo-seed/route';
test('Social original seed requires authentication and demo seed is never served outside development', async () => {
  const response = await getSeed(new Request('https://crm.test/api/social/seed'));
  assert.equal(response.status, 401);
  assert.equal('slides' in await response.json(), false);
  // Node test mode is not development: no private event media may be exposed by the demo route.
  assert.equal((await getDemoSeed()).status, 404);
});
