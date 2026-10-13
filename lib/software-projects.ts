export const TEAM_GITHUB = 'https://github.com/sapienzafoilingteam';
export const PROJECTS = [
  {
    slug: 'sito-web', title: 'Sito web', repository: 'sapienzafoilingteam', tag: 'Next.js · React · Supabase',
    description: 'Il sito pubblico del team: barca, reparti, notizie e opportunità per partecipare.',
    goals: ['Raccontare il progetto, le attività e le persone del team.', 'Gestire articoli, eventi e posizioni aperte in italiano e inglese.'],
    status: 'Il README descrive un sito online con blog, pagine della barca, sponsor e candidature, oltre a un’area amministrativa. Alcune istruzioni di avvio nel README riportano ancora il precedente nome della repository: usa il comando di clonazione qui sotto.',
    contribute: ['Migliora accessibilità e layout su mobile, indicando le pagine e i dispositivi provati.', 'Aggiorna contenuti e traduzioni mantenendo lo stesso significato in italiano e inglese.', 'Prova le modifiche con typecheck, test e build; includi schermate per i cambiamenti visivi.'],
  },
  {
    slug: 'firmware-elettronica', title: 'Elettronica / Firmware', repository: 'sft-telemetry', tag: 'ESP32-S3 · C++ · PlatformIO',
    description: 'Firmware, dashboard e diagnostica per acquisire dati da IMU e GPS di bordo.',
    goals: ['Acquisire e trasmettere dati IMU e GPS dall’ESP32-S3.', 'Registrare le uscite e rendere riproducibili le prove di sensori e memoria.'],
    status: 'Sono presenti varianti separate per microSD, flash interna e registrazione dal browser, con dashboard e strumenti diagnostici. La registrazione microSD non è ancora confermata: il README documenta l’assenza di risposta a CMD0 nelle prove conservate.',
    contribute: ['Scegli una variante del firmware e leggi hardware, pin e protocolli prima di modificare il codice.', 'Contribuisci alla diagnosi della microSD riportando scheda, cablaggio e log seriali.', 'Compila con PlatformIO e distingui nella pull request la compilazione dalle prove realmente eseguite sull’hardware.'],
  },
  {
    slug: 'telemetry-lab', title: 'Telemetry Lab', repository: 'sft-telemetry-lab', tag: 'React · WebSocket · IndexedDB',
    description: 'Una webapp per registrare le uscite, archiviare sessioni e analizzare GPS e IMU.',
    goals: ['Collegare l’elettronica e raccogliere sessioni di telemetria.', 'Confrontare dati, intervalli, percorsi e grafici senza perdere i campioni originali.'],
    status: 'La versione iniziale offre acquisizione e archivio locali, importazione CSV/SMC, mappe, grafici ed esportazione. Sincronizzazione condivisa, recupero dopo crash e contratto comune dei dispositivi sono ancora da realizzare. L’archivio IndexedDB richiede backup esportati dall’utente.',
    contribute: ['Parti dalla roadmap e dai protocolli documentati per scegliere una modifica circoscritta.', 'Aggiungi casi di test per parser, unità di misura ed esportazione usando dati sintetici.', 'Prova acquisizione e disconnessione, e verifica con lint, test e build.'],
  },
  {
    slug: 'crm', title: 'CRM', repository: 'SFT-crm', tag: 'Next.js · React · Supabase',
    description: 'Il workspace condiviso per reparti, stagione, sponsor, eventi e documenti.',
    goals: ['Riunire il lavoro dei reparti e le attività della stagione.', 'Gestire sponsor, scadenze, bilancio, documenti e recruiting con accessi controllati.'],
    status: 'Il README descrive un CRM online con modalità Supabase e demo locale. Drive, recruiting e Calendar richiedono configurazioni e permessi server dedicati; la demo permette di lavorare sull’interfaccia senza usare i dati reali del team.',
    contribute: ['Avvia la modalità demo per sviluppare e verificare i flussi senza dati reali.', 'Migliora i flussi dei reparti, la navigazione e l’uso da mobile.', 'Esegui typecheck, test e build; documenta le configurazioni necessarie per eventuali nuove integrazioni.'],
  },
] as const;
export type SoftwareProject = (typeof PROJECTS)[number];
export function findProject(slug: string) { return PROJECTS.find(project => project.slug === slug); }
export function projectPath(project: SoftwareProject) { return `/team/elettronica/progetti/${project.slug}`; }
export function repositoryUrl(project: SoftwareProject) { return `${TEAM_GITHUB}/${project.repository}`; }
/** Relative README links stay in the repository; images use raw GitHub content. */
export function readmeUrl(value: string, project: SoftwareProject, image = false) {
  if (/^[a-z][a-z\d+.-]*:/i.test(value) || value.startsWith('//')) return value;
  const base = image
    ? `https://raw.githubusercontent.com/sapienzafoilingteam/${project.repository}/main/`
    : `${repositoryUrl(project)}/blob/main/`;
  if (value.startsWith('#')) return `${repositoryUrl(project)}#${value.slice(1)}`;
  return new URL(value.replace(/^\//, ''), base).href;
}
