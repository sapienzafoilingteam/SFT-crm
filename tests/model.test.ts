import test from "node:test";
import assert from "node:assert/strict";
import {
  cents,
  totalCosts,
  monthlyDeliveries,
  csvCosts,
  safeUrl,
  SEASONS,
} from "../lib/model";
import { createMock } from "../lib/mock";
test("importi esatti e rifiuto input ambigui", () => {
  assert.equal(cents("120,50"), 12050);
  assert.equal(cents("0.01"), 1);
  for (const input of ["-1", "1.234", "abc", "0", "1e3", "NaN"])
    assert.throws(() => cents(input));
});
test("totali includono solo costi attivi e CSV protegge le formule", () => {
  const s = createMock();
  assert.equal(totalCosts(s.costs), 41050);
  assert.equal(
    totalCosts([{ ...s.costs[0], archived: true }, s.costs[1]]),
    8000,
  );
  const csv = csvCosts([{ ...s.costs[0], title: "=SUM(A1:A2)" }]);
  assert.ok(csv.includes("'=SUM(A1:A2)"));
  assert.ok(csv.includes("120,00"));
});
test("delivery mensili idempotenti, isolati per stagione e con giorni validi", () => {
  const s = createMock();
  const season = SEASONS[0].id;
  s.recurrences[0].day = 31;
  const additions = monthlyDeliveries(s, season, "2027-02");
  assert.equal(additions[0].date, "2027-02-28");
  assert.equal(additions.length, 3);
  s.deliveries.push(...additions);
  assert.equal(monthlyDeliveries(s, season, "2027-02").length, 0);
  assert.equal(monthlyDeliveries(s, SEASONS[1].id, "2027-02").length, 0);
  assert.throws(() => monthlyDeliveries(s, season, "2027-13"));
});
test("URL eseguibili non accettati", () => {
  assert.equal(safeUrl("javascript:alert(1)"), "");
  assert.equal(safeUrl("data:text/html,x"), "");
  assert.equal(
    safeUrl("https://sapienzafoilingteam.com"),
    "https://sapienzafoilingteam.com/",
  );
});

test("link iniziali senza duplicati e senza sovrascrivere risorse o archivi", async () => {
  const { withDefaultLinks } = await import("../lib/workspace-defaults");
  const original = createMock();
  const initialized = withDefaultLinks(original);
  assert.equal(
    initialized.links.filter((l) => l.team_id === "scafo").length,
    2,
  );
  assert.equal(withDefaultLinks(initialized), initialized);
  const custom = {
    ...initialized,
    links: initialized.links.map((l) =>
      l.title === "Drive media"
        ? { ...l, url: "https://example.org/media", archived: true }
        : l,
    ),
  };
  assert.equal(withDefaultLinks(custom), custom);
  assert.ok(
    custom.links.some(
      (l) => l.url === "https://example.org/media" && l.archived,
    ),
  );
  assert.equal(
    initialized.links.find((l) => l.title === "Riunione del reparto")?.url,
    "",
  );
});
