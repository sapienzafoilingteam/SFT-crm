import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const id = (n: number) => `70000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const MIGRATIONS = ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql",
  "202611130001_roles.sql", "202611130002_member_active.sql", "202611130003_captain_attendance.sql",
  "202611150001_team_names.sql", "202611150002_captain_sheet.sql", "202611160001_members_visible.sql",
  "202611200001_captain_powers.sql", "202611210001_project_manager.sql"];

test("Project Manager: reparto obbligatorio e poteri del Team Captain", async () => {
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
    for (const file of MIGRATIONS.slice(0, -1)) await db.exec(await readFile("supabase/migrations/" + file, "utf8"));
    await invite(1, { full_name: "Alberto Carvelli", role: "team_captain" });
    await invite(2, { full_name: "Andrea Giuliotti", team_id: "elettronica" });
    await invite(3, { full_name: "Matteo Valabrega", team_id: "foil", role: "capo_progetto" });
    // Matteo aveva i poteri per nome: con la nuova migrazione diventa Project Manager e l'elenco sparisce.
    await db.exec("reset role;");
    await db.exec(await readFile("supabase/migrations/" + MIGRATIONS.at(-1), "utf8"));
    assert.equal(await db.query("select to_regclass('public.captain_delegates') as t").then(r => (r.rows[0] as { t: string | null }).t), null);
    // Registrazione: Project Manager con reparto (anche insieme a Capo Reparto); senza reparto non vale.
    await invite(5, { full_name: "Michele Arrigo Semeraro", team_id: "scafo", project_manager: true });
    await invite(6, { full_name: "Greta Onali", project_manager: true });
    await invite(7, { full_name: "Stella Tortora", role: "team_captain", project_manager: true });
    await invite(4, { full_name: "Gaia Gattia", team_id: "scafo" });
    const mark = (who: number, present = true) => db.query("select public.set_attendance($1,'2026-11-11'::date,$2)", [id(who), present]);
    const powers = async () => (await db.query<{ p: boolean }>("select public.is_team_captain() as p")).rows[0].p;


    // Matteo Valabrega resta in Foil come Capo Reparto, con i poteri del Team Captain.
    await as(id(3));
    assert.equal(await powers(), true);
    assert.deepEqual((await db.query("select team_id, role, project_manager from members where id=$1", [id(3)])).rows, [{ team_id: "foil", role: "capo_progetto", project_manager: true }]);
    assert.deepEqual((await db.query("select id, team_id, role, project_manager from members where id in ($1,$2,$3) order by id", [id(5), id(6), id(7)])).rows, [
      { id: id(5), team_id: "scafo", role: "membro", project_manager: true },
      { id: id(6), team_id: null, role: "membro", project_manager: false },
      { id: id(7), team_id: null, role: "membro", project_manager: false }]); // combinazione vietata: profilo da completare
    // Il Project Manager corregge reparto e ruoli, anche togliendo o dando Project Manager.
    await db.query("select public.set_member_assignment($1,'scafo','membro',false)", [id(5)]);
    await assert.rejects(db.query("select public.set_member_assignment($1,'','team_captain',true)", [id(5)]), /Project Manager deve indicare anche un reparto/);
    await db.query("select public.set_member_assignment($1,'scafo','capo_progetto',true)", [id(5)]);
    await mark(2); await mark(4); await mark(3);
    await byName("Flavia Gentile");
    await assert.rejects(mark(1), /Solo il Team Captain può segnare la propria presenza/);
    await db.query("select public.set_member_assignment($1,'scafo','membro')", [id(2)]);
    await db.query("select public.set_member_active($1,false)", [id(4)]);
    await db.query("select public.set_member_active($1,true)", [id(4)]);

    // Gli altri membri no.
    await as(id(2));
    assert.equal(await powers(), false);
    await assert.rejects(mark(3), /solo per il tuo reparto/);
    await assert.rejects(byName("Greta Onali"), /Solo il Team Captain/);
    await assert.rejects(db.query("select public.set_member_assignment($1,'foil','membro')", [id(4)]), /Solo il Team Captain/);
    await mark(4, false); // ora è in Scafo, come Gaia
    await assert.rejects(db.exec(`update members set project_manager=true where id='${id(2)}'`));
    // Completamento del profilo come Project Manager.
    await as(id(6));
    await db.query("select public.complete_profile('Greta Onali','materiali','membro',true)");
    assert.equal(await powers(), true);

    // Il Team Captain resta tale.
    await as(id(1));
    assert.equal(await powers(), true);
    await mark(1);
    assert.equal((await db.query("select 1 from attendance")).rows.length, 3);
    assert.deepEqual((await db.query("select full_name, project_manager from public.attendance_roster() where project_manager")).rows.map(r => (r as { full_name: string }).full_name).sort(), ["Greta Onali", "Matteo Valabrega", "Michele Arrigo Semeraro"]);
  } finally {
    await db.close();
  }
});
