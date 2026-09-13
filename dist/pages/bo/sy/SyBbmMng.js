window.SyBbmMng={name:"SyBbmMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(u){const{ref:J,reactive:r,computed:p,onMounted:T,watch:X}=Vue,h=window.boApp.showToast,_=window.boApp.showConfirm,m=r([]),y=r({}),s=r({loading:!1,error:null,selectedPath:null}),w=r({bbm_type:[],use_yn:[]}),P=(e,a={})=>{if(e==="searchParam-list")return l.pageNo=1,b("DEFAULT");if(e==="searchParam-reset")return Object.assign(i,C),s.selectedPath=null,l.pageNo=1,g(),b("DEFAULT");if(e==="bbms-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?u.openNewWindow("syBbmDtl",null,"new"):M();if(e==="detailPanel-close")return N();if(e==="bbms-pager-setPage")return E(a);console.warn("[handleBtnAction] unknown cmd:",e)},S=(e,a={})=>{if(e==="bbms-pager-sizeChange")return D();if(e==="pathTree-select")return s.selectedPath=a,l.pageNo=1,g(),b();console.warn("[handleSelectAction] unknown cmd:",e)},k=(e,a,n,d={})=>{if(e==="bbms-cellClick"){if(a==="btn_row_edit")return d&&(d.ctrlKey||d.metaKey||d.button===1)?u.openNewWindow("syBbmDtl",n.bbmId,"edit"):v(n.bbmId);if(a==="btn_row_delete")return G(n);const o=["__no__"];if(d.col&&d.col.link||o.includes(a))return d.ctrlKey||d.metaKey||d.button===1?u.openNewWindow("syBbmDtl",n.bbmId):A(n.bbmId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},i=r({searchType:"",searchValue:"",typeCd:"",useYn:"Y"}),C={},l=r({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),t=r({show:!0,dtlId:"__new__",dtlMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),B=async()=>{var e;try{const a=Object.fromEntries(Object.entries(i).filter(([o,c])=>c!==""&&c!==null&&c!==void 0&&o!=="pathId")),d=((e=(await boApiSvc.syBbm.getPathTreeNodeCounts(a,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(y).forEach(o=>{delete y[o]});for(const o of d)o&&o.pathId!=null&&(y[o.pathId]=o.cnt)}catch(a){console.error("[handleLoadPathTreeNodeCounts]",a)}},b=async(e="DEFAULT")=>{var a;s.loading=!0;try{const n={pageNo:l.pageNo,pageSize:l.pageSize,...s.selectedPath!=null?{pathId:s.selectedPath}:{},...coUtil.cofOmitEmpty(i)};n.searchValue&&!n.searchType&&(n.searchType="bbmNm,bbmCode");const o=(a=(await boApiSvc.syBbm.getPage(n,"\uAC8C\uC2DC\uD310\uBAA8\uB4DC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;m.splice(0,m.length,...(o==null?void 0:o.pageList)||[]),l.pageTotalCount=(o==null?void 0:o.pageTotalCount)||m.length,l.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,(o==null?void 0:o.pageCond)||l.pageCond),s.error=null,B()}catch(n){console.error("[catch-info]",n),s.error=n.message}finally{s.loading=!1}},A=e=>{if(t.dtlId===e&&t.dtlMode==="view"){g();return}t.dtlId=e,t.dtlMode="view",t.show=!0,t.active=!0,t.reloadTrigger++},g=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="view",t.active=!1,t.resetSeq++},v=e=>{t.dtlId=e,t.dtlMode="edit",t.show=!0,t.active=!0,t.reloadTrigger++},M=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="edit",t.active=!0,t.resetSeq++},N=()=>{g()},x=(e,a={})=>{if(e==="syBbmMng"){a.reload&&b("RELOAD"),g();return}if(e==="__cancelEdit__"){if(t.dtlId&&t.dtlId!=="__new__"){t.dtlMode="view";return}g();return}if(e==="__closeDtl__"){g();return}if(e==="__switchToEdit__"){t.dtlMode="edit";return}u.navigate(e,a)},E=e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,b("PAGE_CLICK"))},D=()=>{l.pageNo=1,b("DEFAULT")},G=async e=>{var d,o;if(!await _("\uC0AD\uC81C",`[${e.bbmNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const n=m.findIndex(c=>c.bbmId===e.bbmId);n!==-1&&m.splice(n,1),t.dtlId===e.bbmId&&g();try{const c=await boApiSvc.syBbm.remove(e.bbmId,"\uAC8C\uC2DC\uD310\uBAA8\uB4DC\uAD00\uB9AC","\uC0AD\uC81C");h&&h("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(c){console.error("[catch-info]",c);const H=((o=(d=c.response)==null?void 0:d.data)==null?void 0:o.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";h&&h(H,"error",0)}},L=r({show:!1}),Y=()=>{const e={...s.selectedPath!=null?{pathId:s.selectedPath}:{},...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="bbmNm,bbmCode"),e},U=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["BBM_TYPE_CD","USE_YN"],{compNm:"SyBbmMng"}),w.bbm_type=e.sgGetGrpCodes("BBM_TYPE_CD"),w.use_yn=e.sgGetGrpCodes("USE_YN")};T(async()=>{await U();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(n=>{!a.includes(n)&&e.has(n)&&(i[n]=e.get(n))}),await b("DEFAULT"),Object.assign(C,i)});const O={\uC77C\uBC18:"badge-gray",\uACF5\uC9C0:"badge-blue",\uAC24\uB7EC\uB9AC:"badge-orange",FAQ:"badge-green",QnA:"badge-red"},z=e=>coUtil.cofCodeBadge("BBM_TYPE_CD",e,O[e]||"badge-gray"),I=e=>e==="Y"?"badge-green":"badge-gray",j=e=>({\uBD88\uAC00:"badge-gray",\uB313\uAE00\uD5C8\uC6A9:"badge-blue",\uB300\uB313\uAE00\uD5C8\uC6A9:"badge-green"})[e]||"badge-gray",F=e=>({\uBD88\uAC00:"badge-gray","1\uAC1C":"badge-orange","2\uAC1C":"badge-orange","3\uAC1C":"badge-orange",\uBAA9\uB85D:"badge-blue"})[e]||"badge-gray",V=e=>({\uBD88\uAC00:"badge-gray",textarea:"badge-blue",htmleditor:"badge-green"})[e]||"badge-gray",$=e=>({\uACF5\uAC1C:"badge-green",\uAC1C\uC778:"badge-orange",\uD68C\uC0AC:"badge-blue"})[e]||"badge-gray",q=e=>t.dtlId===e.bbmId?"background:#fff8f9;":"",K=p(()=>boUtil.bofGetSiteNm()),W=p(()=>t.dtlId==="__new__"?null:t.dtlId),R=p(()=>t.dtlMode==="view"&&t.dtlId!=="__new__"),Q=p(()=>`${t.dtlId}_${t.dtlMode}_${t.resetSeq}`),f={};return f.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"bbmNm",label:"\uAC8C\uC2DC\uD310\uBA85"},{value:"bbmCode",label:"\uCF54\uB4DC"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"typeCd",type:"select",label:"\uC720\uD615",options:()=>w.bbm_type,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>w.use_yn,nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4"}],f.baseGrid=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",style:"width:170px;max-width:170px;",pathPick:"sy_bbm"},{key:"bbmCode",label:"\uAC8C\uC2DC\uD310\uCF54\uB4DC",cellInnerStyle:"font-size:11px;color:#555;font-family:monospace;"},{key:"bbmNm",label:"\uAC8C\uC2DC\uD310\uBA85",link:!0,cellInnerStyle:e=>t.dtlId===e?"color:#e8587a;font-weight:700;":""},{key:"bbmTypeCd",label:"\uC720\uD615",badge:e=>z(e.bbmTypeCd)},{key:"allowComment",label:"\uB313\uAE00\uD5C8\uC6A9",badge:e=>j(e.allowComment),fmt:e=>e||"\uBD88\uAC00"},{key:"allowAttach",label:"\uCCA8\uBD80\uD5C8\uC6A9",badge:e=>F(e.allowAttach),fmt:e=>e||"\uBD88\uAC00"},{key:"contentTypeCd",label:"\uB0B4\uC6A9\uC785\uB825",badge:e=>V(e.contentTypeCd),fmt:e=>e||"-"},{key:"scopeTypeCd",label:"\uACF5\uAC1C\uBC94\uC704",badge:e=>$(e.scopeTypeCd),fmt:e=>e||"-"},{key:"allowLike",label:"\uC88B\uC544\uC694",badge:e=>I(e.allowLike),fmt:e=>e==="Y"?"\uD5C8\uC6A9":"\uBD88\uAC00"},{key:"bbsCount",label:"\uAC8C\uC2DC\uAE00\uC218",align:"center",fmt:e=>e||0},{key:"sortOrd",label:"\uC815\uB82C\uC21C\uC11C",align:"center"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",badge:e=>I(e.useYn),fmt:e=>e==="Y"?"\uC0AC\uC6A9":"\uBBF8\uC0AC\uC6A9"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>K.value},{key:"regDate",label:"\uB4F1\uB85D\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"}],{excelModal:L,buildExcelParams:Y,columns:f,bbms:m,uiState:s,bbmCounts:y,searchParam:i,baseGridPager:l,detailModal:t,handleBtnAction:P,handleSelectAction:S,handleGridCellAction:k,cfDetailEditId:W,cfIsViewMode:R,cfDetailKey:Q,fnRowStyle:q,inlineNavigate:x,showToast:h,showConfirm:_,handleSearchList:b}},template:`
<bo-page title="\uAC8C\uC2DC\uD310\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED (\uD2B8\uB9AC + \uBAA9\uB85D) ===================================== -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uD45C\uC2DC\uACBD\uB85C \uD2B8\uB9AC ============================================ -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="sy_bbm" title="\uD45C\uC2DC\uACBD\uB85C" :show-biz-cd="false" :counts="bbmCounts"
        max-height="calc(100vh - 320px)"
        :selected="uiState.selectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0. \uC6B0: \uBAA9\uB85D ================================================== -->
    <bo-container title="\uAC8C\uC2DC\uD310\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('bbms-add', $event)"
          @auxclick="handleBtnAction('bbms-add', $event)">
          + \uC2E0\uADDC
        </button>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="bbms" row-key="bbmId" :selected-key="detailModal.dtlId"
        :row-style="fnRowStyle"
        grid-id="bbms-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
        <template #head-actions>
          \uAD00\uB9AC
        </template>
        <template #row-actions="{ row, gridId, pinStyle }">
          <td :style="'white-space:nowrap;' + pinStyle">
            <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
              <button class="btn btn_row_edit"
                @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)"
                @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
                \uC218\uC815
              </button>
              <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
                \uC0AD\uC81C
              </button>
            </div>
          </td>
        </template>
      </bo-grid>
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('bbms-pager-setPage', n)" :on-size-change="() => handleSelectAction('bbms-pager-sizeChange')" />
    </bo-container>
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uC778\uB77C\uC778 \uD328\uB110 (\uC804\uCCB4 \uD3ED, \uD56D\uC0C1 \uD45C\uC2DC) ============================ -->
  <sy-bbm-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailModal.dtlMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailModal.active"
    :reload-trigger="detailModal.reloadTrigger"
  />
  <!-- ===== \u25A1. \uC0C1\uC138 \uC778\uB77C\uC778 \uD328\uB110 ============================================= -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syBbm"
    area-nm="\uAC8C\uC2DC\uD310\uBAA8\uB4DC\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uAC8C\uC2DC\uD310\uBAA8\uB4DC\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
