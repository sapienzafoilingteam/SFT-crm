import { type Collection, type Workspace } from './model';
import { emptyWorkspace } from './repository';
export function routeCollections(path: readonly string[]): Collection[] {
    const section = path[0] || 'home';
    const common: Collection[] = ['deliveries'];
    if (section === 'home')
        return [...common, 'links', 'pages', 'reports'];
    if (section === 'richieste-crm') return [...common, 'reports'];
    if (section === 'agenda')
        return [...common, 'events', 'recurrences'];
    if (section === 'recruiting')
        return [...common, 'events'];
    if (section === 'impostazioni')
        return [...common, 'links'];
    if (section !== 'team')
        return common;
    if (path[1] === 'elettronica' && path[2] === 'progetti') return common;
    if (path[1] !== 'management' || path[2] === 'pagina')
        return [...common, 'pages', 'reports', 'links'];
    const modules: Record<string, Collection[]> = {
        '': ['sponsors', 'events', 'costs'], sponsor: ['sponsors', 'contracts', 'costs'],
        eventi: ['events', 'sponsors', 'costs'], bilancio: ['costs', 'events', 'sponsors'],
        contratti: ['contracts', 'offers', 'documents', 'sponsors', 'events'],
        template: ['templates', 'documents', 'sponsors', 'events'],
    };
    return [...common, ...(modules[path[2] || ''] || [])];
}
/** In-memory, per-session snapshots. Never shared with the server or persisted on disk. */
export class WorkspaceResources {
    private entries = new Map<string, {
        data: Workspace;
        loaded: Set<Collection>;
        pending: Map<Collection, Promise<void>>;
    }>();
    private generation = 0;
    constructor(private read: (keys: readonly Collection[], season: string) => Promise<Partial<Workspace>>) { }
    private entry(season: string) {
        let entry = this.entries.get(season);
        if (!entry) {
            entry = { data: emptyWorkspace(), loaded: new Set(), pending: new Map() };
            this.entries.set(season, entry);
        }
        return entry;
    }
    snapshot(season: string) { return this.entry(season).data; }
    has(season: string, keys: readonly Collection[]) { return keys.every(k => this.entry(season).loaded.has(k)); }
    keys(season: string) { return [...this.entry(season).loaded]; }
    replace(season: string, data: Workspace) { this.entry(season).data = data; }
    clear() { this.generation++; this.entries.clear(); }
    async load(season: string, keys: readonly Collection[], force = false) {
        const entry = this.entry(season), generation = this.generation;
        const waitingKeys = [...new Set(keys)].filter(k => entry.pending.has(k));
        const waiting = waitingKeys.map(k => entry.pending.get(k)!);
        const missing = [...new Set(keys)].filter(k => !entry.pending.has(k) && (force || !entry.loaded.has(k)));
        if (missing.length) {
            const beforeRead = entry.data;
            const request = this.read(missing, season).then(result => {
                if (generation !== this.generation)
                    return;
                const merged = { ...entry.data };
                let changed = missing.some(k => !entry.loaded.has(k));
                for (const key of missing) {
                    const newer = new Map(entry.data[key].map(row => [row.id, row]));
                    const incoming = (result[key] || []).map(row => {
                        const local = newer.get(row.id);
                        return local && local.version > row.version ? local : row;
                    });
                    const incomingIds = new Set(incoming.map(row => row.id));
                    const beforeIds = new Set(beforeRead[key].map(row => row.id));
                    incoming.push(...entry.data[key].filter(row => !incomingIds.has(row.id) && !beforeIds.has(row.id)));
                    const same = entry.data[key].length === incoming.length && incoming.every((row, index) => {
                        const current = entry.data[key][index];
                        return current.id === row.id && current.version === row.version && current.updated_at === row.updated_at;
                    });
                    if (!same) {
                        (merged[key] as typeof merged[Collection]) = incoming as typeof merged[Collection];
                        changed = true;
                    }
                }
                if (changed)
                    entry.data = merged;
                missing.forEach(k => entry.loaded.add(k));
            }).finally(() => { missing.forEach(k => entry.pending.delete(k)); });
            missing.forEach(k => entry.pending.set(k, request));
            waiting.push(request);
        }
        await Promise.all(waiting);
        if (generation !== this.generation) return;
        // A refresh arriving during another fetch must observe a newer snapshot.
        if (force && waitingKeys.length)
            await this.load(season, waitingKeys, true);
    }
}
