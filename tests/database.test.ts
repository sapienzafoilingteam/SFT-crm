import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { createMock } from "../lib/mock";
import { COLLECTIONS, SEASONS, monthlyDeliveries } from "../lib/model";
import { withDefaultLinks } from "../lib/workspace-defaults";
const user = "10000000-0000-4000-8000-000000000001";
test("migrazione Postgres, RLS, audit e salvataggi atomici con controllo versione", async () => {
  const db = new PGlite();
  try {
    await db.exec(
      `create role anon; create role authenticated; create schema auth; create table auth.users(id uuid primary key); create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$; grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon; create schema storage; create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]); create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text); alter table storage.objects enable row level security; grant usage on schema storage to authenticated,anon; grant select,insert on storage.objects to authenticated; insert into auth.users values('${user}');`,
    );
    await db.exec(
      await readFile("supabase/migrations/202610010001_workspace.sql", "utf8"),
    );
    await db.exec(
      `insert into public.members(id,active) values('${user}',true); set role authenticated; set "request.jwt.claim.sub"='${user}';`,
    );
    const cost = createMock().costs[0];
    const apply = (changes: unknown) =>
      db.query("select public.apply_changes($1::jsonb)", [
        JSON.stringify(changes),
      ]);
    const snapshot = createMock();
    await apply(
      COLLECTIONS.filter((k) => k !== "costs").flatMap((table) =>
        snapshot[table].map((record) => ({
          table,
          record,
          expected_version: null,
        })),
      ),
    );
    assert.equal((await db.query("select * from pages")).rows.length, 7);
    const initialized = withDefaultLinks(snapshot);
    await apply(
      initialized.links
        .filter((l) => !snapshot.links.some((existing) => existing.id === l.id))
        .map((record) => ({ table: "links", record, expected_version: null })),
    );
    assert.equal(
      (await db.query("select * from links")).rows.length,
      initialized.links.length,
    );
    const meeting = {
      id: crypto.randomUUID(),
      type: "riunione" as const,
      content: "Riunione scafo",
      meeting: {
        date: "2026-10-01",
        attendees: "Team",
        agenda: "Test",
        minutes: "Confronto svolto",
        decisions: "Test confermato",
        actions: "Preparare i materiali",
      },
    };
    await apply([
      {
        table: "pages",
        record: {
          ...snapshot.pages[0],
          blocks: [...snapshot.pages[0].blocks, meeting],
        },
        expected_version: 1,
      },
    ]);
    const saved = await db.query<{
      blocks: (typeof snapshot.pages)[0]["blocks"];
    }>("select blocks from pages where id=$1", [snapshot.pages[0].id]);
    assert.deepEqual(saved.rows[0].blocks.at(-1), meeting);
    const monthly = monthlyDeliveries(snapshot, SEASONS[0].id, "2026-11");
    await apply(
      monthly.map((record) => ({
        table: "deliveries",
        record,
        expected_version: null,
      })),
    );
    await assert.rejects(
      apply(
        monthly.map((record) => ({
          table: "deliveries",
          record: { ...record, id: crypto.randomUUID() },
          expected_version: null,
        })),
      ),
    );
    await db.exec("update members set is_admin=true where id='" + user + "'");
    assert.equal(
      (await db.query<{ is_admin: boolean }>("select is_admin from members"))
        .rows[0].is_admin,
      false,
    );
    await apply([{ table: "costs", record: cost, expected_version: null }]);
    let rows = await db.query<{ version: number; amount_cents: number }>(
      "select version,amount_cents from costs",
    );
    assert.equal(rows.rows.length, 1);
    assert.equal(rows.rows[0].version, 1);
    await apply([
      {
        table: "costs",
        record: { ...cost, amount_cents: 14000 },
        expected_version: 1,
      },
    ]);
    rows = await db.query("select version,amount_cents from costs");
    assert.equal(rows.rows[0].version, 2);
    assert.equal(rows.rows[0].amount_cents, 14000);
    await assert.rejects(
      apply([
        {
          table: "costs",
          record: { ...cost, amount_cents: 19000 },
          expected_version: 2,
        },
        {
          table: "costs",
          record: { ...cost, amount_cents: 22000 },
          expected_version: 1,
        },
      ]),
      /altro membro/,
    );
    rows = await db.query("select version,amount_cents from costs");
    assert.equal(rows.rows[0].version, 2);
    assert.equal(rows.rows[0].amount_cents, 14000);
    await assert.rejects(
      apply([{ table: "members", record: cost, expected_version: null }]),
      /non autorizzata/,
    );
    await assert.rejects(
      apply([
        {
          table: "costs",
          record: { ...cost, amount_cents: -1 },
          expected_version: 2,
        },
      ]),
    );
    await assert.rejects(db.exec("delete from costs"));
    const audit = await db.query(
      "select * from audit_log where table_name='costs'",
    );
    assert.equal(audit.rows.length, 2);
    await assert.rejects(db.exec("delete from audit_log"));
    await db.exec(
      "insert into storage.objects(bucket_id,name) values('team-documents','test.pdf')",
    );
    await db.exec(
      "reset role; update members set active=false; set role authenticated;",
    );
    assert.equal((await db.query("select * from costs")).rows.length, 0);
    assert.equal(
      (await db.query("select * from storage.objects")).rows.length,
      0,
    );
    await assert.rejects(
      apply([{ table: "costs", record: cost, expected_version: 2 }]),
      /membri attivi/,
    );
    await db.exec("reset role; set role anon;");
    await assert.rejects(db.query("select * from costs"));
  } finally {
    await db.close();
  }
});
