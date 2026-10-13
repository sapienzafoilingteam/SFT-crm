'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Copy, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import Markdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PROJECTS, TEAM_GITHUB, findProject, projectPath, readmeUrl, repositoryUrl } from '@/lib/software-projects';
import { Button } from './ui/button';
import { Heading } from './views/shared';

export function SoftwareProjects() {
  return <section className="software-projects" aria-labelledby="software-projects-title">
    <div className="software-projects-heading"><div><span className="eyebrow">CODICE DEL TEAM</span><h2 id="software-projects-title">I nostri progetti</h2><p>Obiettivi, stato del lavoro e indicazioni per contribuire.</p></div><a className="btn btn-outline" href={TEAM_GITHUB} target="_blank" rel="noreferrer"><Github size={17} />GitHub del team<ArrowUpRight size={15} /></a></div>
    <div className="software-project-grid">{PROJECTS.map(project => <Link className="software-project-card" key={project.slug} href={projectPath(project)}><span className="eyebrow">{project.tag}</span><h3>{project.title}<ArrowUpRight size={19} /></h3><p>{project.description}</p><span className="software-project-open">Esplora il progetto →</span></Link>)}</div>
  </section>;
}

type Readme = { markdown: string; source: string; snapshotDate?: string };
export function SoftwareProjectPage({ slug }: { slug: string }) {
  const project = findProject(slug);
  const [readme, setReadme] = useState<Readme | null>(null);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  useEffect(() => {
    setReadme(null); setError(''); setCopied(false); setCopyError('');
    if (!project) return;
    const controller = new AbortController();
    void fetch(`/api/projects/${project.slug}`, { signal: controller.signal }).then(async response => {
      if (!response.ok) throw new Error();
      const result = await response.json();
      if (!controller.signal.aborted) setReadme(result);
    }).catch(() => { if (!controller.signal.aborted) setError('Il README non è disponibile. Riprova o aprilo su GitHub.'); });
    return () => controller.abort();
  }, [project, retry]);
  useEffect(() => { if (!copied) return; const timer = setTimeout(() => setCopied(false), 2500); return () => clearTimeout(timer); }, [copied]);
  if (!project) return <div className="empty"><h1>Progetto non trovato</h1><Link href="/team/elettronica">Torna al reparto</Link></div>;
  const url = repositoryUrl(project), command = `git clone ${url}.git`;
  return <div className="software-project-page">
    <Link className="software-project-back" href="/team/elettronica"><ArrowLeft size={16} />Elettronica e Software</Link>
    <Heading eyebrow={project.tag} title={project.title} description={project.description}><a className="btn btn-outline" href={url} target="_blank" rel="noreferrer"><Github size={17} />Apri repository<ArrowUpRight size={15} /></a></Heading>
    <div className="software-project-summary"><section className="panel"><h2>Obiettivi</h2><ul>{project.goals.map(goal => <li key={goal}>{goal}</li>)}</ul></section><section className="panel"><h2>Stato attuale</h2><p>{project.status}</p><small>Sintesi dal README pubblico · 13 ottobre 2026. Consulta la repository per gli ultimi aggiornamenti.</small></section></div>
    <section className="panel software-project-clone"><h2>Clona la repository</h2><p>Con Git installato, esegui questo comando nel terminale.</p><div className="software-clone-command"><code>{command}</code><Button variant="outline" size="sm" onClick={async () => { try { await navigator.clipboard.writeText(command); setCopied(true); setCopyError(''); } catch { setCopyError('Seleziona e copia il comando qui sopra.'); } }}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copiato' : 'Copia comando'}</Button></div><a href={`${url}/archive/refs/heads/main.zip`}>Scarica ZIP</a><span role="status" className="muted">{copyError || (copied ? 'Comando copiato negli appunti.' : '')}</span></section>
    <section className="panel software-project-contribute"><h2>Come contribuire</h2><ol>{project.contribute.map(item => <li key={item}>{item}</li>)}</ol><p>Consulta le <a href={`${url}/issues`} target="_blank" rel="noreferrer">issue aperte</a>, concorda una modifica e proponila con una pull request da un branch o da un fork. Segui le istruzioni del README e l’eventuale CONTRIBUTING della repository.</p></section>
    <section className="panel software-readme" aria-labelledby="readme-title"><div className="software-projects-heading"><h2 id="readme-title">README del progetto</h2><a href={`${url}#readme`} target="_blank" rel="noreferrer">Leggi su GitHub ↗</a></div>
      {readme?.source === 'snapshot' && <p role="status" className="software-readme-notice">GitHub non è raggiungibile: è mostrata la copia del README del 13 ottobre 2026.</p>}
      {!readme && !error && <p role="status">Caricamento README…</p>}
      {error && <div role="alert"><p>{error}</p><Button variant="outline" onClick={() => setRetry(value => value + 1)}>Riprova</Button></div>}
      {readme && <article className="software-markdown"><Markdown remarkPlugins={[remarkGfm]} skipHtml urlTransform={(value, key) => defaultUrlTransform(readmeUrl(value, project, key === 'src'))} components={{ a: ({ children, ...props }) => <a {...props} target="_blank" rel="noreferrer">{children}</a>, img: ({ ...props }) => <img {...props} loading="lazy" alt={props.alt || ''} />, h1: ({ children }) => <h3>{children}</h3>, h2: ({ children }) => <h3>{children}</h3>, h3: ({ children }) => <h4>{children}</h4> }}>{readme.markdown}</Markdown></article>}
    </section>
  </div>;
}
