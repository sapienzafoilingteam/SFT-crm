import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const TEAM_PASSWORD = "Password-del-team-2026";
const id = (n: number) => `50000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const MIGRATIONS = ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql",
  "202611130001_roles.sql", "202611130002_member_active.sql", "202611130003_captain_attendance.sql"];

test("nomi scelti dall'elenco del team: registrazione, profilo e pagina Presenze", async () => {
  const db = new PGlite({ extensions: { pgcrypto } });
  const as = (who: string) => db.exec(`reset role; set role authenticated; set "request.jwt.claim.sub"='${who}';`);
  // Account creati come da invito (il controllo della password del team è testato a parte).
  const invite = async (n: number, meta: object) => {
    await db.exec("reset role; begin");
    await db.query("insert into auth.users(id,email,raw_user_meta_data,email_confirmed_at,invited_at) values($1,$2,$3::jsonb,now(),now())", [id(n), `u${n}@example.com`, JSON.stringify(meta)]);
    await db.exec("commit");
  };
  const member = async (n: number) => (await db.query<{ full_name: string; team_id: string | null; role: string }>(
    "select full_name,team_id,role from members where id=$1", [id(n)])).rows[0];
  const available = async (token?: string) => (await db.query<{ n: string }>("select public.available_names($1) as n", [token ?? null])).rows.map(r => r.n);
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}'::jsonb, email_confirmed_at timestamptz, invited_at timestamptz, encrypted_password text);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
      create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
      create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text);
      alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated;`);
    for (const file of MIGRATIONS) await db.exec(await readFile("supabase/migrations/" + file, "utf8"));
    await db.exec("begin");
    await db.query(`insert into auth.users(id,email,encrypted_password,invited_at) values($1,'sapienzafoilingteam@gmail.com',extensions.crypt($2,extensions.gen_salt('bf')),now())`, [id(99), TEAM_PASSWORD]);
    await db.exec("commit");

    // Account già esistenti: nome uguale a meno delle maiuscole, nome fuori elenco, Team Captain.
    await invite(1, { full_name: "ANDREA GIULIOTTI", team_id: "foil" });
    await invite(2, { full_name: "Mario Rossi", team_id: "scafo", role: "capo_progetto" });
    await invite(3, { full_name: "Alberto Carvelli", role: "team_captain" });
    await db.exec(await readFile("supabase/migrations/202611150001_team_names.sql", "utf8"));
    assert.deepEqual(await member(1), { full_name: "Andrea Giuliotti", team_id: "foil", role: "membro" });
    assert.deepEqual(await member(2), { full_name: "", team_id: "scafo", role: "capo_progetto" });
    assert.deepEqual(await member(3), { full_name: "Alberto Carvelli", team_id: null, role: "team_captain" });

    // Senza codice e senza account l'elenco non è leggibile.
    await db.exec("set role anon");
    assert.deepEqual(await available(), []);
    assert.deepEqual(await available("inventato"), []);
    await assert.rejects(db.query("select * from public.team_names"));
    await assert.rejects(db.query("select public.team_name_list()"));
    await db.exec("reset role; set role anon");
    const token = (await db.query<{ t: string }>("select public.issue_registration_token($1) as t", [TEAM_PASSWORD])).rows[0].t;
    const free = await available(token);
    assert.equal(free.length, 41 - 2);
    assert.ok(free.includes("Valerio Persio") && free.includes("Gianmarco Salvi") && !free.includes("Andrea Giuliotti") && !free.includes("Alberto Carvelli"));

    // Registrazione: nome libero dell'elenco; un nome già preso o inventato resta vuoto (da scegliere al primo accesso).
    await invite(4, { full_name: "Valerio Persio", team_id: "foil" });
    await invite(5, { full_name: "Valerio Persio", team_id: "foil" });
    await invite(6, { full_name: "Nome Inventato", team_id: "foil" });
    assert.equal((await member(4)).full_name, "Valerio Persio");
    assert.equal((await member(5)).full_name, "");
    assert.equal((await member(6)).full_name, "");
    await db.exec("reset role");
    await assert.rejects(db.exec(`update members set full_name='Valerio Persio' where id='${id(5)}'`), /unique|duplicate/);

    // Pagina Presenze: tutti i nomi dell'elenco, registrati o no.
    await as(id(1));
    const list = (await db.query<{ n: string }>("select public.team_name_list() as n")).rows.map(r => r.n);
    assert.equal(list.length, 41);
    // Nessuno cambia il proprio nome direttamente.
    await db.exec(`update members set full_name='Stella Tortora' where id='${id(1)}'`).catch(() => {});
    assert.equal((await member(1)).full_name, "Andrea Giuliotti");
    await assert.rejects(db.query("select public.complete_profile('Stella Tortora','foil','membro')"), /già completo/);

    // Nome svuotato dalla migrazione: lo sceglie dall'elenco, reparto e ruolo restano quelli di prima.
    await as(id(2));
    assert.ok(!(await available()).includes("Valerio Persio"));
    await assert.rejects(db.query("select public.complete_profile('Mario Rossi','','team_captain')"), /elenco del team/);
    await assert.rejects(db.query("select public.complete_profile('Valerio Persio','','membro')"), /elenco del team/);
    await db.query("select public.complete_profile('Stella Tortora','','team_captain')");
    assert.deepEqual(await member(2), { full_name: "Stella Tortora", team_id: "scafo", role: "capo_progetto" });
    await assert.rejects(db.query("select public.complete_profile('Greta Onali','','membro')"), /già completo/);

    // Registrazione con nome già preso: sceglie un altro nome libero.
    await as(id(5));
    await db.query("select public.complete_profile('Gianmarco Salvi','foil','membro')");
    assert.deepEqual(await member(5), { full_name: "Gianmarco Salvi", team_id: "foil", role: "membro" });
  } finally {
    await db.close();
  }
});
