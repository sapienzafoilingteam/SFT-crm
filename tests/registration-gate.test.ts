import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const TEAM_PASSWORD = "Password-del-team-2026";
const id = (n: number) => `30000000-0000-4000-8000-${String(n).padStart(12, "0")}`;

test("registrazione consentita solo con la password dell'account del team", async () => {
  const db = new PGlite({ extensions: { pgcrypto } });
  // Come Supabase Auth: l'utente viene inserito e, per gli inviti, invited_at è impostato dopo
  // nella stessa transazione; il controllo avviene alla fine della transazione.
  const signup = async (n: number, meta: object, invited = false) => {
    await db.exec("begin");
    try {
      await db.query("insert into auth.users(id,email,raw_user_meta_data) values($1,$2,$3::jsonb)", [id(n), `utente${n}@example.com`, JSON.stringify(meta)]);
      if (invited) await db.query("update auth.users set invited_at = now() where id = $1", [id(n)]);
      await db.exec("commit");
    } catch (error) { await db.exec("rollback"); throw error; }
  };
  const issue = async (password: string, ip = "10.0.0.1") => {
    await db.exec(`reset role; set request.headers = '{"x-forwarded-for":"${ip}, 172.16.0.1"}'; set role anon;`);
    try { return (await db.query<{ token: string | null }>("select public.issue_registration_token($1) as token", [password])).rows[0].token; }
    finally { await db.exec("reset role;"); }
  };
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}'::jsonb, email_confirmed_at timestamptz, invited_at timestamptz, encrypted_password text);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
      create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
      create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text);
      alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated;`);
    for (const file of ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql"])
      await db.exec(await readFile("supabase/migrations/" + file, "utf8"));
    // Account del team già esistente (creato da invito), con password bcrypt come in Supabase Auth.
    await db.exec("begin");
    await db.query(`insert into auth.users(id,email,encrypted_password)
      values($1,'SapienzaFoilingTeam@gmail.com',extensions.crypt($2,extensions.gen_salt('bf')))`, [id(1), TEAM_PASSWORD]);
    await db.query("update auth.users set invited_at = now() where id = $1", [id(1)]);
    await db.exec("commit");

    // Senza codice, o con un codice inventato, nessun account viene creato.
    await assert.rejects(signup(2, { full_name: "Mario Rossi", team_id: "foil" }), /riservata ai membri/);
    await assert.rejects(signup(2, { full_name: "Mario Rossi", team_id: "foil", registration_token: "abc" }), /non valido o scaduto/);

    assert.equal(await issue("password-sbagliata"), null);
    const token = await issue(TEAM_PASSWORD);
    assert.match(token || "", /^[0-9a-f]{48}$/);
    await signup(2, { full_name: "Mario Rossi", team_id: "foil", registration_token: token });
    const created = await db.query<{ meta: Record<string, unknown>; full_name: string; team_id: string; active: boolean }>(
      "select u.raw_user_meta_data as meta, m.full_name, m.team_id, m.active from auth.users u join members m using(id) where u.id=$1", [id(2)]);
    assert.deepEqual({ ...created.rows[0], meta: { ...created.rows[0].meta, registration_token: undefined } },
      { meta: { full_name: "Mario Rossi", team_id: "foil", registration_token: undefined }, full_name: "Mario Rossi", team_id: "foil", active: false });
    assert.equal((await db.query("select * from registration_tokens")).rows.length, 0);
    // Il codice vale una sola volta.
    await assert.rejects(signup(3, { full_name: "Anna Bianchi", team_id: "foil", registration_token: token }), /non valido o scaduto/);
    // Codice scaduto.
    const late = await issue(TEAM_PASSWORD);
    await db.exec("update registration_tokens set expires_at = now() - interval '1 minute'");
    await assert.rejects(signup(3, { full_name: "Anna Bianchi", team_id: "foil", registration_token: late }), /non valido o scaduto/);
    // Gli inviti dalla console restano possibili.
    await signup(4, {}, true);

    // Limite tentativi per indirizzo: dopo 5 errori in 15 minuti la verifica si blocca, anche con la password giusta.
    for (let i = 0; i < 5; i++) assert.equal(await issue("errata", "10.0.0.9"), null);
    await assert.rejects(issue(TEAM_PASSWORD, "10.0.0.9"), /Troppi tentativi/);
    assert.ok(await issue(TEAM_PASSWORD, "10.0.0.2"));

    // Tabelle interne non leggibili con la chiave pubblica.
    await db.exec("set role anon;");
    await assert.rejects(db.query("select * from registration_tokens"));
    await assert.rejects(db.query("select * from registration_attempts"));
  } finally {
    await db.close();
  }
});
