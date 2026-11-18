// Gemini runs behind the authenticated CRM endpoint. No key or model is downloaded here.
import { requestGemini } from '../app/crm.js';
export const MODES = {
  full: { id: 'full', label: 'Gemini', icon: 'sparkle', desc: 'Risposte con Gemini, basate sui dati calcolati del progetto.' },
  instant: { id: 'instant', label: 'Dati del progetto', icon: 'bolt', desc: 'Risposte calcolate da Dollaroni, disponibili anche senza Gemini.' },
};
const SETTINGS_KEY = 'dollaroni.gemini.v1';
function settings() {
  try { return { mode: JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}').mode === 'instant' ? 'instant' : 'full' }; }
  catch { return { mode: 'full' }; }
}
const listeners = new Set();
export const geminiAI = {
  settings: settings(),
  state: { status: 'idle', info: { model: 'Gemini' }, error: null },
  emit(patch) { this.state = { ...this.state, ...patch }; for (const fn of listeners) fn(this.state); },
  subscribe(fn) { listeners.add(fn); fn(this.state); return () => listeners.delete(fn); },
  init() { return Promise.resolve(); },
  updateSettings(patch) {
    this.settings = { mode: patch.mode === 'instant' ? 'instant' : 'full' };
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch { /* UI preference only. */ }
    this.emit({ status: 'idle', error: null });
  },
  async chat(messages, { signal, onText } = {}) {
    const started = Date.now();
    this.emit({ status: 'busy', error: null });
    try {
      const result = await requestGemini(messages, { signal, task: 'answer' });
      if (signal?.aborted) throw new DOMException('Richiesta interrotta', 'AbortError');
      onText?.(result.text);
      this.emit({ status: 'ready', info: { model: result.model || 'Gemini' } });
      return { text: result.text, seconds: (Date.now() - started) / 1000 };
    } catch (error) {
      this.emit({ status: error.name === 'AbortError' ? 'idle' : 'error', error: error.message });
      throw error;
    }
  },
  async complete(messages, { signal } = {}) { return (await requestGemini(messages, { signal, task: 'route' })).text; },
};
