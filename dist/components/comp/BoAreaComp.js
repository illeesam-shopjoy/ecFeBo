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
</div>`},window.BoPage={name:"BoPage",props:{title:{type:String,default:""},descSummary:{type:String,default:""},descDetail:{type:String,default:""},showPdf:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0},showLink:{type:Boolean,default:!0},shareQuery:{type:Object,default:null}},setup(e){const t=Vue.ref(!1),l=()=>{const S=new URLSearchParams(window.location.search);e.shareQuery&&Object.keys(e.shareQuery).forEach(B=>{const K=e.shareQuery[B];K!=null&&K!==""?S.set(B,K):S.delete(B)});const z=S.toString();return`${window.location.origin}${window.location.pathname}${z?"?"+z:""}`},u=Vue.ref(null),k=Vue.ref(!1);return{descOpen:t,pdfAreaRef:u,pdfExporting:k,handleExportPdf:async()=>{var S;k.value=!0;try{const z=coUtil.cofBuildExportFilename((e.title||"\uD654\uBA74")+".pdf");await window.boUtil.bofExportPdf(u.value,z,(S=window.boApp)==null?void 0:S.showToast)}finally{k.value=!1}},handleShareKakao:()=>{var S,z;try{window.coExtSdk.shareKakao({title:(e.title||"ShopJoy \uAD00\uB9AC\uC790")+" - ShopJoy BO",description:e.descSummary||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:l()})}catch(B){(z=(S=window.boApp)==null?void 0:S.showToast)==null||z.call(S,B.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},handleCopyLink:async()=>{var S,z,B,K;try{await navigator.clipboard.writeText(l()),(z=(S=window.boApp)==null?void 0:S.showToast)==null||z.call(S,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(D){(K=(B=window.boApp)==null?void 0:B.showToast)==null||K.call(B,D.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}}}},template:`
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
</div>`},window.BoSearchArea={name:"BoSearchArea",props:{columns:{type:Array,default:null},param:{type:Object,default:null},showActions:{type:Boolean,default:!0},searchLabel:{type:String,default:"\uC870\uD68C"},resetLabel:{type:String,default:"\uCD08\uAE30\uD654"},loading:{type:Boolean,default:!1},barStyle:{type:String,default:""},maxRows:{type:Number,default:0}},emits:["search","reset"],setup(e,{emit:t}){const l=window._boAreaCompUtil,u=Vue.ref(null),k=()=>{u.value=null};Vue.onMounted(()=>document.addEventListener("click",k)),Vue.onUnmounted(()=>document.removeEventListener("click",k));const f=(v,A={})=>{if(v==="search-emit"){if(!e.loading)return t("search")}else{if(v==="search-reset")return t("reset");if(v==="range-popover-toggle"){u.value=u.value===A.col.key?null:A.col.key;return}else console.warn("[handleBtnAction] unknown cmd:",v)}},b=(v,A={})=>{if(v==="field-select-change")return A.col&&A.col.onChange?A.col.onChange(A.event):null;if(v==="field-range-pick")return S(A.col)[A.col.key]=A.value,u.value=null,A.col.onRangeChange?A.col.onRangeChange():null;if(v==="field-pick-open")return A.col.onOpen(A.target);if(v==="field-pick-clear")return A.col.onClear(A.target);console.warn("[handleSelectAction] unknown cmd:",v)},y=v=>l.normOptions(v),S=v=>v.paramObj||e.param,z=v=>typeof v.disabled=="function"?!!v.disabled():!!v.disabled,B=Vue.ref(!1),K=Vue.ref(1/0),D={},w=(v,A)=>{A?D[v]=A:delete D[v]},i=v=>B.value||v<K.value,n=Vue.ref(null),c=async()=>{if(!e.maxRows||e.maxRows<=0){K.value=1/0;return}const v=B.value,A=e.columns||[],N=H=>{const V=[];for(let a=0;a<A.length;a++){const x=D[a];x&&(H&&!i(a)||V.push({ci:a,top:x.offsetTop}))}const I=[];for(const a of V)(!I.length||a.top-I[I.length-1]>4)&&I.push(a.top);return{tops:V,rowTops:I}};B.value=!0,await Vue.nextTick();let{tops:G,rowTops:F}=N(!1),j=1/0;if(F.length>e.maxRows){const H=F[e.maxRows],V=G.find(I=>I.top>=H-2);V&&(j=V.ci)}K.value=j,B.value=!1,await Vue.nextTick();for(let H=0;H<A.length+1&&({tops:G,rowTops:F}=N(!0),!!G.length);H++){const V=n.value?n.value.offsetTop:0;let I=F.findIndex(a=>Math.abs(V-a)<=4);if(I<0&&(I=F.length),I<=e.maxRows-1)break;K.value=G[G.length-1].ci,await Vue.nextTick()}B.value=v},m=Vue.ref(null);let T=null;return Vue.onMounted(()=>{Vue.nextTick(c),window.ResizeObserver&&m.value?(T=new ResizeObserver(()=>c()),T.observe(m.value)):window.addEventListener("resize",c)}),Vue.onUnmounted(()=>{T?T.disconnect():window.removeEventListener("resize",c)}),Vue.watch(()=>e.columns,()=>Vue.nextTick(c)),Vue.watchEffect(()=>{for(const v of e.columns||[]){if(v.type!=="dateRange"||!v.typeKey||!v.typeOptions)continue;const A=S(v);if(A[v.typeKey])continue;const N=y(v.typeOptions);N.length&&(A[v.typeKey]=N[0].value)}}),{U:l,normOpts:y,po:S,cfDisabled:z,handleBtnAction:f,handleSelectAction:b,rangePopoverKey:u,expanded:B,cfFieldVisible:i,setFieldRef:w,searchBarEl:m,searchActionsEl:n}},template:`
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
`},window._boAreaCompUtil={normOptions(e){return((typeof e=="function"?e():e)||[]).filter(l=>l!=null).map(l=>typeof l=="string"||typeof l=="number"?{value:l,label:String(l)}:{value:l.value!=null?l.value:l.codeValue,label:l.label!=null?l.label:l.codeLabel})},cellText(e,t){const l=t?t[e.key]:void 0;return typeof e.fmt=="function"?e.fmt(l,t):l==null?"":l},badgeClass(e,t){return typeof e.badge=="function"?e.badge(t):window.coUtil&&typeof coUtil.fnCodeBadge=="function"&&e.codeGrp?coUtil.fnCodeBadge(e.codeGrp,t[e.key]):"badge-gray"},autoAlign(e){if(e.align)return e.align;if(e.edit||e.type==="slot")return"";const t=String(e.key||"").toLowerCase(),l=String(e.label||"");return/viewcnt|hitcnt|viewcount|readcnt/.test(t)||/조회수|방문수|클릭수/.test(l)?"center":["amt","price","balance","fee","qty","cnt","count","rate","cost","stock","point","sum","total","value"].some(f=>new RegExp("(^|_)"+f+"(_|$)|"+f+"$").test(t))||/금액|가격|잔액|배송비|할인값|할인가|수량|개수|건수|단가|합계|총액|포인트|적립금|충전금|재고|\(원\)|원\)$|율$/.test(l)?"right":/(^|_)(cd|code|status|type|yn|flag|state|target)$/.test(t)||/cd$|status$|yn$|type$|typecd|statuscd|targetcd|target$/.test(t)||/date$|regdate|moddate|period/.test(t)||/^상태$|^유형$|^구분$|여부|^코드$|^등급$|^타입$|^단계$|일$|일시$|기간|등록일|수정일|작성일|시작일|종료일|^대상$|적용대상|대상$|^방식$|^방법$|^분류$|^레벨$|유형$/.test(l)?"center":(/(nm|name|title|label)$/.test(t)||/명$|제목|이름|타이틀/.test(l),"")},thStyle(e){if(e.style)return e.style;let t="text-align:center;";return e.width&&(t+="width:"+e.width+";"),t},tdStyle(e,t){let l="font-size:12px;";const u=this.autoAlign(e);if(u&&(l+="text-align:"+u+";"),e.mono&&(l+="font-family:monospace;"),e.link&&(l+="cursor:pointer;"),e.pin==="left"&&e.width&&(l+="width:"+e.width+";max-width:"+e.width+";min-width:"+e.width+";"),!e.noEllipsis&&!e.edit&&(l+="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),e.cellStyle!=null){const k=typeof e.cellStyle=="function"?e.cellStyle(t?t[e.key]:void 0,t):e.cellStyle;k&&(l+=(l.endsWith(";")?"":";")+k)}return l},cellClass(e,t){return e.cellClass==null?"":typeof e.cellClass=="function"?e.cellClass(t?t[e.key]:void 0,t)||"":e.cellClass},cellTitle(e,t){if(e.cellTitle===!1)return null;if(e.cellTitle==null||e.cellTitle===!0){const l=this.cellText(e,t);return l==null||l===""?null:String(l)}if(typeof e.cellTitle=="function"){const l=e.cellTitle(t?t[e.key]:void 0,t);return l==null?null:String(l)}return String(e.cellTitle)},cellInnerStyle(e,t){if(e.cellInnerStyle==null)return null;const l=typeof e.cellInnerStyle=="function"?e.cellInnerStyle(t?t[e.key]:void 0,t):e.cellInnerStyle;return l==null?null:String(l)},cellInnerClass(e,t){if(e.cellInnerClass==null)return null;const l=typeof e.cellInnerClass=="function"?e.cellInnerClass(t?t[e.key]:void 0,t):e.cellInnerClass;return l==null?null:String(l)}},window._boGridExcelMenu=function(e,t){const l=Vue.reactive({show:!1,x:0,y:0,busy:!1,hasAll:!1,count:0});let u=null;const k=w=>{w.key==="Escape"&&f()},f=()=>{l.show=!1,document.removeEventListener("click",f,!0),document.removeEventListener("contextmenu",f,!0),document.removeEventListener("keydown",k,!0),window.removeEventListener("scroll",f,!0),window.removeEventListener("resize",f)},b=w=>{const i=n=>n.disabled===!1&&n.offsetParent!==null&&/^(📥\s*)?엑셀$/.test((n.textContent||"").replace(/\s+/g," ").trim());for(let n=w;n&&n!==document.body;n=n.parentElement){const c=[...n.querySelectorAll("button.btn_excel")].filter(i);if(c.length===1)return c[0];if(c.length>1)return null;if(n.classList&&n.classList.contains("card"))break}return null},y=w=>w?[...w.querySelectorAll("tbody > tr")].filter(i=>!i.classList.contains("bo-grid-expand-row")&&!i.querySelector("td[colspan]:only-child")).length:0,S=w=>{if(!e.excelMenu||w.target&&w.target.closest&&w.target.closest('input,textarea,select,[contenteditable="true"]'))return;const i=t();i&&(w.preventDefault(),f(),u=e.excelAll===!1?null:b(i),l.hasAll=!!u,l.count=y(i.querySelector("table")),l.x=Math.max(4,Math.min(w.clientX,window.innerWidth-230)),l.y=Math.max(4,Math.min(w.clientY,window.innerHeight-(u?92:52))),l.show=!0,document.addEventListener("click",f,!0),document.addEventListener("contextmenu",f,!0),document.addEventListener("keydown",k,!0),window.addEventListener("scroll",f,!0),window.addEventListener("resize",f))};Vue.onBeforeUnmount(f);const z=()=>{const w=c=>String(c||"").replace(/[\\/:*?"<>|]/g,"_").trim();if(e.excelName)return w(e.excelName);let i="";for(let c=t();c&&!i;c=c.parentElement){const m=c.querySelector&&c.querySelector(".page-title");m&&(i=(m.textContent||"").trim())}const n=e.listTitle&&e.listTitle!=="\uBAA9\uB85D"?e.listTitle:"";return w([i,n].filter(Boolean).join("_"))||"\uADF8\uB9AC\uB4DC"},B=w=>new Promise((i,n)=>{const c=document.createElement("script");c.src=new URL(w,document.baseURI).href,c.onload=i,c.onerror=()=>n(new Error("\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+w)),document.head.appendChild(c)});return{ctx:l,onCtxMenu:S,doExcelExport:async()=>{f();const w=t(),i=w&&w.querySelector("table");if(!i||l.busy)return;l.busy=!0;const n=window.boApp&&window.boApp.showToast;try{window.boGridExcel||await B("lib/utils/boGridExcel.js");const c=await window.boGridExcel.exportTable(i,{fileName:z()});n&&n("\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC ("+c.rows+"\uAC74)","success")}catch(c){console.error("[Grid] \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uC2E4\uD328",c),n&&n("\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uC2E4\uD328: "+(c.message||c),"error")}finally{l.busy=!1}},doExcelAll:()=>{const w=u;f(),w&&w.isConnected&&w.click()}}},window._boGridCtxMenuTpl=`<Teleport to="body">
      <div v-if="ctx.show" @click.stop @contextmenu.prevent
        :style="'position:fixed;z-index:10000;left:' + ctx.x + 'px;top:' + ctx.y + 'px;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 4px 14px rgba(0,0,0,.15);min-width:200px;padding:4px 0;'">
        <div @click="doExcelExport" style="padding:8px 16px;font-size:12px;color:#333;cursor:pointer;white-space:nowrap;"
          @mouseenter="$event.currentTarget.style.background='#fff8f9';$event.currentTarget.style.color='#e8587a'" @mouseleave="$event.currentTarget.style.background='';$event.currentTarget.style.color='#333'">
          \u{1F4CA} \uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC <span style="color:#999;font-size:11px;">(\uC870\uD68C {{ ctx.count }}\uAC74 \xB7 \uD654\uBA74 \uADF8\uB300\uB85C)</span>
        </div>
        <div v-if="ctx.hasAll" @click="doExcelAll" style="padding:8px 16px;font-size:12px;color:#333;cursor:pointer;white-space:nowrap;border-top:1px solid #f0f0f0;"
          @mouseenter="$event.currentTarget.style.background='#fff8f9';$event.currentTarget.style.color='#e8587a'" @mouseleave="$event.currentTarget.style.background='';$event.currentTarget.style.color='#333'">
          \u{1F4E5} \uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC(\uC804\uCCB4\uAC74)
        </div>
      </div>
    </Teleport>`,window.BoGrid={name:"BoGrid",props:{columns:{type:Array,required:!0},rows:{type:Array,default:()=>[]},pager:{type:Object,default:null},sortState:{type:Object,default:null},listTitle:{type:String,default:"\uBAA9\uB85D"},rowKey:{type:String,default:null},rowStyle:{type:Function,default:null},rowClass:{type:Function,default:null},countText:{type:String,default:null},loadedCount:{type:Number,default:null},scrollEndOffset:{type:Number,default:500},fitBottom:{type:[Boolean,Number],default:!1},isExpanded:{type:Function,default:null},draggable:{type:Boolean,default:!1},showSave:{type:Boolean,default:!1},saveLabel:{type:String,default:"\uC800\uC7A5"},rowActions:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},tableMaxHeight:{type:String,default:null},fixedHeight:{type:Boolean,default:!1},bare:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},checkedKey:{type:String,default:null},isChecked:{type:Function,default:null},allChecked:{type:Boolean,default:!1},rowClickable:{type:Boolean,default:!1},gridId:{type:String,default:""},selectedKey:{type:[String,Number],default:null},showRowNo:{type:Boolean,default:!0},excelMenu:{type:Boolean,default:!0},excelName:{type:String,default:""},excelAll:{type:Boolean,default:!0},layout:{type:String,default:"table"},cardMinWidth:{type:String,default:"220px"},cardClass:{type:String,default:""},rowActionsCols:{type:Array,default:null}},emits:["scroll-end","sort","row-click","row-dblclick","cell-click","save","row-remove","reorder","cell-change","toggle-check","toggle-check-all","ref-click"],setup(e,{emit:t,slots:l}){const u=window._boAreaCompUtil,k=Vue.computed(()=>e.pager?e.pager.pageTotalCount||0:e.rows.length),f=Vue.computed(()=>!!l.tfoot&&e.rows.length>0),b=Vue.ref(null),y=Vue.computed(()=>{const o=e.columns.find(r=>r.type==="actions");return!o||typeof o.visible=="function"&&!o.visible()?null:o}),S=Vue.computed(()=>e.columns.length-(y.value?1:0)+(e.showRowNo?1:0)+(e.selectable?1:0)+(e.draggable?1:0)+(e.rowActions||y.value?1:0)),z=(o,r={})=>{if(o==="toolbar-save")return t("save");if(o==="grid-toggle-check-all")return t("toggle-check-all");console.warn("[handleBtnAction] unknown cmd:",o)},B=(o,r={})=>{var P,Q,Y,J,ne;if(o==="sort-toggle"){if(typeof r.col.headClick=="function")return r.col.headClick(r.col);if(r.col.sortKey)return t("sort",r.col.sortKey)}else{if(o==="grid-row-click")return t("row-click",r.row);if(o==="grid-row-dblclick")return t("row-dblclick",r.row);if(o==="grid-cell-click")return t("cell-click",{cmd:e.gridId,row:r.row,col:r.col,colKey:(P=r.col)==null?void 0:P.key,colIndex:r.ci,rowIndex:r.idx,ctrlKey:!!((Q=r.event)!=null&&Q.ctrlKey),metaKey:!!((Y=r.event)!=null&&Y.metaKey),button:(J=r.event)==null?void 0:J.button});if(o==="grid-row-ref-click"){const te=r.col.refKey?r.row[r.col.refKey]:r.row[r.col.key];return t("ref-click",{row:r.row,col:r.col,type:r.col.refLink,id:te})}else{if(o==="grid-row-remove")return t("row-remove",r.row);if(o==="grid-row-toggle-check"){const te=r.row[e.checkedKey||e.rowKey];return t("toggle-check",te)}else{if(o==="grid-row-cell-change")return t("cell-change",{cmd:e.gridId,row:r.row,col:r.col,colKey:(ne=r.col)==null?void 0:ne.key});if(o==="grid-row-drag-start")e.draggable&&(b.value=r.idx);else if(o==="grid-row-drag-over"){if(!e.draggable||b.value===null||b.value===r.idx)return;r.event.preventDefault();const te=e.rows.splice(b.value,1)[0];e.rows.splice(r.idx,0,te),b.value=r.idx}else o==="grid-row-drag-end"?b.value!==null&&(b.value=null,t("reorder")):console.warn("[handleSelectAction] unknown cmd:",o)}}}},K=o=>e.pager?(e.pager.pageNo-1)*e.pager.pageSize+o+1:o+1,D=o=>{const r=e.sortState;return!o.sortKey||!r?"":r.sortKey!==o.sortKey?"\u21C5":r.sortDir==="asc"?"\u2191":"\u2193"},w=o=>e.sortState&&e.sortState.sortKey===o.sortKey,i=(o,r)=>typeof e.rowStyle=="function"?e.rowStyle(o,r):"",n=(o,r)=>{const P=(typeof e.rowClass=="function"?e.rowClass(o,r):o._isNew?"status-I":"")||"",Q=e.selectedKey!=null&&e.rowKey&&o[e.rowKey]===e.selectedKey?" bo-row-selected":"";return(P+Q).trim()},c=(o,r)=>typeof e.isExpanded=="function"?!!e.isExpanded(o,r):!1,m=Vue.ref(null),T=o=>{e.rowKey&&(m.value=o[e.rowKey])},v=()=>{m.value=null},A=(o,r)=>{if(e.rowKey&&m.value!=null&&o[e.rowKey]===m.value)return"#e8effe";const Y=(i(o,r)||"").match(/background:\s*([^;]+)/);return Y?Y[1].trim():r%2===1?"#f7f8fc":"#fff"},N=o=>o[e.checkedKey||e.rowKey],G=o=>typeof e.isChecked=="function"?!!e.isChecked(N(o)):!1,F=Vue.reactive({});let j=null,H=0,V=0;const I=(o,r)=>{o.preventDefault(),o.stopPropagation(),j=o.target.closest("th"),H=o.clientX,V=j.offsetWidth,document.body.classList.add("col-resizing");const P=Y=>{const J=Math.max(40,V+Y.clientX-H);F[r.key]=J+"px"},Q=()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",Q),document.body.classList.remove("col-resizing"),j=null};document.addEventListener("mousemove",P),document.addEventListener("mouseup",Q)},a=o=>{const r=u.thStyle(o);return F[o.key]?r.replace(/width:[^;]+;/,"")+"width:"+F[o.key]+";":r},x=Vue.computed(()=>(e.selectable?36:0)+(e.draggable?28:0)),C=Vue.computed(()=>x.value+(e.showRowNo?36:0)),_=Vue.computed(()=>{const o={};let r=C.value;for(const P of e.columns)P.pin==="left"&&(o[P.key]=r,r+=parseInt(P.width,10)||100);return o}),M=Vue.computed(()=>{let o=null;for(const r of e.columns)r.pin==="left"&&(o=r.key);return o}),R=o=>e.selectedKey!=null&&e.rowKey&&o[e.rowKey]===e.selectedKey,s=(o,r,P,Q)=>{let Y="position:sticky;left:"+o+"px;z-index:"+r+";";const J=[];return Q&&(o===0&&J.push("inset 2px 0 0 #2563eb"),J.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),P&&J.push("2px 0 4px rgba(0,0,0,.08)"),J.length&&(Y+="box-shadow:"+J.join(",")+";"),Y},p=(o,r,P)=>{let Q="position:sticky;right:0;z-index:"+o+";";const Y=[];return P&&Y.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),r&&Y.push("-2px 0 4px rgba(0,0,0,.08)"),Y.length&&(Q+="box-shadow:"+Y.join(",")+";"),Q},g=Vue.ref(null),O=()=>{if(!e.fitBottom||!g.value)return;const o=typeof e.fitBottom=="number"?e.fitBottom:64,r=g.value.getBoundingClientRect().top,P=Math.max(160,window.innerHeight-r-o);g.value.style.maxHeight=P+"px",g.value.style.minHeight=P+"px",g.value.style.overflow="auto"};let W=null;Vue.onMounted(()=>{if(e.fitBottom&&(Vue.nextTick(O),window.addEventListener("resize",O),window.ResizeObserver)){W=new ResizeObserver(()=>O());const o=g.value&&g.value.closest(".card")?g.value.closest(".card").parentElement:document.body;try{W.observe(o||document.body)}catch{}}}),Vue.onBeforeUnmount(()=>{if(window.removeEventListener("resize",O),W)try{W.disconnect()}catch{}});let q=-1;const d=o=>{const r=o.target;if(r.scrollHeight-r.scrollTop-r.clientHeight>e.scrollEndOffset){q=-1;return}q!==r.scrollHeight&&(q=r.scrollHeight,t("scroll-end"))},h=30,L=Vue.computed(()=>e.tableMaxHeight?e.bare?e.tableMaxHeight:"calc("+e.tableMaxHeight+" - "+h+"px)":e.tableMaxHeight),E=Vue.computed(()=>e.tableMaxHeight?(e.fixedHeight?"height:":"max-height:")+L.value+";overflow:auto;position:relative;":"overflow-x:auto;position:relative;"),U=Vue.computed(()=>e.countText!=null?e.countText:coUtil.cofCountText(k.value,e.loadedCount)),X=Vue.computed(()=>e.columns.filter(o=>o.type!=="actions").map(o=>{if(o.link!=null||o.badge||o.edit||o.refLink)return o;const r=(o.key||"").toLowerCase(),P=o.label||"";return/(nm|name|title)$/.test(r)||/명$|제목$|이름$/.test(P)?Object.assign({},o,{link:!0}):o})),Z=(o,r,P)=>typeof o=="function"?o(r,P):o,ee=(o,r,P)=>typeof o.visible=="function"?!!o.visible(r,P):!0,$=(o,r,P)=>typeof o.disabled=="function"?!!o.disabled(r,P):!1,oe=o=>coUtil.cofColLabel(o),le=o=>coUtil.cofColNm(o),ie=Vue.computed(()=>e.rowActions||!!y.value),ce=Vue.computed(()=>e.rowActionsCols||y.value&&y.value.actions||null),{ctx:ae,onCtxMenu:se,doExcelExport:re,doExcelAll:de}=window._boGridExcelMenu(e,()=>g.value);return{ctx:ae,onCtxMenu:se,doExcelExport:re,doExcelAll:de,fnRowActionVal:Z,fnRowActionVisible:ee,fnRowActionDisabled:$,fnColLabel:oe,fnColNm:le,U:u,cfTotal:k,cfCountText:U,cfScrollMaxHeight:L,cfBodyStyle:E,bodyRef:g,onScroll:d,cfShowTfoot:f,rowNo:K,sortIcon:D,sortActive:w,fnRowStyle:i,fnRowClass:n,fnIsExpanded:c,cfColspan:S,fnRowChecked:G,handleBtnAction:z,handleSelectAction:B,colWidths:F,onResizeStart:I,thResizeStyle:a,cfPinNoLeft:x,cfPinFirstLeft:C,cfPinLeftOffset:_,cfPinLeftLastKey:M,pinLeftStyle:s,pinRightStyle:p,fnPinBg:A,fnRowSelected:R,onRowMouseEnter:T,onRowMouseLeave:v,columns:X,rowActions:ie,rowActionsCols:ce}},template:`
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
  <div v-if="layout==='table'" ref="bodyRef" :style="cfBodyStyle" @scroll="onScroll" @contextmenu="onCtxMenu">
    <!-- \uC870\uD68C \uC911 \uC624\uBC84\uB808\uC774 (\uAE30\uC874 \uD589 \uC704\uC5D0 \uD45C\uC2DC \u2014 \uC7AC\uC870\uD68C/\uD398\uC774\uC9C0 \uC774\uB3D9 \uD53C\uB4DC\uBC31). \uD589\uC774 \uC5C6\uC744 \uB550 \uBE48\uD589 \uBB38\uAD6C\uB85C \uC548\uB0B4 -->
    <div v-if="loading ? (rows.length) : false" style="position:absolute;inset:0;z-index:5;background:rgba(255,255,255,.55);display:flex;align-items:flex-start;justify-content:center;padding-top:40px;pointer-events:none;">
      <span style="font-size:13px;color:#e8587a;background:#fff;border:1px solid #f3c6d4;border-radius:14px;padding:4px 14px;box-shadow:0 2px 8px rgba(0,0,0,.08);">\u23F3 \uC870\uD68C \uC911\u2026</span>
    </div>
    ${window._boGridCtxMenuTpl}
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
`},window.BoGridCrud={name:"BoGridCrud",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},rowKey:{type:String,required:!0},actionHeader:{type:String,default:"\uAD00\uB9AC"},gridId:{type:String,default:""},listTitle:{type:String,default:"\uBAA9\uB85D"},maxHeight:{type:String,default:"480px"},totalCount:{type:Number,default:null},scrollEndOffset:{type:Number,default:500},draggable:{type:Boolean,default:!0},checkAll:{type:Boolean,default:!1},focusedIdx:{type:Number,default:null},showExport:{type:Boolean,default:!1},showExcelUpload:{type:Boolean,default:!1},showRowNo:{type:Boolean,default:!0},showRowId:{type:Boolean,default:!0},showRowStatus:{type:Boolean,default:!0},showRowCheck:{type:Boolean,default:!0},showAdd:{type:Boolean,default:!0},showSave:{type:Boolean,default:!0},cellTitle:{type:Function,default:null},sortState:{type:Object,default:null},emptyText:{type:String,default:"\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},selectedKey:{type:[String,Number],default:null},flatRows:{type:Array,default:null},rowAccessor:{type:Function,default:null},treeRowKey:{type:Function,default:null},treeRowDepth:{type:Function,default:null},excelMenu:{type:Boolean,default:!0},excelName:{type:String,default:""},excelAll:{type:Boolean,default:!0}},emits:["scroll-end","add","save","cancel-checked","delete-checked","reorder","cell-change","update:checkAll","update:focusedIdx","export","excel-upload","sort","row-dblclick","cell-click","row-click"],setup(e,{emit:t}){const l=window._boAreaCompUtil,u=Vue.computed(()=>Array.isArray(e.flatRows)&&typeof e.rowAccessor=="function"),k=Vue.computed(()=>u.value?e.flatRows:e.rows),f=Vue.computed(()=>e.draggable&&!u.value),b=Vue.computed(()=>e.showRowNo&&(!u.value||typeof e.treeRowDepth=="function")),y=Vue.computed(()=>{if(!u.value||typeof e.treeRowDepth!="function")return[];const d=[];return e.flatRows.map(h=>{const L=e.treeRowDepth(h)||0;return d[L]=(d[L]||0)+1,d.length=L+1,d.join(".")})}),S=Vue.computed(()=>e.showRowId&&!u.value),z=Vue.computed(()=>e.rows.filter(d=>d._row_status!=="D").length),B=Vue.ref(e.checkAll);Vue.watch(()=>e.checkAll,d=>{B.value=d});const K=Vue.ref(null),D=Vue.ref(!1),w=Vue.computed(()=>{let d=e.columns.length+1;return f.value&&(d+=1),b.value&&(d+=1),S.value&&(d+=1),e.showRowStatus&&(d+=1),e.showRowCheck&&(d+=1),d}),i=(d,h={})=>{if(d==="toolbar-add")return t("add");if(d==="toolbar-save")return t("save");if(d==="toolbar-cancel-checked")return t("cancel-checked");if(d==="toolbar-delete-checked")return t("delete-checked");if(d==="toolbar-export")return t("export");if(d==="toolbar-excel-upload")return t("excel-upload");if(d==="grid-toggle-check-all"){const L=!B.value;return B.value=L,u.value?e.flatRows.forEach(E=>{e.rowAccessor(E)._row_check=L}):e.rows.forEach(E=>{E._row_check=L}),t("update:checkAll",L)}else console.warn("[handleBtnAction] unknown cmd:",d)},n=(d,h={})=>{var L,E,U,X,Z,ee;if(d==="sort-toggle"){if(typeof h.col.headClick=="function")return h.col.headClick(h.col);if(h.col.sortKey)return t("sort",h.col.sortKey)}else if(d==="grid-row-focus"){const $=u.value?e.rows.indexOf(e.rowAccessor(e.flatRows[h.idx])):h.idx;return e.focusedIdx!==$&&t("update:focusedIdx",$),t("row-click",h.row,$)}else{if(d==="grid-row-dblclick")return t("row-dblclick",h.row,h.idx);if(d==="grid-cell-click")return t("cell-click",{cmd:e.gridId,row:h.row,col:h.col,colKey:(L=h.col)==null?void 0:L.key,colIndex:h.ci,rowIndex:h.idx,ctrlKey:!!((E=h.event)!=null&&E.ctrlKey),metaKey:!!((U=h.event)!=null&&U.metaKey),button:(X=h.event)==null?void 0:X.button});if(d==="grid-row-cell-change"){const $=h.row;if($._row_status==="I"||$._row_status==="D")return t("cell-change",{cmd:e.gridId,row:$,col:h.col,colKey:(Z=h.col)==null?void 0:Z.key});if($._row_org){const oe=Object.keys($._row_org).some(le=>String($[le])!==String($._row_org[le]));$._row_status=oe?"U":"N"}return t("cell-change",{cmd:e.gridId,row:$,col:h.col,colKey:(ee=h.col)==null?void 0:ee.key})}else if(d==="grid-row-drag-start")e.draggable&&(K.value=h.idx,D.value=!1);else if(d==="grid-row-drag-over"){if(!e.draggable||K.value===null||K.value===h.idx)return;h.event.preventDefault();const $=e.rows.splice(K.value,1)[0];e.rows.splice(h.idx,0,$),K.value=h.idx,D.value=!0}else d==="grid-row-drag-end"?(D.value&&t("reorder"),K.value=null,D.value=!1):console.warn("[handleSelectAction] unknown cmd:",d)}},c=d=>u.value?e.rowAccessor(d):d,m=(d,h)=>u.value?typeof e.treeRowKey=="function"?e.treeRowKey(d,h):h:d[e.rowKey],T=d=>({N:"badge-gray",I:"badge-blue",U:"badge-orange",D:"badge-red"})[d]||"badge-gray",v=d=>typeof e.cellTitle=="function"?e.cellTitle(d):"",A=(d,h)=>{const L=c(d),E=["status-"+L._row_status];return!u.value&&e.focusedIdx===h&&E.push("focused"),e.selectedKey!=null&&L[e.rowKey]===e.selectedKey&&E.push("bo-row-selected"),E},N=(d,h)=>{const L=c(d);return L._row_status==="I"?"#d9f7be":L._row_status==="U"?"#fff1b8":L._row_status==="D"?"#ffccc7":"#fff"},G=d=>{const h=e.sortState;return!d.sortKey||!h?"":h.sortKey!==d.sortKey?"\u21C5":h.sortDir==="asc"?"\u2191":"\u2193"},F=d=>e.sortState&&e.sortState.sortKey===d.sortKey,j=Vue.computed(()=>e.totalCount!=null?coUtil.cofCountText(e.totalCount,z.value):coUtil.cofCountText(z.value)),H=30,V=Vue.computed(()=>e.maxHeight?"calc("+e.maxHeight+" - "+H+"px)":e.maxHeight);let I=-1;const a=d=>{const h=d.target;if(h.scrollHeight-h.scrollTop-h.clientHeight>e.scrollEndOffset){I=-1;return}I!==h.scrollHeight&&(I=h.scrollHeight,t("scroll-end"))},x=Vue.computed(()=>{const d=[{show:f.value,w:28},{show:b.value,w:36},{show:e.showRowStatus,w:38},{show:e.showRowCheck,w:32}],h=[];let L=0;d.forEach(U=>{h.push(L),U.show&&(L+=U.w)});const E=d.map(U=>U.show);return{offsets:h,lastShownIdx:E.lastIndexOf(!0)}}),C=d=>e.selectedKey!=null&&d[e.rowKey]===e.selectedKey,_=(d,h,L,E)=>{let U="position:sticky;left:"+d+"px;z-index:"+h+";";const X=[];return E&&(d===0&&X.push("inset 2px 0 0 #2563eb"),X.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),L&&X.push("2px 0 4px rgba(0,0,0,.08)"),X.length&&(U+="box-shadow:"+X.join(",")+";"),U},M=(d,h,L)=>{let E="position:sticky;right:0;z-index:"+d+";";const U=[];return L&&U.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),h&&U.push("-2px 0 4px rgba(0,0,0,.08)"),U.length&&(E+="box-shadow:"+U.join(",")+";"),E},R=d=>coUtil.cofColLabel(d),s=d=>coUtil.cofColNm(d),p=Vue.ref(null),{ctx:g,onCtxMenu:O,doExcelExport:W,doExcelAll:q}=window._boGridExcelMenu(e,()=>p.value);return{bodyRef:p,ctx:g,onCtxMenu:O,doExcelExport:W,doExcelAll:q,fnColLabel:R,fnColNm:s,U:l,cfVisibleCount:z,cfCountText:j,cfScrollMaxHeight:V,onScroll:a,fnStatusClass:T,allChecked:B,fnColTitle:v,cfEmptyColspan:w,sortIcon:G,sortActive:F,cfTreeMode:u,cfDispRows:k,fnRow:c,fnRowKey:m,fnRowCls:A,fnPinBg:N,cfShowDrag:f,cfShowNo:b,cfShowId:S,cfPinLeftSegs:x,cfTreeNoList:y,pinLeftStyle:_,pinRightStyle:M,fnRowSelected:C,handleBtnAction:i,handleSelectAction:n}},template:`
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
  <div ref="bodyRef" :style="'max-height:' + cfScrollMaxHeight + ';overflow:auto;'" @scroll="onScroll" @contextmenu="onCtxMenu">
    ${window._boGridCtxMenuTpl}
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
`},window.BoPathTreeCard={name:"BoPathTreeCard",props:{bizCd:{type:String,required:!0},title:{type:String,default:"\uD45C\uC2DC\uACBD\uB85C"},selected:{default:null},showBizCd:{type:Boolean,default:!1},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},maxHeight:{type:String,default:"65vh"},pad:{type:String,default:"12px"},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:t}){return{cfHasSel:Vue.computed(()=>e.selected!=null&&e.selected!==""),handleBtnAction:(f,b={})=>{if(f==="tree-all")return t("select",null);console.warn("[handleBtnAction] unknown cmd:",f)},handleSelectAction:(f,b={})=>{if(f==="node-select")return t("select",b.id);console.warn("[handleSelectAction] unknown cmd:",f)}}},template:`
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
`},window.BoMenuTreeCard={name:"BoMenuTreeCard",props:{title:{type:String,default:"\uBA54\uB274"},selected:{default:null},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},maxHeight:{type:String,default:"65vh"},pad:{type:String,default:"12px"},counts:{type:Object,default:null}},emits:["select"],setup(e,{emit:t}){return{cfHasSel:Vue.computed(()=>e.selected!=null&&e.selected!==""),handleBtnAction:(f,b={})=>{if(f==="tree-all")return t("select",null);console.warn("[handleBtnAction] unknown cmd:",f)},handleSelectAction:(f,b={})=>{if(f==="node-select")return t("select",b.id);console.warn("[handleSelectAction] unknown cmd:",f)}}},template:`
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
`},window.BoLocalTreeCard={name:"BoLocalTreeCard",props:{node:{type:Object,required:!0},expanded:{type:Object,required:!0},selected:{default:null},onToggle:{type:Function,required:!0},title:{type:String,default:"\uACBD\uB85C \uD2B8\uB9AC"},bizCd:{type:String,default:""},allLabel:{type:String,default:"\uC804\uCCB4\uBCF4\uAE30"},expandable:{type:Boolean,default:!0},maxHeight:{type:String,default:"65vh"},sticky:{type:Boolean,default:!1}},emits:["select","expand-all","collapse-all"],setup(e,{emit:t}){const l=Vue.computed(()=>e.selected!=null&&e.selected!==""),u=Vue.computed(()=>"padding:12px;"+(e.sticky?"position:sticky;top:0;":"")),k=(y,S={})=>{if(y==="tree-all")return t("select",null);if(y==="tree-expand-all")return t("expand-all");if(y==="tree-collapse-all")return t("collapse-all");console.warn("[handleBtnAction] unknown cmd:",y)},f=(y,S={})=>{if(y==="node-select")return t("select",S.id);console.warn("[handleSelectAction] unknown cmd:",y)};return{cfHasSel:l,cfCardStyle:u,fnOnSelect:y=>f("node-select",{id:y}),handleBtnAction:k,handleSelectAction:f}},template:`
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
`},window.BoModal={name:"BoModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:String,default:"600px"},maxWidth:{type:String,default:"95vw"},height:{type:String,default:"auto"},minHeight:{type:String,default:""},maxHeight:{type:String,default:"90vh"},zIndex:{type:Number,default:9e3},boxPad:{type:String,default:"20px"},bodyPad:{type:String,default:"20px"},closeOnBackdrop:{type:Boolean,default:!0},overlayBg:{type:String,default:"rgba(18,24,40,0.55)"},teleport:{type:Boolean,default:!0},onCloseCb:{type:Function,default:null},onConfirmCb:{type:Function,default:null}},emits:["close","confirm"],setup(e,{emit:t}){const l=Vue.computed(()=>"position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:"+e.overlayBg+";z-index:"+e.zIndex+";"),u=Vue.computed(()=>"background:#fff;width:"+e.width+";max-width:"+e.maxWidth+";height:"+e.height+";max-height:"+e.maxHeight+";"+(e.minHeight?"min-height:"+e.minHeight+";":"")+"display:flex;flex-direction:column;padding:"+e.boxPad+";overflow:hidden;"),k=Vue.computed(()=>e.boxPad==="0"||e.boxPad==="0px"?"flex:1;overflow-y:auto;padding:"+e.bodyPad+";":"flex:1;overflow-y:auto;padding:"+e.bodyPad+";margin:0 -"+e.boxPad+";"),f=Vue.computed(()=>e.boxPad==="0"||e.boxPad==="0px"?"":"padding:0 "+e.boxPad+";"),b=(B,K={})=>{B==="modal-close"?(t("close"),typeof e.onCloseCb=="function"&&e.onCloseCb()):B==="modal-confirm"?(t("confirm"),typeof e.onConfirmCb=="function"&&e.onConfirmCb()):B==="modal-backdrop"?e.closeOnBackdrop&&b("modal-close"):console.warn("[handleBtnAction] unknown cmd:",B)};return{onClose:()=>b("modal-close"),onConfirm:()=>b("modal-confirm"),cfOverlayStyle:l,cfBoxStyle:u,cfBodyOuterStyle:k,cfBodyInnerStyle:f,handleBtnAction:b,handleSelectAction:(B,K={})=>{console.warn("[handleSelectAction] unknown cmd:",B)}}},template:`
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
`},window.BoCronModal={name:"BoCronModal",props:{show:{type:Boolean,default:!1},value:{type:String,default:"0 0 * * *"}},emits:["apply","close"],setup(e,{emit:t}){const{reactive:l,computed:u,watch:k}=Vue,f=[{label:"\uB9E4\uC77C \uC790\uC815",value:"0 0 * * *"},{label:"\uB9E4\uC77C 01:00",value:"0 1 * * *"},{label:"\uB9E4\uC77C 02:00",value:"0 2 * * *"},{label:"\uB9E4\uC2DC\uAC04",value:"0 * * * *"},{label:"2\uC2DC\uAC04\uB9C8\uB2E4",value:"0 */2 * * *"},{label:"\uB9E4\uC8FC \uC77C\uC694\uC77C \uC790\uC815",value:"0 0 * * 0"},{label:"\uB9E4\uC6D4 1\uC77C 08:00",value:"0 8 1 * *"}],b=[{key:"minute",label:"\uBD84",placeholder:"0",hint:"0-59, */n"},{key:"hour",label:"\uC2DC",placeholder:"0",hint:"0-23, */n"},{key:"day",label:"\uC77C",placeholder:"*",hint:"1-31, *"},{key:"month",label:"\uC6D4",placeholder:"*",hint:"1-12, *"},{key:"weekday",label:"\uC694\uC77C",placeholder:"*",hint:"0-6 (\uC77C=0)"}],y=l({minute:"0",hour:"0",day:"*",month:"*",weekday:"*",preview:"0 0 * * *"}),S=w=>{const i=String(w||"0 0 * * *").trim().split(/\s+/);y.minute=i[0]||"*",y.hour=i[1]||"*",y.day=i[2]||"*",y.month=i[3]||"*",y.weekday=i[4]||"*",y.preview=w||"0 0 * * *"};k(()=>e.show,w=>{w&&S(e.value)}),k(()=>e.value,w=>{e.show&&S(w)});const z=w=>{if(!w)return"";const i=w.trim().split(/\s+/);if(i.length!==5)return"";const[n,c,m,T,v]=i,A=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],N=(j,H)=>{if(j==="*")return"";const V=String(j).padStart(2,"0"),I=H==="*"?"00":String(H).padStart(2,"0");return" "+V+":"+I};if(n==="*"&&c==="*"&&m==="*"&&T==="*"&&v==="*")return"\uB9E4\uBD84 \uC2E4\uD589";const G=n.match(/^\*\/(\d+)$/);if(G&&c==="*"&&m==="*"&&T==="*"&&v==="*")return G[1]+"\uBD84\uB9C8\uB2E4 \uC2E4\uD589";if(c==="*"&&m==="*"&&T==="*"&&v==="*")return n==="0"?"\uB9E4\uC2DC\uAC04 \uC2E4\uD589":"\uB9E4\uC2DC\uAC04 "+n+"\uBD84\uC5D0 \uC2E4\uD589";const F=c.match(/^\*\/(\d+)$/);return F&&m==="*"&&T==="*"&&v==="*"?F[1]+"\uC2DC\uAC04\uB9C8\uB2E4 \uC2E4\uD589"+(n!=="0"&&n!=="*"?" ("+n+"\uBD84)":""):T!=="*"&&m!=="*"&&v==="*"?"\uB9E4\uB144 "+(T.match(/^\*\/(\d+)$/)?T.match(/^\*\/(\d+)$/)[1]+"\uAC1C\uC6D4\uB9C8\uB2E4":T+"\uC6D4")+" "+m+"\uC77C"+N(c,n)+" \uC2E4\uD589":m==="*"&&T==="*"&&v!=="*"?"\uB9E4\uC8FC "+v.split(",").map(H=>{const V=parseInt(H);return isNaN(V)?H:A[V%7]+"\uC694\uC77C"}).join(", ")+N(c,n)+" \uC2E4\uD589":T==="*"&&v==="*"&&m!=="*"?"\uB9E4\uC6D4 "+(m.match(/^\*\/(\d+)$/)?m.match(/^\*\/(\d+)$/)[1]+"\uC77C\uB9C8\uB2E4":m+"\uC77C")+N(c,n)+" \uC2E4\uD589":m==="*"&&T==="*"&&v==="*"?"\uB9E4\uC77C"+N(c,n)+" \uC2E4\uD589":""},B=u(()=>z(y.preview));return{PRESETS:f,FIELDS:b,st:y,cfDesc:B,handleBtnAction:(w,i={})=>{if(w==="cron-apply")return t("apply",y.preview),t("close");if(w==="cron-close")return t("close");w==="cron-update-preview"?y.preview=y.minute+" "+y.hour+" "+y.day+" "+y.month+" "+y.weekday:console.warn("[handleBtnAction] unknown cmd:",w)},handleSelectAction:(w,i={})=>{if(w==="preset-apply"){const n=i.value.split(" ");y.minute=n[0],y.hour=n[1],y.day=n[2],y.month=n[3],y.weekday=n[4],y.preview=i.value}else console.warn("[handleSelectAction] unknown cmd:",w)}}},template:`
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
`},window.BoTreeSelectorModal={name:"BoTreeSelectorModal",props:{show:{type:Boolean,default:!1},node:{type:Object,default:()=>({children:[]})},expanded:{type:Object,required:!0},onToggle:{type:Function,required:!0},title:{type:String,default:"\uD56D\uBAA9 \uC120\uD0DD"},rootLabel:{type:String,default:"(\uB8E8\uD2B8 \u2014 \uC0C1\uC704\uC5C6\uC74C)"}},emits:["select","close"],setup(e,{emit:t}){const l=(f,b={})=>{if(f==="treeModal-close")return t("close");if(f==="treeModal-root-select")return t("select",null);console.warn("[handleBtnAction] unknown cmd:",f)},u=(f,b={})=>{if(f==="node-select")return t("select",b.id);console.warn("[handleSelectAction] unknown cmd:",f)};return{fnOnSelect:f=>u("node-select",{id:f}),handleBtnAction:l,handleSelectAction:u}},template:`
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
`},window.BoRoleSelectModal={name:"BoRoleSelectModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:"\u{1F3AD} \uC5ED\uD560 \uC120\uD0DD"},confirmDisabled:{type:Boolean,default:!1},confirmLabel:{type:String,default:"\uC5ED\uD560 \uBD80\uC5EC"}},emits:["close","confirm"],setup(e,{emit:t}){return{handleBtnAction:(k,f={})=>{if(k==="roleModal-close")return t("close");if(k==="roleModal-confirm")return t("confirm");console.warn("[handleBtnAction] unknown cmd:",k)},handleSelectAction:(k,f={})=>{console.warn("[handleSelectAction] unknown cmd:",k)}}},template:`
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
`},window.BoRowCancelDelete={name:"BoRowCancelDelete",props:{row:{type:Object,required:!0},allowDeleteNull:{type:Boolean,default:!1},cancelLabel:{type:String,default:"\uCDE8\uC18C"},deleteLabel:{type:String,default:"\uC0AD\uC81C"}},emits:["cancel","delete"],setup(e,{emit:t}){const l=Vue.computed(()=>["U","I","D"].includes(e.row._row_status)),u=Vue.computed(()=>{const b=e.row._row_status;return e.allowDeleteNull&&b==null?!0:b==="N"});return{cfShowCancel:l,cfShowDelete:u,handleBtnAction:(b,y={})=>{if(b==="row-cancel")return t("cancel");if(b==="row-delete")return t("delete");console.warn("[handleBtnAction] unknown cmd:",b)},handleSelectAction:(b,y={})=>{console.warn("[handleSelectAction] unknown cmd:",b)}}},template:`
<span>
  <button v-if="cfShowCancel" class="btn btn-secondary btn-xs" @click.stop="handleBtnAction('row-cancel')">
    {{ cancelLabel }}
  </button>
  <button v-if="cfShowDelete" class="btn btn_row_delete" @click.stop="handleBtnAction('row-delete')">
    {{ deleteLabel }}
  </button>
