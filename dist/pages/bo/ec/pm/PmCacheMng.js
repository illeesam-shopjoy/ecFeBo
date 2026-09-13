window.PmCacheMng={name:"PmCacheMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(m){const{ref:X,reactive:r,computed:p,onMounted:I,watch:Z}=Vue,f=window.boApp.showToast,S=window.boApp.showConfirm,T=window.boApp.showRefModal,b=r([]),n=r({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),u=r({cache_trans_types:[],date_range_opts:[]}),C={reg:{asc:"regDate asc",desc:"regDate desc"}},D=p(()=>boUtil.bofGetSiteNm()),l=r({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=r({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),y=(e,t={})=>{if(e==="searchParam-list")return l.pageNo=1,d("SEARCH");if(e==="searchParam-reset")return Object.assign(s,x),n.sortKey="",n.sortDir="asc",l.pageNo=1,g(),d("SEARCH");if(e==="searchParam-dateRange")return R();if(e==="caches-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?m.openNewWindow("pmCacheDtl",null,"new"):L();if(e==="caches-excel"){A.show=!0;return}else{if(e==="caches-reload")return d("RELOAD");if(e==="tab-mode"){n.tabMode=t;return}else{if(e==="detailPanel-close")return z();if(e==="caches-sort")return K(t);if(e==="caches-pager-setPage")return $(t);e==="memberModal-open"?_.isMemberPick=!0:e==="searchParam-memberClear"?(s.memberId="",s.memberNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}}},E=(e,t={})=>{if(e==="caches-pager-sizeChange")return V();if(e==="caches-rowView")return P(t);if(e==="caches-ref")return T(t.type,t.id);console.warn("[handleSelectAction] unknown cmd:",e)},M=(e,t,c,i={})=>{if(e==="caches-cellClick"){if(t==="btn_row_edit")return i&&(i.ctrlKey||i.metaKey||i.button===1)?m.openNewWindow("pmCacheDtl",c.cacheId,"edit"):B(c.cacheId);if(t==="btn_row_delete")return j(c);const o=["__no__"];if(i.col&&i.col.link||o.includes(t))return i.ctrlKey||i.metaKey||i.button===1?m.openNewWindow("pmCacheDtl",c.cacheId):P(c.cacheId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},N=(e,t,c)=>{e==="cmPopup-member-pick"&&(s.memberId=(c==null?void 0:c.selId)||"",s.memberNm=(c==null?void 0:c.selName)||"",_.isMemberPick=!1)},s=r({searchType:"",searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",cacheTypeCd:"",memberId:"",memberNm:""}),x={},_=r({isMemberPick:!1}),G=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CACHE_TRANS_TYPE","DATE_RANGE_OPT"],{compNm:"PmCacheMng"});try{u.cache_trans_types=e.sgGetGrpCodes("CACHE_TRANS_TYPE"),u.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(t){console.error("[fnLoadCodes]",t)}},R=()=>{boUtil.bofApplyDateRange(s),l.pageNo=1},v=()=>{const{sortKey:e,sortDir:t}=n;return!e||!C[e]?{}:{sort:C[e][t]}},K=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),l.pageNo=1,d()},d=async(e="DEFAULT")=>{var t;n.loading=!0;try{const c={pageNo:l.pageNo,pageSize:l.pageSize,...v(),...coUtil.cofOmitEmpty(s)};c.searchValue&&!c.searchType&&(c.searchType="memberNm,memberId,cacheDesc");const o=(t=(await boApiSvc.pmCache.getPage(c,"\uCE90\uC2DC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;b.splice(0,b.length,...(o==null?void 0:o.pageList)||[]),l.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,l.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,(o==null?void 0:o.pageCond)||l.pageCond),n.error=null}catch(c){console.error("[catch-info]",c),n.error=c.message}finally{n.loading=!1}};I(async()=>{const t=new Date().getFullYear();Object.assign(s,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await G();const c=new URLSearchParams(window.location.search),i=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(o=>{!i.includes(o)&&c.has(o)&&(s[o]=c.get(o))}),await d("DEFAULT"),Object.assign(x,s)});const P=e=>{a.selectedId=e,a.openMode="view",a.active=!0,a.reloadTrigger++},g=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++},B=e=>{a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},L=()=>{a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},z=()=>{g()},O=(e,t={})=>{if(e==="pmCacheMng"){t.reload&&d("RELOAD"),g();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}g();return}if(e==="__closeDtl__"){g();return}if(e==="__switchToEdit__"){a.openMode="edit";return}m.navigate(e,t)},U={\uCDA9\uC804:"badge-green",\uC0AC\uC6A9:"badge-orange",\uD658\uBD88:"badge-blue",\uC18C\uBA78:"badge-red"},k=e=>coUtil.cofCodeBadge("CACHE_TYPE_KR",e,U[e]||"badge-gray"),$=async e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,await d("PAGE_CLICK"))},V=()=>{l.pageNo=1,d("DEFAULT")},j=async e=>{var i,o;if(!await S("\uC0AD\uC81C",`[${e.cacheDesc}] \uB0B4\uC5ED\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const c=b.findIndex(h=>h.cacheId===e.cacheId);c!==-1&&b.splice(c,1),a.selectedId===e.cacheId&&g();try{const h=await boApiSvc.pmCache.remove(e.cacheId,"\uCE90\uC2DC\uAD00\uB9AC","\uC0AD\uC81C");f&&f("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(h){console.error("[catch-info]",h);const Q=((o=(i=h.response)==null?void 0:i.data)==null?void 0:o.message)||h.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";f&&f(Q,"error",0)}},A=r({show:!1}),W=p(()=>"pmCache"),q=p(()=>"\uCE90\uC2DC"),F=p(()=>w.baseGrid),H=()=>{const e={...v(),...coUtil.cofOmitEmpty(s)};return e.searchValue&&!e.searchType&&(e.searchType="memberNm,memberId,cacheDesc"),e},Y=p(()=>a.selectedId==="__new__"?null:a.selectedId),J=p(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),w={};return w.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"memberNm",label:"\uD68C\uC6D0\uBA85"},{value:"memberId",label:"\uD68C\uC6D0ID"},{value:"cacheDesc",label:"\uB0B4\uC6A9"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"cacheTypeCd",type:"select",label:"\uC720\uD615",options:()=>u.cache_trans_types,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>y("memberModal-open"),onClear:()=>y("searchParam-memberClear")},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>u.date_range_opts,onRangeChange:()=>y("searchParam-dateRange")}],w.baseGrid=[{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId"},{key:"cacheDate",label:"\uC77C\uC2DC",sortKey:"reg",fmt:e=>e?String(e).slice(0,16):"-"},{key:"cacheTypeCd",label:"\uC720\uD615",badge:e=>k(e.cacheTypeCd)},{key:"cacheAmt",label:"\uAE08\uC561",fmt:e=>((e||0)>0?"+":"")+coUtil.cofWon(e),cellStyle:e=>(e||0)>0?"color:#389e0d;font-weight:600":"color:#cf1322;font-weight:600"},{key:"balanceAmt",label:"\uC794\uC561",fmt:e=>coUtil.cofWon(e)},{key:"cacheDesc",label:"\uB0B4\uC6A9",link:!0,cellInnerStyle:e=>a.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb",fmt:()=>D.value}],{columns:w,caches:b,uiState:n,searchParam:s,baseGridPager:l,detailPanel:a,handleBtnAction:y,handleSelectAction:E,handleGridCellAction:M,cfDetailEditId:Y,cfDetailKey:J,fnTypeBadge:k,inlineNavigate:O,modals:_,fnCallbackModal:N,excelModal:A,cfExcelDomain:W,cfExcelAreaNm:q,cfExcelColumns:F,buildExcelParams:H}},template:`
<bo-page title="\uCE90\uC26C\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================== -->
  <bo-container title="\uCE90\uC2DC\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uD234\uBC14: \uD0ED\uBAA8\uB4DC \uD1A0\uAE00 + \uC5D1\uC140/\uC2E0\uADDC ============================ -->
    <template #toolbar-actions>
      <div style="display:flex;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
        <button @click="handleBtnAction('tab-mode', 'list')" style="font-size:11px;padding:4px 10px;border:none;transition:all .15s;"
          :style="uiState.tabMode==='list' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
          \u2630 \uB9AC\uC2A4\uD2B8
        </button>
        <button @click="handleBtnAction('tab-mode', 'card')" style="font-size:11px;padding:4px 10px;border:none;border-left:1px solid #ddd;transition:all .15s;"
          :style="uiState.tabMode==='card' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
          \u229E \uCE74\uB4DC
        </button>
      </div>
      <button class="btn btn_excel" @click="handleBtnAction('caches-excel')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('caches-add', $event)"
        @auxclick="handleBtnAction('caches-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 (BoGrid) ======================================== -->
    <bo-grid v-if="uiState.tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="caches" row-key="cacheId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(c) => detailPanel.selectedId===c.cacheId ? 'background:#fff8f9;' : ''"
      @sort="key => handleBtnAction('caches-sort', key)"
      @ref-click="({type,id}) => handleSelectAction('caches-ref', {type, id})"
      grid-id="caches-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: c, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', c, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', c, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', c)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="caches.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(c, idx) in caches" :key="c?.cacheId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===c.cacheId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('caches-rowView', c.cacheId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;"><span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span> \uCE90\uC2DC #{{ c.cacheId }}</div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('caches-rowView', c.cacheId)" :style="detailPanel.selectedId===c.cacheId?{color:'#e8587a'}:{}">
            {{ c.cacheDesc }}
            <span v-if="detailPanel.selectedId===c.cacheId" style="font-size:10px;margin-left:4px;">\u25BC</span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnTypeBadge(c.cacheTypeCd)" style="font-size:11px;">{{ c.cacheTypeCd }}</span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>\u{1F4B0} {{ (c.cacheAmt||0) > 0 ? '+' : '' }}{{ (c.cacheAmt||0).toLocaleString() }}\uC6D0</div>
            <div>\u{1F4C5} {{ c.cacheDate }}</div>
            <div style="color:#999;margin-top:4px;">\uC794\uC561 {{ (c.balanceAmt||0).toLocaleString() }}\uC6D0</div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('caches-cellClick', 'btn_row_edit', c, $event)" @auxclick.stop="handleGridCellAction('caches-cellClick', 'btn_row_edit', c, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('caches-cellClick', 'btn_row_delete', c)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ================================================ -->
    <bo-pager v-if="baseGridPager.pageTotalCount > 0" :pager="baseGridPager" :on-set-page="n => handleBtnAction('caches-pager-setPage', n)" :on-size-change="() => handleSelectAction('caches-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC, \uD56D\uC0C1 \uD45C\uC2DC) ================================ -->
  <pm-cache-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger" />
  <!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC) ========================================= -->
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uCE90\uC26C\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
