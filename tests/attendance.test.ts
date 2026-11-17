import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { attendanceMonths, dayLabel, initials, monthSheet, wednesdays, INSTITUTIONAL_EMAIL } from "../lib/attendance";

const alpha = "20000000-0000-4000-8000-000000000001"; // scafo
const beta = "20000000-0000-4000-8000-000000000002"; // scafo
const gamma = "20000000-0000-4000-8000-000000000003"; // foil
const pending = "20000000-0000-4000-8000-000000000004"; // registrato, non abilitato
const legacy = "20000000-0000-4000-8000-000000000005"; // account senza profilo

test("nomi, mail consigliata e colonne della tabella presenze", () => {
  assert.ok(INSTITUTIONAL_EMAIL.test("rossi.1234567@studenti.uniroma1.it"));
  assert.ok(!INSTITUTIONAL_EMAIL.test("mario@gmail.com"));
  assert.equal(dayLabel("2026-11-11"), "Mer 11/11/2026");
  assert.equal(initials("Mario Rossi"), "MR");
  assert.equal(initials("Anna Maria Rossi"), "AMR");
  assert.equal(initials("Chiara De Santis"), "CDS");
  assert.equal(initials("Niccolò D'Angelo"), "ND");
  assert.equal(initials("  Maria Chiara Della Valle "), "MCV");
  assert.equal(dayLabel("2027-01-07"), "Gio 07/01/2027");
  // Riunioni: ogni mercoledì del mese.
  assert.deepEqual(wednesdays("2026-11"), ["2026-11-04", "2026-11-11", "2026-11-18", "2026-11-25"]);
  // Prima riunione: 14 ottobre 2026; prima non ci sono colonne.
  assert.deepEqual(wednesdays("2026-09"), []);
  assert.deepEqual(wednesdays("2026-10"), ["2026-10-14", "2026-10-21", "2026-10-28"]);
  assert.deepEqual(wednesdays("2027-03"), ["2027-03-03", "2027-03-10", "2027-03-17", "2027-03-24", "2027-03-31"]);
  const roster = [{ id: "a", full_name: "Zeno Neri", team_id: "scafo" }, { id: "b", full_name: "Anna Blu", team_id: "foil" }];
  const records = [
    { member_id: "a", meeting_date: "2026-11-04", team_id: "scafo", marked_by: "a", marked_at: "" },
    { member_id: "a", meeting_date: "2026-11-11", team_id: "scafo", marked_by: "a", marked_at: "" },
    { member_id: "b", meeting_date: "2026-11-11", team_id: "foil", marked_by: "b", marked_at: "" },
    { member_id: "b", meeting_date: "2026-11-12", team_id: "foil", marked_by: "b", marked_at: "" }, // giovedì: fuori tabella
    { member_id: "b", meeting_date: "2026-08-05", team_id: "foil", marked_by: "b", marked_at: "" },
  ];
  // Tutti i nomi dell'elenco in ordine alfabetico; chi non è registrato è sempre assente.
  const sheet = monthSheet(["Zeno Neri", "Anna Blu", "Bruno Mai Registrato"], roster, records, "2026-11");
  assert.deepEqual(sheet.map(r => r.full_name), ["Anna Blu", "Bruno Mai Registrato", "Zeno Neri"]);
  assert.deepEqual(sheet.map(r => [...r.present].sort()), [["2026-11-11"], [], ["2026-11-04", "2026-11-11"]]);
  assert.equal(sheet[1].member, null);
  // Presenze segnate dal Team Captain sul nome di chi non ha un account (solo i mercoledì del mese).
  const byName = monthSheet(["Anna Blu", "Bruno Mai Registrato"], roster, records, "2026-11",
    [{ full_name: "Bruno Mai Registrato", meeting_date: "2026-11-18" }, { full_name: "Bruno Mai Registrato", meeting_date: "2026-10-07" }]);
  assert.deepEqual([...byName.find(r => r.full_name === "Bruno Mai Registrato")!.present], ["2026-11-18"]);
  // Un account con nome fuori elenco compare comunque.
  assert.deepEqual(monthSheet(["Anna Blu"], roster, [], "2026-11").map(r => r.full_name), ["Anna Blu", "Zeno Neri"]);
  // Mesi: dal mese della prima riunione (ottobre 2026) al mese corrente, dal più recente.
  assert.deepEqual(attendanceMonths("2026-11-15"), ["2026-11", "2026-10"]);
  assert.deepEqual(attendanceMonths("2027-02-03"), ["2027-02", "2027-01", "2026-12", "2026-11", "2026-10"]);
});

