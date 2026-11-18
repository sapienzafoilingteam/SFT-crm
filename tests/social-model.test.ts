import test from 'node:test';
import assert from 'node:assert/strict';
import { createProject, cloneProject, newElement, validateProject, validateSvg, boundsWarnings, TEMPLATE_FAMILIES } from '../lib/social-model';
const season='00000000-0000-4000-8000-000000000001';
test('all Social template families produce independent valid document models',()=>{
  for(const family of TEMPLATE_FAMILIES){
    const p=createProject(family.title,season,family.id);assert.deepEqual(validateProject(p),p);
    const clone=cloneProject(p);assert.notEqual(clone.id,p.id);assert.equal(clone.version,0);assert.notEqual(clone.slides[0].id,p.slides[0].id);
    clone.slides[0].background='#FFFFFF';assert.equal(p.slides[0].background,'#812435');
  }
});
test('Social document validator rejects corrupt coordinates, excessive inputs and foreign resource fields',()=>{
  const p=createProject('Test',season);p.slides[0].elements=[newElement('text')];
  for(const n of [NaN,Infinity,-Infinity]){const bad=structuredClone(p);bad.slides[0].elements[0].x=n;assert.throws(()=>validateProject(bad));}
  const remote={...p,external:'https://evil.test'};remote.slides[0].elements[0]={...remote.slides[0].elements[0],url:'https://evil.test'} as never;
  const checked=validateProject(remote);assert.equal('external' in checked,false);assert.equal('url' in checked.slides[0].elements[0],false);
  assert.throws(()=>validateProject({...p,slides:[]}));assert.throws(()=>validateProject({...p,slides:Array(101).fill(p.slides[0])}));
  assert.throws(()=>validateProject({...p,width:0}));assert.throws(()=>validateProject({...p,version:-1}));
  assert.throws(()=>validateProject({...p,slides:[{...p.slides[0],elements:[{...p.slides[0].elements[0],fontFamily:'url(https://evil.test)'}]}]}));
});
test('SVG validation rejects scripts, external resources, event handlers and XML entities',()=>{
  validateSvg('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#822433" d="M0 0h2v2z"/></svg>');
  for(const bad of ['<svg onload="alert(1)"></svg>','<svg><script>alert(1)</script></svg>','<svg><image href="https://evil.test/a"/></svg>','<svg><use href="#a"/></svg>','<!DOCTYPE a [<!ENTITY x SYSTEM "file:///etc/passwd">]><svg/>','<svg><style>@import "https://evil.test"</style></svg>','<svg><rect style="fill:url(https://evil.test/a)"/></svg>','<svg><foreignObject/></svg>']) assert.throws(()=>validateSvg(bad));
});
test('bounds warnings account for rotation and ignore hidden elements',()=>{
  const p=createProject('Test',season);p.slides[0].elements=[newElement('rect',{x:0,y:0,width:200,height:200,rotation:45})];
  assert.equal(boundsWarnings(p).length,1);p.slides[0].elements[0].hidden=true;assert.equal(boundsWarnings(p).length,0);
});
