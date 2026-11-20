import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const id = (n: number) => `80000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const MIGRATIONS = ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql",
  "202611130001_roles.sql", "202611130002_member_active.sql", "202611130003_captain_attendance.sql",
  "202611150001_team_names.sql", "202611150002_captain_sheet.sql", "202611160001_members_visible.sql",
  "202611200001_captain_powers.sql", "202611210001_project_manager.sql", "202611220001_named_powers.sql"];

test("Poteri per nome (Giuliotti, Pernazza) e presenze solo il mercoledì", async () => {
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
    await invite(3, { full_name: "Gaia Gattia", team_id: "scafo" });
    await invite(4, { full_name: "Matteo Valabrega", team_id: "foil", project_manager: true });
    const mark = (who: number, present = true, date = "2026-11-18") => db.query("select public.set_attendance($1,$2::date,$3)", [id(who), date, present]);
    const powers = async () => (await db.query<{ p: boolean }>("select public.is_team_captain() as p")).rows[0].p;


    // Solo i due nomi dell'elenco, oltre a Team Captain e Project Manager.
    assert.deepEqual((await db.query<{ full_name: string }>("select full_name from captain_names order by 1")).rows.map(r => r.full_name), ["Andrea Giuliotti", "Giovanni Battista Pernazza"]);
    await as(id(2));
    assert.equal(await powers(), true);
    await mark(3); // altro reparto
    await byName("Giovanni Battista Pernazza"); // non ancora registrato
    await db.query("select public.set_member_assignment($1,'foil','membro',false)", [id(3)]);
    await assert.rejects(mark(1), /Solo il Team Captain può segnare la propria presenza/);
    await as(id(4));
    assert.equal(await powers(), true);
    await as(id(3));
    assert.equal(await powers(), false);
    await assert.rejects(mark(2), /solo per il tuo reparto/);
    await assert.rejects(db.exec("insert into captain_names values ('Gaia Gattia')"));

    // Le presenze si segnano solo per i mercoledì, anche con i poteri.
    await assert.rejects(mark(3, true, "2026-11-19"), /solo per le riunioni del mercoledì/);
    await as(id(2));
    await assert.rejects(mark(3, true, "2026-11-20"), /solo per le riunioni del mercoledì/);
    await assert.rejects(byName("Stella Tortora", true, "2026-11-17"), /solo per le riunioni del mercoledì/);
    await mark(2, true, "2026-11-11");

    // Registrandosi con il nome dell'elenco i poteri arrivano con l'account.
    await invite(5, { full_name: "Giovanni Battista Pernazza", team_id: "elettronica" });
    await as(id(5));
    assert.equal(await powers(), true);
  } finally {
    await db.close();
  }
});
