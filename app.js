{
  const D=window.RATIO;
  const ZH=document.documentElement.lang.startsWith('zh'),Z=(ZH&&D.zh)||{};
  const tr=(map,v)=>(map&&map[v])||v;
  const prov=D.prov;
  const max=Math.max(...prov.map(p=>p[1]));
  document.getElementById('prov').innerHTML=prov.map(([n,v])=>`<div class="row${n==='Alberta'||n==='Canada'?' hi':''}"><span>${tr(Z.prov,n)}</span><div class="bar" style="width:${(v/max*100).toFixed(1)}%"></div><span class="v">$${v.toFixed(2)}</span></div>`).join('');

  const rows=D.pay.map(r=>({...r,n:tr(Z.pay,r.n),al:tr(Z.pay,r.al),bl:tr(Z.pay,r.bl)}));
  const s=document.createElementNS('http://www.w3.org/2000/svg','svg');
  const box=document.getElementById('dumb');box.appendChild(s);
  const k=v=>'$'+Math.round(v/1000)+'K';
  const draw=()=>{
    const W=s.clientWidth,H=s.clientHeight,narrow=W<520;
    const L=narrow?12:120,R=narrow?40:56,T=narrow?40:30,B=36,max=600000;
    const x=v=>L+(W-L-R)*v/max;
    const step=(H-T-B)/rows.length;
    let g='';
    const ticks=narrow?[0,200000,400000,600000]:[0,100000,200000,300000,400000,500000,600000];
    ticks.forEach(t=>{g+=`<line x1="${x(t)}" x2="${x(t)}" y1="${T-10}" y2="${H-B}" stroke="var(--line)"/><text x="${x(t)}" y="${H-B+22}" text-anchor="middle" style="fill:var(--mute)">${k(t)}</text>`});
    rows.forEach((r,i)=>{
      const y=T+step*(i+.5);
      g+=narrow?`<text x="${L}" y="${y-26}" style="font-weight:600">${r.n}</text>`:`<text x="${L-16}" y="${y+5}" text-anchor="end" style="font-weight:600">${r.n}</text>`;
      g+=`<line x1="${x(r.a)}" x2="${x(r.b)}" y1="${y}" y2="${y}" stroke="var(--blue)" stroke-width="6" stroke-opacity=".35" stroke-linecap="round"/>`;
      g+=`<circle class="dot" cx="${x(r.a)}" cy="${y}" r="10" fill="var(--grey)"/><circle class="dot" cx="${x(r.b)}" cy="${y}" r="10" fill="var(--blue)"/>`;
      g+=`<text x="${x(r.a)}" y="${y+30}" text-anchor="middle">${k(r.a)}</text><text x="${x(r.b)}" y="${y+30}" text-anchor="middle" style="font-weight:600">${k(r.b)}</text>`;
      if(!narrow)g+=`<text x="${x(r.a)}" y="${y-18}" text-anchor="middle" style="fill:var(--mute);font-size:13px">${r.al}</text><text x="${x(r.b)}" y="${y-18}" text-anchor="middle" style="fill:var(--mute);font-size:13px">${r.bl}</text>`;
    });
    const y0=T+step*.5,y1=T+step*1.5;
    g+=`<line x1="${x(275000)}" x2="${x(275000)}" y1="${y0+12}" y2="${y1-12}" stroke="var(--ink)" stroke-dasharray="3 4"/>`;
    s.innerHTML=g;
  };
  new ResizeObserver(draw).observe(box);


  const law=D.law;
  const yrs=[2021,2022,2023,2024,2025];
  const q=document.getElementById('lq'),sel=document.getElementById('la'),ll=document.getElementById('ll'),pf=document.getElementById('prof');
  const areas=[...new Set(law.flatMap(l=>l.ar.map(a=>a[0])))].sort();
  sel.innerHTML+=areas.map(a=>`<option value="${a}">${tr(Z.areas,a)}</option>`).join('');
  let pick=0;
  const tot=l=>l.y.reduce((a,b)=>a+b,0);
  const prof=i=>{
    const l=law[i];if(!l){pf.innerHTML=`<p class="dek" style="margin:0">${ZH?'没有符合条件的律师，请换个名字或领域试试。':'No lawyer matches. Try another name or area.'}</p>`;return}
    const my=Math.max(...l.y),ma=l.ar[0][1];
    pf.innerHTML=`<div class="ph"><div><h3 class="ch">${l.n}</h3><p>${l.f} · ${l.c}</p></div><div style="text-align:right"><div class="big">${tot(l)}</div><span class="src" style="margin:0">${ZH?'2021–2025 年代理的裁决数':'decisions as counsel, 2021–2025'}</span></div></div>
    <div class="pg"><div><p class="h4">${ZH?'每年裁决数':'Decisions per year'}</p><div class="yr">${l.y.map(v=>`<div>${v}<i style="height:${v/my*80}%"></i></div>`).join('')}</div><div class="yl">${yrs.map(y=>`<span>${String(y).slice(2)}</span>`).join('')}</div></div>
    <div><p class="h4">${ZH?'主要业务领域':'Top areas of law'}</p><div class="rows">${l.ar.map((a,k)=>`<div class="row${k?'':' hi'}"><span>${tr(Z.areas,a[0])}</span><div class="bar" style="width:${a[1]/ma*100}%"></div><span class="v">${a[1]}</span></div>`).join('')}</div><p class="src">${ZH?'法院：':'Courts: '}${l.ct}</p></div></div>
    <p class="h4" style="margin-top:22px">${ZH?'近期裁决':'Recent decisions'}</p><ul class="rec" style="margin-top:0">${l.r.map(r=>`<li>${r[0]}<span>${r[1]}</span></li>`).join('')}</ul>`;
  };
  const list=()=>{
    const t=q.value.trim().toLowerCase(),a=sel.value;
    const hits=law.map((l,i)=>i).filter(i=>{const l=law[i];return(!t||(l.n+' '+l.f).toLowerCase().includes(t))&&(!a||l.ar.some(x=>x[0]===a))});
    if(!hits.includes(pick))pick=hits.length?hits[0]:-1;
    ll.innerHTML=hits.length?hits.map(i=>`<li><button type="button" data-i="${i}" aria-pressed="${i===pick}"><b>${law[i].n}</b><span>${law[i].f} · ${tot(law[i])}${ZH?' 份裁决':' decisions'}</span></button></li>`).join(''):`<li class="none">${ZH?'没有结果':'No matches'}</li>`;
    prof(pick);
  };
  ll.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;pick=+b.dataset.i;list()});
  q.addEventListener('input',list);sel.addEventListener('change',list);
  list();


  const pct=(a,b)=>a/b*100;
  const ALL=ZH?'九所学校':'Nine schools';
  const sc=D.schools.map(([n,a,b])=>[tr(Z.schools,n),pct(a,b)]);
  const ta=D.schools.reduce((s,x)=>s+x[1],0),tb=D.schools.reduce((s,x)=>s+x[2],0);
  sc.push([ALL,pct(ta,tb)]);
  const smax=Math.max(...sc.map(x=>x[1]));
  document.getElementById('schools').innerHTML=sc.map(([n,v])=>`<div class="row${n===ALL?' hi':''}"><span>${n}</span><div class="bar" style="width:${(v/smax*100).toFixed(1)}%"></div><span class="v">${v.toFixed(1)}%</span></div>`).join('');
  const omax=Math.max(...D.oneL.map(x=>x[1]));
  document.getElementById('onel').innerHTML=D.oneL.map(([y,v])=>`<div class="${y<2022?'g':''}">${v}<i style="height:${(v/omax*82).toFixed(1)}%"></i></div>`).join('');
  document.getElementById('onely').innerHTML=D.oneL.map(([y])=>`<span>${String(y).slice(2)}</span>`).join('');
  const tmax=Math.max(...D.tuition.map(x=>x[2])),money=v=>'$'+v.toLocaleString('en-CA');
  document.getElementById('tuition').innerHTML=D.tuition.map(([n,d,i])=>`<div class="row w"><span>${tr(Z.schools,n)}</span><div class="bar" style="width:${(d/tmax*100).toFixed(1)}%"></div><span class="v">${money(d)}</span></div><div class="row w b pair"><span></span><div class="bar" style="width:${(i/tmax*100).toFixed(1)}%"></div><span class="v">${money(i)}</span></div>`).join('');
  const L=D.ltb;
  document.getElementById('ltb-total').textContent=L.total.toLocaleString('en-CA');
  document.getElementById('ltb-figs').innerHTML=(Z.ltbFigs||L.figs).map(([v,t])=>`<div><b>${v}</b><span>${t}</span></div>`).join('');
  document.getElementById('ltb-quotes').innerHTML=L.quotes.map((q,i)=>`<div class="quote"><b>${(Z.quoteHeads||[])[i]||q.h}</b><blockquote>“${q.q}”</blockquote><a href="${q.u}">${q.f} · ${q.d}</a></div>`).join('');
  document.getElementById('ltb-filers').innerHTML=L.filers.map(([n,c])=>`<tr><td>${n}</td><td class="n">${c}</td></tr>`).join('');
  document.getElementById('lg').innerHTML=(Z.log||D.log).map(([d,t])=>`<li><time>${d}</time><span>${t}</span></li>`).join('');

  // Cases: Zhang v. Chen citation map
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ZC=D.zc,ZB=D.zcBodies,MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fmt=d=>{const[y,m,dd]=d.split('-');return ZH?`${y}年${+m}月${+dd}日`:`${+dd} ${MON[+m-1]} ${y}`};
  const bodyName=k=>ZH&&Z.bodies&&Z.bodies[k]?Z.bodies[k][0]:(ZB.find(b=>b[0]===k)||[k,k])[1];
  const ai=ZC.filter(r=>r[5]),outBC=ai.filter(r=>!/^BC/.test(r[1])).length;
  const tm=ai.filter(r=>r[1]==='TMOB').length;
  document.getElementById('zc-figs').innerHTML=(ZH?[[ai.length,'份裁决因虚构或 AI 生成的判例援引此案'],[outBC,'份来自卑诗省以外'],[tm,'份来自商标异议委员会，数量最多'],['2024年8月','首次被援引，距判决六个月']]:[[ai.length,'decisions cite it on fabricated or AI-generated authorities'],[outBC,'of them are outside British Columbia'],[tm,'from the Trademarks Opposition Board, the most of any body'],['Aug 2024','first citation, six months after the ruling']]).map(([v,t])=>`<div><b>${esc(v)}</b><span>${esc(t)}</span></div>`).join('');
  document.getElementById('zc-list').innerHTML=ZC.map(r=>`<tr><td class="d">${fmt(r[0])}</td><td>${esc(bodyName(r[1]))}</td><td><a href="${esc(r[4])}">${esc(r[2])}</a>${r[5]?'':` <span class="pill">${ZH?'与 AI 无关':'not about AI'}</span>`}</td><td class="c">${esc(r[3])}</td></tr>`).join('');
  const zs=document.createElementNS('http://www.w3.org/2000/svg','svg');
  const zbox=document.getElementById('zc');zbox.appendChild(zs);
  const t0=Date.parse('2024-01-01'),t1=Date.parse('2027-01-01'),origin=Date.parse('2024-02-20');
  const drawZC=()=>{
    const W=zs.clientWidth,H=zs.clientHeight,narrow=W<520;
    const L=narrow?12:W<900?160:272,R=narrow?28:40,T=narrow?56:48,B=34,r=narrow?6:7;
    const x=t=>L+(W-L-R)*(t-t0)/(t1-t0);
    const step=(H-T-B)/ZB.length;
    let g='';
    [2024,2025,2026,2027].forEach(y=>{const xx=x(Date.parse(y+'-01-01'));g+=`<line x1="${xx}" x2="${xx}" y1="${T-8}" y2="${H-B}" stroke="var(--line)"/>`;if(y<2027)g+=`<text x="${x(Date.parse(y+'-07-01'))}" y="${H-B+22}" text-anchor="middle" style="fill:var(--mute)">${y}</text>`});
    const ox=x(origin);
    g+=`<line x1="${ox}" x2="${ox}" y1="${T-20}" y2="${H-B}" stroke="var(--ink)" stroke-dasharray="3 4"/>`;
    g+=`<text x="${ox+6}" y="${T-26}" style="font-weight:600">${ZH?(narrow?'判决，2024年2月':'Zhang v. Chen，2024年2月20日'):(narrow?'Ruling, Feb 2024':'Zhang v. Chen, 20 Feb 2024')}</text>`;
    ZB.forEach(([k,full,short],i)=>{
      if(ZH&&Z.bodies&&Z.bodies[k])[full,short]=Z.bodies[k];
      const y=T+step*(i+.5),rows=ZC.filter(z=>z[1]===k),n=rows.filter(z=>z[5]).length;
      g+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="var(--line)"/>`;
      g+=narrow?`<text x="${L}" y="${y-3*r-10}" style="font-weight:600;font-size:13px">${esc(short)}</text>`:`<text x="${L-14}" y="${y+5}" text-anchor="end" style="font-weight:600">${esc(W<900?short:full)}</text>`;
      g+=`<text x="${W-R+10}" y="${y+5}" style="fill:var(--mute);font-variant-numeric:tabular-nums">${rows.length}</text>`;
      const placed=[];
      rows.forEach(z=>{
        const cx=x(Date.parse(z[0]));let dy=0;
        for(const o of [0,-1,1,-2,2]){dy=o*(2*r+1);if(!placed.some(p=>Math.hypot(p[0]-cx,p[1]-dy)<2*r+1))break}
        placed.push([cx,dy]);
        g+=`<a href="${esc(z[4])}" aria-label="${esc(z[2]+', '+z[3]+', '+fmt(z[0]))}"><circle cx="${cx}" cy="${y+dy}" r="${r}" fill="${z[5]?'var(--blue)':'var(--grey)'}" stroke="var(--bg)" stroke-width="1.5"><title>${esc(z[2]+' · '+z[3]+' · '+fmt(z[0]))}</title></circle></a>`;
      });
    });
    zs.innerHTML=g;
  };
  const zro=new ResizeObserver(drawZC);zro.observe(zbox);

  const links=[...document.querySelectorAll('nav a.l')];
  const views=[...document.querySelectorAll('.view')];
  const route=()=>{
    const id=(location.hash||'#home').slice(1);
    const cur=views.some(v=>v.id===id)?id:'home';
    views.forEach(v=>v.hidden=v.id!==cur);
    links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur));
    window.scrollTo(0,0);
  };
  window.addEventListener('hashchange',route);
  route();

  // Newsletter: Buttondown username in data.js (newsletter). Empty = not open yet.
  const NL=D.newsletter;
  document.querySelectorAll('form.nl').forEach(f=>{
    const msg=f.querySelector('.nl-msg'),btn=f.querySelector('button'),inp=f.querySelector('input');
    if(!NL){inp.disabled=true;btn.disabled=true;msg.textContent=ZH?'订阅即将开放。':'Sign-up opens soon.';return}
    f.addEventListener('submit',async e=>{
      e.preventDefault();
      const fd=new FormData();fd.append('email',inp.value);fd.append('embed','1');fd.append('tag',f.dataset.tag||'newsletter');
      btn.disabled=true;msg.textContent=ZH?'提交中…':'Sending…';
      try{await fetch(`https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(NL)}`,{method:'POST',body:fd,mode:'no-cors'});
        msg.textContent=ZH?'谢谢！请到邮箱点击确认链接。':'Thanks! Check your inbox to confirm.';f.reset();
      }catch(err){msg.textContent=ZH?'提交失败，请稍后再试。':'Something went wrong. Please try again.'}
      btn.disabled=false;
    });
  });
}