test("registrazione, profilo e presenze limitate al proprio reparto", async () => {
  const db = new PGlite();
  const as = (id: string) => db.exec(`reset role; set role authenticated; set "request.jwt.claim.sub"='${id}';`);
  const signup = (id: string, email: string, meta: object) =>
    db.query("insert into auth.users(id,email,raw_user_meta_data) values($1,$2,$3::jsonb)", [id, email, JSON.stringify(meta)]);
  const mark = (member: string, present: boolean, date = "2026-11-11") =>
    db.query("select public.set_attendance($1,$2::date,$3)", [member, date, present]);
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}'::jsonb, email_confirmed_at timestamptz);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
      create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
      create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text);
      alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated;
      insert into auth.users(id,email) values('${legacy}','vecchio@example.com');`);
    await db.exec(await readFile("supabase/migrations/202610010001_workspace.sql", "utf8"));
    await db.exec(`insert into public.members(id,active) values('${legacy}',true);`);
    await db.exec(await readFile("supabase/migrations/202611110001_attendance.sql", "utf8"));
    assert.equal((await db.query<{ email: string }>(`select email from members where id='${legacy}'`)).rows[0].email, "vecchio@example.com");

    await signup(alpha, "rossi.1234567@studenti.uniroma1.it", { full_name: "  Alpha   Rossi ", team_id: "scafo" });
    await signup(beta, "beta@example.com", { full_name: "Beta Verdi", team_id: "scafo" });
    await signup(gamma, "gamma@example.com", { full_name: "Gamma Neri", team_id: "foil" });
    await signup(pending, "nuovo@example.com", { full_name: "minuscolo nome", team_id: "inesistente" });
    const created = await db.query<{ full_name: string; team_id: string | null; active: boolean }>(
      "select full_name,team_id,active from members where id=any($1::uuid[]) order by id", [[alpha, pending]]);
    assert.deepEqual(created.rows, [{ full_name: "Alpha Rossi", team_id: "scafo", active: false }, { full_name: "", team_id: null, active: false }]);

    // La registrazione non concede accesso: serve l'abilitazione.
    await as(alpha);
    assert.equal((await db.query("select * from public.attendance_roster()")).rows.length, 0);
    await assert.rejects(mark(alpha, true), /membri attivi/);
    // La conferma della mail attiva l'account; un account disattivato non si riattiva da solo.
    await db.exec(`reset role; update auth.users set email_confirmed_at=now() where id in ('${alpha}','${beta}','${gamma}');`);
    assert.deepEqual((await db.query<{ active: boolean }>("select active from members where id=any($1::uuid[]) order by id", [[alpha, beta, gamma, pending]])).rows.map(r => r.active), [true, true, true, false]);
    await db.exec(`update members set active=false where id='${gamma}'; update auth.users set email_confirmed_at=now() where id='${gamma}';`);
    assert.equal((await db.query<{ active: boolean }>(`select active from members where id='${gamma}'`)).rows[0].active, false);
    await db.exec(`update members set active=true where id='${gamma}';`);

    // Ogni membro vede il registro di tutti i reparti.
    await as(gamma);
    assert.deepEqual((await db.query<{ full_name: string }>("select full_name from public.attendance_roster()")).rows.map(r => r.full_name), ["Alpha Rossi", "Beta Verdi", "Gamma Neri"]);
    // Reparti diversi: vietato.
    await assert.rejects(mark(alpha, true), /tuo reparto/);
    await mark(gamma, true);

    // Stesso reparto: si può segnare anche per un collega, in qualsiasi giorno, e togliere.
    await as(alpha);
    await mark(alpha, true);
    await mark(beta, true);
    await mark(beta, true, "2026-10-21");
    await mark(alpha, true); // idempotente
    let rows = await db.query<{ member_id: string; team_id: string }>("select member_id,team_id from attendance where meeting_date='2026-11-11' order by member_id");
    assert.deepEqual(rows.rows.map(r => r.member_id), [alpha, beta, gamma]);
    await mark(beta, false);
    rows = await db.query("select member_id from attendance where meeting_date='2026-11-11' order by member_id");
    assert.deepEqual(rows.rows.map(r => r.member_id), [alpha, gamma]);
    await assert.rejects(mark(gamma, false), /tuo reparto/);

    // Scrittura diretta e modifica del proprio reparto bloccate.
    await assert.rejects(db.exec(`insert into attendance(member_id,meeting_date,team_id) values('${gamma}','2026-11-12','foil')`));
    await assert.rejects(db.exec(`delete from attendance`));
    await db.exec(`update members set team_id='foil' where id='${alpha}'`);
    assert.equal((await db.query<{ team_id: string }>(`select team_id from members where id='${alpha}'`)).rows[0].team_id, "scafo");
    await assert.rejects(db.query("select public.complete_profile('Alpha Gialli','foil')"), /già completo/);

    const audit = await db.query<{ action: string }>("select action from audit_log where table_name='attendance' order by id");
    assert.deepEqual(audit.rows.map(r => r.action), ["PRESENTE", "PRESENTE", "PRESENTE", "PRESENTE", "ASSENTE"]);

    // Account esistente senza profilo: lo completa una sola volta con un nome valido.
    await as(legacy);
    await assert.rejects(db.query("select public.complete_profile('mario rossi','foil')"), /iniziali maiuscole/);
    await db.query("select public.complete_profile('Mario Rossi','foil')");
    await mark(gamma, true, "2026-11-04");

    await db.exec("reset role; set role anon;");
    await assert.rejects(db.query("select * from attendance"));
  } finally {
    await db.close();
  }
});
