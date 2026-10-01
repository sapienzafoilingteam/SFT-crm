import { test } from 'node:test';
import assert from 'node:assert/strict';
import { driveTarget } from '../lib/drive-proxy-policy';
import { GET, POST } from '../app/api/drive/route';

test('proxy Drive refuses foreign hosts, credential URLs, deletion and non-Drive APIs', () => {
  for (const [url, method] of [
    ['https://evil.test/drive/v3/files', 'GET'],
    ['https://www.googleapis.com/oauth2/v2/userinfo', 'GET'],
    ['https://www.googleapis.com/drive/v3/files/a', 'DELETE'],
    ['https://www.googleapis.com/drive/v3/files?access_token=secret', 'GET'],
    ['https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&upload_id=a', 'PUT'],
    ['https://name@www.googleapis.com/drive/v3/files', 'GET'],
  ]) assert.throws(() => driveTarget(url, method));
  assert.equal(driveTarget('https://www.googleapis.com/drive/v3/about?fields=storageQuota', 'GET').pathname, '/drive/v3/about');
});

test('Drive endpoint checks CRM session and active membership before Google; credentials never reach response', async () => {
  const originalFetch = globalThis.fetch;
  const keys = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY', 'GOOGLE_DRIVE_CLIENT_ID', 'GOOGLE_DRIVE_CLIENT_SECRET', 'GOOGLE_DRIVE_REFRESH_TOKEN'];
  const old = keys.map(k => process.env[k]);
  Object.assign(process.env, { NEXT_PUBLIC_SUPABASE_URL: 'https://crm.test', NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: 'public-test',
    GOOGLE_DRIVE_CLIENT_ID: 'client-test', GOOGLE_DRIVE_CLIENT_SECRET: 'secret-test', GOOGLE_DRIVE_REFRESH_TOKEN: 'refresh-test' });
  let active = false;
  let googleCalls = 0;
  const id = '00000000-0000-0000-0000-000000000001';
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url.includes('/auth/v1/user')) return Response.json({ id, aud: 'authenticated', email: 'member@test.com' });
    if (url.includes('/rest/v1/members')) return Response.json({ active });
    googleCalls++;
    if (url === 'https://oauth2.googleapis.com/token') {
      assert.match(String(init?.body), /grant_type=refresh_token/);
      return Response.json({ access_token: 'google-secret-access-token' });
    }
    assert.equal(new Headers(init?.headers).get('Authorization'), 'Bearer google-secret-access-token');
    return Response.json({ storageQuota: { limit: '1000', usage: '250' } });
  };
  const request = (auth = true, target = 'https://www.googleapis.com/drive/v3/about?fields=storageQuota') => new Request('https://crm.test/api/drive', {
    method: 'POST', headers: auth ? { Authorization: 'Bearer member-session' } : {}, body: JSON.stringify({ url: target, method: 'GET' }) });
  try {
    assert.equal((await GET(new Request('https://crm.test/api/drive'))).status, 401);
    assert.equal((await POST(request(false))).status, 401);
    assert.equal((await POST(request())).status, 403);
    assert.equal(googleCalls, 0);
    active = true;
    assert.equal((await POST(request(true, 'https://evil.test'))).status, 400);
    assert.equal(googleCalls, 0);
    const response = await POST(request());
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
    const body = await response.text();
    assert.match(body, /storageQuota/);
    assert.doesNotMatch(body, /secret|refresh-test|member-session/);
    active = false;
    assert.equal((await POST(request())).status, 403);
    assert.equal(googleCalls, 2, 'deactivation immediately blocks later requests');
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((k, i) => { if (old[i] === undefined) delete process.env[k]; else process.env[k] = old[i]; });
  }
});
