/**
 * ============================================================================
 * SAPIENZA FOILING TEAM - GMAIL & GOOGLE DRIVE AUTOMATION SCRIPT
 * Progetto SuMoth Challenge • Meravijosa
 * ============================================================================
 * 
 * COSA FA QUESTO SCRIPT (Automatizzazione 24/7 in Google Cloud):
 * 1. Monitora la casella di posta di squadra (sapienzafoilingteam@gmail.com).
 * 2. Quando riceve email o risposte dagli sponsor/partner:
 *    - Riconosce in automatico l'azienda dal mittente o dal testo.
 *    - Crea (o individua) la cartella dedicata su Google Drive:
 *      "Sapienza Foiling Team - Archivio Sponsor / [Nome Azienda] / Allegati /"
 *    - Salva in automatico tutti gli allegati ricevuti (Contratti firmati, Preventivi, Pitch Deck).
 *    - Se l'allegato è un Pitch Deck (o contiene "pitch", "deck", "presentazione"),
 *      lo copia in automatico anche nella cartella "00_Pitch Deck Ufficiale"!
 * 3. Analizza in automatico le risposte email:
 *    - Rileva offerte monetarie proposte o deliberate (€ / Euro).
 *    - Rileva il valore commerciale delle forniture tecniche e materiali (carbonio, vele, CNC...).
 *    - Determina lo stato della trattativa (Vinto, In Trattativa, Perso).
 *    - Registra il verbale/resoconto con data in un foglio Google ("SFT_Sponsor_Sync_Data")
 *      o file JSON condivisibile nel Drive di squadra.
 * 
 * COME ATTIVARLO IN 3 MINUTI:
 * 1. Accedi con l'account Google della squadra (sapienzafoilingteam@gmail.com).
 * 2. Vai su https://script.google.com/ e clicca su "Nuovo progetto".
 * 3. Incolla questo intero codice nell'editor sostituendo tutto il testo presente.
 * 4. Assegna il nome al progetto (es. "SFT CRM Sync").
 * 5. Seleziona dal menu a tendina in alto la funzione "installAutomaticTrigger" e clicca "Esegui".
 * 6. Accetta le autorizzazioni di sicurezza richieste da Google.
 * 
 * Fatto! Lo script girerà in background ogni 5 minuti 24 ore su 24, anche a computer spento!
 * ============================================================================
 */

