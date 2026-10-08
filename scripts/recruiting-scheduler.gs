/** Install in the team's Apps Script project. Secrets belong in Script Properties. */
function syncRecruiting() {
  const config = PropertiesService.getScriptProperties();
  const base = config.getProperty('CRM_BASE_URL');
  const secret = config.getProperty('RECRUITING_CRON_SECRET');
  if (!base || !/^https:\/\//.test(base) || !secret) throw new Error('Configura CRM_BASE_URL e RECRUITING_CRON_SECRET nelle proprietà dello script.');
  const response = UrlFetchApp.fetch(base.replace(/\/$/,'') + '/api/recruiting/cron', {
    method: 'get', headers: { Authorization: 'Bearer ' + secret }, muteHttpExceptions: true, followRedirects: false,
  });
  if (response.getResponseCode() !== 200) throw new Error('Aggiornamento recruiting non riuscito. Controlla configurazione e ultimo errore nel CRM.');
}
function installRecruitingScheduler() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'syncRecruiting').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('syncRecruiting').timeBased().everyMinutes(5).create();
}
