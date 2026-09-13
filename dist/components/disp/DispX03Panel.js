window.DispX03Panel={name:"DispX03Panel",props:{params:{type:Object,required:!0},dispDataset:{type:Object,default:()=>({displays:[],codes:[]})},dispOpt:{type:Object,default:()=>({layout:"vertical",showBadges:!0})},panelItem:{type:Object,required:!0},showHeader:{type:Boolean,default:!1}},emits:["widget-action"],setup(n,{emit:i}){const{computed:d,reactive:a}=Vue,o=a({loading:!1,error:""}),s=a({}),l=(e,t={})=>{console.warn("[handleBtnAction] unknown cmd:",e)},p=(e,t={})=>{if(e==="widgets-action")return i("widget-action",t);console.warn("[handleSelectAction] unknown cmd:",e)},r=e=>({...e,status:n.panelItem.status,condition:e.condition||n.panelItem.condition||"\uD56D\uC0C1 \uD45C\uC2DC",authRequired:n.panelItem.authRequired||!1,authGrade:n.panelItem.authGrade||"",dispYn:e.dispYn!==void 0?e.dispYn:"Y",useYn:e.useYn!==void 0?e.useYn:"Y",dispStartDt:e.dispStartDt||"",dispEndDt:e.dispEndDt||"",useStartDate:e.useStartDate||"",useEndDate:e.useEndDate||"",dispEnv:e.dispEnv||"^PROD^"}),c=d(()=>{var t;const e=((t=n.dispOpt)==null?void 0:t.layout)||"vertical";return e==="horizontal"?"display:flex;gap:12px;overflow-x:auto;":e==="grid"?"display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;":"display:flex;flex-direction:column;gap:12px;"});return{uiState:o,codes:s,coUtil,handleBtnAction:l,handleSelectAction:p,mergedWidget:r,cfLayoutStyle:c}},template:`
<div class="disp-panel" :data-area="panelItem.area">
  <!-- ===== \u25A0. \uD328\uB110 \uD5E4\uB354 (showHeader=true \uC77C \uB54C) ============================= -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="showHeader"
    style="display:flex;align-items:center;gap:6px;padding:6px 14px;background:#f8f8f8;border-bottom:1px solid #efefef;">
    <span style="font-size:9px;background:#e8f5e9;color:#2e7d32;border:1px solid #c8e6c9;border-radius:3px;padding:0 5px;line-height:16px;flex-shrink:0;">
      DispX03Panel #{{ String(panelItem.dispId).padStart(4,'0') }}
    </span>
    <span style="font-size:13px;font-weight:700;color:#222;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
      {{ panelItem.name }}
    </span>
    <span style="font-size:10px;padding:1px 7px;border-radius:5px;flex-shrink:0;"
      :style="panelItem.status==='\uD65C\uC131'?'background:#e8f5e9;color:#2e7d32;':'background:#f5f5f5;color:#999;'">
      {{ panelItem.status }}
    </span>
    <span v-if="coUtil.cofAnd(panelItem.condition, panelItem.condition!=='\uD56D\uC0C1 \uD45C\uC2DC')" style="font-size:10px;background:#f3e5f5;color:#6a1b9a;border-radius:5px;padding:1px 6px;flex-shrink:0;">
    {{ panelItem.condition }}
  </span>
</div>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uD328\uB110 \uD0C0\uC774\uD2C0 ================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<div v-if="coUtil.cofAnd(panelItem.titleYn==='Y', panelItem.title)" style="padding:10px 16px 6px;font-size:15px;font-weight:700;color:#222;border-bottom:2px solid #222;margin-bottom:12px;">
{{ panelItem.title }}
</div>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uC704\uC82F \uBAA9\uB85D =================================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<div :style="cfLayoutStyle">
  <disp-x04-widget
      v-for="(w, wi) in (panelItem.rows || [])"
      :key="wi"
      :params="params"
      :disp-dataset="dispDataset"
      :disp-opt="dispOpt"
      :widget-item="mergedWidget(w)"
      @click-action="payload => handleSelectAction('widgets-action', payload)"
      />
  <div v-if="!coUtil.cofAnd(panelItem.rows, panelItem.rows?.length)" style="color:#ccc;font-size:12px;padding:8px;text-align:center;">
  \uC704\uC82F \uC5C6\uC74C
</div>
</div>
</div>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