// --- CONFIGURAZIONE ---
const SFT_CONFIG = {
  // Nome della cartella radice nel Google Drive di squadra
  ROOT_FOLDER_NAME: "Sapienza Foiling Team - Archivio Sponsor",
  PITCH_DECK_FOLDER_NAME: "00_Pitch Deck Ufficiale",
  
  // Etichetta Gmail per tracciare le email già elaborate
  LABEL_PROCESSED: "SFT-Archiviato",
  LABEL_SPONSOR: "SFT-Sponsor",
  
  // Nome del Foglio Google di sincronizzazione resoconti nel Drive
  SYNC_SHEET_NAME: "SFT_Sponsor_Resoconti_Sync",
  
  // Elenco ufficiale aziende predefinite per matching immediato
  KNOWN_COMPANIES: [
    { name: "Acea", domain: "acea.it" },
    { name: "BCC Roma", domain: "roma.bcc.it" },
    { name: "Alten Italia", domain: "alten.it" },
    { name: "Capgemini", domain: "capgemini.com" },
    { name: "Intesa Sanpaolo", domain: "intesasanpaolo.com" },
    { name: "Enel / Enel X", domain: "enel.com" },
    { name: "Reply", domain: "reply.com" },
    { name: "A2A", domain: "a2a.eu" },
    { name: "UnipolSai", domain: "unipol.it" },
    { name: "Akkodis", domain: "akkodis.com" },
    { name: "Hera Group", domain: "gruppohera.it" },
    { name: "Teoresi Group", domain: "teoresigroup.com" },
    { name: "Snam", domain: "snam.it" },
    { name: "Generali Italia", domain: "generali.com" },
    { name: "Accenture Italia", domain: "accenture.com" },
    { name: "Terna", domain: "terna.it" },
    { name: "NTT Data Italia", domain: "nttdata.com" },
    { name: "Eni / Plenitude", domain: "eni.com" },
    { name: "BPER Banca", domain: "bper.it" },
    { name: "Allianz Italia", domain: "allianz.it" },
    { name: "Fastweb", domain: "fastweb.it" },
    { name: "Engineering Ingegneria", domain: "eng.it" },
    { name: "ERG", domain: "erg.eu" },
    { name: "Leonardo", domain: "leonardo.com" },
    { name: "Edison", domain: "edison.it" },
    { name: "BMW Italia", domain: "bmw.it" },
    { name: "Rolex Italia", domain: "rolex.com" },
    { name: "Pirelli", domain: "pirelli.com" },
    { name: "Almaviva", domain: "almaviva.it" },
    { name: "Iren", domain: "gruppoiren.it" },
    { name: "Brembo", domain: "brembo.it" },
    { name: "FinecoBank", domain: "fineco.it" },
    { name: "Audi Italia", domain: "audi.it" },
    { name: "Deloitte Italia", domain: "deloitte.it" },
    { name: "TIM", domain: "telecomitalia.it" },
    { name: "Cattolica Assicurazioni", domain: "cattolicaassicurazioni.it" },
    { name: "Sorgenia", domain: "sorgenia.it" },
    { name: "Banca Sella", domain: "sella.it" },
    { name: "E.ON Italia", domain: "eon.com" },
    { name: "EY (Ernst & Young)", domain: "it.ey.com" },
    { name: "Vodafone Italia", domain: "vodafone.it" },
    { name: "Prada", domain: "prada.com" },
    { name: "Omega", domain: "omega.ch" },
    { name: "Dallara", domain: "dallara.it" },
    { name: "Porsche Italia", domain: "porsche.it" },
    { name: "Credem", domain: "credem.it" },
    { name: "Reale Mutua", domain: "realemutua.it" },
    { name: "Panerai", domain: "panerai.com" },
    { name: "Volvo Auto Italia", domain: "volvocars.com" },
    { name: "KPMG Italia", domain: "kpmg.it" },
    { name: "PwC Italia", domain: "pwc.com" },
    { name: "Mediolanum", domain: "mediolanum.it" },
    { name: "AXA Italia", domain: "axa.it" },
    { name: "Iberdrola Italia", domain: "iberdrola.it" },
    { name: "Falck Renewables", domain: "renantis.com" },
    { name: "Italgas", domain: "italgas.it" },
    { name: "BIP (Business Integration)", domain: "bip-group.com" },
    { name: "Azimut Wealth", domain: "azimut.it" },
    { name: "Mediobanca", domain: "mediobanca.com" },
    { name: "Mercedes-Benz Italia", domain: "mercedes-benz.com" },
    { name: "Ferrari", domain: "ferrari.com" },
    { name: "Iveco Group", domain: "ivecogroup.com" },
    { name: "Telepass", domain: "telepass.com" },
    { name: "Red Bull Italia", domain: "redbull.com" },
    { name: "San Benedetto", domain: "sanbenedetto.it" },
    { name: "Slam", domain: "slam.com" },
    { name: "Paul & Shark", domain: "paulandshark.com" },
    { name: "Loro Piana", domain: "loropiana.com" },
    { name: "Moncler", domain: "moncler.com" },
    { name: "K-Way", domain: "basicnet.com" }
  ]
};

/**
 * Funzione principale eseguita in automatico ogni 5 minuti
 */
