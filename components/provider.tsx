"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { ThemeProvider } from "next-themes";
import { Workspace, Collection, Base, SEASONS } from "@/lib/model";
import { createMock } from "@/lib/mock";
import { withDefaultLinks } from "@/lib/workspace-defaults";
import {
  live,
  initialAuthMode,
  loadMock,
  loadRemote,
  persist,
  supabase,
} from "@/lib/repository";
import { Button } from "./ui/button";
import { AuthPanel } from "./auth-panel";
interface Context {
  data: Workspace;
  season: string;
  setSeason: (s: string) => void;
  save: (fn: (s: Workspace) => Workspace) => Promise<boolean>;
  put: <K extends Collection>(
    k: K,
    row: Workspace[K][number],
  ) => Promise<boolean>;
  busy: boolean;
  notice: (s: string) => void;
  ready: boolean;
}
const Ctx = createContext<Context | null>(null);
export function useWorkspace() {
  const c = useContext(Ctx);
  if (!c) throw new Error("Provider mancante");
  return c;
}
export function Provider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Workspace>(() => createMock());
  const [season, setSeason] = useState(SEASONS[0].id);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [problem, setProblem] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [recovery, setRecovery] = useState(initialAuthMode === "recovery");
  const saving = useRef(false);
  useEffect(() => {
    if (!live) {
      const stored = loadMock(createMock());
      const initialized = withDefaultLinks(stored);
      setData(initialized);
      if (initialized !== stored)
        persist(initialized, stored).catch(() =>
          setMessage("Impossibile salvare i link nel browser."),
        );
      setReady(true);
      return;
    }
    const subscription = supabase?.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setAccountEmail(session?.user.email || "");
        setRecovery(true);
        setReady(false);
        setProblem("SET_PASSWORD");
      } else if (event === "SIGNED_OUT") {
        setReady(false);
        setProblem("LOGIN");
      }
    }).data.subscription;
    const load = async () => {
      if (!supabase)
        throw new Error("Configura URL e chiave pubblica Supabase.");
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("LOGIN");
      setAccountEmail(user.email || "");
      if (
        !user.user_metadata?.password_configured ||
        initialAuthMode === "invite" ||
        initialAuthMode === "recovery"
      )
        throw new Error("SET_PASSWORD");
      return loadRemote();
    };
    load()
      .then(async (s) => {
        const initialized = withDefaultLinks(s);
        if (initialized !== s) {
          try {
            await persist(initialized, s);
            setData(initialized);
          } catch {
            // A second member may have created the same defaults concurrently.
            setData(await loadRemote());
            setMessage(
              "Controlla i link in Impostazioni: alcune risorse potrebbero essere da configurare.",
            );
          }
        } else setData(s);
        setReady(true);
      })
      .catch((e) => setProblem(e.message));
    return () => subscription?.unsubscribe();
  }, []);
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(""), 5000);
    return () => clearTimeout(t);
  }, [message]);
  const save = useCallback(
    async (fn: (s: Workspace) => Workspace) => {
      if (saving.current || !ready) return false;
      saving.current = true;
      setBusy(true);
      try {
        const next = fn(data);
        await persist(next, data);
        setData(next);
        setMessage("Modifiche salvate");
        return true;
      } catch (e) {
        setMessage(
          "Salvataggio non riuscito: " +
            (e instanceof Error ? e.message : String(e)),
        );
        return false;
      } finally {
        saving.current = false;
        setBusy(false);
      }
    },
    [busy, ready, data],
  );
  const put = async <K extends Collection>(k: K, row: Workspace[K][number]) =>
    save((s) => {
      const rows = s[k] as Base[];
      const found = rows.find((x) => x.id === row.id);
      const updated = {
        ...row,
        version: found ? found.version + 1 : 1,
        updated_at: new Date().toISOString(),
      };
      return {
        ...s,
        [k]: found
          ? rows.map((x) => (x.id === row.id ? updated : x))
          : [updated, ...rows],
      };
    });
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Ctx.Provider
        value={{
          data,
          season,
          setSeason,
          save,
          put,
          busy,
          notice: setMessage,
          ready,
        }}
      >
        {live && !ready ? (
          <div className="login">
            <img src="/logo.svg" alt="Sapienza Foiling Team" />
            {problem === "LOGIN" || problem === "SET_PASSWORD" ? (
              <AuthPanel
                setup={problem === "SET_PASSWORD"}
                accountEmail={accountEmail}
                recovery={recovery}
              />
            ) : (
              <>
                <h1>Il tuo spazio di squadra.</h1>
                <p role={problem ? "alert" : "status"}>
                  {problem || "Caricamento del workspace…"}
                </p>
                {problem && (
                  <>
                    <Button onClick={() => window.location.reload()}>
                      Riprova
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={async () => {
                        await supabase?.auth.signOut();
                        window.location.replace("/");
                      }}
                    >
                      Esci
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          children
        )}
        {message && (
          <div className="toast" role="status">
            {message}
            <button aria-label="Chiudi notifica" onClick={() => setMessage("")}>
              ×
            </button>
          </div>
        )}
      </Ctx.Provider>
    </ThemeProvider>
  );
}
