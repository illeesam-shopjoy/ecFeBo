document.getElementById("cm-pick-sel-style")||(function(){var a=document.createElement("style");a.id="cm-pick-sel-style",a.textContent=[".bo-table tbody tr.cm-pick-sel td{background:#dbe8fb;color:#17356e;}",".bo-table tbody tr.cm-pick-sel:hover td{background:#cbdefa;}",".fo-grid-table tbody tr.cm-pick-sel td{background:#dbe8fb;color:#17356e;}",".fo-grid-table tbody tr.cm-pick-sel:hover td{background:#cbdefa;}",".modal-box:has(.cm-pick-body){background:#eef0f4 !important;}",".modal-box:has(.cm-pick-body) .modal-footer{border-top-color:#dfe3e9;}",".cm-pick-body{background:transparent;}",".cm-pick-body > .search-bar,.cm-pick-body .cm-pick-card{background:#fff;border:1px solid #e3e6ec;border-radius:8px;}",".cm-pick-body > .search-bar{padding:8px 10px;margin-bottom:10px;}"].join(" "),document.head.appendChild(a)})();const CM_PICK_RANGE_OPTS=[{value:"1week",label:"1\uC8FC\uC77C"},{value:"1month",label:"1\uB2EC"},{value:"3months",label:"3\uB2EC"},{value:"6months",label:"6\uB2EC"},{value:"1year",label:"1\uB144"},{value:"thisyear",label:"\uC774\uBC88\uB144"},{value:"lastyear",label:"\uC791\uB144"}];window.BoCmPopupModal={name:"BoCmPopupModal",props:{popupCode:{type:String,required:!0},show:{type:Boolean,default:!0},title:{type:String,default:""},multi:{type:Boolean,default:null},excludeIds:{type:Array,default:()=>[]},excludeId:{type:[String,Number],default:null},initParam:{type:Object,default:()=>({})},clearable:{type:Boolean,default:!1},selectedIds:{type:Array,default:null},initSelectedIds:{type:Array,default:null},debug:{type:Boolean,default:!1},popupCmd:{type:String,default:""},modalName:{type:String,default:""},onCallback:{type:Function,default:null},resultType:{type:String,default:"row"}},emits:["select","toggle","close","api-log","response"],setup(a,{emit:A}){const{reactive:g,computed:r,onMounted:J,watch:X}=Vue,i=g({popupNm:"",popupPattern:1,multiYn:"N",pagingYn:"Y",pageSize:10,modalWidth:"900px",idField:"",nmField:"",dateField:"",hasTree:!1,searchCols:[],listCols:[],sysScope:""}),p=g({loading:!1,ready:!1,initing:!1,errorMsg:"",needCond:!1}),N=e=>e==null?e:{...e,selId:e.id,selName:e.nm},Z=e=>{const t=a.resultType,n=l=>l==null?null:t==="id"?l.id:N(l);return Array.isArray(e)?t==="id"||t==="idArray"?e.map(l=>l.id):e.map(N):t==="array"?e==null?[]:[N(e)]:t==="idArray"?e==null?[]:[e.id]:n(e)},P=()=>a.popupCmd||a.modalName||a.popupCode,F=()=>({popupCode:a.popupCode,...C.value?{multi:!0}:{}}),ee=e=>{const t=Array.isArray(e);return{cmd:P(),params:F(),resultType:t?"list":"object",resultObj:t?{}:e==null?{}:e,resultList:t?e:[]}},w=(e,t)=>{const n=Z(t),l=ee(n);return A(e,n),a.onCallback&&a.onCallback(P(),F(),n),A("response",l),n},B=()=>{a.debug&&A("api-log",{cmd:P(),params:F()})},T=g({}),x=g([]),h=g([]),d=g([]),y=g({}),u=g({searchValue:"",searchFields:"",dateRange:"1year",dateStart:"",dateEnd:""}),f=g({pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,300,500,1e3,2e3]}),b=g({selectedId:null}),z=r(()=>{var e;return((e=window.boCommonFilter)==null?void 0:e.siteId)||""}),C=r(()=>a.multi!==null?a.multi:i.multiYn==="Y"),Y=r(()=>a.title||i.popupNm||"\uC120\uD0DD"),te=r(()=>"\u{1F9E9} "+Y.value),ne=r(()=>{const t={1:"\uBAA9\uB85D",2:"\uD2B8\uB9AC+\uBAA9\uB85D",3:"\uD2B8\uB9AC\uC804\uC6A9"}[i.popupPattern]||String(i.popupPattern),n=C.value?"\uB2E4\uC911\uC120\uD0DD":"\uB2E8\uC77C\uC120\uD0DD",l=i.searchCols.map(c=>c.label).join(", ")||"-",o=i.listCols.map(c=>c.label).join(", ")||"-",s=(i.sysScope||"").split("^").filter(c=>c.trim()).join(" / ")||"BO";return`\uCF54\uB4DC: ${a.popupCode}
\uD328\uD134: ${t} / ${n} / ${i.pageSize}\uAC74
\uAC80\uC0C9: ${l}
\uBAA9\uB85D: ${o}
\uBC94\uC704: ${s}`}),M=r(()=>i.popupPattern>=2&&i.hasTree),I=r(()=>i.popupPattern===3),L=r(()=>!I.value),le=r(()=>i.pagingYn!=="N"),m=r(()=>Array.isArray(a.selectedIds)),H=r(()=>new Set((a.selectedIds||[]).map(String))),v=r(()=>C.value&&!m.value),ae=r(()=>m.value||v.value),ie=r(()=>{const e=(a.excludeIds||[]).map(String);return a.excludeId!=null&&a.excludeId!==""&&e.push(String(a.excludeId)),[...new Set(e)]}),K=r(()=>new Set(d.map(e=>String(e.id)))),k=e=>{if(!e||e.id==null)return!1;const t=String(e.id);return m.value?H.value.has(t):K.value.has(t)},j=()=>{const e=x.filter(t=>t?t.id!=null:!1);return e.length>0?e.every(t=>k(t)):!1},V=()=>{const e=x.filter(n=>n?n.id!=null:!1);if(!e.length)return;const t=j();e.forEach(n=>{const l=k(n);(t?!l:l)||(m.value?w("toggle",n):G(n))})},oe=e=>k(e)?"cm-pick-sel":"",re=e=>k(e)?"background:#dbe8fb;":"",$=r(()=>{const e=new Set(h.map(o=>String(o.id))),t={};h.forEach(o=>{const s=o.parentId==null||o.parentId===""?null:String(o.parentId),c=s&&e.has(s)?s:"__root__";(t[c]=t[c]||[]).push(o)});const n=[],l=(o,s)=>{(t[o]||[]).forEach(c=>{const O=String(c.id),Q=t[O]||[];n.push({...c,_depth:s,_hasKids:Q.length>0}),Q.length&&y[O]&&l(O,s+1)})};return l("__root__",0),n}),se=r(()=>{const e=(i.listCols||[]).map(t=>({key:t.field,label:t.label,link:!!t.link,align:t.align||void 0,style:t.width?`width:${t.width};`:void 0,fmt:me(t)}));if(e.length&&!e.some(t=>t.link)){const t=e.find(n=>n.key===i.nmField)||e[0];t.link=!0}return(m.value||v.value)&&e.unshift({key:"_checked",label:j()?"\u2611":"\u2610",align:"center",style:"width:56px;",headClick:()=>V(),fmt:(t,n)=>k(n)?"\u2611":"\u2610"}),e}),ce=r(()=>{const e=[],t=new Set,n=(l,o)=>{l&&!t.has(l)&&(t.add(l),e.push({value:l,label:o||l}))};return n(i.idField,"ID"),n(i.nmField,"\uC774\uB984"),(i.searchCols||[]).forEach(l=>{l.searchType!=="EQ"&&n(l.field,l.label)}),e}),de=r(()=>{const e=[{key:"searchFields",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:()=>ce.value,placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD"},{key:"searchValue",label:"\uAC80\uC0C9\uC5B4",type:"text",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"}];return i.dateField&&e.push({key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uAE30\uAC04",typeKey:"_dateType",startKey:"dateStart",endKey:"dateEnd",rangeOptions:()=>CM_PICK_RANGE_OPTS,onRangeChange:()=>q()}),(i.searchCols||[]).forEach(t=>{t.searchType==="EQ"&&(t.type==="CODE"?e.push({key:t.field,label:t.label+(t.required?" *":""),type:"select",nullLabel:t.label+" \uC804\uCCB4",options:()=>(T[t.codeGrp]||[]).map(n=>({value:n.codeValue,label:n.codeLabel}))}):e.push({key:t.field,label:t.label+(t.required?" *":""),type:"text",placeholder:t.label}))}),e}),pe=(e,t)=>{if(e==="searchParam-list")return f.pageNo=1,S();if(e==="searchParam-reset")return fe(),f.pageNo=1,S();if(e==="grid-setPage")return f.pageNo=t,S();if(e==="grid-sizeChange")return f.pageNo=1,S();if(e==="picked-clear"){d.splice(0,d.length);return}if(e==="picked-remove"){xe(t);return}if(e==="modal-confirm")return ve();if(e==="modal-close")return E();console.warn("[handleBtnAction] unknown cmd:",e)},_=(e,t)=>{if(e==="tree-select")return I.value?G(ge(t)):(b.selectedId=t,f.pageNo=1,S());if(e==="tree-all")return b.selectedId=null,f.pageNo=1,S();if(e==="tree-clear"){const n={id:null,nm:""};return i.idField&&(n[i.idField]=null),i.nmField&&(n[i.nmField]=""),w("select",n),E()}if(e==="tree-toggle"){y[t]=!y[t];return}if(e==="tree-expandAll"){$.value,h.forEach(n=>{y[String(n.id)]=!0});return}if(e==="tree-collapseAll"){Object.keys(y).forEach(n=>{y[n]=!1});return}if(e==="row-pick")return G(t);if(e==="row-toggle")return w("toggle",t);console.warn("[handleSelectAction] unknown cmd:",e)},ue=(e,t,n,l={})=>{if(e==="pickGrid-cellClick")return m.value?_("row-toggle",n):v.value||t==="btn_row_select"||l.col&&l.col.link||t==="__no__"?_("row-pick",n):void 0;console.warn("[handleGridCellAction] unknown cmd:",e)},D=()=>{if(!v.value)return;const e=Array.isArray(a.initSelectedIds)?a.initSelectedIds:null;if(!e)return;d.splice(0,d.length);const t=[...h,...x];e.forEach(n=>{const l=t.find(o=>String(o.id)===String(n));d.push(l||{id:n,nm:String(n)})})},U=async()=>{var e;if(!(p.ready||p.initing)){p.initing=!0;try{const t={siteId:z.value},l=((e=(await boApiSvc.cmPopupPick.getConfig(a.popupCode,t,"\uC120\uD0DD\uD31D\uC5C5","\uAD6C\uC131\uC870\uD68C")).data)==null?void 0:e.data)||{};B(),Object.assign(i,{popupNm:l.popupNm||"",popupPattern:l.popupPattern||1,multiYn:l.multiYn||"N",pagingYn:l.pagingYn||"Y",pageSize:l.pageSize||10,modalWidth:l.modalWidth||"900px",idField:l.idField||"id",nmField:l.nmField||"nm",dateField:l.dateField||"",hasTree:!!l.hasTree,searchCols:l.searchCols||[],listCols:l.listCols||[],sysScope:l.sysScope||""}),f.pageSize=i.pageSize,await be(),W(),p.ready=!0,M.value&&await Se(),L.value&&(R().length?p.needCond=!0:await S())}catch(t){p.errorMsg=coUtil.cofErrMsg(t,"\uD31D\uC5C5 \uAD6C\uC131\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{p.initing=!1}}};J(async()=>{a.show&&(await U(),D())}),X(()=>a.show,async e=>{e&&(await U(),D())});const q=()=>{const e=window.boUtil||window.foUtil;e&&e.bofApplyDateRange&&e.bofApplyDateRange(u,u.dateRange,"dateStart","dateEnd")},W=()=>{const e=[i.idField,i.nmField].filter(Boolean);u.searchFields=e.join("^"),u.dateRange="1year",q()},fe=()=>{Object.keys(u).forEach(e=>{u[e]=""}),u.searchValue="",W(),b.selectedId=null},ge=e=>h.find(t=>String(t.id)===String(e))||null,he=e=>{const t={};h.forEach(o=>{const s=o.parentId==null||o.parentId===""?"__root__":String(o.parentId);(t[s]=t[s]||[]).push(String(o.id))});const n=[],l=o=>{n.push(o),(t[o]||[]).forEach(l)};return l(String(e)),n},ye=()=>{const e={siteId:z.value,...a.initParam||{}};Object.keys(u).forEach(n=>{u[n]&&(e[n]=u[n])}),b.selectedId&&(e.idIn=he(b.selectedId).join("^"));const t=ie.value;return t.length&&(e.excludeIds=t.join("^")),e.pageNo=f.pageNo,e.pageSize=f.pageSize,e},be=async()=>{const e=[...new Set([...i.listCols||[],...i.searchCols||[]].filter(t=>t.type==="CODE"&&t.codeGrp).map(t=>t.codeGrp))];e.length&&await Promise.all(e.map(async t=>{var n;try{const l=await coApiSvc.syCode.getGrpCodes(t,"\uC120\uD0DD\uD31D\uC5C5","\uCF54\uB4DC\uC870\uD68C");T[t]=((n=l.data)==null?void 0:n.data)||[]}catch{T[t]=[]}}))},me=e=>{if(e.type==="CODE")return t=>ke(e.codeGrp,t);if(e.type==="NUMBER")return t=>t==null||t===""?"":Number(t).toLocaleString();if(e.type==="DATE")return t=>String(t||"").replace("T"," ").slice(0,16)},ke=(e,t)=>{if(t==null||t==="")return"";const n=(T[e]||[]).find(l=>String(l.codeValue)===String(t));return n&&(n.codeLabel||n.codeNm)||t},R=()=>(i.searchCols||[]).filter(e=>e.required).filter(e=>!u[e.field]).map(e=>e.label),S=async()=>{var t,n,l;if(!p.ready)return;const e=R();if(e.length)return p.needCond=!0,(t=window.boApp)==null?void 0:t.showToast(e.join(", ")+" \uC744(\uB97C) \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");p.needCond=!1,p.loading=!0;try{const o=ye(),c=((n=(await boApiSvc.cmPopupPick.getPage(a.popupCode,o,"\uC120\uD0DD\uD31D\uC5C5","\uC870\uD68C")).data)==null?void 0:n.data)||{};B(),x.splice(0,x.length,...c.pageList||[]),f.pageTotalCount=c.pageTotalCount||0,f.pageTotalPage=c.pageTotalPage||1}catch(o){(l=window.boApp)==null||l.showToast(coUtil.cofErrMsg(o,"\uC870\uD68C \uC624\uB958"),"error",0)}finally{p.loading=!1}},Se=async()=>{var e,t;try{const n={siteId:z.value,...a.initParam||{}},o=((e=(await boApiSvc.cmPopupPick.getTree(a.popupCode,n,"\uC120\uD0DD\uD31D\uC5C5","\uD2B8\uB9AC\uC870\uD68C")).data)==null?void 0:e.data)||[];B(),h.splice(0,h.length,...o),h.filter(s=>s.parentId==null||s.parentId==="").forEach(s=>{y[String(s.id)]=!0})}catch(n){(t=window.boApp)==null||t.showToast(coUtil.cofErrMsg(n,"\uD2B8\uB9AC \uC870\uD68C \uC624\uB958"),"error",0)}},G=e=>{if(!e)return;if(!C.value){w("select",e),E(!0);return}const t=d.findIndex(n=>String(n.id)===String(e.id));t>=0?d.splice(t,1):d.push(e)},xe=e=>{const t=d.findIndex(n=>String(n.id)===String(e.id));t>=0&&d.splice(t,1)},E=(e=!1)=>{A("close"),!e&&a.onCallback&&a.onCallback(P(),null,null)},ve=()=>{var t;let e=!1;if(v.value){if(!d.length&&!Array.isArray(a.initSelectedIds))return(t=window.boApp)==null?void 0:t.showToast("\uC120\uD0DD\uB41C \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error");const n=d.slice();w("select",n),e=!0}E(e)},we=e=>e._hasKids?y[String(e.id)]?"\u25BC":"\u25B6":"",Ce=e=>e._hasKids?y[String(e.id)]?"\u{1F4C2}":"\u{1F4C1}":"\u{1F4C4}",Ae=r(()=>M.value&&L.value?"display:grid;grid-template-columns:240px 1fr;gap:0 12px;":""),Pe=r(()=>I.value?"padding:10px;max-height:56vh;overflow:auto;":"padding:10px;max-height:46vh;overflow:auto;");return{cfg:i,uiState:p,rows:x,picked:d,searchParam:u,gridPager:f,treeState:b,fnMissingRequired:R,cfIsMulti:C,cfTitle:Y,cfHeadTitle:te,cfPopupTooltip:ne,cfHasTree:M,cfTreeOnly:I,cfHasList:L,cfHasPickList:v,cfHasPager:le,cfIsToggle:m,cfSelectedSet:H,cfGridColumns:se,cfSearchColumns:de,cfTreeVisible:$,cfTreeLayoutStyle:Ae,cfTreeCardStyle:Pe,cfPickedSet:K,cfIsCheckMode:ae,fnIsPicked:k,fnRowStyle:re,fnRowClass:oe,fnAllPickedOnPage:j,handleToggleAllOnPage:V,fnTreeArrow:we,fnTreeNodeIcon:Ce,fnTreeNodeStyle:e=>{const t=`display:flex;align-items:center;gap:4px;padding:4px 6px;border-radius:4px;cursor:pointer;font-size:12px;padding-left:${6+e._depth*14}px;`;return k(e)?t+"background:#dbeafe;color:#1d4ed8;font-weight:700;":String(b.selectedId)===String(e.id)?t+"outline:2px solid #2563eb;background:#eff6ff;font-weight:700;":t},handleBtnAction:pe,handleSelectAction:_,handleGridCellAction:ue}},template:`
<bo-modal :show="show" :title="cfTitle" :width="cfg.modalWidth" max-width="96vw"
  min-height="560px"
  @close="handleBtnAction('modal-close')">
  <template #title>
    <span :title="cfPopupTooltip" style="cursor:help;margin-right:4px;line-height:1;">\u{1F9E9}</span>{{ cfTitle }}
  </template>
  <div v-if="uiState.errorMsg" style="padding:24px;text-align:center;color:#dc2626;">
    {{ uiState.errorMsg }}
  </div>
  <template v-else>
  <div class="cm-pick-body">
    <!-- 1\uB2E8 \uC870\uD68C\uC601\uC5ED -->
    <bo-search-area :loading="uiState.loading" :columns="cfSearchColumns" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />

    <!-- 2\uB2E8 \uD2B8\uB9AC / \uBAA9\uB85D (\uD328\uD1343=\uD2B8\uB9AC \uC804\uC6A9\uC774\uBA74 \uBAA9\uB85D \uC5C6\uC774 \uD2B8\uB9AC\uB9CC \uC804\uCCB4 \uD3ED) -->
    <div :style="cfTreeLayoutStyle">
      <div v-if="cfHasTree" class="card cm-pick-card" :style="cfTreeCardStyle">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:12px;font-weight:600;color:#555;">\u{1F4C2} {{ cfTreeOnly ? cfTitle : '\uBD84\uB958' }}</span>
          <div style="display:flex;gap:4px;">
            <button class="btn btn_expand_all btn-xs" @click="handleSelectAction('tree-expandAll')">\uD3BC\uCE68</button>
            <button class="btn btn_collapse_all btn-xs" @click="handleSelectAction('tree-collapseAll')">\uC811\uAE30</button>
          </div>
        </div>
        <div v-if="!cfTreeOnly"
          :style="treeState.selectedId ? 'font-size:12px;padding:4px 6px;cursor:pointer;color:#1677ff;' : 'font-size:12px;padding:4px 6px;cursor:pointer;outline:2px solid #2563eb;border-radius:4px;font-weight:700;'"
          @click="handleSelectAction('tree-all')">\u{1F4C1} \uC804\uCCB4</div>
        <!-- \uD2B8\uB9AC \uC804\uC6A9\uC5D0\uC11C \uC120\uD0DD \uD574\uC81C (\uC0C1\uC704 \uC5C6\uC74C / \uBBF8\uC9C0\uC815) -->
        <div v-if="cfTreeOnly ? clearable : false"
          style="font-size:12px;padding:4px 6px;cursor:pointer;color:#1677ff;border-bottom:1px solid #eee;margin-bottom:4px;"
          @click="handleSelectAction('tree-clear')">\u{1F4C1} \uC120\uD0DD \uC548\uD568 (\uCD5C\uC0C1\uC704)</div>
        <div v-for="n in cfTreeVisible" :key="n.id" :style="fnTreeNodeStyle(n)">
          <span style="width:12px;flex-shrink:0;color:#94a3b8;font-size:10px;cursor:pointer;"
            @click="handleSelectAction('tree-toggle', String(n.id))">
            {{ fnTreeArrow(n) }}
          </span>
          <span :style="n._hasKids ? 'width:16px;flex-shrink:0;cursor:pointer;' : 'width:16px;flex-shrink:0;'"
            @click="n._hasKids ? handleSelectAction('tree-toggle', String(n.id)) : null">
            {{ fnTreeNodeIcon(n) }}
          </span>
          <span style="flex:1;cursor:pointer;" @click="handleSelectAction('tree-select', n.id)">{{ n.nm }}</span>
          <span v-if="fnIsPicked(n)" style="margin-left:auto;color:#2563eb;font-weight:700;">\u2713</span>
        </div>
        <div v-if="!cfTreeVisible.length" style="padding:12px;text-align:center;color:#aaa;font-size:12px;">
          \uD45C\uC2DC\uD560 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>

      <div v-if="cfHasList" class="cm-pick-card" style="padding:8px;">
        <!-- \uCCB4\uD06C\uD615(\uD1A0\uAE00\xB7\uB2E4\uC911)\uC740 \uC5B4\uB290 \uC140\uC744 \uB20C\uB7EC\uB3C4 \uB2F4\uAE30/\uBE7C\uAE30\uAC00 \uB418\uC5B4\uC57C \uD558\uBBC0\uB85C row-clickable \uD544\uC694
             (BoGrid \uB294 \uC774 \uC635\uC158\uC774 \uC5C6\uC73C\uBA74 \uBC88\uD638\xB7\uB9C1\uD06C \uC140\uC5D0\uC11C\uB9CC cell-click \uC744 \uC62C\uB9B0\uB2E4) -->
        <bo-grid :columns="cfGridColumns" :rows="rows" row-key="id" :loading="uiState.loading"
          :pager="gridPager" :empty-text="uiState.needCond ? '\uD544\uC218 \uC870\uD68C\uC870\uAC74\uC744 \uC785\uB825\uD558\uACE0 [\uC870\uD68C] \uB97C \uB204\uB974\uC138\uC694.' : '\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.'" :row-style="fnRowStyle" :row-class="fnRowClass"
          table-max-height="46vh"
          :row-clickable="cfIsCheckMode"
          grid-id="pickGrid-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        <bo-pager v-if="cfHasPager" :pager="gridPager"
          :on-set-page="n => handleBtnAction('grid-setPage', n)"
          :on-size-change="() => handleBtnAction('grid-sizeChange')" />
      </div>
    </div>

    <!-- 3\uB2E8 \uC120\uD0DD\uBAA9\uB85D -->
    <div v-if="cfHasPickList" class="card cm-pick-card" style="padding:10px;margin-top:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span class="list-title" style="font-size:12px;">\uC120\uD0DD \uBAA9\uB85D <span style="color:#e8587a;">{{ picked.length }}</span>\uAC74</span>
        <button v-if="picked.length" class="btn btn_uncheck_all btn-xs"
          @click="handleBtnAction('picked-clear')">\uC804\uCCB4 \uD574\uC81C</button>
      </div>
      <div v-if="!picked.length" style="padding:10px;text-align:center;color:#aaa;font-size:12px;">
        \uBAA9\uB85D\uC5D0\uC11C \uD074\uB9AD\uD574 \uC120\uD0DD\uD558\uC138\uC694.
      </div>
      <div v-else style="display:flex;flex-wrap:wrap;gap:6px;">
        <span v-for="p in picked" :key="p.id"
          style="display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border:1px solid #ddd;border-radius:14px;font-size:12px;background:#f8fafc;">
          {{ p.nm }}
          <span style="cursor:pointer;color:#dc2626;font-weight:700;"
            @click="handleBtnAction('picked-remove', p)">\u2715</span>
        </span>
      </div>
    </div>
  </div><!-- /cm-pick-body -->
  </template>

  <template #footer>
    <button v-if="cfHasPickList" class="btn btn_select" @click="handleBtnAction('modal-confirm')">
      \uC120\uD0DD ({{ picked.length }})
    </button>
    <button class="btn btn_close" @click="handleBtnAction('modal-close')">\uB2EB\uAE30</button>
  </template>
</bo-modal>
`};
