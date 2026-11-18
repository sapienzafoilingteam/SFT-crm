// CRM adapter. No credentials cross this boundary; the authenticated shell owns persistence.
const CHANNEL = 'sft-dollaroni';
let scope = null;
let pendingLoad = null;
let loadListener = null;
let currentProject = null;
let nextRequest = 0;
const saves = new Map();
const aiRequests = new Map();
const post = (type, extra = {}) => window.parent.postMessage({ channel: CHANNEL, type, scope, ...extra }, location.origin);
export const draftKey = () => `sft-dollaroni:${scope || 'uninitialized'}:draft`;

export function initializeCrm() {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { clearInterval(repeat); reject(new Error('Apri Dollaroni dalla pagina Materiali e Sostenibilità del CRM.')); }, 20000);
    const repeat = setInterval(() => post('ready'), 1000);
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== window.parent || event.data?.channel !== CHANNEL) return;
      const message = event.data;
      if (message.type === 'init' && typeof message.scope === 'string' && message.scope.length < 250) {
        if (scope && scope !== message.scope) return;
        scope = message.scope;
        document.documentElement.classList.toggle('dark', message.theme === 'dark');
        const colors = ['background', 'foreground', 'card', 'muted', 'muted-foreground', 'primary', 'secondary', 'border', 'input', 'success', 'success-soft', 'warning', 'warning-soft', 'destructive', 'info', 'info-soft'];
        for (const key of colors) {
          const value = message.tokens?.[key];
          if (typeof value === 'string' && CSS.supports('color', value)) document.documentElement.style.setProperty('--sft-' + key, value);
        }
        clearInterval(repeat); clearTimeout(timer); resolve();
      } else if (message.type === 'display') {
        document.documentElement.classList.toggle('crm-fullscreen', message.fullscreen === true);
      } else if (scope && message.type === 'load' && message.project?.schema === 'dollaroni/1') {
        if (loadListener) loadListener(message.project); else pendingLoad = message.project;
      } else if (scope && message.type === 'ai-result' && message.scope === scope) {
        aiRequests.get(message.requestId)?.(message);
      } else if (scope && message.type === 'saved') {
        const callback = saves.get(message.requestId);
        if (callback) { saves.delete(message.requestId); callback(message); }
      }
    });
    post('ready');
  });
}
export function onCrmLoad(callback) {
  loadListener = callback;
  if (pendingLoad) { const value = pendingLoad; pendingLoad = null; callback(value); }
  return () => { if (loadListener === callback) loadListener = null; };
}
export function publishProject(project) {
  currentProject = project;
  post('changed', { project });
}
export const projectReplaced = project => post('replaced', { project });
export const booted = () => post('booted');
export const bootFailed = error => post('error', { error: String(error?.message || error) });
export function saveToCrm(project = currentProject) {
  if (!project) return Promise.reject(new Error('Apri o crea prima un progetto.'));
  const requestId = ++nextRequest;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { saves.delete(requestId); reject(new Error('Il CRM non risponde. La bozza locale è conservata: riprova.')); }, 30000);
    saves.set(requestId, result => { clearTimeout(timer); result.ok ? resolve() : reject(new Error(result.error || 'Salvataggio CRM non riuscito. Riprova o salva una copia.')); });
    post('save', { project, requestId });
  });
}


export function requestGemini(messages, { signal, task = 'answer' } = {}) {
  const requestId = 'gemini-' + (++nextRequest);
  return new Promise((resolve, reject) => {
    const cleanup = () => { clearTimeout(timer); aiRequests.delete(requestId); signal?.removeEventListener('abort', cancel); };
    const cancel = () => { cleanup(); post('ai-cancel', { requestId }); reject(new DOMException('Richiesta interrotta', 'AbortError')); };
    const timer = setTimeout(() => { cleanup(); post('ai-cancel', { requestId }); reject(new Error('Gemini sta impiegando troppo tempo. Riprova.')); }, 45000);
    if (signal?.aborted) { cancel(); return; }
    signal?.addEventListener('abort', cancel, { once: true });
    aiRequests.set(requestId, result => {
      cleanup();
      if (result.ok && typeof result.text === 'string') resolve({ text: result.text, model: result.model });
      else reject(new Error(result.error || 'Gemini non è disponibile. Riprova.'));
    });
    post('ai', { messages, task, requestId });
  });
}
