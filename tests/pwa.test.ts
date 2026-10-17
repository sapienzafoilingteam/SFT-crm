import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function worker() {
  const handlers: Record<string, (event: any) => void> = {};
  const cached: string[] = [], deleted: string[] = [];
  const fallback = new Response('Offline pubblico');
  let failNetwork = false, activated = false;
  const context = {
    URL, Response,
    self: {
      location: { origin: 'https://crm.example' },
      addEventListener: (name: string, handler: (event: any) => void) => { handlers[name] = handler; },
      clients: { claim: async () => undefined },
      skipWaiting: () => { activated = true; },
    },
    caches: {
      open: async () => ({ addAll: async (paths: string[]) => { cached.push(...paths); } }),
      keys: async () => ['sft-public-offline-v0', 'sft-public-offline-v2', 'other-app'],
      delete: async (name: string) => { deleted.push(name); return true; },
      match: async () => fallback,
    },
    fetch: async () => { if (failNetwork) throw new Error('offline'); return new Response('Private workspace'); },
  };
  vm.runInNewContext(readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8'), context);
  return { handlers, cached, deleted, fallback, offline: () => { failNetwork = true; }, active: () => activated };
}
test('PWA installation caches only the public fallback and never removes another app cache', async () => {
  const w = worker(); let pending: Promise<unknown> | undefined;
  w.handlers.install({ waitUntil: (p: Promise<unknown>) => { pending = p; } }); await pending;
  assert.deepEqual(w.cached, ['/offline.html', '/pwa/offline.js']);
  w.handlers.activate({ waitUntil: (p: Promise<unknown>) => { pending = p; } }); await pending;
  assert.deepEqual(w.deleted, ['sft-public-offline-v0']);
  assert.equal(w.active(), false);
  w.handlers.message({ data: { type: 'ACTIVATE_UPDATE' } }); assert.equal(w.active(), true);
});
test('PWA bypasses APIs, writes, cross-origin requests and authenticated assets', () => {
  const w = worker();
  for (const [url, method, mode] of [
    ['https://crm.example/api/drive', 'GET', 'cors'], ['https://crm.example/api/calendar', 'POST', 'cors'],
    ['https://crm.example/api/recruiting/attachment', 'GET', 'cors'], ['https://crm.example/_next/static/app.js', 'GET', 'cors'],
    ['https://other.example/private', 'GET', 'navigate'],
  ]) {
    let intercepted = false;
    w.handlers.fetch({ request: { url, method, mode }, respondWith: () => { intercepted = true; } });
    assert.equal(intercepted, false, url);
  }
});
test('navigation uses the network without caching private content and falls back only on a connection error', async () => {
  const w = worker(); let response: Promise<Response> | undefined;
  const event = { request: { url: 'https://crm.example/team/management', method: 'GET', mode: 'navigate' }, respondWith: (p: Promise<Response>) => { response = p; } };
  w.handlers.fetch(event); assert.equal(await (await response)!.text(), 'Private workspace'); assert.deepEqual(w.cached, []);
  w.offline(); w.handlers.fetch(event); assert.equal(await response, w.fallback); assert.deepEqual(w.cached, []);
});
