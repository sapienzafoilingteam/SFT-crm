import type { TeamPage } from './model';

export type PageSaveState = 'saved' | 'pending' | 'saving' | 'error';
export class PageSaveBusy extends Error {}

/** Serializes writes while retaining edits made during an outstanding request. */
export class PageAutosave {
  page: TeamPage;
  state: PageSaveState = 'saved';
  error = '';
  private saved: TeamPage;
  private generation = 0;
  private completed = 0;
  private timer?: ReturnType<typeof setTimeout>;
  private request?: Promise<boolean>;
  private lastRevision = 0;
  private active = true;
  constructor(page: TeamPage, private write: (page: TeamPage) => Promise<boolean>, private changed: () => void, private backup: (page: TeamPage | null) => void = () => {}, private delay = 600) {
    this.page = this.saved = page;
  }
  get dirty() { return this.generation !== this.completed; }
  update(change: (page: TeamPage) => TeamPage, checkpoint = false) {
    const current = checkpoint ? { ...this.page, revisions: [...this.page.revisions, { at: new Date().toISOString(), blocks: this.page.blocks, summary: this.page.summary }].slice(-20) } : this.page;
    if (checkpoint) this.lastRevision = Date.now();
    this.page = change(current);
    this.generation++;
    this.state = 'pending';
    this.backup(this.page);
    this.changed();
    this.schedule();
  }
  accept(page: TeamPage) {
    if (this.request) return;
    if (!this.dirty) {
      this.page = this.saved = page;
      this.changed();
    } else if (page.version !== this.saved.version) {
      clearTimeout(this.timer);
      this.state = 'error';
      this.error = 'La pagina è stata aggiornata da un altro membro. Le tue modifiche sono conservate in questo browser. Ricarica per confrontare le versioni.';
      this.changed();
    }
  }
  activate() { this.active = true; if (this.dirty) this.schedule(); }
  dispose() { this.active = false; clearTimeout(this.timer); void this.flush(); }
  private schedule() {
    if (!this.active) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => { void this.flush(); }, this.delay);
  }
  flush(): Promise<boolean> {
    clearTimeout(this.timer);
    if (this.request) return this.request;
    if (!this.dirty) return Promise.resolve(true);
    this.request = this.run().finally(() => { this.request = undefined; });
    return this.request;
  }
  private async run() {
    while (this.dirty) {
      const generation = this.generation;
      const addRevision = this.saved.version > 0 && Date.now() - this.lastRevision > 30000;
      const snapshot = { ...this.page, version: this.saved.version,
        revisions: addRevision ? [...this.page.revisions, { at: new Date().toISOString(), blocks: this.saved.blocks, summary: this.saved.summary }].slice(-20) : this.page.revisions };
      this.state = 'saving'; this.error = ''; this.changed();
      try {
        if (!await this.write(snapshot)) throw new Error('Salvataggio non riuscito. Le modifiche sono conservate in questo browser. Controlla la connessione e riprova.');
        this.saved = { ...snapshot, version: snapshot.version + 1 };
        this.page = { ...this.page, version: this.saved.version, revisions: snapshot.revisions };
        if (addRevision) this.lastRevision = Date.now();
        this.completed = generation;
        this.backup(this.dirty ? this.page : null);
      } catch (error) {
        if (error instanceof PageSaveBusy) { this.state = 'pending'; this.schedule(); }
        else { this.state = 'error'; this.error = error instanceof Error ? error.message : String(error); }
        this.changed(); return false;
      }
    }
    this.state = 'saved'; this.changed(); return true;
  }
}
