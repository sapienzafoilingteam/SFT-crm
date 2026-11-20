import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

const id = (n: number) => `70000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const MIGRATIONS = ["202610010001_workspace.sql", "202611110001_attendance.sql", "202611120001_registration_gate.sql",
  "202611130001_roles.sql", "202611130002_member_active.sql", "202611130003_captain_attendance.sql",
  "202611150001_team_names.sql", "202611150002_captain_sheet.sql", "202611160001_members_visible.sql",
  "202611200001_captain_powers.sql"];

test("Poteri del Team Captain per chi resta nel proprio reparto", async () => {
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
    await invite(3, { full_name: "Matteo Valabrega", team_id: "foil", role: "capo_progetto" });
    await invite(4, { full_name: "Gaia Gattia", team_id: "scafo" });
    const mark = (who: number, present = true) => db.query("select public.set_attendance($1,'2026-11-11'::date,$2)", [id(who), present]);
    const powers = async () => (await db.query<{ p: boolean }>("select public.is_team_captain() as p")).rows[0].p;


    // Matteo Valabrega resta in Foil come Capo Reparto, con i poteri del Team Captain.
    await as(id(3));
    assert.equal(await powers(), true);
    assert.deepEqual((await db.query("select team_id, role from members where id=$1", [id(3)])).rows, [{ team_id: "foil", role: "capo_progetto" }]);
    await mark(2); await mark(4); await mark(3);
    await byName("Stella Tortora");
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
    await assert.rejects(db.exec("insert into captain_delegates values ('Andrea Giuliotti')"));

    // Il Team Captain resta tale.
    await as(id(1));
    assert.equal(await powers(), true);
    await mark(1);
    assert.equal((await db.query("select 1 from attendance")).rows.length, 3);
  } finally {
    await db.close();
  }
});
