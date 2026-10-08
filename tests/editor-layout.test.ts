import test from 'node:test';
import assert from 'node:assert/strict';
import { editorLayout } from '../lib/editor-layout';
import { fieldsFor, newRecord } from '../components/record-editor';
import { createMock } from '../lib/mock';
import { SEASONS, type Collection } from '../lib/model';

const editable: Collection[] = ['sponsors','events','deliveries','costs','contracts','templates','offers','documents','links','reports','recurrences'];
const data = createMock();
function valuesFor(collection: Collection) {
  return Object.fromEntries(Object.entries(newRecord(collection, SEASONS[0].id)).map(([key,value]) => [key,String(value ?? '')]));
}
test('progressive forms retain access to every field across all eleven record types', () => {
  for (const collection of editable) {
    const fields = fieldsFor(collection,data);
    const layout = editorLayout(collection,fields,valuesFor(collection),false);
    const rendered = [...layout.primary, ...layout.groups.flatMap(g => g.fields)].map(f => f.key);
    assert.deepEqual([...rendered].sort(), fields.map(f => f.key).sort(), collection);
    assert.equal(new Set(rendered).size,rendered.length,collection);
    assert.ok(layout.primary.length <= 3, collection);
  }
});
test('missing required context is visible and completion proof appears when delivery is marked done', () => {
  const fields = fieldsFor('reports',data);
  assert.ok(editorLayout('reports',fields,{team_id:''},false).primary.some(f => f.key === 'team_id'));
  assert.ok(editorLayout('reports',fields,{team_id:'elettronica'},false,false,{team_id:''}).primary.some(f => f.key === 'team_id'));
  const deliveryFields = fieldsFor('deliveries',data);
  assert.ok(editorLayout('deliveries',deliveryFields,{status:'Consegnato / Pubblicato'},true).primary.some(f => f.key === 'completion_url'));
  assert.ok(!editorLayout('deliveries',deliveryFields,{status:'Da fare'},false).primary.some(f => f.key === 'completion_url'));
});
test('existing state is immediately editable and future fields are never silently dropped', () => {
  const layout = editorLayout('contracts',[...fieldsFor('contracts',data),{key:'future_field'}],valuesFor('contracts'),true);
  assert.ok(layout.primary.some(f => f.key === 'status'));
  assert.ok(layout.groups.flatMap(g => g.fields).some(f => f.key === 'date'));
  assert.ok(layout.groups.flatMap(g => g.fields).some(f => f.key === 'future_field'));
});
