import test from 'node:test';
import assert from 'node:assert/strict';
import { createProject, newElement } from '../lib/social-model';
import { exportPackage, exportSlide, imagePlacement, importPackage } from '../lib/social-export';
const season='00000000-0000-4000-8000-000000000001';
test('photo placement keeps contain proportions, cover focal point and independent crop zoom',()=>{
 const element=newElement('image',{width:400,height:300,fit:'contain'});
 assert.deepEqual(imagePlacement(element,800,400),{x:0,y:50,width:400,height:200});
 element.fit='cover';const cover=imagePlacement(element,800,400);
 assert.equal(cover.width,400);assert.equal(cover.height,300);assert.equal(cover.crop?.height,400);
 assert.ok(Math.abs(cover.crop!.width-1600/3)<1e-9);assert.ok(Math.abs(cover.crop!.x-400/3)<1e-9);
 const centered=imagePlacement({...element,cropScale:2},800,400);
 assert.equal(centered.crop?.width,800/3);assert.equal(centered.crop?.height,200);assert.equal(centered.crop?.y,100);
 assert.equal(imagePlacement({...element,cropScale:2,cropX:0,cropY:0},800,400).crop?.x,0);
 const right=imagePlacement({...element,cropScale:2,cropX:1,cropY:1},800,400).crop!;
 assert.equal(right.x,800-right.width);assert.equal(right.y,400-right.height);
});
test('editable packages round-trip incomplete photo frames without requiring image bytes',async()=>{
 const project=createProject('Draft with photo frame',season);project.slides[0].elements=[newElement('image')];
 const blob=await exportPackage(project,[]);
 const restored=await importPackage(new File([blob],'draft.zip',{type:'application/zip'}),season);
 assert.equal(restored.slides[0].elements[0].type,'image');assert.equal(restored.slides[0].elements[0].assetId,undefined);
 assert.notEqual(restored.id,project.id);assert.equal(restored.version,0);
 await assert.rejects(exportSlide(project,0,[]),/riquadri fotografici/);
});
