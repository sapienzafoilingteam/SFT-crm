import test from 'node:test';
import assert from 'node:assert/strict';
import { requireMemberAccess, requireDriveMember } from '../lib/drive-server';

test('nested checks share access verification only within the same request, and revocation is checked again', async () => {
  const originalFetch = globalThis.fetch;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://member.test'; process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'test-key';
  let authCalls = 0, memberCalls = 0, active = true;
  globalThis.fetch = async input => {
    if (String(input).includes('/auth/')) { authCalls++; return Response.json({ id: '00000000-0000-0000-0000-000000000001', aud: 'authenticated' }); }
    memberCalls++; return Response.json({ active });
  };
  try {
    const request = () => new Request('https://crm.test/api/drive', { headers: { Authorization: 'Bearer test-session' } });
    const first = request(); const [access, client] = await Promise.all([requireMemberAccess(first), requireDriveMember(first)]);
    assert.equal(access.client, client); assert.equal(authCalls, 1); assert.equal(memberCalls, 1);
    active = false;
    await assert.rejects(requireMemberAccess(request()), /membri attivi/); assert.equal(authCalls, 2); assert.equal(memberCalls, 2);
  } finally {
    globalThis.fetch = originalFetch;
    if (url === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL; else process.env.NEXT_PUBLIC_SUPABASE_URL = url;
    if (key === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY; else process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = key;
  }
});
