import { randomUUID } from 'node:crypto';
import { recruitingFailure, recruitingInput, requireRecruiting } from '@/lib/recruiting-server';
import { interviewFields, uuid, version } from '@/lib/recruiting-validation';
import { ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    const { admin, user } = await requireRecruiting(request);
    const input = await recruitingInput(request);
    let fields, expected = null, eventExpected = null;
    try {
      if (!uuid(input.candidate_id) || (input.id !== undefined && !uuid(input.id))) throw new Error('Colloquio non valido.');
      fields = interviewFields(input);
      if (input.id) { expected = version(input.version); eventExpected = version(input.event_version); }
    } catch (e) { throw new ServerDriveError(e instanceof Error ? e.message : 'Colloquio non valido.', 400); }
    const result = await admin.rpc('save_recruiting_interview', { candidate: input.candidate_id, interview: input.id || randomUUID(), expected, event_expected: eventExpected, fields, actor: user.email || user.id });
    if (result.error) throw new ServerDriveError('Colloquio non salvato. Ricarica per verificare aggiornamenti della scheda o dell’agenda.', 409);
    return Response.json({ saved: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return recruitingFailure(error); }
}
