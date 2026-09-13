(function(){const{computed:C}=Vue;window.ZdSimulControlPanel={name:"ZdSimulControlPanel",emits:["start","stop","run-once","preview","preview-create"],props:{cfg:{type:Object,required:!0},state:{type:Object,required:!0},baseCfgColumns:{type:Array,required:!0},cfIsRunning:{type:Boolean,default:!1},cfSuccessRate:{type:Number,default:0},accentColor:{type:String,default:"linear-gradient(90deg,#3b82f6,#60a5fa)"},accentActive:{type:String,default:"background:#eff6ff;border:1.5px solid #2563eb;color:#1d4ed8;"}},setup(t,{emit:n}){const{ref:o}=Vue,a=C(()=>t.state.totalRun>0||t.cfIsRunning),r=()=>n("start"),d=()=>n("stop"),c=o(1),y=()=>n("run-once",c.value),v=()=>n("preview"),i=o(!1),x=o(null),h=()=>{i.value=!i.value,i.value||(x.value=null)},u=f=>{var l,p;try{x.value=JSON.parse(((l=f.detail)==null?void 0:l.json)||"null")}catch{x.value=((p=f.detail)==null?void 0:p.json)||null}};Vue.onMounted(()=>window.addEventListener("zd-preview",u)),Vue.onBeforeUnmount(()=>window.removeEventListener("zd-preview",u));const m=[{label:"-- \uD504\uB9AC\uC14B \uC120\uD0DD --",intervalVal:null},{label:"\uBE60\uB978 \uD14C\uC2A4\uD2B8  (5\uCD08\xB71\uAC74\xB71\uBD84)",intervalVal:5,intervalUnit:"sec",countMin:1,countMax:1,durationMin:1},{label:"\uAE30\uBCF8 (20\uCD08\xB71~2\uAC74\xB73\uBD84)",intervalVal:20,intervalUnit:"sec",countMin:1,countMax:2,durationMin:3},{label:"\uC18C\uB7C9 \uC9C0\uC18D (30\uCD08\xB71\uAC74\xB710\uBD84)",intervalVal:30,intervalUnit:"sec",countMin:1,countMax:1,durationMin:10},{label:"\uC911\uB7C9 (30\uCD08\xB73~5\uAC74\xB710\uBD84)",intervalVal:30,intervalUnit:"sec",countMin:3,countMax:5,durationMin:10},{label:"\uB300\uB7C9 \uB2E8\uC2DC\uAC04 (10\uCD08\xB75~10\uAC74\xB73\uBD84)",intervalVal:10,intervalUnit:"sec",countMin:5,countMax:10,durationMin:3},{label:"\uBD84\uB2E8\uC704 \uC18C\uB7C9 (1\uBD84\xB71~3\uAC74\xB730\uBD84)",intervalVal:1,intervalUnit:"min",countMin:1,countMax:3,durationMin:30},{label:"\uBD84\uB2E8\uC704 \uC911\uB7C9 (1\uBD84\xB75~10\uAC74\xB730\uBD84)",intervalVal:1,intervalUnit:"min",countMin:5,countMax:10,durationMin:30},{label:"\uC7A5\uAE30 \uC18C\uB7C9 (2\uBD84\xB71\uAC74\xB760\uBD84)",intervalVal:2,intervalUnit:"min",countMin:1,countMax:1,durationMin:60},{label:"\uC2A4\uD2B8\uB808\uC2A4 (5\uCD08\xB710~20\uAC74\xB75\uBD84)",intervalVal:5,intervalUnit:"sec",countMin:10,countMax:20,durationMin:5},{label:"\uBB34\uC81C\uD55C (30\uCD08\xB71~3\uAC74)",intervalVal:30,intervalUnit:"sec",countMin:1,countMax:3,durationMin:0}];return{cfHasStats:a,onStart:r,onStop:d,onRunOnce:y,onPreview:v,runOnceCount:c,PRESETS:m,onPreset:f=>{const l=Number(f.target.value);if(!l)return;const p=m[l];if(!p||p.intervalVal===null)return;const e=t.cfg;e.intervalVal=p.intervalVal,e.intervalUnit=p.intervalUnit,e.countMin=p.countMin,e.countMax=p.countMax,e.durationMin=p.durationMin,f.target.value="0"},lastExpanded:i,previewJson:x,onToggleLast:h}},template:`
<div class="card" style="padding:10px 14px;background:#dde3ed;">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
    <!-- \uD504\uB9AC\uC14B select (\uB9E8 \uC67C\uCABD) -->
    <select :disabled="cfIsRunning" @change="onPreset"
      style="font-size:11px;padding:3px 8px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#475569;height:26px;cursor:pointer;max-width:220px;">
      <option value="0">\u26A1 \uD504\uB9AC\uC14B</option>
      <option v-for="(p,i) in PRESETS.slice(1)" :key="i" :value="i+1">{{ p.label }}</option>
    </select>

    <div class="list-title" style="margin:0;">\u2699 \uC2E4\uD589 \uC81C\uC5B4</div>

    <!-- \uC2DC\uBBAC\uC5EC\uBD80 -->
    <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748b;white-space:nowrap;">
      <span>\uC2DC\uBBAC\uC5EC\uBD80</span>
      <select v-model="cfg.simulYn" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 6px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option value="Y">\uC608</option>
        <option value="N">\uC544\uB2C8\uC624</option>
      </select>
    </div>

    <!-- \uC791\uC5C5 \uC720\uD615 \uD1A0\uAE00 (\uC778\uB77C\uC778) -->
    <div style="display:flex;gap:6px;">
      <label v-for="opt in [{value:'create',label:'+ \uC0DD\uC131'},{value:'update',label:'\u2014 \uC218\uC815'}]" :key="opt.value"
        :style="'cursor:pointer;padding:3px 10px;border-radius:5px;font-size:12px;font-weight:500;transition:all .15s;' + (cfg.mode===opt.value ? accentActive : 'background:#f8fafc;border:1.5px solid #e2e8f0;color:#64748b;')">
        <input type="radio" :value="opt.value" v-model="cfg.mode" style="display:none;">{{ opt.label }}
      </label>
    </div>

    <!-- \uC2E4\uD589 \uC8FC\uAE30 \uC778\uB77C\uC778 select (\uC2DC\uC791 \uBC84\uD2BC \uC67C\uCABD) -->
    <div style="margin-left:auto;display:flex;align-items:center;gap:5px;">
      <button class="btn" style="padding:3px 9px;font-size:12px;background:#fdf4ff;border:1px solid #e9d5ff;color:#7c3aed;" @click="onPreview">\u{1F50D} \uC2DC\uBBAC\uC815\uBCF4\uC0DD\uC131</button>
      <span style="width:1px;height:20px;background:#cbd5e1;display:inline-block;margin:0 2px;flex-shrink:0;"></span>
      <span style="font-size:11px;color:#94a3b8;white-space:nowrap;">\u{1F550}</span>
      <select v-model.number="cfg.intervalVal" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 5px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option v-for="v in [5,10,15,20,30,60,120,300]" :key="v" :value="v">{{ v }}</option>
      </select>
      <select v-model="cfg.intervalUnit" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 5px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option value="sec">\uCD08</option>
        <option value="min">\uBD84</option>
      </select>
      <span style="font-size:11px;color:#94a3b8;white-space:nowrap;">\uB9C8\uB2E4</span>
      <select v-model.number="cfg.countMin" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 5px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option v-for="v in [1,2,3,5,10,20]" :key="v" :value="v">{{ v }}</option>
      </select>
      <span style="font-size:11px;color:#94a3b8;">~</span>
      <select v-model.number="cfg.countMax" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 5px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option v-for="v in [1,2,3,5,10,20]" :key="v" :value="v">{{ v }}</option>
      </select>
      <span style="font-size:11px;color:#94a3b8;white-space:nowrap;">\uAC74 \xB7</span>
      <select v-model.number="cfg.durationMin" :disabled="cfIsRunning"
        style="font-size:11px;padding:3px 5px;border:1px solid #e2e8f0;border-radius:5px;background:#f8fafc;color:#334155;height:26px;cursor:pointer;">
        <option :value="0">\uBB34\uC81C\uD55C</option>
        <option v-for="v in [1,3,5,10,30,60]" :key="v" :value="v">{{ v }}\uBD84</option>
      </select>
      <!-- \uC2E4\uD589 \uBC84\uD2BC -->
      <button v-if="!cfIsRunning" class="btn btn_search" style="padding:3px 14px;font-size:12px;margin-left:4px;" @click="onStart">\u25B6 \uC2A4\uCF00\uC904\uC2DC\uC791</button>
      <button v-else class="btn btn_delete" style="padding:3px 14px;font-size:12px;margin-left:4px;" @click="onStop">\u23F9 \uC815\uC9C0</button>
      <span style="width:1px;height:20px;background:#cbd5e1;display:inline-block;margin:0 2px;flex-shrink:0;"></span>
      <input type="number" v-model.number="runOnceCount" min="1" max="100"
        style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:5px;font-size:12px;padding:3px 4px;height:26px;" />
      <button class="btn btn_preview" style="padding:3px 9px;font-size:12px;" @click="onRunOnce">\uD68C\uC2E4\uD589</button>
    </div>
  </div>

  <!-- \uACF5\uD1B5 \uC124\uC815 \uD3FC \u2014 Prefix / addSuffix \uB9CC (\uC8FC\uAE30\xB7\uAC74\uC218\xB7\uC2DC\uAC04\uC740 \uD5E4\uB354 select\uB85C \uC774\uB3D9) -->
  <div class="bo-form-compact">
    <bo-form-area :columns="['namePrefix','addSuffix'].map(k => baseCfgColumns.find(c => c.key === k)).filter(Boolean)"
      :form="cfg" :show-actions="false" :cols="3" />
  </div>

  <!-- \uB3C4\uBA54\uC778\uBCC4 \uCD94\uAC00 \uC601\uC5ED (\uC2AC\uB86F) -->
  <slot />

  <!-- \uD1B5\uACC4 \uC139\uC158 (\uC2E4\uD589 \uC774\uB825\uC774 \uC788\uC744 \uB54C\uB9CC) -->
  <div v-if="cfHasStats" style="border-top:1px solid #f1f5f9;padding-top:8px;margin-top:8px;display:flex;align-items:center;gap:10px;">
    <!-- \uC9C4\uD589 \uBC14 -->
    <div v-if="cfIsRunning" style="flex:1;">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#888;margin-bottom:3px;">
        <span>{{ state.progress }}% \uC9C4\uD589</span><span>{{ state.remainSec }}\uCD08 \uB0A8\uC74C</span>
      </div>
      <div style="height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden;">
        <div :style="'height:100%;border-radius:3px;transition:width .3s;width:'+state.progress+'%;background:'+accentColor"></div>
      </div>
    </div>

    <!-- \uD1B5\uACC4 \uBBF8\uB2C8 (\uAC00\uB85C \uD55C \uC904) -->
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="display:flex;align-items:center;gap:4px;background:#f8fafc;border-radius:6px;padding:4px 10px;">
        <span style="font-size:15px;font-weight:700;color:#334155;">{{ state.totalRun }}</span>
        <span style="font-size:10px;color:#94a3b8;">\uC2E4\uD589</span>
      </div>
      <div style="display:flex;align-items:center;gap:4px;background:#f0fdf4;border-radius:6px;padding:4px 10px;">
        <span style="font-size:15px;font-weight:700;color:#16a34a;">{{ state.totalOk }}</span>
        <span style="font-size:10px;color:#86efac;">\uC131\uACF5</span>
      </div>
      <div style="display:flex;align-items:center;gap:4px;background:#fef2f2;border-radius:6px;padding:4px 10px;">
        <span style="font-size:15px;font-weight:700;color:#dc2626;">{{ state.totalFail }}</span>
        <span style="font-size:10px;color:#fca5a5;">\uC2E4\uD328</span>
      </div>
      <div v-if="state.totalRun > 0" style="width:80px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#94a3b8;margin-bottom:2px;">
          <span>\uC131\uACF5\uB960</span><span>{{ cfSuccessRate }}%</span>
        </div>
        <div style="height:4px;background:#fee2e2;border-radius:2px;overflow:hidden;">
          <div :style="'height:100%;background:#22c55e;border-radius:2px;width:'+cfSuccessRate+'%'"></div>
        </div>
      </div>
    </div>

    <!-- \uCD5C\uADFC \uACB0\uACFC \uD1A0\uAE00 -->
    <div v-if="state.lastCreated &amp;&amp; state.lastCreated.length" @click="onToggleLast"
      style="display:inline-flex;align-items:center;gap:5px;cursor:pointer;font-size:11px;color:#6366f1;user-select:none;padding:2px 6px;border-radius:4px;border:1px solid #c7d2fe;background:#eef2ff;">
      <span>{{ lastExpanded ? '\u25B2' : '\u25BC' }}</span>
      <span>\uCD5C\uADFC \uACB0\uACFC {{ state.lastCreated.length }}\uAC74</span>
    </div>
  </div>

  <!-- \uCD5C\uADFC \uACB0\uACFC JSON \uBDF0 (\uD1A0\uAE00) -->
  <div v-if="lastExpanded &amp;&amp; !previewJson"
    style="margin-top:6px;background:#1e1e2e;border-radius:6px;border:1px solid #374151;padding:8px 10px;max-height:260px;overflow-y:auto;font-family:monospace;font-size:11px;line-height:1.6;color:#a5f3fc;white-space:pre;word-break:break-all;">{{ JSON.stringify(state.lastCreated, null, 2) }}</div>

  <!-- \uBBF8\uB9AC\uBCF4\uAE30 \uD14C\uC774\uBE14 \uD328\uB110 -->
  <div v-if="previewJson"
    style="margin-top:6px;background:#f8f7ff;border:1.5px solid #c4b5fd;border-radius:8px;padding:10px 12px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:11px;color:#7c3aed;font-weight:600;">\u{1F4CB} \uC804\uC1A1 \uB370\uC774\uD130 \uBBF8\uB9AC\uBCF4\uAE30</span>
        <!-- method + url \uD45C\uC2DC (\uB2E8\uAC74 \uCEA1\uCC98 \uC2DC) -->
        <template v-if="previewJson &amp;&amp; previewJson.method">
          <span :style="'font-size:10px;font-weight:700;padding:1px 5px;border-radius:3px;color:#fff;background:'+(previewJson.method==='POST'?'#7c3aed':previewJson.method==='PUT'?'#2563eb':'#d97706')">{{ previewJson.method }}</span>
          <span style="font-size:10px;font-family:monospace;color:#475569;">{{ previewJson.url }}</span>
        </template>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <button @click="$emit('preview-create')" style="font-size:11px;padding:2px 10px;background:#ecfdf5;border:1px solid #6ee7b7;color:#065f46;border-radius:4px;cursor:pointer;font-weight:600;">\u26A1 \uBBF8\uB9AC\uBCF4\uAE30 \uC0DD\uC131</button>
        <button @click="previewJson=null" style="font-size:13px;color:#94a3b8;background:none;border:none;cursor:pointer;padding:0 4px;line-height:1;">\u2715</button>
      </div>
    </div>
    <!-- \uB2E8\uAC74: body\uB97C \uBA54\uC778\uC73C\uB85C, \uB2E4\uAC74: \uC804\uCCB4 \uD45C\uC2DC -->
    <zd-preview-table :data="previewJson ? (previewJson.body !== undefined ? previewJson.body : previewJson) : null" />
  </div>
</div>`};const{computed:_,ref:D,reactive:A}=Vue;window.ZdSimulLogPanel={name:"ZdSimulLogPanel",emits:["clear","set-page","search-log"],props:{logs:{type:Array,required:!0},logCols:{type:Array,required:!0},pager:{type:Object,default:()=>({pageNo:1,pageTotalCount:0,pageTotalPage:1,pageNums:[1],pageSize:10,pageSizes:[10,20,50]})},logSearch:{type:Object,default:()=>({uiNm:"",userNm:"",desc:"",status:"",dateFrom:"",dateTo:""})}},setup(t,{emit:n}){const o=()=>n("clear"),a=e=>n("set-page",e),r=()=>n("search-log"),d=D(null),c=e=>{const s=e.ts+"_"+e.targetId;d.value=d.value===s?null:s},y=e=>d.value===e.ts+"_"+e.targetId,v=e=>e?e.split(/\s*\|\s*/).map((s,S)=>{const b=s.indexOf(":");return b>0&&b<30?{label:s.slice(0,b).trim(),value:s.slice(b+1).trim()}:{label:S===0?"\uB0B4\uC6A9":"\uD56D\uBAA9"+S,value:s.trim()}}).filter(s=>s.value):[],i=()=>window.ZdSimulBase,x=e=>i()&&e.domain?i()._DOMAIN_PAGE_MAP[e.domain]:null,h=e=>i()&&i()._openBoPage(e),u=e=>i()&&i()._openFoPage(e),m=e=>i()&&i()._openFoLogin(e),O=e=>i()&&i()._openFoProfile(e),f=e=>i()&&i()._openKanban(e),l=A({show:!1,claimId:""});return{onClear:o,onSetPage:a,onSearch:r,expandedId:d,onToggleExpand:c,isExpanded:y,parseDesc:v,cfDomainMeta:x,onOpenBo:h,onOpenFo:u,onOpenFoLogin:m,onOpenFoProfile:O,onOpenKanban:f,onOpenCalc:e=>{e.targetId&&(l.claimId=e.targetId,l.show=!0)},calcModal:l}},template:`
<div class="card" style="padding:14px 16px;background:#dde3ed;">
  <!-- \uCE74\uB4DC \uD5E4\uB354 -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
    <div class="list-title" style="margin:0;">\u{1F4CB} \uC2E4\uD589 \uB85C\uADF8</div>
    <button class="btn btn_reset" @click="onClear">\uC0C8\uB85C\uACE0\uCE68</button>
  </div>

  <!-- \uAC80\uC0C9 \uBC14 -->
  <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap;">
    <span style="font-size:11px;color:#94a3b8;font-weight:600;">\u25CF \uBAA9\uB85D \uCD1D {{ pager.pageTotalCount }}\uAC74</span>
    <div style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
      <input v-model="logSearch.dateFrom" type="date" @keyup.enter="onSearch"
        style="height:26px;padding:0 6px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;outline:none;color:#334155;" />
      <span style="font-size:11px;color:#94a3b8;">~</span>
      <input v-model="logSearch.dateTo" type="date" @keyup.enter="onSearch"
        style="height:26px;padding:0 6px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;outline:none;color:#334155;" />
      <input v-model="logSearch.uiNm" type="text" placeholder="\uD654\uBA74\uBA85" @keyup.enter="onSearch"
        style="width:100px;height:26px;padding:0 7px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;outline:none;color:#334155;" />
      <input v-model="logSearch.userNm" type="text" placeholder="\uB4F1\uB85D\uC790" @keyup.enter="onSearch"
        style="width:70px;height:26px;padding:0 7px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;outline:none;color:#334155;" />
      <input v-model="logSearch.desc" type="text" placeholder="\uB0B4\uC6A9" @keyup.enter="onSearch"
        style="width:110px;height:26px;padding:0 7px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;outline:none;color:#334155;" />
      <select v-model="logSearch.status"
        style="height:26px;padding:0 6px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#fff;color:#334155;">
        <option value="">\uC131\uACF5/\uC2E4\uD328 \uC804\uCCB4</option>
        <option value="SUCCESS">\u2713 \uC131\uACF5</option>
        <option value="FAIL">\u2717 \uC2E4\uD328</option>
      </select>
      <button class="btn btn_search" style="height:26px;padding:0 10px;font-size:11px;" @click="onSearch">\uC870\uD68C</button>
    </div>
  </div>

  <!-- \uB85C\uADF8 \uD14C\uC774\uBE14 (expand \uD589 \uC9C0\uC6D0) -->
  <div style="overflow-x:auto;">
    <table class="admin-table bo-table" style="font-size:11px;width:100%;">
      <thead><tr>
        <th style="width:28px;text-align:center;"></th>
        <th style="width:36px;text-align:center;">\uBC88\uD638</th>
        <th style="width:140px;">\uB4F1\uB85D\uC77C\uC2DC</th>
        <th style="width:110px;">\uD654\uBA74\uBA85</th>
        <th style="width:72px;text-align:center;">\uB4F1\uB85D\uC790</th>
        <th style="width:44px;text-align:center;">\uC720\uD615</th>
        <th style="width:36px;text-align:center;">\uACB0\uACFC</th>
        <th>\uB0B4\uC6A9</th>
        <th style="width:180px;">\uC2E4\uD328 \uC0AC\uC720</th>
        <th style="width:140px;text-align:center;">\uB370\uC774\uD130ID</th>
        <th style="width:200px;text-align:center;">\uAE30\uB2A5</th>
      </tr></thead>
      <tbody v-if="!logs.length">
        <tr><td colspan="11" style="text-align:center;padding:24px;color:#94a3b8;">
          \uC544\uC9C1 \uC2E4\uD589 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \u25B6 \uC2A4\uCF00\uC904\uC2DC\uC791 \uB610\uB294 \uD68C\uC2E4\uD589\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.
        </td></tr>
      </tbody>
      <template v-for="(row, idx) in logs" :key="row.ts+'_'+row.targetId+'_'+idx">
        <!-- \uBA54\uC778 \uD589 -->
        <tbody>
          <tr :style="row.status==='fail' ? 'background:#fff5f5;' : (isExpanded(row) ? 'background:#f8faff;' : '')">
            <!-- \uD3BC\uCE58\uAE30 \uBC84\uD2BC -->
            <td style="text-align:center;padding:4px 2px;cursor:pointer;" @click="onToggleExpand(row)">
              <span style="font-size:13px;color:#94a3b8;user-select:none;transition:transform .15s;display:inline-block;"
                :style="isExpanded(row) ? 'transform:rotate(90deg);color:#6366f1;' : ''">\u25B6</span>
            </td>
            <td style="text-align:center;color:#94a3b8;">{{ pager.pageTotalCount - (pager.pageNo-1)*(pager.pageSize||10) - idx }}</td>
            <td style="color:#64748b;font-family:monospace;font-size:10px;">{{ row.ts }}</td>
            <td style="color:#6366f1;font-size:11px;">{{ row.uiNm }}</td>
            <td style="text-align:center;color:#475569;">{{ row.userNm }}</td>
            <td style="text-align:center;">
              <span :class="'badge '+(row.mode==='\uC0DD\uC131' ? 'badge-blue' : 'badge-orange')" style="font-size:10px;">{{ row.mode }}</span>
            </td>
            <td style="text-align:center;font-weight:700;font-size:13px;"
              :style="row.status==='ok' ? 'color:#16a34a' : 'color:#dc2626'">
              {{ row.status==='ok' ? '\u2713' : '\u2717' }}
            </td>
            <td :style="row.status==='fail' ? 'background:#fff5f5;' : ''">{{ row.desc }}</td>
            <td style="color:#ef4444;font-size:11px;">{{ row.reason }}</td>
            <!-- \uB370\uC774\uD130ID \uCEEC\uB7FC -->
            <td style="text-align:center;padding:4px 6px;white-space:nowrap;">
              <template v-if="row.targetId">
                <div style="font-size:10px;color:#94a3b8;margin-bottom:2px;">
                  {{ cfDomainMeta(row) ? cfDomainMeta(row).idLabel : '\uB370\uC774\uD130ID' }}
                </div>
                <div style="font-size:11px;color:#334155;font-family:monospace;font-weight:600;">{{ row.targetId }}</div>
                <!-- meta\uC5D0\uC11C \uD68C\uC6D0\uBA85/\uBD80\uAC00\uC815\uBCF4 \uD45C\uC2DC -->
                <div v-if="row.meta &amp;&amp; (row.meta.memberId || row.meta.memberNm)" style="font-size:10px;color:#6366f1;margin-top:1px;">
                  {{ row.meta.memberNm || row.meta.memberId || '' }}
                </div>
                <div v-else-if="row.domain === '\uD68C\uC6D0' &amp;&amp; row.desc" style="font-size:10px;color:#6366f1;margin-top:1px;">
                  {{ row.desc.replace(/^[[^]]+]s*/, '').split(' / ')[0] }}
                </div>
              </template>
              <span v-else style="font-size:10px;color:#cbd5e1;">-</span>
            </td>
            <!-- \uAE30\uB2A5 \uBC84\uD2BC \uCEEC\uB7FC -->
            <td style="text-align:center;padding:4px 6px;white-space:nowrap;">
              <template v-if="row.targetId">
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).bo"
                  class="btn btn_detail" style="padding:1px 7px;font-size:10px;height:20px;margin:1px;"
                  @click.stop="onOpenBo(row)" title="\uAD00\uB9AC\uC790 \uC0C1\uC138 \uC5F4\uAE30">BO\uC0C1\uC138</button>
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).fo"
                  class="btn btn_preview" style="padding:1px 7px;font-size:10px;height:20px;margin:1px;"
                  @click.stop="onOpenFo(row)" title="\uC0AC\uC6A9\uC790 \uD654\uBA74 \uC5F4\uAE30">FO\uC0C1\uC138</button>
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).foLogin"
                  style="padding:1px 7px;font-size:10px;height:20px;margin:1px;background:#dbeafe;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:4px;cursor:pointer;"
                  @click.stop="onOpenFoLogin(row)" title="FO \uB85C\uADF8\uC778">FO\uB85C\uADF8\uC778</button>
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).foProfile"
                  style="padding:1px 7px;font-size:10px;height:20px;margin:1px;background:#ede9fe;color:#6d28d9;border:1px solid #ddd6fe;border-radius:4px;cursor:pointer;"
                  @click.stop="onOpenFoProfile(row)" title="FO \uB9C8\uC774\uD398\uC774\uC9C0 \uC5F4\uAE30">FO\uD504\uB85C\uD544</button>
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).kanban"
                  style="padding:1px 7px;font-size:10px;height:20px;margin:1px;background:#fef3c7;color:#92400e;border:1px solid #fde68a;border-radius:4px;cursor:pointer;"
                  @click.stop="onOpenKanban(row)" title="\uCE78\uBC18\uBCF4\uB4DC \uC5F4\uAE30">\uCE78\uBC18</button>
                <button v-if="cfDomainMeta(row) &amp;&amp; cfDomainMeta(row).calc"
                  style="padding:1px 7px;font-size:10px;height:20px;margin:1px;background:#f0fdf4;color:#15803d;border:1px solid #bbf7d0;border-radius:4px;cursor:pointer;"
                  @click.stop="onOpenCalc(row)" title="\uD658\uBD88 \uACC4\uC0B0 \uD0ED \uC5F4\uAE30">\uACC4\uC0B0</button>
              </template>
              <span v-else style="font-size:10px;color:#cbd5e1;">-</span>
            </td>
          </tr>
          <!-- \uD3BC\uCE68 \uD589 -->
          <tr v-if="isExpanded(row)" style="background:#f0f4ff;">
            <td colspan="11" style="padding:0;">
              <div style="padding:12px 16px 14px 44px;border-top:1px solid #e0e7ff;border-bottom:2px solid #c7d2fe;">
                <!-- \uD56D\uBAA9 \uADF8\uB9AC\uB4DC -->
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px 16px;margin-bottom:10px;">
                  <!-- \uACE0\uC815 \uD56D\uBAA9 -->
                  <div style="display:flex;flex-direction:column;gap:2px;">
                    <span style="font-size:10px;color:#6366f1;font-weight:600;letter-spacing:.3px;">\uB85C\uADF8 ID / \uB3C4\uBA54\uC778</span>
                    <span style="font-size:11px;color:#334155;font-family:monospace;">
                      {{ row.targetId || '-' }} / {{ row.domain || '-' }}
                    </span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:2px;">
                    <span style="font-size:10px;color:#6366f1;font-weight:600;letter-spacing:.3px;">\uD654\uBA74\uBA85 / \uB4F1\uB85D\uC790</span>
                    <span style="font-size:11px;color:#334155;">{{ row.uiNm || '-' }} / {{ row.userNm || '-' }}</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:2px;">
                    <span style="font-size:10px;color:#6366f1;font-weight:600;letter-spacing:.3px;">\uC720\uD615 / \uACB0\uACFC / \uB4F1\uB85D\uC77C\uC2DC</span>
                    <span style="font-size:11px;color:#334155;">
                      {{ row.mode }} /
                      <span :style="row.status==='ok' ? 'color:#16a34a;font-weight:700;' : 'color:#dc2626;font-weight:700;'">
                        {{ row.status==='ok' ? '\uC131\uACF5' : '\uC2E4\uD328' }}
                      </span>
                      / {{ row.ts }}
                    </span>
                  </div>
                </div>
                <!-- \uC2E4\uD589 \uB0B4\uC6A9 \uC0C1\uC138 (JSON) -->
                <div>
                  <div style="font-size:10px;color:#6366f1;font-weight:700;margin-bottom:4px;letter-spacing:.3px;">\u{1F4CB} \uC2E4\uD589 \uB0B4\uC6A9 \uC0C1\uC138</div>
                  <div style="background:#1e1e2e;border-radius:6px;border:1px solid #374151;padding:8px 10px;max-height:300px;overflow-y:auto;font-family:monospace;font-size:11px;line-height:1.6;color:#a5f3fc;white-space:pre;word-break:break-all;">{{ JSON.stringify(row.params ? [{ id: row.targetId, desc: row.desc, params: row.params }] : { desc: row.desc }, null, 2) }}</div>
                </div>
                <!-- \uC2E4\uD328 \uC0AC\uC720 -->
                <div v-if="row.reason" style="margin-top:8px;background:#fff5f5;border:1px solid #fecaca;border-radius:6px;padding:8px 12px;">
                  <span style="font-size:10px;color:#dc2626;font-weight:700;">\u2717 \uC2E4\uD328 \uC0AC\uC720: </span>
                  <span style="font-size:11px;color:#b91c1c;">{{ row.reason }}</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>

  <!-- \uD398\uC774\uC9C0\uB124\uC774\uC158 -->
  <bo-pager :pager="pager" :on-set-page="onSetPage" />

  <!-- \uD074\uB808\uC784 \uACC4\uC0B0 \uBAA8\uB2EC -->
  <od-claim-calc-modal :show="calcModal.show" :claim-id="calcModal.claimId" @close="calcModal.show=false" />

</div>`};const w={prodNm:"\uC0C1\uD488\uBA85",salePrice:"\uD310\uB9E4\uAC00",purchasePrice:"\uB9E4\uC785\uAC00(\uC6D0\uAC00)",prodStock:"\uC7AC\uACE0\uC218\uB7C9",prodTypeCd:"\uC0C1\uD488\uC720\uD615",prodStatusCd:"\uD310\uB9E4\uC0C1\uD0DC",advrtStmt:"\uD64D\uBCF4\uBB38\uAD6C",categoryId:"\uCE74\uD14C\uACE0\uB9ACID",siteId:"\uC0AC\uC774\uD2B8ID",dlivTmpltId:"\uBC30\uC1A1\uD15C\uD50C\uB9BFID",simulYn:"\uC2DC\uBBAC\uC5EC\uBD80",prodId:"\uC0C1\uD488ID",prodOptTypeLevel1Cd:"\uC635\uC1581\uB2E8\uBD84\uB958\uCF54\uB4DC",prodOptTypeId:"\uC635\uC158\uC720\uD615ID",prodOptTypeNm:"\uC635\uC158\uC720\uD615\uBA85",prodOptTypeLevel:"\uC635\uC158\uB2E8\uACC4",level1Cd:"1\uB2E8\uBD84\uB958\uCF54\uB4DC",level2Cd:"2\uB2E8\uBD84\uB958\uCF54\uB4DC",sortOrd:"\uC815\uB82C\uC21C\uC11C",prodOptId:"\uC635\uC158\uAC12ID",prodOptNm:"\uC635\uC158\uD56D\uBAA9\uBA85",prodOptVal:"\uC635\uC158\uAC12",parentProdOptId:"\uC0C1\uC704\uC635\uC158\uAC12ID",prodOptStyle:"\uD56D\uBAA9\uC2A4\uD0C0\uC77C",prodOptTypeLevel1Cd:"1\uB2E8\uBD84\uB958\uCF54\uB4DC",prodOptTypeLevel2Cd:"2\uB2E8\uBD84\uB958\uCF54\uB4DC",useYn:"\uC0AC\uC6A9\uC5EC\uBD80",prodSkuId:"SKU ID",skuNm:"SKU\uBA85",prodOpt1Id:"\uC635\uC1581 \uAC12ID",prodOpt2Id:"\uC635\uC1582 \uAC12ID",addPrice:"\uCD94\uAC00\uAE08\uC561",prodOptStock:"\uC7AC\uACE0\uC218\uB7C9",prodImgId:"\uC774\uBBF8\uC9C0ID",cdnImgUrl:"\uC774\uBBF8\uC9C0URL",prodOptNm:"\uC635\uC158\uD56D\uBAA9\uBA85",isThumb:"\uB300\uD45C\uC774\uBBF8\uC9C0",isMain:"\uB300\uD45C\uC774\uBBF8\uC9C0",skuStatusCd:"SKU\uC0C1\uD0DC",method:"\uBA54\uC11C\uB4DC",url:"URL",body:"\uC694\uCCAD\uBCF8\uBB38",tmpPlanId:"\uAE30\uD68D\uC804\uC784\uC2DCID",prodId:"\uC0C1\uD488ID",userId:"\uC0AC\uC6A9\uC790ID",orderId:"\uC8FC\uBB38ID",planId:"\uD50C\uB79CID",memberId:"\uD68C\uC6D0ID",couponId:"\uCFE0\uD3F0ID",discntId:"\uD560\uC778ID",eventId:"\uC774\uBCA4\uD2B8ID",saveId:"\uC801\uB9BDID",voucherId:"\uBC14\uC6B0\uCC98ID",claimId:"\uD074\uB808\uC784ID",dlivId:"\uBC30\uC1A1ID",vendorId:"\uC5C5\uCCB4ID",planType:"\uD50C\uB79C\uC720\uD615",planName:"\uD50C\uB79C\uBA85",memberNm:"\uD68C\uC6D0\uBA85",email:"\uC774\uBA54\uC77C",phone:"\uC804\uD654\uBC88\uD638",loginId:"\uB85C\uADF8\uC778ID",memberStatusCd:"\uD68C\uC6D0\uC0C1\uD0DC",memberGradeCd:"\uD68C\uC6D0\uB4F1\uAE09",orderStatusCd:"\uC8FC\uBB38\uC0C1\uD0DC",payMethodCd:"\uACB0\uC81C\uC218\uB2E8",totalAmt:"\uD569\uACC4\uAE08\uC561",discntAmt:"\uD560\uC778\uAE08\uC561",payAmt:"\uACB0\uC81C\uAE08\uC561",couponNm:"\uCFE0\uD3F0\uBA85",discntNm:"\uD560\uC778\uBA85",saveNm:"\uC801\uB9BD\uAE08\uC815\uCC45\uBA85",issueYn:"\uBC1C\uAE09\uC5EC\uBD80",useYn2:"\uC0AC\uC6A9\uC5EC\uBD80",expireDate:"\uB9CC\uB8CC\uC77C",couponCd:"\uCFE0\uD3F0\uCF54\uB4DC",couponTypeCd:"\uCFE0\uD3F0\uC720\uD615",couponDiscTypeCd:"\uD560\uC778\uC720\uD615",discntTypeCd:"\uD560\uC778\uC815\uCC45\uC720\uD615",discntValTypeCd:"\uD560\uC778\uAC12\uC720\uD615",savePurposeCd:"\uC801\uB9BD\uBAA9\uC801",saveRatePct:"\uC801\uB9BD\uB960(%)",saveAmt:"\uC815\uC561\uC801\uB9BD\uAE08",discVal:"\uD560\uC778\uAC12",issueCount:"\uBC1C\uAE09\uC218\uB7C9",startDate:"\uC2DC\uC791\uC77C",endDate:"\uC885\uB8CC\uC77C",scopeCd:"\uC801\uC6A9\uBC94\uC704",minOrderAmt:"\uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561",maxDiscAmt:"\uCD5C\uB300\uD560\uC778\uAE08\uC561",eventNm:"\uC774\uBCA4\uD2B8\uBA85",eventTypeCd:"\uC774\uBCA4\uD2B8\uC720\uD615",eventStatusCd:"\uC774\uBCA4\uD2B8\uC0C1\uD0DC",benefitTypeCd:"\uD61C\uD0DD\uC720\uD615",benefitAmt:"\uD61C\uD0DD\uAE08\uC561",winnerCount:"\uB2F9\uCCA8\uC790\uC218",planNm:"\uAE30\uD68D\uC804\uBA85",planStatusCd:"\uAE30\uD68D\uC804\uC0C1\uD0DC",planThemeCd:"\uD14C\uB9C8\uCF54\uB4DC",orderAmt:"\uC8FC\uBB38\uAE08\uC561",dlivFee:"\uBC30\uC1A1\uBE44",totalPayAmt:"\uCD1D\uACB0\uC81C\uAE08\uC561",receiverNm:"\uC218\uB839\uC790\uBA85",zipCode:"\uC6B0\uD3B8\uBC88\uD638",dlivAddr:"\uBC30\uC1A1\uC8FC\uC18C",addr1:"\uBC30\uC1A1\uC8FC\uC18C",addr2:"\uC0C1\uC138\uC8FC\uC18C",dlivAddrDtl:"\uC0C1\uC138\uC8FC\uC18C",orderItems:"\uC8FC\uBB38\uD56D\uBAA9(\uC804\uC1A1)",qty:"\uC218\uB7C9",unitPrice:"\uB2E8\uAC00",rowAmt:"\uD589\uAE08\uC561",claimTypeCd:"\uD074\uB808\uC784\uC720\uD615",reasonCd:"\uC0AC\uC720\uCF54\uB4DC",claimStatusCd:"\uD074\uB808\uC784\uC0C1\uD0DC",partialClaim:"\uBD80\uBD84\uD074\uB808\uC784",refundRate:"\uD658\uBD88\uBE44\uC728(%)",memberNm:"\uD68C\uC6D0\uBA85",gradeCd:"\uB4F1\uAE09\uCF54\uB4DC",memberGender:"\uC131\uBCC4",memberGradeId:"\uB4F1\uAE09ID",memberEmail:"\uC774\uBA54\uC77C",memberPhone:"\uC804\uD654\uBC88\uD638",empTypeCd:"\uC7AC\uC9C1\uC720\uD615",snsProvider:"SNS\uC81C\uACF5\uC790",emailVerifiedYn:"\uC774\uBA54\uC77C\uC778\uC99D\uC5EC\uBD80",snsLinkYn:"SNS\uC5F0\uB3D9\uC5EC\uBD80",userNm:"\uC0AC\uC6A9\uC790\uBA85",userEmail:"\uC774\uBA54\uC77C",userPhone:"\uC804\uD654\uBC88\uD638",userStatusCd:"\uC0AC\uC6A9\uC790\uC0C1\uD0DC",deptId:"\uBD80\uC11CID",roleIds:"\uAD8C\uD55C\uBAA9\uB85D",vendorNm:"\uC5C5\uCCB4\uBA85",ceoNm:"\uB300\uD45C\uC790\uBA85",vendorTypeCd:"\uC5C5\uCCB4\uC720\uD615",vendorPhone:"\uC5C5\uCCB4\uC804\uD654",vendorEmail:"\uC5C5\uCCB4\uC774\uBA54\uC77C",corpNo:"\uC0AC\uC5C5\uC790\uBC88\uD638",vendorStatusCd:"\uC5C5\uCCB4\uC0C1\uD0DC",openDate:"\uAC1C\uC5C5\uC77C",contractDate:"\uACC4\uC57D\uC77C",saveDurationDays:"\uC720\uD6A8\uAE30\uAC04(\uC77C)",prodIds:"\uC801\uC6A9\uC0C1\uD488ID\uBAA9\uB85D",benefitAmt:"\uD61C\uD0DD\uAE08\uC561",winnerCount:"\uB2F9\uCCA8\uC790\uC218",settleId:"\uC815\uC0B0ID",settleAmt:"\uC815\uC0B0\uAE08\uC561",commissionAmt:"\uC218\uC218\uB8CC",netAmt:"\uC21C\uC815\uC0B0\uC561",settleStatusCd:"\uC815\uC0B0\uC0C1\uD0DC",settleYm:"\uC815\uC0B0\uB144\uC6D4",erpVoucherTypeCd:"\uC804\uD45C\uC720\uD615",erpVoucherStatusCd:"\uC804\uD45C\uC0C1\uD0DC",erpVoucherDesc:"\uC804\uD45C\uC124\uBA85",voucherDate:"\uC804\uD45C\uC77C\uC790",totalDebitAmt:"\uCD1D\uCC28\uBCC0\uAE08\uC561",totalCreditAmt:"\uCD1D\uB300\uBCC0\uAE08\uC561"},k={NORMAL:"\uB2E8\uD488",OPTION:"\uC635\uC158\uD615",SET:"\uC138\uD2B8",BUNDLE:"\uBB36\uC74C",SELLING:"\uD310\uB9E4\uC911",SOLDOUT:"\uD488\uC808",PAUSE:"\uD310\uB9E4\uC911\uC9C0",READY:"\uD310\uB9E4\uC900\uBE44",DISCONTINUED:"\uB2E8\uC885",SKU_SELLING:"\uD310\uB9E4\uC911",SKU_SOLDOUT:"\uD488\uC808",SKU_STOP:"\uC911\uC9C0",ORDER_PENDING:"\uACB0\uC81C\uB300\uAE30",ORDER_PAID:"\uACB0\uC81C\uC644\uB8CC",ORDER_PREPARING:"\uC0C1\uD488\uC900\uBE44\uC911",ORDER_SHIPPED:"\uBC30\uC1A1\uC911",ORDER_DELIVERED:"\uBC30\uC1A1\uC644\uB8CC",ORDER_COMPLETE:"\uAD6C\uB9E4\uD655\uC815",ORDER_CANCEL:"\uC8FC\uBB38\uCDE8\uC18C",PENDING:"\uACB0\uC81C\uB300\uAE30",PAID:"\uACB0\uC81C\uC644\uB8CC",PREPARING:"\uC0C1\uD488\uC900\uBE44\uC911",SHIPPED:"\uBC30\uC1A1\uC911",DELIVERED:"\uBC30\uC1A1\uC644\uB8CC",COMPLETE:"\uAD6C\uB9E4\uD655\uC815",COMPLT:"\uAD6C\uB9E4\uD655\uC815",CANCEL:"\uCDE8\uC18C",CANCEL_REQ:"\uCDE8\uC18C\uC694\uCCAD",RETURN_REQ:"\uBC18\uD488\uC694\uCCAD",EXCHANGE_REQ:"\uAD50\uD658\uC694\uCCAD",CANCEL_DONE:"\uCDE8\uC18C\uC644\uB8CC",RETURN_DONE:"\uBC18\uD488\uC644\uB8CC",EXCHANGE_DONE:"\uAD50\uD658\uC644\uB8CC",RETURN:"\uBC18\uD488",EXCHANGE:"\uAD50\uD658",CLAIM_RECV:"\uC811\uC218",RETURN_COLL:"\uC218\uAC70\uC911",EXCH_REQ:"\uAD50\uD658\uC694\uCCAD",EXCH_SHIP:"\uAD50\uD658\uBC1C\uC1A1",EXCH_DONE:"\uAD50\uD658\uC644\uB8CC",DLIV_READY:"\uCD9C\uACE0\uC900\uBE44",DLIV_ING:"\uBC30\uC1A1\uC911",DLIV_DONE:"\uBC30\uC1A1\uC644\uB8CC",OUTBOUND:"\uCD9C\uACE0",INBOUND:"\uC785\uACE0(\uBC18\uD488)",CARD:"\uC2E0\uC6A9\uCE74\uB4DC",VIRTUAL_ACCOUNT:"\uAC00\uC0C1\uACC4\uC88C",TRANSFER:"\uBB34\uD1B5\uC7A5\uC785\uAE08",TOSS:"\uD1A0\uC2A4\uD398\uC774",TOSS_PAY:"\uD1A0\uC2A4\uD398\uC774",KAKAO:"\uCE74\uCE74\uC624\uD398\uC774",KAKAO_PAY:"\uCE74\uCE74\uC624\uD398\uC774",NAVER:"\uB124\uC774\uBC84\uD398\uC774",NAVER_PAY:"\uB124\uC774\uBC84\uD398\uC774",PHONE:"\uD578\uB4DC\uD3F0\uACB0\uC81C",BANK:"\uBB34\uD1B5\uC7A5\uC785\uAE08",VBANK:"\uAC00\uC0C1\uACC4\uC88C",ACTIVE:"\uC815\uC0C1",DORMANT:"\uD734\uBA74",SUSPENDED:"\uC815\uC9C0",WITHDRAWN:"\uD0C8\uD1F4",INACTIVE:"\uBE44\uD65C\uC131",GRADE_BASIC:"\uC77C\uBC18",GRADE_SILVER:"\uC2E4\uBC84",GRADE_GOLD:"\uACE8\uB4DC",GRADE_VIP:"VIP",BASIC:"\uC77C\uBC18",SILVER:"\uC2E4\uBC84",GOLD:"\uACE8\uB4DC",VIP:"VIP",M:"\uB0A8\uC131",F:"\uC5EC\uC131",KR:"\uD55C\uAD6D",CN:"\uC911\uAD6D",JP:"\uC77C\uBCF8",US:"\uC601\uC5B4\uAD8C",FR:"\uD504\uB791\uC2A4",IN:"\uC778\uB3C4",SEARCH:"\uAC80\uC0C9\uC720\uC785",SNS:"SNS\uAD11\uACE0",REFERRAL:"\uCD94\uCC9C\uC778",DIRECT:"\uC9C1\uC811\uC811\uC18D",EMAIL:"\uC774\uBA54\uC77C",APP:"\uC571\uC124\uCE58",IMPULSIVE:"\uCDA9\uB3D9\uAD6C\uB9E4\uD615",COMPARE:"\uBE44\uAD50\uD0D0\uC0C9\uD615",LOYAL:"\uB2E8\uACE8\uC7AC\uAD6C\uB9E4\uD615",PRICE:"\uAC00\uACA9\uBBFC\uAC10\uD615",PREMIUM:"\uD504\uB9AC\uBBF8\uC5C4\uC120\uD638",GOOGLE:"Google",NONE:"\uC77C\uBC18\uAC00\uC785",STAFF:"\uC9C1\uC6D0",PARTNER:"\uD611\uB825\uC9C1\uC6D0",Y:"\uC608",N:"\uC544\uB2C8\uC624",SELECT:"\uC120\uD0DD\uD615",TEXT:"\uD14D\uC2A4\uD2B8",RADIO:"\uB77C\uB514\uC624",MONTHLY:"\uC6D4\uAC04",YEARLY:"\uC5F0\uAC04",ONETIME:"\uC77C\uD68C\uC131",JOIN_GIFT:"\uAC00\uC785\uC120\uBB3C",ORDER_DISCNT:"\uC8FC\uBB38\uD560\uC778",PROD_DISCNT:"\uC0C1\uD488\uD560\uC778",SHIP_DISCNT:"\uBC30\uC1A1\uBE44\uD560\uC778",CLAIM_COMP:"\uD074\uB808\uC784\uBCF4\uC0C1",RATE:"\uC815\uB960(%)",AMOUNT:"\uC815\uC561(\uC6D0)",FREE_SHIP:"\uBB34\uB8CC\uBC30\uC1A1",SHIP_FREE:"\uBB34\uB8CC\uBC30\uC1A1",ORDER:"\uC8FC\uBB38\uD560\uC778",PROD:"\uC0C1\uD488\uD560\uC778",SHIP:"\uBC30\uC1A1\uBE44\uD560\uC778",EVENT_ACTIVE:"\uC9C4\uD589\uC911",EVENT_READY:"\uC608\uC815",EVENT_END:"\uC885\uB8CC",ATTEND:"\uCD9C\uC11D\uCCB4\uD06C",LOTTERY:"\uCD94\uCCA8",PHOTO:"\uD3EC\uD1A0",PURCHASE:"\uAD6C\uB9E4",QUIZ:"\uD034\uC988",REVIEW:"\uB9AC\uBDF0",SHARE:"\uACF5\uC720",SURVEY:"\uC124\uBB38",COUPON:"\uCFE0\uD3F0",JOIN:"\uAC00\uC785\uC801\uB9BD",BIRTHDAY:"\uC0DD\uC77C\uC801\uB9BD",EVENT:"\uC774\uBCA4\uD2B8\uC801\uB9BD",ADMIN:"\uC218\uB3D9\uC9C0\uAE09",SAVE_PURCHASE:"\uAD6C\uB9E4\uC801\uB9BD",SAVE_REVIEW:"\uB9AC\uBDF0\uC801\uB9BD",SAVE_JOIN:"\uAC00\uC785\uC801\uB9BD",SAVE_MANUAL:"\uC218\uB3D9\uC9C0\uAE09",SPRING_NEW:"\uBD04\uC2E0\uC0C1",SUMMER_COOL:"\uC5EC\uB984\uCFE8",WINTER_WARM:"\uACA8\uC6B8\uB530\uB73B",BLACK_FRI:"\uBE14\uB799\uD504\uB77C\uC774\uB370\uC774",NEW_YEAR:"\uC2E0\uB144",CHUSEOK:"\uCD94\uC11D",CHILDREN_DAY:"\uC5B4\uB9B0\uC774\uB0A0",CHRISTMAS:"\uD06C\uB9AC\uC2A4\uB9C8\uC2A4",HALLOWEEN:"\uD57C\uB85C\uC708",ZOMBIE_DAY:"\uC880\uBE44\uB370\uC774",FASHION:"\uD328\uC158",BEAUTY:"\uBDF0\uD2F0",DIGITAL:"\uB514\uC9C0\uD138",HEALTH_FOOD:"\uAC74\uAC15\uC2DD\uD488",HOME_DECOR:"\uD648\uB370\uCF54",KIDS:"\uD0A4\uC988",OUTDOOR:"\uC544\uC6C3\uB3C4\uC5B4",PET:"\uD3AB",LUXURY_BRAND:"\uBA85\uD488\uBE0C\uB79C\uB4DC",TRAVEL:"\uC5EC\uD589",DISABILITY:"\uC7A5\uC560\uC778\uC758\uB0A0",CLOTH:"\uC758\uB958",OUTER:"\uC544\uC6B0\uD130",PANTS:"\uBC14\uC9C0",SHOES:"\uC2E0\uBC1C",BAG:"\uAC00\uBC29",COSMETIC:"\uD654\uC7A5\uD488",PERFUME:"\uD5A5\uC218",FOOD:"\uC2DD\uD488/\uC74C\uB8CC",ETC:"\uAE30\uD0C0",VOUCHER_UNUSED:"\uBBF8\uC0AC\uC6A9",VOUCHER_USED:"\uC0AC\uC6A9\uC644\uB8CC",VOUCHER_EXPIRE:"\uB9CC\uB8CC",SUCCESS:"\uC131\uACF5",FAIL:"\uC2E4\uD328",DRAFT:"\uC784\uC2DC\uC800\uC7A5"},I=["prodNm","salePrice","purchasePrice","prodStock","prodTypeCd","prodStatusCd","advrtStmt","categoryId","siteId","dlivTmpltId","simulYn","prodId","prodOptStdCd","prodOpt1TypeCd","prodOpt2TypeCd","prodOpts","_preview_[prodOpts]","prodSkus","prodImgs","memberNm","loginId","memberEmail","memberPhone","gradeCd","memberGender","empTypeCd","memberStatusCd","snsProvider","emailVerifiedYn","snsLinkYn","memberGradeId","userNm","loginId","userEmail","userPhone","userStatusCd","deptId","roleIds","vendorNm","ceoNm","vendorTypeCd","vendorPhone","vendorEmail","corpNo","vendorStatusCd","openDate","contractDate","memberId","orderStatusCd","payMethodCd","orderAmt","dlivFee","totalPayAmt","receiverNm","zipCode","addr1","addr2","_preview_[orderItems]","orderId","claimTypeCd","reasonCd","claimStatusCd","partialClaim","refundRate","planNm","planStatusCd","planThemeCd","startDate","endDate","_preview_[items]","eventNm","eventTypeCd","eventStatusCd","benefitTypeCd","benefitAmt","winnerCount","couponNm","couponCd","couponTypeCd","couponDiscTypeCd","discVal","issueCount","scopeCd","prodIds","minOrderAmt","maxDiscAmt","discntNm","discntTypeCd","discntValTypeCd","saveNm","savePurposeCd","saveRatePct","saveAmt","saveDurationDays","erpVoucherTypeCd","erpVoucherStatusCd","erpVoucherDesc","voucherDate","totalDebitAmt","totalCreditAmt","settleYm","vendorId"],E=new Map(I.map((t,n)=>[t,n])),g=(t,n)=>{if(n==null||typeof n=="boolean")return"";const o=String(n);return(o==="Y"||o==="N")&&t&&!t.endsWith("Yn")&&!t.endsWith("YN")?"":k[o]||""},R=new Set(["prodOpts","prodImgs","couponBody","discntBody","saveBody","eventBody","planBody","memberBody","orderBody","claimBody","userBody","vendorBody","voucherBody","orderItems","addProdIds","items","claimItems","dlivItems","payMethods","members","prods"]),P=new Set(["prodOptId","prodOptNm","prodOptVal","parentProdOptId","prodOptStyle","prodOptTypeLevel1Cd","prodOptTypeLevel2Cd","sortOrd","useYn"]),T=new Set(["prodOptTypeNm","prodOptTypeLevel","level1Cd","level2Cd","sortOrd","prodOpts"]),N=t=>{if(!t.startsWith("_preview_"))return null;const n=t.slice(9),o=n.match(/^\[([^\]]+)\](.*)/);if(o){const a=o[1],r=o[2]||"",d=R.has(a);return{displayKey:a+r,innerKey:a,suffix:r,isRealKey:d}}return{displayKey:n,innerKey:null,suffix:"",isRealKey:!1}};window.ZdPreviewTable={name:"ZdPreviewTable",props:{data:{default:null}},computed:{isArray(){return Array.isArray(this.data)},isObject(){return this.data!==null&&typeof this.data=="object"&&!Array.isArray(this.data)},isPrim(){return!this.isArray&&!this.isObject},objEntries(){if(!this.isObject)return[];const t=I.length,n=o=>{if(o.startsWith("_preview_")){const r=o.match(/^\[([^\]]+)\]/),d=r?r[1]:o,c=E.get(d);return c!==void 0?c+.5:t+.5}const a=E.get(o);return a!==void 0?a:t};return Object.entries(this.data).filter(([o])=>!o.startsWith("_hide_")).sort(([o],[a])=>n(o)-n(a)).map(([o,a])=>{const r=o.startsWith("_preview_"),d=r?N(o):null;return{key:o,isPreview:r,parsed:d,label:w[o]||"",codeLabel:a===null||typeof a=="object"?"":g(o,a),isArr:Array.isArray(a),isObj:a!==null&&typeof a=="object"&&!Array.isArray(a),isPrim:a===null||typeof a!="object",val:a}})}},methods:{fnIsObj(t){return t!==null&&typeof t=="object"},fnIsPlainObj(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)},fnIsProdOpts(t,n){return t==="prodOpts"&&Array.isArray(n)&&n.length>0},colLabel(t){return w[t]||""},cellCodeLabel(t,n){return g(t,n)},cellDisplay(t,n){if(n===null)return"null";const o=String(n),a=g(t,n);return a?o+"  ("+a+")":o}},template:`
<div>
  <!-- primitive (\uCD5C\uC0C1\uC704\uAC00 \uC6D0\uC2DC\uAC12\uC778 \uACBD\uC6B0) -->
  <span v-if="isPrim" style="font-family:monospace;font-size:10px;color:#334155;">{{ data === null ? 'null' : String(data) }}</span>

  <!-- object \u2192 3\uC5F4 \uD45C: \uD0A4 | \uAC12 | \uD55C\uAE00\uBA85 -->
  <table v-else-if="isObject" style="width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed;">
    <colgroup>
      <col style="width:130px;" />
      <col style="width:30%;" />
      <col />
    </colgroup>
    <tbody>
      <tr v-for="e in objEntries" :key="e.key">
        <!-- \uC5F41: \uD0A4
             - \uC2E4\uC81C \uC804\uC1A1 key (_preview_[xxx] where xxx is real): \uC624\uB80C\uC9C0 bold + \uC2E4\uC120 \uBC11\uC904
             - \uCC38\uACE0\uC6A9 preview (_preview_[xxx] where xxx is ref): \uC624\uB80C\uC9C0 normal
             - \uC2E4\uC81C body key (non-preview): \uBCF4\uB77C bold -->
        <td style="padding:2px 6px;white-space:nowrap;vertical-align:top;border-bottom:1px solid #ede9fe;line-height:1.4;">
          <template v-if="e.isPreview &amp;&amp; e.parsed">
            <span v-if="e.parsed.isRealKey" style="font-weight:700;color:#b45309;text-decoration:underline;text-underline-offset:2px;">{{ e.parsed.displayKey }}</span>
            <span v-else style="font-weight:400;color:#d97706;">{{ e.parsed.displayKey }}</span>
            <span v-if="e.parsed.isRealKey" style="font-size:8px;color:#92400e;margin-left:3px;font-weight:600;background:#fef3c7;border:1px solid #fbbf24;border-radius:2px;padding:0 3px;">\uC804\uC1A1key</span>
            <span v-else style="font-size:8px;color:#b45309;margin-left:3px;font-weight:400;">\uCC38\uACE0</span>
          </template>
          <template v-else>
            <span style="font-weight:700;color:#6d28d9;">{{ e.key }}</span>
          </template>
        </td>
        <!-- \uC5F42: \uAC12 (\uBC30\uC5F4/\uC911\uCCA9\uAC1D\uCCB4\uB294 colspan=2\uB85C \uD55C\uAE00\uBA85 \uC5F4 \uD761\uC218) -->
        <td v-if="e.isArr" colspan="2" style="padding:2px 6px;border-bottom:1px solid #ede9fe;line-height:1.4;">
          <span v-if="!e.val.length" style="color:#94a3b8;font-style:italic;">[]</span>
          <div v-else style="overflow-x:auto;margin-top:1px;">
            <table style="border-collapse:collapse;font-size:10px;width:100%;">
              <thead>
                <tr style="background:#ede9fe;">
                  <th v-for="k in Object.keys(e.val[0]||{})" :key="k"
                    :style="'padding:2px 6px;text-align:left;white-space:nowrap;border:1px solid #c4b5fd;line-height:1.4;' + (e.parsed &amp;&amp; e.parsed.isRealKey ? 'font-weight:700;color:#1e1b4b;' : 'font-weight:400;color:#6d28d9;')">
                    {{ k }}<span v-if="colLabel(k)" style="color:#a78bfa;font-weight:400;font-size:9px;margin-left:3px;">({{ colLabel(k) }})</span>
                  </th>
                  <th v-if="typeof e.val[0] !== 'object' || e.val[0]===null"
                    style="padding:2px 6px;text-align:left;font-weight:600;color:#5b21b6;border:1px solid #c4b5fd;">\uAC12</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row,ri) in e.val" :key="ri" :style="ri%2===1?'background:#f5f3ff;':''">
                  <template v-if="fnIsPlainObj(row)">
                    <td v-for="k in Object.keys(row)" :key="k"
                      :style="fnIsObj(row[k]) ? 'padding:2px 4px;border:1px solid #ddd6fe;vertical-align:top;' : 'padding:2px 6px;border:1px solid #ddd6fe;font-family:monospace;color:#1e1b4b;line-height:1.4;white-space:nowrap;'">
                      <!-- prodOpts \uBC30\uC5F4: \uC778\uB77C\uC778 \uADF8\uB9AC\uB4DC\uB85C \uD3BC\uCE68 (pd_prod_opt, \uAD6C pd_prod_opt_item) -->
                      <template v-if="fnIsProdOpts(k, row[k])">
                        <table style="border-collapse:collapse;font-size:10px;min-width:320px;">
                          <thead>
                            <tr style="background:#d1fae5;">
                              <th v-for="ik in Object.keys(row[k][0]||{})" :key="ik"
                                :style="'padding:2px 6px;text-align:left;white-space:nowrap;border:1px solid #6ee7b7;line-height:1.4;' + (e.parsed &amp;&amp; e.parsed.isRealKey ? 'font-weight:700;color:#064e3b;' : 'font-weight:400;color:#065f46;')">
                                {{ ik }}<span v-if="colLabel(ik)" style="color:#10b981;font-weight:400;font-size:9px;margin-left:3px;">({{ colLabel(ik) }})</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(irow,iri) in row[k]" :key="iri" :style="iri%2===1?'background:#ecfdf5;':''">
                              <td v-for="ik in Object.keys(irow)" :key="ik"
                                style="padding:2px 6px;border:1px solid #6ee7b7;font-family:monospace;color:#064e3b;line-height:1.4;white-space:nowrap;">
                                {{ irow[ik] === null ? 'null' : String(irow[ik]) }}<span v-if="cellCodeLabel(ik, irow[ik])" style="color:#059669;font-size:9px;font-weight:600;margin-left:4px;font-family:sans-serif;">({{ cellCodeLabel(ik, irow[ik]) }})</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </template>
                      <template v-else-if="fnIsObj(row[k])">
                        <zd-preview-table :data="row[k]" />
                      </template>
                      <template v-else>{{ row[k] === null ? 'null' : String(row[k]) }}<span v-if="cellCodeLabel(k, row[k])" style="color:#7c3aed;font-size:9px;font-weight:600;margin-left:4px;font-family:sans-serif;">({{ cellCodeLabel(k, row[k]) }})</span></template>
                    </td>
                  </template>
                  <td v-else style="padding:2px 6px;border:1px solid #ddd6fe;font-family:monospace;color:#1e1b4b;line-height:1.4;">{{ row === null ? 'null' : String(row) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
        <td v-else-if="e.isObj" colspan="2" style="padding:2px 6px;border-bottom:1px solid #ede9fe;line-height:1.4;">
          <zd-preview-table :data="e.val" />
        </td>
        <!-- primitive: \uC5F42=\uAC12, \uC5F43=\uD544\uB4DC\uBA85\xB7\uCF54\uB4DC\uBA85 -->
        <template v-else>
          <td style="padding:2px 6px;border-bottom:1px solid #ede9fe;color:#1e293b;font-family:monospace;line-height:1.4;">{{ e.val === null ? 'null' : String(e.val) }}</td>
          <td style="padding:2px 6px;border-bottom:1px solid #ede9fe;white-space:nowrap;line-height:1.4;">
            <span v-if="e.label" style="color:#9ca3af;font-size:9px;">{{ e.label }}</span>
            <span v-if="e.codeLabel" :style="e.label ? 'color:#7c3aed;font-size:9px;margin-left:3px;font-weight:600;' : 'color:#7c3aed;font-size:9px;font-weight:600;'">{{ e.label ? '\xB7 ' : '' }}{{ e.codeLabel }}</span>
          </td>
        </template>
      </tr>
    </tbody>
  </table>

  <!-- \uCD5C\uC0C1\uC704\uAC00 \uBC30\uC5F4\uC778 \uACBD\uC6B0 -->
  <div v-else-if="isArray" style="overflow-x:auto;">
    <div v-for="(item,i) in data" :key="i" style="margin-bottom:6px;">
      <div style="font-size:9px;color:#7c3aed;font-weight:600;margin-bottom:2px;">[{{ i }}]</div>
      <zd-preview-table :data="item" />
    </div>
  </div>
</div>`},window.ZdSimulPreviewModal={name:"ZdSimulPreviewModal",emits:["close"],props:{show:{type:Boolean,default:!1},json:{type:String,default:""}},template:`
<bo-modal :show="show" title="\uC804\uC1A1 \uB370\uC774\uD130 \uBBF8\uB9AC\uBCF4\uAE30" @close="$emit('close')" box-style="max-width:760px;width:90vw;">
  <div style="background:#1e1e2e;border-radius:6px;padding:12px 14px;max-height:60vh;overflow-y:auto;
    font-family:monospace;font-size:12px;line-height:1.7;color:#a5f3fc;white-space:pre;word-break:break-all;">{{ json }}</div>
  <div style="margin-top:12px;font-size:11px;color:#94a3b8;">
    \u203B API \uD638\uCD9C \uC5C6\uC774 \uC0DD\uC131\uB420 \uD30C\uB77C\uBBF8\uD130\uB9CC \uBBF8\uB9AC \uD655\uC778\uD569\uB2C8\uB2E4. <code>previewOnly: true</code> \uD50C\uB798\uADF8\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.
  </div>
</bo-modal>`}})();
