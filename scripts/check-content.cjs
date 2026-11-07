'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const source = ['data.js', 'gearex-courses.js', 'challenges.js', 'projects.js'].map(name => fs.readFileSync(path.join(root, 'assets', name), 'utf8')).join('\n');
const data = vm.runInNewContext(source + '\n({LESSONS,QUESTIONS,CHALLENGES,PROJECTS})');
const {LESSONS, QUESTIONS, CHALLENGES, PROJECTS} = data;
function checkUnique(name, list) {
  const seen = new Set();
  for (const row of list) {
    assert.equal(typeof row.id,'string',`${name}: id should be a string`);
    assert.ok(!seen.has(row.id), `${name}: duplicate ID ${row.id}`);
    seen.add(row.id);
    assert.ok(['c','cpp','py','js','java','cs','sql'].includes(row.lang),`${name}: invalid language in ${row.id}`);
    const label = name==='Questions' ? row.question : row.title;
    assert.ok(typeof label==='string'&&label.length>3,`${name}: missing text in ${row.id}`);
  }
}
checkUnique('Lessons',LESSONS);checkUnique('Questions',QUESTIONS);checkUnique('Challenges',CHALLENGES);checkUnique('Projects',PROJECTS);
for (const l of LESSONS) {
  assert.ok(Array.isArray(l.points)&&l.points.length>=2,`${l.id}: missing teaching points`);
  for(const key of ['intro','description','code','challenge'])assert.ok(typeof l[key]==='string'&&l[key].length>10,`${l.id}: missing ${key}`);
}
for(const q of QUESTIONS) {
  assert.ok(Array.isArray(q.options)&&q.options.length===4,`${q.id}: quiz needs 4 answers`);
  assert.ok(new Set(q.options).size===4,`${q.id}: duplicate quiz choices`);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,`${q.id}: invalid correct answer`);
  assert.ok(q.explanation.length>15,`${q.id}: explanation too short`);
}
for (const c of CHALLENGES) {
  assert.ok(['Easy','Medium','Hard'].includes(c.level),`${c.id}: invalid difficulty`);
  assert.ok(Array.isArray(c.samples)&&c.samples.length>=2,`${c.id}: need two sample cases`);
  for(const s of c.samples)assert.ok(typeof s.input==='string'&&typeof s.output==='string',`${c.id}: invalid sample`);
  assert.ok(c.solution.includes('main('),`${c.id}: no complete source solution`);
  assert.ok(typeof c.hint==='string'&&c.hint.length>10,`${c.id}: missing hint`);
}
for(const p of PROJECTS){assert.ok(p.steps.length>=3&&p.acceptance.length>=2&&p.starter.length>30,`${p.id}: missing project guidance`);}
assert.equal(LESSONS.length,91);assert.equal(QUESTIONS.length,113);assert.equal(CHALLENGES.length,138);assert.equal(PROJECTS.length,12);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for (const selector of ['lessonGrid','challengeGrid','quizContent','codeEditor','compilerOutput','visualContent','dashboardLessons','projectContent','themeSelect','traceSource','traceSteps','certificateGrid','certificateExam','certificateView'])assert.ok(html.includes(`id="${selector}"`),`Missing DOM node ${selector}`);
for (const filename of ['data.js','gearex-courses.js','challenges.js','projects.js','app.js','gearex-features.js'])assert.ok(html.includes(`assets/${filename}`),`Missing script tag ${filename}`);
console.log(`Content OK: ${LESSONS.length} lessons, ${QUESTIONS.length} quiz questions, ${CHALLENGES.length} challenges, ${PROJECTS.length} projects.`);

const languages=['c','cpp','py','js','java','cs','sql'];
for(const lang of languages){
 const course=LESSONS.filter(x=>x.lang===lang),bank=QUESTIONS.filter(x=>x.lang===lang);
 assert.ok(course.length>=8,lang+': course needs at least eight lessons');
 assert.ok(bank.length>=8,lang+': assessment requires at least eight questions');
}
for(const file of ['data.js','gearex-courses.js','challenges.js','projects.js','app.js','gearex-features.js']){
 new vm.Script(fs.readFileSync(path.join(root,'assets',file),'utf8'),{filename:file});
}
for(const theme of ['cyberpunk','quantum','synthwave','matrix','hologram']) {
 assert.ok(html.includes('value="'+theme+'"'),'Theme option missing: '+theme);
 assert.ok(fs.readFileSync(path.join(root,'assets','style.css'),'utf8').includes('data-theme="'+theme+'"'),'Theme CSS missing: '+theme);
}
const app=fs.readFileSync(path.join(root,'assets','app.js'),'utf8');
assert.ok(!app.includes("'-std=c++17 -Wall -Wextra'"),'Do not reintroduce the combined compiler flag error');
assert.ok(app.includes('Object.assign(examples,GEAREX_STARTERS)'),'Extra language starter templates missing');
console.log('GearEx validation OK: seven courses, five themes, editor, tracer and certificate views present.');
