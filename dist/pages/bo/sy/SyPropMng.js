window.SyPropMng={name:"SyPropMng",props:{navigate:{type:Function,required:!0}},setup(J){const{ref:k,reactive:i,computed:I,watch:W,onMounted:C}=Vue,h=window.boApp.showToast,A=window.boApp.showConfirm,f=i({}),P=100,l=i({_newId:-1,selectedPath:"",loading:!1,hasMore:!0,total:0,pageNo:1}),w=i({use_yn:[],prop_types:["STRING","NUMBER","BOOLEAN","JSON"]}),b=I(()=>(boCommonFilter==null?void 0:boCommonFilter.siteId)||null),c=i({searchType:"",searchValue:"",useYn:"",propTypeCd:"",propProfile:""}),x={},n=i([]),y=i([]),m=["pathId","propProfile","propKey","propValue","propLabel","propTypeCd","sortOrd","useYn","propRemark"],d=i({sortKey:"",sortDir:"asc"}),L=(e,t={})=>{if(e==="searchParam-list")return u();if(e==="searchParam-reset")return Object.assign(c,x),g.value="",l.selectedPath="",u();if(e==="props-add")return O();if(e==="props-save")return G();if(e==="props-deleteChecked")return U();if(e==="props-cancelChecked")return K();if(e==="props-export")return j();if(e==="props-reload")return V();console.warn("[handleBtnAction] unknown cmd:",e)},T=(e,t={})=>{if(e==="pathTree-select")return l.selectedPath=t,u();if(e==="props-rowDelete"){t._row_status="D";return}else if(e==="props-rowRestore"){t._row_status=t._row_org?"N":"I";return}else console.warn("[handleSelectAction] unknown cmd:",e)},E=(e,t,o,r={})=>{if(e==="props-cellChange")return M(o);console.warn("[handleGridCellAction] unknown cmd:",e)},B=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"SyPropMng"}),w.use_yn=e.sgGetGrpCodes("USE_YN")},S=e=>({...e,_row_status:"N",_row_check:!1,_row_org:m.reduce((t,o)=>(t[o]=e[o],t),{})}),N=()=>{n.splice(0,n.length,...y.map(S))},D=async()=>{var e;try{const t=coUtil.cofOmitEmpty({...c,siteId:b.value});t.searchValue&&!t.searchType&&(t.searchType="pathId,propKey,propValue,propLabel");const r=((e=(await boApiSvc.syProp.getPathTreeNodeCounts(t,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(f).forEach(s=>{delete f[s]});for(const s of r)s&&s.pathId!=null&&(f[s.pathId]=s.cnt)}catch(t){console.error("[handleLoadPathTreeNodeCounts]",t)}},u=async(e=!1)=>{var t;if(!l.loading&&!(e&&!l.hasMore)){l.loading=!0;try{e||(l.pageNo=1,l.hasMore=!0);const o={pageNo:l.pageNo,pageSize:P,...coUtil.cofOmitEmpty({...c,siteId:b.value,pathId:l.selectedPath})};o.searchValue&&!o.searchType&&(o.searchType="pathId,propKey,propValue,propLabel");const s=((t=(await boApiSvc.syProp.getPage(o,"\uC18D\uC131\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C",e?{isProgress:!1}:void 0)).data)==null?void 0:t.data)||{},a=s.pageList||s.list||[];l.total=s.pageTotalCount||0,e?(y.push(...a),n.push(...a.map(S))):(y.splice(0,y.length,...a),N()),l.hasMore=a.length>=P&&y.length<l.total,l.hasMore&&(l.pageNo+=1),e||D()}catch(o){console.error("[fetchData]",o)}finally{l.loading=!1}}},R=()=>{u(!0)};C(async()=>{await B();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(c).forEach(o=>{!t.includes(o)&&e.has(o)&&(c[o]=e.get(o))}),Object.assign(x,c),u()});const M=e=>{if(e._row_status==="I"||e._row_status==="D")return;const t=m.some(o=>String(e[o])!==String(e._row_org[o]));e._row_status=t?"U":"N"},O=()=>{n.push({propId:l._newId--,siteId:b.value||null,pathId:l.selectedPath||"new.prop",propProfile:"^all^",propKey:"new_key",propLabel:"\uC2E0\uADDC \uD504\uB85C\uD37C\uD2F0",propValue:"",propTypeCd:"STRING",sortOrd:99,useYn:"Y",propRemark:"",_row_status:"I",_row_check:!1,_row_org:null})},U=()=>{for(let e=n.length-1;e>=0;e--)n[e]._row_check&&(n[e]._row_status==="I"?n.splice(e,1):n[e]._row_status="D")},K=()=>{if(!n.filter(t=>t._row_check).length){h("\uCDE8\uC18C\uD560 \uD589\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","info");return}for(let t=n.length-1;t>=0;t--){const o=n[t];!o._row_check||o._row_status==="N"||(o._row_status==="I"?n.splice(t,1):o._row_org&&(m.forEach(r=>{o[r]=o._row_org[r]}),o._row_status="N"))}},G=async()=>{const e=n.filter(r=>["I","U","D"].includes(r._row_status));if(e.length===0){h("\uBCC0\uACBD\uB41C \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","warning");return}if(!await A("\uC800\uC7A5",`${e.length}\uAC74\uC758 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const o=e.map(r=>({...r,rowStatus:r._row_status}));try{await boApiSvc.syProp.saveList("base",o,"\uC18D\uC131\uAD00\uB9AC","\uC800\uC7A5"),h("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await u()}catch(r){h(coUtil.cofErrMsg(r),"error",0)}},V=async()=>{var e,t,o,r,s;try{const a=await coApiSvc.cmBoAppStore.getInitData("syProps^syApp","\uC18D\uC131\uAD00\uB9AC","\uD504\uB85C\uD37C\uD2F0\uAC31\uC2E0"),p=(e=a==null?void 0:a.data)==null?void 0:e.data;p!=null&&p.syProps&&((o=(t=window.useBoPropStore)==null?void 0:t.call(window))==null||o.saSetProps(p.syProps)),p!=null&&p.syApp&&((s=(r=window.useBoAppStore)==null?void 0:r.call(window))==null||s.saSetApp(p.syApp)),h("\uB7F0\uD0C0\uC784 \uD504\uB85C\uD37C\uD2F0\uAC00 \uAC31\uC2E0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(a){h(coUtil.cofErrMsg(a,"\uAC31\uC2E0 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},j=()=>{const t=[["ID","\uD45C\uC2DC\uACBD\uB85C","\uD0A4","\uAC12","\uB77C\uBCA8","\uD0C0\uC785","\uC815\uB82C","\uC0AC\uC6A9","\uBE44\uACE0"].join(",")];n.filter(a=>a._row_status!=="D").forEach(a=>{t.push([a.propId,a.pathId,a.propKey,a.propValue,a.propLabel,a.propTypeCd,a.sortOrd,a.useYn,a.propRemark||""].map(p=>'"'+String(p).replace(/"/g,'""')+'"').join(","))});const o=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(o),s=document.createElement("a");s.href=r,s.download=coUtil.cofBuildExportFilename("\uD504\uB85C\uD37C\uD2F0.csv"),s.click(),URL.revokeObjectURL(r)},Y=[{value:"local",label:"all; local"},{value:"dev",label:"all; dev"},{value:"prod",label:"all; prod"}],g=k(""),F=e=>{const t=e.target.value;c.propProfile=t;const o=Y.find(r=>r.value===t);g.value=o?o.label:t},z=e=>{const t=e.target.value;g.value=t;const o=t.match(/^all;\s*(\S+)$/);c.propProfile=o?o[1]:t},v=e=>{if(!e||e===""||e==="^all^"||e==="all")return"all";const t=e.replace(/^\^|\^$/g,"").split("^").filter(Boolean);return t.length?t.map(o=>o==="all"?"all":"all; "+o).join(", "):"all"},_={};_.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C"},{value:"propKey",label:"\uD0A4"},{value:"propValue",label:"\uAC12"},{value:"propLabel",label:"\uB77C\uBCA8"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"420px"},{key:"propTypeCd",type:"select",label:"\uD0C0\uC785",options:()=>w.prop_types,nullLabel:"\uC804\uCCB4 \uD0C0\uC785"},{key:"propProfile",type:"slot",name:"propProfile",label:"\uD504\uB85C\uD30C\uC77C"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>w.use_yn,nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4"}],_.baseGrid=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",style:"width:180px;min-width:180px;",pathPick:"sy_prop"},{key:"propProfile",label:"\uD504\uB85C\uD30C\uC77C",style:"width:160px;min-width:160px;",edit:"text",mono:!0,fmt:e=>v(e)},{key:"propKey",label:"\uD0A4",style:"width:200px;min-width:200px;",edit:"text",mono:!0,sortKey:"propKey"},{key:"propValue",label:"\uAC12",style:"width:280px;min-width:280px;",edit:"text"},{key:"propLabel",label:"\uB77C\uBCA8",style:"width:160px;min-width:160px;",edit:"text"},{key:"propTypeCd",label:"\uD0C0\uC785",style:"width:90px;min-width:90px;",cls:"col-id",edit:"select",options:()=>w.prop_types.map(e=>({value:e,label:e}))},{key:"sortOrd",label:"\uC815\uB82C",style:"width:60px;min-width:60px;",cls:"col-ord",edit:"number"},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:80px;min-width:80px;",cls:"col-use",edit:"select",options:()=>w.use_yn},{key:"propRemark",label:"\uBE44\uACE0",style:"width:160px;min-width:160px;",edit:"text"}];const q=e=>{d.sortKey===e?d.sortDir=d.sortDir==="asc"?"desc":"asc":(d.sortKey=e,d.sortDir="asc");const t=d.sortDir==="asc"?1:-1;n.sort((o,r)=>{const s=(o[e]||"").toString().toLowerCase(),a=(r[e]||"").toString().toLowerCase();return s<a?-t:s>a?t:0})},$=i({show:!1});return{columns:_,uiState:l,propCounts:f,searchParam:c,propRows:n,excelModal:$,buildExcelParams:()=>{const e={...coUtil.cofOmitEmpty({...c,siteId:b.value,pathId:l.selectedPath})};return e.searchValue&&!e.searchType&&(e.searchType="pathId,propKey,propValue,propLabel"),e},sortState:d,onSort:q,onScrollEnd:R,fnFmtProfile:v,profileFltDisplay:g,onProfileSelectChange:F,onProfileInputChange:z,handleBtnAction:L,handleSelectAction:T,handleGridCellAction:E}},template:`
<bo-page title="\uD504\uB85C\uD37C\uD2F0\uAD00\uB9AC" :share-query="searchParam">
  <template #actions>
    <button class="btn" style="font-size:12px;padding:4px 12px;background:#f0f0f0;border:1px solid #d0d0d0;border-radius:6px;cursor:pointer;color:#444;"
      title="\uC800\uC7A5\uB41C \uD504\uB85C\uD37C\uD2F0\uB97C \uB7F0\uD0C0\uC784\uC5D0 \uC989\uC2DC \uBC18\uC601\uD569\uB2C8\uB2E4 (Pinia store \uAC31\uC2E0)"
      @click="handleBtnAction('props-reload')">
      \u{1F504} \uB7F0\uD0C0\uC784 \uAC31\uC2E0
    </button>
  </template>
  <!-- ===== \u25A0. \uAC80\uC0C9 \uBC14 ==================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam">
      <template #propProfile>
        <label class="search-label">\uD504\uB85C\uD30C\uC77C</label>
        <div style="display:flex;gap:4px;align-items:center;">
          <select class="form-control" style="width:130px;"
            :value="searchParam.propProfile"
            @change="onProfileSelectChange"
            @keyup.enter="handleBtnAction('searchParam-list')">
            <option value="">\uC804\uCCB4 \uD658\uACBD</option>
            <option value="local">all; local</option>
            <option value="dev">all; dev</option>
            <option value="prod">all; prod</option>
          </select>
          <input type="text" class="form-control" style="width:100px;font-family:monospace;font-size:12px;" placeholder="\uC9C1\uC811\uC785\uB825"
            :value="profileFltDisplay"
            @input="onProfileInputChange"
            @keyup.enter="handleBtnAction('searchParam-list')" />
        </div>
      </template>
    </bo-search-area>
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uD2B8\uB9AC ==================================================== -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="sy_prop" title="\uD45C\uC2DC\uACBD\uB85C" :show-biz-cd="false" :counts="propCounts"
        max-height="calc(100vh - 320px)"
        :selected="uiState.selectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC (BoGridCrud) ====================================== -->
    <bo-container bare>
      <bo-grid-crud
        :columns="columns.baseGrid" :rows="propRows" row-key="propId"
        list-title="\uD504\uB85C\uD37C\uD2F0\uBAA9\uB85D" :draggable="false"
        max-height="calc(100vh - 320px)"
        :total-count="uiState.total" @scroll-end="onScrollEnd"
        :sort-state="sortState" @sort="onSort"
        :show-export="true"
        @add="handleBtnAction('props-add')" @save="handleBtnAction('props-save')"
        @delete-checked="handleBtnAction('props-deleteChecked')" @cancel-checked="handleBtnAction('props-cancelChecked')"
        @export="excelModal.show = true"
        grid-id="props-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
        <template #row-actions="{ row }">
          <button v-if="['N','U'].includes(row._row_status)" class="btn btn_row_delete" @click.stop="handleSelectAction('props-rowDelete', row)">
            \uC0AD\uC81C
          </button>
          <button v-else-if="row._row_status==='D'" class="btn btn-xs btn-secondary" @click.stop="handleSelectAction('props-rowRestore', row)">
            \uBCF5\uC6D0
          </button>
        </template>
      </bo-grid-crud>
      <bo-excel-down-modal :show="excelModal.show" domain="syProp" area-nm="\uD504\uB85C\uD37C\uD2F0"
        :columns="columns.baseGrid" ui-nm="\uD504\uB85C\uD37C\uD2F0\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
  </div>
  <!-- ===== \u25A1.\u25A1. \uADF8\uB9AC\uB4DC (BoGridCrud) ====================================== -->
  <!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
</bo-page>
`};
