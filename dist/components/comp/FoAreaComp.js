(function(){if(document.getElementById("fo-area-comp-style"))return;const t=`
.fo-grid-table { width:100%; border-collapse:collapse; font-size:0.82rem; }
.fo-grid-table thead tr { background:var(--blue-dim); }
.fo-grid-table thead th {
  padding:9px 12px; text-align:left; font-weight:700; color:var(--blue);
  border-bottom:1.5px solid var(--border); white-space:nowrap;
}
.fo-grid-table tbody td {
  padding:8px 12px; color:var(--text-secondary);
  border-bottom:1px solid var(--border); vertical-align:middle;
}
.fo-grid-table tbody tr:nth-child(even) { background:var(--bg-base); }
.fo-grid-table tbody tr.fo-grid-clickable { cursor:pointer; }
.fo-grid-table tbody tr.fo-grid-clickable:hover { background:var(--accent-dim); }
.fo-grid-table tbody tr.fo-grid-selected td { background:rgba(37,99,235,.12); }
.fo-grid-table tr.fo-grid-selected { outline:2px solid #2563eb; outline-offset:-2px; }
.fo-grid-table tr.fo-grid-selected:hover td { background:rgba(37,99,235,.18); }
.fo-grid-table tfoot td { padding:9px 12px; border-top:1.5px solid var(--border); font-weight:700; color:var(--text-primary); }
.fo-grid-link { color:var(--blue); cursor:pointer; font-weight:600; text-decoration:underline; text-underline-offset:2px; }
.fo-grid-badge { display:inline-block; padding:1px 8px; border-radius:9px; font-size:0.7rem; font-weight:700; background:var(--accent-dim); color:var(--accent); }
.fo-grid-badge.b-green  { background:var(--green-dim);  color:var(--green); }
.fo-grid-badge.b-blue   { background:var(--blue-dim);   color:var(--blue); }
.fo-grid-badge.b-red    { background:rgba(229,62,62,.12); color:#e53e3e; }
.fo-grid-badge.b-gray   { background:var(--border);     color:var(--text-muted); }
.fo-grid-badge.b-orange { background:rgba(221,107,32,.12); color:#dd6b20; }
.fo-grid-input, .fo-grid-select {
  width:100%; padding:4px 8px; font-size:0.8rem; box-sizing:border-box;
  border:1px solid var(--border); border-radius:6px;
  background:var(--bg-card); color:var(--text-primary); outline:none;
}
.fo-grid-input:focus, .fo-grid-select:focus { border-color:var(--accent); }
.fo-grid-num { text-align:right; }
.fo-grid-empty { text-align:center; padding:30px; color:var(--text-muted); }
.fo-grid-card { background:var(--bg-card); border:1px solid var(--border); border-radius:14px; padding:18px; box-shadow:var(--shadow); }
.fo-grid-toolbar { display:flex; align-items:center; margin-bottom:12px; }
.fo-grid-title { font-size:0.92rem; font-weight:800; color:var(--text-primary); }
.fo-grid-count { font-size:0.78rem; color:var(--text-muted); font-weight:600; margin-left:6px; }
.fo-grid-drag { color:var(--text-muted); cursor:grab; font-size:1.05rem; user-select:none; text-align:center; }
.fo-grid-status { display:inline-block; padding:1px 7px; border-radius:8px; font-size:0.66rem; font-weight:700; }
.fo-grid-status.s-N { background:var(--border); color:var(--text-muted); }
.fo-grid-status.s-I { background:var(--blue-dim); color:var(--blue); }
.fo-grid-status.s-U { background:rgba(221,107,32,.12); color:#dd6b20; }
.fo-grid-status.s-D { background:rgba(229,62,62,.12); color:#e53e3e; }
.fo-grid-pager { display:flex; gap:6px; justify-content:center; margin-top:18px; flex-wrap:wrap; }
.fo-grid-pager button {
  padding:6px 12px; border:1px solid var(--border); border-radius:6px;
  background:var(--bg-card); color:var(--text-secondary); cursor:pointer;
  font-size:0.82rem; min-width:34px;
}
.fo-grid-pager button.on { background:var(--blue); color:#fff; border-color:var(--blue); font-weight:700; }
.fo-grid-pager button:disabled { opacity:.4; cursor:not-allowed; }
.fo-grid-pager-size { padding:6px 10px; border:1px solid var(--border); border-radius:6px; background:var(--bg-card); color:var(--text-secondary); cursor:pointer; font-size:0.82rem; margin-left:6px; }
.fo-grid-scroll { overflow:auto; }
.fo-grid-cardview { display:grid; grid-template-columns:repeat(auto-fill,minmax(var(--fo-grid-card-min,220px),1fr)); gap:14px; }
.fo-grid-card-item { background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:14px; box-shadow:var(--shadow); transition:transform .15s,box-shadow .15s; }
.fo-grid-card-item.fo-grid-clickable { cursor:pointer; }
.fo-grid-card-item.fo-grid-clickable:hover { transform:translateY(-2px); box-shadow:0 6px 16px rgba(0,0,0,.1); }
.fo-grid-cardview .fo-grid-empty { grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted); }
.fo-grid-card-default-title { font-weight:700; color:var(--text-primary); margin-bottom:6px; font-size:0.9rem; }
.fo-grid-card-default-row { display:flex; justify-content:space-between; gap:8px; font-size:0.78rem; padding:2px 0; color:var(--text-secondary); }
.fo-grid-card-default-row b { color:var(--text-muted); font-weight:600; }
.fo-modal-box { display:flex; flex-direction:column; text-align:left; }
.fo-modal-header { display:flex; align-items:center; justify-content:space-between; flex-shrink:0; margin-bottom:18px; }
.fo-modal-title { font-weight:800; font-size:1rem; color:var(--text-primary); letter-spacing:-0.2px; }
.fo-modal-close { background:none; border:none; font-size:1.25rem; cursor:pointer; color:var(--text-muted); line-height:1; }
.fo-modal-footer { flex-shrink:0; display:flex; justify-content:flex-end; gap:8px; padding-top:14px; border-top:1px solid var(--border); margin-top:16px; }
`,n=document.createElement("style");n.id="fo-area-comp-style",n.textContent=t,document.head.appendChild(n)})(),window.FoContainer={name:"FoContainer",props:{title:{type:String,default:""},countText:{type:String,default:""},bare:{type:Boolean,default:!1},bodyStyle:{type:String,default:""},cardStyle:{type:String,default:""}},template:`
<div :class="bare ? '' : 'fo-card'" :style="cardStyle">
  <slot name="top"></slot>
  <div v-if="title || $slots['toolbar-actions'] || $slots.title" class="fo-area-head">
    <span class="fo-area-title">
      <slot name="title">{{ title }}</slot>
      <span v-if="countText" class="fo-area-count">{{ countText }}</span>
    </span>
    <div v-if="$slots['toolbar-actions']" style="display:flex;gap:6px;align-items:center;">
      <slot name="toolbar-actions"></slot>
    </div>
  </div>
  <div :style="bodyStyle">
    <slot></slot>
  </div>
</div>`},window.FoPage={name:"FoPage",props:{title:{type:String,default:""},eyebrow:{type:String,default:""},bannerImg:{type:String,default:""},bannerAlign:{type:String,default:"center 50%"},crumbs:{type:Array,default:()=>[]},wrapClass:{type:String,default:"page-wrap"},bare:{type:Boolean,default:!1},showPdf:{type:Boolean,default:!1},showShare:{type:Boolean,default:!1},showLink:{type:Boolean,default:!1},shareQuery:{type:Object,default:null}},emits:["nav"],setup(e){const t=Vue.ref(null),n=Vue.ref(!1),u=()=>{const s=new URLSearchParams(window.location.search);e.shareQuery&&Object.keys(e.shareQuery).forEach(f=>{const l=e.shareQuery[f];l!=null&&l!==""?s.set(f,l):s.delete(f)});const w=s.toString();return`${window.location.origin}${window.location.pathname}${w?"?"+w:""}`};return{pdfAreaRef:t,pdfExporting:n,handleExportPdf:async()=>{var s;n.value=!0;try{const w=coUtil.cofBuildExportFilename((e.title||"\uD654\uBA74")+".pdf"),f=(window.sfGetFoAuthUser?window.sfGetFoAuthUser():null)||{};await coUtil.cofExportPdf(t.value,w,(s=window.foApp)==null?void 0:s.showToast,f)}finally{n.value=!1}},handleShareKakao:()=>{var s,w;try{window.coExtSdk.shareKakao({title:(e.title||"ShopJoy")+" - ShopJoy",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:u()})}catch(f){(w=(s=window.foApp)==null?void 0:s.showToast)==null||w.call(s,f.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},handleCopyLink:async()=>{var s,w,f,l;try{await navigator.clipboard.writeText(u()),(w=(s=window.foApp)==null?void 0:s.showToast)==null||w.call(s,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(r){(l=(f=window.foApp)==null?void 0:f.showToast)==null||l.call(f,r.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}}}},template:`
<div ref="pdfAreaRef">
  <!-- 2026-09-06(PC \uBAA8\uB4DC \uBC30\uB108 \uC6B0\uCE21\uC5D0 \uBE48 \uACF5\uBC31\uC774 \uBC00\uB9AC\uB294 \uC99D\uC0C1 \u2014 \uADFC\uBCF8 \uC218\uC815) \u2014 \uBC30\uB108\uB97C
       max-width:1100px \uB85C \uC798\uB9AC\uB294 wrapClass \uB798\uD37C "\uC548"\uC5D0 \uB450\uACE0 vw \uACC4\uC0B0(calc(-50vw+50%) \uB4F1)\uC73C\uB85C
       \uD654\uBA74 \uB05D\uAE4C\uC9C0 \uBC00\uC5B4\uB0B4\uB358 \uC608\uC804 \uBC29\uC2DD\uC740, \uB370\uC2A4\uD06C\uD1B1 \uC138\uB85C \uC2A4\uD06C\uB864\uBC14\uAC00 \uC788\uB294/\uC5C6\uB294 \uC21C\uAC04\uC758 100vw \uC624\uCC28 \uB54C\uBB38\uC5D0
       \uC644\uBCBD\uD788 \uB9DE\uC544\uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uC544 \uC624\uB978\uCABD\uC5D0 \uC2A4\uD06C\uB864\uBC14 \uD3ED\uB9CC\uD07C \uBE48\uD2C8\uC774 \uB0A8\uB294 \uADFC\uBCF8\uC801 \uD55C\uACC4\uAC00 \uC788\uC5C8\uB2E4(\uBAA8\uBC14\uC77C\uC740
       \uC2A4\uD06C\uB864\uBC14\uAC00 \uC624\uBC84\uB808\uC774\uB77C \uC548 \uBCF4\uC600\uC744 \uBFD0 \uAC19\uC740 \uC6D0\uC778). \uBC30\uB108\uB97C wrapClass \uB798\uD37C "\uBC16", \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uC758
       \uC9C4\uC9DC \uCD5C\uC0C1\uC704(\uC5B4\uB5A4 max-width \uC81C\uC57D\uB3C4 \uC5C6\uB294 pdfAreaRef \uBC14\uB85C \uC544\uB798)\uB85C \uC62E\uAE30\uBA74 \uADF8\uB0E5 width:100% \uB85C
       \uC790\uAE30 \uBD80\uBAA8(= \uC2E4\uC81C \uBDF0\uD3EC\uD2B8 \uD3ED)\uB97C \uADF8\uB300\uB85C \uCC44\uC6B0\uBBC0\uB85C vw/calc \uD2B8\uB9AD\uC774 \uC544\uC608 \uD544\uC694 \uC5C6\uC5B4\uC9C4\uB2E4.
       (pdfAreaRef \uB294 \uC5EC\uC804\uD788 \uBC30\uB108+\uBCF8\uBB38 \uC804\uCCB4\uB97C \uAC10\uC2F8\uBBC0\uB85C PDF \uB0B4\uBCF4\uB0B4\uAE30 \uCEA1\uCC98 \uBC94\uC704\uB294 \uADF8\uB300\uB85C \uC720\uC9C0) -->
  <slot name="banner">
    <div v-if="bannerImg" class="fo-page-banner">
      <img :src="bannerImg" :alt="title" class="fo-page-banner-img" :style="'object-position:' + bannerAlign + ';'" />
      <div class="fo-page-banner-dim"></div>
      <div class="fo-page-banner-body">
        <div v-if="eyebrow" class="fo-page-eyebrow">{{ eyebrow }}</div>
        <h1 class="fo-page-h1"><slot name="title">{{ title }}</slot></h1>
        <div v-if="crumbs.length" class="fo-page-crumbs">
          <template v-for="(c, i) in crumbs" :key="i">
            <span v-if="i > 0" class="fo-page-crumb-sep">/</span>
            <span :class="c.page ? 'fo-page-crumb-link' : 'fo-page-crumb-cur'"
              @click="c.page ? $emit('nav', c.page) : null">{{ c.label }}</span>
          </template>
        </div>
      </div>
    </div>
  </slot>
  <div :class="bare ? '' : wrapClass">
    <div v-if="showPdf || showShare || showLink" class="fo-page-utilbar">
      <button v-if="showLink" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
      <button v-if="showShare" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
      <button v-if="showPdf" class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting" @click="handleExportPdf">
        <span v-if="pdfExporting">\u23F3</span>
        <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
          <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
          <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
        </svg>
      </button>
    </div>
    <!-- \uD654\uBA74 \uBCF8\uBB38 -->
    <slot></slot>
  </div>
</div>`},window.FoSearchArea={name:"FoSearchArea",props:{columns:{type:Array,default:null},param:{type:Object,default:null},showActions:{type:Boolean,default:!0},searchLabel:{type:String,default:"\uC870\uD68C"},resetLabel:{type:String,default:"\uCD08\uAE30\uD654"},loading:{type:Boolean,default:!1},barStyle:{type:String,default:""}},emits:["search","reset"],setup(e,{emit:t}){const n=window._foAreaCompUtil,u=(l,r={})=>{if(l==="search-emit"){if(!e.loading)return t("search")}else{if(l==="search-reset")return t("reset");console.warn("[handleBtnAction] unknown cmd:",l)}},h=(l,r={})=>{if(l==="field-select-change")return r.col&&r.col.onChange?r.col.onChange(r.event):null;if(l==="field-range-change")return r.col&&r.col.onRangeChange?r.col.onRangeChange(r.event):null;if(l==="field-pick-open")return r.col.onOpen(r.target);if(l==="field-pick-clear")return r.col.onClear(r.target);console.warn("[handleSelectAction] unknown cmd:",l)},p=l=>n.normOptions(l),d=l=>l.paramObj||e.param,s=Vue.computed(()=>!!(e.columns&&e.param));return{U:n,normOpts:p,po:d,cfAutoMode:s,fnHasRange1:l=>!!(l.rangeFirst&&l.rangeOptions),fnHasRange2:l=>!!(!l.rangeFirst&&l.rangeOptions),handleBtnAction:u,handleSelectAction:h}},template:`
<div :style="'display:flex;flex-wrap:wrap;gap:10px;align-items:center;'+barStyle" @keyup.enter="handleBtnAction('search-emit')">
  <!-- \u25BC search \uC601\uC5ED -->
  <template v-if="cfAutoMode">
    <template v-for="(col, ci) in columns" :key="col.key || ('_' + ci)">
      <!-- \uD544\uB4DC \uC88C\uCE21 \uB77C\uBCA8 (label/slot \uD0C0\uC785 \uC81C\uC678, col.label \uC9C0\uC815 \uC2DC)
           \u26A0 dateRange + typeKey \uB294 \uB77C\uBCA8 \uC0DD\uB7B5 \u2014 BoSearchArea \uC640 \uB3D9\uC77C \uADDC\uCE59.
              \uAE30\uAC04\uC720\uD615 select \uAC00 \uD544\uB4DC\uBA85\uC744 \uC774\uBBF8 \uD45C\uC2DC\uD574 \uC88C\uCE21 \uB77C\uBCA8\uACFC \uC911\uBCF5\uB41C\uB2E4. -->
      <label v-if="col.label ? (col.type!=='label' ? (col.type!=='slot' ? !(col.type==='dateRange' ? !!col.typeKey : false) : false) : false) : false" style="font-size:13px;color:var(--text-muted);white-space:nowrap;">
      {{ col.label }}
    </label>
    <!-- \uB77C\uBCA8 \uD14D\uC2A4\uD2B8 -->
    <label v-if="col.type==='label'" style="font-size:13px;color:var(--text-muted);white-space:nowrap;">
      {{ col.label }}
    </label>
    <!-- \uC2AC\uB86F \uD0C8\uCD9C\uAD6C -->
    <slot v-else-if="col.type==='slot'" :name="col.name || 'extra'">
    </slot>
    <!-- picker \uBC15\uC2A4 (input readonly + \uBC84\uD2BC) -->
    <template v-else-if="col.type==='pick'">
      <input :value="col.display ? col.display(po(col)) : (po(col)[col.nameKey] || po(col)[col.key])"
          readonly :placeholder="col.placeholder || '\uC120\uD0DD'"
          :style="(col.width ? ('width:' + col.width) : 'width:140px;') + ';background:#f9f9f9;cursor:pointer;'"
          @click="handleSelectAction('field-pick-open', { col, target: po(col) })" />
      <button class="btn-outline btn-sm" @click="handleSelectAction('field-pick-open', { col, target: po(col) })">
        {{ col.openLabel || '\uAC80\uC0C9' }}
      </button>
      <button v-if="po(col)[col.key]" class="btn-outline btn-sm" @click="handleSelectAction('field-pick-clear', { col, target: po(col) })">
        \u2715
      </button>
    </template>
    <!-- \uB2E4\uC911\uC120\uD0DD -->
    <bo-multi-check-select v-else-if="col.type==='multiCheck'"
        v-model="po(col)[col.key]" :options="col.options"
        :placeholder="col.placeholder || '\uC804\uCCB4'" :all-label="col.allLabel || '\uC804\uCCB4 \uC120\uD0DD'"
        :min-width="col.minWidth || '160px'" />
    <!-- \uD14D\uC2A4\uD2B8 \uC785\uB825 -->
    <input v-else-if="col.type==='text'" v-model="po(col)[col.key]"
        :placeholder="col.placeholder" :style="col.width ? ('width:' + col.width) : ''"
        @keyup.enter="handleBtnAction('search-emit')" />
    <!-- select -->
    <select v-else-if="col.type==='select'" v-model="po(col)[col.key]"
        @change="handleSelectAction('field-select-change', { col, event: $event })">
      <option v-if="col.nullable !== false" value="">{{ col.nullLabel || '\uC804\uCCB4' }}</option>
      <option v-for="o in normOpts(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <!-- \uB2E8\uC77C \uB0A0\uC9DC -->
    <input v-else-if="col.type==='date'" type="date" v-model="po(col)[col.key]" />
    <!-- \uB0A0\uC9DC \uBC94\uC704 + (\uC635\uC158) \uAE30\uAC04\uC720\uD615 + (\uC635\uC158) \uC635\uC158\uC120\uD0DD select -->
    <template v-else-if="col.type==='dateRange'">
      <select v-if="col.typeKey" v-model="po(col)[col.typeKey]">
        <option v-for="c in normOpts(col.typeOptions)" :key="c.value" :value="c.value">{{ c.label }}</option>
      </select>
      <select v-if="fnHasRange1(col)" v-model="po(col)[col.key]"
          @change="handleSelectAction('field-range-change', { col, event: $event })"
          :style="col.rangeWidth ? ('min-width:' + col.rangeWidth) : ''">
        <option value="">{{ col.rangeFirstLabel || '\uAE30\uAC04 \uC120\uD0DD' }}</option>
        <option v-for="o in normOpts(col.rangeOptions)" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <input type="date" v-model="po(col)[col.startKey || 'dateRangeStart']"
          :style="col.dateWidth ? ('width:' + col.dateWidth) : ''" />
      <span :style="col.sepStyle || ''">
        ~
      </span>
      <input type="date" v-model="po(col)[col.endKey || 'dateRangeEnd']"
          :style="col.dateWidth ? ('width:' + col.dateWidth) : ''" />
      <select v-if="fnHasRange2(col)" v-model="po(col)[col.key]"
          @change="handleSelectAction('field-range-change', { col, event: $event })">
        <option value="">\uC635\uC158\uC120\uD0DD</option>
        <option v-for="o in normOpts(col.rangeOptions)" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
    </template>
  </template>
</template>
<slot>
</slot>
<div v-if="showActions" style="display:flex;gap:6px;margin-left:auto;">
  <slot name="actions-before">
  </slot>
  <button class="btn_search" :disabled="loading" @click="handleBtnAction('search-emit')">
    {{ searchLabel }}
  </button>
  <button class="btn_reset" @click="handleBtnAction('search-reset')">
    {{ resetLabel }}
  </button>
  <slot name="actions-after">
  </slot>
</div>
</div>
`},window._foAreaCompUtil={normOptions(e){return((typeof e=="function"?e():e)||[]).map(n=>({value:n.value!=null?n.value:n.codeValue,label:n.label!=null?n.label:n.codeLabel}))},cellText(e,t){const n=t?t[e.key]:void 0;return typeof e.fmt=="function"?e.fmt(n,t):n==null?"":n},badgeClass(e,t){return typeof e.badge=="function"?e.badge(t):window.coUtil&&typeof coUtil.fnCodeBadge=="function"&&e.codeGrp?coUtil.fnCodeBadge(e.codeGrp,t[e.key]):"b-gray"},autoAlign(e){if(e.align)return e.align;if(e.edit||e.type==="slot")return"";const t=String(e.key||"").toLowerCase(),n=String(e.label||"");return/viewcnt|hitcnt|viewcount|readcnt/.test(t)||/조회수|방문수|클릭수/.test(n)?"center":["amt","price","balance","fee","qty","cnt","count","rate","cost","stock","point","sum","total","value"].some(p=>new RegExp("(^|_)"+p+"(_|$)|"+p+"$").test(t))||/금액|가격|잔액|배송비|할인값|할인가|수량|개수|건수|단가|합계|총액|포인트|적립금|충전금|재고|\(원\)|원\)$|율$/.test(n)?"right":/(^|_)(cd|code|status|type|yn|flag|state|target)$/.test(t)||/cd$|status$|yn$|type$|typecd|statuscd|targetcd|target$/.test(t)||/date$|regdate|moddate|period/.test(t)||/^상태$|^유형$|^구분$|여부|^코드$|^등급$|^타입$|^단계$|일$|일시$|기간|등록일|수정일|작성일|시작일|종료일|^대상$|적용대상|대상$|^방식$|^방법$|^분류$|^레벨$|유형$/.test(n)?"center":(/(nm|name|title|label)$/.test(t)||/명$|제목|이름|타이틀/.test(n),"")},thStyle(e){if(e.style)return e.style;let t="text-align:center;";return e.width&&(t+="width:"+e.width+";"),t},tdStyle(e,t){let n="";const u=this.autoAlign(e);if(u&&(n+="text-align:"+u+";"),e.mono&&(n+="font-family:monospace;"),e.link&&(n+="cursor:pointer;"),!e.noEllipsis&&!e.edit&&(n+="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),e.cellStyle!=null){const h=typeof e.cellStyle=="function"?e.cellStyle(t?t[e.key]:void 0,t):e.cellStyle;h&&(n+=(n&&!n.endsWith(";")?";":"")+h)}return n},cellClass(e,t){return e.cellClass==null?"":typeof e.cellClass=="function"?e.cellClass(t?t[e.key]:void 0,t)||"":e.cellClass},cellTitle(e,t){if(e.cellTitle===!1)return null;if(e.cellTitle==null||e.cellTitle===!0){const n=this.cellText(e,t);return n==null||n===""?null:String(n)}if(typeof e.cellTitle=="function"){const n=e.cellTitle(t?t[e.key]:void 0,t);return n==null?null:String(n)}return String(e.cellTitle)},cellInnerStyle(e,t){if(e.cellInnerStyle==null)return null;const n=typeof e.cellInnerStyle=="function"?e.cellInnerStyle(t?t[e.key]:void 0,t):e.cellInnerStyle;return n==null?null:String(n)},cellInnerClass(e,t){if(e.cellInnerClass==null)return null;const n=typeof e.cellInnerClass=="function"?e.cellInnerClass(t?t[e.key]:void 0,t):e.cellInnerClass;return n==null?null:String(n)},pgNo(e){return e?e.pageNo!=null?e.pageNo:e.page!=null?e.page:1:1},pgSize(e){return e?e.pageSize!=null?e.pageSize:e.size!=null?e.size:20:20},pgTotal(e,t){return e?e.pageTotalCount!=null?e.pageTotalCount:e.total!=null?e.total:t:t},pgSetNo(e,t){e&&(e.pageNo!=null?e.pageNo=t:e.page=t)}},window.FoGrid={name:"FoGrid",props:{columns:{type:Array,required:!0},rows:{type:Array,default:()=>[]},pager:{type:Object,default:null},sortState:{type:Object,default:null},listTitle:{type:String,default:"\uBAA9\uB85D"},rowKey:{type:String,default:null},rowStyle:{type:Function,default:null},rowClass:{type:Function,default:null},countText:{type:String,default:null},isExpanded:{type:Function,default:null},draggable:{type:Boolean,default:!1},showSave:{type:Boolean,default:!1},saveLabel:{type:String,default:"\uC800\uC7A5"},rowActions:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},bare:{type:Boolean,default:!1},minWidth:{type:String,default:""},tableMaxHeight:{type:String,default:null},showRowNo:{type:Boolean,default:!0},rowClick:{type:Function,default:null},selectable:{type:Boolean,default:!1},checkedKey:{type:String,default:null},isChecked:{type:Function,default:null},allChecked:{type:Boolean,default:!1},layout:{type:String,default:"table"},cardMinWidth:{type:String,default:"220px"},cardClass:{type:String,default:""},rowActionsCols:{type:Array,default:null}},emits:["sort","row-click","cell-click","save","row-remove","reorder","toggle-check","toggle-check-all"],setup(e,{emit:t,slots:n}){const u=window._foAreaCompUtil,h=Vue.computed(()=>u.pgTotal(e.pager,e.rows.length)),p=Vue.computed(()=>!!n.tfoot&&e.rows.length>0),d=Vue.ref(null),s=Vue.computed(()=>{const o=e.columns.find(i=>i.type==="actions");return!o||typeof o.visible=="function"&&!o.visible()?null:o}),w=Vue.computed(()=>e.columns.filter(o=>o.type!=="actions")),f=Vue.computed(()=>w.value.length+(e.showRowNo?1:0)+(e.selectable?1:0)+(e.draggable?1:0)+(e.rowActions||s.value?1:0)),l=Vue.computed(()=>e.minWidth?"min-width:"+e.minWidth+";":""),r=Vue.computed(()=>e.selectable?34:0),g=Vue.computed(()=>r.value+(e.draggable?26:0)),v=(o,i,b)=>{let A="position:sticky;left:"+o+"px;z-index:"+i+";";return b&&(A+="box-shadow:2px 0 4px rgba(0,0,0,.08);"),A},S=(o,i)=>{let b="position:sticky;right:0;z-index:"+o+";";return i&&(b+="box-shadow:-2px 0 4px rgba(0,0,0,.08);"),b},R=(o,i)=>{const A=((typeof e.rowStyle=="function"?e.rowStyle(o,i):"")||"").match(/background:\s*([^;]+)/);return A?A[1].trim():i%2===1?"var(--grid-td-bg-alt)":"var(--grid-td-bg)"},B=(o,i={})=>{if(o==="toolbar-save")return t("save");if(o==="grid-toggle-check-all")return t("toggle-check-all");console.warn("[handleBtnAction] unknown cmd:",o)},_=(o,i={})=>{var b;if(o==="sort-toggle"){if(typeof i.col.headClick=="function")return i.col.headClick(i.col);if(i.col.sortKey)return t("sort",i.col.sortKey)}else{if(o==="grid-row-click")return typeof e.rowClick=="function"&&e.rowClick(i.row),t("row-click",i.row);if(o==="grid-cell-click")return typeof e.rowClick=="function"&&e.rowClick(i.row),t("cell-click",{row:i.row,col:i.col,colKey:(b=i.col)==null?void 0:b.key,colIndex:i.ci,rowIndex:i.idx});if(o==="grid-row-remove")return t("row-remove",i.row);if(o==="grid-row-toggle-check"){const A=i.row[e.checkedKey||e.rowKey];return t("toggle-check",A)}else if(o==="grid-row-drag-start")e.draggable&&(d.value=i.idx);else if(o==="grid-row-drag-over"){if(!e.draggable||d.value===null||d.value===i.idx)return;i.event.preventDefault();const A=e.rows.splice(d.value,1)[0];e.rows.splice(i.idx,0,A),d.value=i.idx}else o==="grid-row-drag-end"?d.value!==null&&(d.value=null,t("reorder")):console.warn("[handleSelectAction] unknown cmd:",o)}},T=o=>e.pager?(u.pgNo(e.pager)-1)*u.pgSize(e.pager)+o+1:o+1,L=o=>{const i=e.sortState;return!o.sortKey||!i?"":i.sortKey!==o.sortKey?"\u21C5":i.sortDir==="asc"?"\u2191":"\u2193"},U=o=>e.sortState&&e.sortState.sortKey===o.sortKey,C=(o,i)=>typeof e.rowStyle=="function"?e.rowStyle(o,i):"",K=(o,i)=>(typeof e.rowClass=="function"&&e.rowClass(o,i)||"")+(e.rowClick?" fo-grid-clickable":""),N=(o,i)=>typeof e.isExpanded=="function"?!!e.isExpanded(o,i):!1,F=o=>o[e.checkedKey||e.rowKey],a=o=>typeof e.isChecked=="function"?!!e.isChecked(F(o)):!1,c=(o,i,b)=>typeof o=="function"?o(i,b):o,x=(o,i,b)=>typeof o.visible=="function"?!!o.visible(i,b):!0,y=(o,i,b)=>typeof o.disabled=="function"?!!o.disabled(i,b):!1,m=o=>coUtil.cofColLabel(o),k=o=>coUtil.cofColNm(o),V=Vue.computed(()=>e.rowActions||!!s.value),I=Vue.computed(()=>e.rowActionsCols||s.value&&s.value.actions||null);return{fnRowActionVal:c,fnRowActionVisible:x,fnRowActionDisabled:y,fnColLabel:m,fnColNm:k,U:u,cfTotal:h,cfShowTfoot:p,rowNo:T,sortIcon:L,sortActive:U,fnRowStyle:C,fnRowClass:K,fnIsExpanded:N,cfColspan:f,cfTableStyle:l,fnRowChecked:a,cfPinDragLeft:r,cfPinNoLeft:g,pinLeftStyle:v,pinRightStyle:S,fnPinBg:R,handleBtnAction:B,handleSelectAction:_,columns:w,rowActions:V,rowActionsCols:I}},template:`
<div :class="bare ? '' : 'fo-grid-card'">
  <div v-if="!bare" class="fo-grid-toolbar">
    <span class="fo-grid-title">
      {{ listTitle }}
      <span class="fo-grid-count">
        {{ countText != null ? countText : ('\uCD1D ' + cfTotal + '\uAC74') }}
      </span>
      <span v-if="loading" style="margin-left:8px;font-size:12px;color:var(--accent);font-weight:400;">\u23F3 \uC870\uD68C \uC911\u2026</span>
    </span>
    <div style="margin-left:auto;display:flex;gap:6px;">
      <slot name="toolbar-actions">
      </slot>
      <button v-if="showSave" class="btn-blue btn-sm" @click="handleBtnAction('toolbar-save')">
        {{ saveLabel }}
      </button>
    </div>
  </div>
  <div v-if="layout==='table'" class="fo-grid-scroll" :style="tableMaxHeight ? ('position:relative;max-height:' + tableMaxHeight + ';overflow:auto;') : 'position:relative;'">
    <!-- \uC870\uD68C \uC911 \uC624\uBC84\uB808\uC774 (\uAE30\uC874 \uD589 \uC704\uC5D0 \uD45C\uC2DC \u2014 \uC7AC\uC870\uD68C/\uD398\uC774\uC9C0 \uC774\uB3D9 \uD53C\uB4DC\uBC31). \uD589\uC774 \uC5C6\uC744 \uB550 \uBE48\uD589 \uBB38\uAD6C\uB85C \uC548\uB0B4 -->
    <div v-if="loading ? (rows.length) : false" style="position:absolute;inset:0;z-index:5;background:rgba(255,255,255,.55);display:flex;align-items:flex-start;justify-content:center;padding-top:40px;pointer-events:none;">
      <span style="font-size:13px;color:var(--accent);background:#fff;border:1px solid var(--border);border-radius:14px;padding:4px 14px;box-shadow:0 2px 8px rgba(0,0,0,.08);">\u23F3 \uC870\uD68C \uC911\u2026</span>
    </div>
    <table class="fo-grid-table" :style="cfTableStyle">
      <thead>
        <tr>
          <th v-if="selectable" :style="'width:34px;text-align:center;' + pinLeftStyle(0, 6)">
            <input type="checkbox" :checked="allChecked" @change="handleBtnAction('grid-toggle-check-all')" />
          </th>
          <th v-if="draggable" :style="'width:26px;' + pinLeftStyle(cfPinDragLeft, 6)">
          </th>
          <th v-if="showRowNo" :style="'width:40px;text-align:center;' + pinLeftStyle(cfPinNoLeft, 6, true)">
            \uBC88\uD638
          </th>
          <slot name="head">
            <th v-for="col in columns" :key="col.key" :class="col.cls"
              :style="U.thStyle(col) + (col.sortKey ? 'cursor:pointer;user-select:none;' : '')"
              @click="handleSelectAction('sort-toggle', { col })">
              {{ col.noHead ? '' : col.label }}
              <span v-if="col.noHead ? false : !!fnColNm(col)" style="display:block;font-size:9px;font-weight:400;color:#9aa4b2;line-height:1.2;">{{ fnColNm(col) }}</span>
              <span v-if="col.sortKey"
                :style="sortActive(col) ? 'color:var(--accent);font-weight:bold;' : 'color:var(--text-muted);'">
                {{ sortIcon(col) }}
              </span>
            </th>
          </slot>
          <th v-if="rowActions || $slots['head-actions']" :style="'width:44px;text-align:center;' + pinRightStyle(6, true)">
            <slot name="head-actions">
              \uAD00\uB9AC
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- \u25BC grid-row \uC601\uC5ED -->
        <template v-for="(row, idx) in rows" :key="rowKey ? row[rowKey] : idx">
          <tr :style="fnRowStyle(row, idx)" :class="fnRowClass(row, idx)"
            :draggable="draggable"
            @dragstart="handleSelectAction('grid-row-drag-start', { idx })"
            @dragover="handleSelectAction('grid-row-drag-over', { idx, event: $event })"
            @dragend="handleSelectAction('grid-row-drag-end')">
            <td v-if="selectable" :style="'text-align:center;' + pinLeftStyle(0, 4) + 'background:' + fnPinBg(row, idx) + ';'" @click.stop>
              <input type="checkbox" :checked="fnRowChecked(row)" @change="handleSelectAction('grid-row-toggle-check', { row })" />
            </td>
            <td v-if="draggable" class="fo-grid-drag" :style="pinLeftStyle(cfPinDragLeft, 4) + 'background:' + fnPinBg(row, idx) + ';'">
              \u2261
            </td>
            <td v-if="showRowNo" :style="'text-align:center;color:var(--text-muted);font-size:0.74rem;' + pinLeftStyle(cfPinNoLeft, 4, true) + 'background:' + fnPinBg(row, idx) + ';'"
              @click="handleSelectAction('grid-cell-click', { row, col: { key: '__no__' }, ci: -1, idx })">
              {{ rowNo(idx) }}
            </td>
            <template v-for="(col, ci) in columns" :key="col.key">
              <slot :name="'cell-' + col.key" :row="row" :idx="idx" :no="rowNo(idx)">
                <td :style="U.tdStyle(col, row)" :class="U.cellClass(col, row)" :title="U.cellTitle(col, row)"
                  @click="handleSelectAction('grid-cell-click', { row, col, ci, idx })">
                  <input v-if="col.edit==='text'" class="fo-grid-input" v-model="row[col.key]"
                    :placeholder="col.placeholder" />
                  <input v-else-if="col.edit==='number'" type="number" class="fo-grid-input fo-grid-num"
                    v-model.number="row[col.key]" />
                  <input v-else-if="col.edit==='date'" type="date" class="fo-grid-input"
                    v-model="row[col.key]" />
                  <select v-else-if="col.edit==='select'" class="fo-grid-select" v-model="row[col.key]">
                    <option v-for="o in U.normOptions(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
                  </select>
                  <span v-else-if="col.link" class="fo-grid-link" @click.stop="handleSelectAction('grid-cell-click', { row, col, ci, idx })">
                    {{ U.cellText(col, row) }}
                  </span>
                  <span v-else-if="col.badge" class="fo-grid-badge" :class="U.badgeClass(col, row)">
                    {{ U.cellText(col, row) }}
                  </span>
                  <span v-else-if="col.cellInnerStyle != null || col.cellInnerClass != null"
                    :style="U.cellInnerStyle(col, row)" :class="U.cellInnerClass(col, row)">
                    {{ U.cellText(col, row) }}
                  </span>
                  <template v-else>
                    {{ U.cellText(col, row) }}
                  </template>
                </td>
              </slot>
            </template>
            <td v-if="rowActions" :style="'text-align:center;white-space:nowrap;' + pinRightStyle(4, true) + 'background:' + fnPinBg(row, idx) + ';'">
              <slot name="row-actions" :row="row" :idx="idx">
                <template v-if="rowActionsCols">
                  <template v-for="(a, ai) in rowActionsCols" :key="ai">
                    <a v-if="a.href && fnRowActionVisible(a, row, idx)" :href="a.href(row, idx)" :target="a.target || '_blank'" rel="noopener"
                      :class="fnRowActionVal(a.cls, row, idx)" :style="fnRowActionVal(a.style, row, idx)" :title="fnRowActionVal(a.title, row, idx)">{{ fnRowActionVal(a.label, row, idx) }}</a>
                    <button v-else-if="fnRowActionVisible(a, row, idx)" type="button" :disabled="fnRowActionDisabled(a, row, idx)"
                      :class="fnRowActionVal(a.cls, row, idx)" :style="fnRowActionVal(a.style, row, idx)" :title="fnRowActionVal(a.title, row, idx)"
                      @click="a.onClick && a.onClick(row, idx)">{{ fnRowActionVal(a.label, row, idx) }}</button>
                  </template>
                </template>
                <button v-else class="btn_row_delete" @click="handleSelectAction('grid-row-remove', { row })">
                  \u2715
                </button>
              </slot>
            </td>
            <slot v-else name="row-actions" :row="row" :idx="idx">
            </slot>
          </tr>
          <tr v-if="fnIsExpanded(row, idx)" class="fo-grid-expand-row">
            <slot name="row-expand" :row="row" :idx="idx" :colspan="cfColspan">
              <td :colspan="cfColspan">
              </td>
            </slot>
          </tr>
        </template>
        <tr v-if="!rows.length">
          <td :colspan="cfColspan" class="fo-grid-empty">
            <span v-if="loading">\u23F3 \uC870\uD68C \uC911\u2026</span>
            <span v-else>{{ emptyText }}</span>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="cfShowTfoot">
        <slot name="tfoot" :rows="rows" :colspan="cfColspan">
        </slot>
      </tfoot>
    </table>
  </div>
  <!-- \u25BC \uCE74\uB4DC\uD615\uC2DD(layout='card') \u2014 \uD45C \uB300\uC2E0 \uCE74\uB4DC \uADF8\uB9AC\uB4DC\uB85C \uB80C\uB354. #card \uC2AC\uB86F\uC774 \uCF58\uD150\uCE20\uB97C \uC804\uB2F4\uD558\uACE0
       (row/idx/no \uC2A4\uCF54\uD504 \uC81C\uACF5), \uBBF8\uC81C\uACF5 \uC2DC columns \uAE30\uBC18 \uAE30\uBCF8 \uCE74\uB4DC(\uC81C\uBAA9=\uCCAB \uCEEC\uB7FC, \uB098\uBA38\uC9C0\uB294 \uB77C\uBCA8:\uAC12)\uB85C \uB300\uCCB4 \u2014
       \uD654\uBA74\uC774 \uC2AC\uB86F\uC744 \uAE5C\uBE61 \uBE60\uB728\uB824\uB3C4 \uBE48 \uCE74\uB4DC\uAC00 \uB728\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294 \uC548\uC804\uB9DD\uC774\uB2E4. -->
  <div v-else class="fo-grid-cardview" :style="{ '--fo-grid-card-min': cardMinWidth }">
    <div v-if="loading && !rows.length" class="fo-grid-empty">\u23F3 \uC870\uD68C \uC911\u2026</div>
    <div v-else-if="!rows.length" class="fo-grid-empty">{{ emptyText }}</div>
    <template v-else>
      <div v-for="(row, idx) in rows" :key="rowKey ? row[rowKey] : idx"
        :class="[cardClass || 'fo-grid-card-item', fnRowClass(row, idx)]" :style="fnRowStyle(row, idx)"
        @click="handleSelectAction('grid-row-click', { row })">
        <slot name="card" :row="row" :idx="idx" :no="rowNo(idx)">
          <div class="fo-grid-card-default-title">{{ U.cellText(columns[0], row) }}</div>
          <div v-for="col in columns.slice(1)" :key="col.key" class="fo-grid-card-default-row">
            <b>{{ col.label }}</b><span>{{ U.cellText(col, row) }}</span>
          </div>
        </slot>
      </div>
    </template>
  </div>
  <!-- \u25BC pager \uB294 \uADF8\uB9AC\uB4DC \uC678\uBD80 <fo-pager> \uB85C\uB9CC \uAD6C\uD604 (\uB0B4\uBD80 \uD398\uC774\uC800 \uC81C\uAC70\uB428) -->
</div>
`},window.FoGridCrud={name:"FoGridCrud",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},rowKey:{type:String,required:!0},actionHeader:{type:String,default:"\uAD00\uB9AC"},listTitle:{type:String,default:"\uBAA9\uB85D"},maxHeight:{type:String,default:"480px"},totalCount:{type:Number,default:null},scrollEndOffset:{type:Number,default:500},minWidth:{type:String,default:""},draggable:{type:Boolean,default:!0},checkAll:{type:Boolean,default:!1},focusedIdx:{type:Number,default:null},showRowNo:{type:Boolean,default:!0},showRowId:{type:Boolean,default:!0},showRowStatus:{type:Boolean,default:!0},showRowCheck:{type:Boolean,default:!0},showAdd:{type:Boolean,default:!0},showSave:{type:Boolean,default:!0},showExport:{type:Boolean,default:!1},showExcelUpload:{type:Boolean,default:!1},selectedKey:{type:[String,Number],default:null},cellTitle:{type:Function,default:null},sortState:{type:Object,default:null},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}},emits:["add","save","cancel-checked","delete-checked","reorder","cell-change","update:checkAll","update:focusedIdx","sort","cell-click","scroll-end","export","excel-upload","row-dblclick","row-click"],setup(e,{emit:t}){const n=window._foAreaCompUtil,u=Vue.computed(()=>e.rows.filter(a=>a._row_status!=="D").length),h=Vue.ref(e.checkAll);Vue.watch(()=>e.checkAll,a=>{h.value=a});const p=Vue.ref(null),d=Vue.ref(!1),s=Vue.computed(()=>{let a=e.columns.length+1;return e.draggable&&(a+=1),e.showRowNo&&(a+=1),e.showRowId&&(a+=1),e.showRowStatus&&(a+=1),e.showRowCheck&&(a+=1),a}),w=Vue.computed(()=>e.minWidth?"min-width:"+e.minWidth+";":""),f=(a,c={})=>{if(a==="toolbar-add")return t("add");if(a==="toolbar-save")return t("save");if(a==="toolbar-cancel-checked")return t("cancel-checked");if(a==="toolbar-delete-checked")return t("delete-checked");if(a==="toolbar-export")return t("export");if(a==="toolbar-excel-upload")return t("excel-upload");if(a==="grid-toggle-check-all"){const x=!h.value;return h.value=x,e.rows.forEach(y=>{y._row_check=x}),t("update:checkAll",x)}else console.warn("[handleBtnAction] unknown cmd:",a)},l=(a,c={})=>{var x;if(a==="sort-toggle"){if(typeof c.col.headClick=="function")return c.col.headClick(c.col);if(c.col.sortKey)return t("sort",c.col.sortKey)}else{if(a==="grid-row-focus")return e.focusedIdx!==c.idx&&t("update:focusedIdx",c.idx),t("row-click",c.row,c.idx);if(a==="grid-row-dblclick")return t("row-dblclick",c.row,c.idx);if(a==="grid-cell-click")return t("cell-click",{row:c.row,col:c.col,colKey:(x=c.col)==null?void 0:x.key,colIndex:c.ci,rowIndex:c.idx});if(a==="grid-row-cell-change"){const y=c.row;if(y._row_status==="I"||y._row_status==="D")return t("cell-change",y);if(y._row_org){const m=Object.keys(y._row_org).some(k=>String(y[k])!==String(y._row_org[k]));y._row_status=m?"U":"N"}return t("cell-change",y)}else if(a==="grid-row-drag-start")e.draggable&&(p.value=c.idx,d.value=!1);else if(a==="grid-row-drag-over"){if(!e.draggable||p.value===null||p.value===c.idx)return;c.event.preventDefault();const y=e.rows.splice(p.value,1)[0];e.rows.splice(c.idx,0,y),p.value=c.idx,d.value=!0}else a==="grid-row-drag-end"?(d.value&&t("reorder"),p.value=null,d.value=!1):console.warn("[handleSelectAction] unknown cmd:",a)}},r=a=>"s-"+(a||"N"),g=a=>typeof e.cellTitle=="function"?e.cellTitle(a):"",v=a=>{const c=e.sortState;return!a.sortKey||!c?"":c.sortKey!==a.sortKey?"\u21C5":c.sortDir==="asc"?"\u2191":"\u2193"},S=a=>e.sortState&&e.sortState.sortKey===a.sortKey,R=Vue.computed(()=>(e.draggable?26:0)+(e.showRowNo?40:0)),B=a=>e.selectedKey!=null&&a[e.rowKey]===e.selectedKey,_=(a,c,x,y)=>{let m="position:sticky;left:"+a+"px;z-index:"+c+";";const k=[];return y&&(a===0&&k.push("inset 2px 0 0 #2563eb"),k.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),x&&k.push("2px 0 4px rgba(0,0,0,.08)"),k.length&&(m+="box-shadow:"+k.join(",")+";"),m},T=(a,c,x)=>{let y="position:sticky;right:0;z-index:"+a+";";const m=[];return x&&m.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),c&&m.push("-2px 0 4px rgba(0,0,0,.08)"),m.length&&(y+="box-shadow:"+m.join(",")+";"),y},L=(a,c)=>B(a)?"rgba(37,99,235,.12)":c%2===1?"var(--grid-td-bg-alt)":"var(--grid-td-bg)",U=Vue.computed(()=>e.totalCount!=null?coUtil.cofCountText(e.totalCount,u.value):coUtil.cofCountText(u.value));let C=-1;return{fnColLabel:a=>coUtil.cofColLabel(a),fnColNm:a=>coUtil.cofColNm(a),U:n,cfVisibleCount:u,cfCountText:U,onScroll:a=>{const c=a.target;if(c.scrollHeight-c.scrollTop-c.clientHeight>e.scrollEndOffset){C=-1;return}C!==c.scrollHeight&&(C=c.scrollHeight,t("scroll-end"))},fnStatusClass:r,allChecked:h,fnColTitle:g,cfEmptyColspan:s,sortIcon:v,sortActive:S,cfTableStyle:w,cfPinIdLeft:R,pinLeftStyle:_,pinRightStyle:T,fnPinBg:L,fnRowSelected:B,handleBtnAction:f,handleSelectAction:l}},template:`
<div class="fo-grid-card">
  <div class="fo-grid-toolbar">
    <span class="fo-grid-title">
      {{ listTitle }}
      <span class="fo-grid-count">
        {{ cfVisibleCount }}\uAC74
      </span>
    </span>
    <div style="display:flex;gap:6px;margin-left:auto;">
      <slot name="toolbar-actions">
      </slot>
      <button v-if="showAdd" class="btn-outline btn-sm" @click="handleBtnAction('toolbar-add')">
        + \uD589\uCD94\uAC00
      </button>
      <button v-if="showRowCheck" class="btn-outline btn-sm" @click="handleBtnAction('toolbar-delete-checked')">
        \uD589\uC0AD\uC81C
      </button>
      <button v-if="showRowCheck" class="btn-outline btn-sm" @click="handleBtnAction('toolbar-cancel-checked')">
        \uCDE8\uC18C
      </button>
      <button v-if="showExport" class="btn btn_excel" @click="handleBtnAction('toolbar-export')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button v-if="showExcelUpload" class="btn btn_excel_upload" @click="handleBtnAction('toolbar-excel-upload')">
        \u{1F4E4} \uC5D1\uC140\uC5C5\uB85C\uB4DC
      </button>
      <button v-if="showSave" class="btn btn_save" @click="handleBtnAction('toolbar-save')">
        \uC800\uC7A5
      </button>
    </div>
  </div>
  <div class="fo-grid-scroll" :style="'max-height:' + maxHeight + ';'" @scroll="onScroll">
    <table class="fo-grid-table" :style="cfTableStyle">
      <thead>
        <tr>
          <th v-if="draggable" :style="'width:26px;' + pinLeftStyle(0, 6)">
          </th>
          <th v-if="showRowNo" :style="'width:40px;text-align:center;' + pinLeftStyle(draggable ? 26 : 0, 6)">
            \uBC88\uD638
          </th>
          <th v-if="showRowId" :style="'width:54px;text-align:center;' + pinLeftStyle(cfPinIdLeft, 6, true)">
            ID
          </th>
          <th v-if="showRowStatus" style="width:40px;text-align:center;">
            \uC0C1\uD0DC
          </th>
          <th v-if="showRowCheck" style="width:28px;text-align:center;">
            <input type="checkbox" :checked="allChecked" @change="handleBtnAction('grid-toggle-check-all')" />
          </th>
          <slot name="head">
            <th v-for="col in columns" :key="col.key" :class="col.cls"
              :style="U.thStyle(col) + (col.sortKey ? 'cursor:pointer;user-select:none;' : '')"
              :title="fnColTitle(col)" @click="handleSelectAction('sort-toggle', { col })">
              {{ col.noHead ? '' : col.label }}
              <span v-if="col.noHead ? false : !!fnColNm(col)" style="display:block;font-size:9px;font-weight:400;color:#9aa4b2;line-height:1.2;">{{ fnColNm(col) }}</span>
              <span v-if="col.sortKey"
                :style="sortActive(col) ? 'color:var(--accent);font-weight:bold;' : 'color:var(--text-muted);'">
                {{ sortIcon(col) }}
              </span>
            </th>
          </slot>
          <th :style="'width:44px;text-align:center;' + pinRightStyle(6, true)">
            <slot name="head-actions">{{ actionHeader }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- \u25BC grid-row \uC601\uC5ED -->
        <tr v-if="!rows.length">
          <td :colspan="cfEmptyColspan" class="fo-grid-empty">
            {{ emptyText }}
          </td>
        </tr>
        <tr v-else v-for="(row, idx) in rows" :key="row[rowKey]"
          class="fo-grid-clickable" :class="[ 's-row-' + row._row_status, focusedIdx===idx ? 'fo-grid-focused' : '', fnRowSelected(row) ? 'fo-grid-selected' : '' ]"
          :draggable="draggable"
          :style="focusedIdx===idx ? 'outline:2px solid var(--accent) inset;' : ''"
          @click="handleSelectAction('grid-row-focus', { row, idx })"
          @dblclick="handleSelectAction('grid-row-dblclick', { row, idx })"
          @dragstart="handleSelectAction('grid-row-drag-start', { idx })"
          @dragover="handleSelectAction('grid-row-drag-over', { idx, event: $event })"
          @dragend="handleSelectAction('grid-row-drag-end')">
          <td v-if="draggable" class="fo-grid-drag" title="\uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD" :style="pinLeftStyle(0, 4, false, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
            \u283F
          </td>
          <td v-if="showRowNo" :style="'text-align:center;color:var(--text-muted);font-size:0.74rem;' + pinLeftStyle(draggable ? 26 : 0, 4, false, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
            {{ idx + 1 }}
          </td>
          <td v-if="showRowId" :style="'text-align:center;color:var(--text-muted);font-size:0.74rem;' + pinLeftStyle(cfPinIdLeft, 4, true, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
            {{ row[rowKey] > 0 ? row[rowKey] : 'NEW' }}
          </td>
          <td v-if="showRowStatus" style="text-align:center;">
            <span class="fo-grid-status" :class="fnStatusClass(row._row_status)">
              {{ row._row_status }}
            </span>
          </td>
          <td v-if="showRowCheck" style="text-align:center;" @click.stop>
            <input type="checkbox" v-model="row._row_check" />
          </td>
          <template v-for="(col, ci) in columns" :key="col.key">
            <slot :name="'cell-' + col.key" :row="row" :idx="idx">
              <td :style="U.tdStyle(col, row)" :class="U.cellClass(col, row)" :title="U.cellTitle(col, row)">
                <input v-if="col.edit==='text'" class="fo-grid-input" :class="{ 'fo-grid-mono': col.mono }"
                  v-model="row[col.key]" :disabled="row._row_status==='D'"
                  :placeholder="col.placeholder" @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                <input v-else-if="col.edit==='number'" type="number" class="fo-grid-input fo-grid-num"
                  v-model.number="row[col.key]" :disabled="row._row_status==='D'"
                  @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                <input v-else-if="col.edit==='date'" type="date" class="fo-grid-input"
                  v-model="row[col.key]" :disabled="row._row_status==='D'"
                  @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                <select v-else-if="col.edit==='select'" class="fo-grid-select"
                  v-model="row[col.key]" :disabled="row._row_status==='D'"
                  @change="handleSelectAction('grid-row-cell-change', { row, col })">
                  <option v-if="col.nullable" :value="null">{{ col.nullLabel || '-- \uC120\uD0DD --' }}</option>
                  <option v-for="o in U.normOptions(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
                </select>
                <span v-else-if="col.link" class="fo-grid-link" @click.stop="handleSelectAction('grid-cell-click', { row, col, ci, idx })">
                  {{ U.cellText(col, row) }}
                </span>
                <span v-else-if="col.badge" class="fo-grid-badge" :class="U.badgeClass(col, row)">
                  {{ U.cellText(col, row) }}
                </span>
                <template v-else>
                  {{ U.cellText(col, row) }}
                </template>
              </td>
            </slot>
          </template>
          <td :style="'text-align:center;white-space:nowrap;' + pinRightStyle(4, true, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
            <slot name="row-actions" :row="row" :idx="idx">
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="padding:6px 2px 0;font-size:0.76rem;color:var(--text-muted);font-weight:600;">{{ cfCountText }}</div>
</div>
`},window.FoModal={name:"FoModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:String,default:"600px"},maxWidth:{type:String,default:"95vw"},height:{type:String,default:"auto"},minHeight:{type:String,default:""},maxHeight:{type:String,default:"90vh"},zIndex:{type:Number,default:1500},boxPad:{type:String,default:"24px"},bodyPad:{type:String,default:"0"},closeOnBackdrop:{type:Boolean,default:!0},teleport:{type:Boolean,default:!0},onCloseCb:{type:Function,default:null},onConfirmCb:{type:Function,default:null}},emits:["close","confirm"],setup(e,{emit:t}){const n=Vue.computed(()=>"z-index:"+e.zIndex+";"),u=Vue.computed(()=>"width:min("+e.width+", calc(100vw - 32px));max-width:"+e.maxWidth+";height:"+e.height+";max-height:"+e.maxHeight+";"+(e.minHeight?"min-height:"+e.minHeight+";":"")+"text-align:left;padding:"+e.boxPad+";"),h=Vue.computed(()=>"flex:1;overflow-y:auto;"+(e.bodyPad!=="0"?"padding:"+e.bodyPad+";":"")),p=(f,l={})=>{f==="modal-close"?(t("close"),typeof e.onCloseCb=="function"&&e.onCloseCb()):f==="modal-confirm"?(t("confirm"),typeof e.onConfirmCb=="function"&&e.onConfirmCb()):f==="modal-backdrop"?e.closeOnBackdrop&&p("modal-close"):console.warn("[handleBtnAction] unknown cmd:",f)};return{onClose:()=>p("modal-close"),onConfirm:()=>p("modal-confirm"),cfOverlayStyle:n,cfBoxStyle:u,cfBodyStyle:h,handleBtnAction:p,handleSelectAction:(f,l={})=>{console.warn("[handleSelectAction] unknown cmd:",f)}}},template:`
<teleport to="body" :disabled="!teleport">
  <div v-if="show" class="modal-overlay" :style="cfOverlayStyle" @click.self="handleBtnAction('modal-backdrop')">
    <div class="modal-box fo-modal-box" :style="cfBoxStyle">
      <div v-if="title" class="fo-modal-header">
        <span class="fo-modal-title">
          {{ title }}
        </span>
        <span style="display:flex;align-items:center;gap:8px;">
          <slot name="header-extra">
          </slot>
          <button type="button" class="fo-modal-close" @click="handleBtnAction('modal-close')">
            \u2715
          </button>
        </span>
      </div>
      <div :style="cfBodyStyle">
        <slot name="body">
          <slot>
          </slot>
        </slot>
      </div>
      <div v-if="$slots.footer" class="fo-modal-footer">
        <slot name="footer" :confirm="onConfirm" :close="onClose">
        </slot>
      </div>
    </div>
  </div>
</teleport>
`},window.FoRowCancelDelete={name:"FoRowCancelDelete",props:{row:{type:Object,required:!0},allowDeleteNull:{type:Boolean,default:!1},cancelLabel:{type:String,default:"\uCDE8\uC18C"},deleteLabel:{type:String,default:"\uC0AD\uC81C"}},emits:["cancel","delete"],setup(e,{emit:t}){const n=Vue.computed(()=>["U","I","D"].includes(e.row._row_status)),u=Vue.computed(()=>{const d=e.row._row_status;return e.allowDeleteNull&&d==null?!0:d==="N"});return{cfShowCancel:n,cfShowDelete:u,handleBtnAction:(d,s={})=>{if(d==="row-cancel")return t("cancel");if(d==="row-delete")return t("delete");console.warn("[handleBtnAction] unknown cmd:",d)},handleSelectAction:(d,s={})=>{console.warn("[handleSelectAction] unknown cmd:",d)}}},template:`
<span>
  <button v-if="cfShowCancel" @click.stop="handleBtnAction('row-cancel')"
    style="font-size:10px;padding:2px 7px;border:1px solid #ddd;border-radius:4px;background:#fff;cursor:pointer;">
    {{ cancelLabel }}
  </button>
  <button v-if="cfShowDelete" class="btn_row_delete" @click.stop="handleBtnAction('row-delete')"
    style="font-size:10px;padding:2px 7px;">
    {{ deleteLabel }}
  </button>
</span>
`},window.FoFormArea={name:"FoFormArea",props:{columns:{type:Array,required:!0},form:{type:Object,default:()=>({})},errors:{type:Object,default:()=>({})},cols:{type:Number,default:2},minColWidth:{type:String,default:"240px"},gap:{type:Number,default:14},showActions:{type:Boolean,default:!1},submitLabel:{type:String,default:"\uD655\uC778"}},emits:["submit"],setup(e,{emit:t}){const n=window._foAreaCompUtil,u=Vue.computed(()=>{const l=[];let r=[],g=0;for(const v of e.columns){if(v.visible&&!v.visible(e.form))continue;if(v.type==="rowBreak"){r.length&&(l.push(r),r=[],g=0);continue}if(v.type==="group"){r.length&&(l.push(r),r=[],g=0),l.push([v]);continue}const S=Math.min(v.colSpan||1,e.cols);g+S>e.cols&&r.length&&(l.push(r),r=[],g=0),r.push(v),g+=S}return r.length&&l.push(r),l});return{fnColLabel:l=>coUtil.cofColLabel(l),fnColNm:l=>coUtil.cofColNm(l),cfRows:u,normOpts:l=>n.normOptions(l),dispVal:l=>{const r=e.form[l.key];return l.fmt?l.fmt(r,e.form):r==null||r===""?"-":r},handleBtnAction:(l,r={})=>{if(l==="form-submit")return t("submit");console.warn("[handleBtnAction] unknown cmd:",l)},handleSelectAction:(l,r={})=>{if(l==="field-change"){const g=r.col,v=e.form[g.key];if(g.validate){const S=g.validate(v,e.form);S?e.errors[g.key]=S:e.errors[g.key]!==void 0&&delete e.errors[g.key]}else g.clearErrOnInput!==!1&&e.errors[g.key]!==void 0&&delete e.errors[g.key];if(g.onChange)return g.onChange(e.form[g.key],e.form,r.event)}else console.warn("[handleSelectAction] unknown cmd:",l)}}},template:`
<div class="fo-form-area">
  <div v-for="(row, ri) in cfRows" :key="ri"
    :style="{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax('+minColWidth+',1fr))',gap:gap+'px',marginBottom:gap+'px'}">
    <div v-for="col in row" :key="col.key || col.label" :style="((col.colSpan ? col.colSpan>1 : false) ? ('grid-column: span ' + Math.min(col.colSpan, cols) + ';') : '')">
    <!-- \uC911\uAC04\uADF8\uB8F9 \uC81C\uBAA9 (\uB77C\uBCA8/\uC785\uB825 \uC5C6\uC774 \uC139\uC158 \uD5E4\uB354\uB9CC) -->
    <div v-if="col.type === 'group'" class="section-title" :style="ri===0?'margin-top:0;':''">
    {{ fnColLabel(col) }}
  </div>
    <!-- \uB77C\uBCA8 -->
    <label v-else-if="col.type !== 'slot' ? (!col.hideLabel) : false" class="form-label">
    {{ fnColLabel(col) }}
    <span v-if="col.required" class="form-required">
      *
    </span>
    <span v-if="col.hint" style="font-size:11px;color:#888;font-weight:400;margin-left:6px;">
      {{ col.hint }}
    </span>
  </label>
  <!-- readonly \uD45C\uC2DC -->
  <div v-if="col.type === 'readonly'"
        style="padding:10px 12px;background:#f9fafb;border-radius:6px;color:#374151;font-size:0.9rem;min-height:38px;display:flex;align-items:center;">
    {{ dispVal(col) }}
  </div>
  <!-- text/email/tel/password -->
  <input v-else-if="col.type === 'text' || col.type === 'email' || col.type === 'tel' || col.type === 'password'"
        class="form-input" :type="col.type === 'password' ? 'password' : (col.type === 'email' ? 'email' : (col.type === 'tel' ? 'tel' : 'text'))"
        v-model="form[col.key]" :placeholder="col.placeholder"
        :readonly="col.readonly"
        :style="(col.mono ? 'font-family:monospace;' : '') + (col.width ? ('width:' + col.width + ';') : '') + (col.readonly ? 'background:#f5f5f5;' : '')"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })" />
  <!-- number -->
  <input v-else-if="col.type === 'number'" class="form-input" type="number"
        v-model.number="form[col.key]" :placeholder="col.placeholder"
        :readonly="col.readonly" :min="col.min" :max="col.max"
        :style="col.readonly ? 'background:#f5f5f5;' : ''"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })" />
  <!-- date -->
  <input v-else-if="col.type === 'date'" class="form-input" type="date"
        v-model="form[col.key]" :readonly="col.readonly"
        :class="errors[col.key] ? 'is-invalid' : ''" @change="handleSelectAction('field-change', { col, event: $event })" />
  <!-- textarea -->
  <textarea v-else-if="col.type === 'textarea'" class="form-input"
        v-model="form[col.key]" :placeholder="col.placeholder"
        :readonly="col.readonly" :rows="col.rows || 5"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })"></textarea>
    <!-- select -->
    <select v-else-if="col.type === 'select'" class="form-input"
        v-model="form[col.key]" :disabled="col.readonly"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @change="handleSelectAction('field-change', { col, event: $event })">
      <option v-if="col.nullable !== false" value="">{{ col.nullLabel || '\uC120\uD0DD\uD574\uC8FC\uC138\uC694' }}</option>
      <option v-for="o in normOpts(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <!-- slot \uD0C8\uCD9C\uAD6C -->
    <slot v-else-if="col.type === 'slot'" :name="col.name || col.key" :form="form" :col="col">
    </slot>
    <!-- \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 (\uD78C\uD2B8\uB294 \uB77C\uBCA8 \uC6B0\uCE21\uC5D0 \uD45C\uC2DC) \u2014 slot \uC740 \uC790\uCCB4 \uC2AC\uB86F \uB0B4\uBD80\uC5D0\uC11C \uC9C1\uC811 \uB80C\uB354(\uC911\uBCF5 \uBC29\uC9C0) -->
    <div v-if="col.type !== 'slot' && errors[col.key]" class="form-error">
      {{ errors[col.key] }}
    </div>
  </div>
</div>
<!-- \u25BC form-actions \uC601\uC5ED -->
<div v-if="showActions" style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px;">
  <slot name="actions-before">
  </slot>
  <button class="btn-blue" @click="handleBtnAction('form-submit')" style="padding:13px 24px;">
    {{ submitLabel }}
  </button>
  <slot name="actions-after">
  </slot>
</div>
</div>
`};
