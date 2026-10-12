import test from 'node:test';
import assert from 'node:assert/strict';
import { ServiceTokenCache } from '../lib/server-token-cache';

test('Google token refresh is deduplicated, expires early and follows credential rotation', async () => {
  const cache = new ServiceTokenCache(); let calls = 0;
  const fetchToken = async () => ({ access_token: 'token-' + ++calls, expires_in: 3600 });
  const [a, b] = await Promise.all([cache.get(['one'], fetchToken, 1000), cache.get(['one'], fetchToken, 1000)]);
  assert.equal(a, b); assert.equal(calls, 1);
  assert.equal(await cache.get(['one'], fetchToken, 2000), a); assert.equal(calls, 1);
  await cache.get(['one'], fetchToken, 3541001); assert.equal(calls, 2);
  await cache.get(['rotated'], fetchToken, 3541001); assert.equal(calls, 3);
});
test('a rejected token request is retryable and tokens with no expiry are never reused', async () => {
  const cache = new ServiceTokenCache();
  await assert.rejects(cache.get(['one'], async () => { throw new Error('offline'); }));
  let calls = 0; const fetchToken = async () => ({ access_token: 'token-' + ++calls });
  await cache.get(['one'], fetchToken); await cache.get(['one'], fetchToken); assert.equal(calls, 2);
});
