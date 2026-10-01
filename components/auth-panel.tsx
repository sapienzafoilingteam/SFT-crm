"use client";
import { useState } from "react";
import { supabase } from "@/lib/repository";
import { Button } from "./ui/button";

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
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy || !supabase) return;
    setError("");
    setNotice("");
    if (setup && password !== confirmation) {
      setError("Le password non coincidono.");
      return;
    }
    if (setup && password.length < 12) {
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
            : "Il tuo spazio di squadra."}
      </h1>
      <p>
        {setup
          ? "L’email è già verificata. Imposta la password: dai prossimi accessi userai email e password."
          : reset
            ? "Inserisci l’email del tuo account."
            : "Accedi con email e password. La registrazione è riservata alle persone invitate dal team."}
      </p>
      <form onSubmit={submit}>
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
        </label>
        {!reset && (
          <label>
            {setup ? "Nuova password" : "Password"}
            <input
              type="password"
              autoComplete={setup ? "new-password" : "current-password"}
              required
              minLength={setup ? 12 : undefined}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {setup && <small className="muted">Almeno 12 caratteri.</small>}
          </label>
        )}
        {setup && (
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
                : "Accedi"}
        </Button>
        {!setup && (
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