function syncSponsorEmailsAndDrive() {
  Logger.log("=== INIZIO SINCRONIZZAZIONE SFT GMAIL & DRIVE ===");

  // 1. Inizializza cartelle Drive ed etichette Gmail
  const rootFolder = getOrCreateFolder(DriveApp.getRootFolder(), SFT_CONFIG.ROOT_FOLDER_NAME);
  const pitchFolder = getOrCreateFolder(rootFolder, SFT_CONFIG.PITCH_DECK_FOLDER_NAME);
  
  let labelProcessed = GmailApp.getUserLabelByName(SFT_CONFIG.LABEL_PROCESSED);
  if (!labelProcessed) labelProcessed = GmailApp.createLabel(SFT_CONFIG.LABEL_PROCESSED);

  let labelSponsor = GmailApp.getUserLabelByName(SFT_CONFIG.LABEL_SPONSOR);
  if (!labelSponsor) labelSponsor = GmailApp.createLabel(SFT_CONFIG.LABEL_SPONSOR);

  // 2. Cerca email recenti non ancora archiviate
  const query = `-label:${SFT_CONFIG.LABEL_PROCESSED} (sponsor OR partnership OR foiling OR SuMoth OR Meravijosa OR deck OR pitch OR fornitura)`;
  const threads = GmailApp.search(query, 0, 20);

  Logger.log(`Trovati ${threads.length} thread da analizzare.`);

  const syncRecords = [];

  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const messages = thread.getMessages();
    const lastMsg = messages[messages.length - 1];
    
    const sender = lastMsg.getFrom();
    const subject = lastMsg.getSubject();
    const body = lastMsg.getPlainBody();
    const date = lastMsg.getDate();

    // Riconosci l'azienda sponsor
    const company = identifyCompany(sender, subject, body);
    if (!company) {
      continue; // Non è associabile a uno sponsor
    }

    Logger.log(`Identificato sponsor: "${company.name}" per thread: "${subject}"`);

    // Crea cartella dedicata per l'azienda
    const companyFolder = getOrCreateFolder(rootFolder, company.name);
    const attachmentsFolder = getOrCreateFolder(companyFolder, "Allegati");

    // Elabora allegati
    const attachments = lastMsg.getAttachments();
    let savedAttachmentNames = [];

    for (let a = 0; a < attachments.length; a++) {
      const att = attachments[a];
      const attName = att.getName();
      
      // Salva nella cartella dell'azienda
      attachmentsFolder.createFile(att);
      savedAttachmentNames.push(attName);
      Logger.log(`-> Allegato salvato in [${company.name}/Allegati]: ${attName}`);

      // Se è un pitch deck o presentazione, salva anche nel Pitch Deck Ufficiale
      const lowerAttName = attName.toLowerCase();
      if (lowerAttName.includes("pitch") || lowerAttName.includes("deck") || lowerAttName.includes("presentazione")) {
        pitchFolder.createFile(att);
        Logger.log(`-> 🎯 File sincronizzato nel Pitch Deck Ufficiale: ${attName}`);
      }
    }

    // Analizza risposte e proposte economiche
    const analysis = parseEmailContent(body, subject);
    
    // Registra record di sincronizzazione
    syncRecords.push({
      date: Utilities.formatDate(date, "Europe/Rome", "yyyy-MM-dd HH:mm"),
      company: company.name,
      sender: sender,
      subject: subject,
      stage: analysis.stage,
      cashOffer: analysis.cashOffer,
      techValue: analysis.techValue,
      materials: analysis.categories.join(", "),
      attachmentsCount: attachments.length,
      attachmentsList: savedAttachmentNames.join("; "),
      notesSummary: analysis.summary
    });

    // Applica le etichette Gmail
    thread.addLabel(labelProcessed);
    thread.addLabel(labelSponsor);
  }

  // 3. Salva i resoconti estratti nel Foglio di Sincronizzazione Drive
  if (syncRecords.length > 0) {
    appendRecordsToSyncSheet(rootFolder, syncRecords);
    Logger.log(`Aggiornati ${syncRecords.length} record nel foglio di sincronizzazione.`);
  }

  Logger.log("=== SINCRONIZZAZIONE COMPLETATA CON SUCCESSO ===");
}

/**
 * Identifica l'azienda dal mittente, oggetto o corpo
 */
function identifyCompany(sender, subject, body) {
  const combined = (sender + " " + subject + " " + body).toLowerCase();

  for (let i = 0; i < SFT_CONFIG.KNOWN_COMPANIES.length; i++) {
    const item = SFT_CONFIG.KNOWN_COMPANIES[i];
    if (combined.includes(item.name.toLowerCase()) || (item.domain && combined.includes(item.domain.toLowerCase()))) {
      return item;
    }
  }

  // Se contiene email aziendale estrai il dominio
  const emailMatch = sender.match(/@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
  if (emailMatch) {
    const domain = emailMatch[1].toLowerCase();
    if (!domain.includes("gmail") && !domain.includes("yahoo") && !domain.includes("hotmail") && !domain.includes("outlook")) {
      const cleanName = domain.split(".")[0];
      return { name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1) };
    }
  }

  return null;
}

/**
 * Motore di analisi intelligente del testo email
 */
