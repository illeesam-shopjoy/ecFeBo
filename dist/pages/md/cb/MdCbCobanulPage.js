function fnGenDescText(a,r,i,b){const p=[];for(let f=1;f<=a;f++){const o=[];for(let m=1;m<=r;m++){const h=i[f+"_"+m],l=h?h.symbolId:null;if(!l)continue;const g=o[o.length-1];g&&g.symbolId===l?g.count++:o.push({symbolId:l,count:1})}if(o.length===0)continue;const s=o.map(m=>{const h=b[m.symbolId];return(h?h.symbolNm:"?")+" "+m.count+"\uCF54"}).join(", ");p.push(f+"\uB2E8: "+s)}return p.join(`
`)}const CB_SVG_STROKE='fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';function fnPostHead(a,r,i){let f=`<line x1="${a}" y1="20" x2="${a}" y2="6"/>`;f+=i?`<line x1="${a-4}" y1="6" x2="${a+4}" y2="6"/>`:`<line x1="${a-2}" y1="6" x2="${a+2}" y2="6"/>`;for(let o=0;o<r;o++){const s=10+o*3.4;f+=`<line x1="${a-2.6}" y1="${s+1.6}" x2="${a+2.6}" y2="${s-1.6}"/>`}return f}function fnCross(a){let r='<line x1="6" y1="20" x2="18" y2="7"/><line x1="18" y1="20" x2="6" y2="7"/>';for(let i=0;i<a;i++){const b=8+i*3;r+=`<line x1="${9-i}" y1="${b}" x2="${13-i}" y2="${b-3}"/>`,r+=`<line x1="${15+i}" y1="${b}" x2="${11+i}" y2="${b-3}"/>`}return r}function fnFanUp(a,r){const i={x:12,y:20},b=a===2?5:7;let p="";for(let f=0;f<a;f++){const o=12+(f-(a-1)/2)*b,s=7;p+=`<line x1="${i.x}" y1="${i.y}" x2="${o}" y2="${s}"/>`,r==="x"?p+=`<line x1="${o-2}" y1="${s-2}" x2="${o+2}" y2="${s+2}"/><line x1="${o+2}" y1="${s-2}" x2="${o-2}" y2="${s+2}"/>`:r==="bar"?p+=`<line x1="${o-2.5}" y1="${s}" x2="${o+2.5}" y2="${s}"/>`:r==="tick"&&(p+=`<line x1="${o-2.5}" y1="${s}" x2="${o+2.5}" y2="${s}"/>`,p+=`<line x1="${o-1.5}" y1="${s+4}" x2="${o+1.5}" y2="${s+1}"/>`)}return p}function fnFanDown(a,r){const i={x:12,y:7},b=a>=4?8:a===3?6.5:5;let p=`<line x1="${i.x-4}" y1="${i.y}" x2="${i.x+4}" y2="${i.y}"/>`;for(let f=0;f<a;f++){const o=12+(f-(a-1)/2)*b;p+=`<line x1="${o}" y1="20" x2="${i.x}" y2="${i.y}"/>`,r==="x"?p+=`<line x1="${o-2}" y1="13" x2="${o+2}" y2="17"/><line x1="${o+2}" y1="13" x2="${o-2}" y2="17"/>`:r==="tick"&&(p+=`<line x1="${o-1.8}" y1="15" x2="${o+1.8}" y2="12"/>`)}return p}function fnHook(a,r){return fnPostHead(12,a,a===0).replace('y1="20" x2="12"','y1="16" x2="12"')+`<path d="M12 16 A4 4 0 1 ${r==="F"?1:0} ${r==="F"?15:9} 21"/>`}function fnBobble(a,r){let i='<path d="M12 20 C7 17 7 9 12 6 C17 9 17 17 12 20 Z"/>';for(let b=0;b<a;b++){const p=12+(b-(a-1)/2)*(8/Math.max(a-1,1));i+=`<line x1="${p}" y1="18.5" x2="${p}" y2="7.5"/>`}return i+=r?'<ellipse cx="12" cy="5" rx="2.4" ry="1.3"/>':'<line x1="9" y1="6" x2="15" y2="6"/>',i}function fnRing(){return'<circle cx="12" cy="19" r="2.6"/>'}function fnSymbolSvg(a){switch(a){case"CHAIN":return'<ellipse cx="12" cy="13" rx="7" ry="4"/>';case"SLIP":return'<ellipse cx="12" cy="13" rx="5" ry="3" fill="currentColor"/>';case"SC":return fnCross(0);case"HDC":return fnPostHead(12,0,!0);case"DC":return fnPostHead(12,1,!1);case"TR":return fnPostHead(12,2,!1);case"DTR":return fnPostHead(12,3,!1);case"TR4":return fnPostHead(12,4,!1);case"INC":return fnFanUp(2,"plain");case"DEC":return fnFanDown(2,"plain");case"SCINC2":return fnFanUp(2,"x");case"SCINC3":return fnFanUp(3,"x");case"SCDEC2":return fnFanDown(2,"x");case"SCDEC3":return fnFanDown(3,"x");case"SCFP":return fnCross(0);case"SCBP":return fnCross(0);case"HDCINC3":return fnFanUp(3,"bar");case"HDCDEC2":return fnFanDown(2,"plain");case"HDCDEC3":return fnFanDown(3,"plain");case"DCINC2":return fnFanUp(2,"tick");case"DCINC3":return fnFanUp(3,"tick");case"DCDEC2":return fnFanDown(2,"tick");case"DCDEC3":return fnFanDown(3,"tick");case"DCDEC4":return fnFanDown(4,"tick");case"HDCFP":return fnHook(0,"F");case"HDCBP":return fnHook(0,"B");case"DCFP":return fnHook(1,"F");case"DCBP":return fnHook(1,"B");case"HDCCROSS":return fnCross(0);case"DCCROSS":return fnCross(1);case"DCCROSSR":return fnCross(1);case"DCCROSSL":return fnCross(1);case"TRCROSS":return fnCross(2);case"DCPUFF3":return fnBobble(3,!1);case"DCPUFF3V":return fnBobble(3,!1)+'<circle cx="12" cy="13" r="1" fill="currentColor"/>';case"TRPUFF5":return fnBobble(5,!1);case"DCPOP5":return fnBobble(5,!0);case"TRPOP6":return fnBobble(6,!0);case"DCFAN5":return fnFanUp(5,"bar");case"SHELL":return fnFanUp(5,"bar");case"DCXST":return fnCross(1);case"TRXST":return fnCross(2);case"BOBBLEDECO":return'<circle cx="12" cy="13" r="3.2"/><line x1="12" y1="6" x2="12" y2="9.5"/><line x1="12" y1="16.5" x2="12" y2="20"/><line x1="6" y1="13" x2="9" y2="13"/><line x1="15" y1="13" x2="18" y2="13"/>';case"PICOT":return'<circle cx="12" cy="15" r="3"/><line x1="12" y1="12" x2="12" y2="6"/>';case"SCRING":return fnCross(0)+fnRing();case"DCRING":return fnPostHead(12,1,!1)+fnRing();default:return null}}function fnMagicRingIcon(){let f="";for(let o=0;o<=30;o++){const s=o/30,m=s*1.6*2*Math.PI-Math.PI/2,h=s*7,l=(12+h*Math.cos(m)).toFixed(1),g=(12+h*Math.sin(m)).toFixed(1);f+=(o===0?"M":"L")+l+","+g+" "}return`<svg viewBox="0 0 24 24" class="cb-sym-svg" ${CB_SVG_STROKE}><path d="${f.trim()}"/></svg>`}const CB_THUMB_CELL_PX=24;function fnSizeIconSvg(a,r){return a.replace('viewBox="0 0 24 24"',`viewBox="0 0 24 24" width="${r}" height="${r}"`)}function fnBuildGridThumbSvg(a,r,i,b){const p=CB_THUMB_CELL_PX,f=r*p,o=a*p;let s="";for(let m=1;m<=a;m++)for(let h=1;h<=r;h++){const l=(h-1)*p,g=(m-1)*p,R=i[m+"_"+h],D=R&&R.colorHex?R.colorHex:"#ffffff";s+=`<rect x="${l}" y="${g}" width="${p}" height="${p}" fill="${D}" stroke="#e2e2e2" stroke-width="1"/>`;const x=R&&R.symbolId?b[R.symbolId]:null,w=x&&x.symbolCd?fnSymbolSvg(x.symbolCd):null;if(w){const T=p-4;s+=`<g transform="translate(${l+2},${g+2})">${fnSizeIconSvg(`<svg viewBox="0 0 24 24" ${CB_SVG_STROKE}>${w}</svg>`,T)}</g>`}}return{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${o}" viewBox="0 0 ${f} ${o}"><rect width="${f}" height="${o}" fill="#ffffff"/>${s}</svg>`,w:f,h:o}}function fnBuildRoundThumbSvg(a){const{box:r,half:i,rounds:b,start:p}=a;let f="";return b.forEach(o=>{f+=`<circle cx="${i}" cy="${i}" r="${o.radius}" fill="none" stroke="#ddd" stroke-width="1" stroke-dasharray="3 3"/>`,o.points.forEach(s=>{const m=i+s.x,h=i+s.y;s.svg?f+=`<g transform="translate(${m-11},${h-11})">${fnSizeIconSvg(s.svg,22)}</g>`:f+=`<text x="${m}" y="${h+4}" text-anchor="middle" font-size="13" font-weight="700" fill="#333">${s.char}</text>`})}),p&&(f+=`<circle cx="${i}" cy="${i}" r="10" fill="#c9a96e" opacity="0.3"/>`),{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" viewBox="0 0 ${r} ${r}"><rect width="${r}" height="${r}" fill="#fafafa"/>${f}</svg>`,w:r,h:r}}function fnSvgToPngBlob(a,r,i){return new Promise((b,p)=>{const f=URL.createObjectURL(new Blob([a],{type:"image/svg+xml;charset=utf-8"})),o=new Image;o.onload=()=>{const s=document.createElement("canvas");s.width=r,s.height=i;const m=s.getContext("2d");m.fillStyle="#ffffff",m.fillRect(0,0,r,i),m.drawImage(o,0,0,r,i),URL.revokeObjectURL(f),s.toBlob(h=>h?b(h):p(new Error("\uCE94\uBC84\uC2A4 \uBCC0\uD658 \uC2E4\uD328")),"image/png")},o.onerror=s=>{URL.revokeObjectURL(f),p(s)},o.src=f})}function fnParseDescText(a,r){const i={};r.forEach(m=>{i[m.symbolNm]=m.symbolId});const b={};let p=0,f=0,o=0;return(a||"").split(`
`).map(m=>m.trim()).filter(Boolean).forEach((m,h)=>{const l=m.match(/^(\d+)\s*단\s*[:：]\s*(.+)$/),g=l?Number(l[1]):h+1,R=l?l[2]:m;p=Math.max(p,g);let D=0;R.split(",").forEach(x=>{if(x=x.trim(),!x)return;const w=x.match(/^(.+?)\s*(\d+)\s*코$/);if(!w){o++;return}const $=i[w[1].trim()];if(!$){o++;return}const T=Number(w[2]);for(let E=0;E<T;E++)D++,b[g+"_"+D]={symbolId:$,colorHex:null}}),f=Math.max(f,D)}),{cells:b,rowCount:p,maxCol:f,unmatched:o}}function fnParseRoundText(a,r){const i={};r.forEach(o=>{i[o.symbolNm]=o.symbolId});let b=null;const p=[];return(a||"").split(`
`).map(o=>o.trim()).filter(Boolean).forEach(o=>{const s=o.match(/^([^:：]+)[:：]\s*(.+)$/);if(!s)return;const m=s[1].trim(),h=s[2].trim();if(m==="\uC2DC\uC791"){const x=h.match(/(\d+)\s*$/);b={type:/매직\s*링|MR\b/i.test(h)?"magicring":"chain",total:x?Number(x[1]):0};return}const l=Number(m.replace(/[^0-9]/g,""));if(!l)return;const g=[],R=x=>{if(x=x.trim(),!x)return;const w=x.match(/^(.+?)\s*(\d+)\s*코?\s*$/),$=w?w[1].trim():x,T=w?Number(w[2]):1;for(let E=0;E<T;E++)g.push({symbolNm:$,symbolId:i[$]||null})};let D=!1;h.replace(/\(([^)]+)\)\s*\*\s*(\d+)/g,(x,w,$)=>{D=!0;const T=Number($),E=w.split(",");for(let M=0;M<T;M++)E.forEach(R);return x}),D||h.split(",").forEach(R),g.length>0&&p.push({roundNo:l,items:g,total:g.length})}),p.sort((o,s)=>o.roundNo-s.roundNo),{start:b,rounds:p}}const PRESET_COLORS=["#333333","#ffffff","#a8a8a8","#e2a79c","#f2c199","#f5e08a","#a8d8b9","#8fd9c4","#a8d0e6","#9fb3c8","#cbb2d9","#f4b8d0","#f0b98a","#c3cbcc","#e8e9ec","#e3cfa3","#c9ab8c","#f7e9c8","#c9c5fe","#9be8d4"],GRID_PRESETS=[{label:"10\xD712",row:10,col:12},{label:"15\xD720",row:15,col:20},{label:"20\xD730",row:20,col:30},{label:"30\xD740",row:30,col:40}],DESC_EXAMPLES=[{id:"basic",label:"\uAE30\uBCF8 \uC0AC\uAC01\uD615",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 10\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 10\uCF54
4\uB2E8: \uC9E7\uC740\uB728\uAE30 10\uCF54`},{id:"incdec",label:"\uB298\uB9BC\xB7\uBAA8\uC544\uB728\uAE30",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 8\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30 8\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 8\uCF54, \uC9E7\uC740\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 4\uCF54`},{id:"stripe",label:"\uC904\uBB34\uB2AC",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 12\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 12\uCF54`},{id:"widen",label:"\uC810\uC810 \uB113\uC5B4\uC9C0\uB294 \uC0AC\uAC01\uD615",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 6\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 6\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 3\uCF54, 2\uCF54\uB298\uB9AC\uAE30 3\uCF54
4\uB2E8: \uC9E7\uC740\uB728\uAE30 6\uCF54, 2\uCF54\uB298\uB9AC\uAE30 3\uCF54`},{id:"narrow",label:"\uC810\uC810 \uC881\uC544\uC9C0\uB294 \uC0AC\uAC01\uD615",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 12\uCF54
3\uB2E8: 2\uCF54\uBAA8\uC544\uB728\uAE30 6\uCF54
4\uB2E8: 2\uCF54\uBAA8\uC544\uB728\uAE30 3\uCF54`},{id:"hdcbasic",label:"\uAE34\uB728\uAE30 \uAE30\uBCF8",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uAE34\uB728\uAE30 10\uCF54
3\uB2E8: \uAE34\uB728\uAE30 10\uCF54`},{id:"dcbasic",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uAE30\uBCF8",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 10\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 10\uCF54`},{id:"trmix",label:"\uB450\uAE38\uAE34\uB728\uAE30 \uD63C\uD569",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54
2\uB2E8: \uB450\uAE38\uAE34\uB728\uAE30 6\uCF54, \uD55C\uAE38\uAE34\uB728\uAE30 6\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 12\uCF54`},{id:"rib",label:"\uB9AC\uBE0C(\uC55E\uB4A4 \uAC78\uC5B4\uB728\uAE30)",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 10\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 5\uCF54, \uC9E7\uC740\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 5\uCF54`},{id:"scinc3",label:"\uC9E7\uC740\uB728\uAE30 3\uCF54 \uB298\uB9BC\xB7\uBAA8\uC544\uB728\uAE30",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 9\uCF54
2\uB2E8: \uC9E7\uC740\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30 9\uCF54
3\uB2E8: \uC9E7\uC740\uB728\uAE30 9\uCF54, \uC9E7\uC740\uB728\uAE30 3\uCF54 \uBAA8\uC544\uB728\uAE30 3\uCF54`},{id:"hdcgrow",label:"\uAE34\uB728\uAE30 \uB298\uB9BC\xB7\uBAA8\uC544\uB728\uAE30",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 9\uCF54
2\uB2E8: \uAE34\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30 9\uCF54
3\uB2E8: \uAE34\uB728\uAE30 9\uCF54, \uAE34\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 4\uCF54`},{id:"dcgrow",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC\xB7\uBAA8\uC544\uB728\uAE30",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 8\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30 8\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 8\uCF54, \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 4\uCF54`},{id:"dcdec4",label:"4\uCF54\uBAA8\uC544\uB728\uAE30 \uB9C8\uBB34\uB9AC",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 16\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 16\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 4\uCF54 \uBAA8\uC544\uB728\uAE30 4\uCF54`},{id:"crossrow",label:"\uAD50\uCC28\uBB34\uB2AC \uC904",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54
2\uB2E8: \uAE34\uB728\uAE30 12\uCF54
3\uB2E8: \uAE34\uB728\uAE30 1\uCF54 \uAD50\uCC28\uB728\uAE30 6\uCF54`},{id:"crossrl",label:"\uC624\uB978\uCABD\xB7\uC67C\uCABD \uAD50\uCC28 \uB9AC\uB4EC",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 12\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 \uC624\uB978\uCABD \uC704 \uAD50\uCC28\uB728\uAE30 3\uCF54, \uD55C\uAE38\uAE34\uB728\uAE30 \uC67C\uCABD \uC704 \uAD50\uCC28\uB728\uAE30 3\uCF54`},{id:"trcross",label:"\uB450\uAE38\uAE34\uB728\uAE30 \uAD50\uCC28",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uB450\uAE38\uAE34\uB728\uAE30 10\uCF54
3\uB2E8: \uB450\uAE38\uAE34\uB728\uAE30 1\uCF54 \uAD50\uCC28\uB728\uAE30 5\uCF54`},{id:"puffrow",label:"\uAD6C\uC2AC\uB728\uAE30 \uC904\uBB34\uB2AC",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 10\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uAD6C\uC2AC\uB728\uAE30 5\uCF54, \uC0AC\uC2AC\uB728\uAE30 5\uCF54`},{id:"puffv",label:"\uBCC0\uD615\uAD6C\uC2AC \uAC15\uC870",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 8\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 8\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uBCC0\uD615\uAD6C\uC2AC\uB728\uAE30 4\uCF54, \uC9E7\uC740\uB728\uAE30 4\uCF54`},{id:"popcornrow",label:"\uD31D\uCF58\uBB34\uB2AC \uC904",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 10\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 10\uCF54
3\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 5\uCF54 \uD31D\uCF58\uB728\uAE30 5\uCF54, \uC0AC\uC2AC\uB728\uAE30 5\uCF54`},{id:"fanshell",label:"\uC194\uC78E\xB7\uC870\uAC1C\uBB34\uB2AC \uD63C\uD569",text:`1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 16\uCF54
2\uB2E8: \uD55C\uAE38\uAE34\uB728\uAE30 5\uC78E \uC194\uC78E\uB728\uAE30 4\uCF54, \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30 4\uCF54`}],ROUND_EXAMPLES=[{id:"basic",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uAE30\uBCF8 \uC6D0\uD615(\uB3C4\uB11B)",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: \uC9E7\uC740\uB728\uAE30 6
3: \uC9E7\uC740\uB728\uAE30 6`},{id:"inc",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uD45C\uC900 \uC99D\uD3B8(\uBAA8\uD2F0\uBE0C)",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: 2\uCF54\uB298\uB9AC\uAE30 6
3: (\uC9E7\uC740\uB728\uAE30, 2\uCF54\uB298\uB9AC\uAE30)*6
4: (\uC9E7\uC740\uB728\uAE30 2\uCF54, 2\uCF54\uB298\uB9AC\uAE30)*6`},{id:"tube",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uD1B5 \uC6D0\uD615(\uBAA8\uC790 \uC606\uBA74)",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uC9E7\uC740\uB728\uAE30 8
2: \uC9E7\uC740\uB728\uAE30 8
3: \uC9E7\uC740\uB728\uAE30 8
4: \uC9E7\uC740\uB728\uAE30 8
5: \uC9E7\uC740\uB728\uAE30 8`},{id:"crownclose",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uC815\uC218\uB9AC \uB9C8\uBB34\uB9AC(\uBAA8\uC544\uB728\uAE30)",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: 2\uCF54\uB298\uB9AC\uAE30 6
3: (\uC9E7\uC740\uB728\uAE30, 2\uCF54\uB298\uB9AC\uAE30)*6
4: \uC9E7\uC740\uB728\uAE30 18
5: 2\uCF54\uBAA8\uC544\uB728\uAE30 9`},{id:"chainstart",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uC0AC\uC2AC \uC2DC\uC791 \uAE30\uBCF8",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: \uC9E7\uC740\uB728\uAE30 6`},{id:"slipjoin",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uBE7C\uB728\uAE30 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: \uBE7C\uB728\uAE30 6`},{id:"hdcbasic2",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uAE34\uB728\uAE30 \uC6D0\uD615(\uB9E4\uC9C1\uB9C1)",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uAE34\uB728\uAE30 8
2: \uAE34\uB728\uAE30 8`},{id:"dcbasic2",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uC6D0\uD615(\uB9E4\uC9C1\uB9C1)",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: \uD55C\uAE38\uAE34\uB728\uAE30 8`},{id:"trbasic",group:"1. \uAE30\uBCF8 \uB728\uAE30",label:"\uB450\uAE38\uAE34\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uB450\uAE38\uAE34\uB728\uAE30 8
2: \uB450\uAE38\uAE34\uB728\uAE30 8`},{id:"rib",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uB9AC\uBE0C \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uC9E7\uC740\uB728\uAE30 8
2: (\uC9E7\uC740\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30, \uC9E7\uC740\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30)*4`},{id:"scinc2motif",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 2\uCF54 \uB298\uB9BC \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30 6
2: (\uC9E7\uC740\uB728\uAE30, \uC9E7\uC740\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30)*6`},{id:"scinc3motif",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 3\uCF54 \uB298\uB9BC \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 4
1: \uC9E7\uC740\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30 4
2: (\uC9E7\uC740\uB728\uAE30 2\uCF54, \uC9E7\uC740\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30)*4`},{id:"scdec2close",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 2\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 12
1: \uC9E7\uC740\uB728\uAE30 12
2: \uC9E7\uC740\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 6`},{id:"scdec3close2",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 3\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 12
1: \uC9E7\uC740\uB728\uAE30 12
2: \uC9E7\uC740\uB728\uAE30 3\uCF54 \uBAA8\uC544\uB728\uAE30 4`},{id:"scfpring",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uC9E7\uC740\uB728\uAE30 8
2: \uC9E7\uC740\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 8`},{id:"scbpring",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uC9E7\uC740\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uC9E7\uC740\uB728\uAE30 8
2: \uC9E7\uC740\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 8`},{id:"ribwide",group:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",label:"\uB113\uC740 \uB9AC\uBE0C \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 12
1: \uC9E7\uC740\uB728\uAE30 12
2: (\uC9E7\uC740\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 3\uCF54, \uC9E7\uC740\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 3\uCF54)*2`},{id:"hdcinc3motif",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uAE34\uB728\uAE30 3\uCF54 \uB298\uB9BC \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 4
1: \uAE34\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30 4
2: (\uAE34\uB728\uAE30 2\uCF54, \uAE34\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30)*4`},{id:"hdcdec2close",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uAE34\uB728\uAE30 2\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 10
1: \uAE34\uB728\uAE30 10
2: \uAE34\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 5`},{id:"hdcdec3close2",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uAE34\uB728\uAE30 3\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 9
1: \uAE34\uB728\uAE30 9
2: \uAE34\uB728\uAE30 3\uCF54 \uBAA8\uC544\uB728\uAE30 3`},{id:"dcinc2motif",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB9BC \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30 6
2: (\uD55C\uAE38\uAE34\uB728\uAE30, \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30)*6`},{id:"dcinc3motif",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uB298\uB9BC \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 4
1: \uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30 4
2: (\uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54, \uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uB298\uB824\uB728\uAE30)*4`},{id:"dcdec2close",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 10
1: \uD55C\uAE38\uAE34\uB728\uAE30 10
2: \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uBAA8\uC544\uB728\uAE30 5`},{id:"dcdec3close2",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 9
1: \uD55C\uAE38\uAE34\uB728\uAE30 9
2: \uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uBAA8\uC544\uB728\uAE30 3`},{id:"dcdec4close",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 4\uCF54\uBAA8\uC544 \uB9C8\uBB34\uB9AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: \uD55C\uAE38\uAE34\uB728\uAE30 4\uCF54 \uBAA8\uC544\uB728\uAE30 2`},{id:"dcgrowmotif2",group:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uC99D\uD3B8 \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30 6
2: (\uD55C\uAE38\uAE34\uB728\uAE30, \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30)*6
3: (\uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54, \uD55C\uAE38\uAE34\uB728\uAE30 2\uCF54 \uB298\uB824\uB728\uAE30)*6`},{id:"cross",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uAD50\uCC28\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: (\uD55C\uAE38\uAE34\uB728\uAE30 1\uCF54 \uAD50\uCC28\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"crossr",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uC624\uB978\uCABD \uC704 \uAD50\uCC28 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: (\uD55C\uAE38\uAE34\uB728\uAE30 \uC624\uB978\uCABD \uC704 \uAD50\uCC28\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"crossl",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uC67C\uCABD \uC704 \uAD50\uCC28 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: (\uD55C\uAE38\uAE34\uB728\uAE30 \uC67C\uCABD \uC704 \uAD50\uCC28\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"hdcfpring",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uAE34\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uAE34\uB728\uAE30 8
2: \uAE34\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 8`},{id:"hdcbpring",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uAE34\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uAE34\uB728\uAE30 8
2: \uAE34\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 8`},{id:"dcfpring",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: \uD55C\uAE38\uAE34\uB728\uAE30 \uC55E\uAC78\uC5B4\uB728\uAE30 8`},{id:"dcbpring",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uD55C\uAE38\uAE34\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: \uD55C\uAE38\uAE34\uB728\uAE30 \uB4A4\uAC78\uC5B4\uB728\uAE30 8`},{id:"hdccrossmotif",group:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",label:"\uAE34\uB728\uAE30 \uAD50\uCC28 \uBAA8\uD2F0\uBE0C",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uAE34\uB728\uAE30 8
2: (\uAE34\uB728\uAE30 1\uCF54 \uAD50\uCC28\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"shell",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uC870\uAC1C\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30 8
2: (\uC0AC\uC2AC\uB728\uAE30 2\uCF54, \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30)*8`},{id:"popcorn",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uD31D\uCF58\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 6
1: (\uD55C\uAE38\uAE34\uB728\uAE30 5\uCF54 \uD31D\uCF58\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6
2: (\uC0AC\uC2AC\uB728\uAE30 3\uCF54, \uC9E7\uC740\uB728\uAE30)*6`},{id:"puff",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uAD6C\uC2AC\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uAD6C\uC2AC\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*6`},{id:"puffv",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uBCC0\uD615\uAD6C\uC2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uD55C\uAE38\uAE34\uB728\uAE30 3\uCF54 \uBCC0\uD615\uAD6C\uC2AC\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*6`},{id:"trpuff",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uB450\uAE38\uAD6C\uC2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uB450\uAE38\uAE34\uB728\uAE30 5\uCF54 \uAD6C\uC2AC\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6`},{id:"trpop",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uB450\uAE38\uD31D\uCF58 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uB450\uAE38\uAE34\uB728\uAE30 6\uCF54 \uD31D\uCF58\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6`},{id:"fan",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uC194\uC78E\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 8
1: \uC9E7\uC740\uB728\uAE30 8
2: (\uD55C\uAE38\uAE34\uB728\uAE30 5\uC78E \uC194\uC78E\uB728\uAE30, \uC9E7\uC740\uB728\uAE30)*4`},{id:"shellring2",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uC870\uAC1C\uBB34\uB2AC \uACB9\uB2E8 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30 6
2: (\uC0AC\uC2AC\uB728\uAE30 1\uCF54, \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30)*6
3: (\uC0AC\uC2AC\uB728\uAE30 2\uCF54, \uC870\uAC1C\uBB34\uB2AC\uB728\uAE30)*6`},{id:"trpopchain",group:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",label:"\uB450\uAE38\uD31D\uCF58 \uD655\uC7A5 \uBB34\uB2AC",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uB450\uAE38\uAE34\uB728\uAE30 6\uCF54 \uD31D\uCF58\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 3\uCF54)*6`},{id:"xst",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"X\uC790\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uD55C\uAE38\uAE34\uB728\uAE30 8
2: (1\uAE38\uAE34\uB728\uAE30 X\uC790\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"trxst",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uB450\uAE38X\uC790 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 8
1: \uB450\uAE38\uAE34\uB728\uAE30 8
2: (2\uAE38\uAE34\uB728\uAE30 X\uC790\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*4`},{id:"bobble",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uCE60\uBCF4\uBB34\uB2AC \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uCE60\uBCF4\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6`},{id:"picot",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uD53C\uCF54\uC7A5\uC2DD \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: \uC9E7\uC740\uB728\uAE30 6
2: (\uC9E7\uC740\uB728\uAE30, \uD53C\uCF54\uB728\uAE30)*6`},{id:"ring",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uB9C1\uB728\uAE30 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uC9E7\uC740\uB728\uAE30 \uB9C1\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6`},{id:"trxstring",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uB450\uAE38X\uC790 \uD655\uC7A5 \uC6D0\uD615",text:`\uC2DC\uC791: \uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 10
1: \uB450\uAE38\uAE34\uB728\uAE30 10
2: (2\uAE38\uAE34\uB728\uAE30 X\uC790\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 1\uCF54)*5`},{id:"bobblering2",group:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",label:"\uCE60\uBCF4\uBB34\uB2AC \uACB9\uB2E8 \uC6D0\uD615",text:`\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6
1: (\uCE60\uBCF4\uB728\uAE30, \uC0AC\uC2AC\uB728\uAE30 2\uCF54)*6
2: (\uC0AC\uC2AC\uB728\uAE30 3\uCF54, \uC9E7\uC740\uB728\uAE30)*6`}],SYMBOL_GROUPS=[{label:"1. \uAE30\uBCF8 \uB728\uAE30",cds:["CHAIN","SLIP","SC","HDC","DC","TR","DTR","TR4","INC","DEC"]},{label:"2. \uC9E7\uC740\uB728\uAE30 \uC751\uC6A9",cds:["SCINC2","SCINC3","SCDEC2","SCDEC3","SCFP","SCBP"]},{label:"3. \uAE34\uB728\uAE30\xB7\uD55C\uAE38\uAE34\uB728\uAE30 \uB298\uB9BC/\uBAA8\uC544\uB728\uAE30",cds:["HDCINC3","HDCDEC2","HDCDEC3","DCINC2","DCINC3","DCDEC2","DCDEC3","DCDEC4"]},{label:"4. \uAC78\uC5B4\uB728\uAE30\xB7\uAD50\uCC28\uB728\uAE30",cds:["HDCFP","HDCBP","DCFP","DCBP","HDCCROSS","DCCROSS","DCCROSSR","DCCROSSL","TRCROSS"]},{label:"5. \uAD6C\uC2AC\xB7\uD31D\uCF58\xB7\uBB34\uB2AC\uB728\uAE30",cds:["DCPUFF3","DCPUFF3V","TRPUFF5","DCPOP5","TRPOP6","DCFAN5","SHELL"]},{label:"6. \uD2B9\uC218 \uBB34\uB2AC \uAE30\uD638",cds:["DCXST","TRXST","BOBBLEDECO","PICOT","SCRING","DCRING"]}];window.MdCbCobanulPage={name:"MdCbCobanulPage",props:{showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(a){const{reactive:r,ref:i,computed:b,watch:p,onMounted:f,onUnmounted:o}=Vue,s=r([]),m=r([]),h=r([]),l=r({loading:!1,activeSymbolId:null,activeColor:localStorage.getItem("modu-md-cb-active-color")||"#333333",activeYarnId:null,isPainting:!1,dragMode:"paint",thumbUploading:!1,autoThumb:!0,dtlMode:"edit",chartMode:"symbol",descExampleTab:DESC_EXAMPLES[0].id,roundExampleGroup:SYMBOL_GROUPS[0].label,roundExampleTab:ROUND_EXAMPLES[0].id}),g=r(DESC_EXAMPLES.map(t=>({id:t.id,label:t.label}))),R=b(()=>DESC_EXAMPLES.find(t=>t.id===l.descExampleTab)||DESC_EXAMPLES[0]),D=()=>{c.descText=R.value.text},x=b(()=>SYMBOL_GROUPS.map(e=>e.label).map(e=>({label:e,tabs:ROUND_EXAMPLES.filter(n=>n.group===e).map(n=>({id:n.id,label:n.label}))})).filter(e=>e.tabs.length)),w=b(()=>x.value.map(t=>({id:t.label,label:t.label}))),$=b(()=>(x.value.find(t=>t.label===l.roundExampleGroup)||{}).tabs||[]),T=b(()=>ROUND_EXAMPLES.find(t=>t.id===l.roundExampleTab)||ROUND_EXAMPLES[0]),E=t=>{l.roundExampleGroup=t;const e=x.value.find(n=>n.label===t);e&&e.tabs.length&&(l.roundExampleTab=e.tabs[0].id)},M=()=>{c.roundDescText=T.value.text},U=b(()=>l.dtlMode==="view"),O=b(()=>Object.keys(u).length>0?new Set(Object.values(u).map(e=>e.colorHex).filter(Boolean)).size>=2?{icon:"\u{1F3A8}",label:"\uBC30\uC0C9 \uB3C4\uC548"}:{icon:"\u{1F9E9}",label:"\uAE30\uD638 \uB3C4\uC548"}:c.roundDescText&&c.roundDescText.trim()?{icon:"\u{1F300}",label:"\uC6D0\uD615 \uB3C4\uC548"}:null),L=i(null);p(()=>l.activeColor,t=>{try{localStorage.setItem("modu-md-cb-active-color",t)}catch{}});const c=r({patternId:null,patternNm:"",rowCount:15,maxStitchCount:20,descText:"",roundDescText:"",thumbnailUrl:""}),u=r({}),N=b(()=>{const t={null:{symbolId:null,symbolChar:"\u232B",symbolNm:"\uC9C0\uC6B0\uAC1C(\uBE48\uCE78)"}};return s.forEach(e=>{t[e.symbolId]=e}),t}),Q=b(()=>{const t=new Set,e=SYMBOL_GROUPS.map(d=>{const v=d.cds.map(y=>s.find(C=>C.symbolCd===y)).filter(Boolean);return v.forEach(y=>t.add(y.symbolId)),{label:d.label,items:v}}).filter(d=>d.items.length),n=s.filter(d=>!t.has(d.symbolId));return n.length&&e.push({label:"\uAE30\uD0C0",items:n}),e}),B=t=>{const e=t&&t.symbolCd?fnSymbolSvg(t.symbolCd):null;return e?`<svg viewBox="0 0 24 24" class="cb-sym-svg" ${CB_SVG_STROKE}>${e}</svg>`:null},W=(t,e)=>{const n=u[t+"_"+e];if(!n)return null;const d=N.value[n.symbolId];return d?{svg:B(d),char:d.symbolChar}:null},K=(t,e)=>{const n=u[t+"_"+e];if(!n||!n.colorHex)return null;const d=u[t+"_"+(e-1)];if(d&&d.colorHex===n.colorHex)return null;let v=1,y=e+1;for(;u[t+"_"+y]&&u[t+"_"+y].colorHex===n.colorHex;)v++,y++;return v},F=b(()=>{const{start:t,rounds:e}=fnParseRoundText(c.roundDescText,s),n=46,d=34,v=e.map((I,S)=>{const k=n+S*d,kt=I.items.length||1;let Z=0;const Pt=I.items.map((_,Nt)=>{const J=(-90+360/kt*Nt)*Math.PI/180,P=_.symbolId?N.value[_.symbolId]:null;return Z+=P&&P.stitchProduce||1,{x:Math.round(k*Math.cos(J)*10)/10,y:Math.round(k*Math.sin(J)*10)/10,svg:P?B(P):null,char:P?P.symbolChar:_.symbolNm?_.symbolNm[0]:"?"}});return{roundNo:I.roundNo,total:Z,radius:k,points:Pt}}),y=v.length?v[v.length-1].radius:n,C=Math.ceil((y+40)*2);return{start:t,rounds:v,box:C,half:C/2}}),tt=b(()=>{const t={};return m.forEach(e=>{t[e.yarnId]=e}),t}),et=async()=>{var e;const t=await mdCbApiSvc.symbol.getList({},"\uCF54\uBC14\uB298\uB3C4\uC548","\uAE30\uD638\uC870\uD68C");s.splice(0,s.length,...((e=t.data)==null?void 0:e.data)||[]),s.length&&(l.activeSymbolId=s[0].symbolId)},nt=async()=>{var e;const t=await mdCbApiSvc.yarn.getList({useYn:"Y"},"\uCF54\uBC14\uB298\uB3C4\uC548","\uC2E4\uC870\uD68C");m.splice(0,m.length,...((e=t.data)==null?void 0:e.data)||[])},A=()=>{Object.assign(c,{patternId:null,patternNm:"",rowCount:15,maxStitchCount:20,descText:"",roundDescText:"",thumbnailUrl:""}),Object.keys(u).forEach(t=>delete u[t]),h.splice(0,h.length),l.dtlMode="edit",l.chartMode="symbol",history.replaceState(null,"","fo-md-cb-cobanul.html?view=editor")},ot=()=>{l.dtlMode="edit"},ct=async()=>{c.patternId&&await G(c.patternId),l.dtlMode="view"},j=()=>{location.href="fo-md-cb-cobanul.html"},G=async t=>{var y,C,I;const n=(y=(await mdCbApiSvc.pattern.getById(t,"\uCF54\uBC14\uB298\uB3C4\uC548","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:y.data;if(!n){a.showToast("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB3C4\uC548\uC785\uB2C8\uB2E4.","error");return}Object.assign(c,{patternId:n.patternId,patternNm:n.patternNm,rowCount:n.rowCount||15,maxStitchCount:n.maxStitchCount||20,descText:n.descText||"",roundDescText:n.roundDescText||"",thumbnailUrl:n.thumbnailUrl||""}),Object.keys(u).forEach(S=>delete u[S]),(((C=(await mdCbApiSvc.patternCell.getList(n.patternId,"\uCF54\uBC14\uB298\uB3C4\uC548","\uACA9\uC790\uC870\uD68C")).data)==null?void 0:C.data)||[]).forEach(S=>{u[S.rowNo+"_"+S.colNo]={symbolId:S.symbolId,colorHex:S.colorHex}});const v=await mdCbApiSvc.patternYarn.getList(n.patternId,"\uCF54\uBC14\uB298\uB3C4\uC548","\uC7AC\uB8CC\uC870\uD68C");h.splice(0,h.length,...(((I=v.data)==null?void 0:I.data)||[]).map(S=>({yarnId:S.yarnId,usageDesc:S.usageDesc||""}))),l.dtlMode="view",l.chartMode=Object.keys(u).length===0&&c.roundDescText.trim()?"round":"symbol"},Y=(t,e)=>{u[t+"_"+e]={symbolId:l.activeSymbolId,colorHex:l.activeColor}},H=(t,e)=>{delete u[t+"_"+e]},at=(t,e)=>{if(U.value)return;if(l.activeSymbolId===null)return l.dragMode="erase",l.isPainting=!0,H(t,e);const n=u[t+"_"+e],d=n&&n.symbolId===l.activeSymbolId&&n.colorHex===l.activeColor;l.dragMode=d?"erase":"paint",l.isPainting=!0,l.dragMode==="erase"?H(t,e):Y(t,e)},lt=(t,e)=>{l.isPainting&&(l.dragMode==="erase"?H(t,e):Y(t,e))},X=()=>{l.isPainting=!1},st=t=>{l.activeColor=t,l.activeYarnId=null},rt=t=>{l.activeColor=t.colorHex,l.activeYarnId=t.yarnId,z(t.yarnId)},z=t=>{h.some(e=>e.yarnId===t)||h.push({yarnId:t,usageDesc:""})},it=t=>{const e=h.findIndex(n=>n.yarnId===t);e>=0&&h.splice(e,1)},dt=t=>{c.rowCount=t.row,c.maxStitchCount=t.col},q=t=>{const e={};Object.keys(u).forEach(n=>{const[d,v]=n.split("_").map(Number);e[d+t+"_"+v]=u[n]}),Object.keys(u).forEach(n=>delete u[n]),Object.assign(u,e)},V=t=>{const e={};Object.keys(u).forEach(n=>{const[d,v]=n.split("_").map(Number);e[d+"_"+(v+t)]=u[n]}),Object.keys(u).forEach(n=>delete u[n]),Object.assign(u,e)},ut=()=>{q(1),c.rowCount++},bt=()=>{c.rowCount++},pt=()=>{V(1),c.maxStitchCount++},ft=()=>{c.maxStitchCount++},mt=()=>{c.rowCount<=1||(Object.keys(u).forEach(t=>{t.split("_")[0]==="1"&&delete u[t]}),q(-1),c.rowCount--)},ht=()=>{if(c.rowCount<=1)return;const t=c.rowCount;Object.keys(u).forEach(e=>{Number(e.split("_")[0])===t&&delete u[e]}),c.rowCount--},yt=()=>{c.maxStitchCount<=1||(Object.keys(u).forEach(t=>{t.split("_")[1]==="1"&&delete u[t]}),V(-1),c.maxStitchCount--)},vt=()=>{if(c.maxStitchCount<=1)return;const t=c.maxStitchCount;Object.keys(u).forEach(e=>{Number(e.split("_")[1])===t&&delete u[e]}),c.maxStitchCount--},xt=()=>{c.descText=fnGenDescText(c.rowCount,c.maxStitchCount,u,N.value)},gt=async()=>{if(!c.descText||!c.descText.trim()){a.showToast("\uBA3C\uC800 \uB3C4\uC548 \uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}if(!await a.showConfirm("\uACA9\uC790 \uB2E4\uC2DC \uCC44\uC6B0\uAE30","\uD604\uC7AC \uACA9\uC790 \uB0B4\uC6A9\uC744 \uC9C0\uC6B0\uACE0 \uB3C4\uC548 \uC124\uBA85\uC73C\uB85C\uBD80\uD130 \uB2E4\uC2DC \uCC44\uC6B0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const{cells:t,rowCount:e,maxCol:n,unmatched:d}=fnParseDescText(c.descText,s);if(Object.keys(t).length===0){a.showToast('\uC778\uC2DD\uD560 \uC218 \uC788\uB294 \uAE30\uD638\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. "N\uB2E8: \uAE30\uD638\uBA85 N\uCF54, \uAE30\uD638\uBA85 N\uCF54, ..." \uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.',"error");return}Object.keys(u).forEach(v=>delete u[v]),Object.assign(u,t),c.rowCount=Math.max(c.rowCount,e),c.maxStitchCount=Math.max(c.maxStitchCount,n),a.showToast(d>0?`\uACA9\uC790\uC5D0 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4. (\uC778\uC2DD\uD558\uC9C0 \uBABB\uD55C \uAD6C\uAC04 ${d}\uAC1C\uB294 \uAC74\uB108\uB700)`:"\uACA9\uC790\uC5D0 \uBC18\uC601\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",d>0?"info":"success")},Ct=()=>{var t;U.value||l.thumbUploading||(t=L.value)==null||t.click()},wt=async t=>{var d,v,y;const e=(d=t.target.files)==null?void 0:d[0];if(t.target.value="",!e)return;const n=(e.name.split(".").pop()||"").toLowerCase();if(!["jpg","jpeg","png","gif","webp"].includes(n)){a.showToast("\uC774\uBBF8\uC9C0 \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error");return}if(e.size>5*1024*1024){a.showToast("5MB \uC774\uD558 \uC774\uBBF8\uC9C0\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error");return}l.thumbUploading=!0;try{const C=new FormData;C.append("files",e),C.append("businessCode","md_cb_pattern");const S=(((y=(v=(await coApiSvc.cmUpload.uploadMulti(C,"\uCF54\uBC14\uB298\uB3C4\uC548","\uB300\uD45C\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC")).data)==null?void 0:v.data)==null?void 0:y.files)||[])[0];S&&(c.thumbnailUrl=S.cdnImgUrl||"",a.showToast("\uB300\uD45C\uC774\uBBF8\uC9C0\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"))}catch(C){a.showToast(coUtil.cofErrMsg(C,"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{l.thumbUploading=!1}},St=()=>{c.thumbnailUrl=""},Rt=async()=>{var d,v;const t=Object.keys(u).length>0,e=F.value,n=!t&&e.rounds.length>0;if(!(!t&&!n))try{const y=t?fnBuildGridThumbSvg(c.rowCount,c.maxStitchCount,u,N.value):fnBuildRoundThumbSvg(e),C=await fnSvgToPngBlob(y.svg,y.w,y.h),I=new FormData;I.append("files",C,"pattern-thumb.png"),I.append("businessCode","md_cb_pattern");const k=(((v=(d=(await coApiSvc.cmUpload.uploadMulti(I,"\uCF54\uBC14\uB298\uB3C4\uC548","\uB300\uD45C\uC774\uBBF8\uC9C0\uC790\uB3D9\uC0DD\uC131")).data)==null?void 0:d.data)==null?void 0:v.files)||[])[0];k&&(c.thumbnailUrl=k.cdnImgUrl||c.thumbnailUrl)}catch{}},It=async()=>{await a.showConfirm("\uCD08\uAE30\uD654","\uC785\uB825\uD55C \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uCD08\uAE30\uD654\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&A()},Dt=async()=>{var t,e;if(!c.patternNm||!c.patternNm.trim()){const n=new Date,d=y=>String(y).padStart(2,"0"),v=O.value&&O.value.label?O.value.label.replace(/\s+/g,""):"\uCF54\uBC14\uB298\uB3C4\uC548";c.patternNm=`${v}_${n.getFullYear()}${d(n.getMonth()+1)}${d(n.getDate())}_${d(n.getHours())}${d(n.getMinutes())}`}l.loading=!0;try{l.autoThumb&&await Rt();const n={patternNm:c.patternNm,rowCount:c.rowCount,maxStitchCount:c.maxStitchCount,descText:c.descText,roundDescText:c.roundDescText,thumbnailUrl:c.thumbnailUrl};let d=c.patternId;d?await mdCbApiSvc.pattern.update(d,n,"\uCF54\uBC14\uB298\uB3C4\uC548","\uC218\uC815"):(d=(e=(t=(await mdCbApiSvc.pattern.create(n,"\uCF54\uBC14\uB298\uB3C4\uC548","\uB4F1\uB85D")).data)==null?void 0:t.data)==null?void 0:e.patternId,c.patternId=d,history.replaceState(null,"","fo-md-cb-cobanul.html?view=editor&patternId="+encodeURIComponent(d)));const v=Object.keys(u).map(y=>{const[C,I]=y.split("_").map(Number);return{rowNo:C,colNo:I,symbolId:u[y].symbolId,colorHex:u[y].colorHex}}).filter(y=>y.rowNo<=c.rowCount&&y.colNo<=c.maxStitchCount);await mdCbApiSvc.patternCell.saveList(d,v,"\uCF54\uBC14\uB298\uB3C4\uC548","\uACA9\uC790\uC800\uC7A5"),await mdCbApiSvc.patternYarn.saveList(d,h.map(y=>({yarnId:y.yarnId,usageDesc:y.usageDesc})),"\uCF54\uBC14\uB298\uB3C4\uC548","\uC7AC\uB8CC\uC800\uC7A5"),a.showToast("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(n){a.showToast(coUtil.cofErrMsg(n,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{l.loading=!1}},$t=async()=>{c.patternId&&await a.showConfirm("\uC0AD\uC81C",c.patternNm+" \uB3C4\uC548\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(await mdCbApiSvc.pattern.remove(c.patternId,"\uCF54\uBC14\uB298\uB3C4\uC548","\uC0AD\uC81C"),j())},Tt=b(()=>Array.from({length:c.rowCount},(t,e)=>e+1)),Et=b(()=>Array.from({length:c.maxStitchCount},(t,e)=>e+1));return f(async()=>{window.addEventListener("mouseup",X),await et(),await nt();const e=new URLSearchParams(location.search).get("patternId");e&&await G(e)}),o(()=>{window.removeEventListener("mouseup",X)}),{symbols:s,yarns:m,patternYarns:h,uiState:l,form:c,cellMap:u,symbolMap:N,yarnMap:tt,cfGroupedSymbols:Q,cfRows:Tt,cfCols:Et,cfReadonly:U,cfPatternType:O,cfRoundChart:F,PRESET_COLORS,GRID_PRESETS,thumbInputRef:L,fnSymIcon:B,fnCellDisplay:W,fnColorRunStart:K,descExampleTabs:g,cfCurrentDescExample:R,onUseDescExample:D,cfGroupedRoundExamples:x,cfRoundExampleGroupTabs:w,cfCurrentRoundGroupTabs:$,onSelectRoundGroup:E,cfCurrentRoundExample:T,onUseRoundExample:M,fnMagicRingIcon,onNewPattern:A,onBackToList:j,onCellMouseDown:at,onCellMouseEnter:lt,onGenDesc:xt,onParseDesc:gt,onSave:Dt,onDeletePattern:$t,onSwitchToEdit:ot,onCancelEdit:ct,onOpenThumbPicker:Ct,onThumbFileChange:wt,onRemoveThumb:St,onResetForm:It,onPickPresetColor:st,onPickYarnColor:rt,onAddPatternYarn:z,onRemovePatternYarn:it,onApplyGridPreset:dt,onAddRowTop:ut,onAddRowBottom:bt,onAddColLeft:pt,onAddColRight:ft,onRemoveRowTop:mt,onRemoveRowBottom:ht,onRemoveColLeft:yt,onRemoveColRight:vt}},template:`
<div class="cb-page">
  <div class="cb-hero">
    <div class="cb-hero-eyebrow">CROCHET PATTERN</div>
    <h1 class="cb-hero-title">
      \u{1F9F6} {{ !form.patternId ? '\uC0C8 \uB3C4\uC548 \uB9CC\uB4E4\uAE30' : (cfReadonly ? '\uB3C4\uC548 \uC0C1\uC138\uBCF4\uAE30' : '\uB3C4\uC548 \uD3B8\uC9D1') }}
      <span v-if="form.patternId" class="cb-detail-id">#{{ form.patternId }}</span>
      <span v-if="cfPatternType" class="cb-pattern-type-badge">{{ cfPatternType.icon }} {{ cfPatternType.label }}</span>
    </h1>
    <div class="cb-hero-sub">
      {{ !form.patternId ? '\uAE30\uD638\uC640 \uBC30\uC0C9\uC73C\uB85C \uB098\uB9CC\uC758 \uB3C4\uC548\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694'
        : (cfReadonly ? '\uC800\uC7A5\uB41C \uB3C4\uC548\uC785\uB2C8\uB2E4. \uC218\uC815\uD558\uB824\uBA74 \uC544\uB798 [\uC218\uC815] \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694' : '\uACA9\uC790\uB97C \uB2E4\uC2DC \uC0B4\uD3B4\uBCF4\uACE0 \uC774\uC5B4\uC11C \uC644\uC131\uD574\uBCF4\uC138\uC694') }}
    </div>
  </div>

  <div class="cb-detail-head">
    <button class="btn btn_list cb-back-btn" @click="onBackToList">\u2190 \uBAA9\uB85D\uC73C\uB85C</button>
    <button class="btn btn_new cb-back-btn" @click="onNewPattern" style="margin-left:auto;">+ \uC2E0\uADDC \uB3C4\uC548</button>
  </div>

  <div class="cb-layout cb-layout-2col">
    <!-- \uC88C\uCE21: \uACA9\uC790 \uD3B8\uC9D1\uAE30 -->
    <div class="cb-panel cb-panel-editor">
      <div class="cb-editor-toolbar">
        <div class="cb-toolbar-fields">
          <div class="cb-name-field">
            <span class="cb-field-label">\uB3C4\uC548\uBA85</span>
            <input v-model="form.patternNm" :readonly="cfReadonly" placeholder="\uBE44\uC6B0\uBA74 \uC720\uD615_\uB0A0\uC9DC\uC2DC\uAC01 \uC790\uB3D9" class="cb-name-input" />
          </div>
          <div class="cb-thumb-field">
            <span class="cb-field-label">\uB300\uD45C\uC774\uBBF8\uC9C0</span>
            <div class="cb-thumb-box" :class="{ 'cb-locked': cfReadonly }" @click="onOpenThumbPicker" title="\uBAA9\uB85D\uC5D0 \uD45C\uC2DC\uB420 \uC774\uBBF8\uC9C0">
              <img v-if="form.thumbnailUrl" :src="form.thumbnailUrl" class="cb-thumb-img" />
              <span v-else class="cb-thumb-placeholder">{{ uiState.thumbUploading ? '\u23F3' : '\uFF0B' }}</span>
              <span v-if="form.thumbnailUrl && !cfReadonly" class="cb-thumb-remove" @click.stop="onRemoveThumb" title="\uC81C\uAC70">\u2715</span>
            </div>
            <input ref="thumbInputRef" type="file" accept="image/*" style="display:none" @change="onThumbFileChange" />
            <label v-if="!cfReadonly" class="cb-thumb-auto-toggle" title="\uC800\uC7A5 \uC2DC \uC9C0\uAE08 \uADF8\uB9B0 \uB3C4\uC548(\uACA9\uC790 \uB610\uB294 \uC6D0\uD615)\uC744 \uC774\uBBF8\uC9C0\uB85C \uB9CC\uB4E4\uC5B4 \uB300\uD45C\uC774\uBBF8\uC9C0\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.">
              <input type="checkbox" v-model="uiState.autoThumb" /> \uB3C4\uC548\uC744 \uB300\uD45C\uC774\uBBF8\uC9C0\uB85C \uCCA8\uBD80\uD558\uAE30
            </label>
          </div>
          <div class="cb-size-field">
            <span class="cb-field-label">\uB2E8\uC218</span>
            <input type="number" v-model.number="form.rowCount" :readonly="cfReadonly" min="1" max="80" class="cb-size-input" />
          </div>
          <div class="cb-size-field">
            <span class="cb-field-label">\uCF54\uC218</span>
            <input type="number" v-model.number="form.maxStitchCount" :readonly="cfReadonly" min="1" max="60" class="cb-size-input" />
          </div>
          <div v-if="!cfReadonly" class="cb-preset-field">
            <span class="cb-field-label">\uBE60\uB978 \uD06C\uAE30</span>
            <div class="cb-grid-presets">
              <button v-for="gp in GRID_PRESETS" :key="gp.label" class="cb-preset-btn"
                :class="{ active: form.rowCount===gp.row && form.maxStitchCount===gp.col }"
                @click="onApplyGridPreset(gp)">{{ gp.label }}</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cb-chart-mode-toggle">
        <button :class="{ active: uiState.chartMode==='symbol' }" @click="uiState.chartMode='symbol'">\u{1F9E9} \uAE30\uD638 \uB3C4\uC548</button>
        <button :class="{ active: uiState.chartMode==='color' }" @click="uiState.chartMode='color'">\u{1F3A8} \uBC30\uC0C9 \uB3C4\uC548</button>
        <button :class="{ active: uiState.chartMode==='round' }" @click="uiState.chartMode='round'">\u{1F300} \uC6D0\uD615 \uB3C4\uC548</button>
      </div>

      <!-- \uAE30\uD638 \uB3C4\uC548(\uD3B8\uC9D1 \uAC00\uB2A5) -->
      <div v-if="uiState.chartMode==='symbol'" class="cb-grid-wrap" :class="{ 'cb-locked': cfReadonly }">
        <div class="cb-edge-group cb-edge-top">
          <button class="cb-edge-btn" title="\uC717\uB2E8 \uC904\uC774\uAE30" @click="onRemoveRowTop">\uFF0D</button>
          <button class="cb-edge-btn" title="\uC717\uB2E8 \uB298\uB9AC\uAE30" @click="onAddRowTop">\uFF0B</button>
        </div>
        <div class="cb-edge-group cb-edge-bottom">
          <button class="cb-edge-btn" title="\uC544\uB7AB\uB2E8 \uC904\uC774\uAE30" @click="onRemoveRowBottom">\uFF0D</button>
          <button class="cb-edge-btn" title="\uC544\uB7AB\uB2E8 \uB298\uB9AC\uAE30" @click="onAddRowBottom">\uFF0B</button>
        </div>
        <div class="cb-edge-group cb-edge-left">
          <button class="cb-edge-btn" title="\uC67C\uCABD \uCF54 \uC904\uC774\uAE30" @click="onRemoveColLeft">\uFF0D</button>
          <button class="cb-edge-btn" title="\uC67C\uCABD \uCF54 \uB298\uB9AC\uAE30" @click="onAddColLeft">\uFF0B</button>
        </div>
        <div class="cb-edge-group cb-edge-right">
          <button class="cb-edge-btn" title="\uC624\uB978\uCABD \uCF54 \uC904\uC774\uAE30" @click="onRemoveColRight">\uFF0D</button>
          <button class="cb-edge-btn" title="\uC624\uB978\uCABD \uCF54 \uB298\uB9AC\uAE30" @click="onAddColRight">\uFF0B</button>
        </div>

        <div class="cb-grid-scroll" @mouseleave="uiState.isPainting=false">
          <div v-for="r in cfRows" :key="r" class="cb-grid-row">
            <div v-for="c in cfCols" :key="c" class="cb-cell"
              :style="cellMap[r+'_'+c] ? ('background:' + (cellMap[r+'_'+c].colorHex || '#fff') + ';') : ''"
              @mousedown.prevent="onCellMouseDown(r, c)"
              @mouseenter="onCellMouseEnter(r, c)">
              <span v-if="fnCellDisplay(r,c) && fnCellDisplay(r,c).svg" v-html="fnCellDisplay(r,c).svg"></span>
              <template v-else>{{ fnCellDisplay(r,c) ? fnCellDisplay(r,c).char : '' }}</template>
            </div>
          </div>
        </div>
      </div>

      <!-- \uBC30\uC0C9 \uB3C4\uC548(\uC77D\uAE30\uC804\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30) \u2014 \uC0C9\uC0C1 \uCE78 + \uAC19\uC740 \uC0C9 \uC5F0\uC18D \uAD6C\uAC04\uB9C8\uB2E4 \uAC1C\uC218 \uD45C\uC2DC + \uB2E8/\uCF54 \uB208\uAE08 -->
      <div v-else-if="uiState.chartMode==='color'" class="cb-chart-wrap">
        <div class="cb-chart-row cb-chart-axis-row">
          <div class="cb-chart-corner"></div>
          <div v-for="c in cfCols" :key="c" class="cb-chart-axis-cell">{{ c }}</div>
        </div>
        <div v-for="r in cfRows" :key="r" class="cb-chart-row">
          <div class="cb-chart-axis-cell">{{ r }}</div>
          <div v-for="c in cfCols" :key="c" class="cb-chart-cell"
            :style="cellMap[r+'_'+c] && cellMap[r+'_'+c].colorHex ? ('background:' + cellMap[r+'_'+c].colorHex + ';') : ''">
            <span v-if="fnColorRunStart(r,c)" class="cb-chart-count">{{ fnColorRunStart(r,c) }}</span>
          </div>
        </div>
        <div v-if="!Object.keys(cellMap).length" class="cb-empty-hint">\uAE30\uD638 \uB3C4\uC548\uC5D0\uC11C \uCE78\uC744 \uCE60\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uBC30\uC0C9 \uB3C4\uC548\uC774 \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.</div>
      </div>

      <!-- \uC6D0\uD615(\uB77C\uC6B4\uB4DC) \uB3C4\uC548 \u2014 \uC0AC\uAC01\uD615 \uACA9\uC790\uC640 \uB3C5\uB9BD\uB41C \uBCC4\uB3C4 \uC785\uB825. \uC6D0\uD615\uB728\uAE30(\uB3C4\uB11B/\uCF54\uC2A4\uD130/\uBAA8\uD2F0\uBE0C \uB4F1) \uC804\uC6A9 -->
      <div v-else class="cb-round-wrap">
        <div class="cb-round-preview" :style="{ width: cfRoundChart.box + 'px', height: cfRoundChart.box + 'px' }">
          <svg class="cb-round-guide-svg" :viewBox="'0 0 ' + cfRoundChart.box + ' ' + cfRoundChart.box">
            <circle v-for="rd in cfRoundChart.rounds" :key="'g'+rd.roundNo"
              :cx="cfRoundChart.half" :cy="cfRoundChart.half" :r="rd.radius" class="cb-round-guide" />
            <text v-for="rd in cfRoundChart.rounds" :key="'l'+rd.roundNo"
              :x="cfRoundChart.half" :y="cfRoundChart.half - rd.radius - 8" text-anchor="middle" class="cb-round-label">{{ rd.roundNo }}({{ rd.total }})</text>
            <circle v-if="cfRoundChart.start && cfRoundChart.start.type!=='magicring'" :cx="cfRoundChart.half" :cy="cfRoundChart.half" r="10" class="cb-round-center" />
          </svg>
          <div v-if="cfRoundChart.start && cfRoundChart.start.type==='magicring'" class="cb-round-center-icon"
            :style="{ left: cfRoundChart.half + 'px', top: cfRoundChart.half + 'px' }" title="\uB9E4\uC9C1\uB9C1(MR) \u2014 \uC6D0\uD615\uB728\uAE30 \uC2DC\uC791" v-html="fnMagicRingIcon()"></div>
          <div v-if="cfRoundChart.start" class="cb-round-center-label"
            :style="{ left: cfRoundChart.half + 'px', top: (cfRoundChart.half + (cfRoundChart.start.type==='magicring' ? 15 : 0)) + 'px' }">{{ cfRoundChart.start.total }}</div>
          <template v-for="rd in cfRoundChart.rounds" :key="rd.roundNo">
            <div v-for="(pt, i) in rd.points" :key="rd.roundNo + '_' + i" class="cb-round-stitch"
              :style="{ left: (cfRoundChart.half + pt.x) + 'px', top: (cfRoundChart.half + pt.y) + 'px' }">
              <span v-if="pt.svg" v-html="pt.svg"></span>
              <span v-else class="cb-round-stitch-char">{{ pt.char }}</span>
            </div>
          </template>
          <div v-if="!cfRoundChart.rounds.length" class="cb-round-empty">\uC544\uB798\uC5D0 \uC6D0\uD615 \uB3C4\uC548\uC744 \uC785\uB825\uD558\uBA74<br>\uC5EC\uAE30\uC5D0 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
        </div>
        <div class="cb-round-input">
          <div class="cb-desc-head">
            <span class="cb-desc-title">\uC6D0\uD615(\uB77C\uC6B4\uB4DC) \uB3C4\uC548 \uC785\uB825</span>
          </div>
          <textarea v-if="!cfReadonly" v-model="form.roundDescText" rows="7" class="form-control cb-desc-textarea"
            placeholder="\uC2DC\uC791: \uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 6&#10;1: \uC9E7\uC740\uB728\uAE30 6&#10;2: 2\uCF54\uB298\uB9AC\uAE30 6&#10;3: (\uC9E7\uC740\uB728\uAE30, 2\uCF54\uB298\uB9AC\uAE30)*6"></textarea>
          <pre v-else class="cb-desc-example-pre">{{ form.roundDescText || '\uC785\uB825\uB41C \uC6D0\uD615 \uB3C4\uC548 \uC124\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' }}</pre>
          <div class="cb-round-hint">\uC2DC\uC791 \uC904\uC740 "\uB9E4\uC9C1\uB9C1 \uC6D0\uD615 \uC2DC\uC791 N" \uB610\uB294 "\uC0AC\uC2AC \uC6D0\uD615 \uC2DC\uC791 N" \uB450 \uAC00\uC9C0\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uB9E4\uC9C1\uB9C1\uC740 \u{1F300} \uB098\uC120 \uC544\uC774\uCF58\uC73C\uB85C \uD45C\uC2DC). \uAC01 \uB2E8\uC740 "\uAE30\uD638\uBA85 N\uCF54" \uB97C \uCF64\uB9C8\uB85C \uB098\uC5F4\uD558\uAC70\uB098 "(\uAE30\uD638\uBA85, \uAE30\uD638\uBA85)*K" \uD615\uC2DD\uC73C\uB85C \uBC18\uBCF5 \uAD6C\uAC04\uC744 \uD45C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uAE30\uD638\uBA85\uACFC \uC815\uD655\uD788 \uC77C\uCE58\uD574\uC57C \uC544\uC774\uCF58\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>

          <div v-if="!cfReadonly" class="cb-desc-examples">
            <div class="cb-symbol-group-title" style="margin-top:0;">\uAE30\uD638 \uBD84\uB958</div>
            <fo-tab-bar :tabs="cfRoundExampleGroupTabs" :tab="uiState.roundExampleGroup" dense
              @tab-select="onSelectRoundGroup" />
            <div class="cb-symbol-group-title">\uC608\uC81C</div>
            <fo-tab-bar :tabs="cfCurrentRoundGroupTabs" :tab="uiState.roundExampleTab" dense
              @tab-select="id => uiState.roundExampleTab = id" />
            <div class="cb-desc-example-body">
              <pre class="cb-desc-example-pre">{{ cfCurrentRoundExample.text }}</pre>
              <button class="btn btn-sm btn-secondary" @click="onUseRoundExample">\uC774 \uC608\uC81C \uB123\uAE30</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="uiState.chartMode!=='round'" class="cb-desc-area">
        <div class="cb-desc-head">
          <span class="cb-desc-title">\uD55C\uAE00 \uB3C4\uC548 \uC124\uBA85</span>
          <div v-if="!cfReadonly" style="display:flex;gap:6px;">
            <button class="btn btn-sm btn-secondary" @click="onParseDesc">\u{1F4DD}\u2192\u{1F9E9} \uC124\uBA85\uC73C\uB85C \uACA9\uC790 \uB9CC\uB4E4\uAE30</button>
            <button class="btn btn-sm btn-secondary" @click="onGenDesc">\u{1F504} \uACA9\uC790\uB85C\uBD80\uD130 \uC0DD\uC131</button>
          </div>
        </div>
        <textarea v-model="form.descText" :readonly="cfReadonly" rows="6" class="form-control cb-desc-textarea"
          placeholder="[\uACA9\uC790\uB85C\uBD80\uD130 \uC0DD\uC131] \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uACA9\uC790 \uB0B4\uC6A9\uC744 \uBC14\uD0D5\uC73C\uB85C \uD55C\uAE00 \uC124\uBA85\uC774 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4. \uBC18\uB300\uB85C &quot;1\uB2E8: \uC0AC\uC2AC\uB728\uAE30 12\uCF54&quot; \uAC19\uC740 \uC124\uBA85\uC744 \uC9C1\uC811 \uC785\uB825\uD558\uACE0 [\uC124\uBA85\uC73C\uB85C \uACA9\uC790 \uB9CC\uB4E4\uAE30]\uB97C \uB204\uB974\uBA74 \uACA9\uC790\uAC00 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4."></textarea>

        <div v-if="!cfReadonly" class="cb-desc-examples">
          <fo-tab-bar :tabs="descExampleTabs" :tab="uiState.descExampleTab" dense
            @tab-select="id => uiState.descExampleTab = id" />
          <div class="cb-desc-example-body">
            <pre class="cb-desc-example-pre">{{ cfCurrentDescExample.text }}</pre>
            <button class="btn btn-sm btn-secondary" @click="onUseDescExample">\uC774 \uC608\uC81C \uB123\uAE30</button>
          </div>
        </div>
      </div>

      <div class="cb-detail-bottom-actions">
        <template v-if="cfReadonly">
          <button class="btn btn_edit cb-save-btn" @click="onSwitchToEdit">\uC218\uC815</button>
          <button v-if="form.patternId" class="btn btn_delete cb-del-btn" @click="onDeletePattern">\uC0AD\uC81C</button>
        </template>
        <template v-else>
          <button class="btn btn_save cb-save-btn" @click="onSave" :disabled="uiState.loading">\uC800\uC7A5</button>
          <!-- 2026-08-30: \uD328\uD134 A \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70(\uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC \uC720\uC9C0) -->
          <button v-if="form.patternId" class="btn btn_cancel cb-del-btn" @click="onCancelEdit">\uCDE8\uC18C</button>
          <button v-if="!form.patternId" class="btn btn_reset cb-del-btn" @click="onResetForm">\uCD08\uAE30\uD654</button>
        </template>
      </div>
    </div>

    <!-- \uC6B0\uCE21: \uAE30\uD638 \uD314\uB808\uD2B8 + \uBC30\uC0C9 + \uC0AC\uC6A9 \uC2E4 -->
    <div class="cb-panel cb-panel-side" :class="{ 'cb-locked': cfReadonly }">
      <div class="cb-side-title">\uAE30\uD638 \uD314\uB808\uD2B8</div>
      <div class="cb-symbol-grid">
        <div class="cb-symbol-btn cb-symbol-btn-eraser" :class="{ active: uiState.activeSymbolId===null }"
          title="\uC9C0\uC6B0\uAC1C(\uBE48\uCE78)" @click="uiState.activeSymbolId = null">\u232B</div>
      </div>
      <template v-for="grp in cfGroupedSymbols" :key="grp.label">
        <div class="cb-symbol-group-title">{{ grp.label }}</div>
        <div class="cb-symbol-grid">
          <div v-for="s in grp.items" :key="s.symbolId"
            class="cb-symbol-btn" :class="{ active: uiState.activeSymbolId===s.symbolId }"
            :title="s.symbolNm + (s.symbolDesc ? (' \u2014 ' + s.symbolDesc) : '')"
            @click="uiState.activeSymbolId = s.symbolId">
            <span v-if="fnSymIcon(s)" v-html="fnSymIcon(s)"></span>
            <template v-else>{{ s.symbolChar }}</template>
          </div>
        </div>
      </template>
      <div class="cb-symbol-name">{{ (symbolMap[uiState.activeSymbolId] || {}).symbolNm || '' }}</div>

      <div class="cb-side-title">\uBC30\uC0C9</div>
      <div class="cb-color-grid">
        <div v-for="hex in PRESET_COLORS" :key="hex" class="cb-color-swatch"
          :class="{ active: uiState.activeColor===hex }" :style="'background:'+hex" :title="hex"
          @click="onPickPresetColor(hex)"></div>
      </div>
      <input type="color" v-model="uiState.activeColor" class="cb-color-custom" title="\uC9C1\uC811 \uBC30\uC0C9 \uC120\uD0DD" />

      <div v-if="yarns.length" class="cb-side-title">\uB4F1\uB85D\uB41C \uC2E4</div>
      <div v-if="yarns.length" class="cb-yarn-grid">
        <div v-for="y in yarns" :key="y.yarnId" class="cb-yarn-swatch"
          :class="{ active: uiState.activeYarnId===y.yarnId }" :style="'background:'+y.colorHex"
          :title="y.yarnNm + (y.brandNm ? (' \u2014 ' + y.brandNm) : '')"
          @click="onPickYarnColor(y)"></div>
      </div>

      <div class="cb-side-title">\uC774 \uB3C4\uC548\uC5D0 \uC0AC\uC6A9\uB41C \uC2E4</div>
      <div class="cb-yarn-chips">
        <div v-for="py in patternYarns" :key="py.yarnId" class="cb-yarn-chip">
          <span class="cb-yarn-chip-dot" :style="'background:'+((yarnMap[py.yarnId]||{}).colorHex||'#ccc')"></span>
          <span class="cb-yarn-chip-nm">{{ (yarnMap[py.yarnId]||{}).yarnNm || py.yarnId }}</span>
          <input v-model="py.usageDesc" :readonly="cfReadonly" class="cb-yarn-chip-desc" placeholder="\uC608: \uBA54\uC778 \uC0C9\uC0C1" />
          <span v-if="!cfReadonly" class="cb-yarn-chip-del" @click="onRemovePatternYarn(py.yarnId)">\u2715</span>
        </div>
        <div v-if="!patternYarns.length" class="cb-empty-hint">\uC704 "\uB4F1\uB85D\uB41C \uC2E4"\uC5D0\uC11C \uD074\uB9AD\uD558\uBA74 \uC7AC\uB8CC\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4.</div>
      </div>
    </div>
  </div>
</div>
`};
