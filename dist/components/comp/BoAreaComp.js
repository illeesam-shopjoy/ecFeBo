window.BoContainer={name:"BoContainer",props:{title:{type:String,default:""},titleId:{type:[String,Number],default:""},titleHint:{type:String,default:""},countText:{type:String,default:""},bare:{type:Boolean,default:!1},bodyStyle:{type:String,default:""},cardStyle:{type:String,default:""}},template:`
<div :class="bare ? '' : 'card'" :style="cardStyle">
  <slot name="top"></slot>
  <div v-if="title || titleId || titleHint || $slots['toolbar-actions'] || $slots.title" class="toolbar">
    <span class="list-title">
      <slot name="title">{{ title }}</slot>
      <span v-if="titleId" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">#{{ titleId }}</span>
      <span v-if="titleHint" style="font-size:12px;color:#bbb;margin-left:8px;font-weight:400;">{{ titleHint }}</span>
    </span>
    <div v-if="$slots['toolbar-actions']" style="display:flex;gap:6px;align-items:center;">
      <slot name="toolbar-actions"></slot>
    </div>
  </div>
  <div :style="bodyStyle">
    <slot></slot>
  </div>
</div>`},window.BoPage={name:"BoPage",props:{title:{type:String,default:""},descSummary:{type:String,default:""},descDetail:{type:String,default:""},showPdf:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0},showLink:{type:Boolean,default:!0},shareQuery:{type:Object,default:null}},setup(e){const l=Vue.ref(!1),i=()=>{const k=new URLSearchParams(window.location.search);e.shareQuery&&Object.keys(e.shareQuery).forEach(S=>{const T=e.shareQuery[S];T!=null&&T!==""?k.set(S,T):k.delete(S)});const P=k.toString();return`${window.location.origin}${window.location.pathname}${P?"?"+P:""}`},u=Vue.ref(null),x=Vue.ref(!1);return{descOpen:l,pdfAreaRef:u,pdfExporting:x,handleExportPdf:async()=>{var k;x.value=!0;try{const P=coUtil.cofBuildExportFilename((e.title||"\uD654\uBA74")+".pdf");await window.boUtil.bofExportPdf(u.value,P,(k=window.boApp)==null?void 0:k.showToast)}finally{x.value=!1}},handleShareKakao:()=>{var k,P;try{window.coExtSdk.shareKakao({title:(e.title||"ShopJoy \uAD00\uB9AC\uC790")+" - ShopJoy BO",description:e.descSummary||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:i()})}catch(S){(P=(k=window.boApp)==null?void 0:k.showToast)==null||P.call(k,S.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},handleCopyLink:async()=>{var k,P,S,T;try{await navigator.clipboard.writeText(i()),(P=(k=window.boApp)==null?void 0:k.showToast)==null||P.call(k,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(F){(T=(S=window.boApp)==null?void 0:S.showToast)==null||T.call(S,F.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}}}},template:`
<div ref="pdfAreaRef">
  <div class="page-title" :style="($slots.actions || showPdf || showShare || showLink) ? 'display:flex;align-items:center;justify-content:space-between;' : ''">
    <span><slot name="title">{{ title }}</slot></span>
    <span v-if="$slots.actions || showPdf || showShare || showLink" style="display:flex;gap:6px;align-items:center;font-size:13px;font-weight:400;">
      <slot name="actions"></slot>
      <button v-if="showLink" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">
        \u{1F517}
      </button>
      <button v-if="showShare" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">
        \u{1F4AC}
      </button>
      <button v-if="showPdf" class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting" @click="handleExportPdf">
        <span v-if="pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
      </button>
    </span>
  </div>
  <div v-if="descSummary" class="page-desc-bar">
    <span class="page-desc-summary">{{ descSummary }}</span>
    <button v-if="descDetail" class="page-desc-toggle" @click="descOpen = !descOpen">
      {{ descOpen ? '\u25B2 \uC811\uAE30' : '\u25BC \uB354\uBCF4\uAE30' }}
    </button>
    <div v-if="descOpen ? (descDetail) : false" class="page-desc-detail">{{ descDetail }}</div>
  </div>
  <!-- \uD654\uBA74 \uBCF8\uBB38 (\uAC80\uC0C9/\uBAA9\uB85D/\uC0C1\uC138 \uB4F1 \uBAA8\uB4E0 \uC601\uC5ED) -->
  <slot></slot>
</div>`},window.BoSearchArea={name:"BoSearchArea",props:{columns:{type:Array,default:null},param:{type:Object,default:null},showActions:{type:Boolean,default:!0},searchLabel:{type:String,default:"\uC870\uD68C"},resetLabel:{type:String,default:"\uCD08\uAE30\uD654"},loading:{type:Boolean,default:!1},barStyle:{type:String,default:""},maxRows:{type:Number,default:0}},emits:["search","reset"],setup(e,{emit:l}){const i=window._boAreaCompUtil,u=Vue.ref(null),x=()=>{u.value=null};Vue.onMounted(()=>document.addEventListener("click",x)),Vue.onUnmounted(()=>document.removeEventListener("click",x));const p=(b,C={})=>{if(b==="search-emit"){if(!e.loading)return l("search")}else{if(b==="search-reset")return l("reset");if(b==="range-popover-toggle"){u.value=u.value===C.col.key?null:C.col.key;return}else console.warn("[handleBtnAction] unknown cmd:",b)}},g=(b,C={})=>{if(b==="field-select-change")return C.col&&C.col.onChange?C.col.onChange(C.event):null;if(b==="field-range-pick")return k(C.col)[C.col.key]=C.value,u.value=null,C.col.onRangeChange?C.col.onRangeChange():null;if(b==="field-pick-open")return C.col.onOpen(C.target);if(b==="field-pick-clear")return C.col.onClear(C.target);console.warn("[handleSelectAction] unknown cmd:",b)},y=b=>i.normOptions(b),k=b=>b.paramObj||e.param,P=b=>typeof b.disabled=="function"?!!b.disabled():!!b.disabled,S=Vue.ref(!1),T=Vue.ref(1/0),F={},R=(b,C)=>{C?F[b]=C:delete F[b]},r=b=>S.value||b<T.value,d=Vue.ref(null),f=async()=>{if(!e.maxRows||e.maxRows<=0){T.value=1/0;return}const b=S.value,C=e.columns||[],M=V=>{const O=[];for(let c=0;c<C.length;c++){const h=F[c];h&&(V&&!r(c)||O.push({ci:c,top:h.offsetTop}))}const I=[];for(const c of O)(!I.length||c.top-I[I.length-1]>4)&&I.push(c.top);return{tops:O,rowTops:I}};S.value=!0,await Vue.nextTick();let{tops:E,rowTops:D}=M(!1),U=1/0;if(D.length>e.maxRows){const V=D[e.maxRows],O=E.find(I=>I.top>=V-2);O&&(U=O.ci)}T.value=U,S.value=!1,await Vue.nextTick();for(let V=0;V<C.length+1&&({tops:E,rowTops:D}=M(!0),!!E.length);V++){const O=d.value?d.value.offsetTop:0;let I=D.findIndex(c=>Math.abs(O-c)<=4);if(I<0&&(I=D.length),I<=e.maxRows-1)break;T.value=E[E.length-1].ci,await Vue.nextTick()}S.value=b},w=Vue.ref(null);let A=null;return Vue.onMounted(()=>{Vue.nextTick(f),window.ResizeObserver&&w.value?(A=new ResizeObserver(()=>f()),A.observe(w.value)):window.addEventListener("resize",f)}),Vue.onUnmounted(()=>{A?A.disconnect():window.removeEventListener("resize",f)}),Vue.watch(()=>e.columns,()=>Vue.nextTick(f)),Vue.watchEffect(()=>{for(const b of e.columns||[]){if(b.type!=="dateRange"||!b.typeKey||!b.typeOptions)continue;const C=k(b);if(C[b.typeKey])continue;const M=y(b.typeOptions);M.length&&(C[b.typeKey]=M[0].value)}}),{U:i,normOpts:y,po:k,cfDisabled:P,handleBtnAction:p,handleSelectAction:g,rangePopoverKey:u,expanded:S,cfFieldVisible:r,setFieldRef:R,searchBarEl:w,searchActionsEl:d}},template:`
<div class="search-bar" :style="barStyle" ref="searchBarEl" @keyup.enter="handleBtnAction('search-emit')">
  <!-- \u25BC search \uC601\uC5ED -->
  <template v-if="columns ? (param) : false">
  <!-- \uB77C\uBCA8 \uD14D\uC2A4\uD2B8(type:'label') / \uC2AC\uB86F(type:'slot') \uC740 \uBB36\uC74C(search-field) \uBC16\uC5D0 \uB2E8\uB3C5 \uBC30\uCE58 -->
  <template v-for="(col, ci) in columns" :key="col.key || ('_' + ci)">
  <label v-if="col.type==='label'" class="search-label" v-show="cfFieldVisible(ci)" :ref="el => setFieldRef(ci, el)">
    {{ col.label }}
  </label>
  <slot v-else-if="col.type==='slot'" :name="col.name || 'extra'">
  </slot>
  <!-- \uADF8 \uC678 \uCEE8\uD2B8\uB864\uC740 \uB77C\uBCA8+\uCEE8\uD2B8\uB864\uC744 \uD55C \uBB36\uC74C(search-field)\uC73C\uB85C \uAC10\uC2F8 \uD568\uAED8 \uC904\uBC14\uAFC8\uB418\uAC8C \uD568 -->
  <div v-else class="search-field" v-show="cfFieldVisible(ci)" :ref="el => setFieldRef(ci, el)">
    <!-- \uD544\uB4DC \uC88C\uCE21 \uB77C\uBCA8 (col.label \uC9C0\uC815 \uC2DC)
         \u26A0 dateRange \uC5D0 typeKey(\uAE30\uAC04\uC720\uD615 select)\uAC00 \uC788\uC73C\uBA74 \uB77C\uBCA8\uC744 \uB80C\uB354\uD558\uC9C0 \uC54A\uB294\uB2E4.
            select \uC790\uCCB4\uAC00 '\uB4F1\uB85D\uC77C\uC790/\uC218\uC815\uC77C\uC790' \uCC98\uB7FC \uD544\uB4DC\uBA85\uC744 \uC774\uBBF8 \uBCF4\uC5EC\uC8FC\uBBC0\uB85C
            \uC88C\uCE21 \uB77C\uBCA8("\uB4F1\uB85D\uC77C")\uACFC \uACB9\uCCD0 \uAC19\uC740 \uB9D0\uC774 \uB450 \uBC88 \uB098\uC628\uB2E4.
            typeKey \uAC00 \uC5C6\uB294 dateRange(\uC608: CmNoticeMng)\uB294 \uB77C\uBCA8\uC774 \uC720\uC77C\uD55C \uC124\uBA85\uC774\uBBC0\uB85C \uADF8\uB300\uB85C \uC720\uC9C0. -->
    <label v-if="col.label &amp;&amp; !(col.type==='dateRange' &amp;&amp; col.typeKey)" class="search-label">
    {{ col.label }}
  </label>
  <!-- \uD68C\uC6D0/\uD56D\uBAA9 picker \uBC15\uC2A4 (\uC774\uB984+ID \uB458 \uB2E4 \uC9C1\uC811 \uC785\uB825 + \uD31D\uC5C5 + \uD074\uB9AC\uC5B4) \u2014 col.type==='pick'
       \uC774\uB984:ID = \uAE30\uBCF8 70px:20px. \uD55C\uCABD\uC5D0 \uC9C1\uC811 \uC785\uB825\uD558\uBA74 \uBC18\uB300\uCABD\uC740 \uCD08\uAE30\uD654(\uB458 \uB2E4 \uCC44\uC6CC\uC9C0\uB294 \uAC74 \uD31D\uC5C5 \uC120\uD0DD \uC2DC\uB9CC) -->
  <template v-if="col.type==='pick'">
    <input :value="po(col)[col.nameKey || col.key] || ''"
          @input="e => { po(col)[col.nameKey || col.key] = e.target.value; if (col.nameKey && col.nameKey !== col.key) po(col)[col.key] = ''; }"
          :placeholder="col.placeholder || '\uC774\uB984\uC785\uB825'"
          class="form-control" :style="'width:' + (col.width || '70px') + ';'" />
    <input v-if="col.nameKey && col.nameKey !== col.key"
          :value="po(col)[col.key] || ''"
          @input="e => { po(col)[col.key] = e.target.value; po(col)[col.nameKey] = ''; }"
          :placeholder="col.idPlaceholder || 'ID\uC785\uB825'"
          class="form-control" :style="'width:' + (col.idWidth || '20px') + ';'" />
    <span style="display:inline-flex;align-items:center;">
      <button type="button" class="btn btn-secondary btn-sm" style="padding:0;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" @click="handleSelectAction('field-pick-open', { col, target: po(col) })" :title="col.openLabel || '\uAC80\uC0C9'">\u{1F50D}</button>
      <button v-if="po(col)[col.key] || po(col)[col.nameKey]" type="button" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;" @click="handleSelectAction('field-pick-clear', { col, target: po(col) })" title="\uCD08\uAE30\uD654">x</button>
    </span>
  </template>
  <!-- \uB2E4\uC911\uC120\uD0DD (\uAC80\uC0C9\uB300\uC0C1) -->
  <bo-multi-check-select v-else-if="col.type==='multiCheck'"
        v-model="po(col)[col.key]" :options="typeof col.options==='function'?col.options():(col.options||[])"
        :placeholder="col.placeholder || '\uC804\uCCB4'" :all-label="col.allLabel || '\uC804\uCCB4 \uC120\uD0DD'"
        :min-width="col.minWidth || '160px'" />
  <!-- \uD14D\uC2A4\uD2B8 \uC785\uB825 -->
  <input v-else-if="col.type==='text'" v-model="po(col)[col.key]"
        :placeholder="col.placeholder" :style="col.width ? ('width:' + col.width) : ''"
        @keyup.enter="handleBtnAction('search-emit')" />
  <!-- select (col.onChange: fn \uC9C0\uC6D0) -->
  <select v-else-if="col.type==='select'" v-model="po(col)[col.key]"
        :disabled="cfDisabled(col)"
        :style="cfDisabled(col) ? 'background:#f1f3f5;color:#495057;cursor:not-allowed;' : ''"
        :title="cfDisabled(col) ? '\uC774 \uD654\uBA74\uC740 \uD574\uB2F9 \uAC12\uC73C\uB85C \uACE0\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4' : ''"
        @change="handleSelectAction('field-select-change', { col, event: $event })">
    <option v-if="col.nullable !== false" value="">{{ col.nullLabel || '\uC804\uCCB4' }}</option>
    <option v-for="o in normOpts(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
  </select>
  <!-- \uB2E8\uC77C \uB0A0\uC9DC -->
  <input v-else-if="col.type==='date'" type="date" v-model="po(col)[col.key]" class="date-range-input" />
  <!-- \uB0A0\uC9DC \uBC94\uC704 + (\uC635\uC158) \uAE30\uAC04\uC720\uD615 + (\uC635\uC158) \uC635\uC158\uC120\uD0DD select -->
  <template v-else-if="col.type==='dateRange'">
    <select v-if="col.typeKey" v-model="po(col)[col.typeKey]">
      <option v-for="c in normOpts(col.typeOptions)" :key="c.value" :value="c.value">{{ c.label }}</option>
    </select>
    <!-- rangeFirst: true \u2192 \uC635\uC158 \uC544\uC774\uCF58(popover)\uC744 date \uC55E\uC5D0 \uD45C\uC2DC -->
    <span v-if="col.rangeFirst ? col.rangeOptions : false" style="position:relative;display:inline-flex;align-items:center;">
      <button type="button" class="btn btn-secondary btn-sm range-popover-trigger" style="padding:4px 6px;line-height:1;"
        :title="col.rangeFirstLabel || '\uAE30\uAC04 \uC635\uC158'"
        @click.stop="handleBtnAction('range-popover-toggle', { col })">\u{1F4C5}</button>
      <div v-if="rangePopoverKey === col.key" class="range-popover-menu"
        style="position:absolute;top:100%;left:0;z-index:50;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 14px rgba(0,0,0,.14);padding:4px;margin-top:4px;min-width:76px;">
        <div v-for="o in normOpts(col.rangeOptions)" :key="o.value" class="range-popover-item"
          style="padding:6px 10px;font-size:12px;color:#333;cursor:pointer;border-radius:4px;white-space:nowrap;"
          @click.stop="handleSelectAction('field-range-pick', { col, value: o.value })">{{ o.label }}</div>
      </div>
    </span>
  <input type="date" v-model="po(col)[col.startKey || 'dateRangeStart']"
          :class="col.dateClass || 'date-range-input'" :style="col.dateWidth ? ('width:' + col.dateWidth) : ''" />
  <span :class="col.sepClass || 'date-range-sep'" :style="col.sepStyle || ''">
    ~
  </span>
  <input type="date" v-model="po(col)[col.endKey || 'dateRangeEnd']"
          :class="col.dateClass || 'date-range-input'" :style="col.dateWidth ? ('width:' + col.dateWidth) : ''" />
  <!-- rangeFirst \uC544\uB2C8\uBA74(\uAE30\uBCF8) \uC635\uC158 \uC544\uC774\uCF58(popover)\uC744 date \uB4A4\uC5D0 \uD45C\uC2DC -->
  <span v-if="!col.rangeFirst ? col.rangeOptions : false" style="position:relative;display:inline-flex;align-items:center;">
    <button type="button" class="btn btn-secondary btn-sm range-popover-trigger" style="padding:4px 6px;line-height:1;"
      :title="col.rangeFirstLabel || '\uAE30\uAC04 \uC635\uC158'"
      @click.stop="handleBtnAction('range-popover-toggle', { col })">\u{1F4C5}</button>
    <div v-if="rangePopoverKey === col.key" class="range-popover-menu"
      style="position:absolute;top:100%;right:0;z-index:50;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 14px rgba(0,0,0,.14);padding:4px;margin-top:4px;min-width:76px;">
      <div v-for="o in normOpts(col.rangeOptions)" :key="o.value" class="range-popover-item"
        style="padding:6px 10px;font-size:12px;color:#333;cursor:pointer;border-radius:4px;white-space:nowrap;"
        @click.stop="handleSelectAction('field-range-pick', { col, value: o.value })">{{ o.label }}</div>
    </div>
  </span>
</template>
  </div>
</template>
</template>
<slot>
</slot>
<!-- search-actions \uB294 \uD56D\uC0C1 \uB178\uCD9C(v-show \uB85C \uC228\uAE30\uC9C0 \uC54A\uC74C) \u2014 \uC811\uD798 \uC0C1\uD0DC\uC5D0\uC11C \uB0A8\uC740 \uD544\uB4DC\uB4E4\uACFC \uAC19\uC740
     wrap \uD750\uB984\uC744 \uACF5\uC720\uD55C\uB2E4. measureRows \uAC00 \uC774 \uBC84\uD2BC \uC904\uC774 maxRows \uB97C \uB118\uC73C\uBA74 \uD544\uB4DC\uB97C \uD558\uB098\uC529 \uB354 \uC228\uACA8
     maxRows \uC904 \uC548\uC73C\uB85C \uB04C\uC5B4\uC62C\uB9B0\uB2E4(\uADF8\uB798\uB3C4 \uC548 \uB9DE\uC73C\uBA74 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD750\uB974\uAC8C \uD3EC\uAE30).
     \uC21C\uC11C: \uCD08\uAE30\uD654 \u2192 \uC870\uD68C \u2192 \uD3BC\uCE58\uAE30/\uC811\uAE30(\uC544\uC774\uCF58). maxRows \uBBF8\uC0AC\uC6A9 \uD654\uBA74\uC740 \uD3BC\uCE58\uAE30 \uBC84\uD2BC \uC790\uCCB4\uAC00 \uC5C6\uB2E4 -->
<div v-if="showActions" class="search-actions" ref="searchActionsEl">
  <slot name="actions-before">
  </slot>
  <button type="button" class="btn btn_reset" style="padding:0;width:26px;height:26px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" :title="resetLabel" @click="handleBtnAction('search-reset')">\u{1F504}</button>
  <button class="btn btn_search" :disabled="loading" @click="handleBtnAction('search-emit')">
    {{ searchLabel }}
  </button>
  <button v-if="maxRows > 0" type="button" class="btn btn-secondary btn-sm" style="padding:0;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;"
    :title="expanded ? '\uC811\uAE30' : '\uD3BC\uCE58\uAE30'" @click="expanded = !expanded">
    <span :style="'display:inline-block;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;' + (expanded ? 'border-bottom:5px solid currentColor;' : 'border-top:5px solid currentColor;')"></span>
  </button>
  <slot name="actions-after">
  </slot>
</div>
</div>
`},window._boAreaCompUtil={normOptions(e){return((typeof e=="function"?e():e)||[]).filter(i=>i!=null).map(i=>typeof i=="string"||typeof i=="number"?{value:i,label:String(i)}:{value:i.value!=null?i.value:i.codeValue,label:i.label!=null?i.label:i.codeLabel})},cellText(e,l){const i=l?l[e.key]:void 0;return typeof e.fmt=="function"?e.fmt(i,l):i==null?"":i},badgeClass(e,l){return typeof e.badge=="function"?e.badge(l):window.coUtil&&typeof coUtil.fnCodeBadge=="function"&&e.codeGrp?coUtil.fnCodeBadge(e.codeGrp,l[e.key]):"badge-gray"},autoAlign(e){if(e.align)return e.align;if(e.edit||e.type==="slot")return"";const l=String(e.key||"").toLowerCase(),i=String(e.label||"");return/viewcnt|hitcnt|viewcount|readcnt/.test(l)||/조회수|방문수|클릭수/.test(i)?"center":["amt","price","balance","fee","qty","cnt","count","rate","cost","stock","point","sum","total","value"].some(p=>new RegExp("(^|_)"+p+"(_|$)|"+p+"$").test(l))||/금액|가격|잔액|배송비|할인값|할인가|수량|개수|건수|단가|합계|총액|포인트|적립금|충전금|재고|\(원\)|원\)$|율$/.test(i)?"right":/(^|_)(cd|code|status|type|yn|flag|state|target)$/.test(l)||/cd$|status$|yn$|type$|typecd|statuscd|targetcd|target$/.test(l)||/date$|regdate|moddate|period/.test(l)||/^상태$|^유형$|^구분$|여부|^코드$|^등급$|^타입$|^단계$|일$|일시$|기간|등록일|수정일|작성일|시작일|종료일|^대상$|적용대상|대상$|^방식$|^방법$|^분류$|^레벨$|유형$/.test(i)?"center":(/(nm|name|title|label)$/.test(l)||/명$|제목|이름|타이틀/.test(i),"")},thStyle(e){if(e.style)return e.style;let l="text-align:center;";return e.width&&(l+="width:"+e.width+";"),l},tdStyle(e,l){let i="font-size:12px;";const u=this.autoAlign(e);if(u&&(i+="text-align:"+u+";"),e.mono&&(i+="font-family:monospace;"),e.link&&(i+="cursor:pointer;"),e.pin==="left"&&e.width&&(i+="width:"+e.width+";max-width:"+e.width+";min-width:"+e.width+";"),!e.noEllipsis&&!e.edit&&(i+="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),e.cellStyle!=null){const x=typeof e.cellStyle=="function"?e.cellStyle(l?l[e.key]:void 0,l):e.cellStyle;x&&(i+=(i.endsWith(";")?"":";")+x)}return i},cellClass(e,l){return e.cellClass==null?"":typeof e.cellClass=="function"?e.cellClass(l?l[e.key]:void 0,l)||"":e.cellClass},cellTitle(e,l){if(e.cellTitle===!1)return null;if(e.cellTitle==null||e.cellTitle===!0){const i=this.cellText(e,l);return i==null||i===""?null:String(i)}if(typeof e.cellTitle=="function"){const i=e.cellTitle(l?l[e.key]:void 0,l);return i==null?null:String(i)}return String(e.cellTitle)},cellInnerStyle(e,l){if(e.cellInnerStyle==null)return null;const i=typeof e.cellInnerStyle=="function"?e.cellInnerStyle(l?l[e.key]:void 0,l):e.cellInnerStyle;return i==null?null:String(i)},cellInnerClass(e,l){if(e.cellInnerClass==null)return null;const i=typeof e.cellInnerClass=="function"?e.cellInnerClass(l?l[e.key]:void 0,l):e.cellInnerClass;return i==null?null:String(i)}},window.BoGrid={name:"BoGrid",props:{columns:{type:Array,required:!0},rows:{type:Array,default:()=>[]},pager:{type:Object,default:null},sortState:{type:Object,default:null},listTitle:{type:String,default:"\uBAA9\uB85D"},rowKey:{type:String,default:null},rowStyle:{type:Function,default:null},rowClass:{type:Function,default:null},countText:{type:String,default:null},loadedCount:{type:Number,default:null},scrollEndOffset:{type:Number,default:500},fitBottom:{type:[Boolean,Number],default:!1},isExpanded:{type:Function,default:null},draggable:{type:Boolean,default:!1},showSave:{type:Boolean,default:!1},saveLabel:{type:String,default:"\uC800\uC7A5"},rowActions:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},tableMaxHeight:{type:String,default:null},fixedHeight:{type:Boolean,default:!1},bare:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},checkedKey:{type:String,default:null},isChecked:{type:Function,default:null},allChecked:{type:Boolean,default:!1},rowClickable:{type:Boolean,default:!1},gridId:{type:String,default:""},selectedKey:{type:[String,Number],default:null},showRowNo:{type:Boolean,default:!0},layout:{type:String,default:"table"},cardMinWidth:{type:String,default:"220px"},cardClass:{type:String,default:""},rowActionsCols:{type:Array,default:null}},emits:["scroll-end","sort","row-click","row-dblclick","cell-click","save","row-remove","reorder","cell-change","toggle-check","toggle-check-all","ref-click"],setup(e,{emit:l,slots:i}){const u=window._boAreaCompUtil,x=Vue.computed(()=>e.pager?e.pager.pageTotalCount||0:e.rows.length),p=Vue.computed(()=>!!i.tfoot&&e.rows.length>0),g=Vue.ref(null),y=Vue.computed(()=>{const n=e.columns.find(a=>a.type==="actions");return!n||typeof n.visible=="function"&&!n.visible()?null:n}),k=Vue.computed(()=>e.columns.length-(y.value?1:0)+(e.showRowNo?1:0)+(e.selectable?1:0)+(e.draggable?1:0)+(e.rowActions||y.value?1:0)),P=(n,a={})=>{if(n==="toolbar-save")return l("save");if(n==="grid-toggle-check-all")return l("toggle-check-all");console.warn("[handleBtnAction] unknown cmd:",n)},S=(n,a={})=>{var _,W,j,q,le;if(n==="sort-toggle"){if(typeof a.col.headClick=="function")return a.col.headClick(a.col);if(a.col.sortKey)return l("sort",a.col.sortKey)}else{if(n==="grid-row-click")return l("row-click",a.row);if(n==="grid-row-dblclick")return l("row-dblclick",a.row);if(n==="grid-cell-click")return l("cell-click",{cmd:e.gridId,row:a.row,col:a.col,colKey:(_=a.col)==null?void 0:_.key,colIndex:a.ci,rowIndex:a.idx,ctrlKey:!!((W=a.event)!=null&&W.ctrlKey),metaKey:!!((j=a.event)!=null&&j.metaKey),button:(q=a.event)==null?void 0:q.button});if(n==="grid-row-ref-click"){const te=a.col.refKey?a.row[a.col.refKey]:a.row[a.col.key];return l("ref-click",{row:a.row,col:a.col,type:a.col.refLink,id:te})}else{if(n==="grid-row-remove")return l("row-remove",a.row);if(n==="grid-row-toggle-check"){const te=a.row[e.checkedKey||e.rowKey];return l("toggle-check",te)}else{if(n==="grid-row-cell-change")return l("cell-change",{cmd:e.gridId,row:a.row,col:a.col,colKey:(le=a.col)==null?void 0:le.key});if(n==="grid-row-drag-start")e.draggable&&(g.value=a.idx);else if(n==="grid-row-drag-over"){if(!e.draggable||g.value===null||g.value===a.idx)return;a.event.preventDefault();const te=e.rows.splice(g.value,1)[0];e.rows.splice(a.idx,0,te),g.value=a.idx}else n==="grid-row-drag-end"?g.value!==null&&(g.value=null,l("reorder")):console.warn("[handleSelectAction] unknown cmd:",n)}}}},T=n=>e.pager?(e.pager.pageNo-1)*e.pager.pageSize+n+1:n+1,F=n=>{const a=e.sortState;return!n.sortKey||!a?"":a.sortKey!==n.sortKey?"\u21C5":a.sortDir==="asc"?"\u2191":"\u2193"},R=n=>e.sortState&&e.sortState.sortKey===n.sortKey,r=(n,a)=>typeof e.rowStyle=="function"?e.rowStyle(n,a):"",d=(n,a)=>{const _=(typeof e.rowClass=="function"?e.rowClass(n,a):n._isNew?"status-I":"")||"",W=e.selectedKey!=null&&e.rowKey&&n[e.rowKey]===e.selectedKey?" bo-row-selected":"";return(_+W).trim()},f=(n,a)=>typeof e.isExpanded=="function"?!!e.isExpanded(n,a):!1,w=Vue.ref(null),A=n=>{e.rowKey&&(w.value=n[e.rowKey])},b=()=>{w.value=null},C=(n,a)=>{if(e.rowKey&&w.value!=null&&n[e.rowKey]===w.value)return"#e8effe";const j=(r(n,a)||"").match(/background:\s*([^;]+)/);return j?j[1].trim():a%2===1?"#f7f8fc":"#fff"},M=n=>n[e.checkedKey||e.rowKey],E=n=>typeof e.isChecked=="function"?!!e.isChecked(M(n)):!1,D=Vue.reactive({});let U=null,V=0,O=0;const I=(n,a)=>{n.preventDefault(),n.stopPropagation(),U=n.target.closest("th"),V=n.clientX,O=U.offsetWidth,document.body.classList.add("col-resizing");const _=j=>{const q=Math.max(40,O+j.clientX-V);D[a.key]=q+"px"},W=()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",W),document.body.classList.remove("col-resizing"),U=null};document.addEventListener("mousemove",_),document.addEventListener("mouseup",W)},c=n=>{const a=u.thStyle(n);return D[n.key]?a.replace(/width:[^;]+;/,"")+"width:"+D[n.key]+";":a},h=Vue.computed(()=>(e.selectable?36:0)+(e.draggable?28:0)),m=Vue.computed(()=>h.value+(e.showRowNo?36:0)),K=Vue.computed(()=>{const n={};let a=m.value;for(const _ of e.columns)_.pin==="left"&&(n[_.key]=a,a+=parseInt(_.width,10)||100);return n}),H=Vue.computed(()=>{let n=null;for(const a of e.columns)a.pin==="left"&&(n=a.key);return n}),B=n=>e.selectedKey!=null&&e.rowKey&&n[e.rowKey]===e.selectedKey,s=(n,a,_,W)=>{let j="position:sticky;left:"+n+"px;z-index:"+a+";";const q=[];return W&&(n===0&&q.push("inset 2px 0 0 #2563eb"),q.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),_&&q.push("2px 0 4px rgba(0,0,0,.08)"),q.length&&(j+="box-shadow:"+q.join(",")+";"),j},t=(n,a,_)=>{let W="position:sticky;right:0;z-index:"+n+";";const j=[];return _&&j.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),a&&j.push("-2px 0 4px rgba(0,0,0,.08)"),j.length&&(W+="box-shadow:"+j.join(",")+";"),W},o=Vue.ref(null),v=()=>{if(!e.fitBottom||!o.value)return;const n=typeof e.fitBottom=="number"?e.fitBottom:64,a=o.value.getBoundingClientRect().top,_=Math.max(160,window.innerHeight-a-n);o.value.style.maxHeight=_+"px",o.value.style.minHeight=_+"px",o.value.style.overflow="auto"};let L=null;Vue.onMounted(()=>{if(e.fitBottom&&(Vue.nextTick(v),window.addEventListener("resize",v),window.ResizeObserver)){L=new ResizeObserver(()=>v());const n=o.value&&o.value.closest(".card")?o.value.closest(".card").parentElement:document.body;try{L.observe(n||document.body)}catch{}}}),Vue.onBeforeUnmount(()=>{if(window.removeEventListener("resize",v),L)try{L.disconnect()}catch{}});let z=-1;const N=n=>{const a=n.target;if(a.scrollHeight-a.scrollTop-a.clientHeight>e.scrollEndOffset){z=-1;return}z!==a.scrollHeight&&(z=a.scrollHeight,l("scroll-end"))},Y=30,G=Vue.computed(()=>e.tableMaxHeight?e.bare?e.tableMaxHeight:"calc("+e.tableMaxHeight+" - "+Y+"px)":e.tableMaxHeight),$=Vue.computed(()=>e.tableMaxHeight?(e.fixedHeight?"height:":"max-height:")+G.value+";overflow:auto;position:relative;":"overflow-x:auto;position:relative;"),Z=Vue.computed(()=>e.countText!=null?e.countText:coUtil.cofCountText(x.value,e.loadedCount)),Q=Vue.computed(()=>e.columns.filter(n=>n.type!=="actions").map(n=>{if(n.link!=null||n.badge||n.edit||n.refLink)return n;const a=(n.key||"").toLowerCase(),_=n.label||"";return/(nm|name|title)$/.test(a)||/명$|제목$|이름$/.test(_)?Object.assign({},n,{link:!0}):n})),X=(n,a,_)=>typeof n=="function"?n(a,_):n,ee=(n,a,_)=>typeof n.visible=="function"?!!n.visible(a,_):!0,J=(n,a,_)=>typeof n.disabled=="function"?!!n.disabled(a,_):!1,oe=n=>coUtil.cofColLabel(n),ne=n=>coUtil.cofColNm(n),ie=Vue.computed(()=>e.rowActions||!!y.value),ce=Vue.computed(()=>e.rowActionsCols||y.value&&y.value.actions||null);return{fnRowActionVal:X,fnRowActionVisible:ee,fnRowActionDisabled:J,fnColLabel:oe,fnColNm:ne,U:u,cfTotal:x,cfCountText:Z,cfScrollMaxHeight:G,cfBodyStyle:$,bodyRef:o,onScroll:N,cfShowTfoot:p,rowNo:T,sortIcon:F,sortActive:R,fnRowStyle:r,fnRowClass:d,fnIsExpanded:f,cfColspan:k,fnRowChecked:E,handleBtnAction:P,handleSelectAction:S,colWidths:D,onResizeStart:I,thResizeStyle:c,cfPinNoLeft:h,cfPinFirstLeft:m,cfPinLeftOffset:K,cfPinLeftLastKey:H,pinLeftStyle:s,pinRightStyle:t,fnPinBg:C,fnRowSelected:B,onRowMouseEnter:A,onRowMouseLeave:b,columns:Q,rowActions:ie,rowActionsCols:ce}},template:`
<div :class="bare ? '' : 'card'">
  <div v-if="!bare" class="toolbar">
    <span class="list-title">
      {{ listTitle }}
      <span v-if="loading" style="margin-left:8px;font-size:12px;color:#e8587a;font-weight:400;">\u23F3 \uC870\uD68C \uC911\u2026</span>
    </span>
    <div style="margin-left:auto;display:flex;gap:6px;">
      <slot name="toolbar-actions">
      </slot>
      <button v-if="showSave" class="btn btn-primary btn-sm" @click="handleBtnAction('toolbar-save')">
        {{ saveLabel }}
      </button>
    </div>
  </div>
  <!-- \uADF8\uB9AC\uB4DC \uBCF8\uBB38.
       tableMaxHeight \uBA85\uC2DC \uC2DC: \uD574\uB2F9 \uB192\uC774\uB85C \uB0B4\uBD80 \uC2A4\uD06C\uB864 (thead sticky = \uC774 div \uAE30\uC900).
       tableMaxHeight \uBBF8\uC9C0\uC815: overflow \uC5C6\uC74C \u2014 bo-main \uC2A4\uD06C\uB864 \uCEE8\uD14C\uC774\uB108 \uAE30\uC900\uC73C\uB85C thead sticky top:0 \uB3D9\uC791.
       bare: \uAC00\uB85C \uC2A4\uD06C\uB864\uB9CC. -->
  <div v-if="layout==='table'" ref="bodyRef" :style="cfBodyStyle" @scroll="onScroll">
    <!-- \uC870\uD68C \uC911 \uC624\uBC84\uB808\uC774 (\uAE30\uC874 \uD589 \uC704\uC5D0 \uD45C\uC2DC \u2014 \uC7AC\uC870\uD68C/\uD398\uC774\uC9C0 \uC774\uB3D9 \uD53C\uB4DC\uBC31). \uD589\uC774 \uC5C6\uC744 \uB550 \uBE48\uD589 \uBB38\uAD6C\uB85C \uC548\uB0B4 -->
    <div v-if="loading ? (rows.length) : false" style="position:absolute;inset:0;z-index:5;background:rgba(255,255,255,.55);display:flex;align-items:flex-start;justify-content:center;padding-top:40px;pointer-events:none;">
      <span style="font-size:13px;color:#e8587a;background:#fff;border:1px solid #f3c6d4;border-radius:14px;padding:4px 14px;box-shadow:0 2px 8px rgba(0,0,0,.08);">\u23F3 \uC870\uD68C \uC911\u2026</span>
    </div>
    <table class="bo-table" :class="{ 'crud-grid': draggable || showSave, 'bo-table-narrow': narrow }">
      <thead>
        <tr>
          <th v-if="selectable" :style="'width:36px;text-align:center;background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinLeftStyle(0, 6)">
            <input type="checkbox" :checked="allChecked" @change="handleBtnAction('grid-toggle-check-all')" />
          </th>
          <th v-if="draggable" :style="'width:28px;background:linear-gradient(180deg,#dbebfa,#b7d3f2);border-bottom:2px solid #4a8ac2;' + pinLeftStyle(selectable ? 36 : 0, 6)">
          </th>
          <th v-if="showRowNo" :style="'width:36px;text-align:center;background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinLeftStyle(cfPinNoLeft, 6)">
            \uBC88\uD638
          </th>
          <slot name="head">
            <!-- \u26A0 \uC544\uB798 :style \uC5D0 position:relative \uB97C \uB123\uC9C0 \uB9D0 \uAC83 \u2014 CSS \uC758 thead th{position:sticky} \uB97C
                 \uB36E\uC5B4 \uADF8\uB9AC\uB4DC \uB0B4\uBD80 \uC2A4\uD06C\uB864 \uC2DC \uD5E4\uB354\uAC00 \uC0AC\uB77C\uC9C4\uB2E4.
                 sticky \uC790\uCCB4\uAC00 \uC808\uB300\uBC30\uCE58 \uCEE8\uD14C\uC774\uB2DD\uBE14\uB85D\uC774\uB77C \uB9AC\uC0AC\uC774\uC988 \uD578\uB4E4 \uC704\uCE58\uB294 \uADF8\uB300\uB85C \uC7A1\uD78C\uB2E4.
                 col.pin==='left' \uC778 \uCEEC\uB7FC(\uC8FC\uB85C \uC9E7\uC740 id)\uB9CC \uBC88\uD638\uC640 \uD568\uAED8 \uC88C\uCE21 \uACE0\uC815 \u2014 \uD3ED \uC608\uCE21 \uBD88\uAC00\uD55C
                 \uCEEC\uB7FC(\uC774\uB984+ID \uD569\uC131 \uD14D\uC2A4\uD2B8 \uB4F1)\uC744 \uC784\uC758\uB85C \uACE0\uC815\uD558\uBA74 auto \uD14C\uC774\uBE14 \uB808\uC774\uC544\uC6C3\uC5D0\uC11C sticky \uD3ED
                 \uACC4\uC0B0\uC774 \uC5B4\uAE0B\uB098 \uD14D\uC2A4\uD2B8\uAC00 \uACB9\uCCD0 \uBCF4\uC774\uB294 \uBB38\uC81C\uAC00 \uC788\uC5B4 \uC790\uB3D9\uACE0\uC815 \uB300\uC2E0 \uBA85\uC2DC\uC801 opt-in\uB9CC \uD5C8\uC6A9. -->
            <th v-for="(col, ci) in columns" :key="col.key" :class="col.cls"
            :style="thResizeStyle(col) + ((col.sortKey || col.headClick) ? 'cursor:pointer;user-select:none;white-space:nowrap;' : '') + 'overflow:visible;' + (col.pin === 'left' ? pinLeftStyle(cfPinLeftOffset[col.key], 6, col.key === cfPinLeftLastKey) + 'background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' : '')"
            @click="handleSelectAction('sort-toggle', { col })">
              {{ col.noHead ? '' : col.label }}
              <span v-if="col.noHead ? false : !!fnColNm(col)" style="display:block;font-size:9px;font-weight:400;color:#9aa4b2;line-height:1.2;">{{ fnColNm(col) }}</span>
              <span v-if="col.sortKey"
              :style="sortActive(col) ? 'color:#e8587a;font-weight:bold;' : 'color:#bbb;'">
                {{ sortIcon(col) }}
              </span>
              <div style="position:absolute;right:0;top:0;bottom:0;width:5px;cursor:col-resize;z-index:10;"
                @mousedown.stop="onResizeStart($event, col)"></div>
            </th>
          </slot>
          <th v-if="rowActions || $slots['head-actions']" :style="'min-width:40px;text-align:center;white-space:nowrap;background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinRightStyle(6, true)">
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
          @mouseenter="onRowMouseEnter(row)" @mouseleave="onRowMouseLeave()"
          @dblclick="handleSelectAction('grid-row-dblclick', { row })"
          @dragstart="handleSelectAction('grid-row-drag-start', { idx })"
          @dragover="handleSelectAction('grid-row-drag-over', { idx, event: $event })"
          @dragend="handleSelectAction('grid-row-drag-end')">
            <td v-if="selectable" :style="'text-align:center;' + pinLeftStyle(0, 4, false, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'" @click.stop>
              <input type="checkbox" :checked="fnRowChecked(row)" @change="handleSelectAction('grid-row-toggle-check', { row })" />
            </td>
            <td v-if="draggable" :style="'text-align:center;cursor:grab;color:#bbb;font-size:17px;user-select:none;' + pinLeftStyle(selectable ? 36 : 0, 4, false, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
              \u2261
            </td>
            <td v-if="showRowNo" :style="'text-align:center;font-size:11px;color:#999;cursor:pointer;' + pinLeftStyle(cfPinNoLeft, 4, false, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'" title="\uBCF4\uAE30"
            @click="handleSelectAction('grid-cell-click', { row, col: { key: '__no__', link: true }, ci: -1, idx, event: $event })"
            @auxclick="$event.button===1 ? handleSelectAction('grid-cell-click', { row, col: { key: '__no__', link: true }, ci: -1, idx, event: $event }) : null">
              {{ rowNo(idx) }}
            </td>
            <template v-for="(col, ci) in columns" :key="col.key">
              <slot :name="'cell-' + col.key" :row="row" :idx="idx" :no="rowNo(idx)">
                <td :style="U.tdStyle(col, row) + (col.pin === 'left' ? pinLeftStyle(cfPinLeftOffset[col.key], 4, col.key === cfPinLeftLastKey, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';' : '')" :class="U.cellClass(col, row)" :title="U.cellTitle(col, row)"
                @click="rowClickable ? handleSelectAction('grid-cell-click', { row, col, ci, idx, event: $event }) : null"
                @auxclick="coUtil.cofAnd(rowClickable, $event.button===1) ? handleSelectAction('grid-cell-click', { row, col, ci, idx, event: $event }) : null">
                  <!-- \uC778\uB77C\uC778 \uD3B8\uC9D1 \uC140 (\uD589\uD074\uB9AD \uD1B5\uC77C \uC2DC @click.stop \uC73C\uB85C \uBCF4\uD638) -->
                  <input v-if="col.edit==='text'" class="form-control" v-model="row[col.key]"
                  :placeholder="col.placeholder" style="padding:2px 6px;font-size:12px;"
                  @click.stop @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                  <input v-else-if="col.edit==='number'" type="number" class="form-control" v-model.number="row[col.key]"
                  style="padding:2px 6px;font-size:12px;width:100%;text-align:right;"
                  @click.stop @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                  <input v-else-if="col.edit==='date'" type="date" class="form-control" v-model="row[col.key]"
                  style="padding:2px 4px;font-size:11px;width:130px;text-align:center;"
                  @click.stop @input="handleSelectAction('grid-row-cell-change', { row, col })" />
                  <select v-else-if="col.edit==='select'" class="form-control" v-model="row[col.key]"
                  style="padding:2px 4px;font-size:12px;"
                  @click.stop @change="handleSelectAction('grid-row-cell-change', { row, col })">
                    <option v-if="col.nullable" :value="null">{{ col.nullLabel || '-- \uC120\uD0DD --' }}</option>
                    <option v-for="o in U.normOptions(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
                  </select>
                  <!-- \uD45C\uC2DC\uACBD\uB85C picker (bo-path-pick-field \uC790\uB3D9 \uC784\uBCA0\uB4DC) \u2014 bare: \uC140 td \uC548\uC5D0 div \uB85C(\uC911\uCCA9 td \uBC29\uC9C0, \uD3ED \uD1B5\uC77C) -->
                  <bo-path-pick-field v-else-if="col.pathPick" bare :biz-cd="col.pathPick" :row="row" :disabled="row._row_status==='D'" @change="handleSelectAction('grid-row-cell-change', { row, col })" />
                  <!-- \uBAA8\uB2EC \uC778\uD130\uC149\uD2B8 select (col.selectIntercept: { valueKey | value:fn(row), options, onChange:fn(row,newVal,$event), nullable, nullLabel, disabled:fn(row) }) \u2014 v-model \uBBF8\uC0AC\uC6A9 -->
                  <select v-else-if="col.selectIntercept" class="form-control grid-select" style="font-size:11px;padding:2px 4px;"
                  :value="typeof col.selectIntercept.value==='function' ? col.selectIntercept.value(row) : row[col.selectIntercept.valueKey]"
                  :disabled="typeof col.selectIntercept.disabled==='function' ? col.selectIntercept.disabled(row) : false"
                  @click.stop @change="col.selectIntercept.onChange(row, $event.target.value, $event)">
                    <option v-if="col.selectIntercept.nullable" value="">{{ col.selectIntercept.nullLabel || '-' }}</option>
                    <option v-for="o in U.normOptions(col.selectIntercept.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
                  </select>
                  <!-- \uC678\uBD80 setter \uC778\uD130\uC149\uD2B8 input (col.editIntercept: { type:'text'|'number'|'date', placeholder, onInput:fn(row,newVal,idx,$event) }) \u2014 v-model \uBBF8\uC0AC\uC6A9 -->
                  <input v-else-if="col.editIntercept" class="form-control" :type="col.editIntercept.type || 'text'"
                  :value="row[col.key]" :placeholder="col.editIntercept.placeholder" style="margin:0;padding:2px 6px;font-size:12px;"
                  @click.stop @input="col.editIntercept.onInput(row, $event.target.value, idx, $event)" />
                  <!-- \uD480\uD3ED \uBC84\uD2BC picker (col.linkButton: { label:fn(row)=>string, onClick:fn(row), suffix:string, btnClass:string }) -->
                  <button v-else-if="col.linkButton" type="button"
                  :class="col.linkButton.btnClass || 'btn btn-secondary btn-xs'"
                  style="font-size:11px;width:100%;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                  @click.stop="col.linkButton.onClick(row)">
                    {{ col.linkButton.label(row) }}{{ col.linkButton.suffix != null ? ' ' + col.linkButton.suffix : ' \u25BC' }}
                  </button>
                  <!-- \uC140\uBCC4 \uD1A0\uAE00 \uB9C1\uD06C (col.linkToggle: { active:fn(row)=>bool, activeStyle, baseStyle, title, onClick:fn(row) }) -->
                  <span v-else-if="col.linkToggle" class="title-link" @click.stop="col.linkToggle.onClick(row)"
                  :title="col.linkToggle.title || null"
                  :style="col.linkToggle.active(row) ? (col.linkToggle.activeStyle || 'color:#e8587a;font-weight:700;') : (col.linkToggle.baseStyle || 'color:#1e88e5;font-weight:500;')">
                    {{ U.cellText(col, row) }}
                  </span>
                  <!-- \uD0DD\uBC30 \uCD94\uC801 \uBC15\uC2A4 \uADF8\uB8F9 (col.trackBoxes: { items:fn(row)=>[{label,courier,trackingNo,colorVariant}], onTrack:fn(courier,trackingNo) }) -->
                  <template v-else-if="col.trackBoxes">
                    <div v-if="col.trackBoxes.items(row).length" style="display:flex;flex-direction:column;gap:2px;font-size:10.5px;">
                      <span v-for="(it, ix) in col.trackBoxes.items(row)" :key="ix" @click.stop="col.trackBoxes.onTrack(it.courier, it.trackingNo)"
                      :style="'cursor:pointer;padding:1px 6px;border-radius:4px;font-weight:700;'
                      +(it.colorVariant==='orange'?'border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;':'border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;')">
                        {{ it.label ? it.label + ' ' : '' }}{{ it.courier }} \xB7 {{ it.trackingNo || '-' }} \u{1F50D}
                      </span>
                    </div>
                    <span v-else style="color:#ccc;">
                      -
                    </span>
                  </template>
                  <!-- \uC77C\uC2DC picker (bo-date-time-picker \uC790\uB3D9 \uC784\uBCA0\uB4DC) \u2014 col.dateTimePick: { dateKey, timeKey, dateWidth, timeWidth, onChange? } -->
                  <bo-date-time-picker v-else-if="col.dateTimePick"
                  :date="row[col.dateTimePick.dateKey]" :time="row[col.dateTimePick.timeKey]"
                  @update:date="v => { row[col.dateTimePick.dateKey] = v; handleSelectAction('grid-row-cell-change', { row, col }); }"
                  @update:time="v => { row[col.dateTimePick.timeKey] = v; handleSelectAction('grid-row-cell-change', { row, col }); }"
                  :show-now="col.dateTimePick.showNow !== false" :show-clear="col.dateTimePick.showClear !== false"
                  :date-width="col.dateTimePick.dateWidth || '104px'" :time-width="col.dateTimePick.timeWidth || '64px'"
                  input-class="" />
                  <!-- \uC778\uB77C\uC778 path-button (\uB77C\uBCA8 + \u2715 \uBE44\uC6B0\uAE30 + \u{1F50D} \uBC84\uD2BC + onOpen \uCF5C\uBC31) -->
                  <div v-else-if="col.pathLabelOpen" :style="{padding:'1px 4px 1px 8px',border:'1px solid #e5e7eb',borderRadius:'5px',fontSize:'12px',minHeight:'22px',background:'#f5f5f7',color:row[col.key]!=null?'#374151':'#9ca3af',fontWeight:row[col.key]!=null?600:400,display:'flex',alignItems:'center',gap:'4px'}">
                    <span style="flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                      :title="(typeof col.pathLabelOpen.label==='function' ? col.pathLabelOpen.label(row[col.key]) : '') || ''">
                      {{ (typeof col.pathLabelOpen.label==='function' ? col.pathLabelOpen.label(row[col.key]) : '') || (col.pathLabelOpen.placeholder || '\uACBD\uB85C \uC120\uD0DD...') }}
                    </span>
                    <span v-if="row[col.key] != null" title="\uBE44\uC6B0\uAE30"
                      style="cursor:pointer;color:#9ca3af;font-size:9px;flex-shrink:0;line-height:1;padding:0;margin-right:-1px;align-self:flex-end;margin-bottom:2px;"
                      @click.stop="col.pathLabelOpen.clear ? col.pathLabelOpen.clear(row) : (row[col.key] = null)">
                      \u2715
                    </span>
                    <button type="button" @click.stop="col.pathLabelOpen.open(row)" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" style="cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#fff;border:1px solid #d1d5db;border-radius:4px;font-size:11px;color:#2563eb;flex-shrink:0;padding:0;">
                      \u{1F50D}
                    </button>
                  </div>
                  <!-- \uD45C\uC2DC \uC140 (link\uB294 cellInnerStyle/Class \uD569\uC131 \uAC00\uB2A5) \u2014 \uC81C\uBAA9 \uD074\uB9AD\uC740 cell-click \uC73C\uB85C \uBD84\uB9AC -->
                  <span v-else-if="col.link" class="title-link" @click.stop="handleSelectAction('grid-cell-click', { row, col, ci, idx, event: $event })"
                  @auxclick.stop="$event.button===1 ? handleSelectAction('grid-cell-click', { row, col, ci, idx, event: $event }) : null"
                  :style="U.cellInnerStyle(col, row)" :class="U.cellInnerClass(col, row)">
                    {{ U.cellText(col, row) }}
                  </span>
                  <a v-else-if="col.refLink" href="#" class="ref-link" @click.stop.prevent="handleSelectAction('grid-row-ref-click', { row, col })">
                    {{ U.cellText(col, row) }}
                  </a>
                  <span v-else-if="col.badge" class="badge" :class="U.badgeClass(col, row)">
                    {{ U.cellText(col, row) }}
                  </span>
                  <span v-else-if="col.cellInnerStyle != null || col.cellInnerClass != null"
                  :style="U.cellInnerStyle(col, row)" :class="U.cellInnerClass(col, row)">
                    {{ U.cellText(col, row) }}
                  </span>
                  <span v-else-if="col.html" v-html="U.cellText(col, row)"></span>
                  <template v-else>
                    {{ U.cellText(col, row) }}
                  </template>
                </td>
              </slot>
            </template>
            <td v-if="rowActions" :style="'text-align:center;white-space:nowrap;' + pinRightStyle(4, true, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
              <slot name="row-actions" :row="row" :idx="idx" :grid-id="gridId">
                <template v-if="rowActionsCols">
                  <template v-for="(a, ai) in rowActionsCols" :key="ai">
                    <a v-if="a.href && fnRowActionVisible(a, row, idx)" :href="a.href(row, idx)" :target="a.target || '_blank'" rel="noopener"
                      :class="fnRowActionVal(a.cls, row, idx)" :style="fnRowActionVal(a.style, row, idx)" :title="fnRowActionVal(a.title, row, idx)">{{ fnRowActionVal(a.label, row, idx) }}</a>
                    <button v-else-if="fnRowActionVisible(a, row, idx)" type="button" :disabled="fnRowActionDisabled(a, row, idx)"
                      :class="fnRowActionVal(a.cls, row, idx)" :style="fnRowActionVal(a.style, row, idx)" :title="fnRowActionVal(a.title, row, idx)"
                      @click="a.onClick && a.onClick(row, idx)">{{ fnRowActionVal(a.label, row, idx) }}</button>
                  </template>
                </template>
                <button v-else class="btn btn_row_delete" @click="handleSelectAction('grid-row-remove', { row })">
                  \u2715
                </button>
              </slot>
            </td>
            <slot v-else name="row-actions" :row="row" :idx="idx" :grid-id="gridId"
              :pin-style="pinRightStyle(4, true, fnRowSelected(row)) + 'background:' + fnPinBg(row, idx) + ';'">
            </slot>
          </tr>
          <tr v-if="fnIsExpanded(row, idx)" class="bo-grid-expand-row">
            <slot name="row-expand" :row="row" :idx="idx" :colspan="cfColspan">
              <td :colspan="cfColspan">
              </td>
            </slot>
          </tr>
        </template>
        <tr v-if="!rows.length">
          <td :colspan="cfColspan"
          style="text-align:center;padding:30px;color:#aaa">
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
  <!-- \uCE74\uB4DC\uD615\uC2DD(layout='card') \u2014 fo-grid \uC640 \uB3D9\uC77C \uC124\uACC4. #card \uC2AC\uB86F\uC774 \uCF58\uD150\uCE20 \uC804\uB2F4, \uBBF8\uC81C\uACF5 \uC2DC
       columns \uAE30\uBC18 \uAE30\uBCF8 \uCE74\uB4DC(\uC81C\uBAA9=\uCCAB \uCEEC\uB7FC, \uB098\uBA38\uC9C0\uB294 \uB77C\uBCA8:\uAC12)\uB85C \uB300\uCCB4. -->
  <div v-else class="bo-grid-cardview" :style="{ '--bo-grid-card-min': cardMinWidth }">
    <div v-if="loading && !rows.length" style="grid-column:1/-1;text-align:center;padding:30px;color:#bbb;">\u23F3 \uC870\uD68C \uC911\u2026</div>
    <div v-else-if="!rows.length" style="grid-column:1/-1;text-align:center;padding:30px;color:#bbb;">{{ emptyText }}</div>
    <template v-else>
      <div v-for="(row, idx) in rows" :key="rowKey ? row[rowKey] : idx"
        :class="[cardClass || 'bo-grid-card-item', fnRowClass(row, idx)]" :style="fnRowStyle(row, idx)"
        @click="handleSelectAction('grid-row-click', { row })">
        <slot name="card" :row="row" :idx="idx" :no="rowNo(idx)">
          <div class="bo-grid-card-default-title">{{ U.cellText(columns[0], row) }}</div>
          <div v-for="col in columns.slice(1)" :key="col.key" class="bo-grid-card-default-row">
            <b>{{ col.label }}</b><span>{{ U.cellText(col, row) }}</span>
          </div>
        </slot>
      </div>
    </template>
  </div>
  <!-- /\uADF8\uB9AC\uB4DC \uBCF8\uBB38 \uC2A4\uD06C\uB864 \uCEE8\uD14C\uC774\uB108 -->
  <!-- \u25BC \uD558\uB2E8 \uBC14 \u2014 \uC88C\uCE21 \uAC74\uC218 + #footer \uC2AC\uB86F(<bo-pager> \uB4F1). bare \uBAA8\uB4DC\uB294 \uBBF8\uB178\uCD9C.
       \uAC74\uC218\uB294 \uC608\uC804\uC5D0 \uC81C\uBAA9 \uC6B0\uCE21(.list-count)\uC5D0 \uC788\uC5C8\uC73C\uB098 \uD558\uB2E8 \uC88C\uCE21\uC73C\uB85C \uC774\uB3D9(2026-08-01).
       \uD398\uC774\uC800\uAC00 .pagination \uC758 1fr auto 1fr \uB85C \uC790\uCCB4 \uC911\uC559\uC815\uB82C\uD558\uBBC0\uB85C \uAC74\uC218\uB294 \uADF8 \uC67C\uCABD \uCE78\uC744 \uC4F4\uB2E4. -->
  <div v-if="!bare" class="grid-foot">
    <span class="grid-foot-count">{{ cfCountText }}</span>
    <div class="grid-foot-slot">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
`},window.BoGridCrud={name:"BoGridCrud",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},rowKey:{type:String,required:!0},actionHeader:{type:String,default:"\uAD00\uB9AC"},gridId:{type:String,default:""},listTitle:{type:String,default:"\uBAA9\uB85D"},maxHeight:{type:String,default:"480px"},totalCount:{type:Number,default:null},scrollEndOffset:{type:Number,default:500},draggable:{type:Boolean,default:!0},checkAll:{type:Boolean,default:!1},focusedIdx:{type:Number,default:null},showExport:{type:Boolean,default:!1},showExcelUpload:{type:Boolean,default:!1},showRowNo:{type:Boolean,default:!0},showRowId:{type:Boolean,default:!0},showRowStatus:{type:Boolean,default:!0},showRowCheck:{type:Boolean,default:!0},showAdd:{type:Boolean,default:!0},showSave:{type:Boolean,default:!0},cellTitle:{type:Function,default:null},sortState:{type:Object,default:null},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},selectedKey:{type:[String,Number],default:null},flatRows:{type:Array,default:null},rowAccessor:{type:Function,default:null},treeRowKey:{type:Function,default:null},treeRowDepth:{type:Function,default:null}},emits:["scroll-end","add","save","cancel-checked","delete-checked","reorder","cell-change","update:checkAll","update:focusedIdx","export","excel-upload","sort","row-dblclick","cell-click","row-click"],setup(e,{emit:l}){const i=window._boAreaCompUtil,u=Vue.computed(()=>Array.isArray(e.flatRows)&&typeof e.rowAccessor=="function"),x=Vue.computed(()=>u.value?e.flatRows:e.rows),p=Vue.computed(()=>e.draggable&&!u.value),g=Vue.computed(()=>e.showRowNo&&(!u.value||typeof e.treeRowDepth=="function")),y=Vue.computed(()=>{if(!u.value||typeof e.treeRowDepth!="function")return[];const t=[];return e.flatRows.map(o=>{const v=e.treeRowDepth(o)||0;return t[v]=(t[v]||0)+1,t.length=v+1,t.join(".")})}),k=Vue.computed(()=>e.showRowId&&!u.value),P=Vue.computed(()=>e.rows.filter(t=>t._row_status!=="D").length),S=Vue.ref(e.checkAll);Vue.watch(()=>e.checkAll,t=>{S.value=t});const T=Vue.ref(null),F=Vue.ref(!1),R=Vue.computed(()=>{let t=e.columns.length+1;return p.value&&(t+=1),g.value&&(t+=1),k.value&&(t+=1),e.showRowStatus&&(t+=1),e.showRowCheck&&(t+=1),t}),r=(t,o={})=>{if(t==="toolbar-add")return l("add");if(t==="toolbar-save")return l("save");if(t==="toolbar-cancel-checked")return l("cancel-checked");if(t==="toolbar-delete-checked")return l("delete-checked");if(t==="toolbar-export")return l("export");if(t==="toolbar-excel-upload")return l("excel-upload");if(t==="grid-toggle-check-all"){const v=!S.value;return S.value=v,u.value?e.flatRows.forEach(L=>{e.rowAccessor(L)._row_check=v}):e.rows.forEach(L=>{L._row_check=v}),l("update:checkAll",v)}else console.warn("[handleBtnAction] unknown cmd:",t)},d=(t,o={})=>{var v,L,z,N,Y,G;if(t==="sort-toggle"){if(typeof o.col.headClick=="function")return o.col.headClick(o.col);if(o.col.sortKey)return l("sort",o.col.sortKey)}else if(t==="grid-row-focus"){const $=u.value?e.rows.indexOf(e.rowAccessor(e.flatRows[o.idx])):o.idx;return e.focusedIdx!==$&&l("update:focusedIdx",$),l("row-click",o.row,$)}else{if(t==="grid-row-dblclick")return l("row-dblclick",o.row,o.idx);if(t==="grid-cell-click")return l("cell-click",{cmd:e.gridId,row:o.row,col:o.col,colKey:(v=o.col)==null?void 0:v.key,colIndex:o.ci,rowIndex:o.idx,ctrlKey:!!((L=o.event)!=null&&L.ctrlKey),metaKey:!!((z=o.event)!=null&&z.metaKey),button:(N=o.event)==null?void 0:N.button});if(t==="grid-row-cell-change"){const $=o.row;if($._row_status==="I"||$._row_status==="D")return l("cell-change",{cmd:e.gridId,row:$,col:o.col,colKey:(Y=o.col)==null?void 0:Y.key});if($._row_org){const Z=Object.keys($._row_org).some(Q=>String($[Q])!==String($._row_org[Q]));$._row_status=Z?"U":"N"}return l("cell-change",{cmd:e.gridId,row:$,col:o.col,colKey:(G=o.col)==null?void 0:G.key})}else if(t==="grid-row-drag-start")e.draggable&&(T.value=o.idx,F.value=!1);else if(t==="grid-row-drag-over"){if(!e.draggable||T.value===null||T.value===o.idx)return;o.event.preventDefault();const $=e.rows.splice(T.value,1)[0];e.rows.splice(o.idx,0,$),T.value=o.idx,F.value=!0}else t==="grid-row-drag-end"?(F.value&&l("reorder"),T.value=null,F.value=!1):console.warn("[handleSelectAction] unknown cmd:",t)}},f=t=>u.value?e.rowAccessor(t):t,w=(t,o)=>u.value?typeof e.treeRowKey=="function"?e.treeRowKey(t,o):o:t[e.rowKey],A=t=>({N:"badge-gray",I:"badge-blue",U:"badge-orange",D:"badge-red"})[t]||"badge-gray",b=t=>typeof e.cellTitle=="function"?e.cellTitle(t):"",C=(t,o)=>{const v=f(t),L=["status-"+v._row_status];return!u.value&&e.focusedIdx===o&&L.push("focused"),e.selectedKey!=null&&v[e.rowKey]===e.selectedKey&&L.push("bo-row-selected"),L},M=(t,o)=>{const v=f(t);return v._row_status==="I"?"#d9f7be":v._row_status==="U"?"#fff1b8":v._row_status==="D"?"#ffccc7":"#fff"},E=t=>{const o=e.sortState;return!t.sortKey||!o?"":o.sortKey!==t.sortKey?"\u21C5":o.sortDir==="asc"?"\u2191":"\u2193"},D=t=>e.sortState&&e.sortState.sortKey===t.sortKey,U=Vue.computed(()=>e.totalCount!=null?coUtil.cofCountText(e.totalCount,P.value):coUtil.cofCountText(P.value)),V=30,O=Vue.computed(()=>e.maxHeight?"calc("+e.maxHeight+" - "+V+"px)":e.maxHeight);let I=-1;const c=t=>{const o=t.target;if(o.scrollHeight-o.scrollTop-o.clientHeight>e.scrollEndOffset){I=-1;return}I!==o.scrollHeight&&(I=o.scrollHeight,l("scroll-end"))},h=Vue.computed(()=>{const t=[{show:p.value,w:28},{show:g.value,w:36},{show:e.showRowStatus,w:38},{show:e.showRowCheck,w:32}],o=[];let v=0;t.forEach(z=>{o.push(v),z.show&&(v+=z.w)});const L=t.map(z=>z.show);return{offsets:o,lastShownIdx:L.lastIndexOf(!0)}});return{fnColLabel:t=>coUtil.cofColLabel(t),fnColNm:t=>coUtil.cofColNm(t),U:i,cfVisibleCount:P,cfCountText:U,cfScrollMaxHeight:O,onScroll:c,fnStatusClass:A,allChecked:S,fnColTitle:b,cfEmptyColspan:R,sortIcon:E,sortActive:D,cfTreeMode:u,cfDispRows:x,fnRow:f,fnRowKey:w,fnRowCls:C,fnPinBg:M,cfShowDrag:p,cfShowNo:g,cfShowId:k,cfPinLeftSegs:h,cfTreeNoList:y,pinLeftStyle:(t,o,v,L)=>{let z="position:sticky;left:"+t+"px;z-index:"+o+";";const N=[];return L&&(t===0&&N.push("inset 2px 0 0 #2563eb"),N.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),v&&N.push("2px 0 4px rgba(0,0,0,.08)"),N.length&&(z+="box-shadow:"+N.join(",")+";"),z},pinRightStyle:(t,o,v)=>{let L="position:sticky;right:0;z-index:"+t+";";const z=[];return v&&z.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),o&&z.push("-2px 0 4px rgba(0,0,0,.08)"),z.length&&(L+="box-shadow:"+z.join(",")+";"),L},fnRowSelected:t=>e.selectedKey!=null&&t[e.rowKey]===e.selectedKey,handleBtnAction:r,handleSelectAction:d}},template:`
<div class="card">
  <div class="toolbar">
    <span class="list-title">
      {{ listTitle }}
    </span>
    <div style="display:flex;gap:6px;margin-left:auto;">
      <slot name="toolbar-actions">
      </slot>
      <button v-if="showExport" class="btn btn_excel" @click="handleBtnAction('toolbar-export')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button v-if="showExcelUpload" class="btn btn_excel_upload" @click="handleBtnAction('toolbar-excel-upload')">
        \u{1F4E4} \uC5D1\uC140\uC5C5\uB85C\uB4DC
      </button>
      <button v-if="showAdd" class="btn btn-green btn-sm" @click="handleBtnAction('toolbar-add')">
        + \uD589\uCD94\uAC00
      </button>
      <button v-if="showRowCheck" class="btn btn-danger btn-sm" @click="handleBtnAction('toolbar-delete-checked')">
        \uD589\uC0AD\uC81C
      </button>
      <button v-if="showRowCheck" class="btn btn-secondary btn-sm" @click="handleBtnAction('toolbar-cancel-checked')">
        \uCDE8\uC18C
      </button>
      <button v-if="showSave" class="btn btn_save" @click="handleBtnAction('toolbar-save')">
        \uC800\uC7A5
      </button>
    </div>
  </div>
  <!-- \uD558\uB2E8 \uADFC\uC811 \uC2DC scroll-end emit \u2014 \uBB34\uD55C \uC2A4\uD06C\uB864(\uCD94\uAC00 \uC870\uD68C)\uC6A9. \uD654\uBA74\uC774 \uC548 \uBC1B\uC73C\uBA74 \uC544\uBB34 \uC77C\uB3C4 \uC5C6\uB2E4 -->
  <div :style="'max-height:' + cfScrollMaxHeight + ';overflow:auto;'" @scroll="onScroll">
    <table class="bo-table crud-grid">
      <thead>
        <tr>
          <th v-if="cfShowDrag" class="col-drag" :style="'background:linear-gradient(180deg,#dbebfa,#b7d3f2);border-bottom:2px solid #4a8ac2;' + pinLeftStyle(cfPinLeftSegs.offsets[0], 6, cfPinLeftSegs.lastShownIdx===0)">
          </th>
          <th v-if="cfShowNo" :style="'width:36px;text-align:' + (cfTreeMode ? 'left' : 'center') + ';background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinLeftStyle(cfPinLeftSegs.offsets[1], 6, cfPinLeftSegs.lastShownIdx===1)">
            \uBC88\uD638
          </th>
          <th v-if="showRowStatus" class="col-status" :style="'background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinLeftStyle(cfPinLeftSegs.offsets[2], 6, cfPinLeftSegs.lastShownIdx===2)">
            \uC0C1\uD0DC
          </th>
          <th v-if="showRowCheck" class="col-check" :style="'background:linear-gradient(180deg,#dbebfa,#b7d3f2);border-bottom:2px solid #4a8ac2;' + pinLeftStyle(cfPinLeftSegs.offsets[3], 6, cfPinLeftSegs.lastShownIdx===3)">
            <input type="checkbox" :checked="allChecked" @change="handleBtnAction('grid-toggle-check-all')" />
          </th>
          <th v-if="cfShowId" class="col-id">
            ID
          </th>
          <slot name="head">
            <th v-for="col in columns" :key="col.key" :class="col.cls"
              :style="U.thStyle(col) + ((col.sortKey || col.headClick) ? 'cursor:pointer;user-select:none;white-space:nowrap;' : '')"
              :title="fnColTitle(col)" @click="handleSelectAction('sort-toggle', { col })">
              {{ col.noHead ? '' : col.label }}
              <span v-if="col.noHead ? false : !!fnColNm(col)" style="display:block;font-size:9px;font-weight:400;color:#9aa4b2;line-height:1.2;">{{ fnColNm(col) }}</span>
              <span v-if="col.sortKey"
                :style="sortActive(col) ? 'color:#e8587a;font-weight:bold;' : 'color:#bbb;'">
                {{ sortIcon(col) }}
              </span>
            </th>
          </slot>
          <th class="col-act" :style="'text-align:center;background:linear-gradient(180deg,#dbebfa,#b7d3f2);color:#1d4d78;border-bottom:2px solid #4a8ac2;' + pinRightStyle(6, true)">
            <slot name="head-actions">{{ actionHeader }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- \u25BC grid-row \uC601\uC5ED -->
        <tr v-if="!cfDispRows.length">
          <td :colspan="cfEmptyColspan" style="text-align:center;color:#999;padding:30px;">
            {{ emptyText }}
          </td>
        </tr>
        <tr v-else v-for="(item, idx) in cfDispRows" :key="fnRowKey(item, idx)" class="crud-row" :class="fnRowCls(item, idx)" :draggable="cfShowDrag" @click="handleSelectAction('grid-row-focus', { idx, row: fnRow(item) })" @dblclick="handleSelectAction('grid-row-dblclick', { row: fnRow(item), idx })" @dragstart="handleSelectAction('grid-row-drag-start', { idx })" @dragover="handleSelectAction('grid-row-drag-over', { idx, event: $event })" @dragend="handleSelectAction('grid-row-drag-end')">
        <td v-if="cfShowDrag" class="drag-handle" title="\uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD" :style="pinLeftStyle(cfPinLeftSegs.offsets[0], 4, cfPinLeftSegs.lastShownIdx===0, fnRowSelected(fnRow(item))) + 'background:' + fnPinBg(item, idx) + ';'">
          \u283F
        </td>
        <td v-if="cfShowNo" :style="'text-align:' + (cfTreeMode ? 'left' : 'center') + ';font-size:11px;color:#999;cursor:pointer;white-space:nowrap;' + pinLeftStyle(cfPinLeftSegs.offsets[1], 4, cfPinLeftSegs.lastShownIdx===1, fnRowSelected(fnRow(item))) + 'background:' + fnPinBg(item, idx) + ';'" title="\uBCF4\uAE30"
          @click.stop="handleSelectAction('grid-cell-click', { row: fnRow(item), col: { key: '__no__', link: true }, ci: -1, idx, event: $event })"
          @auxclick.stop="$event.button===1 ? handleSelectAction('grid-cell-click', { row: fnRow(item), col: { key: '__no__', link: true }, ci: -1, idx, event: $event }) : null">
          {{ cfTreeMode ? cfTreeNoList[idx] : (idx + 1) }}
        </td>
        <td v-if="showRowStatus" class="col-status-val" :style="pinLeftStyle(cfPinLeftSegs.offsets[2], 4, cfPinLeftSegs.lastShownIdx===2, fnRowSelected(fnRow(item))) + 'background:' + fnPinBg(item, idx) + ';'">
          <span class="badge badge-xs" :class="fnStatusClass(fnRow(item)._row_status)">
            {{ fnRow(item)._row_status }}
          </span>
        </td>
        <td v-if="showRowCheck" class="col-check-val" :style="pinLeftStyle(cfPinLeftSegs.offsets[3], 4, cfPinLeftSegs.lastShownIdx===3, fnRowSelected(fnRow(item))) + 'background:' + fnPinBg(item, idx) + ';'">
          <input type="checkbox" v-model="fnRow(item)._row_check" />
        </td>
        <td v-if="cfShowId" class="col-id-val">
          {{ fnRow(item)[rowKey] > 0 ? fnRow(item)[rowKey] : 'NEW' }}
        </td>
        <template v-for="(col, ci) in columns" :key="col.key">
          <slot :name="'cell-' + col.key" :row="fnRow(item)" :idx="idx" :node="item">
            <td :style="U.tdStyle(col, fnRow(item))" :class="U.cellClass(col, fnRow(item))" :title="U.cellTitle(col, fnRow(item))">
              <div v-if="col.edit==='text' ? (col.treeDepth) : false" style="display:flex;align-items:center;">
              <span :style="{ marginLeft:(fnRow(item)._depth*14)+'px', marginRight:'6px', fontWeight:'700',
                    fontSize: fnRow(item)._depth===0 ? '7px' : '12px', flexShrink:0,
                    color: (typeof col.treeColor==='function' ? col.treeColor(fnRow(item)._depth) : '#888') }">
                {{ typeof col.treeBullet==='function' ? col.treeBullet(fnRow(item)._depth) : '\u25CF' }}
              </span>
              <input class="grid-input" :class="{ 'grid-mono': col.mono }"
                    v-model="fnRow(item)[col.key]" :disabled="fnRow(item)._row_status==='D'"
                    :placeholder="col.placeholder" @input="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })" style="flex:1;" />
            </div>
            <input v-else-if="col.edit==='text'" class="grid-input" :class="{ 'grid-mono': col.mono }"
                  v-model="fnRow(item)[col.key]" :disabled="fnRow(item)._row_status==='D'"
                  :placeholder="col.placeholder" @input="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })" />
            <input v-else-if="col.edit==='number'" type="number" class="grid-input grid-num"
                  v-model.number="fnRow(item)[col.key]" :disabled="fnRow(item)._row_status==='D'"
                  @input="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })" />
            <input v-else-if="col.edit==='date'" type="date" class="grid-input"
                  v-model="fnRow(item)[col.key]" :disabled="fnRow(item)._row_status==='D'"
                  @input="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })" />
            <select v-else-if="col.edit==='select'" class="grid-select"
                  v-model="fnRow(item)[col.key]" :disabled="fnRow(item)._row_status==='D'"
                  @change="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })">
              <option v-if="col.nullable" :value="null">{{ col.nullLabel || '-- \uC120\uD0DD --' }}</option>
              <option v-for="o in U.normOptions(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
            <bo-path-pick-field v-else-if="col.pathPick" bare :biz-cd="col.pathPick" :row="fnRow(item)" :disabled="fnRow(item)._row_status==='D'" @change="handleSelectAction('grid-row-cell-change', { row: fnRow(item), col })" />
            <div v-else-if="col.pathLabelOpen" :style="{padding:'1px 4px 1px 8px',border:'1px solid #e5e7eb',borderRadius:'5px',fontSize:'12px',minHeight:'22px',background:'#f5f5f7',color:fnRow(item)[col.key]!=null?'#374151':'#9ca3af',fontWeight:fnRow(item)[col.key]!=null?600:400,display:'flex',alignItems:'center',gap:'4px'}">
              <span style="flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                :title="(typeof col.pathLabelOpen.label==='function' ? col.pathLabelOpen.label(fnRow(item)[col.key]) : '') || ''">
                {{ (typeof col.pathLabelOpen.label==='function' ? col.pathLabelOpen.label(fnRow(item)[col.key]) : '') || (col.pathLabelOpen.placeholder || '\uACBD\uB85C \uC120\uD0DD...') }}
              </span>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;">
                <button type="button" @click.stop="col.pathLabelOpen.open(fnRow(item))" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" style="cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#fff;border:1px solid #d1d5db;border-radius:4px;font-size:11px;color:#2563eb;flex-shrink:0;padding:0;">\u{1F50D}</button>
                <span v-if="fnRow(item)[col.key] != null" title="\uBE44\uC6B0\uAE30"
                  style="cursor:pointer;color:#bbb;font-size:10px;flex-shrink:0;line-height:1;padding:0 3px;"
                  @click.stop="col.pathLabelOpen.clear ? col.pathLabelOpen.clear(fnRow(item)) : (fnRow(item)[col.key] = null)">x</span>
              </span>
            </div>
            <div v-else-if="col.parentPick" style="display:flex;align-items:flex-end;gap:4px;">
              <span v-if="fnRow(item)[col.key]"
                    style="flex:1;font-size:12px;color:#444;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                    :title="col.parentPick.label(fnRow(item)[col.key])">
                {{ col.parentPick.label(fnRow(item)[col.key]) }}
              </span>
              <span v-else style="flex:1;font-size:11px;color:#bbb;font-style:italic;">
                {{ col.parentPick.placeholder || '\uCD5C\uC0C1\uC704' }}
              </span>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;">
                <button v-if="fnRow(item)._row_status!=='D'" class="btn btn-secondary btn-xs"
                      style="flex-shrink:0;padding:2px 7px;font-size:12px;line-height:1.4;color:#e8587a;" :title="col.parentPick.title || '\uC0C1\uC704 \uC120\uD0DD'"
                      @click.stop="col.parentPick.open(fnRow(item))">\u{1F50D}</button>
                <span v-if="fnRow(item)[col.key] != null" title="\uBE44\uC6B0\uAE30"
                      style="cursor:pointer;color:#bbb;font-size:10px;flex-shrink:0;line-height:1;padding:0 3px;"
                      @click.stop="col.parentPick.clear ? col.parentPick.clear(fnRow(item)) : (fnRow(item)[col.key] = null)">x</span>
              </span>
            </div>
            <span v-else-if="col.link" class="title-link" @click.stop="handleSelectAction('grid-cell-click', { row: fnRow(item), col, ci, idx, event: $event })"
                  @auxclick.stop="$event.button===1 ? handleSelectAction('grid-cell-click', { row: fnRow(item), col, ci, idx, event: $event }) : null"
                  :style="U.cellInnerStyle(col, fnRow(item))" :class="U.cellInnerClass(col, fnRow(item))">
              {{ U.cellText(col, fnRow(item)) }}
            </span>
            <span v-else-if="col.badge" class="badge" :class="U.badgeClass(col, fnRow(item))">
              {{ U.cellText(col, fnRow(item)) }}
            </span>
            <span v-else-if="col.cellInnerStyle != null || col.cellInnerClass != null"
                  :style="U.cellInnerStyle(col, fnRow(item))" :class="U.cellInnerClass(col, fnRow(item))">
              {{ U.cellText(col, fnRow(item)) }}
            </span>
            <template v-else>
              {{ U.cellText(col, fnRow(item)) }}
            </template>
          </td>
        </slot>
      </template>
      <td class="col-act-val" :style="pinRightStyle(4, true, fnRowSelected(fnRow(item))) + 'background:' + fnPinBg(item, idx) + ';'">
        <div class="col-act-box">
          <slot name="row-actions" :row="fnRow(item)" :idx="idx" :node="item" :grid-id="gridId">
          </slot>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
<!-- \uD558\uB2E8 \uC88C\uCE21 \uAC74\uC218 (2026-08-01 \uC81C\uBAA9 \uC6B0\uCE21\uC5D0\uC11C \uC774\uB3D9). CRUD \uADF8\uB9AC\uB4DC\uB294 \uD398\uC774\uC800\uAC00 \uC5C6\uC5B4 \uB2E8\uB3C5 \uD589 -->
<div class="grid-foot">
  <span class="grid-foot-count">{{ cfCountText }}</span>
</div>
</div>
`},window.BoPathTreeCard={name:"BoPathTreeCard",props:{bizCd:{type:String,required:!0},title:{type:String,default:"\uD45C\uC2DC\uACBD\uB85C"},selected:{default:null},showBizCd:{type:Boolean,default:!1},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},maxHeight:{type:String,default:"65vh"},pad:{type:String,default:"12px"},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:l}){return{cfHasSel:Vue.computed(()=>e.selected!=null&&e.selected!==""),handleBtnAction:(p,g={})=>{if(p==="tree-all")return l("select",null);console.warn("[handleBtnAction] unknown cmd:",p)},handleSelectAction:(p,g={})=>{if(p==="node-select")return l("select",g.id);console.warn("[handleSelectAction] unknown cmd:",p)}}},template:`
<div class="card" :style="'padding:' + pad + ';'">
  <div class="toolbar" style="margin-bottom:6px;">
    <span class="list-title" style="font-size:13px;">
      \u{1F4C2} {{ title }}
      <!-- \uD5E4\uB354\uC758 bizCd \uBC43\uC9C0\uB294 \uD56D\uC0C1 \uD45C\uC2DC (\uD2B8\uB9AC \uC885\uB958 \uC2DD\uBCC4\uC6A9). \uB178\uB4DC\uBCC4 \uD45C\uC2DC\uB294 showBizCd \uB85C \uC81C\uC5B4 -->
      <span v-if="bizCd" style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;">
        #{{ bizCd }}
      </span>
    </span>
    <span v-if="cfHasSel" @click="handleBtnAction('tree-all')" style="font-size:11px;color:#1677ff;cursor:pointer;">
      {{ allLabel }}
    </span>
  </div>
  <div :style="'max-height:' + maxHeight + ';overflow:auto;border-bottom:1px solid #ececec;'">
    <bo-path-tree :biz-cd="bizCd" :show-biz-cd="showBizCd" :selected="selected" :counts="counts" @select="id => handleSelectAction('node-select', { id })" />
  </div>
</div>
`},window.BoMenuTreeCard={name:"BoMenuTreeCard",props:{title:{type:String,default:"\uBA54\uB274"},selected:{default:null},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},maxHeight:{type:String,default:"65vh"},pad:{type:String,default:"12px"},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:l}){return{cfHasSel:Vue.computed(()=>e.selected!=null&&e.selected!==""),handleBtnAction:(p,g={})=>{if(p==="tree-all")return l("select",null);console.warn("[handleBtnAction] unknown cmd:",p)},handleSelectAction:(p,g={})=>{if(p==="node-select")return l("select",g.id);console.warn("[handleSelectAction] unknown cmd:",p)}}},template:`
<div class="card" :style="'padding:' + pad + ';'">
  <div class="toolbar" style="margin-bottom:6px;">
    <span class="list-title" style="font-size:13px;">
      \u{1F4C2} {{ title }}
      <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;">#sy_menu</span>
    </span>
    <span v-if="cfHasSel" @click="handleBtnAction('tree-all')" style="font-size:11px;color:#1677ff;cursor:pointer;">
      {{ allLabel }}
    </span>
  </div>
  <div :style="'max-height:' + maxHeight + ';overflow:auto;'">
    <bo-menu-tree :selected="selected" :counts="counts" @select="id => handleSelectAction('node-select', { id })" />
  </div>
</div>
`},window.BoLocalTreeCard={name:"BoLocalTreeCard",props:{node:{type:Object,required:!0},expanded:{type:Object,required:!0},selected:{default:null},onToggle:{type:Function,required:!0},title:{type:String,default:"\uACBD\uB85C \uD2B8\uB9AC"},bizCd:{type:String,default:""},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},expandable:{type:Boolean,default:!0},maxHeight:{type:String,default:"65vh"},sticky:{type:Boolean,default:!1}},emits:["select","expand-all","collapse-all"],setup(e,{emit:l}){const i=Vue.computed(()=>e.selected!=null&&e.selected!==""),u=Vue.computed(()=>"padding:12px;"+(e.sticky?"position:sticky;top:0;":"")),x=(y,k={})=>{if(y==="tree-all")return l("select",null);if(y==="tree-expand-all")return l("expand-all");if(y==="tree-collapse-all")return l("collapse-all");console.warn("[handleBtnAction] unknown cmd:",y)},p=(y,k={})=>{if(y==="node-select")return l("select",k.id);console.warn("[handleSelectAction] unknown cmd:",y)};return{cfHasSel:i,cfCardStyle:u,fnOnSelect:y=>p("node-select",{id:y}),handleBtnAction:x,handleSelectAction:p}},template:`
<div class="card" :style="cfCardStyle">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <span style="font-size:13px;font-weight:600;color:#555">
      \u{1F4C2} {{ title }}
      <span v-if="bizCd" style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;">
        #{{ bizCd }}
      </span>
    </span>
    <div v-if="cfHasSel" style="font-size:11px;color:#1677ff;cursor:pointer" @click="handleBtnAction('tree-all')">
      {{ allLabel }}
    </div>
  </div>
  <slot name="filter">
  </slot>
  <div v-if="expandable" style="display:flex;gap:4px;margin-bottom:8px">
    <button class="btn btn_expand_all" style="flex:1;font-size:11px" @click="handleBtnAction('tree-expand-all')">
      \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
    </button>
    <button class="btn btn_collapse_all" style="flex:1;font-size:11px" @click="handleBtnAction('tree-collapse-all')">
      \u25B6 \uC804\uCCB4\uB2EB\uAE30
    </button>
  </div>
  <div :style="'max-height:' + maxHeight + ';overflow:auto;'">
    <bo-path-tree-node :node="node" :expanded="expanded" :selected="selected"
      :on-toggle="onToggle" :on-select="fnOnSelect" :depth="0" />
  </div>
</div>
`},window.BoModal={name:"BoModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:String,default:"600px"},maxWidth:{type:String,default:"95vw"},height:{type:String,default:"auto"},minHeight:{type:String,default:""},maxHeight:{type:String,default:"90vh"},zIndex:{type:Number,default:9e3},boxPad:{type:String,default:"20px"},bodyPad:{type:String,default:"20px"},closeOnBackdrop:{type:Boolean,default:!0},overlayBg:{type:String,default:"rgba(18,24,40,0.55)"},teleport:{type:Boolean,default:!0},onCloseCb:{type:Function,default:null},onConfirmCb:{type:Function,default:null}},emits:["close","confirm"],setup(e,{emit:l}){const i=Vue.computed(()=>"position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:"+e.overlayBg+";z-index:"+e.zIndex+";"),u=Vue.computed(()=>"background:#fff;width:"+e.width+";max-width:"+e.maxWidth+";height:"+e.height+";max-height:"+e.maxHeight+";"+(e.minHeight?"min-height:"+e.minHeight+";":"")+"display:flex;flex-direction:column;padding:"+e.boxPad+";overflow:hidden;"),x=Vue.computed(()=>e.boxPad==="0"||e.boxPad==="0px"?"flex:1;overflow-y:auto;padding:"+e.bodyPad+";":"flex:1;overflow-y:auto;padding:"+e.bodyPad+";margin:0 -"+e.boxPad+";"),p=Vue.computed(()=>e.boxPad==="0"||e.boxPad==="0px"?"":"padding:0 "+e.boxPad+";"),g=(S,T={})=>{S==="modal-close"?(l("close"),typeof e.onCloseCb=="function"&&e.onCloseCb()):S==="modal-confirm"?(l("confirm"),typeof e.onConfirmCb=="function"&&e.onConfirmCb()):S==="modal-backdrop"?e.closeOnBackdrop&&g("modal-close"):console.warn("[handleBtnAction] unknown cmd:",S)};return{onClose:()=>g("modal-close"),onConfirm:()=>g("modal-confirm"),cfOverlayStyle:i,cfBoxStyle:u,cfBodyOuterStyle:x,cfBodyInnerStyle:p,handleBtnAction:g,handleSelectAction:(S,T={})=>{console.warn("[handleSelectAction] unknown cmd:",S)}}},template:`
<teleport to="body" :disabled="!teleport">
  <div v-if="show" class="modal-overlay" :style="cfOverlayStyle" @click.self="handleBtnAction('modal-backdrop')">
    <div class="modal-box" :style="cfBoxStyle">
      <div v-if="title" class="modal-header" style="display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
        <span style="font-weight:800;font-size:15px;color:#9f2946;letter-spacing:-0.2px;">
          <slot name="title">{{ title }}</slot>
        </span>
        <span style="display:flex;align-items:center;gap:8px;">
          <slot name="header-extra">
          </slot>
          <button type="button" class="modal-close" @click="handleBtnAction('modal-close')">
            \u2715
          </button>
        </span>
      </div>
      <div :style="cfBodyOuterStyle">
        <div :style="cfBodyInnerStyle">
          <slot name="body">
            <slot>
            </slot>
          </slot>
        </div>
      </div>
      <div v-if="$slots.footer" class="modal-footer" style="flex-shrink:0;display:flex;justify-content:flex-end;gap:8px;padding:12px 0 0;border-top:1px solid #f0f0f0;margin-top:14px;">
        <slot name="footer" :confirm="onConfirm" :close="onClose">
        </slot>
      </div>
    </div>
  </div>
</teleport>
`},window.BoCronModal={name:"BoCronModal",props:{show:{type:Boolean,default:!1},value:{type:String,default:"0 0 * * *"}},emits:["apply","close"],setup(e,{emit:l}){const{reactive:i,computed:u,watch:x}=Vue,p=[{label:"\uB9E4\uC77C \uC790\uC815",value:"0 0 * * *"},{label:"\uB9E4\uC77C 01:00",value:"0 1 * * *"},{label:"\uB9E4\uC77C 02:00",value:"0 2 * * *"},{label:"\uB9E4\uC2DC\uAC04",value:"0 * * * *"},{label:"2\uC2DC\uAC04\uB9C8\uB2E4",value:"0 */2 * * *"},{label:"\uB9E4\uC8FC \uC77C\uC694\uC77C \uC790\uC815",value:"0 0 * * 0"},{label:"\uB9E4\uC6D4 1\uC77C 08:00",value:"0 8 1 * *"}],g=[{key:"minute",label:"\uBD84",placeholder:"0",hint:"0-59, */n"},{key:"hour",label:"\uC2DC",placeholder:"0",hint:"0-23, */n"},{key:"day",label:"\uC77C",placeholder:"*",hint:"1-31, *"},{key:"month",label:"\uC6D4",placeholder:"*",hint:"1-12, *"},{key:"weekday",label:"\uC694\uC77C",placeholder:"*",hint:"0-6 (\uC77C=0)"}],y=i({minute:"0",hour:"0",day:"*",month:"*",weekday:"*",preview:"0 0 * * *"}),k=R=>{const r=String(R||"0 0 * * *").trim().split(/\s+/);y.minute=r[0]||"*",y.hour=r[1]||"*",y.day=r[2]||"*",y.month=r[3]||"*",y.weekday=r[4]||"*",y.preview=R||"0 0 * * *"};x(()=>e.show,R=>{R&&k(e.value)}),x(()=>e.value,R=>{e.show&&k(R)});const P=R=>{if(!R)return"";const r=R.trim().split(/\s+/);if(r.length!==5)return"";const[d,f,w,A,b]=r,C=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],M=(U,V)=>{if(U==="*")return"";const O=String(U).padStart(2,"0"),I=V==="*"?"00":String(V).padStart(2,"0");return" "+O+":"+I};if(d==="*"&&f==="*"&&w==="*"&&A==="*"&&b==="*")return"\uB9E4\uBD84 \uC2E4\uD589";const E=d.match(/^\*\/(\d+)$/);if(E&&f==="*"&&w==="*"&&A==="*"&&b==="*")return E[1]+"\uBD84\uB9C8\uB2E4 \uC2E4\uD589";if(f==="*"&&w==="*"&&A==="*"&&b==="*")return d==="0"?"\uB9E4\uC2DC\uAC04 \uC2E4\uD589":"\uB9E4\uC2DC\uAC04 "+d+"\uBD84\uC5D0 \uC2E4\uD589";const D=f.match(/^\*\/(\d+)$/);return D&&w==="*"&&A==="*"&&b==="*"?D[1]+"\uC2DC\uAC04\uB9C8\uB2E4 \uC2E4\uD589"+(d!=="0"&&d!=="*"?" ("+d+"\uBD84)":""):A!=="*"&&w!=="*"&&b==="*"?"\uB9E4\uB144 "+(A.match(/^\*\/(\d+)$/)?A.match(/^\*\/(\d+)$/)[1]+"\uAC1C\uC6D4\uB9C8\uB2E4":A+"\uC6D4")+" "+w+"\uC77C"+M(f,d)+" \uC2E4\uD589":w==="*"&&A==="*"&&b!=="*"?"\uB9E4\uC8FC "+b.split(",").map(V=>{const O=parseInt(V);return isNaN(O)?V:C[O%7]+"\uC694\uC77C"}).join(", ")+M(f,d)+" \uC2E4\uD589":A==="*"&&b==="*"&&w!=="*"?"\uB9E4\uC6D4 "+(w.match(/^\*\/(\d+)$/)?w.match(/^\*\/(\d+)$/)[1]+"\uC77C\uB9C8\uB2E4":w+"\uC77C")+M(f,d)+" \uC2E4\uD589":w==="*"&&A==="*"&&b==="*"?"\uB9E4\uC77C"+M(f,d)+" \uC2E4\uD589":""},S=u(()=>P(y.preview));return{PRESETS:p,FIELDS:g,st:y,cfDesc:S,handleBtnAction:(R,r={})=>{if(R==="cron-apply")return l("apply",y.preview),l("close");if(R==="cron-close")return l("close");R==="cron-update-preview"?y.preview=y.minute+" "+y.hour+" "+y.day+" "+y.month+" "+y.weekday:console.warn("[handleBtnAction] unknown cmd:",R)},handleSelectAction:(R,r={})=>{if(R==="preset-apply"){const d=r.value.split(" ");y.minute=d[0],y.hour=d[1],y.day=d[2],y.month=d[3],y.weekday=d[4],y.preview=r.value}else console.warn("[handleSelectAction] unknown cmd:",R)}}},template:`
<bo-modal :show="show" title="\u{1F550} Cron \uD45C\uD604\uC2DD \uC124\uC815" width="500px" @close="handleBtnAction('cron-close')">
  <!-- \u25BC preset \uC601\uC5ED -->
  <div style="margin-bottom:18px;">
    <div style="font-size:12px;font-weight:700;color:#444;margin-bottom:8px;">
      \u26A1 \uD504\uB9AC\uC14B
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <button v-for="p in PRESETS" :key="p.value"
        class="btn btn-sm"
        :style="st.preview === p.value
        ? 'border:1.5px solid #e8587a;color:#e8587a;background:#fff5f7;font-weight:600;'
        : 'border:1px solid #d9d9d9;color:#555;background:#fff;'"
        style="font-size:11px;padding:5px 10px;text-align:left;line-height:1.5;"
        @click="handleSelectAction('preset-apply', { value: p.value })">
        <div>
          {{ p.label }}
        </div>
        <code style="font-size:10px;opacity:.65;letter-spacing:.5px;">{{ p.value }}</code>
        </button>
      </div>
    </div>
    <!-- \u25BC fields \uC601\uC5ED -->
    <div style="margin-bottom:18px;">
      <div style="font-size:12px;font-weight:700;color:#444;margin-bottom:8px;">
        \u{1F527} \uC218\uB3D9 \uC124\uC815
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;">
        <div v-for="f in FIELDS" :key="f.key" style="text-align:center;">
          <div style="font-size:10px;color:#888;margin-bottom:4px;font-weight:600;">
            {{ f.label }}
          </div>
          <input class="form-control"
          style="text-align:center;font-family:monospace;font-size:13px;padding:5px 4px;"
          :placeholder="f.placeholder" :title="f.hint"
          v-model="st[f.key]" @input="handleBtnAction('cron-update-preview')" />
          <div style="font-size:9px;color:#bbb;margin-top:3px;">
            {{ f.hint }}
          </div>
        </div>
      </div>
    </div>
    <div style="background:#f0f8ff;border:1px solid #dbeafe;border-radius:6px;padding:10px 16px;display:flex;align-items:center;gap:12px;">
      <span style="font-size:11px;color:#888;flex-shrink:0;">
        \uACB0\uACFC
      </span>
      <code style="font-size:16px;color:#2563eb;font-weight:700;letter-spacing:2px;">{{ st.preview }}</code>
        <span v-if="cfDesc" style="font-size:11px;color:#e8587a;margin-left:auto;font-weight:600;">
          {{ cfDesc }}
        </span>
      </div>
      <template #footer>
        <button class="btn btn_cancel" @click="handleBtnAction('cron-close')">
          \uCDE8\uC18C
        </button>
        <button class="btn btn_apply" @click="handleBtnAction('cron-apply')">
          \uC801\uC6A9
        </button>
      </template>
    </bo-modal>
`},window.BoTreeSelectorModal={name:"BoTreeSelectorModal",props:{show:{type:Boolean,default:!1},node:{type:Object,default:()=>({children:[]})},expanded:{type:Object,required:!0},onToggle:{type:Function,required:!0},title:{type:String,default:"\uD56D\uBAA9 \uC120\uD0DD"},rootLabel:{type:String,default:"(\uB8E8\uD2B8 \u2014 \uC0C1\uC704\uC5C6\uC74C)"}},emits:["select","close"],setup(e,{emit:l}){const i=(p,g={})=>{if(p==="treeModal-close")return l("close");if(p==="treeModal-root-select")return l("select",null);console.warn("[handleBtnAction] unknown cmd:",p)},u=(p,g={})=>{if(p==="node-select")return l("select",g.id);console.warn("[handleSelectAction] unknown cmd:",p)};return{fnOnSelect:p=>u("node-select",{id:p}),handleBtnAction:i,handleSelectAction:u}},template:`
<bo-modal :show="show" :title="title" width="420px" max-height="70vh" body-pad="0" @close="handleBtnAction('treeModal-close')">
  <div style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
    <div v-if="rootLabel" style="padding:8px 12px;font-size:12px;border-bottom:1px solid #f0f0f0;cursor:pointer;color:#1677ff;"
      @click="handleBtnAction('treeModal-root-select')">
      {{ rootLabel }}
    </div>
    <bo-path-parent-selector :node="node" :expanded="expanded"
      :on-toggle="onToggle" :on-select="fnOnSelect" :depth="0" />
  </div>
</bo-modal>
`},window.BoRoleSelectModal={name:"BoRoleSelectModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:"\u{1F3AD} \uC5ED\uD560 \uC120\uD0DD"},confirmDisabled:{type:Boolean,default:!1},confirmLabel:{type:String,default:"\uC5ED\uD560 \uBD80\uC5EC"}},emits:["close","confirm"],setup(e,{emit:l}){return{handleBtnAction:(x,p={})=>{if(x==="roleModal-close")return l("close");if(x==="roleModal-confirm")return l("confirm");console.warn("[handleBtnAction] unknown cmd:",x)},handleSelectAction:(x,p={})=>{console.warn("[handleSelectAction] unknown cmd:",x)}}},template:`
<bo-modal :show="show" :title="title" width="1000px" height="720px" body-pad="0" @close="handleBtnAction('roleModal-close')">
  <template #header-extra>
    <slot name="header-extra">
    </slot>
  </template>
  <div style="display:grid;grid-template-columns:300px 1fr;flex:1;overflow:hidden;height:100%;">
    <div style="border-right:1px solid #eee;overflow-y:auto;padding:12px;">
      <slot name="tree">
      </slot>
    </div>
    <div style="overflow-y:auto;padding:12px;">
      <slot name="perm">
      </slot>
    </div>
  </div>
  <template #footer>
    <span style="margin-right:auto;">
      <slot name="footer-extra">
      </slot>
    </span>
    <button class="btn btn_cancel" @click="handleBtnAction('roleModal-close')">
      \uCDE8\uC18C
    </button>
    <button class="btn btn-primary" :disabled="confirmDisabled" @click="handleBtnAction('roleModal-confirm')">
      \u2714 {{ confirmLabel }}
    </button>
  </template>
</bo-modal>
`},window.BoRowCancelDelete={name:"BoRowCancelDelete",props:{row:{type:Object,required:!0},allowDeleteNull:{type:Boolean,default:!1},cancelLabel:{type:String,default:"\uCDE8\uC18C"},deleteLabel:{type:String,default:"\uC0AD\uC81C"}},emits:["cancel","delete"],setup(e,{emit:l}){const i=Vue.computed(()=>["U","I","D"].includes(e.row._row_status)),u=Vue.computed(()=>{const g=e.row._row_status;return e.allowDeleteNull&&g==null?!0:g==="N"});return{cfShowCancel:i,cfShowDelete:u,handleBtnAction:(g,y={})=>{if(g==="row-cancel")return l("cancel");if(g==="row-delete")return l("delete");console.warn("[handleBtnAction] unknown cmd:",g)},handleSelectAction:(g,y={})=>{console.warn("[handleSelectAction] unknown cmd:",g)}}},template:`
<span>
  <button v-if="cfShowCancel" class="btn btn-secondary btn-xs" @click.stop="handleBtnAction('row-cancel')">
    {{ cancelLabel }}
  </button>
  <button v-if="cfShowDelete" class="btn btn_row_delete" @click.stop="handleBtnAction('row-delete')">
    {{ deleteLabel }}
  </button>
</span>
`},window.BoFormArea={name:"BoFormArea",props:{columns:{type:Array,required:!0},form:{type:Object,default:()=>({})},errors:{type:Object,default:()=>({})},readonly:{type:Boolean,default:!1},cols:{type:Number,default:3},labelLeft:{type:Boolean,default:!1},labelWidth:{type:String,default:"90px"},compact:{type:Boolean,default:!1},plainReadonly:{type:Boolean,default:!1},showActions:{type:Boolean,default:!0},saveLabel:{type:String,default:"\uC800\uC7A5"},cancelLabel:{type:String,default:"\uCDE8\uC18C"},editLabel:{type:String,default:"\uC218\uC815"},closeLabel:{type:String,default:"\uB2EB\uAE30"},deleteLabel:{type:String,default:"\uC0AD\uC81C"},showDelete:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0}},emits:["save","cancel","edit","close","delete"],setup(e,{emit:l}){const i=window._boAreaCompUtil,u=["textarea","htmlEditor","group"],x=r=>r.colSpan!=null?Math.min(r.colSpan,e.cols):u.includes(r.type)?e.cols:1,p=Vue.computed(()=>{const r=[];let d=[],f=0;for(const w of e.columns){if(w.visible&&!w.visible(e.form))continue;if(w.type==="rowBreak"){d.length&&(r.push(d),d=[],f=0);continue}if(w.type==="group"){d.length&&(r.push(d),d=[],f=0),r.push([w]);continue}const A=x(w);f+A>e.cols&&d.length&&(r.push(d),d=[],f=0),d.push(w),f+=A,f>=e.cols&&(r.push(d),d=[],f=0)}return d.length&&r.push(d),r}),g=r=>{const d=x(r),f=r.rowSpan||1;let w="";return d>1&&(w+=`grid-column:span ${Math.min(d,e.cols)};flex:${d};`),f>1&&(w+=`grid-row:span ${f};`),e.labelLeft&&r.type!=="group"&&(w+=`display:grid;grid-template-columns:${e.labelWidth} 1fr;align-items:center;gap:8px;margin-bottom:${e.compact?"2px":"6px"};`),w},y=(r,d={})=>{if(r==="form-save")return l("save");if(r==="form-cancel")return l("cancel");if(r==="form-edit")return l("edit");if(r==="form-close")return l("close");if(r==="form-delete")return l("delete");r==="form-pathPick-clear"?e.form[d.col.key]=null:r==="form-pick-clear"?(e.form[d.col.key]="",d.col.nameKey&&(e.form[d.col.nameKey]=""),d.col.onClear&&d.col.onClear(e.form)):console.warn("[handleBtnAction] unknown cmd:",r)},k=(r,d={})=>{if(r==="field-change"){if(e.errors){const f=d.col,w=e.form[f.key];if(f.validate){const A=f.validate(w,e.form);A?e.errors[f.key]=A:e.errors[f.key]&&delete e.errors[f.key]}else e.errors[f.key]&&w&&delete e.errors[f.key]}if(d.col.onChange)return d.col.onChange(e.form[d.col.key],e.form,d.event)}else if(r==="field-checkbox-change"){const f=d.col,w=d.event;e.form[f.key]=w.target.checked?f.checkedValue!=null?f.checkedValue:"Y":f.uncheckedValue!=null?f.uncheckedValue:"N",e.errors&&e.errors[f.key]&&e.form[f.key]&&delete e.errors[f.key]}else if(r==="field-pathPick-open"){if(d.col.onOpen)return d.col.onOpen(e.form)}else if(r==="field-pick-open"){if(d.col.onOpen)return d.col.onOpen(e.form)}else console.warn("[handleSelectAction] unknown cmd:",r)},P=r=>i.normOptions(r);return{fnColLabel:r=>coUtil.cofColLabel(r),fnColNm:r=>coUtil.cofColNm(r),cfRows:p,cfFieldStyle:g,normOpts:P,dispVal:r=>{const d=e.form[r.key];if(r.fmt)return r.fmt(d,e.form);if(r.type==="select"){const f=P(r.options).find(w=>String(w.value)===String(d));if(f)return f.label}else if(r.type==="checkbox"){const f=r.checkedValue!=null?r.checkedValue:"Y";return d===f?r.checkboxLabel||r.label:"-"}else if(r.type==="multiCheck"){const f=r.separator||"^",w=String(d||"").split(f).filter(Boolean);if(!w.length)return"-";const A=P(r.options);return w.map(b=>(A.find(C=>String(C.value)===b)||{}).label||b).join(", ")}return d==null||d===""?"-":d},fnAutoPlain:r=>e.readonly&&e.plainReadonly&&!["slot","pathPick","pick","readonly","group","rowBreak"].includes(r.type),handleBtnAction:y,handleSelectAction:k}},template:`
<div class="bo-form-area" :class="compact?'bo-form-compact':''">
  <div v-for="(row, ri) in cfRows" :key="ri" class="form-row" :class="cols===3?'col3':''" :style="(cols!==2 ? cols!==3 : false) ? ('grid-template-columns:repeat('+cols+',1fr)') : ''">
    <div v-for="col in row" :key="col.key || col.label" class="form-group" :class="plainReadonly && (col.type==='readonly' || fnAutoPlain(col)) ? 'form-group-plain' : ''" :style="cfFieldStyle(col)">
    <!-- \uC911\uAC04\uADF8\uB8F9 \uC81C\uBAA9 (\uB77C\uBCA8/\uC785\uB825 \uC5C6\uC774 \uC139\uC158 \uD5E4\uB354\uB9CC) -->
    <div v-if="col.type === 'group'" class="section-title" :style="ri===0?'margin-top:0;':''">
    {{ fnColLabel(col) }}
    <span v-if="col.desc" :title="col.desc"
      style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#e2e8f0;color:#64748b;font-size:10px;font-style:normal;font-weight:700;margin-left:5px;cursor:help;vertical-align:middle;">
      i
    </span>
  </div>
    <!-- \uB77C\uBCA8 (hideLabel:true \uBA74 \uB77C\uBCA8 \uC601\uC5ED\uB9CC \uBE48 \uCE78\uC73C\uB85C \uC790\uB9AC \uC720\uC9C0)
         slot \uD0C0\uC785\uB3C4 col.label \uC774 \uC788\uC73C\uBA74 \uC704\uCABD \uB77C\uBCA8 \uBAA8\uB4DC\uC5D0\uC11C \uC790\uB3D9 \uB80C\uB354 (\uB77C\uBCA8 \uB204\uB77D \uBC29\uC9C0).
         \uB2E8, labelLeft \uBAA8\uB4DC + slot \uC758 \uACBD\uC6B0 grid \uCCAB \uCE78 \uCC44\uC6B0\uAE30 \uC704\uD574 \uBCC4\uB3C4 \uB80C\uB354 \uBD84\uAE30. -->
    <label v-else-if="col.type !== 'slot' ? (!col.hideLabel) : false" class="form-label" :style="labelLeft?'margin-bottom:0;white-space:nowrap;':''">
    {{ fnColLabel(col) }}
    <span v-if="col.required ? (!readonly) : false" class="req">
    *
  </span>
    <span v-if="col.helpText" :title="col.helpText"
      style="display:inline-flex;align-items:center;justify-content:center;width:13px;height:13px;border-radius:50%;background:#e2e8f0;color:#64748b;font-size:9px;font-style:normal;font-weight:700;margin-left:5px;cursor:help;vertical-align:middle;">
    i
  </span>
    <span v-if="col.hint" class="form-hint" style="font-size:11px;color:#888;font-weight:400;margin-left:6px;">
    {{ col.hint }}
  </span>
</label>
<label v-else-if="col.type !== 'slot' ? (col.hideLabel) : false" class="form-label" :style="'visibility:hidden;'+(labelLeft?'margin-bottom:0;':'')">
\xB7
</label>
<label v-else-if="col.type === 'slot' ? (labelLeft ? (col.label ? (!col.hideLabel) : false) : false) : false" class="form-label" style="margin-bottom:0;white-space:nowrap;">
{{ fnColLabel(col) }}
<span v-if="col.required ? (!readonly) : false" class="req">
*
</span>
<span v-if="col.helpText" :title="col.helpText"
  style="display:inline-flex;align-items:center;justify-content:center;width:13px;height:13px;border-radius:50%;background:#e2e8f0;color:#64748b;font-size:9px;font-style:normal;font-weight:700;margin-left:5px;cursor:help;vertical-align:middle;">
i
</span>
</label>
<label v-else-if="col.type === 'slot' ? (!labelLeft ? (col.label ? (!col.hideLabel) : false) : false) : false" class="form-label">
{{ fnColLabel(col) }}
<span v-if="col.required ? (!readonly) : false" class="req">
*
</span>
<span v-if="col.helpText" :title="col.helpText"
  style="display:inline-flex;align-items:center;justify-content:center;width:13px;height:13px;border-radius:50%;background:#e2e8f0;color:#64748b;font-size:9px;font-style:normal;font-weight:700;margin-left:5px;cursor:help;vertical-align:middle;">
i
</span>
<span v-if="col.hint" class="form-hint" style="font-size:11px;color:#888;font-weight:400;margin-left:6px;">
{{ col.hint }}
</span>
</label>
<!-- readonly \uD45C\uC2DC -->
<div v-if="col.type === 'readonly' ? (col.html) : false" :class="plainReadonly ? 'readonly-field-plain' : 'readonly-field'" v-html="dispVal(col)">
</div>
<div v-else-if="col.type === 'readonly'" :class="plainReadonly ? 'readonly-field-plain' : 'readonly-field'">
  {{ dispVal(col) }}
</div>
<!-- plainReadonly \uC790\uB3D9 \uBCC0\uD658 \u2014 \uD3FC\uC774 readonly \uC77C \uB54C \uC785\uB825\uD615 \uCEEC\uB7FC(text/select/date \uB4F1)\uB3C4 \uB77C\uBCA8\uCC98\uB7FC \uD45C\uC2DC -->
<div v-else-if="fnAutoPlain(col)" class="readonly-field-plain">
  {{ dispVal(col) }}
</div>
<!-- text / password -->
<input v-else-if="col.type === 'text' || col.type === 'password'"
        class="form-control" :type="col.type === 'password' ? 'password' : 'text'"
        v-model="form[col.key]" :placeholder="col.placeholder"
        :readonly="readonly || col.readonly"
        :style="(col.mono ? 'font-family:monospace;' : '') + (col.width ? ('width:' + col.width + ';') : '') + (col.readonly ? 'background:#f5f5f5;' : '')"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })" />
<!-- number -->
<input v-else-if="col.type === 'number'" class="form-control" type="number"
        v-model.number="form[col.key]" :placeholder="col.placeholder"
        :readonly="readonly || col.readonly" :min="col.min" :max="col.max"
        :style="col.readonly ? 'background:#f5f5f5;' : ''"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })" />
<!-- date -->
<input v-else-if="col.type === 'date'" class="form-control" type="date"
        v-model="form[col.key]" :readonly="readonly"
        :class="errors[col.key] ? 'is-invalid' : ''" @change="handleSelectAction('field-change', { col, event: $event })" />
<!-- multiCheck (^A^B^ \uBA40\uD2F0\uAC12) \u2014 BoSearchArea \uC640 \uAC19\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD3FC\uC5D0\uC11C\uB3C4 \uC4F4\uB2E4 -->
<bo-multi-check-select v-else-if="col.type === 'multiCheck'"
      :model-value="form[col.key]"
      :options="typeof col.options === 'function' ? col.options() : (col.options || [])"
      :placeholder="col.placeholder || '\uC120\uD0DD'" :all-label="col.allLabel || '\uC804\uCCB4'"
      :separator="col.separator || '^'" :empty-value="col.emptyValue"
      :min-width="col.width || '180px'" :disabled="readonly"
      @update:modelValue="v => { form[col.key] = v; handleSelectAction('field-change', { col }); }" />
<!-- checkbox (Y/N \uD1A0\uAE00) -->
<label v-else-if="col.type === 'checkbox'" style="display:flex;align-items:center;gap:6px;cursor:pointer;min-height:34px;position:relative;z-index:1;pointer-events:auto;">
  <input type="checkbox"
          :checked="form[col.key] === (col.checkedValue != null ? col.checkedValue : 'Y')"
          :disabled="readonly"
          style="pointer-events:auto;cursor:pointer;width:14px;height:14px;flex-shrink:0;"
          @change="handleSelectAction('field-checkbox-change', { col, event: $event })" />
  <span>
    {{ col.checkboxLabel || col.label }}
  </span>
</label>
<!-- textarea -->
<textarea v-else-if="col.type === 'textarea'" class="form-control"
        v-model="form[col.key]" :placeholder="col.placeholder"
        :readonly="readonly" :rows="col.rows || 3"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @input="handleSelectAction('field-change', { col, event: $event })"></textarea>
  <!-- select -->
  <select v-else-if="col.type === 'select'" class="form-control"
        v-model="form[col.key]" :disabled="readonly"
        :class="errors[col.key] ? 'is-invalid' : ''"
        @change="handleSelectAction('field-change', { col, event: $event })">
    <option v-if="col.nullable !== false ? (col.nullLabel) : false" value="">{{ col.nullLabel }}</option>
  <option v-for="o in normOpts(col.options)" :key="o.value" :value="o.value">{{ o.label }}</option>
</select>
<!-- pathPick (\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD \uBC15\uC2A4) \u2014 readonly+plainReadonly \uBA74 \uB2E4\uB978 \uD544\uB4DC\uC640 \uB3D9\uC77C\uD558\uAC8C \uC21C\uC218 \uB77C\uBCA8(readonly-field-plain)\uB85C \uD45C\uC2DC -->
<div v-if="col.type === 'pathPick' ? (readonly && plainReadonly) : false" class="readonly-field-plain">
  {{ col.pathLabel ? (col.pathLabel(form[col.key]) || '-') : (form[col.key] != null ? '#' + form[col.key] : '-') }}
</div>
<div v-else-if="col.type === 'pathPick'" style="display:flex;align-items:center;gap:8px;">
  <div :style="{flex:1,padding:compact?'4px 10px':'6px 10px',border:'1px solid #e5e7eb',borderRadius:'5px',fontSize:'13px',background:readonly?'#f9fafb':'#fff',color:form[col.key]!=null?'#374151':'#9ca3af',minHeight:compact?'28px':'34px',display:'flex',alignItems:'center'}">
    {{ col.pathLabel ? col.pathLabel(form[col.key]) : (form[col.key] != null ? '#' + form[col.key] : '\uACBD\uB85C \uC120\uD0DD...') }}
  </div>
  <span v-if="!readonly" style="display:inline-flex;align-items:center;flex-shrink:0;align-self:stretch;">
    <button type="button" class="btn btn-secondary btn-sm" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" @click="handleSelectAction('field-pathPick-open', { col })" :style="{padding:'0',width:compact?'28px':'34px',height:compact?'28px':'34px',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}">\u{1F50D}</button>
    <button v-if="form[col.key] != null" type="button" title="\uC120\uD0DD \uD574\uC81C" @click="handleBtnAction('form-pathPick-clear', { col })" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;">x</button>
  </span>
</div>
<!-- pick (\uD31D\uC5C5 \uC120\uD0DD \uBC15\uC2A4) \u2014 col.onOpen(form) \uC73C\uB85C \uD31D\uC5C5 \uC5F4\uAE30, col.nameKey \uB85C \uD45C\uC2DC\uBA85 \uD0A4 \uC9C0\uC815 -->
<!-- readonly+plainReadonly \uBA74 \uB2E4\uB978 \uD544\uB4DC\uC640 \uB3D9\uC77C\uD558\uAC8C \uC21C\uC218 \uB77C\uBCA8(readonly-field-plain)\uB85C \uD45C\uC2DC -->
<div v-if="col.type === 'pick' ? (readonly && plainReadonly) : false" class="readonly-field-plain">
  {{ (col.display ? col.display(form) : (col.nameKey ? form[col.nameKey] : form[col.key])) || '-' }}
</div>
<div v-else-if="col.type === 'pick'" style="display:flex;align-items:center;gap:6px;">
  <input :value="col.display ? col.display(form) : (col.nameKey ? (form[col.nameKey] || '') : (form[col.key] || ''))"
    readonly :placeholder="col.placeholder || '\uC120\uD0DD'"
    class="form-control" :style="'background:#f9f9f9;' + (col.width ? ('width:' + col.width) : '')" />
  <span style="display:inline-flex;align-items:center;flex-shrink:0;">
    <button v-if="!readonly" type="button" class="btn btn-secondary btn-sm" title="\uC120\uD0DD"
      style="padding:0;width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;"
      @click="handleSelectAction('field-pick-open', { col })">\u{1F50D}</button>
    <button v-if="!readonly ? form[col.key] : false" type="button" title="\uC120\uD0DD \uD574\uC81C"
      style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;"
      @click="handleBtnAction('form-pick-clear', { col })">x</button>
  </span>
</div>
<!-- slot \uD0C8\uCD9C\uAD6C -->
<slot v-else-if="col.type === 'slot'" :name="col.name || col.key" :form="form" :col="col" :readonly="readonly">
</slot>
<!-- \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 (\uD78C\uD2B8\uB294 \uB77C\uBCA8 \uC6B0\uCE21\uC5D0 \uD45C\uC2DC) \u2014 slot \uC740 \uC790\uCCB4 \uC2AC\uB86F \uB0B4\uBD80\uC5D0\uC11C \uC9C1\uC811 \uB80C\uB354(\uC911\uBCF5 \uBC29\uC9C0) -->
<span v-if="col.type !== 'slot' && errors[col.key]" class="field-error">
  {{ errors[col.key] }}
</span>
</div>
</div>
<!-- \u25BC form-actions \uC601\uC5ED \u2014 BoFormActions \uB85C \uBD84\uB9AC(2026-08-25). \uD45C\uC900 \uBC84\uD2BC \uC138\uD2B8 \uC815\uC758\uB294 \uADF8 \uCEF4\uD3EC\uB10C\uD2B8 \uD55C \uACF3\uB9CC \uC720\uC9C0 -->
<bo-form-actions v-if="showActions" :readonly="readonly" :compact="compact"
  :show-delete="showDelete" :show-cancel="showCancel"
  :save-label="saveLabel" :cancel-label="cancelLabel" :edit-label="editLabel" :close-label="closeLabel" :delete-label="deleteLabel"
  cmd-prefix="form" :on-dispatch="handleBtnAction">
  <template #actions-before>
    <slot name="actions-before">
    </slot>
  </template>
  <template #actions-after>
    <slot name="actions-after">
    </slot>
  </template>
</bo-form-actions>
</div>
`},window.BoFormActions={name:"BoFormActions",props:{readonly:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},isNew:{type:Boolean,default:!1},saveDisabled:{type:Boolean,default:!1},saveTitle:{type:String,default:""},saveLabel:{type:String,default:"\uC800\uC7A5"},cancelLabel:{type:String,default:"\uCDE8\uC18C"},editLabel:{type:String,default:"\uC218\uC815"},closeLabel:{type:String,default:"\uB2EB\uAE30"},deleteLabel:{type:String,default:"\uC0AD\uC81C"},cmdPrefix:{type:String,default:""},onDispatch:{type:Function,default:null},btnStyle:{type:String,default:""},editClick:{type:Function,default:null},saveClick:{type:Function,default:null},deleteClick:{type:Function,default:null},cancelClick:{type:Function,default:null},closeClick:{type:Function,default:null}},emits:["save","cancel","edit","close","delete"],setup(e,{emit:l}){const i=p=>{const g=e[p+"Click"];if(typeof g=="function")return g();if(e.cmdPrefix&&e.onDispatch)return e.onDispatch(e.cmdPrefix+"-"+p);l(p)},u=Vue.computed(()=>!e.isNew&&(e.showDelete||!!e.deleteClick)),x=Vue.computed(()=>e.showCancel&&!e.isNew);return{fire:i,cfShowDelete:u,cfShowCancel:x}},template:`
<div class="form-actions">
  <slot name="actions-before">
  </slot>
  <template v-if="readonly">
    <button class="btn btn_edit" :class="compact?'btn-sm':''" :style="btnStyle" @click="fire('edit')">
      {{ editLabel }}
    </button>
    <button v-if="cfShowDelete" class="btn btn_delete" :class="compact?'btn-sm':''" :style="btnStyle" @click="fire('delete')">
      {{ deleteLabel }}
    </button>
    <button class="btn btn_close" :class="compact?'btn-sm':''" :style="btnStyle" @click="fire('close')">
      {{ closeLabel }}
    </button>
  </template>
  <template v-else>
    <!-- 2026-08-30: \uD328\uD134 A \uD655\uC815 \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70. \uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC [\uC0AD\uC81C] \uC720\uC9C0(cfShowDelete
         \uB294 \uADF8\uCABD \uBD84\uAE30\uC5D0\uC11C\uB9CC \uCC38\uC870). \uD3B8\uC9D1 \uC911\uC5D4 \uC800\uC7A5/\uCDE8\uC18C\uC640 \uB098\uB780\uD788 \uB450\uBA74 \uC624\uC870\uC791 \uC704\uD5D8\uC774 \uC788\uC5B4, "\uC9C0\uC6B0\uACE0
         \uC2F6\uC73C\uBA74 \uD3B8\uC9D1 \uB4E4\uC5B4\uAC00\uC9C0 \uB9D0\uACE0 \uBCF4\uAE30\uC5D0\uC11C \uC9C0\uC6B0\uB3C4\uB85D" \uD1B5\uC77C(\uC815\uCC45\uC11C \xA7Dtl \uBCF4\uAE30/\uD3B8\uC9D1\uBAA8\uB4DC \uD45C\uC900 \uBC84\uD2BC). -->
    <button class="btn btn_save" :class="compact?'btn-sm':''" :style="btnStyle" :disabled="saveDisabled" :title="saveTitle" @click="fire('save')">
      {{ saveLabel }}
    </button>
    <button v-if="cfShowCancel" class="btn btn_cancel" :class="compact?'btn-sm':''" :style="btnStyle" @click="fire('cancel')">
      {{ cancelLabel }}
    </button>
    <button class="btn btn_close" :class="compact?'btn-sm':''" :style="btnStyle" @click="fire('close')">
      {{ closeLabel }}
    </button>
  </template>
  <slot name="actions-after">
  </slot>
</div>
`},window.BoGroupTable={name:"BoGroupTable",props:{columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},selectedKey:{type:[String,Number],default:null},tableStyle:{type:String,default:""},loading:{type:Boolean,default:!1},emptyText:{type:String,default:"\uC870\uD68C \uACB0\uACFC \uC5C6\uC74C"},summaryRow:{type:Object,default:null},summaryPos:{type:String,default:"bottom"},summaryLabel:{type:String,default:"\uD569\uACC4"},summaryBg:{type:String,default:"#1e2f4a"},summaryBorderColor:{type:String,default:"#2563eb"},summaryTextColor:{type:String,default:"#e8f4ff"},striped:{type:Boolean,default:!0},hoverBg:{type:String,default:"#dbeafe"},stripeBg:{type:String,default:"#f7f8fc"},colBorder:{type:String,default:""},maxHeight:{type:String,default:""}},emits:["cell-click"],setup(e,{emit:l}){const{computed:i,ref:u}=Vue,x=u(null),p=i(()=>e.maxHeight?`max-height:${e.maxHeight};overflow:auto;`:"overflow-x:auto;"),g=i(()=>e.columns),y=i(()=>e.columns.map(c=>c.colGroup?c.colGroup.split("^").map(h=>h.trim()).filter(Boolean):[])),k=i(()=>{let c=0;for(const h of y.value)h.length>c&&(c=h.length);return c}),P=i(()=>{const c={};for(const h of e.columns)h.colGroup&&!c[h.colGroup]&&(c[h.colGroup]=h);return c}),S=i(()=>e.columns.filter(c=>c.pin==="left").length),T=i(()=>{const c={};let h=0;for(const m of e.columns)m.pin==="left"&&(c[m.key]=h,h+=m.width||60);return c}),F=i(()=>{const c={};let h=0;for(let m=e.columns.length-1;m>=0;m--){const K=e.columns[m];K.pin==="right"&&(c[K.key]=h,h+=K.width||60)}return c}),R=i(()=>{let c=null;for(const h of e.columns)h.pin==="left"&&(c=h.key);return c}),r=i(()=>{for(const c of e.columns)if(c.pin==="right")return c.key;return null}),d=(c,h,m)=>{if(!c.pin)return"";const K=m!=null&&e.selectedKey!=null&&m[e.rowKey]===e.selectedKey;let H="position:sticky;z-index:"+h+";";const B=[];if(c.pin==="left"){const s=T.value[c.key]||0;H+="left:"+s+"px;",K&&(s===0&&B.push("inset 2px 0 0 #2563eb"),B.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),c.key===R.value&&B.push("inset -2px 0 0 #94a3b8","3px 0 4px rgba(0,0,0,.08)")}else H+="right:"+(F.value[c.key]||0)+"px;",K&&B.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),c.key===r.value&&B.push("inset 2px 0 0 #94a3b8","-3px 0 4px rgba(0,0,0,.08)");return B.length&&(H+="box-shadow:"+B.join(",")+";"),H},f=(c,h)=>{if(!c)return"";const m=String(c).split("^");return m[Math.min(h,m.length-1)]},w=i(()=>{const c=e.columns,h=y.value,K=k.value+1,H=[];for(let B=0;B<K;B++){const s=[];let t=0;for(;t<c.length;){const o=c[t],v=h[t];if(v.length===0)B===0&&s.push({key:o.key,label:o.label,rowspan:K,colspan:1,title:o.headerTip||"",thStyle:"text-align:center;vertical-align:middle;"+(o.width?"width:"+o.width+"px;":"")+(o.pin?"background:"+(o.thBg||"linear-gradient(180deg,#dbebfa,#b7d3f2)")+";color:#1d4d78;border-bottom:2px solid #4a8ac2;":"")+d(o,5)+(o.thStyle||"")}),t++;else if(B<v.length){let L=0;for(;t+L<c.length;){const X=h[t+L];if(!X||X.length===0)break;let ee=X.length>B;if(ee){for(let J=0;J<=B;J++)if((X[J]||"")!==(v[J]||"")){ee=!1;break}}if(!ee)break;L++}const z=c[t],N=f(z.colGroupBg,B),Y=f(z.colGroupColor,B),G=f(z.colGroupBorderColor,B)?"#94a3b8":"",$=c[t+L-1],Z=z.pin?d(z,5)+($&&$.key===R.value?"border-right:2px solid #94a3b8;":""):"",Q=["text-align:center;vertical-align:middle;padding:4px;",B>0?"font-size:10px;":"",N?"background:"+N+";":"",Y?"color:"+Y+";":"",G?"border-left:2px solid "+G+";border-right:2px solid "+G+";":"",Z].join("");s.push({key:"__g"+B+"_"+t,label:v[B],rowspan:1,colspan:L,thStyle:Q}),t+=L}else if(B===v.length){const L=P.value[o.colGroup]||o,z=f(L.colGroupBorderColor,B-1)?"#94a3b8":"",N=t===0||(h[t-1]||[]).join("^")!==v.join("^"),Y=t>=c.length-1||(h[t+1]||[]).join("^")!==v.join("^"),G=f(L.colGroupBg,B-1);s.push({key:o.key,label:o.label,rowspan:K-B,colspan:1,title:o.headerTip||"",thStyle:["text-align:center;vertical-align:middle;",o.thBg?"background:"+o.thBg+";":G?"background:"+G+";":"",o.thColor?"color:"+o.thColor+";font-weight:700;":"",N&&z?"border-left:2px solid "+z+";":"",Y&&z?"border-right:2px solid "+z+";":"",o.width?"min-width:"+o.width+"px;":"",d(o,5)].join("")}),t++}else t++}H.push(s)}return H}),A=(c,h)=>{const m=e.selectedKey!=null&&c[e.rowKey]===e.selectedKey;return x.value===c[e.rowKey]?e.hoverBg:m?"#f0f5ff":e.striped&&h%2!==0?e.stripeBg:"#fff"},b=i(()=>{const c=y.value,h="#94a3b8";return e.columns.map((m,K)=>{if(!m.colGroup)return null;const H=K===0||(c[K-1]||[]).join("^")!==c[K].join("^"),B=K>=e.columns.length-1||(c[K+1]||[]).join("^")!==c[K].join("^");return{isFirst:H,isLast:B,bc:h}})}),C=(c,h,m,K)=>{const H=c.tdStyle?c.tdStyle(h):"text-align:"+(c.align||"center")+";",B=e.colBorder?H+"border-right:"+e.colBorder+";":H,s=b.value[K],t=s?(s.isFirst?"border-left:2px solid "+s.bc+";":"")+(s.isLast?"border-right:2px solid "+s.bc+";":""):"";return B+t+"background:"+A(h,m)+";"+d(c,1,h)},M=(c,h)=>{const m=e.selectedKey!=null&&c[e.rowKey]===e.selectedKey;let K="cursor:pointer;font-size:12px;background:"+A(c,h)+";";return m&&(K+="outline:2px solid #2563eb;outline-offset:-1px;"),K},E=(c,h)=>l("cell-click",{row:c,idx:h}),D=(c,h,m)=>{c.stopPropagation(),h.onBadgeClick(m,h,c)},U=c=>{x.value=c[e.rowKey]},V=()=>{x.value=null},O=i(()=>{const c=y.value;for(let h=0;h<e.columns.length;h++)if(c[h].length===0)return e.columns[h].key;return null}),I=i(()=>{if(!e.summaryRow)return[];const c=y.value,h=O.value;return e.columns.map((m,K)=>{const H=d(m,3)+(m.pin?"background:"+e.summaryBg+";":""),B=(m.tdStyle?m.tdStyle(e.summaryRow):"text-align:"+(m.align||"center")+";")+H;if(m.key===h)return{tdSt:B,type:"label"};if(c[K].length===0)return{tdSt:"text-align:center;"+H,type:"blank"};if(m.fmt){const t=m.cellStyle?m.cellStyle(e.summaryRow):"";return{tdSt:B,type:"fmt",val:m.fmt(e.summaryRow,-1),cs:t}}const s=e.summaryRow[m.key];return{tdSt:B,type:"text",val:s!=null?s:""}})});return{cfLeafCols:g,cfHeaderRows:w,cfPinLeftCount:S,fnTdStyle:C,fnRowStyle:M,onCellClick:E,handleBadgeClick:D,cfSummaryTdList:I,hoveredKey:x,onRowMouseEnter:U,onRowMouseLeave:V,cfWrapStyle:p}},template:`
<div :style="cfWrapStyle">
  <table class="bo-table" :style="tableStyle || 'table-layout:fixed;width:100%;'">
    <colgroup>
      <col v-for="col in cfLeafCols" :key="col.key"
        :style="col.width ? 'width:' + col.width + 'px;min-width:' + col.width + 'px;' : ''">
    </colgroup>
    <thead>
      <tr v-for="(hRow, rIdx) in cfHeaderRows" :key="rIdx"
        :style="rIdx === 0 ? 'background:#f0f4f8;font-size:11px;color:#555;' : 'background:#f8faff;font-size:10px;color:#444;'">
        <th v-for="th in hRow" :key="th.key"
          :rowspan="th.rowspan" :colspan="th.colspan" :title="th.title || ''"
          :style="th.thStyle + (th.title ? 'cursor:help;' : '')">{{ th.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td :colspan="cfLeafCols.length"
          style="text-align:center;padding:40px;color:#bbb;font-size:13px;">\uC870\uD68C \uC911...</td>
      </tr>
      <tr v-else-if="!rows.length">
        <td :colspan="cfLeafCols.length"
          style="text-align:center;padding:40px;color:#bbb;font-size:13px;">{{ emptyText }}</td>
      </tr>
      <template v-else>
        <!-- \uD569\uACC4\uD589: top \uC704\uCE58. border \uB300\uC2E0 box-shadow \uC0AC\uC6A9 \u2014 border-collapse \uCC38\uC5EC \uC2DC \uB450\uAEBC\uC6B4 border\uAC00
             \uBC14\uB85C \uC544\uB798 1\uBC88 \uB370\uC774\uD130\uD589 \uC0C1\uB2E8 hit\uC601\uC5ED\uC744 \uCE68\uBC94\uD574 hover \uC548 \uBA39\uB294 \uBB38\uC81C \uBC29\uC9C0 -->
        <tr v-if="summaryRow ? summaryPos === 'top' : false" class="bo-summary-row"
          :style="'background:' + summaryBg + ';box-shadow:inset 0 -2.5px 0 0 ' + summaryBorderColor + ';'">
          <td v-for="(sc, si) in cfSummaryTdList" :key="'st' + si"
            :style="sc.tdSt + 'font-size:11px;font-weight:700;color:' + summaryTextColor + ';'">
            <span v-if="sc.type === 'label'" :style="'font-weight:900;letter-spacing:1px;color:' + summaryTextColor + ';'">{{ summaryLabel }}</span>
            <span v-else-if="sc.type === 'fmt'" :style="sc.cs ? sc.cs + ';color:' + summaryTextColor + ';' : 'color:' + summaryTextColor + ';'">{{ sc.val }}</span>
            <span v-else-if="sc.type === 'text'">{{ sc.val }}</span>
          </td>
        </tr>
        <!-- \uB370\uC774\uD130 \uD589 \u2014 row._groupHeader:true \uBA74 \uC804\uCCB4 \uD3ED \uBCD1\uD569 \uD589(#group-header \uC2AC\uB86F), \uADF8 \uC678\uB294 \uC77C\uBC18 \uCEEC\uB7FC\uBCC4 \uD589 -->
        <template v-for="(row, idx) in rows" :key="row[rowKey]">
          <tr v-if="row._groupHeader" class="bo-group-header-row">
            <!-- \uC88C\uCE21\uACE0\uC815 \uCEEC\uB7FC\uC774 \uC77C\uBD80 \uC788\uC73C\uBA74 \uADF8 \uD3ED\uB9CC\uD07C sticky \uC140\uB85C \uBD84\uB9AC(\uAC00\uB85C \uC2A4\uD06C\uB864\uD574\uB3C4 \uADF8\uB8F9\uD5E4\uB354 \uB0B4\uC6A9\uC774 \uC548 \uAC00\uB824\uC9D0) -->
            <template v-if="cfPinLeftCount > 0 ? (cfPinLeftCount < cfLeafCols.length) : false">
              <td :colspan="cfPinLeftCount" style="padding:0;position:sticky;left:0;z-index:4;background:#dbe5f7;box-shadow:inset -2px 0 0 #94a3b8;">
                <slot name="group-header" :row="row" :idx="idx" />
              </td>
              <td :colspan="cfLeafCols.length - cfPinLeftCount" style="padding:0;background:#dbe5f7;"></td>
            </template>
            <td v-else :colspan="cfLeafCols.length" style="padding:0;">
              <slot name="group-header" :row="row" :idx="idx" />
            </td>
          </tr>
          <tr v-else
            :style="fnRowStyle(row, idx)"
            @mouseenter="onRowMouseEnter(row)"
            @mouseleave="onRowMouseLeave()"
            @click="onCellClick(row, idx)">
            <td v-for="(col, ci) in cfLeafCols" :key="col.key"
              :title="col.titleFmt ? col.titleFmt(row) : ''"
              :style="fnTdStyle(col, row, idx, ci)">
              <slot v-if="col.slot" :name="'cell-' + col.key" :row="row" :idx="idx" />
              <template v-else-if="col.iconBadge">
                <span v-if="col.iconBadge(row)"
                  :style="'display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;border-radius:10px;padding:0 4px;font-size:11px;font-weight:700;background:' + col.iconBadge(row).bg + ';color:' + col.iconBadge(row).color + ';' + (col.onBadgeClick ? 'cursor:pointer;' : '')"
                  @click="col.onBadgeClick ? handleBadgeClick($event, col, row) : null">
                  {{ col.iconBadge(row).value }}
                </span>
                <span v-else style="color:#d8d8d8;">-</span>
              </template>
              <template v-else-if="col.check">
                <span :style="col.check(row) ? 'color:' + (col.checkColor || '#16a34a') + ';font-weight:700;font-size:15px;' : 'color:#e8e8e8;font-size:15px;'">
                  {{ col.check(row) ? '\u2713' : '\xB7' }}
                </span>
              </template>
              <template v-else-if="col.badge">
                <span :class="'badge ' + col.badge(row)" style="font-size:10px;">
                  {{ col.badgeLabel ? col.badgeLabel(row) : (col.fmt ? col.fmt(row, idx) : (row[col.key] || '-')) }}
                </span>
              </template>
              <template v-else>
                <span :style="col.cellStyle ? col.cellStyle(row) : ''">
                  {{ col.fmt ? col.fmt(row, idx) : (row[col.key] != null ? row[col.key] : '-') }}
                </span>
              </template>
            </td>
          </tr>
        </template>
        <!-- \uD569\uACC4\uD589: bottom \uC704\uCE58 (default). border \uB300\uC2E0 box-shadow \u2014 \uC704 top \uC704\uCE58\uC640 \uB3D9\uC77C \uC0AC\uC720 -->
        <tr v-if="summaryRow ? summaryPos !== 'top' : false" class="bo-summary-row"
          :style="'background:' + summaryBg + ';box-shadow:inset 0 2.5px 0 0 ' + summaryBorderColor + ';'">
          <td v-for="(sc, si) in cfSummaryTdList" :key="'sb' + si"
            :style="sc.tdSt + 'font-size:11px;font-weight:700;color:' + summaryTextColor + ';'">
            <span v-if="sc.type === 'label'" :style="'font-weight:900;letter-spacing:1px;color:' + summaryTextColor + ';'">{{ summaryLabel }}</span>
            <span v-else-if="sc.type === 'fmt'" :style="sc.cs ? sc.cs + ';color:' + summaryTextColor + ';' : 'color:' + summaryTextColor + ';'">{{ sc.val }}</span>
            <span v-else-if="sc.type === 'text'">{{ sc.val }}</span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>
  `},window.BoMatrix={name:"BoMatrix",props:{rows:{type:Array,default:()=>[]},cols:{type:Array,default:()=>[]},rowKey:{type:String,default:null},colKey:{type:String,default:null},rowLabel:{type:[String,Function],default:null},colLabel:{type:[String,Function],default:null},rowStyleKey:{type:String,default:null},colStyleKey:{type:String,default:null},corner:{type:String,default:""},orient:{type:String,default:"row"},cellType:{type:String,default:"checkbox"},cell:{type:Function,default:null},cellStyle:{type:Function,default:null},cellTitle:{type:Function,default:null},cellDisabled:{type:Function,default:null},options:{type:Array,default:()=>[]},allOn:{type:Function,default:null},headerToggle:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},stickyFirst:{type:Boolean,default:!0},maxHeight:{type:String,default:"420px"},cellWidth:{type:String,default:"62px"},emptyText:{type:String,default:"\uD45C\uC2DC\uD560 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."},tone:{type:String,default:"blue"},rowTotal:{type:Function,default:null},colTotal:{type:Function,default:null},grandTotal:{type:Function,default:null},totalLabel:{type:String,default:"\uD569\uACC4"}},emits:["cell-change","row-header","col-header"],setup(e,{emit:l}){const{computed:i}=Vue,u=i(()=>e.orient==="col"),x=i(()=>(u.value?e.cols:e.rows)||[]),p=i(()=>(u.value?e.rows:e.cols)||[]),g=i(()=>u.value?e.colKey:e.rowKey),y=i(()=>u.value?e.rowKey:e.colKey),k=(s,t)=>s?typeof t=="function"?t(s):typeof t=="string"?s[t]:s.nm||s.label||s.name||"":"",P=s=>k(s,u.value?e.colLabel:e.rowLabel),S=s=>k(s,u.value?e.rowLabel:e.colLabel),T=s=>R(s,u.value?e.colStyleKey:e.rowStyleKey),F=s=>R(s,u.value?e.rowStyleKey:e.colStyleKey),R=(s,t)=>{const o=(s&&t?s[t]:null)||"";return String(o).charAt(0)==="#"?o:""},r=(s,t)=>g.value&&s?s[g.value]:t,d=(s,t)=>y.value&&s?s[y.value]:t,f=(s,t)=>u.value?[t,s]:[s,t],w=(s,t)=>{const o=f(s,t);return e.cell?e.cell(o[0],o[1]):null},A=(s,t)=>{const o=f(s,t);return e.cellStyle&&e.cellStyle(o[0],o[1])||""},b=(s,t)=>{const o=f(s,t);return e.cellTitle&&e.cellTitle(o[0],o[1])||""},C=(s,t)=>{if(e.readonly)return!0;const o=f(s,t);return e.cellDisabled?!!e.cellDisabled(o[0],o[1]):!1},M=(s,t)=>{const o=t==="row"?p.value:x.value;if(!o.length)return!1;if(e.allOn){const v=u.value?t==="row"?"col":"row":t;return!!e.allOn(o,v,s)}return o.every(v=>!!w(t==="row"?s:v,t==="row"?v:s))},E=s=>l(u.value?"col-header":"row-header",s),D=s=>l(u.value?"row-header":"col-header",s),U=(s,t,o)=>{const v=f(s,t);l("cell-change",v[0],v[1],o)},V=(s,t)=>u.value?t:s,O=(s,t)=>u.value?s:t,I=i(()=>!!(e.rowTotal||e.colTotal||e.grandTotal)),c=(s,t)=>{const o=u.value?e.colTotal:e.rowTotal;return o?o(s,t):""},h=(s,t)=>{const o=u.value?e.rowTotal:e.colTotal;return o?o(s,t):""},m=i(()=>(e.options||[]).map(s=>typeof s=="string"?{value:s,label:s}:{value:s.value!=null?s.value:s.codeValue,label:s.label!=null?s.label:s.codeLabel})),K=i(()=>e.tone==="plain"?"#f5f5f5":"#dbeafe"),H=i(()=>e.tone==="plain"?"#fafafa":"#eff6ff"),B=i(()=>e.tone==="plain"?"#e0e0e0":"#bae0ff");return{cfRows:x,cfCols:p,fnRowK:r,fnColK:d,fnRowLabel:P,fnColLabel:S,fnRowSwatch:T,fnColSwatch:F,fnCellVal:w,fnCellStyle:A,fnCellTitle:b,fnCellOff:C,fnLineAllOn:M,onRowHead:E,onColHead:D,onCell:U,cfOpts:m,cfHeadBg:K,cfSideBg:H,cfLineC:B,fnSrcRowIdx:V,fnSrcColIdx:O,cfHasTotal:I,fnLineTotal:c,fnFootTotal:h}},template:`
<div>
  <div v-if="cfRows.length ? (cfCols.length === 0) : true"
    style="border:2px dashed #e4e4e4;border-radius:8px;padding:18px;text-align:center;color:#bbb;font-size:12px;">
    {{ emptyText }}
  </div>
  <div v-else :style="'overflow:auto;' + (maxHeight ? 'max-height:' + maxHeight + ';' : '')">
    <table style="border-collapse:collapse;font-size:11px;">
      <thead style="position:sticky;top:0;z-index:2;">
        <tr>
          <th :style="'padding:4px 8px;white-space:nowrap;min-width:80px;background:' + cfHeadBg + ';border:1px solid ' + cfLineC + ';' + (stickyFirst ? 'position:sticky;left:0;z-index:3;' : '')">
            <slot name="corner">{{ corner }}</slot>
          </th>
          <th v-for="(c, ci) in cfCols" :key="'mh-' + fnColK(c, ci)"
            :style="'padding:4px 6px;text-align:center;white-space:nowrap;background:' + cfHeadBg + ';border:1px solid ' + cfLineC + ';min-width:' + cellWidth + ';' + (readonly ? '' : 'cursor:pointer;')"
            @click="readonly ? null : onColHead(c)">
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <input v-if="headerToggle ? !readonly : false" type="checkbox"
                :checked="fnLineAllOn(c, 'col')" @click.stop
                @change="onColHead(c)" style="width:13px;height:13px;cursor:pointer;margin:0;" />
              <span>
                <span v-if="fnColSwatch(c)"
                  :style="'display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:2px;vertical-align:middle;border:1px solid #ddd;background:' + fnColSwatch(c)"></span>
                <slot name="col-label" :col="c" :idx="ci">{{ fnColLabel(c) }}</slot>
              </span>
            </div>
          </th>
          <th v-if="cfHasTotal"
            :style="'padding:4px 6px;text-align:center;white-space:nowrap;background:' + cfHeadBg + ';border:1px solid ' + cfLineC + ';min-width:70px;'">
            {{ totalLabel }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, ri) in cfRows" :key="'mr-' + fnRowK(r, ri)">
          <td :style="'padding:4px 8px;white-space:nowrap;font-weight:600;background:' + cfSideBg + ';border:1px solid ' + cfLineC + ';' + (stickyFirst ? 'position:sticky;left:0;z-index:1;' : '') + (readonly ? '' : 'cursor:pointer;')"
            @click="readonly ? null : onRowHead(r)">
            <div style="display:flex;align-items:center;gap:5px;">
              <input v-if="headerToggle ? !readonly : false" type="checkbox"
                :checked="fnLineAllOn(r, 'row')" @click.stop
                @change="onRowHead(r)" style="width:13px;height:13px;cursor:pointer;flex-shrink:0;" />
              <span v-if="fnRowSwatch(r)"
                :style="'display:inline-block;width:9px;height:9px;border-radius:2px;flex-shrink:0;border:1px solid #ddd;background:' + fnRowSwatch(r)"></span>
              <slot name="row-label" :row="r" :idx="ri">{{ fnRowLabel(r) }}</slot>
            </div>
          </td>
          <td v-for="(c, ci) in cfCols" :key="'mc-' + fnRowK(r, ri) + '-' + fnColK(c, ci)"
            :style="'padding:2px 3px;text-align:center;border:1px solid ' + cfLineC + ';' + fnCellStyle(r, c)"
            :title="fnCellTitle(r, c)">
            <slot name="cell" :row="r" :col="c" :row-idx="ri" :col-idx="ci"
              :src-row-idx="fnSrcRowIdx(ri, ci)" :src-col-idx="fnSrcColIdx(ri, ci)"
              :value="fnCellVal(r, c)" :disabled="fnCellOff(r, c)">
              <input v-if="cellType === 'checkbox'" type="checkbox"
                :checked="!!fnCellVal(r, c)" :disabled="fnCellOff(r, c)"
                @change="onCell(r, c, $event.target.checked)"
                style="width:13px;height:13px;cursor:pointer;" />
              <input v-else-if="cellType === 'number'" type="number" min="0"
                :value="fnCellVal(r, c)" :disabled="fnCellOff(r, c)"
                @input="onCell(r, c, Number($event.target.value) || 0)"
                :style="'width:' + cellWidth + ';font-size:11px;border:1px solid #cfe4ff;border-radius:3px;padding:2px 4px;height:21px;text-align:right;background:transparent;'" />
              <select v-else-if="cellType === 'select'"
                :value="fnCellVal(r, c)" :disabled="fnCellOff(r, c)"
                @change="onCell(r, c, $event.target.value)"
                style="font-size:11px;border:1px solid #cfe4ff;border-radius:3px;padding:1px 2px;height:21px;background:transparent;">
                <option v-for="o in cfOpts" :key="'mo-' + o.value" :value="o.value">{{ o.label }}</option>
              </select>
              <input v-else-if="cellType === 'text'" type="text"
                :value="fnCellVal(r, c)" :disabled="fnCellOff(r, c)"
                @input="onCell(r, c, $event.target.value)"
                :style="'width:' + cellWidth + ';font-size:11px;border:1px solid #cfe4ff;border-radius:3px;padding:2px 4px;height:21px;background:transparent;'" />
              <span v-else>{{ fnCellVal(r, c) }}</span>
            </slot>
          </td>
          <td v-if="cfHasTotal"
            :style="'padding:2px 6px;text-align:right;font-weight:700;background:' + cfSideBg + ';border:1px solid ' + cfLineC + ';'">
            {{ fnLineTotal(r, ri) }}
          </td>
        </tr>
      </tbody>
      <tfoot v-if="cfHasTotal">
        <tr>
          <td :style="'padding:4px 8px;font-weight:700;background:' + cfSideBg + ';border:1px solid ' + cfLineC + ';' + (stickyFirst ? 'position:sticky;left:0;z-index:1;' : '')">
            {{ totalLabel }}
          </td>
          <td v-for="(c, ci) in cfCols" :key="'mf-' + fnColK(c, ci)"
            :style="'padding:2px 6px;text-align:right;font-weight:700;background:' + cfSideBg + ';border:1px solid ' + cfLineC + ';'">
            {{ fnFootTotal(c, ci) }}
          </td>
          <td :style="'padding:2px 6px;text-align:right;font-weight:700;background:' + cfHeadBg + ';border:1px solid ' + cfLineC + ';'">
            {{ grandTotal ? grandTotal() : '' }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
  `},window.BoStatRow={name:"BoStatRow",props:{title:{type:String,default:""},titleBg:{type:String,default:"#f5f5f5"},titleColor:{type:String,default:"#555"},borderColor:{type:String,default:"#e0e0e0"},items:{type:Array,default:()=>[]}},template:`
<div :style="'display:grid;grid-template-columns:auto repeat(' + items.length + ',1fr);gap:0;border:1px solid ' + borderColor + ';border-radius:8px;overflow:hidden;margin-bottom:5px;'">
  <div :style="'display:flex;align-items:center;justify-content:center;padding:4px 10px;background:' + titleBg + ';border-right:1px solid ' + borderColor + ';writing-mode:vertical-rl;font-size:10px;font-weight:700;color:' + titleColor + ';letter-spacing:2px;'">{{ title }}</div>
  <div v-for="(it, i) in items" :key="i"
    :style="'padding:5px ' + (items.length > 4 ? '8' : '10') + 'px;text-align:center;background:' + (it.bg || '#fff') + ';' + (i < items.length - 1 ? 'border-right:1px solid ' + borderColor + ';' : '')">
    <div :style="'font-size:10px;color:' + (it.color || '#555') + ';font-weight:600;margin-bottom:1px;'">{{ it.label }}</div>
    <div :style="'font-size:' + (items.length > 4 ? '15' : '17') + 'px;font-weight:700;color:' + (it.color || '#555') + ';'">
      {{ it.value }}<span style="font-size:10px;font-weight:400;">\uAC74</span>
    </div>
    <div v-if="it.sub" :style="'font-size:10px;color:' + (it.subColor || it.color || '#999') + ';opacity:0.8;'">{{ it.sub }}</div>
    <div v-if="it.detail" style="font-size:10px;color:#b0b0b0;">{{ it.detail }}</div>
  </div>
</div>
  `};
