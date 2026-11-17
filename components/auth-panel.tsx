"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/repository";
import { TEAMS } from "@/lib/model";
import { CAPTAIN, INSTITUTIONAL_EMAIL, assignment, availableNames, completeProfile } from "@/lib/attendance";
import { Button } from "./ui/button";

const NAME_ERROR = "Scegli il tuo Nome Cognome dall’elenco.";
/** Menù dei nomi del team ancora liberi (con il codice della password del team, oppure da membro attivo). */
function NameSelect({ token, value, onChange }: { token?: string; value: string; onChange: (v: string) => void }) {
  const [names, setNames] = useState<string[] | null>(null), [error, setError] = useState("");
  useEffect(() => {
    let cancelled = false;
    availableNames(token).then(list => { if (!cancelled) setNames(list); })
      .catch(() => { if (!cancelled) setError("Elenco dei nomi non disponibile. Riprova tra poco."); });
    return () => { cancelled = true; };
  }, [token]);
  return <label>
    Nome Cognome
    <select required value={value} disabled={!names?.length} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>{error ? "Elenco non disponibile" : !names ? "Caricamento…" : names.length ? "Scegli il tuo nome" : "Nessun nome disponibile"}</option>
      {names?.map(n => <option key={n} value={n}>{n}</option>)}
    </select>
    <small className="muted">{error || "Comparirà nelle presenze e non potrai modificarlo da solo. Se il tuo nome manca o risulta già usato, contatta il Team Captain."}</small>
  </label>;
}

function ProfileFields({ token, fullName, setFullName, team, setTeam, projectLead, setProjectLead, withTeam = true }: {
  token?: string; fullName: string; setFullName: (v: string) => void; team: string; setTeam: (v: string) => void; projectLead: boolean; setProjectLead: (v: boolean) => void; withTeam?: boolean;
}) {
  const captain = team === CAPTAIN;
  return <>
    <NameSelect token={token} value={fullName} onChange={setFullName} />
    {withTeam && <fieldset className="auth-teams">
      <legend>Il tuo reparto</legend>
      {TEAMS.map((t) => <label key={t.id} className={team === t.id ? "selected" : ""}>
        <input type="radio" name="team" value={t.id} required checked={team === t.id} onChange={() => setTeam(t.id)} />
        <span className="attendance-dot" style={{ background: t.color }} aria-hidden="true" />{t.name}
      </label>)}
      <label className={captain ? "selected" : ""}>
        <input type="radio" name="team" value={CAPTAIN} required checked={captain} onChange={() => { setTeam(CAPTAIN); setProjectLead(false); }} />
        <span className="attendance-dot" style={{ background: "var(--primary)" }} aria-hidden="true" />Team Captain
      </label>
      {/* Radio a sé, da spuntare/togliere con un clic: si combina con il reparto, non con Team Captain. */}
      <label className={(projectLead && !captain ? "selected" : "") + (captain ? " disabled" : "")}>
        <input type="radio" name="project-lead" value="capo_progetto" checked={projectLead && !captain} disabled={captain}
          onChange={() => {}} onClick={() => setProjectLead(!projectLead)} />
        <span className="attendance-dot" style={{ background: "var(--muted-foreground)" }} aria-hidden="true" />Capo Progetto
      </label>
    </fieldset>}
  </>;
}

