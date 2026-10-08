import { recruitingFailure, recruitingInput, requireRecruiting } from '@/lib/recruiting-server';
import { candidateFields, uuid, version } from '@/lib/recruiting-validation';
import { ServerDriveError } from '@/lib/drive-server';
export const runtime = 'nodejs';
export async function PATCH(request: Request) {
  try {
    const { admin, user } = await requireRecruiting(request);
    const input = await recruitingInput(request);
    let fields, expected;
    try { if (!uuid(input.id)) throw new Error('Candidatura non valida.'); fields = candidateFields(input.fields); expected = version(input.version); }
    catch (e) { throw new ServerDriveError(e instanceof Error ? e.message : 'Modifiche non valide.', 400); }
    const result = await admin.rpc('update_recruiting', { candidate: input.id, expected, fields, actor: user.email || user.id });
    if (result.error) {
      if (result.error.code === '23514') throw new ServerDriveError('Il database recruiting deve essere aggiornato dal responsabile prima di salvare questo stato.', 503);
      if (result.error.code === 'P0001') throw new ServerDriveError('Salvataggio non riuscito. Ricarica la scheda: potrebbe essere stata aggiornata da un altro selezionatore.', 409);
      throw new ServerDriveError('Salvataggio recruiting non disponibile. Riprova tra poco.', 503);
    }
    return Response.json({ saved: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return recruitingFailure(error); }
}
