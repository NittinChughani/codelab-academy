/* GearEx features: guided source walkthrough, color themes and course completion certificates. */
'use strict';
(() => {
  const LANG = {c:'C',cpp:'C++',py:'Python',js:'JavaScript',java:'Java',cs:'C#',sql:'SQL'};
  const safeLoad = () => { try {const x=JSON.parse(localStorage.getItem('gearex-certificates-v1')||'{}');return x && typeof x==='object' && !Array.isArray(x)?x:{};}catch{return {};} };
  const results=safeLoad();
  const saveResults=()=>{try{localStorage.setItem('gearex-certificates-v1',JSON.stringify(results));}catch{/* browser storage can be disabled */}};
  const qs=sel=>document.querySelector(sel);
  const element=(tag,cls,label)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(label!==undefined)n.textContent=String(label);return n;};
  const button=(label,fn,klass='button secondary compact')=>{const b=element('button',klass,label);b.type='button';b.addEventListener('click',fn);return b;};
  qs('#themeSelect').value=state.theme;
  qs('#themeSelect').addEventListener('change',event=>{state.theme=event.target.value;setTheme();persist();});
  let trace=[],index=0;
  const traceNote=(raw,lang)=>{
    const line=raw.trim();
    if(/^#(include|define)|^using\s+(System|namespace)|^import\s|^from\s/.test(line))return 'Setup/import: make a library or namespace available before later statements can use it.';
    if(/^SELECT\b/i.test(line))return 'SQL SELECT chooses which columns the query will return; the actual rows depend on the data and preceding clauses.';
    if(/\bWHERE\b/i.test(line))return 'SQL WHERE filters rows according to a predicate; no database is executed by the guided tracer.';
    if(/\b(JOIN|GROUP BY|ORDER BY)\b/i.test(line))return 'SQL operation: join, group or sort rows. Use Run code to inspect actual SQLite results.';
    if(/^(CREATE|INSERT|UPDATE|DELETE)\b/i.test(line))return 'SQL statement changes database schema or rows; this is a guided annotation, not a database execution.';
    if(/^(if|else|elif|switch|case)\b/.test(line))return 'Decision point: evaluate the condition in your head and follow the matching branch; guided mode does not calculate branch outcomes.';
    if(/^(for|while|do)\b/.test(line))return 'Loop: identify the starting value, exit condition and change each iteration. Guided mode does not unroll loops.';
    if(/\b(return)\b/.test(line))return 'Return: hand a value back to the caller, or finish the current method/function.';
    if(/\b(print|printf|println|WriteLine|console\.log|cout)\b/.test(line))return 'Output statement: calculate or resolve its arguments, then compare with the real compiler output.';
    if(/^(class|public class|struct|interface|def |function |async |static )/.test(line))return 'Declaration: introduces a type, function or method. Follow its body when it is invoked.';
    const assignment=line.match(/(?:^|;\s*)(?:(?:const|let|var|int|float|double|long|string|char|bool|String|boolean)\s+)?([A-Za-z_]\w*)\s*=\s*([^;]+);?$/);
    if(assignment)return 'Assignment: '+assignment[1]+' receives the expression '+assignment[2].replace(/;$/,'')+'. Track this value manually; expressions are not evaluated here.';
    if(line==='{'||line==='}'||line==='};')return 'Block boundary: brace scopes a section of code. Control flow determines when it runs.';
    return 'Read this line in context and identify what it declares, changes, or invokes. The real runtime is not simulated.';
  };
  function showTrace(){
    const box=qs('#traceSteps');box.replaceChildren();
    const label=qs('#traceProgress');label.textContent=trace.length?(index===0?'Ready · '+trace.length+' annotated steps':'Step '+index+' / '+trace.length):'No steps prepared';
    if(!trace.length){box.append(element('p','','Enter source code and choose Prepare trace.'));return;}
    const area=element('div','trace-list');
    trace.forEach((s,i)=>{const line=element('div','trace-line'+(index===i+1?' active':''),String(s.line).padStart(3,' ')+' │ '+s.raw);area.append(line);});
    box.append(area);
    box.append(element('p','trace-annotation',index===0?'Start with the first annotated statement. Click Next step to inspect it.':trace[index-1].note));
    qs('#traceBack').disabled=index<=0;qs('#traceNext').disabled=index>=trace.length;
  }
  function prepareTrace(){
    const source=qs('#traceSource').value.slice(0,24000),lang=qs('#traceLanguage').value;
    trace=source.split(/\r?\n/).map((raw,i)=>({line:i+1,raw,note:traceNote(raw,lang)})).filter(x=>x.raw.trim()&&!/^\/\/|^\/\*|^\*/.test(x.raw.trim())).slice(0,100);
    index=0;showTrace();
  }
  function setTraceCode(code,lang){
    qs('#traceLanguage').value=lang;qs('#traceSource').value=code;prepareTrace();
  }
  window.gearexTraceLesson=setTraceCode;
  qs('#traceFromEditor').addEventListener('click',()=>setTraceCode(qs('#codeEditor').value,qs('#editorLanguage').value));
  qs('#traceStart').addEventListener('click',prepareTrace);
  qs('#traceNext').addEventListener('click',()=>{if(index<trace.length){index++;showTrace();}});
  qs('#traceBack').addEventListener('click',()=>{if(index>0){index--;showTrace();}});
  qs('#traceReset').addEventListener('click',()=>{index=0;showTrace();});
  setTraceCode(examples.cpp.hello,'cpp');
  function course(lang){const lessons=LESSONS.filter(l=>l.lang===lang);return {lessons,done:lessons.filter(l=>state.completed.has(l.id)).length};}
  function percent(score,total){return total?Math.round(score/total*100):0;}
  function performance(score,total){const n=percent(score,total);return n>=90?'Outstanding':n>=80?'Excellent':n>=70?'Proficient':'Developing';}
  function awarded(lang){const record=results[lang];return !!(record && Number.isInteger(record.score) && Number.isInteger(record.total) && record.total>0 && percent(record.score,record.total)>=70 && course(lang).done===course(lang).lessons.length);}
  function renderCertificates(){
    const grid=qs('#certificateGrid');grid.replaceChildren();
    for(const [lang,label] of Object.entries(LANG)){
      const c=course(lang);const unlocked=c.lessons.length>0&&c.done===c.lessons.length;const cert=awarded(lang);
      const card=element('article','certificate-tile');
      card.append(element('span','eyebrow','GEAREX · '+label),element('h3','',cert?'✦ Certificate earned':unlocked?'Assessment unlocked':'🔒 Certificate locked'));
      card.append(element('p','',c.done+' of '+c.lessons.length+' lessons completed'));
      const track=element('div','progress-track'),fill=element('div','progress-fill');fill.style.width=percent(c.done,c.lessons.length)+'%';track.append(fill);card.append(track);
      card.append(element('p','',cert?'Earned '+results[lang].score+' / '+results[lang].total+' marks · '+performance(results[lang].score,results[lang].total):unlocked?'Complete the final assessment with at least 70% to earn your certificate.':'Finish every lesson in this language to unlock the assessment.'));
      if(cert)card.append(button('View certificate ↗',()=>viewCertificate(lang),'button primary compact'));
      else if(unlocked)card.append(button('Begin assessment →',()=>startExam(lang),'button primary compact'));
      else card.append(button('Continue learning →',()=>{state.roadmap=lang;renderRoadmap();location.hash='path';}));
      grid.append(card);
    }
  }
  window.gearexRenderCertificates=renderCertificates;
  window.gearexExportCertificates=()=>JSON.parse(JSON.stringify(results));
  window.gearexImportCertificates=entries=>{if(!entries||typeof entries!=='object'||Array.isArray(entries))return;for(const lang of Object.keys(LANG)){const row=entries[lang];if(!row||!Number.isInteger(row.score)||!Number.isInteger(row.total)||row.total<1||row.total>100||row.score<0||row.score>row.total||typeof row.date!=='string')continue;results[lang]={score:row.score,total:row.total,date:row.date.slice(0,10),name:typeof row.name==='string'?row.name.slice(0,60):''};}saveResults();renderCertificates();};
  function startExam(lang){
    const c=course(lang);if(!c.lessons.length||c.done!==c.lessons.length){renderCertificates();return;}
    const bank=QUESTIONS.filter(q=>q.lang===lang);
    const total=Math.min(20,bank.length);const exam=Array.from({length:total},(_,i)=>bank[Math.floor(i*bank.length/total)]);
    if(!exam.length)return;
    const box=qs('#certificateExam');box.hidden=false;box.replaceChildren();
    box.append(element('span','eyebrow',LANG[lang]+' · FINAL COURSE ASSESSMENT'),element('h3','',exam.length+' questions · '+exam.length+' total marks'));
    box.append(element('p','','Choose one answer for each question. One correct answer = one mark. Pass requirement: 70%. All answers are graded locally.'));
    const form=element('form','certificate-form');exam.forEach((q,i)=>{
      const field=element('fieldset','certificate-question');field.append(element('legend','',(i+1)+'. '+q.question));
      q.options.forEach((option,j)=>{
        const label=element('label');const input=document.createElement('input');input.type='radio';input.name='cert-question-'+i;input.value=String(j);input.required=true;label.append(input,document.createTextNode(option));field.append(label);
      });form.append(field);
    });
    const submit=element('button','button primary','Submit assessment');submit.type='submit';form.append(submit);
    form.addEventListener('submit',e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const submitted=new FormData(form);const answers=exam.map((q,i)=>Number(submitted.get('cert-question-'+i)));
      const score=exam.reduce((sum,q,i)=>sum+(answers[i]===q.answer?1:0),0),p=percent(score,exam.length);
      box.replaceChildren(element('h3','',p>=70?'Assessment passed!':'Assessment completed'),element('p','',score+' / '+exam.length+' marks · '+p+'% · '+performance(score,exam.length)));
      if(p>=70){
        if(!results[lang]||percent(score,exam.length)>percent(results[lang].score,results[lang].total)){
          results[lang]={score,total:exam.length,date:new Date().toISOString().slice(0,10)};
          saveResults();
        }
        box.append(button('Open your certificate ↗',()=>viewCertificate(lang),'button primary compact'));
      } else box.append(element('p','','Study the lessons again, then retake the assessment to improve your score.'));
      box.append(button('Retake assessment',()=>startExam(lang)));
      renderCertificates();box.scrollIntoView({behavior:'smooth',block:'start'});
    });
    box.append(form);box.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function viewCertificate(lang){
    if(!awarded(lang))return;
    qs('#certificateExam').hidden=true;
    const record=results[lang],box=qs('#certificateView');box.hidden=false;box.replaceChildren();
    const form=element('div','certificate-fields');
    const label=element('label','','Certificate recipient');const input=element('input');input.type='text';input.maxLength=60;input.autocomplete='name';input.placeholder='Enter your full name';
    input.value=record.name||'';label.append(input);form.append(label);
    const certificate=element('div','certificate-paper');
    const build=()=>{
      certificate.replaceChildren();
      certificate.append(element('div','cert-kicker','GEAREX · CREATOR-ISSUED ACHIEVEMENT'),element('h2','','Certificate of Completion'));
      certificate.append(element('p','','This recognizes the learning-path completion of'));
      certificate.append(element('div','cert-name',input.value.trim()||'Your name'));
      certificate.append(element('p','','for completing the '+LANG[lang]+' programming course and passing the final assessment.'));
      const stats=element('div','cert-meta');stats.append(element('span','','Course · '+LANG[lang]),element('span','','Marks · '+record.score+' / '+record.total),element('span','','Overall · '+percent(record.score,record.total)+'%'),element('span','','Performance · '+performance(record.score,record.total)));certificate.append(stats);
      certificate.append(element('div','cert-sign','Certified by creator · Nittin Chughani'));
      certificate.append(element('p','','Issued '+record.date+' · Self-paced course completion · Not an accredited qualification'));
    };
    input.addEventListener('input',build);build();
    form.append(button('Print / Save as PDF',()=>{
      const name=input.value.trim();
      if(name.length<2){input.focus();input.setCustomValidity('Enter a name of at least two characters.');input.reportValidity();return;}
      input.setCustomValidity('');record.name=name;saveResults();build();window.print();
    },'button primary compact'));
    box.append(form,certificate);box.scrollIntoView({behavior:'smooth',block:'start'});
  }
  renderCertificates();
  document.addEventListener('click',event=>{
    if(event.target.closest('#lessonContent button,#resetProgress,#importProgress,#certificateGrid button')){
      window.setTimeout(renderCertificates,0);
    }
  });
  window.addEventListener('hashchange',()=>{if(location.hash==='#certificate')renderCertificates();});
})();