/** Profilo mancante per account creati prima delle presenze (o via invito). */
export function ProfilePanel({ accountEmail }: { accountEmail: string }) {
  const [fullName, setFullName] = useState(""), [team, setTeam] = useState(""), [projectLead, setProjectLead] = useState(false);
  const [busy, setBusy] = useState(false), [error, setError] = useState("");
  // Chi ha già reparto o ruolo (es. nome da riscegliere dall'elenco) indica solo il nome.
  const [needsTeam, setNeedsTeam] = useState<boolean | null>(null);
  useEffect(() => {
    void (async () => {
      const { data: { user } } = await supabase!.auth.getUser();
      const { data } = await supabase!.from("members").select("team_id,role").eq("id", user?.id || "").maybeSingle();
      setNeedsTeam(!(data?.team_id || data?.role === "team_captain"));
    })().catch(() => setNeedsTeam(true));
  }, []);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy || needsTeam === null) return;
    if (!fullName) { setError(NAME_ERROR); return; }
    if (needsTeam && !team) { setError("Seleziona il tuo reparto o Team Captain."); return; }
    setBusy(true); setError("");
    const { team_id, role } = assignment(team, projectLead);
    try { await completeProfile(fullName, team_id, role); window.location.replace("/"); }
    catch (e) { setError(e instanceof Error ? e.message : "Profilo non salvato. Riprova."); setBusy(false); }
  };
  return <>
    <h1>Completa il profilo.</h1>
    <p>{needsTeam === false
      ? "Scegli il tuo nome dall’elenco del team: serve per le presenze alle riunioni."
      : "Scegli il tuo nome dall’elenco, il tuo reparto (o Team Captain) ed eventualmente se sei Capo Progetto: servono per le presenze alle riunioni."} Account: {accountEmail}</p>
    <form onSubmit={submit}>
      <ProfileFields withTeam={needsTeam !== false} fullName={fullName} setFullName={setFullName} team={team} setTeam={setTeam} projectLead={projectLead} setProjectLead={setProjectLead} />
      {error && <p className="form-error" role="alert">{error}</p>}
      <Button disabled={busy || needsTeam === null}>{busy ? "Attendi…" : "Salva e accedi"}</Button>
    </form>
    <Button variant="ghost" disabled={busy} onClick={async () => { await supabase?.auth.signOut(); window.location.replace("/"); }}>Esci</Button>
  </>;
}

