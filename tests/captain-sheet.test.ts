import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const id = (n: number) => `60000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const MIGRATIONS = ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql",
  "202611130001_roles.sql", "202611130002_member_active.sql", "202611130003_captain_attendance.sql",
  "202611150001_team_names.sql", "202611150002_captain_sheet.sql", "202611160001_members_visible.sql"];

test("Team Captain: presenze dalla tabella anche per chi non ha un account", async () => {
  const db = new PGlite({ extensions: { pgcrypto } });
  const as = (who: string) => db.exec(`reset role; set role authenticated; set "request.jwt.claim.sub"='${who}';`);
  const invite = async (n: number, meta: object, confirmed = true) => {
    await db.exec("reset role; begin");
    await db.query("insert into auth.users(id,email,raw_user_meta_data,email_confirmed_at,invited_at) values($1,$2,$3::jsonb,$4,now())",
      [id(n), `u${n}@example.com`, JSON.stringify(meta), confirmed ? new Date().toISOString() : null]);
    await db.exec("commit");
  };
  const byName = (name: string, present = true, date = "2026-11-11") => db.query("select public.set_name_attendance($1,$2::date,$3)", [name, date, present]);
  const nameRows = async () => (await db.query<{ full_name: string; meeting_date: string }>("select full_name, meeting_date::text from name_attendance order by 1,2")).rows;
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}'::jsonb, email_confirmed_at timestamptz, invited_at timestamptz, encrypted_password text);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
      create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
      create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text);
      alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated;`);
    for (const file of MIGRATIONS) await db.exec(await readFile("supabase/migrations/" + file, "utf8"));
    await invite(1, { full_name: "Alberto Carvelli", role: "team_captain" });
    await invite(2, { full_name: "Andrea Giuliotti", team_id: "elettronica" });

    // Un membro qualunque non può segnare per nome.
    await as(id(2));
    // Account del team: tutti vedono l'elenco, ma solo il Team Captain modifica.
    assert.equal((await db.query("select email from members")).rows.length, 2);
    await assert.rejects(db.query("select public.set_member_active($1,false)", [id(1)]), /Solo gli amministratori e il Team Captain/);
    await assert.rejects(db.query("select public.set_member_assignment($1,'foil','membro')", [id(1)]), /Solo il Team Captain/);
    await db.exec(`update members set active=false where id='${id(1)}'`);
    assert.equal((await db.query<{ active: boolean }>(`select active from members where id='${id(1)}'`)).rows[0].active, true);
    await assert.rejects(byName("Stella Tortora"), /Solo il Team Captain/);

    await as(id(1));
    await byName("Stella Tortora");
    await byName("Stella Tortora", true, "2026-11-04");
    await byName("Stella Tortora"); // idempotente
    await byName("Greta Onali");
    await byName("Greta Onali", false);
    assert.deepEqual(await nameRows(), [{ full_name: "Stella Tortora", meeting_date: "2026-11-04" }, { full_name: "Stella Tortora", meeting_date: "2026-11-11" }]);
    await assert.rejects(byName("Nome Inventato"), /elenco del team/);
    // Chi ha già un account attivo si segna con set_attendance (anche dalla tabella, per il Team Captain).
    await assert.rejects(byName("Andrea Giuliotti"), /ha già un account/);
    await db.query("select public.set_attendance($1,'2026-11-11'::date,true)", [id(2)]);
    // Lettura per i membri, scrittura diretta vietata.
    await as(id(2));
    assert.equal((await db.query("select * from name_attendance")).rows.length, 2);
    await assert.rejects(db.exec("delete from name_attendance"));

    // Registrazione con quel nome: finché l'account non è attivo le presenze restano sul nome...
    await invite(3, { full_name: "Stella Tortora", team_id: "foil" }, false);
    assert.equal((await nameRows()).length, 2);
    // ...alla conferma passano all'account, con il suo reparto.
    await db.exec(`reset role; update auth.users set email_confirmed_at = now() where id = '${id(3)}'`);
    assert.deepEqual(await nameRows(), []);
    const moved = await db.query<{ meeting_date: string; team_id: string; marked_by: string }>(
      "select meeting_date::text, team_id, marked_by from attendance where member_id=$1 order by 1", [id(3)]);
    assert.deepEqual(moved.rows, [{ meeting_date: "2026-11-04", team_id: "foil", marked_by: id(1) }, { meeting_date: "2026-11-11", team_id: "foil", marked_by: id(1) }]);
    const audit = await db.query<{ action: string }>("select action from audit_log where table_name='name_attendance' order by id");
    assert.deepEqual(audit.rows.map(r => r.action), ["PRESENTE", "PRESENTE", "PRESENTE", "ASSENTE"]);
  } finally {
    await db.close();
  }
});
