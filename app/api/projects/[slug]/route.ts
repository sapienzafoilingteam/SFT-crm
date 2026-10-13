import { findProject } from '@/lib/software-projects';
import snapshots from '@/lib/project-readmes/snapshot.json';

// Only public README files from the fixed project list are exposed here.
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return Response.json({ error: 'Progetto non trovato.' }, { status: 404 });
  try {
    const response = await fetch(`https://api.github.com/repos/sapienzafoilingteam/${project.repository}/readme`, {
      headers: { Accept: 'application/vnd.github.raw+json' },
      next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error('README non disponibile');
    const markdown = await response.text();
    if (!markdown.trim()) throw new Error('README vuoto');
    return Response.json({ markdown, source: 'github' });
  } catch {
    return Response.json({ markdown: snapshots[project.repository], source: 'snapshot', snapshotDate: '2026-10-13' });
  }
}