export function AuthPanel({
  setup,
  accountEmail = "",
  recovery = false,
}: {
  setup: boolean;
  accountEmail?: string;
  recovery?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [reset, setReset] = useState(false);
  const [register, setRegister] = useState(false);
  const [fullName, setFullName] = useState("");
  const [team, setTeam] = useState("");
  const [projectLead, setProjectLead] = useState(false);
  const [teamPassword, setTeamPassword] = useState("");
  const [gateToken, setGateToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy || !supabase) return;
    setError("");
    setNotice("");
    if (register && !gateToken) {
      setBusy(true);
      try {
        const { data, error: gateError } = await supabase.rpc("issue_registration_token", { p_password: teamPassword });
        if (gateError) throw new Error(gateError.message.includes("Troppi tentativi") ? gateError.message : "Verifica non riuscita. Riprova tra poco.");
        if (!data) throw new Error("Password del team non corretta.");
        setGateToken(data as string);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Verifica non riuscita. Riprova tra poco.");
      } finally {
        setTeamPassword("");
        setBusy(false);
      }
      return;
    }
    const creating = setup || register;
    if (register && !fullName) {
      setError(NAME_ERROR);
      return;
    }
    if (register && !team) {
      setError("Seleziona il tuo reparto o Team Captain.");
      return;
    }
    if (creating && password !== confirmation) {
      setError("Le password non coincidono.");
      return;
    }
    if (creating && password.length < 12) {
      setError("Usa almeno 12 caratteri per la password.");
      return;
    }
    setBusy(true);
    try {
      if (setup) {
        const { data, error: authError } = await supabase.auth.updateUser({
          password,
          data: { password_configured: true },
        });
        if (authError || !data.user)
          throw new Error(
            "Non è stato possibile salvare la password. Il link potrebbe essere scaduto, oppure la password non rispetta i requisiti di Supabase.",
          );
        setPassword("");
        setConfirmation("");
        // Clear callback intent; the session remains authenticated.
        window.location.replace("/");
      } else if (register) {
        const { error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName, ...assignment(team, projectLead), password_configured: true, registration_token: gateToken },
          },
        });
        if (authError) {
          // Il codice monouso è consumato o scaduto solo se il database ha rifiutato l'account.
          if (/database|codice|riservata/i.test(authError.message)) {
            setGateToken("");
            throw new Error("Registrazione non riuscita: il codice del team è scaduto o non valido. Reinserisci la password del team.");
          }
          throw new Error("Registrazione non riuscita. Controlla i dati o riprova tra poco.");
        }
        setGateToken("");
        setPassword("");
        setConfirmation("");
        setNotice(
          "Registrazione inviata. Apri il link che ti abbiamo mandato per email: dopo la conferma potrai accedere al CRM.",
        );
      } else if (reset) {
        const { error: authError } = await supabase.auth.resetPasswordForEmail(
          email.trim(),
          { redirectTo: window.location.origin },
        );
        if (authError)
          throw new Error("Richiesta non riuscita. Riprova tra poco.");
        setNotice(
          "Se l’email appartiene a un account del team, riceverai le istruzioni per scegliere una nuova password.",
        );
      } else {
        const { data, error: authError } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });
        if (authError || !data.user)
          throw new Error(
            "Email o password non valide, oppure account non ancora confermato.",
          );
        // UX marker only: access is always enforced by membership and RLS.
        if (!data.user.user_metadata?.password_configured) {
          const { error: markerError } = await supabase.auth.updateUser({
            data: { password_configured: true },
          });
          if (markerError)
            throw new Error(
              "Accesso riuscito, ma la configurazione dell’account non è stata completata. Riprova.",
            );
        }
        setPassword("");
        window.location.replace("/");
      }
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Accesso non riuscito. Riprova.",
      );
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      <h1>
        {setup
          ? recovery
            ? "Scegli una nuova password."
            : "Benvenuto nel team."
          : reset
            ? "Recupera la password."
            : register
              ? "Entra nel team."
              : "Il tuo spazio di squadra."}
      </h1>
      <p>
        {setup
          ? "L’email è già verificata. Imposta la password: dai prossimi accessi userai email e password."
          : reset
            ? "Inserisci l’email del tuo account."
            : register
              ? gateToken
                ? "Crea il tuo account personale. Dopo la conferma dell’email potrai accedere."
                : "La registrazione è riservata ai membri del team. Inserisci la password del team per continuare."
              : "Accedi con email e password personali."}
      </p>
      <form onSubmit={submit}>
        {register && !gateToken ? (
          <label>
            Password del team
            <input
              type="password"
              autoComplete="off"
              required
              value={teamPassword}
              onChange={(e) => setTeamPassword(e.target.value)}
            />
            <small className="muted">È la password dell’account del team. Chiedila a un responsabile se non la conosci.</small>
          </label>
        ) : <>
        <label>
          Email
          <input
            type="email"
            autoComplete="username"
            required
            readOnly={setup}
            value={setup ? accountEmail : email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {register && (
            <small className="muted">
              {email && !INSTITUTIONAL_EMAIL.test(email.trim())
                ? "Consigliata la mail istituzionale cognome.matricola@studenti.uniroma1.it (non obbligatoria)."
                : "Consigliata: cognome.matricola@studenti.uniroma1.it"}
            </small>
          )}
        </label>
        {!reset && (
          <label>
            {setup ? "Nuova password" : "Password"}
            <input
              type="password"
              autoComplete={setup || register ? "new-password" : "current-password"}
              required
              minLength={setup || register ? 12 : undefined}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {(setup || register) && <small className="muted">Almeno 12 caratteri.</small>}
          </label>
        )}
        {(setup || register) && (
          <label>
            Conferma password
            <input
              type="password"
              autoComplete="new-password"
              required
              minLength={12}
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </label>
        )}
        {register && (
          <ProfileFields token={gateToken} fullName={fullName} setFullName={setFullName} team={team} setTeam={setTeam} projectLead={projectLead} setProjectLead={setProjectLead} />
        )}
        </>}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {notice && (
          <p className="auth-notice" role="status">
            {notice}
          </p>
        )}
        <Button disabled={busy}>
          {busy
            ? "Attendi…"
            : setup
              ? "Salva password e accedi"
              : reset
                ? "Invia istruzioni"
                : register
                  ? gateToken ? "Registrati" : "Continua"
                  : "Accedi"}
        </Button>
        {!setup && !register && (
          <Button
            type="button"
            variant="ghost"
            disabled={busy}
            onClick={() => {
              setReset((v) => !v);
              setPassword("");
              setError("");
              setNotice("");
            }}
          >
            {reset ? "Torna all’accesso" : "Password dimenticata?"}
          </Button>
        )}
        {!setup && !reset && (
          <Button
            type="button"
            variant="ghost"
            disabled={busy}
            onClick={() => {
              setRegister((v) => !v);
              setGateToken("");
              setTeamPassword("");
              setPassword("");
              setConfirmation("");
              setError("");
              setNotice("");
            }}
          >
            {register ? "Hai già un account? Accedi" : "Non hai un account? Registrati"}
          </Button>
        )}
      </form>
      {setup && (
        <Button
          variant="ghost"
          disabled={busy}
          onClick={async () => {
            await supabase?.auth.signOut();
            window.location.replace("/");
          }}
        >
          Esci
        </Button>
      )}
    </>
  );
}