function parseEmailContent(text, subject) {
  const fullText = (subject + "\n" + text).toLowerCase();

  // 1. Rilevamento Fase Trattativa
  let stage = "In Trattativa";
  const wonKeywords = ["deliberat", "approvat", "confermiam", "lieti di confermare", "accordo raggiunto", "sponsorizzeremo", "accettiamo la vostra proposta", "benvenuti a bordo", "contratto firmato", "bonifico"];
  const lostKeywords = ["purtroppo non", "non siamo in grado", "budget esaurito", "declinare", "non rientra", "spiacenti", "politica aziendale non prevede"];

  if (wonKeywords.some(kw => fullText.includes(kw))) {
    stage = "Vinto";
  } else if (lostKeywords.some(kw => fullText.includes(kw))) {
    stage = "Perso";
  } else {
    stage = "In Trattativa";
  }

  // 2. Rilevamento Proposta Cash (€ / Euro)
  let cashOffer = 0;
  const cashRegexes = [
    /(?:ticket|contributo|somma|quota|budget|stanziamento)(?:\s+(?:di|da|pari a))?\s*(?:€)?\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)/gi,
    /(?:€|euro)\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)/gi,
    /([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)\s*(?:€|euro)/gi
  ];

  const amounts = [];
  for (let r = 0; r < cashRegexes.length; r++) {
    let match;
    while ((match = cashRegexes[r].exec(text)) !== null) {
      let numStr = match[1].replace(/\./g, "").replace(/,/g, ".");
      let parsed = parseFloat(numStr);
      if (!isNaN(parsed) && parsed >= 50 && parsed <= 500000) {
        amounts.push(parsed);
      }
    }
  }
  if (amounts.length > 0) {
    cashOffer = Math.max.apply(null, amounts);
  }

  // 3. Valore Forniture Tecniche
  let techValue = 0;
  const techRegex = /(?:valore|controvalore|fornitura|materiali)(?:[^\d€\n]{0,35})(?:€|euro)?\s*([0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?|[0-9]+)/gi;
  let tMatch = techRegex.exec(text);
  if (tMatch) {
    let tVal = parseFloat(tMatch[1].replace(/\./g, "").replace(/,/g, "."));
    if (!isNaN(tVal) && tVal >= 50 && tVal !== cashOffer) {
      techValue = tVal;
    }
  }

  // 4. Categorie Tecniche
  const categories = [];
  if (/(?:carbonio|resina|epossidic|fibra|compositi)/i.test(fullText)) categories.push("Materiali Compositi");
  if (/(?:lavorazion|meccanic|cnc|fresatur|stampi|alluminio)/i.test(fullText)) categories.push("Lavorazioni Meccaniche & Stampi");
  if (/(?:vele|randa|fiocco|dacron|cima|scotte|rigging)/i.test(fullText)) categories.push("Vele & Manovre");
  if (/(?:sensori|telemetria|gps|elettronica|scheda)/i.test(fullText)) categories.push("Elettronica & Sensori");
  if (/(?:software|cad|cfd|fem|simulazion)/i.test(fullText)) categories.push("Software & Simulazione");
  if (/(?:abbigliamento|mute|giacche|polo|divise)/i.test(fullText)) categories.push("Abbigliamento Tecnico");

  // 5. Sintesi
  const cleanSnippet = text.replace(/\s+/g, " ").slice(0, 150);
  const summary = `[Fase: ${stage}] Proposta Cash: € ${cashOffer} | Valore Tecnico: € ${techValue} | Dettaglio: "${cleanSnippet}..."`;

  return {
    stage: stage,
    cashOffer: cashOffer,
    techValue: techValue,
    categories: categories,
    summary: summary
  };
}

/**
 * Salva i record estratti in un foglio Google Drive per consultazione e importazione nel CRM
 */
function appendRecordsToSyncSheet(rootFolder, records) {
  let fileIterator = rootFolder.getFilesByName(SFT_CONFIG.SYNC_SHEET_NAME);
  let spreadsheet;

  if (fileIterator.hasNext()) {
    spreadsheet = SpreadsheetApp.open(fileIterator.next());
  } else {
    spreadsheet = SpreadsheetApp.create(SFT_CONFIG.SYNC_SHEET_NAME);
    const file = DriveApp.getFileById(spreadsheet.getId());
    rootFolder.addFile(file);
    DriveApp.getRootFolder().removeFile(file);

    const sheet = spreadsheet.getActiveSheet();
    sheet.appendRow([
      "Data e Ora", 
      "Azienda Sponsor", 
      "Mittente", 
      "Oggetto Email", 
      "Fase Trattativa", 
      "Proposta Cash (€)", 
      "Valore Tecnico (€)", 
      "Materiali / Servizi", 
      "Numero Allegati", 
      "Elenco Allegati Salvati", 
      "Verbale Sintetico"
    ]);
    sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#843c45").setFontColor("#ffffff");
  }

  const sheet = spreadsheet.getActiveSheet();
  for (let i = 0; i < records.length; i++) {
    const r = records[i];
    sheet.appendRow([
      r.date, 
      r.company, 
      r.sender, 
      r.subject, 
      r.stage, 
      r.cashOffer, 
      r.techValue, 
      r.materials, 
      r.attachmentsCount, 
      r.attachmentsList, 
      r.notesSummary
    ]);
  }
}

/**
 * Utility per trovare o creare una cartella su Google Drive
 */
function getOrCreateFolder(parentFolder, folderName) {
  const folders = parentFolder.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return parentFolder.createFolder(folderName);
}

/**
 * Installatore del trigger temporizzato (Esegui questa funzione per attivare la sincronizzazione 24/7)
 */
function installAutomaticTrigger() {
  // Rimuovi eventuali trigger precedenti per evitare duplicati
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "syncSponsorEmailsAndDrive") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Installa nuovo trigger con esecuzione ogni 5 minuti
  ScriptApp.newTrigger("syncSponsorEmailsAndDrive")
    .timeBased()
    .everyMinutes(5)
    .create();

  Logger.log("✅ Trigger automatico installato con successo! Lo script gira ogni 5 minuti.");
}

/**
 * Funzione di test manuale immediato
 */
function runTestNow() {
  syncSponsorEmailsAndDrive();
}
