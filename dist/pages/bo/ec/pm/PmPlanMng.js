window.PmPlanMng={name:"PmPlanMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null}},setup(f){const{ref:X,reactive:i,computed:u,watch:Z,onMounted:A}=Vue,h=window.boApp.showToast,M=window.boApp.showConfirm,ee=window.boApp.showRefModal,y=i([]),s=i({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),P=i({plan_statuses:[],date_range_opts:[]}),v=i([]),d=i({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),n=i({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),c=(e,t={})=>{if(e==="searchParam-list")return d.pageNo=1,Object.assign(d.pageCond,l),g("SEARCH");if(e==="searchParam-reset")return Object.assign(l,_),s.sortKey="",s.sortDir="asc",d.pageNo=1,b(),g("SEARCH");if(e==="searchParam-dateRange")return G();if(e==="plans-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?f.openNewWindow("pmPlanDtl",null,"new"):U();if(e==="plans-excel"){S.show=!0;return}else if(e==="tab-mode"){s.tabMode=t;return}else{if(e==="detailPanel-close")return L();if(e==="plans-sort")return R(t);if(e==="plans-pager-setPage")return $(t);e==="mdModal-open"?p.isMdPick=!0:e==="searchParam-mdClear"?(l.mdUserId="",l.mdUserNm=""):e==="prodModal-open"?p.isProdPick=!0:e==="searchParam-prodClear"?(l.prodId="",l.prodNm=""):e==="vendorModal-open"?p.isVendorPick=!0:e==="searchParam-vendorClear"?(l.vendorId="",l.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},N=(e,t={})=>{if(e==="plans-pager-sizeChange")return j();if(e==="plans-rowView")return I(t);console.warn("[handleSelectAction] unknown cmd:",e)},D=(e,t,a,o={})=>{if(e==="plans-cellClick"){if(t==="btn_row_edit")return o&&(o.ctrlKey||o.metaKey||o.button===1)?f.openNewWindow("pmPlanDtl",a.planId,"edit"):K(a.planId);if(t==="btn_row_delete")return q(a);const r=["__no__"];if(o.col&&o.col.link||r.includes(t))return o.ctrlKey||o.metaKey||o.button===1?f.openNewWindow("pmPlanDtl",a.planId):I(a.planId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},T=(e,t,a)=>{e==="cmPopup-userMd-pick"?(l.mdUserId=(a==null?void 0:a.selId)||"",l.mdUserNm=(a==null?void 0:a.selName)||"",p.isMdPick=!1):e==="cmPopup-prod-pick"?(l.prodId=(a==null?void 0:a.selId)||"",l.prodNm=(a==null?void 0:a.selName)||"",p.isProdPick=!1):e==="cmPopup-vendor-pick"&&(l.vendorId=(a==null?void 0:a.selId)||"",l.vendorNm=(a==null?void 0:a.selName)||"",p.isVendorPick=!1)},l=i({searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",planStatusCd:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),_={},p=i({isMdPick:!1,isProdPick:!1,isVendorPick:!1}),E=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PLAN_STATUS_KR","DATE_RANGE_OPT"],{compNm:"PmPlanMng"});try{P.plan_statuses=e.sgGetGrpCodes("PLAN_STATUS_KR"),P.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(t){console.error("[fnLoadCodes]",t)}v.splice(0,v.length,...await window.boUtil.bofLoadSiteOptions())},x={nm:{asc:"planNm asc",desc:"planNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},k=()=>{const{sortKey:e,sortDir:t}=s;return!e||!x[e]?{}:{sort:x[e][t]}},R=e=>{s.sortKey===e?s.sortDir==="asc"?s.sortDir="desc":(s.sortKey="",s.sortDir="asc"):(s.sortKey=e,s.sortDir="asc"),d.pageNo=1,g()},g=async(e="DEFAULT")=>{var t;s.loading=!0;try{const o=(t=(await boApiSvc.pmPlan.getPage({pageNo:d.pageNo,pageSize:d.pageSize,...k(),...e==="PAGE_CLICK"?d.pageCond:l},"\uC694\uAE08\uC81C\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;y.splice(0,y.length,...(o==null?void 0:o.pageList)||[]),d.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,d.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(d),coUtil.cofBuildPagerNums(d),Object.assign(d.pageCond,(o==null?void 0:o.pageCond)||d.pageCond),s.error=null}catch(a){console.error("[catch-info]",a),s.error=a.message}finally{s.loading=!1}};A(async()=>{const t=new Date().getFullYear();Object.assign(l,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await E(),f.initSearchValue&&(l.searchValue=f.initSearchValue,l.dateRangeStart="",l.dateRangeEnd="");const a=new URLSearchParams(window.location.search),o=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(l).forEach(r=>{!o.includes(r)&&a.has(r)&&(l[r]=a.get(r))}),await g("DEFAULT"),Object.assign(_,l)});const G=()=>{boUtil.bofApplyDateRange(l),d.pageNo=1},I=e=>{n.selectedId=e,n.openMode="view",n.active=!0,n.reloadTrigger++},b=()=>{n.selectedId="__new__",n.openMode="view",n.active=!1,n.resetSeq++},K=e=>{n.selectedId=e,n.openMode="edit",n.active=!0,n.reloadTrigger++},U=()=>{n.selectedId="__new__",n.openMode="edit",n.active=!0,n.resetSeq++,n.reloadTrigger++},L=()=>{b()},z=(e,t={})=>{if(e==="pmPlanMng"){t.reload&&g("RELOAD"),b();return}if(e==="__cancelEdit__"){if(n.selectedId&&n.selectedId!=="__new__"){n.openMode="view";return}b();return}if(e==="__closeDtl__"){b();return}if(e==="__switchToEdit__"){n.openMode="edit";return}f.navigate(e,t)},B=u(()=>n.selectedId==="__new__"?null:n.selectedId),O=u(()=>`${n.selectedId}_${n.openMode}_${n.resetSeq}`),V={\uD65C\uC131:"badge-green",\uC608\uC815:"badge-blue",\uBE44\uD65C\uC131:"badge-gray",\uC885\uB8CC:"badge-gray"},C=e=>coUtil.cofCodeBadge("PLAN_STATUS_KR",e,V[e]||"badge-gray"),$=async e=>{e>=1&&e<=d.pageTotalPage&&(d.pageNo=e,await g("PAGE_CLICK"))},j=()=>{d.pageNo=1,g("DEFAULT")},q=async e=>{var o,r;if(!await M("\uC0AD\uC81C",`[${e.planNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const a=y.findIndex(m=>m.planId===e.planId);a!==-1&&y.splice(a,1),n.selectedId===e.planId&&b();try{const m=await boApiSvc.pmPlan.remove(e.planId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uC0AD\uC81C");h&&h("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(m){console.error("[catch-info]",m);const Q=((r=(o=m.response)==null?void 0:o.data)==null?void 0:r.message)||m.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";h&&h(Q,"error",0)}},S=i({show:!1}),F=u(()=>"pmPlan"),W=u(()=>"\uAE30\uD68D\uC804"),Y=u(()=>w.baseGrid),H=()=>({...k(),...coUtil.cofOmitEmpty(l)}),J=Vue.toRef(s,"tabMode"),w={};return w.baseSearch=[{key:"searchValue",type:"text",label:"\uAE30\uD68D\uC804\uBA85",placeholder:"\uAE30\uD68D\uC804\uBA85 \uAC80\uC0C9"},{key:"planStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>P.plan_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>c("mdModal-open"),onClear:()=>c("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>c("prodModal-open"),onClear:()=>c("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>c("vendorModal-open"),onClear:()=>c("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>P.date_range_opts,onRangeChange:()=>c("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>v,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"planNm",label:"\uAE30\uD68D\uC804\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>n.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",cellInnerStyle:"font-size:11px;background:#e8f0fe;color:#1577db;border-radius:4px;padding:2px 8px;"},{key:"theme",label:"\uD14C\uB9C8"},{key:"productIds",label:"\uC0C1\uD488\uC218",fmt:e=>(e||[]).length+"\uAC1C"},{key:"planStatusCd",label:"\uC0C1\uD0DC",badge:e=>C(e.planStatusCd)},{key:"viewCount",label:"\uC870\uD68C\uC218",fmt:e=>(e||0).toLocaleString()},{key:"period",label:"\uAE30\uAC04",cellStyle:"font-size:11px;color:#666",fmt:(e,t)=>t.startDate+" ~ "+t.endDate},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb"}],{columns:w,plans:y,uiState:s,searchParam:l,baseGridPager:d,detailPanel:n,handleBtnAction:c,handleSelectAction:N,handleGridCellAction:D,cfDetailEditId:B,cfDetailKey:O,tabMode:J,fnStatusBadge:C,inlineNavigate:z,modals:p,fnCallbackModal:T,excelModal:S,cfExcelDomain:F,cfExcelAreaNm:W,cfExcelColumns:Y,buildExcelParams:H}},template:`
<bo-page title="\uAE30\uD68D\uC804\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uAE30\uD68D\uC804\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <div style="display:flex;gap:6px;align-items:center;">
        <div style="display:flex;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
          <button @click="handleBtnAction('tab-mode', 'list')" style="font-size:11px;padding:4px 10px;border:none;transition:all .15s;"
            :style="tabMode==='list' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
            \u2630 \uB9AC\uC2A4\uD2B8
          </button>
          <button @click="handleBtnAction('tab-mode', 'card')" style="font-size:11px;padding:4px 10px;border:none;border-left:1px solid #ddd;transition:all .15s;"
            :style="tabMode==='card' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
            \u229E \uCE74\uB4DC
          </button>
        </div>
        <button class="btn btn_excel" @click="handleBtnAction('plans-excel')">
          \u{1F4E5} \uC5D1\uC140
        </button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('plans-add', $event)"
          @auxclick="handleBtnAction('plans-add', $event)">
          + \uC2E0\uADDC
        </button>
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 ================================================= -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="plans" row-key="planId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(p) => detailPanel.selectedId===p.planId ? 'background:#fff8f9;' : ''" @sort="key => handleBtnAction('plans-sort', key)" grid-id="plans-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: p, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', p, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', p, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', p)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="plans.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(p, idx) in plans" :key="p?.planId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===p.planId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('plans-rowView', p.planId)">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uB108 \uC774\uBBF8\uC9C0 ============================================== -->
        <div v-if="p.bannerImage" style="padding:12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;" v-html="p.bannerImage">
        </div>
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            \uAE30\uD68D\uC804 #{{ p.planId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('plans-rowView', p.planId)" :style="detailPanel.selectedId===p.planId?{color:'#e8587a'}:{}">
            {{ p.planNm }}
            <span v-if="detailPanel.selectedId===p.planId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnStatusBadge(p.planStatusCd)" style="font-size:11px;">
              {{ p.planStatusCd }}
            </span>
            <span class="badge badge-blue" style="font-size:11px;">
              {{ p.category }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F3AF} {{ p.theme }} {{ (p.productIds||[]).length }}\uAC1C \uC0C1\uD488
            </div>
            <div>
              \u{1F4C5} {{ p.startDate }} ~ {{ p.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \u{1F441} {{ (p.viewCount||0).toLocaleString() }} \uC870\uD68C
            </div>
            <div style="color:#999;">
              \u{1F4C5} \uB4F1\uB85D {{ p.regDate }}
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('plans-cellClick', 'btn_row_edit', p, $event)" @auxclick.stop="handleGridCellAction('plans-cellClick', 'btn_row_edit', p, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('plans-cellClick', 'btn_row_delete', p)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ p.planId }}
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800 ==================================================== -->
    <bo-pager v-if="baseGridPager.pageTotalCount > 0" :pager="baseGridPager" :on-set-page="n => handleBtnAction('plans-pager-setPage', n)" :on-size-change="() => handleSelectAction('plans-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: PlanDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ============= -->
  <pm-plan-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uAE30\uD68D\uC804\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
