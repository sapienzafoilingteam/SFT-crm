/**
 * SAPIENZA FOILING TEAM - GESTIONALE SPONSOR (CRM)
 * Vanilla JavaScript Engine (LocalStorage + IndexedDB + Reactive Updates)
 * Supporta: Sponsor Finanziari (Cash), Sponsor Tecnici (Materiali & Servizi) e Ibridi
 * Brand Theme: Sapienza Chermes / Carbon Black (sapienzafoilingteam.com)
 */

(function () {
  'use strict';

  // --- INITIAL 70 COMPANIES WITH OFFICIAL CONTACT EMAILS ---
  const DEFAULT_COMPANIES_DATA = [
    { name: "Acea", email: "sostenibilita@acea.it", type: "Finanziario" },
    { name: "BCC Roma", email: "relazioni.esterne@roma.bcc.it", type: "Finanziario" },
    { name: "Alten Italia", email: "employer.branding@alten.it", type: "Ibrido" },
    { name: "Capgemini", email: "hr.italy@capgemini.com", type: "Finanziario" },
    { name: "Intesa Sanpaolo", email: "csr@intesasanpaolo.com", type: "Finanziario" },
    { name: "Enel / Enel X", email: "sostenibilita@enel.com", type: "Finanziario" },
    { name: "Reply", email: "marketing@reply.com", type: "Ibrido" },
    { name: "A2A", email: "csr@a2a.eu", type: "Finanziario" },
    { name: "UnipolSai", email: "sponsorizzazioni@unipol.it", type: "Finanziario" },
    { name: "Akkodis", email: "italy.marketing@akkodis.com", type: "Ibrido" },
    { name: "Hera Group", email: "sostenibilita@gruppohera.it", type: "Finanziario" },
    { name: "Teoresi Group", email: "marketing@teoresigroup.com", type: "Tecnico" },
    { name: "Snam", email: "sostenibilita@snam.it", type: "Finanziario" },
    { name: "Generali Italia", email: "thehumansafetynet@generali.com", type: "Finanziario" },
    { name: "Accenture Italia", email: "corporate.citizenship.italy@accenture.com", type: "Finanziario" },
    { name: "Terna", email: "sostenibilita@terna.it", type: "Finanziario" },
    { name: "NTT Data Italia", email: "communications@nttdata.com", type: "Finanziario" },
    { name: "Eni / Plenitude", email: "sostenibilita@eni.com", type: "Finanziario" },
    { name: "BPER Banca", email: "relazioni.esterne@bper.it", type: "Finanziario" },
    { name: "Allianz Italia", email: "sponsorizzazioni@allianz.it", type: "Finanziario" },
    { name: "Fastweb", email: "sostenibilita@fastweb.it", type: "Finanziario" },
    { name: "Engineering Ingegneria", email: "marketing@eng.it", type: "Ibrido" },
    { name: "ERG", email: "csr@erg.eu", type: "Finanziario" },
    { name: "Leonardo", email: "sustainability@leonardo.com", type: "Tecnico" },
    { name: "Edison", email: "sostenibilita@edison.it", type: "Finanziario" },
    { name: "BMW Italia", email: "pr@bmw.it", type: "Finanziario" },
    { name: "Rolex Italia", email: "sponsorship@rolex.com", type: "Finanziario" },
    { name: "Pirelli", email: "press@pirelli.com", type: "Tecnico" },
    { name: "Almaviva", email: "comunicazione@almaviva.it", type: "Finanziario" },
    { name: "Iren", email: "csr@gruppoiren.it", type: "Finanziario" },
    { name: "Brembo", email: "sustainability@brembo.it", type: "Tecnico" },
    { name: "FinecoBank", email: "mediarelations@fineco.it", type: "Finanziario" },
    { name: "Audi Italia", email: "info@audi.it", type: "Finanziario" },
    { name: "Deloitte Italia", email: "comunicazione@deloitte.it", type: "Finanziario" },
    { name: "TIM", email: "sostenibilita@telecomitalia.it", type: "Finanziario" },
    { name: "Cattolica Assicurazioni", email: "sponsorizzazioni@cattolicaassicurazioni.it", type: "Finanziario" },
    { name: "Sorgenia", email: "press@sorgenia.it", type: "Finanziario" },
    { name: "Banca Sella", email: "relazioni.esterne@sella.it", type: "Finanziario" },
    { name: "E.ON Italia", email: "ufficio.stampa@eon.com", type: "Finanziario" },
    { name: "EY (Ernst & Young)", email: "ey.brand@it.ey.com", type: "Finanziario" },
    { name: "Vodafone Italia", email: "fondazione.vodafone_italia@mail.vodafone.it", type: "Finanziario" },
    { name: "Prada", email: "corporate@prada.com", type: "Finanziario" },
    { name: "Omega", email: "press@omega.ch", type: "Finanziario" },
    { name: "Dallara", email: "hr@dallara.it", type: "Tecnico" },
    { name: "Porsche Italia", email: "press@porsche.it", type: "Finanziario" },
    { name: "Credem", email: "relazioni.esterne@credem.it", type: "Finanziario" },
    { name: "Reale Mutua", email: "sostenibilita@realemutua.it", type: "Finanziario" },
    { name: "Panerai", email: "press@panerai.com", type: "Finanziario" },
    { name: "Volvo Auto Italia", email: "pr.italy@volvocars.com", type: "Finanziario" },
    { name: "KPMG Italia", email: "it-fmkpmgcomunicazio@kpmg.it", type: "Finanziario" },
    { name: "PwC Italia", email: "comunicazione.corporate@pwc.com", type: "Finanziario" },
    { name: "Mediolanum", email: "sponsorizzazioni@mediolanum.it", type: "Finanziario" },
    { name: "AXA Italia", email: "corporate.responsibility@axa.it", type: "Finanziario" },
    { name: "Iberdrola Italia", email: "sostenibilita@iberdrola.it", type: "Finanziario" },
    { name: "Falck Renewables", email: "sustainability@renantis.com", type: "Finanziario" },
    { name: "Italgas", email: "sostenibilita@italgas.it", type: "Finanziario" },
    { name: "BIP (Business Integration)", email: "marketing@bip-group.com", type: "Finanziario" },
    { name: "Azimut Wealth", email: "marketing@azimut.it", type: "Finanziario" },
    { name: "Mediobanca", email: "csr@mediobanca.com", type: "Finanziario" },
    { name: "Mercedes-Benz Italia", email: "press.italia@mercedes-benz.com", type: "Finanziario" },
    { name: "Ferrari", email: "sustainability@ferrari.com", type: "Tecnico" },
    { name: "Iveco Group", email: "csr@ivecogroup.com", type: "Finanziario" },
    { name: "Telepass", email: "media@telepass.com", type: "Finanziario" },
    { name: "Red Bull Italia", email: "info.it@redbull.com", type: "Finanziario" },
    { name: "San Benedetto", email: "csr@sanbenedetto.it", type: "Tecnico" },
    { name: "Slam", email: "marketing@slam.com", type: "Tecnico" },
    { name: "Paul & Shark", email: "press@paulandshark.com", type: "Tecnico" },
    { name: "Loro Piana", email: "pr@loropiana.com", type: "Tecnico" },
    { name: "Moncler", email: "sustainability@moncler.com", type: "Tecnico" },
    { name: "K-Way", email: "marketing@basicnet.com", type: "Tecnico" }
  ];

  const STAGES = [
    "Da Contattare",
    "Primo Contatto Inviato",
    "In Trattativa",
    "Vinto",
    "Perso"
  ];

  const STORAGE_KEYS = {
    COMPANIES: 'sft_crm_companies_v4',
    BUDGET_TARGET: 'sft_crm_budget_target_v4',
    TEAM_DRIVE: 'sft_crm_team_drive_v4',
    TEAM_GMAIL: 'sft_crm_team_gmail_v4',
    PITCH_DRIVE: 'sft_crm_pitch_drive_v4'
  };

  const DEFAULT_BUDGET = 20000;
  const DEFAULT_TEAM_GMAIL = 'sapienzafoilingteam@gmail.com';

  // --- APPLICATION STATE ---
  let state = {
    companies: [],
    budgetTarget: DEFAULT_BUDGET,
    teamGmail: DEFAULT_TEAM_GMAIL,
    teamDriveUrl: '',
    pitchDeckDriveUrl: '',
    currentFilter: 'Tutte',
    currentTypeFilter: 'Tutti', // 'Tutti' | 'Finanziario' | 'Tecnico' | 'Ibrido'
    searchTerm: '',
    sortField: 'name',
    sortAsc: true,
    selectedCompanyId: null,
    isManualNewMode: false
  };

  // --- INDEXEDDB STORAGE (FOR LOCAL FILES) ---
  const DB_CONFIG = {
    name: 'SFT_CRM_DocumentsDB_v2',
    version: 1,
    store: 'documents'
  };

  function openIndexedDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_CONFIG.name, DB_CONFIG.version);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(DB_CONFIG.store)) {
          const store = db.createObjectStore(DB_CONFIG.store, { keyPath: 'id' });
          store.createIndex('type', 'type', { unique: false });
          store.createIndex('uploadedAt', 'uploadedAt', { unique: false });
        }
      };
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function idbSaveDocument(doc) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_CONFIG.store, 'readwrite');
      const store = tx.objectStore(DB_CONFIG.store);
      store.put(doc);
      tx.oncomplete = () => resolve(doc);
      tx.onerror = () => reject(tx.error);
    });
  }

  async function idbGetDocuments(typeFilter) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_CONFIG.store, 'readonly');
      const store = tx.objectStore(DB_CONFIG.store);
      const request = store.getAll();
      request.onsuccess = () => {
        let results = request.result || [];
        if (typeFilter) {
          results = results.filter(d => d.type === typeFilter);
        }
        results.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
        resolve(results);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async function idbDeleteDocument(id) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_CONFIG.store, 'readwrite');
      const store = tx.objectStore(DB_CONFIG.store);
      store.delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function idbGetDocumentById(id) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_CONFIG.store, 'readonly');
      const store = tx.objectStore(DB_CONFIG.store);
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // --- STATE INITIALIZATION & MIGRATION ---
  function initData() {
    // 1. Budget
    const savedBudget = localStorage.getItem(STORAGE_KEYS.BUDGET_TARGET) || 
      localStorage.getItem('sft_crm_budget_target_v3') || 
      localStorage.getItem('sft_crm_budget_target_v2');
    if (savedBudget && !isNaN(Number(savedBudget))) {
      state.budgetTarget = Number(savedBudget);
    } else {
      state.budgetTarget = DEFAULT_BUDGET;
      localStorage.setItem(STORAGE_KEYS.BUDGET_TARGET, DEFAULT_BUDGET.toString());
    }

    // 2. Team Gmail
    state.teamGmail = localStorage.getItem(STORAGE_KEYS.TEAM_GMAIL) || 
      localStorage.getItem('sft_crm_team_gmail_v3') || 
      DEFAULT_TEAM_GMAIL;

    // 3. Drive URLs
    state.teamDriveUrl = localStorage.getItem(STORAGE_KEYS.TEAM_DRIVE) || 
      localStorage.getItem('sft_crm_team_drive_v3') || '';
    state.pitchDeckDriveUrl = localStorage.getItem(STORAGE_KEYS.PITCH_DRIVE) || '';

    // 4. Companies & Migration
    const savedV4 = localStorage.getItem(STORAGE_KEYS.COMPANIES);
    const savedV3 = localStorage.getItem('sft_crm_companies_v3');
    const savedV2 = localStorage.getItem('sft_crm_companies_v2');

    if (savedV4) {
      try {
        state.companies = JSON.parse(savedV4);
        ensureCompanyFields();
      } catch (err) {
        console.error("Errore lettura dati v4", err);
        generateDefaultCompanies();
      }
    } else if (savedV3 || savedV2) {
      try {
        const prevData = JSON.parse(savedV3 || savedV2);
        state.companies = prevData;
        ensureCompanyFields();
        saveCompanies();
      } catch (e) {
        generateDefaultCompanies();
      }
    } else {
      generateDefaultCompanies();
    }
  }

  function ensureCompanyFields() {
    let updated = false;
    state.companies.forEach(comp => {
      // Default sponsorType if missing
      if (!comp.sponsorType) {
        const found = DEFAULT_COMPANIES_DATA.find(d => d.name.toLowerCase() === comp.name.toLowerCase());
        comp.sponsorType = found ? (found.type || 'Finanziario') : 'Finanziario';
        updated = true;
      }
      if (comp.techValue === undefined) { comp.techValue = 0; updated = true; }
      if (!comp.techCategories) {
        if (comp.techCategory) {
          comp.techCategories = comp.techCategory.split(',').map(s => s.trim()).filter(Boolean);
        } else {
          comp.techCategories = (comp.sponsorType === 'Tecnico' || comp.sponsorType === 'Ibrido') ? ['Materiali Compositi'] : [];
        }
        updated = true;
      }
      if (comp.techCategory === undefined) { comp.techCategory = comp.techCategories.join(', '); updated = true; }
      if (comp.techDescription === undefined) { comp.techDescription = ''; updated = true; }
      if (comp.techDeliveryStatus === undefined) { comp.techDeliveryStatus = 'Da Concordare'; updated = true; }
      if (comp.dedicatedPitchUrl === undefined) { comp.dedicatedPitchUrl = ''; updated = true; }

      // Also ensure email
      const foundDef = DEFAULT_COMPANIES_DATA.find(d => d.name.toLowerCase() === comp.name.toLowerCase());
      if (foundDef && (!comp.email || comp.email.trim() === '')) {
        comp.email = foundDef.email;
        updated = true;
      }
    });

    if (updated) {
      localStorage.setItem(STORAGE_KEYS.COMPANIES, JSON.stringify(state.companies));
    }
  }

  function generateDefaultCompanies() {
    const now = new Date().toISOString();
    state.companies = DEFAULT_COMPANIES_DATA.map((item, index) => ({
      id: 'sft_' + (index + 1) + '_' + item.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: item.name,
      sponsorType: item.type || 'Finanziario', // 'Finanziario' | 'Tecnico' | 'Ibrido'
      stage: 'Da Contattare',
      requestedTicket: 0,
      obtainedTicket: 0,
      techValue: 0,
      techCategories: item.type === 'Tecnico' ? ['Materiali Compositi'] : [],
      techCategory: item.type === 'Tecnico' ? 'Materiali Compositi' : '',
      techDescription: '',
      techDeliveryStatus: 'Da Concordare',
      dedicatedPitchUrl: '',
      email: item.email,
      threadUrl: '',
      driveUrl: '',
      notes: '',
      updatedAt: now,
      isCustom: false
    }));
    saveCompanies();
  }

  function saveCompanies() {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPANIES, JSON.stringify(state.companies));
    } catch (e) {
      showToast("Attenzione: memoria locale browser quasi piena.", "warning");
    }
    renderAll();
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEYS.BUDGET_TARGET, state.budgetTarget.toString());
    localStorage.setItem(STORAGE_KEYS.TEAM_GMAIL, state.teamGmail);
    localStorage.setItem(STORAGE_KEYS.TEAM_DRIVE, state.teamDriveUrl);
    localStorage.setItem(STORAGE_KEYS.PITCH_DRIVE, state.pitchDeckDriveUrl);
  }

  // --- FINANCIAL & TECHNICAL TRACKER COMPUTATION ---
  function computeFinancials() {
    let fondiCashRaccolti = 0;
    let pipelineCashPotenziale = 0;
    let valoreTecnicoOttenuto = 0;
    let valoreTecnicoPotenziale = 0;

    const stageCounts = {
      "Da Contattare": 0,
      "Primo Contatto Inviato": 0,
      "In Trattativa": 0,
      "Vinto": 0,
      "Perso": 0
    };

    const typeCounts = {
      "Finanziario": 0,
      "Tecnico": 0,
      "Ibrido": 0
    };

    state.companies.forEach(company => {
      const stage = company.stage;
      const type = company.sponsorType || 'Finanziario';

      if (stageCounts[stage] !== undefined) stageCounts[stage]++;
      if (typeCounts[type] !== undefined) typeCounts[type]++;

      const cashObtained = (type === 'Finanziario' || type === 'Ibrido') ? (Number(company.obtainedTicket) || 0) : 0;
      const cashRequested = (type === 'Finanziario' || type === 'Ibrido') ? (Number(company.requestedTicket) || 0) : 0;
      
      const techVal = (type === 'Tecnico' || type === 'Ibrido') ? (Number(company.techValue) || 0) : 0;

      if (stage === 'Vinto') {
        fondiCashRaccolti += cashObtained;
        valoreTecnicoOttenuto += techVal;
      } else if (stage === 'In Trattativa' || stage === 'Primo Contatto Inviato') {
        pipelineCashPotenziale += cashRequested;
        valoreTecnicoPotenziale += techVal;
      }
    });

    const fondiMancanti = Math.max(0, state.budgetTarget - fondiCashRaccolti);
    const progressPercent = state.budgetTarget > 0 
      ? Math.min(100, Math.round((fondiCashRaccolti / state.budgetTarget) * 100))
      : 0;

    const totaleValoreSupporto = fondiCashRaccolti + valoreTecnicoOttenuto;

    return {
      target: state.budgetTarget,
      cashRaccolti: fondiCashRaccolti,
      cashMancanti: fondiMancanti,
      cashPipeline: pipelineCashPotenziale,
      valoreTecnico: valoreTecnicoOttenuto,
      valoreTecnicoPipeline: valoreTecnicoPotenziale,
      totaleValoreSupporto: totaleValoreSupporto,
      progressPercent: progressPercent,
      counts: stageCounts,
      typeCounts: typeCounts
    };
  }

  // --- UI RENDERERS ---

  function renderTracker() {
    const fin = computeFinancials();

    document.getElementById('kpiTargetVal').textContent = formatCurrency(fin.target);
    document.getElementById('kpiRaisedVal').textContent = formatCurrency(fin.cashRaccolti);
    document.getElementById('kpiMissingVal').textContent = formatCurrency(fin.cashMancanti);
    document.getElementById('kpiPipelineVal').textContent = formatCurrency(fin.cashPipeline);
    
    // Technical Sponsor KPI Card
    const techKpi = document.getElementById('kpiTechVal');
    if (techKpi) {
      techKpi.textContent = formatCurrency(fin.valoreTecnico);
    }
    const totalImpactKpi = document.getElementById('kpiTotalImpactVal');
    if (totalImpactKpi) {
      totalImpactKpi.textContent = formatCurrency(fin.totaleValoreSupporto);
    }

    const progressBar = document.getElementById('mainProgressBar');
    const progressPercentLabel = document.getElementById('progressPercentageLabel');
    progressBar.style.width = fin.progressPercent + '%';
    progressPercentLabel.textContent = fin.progressPercent + '%';

    // Funnel counts
    document.getElementById('countDaContattare').textContent = fin.counts['Da Contattare'];
    document.getElementById('countPrimoContatto').textContent = fin.counts['Primo Contatto Inviato'];
    document.getElementById('countInTrattativa').textContent = fin.counts['In Trattativa'];
    document.getElementById('countVinto').textContent = fin.counts['Vinto'];
    document.getElementById('countPerso').textContent = fin.counts['Perso'];
    document.getElementById('countTotaleAziende').textContent = state.companies.length;

    // Type pills
    const pillCash = document.getElementById('countTypeCash');
    const pillTech = document.getElementById('countTypeTech');
    const pillHybrid = document.getElementById('countTypeHybrid');
    if (pillCash) pillCash.textContent = fin.typeCounts['Finanziario'];
    if (pillTech) pillTech.textContent = fin.typeCounts['Tecnico'];
    if (pillHybrid) pillHybrid.textContent = fin.typeCounts['Ibrido'];
  }

  function renderCompanyDropdown(filterQuery = '') {
    const select = document.getElementById('companySelect');
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = '<option value="">-- Seleziona un\'azienda esistente --</option>';

    const q = (filterQuery || '').toLowerCase().trim();

    // Sort alphabetically
    const sorted = [...state.companies].sort((a, b) => a.name.localeCompare(b.name, 'it', { sensitivity: 'base' }));

    sorted.forEach(c => {
      if (q && !c.name.toLowerCase().includes(q) && !(c.email && c.email.toLowerCase().includes(q))) {
        return;
      }
      const opt = document.createElement('option');
      opt.value = c.id;
      const typeTag = c.sponsorType === 'Tecnico' ? ' [Tecnico]' : c.sponsorType === 'Ibrido' ? ' [Ibrido]' : ' [Cash]';
      opt.textContent = `${c.name}${typeTag} — ${c.stage}`;
      select.appendChild(opt);
    });

    if (state.selectedCompanyId) {
      select.value = state.selectedCompanyId;
    } else {
      select.value = currentVal;
    }
  }

  async function renderTable() {
    const tbody = document.getElementById('crmTableBody');
    tbody.innerHTML = '';

    // Fetch custom pitch docs from IndexedDB
    let customPitchDocs = [];
    try {
      customPitchDocs = await idbGetDocuments('company_pitch');
    } catch (e) {
      console.error('Error fetching custom pitch docs', e);
    }
    const pitchDocsByCompany = new Map();
    customPitchDocs.forEach(d => {
      if (d.companyId) {
        if (!pitchDocsByCompany.has(d.companyId)) {
          pitchDocsByCompany.set(d.companyId, []);
        }
        pitchDocsByCompany.get(d.companyId).push(d);
      }
    });

    // Filter by stage & type & search
    let filtered = state.companies.filter(c => {
      const matchStage = state.currentFilter === 'Tutte' || c.stage === state.currentFilter;
      const matchType = state.currentTypeFilter === 'Tutti' || c.sponsorType === state.currentTypeFilter;
      
      const term = state.searchTerm.toLowerCase().trim();
      const matchSearch = !term || 
        c.name.toLowerCase().includes(term) || 
        (c.email && c.email.toLowerCase().includes(term)) || 
        (c.notes && c.notes.toLowerCase().includes(term)) ||
        (c.techDescription && c.techDescription.toLowerCase().includes(term)) ||
        (c.techCategory && c.techCategory.toLowerCase().includes(term));

      return matchStage && matchType && matchSearch;
    });

    // Sort
    filtered.sort((a, b) => {
      let valA, valB;
      if (state.sortField === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else if (state.sortField === 'stage') {
        valA = STAGES.indexOf(a.stage);
        valB = STAGES.indexOf(b.stage);
      } else if (state.sortField === 'type') {
        valA = a.sponsorType || 'Finanziario';
        valB = b.sponsorType || 'Finanziario';
      } else if (state.sortField === 'value') {
        // Sort by total value (cash obtained/requested or tech value)
        valA = (Number(a.obtainedTicket) || Number(a.requestedTicket) || 0) + (Number(a.techValue) || 0);
        valB = (Number(b.obtainedTicket) || Number(b.requestedTicket) || 0) + (Number(b.techValue) || 0);
      } else if (state.sortField === 'pitch') {
        const hasA = (pitchDocsByCompany.has(a.id) && pitchDocsByCompany.get(a.id).length > 0) || Boolean(a.dedicatedPitchUrl && a.dedicatedPitchUrl.trim());
        const hasB = (pitchDocsByCompany.has(b.id) && pitchDocsByCompany.get(b.id).length > 0) || Boolean(b.dedicatedPitchUrl && b.dedicatedPitchUrl.trim());
        valA = hasA ? 1 : 0;
        valB = hasB ? 1 : 0;
      } else if (state.sortField === 'updatedAt') {
        valA = new Date(a.updatedAt).getTime();
        valB = new Date(b.updatedAt).getTime();
      }

      if (valA < valB) return state.sortAsc ? -1 : 1;
      if (valA > valB) return state.sortAsc ? 1 : -1;
      return 0;
    });

    document.getElementById('tableCountLabel').textContent = 
      `Visualizzando ${filtered.length} di ${state.companies.length} aziende`;

    if (filtered.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td colspan="10" style="text-align:center; padding: 36px; color: var(--text-muted);">
        Nessuna azienda trovata per i criteri selezionati.
      </td>`;
      tbody.appendChild(tr);
      return;
    }

    filtered.forEach(c => {
      const tr = document.createElement('tr');
      const stageSlug = getStageSlug(c.stage);

      // Sponsor Type Badge
      const type = c.sponsorType || 'Finanziario';
      let typeBadge = '';
      if (type === 'Finanziario') {
        typeBadge = '<span class="type-badge type-cash"><span class="status-indicator-dot dot-cash"></span>Cash</span>';
      } else if (type === 'Tecnico') {
        typeBadge = '<span class="type-badge type-tech"><span class="status-indicator-dot dot-tech"></span>Tecnico</span>';
      } else {
        typeBadge = '<span class="type-badge type-hybrid"><span class="status-indicator-dot dot-hybrid"></span>Ibrido</span>';
      }

      // Value / Ticket cell
      let valueCellHtml = '';
      const reqVal = Number(c.requestedTicket) || 0;
      const obtVal = Number(c.obtainedTicket) || 0;
      const techVal = Number(c.techValue) || 0;

      if (type === 'Finanziario') {
        valueCellHtml = `
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span class="amount-ticket ${obtVal > 0 ? 'won' : 'zero'}">${formatCurrency(obtVal > 0 ? obtVal : reqVal)}</span>
            <span style="font-size:0.7rem; color:var(--text-muted);">${obtVal > 0 ? 'Ottenuto Cash' : 'Richiesto Cash'}</span>
          </div>
        `;
      } else if (type === 'Tecnico') {
        valueCellHtml = `
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span class="amount-ticket" style="color:var(--foil-cyan);">${formatCurrency(techVal)}</span>
            <span style="font-size:0.7rem; color:var(--text-muted);">Valore Fornitura</span>
          </div>
        `;
      } else { // Ibrido
        valueCellHtml = `
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span class="amount-ticket ${obtVal > 0 ? 'won' : 'zero'}">${formatCurrency(obtVal > 0 ? obtVal : reqVal)}</span>
            <span style="font-size:0.7rem; color:var(--foil-cyan);">+ ${formatCurrency(techVal)} in materiali</span>
          </div>
        `;
      }

      // Dedicated Pitch Deck cell
      const compPitchDocs = pitchDocsByCompany.get(c.id) || [];
      const hasPitchFile = compPitchDocs.length > 0;
      const hasPitchUrl = Boolean(c.dedicatedPitchUrl && c.dedicatedPitchUrl.trim());

      let pitchCellHtml = '';
      if (hasPitchFile && hasPitchUrl) {
        pitchCellHtml = `
          <div style="display:flex; align-items:center; gap:4px;">
            <button type="button" class="btn btn-secondary btn-icon btn-sm download-table-pitch-btn" data-doc-id="${compPitchDocs[0].id}" title="Scarica Pitch Deck dedicato (${escapeHtml(compPitchDocs[0].fileName)})">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--racing-gold-bright)" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </button>
            <a href="${escapeHtml(c.dedicatedPitchUrl)}" target="_blank" class="btn btn-secondary btn-icon btn-sm" title="Apri Link Canva / Drive">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <span class="pitch-status-badge pitch-status-ready" style="font-size:0.65rem; padding:2px 6px;">Pronto</span>
          </div>
        `;
      } else if (hasPitchFile) {
        pitchCellHtml = `
          <div style="display:flex; align-items:center; gap:4px;">
            <button type="button" class="btn btn-secondary btn-sm download-table-pitch-btn" data-doc-id="${compPitchDocs[0].id}" title="Scarica Pitch Deck (${escapeHtml(compPitchDocs[0].fileName)})" style="padding:2px 7px; font-size:0.72rem;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--racing-gold-bright)" stroke-width="2" style="margin-right:2px; vertical-align:-1px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>PDF
            </button>
            <span class="pitch-status-badge pitch-status-ready" style="font-size:0.65rem; padding:2px 6px;">Locale</span>
          </div>
        `;
      } else if (hasPitchUrl) {
        pitchCellHtml = `
          <div style="display:flex; align-items:center; gap:4px;">
            <a href="${escapeHtml(c.dedicatedPitchUrl)}" target="_blank" class="btn btn-secondary btn-sm" style="padding:2px 7px; font-size:0.72rem;" title="Apri Link Canva / Drive">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" stroke-width="2" style="margin-right:2px; vertical-align:-1px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Cloud
            </a>
            <span class="pitch-status-badge pitch-status-ready" style="font-size:0.65rem; padding:2px 6px;">Link</span>
          </div>
        `;
      } else {
        pitchCellHtml = `
          <button type="button" class="btn btn-secondary btn-sm add-table-pitch-btn" data-company-id="${c.id}" style="padding:2px 8px; font-size:0.72rem; color:var(--text-muted);" title="Carica Pitch Deck dedicato per questo sponsor">
            + Pitch
          </button>
        `;
      }

      // Details / Material cell
      let detailsCellHtml = '<span style="color:var(--text-muted);">-</span>';
      if (type === 'Tecnico' || type === 'Ibrido') {
        const cats = (c.techCategories && c.techCategories.length > 0)
          ? c.techCategories
          : (c.techCategory ? c.techCategory.split(',').map(s => s.trim()).filter(Boolean) : []);
        
        let tagsHtml = '';
        if (cats.length > 0) {
          tagsHtml = cats.map(cat => `<span class="tech-category-tag">${escapeHtml(cat)}</span>`).join(' ');
        } else {
          tagsHtml = '<span class="tech-category-tag">Fornitura Tecnica</span>';
        }
        const desc = c.techDescription ? truncate(c.techDescription, 32) : 'Dettagli fornitura...';
        detailsCellHtml = `
          <div style="display:flex; flex-direction:column; gap:4px;">
            <div style="display:flex; flex-wrap:wrap; gap:4px;">${tagsHtml}</div>
            <span style="font-size:0.74rem; color:var(--text-secondary);" title="${escapeHtml(c.techDescription || '')}">${escapeHtml(desc)}</span>
          </div>
        `;
      } else if (c.notes && c.notes.trim()) {
        detailsCellHtml = `
          <div class="notes-preview-cell" data-company-id="${c.id}" title="Clicca per visualizzare le note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:-1px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>${escapeHtml(c.notes)}
          </div>
        `;
      }

      // Email links with Team Gmail search & web composer
      let emailCellHtml = '<span style="color:var(--text-muted);">-</span>';
      if (c.email) {
        const gmailSearchUrl = generateGmailSearchUrl(c.name, c.email);
        emailCellHtml = `
          <div style="display:flex; align-items:center; gap:5px;">
            <span style="font-size:0.78rem; font-family:var(--font-mono); color:var(--text-secondary);" title="${escapeHtml(c.email)}">
              ${truncate(c.email, 18)}
            </span>
            <a href="${gmailSearchUrl}" target="_blank" class="btn btn-secondary btn-icon" title="Cerca su Gmail del Team (${escapeHtml(state.teamGmail)})">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ea4335" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <button type="button" class="btn btn-secondary btn-icon send-email-table-btn" data-email="${escapeHtml(c.email)}" data-name="${escapeHtml(c.name)}" data-type="${type}" title="Scrivi email con la casella Gmail del Team">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
            <button type="button" class="btn btn-secondary btn-icon analyze-email-table-btn" data-company-id="${c.id}" title="Analizza risposta email e aggiorna profilo">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--foil-cyan)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </button>
          </div>
        `;
      }

      // Drive link
      let driveCellHtml = '<span style="color:var(--text-muted);">-</span>';
      if (c.driveUrl) {
        driveCellHtml = `
          <a href="${escapeHtml(c.driveUrl)}" target="_blank" class="btn btn-secondary btn-icon" title="Apri cartella/file su Google Drive">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </a>
        `;
      }

      tr.innerHTML = `
        <td>
          <div class="company-name-cell">
            <span>${escapeHtml(c.name)}</span>
            ${c.isCustom ? '<span class="custom-tag">Nuova</span>' : ''}
          </div>
        </td>
        <td>${typeBadge}</td>
        <td>
          <select class="form-control inline-stage-select stage-badge ${stageSlug}" data-company-id="${c.id}" style="padding: 4px 10px; font-size: 0.78rem; cursor: pointer;">
            ${STAGES.map(s => `<option value="${s}" ${s === c.stage ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
        </td>
        <td>${valueCellHtml}</td>
        <td>${pitchCellHtml}</td>
        <td>${detailsCellHtml}</td>
        <td>${emailCellHtml}</td>
        <td style="text-align: center;">${driveCellHtml}</td>
        <td style="font-size: 0.75rem; color: var(--text-muted); white-space: nowrap;">
          ${formatDate(c.updatedAt)}
        </td>
        <td>
          <div class="inline-actions">
            <button class="btn btn-secondary btn-sm edit-company-btn" data-company-id="${c.id}" title="Modifica nel Form">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:3px; vertical-align:-1px;"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>Modifica
            </button>
          </div>
        </td>
      `;

      tbody.appendChild(tr);
    });

    // Attach inline events
    tbody.querySelectorAll('.inline-stage-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const compId = e.target.getAttribute('data-company-id');
        const newStage = e.target.value;
        updateCompanyStage(compId, newStage);
      });
    });

    tbody.querySelectorAll('.download-table-pitch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const docId = btn.getAttribute('data-doc-id');
        if (docId) downloadDocument(docId);
      });
    });

    tbody.querySelectorAll('.add-table-pitch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const compId = btn.getAttribute('data-company-id');
        loadCompanyIntoForm(compId, true);
        const pitchBox = document.getElementById('companyDedicatedPitchBox');
        if (pitchBox) {
          pitchBox.classList.add('highlight-focus');
          setTimeout(() => pitchBox.classList.remove('highlight-focus'), 2500);
          pitchBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    tbody.querySelectorAll('.send-email-table-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const email = btn.getAttribute('data-email');
        const name = btn.getAttribute('data-name');
        const sponsorType = btn.getAttribute('data-type');
        openEmailComposer(email, name, sponsorType);
      });
    });

    tbody.querySelectorAll('.analyze-email-table-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const compId = btn.getAttribute('data-company-id');
        loadCompanyIntoForm(compId, false);
        openEmailAnalyzerModal(compId);
      });
    });

    tbody.querySelectorAll('.edit-company-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const compId = btn.getAttribute('data-company-id');
        loadCompanyIntoForm(compId, true);
      });
    });

    tbody.querySelectorAll('.notes-preview-cell').forEach(cell => {
      cell.addEventListener('click', (e) => {
        const compId = cell.getAttribute('data-company-id');
        openNotesModal(compId);
      });
    });
  }

  function renderDocuments() {
    // 1. Team Drive status & Team Gmail in header
    const driveInput = document.getElementById('teamDriveInput');
    const openDriveBtn = document.getElementById('openTeamDriveBtn');
    const headerDriveBtn = document.getElementById('headerDriveLink');
    const headerGmailBtn = document.getElementById('headerGmailLink');

    driveInput.value = state.teamDriveUrl || '';
    if (state.teamDriveUrl) {
      openDriveBtn.href = state.teamDriveUrl;
      openDriveBtn.style.display = 'inline-flex';
      headerDriveBtn.href = state.teamDriveUrl;
      headerDriveBtn.style.display = 'inline-flex';
    } else {
      openDriveBtn.style.display = 'none';
      headerDriveBtn.style.display = 'none';
    }

    if (headerGmailBtn) {
      headerGmailBtn.href = `https://mail.google.com/mail/u/?authuser=${encodeURIComponent(state.teamGmail)}`;
      headerGmailBtn.title = `Apri casella Gmail di squadra (${state.teamGmail})`;
    }

    // 2. Pitch Deck Link Drive
    const pitchDriveInput = document.getElementById('pitchDriveInput');
    const openPitchDriveBtn = document.getElementById('openPitchDriveBtn');
    pitchDriveInput.value = state.pitchDeckDriveUrl || '';
    if (state.pitchDeckDriveUrl) {
      openPitchDriveBtn.href = state.pitchDeckDriveUrl;
      openPitchDriveBtn.style.display = 'inline-flex';
    } else {
      openPitchDriveBtn.style.display = 'none';
    }

    // 3. Pitch Deck Local Files from IndexedDB
    idbGetDocuments('pitch_deck').then(docs => {
      const container = document.getElementById('pitchDeckFileList');
      container.innerHTML = '';
      if (docs.length === 0) {
        container.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">Nessun file locale caricato.</div>';
      } else {
        docs.forEach(doc => {
          const item = createDocItemElement(doc);
          container.appendChild(item);
        });
      }
    });

    // 4. Contracts from IndexedDB
    idbGetDocuments('contract').then(docs => {
      const container = document.getElementById('contractsFileList');
      container.innerHTML = '';
      if (docs.length === 0) {
        container.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">Nessun contratto archiviato finora.</div>';
      } else {
        docs.forEach(doc => {
          const item = createDocItemElement(doc);
          container.appendChild(item);
        });
      }
    });

    // Populate contract company selector
    const contractCompanySelect = document.getElementById('contractCompanySelect');
    if (contractCompanySelect) {
      const currentSelected = contractCompanySelect.value;
      contractCompanySelect.innerHTML = '<option value="">-- Associa ad un\'azienda --</option>';
      const sorted = [...state.companies].sort((a, b) => a.name.localeCompare(b.name, 'it', { sensitivity: 'base' }));
      sorted.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.textContent = `${c.name} (${c.sponsorType || 'Finanziario'})`;
        contractCompanySelect.appendChild(opt);
      });
      contractCompanySelect.value = currentSelected;
    }
  }

  function createDocItemElement(doc) {
    const item = document.createElement('div');
    item.className = 'file-item';

    const companyTag = doc.companyName ? `<span class="badge" style="background:var(--carbon-hover); font-size:0.7rem; padding:2px 8px; border-radius:9999px; margin-left:6px; color:var(--brand-primary); border:1px solid var(--border-color);">${escapeHtml(doc.companyName)}</span>` : '';

    item.innerHTML = `
      <div class="file-item-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <div>
          <div class="file-name" title="${escapeHtml(doc.fileName)}">
            ${escapeHtml(doc.fileName)} ${companyTag}
          </div>
          <div class="file-meta">
            ${formatFileSize(doc.fileSize)} • ${formatDate(doc.uploadedAt)}
          </div>
        </div>
      </div>
      <div class="file-actions">
        ${doc.driveUrl ? `
          <a href="${escapeHtml(doc.driveUrl)}" target="_blank" class="btn btn-secondary btn-icon btn-sm" title="Apri su Drive">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </a>
        ` : ''}
        <button class="btn btn-secondary btn-icon btn-sm download-doc-btn" data-id="${doc.id}" title="Scarica File">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
        <button class="btn btn-outline-danger btn-icon btn-sm delete-doc-btn" data-id="${doc.id}" title="Elimina File">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;

    item.querySelector('.download-doc-btn').addEventListener('click', () => downloadDocument(doc.id));
    item.querySelector('.delete-doc-btn').addEventListener('click', () => deleteDocument(doc.id));
    return item;
  }

  function renderAll() {
    renderTracker();
    renderCompanyDropdown();
    renderTable();
    renderDocuments();
    renderCustomPitchDecksCenter();
    renderCompanyDedicatedPitch(state.selectedCompanyId);
    renderCompanyAttachments(state.selectedCompanyId);
  }

  // --- FORM MANAGEMENT ---

  function setFormMode(isNew) {
    state.isManualNewMode = isNew;
    const manualGroup = document.getElementById('manualCompanyGroup');
    const selectWrap = document.querySelector('.company-select-wrap');
    const deleteBtn = document.getElementById('deleteCompanyBtn');
    const toggleBtn = document.getElementById('btnToggleNewCompany');

    if (isNew) {
      manualGroup.style.display = 'block';
      selectWrap.style.display = 'none';
      toggleBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:-1px;"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect x="9" y="3" width="6" height="4" rx="2"></rect></svg>Scegli da Esistenti';
      deleteBtn.style.display = 'none';
      document.getElementById('manualCompanyNameInput').focus();
    } else {
      manualGroup.style.display = 'none';
      selectWrap.style.display = 'block';
      toggleBtn.innerHTML = '+ Nuova Azienda';
    }
  }

  function updateFormFieldsVisibility(type) {
    const cashSection = document.getElementById('cashFieldsGroup');
    const techSection = document.getElementById('techFieldsGroup');

    if (type === 'Finanziario') {
      cashSection.style.display = 'grid';
      techSection.style.display = 'none';
    } else if (type === 'Tecnico') {
      cashSection.style.display = 'none';
      techSection.style.display = 'block';
    } else { // Ibrido
      cashSection.style.display = 'grid';
      techSection.style.display = 'block';
    }
  }

  // Multi-Category Pills Helpers
  function getSelectedTechCategories() {
    const container = document.getElementById('techCategoryPillsContainer');
    if (!container) return [];
    const activeBtns = container.querySelectorAll('.category-pill-btn.active');
    return Array.from(activeBtns).map(btn => btn.getAttribute('data-category'));
  }

  function setSelectedTechCategories(categories = []) {
    const container = document.getElementById('techCategoryPillsContainer');
    if (!container) return;
    const catArray = Array.isArray(categories) 
      ? categories 
      : (typeof categories === 'string' ? categories.split(',').map(s => s.trim()).filter(Boolean) : []);
    
    const btns = container.querySelectorAll('.category-pill-btn');
    btns.forEach(btn => {
      const catName = btn.getAttribute('data-category');
      if (catArray.includes(catName)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    updateCategoriesCountLabel();
  }

  function updateCategoriesCountLabel() {
    const label = document.getElementById('selectedCategoriesCountLabel');
    if (!label) return;
    const count = getSelectedTechCategories().length;
    if (count === 0) {
      label.textContent = 'Nessuna selezionata';
      label.style.color = 'var(--text-muted)';
    } else if (count === 1) {
      label.textContent = '1 selezionata';
      label.style.color = 'var(--foil-cyan)';
    } else {
      label.textContent = `${count} selezionate`;
      label.style.color = 'var(--foil-cyan)';
    }
  }

  function clearForm() {
    state.selectedCompanyId = null;
    document.getElementById('companySelect').value = '';
    document.getElementById('manualCompanyNameInput').value = '';
    const formSearch = document.getElementById('formSponsorSearchInput');
    if (formSearch) formSearch.value = '';
    
    // Active Sponsor Banner
    const activeBanner = document.getElementById('activeSponsorBanner');
    if (activeBanner) activeBanner.style.display = 'none';

    // Type selector radio
    setTypeRadio('Finanziario');
    updateFormFieldsVisibility('Finanziario');

    // Stage selector radio
    setStageRadio('Da Contattare');
    
    document.getElementById('ticketRichiestoInput').value = '0';
    document.getElementById('ticketOttenutoInput').value = '0';

    // Technical fields
    document.getElementById('techValueInput').value = '0';
    setSelectedTechCategories([]);
    document.getElementById('techDescriptionInput').value = '';
    document.getElementById('techDeliveryStatusSelect').value = 'Da Concordare';

    // Dedicated Pitch Deck fields
    const pitchUrlInput = document.getElementById('companyDedicatedPitchUrlInput');
    if (pitchUrlInput) pitchUrlInput.value = '';
    const openPitchBtn = document.getElementById('openCompanyDedicatedPitchBtn');
    if (openPitchBtn) openPitchBtn.style.display = 'none';
    const pitchBadge = document.getElementById('companyPitchStatusBadge');
    if (pitchBadge) {
      pitchBadge.textContent = 'Non Caricato';
      pitchBadge.className = 'pitch-status-badge pitch-status-missing';
    }
    const pitchPreview = document.getElementById('companyDedicatedPitchPreview');
    if (pitchPreview) pitchPreview.innerHTML = '';

    document.getElementById('companyEmailInput').value = '';
    document.getElementById('threadUrlInput').value = '';
    document.getElementById('companyDriveUrlInput').value = '';
    document.getElementById('companyNotesInput').value = '';
    
    document.getElementById('deleteCompanyBtn').style.display = 'none';
    setFormMode(false);
    renderCompanyAttachments(null);
  }

  function loadCompanyIntoForm(companyId, shouldScroll = false) {
    const comp = state.companies.find(c => c.id === companyId);
    if (!comp) return;

    state.selectedCompanyId = comp.id;
    setFormMode(false);

    document.getElementById('companySelect').value = comp.id;
    
    const type = comp.sponsorType || 'Finanziario';
    setTypeRadio(type);
    updateFormFieldsVisibility(type);

    setStageRadio(comp.stage);

    document.getElementById('ticketRichiestoInput').value = comp.requestedTicket || 0;
    document.getElementById('ticketOttenutoInput').value = comp.obtainedTicket || 0;

    // Technical fields
    document.getElementById('techValueInput').value = comp.techValue || 0;
    const compCats = comp.techCategories || (comp.techCategory ? comp.techCategory.split(',').map(s => s.trim()) : []);
    setSelectedTechCategories(compCats);
    document.getElementById('techDescriptionInput').value = comp.techDescription || '';
    document.getElementById('techDeliveryStatusSelect').value = comp.techDeliveryStatus || 'Da Concordare';

    // Dedicated Pitch Deck fields
    const pitchUrlInput = document.getElementById('companyDedicatedPitchUrlInput');
    if (pitchUrlInput) pitchUrlInput.value = comp.dedicatedPitchUrl || '';
    const openPitchBtn = document.getElementById('openCompanyDedicatedPitchBtn');
    if (openPitchBtn) {
      if (comp.dedicatedPitchUrl && comp.dedicatedPitchUrl.trim() !== '') {
        openPitchBtn.href = comp.dedicatedPitchUrl;
        openPitchBtn.style.display = 'inline-flex';
      } else {
        openPitchBtn.style.display = 'none';
      }
    }
    renderCompanyDedicatedPitch(comp.id);

    // Active Sponsor Banner
    const activeBanner = document.getElementById('activeSponsorBanner');
    if (activeBanner) {
      document.getElementById('activeSponsorNameLabel').textContent = comp.name;
      const typeBadgeEl = document.getElementById('activeSponsorTypeBadge');
      if (typeBadgeEl) {
        typeBadgeEl.textContent = type;
        typeBadgeEl.className = `type-badge type-${type.toLowerCase()}`;
      }
      const stageBadgeEl = document.getElementById('activeSponsorStageBadge');
      if (stageBadgeEl) {
        stageBadgeEl.textContent = comp.stage;
        stageBadgeEl.className = `stage-badge ${getStageSlug(comp.stage)}`;
      }
      activeBanner.style.display = 'flex';
    }

    document.getElementById('companyEmailInput').value = comp.email || '';
    document.getElementById('threadUrlInput').value = comp.threadUrl || '';
    document.getElementById('companyDriveUrlInput').value = comp.driveUrl || '';
    document.getElementById('companyNotesInput').value = comp.notes || '';

    const deleteBtn = document.getElementById('deleteCompanyBtn');
    deleteBtn.style.display = comp.isCustom ? 'inline-flex' : 'none';

    renderCompanyAttachments(comp.id);

    if (shouldScroll) {
      document.getElementById('formSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function setTypeRadio(typeValue) {
    const radios = document.querySelectorAll('input[name="sponsorTypeRadio"]');
    radios.forEach(r => {
      r.checked = (r.value === typeValue);
    });
  }

  function getSelectedTypeRadio() {
    const checked = document.querySelector('input[name="sponsorTypeRadio"]:checked');
    return checked ? checked.value : 'Finanziario';
  }

  function setStageRadio(stageValue) {
    const radios = document.querySelectorAll('input[name="stageRadio"]');
    radios.forEach(r => {
      r.checked = (r.value === stageValue);
    });
  }

  function getSelectedStageRadio() {
    const checked = document.querySelector('input[name="stageRadio"]:checked');
    return checked ? checked.value : 'Da Contattare';
  }

  function handleSaveCompany() {
    let name = '';
    let isNew = state.isManualNewMode;

    if (isNew) {
      name = document.getElementById('manualCompanyNameInput').value.trim();
      if (!name) {
        showToast("Inserisci il nome della nuova azienda!", "error");
        document.getElementById('manualCompanyNameInput').focus();
        return;
      }
      const exists = state.companies.some(c => c.name.toLowerCase() === name.toLowerCase());
      if (exists) {
        showToast("Un'azienda con questo nome esiste già!", "error");
        return;
      }
    } else {
      if (!state.selectedCompanyId) {
        showToast("Seleziona un'azienda o clicca '+ Nuova Azienda'", "warning");
        return;
      }
      const existing = state.companies.find(c => c.id === state.selectedCompanyId);
      if (!existing) return;
      name = existing.name;
    }

    const sponsorType = getSelectedTypeRadio();
    const stage = getSelectedStageRadio();
    const requested = Math.max(0, parseFloat(document.getElementById('ticketRichiestoInput').value) || 0);
    const obtained = Math.max(0, parseFloat(document.getElementById('ticketOttenutoInput').value) || 0);
    
    // Technical fields
    const techValue = Math.max(0, parseFloat(document.getElementById('techValueInput').value) || 0);
    const techCategories = getSelectedTechCategories();
    const techCategory = techCategories.join(', ');
    const techDescription = document.getElementById('techDescriptionInput').value.trim();
    const techDeliveryStatus = document.getElementById('techDeliveryStatusSelect').value;

    // Dedicated Pitch Deck URL
    const dedicatedPitchUrl = document.getElementById('companyDedicatedPitchUrlInput') 
      ? document.getElementById('companyDedicatedPitchUrlInput').value.trim() 
      : '';

    const email = document.getElementById('companyEmailInput').value.trim();
    const threadUrl = document.getElementById('threadUrlInput').value.trim();
    const driveUrl = document.getElementById('companyDriveUrlInput').value.trim();
    const notes = document.getElementById('companyNotesInput').value.trim();
    const now = new Date().toISOString();

    if (isNew) {
      const newId = 'sft_custom_' + Date.now();
      const newCompany = {
        id: newId,
        name: name,
        sponsorType: sponsorType,
        stage: stage,
        requestedTicket: requested,
        obtainedTicket: obtained,
        techValue: techValue,
        techCategories: techCategories,
        techCategory: techCategory,
        techDescription: techDescription,
        techDeliveryStatus: techDeliveryStatus,
        dedicatedPitchUrl: dedicatedPitchUrl,
        email: email,
        threadUrl: threadUrl,
        driveUrl: driveUrl,
        notes: notes,
        updatedAt: now,
        isCustom: true
      };
      state.companies.unshift(newCompany);
      state.selectedCompanyId = newId;
      showToast(`Azienda "${name}" aggiunta come sponsor ${sponsorType}!`, "success");
    } else {
      const index = state.companies.findIndex(c => c.id === state.selectedCompanyId);
      if (index !== -1) {
        state.companies[index] = {
          ...state.companies[index],
          sponsorType: sponsorType,
          stage: stage,
          requestedTicket: requested,
          obtainedTicket: obtained,
          techValue: techValue,
          techCategories: techCategories,
          techCategory: techCategory,
          techDescription: techDescription,
          techDeliveryStatus: techDeliveryStatus,
          dedicatedPitchUrl: dedicatedPitchUrl,
          email: email,
          threadUrl: threadUrl,
          driveUrl: driveUrl,
          notes: notes,
          updatedAt: now
        };
        showToast(`Dati di "${name}" (${sponsorType}) aggiornati!`, "success");
      }
    }

    saveCompanies();
    renderCustomPitchDecksCenter();
    setFormMode(false);
  }

  function updateCompanyStage(companyId, newStage) {
    const comp = state.companies.find(c => c.id === companyId);
    if (!comp) return;

    comp.stage = newStage;
    comp.updatedAt = new Date().toISOString();

    if (newStage === 'Vinto') {
      if (comp.sponsorType === 'Finanziario' || comp.sponsorType === 'Ibrido') {
        if (!comp.obtainedTicket || comp.obtainedTicket === 0) {
          if (comp.requestedTicket > 0) {
            comp.obtainedTicket = comp.requestedTicket;
            showToast(`Stato "Vinto": assegnato ticket cash di ${formatCurrency(comp.obtainedTicket)}`, "success");
          }
        }
      }
      if (comp.sponsorType === 'Tecnico' || comp.sponsorType === 'Ibrido') {
        if (comp.techDeliveryStatus === 'Da Concordare') {
          comp.techDeliveryStatus = 'Confermato';
        }
      }
    }

    saveCompanies();
  }

  function deleteCurrentCompany() {
    if (!state.selectedCompanyId) return;
    const comp = state.companies.find(c => c.id === state.selectedCompanyId);
    if (!comp) return;

    if (!confirm(`Sei sicuro di voler rimuovere "${comp.name}" dal gestionale?`)) {
      return;
    }

    state.companies = state.companies.filter(c => c.id !== state.selectedCompanyId);
    showToast(`Azienda "${comp.name}" rimossa.`, "success");
    clearForm();
    saveCompanies();
  }

  // --- DOCUMENT UPLOAD & ACTIONS ---

  async function handleFileUpload(fileInput, type, companyName = '', driveUrl = '') {
    const file = fileInput.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      showToast("Il file supera il limite consigliato di 50MB.", "warning");
    }

    const docId = 'doc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const docRecord = {
      id: docId,
      type: type,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type || 'application/octet-stream',
      uploadedAt: new Date().toISOString(),
      companyName: companyName,
      driveUrl: driveUrl,
      blobData: file
    };

    try {
      await idbSaveDocument(docRecord);
      showToast(`Documento "${file.name}" archiviato con successo!`, "success");
      fileInput.value = '';
      renderDocuments();
    } catch (err) {
      console.error("Errore salvataggio file in IndexedDB", err);
      showToast("Errore durante l'archiviazione del file.", "error");
    }
  }

  async function downloadDocument(docId) {
    try {
      const doc = await idbGetDocumentById(docId);
      if (!doc || !doc.blobData) {
        showToast("File non trovato nell'archivio.", "error");
        return;
      }
      const url = URL.createObjectURL(doc.blobData);
      const a = document.createElement('a');
      a.href = url;
      a.download = doc.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      showToast("Impossibile scaricare il file.", "error");
    }
  }

  async function deleteDocument(docId) {
    if (!confirm("Sei sicuro di voler eliminare questo documento dall'archivio locale?")) {
      return;
    }
    try {
      await idbDeleteDocument(docId);
      showToast("Documento eliminato.", "success");
      renderDocuments();
    } catch (e) {
      showToast("Errore durante l'eliminazione.", "error");
    }
  }

  // --- TEAM GMAIL & EMAIL GENERATION ---

  function generateGmailSearchUrl(companyName, email) {
    let query = '';
    if (email && email.trim()) {
      query = `(to:${email.trim()} OR from:${email.trim()} OR "${companyName}")`;
    } else {
      query = `"${companyName}"`;
    }
    const teamAccount = state.teamGmail || DEFAULT_TEAM_GMAIL;
    return `https://mail.google.com/mail/u/?authuser=${encodeURIComponent(teamAccount)}#search/${encodeURIComponent(query)}`;
  }

  function openEmailComposer(email, companyName, sponsorType = 'Finanziario') {
    if (!email || !email.trim()) {
      showToast("Nessun indirizzo email configurato per questo sponsor!", "warning");
      return;
    }
    const cleanEmail = email.trim();
    const typeLabel = (sponsorType === 'Tecnico') 
      ? 'Partnership Tecnica & Fornitura Materiali' 
      : (sponsorType === 'Ibrido' ? 'Sponsorizzazione & Partnership Tecnica' : 'Sponsorizzazione Ufficiale');
    
    const subject = `Sapienza Foiling Team - Proposta di ${typeLabel} (${companyName})`;
    const teamEmail = state.teamGmail || DEFAULT_TEAM_GMAIL;
    const body = `Gentile referente di ${companyName},

Siamo il Sapienza Foiling Team, il team studentesco dell'Università La Sapienza di Roma impegnato nella progettazione e costruzione della barca a vela foiling "Meravijosa" per la prestigiosa competizione internazionale SuMoth Challenge.

Desideriamo sottoporre alla Vostra attenzione la nostra proposta di collaborazione per la stagione agonistica in corso.

In allegato trasmettiamo la nostra presentazione ufficiale (Pitch Deck) e la scheda tecnica del progetto con le diverse formule di sponsorship.

Restiamo a disposizione per fissare una breve call conoscitiva di approfondimento.

Cordiali saluti,

Sapienza Foiling Team
Email: ${teamEmail}
Sito Web: https://www.sapienzafoilingteam.com/
Università La Sapienza di Roma`;

    const gmailUrl = `https://mail.google.com/mail/u/?authuser=${encodeURIComponent(teamEmail)}&view=cm&fs=1&to=${encodeURIComponent(cleanEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = gmailUrl;
    }
    showToast(`Apertura bozza Gmail Team per ${companyName}...`, "info");
  }

  function generateMailtoUrl(email, companyName, sponsorType = 'Finanziario') {
    const typeLabel = sponsorType === 'Tecnico' ? 'Partnership Tecnica & Fornitura' : 'Sponsorizzazione & Partnership';
    const subject = encodeURIComponent(`Sapienza Foiling Team - Proposta di ${typeLabel} (${companyName})`);
    const body = encodeURIComponent(`Gentile referente di ${companyName},\n\nSiamo il Sapienza Foiling Team, il team studentesco universitario di vela foiling dell'Università La Sapienza di Roma (SuMoth Challenge)...\n\nCordiali saluti,\nSapienza Foiling Team\n${state.teamGmail}\nhttps://www.sapienzafoilingteam.com/`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }

  // --- COMPANY ATTACHMENTS & AUTO PITCH DECK SYNC ---

  async function handleCompanyFileUpload(files) {
    if (!state.selectedCompanyId && !state.isManualNewMode) {
      showToast("Seleziona prima un'azienda dallo sponsor CRM!", "warning");
      return;
    }

    let companyId = state.selectedCompanyId;
    let companyName = 'Azienda';
    if (state.isManualNewMode) {
      companyName = document.getElementById('manualCompanyNameInput').value.trim() || 'Nuova Azienda';
    } else {
      const comp = state.companies.find(c => c.id === companyId);
      if (comp) companyName = comp.name;
    }

    const syncPitchChecked = document.getElementById('syncPitchDeckCheckbox')?.checked;

    for (const file of files) {
      if (file.size > 50 * 1024 * 1024) {
        showToast(`Il file "${file.name}" supera il limite consigliato di 50MB.`, "warning");
      }

      const isPitchDeck = syncPitchChecked && (
        file.name.toLowerCase().includes('pitch') || 
        file.name.toLowerCase().includes('deck') || 
        file.name.toLowerCase().includes('presentazione') ||
        syncPitchChecked
      );

      const docId = 'doc_comp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      const docRecord = {
        id: docId,
        type: 'company_attachment',
        companyId: companyId,
        companyName: companyName,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString(),
        isPitchDeck: isPitchDeck,
        blobData: file
      };

      try {
        await idbSaveDocument(docRecord);

        // If it's a pitch deck, also store/sync as official pitch deck in Section 3
        if (isPitchDeck) {
          const pitchDocId = 'pitch_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
          const pitchDoc = {
            id: pitchDocId,
            type: 'pitch_deck',
            fileName: `[${companyName}] ${file.name}`,
            fileSize: file.size,
            fileType: file.type || 'application/octet-stream',
            uploadedAt: new Date().toISOString(),
            companyName: companyName,
            blobData: file
          };
          await idbSaveDocument(pitchDoc);
          renderDocuments();
          showToast(`"${file.name}" salvato per ${companyName} e sincronizzato come Pitch Deck Ufficiale di Squadra!`, "success");
        } else {
          showToast(`Allegato "${file.name}" salvato per ${companyName}!`, "success");
        }
      } catch (err) {
        console.error("Errore salvataggio allegato", err);
        showToast(`Errore salvataggio file "${file.name}"`, "error");
      }
    }

    renderCompanyAttachments(companyId);
  }

  async function renderCompanyAttachments(companyId) {
    const listContainer = document.getElementById('companyAttachmentsList');
    const badge = document.getElementById('companyAttachmentCountBadge');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    if (!companyId) {
      if (badge) badge.textContent = '0 file';
      listContainer.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">Seleziona un\'azienda per visualizzare o caricare i suoi allegati.</div>';
      return;
    }

    try {
      const allDocs = await idbGetDocuments();
      const comp = state.companies.find(c => c.id === companyId);
      const compName = comp ? comp.name.toLowerCase() : '';
      
      const compDocs = allDocs.filter(d => 
        d.companyId === companyId || 
        (d.companyName && d.companyName.toLowerCase() === compName)
      );

      if (badge) {
        badge.textContent = `${compDocs.length} file`;
      }

      if (compDocs.length === 0) {
        listContainer.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">Nessun allegato archiviato per questa azienda.</div>';
        return;
      }

      compDocs.forEach(doc => {
        const item = createCompanyDocItemElement(doc);
        listContainer.appendChild(item);
      });
    } catch (e) {
      console.error("Errore lettura allegati azienda", e);
    }
  }

  function createCompanyDocItemElement(doc) {
    const item = document.createElement('div');
    item.className = 'file-item';

    const pitchBadge = (doc.isPitchDeck || doc.type === 'pitch_deck') 
      ? `<span class="badge" style="background:rgba(245,158,11,0.2); font-size:0.68rem; padding:2px 8px; border-radius:9999px; margin-left:6px; color:var(--racing-gold-bright); border:1px solid rgba(245,158,11,0.4);">Pitch Deck Ufficiale</span>` 
      : '';

    item.innerHTML = `
      <div class="file-item-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
        <div>
          <div class="file-name" title="${escapeHtml(doc.fileName)}">
            ${escapeHtml(doc.fileName)} ${pitchBadge}
          </div>
          <div class="file-meta">
            ${formatFileSize(doc.fileSize)} • ${formatDate(doc.uploadedAt)}
          </div>
        </div>
      </div>
      <div class="file-actions">
        <button type="button" class="btn btn-secondary btn-icon btn-sm download-comp-doc-btn" data-id="${doc.id}" title="Scarica Allegato">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
        <button type="button" class="btn btn-outline-danger btn-icon btn-sm delete-comp-doc-btn" data-id="${doc.id}" title="Elimina Allegato">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;

    item.querySelector('.download-comp-doc-btn').addEventListener('click', () => downloadDocument(doc.id));
    item.querySelector('.delete-comp-doc-btn').addEventListener('click', async () => {
      if (confirm(`Eliminare l'allegato "${doc.fileName}"?`)) {
        await idbDeleteDocument(doc.id);
        renderCompanyAttachments(state.selectedCompanyId);
        renderDocuments();
        showToast("Allegato eliminato.", "info");
      }
    });
    return item;
  }

  // --- DEDICATED PITCH DECK FOR SINGLE SPONSOR ---

  async function handleCompanyDedicatedPitchUpload(file, companyId) {
    if (!companyId) {
      showToast("Seleziona prima un'azienda a cui associare il Pitch Deck!", "warning");
      return;
    }
    const comp = state.companies.find(c => c.id === companyId);
    const companyName = comp ? comp.name : 'Sponsor';

    try {
      const docId = 'pitch_comp_' + companyId + '_' + Date.now();
      const doc = {
        id: docId,
        type: 'company_pitch',
        companyId: companyId,
        companyName: companyName,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString(),
        blobData: file
      };
      await idbSaveDocument(doc);
      showToast(`Pitch Deck dedicato per "${companyName}" caricato con successo!`, "success");
      await renderCompanyDedicatedPitch(companyId);
      await renderCustomPitchDecksCenter();
      renderTable();
    } catch (err) {
      console.error("Errore salvataggio pitch dedicato", err);
      showToast("Errore durante il salvataggio del Pitch Deck dedicato.", "error");
    }
  }

  async function renderCompanyDedicatedPitch(companyId) {
    const container = document.getElementById('companyDedicatedPitchPreview');
    const badge = document.getElementById('companyPitchStatusBadge');
    const openUrlBtn = document.getElementById('openCompanyDedicatedPitchBtn');
    if (!container) return;

    container.innerHTML = '';
    if (!companyId) {
      if (badge) {
        badge.textContent = 'Non Caricato';
        badge.className = 'pitch-status-badge pitch-status-missing';
      }
      return;
    }

    const comp = state.companies.find(c => c.id === companyId);
    const hasUrl = comp && comp.dedicatedPitchUrl && comp.dedicatedPitchUrl.trim() !== '';

    if (hasUrl) {
      if (openUrlBtn) {
        openUrlBtn.href = comp.dedicatedPitchUrl;
        openUrlBtn.style.display = 'inline-flex';
      }
    } else {
      if (openUrlBtn) openUrlBtn.style.display = 'none';
    }

    try {
      const allDocs = await idbGetDocuments('company_pitch');
      const pitchDocs = allDocs.filter(d => d.companyId === companyId);

      if (pitchDocs.length > 0) {
        if (badge) {
          badge.textContent = 'Pitch PDF Disponibile';
          badge.className = 'pitch-status-badge pitch-status-ready';
        }
        pitchDocs.forEach(doc => {
          const item = document.createElement('div');
          item.className = 'file-item';
          item.style.padding = '8px 12px';
          item.innerHTML = `
            <div class="file-item-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--racing-gold-bright)" stroke-width="2" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <div>
                <div class="file-name" style="font-weight:700; color:var(--sail-white);">${escapeHtml(doc.fileName)}</div>
                <div class="file-meta">${formatFileSize(doc.fileSize)} • ${formatDate(doc.uploadedAt)}</div>
              </div>
            </div>
            <div class="file-actions">
              <button type="button" class="btn btn-secondary btn-sm download-pitch-btn" data-id="${doc.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Scarica
              </button>
              <button type="button" class="btn btn-outline-danger btn-icon btn-sm delete-pitch-btn" data-id="${doc.id}" title="Elimina file pitch">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          `;
          item.querySelector('.download-pitch-btn').addEventListener('click', () => downloadDocument(doc.id));
          item.querySelector('.delete-pitch-btn').addEventListener('click', async () => {
            if (confirm(`Eliminare il file pitch "${doc.fileName}"?`)) {
              await idbDeleteDocument(doc.id);
              await renderCompanyDedicatedPitch(companyId);
              await renderCustomPitchDecksCenter();
              renderTable();
              showToast("Pitch Deck dedicato rimosso.", "info");
            }
          });
          container.appendChild(item);
        });
      } else if (hasUrl) {
        if (badge) {
          badge.textContent = 'Link Canva/Drive Attivo';
          badge.className = 'pitch-status-badge pitch-status-ready';
        }
        container.innerHTML = `
          <div style="font-size:0.75rem; color:var(--foil-cyan); padding:4px;">
            Presentazione collegata tramite link cloud esterno. Clicca su ↗ per aprirla.
          </div>
        `;
      } else {
        if (badge) {
          badge.textContent = 'Non Caricato';
          badge.className = 'pitch-status-badge pitch-status-missing';
        }
      }
    } catch (err) {
      console.error("Errore rendering pitch dedicato", err);
    }
  }

  async function renderCustomPitchDecksCenter() {
    const container = document.getElementById('customPitchDecksList');
    const countBadge = document.getElementById('customPitchDecksCountBadge');
    const searchInput = document.getElementById('customPitchSearchInput');
    if (!container) return;

    const query = (searchInput ? searchInput.value.toLowerCase().trim() : '');

    try {
      const allCustomDocs = await idbGetDocuments('company_pitch');
      const map = new Map();

      state.companies.forEach(comp => {
        const docsForComp = allCustomDocs.filter(d => d.companyId === comp.id);
        const hasUrl = comp.dedicatedPitchUrl && comp.dedicatedPitchUrl.trim() !== '';
        if (docsForComp.length > 0 || hasUrl) {
          map.set(comp.id, {
            company: comp,
            docs: docsForComp,
            url: comp.dedicatedPitchUrl
          });
        }
      });

      const entries = Array.from(map.values());
      if (countBadge) {
        countBadge.textContent = `${entries.length} pronti`;
      }

      const filtered = entries.filter(e => {
        if (!query) return true;
        return e.company.name.toLowerCase().includes(query);
      });

      container.innerHTML = '';
      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="font-size:0.78rem; color:var(--text-muted); padding:8px 4px; text-align:center;">
            ${query ? 'Nessun pitch trovato per questa ricerca.' : 'Nessun pitch personalizzato ancora associato agli sponsor.'}
          </div>
        `;
        return;
      }

      filtered.forEach(entry => {
        const comp = entry.company;
        const item = document.createElement('div');
        item.className = 'file-item';
        item.style.padding = '8px 10px';

        const fileInfo = entry.docs.length > 0 ? entry.docs[0].fileName : (entry.url ? 'Link Cloud / Canva' : '');
        const isFile = entry.docs.length > 0;

        item.innerHTML = `
          <div class="file-item-left" style="overflow:hidden;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--racing-gold-bright)" stroke-width="2" style="flex-shrink:0;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <div style="min-width:0;">
              <div class="file-name" style="font-weight:700;">${escapeHtml(comp.name)}</div>
              <div class="file-meta" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(fileInfo)}</div>
            </div>
          </div>
          <div class="file-actions" style="flex-shrink:0;">
            ${isFile ? `
              <button type="button" class="btn btn-secondary btn-icon btn-sm download-custom-pitch-btn" data-doc-id="${entry.docs[0].id}" title="Scarica Pitch Deck">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </button>
            ` : (entry.url ? `
              <a href="${escapeHtml(entry.url)}" target="_blank" class="btn btn-secondary btn-icon btn-sm" title="Apri Link Presentazione">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : '')}
            <button type="button" class="btn btn-secondary btn-sm goto-sponsor-btn" data-comp-id="${comp.id}" style="padding:2px 8px; font-size:0.72rem;">
              Scheda
            </button>
          </div>
        `;

        if (isFile) {
          item.querySelector('.download-custom-pitch-btn').addEventListener('click', () => downloadDocument(entry.docs[0].id));
        }
        item.querySelector('.goto-sponsor-btn').addEventListener('click', () => {
          loadCompanyIntoForm(comp.id, true);
          const pitchBox = document.getElementById('companyDedicatedPitchBox');
          if (pitchBox) {
            pitchBox.classList.add('highlight-focus');
            setTimeout(() => pitchBox.classList.remove('highlight-focus'), 2500);
          }
        });

        container.appendChild(item);
      });
    } catch (err) {
      console.error("Errore centro pitch", err);
    }
  }

  // --- SMART EMAIL RESPONSE ANALYZER (AI HEURISTIC ENGINE) ---

  let activeAnalyzerExtractedData = null;

  function parseEmailText(rawText) {
    if (!rawText || !rawText.trim()) return null;

    const text = rawText.trim();
    let detectedStage = 'In Trattativa';
    let confidence = 'Media';
    let matchReasons = [];

    // 1. Stage Detection
    const wonKeywords = [
      'deliberat', 'approvat', 'confermiam', 'lieti di confermare', 
      'accordo raggiunto', 'sponsorizzeremo', 'accettiamo la vostra proposta', 
      'benvenuti a bordo', 'allego il contratto', 'adesione', 'bonifico', 
      'contributo concesso', 'accordo formale', 'supporto deliberato', 'contratto allegato'
    ];
    const lostKeywords = [
      'purtroppo non', 'non siamo in grado', 'non rientra nei nostri piani', 
      'budget esaurito', 'declinare', 'spiacenti di comunicare', 'impossibilitati', 
      'non possiamo accogliere', 'politica aziendale non prevede', 'declinare la richiesta',
      'non abbiamo disponibilità'
    ];
    const negKeywords = [
      'call', 'incontr', 'approfondire', 'valutare', 'valutando', 'discuterne', 
      'presentazione', 'preventivo', 'fissare un appuntamento', 'ci risentiamo', 
      'proposta in esame', 'dettagli', 'disponibili ad un incontro', 'riunione'
    ];

    const lower = text.toLowerCase();
    let wonMatches = wonKeywords.filter(kw => lower.includes(kw));
    let lostMatches = lostKeywords.filter(kw => lower.includes(kw));
    let negMatches = negKeywords.filter(kw => lower.includes(kw));

    if (wonMatches.length > 0) {
      detectedStage = 'Vinto';
      confidence = 'Alta';
      matchReasons.push(`Parole chiave di conferma: "${wonMatches.slice(0, 2).join('", "')}"`);
    } else if (lostMatches.length > 0) {
      detectedStage = 'Perso';
      confidence = 'Alta';
      matchReasons.push(`Parole chiave di declino: "${lostMatches.slice(0, 2).join('", "')}"`);
    } else if (negMatches.length > 0) {
      detectedStage = 'In Trattativa';
      confidence = 'Buona';
      matchReasons.push(`Parole chiave di dialogo: "${negMatches.slice(0, 2).join('", "')}"`);
    } else {
      detectedStage = 'Primo Contatto Inviato';
      confidence = 'Interlocutoria';
      matchReasons.push('Risposta interlocutoria o di ricezione');
    }

    // 2. Cash Monetary Amounts (€ or euro)
    let detectedCash = 0;
    const cashRegexes = [
      /(?:ticket|contributo|somma|quota|budget|stanziamento|importo)(?:\s+(?:di|da|pari a|fino a))?\s*(?:€)?\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)\s*(?:€|euro)?/gi,
      /(?:€|euro|eur)\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)/gi,
      /([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)\s*(?:€|euro)/gi
    ];

    const foundAmounts = [];
    for (const rx of cashRegexes) {
      let m;
      while ((m = rx.exec(text)) !== null) {
        let numStr = m[1].replace(/\./g, '').replace(/,/g, '.');
        let parsed = parseFloat(numStr);
        if (!isNaN(parsed) && parsed >= 50 && parsed <= 500000) {
          foundAmounts.push(parsed);
        }
      }
    }

    if (foundAmounts.length > 0) {
      detectedCash = Math.max(...foundAmounts);
      matchReasons.push(`Rilevato importo: € ${formatNumberIt(detectedCash)}`);
    }

    // 3. Technical In-Kind Value
    let detectedTechValue = 0;
    const techValRegex = /(?:valore|controvalore|fornitura|materiali|commerciale)(?:[^\d€\n]{0,35})(?:€|euro)?\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)\s*(?:€|euro)?/gi;
    let tm;
    while ((tm = techValRegex.exec(text)) !== null) {
      let valStr = tm[1].replace(/\./g, '').replace(/,/g, '.');
      let p = parseFloat(valStr);
      if (!isNaN(p) && p >= 50 && p !== detectedCash) {
        detectedTechValue = p;
        break;
      }
    }

    // 4. Categories Detection
    const categoryRules = [
      { name: "Materiali Compositi", regex: /(?:carbonio|resina|epossidic[ao]|fibra|compositi|tessuto|corecell|pvc)/i },
      { name: "Lavorazioni Meccaniche & Stampi", regex: /(?:lavorazion[ie]|meccanic[ao]|cnc|fresatur[ae]|stamp[io]|alluminio|ergal|titanio|tornitura)/i },
      { name: "Vele & Manovre", regex: /(?:vele|randa|fiocco|dacron|kevlar|cima|scotte|drizze|rigging|sartiame)/i },
      { name: "Elettronica & Sensori", regex: /(?:sensori|telemetria|imu|gps|load cell|elettronica|scheda|pcb|batterie)/i },
      { name: "Software & Simulazione", regex: /(?:software|ansys|altair|solidworks|catia|licenz[ae]|cad|cfd|fem|simulazion[ie])/i },
      { name: "Abbigliamento Tecnico", regex: /(?:abbigliamento|mute|giacc[ae]|polo|divis[ae]|spray top|salvagente)/i },
      { name: "Componentistica Nautica", regex: /(?:ferramenta|bozzelli|winch|stopper|albero|boma)/i },
      { name: "Logistica & Trasporti", regex: /(?:trasport[oi]|furgone|carrello|spedizion[ie]|logistic[ao]|rimorchio)/i },
      { name: "Consulenza & Servizi", regex: /(?:consulenza|test|prove|supporto ingegneristico)/i }
    ];

    const detectedCategories = [];
    categoryRules.forEach(rule => {
      if (rule.regex.test(text)) {
        detectedCategories.push(rule.name);
      }
    });

    // 5. Generate Date-stamped Resoconto / Verbale
    const today = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    let summaryNotes = `[Resoconto Risposta Email - ${today}]\n`;
    summaryNotes += `• Fase: ${detectedStage.toUpperCase()}`;
    if (detectedCash > 0) summaryNotes += ` | Proposta Cash: € ${formatNumberIt(detectedCash)}`;
    if (detectedTechValue > 0) summaryNotes += ` | Fornitura Tecnica: € ${formatNumberIt(detectedTechValue)}`;
    if (detectedCategories.length > 0) summaryNotes += `\n• Forniture: ${detectedCategories.join(', ')}`;
    
    // Representative quote snippet
    const snippet = text.replace(/\s+/g, ' ').slice(0, 160);
    summaryNotes += `\n• Sintesi messaggio: "${snippet}..."`;

    return {
      stage: detectedStage,
      confidence: confidence,
      reasons: matchReasons,
      cash: detectedCash,
      techValue: detectedTechValue,
      categories: detectedCategories,
      generatedNotes: summaryNotes
    };
  }

  function openEmailAnalyzerModal(companyId = null) {
    const targetCompId = companyId || state.selectedCompanyId;
    const targetLabel = document.getElementById('analyzerCompanyTargetLabel');
    const selectGroup = document.getElementById('analyzerCompanySelectGroup');
    const compSelect = document.getElementById('analyzerCompanySelect');
    const resultBox = document.getElementById('analyzerResultBox');
    const applyBtn = document.getElementById('btnApplyAnalysisToCompany');
    const textarea = document.getElementById('emailAnalyzerInput');

    compSelect.innerHTML = '';
    const sorted = [...state.companies].sort((a, b) => a.name.localeCompare(b.name, 'it', { sensitivity: 'base' }));
    sorted.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${c.sponsorType || 'Finanziario'})`;
      compSelect.appendChild(opt);
    });

    if (targetCompId) {
      const comp = state.companies.find(c => c.id === targetCompId);
      if (comp) {
        targetLabel.textContent = `${comp.name} (${comp.sponsorType || 'Finanziario'})`;
        compSelect.value = comp.id;
        selectGroup.style.display = 'none';
      } else {
        selectGroup.style.display = 'block';
      }
    } else {
      targetLabel.textContent = 'Seleziona da tendina';
      selectGroup.style.display = 'block';
    }

    resultBox.style.display = 'none';
    applyBtn.style.display = 'none';
    activeAnalyzerExtractedData = null;

    document.getElementById('emailAnalyzerModal').classList.add('active');
    textarea.focus();
  }

  function handleRunEmailAnalysis() {
    const text = document.getElementById('emailAnalyzerInput').value.trim();
    if (!text) {
      showToast("Incolla prima il testo dell'email da analizzare!", "warning");
      document.getElementById('emailAnalyzerInput').focus();
      return;
    }

    const analysis = parseEmailText(text);
    if (!analysis) {
      showToast("Nessun dato estraibile dal testo inserito.", "warning");
      return;
    }

    activeAnalyzerExtractedData = analysis;

    const resultBox = document.getElementById('analyzerResultBox');
    const stagePill = document.getElementById('analyzerMatchStagePill');
    const confBadge = document.getElementById('analyzerConfidenceBadge');
    const cashInput = document.getElementById('analyzerExtractedCashInput');
    const techInput = document.getElementById('analyzerExtractedTechInput');
    const catContainer = document.getElementById('analyzerDetectedCategories');
    const stageSelect = document.getElementById('analyzerTargetStageSelect');
    const notesInput = document.getElementById('analyzerGeneratedNotesInput');
    const applyBtn = document.getElementById('btnApplyAnalysisToCompany');

    stagePill.textContent = analysis.stage === 'Vinto' ? 'Accordo Confermato' : (analysis.stage === 'In Trattativa' ? 'In Trattativa' : (analysis.stage === 'Perso' ? 'Non Concluso' : analysis.stage));
    stagePill.className = `stage-badge ${getStageSlug(analysis.stage)}`;

    confBadge.textContent = `Affidabilità: ${analysis.confidence}`;

    cashInput.value = analysis.cash || 0;
    techInput.value = analysis.techValue || 0;
    stageSelect.value = analysis.stage;

    catContainer.innerHTML = '';
    if (analysis.categories.length > 0) {
      analysis.categories.forEach(cat => {
        const tag = document.createElement('span');
        tag.className = 'analyzer-detected-tag';
        tag.textContent = cat;
        catContainer.appendChild(tag);
      });
    } else {
      catContainer.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted);">Nessuna categoria tecnica specifica menzionata.</span>';
    }

    notesInput.value = analysis.generatedNotes;

    resultBox.style.display = 'block';
    applyBtn.style.display = 'inline-flex';
    applyBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    showToast(`Analisi completata! Rilevata fase "${analysis.stage}"`, "success");
  }

  function handleApplyAnalysisToCompany() {
    let targetCompId = state.selectedCompanyId;
    const selectGroup = document.getElementById('analyzerCompanySelectGroup');
    if (selectGroup.style.display !== 'none' || !targetCompId) {
      targetCompId = document.getElementById('analyzerCompanySelect').value;
    }

    if (!targetCompId) {
      showToast("Seleziona l'azienda sponsor a cui applicare l'analisi!", "warning");
      return;
    }

    const compIndex = state.companies.findIndex(c => c.id === targetCompId);
    if (compIndex === -1) {
      showToast("Azienda non trovata nel database!", "error");
      return;
    }

    const comp = state.companies[compIndex];
    const newStage = document.getElementById('analyzerTargetStageSelect').value;
    const newCash = parseFloat(document.getElementById('analyzerExtractedCashInput').value) || 0;
    const newTech = parseFloat(document.getElementById('analyzerExtractedTechInput').value) || 0;
    const newNotes = document.getElementById('analyzerGeneratedNotesInput').value.trim();
    const detectedCats = (activeAnalyzerExtractedData && activeAnalyzerExtractedData.categories) ? activeAnalyzerExtractedData.categories : [];

    comp.stage = newStage;

    if (newCash > 0) {
      if (newStage === 'Vinto') {
        comp.obtainedTicket = newCash;
        if (!comp.requestedTicket || comp.requestedTicket === 0) {
          comp.requestedTicket = newCash;
        }
      } else {
        comp.requestedTicket = newCash;
      }
    }

    if (newTech > 0) {
      comp.techValue = newTech;
    }

    if (detectedCats.length > 0) {
      const existingCats = comp.techCategories || (comp.techCategory ? comp.techCategory.split(',').map(s => s.trim()) : []);
      const mergedCats = Array.from(new Set([...existingCats, ...detectedCats]));
      comp.techCategories = mergedCats;
      comp.techCategory = mergedCats.join(', ');
      
      if (comp.sponsorType === 'Finanziario') {
        if ((comp.obtainedTicket > 0 || comp.requestedTicket > 0) && newTech > 0) {
          comp.sponsorType = 'Ibrido';
        } else if (newTech > 0 && !comp.obtainedTicket && !comp.requestedTicket) {
          comp.sponsorType = 'Tecnico';
        }
      }
    }

    if (newNotes) {
      comp.notes = comp.notes ? `${newNotes}\n\n${comp.notes}` : newNotes;
    }

    comp.updatedAt = new Date().toISOString();
    state.companies[compIndex] = comp;

    saveCompanies();
    renderTracker();
    renderTable();

    if (state.selectedCompanyId === targetCompId) {
      loadCompanyIntoForm(targetCompId, false);
    }

    closeModals();
    showToast(`Profilo di "${comp.name}" aggiornato con successo!`, "success");
  }

  function formatNumberIt(num) {
    return new Intl.NumberFormat('it-IT').format(num);
  }

  // --- EXPORT & IMPORT ---

  function exportBackupJSON() {
    const data = {
      version: "4.0",
      exportDate: new Date().toISOString(),
      team: "Sapienza Foiling Team",
      budgetTarget: state.budgetTarget,
      teamGmail: state.teamGmail,
      teamDriveUrl: state.teamDriveUrl,
      pitchDeckDriveUrl: state.pitchDeckDriveUrl,
      companiesCount: state.companies.length,
      companies: state.companies
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `SFT_CRM_Backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Backup JSON esportato con successo!", "success");
  }

  function importBackupJSON(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.companies || !Array.isArray(data.companies)) {
          throw new Error("Formato backup non valido (manca array aziende)");
        }

        if (confirm(`Confermi il ripristino del backup? Verranno importate ${data.companies.length} aziende.`)) {
          state.companies = data.companies;
          ensureCompanyFields();
          if (data.budgetTarget && !isNaN(Number(data.budgetTarget))) {
            state.budgetTarget = Number(data.budgetTarget);
          }
          if (data.teamGmail) state.teamGmail = data.teamGmail;
          if (data.teamDriveUrl !== undefined) state.teamDriveUrl = data.teamDriveUrl;
          if (data.pitchDeckDriveUrl !== undefined) state.pitchDeckDriveUrl = data.pitchDeckDriveUrl;

          saveSettings();
          saveCompanies();
          showToast(`Ripristino completato: ${state.companies.length} aziende caricate!`, "success");
        }
      } catch (err) {
        console.error(err);
        showToast("Errore durante l'importazione del file JSON!", "error");
      }
    };
    reader.readAsText(file);
  }

  function exportToCSV() {
    const headers = [
      "Azienda",
      "Tipo Sponsor",
      "Fase Trattativa",
      "Ticket Richiesto (€)",
      "Ticket Ottenuto (€)",
      "Valore Tecnico Fornitura (€)",
      "Categoria Tecnica",
      "Descrizione Fornitura",
      "Stato Fornitura",
      "Email Referente",
      "URL Thread",
      "Link Google Drive",
      "Note / Feedback Meeting",
      "Ultimo Aggiornamento"
    ];

    const rows = state.companies.map(c => [
      escapeCsv(c.name),
      escapeCsv(c.sponsorType || 'Finanziario'),
      escapeCsv(c.stage),
      c.requestedTicket || 0,
      c.obtainedTicket || 0,
      c.techValue || 0,
      escapeCsv(c.techCategories && c.techCategories.length > 0 ? c.techCategories.join(', ') : c.techCategory || ''),
      escapeCsv(c.techDescription || ''),
      escapeCsv(c.techDeliveryStatus || ''),
      escapeCsv(c.email || ''),
      escapeCsv(c.threadUrl || ''),
      escapeCsv(c.driveUrl || ''),
      escapeCsv(c.notes || ''),
      escapeCsv(new Date(c.updatedAt).toLocaleString('it-IT'))
    ]);

    let csvContent = "\uFEFF";
    csvContent += headers.join(";") + "\r\n";
    rows.forEach(row => {
      csvContent += row.join(";") + "\r\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `SFT_Sponsor_Database_${dateStr}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("File CSV per Excel esportato con successo!", "success");
  }

  function escapeCsv(str) {
    if (!str) return '""';
    const clean = String(str).replace(/"/g, '""').replace(/\r?\n/g, ' ');
    return `"${clean}"`;
  }

  // --- MODALS & CONFIGURATION ---

  function openBudgetModal() {
    document.getElementById('budgetInputModal').value = state.budgetTarget;
    document.getElementById('budgetModal').classList.add('active');
  }

  function saveBudgetModal() {
    const val = parseFloat(document.getElementById('budgetInputModal').value);
    if (!isNaN(val) && val >= 0) {
      state.budgetTarget = val;
      saveSettings();
      renderTracker();
      showToast(`Nuovo obiettivo stagionale: ${formatCurrency(val)}`, "success");
      closeModals();
    } else {
      showToast("Inserisci un importo valido!", "error");
    }
  }

  function openCloudConfigModal() {
    document.getElementById('teamDriveConfigInput').value = state.teamDriveUrl || '';
    document.getElementById('teamGmailConfigInput').value = state.teamGmail || DEFAULT_TEAM_GMAIL;
    document.getElementById('cloudConfigModal').classList.add('active');
  }

  function saveCloudConfigModal() {
    const driveVal = document.getElementById('teamDriveConfigInput').value.trim();
    const gmailVal = document.getElementById('teamGmailConfigInput').value.trim() || DEFAULT_TEAM_GMAIL;
    state.teamDriveUrl = driveVal;
    state.teamGmail = gmailVal;
    saveSettings();
    renderDocuments();
    renderTable();
    showToast("Impostazioni Google Drive & Gmail di Squadra aggiornate!", "success");
    closeModals();
  }

  function openNotesModal(companyId) {
    const comp = state.companies.find(c => c.id === companyId);
    if (!comp) return;

    document.getElementById('notesModalTitle').textContent = `Note & Verbale: ${comp.name}`;
    let content = comp.notes || 'Nessuna nota registrata finora.';
    if (comp.sponsorType === 'Tecnico' || comp.sponsorType === 'Ibrido') {
      const catsList = (comp.techCategories && comp.techCategories.length > 0)
        ? comp.techCategories.join(', ')
        : (comp.techCategory || 'N/A');
      content = `[SPONSOR ${comp.sponsorType.toUpperCase()}]\nCategorie Fornitura: ${catsList}\nValore Stimato: ${formatCurrency(comp.techValue || 0)}\nStato Fornitura: ${comp.techDeliveryStatus || 'N/A'}\n\nDettaglio Fornitura:\n${comp.techDescription || 'Nessun dettaglio fornitura specificato.'}\n\n-------------------------\nNote Generali / Meeting:\n` + content;
    }
    document.getElementById('notesModalContent').textContent = content;
    document.getElementById('notesModalEditBtn').setAttribute('data-company-id', comp.id);
    document.getElementById('notesModal').classList.add('active');
  }

  function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    if (type === 'success') {
      icon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
      icon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    } else if (type === 'warning') {
      icon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    }

    toast.innerHTML = `<span style="display:flex; align-items:center; flex-shrink:0;">${icon}</span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- UTILS ---

  function formatCurrency(amount) {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  }

  function formatDate(isoStr) {
    if (!isoStr) return '-';
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (e) {
      return '-';
    }
  }

  function formatFileSize(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.substring(0, len) + '…' : str;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getStageSlug(stage) {
    switch (stage) {
      case 'Da Contattare': return 'da-contattare';
      case 'Primo Contatto Inviato': return 'primo-contatto';
      case 'In Trattativa': return 'in-trattativa';
      case 'Vinto': return 'vinto';
      case 'Perso': return 'perso';
      default: return 'da-contattare';
    }
  }

  // --- EVENT LISTENERS BINDING ---

  function setupEvents() {
    // Quick Navigation Bar
    document.querySelectorAll('.quick-nav-btn[data-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Quick Guide Banner Toggle
    const btnToggleQuickGuide = document.getElementById('btnToggleQuickGuide');
    const btnCloseQuickGuide = document.getElementById('btnCloseQuickGuide');
    const quickGuideBanner = document.getElementById('quickGuideBanner');
    if (btnToggleQuickGuide && quickGuideBanner) {
      btnToggleQuickGuide.addEventListener('click', () => {
        quickGuideBanner.classList.toggle('active');
        btnToggleQuickGuide.classList.toggle('active');
      });
    }
    if (btnCloseQuickGuide && quickGuideBanner) {
      btnCloseQuickGuide.addEventListener('click', () => {
        quickGuideBanner.classList.remove('active');
        if (btnToggleQuickGuide) btnToggleQuickGuide.classList.remove('active');
      });
    }

    // Clickable KPI cards (Instant filter table)
    document.querySelectorAll('.kpi-card.clickable-kpi').forEach(card => {
      card.addEventListener('click', () => {
        const stageFilter = card.getAttribute('data-filter-stage');
        const typeFilter = card.getAttribute('data-filter-type');
        if (stageFilter) {
          state.currentFilter = stageFilter;
          document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-stage') === stageFilter);
          });
        }
        if (typeFilter) {
          state.currentTypeFilter = typeFilter;
          document.querySelectorAll('.type-filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-type') === typeFilter);
          });
        }
        renderTable();
        const tableSec = document.getElementById('tableSection');
        if (tableSec) tableSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Clickable funnel pills
    document.querySelectorAll('.funnel-pill.clickable-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const stage = pill.getAttribute('data-stage');
        if (stage) {
          state.currentFilter = stage;
          document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-stage') === stage);
          });
          renderTable();
          const tableSec = document.getElementById('tableSection');
          if (tableSec) tableSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Form Sponsor Instant Search
    const formSponsorSearchInput = document.getElementById('formSponsorSearchInput');
    if (formSponsorSearchInput) {
      formSponsorSearchInput.addEventListener('input', (e) => {
        renderCompanyDropdown(e.target.value);
      });
    }

    // Active Sponsor Banner Actions
    const btnDeselectActiveSponsor = document.getElementById('btnDeselectActiveSponsor');
    if (btnDeselectActiveSponsor) {
      btnDeselectActiveSponsor.addEventListener('click', clearForm);
    }

    const activeSponsorQuickMailBtn = document.getElementById('activeSponsorQuickMailBtn');
    if (activeSponsorQuickMailBtn) {
      activeSponsorQuickMailBtn.addEventListener('click', () => {
        if (!state.selectedCompanyId) {
          showToast("Nessuna azienda attiva selezionata!", "warning");
          return;
        }
        const comp = state.companies.find(c => c.id === state.selectedCompanyId);
        if (comp && comp.email) {
          openEmailComposer(comp.email, comp.name, comp.sponsorType);
        } else {
          showToast("Questa azienda non ha un indirizzo email configurato.", "warning");
        }
      });
    }

    // 1. Company selection change
    document.getElementById('companySelect').addEventListener('change', (e) => {
      const id = e.target.value;
      if (id) {
        loadCompanyIntoForm(id);
      } else {
        clearForm();
      }
    });

    // 2. Toggle New Company Mode
    document.getElementById('btnToggleNewCompany').addEventListener('click', () => {
      setFormMode(!state.isManualNewMode);
    });

    // 3. Sponsor Type Radios in Form
    document.querySelectorAll('input[name="sponsorTypeRadio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        updateFormFieldsVisibility(e.target.value);
      });
    });

    // 3b. Multi-Category Pills Click Listener
    const catContainer = document.getElementById('techCategoryPillsContainer');
    if (catContainer) {
      catContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-pill-btn');
        if (btn) {
          btn.classList.toggle('active');
          updateCategoriesCountLabel();
        }
      });
    }

    // 4. Form action buttons
    document.getElementById('saveCompanyBtn').addEventListener('click', handleSaveCompany);
    document.getElementById('clearFormBtn').addEventListener('click', clearForm);
    document.getElementById('deleteCompanyBtn').addEventListener('click', deleteCurrentCompany);

    // 5. Quick Gmail search from Form using Team Gmail
    document.getElementById('searchGmailFromFormBtn').addEventListener('click', () => {
      let companyName = '';
      if (state.isManualNewMode) {
        companyName = document.getElementById('manualCompanyNameInput').value.trim();
      } else if (state.selectedCompanyId) {
        const c = state.companies.find(comp => comp.id === state.selectedCompanyId);
        if (c) companyName = c.name;
      }
      const email = document.getElementById('companyEmailInput').value.trim();
      if (!companyName && !email) {
        showToast("Seleziona un'azienda o inserisci un'email!", "warning");
        return;
      }
      const url = generateGmailSearchUrl(companyName, email);
      window.open(url, '_blank');
    });

    // 6. Direct Gmail composer from Form
    document.getElementById('sendMailFromFormBtn').addEventListener('click', () => {
      const email = document.getElementById('companyEmailInput').value.trim();
      if (!email) {
        showToast("Inserisci l'email del referente aziendale!", "warning");
        return;
      }
      let compName = 'Azienda Partner';
      let sponsorType = getSelectedTypeRadio();
      if (state.selectedCompanyId) {
        const c = state.companies.find(comp => comp.id === state.selectedCompanyId);
        if (c) compName = c.name;
      } else if (state.isManualNewMode) {
        compName = document.getElementById('manualCompanyNameInput').value.trim() || 'Azienda Partner';
      }
      openEmailComposer(email, compName, sponsorType);
    });

    // 7. Test Thread URL from Form
    document.getElementById('openThreadUrlBtn').addEventListener('click', () => {
      const url = document.getElementById('threadUrlInput').value.trim();
      if (!url) {
        showToast("Nessun link inserito!", "warning");
        return;
      }
      window.open(url, '_blank');
    });

    // 8. Test Drive URL from Form
    document.getElementById('openCompanyDriveBtn').addEventListener('click', () => {
      const url = document.getElementById('companyDriveUrlInput').value.trim();
      if (!url) {
        showToast("Nessun link Google Drive inserito per questa azienda!", "warning");
        return;
      }
      window.open(url, '_blank');
    });

    // 8b. Company Attachments Dropzone & Input
    const compFileInput = document.getElementById('companyAttachmentFileInput');
    const compDropzone = document.getElementById('companyAttachmentDropzone');

    if (compDropzone && compFileInput) {
      compDropzone.addEventListener('click', () => compFileInput.click());

      compFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleCompanyFileUpload(Array.from(e.target.files));
          compFileInput.value = '';
        }
      });

      compDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        compDropzone.classList.add('drag-over');
      });

      compDropzone.addEventListener('dragleave', () => {
        compDropzone.classList.remove('drag-over');
      });

      compDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        compDropzone.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleCompanyFileUpload(Array.from(e.dataTransfer.files));
        }
      });
    }

    // 8b-2. Dedicated Pitch Deck File Upload & Dropzone for Active Sponsor
    const dedicatedPitchFileInput = document.getElementById('companyDedicatedPitchFileInput');
    const dedicatedPitchDropzone = document.getElementById('companyDedicatedPitchDropzone');

    if (dedicatedPitchDropzone && dedicatedPitchFileInput) {
      dedicatedPitchDropzone.addEventListener('click', () => {
        if (!state.selectedCompanyId) {
          showToast("Seleziona prima uno sponsor per associargli il Pitch Deck dedicato!", "warning");
          return;
        }
        dedicatedPitchFileInput.click();
      });

      dedicatedPitchFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleCompanyDedicatedPitchUpload(e.target.files[0], state.selectedCompanyId);
          dedicatedPitchFileInput.value = '';
        }
      });

      dedicatedPitchDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dedicatedPitchDropzone.classList.add('drag-over');
      });

      dedicatedPitchDropzone.addEventListener('dragleave', () => {
        dedicatedPitchDropzone.classList.remove('drag-over');
      });

      dedicatedPitchDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dedicatedPitchDropzone.classList.remove('drag-over');
        if (!state.selectedCompanyId) {
          showToast("Seleziona prima uno sponsor prima di rilasciare il file!", "warning");
          return;
        }
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleCompanyDedicatedPitchUpload(e.dataTransfer.files[0], state.selectedCompanyId);
        }
      });
    }

    // Dedicated Pitch Deck URL Input and Test Button
    const dedicatedPitchUrlInput = document.getElementById('companyDedicatedPitchUrlInput');
    const openDedicatedPitchBtn = document.getElementById('openCompanyDedicatedPitchBtn');
    if (dedicatedPitchUrlInput && openDedicatedPitchBtn) {
      dedicatedPitchUrlInput.addEventListener('input', (e) => {
        const url = e.target.value.trim();
        if (url) {
          openDedicatedPitchBtn.href = url;
          openDedicatedPitchBtn.style.display = 'inline-flex';
        } else {
          openDedicatedPitchBtn.style.display = 'none';
        }
      });
    }

    // 8c. Open or Search Dedicated Company Drive Folder
    const btnOpenCompanyDrive = document.getElementById('btnOpenCompanyDriveFolder');
    if (btnOpenCompanyDrive) {
      btnOpenCompanyDrive.addEventListener('click', () => {
        let comp = null;
        if (state.selectedCompanyId) {
          comp = state.companies.find(c => c.id === state.selectedCompanyId);
        }
        const compName = comp ? comp.name : (document.getElementById('manualCompanyNameInput').value.trim() || 'Sponsor');
        const driveUrl = comp ? comp.driveUrl : document.getElementById('companyDriveUrlInput').value.trim();

        if (driveUrl && driveUrl.trim()) {
          window.open(driveUrl.trim(), '_blank');
          showToast(`Apertura cartella Google Drive di ${compName}...`, "info");
        } else {
          const searchUrl = `https://drive.google.com/drive/search?q=${encodeURIComponent(compName)}`;
          window.open(searchUrl, '_blank');
          showToast(`Aperta ricerca Google Drive per "${compName}". Incolla il link della cartella nel campo sopra!`, "info");
        }
      });
    }

    // 8d. Smart Email Response Analyzer Modal Actions
    const btnOpenAnalyzer = document.getElementById('btnOpenEmailAnalyzer');
    if (btnOpenAnalyzer) {
      btnOpenAnalyzer.addEventListener('click', () => {
        openEmailAnalyzerModal(state.selectedCompanyId);
      });
    }

    const btnRunAnalysis = document.getElementById('btnRunEmailAnalysis');
    if (btnRunAnalysis) {
      btnRunAnalysis.addEventListener('click', handleRunEmailAnalysis);
    }

    const btnApplyAnalysis = document.getElementById('btnApplyAnalysisToCompany');
    if (btnApplyAnalysis) {
      btnApplyAnalysis.addEventListener('click', handleApplyAnalysisToCompany);
    }

    const btnSampleWon = document.getElementById('btnPasteSampleWon');
    if (btnSampleWon) {
      btnSampleWon.addEventListener('click', () => {
        let compName = 'Azienda Sponsor';
        if (state.selectedCompanyId) {
          const c = state.companies.find(comp => comp.id === state.selectedCompanyId);
          if (c) compName = c.name;
        }
        document.getElementById('emailAnalyzerInput').value = `Gentile Sapienza Foiling Team,

Siamo lieti di comunicarvi che il nostro comitato direttivo ha deliberato l'accordo di sponsorizzazione con il vostro team per la barca a vela foiling Meravijosa nel SuMoth Challenge.

Confermiamo lo stanziamento di un contributo monetario di 5.000 € e una fornitura tecnica di tessuti in fibra di carbonio ad alto modulo e resina epossidica del valore commerciale stimato di 2.500 €.

In allegato trasmettiamo la nostra conferma formale e la convenzione. Potete inviarci il contratto controfirmato per procedere con la liquidazione del ticket e concordare la consegna dei rotoli di materiale presso il vostro cantiere universitario.

Cordiali saluti,
Direzione Partnership & Sostenibilità - ${compName}`;
        handleRunEmailAnalysis();
      });
    }

    const btnSampleNeg = document.getElementById('btnPasteSampleNegotiation');
    if (btnSampleNeg) {
      btnSampleNeg.addEventListener('click', () => {
        let compName = 'Azienda Partner';
        if (state.selectedCompanyId) {
          const c = state.companies.find(comp => comp.id === state.selectedCompanyId);
          if (c) compName = c.name;
        }
        document.getElementById('emailAnalyzerInput').value = `Gentile team,

Abbiamo ricevuto il vostro Pitch Deck per la barca Meravijosa. Il progetto è davvero interessante e innovativo per la mobilità sostenibile nautica.

Saremmo disponibili ad approfondire i dettagli tecnici ed economici in una breve call conoscitiva giovedì prossimo alle ore 15:00 per valutare una proposta di ticket da 3.000 € oppure una sponsorizzazione tecnica con fornitura di lavorazioni meccaniche e stampi CNC.

Fateci sapere se l'orario vi è comodo o se preferite proporre un altro slot.

Cordiali saluti,
Ufficio Comunicazione - ${compName}`;
        handleRunEmailAnalysis();
      });
    }

    // 9. Filters by Stage
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.currentFilter = tab.getAttribute('data-stage');
        renderTable();
      });
    });

    // 10. Filters by Sponsor Type
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentTypeFilter = btn.getAttribute('data-type');
        renderTable();
      });
    });

    document.getElementById('tableSearchInput').addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      renderTable();
    });

    // 11. Table Sorting
    document.querySelectorAll('.crm-table th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const field = th.getAttribute('data-sort');
        if (state.sortField === field) {
          state.sortAsc = !state.sortAsc;
        } else {
          state.sortField = field;
          state.sortAsc = true;
        }
        renderTable();
      });
    });

    // 12. Budget Edit
    document.getElementById('btnEditBudget').addEventListener('click', openBudgetModal);
    document.getElementById('btnSaveBudgetModal').addEventListener('click', saveBudgetModal);

    // 13. Drive & Gmail Hub Configuration
    document.getElementById('btnConfigureTeamCloud').addEventListener('click', openCloudConfigModal);
    document.getElementById('btnSaveCloudModal').addEventListener('click', saveCloudConfigModal);
    document.getElementById('saveTeamDriveInputBtn').addEventListener('click', () => {
      const val = document.getElementById('teamDriveInput').value.trim();
      state.teamDriveUrl = val;
      saveSettings();
      renderDocuments();
      showToast("Link Cartella Google Drive salvato!", "success");
    });

    // 14. Pitch Deck Drive Link Save
    document.getElementById('savePitchDriveBtn').addEventListener('click', () => {
      const val = document.getElementById('pitchDriveInput').value.trim();
      state.pitchDeckDriveUrl = val;
      saveSettings();
      renderDocuments();
      showToast("Link Pitch Deck salvato!", "success");
    });

    // 14b. Custom Pitch Decks Center Search Input
    const customPitchSearchInput = document.getElementById('customPitchSearchInput');
    if (customPitchSearchInput) {
      customPitchSearchInput.addEventListener('input', () => {
        renderCustomPitchDecksCenter();
      });
    }

    // 15. File Uploads (Pitch Deck & Contracts)
    const pitchFileInput = document.getElementById('pitchDeckFileInput');
    const pitchDropzone = document.getElementById('pitchDropzone');
    pitchDropzone.addEventListener('click', () => pitchFileInput.click());
    pitchFileInput.addEventListener('change', () => handleFileUpload(pitchFileInput, 'pitch_deck'));

    const contractFileInput = document.getElementById('contractFileInput');
    const contractDropzone = document.getElementById('contractDropzone');
    contractDropzone.addEventListener('click', () => contractFileInput.click());
    contractFileInput.addEventListener('change', () => {
      const compName = document.getElementById('contractCompanySelect').value;
      const contractDriveLink = document.getElementById('contractDriveLinkInput').value.trim();
      handleFileUpload(contractFileInput, 'contract', compName, contractDriveLink);
    });

    // 16. Export & Import
    document.getElementById('btnExportJson').addEventListener('click', exportBackupJSON);
    document.getElementById('btnExportCsv').addEventListener('click', exportToCSV);

    const importFileInput = document.getElementById('importJsonFileInput');
    document.getElementById('btnImportJson').addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        importBackupJSON(e.target.files[0]);
        importFileInput.value = '';
      }
    });

    // 17. Reset initial database with 70 companies
    document.getElementById('btnResetDatabase').addEventListener('click', () => {
      if (confirm("Attenzione: Vuoi ricaricare il database con le 70 aziende, tipologie e rispettive email ufficiali? Le modifiche non esportate andranno perse.")) {
        generateDefaultCompanies();
        showToast("Database iniziale ripristinato!", "success");
      }
    });

    // 18. Notes Modal Edit Action
    document.getElementById('notesModalEditBtn').addEventListener('click', (e) => {
      const compId = e.target.getAttribute('data-company-id');
      closeModals();
      loadCompanyIntoForm(compId, true);
    });

    // Modal Close
    document.querySelectorAll('.modal-close, .modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeModals);
    });
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModals();
      });
    });
  }

  // --- INITIAL BOOTSTRAP ---
  document.addEventListener('DOMContentLoaded', () => {
    initData();
    setupEvents();
    renderAll();
  });

})();
