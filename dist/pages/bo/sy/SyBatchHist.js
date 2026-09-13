window.SyBatchHist={name:"SyBatchHist",props:{navigate:{type:Function,required:!0},boData:{type:Object,default:()=>({})},batchCode:{type:String,default:null},filterBatchId:{type:[String,Number],default:null},reloadTrigger:{type:Number,default:0}},setup(f){const{ref:V,reactive:r,computed:k,watch:v,onMounted:B}=Vue,u=r([]),c=r([]),a=r({loading:!1,error:null,hasMore:!0,searchBatchId:"",searchStatus:"",expandedSet:new Set}),S=r({batch_run_statuses:[]}),p=r({}),h=r(new Set),o=r({pageType:"PAGE",pageNo:1,pageSize:100,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),I=(e,t={})=>{if(e==="searchParam-list")return o.pageNo=1,i("DEFAULT").then(()=>{d()});if(e==="batchLogs-expandAll")return d();if(e==="batchLogs-collapseAll")return P();if(e==="batchLogs-pager-setPage")return D(t);console.warn("[handleBtnAction] unknown cmd:",e)},T=(e,t={})=>{if(e==="batchLogs-pager-sizeChange")return z();console.warn("[handleSelectAction] unknown cmd:",e)},w=(e,t,l,s={})=>{if(e==="batchLogs-cellClick"){if(t==="btn_row_expand")return R(l.batchLogId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},i=async(e="DEFAULT",t=!1)=>{var l,s,L;if(!a.loading&&!(t&&!a.hasMore)){t||(o.pageNo=1,a.hasMore=!0),a.loading=!0;try{const g={pageNo:o.pageNo,pageSize:o.pageSize,sortBy:"runAt",sortDir:"desc",...a.searchBatchId?{batchId:a.searchBatchId}:{},...a.searchStatus?{runStatusCd:a.searchStatus}:{}},[j,$]=await Promise.all([boApiSvc.syBatch.getPage({pageNo:1,pageSize:1e4},"\uBC30\uCE58\uC774\uB825","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.syBatchLog.getPage(g,"\uBC30\uCE58\uC774\uB825","\uBAA9\uB85D\uC870\uD68C",t?{isProgress:!1}:void 0)]);u.splice(0,u.length,...((s=(l=j.data)==null?void 0:l.data)==null?void 0:s.list)||[]);const n=(L=$.data)==null?void 0:L.data,y=(n==null?void 0:n.pageList)||(n==null?void 0:n.list)||[];o.pageTotalCount=(n==null?void 0:n.pageTotalCount)||0,t?c.push(...y):(c.splice(0,c.length,...y),Object.keys(p).forEach(O=>delete p[O])),a.hasMore=y.length>=o.pageSize&&c.length<o.pageTotalCount,a.hasMore&&(o.pageNo+=1),a.error=null}catch(g){console.error("[catch-info]",g),a.error=g.message}finally{a.loading=!1}}},_=()=>{i("DEFAULT",!0)},D=e=>{e>=1&&e<=o.pageTotalPage&&(o.pageNo=e,i().then(()=>{d()}))},z=()=>{o.pageNo=1,i().then(()=>{d()})},b=e=>a.expandedSet.has(e),m=async e=>{var l;if(e==null)return;const t=String(e);if(!(p[t]||h.has(t))){h.add(t);try{const s=await boApiSvc.syBatchLog.getById(e,"\uBC30\uCE58\uC774\uB825","\uC0C1\uC138\uC870\uD68C");p[t]=((l=s.data)==null?void 0:l.data)||s.data||{}}catch(s){console.error("[fnFetchDetail]",s)}finally{h.delete(t)}}},N=e=>p[String(e.batchLogId)]||e,E=e=>h.has(String(e.batchLogId)),R=e=>{a.expandedSet.has(e)?a.expandedSet.delete(e):(a.expandedSet.add(e),m(e))},d=()=>{a.expandedSet.clear(),c.forEach(e=>{a.expandedSet.add(e.batchLogId),m(e.batchLogId)})},P=()=>{a.expandedSet.clear()},F=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["BATCH_RUN_STATUS"],{compNm:"SyBatchHist"}),S.batch_run_statuses=e.sgGetGrpCodes("BATCH_RUN_STATUS")}catch(e){console.error("[fnLoadCodes]",e)}};B(async()=>{await F(),await i(),d()}),v(()=>f.reloadTrigger,(e,t)=>{e!==t&&(a.searchBatchId=f.filterBatchId!=null?f.filterBatchId:"",a.searchStatus="",o.pageNo=1,i().then(()=>{d()}))});const G={\uC131\uACF5:"badge-green",\uC2E4\uD328:"badge-red",\uC2E4\uD589\uC911:"badge-blue",\uB300\uAE30:"badge-gray"},C=e=>coUtil.cofCodeBadge("BATCH_RUN_STATUS",e,G[e]||"badge-gray"),A=e=>!e&&e!==0?"-":e<60?`${e}\uCD08`:`${Math.floor(e/60)}\uBD84 ${e%60}\uCD08`,U=e=>b(e.batchLogId),H=e=>e.runStatusCd==="FAILED"?"background:#fff5f5;":e.runStatusCd==="RUNNING"?"background:#f0f8ff;":"",M=k(()=>u.map(e=>({batchId:e.batchId,label:e.batchNm}))),x={};return x.histGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>b(e.batchLogId),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>w("batchLogs-cellClick","btn_row_expand",e),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,t)=>b(t.batchLogId)?"\u25B2":"\u25BC"},{key:"batchLogId",label:"\uB85C\uADF8ID",style:"width:46px;",cellStyle:"color:#aaa"},{key:"batchNm",label:"\uBC30\uCE58\uBA85",style:"min-width:120px;",cellStyle:"font-weight:500"},{key:"_batchCode",label:"\uBC30\uCE58\uCF54\uB4DC",style:"min-width:150px;",cellInnerStyle:"font-size:11px;background:#f5f5f5;padding:1px 5px;border-radius:3px;font-family:monospace;"},{key:"runAt",label:"\uC2E4\uD589\uC77C\uC2DC",style:"width:128px;",cellStyle:"color:#555;font-family:monospace;font-size:11px"},{key:"durationMs",label:"\uC18C\uC694\uC2DC\uAC04",style:"width:66px;text-align:center;",align:"center",cellStyle:"color:#666",fmt:e=>A(e)},{key:"runStatusCd",label:"\uACB0\uACFC",style:"width:66px;text-align:center;",align:"center",badge:e=>C(e.runStatusCd)},{key:"message",label:"\uBA54\uC2DC\uC9C0",style:"width:auto;",cellStyle:(e,t)=>"font-size:11px;max-width:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;"+(t.runStatusCd==="FAILED"?"color:#dc2626":"color:#555")}],x.histGridRowDetail=[{key:"_batchNm",label:"\uBC30\uCE58\uBA85",type:"readonly",fmt:(e,t)=>t.batchNm||"-"},{key:"_batchCode",label:"\uBC30\uCE58\uCF54\uB4DC",type:"readonly",mono:!0,fmt:(e,t)=>t.batchCode||"-"},{key:"_runAt",label:"\uC2E4\uD589\uC77C\uC2DC",type:"readonly",mono:!0,fmt:(e,t)=>t.runAt||"-"},{key:"_duration",label:"\uC18C\uC694\uC2DC\uAC04",type:"readonly",fmt:(e,t)=>A(t.durationMs)},{key:"_runStatusCd",label:"\uC2E4\uD589\uACB0\uACFC",type:"readonly",html:!0,fmt:(e,t)=>`<span class="badge badge-xs ${C(t.runStatusCd)}">${t.runStatusCd||"-"}</span>`}],{columns:x,batchLogs:c,uiState:a,codes:S,histGridPager:o,onScrollEnd:_,cofCountText:coUtil.cofCountText,handleBtnAction:I,handleSelectAction:T,handleGridCellAction:w,cfBatchOptions:M,fnRowExpanded:U,fnHistRowStyle:H,fnRowDetail:N,fnRowDetailLoading:E}},template:`
<!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
<bo-container title="\uBC30\uCE58 \uC2E4\uD589\uC774\uB825"
    :count-text="cofCountText(histGridPager.pageTotalCount, batchLogs.length)">
  <template #toolbar-actions>
    <button class="btn btn_expand_all" @click="handleBtnAction('batchLogs-expandAll')" style="height:30px;font-size:11px;padding:2px 8px;" title="\uC804\uCCB4 \uD3BC\uCE58\uAE30">
      \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
    </button>
    <button class="btn btn_collapse_all" @click="handleBtnAction('batchLogs-collapseAll')" style="height:30px;font-size:11px;padding:2px 8px;" title="\uC804\uCCB4 \uC811\uAE30">
      \u25B2 \uC804\uCCB4\uC811\uAE30
    </button>
    <select class="form-control" style="height:30px;font-size:12px;padding:2px 6px;width:180px;" v-model="uiState.searchBatchId">
      <option value="">\uBC30\uCE58 \uC804\uCCB4</option>
      <option v-for="b in cfBatchOptions" :key="b.batchId" :value="b.batchId">
        {{ b.label }}
      </option>
    </select>
    <input class="form-control" v-model="uiState.searchBatchId" placeholder="\uBC30\uCE58ID \uC785\uB825"
      style="height:30px;font-size:12px;padding:2px 8px;width:90px;font-family:monospace;"
      title="\uBC30\uCE58ID \uC9C1\uC811 \uC785\uB825 (\uD589 \uD074\uB9AD \uC2DC \uC790\uB3D9 \uC124\uC815\uB428)" @keyup.enter="handleBtnAction('searchParam-list')" />
    <select class="form-control" style="height:30px;font-size:12px;padding:2px 6px;width:90px;" v-model="uiState.searchStatus">
      <option value="">\uC0C1\uD0DC \uC804\uCCB4</option>
      <option v-for="c in codes.batch_run_statuses" :key="c.codeValue" :value="c.codeValue">
        {{ c.codeLabel }}
      </option>
    </select>
    <button class="btn btn_search" @click="handleBtnAction('searchParam-list')">
      \uC870\uD68C
    </button>
  </template>
  <bo-grid bare fit-bottom @scroll-end="onScrollEnd"
    :columns="columns.histGrid" :rows="batchLogs" row-key="batchLogId"
    :row-style="fnHistRowStyle" :is-expanded="fnRowExpanded"
    empty-text="\uC2E4\uD589\uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
    <template #row-expand="{ row, colspan }">
    <td :colspan="colspan"
      :style="(row.runStatusCd==='FAILED' ? 'background:#fff5f5;' : 'background:#eef3fb;') + 'padding:0;border-top:2px solid ' + (row.runStatusCd==='FAILED' ? '#f3b4b4' : '#bcd0ee') + ';'">
      <div :style="'margin:10px 14px 12px;padding:12px 14px;background:#fff;border-radius:8px;border:1px solid ' + (row.runStatusCd==='FAILED' ? '#f0c4c4' : '#d4e0f2') + ';box-shadow:inset 3px 0 0 ' + (row.runStatusCd==='FAILED' ? '#ef4444' : '#3b82f6') + ';'">
      <div style="font-size:11px;font-weight:700;letter-spacing:.3px;margin-bottom:8px;" :style="row.runStatusCd==='FAILED' ? 'color:#b91c1c;' : 'color:#1d4ed8;'">
        \u25BC \uC2E4\uD589 \uC0C1\uC138
      </div>
      <div v-if="fnRowDetailLoading(row)" style="font-size:12px;color:#888;padding:4px 2px;">\u23F3 \uC0C1\uC138 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\u2026</div>
      <bo-form-area plain-readonly :columns="columns.histGridRowDetail" :form="fnRowDetail(row)" :cols="5" readonly label-left compact :show-actions="false" />
      <div style="display:flex;align-items:flex-start;gap:10px;margin:6px 0 0;">
        <div style="flex:0 0 70px;font-size:11px;font-weight:600;color:#888;padding-top:7px;">
          \uBA54\uC2DC\uC9C0
        </div>
        <div style="flex:1;min-width:0;font-size:12px;padding:6px 10px;border-radius:5px;line-height:1.6;white-space:pre-wrap;word-break:break-all;"
          :style="row.runStatusCd==='FAILED'
            ? 'background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;font-family:monospace;'
            : 'background:#f1f5f9;border:1px solid #e2e8f0;color:#374151;'">
          {{ fnRowDetail(row).message }}
        </div>
      </div>
      <template v-if="fnRowDetail(row).detail">
        <div style="font-size:11px;font-weight:600;color:#888;margin:6px 0 3px;">
          \uC0C1\uC138 \uB0B4\uC6A9
        </div>
        <pre style="margin:0;font-size:11px;padding:10px 12px;border-radius:5px;white-space:pre-wrap;word-break:break-all;line-height:1.65;font-family:monospace;"
          :style="row.runStatusCd==='FAILED'
            ? 'background:#1e1e1e;color:#f87171;border:1px solid #7f1d1d;'
            : 'background:#1e1e1e;color:#86efac;border:1px solid #14532d;'">{{ fnRowDetail(row).detail }}</pre>
      </template>
      </div>
    </td>
    </template>
  </bo-grid>
  <bo-pager :pager="{ pageTotalCount: histGridPager.pageTotalCount }"
    :show-pages="false" :loaded-count="batchLogs.length" />
</bo-container>
<!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
`};
