import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { assignment, canMarkTeam, validAssignment } from "../lib/attendance";

const id = (n: number) => `40000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
const captain = id(1), lead = id(2), scafo = id(3), foil = id(4), invalid = id(5), admin = id(6), legacy = id(7);

test("combinazioni reparto/ruolo lato client", () => {
  assert.deepEqual(assignment("scafo", false), { team_id: "scafo", role: "membro" });
  assert.deepEqual(assignment("scafo", true), { team_id: "scafo", role: "capo_progetto" });
  assert.deepEqual(assignment("team_captain", true), { team_id: null, role: "team_captain" });
  assert.ok(validAssignment("foil", "membro") && validAssignment("foil", "capo_progetto") && validAssignment(null, "team_captain"));
  assert.ok(!validAssignment("foil", "team_captain") && !validAssignment(null, "capo_progetto") && !validAssignment(null, "membro"));
  assert.ok(canMarkTeam({ team_id: null, role: "team_captain" }, "foil"));
  assert.ok(canMarkTeam({ team_id: "foil", role: "membro" }, "foil"));
  assert.ok(!canMarkTeam({ team_id: "scafo", role: "capo_progetto" }, "foil"));
});

test("Team Captain: presenze in ogni reparto e correzione dei reparti", async () => {
  const db = new PGlite();
  const as = (who: string) => db.exec(`reset role; set role authenticated; set "request.jwt.claim.sub"='${who}';`);
  const signup = (who: string, email: string, meta: object) =>
    db.query("insert into auth.users(id,email,raw_user_meta_data,email_confirmed_at) values($1,$2,$3::jsonb,now())", [who, email, JSON.stringify(meta)]);
  const mark = (member: string, present = true) => db.query("select public.set_attendance($1,'2026-11-13'::date,$2)", [member, present]);
  const assign = (member: string, team: string, role: string) => db.query("select public.set_member_assignment($1,$2,$3)", [member, team, role]);
  const profile = async (who: string) => (await db.query<{ team_id: string | null; role: string }>("select team_id,role from members where id=$1", [who])).rows[0];
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}'::jsonb, email_confirmed_at timestamptz);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
      create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
      create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text);
      alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated;`);
    for (const file of ["202610010001_workspace.sql", "202611110001_attendance.sql"])
      await db.exec(await readFile("supabase/migrations/" + file, "utf8"));
    // Account creato prima dei ruoli, senza profilo.
    await signup(legacy, "vecchio@example.com", {});
    await db.exec(await readFile("supabase/migrations/202611130001_roles.sql", "utf8"));
    await db.exec(await readFile("supabase/migrations/202611130002_member_active.sql", "utf8"));
    assert.deepEqual(await profile(legacy), { team_id: null, role: "membro" });

    await signup(captain, "captain@example.com", { full_name: "Carla Capitano", team_id: null, role: "team_captain" });
    await signup(lead, "lead@example.com", { full_name: "Luca Capo", team_id: "scafo", role: "capo_progetto" });
    await signup(scafo, "scafo@example.com", { full_name: "Sara Scafo", team_id: "scafo", role: "membro" });
    await signup(foil, "foil@example.com", { full_name: "Fabio Foil", team_id: "foil" });
    // Combinazioni vietate: reparto + Team Captain, Capo Progetto senza reparto → profilo da completare.
    await signup(invalid, "x@example.com", { full_name: "Ivo Errato", team_id: "foil", role: "team_captain" });
    await signup(admin, "admin@example.com", { full_name: "Ada Admin", team_id: "foil", role: "capo_progetto" });
    assert.deepEqual(await profile(captain), { team_id: null, role: "team_captain" });
    assert.deepEqual(await profile(lead), { team_id: "scafo", role: "capo_progetto" });
    assert.deepEqual(await profile(foil), { team_id: "foil", role: "membro" });
    assert.deepEqual(await profile(invalid), { team_id: null, role: "membro" });
    await assert.rejects(db.exec(`update members set team_id='foil' where id='${captain}'`), /members_role_team/);
    await assert.rejects(db.exec(`update members set team_id=null where id='${lead}'`), /members_role_team/);
    await db.exec(`update members set is_admin=true where id='${admin}'`);

    // Il registro espone il ruolo; il Team Captain non compare tra i membri di un reparto.
    await as(foil);
    const roster = await db.query<{ full_name: string; role: string }>("select full_name,role from public.attendance_roster()");
    assert.ok(!roster.rows.some(r => r.full_name === "Carla Capitano"));
    assert.equal(roster.rows.find(r => r.full_name === "Luca Capo")?.role, "capo_progetto");

    // Il Capo Progetto resta limitato al proprio reparto.
    await as(lead);
    await mark(scafo);
    await assert.rejects(mark(foil), /tuo reparto/);
    // Il Team Captain segna e toglie presenze in ogni reparto.
    await as(captain);
    await mark(foil); await mark(lead); await mark(scafo, false);
    assert.deepEqual((await db.query<{ member_id: string }>("select member_id from attendance order by member_id")).rows.map(r => r.member_id), [lead, foil]);
    await assert.rejects(mark(captain), /non appartiene a un reparto/);

    // Profilo incompleto: si completa anche come Team Captain, non con reparto + Team Captain.
    await as(invalid);
    await assert.rejects(db.query("select public.complete_profile('Ivo Errato','foil','team_captain')"), /singolo reparto/);
    await assert.rejects(db.query("select public.complete_profile('Ivo Errato','','capo_progetto')"), /Reparto non valido/);
    await db.query("select public.complete_profile('Ivo Errato','foil','capo_progetto')");
    assert.deepEqual(await profile(invalid), { team_id: "foil", role: "capo_progetto" });
    await assert.rejects(db.query("select public.complete_profile('Ivo Errato','','team_captain')"), /già completo/);

    // Solo il Team Captain corregge reparto e ruolo; un amministratore no, nemmeno con update diretto.
    await as(admin);
    await assert.rejects(assign(foil, "scafo", "membro"), /Solo il Team Captain/);
    await assert.rejects(db.exec(`update members set team_id='scafo' where id='${foil}'`), /permission denied/);
    await db.exec(`update members set active=false where id='${invalid}'`); // l'abilitazione resta agli amministratori
    await as(foil);
    await assert.rejects(assign(foil, "scafo", "membro"), /Solo il Team Captain/);
    await as(captain);
    assert.equal((await db.query("select id from members")).rows.length, 7); // il captain vede tutti gli account
    await assign(foil, "scafo", "capo_progetto");
    assert.deepEqual(await profile(foil), { team_id: "scafo", role: "capo_progetto" });
    await assert.rejects(assign(foil, "scafo", "team_captain"), /singolo reparto/);
    await assert.rejects(assign(foil, "", "membro"), /Reparto non valido/);
    // L'unico Team Captain non può togliersi il ruolo; con un secondo captain sì.
    await assert.rejects(assign(captain, "foil", "membro"), /almeno un altro Team Captain/);
    await assign(lead, "", "team_captain");
    await assign(captain, "foil", "membro");
    assert.deepEqual(await profile(captain), { team_id: "foil", role: "membro" });
    const audit = await db.query<{ action: string }>("select action from audit_log where table_name='members' and action='REPARTO'");
    assert.equal(audit.rows.length, 3);

    // Abilitazione: amministratori e Team Captain, non sé stessi né gli amministratori; i membri no.
    const setActive = (member: string, active: boolean) => db.query("select public.set_member_active($1,$2)", [member, active]);
    const active = async (who: string) => (await db.query<{ active: boolean }>("select active from members where id=$1", [who])).rows[0].active;
    await as(lead); // ora Team Captain
    await setActive(scafo, false);
    assert.equal(await active(scafo), false);
    await setActive(scafo, true);
    assert.equal(await active(scafo), true);
    await assert.rejects(setActive(lead, false), /tuo account/);
    await assert.rejects(setActive(admin, false), /amministratore/);
    // Il Team Captain non può farsi amministratore con un update diretto (nessuna riga aggiornata).
    await db.exec(`update members set is_admin=true where id='${lead}'`);
    assert.equal((await db.query<{ is_admin: boolean }>(`select is_admin from members where id='${lead}'`)).rows[0].is_admin, false);
    await as(admin);
    await setActive(invalid, true);
    assert.equal(await active(invalid), true);
    await as(foil);
    await assert.rejects(setActive(scafo, false), /Solo gli amministratori e il Team Captain/);
    assert.deepEqual((await db.query<{ action: string }>("select action from audit_log where table_name='members' and action<>'REPARTO' order by id")).rows.map(r => r.action), ["DISATTIVATO", "ABILITATO", "ABILITATO"]);

    // Presenza del Team Captain (dalla Home): solo lui la segna, senza reparto.
    await db.exec("reset role;");
    await db.exec(await readFile("supabase/migrations/202611130003_captain_attendance.sql", "utf8"));
    await as(foil);
    await assert.rejects(mark(lead), /Solo il Team Captain/);
    assert.equal((await db.query<{ role: string; team_id: string | null }>(`select role,team_id from public.attendance_roster() where id='${lead}'`)).rows[0].role, "team_captain");
    await as(lead);
    await mark(lead, false); // presenza registrata quando era ancora in Scafo
    await mark(lead);
    assert.equal((await db.query<{ team_id: string | null }>(`select team_id from attendance where member_id='${lead}'`)).rows[0].team_id, null);
    await mark(foil); // continua a segnare tutti i reparti
    await mark(lead, false);
    assert.equal((await db.query(`select 1 from attendance where member_id='${lead}'`)).rows.length, 0);
  } finally {
    await db.close();
  }
});
