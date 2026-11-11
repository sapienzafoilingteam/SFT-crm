// Avvio: carica i file ufficiali (listino e Layup Calculator) di ogni regolamento e monta l'app.

import { html, render } from '../../vendor/preact-htm.js';
import { importCostCatalog, importLayupSpec } from '../io/official.js';
import { RULES } from '../engine/rules.js';
import { App } from './app.js';
import { startUpdates } from './updates.js';
import { initializeCrm, booted, bootFailed } from './crm.js';




async function bytes(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Non trovo ${url} (${r.status})`);
  return r.arrayBuffer();
}

/** Listino + Layup Calculator; se due regolamenti usano gli stessi file si leggono una volta sola. */
const loaded = new Map();
function officialData({ costs, layup }) {
  const key = `${costs}|${layup}`;
  if (!loaded.has(key)) {
    loaded.set(key, (async () => {
      const [costBytes, template] = await Promise.all([bytes(costs), bytes(layup)]);
      const { entries, warnings } = await importCostCatalog(costBytes);
      const spec = await importLayupSpec(template);
      return { spec, catalogEntries: entries, catalogWarnings: warnings, templateBytes: template };
    })());
  }
  return loaded.get(key);
}

async function boot() {
  const root = document.getElementById('app');
  try {
    await initializeCrm();
    // un contesto per regolamento: {spec, catalogEntries, catalogWarnings, templateBytes, rules}
    const contexts = {};
    for (const rules of Object.values(RULES)) contexts[rules.id] = { ...(await officialData(rules.official)), rules };
    root.innerHTML = '';
    render(html`<${App} contexts=${contexts} />`, root);
    booted();
    void startUpdates();
  } catch (e) {
    console.error(e);
    bootFailed(e);
    root.textContent = 'Dollaroni non riesce a partire: ' + e.message;
  }
}

boot();
