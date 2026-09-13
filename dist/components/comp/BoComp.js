window.BoPathTree={name:"BoPathTree",props:{bizCd:{type:String,required:!0},selected:{default:null},showBizCd:{type:Boolean,default:!1},expandDepth:{type:Number,default:2},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:h}){const{ref:c,reactive:a,computed:o,watch:y,onMounted:m}=Vue,B=(i,t={})=>{if(i==="tree-expand-all")return I();if(i==="tree-collapse-all")return s();console.warn("[handleBtnAction] unknown cmd:",i)},v=(i,t={})=>{if(i==="tree-node-toggle")return r(t);if(i==="tree-node-select")return l(t);console.warn("[handleSelectAction] unknown cmd:",i)},w=window._pathTreeCache=window._pathTreeCache||{},f=a({pathId:null,pathLabel:"\uC804\uCCB4",children:[],count:0}),n=a(new Set([null])),d=c(!1),u=(i,t)=>{const b=i.filter(x=>x.useYn!=="N"),k={};b.forEach(x=>{const C=x.parentPathId==null?"__root__":x.parentPathId;(k[C]=k[C]||[]).push(x)}),(k.__root__||[]).forEach(x=>{if(t&&x.pathLabel===t){const C=k[x.pathId]||[];k.__root__=k.__root__.filter(P=>P!==x).concat(C)}});const _=(x,C)=>(k[x]||[]).sort((P,M)=>(P.sortOrd||0)-(M.sortOrd||0)).map(P=>{const M=P.bizCd||C||"";return{pathId:P.pathId,pathLabel:P.pathLabel,bizCd:M,children:_(P.pathId,M),count:0}}),T={pathId:null,pathLabel:"\uC804\uCCB4",children:_("__root__",t||""),count:0},V=x=>(x.count=(x.children||[]).reduce((C,P)=>C+V(P)+1,0),x.count);return V(T),(e.counts&&e.counts.__orphan__||0)>0&&T.children.push({pathId:"__orphan__",pathLabel:"\uAE30\uD0C0",bizCd:"",children:[],count:0,isNone:!0}),T},g=(i,t,b)=>{t>b||(n.add(i.pathId),(i.children||[]).forEach(k=>g(k,t+1,b)))},A=i=>{f.pathId=i.pathId,f.pathLabel=i.pathLabel,f.children=i.children,f.count=i.count},S=async()=>{var i;if(w[e.bizCd]){A(u(w[e.bizCd],e.bizCd)),n.clear(),g(f,0,e.expandDepth);return}d.value=!0;try{const b=((i=(await boApiSvc.syPath.getPage({pageNo:1,pageSize:1e4,bizCd:e.bizCd},"\uACBD\uB85C\uD2B8\uB9AC","\uC870\uD68C")).data)==null?void 0:i.data)||{},k=b.pageList||b.list||[];w[e.bizCd]=k,window._boCmPaths=[...(window._boCmPaths||[]).filter(N=>N.bizCd!==e.bizCd),...k],A(u(k,e.bizCd)),n.clear(),g(f,0,e.expandDepth)}catch(t){console.error("[PathTree] load error",t)}finally{d.value=!1}},r=i=>{n.has(i)?n.delete(i):n.add(i)},l=i=>{h("select",i)},I=()=>{const i=t=>{n.add(t.pathId),(t.children||[]).forEach(i)};i(f)},s=()=>{n.clear(),n.add(null)};return y(()=>e.bizCd,()=>{delete w[e.bizCd],S()}),m(S),{tree:f,expanded:n,loading:d,handleBtnAction:B,handleSelectAction:v,toggleNode:r,selectNode:l}},template:`
<div>
  <div style="display:flex;gap:4px;margin-bottom:8px;">
    <button class="btn btn_expand_all" @click="handleBtnAction('tree-expand-all')"  style="flex:1;font-size:11px;">
      \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
    </button>
    <button class="btn btn_collapse_all" @click="handleBtnAction('tree-collapse-all')" style="flex:1;font-size:11px;">
      \u25B6 \uC804\uCCB4\uB2EB\uAE30
    </button>
  </div>
  <div v-if="loading" style="font-size:11px;color:#aaa;padding:8px;text-align:center;">
    \uB85C\uB529\uC911...
  </div>
  <bo-path-tree-node v-else
    :node="tree" :expanded="expanded" :selected="selected"
    :on-toggle="toggleNode" :on-select="selectNode"
    :depth="0" :show-biz-cd="showBizCd" :counts="counts" />
</div>
`},window.BoMenuTree={name:"BoMenuTree",props:{selected:{default:null},expandDepth:{type:Number,default:2},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:h}){const{ref:c,reactive:a,watch:o,onMounted:y}=Vue,m=(s,i={})=>{if(s==="tree-expand-all")return l();if(s==="tree-collapse-all")return I();console.warn("[handleBtnAction] unknown cmd:",s)},B=(s,i={})=>{if(s==="tree-node-toggle")return S(i);if(s==="tree-node-select")return r(i);console.warn("[handleSelectAction] unknown cmd:",s)},v=window._menuTreeCache=window._menuTreeCache||{},w=a({pathId:null,pathLabel:"\uC804\uCCB4",children:[],count:0}),f=a(new Set([null])),n=c(!1),d=s=>{const i=s.filter(_=>_.useYn!=="N"),t={};i.forEach(_=>{const T=_.parentMenuId==null?"__root__":_.parentMenuId;(t[T]=t[T]||[]).push(_)});const b=_=>(t[_]||[]).sort((T,V)=>(T.sortOrd||0)-(V.sortOrd||0)).map(T=>({pathId:T.menuId,pathLabel:T.menuNm,bizCd:"",children:b(T.menuId),count:0})),k={pathId:null,pathLabel:"\uC804\uCCB4",children:b("__root__"),count:0},N=_=>(_.count=(_.children||[]).reduce((T,V)=>T+N(V)+1,0),_.count);return N(k),k},u=(s,i,t)=>{i>t||(f.add(s.pathId),(s.children||[]).forEach(b=>u(b,i+1,t)))},g=s=>{w.pathId=s.pathId,w.pathLabel=s.pathLabel,w.children=s.children,w.count=s.count},A=async()=>{var s;if(v.list){g(d(v.list)),f.clear(),u(w,0,e.expandDepth);return}n.value=!0;try{const t=((s=(await boApiSvc.syMenu.getList({pageNo:1,pageSize:1e4},"\uBA54\uB274\uD2B8\uB9AC","\uC870\uD68C")).data)==null?void 0:s.data)||[];v.list=t,g(d(t)),f.clear(),u(w,0,e.expandDepth)}catch(i){console.error("[MenuTree] load error",i)}finally{n.value=!1}},S=s=>{f.has(s)?f.delete(s):f.add(s)},r=s=>{h("select",s)},l=()=>{const s=i=>{f.add(i.pathId),(i.children||[]).forEach(s)};s(w)},I=()=>{f.clear(),f.add(null)};return y(A),{tree:w,expanded:f,loading:n,handleBtnAction:m,handleSelectAction:B,toggleNode:S,selectNode:r}},template:`
<div>
  <div style="display:flex;gap:4px;margin-bottom:8px;">
    <button class="btn btn_expand_all" @click="handleBtnAction('tree-expand-all')"  style="flex:1;font-size:11px;">
      \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
    </button>
    <button class="btn btn_collapse_all" @click="handleBtnAction('tree-collapse-all')" style="flex:1;font-size:11px;">
      \u25B6 \uC804\uCCB4\uB2EB\uAE30
    </button>
  </div>
  <div v-if="loading" style="font-size:11px;color:#aaa;padding:8px;text-align:center;">
    \uB85C\uB529\uC911...
  </div>
  <bo-path-tree-node v-else
    :node="tree" :expanded="expanded" :selected="selected"
    :on-toggle="toggleNode" :on-select="selectNode"
    :depth="0" :show-biz-cd="false" :counts="counts" />
</div>
`},window.BoPathTreeNode={name:"BoPathTreeNode",props:{node:{type:Object,required:!0},expanded:{type:Object,required:!0},selected:{default:null},onToggle:{type:Function,required:!0},onSelect:{type:Function,required:!0},depth:{type:Number,default:0},showBizCd:{type:Boolean,default:!1},counts:{type:Object,default:null}},setup(e){return{handleBtnAction:(a,o={})=>{if(a==="node-toggle")return e.onToggle(o);console.warn("[handleBtnAction] unknown cmd:",a)},handleSelectAction:(a,o={})=>{if(a==="node-select")return e.onSelect(o);if(a==="node-hover"){if(!o||!o.currentTarget)return;o.currentTarget.style.background=e.selected===e.node.pathId?"#eff6ff":"#f8f9fb"}else if(a==="node-leave"){if(!o||!o.currentTarget)return;o.currentTarget.style.background=e.selected===e.node.pathId?"#eff6ff":"transparent"}else console.warn("[handleSelectAction] unknown cmd:",a)}}},template:`
<div>
  <div @click="handleSelectAction('node-select', node.pathId)"
    :style="{ display:'flex', alignItems:'center', gap:'4px', padding:'5px 6px', cursor:'pointer', borderRadius:'4px',
    paddingLeft: (8 + depth*14) + 'px',
    background: selected===node.pathId ? '#eff6ff' : 'transparent',
    color:      selected===node.pathId ? '#1d4ed8' : (depth===0 ? '#1a1a2e' : '#444'),
    fontWeight: (selected===node.pathId || depth===0) ? 700 : 400,
    fontSize: depth===0 ? '13px' : '12px',
    borderBottom: depth===0 ? '1px solid #f0f0f0' : 'none',
    marginBottom: depth===0 ? '2px' : '0',
    outline:       selected===node.pathId ? '2px solid #2563eb' : 'none',
    outlineOffset: selected===node.pathId ? '-2px' : '0',
    position:'relative', zIndex: selected===node.pathId ? 1 : 'auto' }"
    @mouseover="handleSelectAction('node-hover', $event)"
    @mouseout="handleSelectAction('node-leave', $event)">
    <!-- \uD1A0\uAE00 \uC544\uC774\uCF58 (\uC790\uC2DD \uC788\uC74C: \u25B6/\u25BC, \uC790\uC2DD \uC5C6\uC74C: \uC5EC\uBC31) -->
    <span v-if="(node.children||[]).length>0"
      style="width:14px;font-size:9px;color:#bbb;flex-shrink:0;display:flex;align-items:center;justify-content:center;"
      @click.stop="handleBtnAction('node-toggle', node.pathId)">
      {{ expanded.has(node.pathId) ? '\u25BC' : '\u25B6' }}
    </span>
    <span v-else style="width:14px;flex-shrink:0"></span>
    <!-- \uD3F4\uB354 \uC544\uC774\uCF58 -->
    <span style="font-size:13px;line-height:1;flex-shrink:0;">
      {{ depth===0 ? '\u{1F5C2}' : ((node.children||[]).length>0 ? (expanded.has(node.pathId) ? '\u{1F4C2}' : '\u{1F4C1}') : '\u{1F4C4}') }}
    </span>
    <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
      {{ node.pathLabel || '(\uC774\uB984\uC5C6\uC74C)' }}
    </span>
    <span v-if="showBizCd ? (node.bizCd) : false" style="font-size:9px;color:#aaa;font-family:monospace;flex-shrink:0;margin-left:2px;">
    #{{ node.bizCd }}
  </span>
  <!-- counts(\uC678\uBD80 \uB370\uC774\uD130 \uC218) \uAC00 \uC81C\uACF5\uB418\uACE0 \uBE44\uC5B4\uC788\uC9C0 \uC54A\uC73C\uBA74 \uC6B0\uC120 \uD45C\uC2DC (\uBC31\uC5D4\uB4DC\uAC00 \uC790\uC190 \uB204\uC801\uAE4C\uC9C0 \uACC4\uC0B0\uD574 \uC81C\uACF5).
       node.pathId === null (\uB8E8\uD2B8 "\uC804\uCCB4") \uC740 counts['__total__'] \uB85C \uB9E4\uD551.
       counts \uAC00 \uC81C\uACF5\uB410\uC9C0\uB9CC \uD574\uB2F9 \uD0A4\uAC00 \uC5C6\uC73C\uBA74 0 \uC73C\uB85C \uD45C\uC2DC (\uB370\uC774\uD130 \uC5C6\uC74C\uC744 \uBA85\uC2DC).
       counts \uBBF8\uC81C\uACF5 \uB610\uB294 \uC544\uC9C1 \uB85C\uB4DC \uC804(\uBE48 \uAC1D\uCCB4) \uC774\uBA74 node.count(\uACBD\uB85C \uC790\uC190\uC218) \uD3F4\uBC31 \uD45C\uC2DC. -->
  <span v-if="counts ? (Object.keys(counts).length > 0) : false"
    style="font-size:10px;color:#1677ff;background:#e6f4ff;padding:1px 6px;border-radius:8px;flex-shrink:0;font-weight:600;">
    {{ counts[node.pathId == null ? '__total__' : node.pathId] != null
       ? counts[node.pathId == null ? '__total__' : node.pathId]
       : 0 }}
  </span>
  <span v-else-if="node.count != null" style="font-size:10px;color:#999;background:#f5f5f5;padding:1px 5px;border-radius:8px;flex-shrink:0;">
    {{ node.count }}
  </span>
</div>
<div v-if="expanded.has(node.pathId) ? ((node.children||[]).length>0) : false">
<bo-path-tree-node v-for="ch in node.children" :key="ch.pathId"
      :node="ch" :expanded="expanded" :selected="selected"
      :on-toggle="onToggle" :on-select="onSelect" :depth="depth+1" :show-biz-cd="showBizCd" :counts="counts" />
</div>
</div>
`},window.BoCategoryTree={name:"BoCategoryTree",props:{mode:{type:String,default:"tree"},selected:{default:null},showCount:{type:Function,default:null},maxHeight:{type:String,default:"65vh"},show:{type:Boolean,default:!1},excludeIds:{type:Object,default:()=>new Set},siteId:{type:String,default:null},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["select","close"],setup(e,{emit:h}){const{ref:c,reactive:a,computed:o,watch:y,onMounted:m}=Vue,B=(p,x={})=>{if(p==="tree-expand-all")return t();if(p==="tree-collapse-all")return b();if(p==="picker-close")return N();if(p==="picker-confirm")return V();console.warn("[handleBtnAction] unknown cmd:",p)},v=(p,x={})=>{if(p==="tree-node-select")return k(x);if(p==="tree-node-toggle")return i(x);if(p==="picker-select")return T(x);console.warn("[handleSelectAction] unknown cmd:",p)},w=window._categoryTreeCache=window._categoryTreeCache||{list:null,bySite:{}},f=o(()=>e.siteId||window.boCommonFilter&&window.boCommonFilter.siteId||null),n=a([]),d=a(new Set),u=c(!1),g=c(""),A=p=>({0:"#e8587a",1:"#1677ff",2:"#3ba87a"})[p]||"#999",S=(p,x,C)=>x?C?"\u{1F4C2}":"\u{1F4C1}":"\u{1F4C4}",r=async()=>{var C,P,M,z;const p=f.value||"__all__",x=w.bySite[p];if(x){n.splice(0,n.length,...x),l();return}u.value=!0;try{const L={pageNo:1,pageSize:1e4};f.value&&(L.siteId=f.value);const E=await boApiSvc.pdCategory.getPage(L,"\uCE74\uD14C\uACE0\uB9AC","\uC870\uD68C"),O=((P=(C=E.data)==null?void 0:C.data)==null?void 0:P.pageList)||((z=(M=E.data)==null?void 0:M.data)==null?void 0:z.list)||[];w.bySite[p]=O,w.list=O,n.splice(0,n.length,...O),l()}catch(L){console.error("[CategoryTree] load error",L)}finally{u.value=!1}};y(f,()=>{r()});const l=()=>{d.clear(),n.filter(p=>p.categoryDepth===1).forEach(p=>d.add(p.categoryId))},I=o(()=>{const p=d,x={};n.forEach(z=>{x[z.categoryId]={...z,_children:[]}}),n.forEach(z=>{z.parentCategoryId&&x[z.parentCategoryId]&&x[z.parentCategoryId]._children.push(x[z.categoryId])});const C=n.filter(z=>!z.parentCategoryId).map(z=>x[z.categoryId]).sort((z,L)=>(z.sortOrd||0)-(L.sortOrd||0)),P=[],M=(z,L)=>{P.push({...z,_depth:L,_hasChildren:z._children.length>0}),d.has(z.categoryId)&&[...z._children].sort((E,O)=>(E.sortOrd||0)-(O.sortOrd||0)).forEach(E=>M(E,L+1))};return C.forEach(z=>M(z,0)),P}),s=o(()=>{const p=g.value.trim().toLowerCase();return n.filter(x=>{var C;return(C=e.excludeIds)!=null&&C.has(String(x.categoryId))?!1:p?(x.categoryNm||"").toLowerCase().includes(p):!0}).sort((x,C)=>(x.categoryDepth||1)-(C.categoryDepth||1))}),i=p=>{d.has(p)?d.delete(p):d.add(p)},t=()=>{d.clear(),n.forEach(p=>d.add(p.categoryId))},b=()=>{d.clear()},k=p=>h("select",p),N=()=>{g.value="",_.value=null,h("close"),e.onCallback&&e.onCallback(e.modalName,null,null)},_=c(null),T=p=>{_.value=p},V=()=>{if(!_.value)return;const p=_.value;g.value="",_.value=null,h("select",p),e.onCallback&&e.onCallback(e.modalName,null,p)};return y(()=>e.show,p=>{p&&(g.value="",_.value=null)}),m(r),{loading:u,categories:n,cfTreeFlat:I,cfPickerList:s,expandedSet:d,pickerSearch:g,pickerTempCat:_,handleBtnAction:B,handleSelectAction:v,DEPTH_COLOR:A,DEPTH_BULLET:S}},template:`
<template v-if="mode==='tree'">
  <div v-if="loading" style="font-size:11px;color:#aaa;padding:12px;text-align:center;">
    \uB85C\uB529\uC911...
  </div>
  <template v-else>
    <div style="display:flex;gap:4px;margin-bottom:8px;flex-shrink:0;">
      <button class="btn btn-secondary btn-xs" style="flex:1;font-size:11px" @click="handleBtnAction('tree-expand-all')">
        \u25BC \uC804\uCCB4
      </button>
      <button class="btn btn-secondary btn-xs" style="flex:1;font-size:11px" @click="handleBtnAction('tree-collapse-all')">
        \u25B6 \uB2EB\uAE30
      </button>
    </div>
    <div :style="'overflow-y:auto;max-height:' + maxHeight">
    <!-- \uC804\uCCB4 \uB8E8\uD2B8 \uD56D\uBAA9 -->
    <div style="border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:2px;padding:5px 6px;margin-bottom:2px"
      :style="{ background: selected===null ? '#eff6ff' : 'transparent',
      color:      selected===null ? '#1d4ed8' : '#555',
      fontWeight: selected===null ? 700 : 500,
      outline:       selected===null ? '2px solid #2563eb' : 'none',
      outlineOffset: selected===null ? '-2px' : '0',
      position:'relative', zIndex: selected===null ? 1 : 'auto' }"
      @click="handleSelectAction('tree-node-select', null)">
      <span style="width:14px;flex-shrink:0"></span>
      <span style="font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;">\u{1F5C2}</span>
      <span style="font-size:12px;flex:1">\uC804\uCCB4</span>
      <span v-if="showCount ? (showCount(null) > 0) : false" style="font-size:10px;color:#1677ff;background:#e6f4ff;padding:1px 6px;border-radius:8px;font-weight:600;flex-shrink:0;margin-left:4px;">
        {{ showCount(null) }}
      </span>
    </div>
    <div v-for="cat in cfTreeFlat" :key="cat.categoryId"
      style="border-radius:4px;display:flex;align-items:center;gap:2px;padding:5px 6px"
      :style="{ paddingLeft:(cat._depth*14+6)+'px',
      background: selected===cat.categoryId ? '#eff6ff' : 'transparent',
      color:      selected===cat.categoryId ? '#1d4ed8' : '#333',
      fontWeight: selected===cat.categoryId ? 600 : 400,
      outline:       selected===cat.categoryId ? '2px solid #2563eb' : 'none',
      outlineOffset: selected===cat.categoryId ? '-2px' : '0',
      position:'relative', zIndex: selected===cat.categoryId ? 1 : 'auto' }">
      <span v-if="cat._hasChildren"
        style="width:14px;text-align:center;font-size:9px;color:#bbb;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"
        @click="handleSelectAction('tree-node-toggle', cat.categoryId)">
        {{ expandedSet.has(cat.categoryId) ? '\u25BC' : '\u25B6' }}
      </span>
      <span v-else style="width:14px;flex-shrink:0"></span>
      <span :style="cat._hasChildren ? 'font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;cursor:pointer;' : 'font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;'"
        @click="cat._hasChildren ? handleSelectAction('tree-node-toggle', cat.categoryId) : null">
        {{ DEPTH_BULLET(cat._depth, cat._hasChildren, expandedSet.has(cat.categoryId)) }}
      </span>
      <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;"
        @click="handleSelectAction('tree-node-select', cat.categoryId)">
        {{ cat.categoryNm }}
      </span>
      <span v-if="showCount ? (showCount(cat.categoryId) > 0) : false" style="font-size:10px;color:#1677ff;background:#e6f4ff;padding:1px 6px;border-radius:8px;font-weight:600;flex-shrink:0;margin-left:4px;">
        {{ showCount(cat.categoryId) }}
      </span>
      <span v-if="cat.categoryStatusCd==='INACTIVE'" style="font-size:10px;color:#bbb;margin-left:4px">(\uBE44\uD65C\uC131)</span>
    </div>
  <div v-if="!cfTreeFlat.length" style="text-align:center;padding:20px;color:#aaa;font-size:12px">
    \uCE74\uD14C\uACE0\uB9AC \uC5C6\uC74C
  </div>
  </div>
</template>
</template>
<teleport v-else-if="mode==='picker'" to="body">
  <div v-if="show" style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:9000;display:flex;align-items:center;justify-content:center;" @click.self="handleBtnAction('picker-close')">
    <div style="background:#fff;border-radius:12px;width:420px;max-height:520px;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(0,0,0,0.18);">
      <div style="padding:16px 20px 12px;border-bottom:1px solid #f0f0f0;background:linear-gradient(135deg,#fff0f4,#ffe4ec);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-weight:700;font-size:15px;">
          \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD
        </span>
        <button type="button" @click="handleBtnAction('picker-close')" style="border:none;background:none;font-size:18px;cursor:pointer;color:#888;">
          \u2715
        </button>
      </div>
      <div style="padding:8px 12px;">
        <input class="form-control" v-model="pickerSearch" placeholder="\uCE74\uD14C\uACE0\uB9AC \uAC80\uC0C9..." style="font-size:13px;" />
      </div>
      <div style="overflow-y:auto;flex:1;padding:4px 8px 12px;">
        <!-- \uAC80\uC0C9\uC5B4 \uC5C6\uC74C: \uD2B8\uB9AC \uBDF0 -->
        <template v-if="!pickerSearch.trim()">
          <div v-if="loading" style="text-align:center;color:#aaa;padding:24px;font-size:13px;">
            \uB85C\uB529\uC911...
          </div>
          <template v-else>
            <div style="display:flex;gap:4px;margin:0 4px 6px">
              <button class="btn btn-secondary btn-xs" style="flex:1;font-size:11px" @click="handleBtnAction('tree-expand-all')">
                \u25BC \uC804\uCCB4
              </button>
              <button class="btn btn-secondary btn-xs" style="flex:1;font-size:11px" @click="handleBtnAction('tree-collapse-all')">
                \u25B6 \uB2EB\uAE30
              </button>
            </div>
            <div v-for="cat in cfTreeFlat" :key="cat.categoryId" style="border-radius:4px;display:flex;align-items:center;gap:2px;padding:5px 6px;transition:background .1s;" :style="{ paddingLeft:(cat._depth*14+6)+'px', opacity: excludeIds?.has(String(cat.categoryId)) ? 0.35 : 1, pointerEvents: excludeIds?.has(String(cat.categoryId)) ? 'none' : 'auto', background: pickerTempCat?.categoryId === cat.categoryId ? '#eff6ff' : '', outline: pickerTempCat?.categoryId === cat.categoryId ? '2px solid #2563eb' : 'none', outlineOffset: pickerTempCat?.categoryId === cat.categoryId ? '-2px' : '0', position:'relative', zIndex: pickerTempCat?.categoryId === cat.categoryId ? 1 : 'auto' }">
            <span v-if="cat._hasChildren"
                style="width:14px;text-align:center;font-size:9px;color:#bbb;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"
                @click="handleSelectAction('tree-node-toggle', cat.categoryId)">
              {{ expandedSet.has(cat.categoryId) ? '\u25BC' : '\u25B6' }}
            </span>
            <span v-else style="width:14px;flex-shrink:0"></span>
            <span :style="cat._hasChildren ? 'font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;cursor:pointer;' : 'font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;'"
              @click="cat._hasChildren ? handleSelectAction('tree-node-toggle', cat.categoryId) : null">
              {{ DEPTH_BULLET(cat._depth, cat._hasChildren, expandedSet.has(cat.categoryId)) }}
            </span>
            <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;"
              @click="handleSelectAction('picker-select', cat)">
              {{ cat.categoryNm }}
            </span>
            <span v-if="cat.categoryStatusCd==='INACTIVE'" style="font-size:10px;color:#bbb;margin-left:4px">(\uBE44\uD65C\uC131)</span>
          </div>
          <div v-if="!cfTreeFlat.length" style="text-align:center;padding:20px;color:#aaa;font-size:12px">
            \uCE74\uD14C\uACE0\uB9AC \uC5C6\uC74C
          </div>
        </template>
      </template>
      <!-- \uAC80\uC0C9\uC5B4 \uC788\uC74C: flat \uD544\uD130 \uBAA9\uB85D -->
      <template v-else>
        <div v-if="cfPickerList.length===0" style="text-align:center;color:#aaa;padding:24px;font-size:13px;">
          \uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C
        </div>
        <div v-for="cat in cfPickerList" :key="cat.categoryId" @click="handleSelectAction('picker-select', cat)" style="border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:6px;padding:6px 10px;transition:background .1s;" :style="{ opacity: excludeIds?.has(String(cat.categoryId)) ? 0.35 : 1, pointerEvents: excludeIds?.has(String(cat.categoryId)) ? 'none' : 'auto', background: pickerTempCat?.categoryId === cat.categoryId ? '#eff6ff' : '', outline: pickerTempCat?.categoryId === cat.categoryId ? '2px solid #2563eb' : 'none', outlineOffset: pickerTempCat?.categoryId === cat.categoryId ? '-2px' : '0', position:'relative', zIndex: pickerTempCat?.categoryId === cat.categoryId ? 1 : 'auto' }">
        <span :style="{ fontSize:'11px', fontWeight:700, color:DEPTH_COLOR((cat.categoryDepth||1)-1) }">
          {{ DEPTH_BULLET((cat.categoryDepth||1)-1) }}
        </span>
        <span style="font-size:12px">
          {{ cat.categoryNm }}
        </span>
        <span style="font-size:10px;color:#bbb;margin-left:auto">
          {{ ['','\uB300','\uC911','\uC18C'][cat.categoryDepth||1]||'' }}
        </span>
      </div>
    </template>
  </div>
  <!-- \uD478\uD130: \uC120\uD0DD \uC815\uBCF4 + [\uC120\uD0DD]/[\uCDE8\uC18C] \uBC84\uD2BC -->
  <div style="padding:11px 16px;border-top:1px solid #f0f0f0;background:#fafafa;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;border-radius:0 0 12px 12px;">
    <span style="font-size:12px;" :style="pickerTempCat ? 'color:#e8587a;font-weight:600;' : 'color:#bbb;'">
      {{ pickerTempCat ? '\uC120\uD0DD: ' + pickerTempCat.categoryNm : '\uCE74\uD14C\uACE0\uB9AC\uB97C \uD074\uB9AD\uD558\uC138\uC694.' }}
    </span>
    <div style="display:flex;gap:6px;">
      <button type="button" class="btn btn_cancel" @click="handleBtnAction('picker-close')">
        \uCDE8\uC18C
      </button>
      <button type="button" class="btn btn_select" :disabled="!pickerTempCat" @click="handleBtnAction('picker-confirm')">
        \uC120\uD0DD
      </button>
    </div>
  </div>
</div>
</div>
</teleport>
`},window.BoPager={name:"BoPager",props:{pager:{type:Object,default:()=>({pageNo:1,pageTotalPage:1,pageNums:[1],pageSize:20,pageSizes:[5,10,20,30,50,100,200,300,500,1e3,2e3]})},onSetPage:{type:Function,default:()=>{}},onSizeChange:{type:Function,default:()=>{}},pageWindow:{type:Number,default:10},showPages:{type:Boolean,default:!0},loadedCount:{type:Number,default:null}},setup(e){return{cfPageNums:Vue.computed(()=>{var B,v;const c=Math.max(1,((B=e.pager)==null?void 0:B.pageTotalPage)||1),a=Math.min(Math.max(1,((v=e.pager)==null?void 0:v.pageNo)||1),c),o=Math.max(1,e.pageWindow);let y=Math.max(1,a-Math.floor(o/2)),m=Math.min(c,y+o-1);return y=Math.max(1,m-o+1),Array.from({length:m-y+1},(w,f)=>y+f)})}},template:`
<div v-if="pager" class="pagination">
  <div class="pager-left">
    <span v-if="pager.pageTotalCount != null" class="list-count">
      \uCD1D {{ pager.pageTotalCount }}\uAC74<template v-if="!showPages && loadedCount != null"> \xB7 \uC870\uD68C {{ loadedCount }}\uAC74</template>
    </span>
  </div>
  <div v-if="showPages" class="pager">
    <button :disabled="pager.pageNo===1" @click="onSetPage(1)" title="\uCC98\uC74C">
      1
    </button>
    <button :disabled="pager.pageNo===1" @click="onSetPage(pager.pageNo-1)">
      \u2039
    </button>
    <button v-for="n in cfPageNums" :key="n" :class="{active:pager.pageNo===n}" @click="onSetPage(n)">
      {{ n }}
    </button>
    <button :disabled="pager.pageNo===pager.pageTotalPage" @click="onSetPage(pager.pageNo+1)">
      \u203A
    </button>
    <button :disabled="pager.pageNo===pager.pageTotalPage" @click="onSetPage(pager.pageTotalPage)" title="\uB9C8\uC9C0\uB9C9">
      {{ pager.pageTotalPage }}
    </button>
  </div>
  <div v-if="showPages" class="pager-right">
    <select class="size-select" v-model.number="pager.pageSize" @change="onSizeChange">
      <option v-for="s in (pager.pageSizes||[])" :key="s" :value="s">
        {{ s }}\uAC1C
      </option>
    </select>
  </div>
</div>
`},window.BoPathParentSelector={name:"BoPathParentSelector",props:["node","expanded","onToggle","onSelect","depth"],template:`
<div>
  <div @click="onSelect(node.pathId)"
    :style="{ display:'flex', alignItems:'center', gap:'4px', padding:'3px 8px', cursor:'pointer', borderRadius:'4px',
    paddingLeft: (12 + depth*14) + 'px' }"
    @mouseover="$event.currentTarget.style.background='#f0f2f5'"
    @mouseout="$event.currentTarget.style.background='transparent'">
    <span v-if="(node.children||[]).length>0" style="width:16px;font-size:11px;color:#666;font-weight:700"
      @click.stop="onToggle(node.pathId)">
      {{ expanded.has(node.pathId) ? '\u25BC' : '\u25B6' }}
    </span>
    <span v-else style="width:16px">
    </span>
    <span style="flex:1;font-size:13px;">
      {{ node.pathLabel || '(\uC774\uB984\uC5C6\uC74C)' }}
    </span>
  </div>
  <div v-if="expanded.has(node.pathId) ? ((node.children||[]).length>0) : false">
  <bo-path-parent-selector v-for="ch in node.children" :key="ch.pathId"
      :node="ch" :expanded="expanded" :on-toggle="onToggle" :on-select="onSelect" :depth="depth+1" />
</div>
</div>
`},window.BoMultiCheckSelect={name:"BoMultiCheckSelect",props:{modelValue:{type:String,default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"\uC804\uCCB4"},allLabel:{type:String,default:"\uC804\uCCB4"},showAll:{type:Boolean,default:!0},minWidth:{type:String,default:"160px"},disabled:{type:Boolean,default:!1},separator:{type:String,default:","},wrap:{type:Boolean,default:!1},emptyValue:{type:String,default:""},plain:{type:Boolean,default:!1},listAll:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:h}){const{ref:c,computed:a,watch:o,onMounted:y,onBeforeUnmount:m}=Vue,B=c(!1),v=c(null),w=(t,b={})=>{if(t==="select-toggle")return l();if(t==="select-click-all")return s();console.warn("[handleBtnAction] unknown cmd:",t)},f=(t,b={})=>{if(t==="select-click-option")return I(b);console.warn("[handleSelectAction] unknown cmd:",t)},n=c(!1),d=a(()=>(e.options||[]).map(t=>({value:t.value!=null?t.value:t.codeValue,label:t.label!=null?t.label:t.codeLabel})).filter(t=>t.value!=null));o(()=>e.modelValue,t=>{(t||"").toString().trim()&&(n.value=!1)});const u=a(()=>{if(n.value)return new Set;const t=(e.modelValue||"").toString().trim();return!t||t===e.emptyValue?e.wrap?new Set:new Set(d.value.map(b=>b.value)):new Set(t.split(e.separator).map(b=>b.trim()).filter(Boolean))}),g=a(()=>{const t=u.value;return d.value.length>0&&d.value.every(b=>t.has(b.value))}),A=a(()=>{if(n.value)return"- \uC120\uD0DD\uC5C6\uC74C -";if(g.value&&!e.listAll)return e.wrap?"\uC804\uCCB4 ("+d.value.length+")":e.placeholder;const t=u.value,b=d.value.filter(k=>t.has(k.value)).map(k=>k.label);return b.length===0?"- \uC120\uD0DD\uC5C6\uC74C -":b.length<=2?b.join(", "):b.join(", ")+" ("+b.length+")"}),S=t=>{const b=d.value.filter(N=>t.has(N.value)).map(N=>N.value);if(b.length===0)return e.emptyValue;const k=b.join(e.separator);return e.wrap?e.separator+k+e.separator:k},r=t=>{if(e.wrap){n.value=!1,h("update:modelValue",S(t));return}t.size===0?(n.value=!0,h("update:modelValue","")):d.value.every(b=>t.has(b.value))?(n.value=!1,h("update:modelValue","")):(n.value=!1,h("update:modelValue",S(t)))},l=()=>{e.disabled||(B.value=!B.value)},I=t=>{const b=n.value||g.value;n.value=!1;let k;b?k=new Set([t]):(k=new Set(u.value),k.has(t)?k.delete(t):k.add(t)),r(k)},s=()=>{if(e.wrap){n.value=!1,r(g.value?new Set:new Set(d.value.map(t=>t.value)));return}g.value?n.value=!0:n.value=!1,h("update:modelValue","")},i=t=>{v.value&&(v.value.contains(t.target)||(B.value=!1))};return y(()=>document.addEventListener("mousedown",i)),m(()=>document.removeEventListener("mousedown",i)),{open:B,rootRef:v,noneMode:n,cfNorm:d,cfSelected:u,cfIsAll:g,cfDisplay:A,handleBtnAction:w,handleSelectAction:f}},template:`
<div v-if="plain" class="readonly-field-plain">
  {{ cfDisplay }}
</div>
<div v-else ref="rootRef" class="multi-check-select" :style="'position:relative;display:block;min-width:'+minWidth">
  <div @click="handleBtnAction('select-toggle')"
    :style="'border:1px solid #d4d4d8;border-radius:6px;padding:4px 28px 4px 10px;background:'+(disabled?'#f5f5f5':'#fff')+';cursor:'+(disabled?'not-allowed':'pointer')+';font-size:13px;color:'+(noneMode?'#aaa':'#333')+';position:relative;user-select:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'">
    {{ cfDisplay }}
    <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#888;font-size:10px;">
      \u25BC
    </span>
  </div>
  <div v-if="open"
    style="position:absolute;top:calc(100% + 4px);left:0;min-width:100%;width:max-content;max-width:280px;max-height:280px;overflow-y:auto;background:#fff;border:1px solid #d4d4d8;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.08);z-index:1000;padding:4px 0;">
    <label v-if="showAll" style="display:flex;align-items:center;gap:7px;padding:5px 12px;font-size:13px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-weight:600;white-space:nowrap;">
      <input type="checkbox" :checked="cfIsAll" @change="handleBtnAction('select-click-all')" style="flex:0 0 auto;width:14px;min-width:14px;height:14px;margin:0;" />
      <span style="white-space:nowrap;">
        {{ allLabel }}
      </span>
    </label>
    <label v-for="o in cfNorm" :key="o.value"
      style="display:flex;align-items:center;gap:7px;padding:5px 12px;font-size:13px;cursor:pointer;white-space:nowrap;"
      @mouseenter="$event.currentTarget.style.background='#f9fafb'"
      @mouseleave="$event.currentTarget.style.background='transparent'">
      <input type="checkbox" :checked="cfSelected.has(o.value)" @change="handleSelectAction('select-click-option', o.value)" style="flex:0 0 auto;width:14px;min-width:14px;height:14px;margin:0;" />
      <span v-if="o.color" :style="'display:inline-block;width:11px;height:11px;border-radius:50%;background:'+o.color+';border:1px solid #ccc;flex:0 0 auto;'"></span>
      <span style="white-space:nowrap;">{{ o.label }}</span>
    </label>
  </div>
</div>
`},window.BoComboMatrixSelect={name:"BoComboMatrixSelect",props:{modelValue:{type:String,default:""},rowOptions:{type:Array,required:!0},colOptions:{type:Array,required:!0},cellValid:{type:Function,default:()=>!0},placeholder:{type:String,default:"\uC804\uCCB4"},allLabel:{type:String,default:"\uC804\uCCB4"},minWidth:{type:String,default:"160px"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:h}){const{ref:c,computed:a,onMounted:o,onBeforeUnmount:y}=Vue,m=c(!1),B=c(null),v=l=>{if(l==="matrix-toggle"){e.disabled||(m.value=!m.value);return}if(l==="matrix-click-all")return S();console.warn("[handleBtnAction] unknown cmd:",l)},w=(l,I)=>{if(l==="matrix-click-cell")return A(I);console.warn("[handleSelectAction] unknown cmd:",l)},f=a(()=>{const l=[];return e.rowOptions.forEach(I=>e.colOptions.forEach(s=>{e.cellValid(I.value,s.value)&&l.push(I.value+":"+s.value)})),l}),n=a(()=>{const l=(e.modelValue||"").toString().trim();return l?new Set(l.split(",").map(I=>I.trim()).filter(Boolean)):new Set(f.value)}),d=a(()=>f.value.length>0&&f.value.every(l=>n.value.has(l))),u=a(()=>{if(d.value)return e.placeholder;const l=n.value.size;return l===0?"- \uC120\uD0DD\uC5C6\uC74C -":`\uC120\uD0DD ${l}\uAC74`}),g=l=>{if(l.size===0){h("update:modelValue","__NONE__");return}if(f.value.every(I=>l.has(I))){h("update:modelValue","");return}h("update:modelValue",[...l].join(","))},A=l=>{const I=d.value?new Set([l]):new Set(n.value);d.value||(I.has(l)?I.delete(l):I.add(l)),g(I)},S=()=>{h("update:modelValue",d.value?"__NONE__":"")},r=l=>{B.value&&!B.value.contains(l.target)&&(m.value=!1)};return o(()=>document.addEventListener("mousedown",r)),y(()=>document.removeEventListener("mousedown",r)),{open:m,rootRef:B,cfPairs:f,cfSelected:n,cfIsAll:d,cfDisplay:u,handleBtnAction:v,handleSelectAction:w}},template:`
<div ref="rootRef" style="position:relative;display:block;" :style="{minWidth}">
  <div @click="handleBtnAction('matrix-toggle')"
    :style="'border:1px solid #d4d4d8;border-radius:6px;padding:4px 28px 4px 10px;background:'+(disabled?'#f5f5f5':'#fff')+';cursor:'+(disabled?'not-allowed':'pointer')+';font-size:13px;color:#333;position:relative;user-select:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'">
    {{ cfDisplay }}
    <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#888;font-size:10px;">\u25BC</span>
  </div>
  <div v-if="open"
    style="position:absolute;top:calc(100% + 4px);left:0;width:max-content;background:#fff;border:1px solid #d4d4d8;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.08);z-index:1000;padding:6px;">
    <label style="display:flex;align-items:center;gap:7px;padding:4px 6px;font-size:12px;cursor:pointer;font-weight:700;border-bottom:1px solid #f0f0f0;margin-bottom:4px;">
      <input type="checkbox" :checked="cfIsAll" @change="handleBtnAction('matrix-click-all')" style="width:14px;height:14px;margin:0;" />
      <span>{{ allLabel }}</span>
    </label>
    <table style="border-collapse:collapse;font-size:12px;">
      <thead>
        <tr>
          <th style="padding:3px 8px;"></th>
          <th v-for="c in colOptions" :key="c.value" style="padding:3px 8px;font-weight:700;color:#555;white-space:nowrap;">{{ c.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in rowOptions" :key="r.value">
          <td style="padding:3px 8px;white-space:nowrap;color:#555;">{{ r.label }}</td>
          <td v-for="c in colOptions" :key="c.value" style="padding:3px 8px;text-align:center;">
            <input v-if="cellValid(r.value, c.value)" type="checkbox"
              :checked="cfSelected.has(r.value + ':' + c.value)"
              @change="handleSelectAction('matrix-click-cell', r.value + ':' + c.value)"
              style="width:14px;height:14px;margin:0;cursor:pointer;" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`},window.BoDateTimePicker={name:"BoDateTimePicker",props:{modelValue:{type:String,default:""},date:{type:String,default:null},time:{type:String,default:null},splitMode:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},showNow:{type:Boolean,default:!0},showClear:{type:Boolean,default:!0},defaultTime:{type:String,default:"00:00"},placeholderDate:{type:String,default:""},dateWidth:{type:String,default:"150px"},timeWidth:{type:String,default:"110px"},inputClass:{type:String,default:"form-control"}},emits:["update:modelValue","update:date","update:time"],setup(e,{emit:h}){const{computed:c}=Vue,a=r=>{if(r==="picker-now")return d();if(r==="picker-clear")return u()},o=c(()=>e.splitMode||e.date!=null||e.time!=null),y=c(()=>{if(o.value)return{date:(e.date||"").trim(),time:(e.time||"").trim().slice(0,5)};const r=(e.modelValue||"").toString().trim();if(!r)return{date:"",time:""};const l=r.includes("T")?"T":" ",[I="",s=""]=r.split(l);return{date:I.trim(),time:(s||"").trim().slice(0,5)}}),m=(r,l)=>{if(o.value){h("update:date",r||""),h("update:time",l||"");return}if(!r&&!l){h("update:modelValue","");return}const I=r||coUtil.cofToYmd(new Date),s=l||e.defaultTime||"00:00";h("update:modelValue",I+"T"+s)},B=r=>m(r.target.value,y.value.time),v=c(()=>(y.value.time||"").slice(0,2)||"00"),w=c(()=>(y.value.time||"").slice(3,5)||"00"),f=r=>m(y.value.date,r.target.value+":"+w.value),n=r=>m(y.value.date,v.value+":"+r.target.value),d=()=>{const r=new Date;m(coUtil.cofToYmd(r),r.toTimeString().slice(0,5))},u=()=>m("",""),g=c(()=>e.inputClass?"":"font-size:11px;padding:2px 4px;border:1px solid #d0d0d0;border-radius:6px;height:28px;box-sizing:border-box;"),A=Array.from({length:24},(r,l)=>String(l).padStart(2,"0")),S=Array.from({length:60},(r,l)=>String(l).padStart(2,"0"));return{cfParts:y,cfBaseStyle:g,cfHour:v,cfMin:w,HOURS:A,MINS:S,handleBtnAction:a,onDateChange:B,onHourChange:f,onMinChange:n}},template:`
<div style="display:flex;align-items:center;gap:4px;flex-wrap:nowrap;">
  <input type="date" :class="inputClass" :value="cfParts.date"
    :disabled="readonly" @change="onDateChange($event)"
    :style="cfBaseStyle+'width:'+dateWidth+';margin:0;flex-shrink:0;'" />
  <select :class="inputClass" :value="cfHour" :disabled="readonly"
    @change="onHourChange($event)"
    :style="cfBaseStyle+'width:52px;margin:0;flex-shrink:0;padding:2px 2px;'">
    <option v-for="h in HOURS" :key="h" :value="h">{{ h }}</option>
  </select>
  <span style="font-size:12px;color:#888;flex-shrink:0;">:</span>
  <select :class="inputClass" :value="cfMin" :disabled="readonly"
    @change="onMinChange($event)"
    :style="cfBaseStyle+'width:52px;margin:0;flex-shrink:0;padding:2px 2px;'">
    <option v-for="m in MINS" :key="m" :value="m">{{ m }}</option>
  </select>
  <span v-if="placeholderDate ? (!cfParts.date ? (!cfParts.time) : false) : false" style="font-size:11px;color:#aaa;white-space:nowrap;">
  {{ placeholderDate }}
</span>
<button v-if="showNow ? (!readonly) : false" type="button" @click="handleBtnAction('picker-now')" style="font-size:11px;padding:3px 8px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;cursor:pointer;color:#555;white-space:nowrap;flex-shrink:0;">
\uD604\uC7AC
</button>
<button v-if="showClear ? (!readonly ? ((cfParts.date || cfParts.time)) : false) : false" type="button" @click="handleBtnAction('picker-clear')" style="font-size:11px;padding:3px 8px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;cursor:pointer;color:#999;white-space:nowrap;flex-shrink:0;">
\u2715
</button>
</div>
`},window.BoPathPickField={name:"BoPathPickField",props:{bizCd:{type:String,required:!0},row:{type:Object,required:!0},pathField:{type:String,default:"pathId"},disabled:{type:Boolean,default:!1},modalTitle:{type:String,default:"\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD"},placeholder:{type:String,default:"\uACBD\uB85C \uC120\uD0DD..."},bare:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:h}){const c=Vue.ref(!1),a=Vue.computed(()=>{const n=e.row?e.row[e.pathField]:null;return window.boUtil&&window.boUtil.bofGetPathLabel(n)||""}),o=Vue.computed(()=>e.row!=null&&e.row[e.pathField]!=null),y=()=>{e.disabled||(c.value=!0)},m=()=>{c.value=!1},B=n=>{e.row&&(e.row[e.pathField]=n),c.value=!1,h("change",n)},v=()=>{e.disabled||(e.row&&(e.row[e.pathField]=null),h("change",null))};return{show:c,cfLabel:a,cfHasVal:o,handleBtnAction:(n,d={})=>{if(n==="pathPick-open")return y();if(n==="pathPick-close")return m();if(n==="pathPick-clear")return v();console.warn("[handleBtnAction] unknown cmd:",n)},handleSelectAction:(n,d={})=>{if(n==="pathPick-picked")return B(d);if(n==="pathPick-hover"){if(e.disabled||!d||!d.currentTarget)return;d.currentTarget.style.background="#eef2ff"}else n==="pathPick-leave"?d&&d.currentTarget&&(d.currentTarget.style.background="#fff"):console.warn("[handleSelectAction] unknown cmd:",n)}}},template:`
<component :is="bare ? 'div' : 'td'">
  <div :style="{padding:'0 5px 0 7px',border:'1px solid #e5e7eb',borderRadius:'5px',fontSize:'12px',minHeight:'18px',lineHeight:'18px',
    background:'#f5f5f7',
    color: cfHasVal ? '#374151' : '#9ca3af',
    fontWeight: cfHasVal ? 600 : 400,
    display:'flex',alignItems:'center',gap:'6px'}">
    <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="cfLabel || ''">
      {{ cfLabel || placeholder }}
    </span>
    <span v-if="cfHasVal ? (!disabled) : false" title="\uBE44\uC6B0\uAE30"
      style="cursor:pointer;color:#9ca3af;font-size:9px;flex-shrink:0;line-height:1;padding:0;margin-right:-1px;align-self:flex-end;margin-bottom:2px;"
      @click.stop="handleBtnAction('pathPick-clear')">
      \u2715
    </span>
    <button type="button" :disabled="disabled"
      @click.stop="handleBtnAction('pathPick-open')" @dblclick.stop="handleBtnAction('pathPick-open')"
      :title="modalTitle"
      :style="{cursor: disabled ? 'not-allowed' : 'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',width:'18px',height:'18px',background:'#fff',border:'1px solid #d1d5db',borderRadius:'4px',fontSize:'11px',color:'#2563eb',flexShrink:0,padding:'0',opacity: disabled ? 0.4 : 1}"
      @mouseover="handleSelectAction('pathPick-hover', $event)" @mouseout="handleSelectAction('pathPick-leave', $event)">
      \u{1F50D}
    </button>
  </div>
  <bo-cm-popup-modal v-if="show" popup-code="path" result-type="id" :init-param="{ bizCd: bizCd }" :title="modalTitle" @select="handleSelectAction('pathPick-picked', $event)" @close="handleBtnAction('pathPick-close')" />
</component>
`},window.BoPropTreeNode={name:"BoPropTreeNode",props:{node:{type:Object,default:()=>({})},expanded:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},onToggle:{type:Function,default:()=>{}},onSelect:{type:Function,default:()=>{}},depth:{type:Number,default:0}},components:{"bo-prop-tree-node":null},created(){this.$options.components["bo-prop-tree-node"]=window.BoPropTreeNode},setup(e){return{handleBtnAction:(a,o={})=>{if(a==="node-toggle")return e.onToggle(o);console.warn("[handleBtnAction] unknown cmd:",a)},handleSelectAction:(a,o={})=>{if(a==="node-select")return e.onSelect(o);if(a==="node-hover"){if(!o||!o.currentTarget)return;o.currentTarget.style.background=e.selected===e.node.path?"#eff6ff":"#f8f9fb"}else if(a==="node-leave"){if(!o||!o.currentTarget)return;o.currentTarget.style.background=e.selected===e.node.path?"#eff6ff":"transparent"}else console.warn("[handleSelectAction] unknown cmd:",a)}}},template:`
<div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div :style="{display:'flex',alignItems:'center',gap:'4px',padding:'5px 6px',cursor:'pointer',borderRadius:'4px',
    paddingLeft: (8 + depth*14) + 'px',
    background: selected===node.path ? '#eff6ff' : 'transparent',
    color:      selected===node.path ? '#1d4ed8' : '#444',
    fontWeight: selected===node.path ? 700 : 400,
    outline:       selected===node.path ? '2px solid #2563eb' : 'none',
    outlineOffset: selected===node.path ? '-2px' : '0',
    position:'relative', zIndex: selected===node.path ? 1 : 'auto'}"
    @mouseover="handleSelectAction('node-hover', $event)"
    @mouseout="handleSelectAction('node-leave', $event)">
    <span v-if="node.children ? (node.children.length>0) : false" style="width:14px;font-size:10px;color:#999;" @click.stop="handleBtnAction('node-toggle', node.path)">
    {{ expanded.has(node.path) ? '\u25BC' : '\u25B6' }}
  </span>
  <span v-else style="width:14px;">
  </span>
  <span style="font-size:13px;flex:1;" @click="handleSelectAction('node-select', node.path)">
    {{ node.name || '\uC804\uCCB4' }}
  </span>
  <span v-if="node._badge"
      :style="{fontSize:'9px',padding:'1px 5px',borderRadius:'7px',color:'#fff',fontWeight:700,background:node._badge[1]}">
    {{ node._badge[0] }}
  </span>
  <span style="font-size:10px;color:#999;background:#f5f5f5;padding:1px 6px;border-radius:8px;">
    {{ node.count }}
  </span>
</div>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<div v-if="expanded.has(node.path) ? (node.children.length>0) : false">
<bo-prop-tree-node v-for="ch in node.children" :key="ch.path"
      :node="ch" :expanded="expanded" :selected="selected"
      :on-toggle="onToggle" :on-select="onSelect" :depth="depth+1" />
</div>
</div>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
`},window.BoDeptTreeNode={name:"BoDeptTreeNode",props:{node:{type:Object,default:()=>({})},expanded:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},onToggle:{type:Function,default:()=>{}},onSelect:{type:Function,default:()=>{}},depth:{type:Number,default:0},counts:{type:Object,default:null}},components:{"bo-dept-tree-node":null},created(){this.$options.components["bo-dept-tree-node"]=window.BoDeptTreeNode},setup(e){return{handleBtnAction:(a,o={})=>{if(a==="node-toggle")return e.onToggle(o);console.warn("[handleBtnAction] unknown cmd:",a)},handleSelectAction:(a,o={})=>{if(a==="node-select")return e.onSelect(o);console.warn("[handleSelectAction] unknown cmd:",a)}}},template:`
<div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div :style="{ paddingLeft: (depth * 14) + 'px', display:'flex', alignItems:'center',
    cursor:'pointer', padding:'4px 6px 4px ' + (depth*14+6) + 'px',
    borderRadius:'4px', background: selected === node.deptId ? '#eff6ff' : 'transparent',
    fontWeight: (selected === node.deptId || depth===0) ? '700' : 'normal',
    color: selected === node.deptId ? '#1d4ed8' : (depth===0 ? '#1a1a2e' : '#333'),
    fontSize: depth===0 ? '13px' : '12px',
    borderBottom: depth===0 ? '1px solid #f0f0f0' : 'none',
    outline:       selected === node.deptId ? '2px solid #2563eb' : 'none',
    outlineOffset: selected === node.deptId ? '-2px' : '0',
    position:'relative', zIndex: selected === node.deptId ? 1 : 'auto' }"
    @click.stop="handleSelectAction('node-select', node.deptId)">
    <span v-if="node.children ? (node.children.length) : false" @click.stop="handleBtnAction('node-toggle', node.deptId)" style="margin-right:2px;font-size:9px;color:#bbb;width:14px;text-align:center;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      {{ expanded.has(node.deptId) ? '\u25BC' : '\u25B6' }}
    </span>
    <span v-else style="margin-right:2px;width:14px;flex-shrink:0;"></span>
    <span style="font-size:13px;line-height:1;flex-shrink:0;margin-right:3px;">
      {{ depth===0 ? '\u{1F5C2}' : ((node.children ? node.children.length : 0) > 0 ? (expanded.has(node.deptId) ? '\u{1F4C2}' : '\u{1F4C1}') : '\u{1F4C4}') }}
    </span>
    <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
      {{ node.deptNm }}
    </span>
  <!-- counts(\uC678\uBD80 \uB370\uC774\uD130 \uC218) \uAC00 \uC81C\uACF5\uB418\uACE0 \uBE44\uC5B4\uC788\uC9C0 \uC54A\uC73C\uBA74 \uC6B0\uC120 \uD45C\uC2DC (\uBC31\uC5D4\uB4DC\uC5D0\uC11C \uC790\uC190 \uB204\uC801 \uACC4\uC0B0).
       node.deptId === null (\uB8E8\uD2B8 "\uC804\uCCB4") \uC740 counts['__total__'] \uB9E4\uD551 -->
  <span v-if="counts ? (Object.keys(counts).length > 0) : false"
    style="font-size:10px;color:#1677ff;background:#e6f4ff;padding:1px 6px;border-radius:8px;flex-shrink:0;font-weight:600;margin-left:4px;">
    {{ counts[node.deptId == null ? '__total__' : node.deptId] != null
       ? counts[node.deptId == null ? '__total__' : node.deptId]
       : 0 }}
  </span>
</div>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="node.children ? (node.children.length ? (expanded.has(node.deptId)) : false) : false">
<bo-dept-tree-node v-for="child in node.children" :key="child.deptId"
      :node="child" :expanded="expanded" :selected="selected"
      :on-toggle="onToggle" :on-select="onSelect" :depth="depth + 1" :counts="counts" />
</template>
</div>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
`},window.BoTabBar={name:"BoTabBar",props:{tabs:{type:Array,default:()=>[]},tab:{type:[String,Number],default:""},tabMode:{type:String,default:"tab"},showModes:{type:Boolean,default:!0},maxCols:{type:Number,default:4},orientation:{type:String,default:"horizontal"},bg:{type:String,default:"#f2f3f5"}},emits:["tab-select","mode-select"],setup(e,{emit:h}){const c=[{id:"tab",label:"\uD0ED",icon:"\u{1F4D1}"},{id:"1col",label:"1\uC5F4",icon:"1\u25AD"},{id:"2col",label:"2\uC5F4",icon:"2\u25AD"},{id:"3col",label:"3\uC5F4",icon:"3\u25AD"},{id:"4col",label:"4\uC5F4",icon:"4\u25AD"}],a=[...c,{id:"5col",label:"5\uC5F4",icon:"5\u25AD"}];return{VIEW_MODES:Vue.computed(()=>e.maxCols===5?a:c),onTab:v=>{e.tabMode==="tab"&&h("tab-select",v)},onMode:v=>h("mode-select",v),isTabMode:()=>e.tabMode==="tab"}},template:`
<div :style="orientation==='vertical'
  ? 'display:flex;gap:8px;margin-bottom:10px;align-items:flex-start;flex-direction:column;width:max-content;'
  : 'display:flex;gap:8px;margin-bottom:10px;align-items:stretch;'">
  <div :style="(orientation==='vertical'
    ? 'display:flex;flex-direction:column;gap:4px;padding:5px;border-radius:12px;min-width:160px;'
    : 'flex:1;display:flex;flex-wrap:wrap;gap:4px;padding:5px;border-radius:12px;') + 'background:' + bg + ';'">
    <template v-for="t in tabs" :key="t?.id">
      <button v-if="t.visible===undefined || t.visible" class="bo-tabbar-btn" :class="{ 'is-active': isTabMode() && tab===t.id }" @click="onTab(t.id)" :disabled="!isTabMode()"
        :style="{
          flex: orientation==='vertical' ? 'none' : '0 0 auto',
          width: orientation==='vertical' ? '100%' : 'auto',
          padding:'5px 12px',
          border: (isTabMode() && tab===t.id) ? '1.5px solid transparent' : '1.5px solid #b7bec9',
          cursor: isTabMode() ? 'pointer' : 'default',
          whiteSpace:'nowrap',
          fontSize:'12.5px', borderRadius:'9px', transition:'transform .15s, box-shadow .15s, border-color .15s, background .15s, color .15s',
          display:'inline-flex', alignItems:'center',
          justifyContent: orientation==='vertical' ? 'flex-start' : 'center',
          gap:'6px',
          opacity: isTabMode() ? 1 : 0.55,
          fontWeight: tab===t.id ? 800 : 700,
          background: (isTabMode() && tab===t.id) ? 'linear-gradient(135deg,#fff0f4,#ffe4ec)' : '#eef0f3',
          color:      (isTabMode() && tab===t.id) ? '#e8587a' : '#5f6773',
          boxShadow:  (isTabMode() && tab===t.id) ? '0 2px 8px rgba(232,88,122,0.18)' : 'none',
          borderBottom: (isTabMode() && tab===t.id) ? '2px solid #e8587a' : '3px solid #b7bec9'
        }">
        <span v-if="t.icon" style="font-size:14px;">{{ t.icon }}</span>
        <span>{{ t.label }}</span>
        <span v-if="t.count !== undefined" :style="{
          fontSize:'10.5px', fontWeight:800, padding:'1px 7px', borderRadius:'10px',
          background: (isTabMode() && tab===t.id) ? '#e8587a' : '#e5e7eb',
          color:      (isTabMode() && tab===t.id) ? '#fff' : '#666',
          minWidth:'18px', textAlign:'center',
          marginLeft: orientation==='vertical' ? 'auto' : '0'
        }">{{ t.count }}</span>
      </button>
    </template>
  </div>
  <div v-if="showModes" :style="'display:flex;gap:2px;padding:5px;border-radius:12px;flex-shrink:0;background:' + bg + ';'">
    <button v-for="v in VIEW_MODES" :key="v?.id" class="bo-tabbar-btn" :class="{ 'is-active': tabMode===v.id }" @click="onMode(v.id)" :title="v.label+'\uB85C \uBCF4\uAE30'"
      :style="{
        padding:'3px 6px',
        border: tabMode===v.id ? '1.5px solid transparent' : '1.5px solid #b7bec9',
        cursor:'pointer', fontSize:'11px', borderRadius:'7px', lineHeight:'1',
        transition:'transform .15s, box-shadow .15s, border-color .15s, background .15s, color .15s',
        fontWeight:  tabMode===v.id ? 800 : 700,
        background:  tabMode===v.id ? 'linear-gradient(135deg,#fff0f4,#ffe4ec)' : '#eef0f3',
        color:       tabMode===v.id ? '#e8587a' : '#5f6773',
        boxShadow:   tabMode===v.id ? '0 2px 6px rgba(232,88,122,0.18)' : 'none'
      }">
      <span style="font-size:12px;">{{ v.icon }}</span>
    </button>
  </div>
</div>
`},window.BoZdYmlGrid={name:"BoZdYmlGrid",props:{endpoint:{type:String,default:"/bo/sy/app-config/all"},defaultKeyFilter:{type:String,default:""}},setup(e){const{reactive:h,ref:c,onMounted:a}=Vue,o=h([]),y=h([]),m=c(""),B=c(!1),v=c(""),w=c(e.defaultKeyFilter||""),f=[{key:"ymlKey",label:"yml \uD0A4",cellStyle:"font-family:monospace;color:#6b7280;text-align:left"},{key:"ymlValue",label:"yml \uAC12",cellStyle:"font-family:monospace;font-size:11px;word-break:break-all;text-align:left"},{key:"source",label:"\uCD9C\uCC98",align:"center",badge:g=>g.source==="DB"?"badge-blue":g.source==="YML"?"badge-green":"badge-gray"}],n=()=>{const g=w.value.split(";").map(S=>S.trim().toLowerCase()).filter(Boolean),A=g.length?o.filter(S=>g.some(r=>(S.ymlKey||"").toLowerCase().includes(r))):[...o];y.splice(0,y.length,...A)},d=async()=>{var g,A,S;B.value=!0,m.value="";try{const r=await boApi.get(e.endpoint,{params:{},...coUtil.cofApiHdr("BoZdYmlGrid","yml \uC870\uD68C")}),l=(g=r==null?void 0:r.data)==null?void 0:g.data,I=Array.isArray(l)?l:(l==null?void 0:l.items)||[];o.splice(0,o.length,...I),l!=null&&l.activeProfile&&(v.value=l.activeProfile),n()}catch(r){m.value=((S=(A=r==null?void 0:r.response)==null?void 0:A.data)==null?void 0:S.message)||(r==null?void 0:r.message)||"\uC870\uD68C \uC2E4\uD328"}finally{B.value=!1}},u=async()=>{var g;if(e.endpoint!=="/bo/sy/app-config/all")try{const A=await boApi.get("/bo/sy/app-config/all",coUtil.cofApiHdr("BoZdYmlGrid","profile \uC870\uD68C")),S=(g=A==null?void 0:A.data)==null?void 0:g.data;S!=null&&S.activeProfile&&(v.value=S.activeProfile)}catch{}};return a(async()=>{await u(),await d()}),{rows:y,columns:f,loadError:m,loading:B,onSearch:d,ymlKeyFilter:w,activeProfile:v}},template:`
<div class="card" style="margin-bottom:12px">
  <div class="toolbar">
    <span class="list-title">application.yml</span>
    <div style="margin-left:auto;display:flex;align-items:center;gap:6px;">
      <label style="font-size:12px;color:#6b7280;white-space:nowrap;">propProfile(local,dev,prod)</label>
      <input type="text" class="form-control" style="width:120px;font-size:13px;padding:4px 10px;font-family:monospace;background:#f3f4f6;color:#374151;"
        :value="activeProfile" disabled placeholder="\uC870\uD68C \uC911\u2026" />
      <label style="font-size:12px;color:#6b7280;white-space:nowrap;margin-left:4px;">ymlKey</label>
      <input type="text" class="form-control" style="width:200px;font-size:13px;padding:4px 10px;font-family:monospace;"
        :value="ymlKeyFilter" placeholder="\uD0A4\uC6CC\uB4DC \uC785\uB825 (contains, ; OR)"
        @input="ymlKeyFilter = $event.target.value"
        @keyup.enter="onSearch" />
      <button class="btn btn_search btn-sm" :disabled="loading" @click="onSearch">
        {{ loading ? '\uC870\uD68C\uC911\u2026' : '\uC870\uD68C' }}
      </button>
    </div>
  </div>
  <div v-if="loadError" style="padding:8px 12px;font-size:12px;color:#b91c1c;background:#fff5f5;border-top:1px solid #fca5a5;">
    \u26A0 {{ loadError }}
  </div>
  <bo-grid :columns="columns" :rows="rows" row-key="ymlKey" :loading="loading" bare empty-msg="\uC870\uD68C\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." />
</div>
`},window.BoZdSyPropGrid={name:"BoZdSyPropGrid",props:{propKeyPrefixes:{type:String,default:""},defaultPropKeyFilter:{type:String,default:""},title:{type:String,default:"sy_prop DB \uC870\uD68C \uC815\uBCF4"}},setup(e){const{reactive:h,ref:c,onMounted:a}=Vue,o=h([]),y=h([]),m=c(""),B=c(!1),v=c("local"),w=c(e.defaultPropKeyFilter||""),f=[{key:"propProfile",label:"propProfile",fmt:u=>u||"-",cellStyle:"font-size:11px;color:#6b7280;text-align:left"},{key:"propKey",label:"propKey",cellStyle:"font-family:monospace;color:#1e40af;text-align:left"},{key:"propValue",label:"propValue",fmt:u=>u||"-",cellStyle:"font-family:monospace;font-size:11px;word-break:break-all;text-align:left"},{key:"propLabel",label:"\uD45C\uC2DC\uBA85",cellStyle:"text-align:left"},{key:"useYn",label:"useYn",badge:u=>u.useYn==="Y"?"badge-green":"badge-gray",align:"center"},{key:"regDate",label:"\uB4F1\uB85D\uC77C\uC2DC",fmt:u=>u?String(u).replace("T"," ").slice(0,16):"-",align:"center"},{key:"updDate",label:"\uC218\uC815\uC77C\uC2DC",fmt:u=>u?String(u).replace("T"," ").slice(0,16):"-",align:"center"}],n=()=>{const u=w.value.split(";").map(A=>A.trim().toLowerCase()).filter(Boolean),g=u.length?o.filter(A=>u.some(S=>(A.propKey||"").toLowerCase().includes(S))):[...o];y.splice(0,y.length,...g)},d=async()=>{var u,g,A,S,r;B.value=!0,m.value="";try{const l=e.propKeyPrefixes?e.propKeyPrefixes.split(/[;,]/).map(i=>i.trim()).filter(Boolean).join(","):"",I={sort:"propKey asc",pageSize:999};l&&(I.propKeyPrefixes=l),v.value.trim()&&(I.propProfile=v.value.trim());const s=await((g=(u=boApiSvc.syProp)==null?void 0:u.getList)==null?void 0:g.call(u,I,"BoZdSyPropGrid","prop \uC870\uD68C"));o.splice(0,o.length,...((A=s==null?void 0:s.data)==null?void 0:A.data)||[]),n()}catch(l){m.value=((r=(S=l==null?void 0:l.response)==null?void 0:S.data)==null?void 0:r.message)||(l==null?void 0:l.message)||"\uC870\uD68C \uC2E4\uD328"}finally{B.value=!1}};return a(d),{rows:y,columns:f,loadError:m,loading:B,onSearch:d,syPropProfile:v,syPropKeyFilter:w}},template:`
<div class="card" style="margin-bottom:12px">
  <div class="toolbar">
    <span class="list-title">{{ title }}</span>
    <div style="margin-left:auto;display:flex;align-items:center;gap:6px;">
      <label style="font-size:12px;color:#6b7280;white-space:nowrap;">propProfile(local,dev,prod)</label>
      <input type="text" class="form-control" style="width:120px;font-size:13px;padding:4px 10px;font-family:monospace;"
        :value="syPropProfile" placeholder="local"
        @input="syPropProfile = $event.target.value"
        @keyup.enter="onSearch" />
      <label style="font-size:12px;color:#6b7280;white-space:nowrap;margin-left:4px;">propKey</label>
      <input type="text" class="form-control" style="width:200px;font-size:13px;padding:4px 10px;font-family:monospace;"
        :value="syPropKeyFilter" placeholder="\uD0A4\uC6CC\uB4DC \uC785\uB825 (contains, ; OR)"
        @input="syPropKeyFilter = $event.target.value"
        @keyup.enter="onSearch" />
      <button class="btn btn_search btn-sm" :disabled="loading" @click="onSearch">
        {{ loading ? '\uC870\uD68C\uC911\u2026' : '\uC870\uD68C' }}
      </button>
    </div>
  </div>
  <div v-if="loadError" style="padding:8px 12px;font-size:12px;color:#b91c1c;background:#fff5f5;border-top:1px solid #fca5a5;">
    \u26A0 {{ loadError }}
  </div>
  <bo-grid :columns="columns" :rows="rows" row-key="propId" :loading="loading" bare empty-msg="\uC870\uD68C\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." />
</div>
`};