</span>
`},window.BoFormArea={name:"BoFormArea",props:{columns:{type:Array,required:!0},form:{type:Object,default:()=>({})},errors:{type:Object,default:()=>({})},readonly:{type:Boolean,default:!1},cols:{type:Number,default:3},labelLeft:{type:Boolean,default:!1},labelWidth:{type:String,default:"90px"},compact:{type:Boolean,default:!1},plainReadonly:{type:Boolean,default:!1},showActions:{type:Boolean,default:!0},saveLabel:{type:String,default:"\uC800\uC7A5"},cancelLabel:{type:String,default:"\uCDE8\uC18C"},editLabel:{type:String,default:"\uC218\uC815"},closeLabel:{type:String,default:"\uB2EB\uAE30"},deleteLabel:{type:String,default:"\uC0AD\uC81C"},showDelete:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0}},emits:["save","cancel","edit","close","delete"],setup(e,{emit:t}){const l=window._boAreaCompUtil,u=["textarea","htmlEditor","group"],k=i=>i.colSpan!=null?Math.min(i.colSpan,e.cols):u.includes(i.type)?e.cols:1,f=Vue.computed(()=>{const i=[];let n=[],c=0;for(const m of e.columns){if(m.visible&&!m.visible(e.form))continue;if(m.type==="rowBreak"){n.length&&(i.push(n),n=[],c=0);continue}if(m.type==="group"){n.length&&(i.push(n),n=[],c=0),i.push([m]);continue}const T=k(m);c+T>e.cols&&n.length&&(i.push(n),n=[],c=0),n.push(m),c+=T,c>=e.cols&&(i.push(n),n=[],c=0)}return n.length&&i.push(n),i}),b=i=>{const n=k(i),c=i.rowSpan||1;let m="";return n>1&&(m+=`grid-column:span ${Math.min(n,e.cols)};flex:${n};`),c>1&&(m+=`grid-row:span ${c};`),e.labelLeft&&i.type!=="group"&&(m+=`display:grid;grid-template-columns:${e.labelWidth} 1fr;align-items:center;gap:8px;margin-bottom:${e.compact?"2px":"6px"};`),m},y=(i,n={})=>{if(i==="form-save")return t("save");if(i==="form-cancel")return t("cancel");if(i==="form-edit")return t("edit");if(i==="form-close")return t("close");if(i==="form-delete")return t("delete");i==="form-pathPick-clear"?e.form[n.col.key]=null:i==="form-pick-clear"?(e.form[n.col.key]="",n.col.nameKey&&(e.form[n.col.nameKey]=""),n.col.onClear&&n.col.onClear(e.form)):console.warn("[handleBtnAction] unknown cmd:",i)},S=(i,n={})=>{if(i==="field-change"){if(e.errors){const c=n.col,m=e.form[c.key];if(c.validate){const T=c.validate(m,e.form);T?e.errors[c.key]=T:e.errors[c.key]&&delete e.errors[c.key]}else e.errors[c.key]&&m&&delete e.errors[c.key]}if(n.col.onChange)return n.col.onChange(e.form[n.col.key],e.form,n.event)}else if(i==="field-checkbox-change"){const c=n.col,m=n.event;e.form[c.key]=m.target.checked?c.checkedValue!=null?c.checkedValue:"Y":c.uncheckedValue!=null?c.uncheckedValue:"N",e.errors&&e.errors[c.key]&&e.form[c.key]&&delete e.errors[c.key]}else if(i==="field-pathPick-open"){if(n.col.onOpen)return n.col.onOpen(e.form)}else if(i==="field-pick-open"){if(n.col.onOpen)return n.col.onOpen(e.form)}else console.warn("[handleSelectAction] unknown cmd:",i)},z=i=>l.normOptions(i);return{fnColLabel:i=>coUtil.cofColLabel(i),fnColNm:i=>coUtil.cofColNm(i),cfRows:f,cfFieldStyle:b,normOpts:z,dispVal:i=>{const n=e.form[i.key];if(i.fmt)return i.fmt(n,e.form);if(i.type==="select"){const c=z(i.options).find(m=>String(m.value)===String(n));if(c)return c.label}else if(i.type==="checkbox"){const c=i.checkedValue!=null?i.checkedValue:"Y";return n===c?i.checkboxLabel||i.label:"-"}else if(i.type==="multiCheck"){const c=i.separator||"^",m=String(n||"").split(c).filter(Boolean);if(!m.length)return"-";const T=z(i.options);return m.map(v=>(T.find(A=>String(A.value)===v)||{}).label||v).join(", ")}return n==null||n===""?"-":n},fnAutoPlain:i=>e.readonly&&e.plainReadonly&&!["slot","pathPick","pick","readonly","group","rowBreak"].includes(i.type),handleBtnAction:y,handleSelectAction:S}},template:`
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
`},window.BoFormActions={name:"BoFormActions",props:{readonly:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},isNew:{type:Boolean,default:!1},saveDisabled:{type:Boolean,default:!1},saveTitle:{type:String,default:""},saveLabel:{type:String,default:"\uC800\uC7A5"},cancelLabel:{type:String,default:"\uCDE8\uC18C"},editLabel:{type:String,default:"\uC218\uC815"},closeLabel:{type:String,default:"\uB2EB\uAE30"},deleteLabel:{type:String,default:"\uC0AD\uC81C"},cmdPrefix:{type:String,default:""},onDispatch:{type:Function,default:null},btnStyle:{type:String,default:""},editClick:{type:Function,default:null},saveClick:{type:Function,default:null},deleteClick:{type:Function,default:null},cancelClick:{type:Function,default:null},closeClick:{type:Function,default:null}},emits:["save","cancel","edit","close","delete"],setup(e,{emit:t}){const l=f=>{const b=e[f+"Click"];if(typeof b=="function")return b();if(e.cmdPrefix&&e.onDispatch)return e.onDispatch(e.cmdPrefix+"-"+f);t(f)},u=Vue.computed(()=>!e.isNew&&(e.showDelete||!!e.deleteClick)),k=Vue.computed(()=>e.showCancel&&!e.isNew);return{fire:l,cfShowDelete:u,cfShowCancel:k}},template:`
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
`},window.BoGroupTable={name:"BoGroupTable",props:{columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},selectedKey:{type:[String,Number],default:null},tableStyle:{type:String,default:""},loading:{type:Boolean,default:!1},emptyText:{type:String,default:"\uC870\uD68C \uACB0\uACFC \uC5C6\uC74C"},summaryRow:{type:Object,default:null},summaryPos:{type:String,default:"bottom"},summaryLabel:{type:String,default:"\uD569\uACC4"},summaryBg:{type:String,default:"#1e2f4a"},summaryBorderColor:{type:String,default:"#2563eb"},summaryTextColor:{type:String,default:"#e8f4ff"},striped:{type:Boolean,default:!0},hoverBg:{type:String,default:"#dbeafe"},stripeBg:{type:String,default:"#f7f8fc"},colBorder:{type:String,default:""},maxHeight:{type:String,default:""}},emits:["cell-click"],setup(e,{emit:t}){const{computed:l,ref:u}=Vue,k=u(null),f=l(()=>e.maxHeight?`max-height:${e.maxHeight};overflow:auto;`:"overflow-x:auto;"),b=l(()=>e.columns),y=l(()=>e.columns.map(a=>a.colGroup?a.colGroup.split("^").map(x=>x.trim()).filter(Boolean):[])),S=l(()=>{let a=0;for(const x of y.value)x.length>a&&(a=x.length);return a}),z=l(()=>{const a={};for(const x of e.columns)x.colGroup&&!a[x.colGroup]&&(a[x.colGroup]=x);return a}),B=l(()=>e.columns.filter(a=>a.pin==="left").length),K=l(()=>{const a={};let x=0;for(const C of e.columns)C.pin==="left"&&(a[C.key]=x,x+=C.width||60);return a}),D=l(()=>{const a={};let x=0;for(let C=e.columns.length-1;C>=0;C--){const _=e.columns[C];_.pin==="right"&&(a[_.key]=x,x+=_.width||60)}return a}),w=l(()=>{let a=null;for(const x of e.columns)x.pin==="left"&&(a=x.key);return a}),i=l(()=>{for(const a of e.columns)if(a.pin==="right")return a.key;return null}),n=(a,x,C)=>{if(!a.pin)return"";const _=C!=null&&e.selectedKey!=null&&C[e.rowKey]===e.selectedKey;let M="position:sticky;z-index:"+x+";";const R=[];if(a.pin==="left"){const s=K.value[a.key]||0;M+="left:"+s+"px;",_&&(s===0&&R.push("inset 2px 0 0 #2563eb"),R.push("inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb")),a.key===w.value&&R.push("inset -2px 0 0 #94a3b8","3px 0 4px rgba(0,0,0,.08)")}else M+="right:"+(D.value[a.key]||0)+"px;",_&&R.push("inset -2px 0 0 #2563eb","inset 0 2px 0 #2563eb","inset 0 -2px 0 #2563eb"),a.key===i.value&&R.push("inset 2px 0 0 #94a3b8","-3px 0 4px rgba(0,0,0,.08)");return R.length&&(M+="box-shadow:"+R.join(",")+";"),M},c=(a,x)=>{if(!a)return"";const C=String(a).split("^");return C[Math.min(x,C.length-1)]},m=l(()=>{const a=e.columns,x=y.value,_=S.value+1,M=[];for(let R=0;R<_;R++){const s=[];let p=0;for(;p<a.length;){const g=a[p],O=x[p];if(O.length===0)R===0&&s.push({key:g.key,label:g.label,rowspan:_,colspan:1,title:g.headerTip||"",thStyle:"text-align:center;vertical-align:middle;"+(g.width?"width:"+g.width+"px;":"")+(g.pin?"background:"+(g.thBg||"linear-gradient(180deg,#dbebfa,#b7d3f2)")+";color:#1d4d78;border-bottom:2px solid #4a8ac2;":"")+n(g,5)+(g.thStyle||"")}),p++;else if(R<O.length){let W=0;for(;p+W<a.length;){const Z=x[p+W];if(!Z||Z.length===0)break;let ee=Z.length>R;if(ee){for(let $=0;$<=R;$++)if((Z[$]||"")!==(O[$]||"")){ee=!1;break}}if(!ee)break;W++}const q=a[p],d=c(q.colGroupBg,R),h=c(q.colGroupColor,R),L=c(q.colGroupBorderColor,R)?"#94a3b8":"",E=a[p+W-1],U=q.pin?n(q,5)+(E&&E.key===w.value?"border-right:2px solid #94a3b8;":""):"",X=["text-align:center;vertical-align:middle;padding:4px;",R>0?"font-size:10px;":"",d?"background:"+d+";":"",h?"color:"+h+";":"",L?"border-left:2px solid "+L+";border-right:2px solid "+L+";":"",U].join("");s.push({key:"__g"+R+"_"+p,label:O[R],rowspan:1,colspan:W,thStyle:X}),p+=W}else if(R===O.length){const W=z.value[g.colGroup]||g,q=c(W.colGroupBorderColor,R-1)?"#94a3b8":"",d=p===0||(x[p-1]||[]).join("^")!==O.join("^"),h=p>=a.length-1||(x[p+1]||[]).join("^")!==O.join("^"),L=c(W.colGroupBg,R-1);s.push({key:g.key,label:g.label,rowspan:_-R,colspan:1,title:g.headerTip||"",thStyle:["text-align:center;vertical-align:middle;",g.thBg?"background:"+g.thBg+";":L?"background:"+L+";":"",g.thColor?"color:"+g.thColor+";font-weight:700;":"",d&&q?"border-left:2px solid "+q+";":"",h&&q?"border-right:2px solid "+q+";":"",g.width?"min-width:"+g.width+"px;":"",n(g,5)].join("")}),p++}else p++}M.push(s)}return M}),T=(a,x)=>{const C=e.selectedKey!=null&&a[e.rowKey]===e.selectedKey;return k.value===a[e.rowKey]?e.hoverBg:C?"#f0f5ff":e.striped&&x%2!==0?e.stripeBg:"#fff"},v=l(()=>{const a=y.value,x="#94a3b8";return e.columns.map((C,_)=>{if(!C.colGroup)return null;const M=_===0||(a[_-1]||[]).join("^")!==a[_].join("^"),R=_>=e.columns.length-1||(a[_+1]||[]).join("^")!==a[_].join("^");return{isFirst:M,isLast:R,bc:x}})}),A=(a,x,C,_)=>{const M=a.tdStyle?a.tdStyle(x):"text-align:"+(a.align||"center")+";",R=e.colBorder?M+"border-right:"+e.colBorder+";":M,s=v.value[_],p=s?(s.isFirst?"border-left:2px solid "+s.bc+";":"")+(s.isLast?"border-right:2px solid "+s.bc+";":""):"";return R+p+"background:"+T(x,C)+";"+n(a,1,x)},N=(a,x)=>{const C=e.selectedKey!=null&&a[e.rowKey]===e.selectedKey;let _="cursor:pointer;font-size:12px;background:"+T(a,x)+";";return C&&(_+="outline:2px solid #2563eb;outline-offset:-1px;"),_},G=(a,x)=>t("cell-click",{row:a,idx:x}),F=(a,x,C)=>{a.stopPropagation(),x.onBadgeClick(C,x,a)},j=a=>{k.value=a[e.rowKey]},H=()=>{k.value=null},V=l(()=>{const a=y.value;for(let x=0;x<e.columns.length;x++)if(a[x].length===0)return e.columns[x].key;return null}),I=l(()=>{if(!e.summaryRow)return[];const a=y.value,x=V.value;return e.columns.map((C,_)=>{const M=n(C,3)+(C.pin?"background:"+e.summaryBg+";":""),R=(C.tdStyle?C.tdStyle(e.summaryRow):"text-align:"+(C.align||"center")+";")+M;if(C.key===x)return{tdSt:R,type:"label"};if(a[_].length===0)return{tdSt:"text-align:center;"+M,type:"blank"};if(C.fmt){const p=C.cellStyle?C.cellStyle(e.summaryRow):"";return{tdSt:R,type:"fmt",val:C.fmt(e.summaryRow,-1),cs:p}}const s=e.summaryRow[C.key];return{tdSt:R,type:"text",val:s!=null?s:""}})});return{cfLeafCols:b,cfHeaderRows:m,cfPinLeftCount:B,fnTdStyle:A,fnRowStyle:N,onCellClick:G,handleBadgeClick:F,cfSummaryTdList:I,hoveredKey:k,onRowMouseEnter:j,onRowMouseLeave:H,cfWrapStyle:f}},template:`
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
  `},window.BoMatrix={name:"BoMatrix",props:{rows:{type:Array,default:()=>[]},cols:{type:Array,default:()=>[]},rowKey:{type:String,default:null},colKey:{type:String,default:null},rowLabel:{type:[String,Function],default:null},colLabel:{type:[String,Function],default:null},rowStyleKey:{type:String,default:null},colStyleKey:{type:String,default:null},corner:{type:String,default:""},orient:{type:String,default:"row"},cellType:{type:String,default:"checkbox"},cell:{type:Function,default:null},cellStyle:{type:Function,default:null},cellTitle:{type:Function,default:null},cellDisabled:{type:Function,default:null},options:{type:Array,default:()=>[]},allOn:{type:Function,default:null},headerToggle:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},stickyFirst:{type:Boolean,default:!0},maxHeight:{type:String,default:"420px"},cellWidth:{type:String,default:"62px"},emptyText:{type:String,default:"\uD45C\uC2DC\uD560 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."},tone:{type:String,default:"blue"},rowTotal:{type:Function,default:null},colTotal:{type:Function,default:null},grandTotal:{type:Function,default:null},totalLabel:{type:String,default:"\uD569\uACC4"}},emits:["cell-change","row-header","col-header"],setup(e,{emit:t}){const{computed:l}=Vue,u=l(()=>e.orient==="col"),k=l(()=>(u.value?e.cols:e.rows)||[]),f=l(()=>(u.value?e.rows:e.cols)||[]),b=l(()=>u.value?e.colKey:e.rowKey),y=l(()=>u.value?e.rowKey:e.colKey),S=(s,p)=>s?typeof p=="function"?p(s):typeof p=="string"?s[p]:s.nm||s.label||s.name||"":"",z=s=>S(s,u.value?e.colLabel:e.rowLabel),B=s=>S(s,u.value?e.rowLabel:e.colLabel),K=s=>w(s,u.value?e.colStyleKey:e.rowStyleKey),D=s=>w(s,u.value?e.rowStyleKey:e.colStyleKey),w=(s,p)=>{const g=(s&&p?s[p]:null)||"";return String(g).charAt(0)==="#"?g:""},i=(s,p)=>b.value&&s?s[b.value]:p,n=(s,p)=>y.value&&s?s[y.value]:p,c=(s,p)=>u.value?[p,s]:[s,p],m=(s,p)=>{const g=c(s,p);return e.cell?e.cell(g[0],g[1]):null},T=(s,p)=>{const g=c(s,p);return e.cellStyle&&e.cellStyle(g[0],g[1])||""},v=(s,p)=>{const g=c(s,p);return e.cellTitle&&e.cellTitle(g[0],g[1])||""},A=(s,p)=>{if(e.readonly)return!0;const g=c(s,p);return e.cellDisabled?!!e.cellDisabled(g[0],g[1]):!1},N=(s,p)=>{const g=p==="row"?f.value:k.value;if(!g.length)return!1;if(e.allOn){const O=u.value?p==="row"?"col":"row":p;return!!e.allOn(g,O,s)}return g.every(O=>!!m(p==="row"?s:O,p==="row"?O:s))},G=s=>t(u.value?"col-header":"row-header",s),F=s=>t(u.value?"row-header":"col-header",s),j=(s,p,g)=>{const O=c(s,p);t("cell-change",O[0],O[1],g)},H=(s,p)=>u.value?p:s,V=(s,p)=>u.value?s:p,I=l(()=>!!(e.rowTotal||e.colTotal||e.grandTotal)),a=(s,p)=>{const g=u.value?e.colTotal:e.rowTotal;return g?g(s,p):""},x=(s,p)=>{const g=u.value?e.rowTotal:e.colTotal;return g?g(s,p):""},C=l(()=>(e.options||[]).map(s=>typeof s=="string"?{value:s,label:s}:{value:s.value!=null?s.value:s.codeValue,label:s.label!=null?s.label:s.codeLabel})),_=l(()=>e.tone==="plain"?"#f5f5f5":"#dbeafe"),M=l(()=>e.tone==="plain"?"#fafafa":"#eff6ff"),R=l(()=>e.tone==="plain"?"#e0e0e0":"#bae0ff");return{cfRows:k,cfCols:f,fnRowK:i,fnColK:n,fnRowLabel:z,fnColLabel:B,fnRowSwatch:K,fnColSwatch:D,fnCellVal:m,fnCellStyle:T,fnCellTitle:v,fnCellOff:A,fnLineAllOn:N,onRowHead:G,onColHead:F,onCell:j,cfOpts:C,cfHeadBg:_,cfSideBg:M,cfLineC:R,fnSrcRowIdx:H,fnSrcColIdx:V,cfHasTotal:I,fnLineTotal:a,fnFootTotal:x}},template:`
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
