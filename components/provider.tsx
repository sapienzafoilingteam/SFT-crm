"use client";
import { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo, type ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { type Workspace, type Collection, type Base, SEASONS } from '@/lib/model';
import { createMock } from '@/lib/mock';
import { withDefaultLinks } from '@/lib/workspace-defaults';
import { live, initialAuthMode, loadMock, loadRemote, persist, supabase, verifyWorkspaceAccess, emptyWorkspace } from '@/lib/repository';
import { WorkspaceResources } from '@/lib/workspace-resources';
import { clearViewState } from '@/lib/view-state';
import { Button } from './ui/button';
import { AuthPanel } from './auth-panel';
import { LegalLinks } from './legal-page';
import { PublicHome } from './public-home';
interface State {
    data: Workspace;
    season: string;
    busy: boolean;
    ready: boolean;
    revision: number;
}
interface Actions {
    setSeason: (season: string) => void;
    save: (fn: (data: Workspace) => Workspace, options?: { silent?: boolean }) => Promise<boolean>;
    put: <K extends Collection>(key: K, row: Workspace[K][number], options?: { silent?: boolean }) => Promise<boolean>;
    notice: (message: string) => void;
    refresh: (keys?: readonly Collection[]) => Promise<void>;
    ensure: (keys: readonly Collection[]) => Promise<void>;
    isLoaded: (keys: readonly Collection[]) => boolean;
}
const StateContext = createContext<State | null>(null);
const ActionsContext = createContext<Actions | null>(null);
export function useWorkspaceActions() { const value = useContext(ActionsContext); if (!value)
    throw new Error('Provider mancante'); return value; }
export function useWorkspace() { const value = useContext(StateContext); if (!value)
    throw new Error('Provider mancante'); return { ...value, ...useWorkspaceActions() }; }
const toastEvent = 'sft:notice';
function notice(message: string) { window.dispatchEvent(new CustomEvent(toastEvent, { detail: message })); }
function Toast() {
    const [message, setMessage] = useState('');
    useEffect(() => { const receive = (event: Event) => setMessage((event as CustomEvent<string>).detail); window.addEventListener(toastEvent, receive); return () => window.removeEventListener(toastEvent, receive); }, []);
    useEffect(() => { if (!message)
        return; const timer = setTimeout(() => setMessage(''), 5000); return () => clearTimeout(timer); }, [message]);
    return message ? <div className="toast" role="status">{message}<button aria-label="Chiudi notifica" onClick={() => setMessage('')}>×</button></div> : null;
}
export function Provider({ children, publicHome = false, inactive = false }: {
    children: ReactNode;
    publicHome?: boolean;
    inactive?: boolean;
}) {
    const [resources] = useState(() => new WorkspaceResources(async (keys, selectedSeason) => {
        const result = await loadRemote(keys, selectedSeason);
        if (result.links) {
            const previous = { ...emptyWorkspace(), ...result }, next = withDefaultLinks(previous, selectedSeason);
            if (next !== previous) {
                try {
                    await persist(next, previous);
                    result.links = next.links;
                }
                catch {
                    result.links = (await loadRemote(['links'], selectedSeason)).links;
                }
            }
        }
        return result;
    }));
    const [data, setData] = useState<Workspace>(emptyWorkspace);
    const [season, setSeasonState] = useState(SEASONS[0].id);
    const [ready, setReady] = useState(false), [busy, setBusy] = useState(false);
    const [revision, setRevision] = useState(0), [problem, setProblem] = useState('');
    const [accountEmail, setAccountEmail] = useState('');
    const [recovery, setRecovery] = useState(initialAuthMode === 'recovery');
    const activeSeason = useRef(season), dataRef = useRef(data), saving = useRef(false), authorized = useRef(false), initialized = useRef(false);
    const epoch = useRef(0);
    const publish = useCallback(() => { if (!authorized.current)
        return; const next = resources.snapshot(activeSeason.current); if (next === dataRef.current)
        return; dataRef.current = next; setData(next); setRevision(n => n + 1); }, [resources]);
    const setSeason = useCallback((next: string) => {
        if (saving.current || !SEASONS.some(s => s.id === next))
            return;
        activeSeason.current = next;
        setSeasonState(next);
        if (live)
            publish();
    }, [publish]);
    useEffect(() => {
        if (inactive || initialized.current)
            return;
        initialized.current = true;
        let cancelled = false;
        const generation = epoch.current;
        if (!live) {
            const stored = loadMock(createMock()), next = withDefaultLinks(stored);
            dataRef.current = next;
            setData(next);
            authorized.current = true;
            setReady(true);
            if (next !== stored)
                void persist(next, stored).catch(() => notice('Impossibile salvare nel browser.'));
            return;
        }
        void verifyWorkspaceAccess().then(user => {
            if (cancelled || generation !== epoch.current)
                return;
            setAccountEmail(user.email || '');
            if (!user.user_metadata?.password_configured || initialAuthMode === 'invite' || initialAuthMode === 'recovery') {
                setProblem('SET_PASSWORD');
                return;
            }
            authorized.current = true;
            setProblem('');
            setReady(true);
        }).catch(error => { if (!cancelled && generation === epoch.current)
            setProblem(error.message); });
        return () => { cancelled = true; initialized.current = false; };
    }, [inactive]);
    useEffect(() => {
        const subscription = supabase?.auth.onAuthStateChange((event, session) => {
            if (event !== 'SIGNED_OUT' && event !== 'PASSWORD_RECOVERY')
                return;
            epoch.current++;
            authorized.current = false;
            resources.clear();
            clearViewState();
            dataRef.current = emptyWorkspace();
            setData(dataRef.current);
            setReady(false);
            setProblem(event === 'PASSWORD_RECOVERY' ? 'SET_PASSWORD' : 'LOGIN');
            if (event === 'PASSWORD_RECOVERY') {
                setRecovery(true);
                setAccountEmail(session?.user.email || '');
            }
        }).data.subscription;
        return () => subscription?.unsubscribe();
    }, [resources]);
    const ensure = useCallback(async (keys: readonly Collection[]) => {
        if (!live || !authorized.current)
            return;
        const selectedSeason = activeSeason.current, generation = epoch.current;
        await resources.load(selectedSeason, keys);
        if (generation === epoch.current && selectedSeason === activeSeason.current)
            publish();
    }, [resources, publish]);
    const refresh = useCallback(async (keys?: readonly Collection[]) => {
        if (!live || !authorized.current || saving.current)
            return;
        const selectedSeason = activeSeason.current, generation = epoch.current;
        const loaded = resources.keys(selectedSeason);
        const requested = keys ? keys.filter(k => loaded.includes(k)) : loaded;
        if (!requested.length)
            return;
        await resources.load(selectedSeason, requested, true);
        if (generation === epoch.current && selectedSeason === activeSeason.current)
            publish();
    }, [resources, publish]);
    // Realtime where enabled; selective polling and focus refresh cover installations without publication.
    useEffect(() => {
        if (!live || !ready || inactive || !supabase)
            return;
        let timer: ReturnType<typeof setTimeout> | undefined;
        let lastRefresh = 0;
        const changed = new Set<Collection>();
        const run = () => {
            if (saving.current) {
                timer = setTimeout(run, 800);
                return;
            }
            const keys = changed.size ? [...changed] : undefined;
            changed.clear();
            lastRefresh = Date.now();
            void refresh(keys).catch(error => notice('Aggiornamento non riuscito: ' + error.message));
        };
        const channel = supabase.channel('workspace:' + season).on('postgres_changes', { event: '*', schema: 'public', filter: 'season_id=eq.' + season }, payload => {
            const table = payload.table as Collection;
            if (!resources.keys(season).includes(table))
                return;
            changed.add(table);
            clearTimeout(timer);
            timer = setTimeout(run, 500);
        }).subscribe();
        const focus = () => { if (document.visibilityState === 'visible' && Date.now() - lastRefresh > 30000)
            run(); };
        window.addEventListener('focus', focus);
        const poll = setInterval(focus, 60000);
        return () => { clearTimeout(timer); clearInterval(poll); window.removeEventListener('focus', focus); void supabase!.removeChannel(channel); };
    }, [ready, inactive, season, refresh, resources]);
    const save = useCallback(async (fn: (data: Workspace) => Workspace, options?: { silent?: boolean }) => {
        if (saving.current || !authorized.current)
            return false;
        saving.current = true;
        setBusy(true);
        const generation = epoch.current, selectedSeason = activeSeason.current;
        try {
            const previous = dataRef.current, next = fn(previous);
            await persist(next, previous);
            if (generation !== epoch.current)
                return false;
            // A background read of another collection may have completed during the save.
            const current = live ? resources.snapshot(selectedSeason) : dataRef.current;
            const merged = { ...current };
            for (const key of Object.keys(next) as Collection[])
                if (next[key] !== previous[key])
                    (merged[key] as Base[]) = next[key] as Base[];
            if (live) {
                resources.replace(selectedSeason, merged);
                publish();
            }
            else {
                dataRef.current = merged;
                setData(merged);
            }
            if (!options?.silent) notice('Modifiche salvate');
            return true;
        }
        catch (error) {
            notice('Salvataggio non riuscito: ' + (error instanceof Error ? error.message : String(error)));
            return false;
        }
        finally {
            saving.current = false;
            setBusy(false);
        }
    }, [publish, resources]);
    const put = useCallback(<K extends Collection>(key: K, row: Workspace[K][number], options?: { silent?: boolean }) => {
        const current = (dataRef.current[key] as Base[]).find(record => record.id === row.id);
        if (current && current.version !== row.version) {
            notice('Questo elemento è stato aggiornato. Riapri i dettagli prima di salvare.');
            return Promise.resolve(false);
        }
        return save(previous => {
            const rows = previous[key] as Base[], found = rows.find(r => r.id === row.id);
            const updated = { ...row, version: found ? found.version + 1 : 1, updated_at: new Date().toISOString() };
            return { ...previous, [key]: found ? rows.map(r => r.id === row.id ? updated : r) : [updated, ...rows] };
        }, options);
    }, [save]);
    const isLoaded = useCallback((keys: readonly Collection[]) => !live || resources.has(activeSeason.current, keys), [resources]);
    const actions = useMemo(() => ({ setSeason, ensure, refresh, save, put, notice, isLoaded }), [setSeason, ensure, refresh, save, put, isLoaded]);
    const state = useMemo(() => ({ data, season, ready, busy, revision }), [data, season, ready, busy, revision]);
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem><ActionsContext.Provider value={actions}><StateContext.Provider value={state}>
    {inactive ? children : live && !ready ? publicHome && problem !== 'SET_PASSWORD' ? <PublicHome /> : <div className="login"><img src="/logo.svg" alt="Sapienza Foiling Team"/>
      {problem === 'LOGIN' || problem === 'SET_PASSWORD' ? <AuthPanel setup={problem === 'SET_PASSWORD'} accountEmail={accountEmail} recovery={recovery}/> : <><h1>Il tuo spazio di squadra.</h1><p role={problem ? 'alert' : 'status'}>{problem || 'Verifica dell’accesso…'}</p>{problem && <Button onClick={() => window.location.reload()}>Riprova</Button>}</>}
      <LegalLinks /></div> : children}
    <Toast />
  </StateContext.Provider></ActionsContext.Provider></ThemeProvider>;
}
