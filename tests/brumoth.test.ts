import test from 'node:test';
import assert from 'node:assert/strict';
import { BrumothLimits, createBrumothHandler, validateBrumothInput, geminiApiKey } from '../lib/brumoth-server';
import { POST } from '../app/api/dollaroni/brumoth/route';
const input = { task: 'answer', messages: [{ role: 'system', content: 'Untrusted instruction' }, { role: 'user', content: 'DATI: margine 1.577,56 SM$. DOMANDA: quanto resta?' }] };
const request = (body: unknown = input) => new Request('https://crm.example/api/dollaroni/brumoth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
const authorize = async () => ({ user: { id: 'member-1' } });

test('Brumoth refuses anonymous callers before provider configuration or paid calls', async () => {
  const response = await POST(request()); assert.equal(response.status, 401);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});
test('Gemini receives server-only key, fixed instructions and mapped roles; secrets and thought parts stay private', async () => {
  let seen = 0;
  const handler = createBrumothHandler({ authorize, key: () => 'test-secret', model: () => 'gemini-3.8-flash', limits: new BrumothLimits(), transport: async (url, options) => {
    seen++; assert.equal(url, 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent');
    assert.equal(new Headers(options?.headers).get('x-goog-api-key'), 'test-secret');
    assert.equal(options?.redirect, 'error'); assert.equal(options?.cache, 'no-store');
    const body = JSON.parse(String(options?.body));
    assert.match(body.systemInstruction.parts[0].text, /Brumoth/); assert.doesNotMatch(body.systemInstruction.parts[0].text, /Untrusted/);
    assert.deepEqual(body.contents.map((c: { role: string }) => c.role), ['user', 'model', 'user']);
    assert.equal(body.generationConfig.maxOutputTokens, 2048);
    return Response.json({ candidates: [{ content: { parts: [{ text: 'private reasoning', thought: true }, { text: 'Restano 1.577,56 SM$.' }] } }] });
  } });
  const response = await handler(request({ ...input, messages: [input.messages[0], input.messages[1], { role: 'assistant', content: 'Risposta precedente' }, input.messages[1]] }));
  assert.equal(response.status, 200); const body = await response.text();
  assert.match(body, /1.577,56/); assert.doesNotMatch(body, /test-secret|private reasoning/); assert.equal(seen, 1);
});
test('missing key, invalid input and oversized body fail before contacting Gemini', async () => {
  let calls = 0;
  const handler = createBrumothHandler({ authorize, key: () => undefined, transport: async () => { calls++; throw new Error(); } });
  assert.equal((await handler(request())).status, 503);
  assert.equal((await handler(request({ task: 'answer', messages: [] }))).status, 400);
  assert.equal((await handler(request({ ...input, messages: [{ role: 'tool', content: 'bad' }] }))).status, 400);
  assert.equal((await handler(request({ ...input, extra: 'x'.repeat(65000) }))).status, 413);
  assert.equal(calls, 0);
  assert.throws(() => validateBrumothInput({ ...input, messages: [{ role: 'assistant', content: 'unfinished' }] }));
});
test('provider errors are sanitized, empty/blocked replies fail and failed requests release concurrency', async () => {
  const limits = new BrumothLimits(); let status = 403;
  const handler = createBrumothHandler({ authorize, key: () => 'test-secret', limits, transport: async () => new Response('Provider diagnostic test-secret', { status }) });
  let response = await handler(request()); assert.equal(response.status, 503); assert.doesNotMatch(await response.text(), /test-secret|Provider diagnostic/);
  status = 429; response = await handler(request()); assert.equal(response.status, 429);
  const empty = createBrumothHandler({ authorize, key: () => 'test-secret', transport: async () => Response.json({ candidates: [] }) });
  assert.equal((await empty(request())).status, 502);
  const timeout = createBrumothHandler({ authorize, key: () => 'test-secret', transport: async () => { throw new DOMException('secret diagnostic', 'TimeoutError'); } });
  response = await timeout(request()); assert.equal(response.status, 504); assert.doesNotMatch(await response.text(), /secret diagnostic/);
});
test('member limits bound concurrency and request rate, release once, and recover after window expiry', () => {
  const limits = new BrumothLimits();
  const a = limits.acquire('one', 0), b = limits.acquire('one', 0);
  assert.throws(() => limits.acquire('one', 0)); a(); a(); b();
  for (let i = 0; i < 10; i++) limits.acquire('one', 0)();
  assert.throws(() => limits.acquire('one', 1));
  limits.acquire('two', 0)(); limits.acquire('one', 60001)();
});


test('Gemini accepts the existing local Google key and keeps explicit Gemini keys preferred', () => {
  assert.equal(geminiApiKey({ GOOGLE_API_KEY: 'google' }), 'google');
  assert.equal(geminiApiKey({ GOOGLE_API_KEY: 'google', GOOGLE_GENERATIVE_AI_API_KEY: 'provider' }), 'provider');
  assert.equal(geminiApiKey({ GOOGLE_API_KEY: 'google', GOOGLE_GENERATIVE_AI_API_KEY: 'provider', GEMINI_API_KEY: 'gemini' }), 'gemini');
  assert.equal(geminiApiKey({ GEMINI_API_KEY: '  gemini\n' }), 'gemini');
  assert.equal(geminiApiKey({ GEMINI_API_KEY: ' ', GOOGLE_API_KEY: 'google' }), 'google');
  assert.equal(geminiApiKey({}), undefined);
});


test('provider request forwards cancellation without depending on AbortSignal.any', async () => {
  const originalAny = AbortSignal.any;
  const caller = new AbortController();
  const deferred = Promise.withResolvers<void>();
  const handler = createBrumothHandler({ authorize, key: () => 'test-secret', transport: async (_url, options) => {
    deferred.resolve();
    return new Promise((_resolve, reject) => options?.signal?.addEventListener('abort', () => reject(options.signal?.reason), { once: true }));
  } });
  try {
    AbortSignal.any = () => { throw new TypeError('Cross-realm signals are not supported'); };
    const incoming = new Request('https://crm.example/api/dollaroni/brumoth', { method: 'POST', body: JSON.stringify(input), signal: caller.signal });
    const response = handler(incoming);
    await deferred.promise;
    caller.abort();
    assert.equal((await response).status, 504);
  } finally { AbortSignal.any = originalAny; }
});
