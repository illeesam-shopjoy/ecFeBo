window.PmSaveMng={name:"PmSaveMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(h){const r=(e,o={})=>{if(e==="searchParam-list")return d.pageNo=1,m("SEARCH");if(e==="searchParam-reset")return Object.assign(s,S),n.sortKey="",n.sortDir="asc",d.pageNo=1,f(),m("SEARCH");if(e==="searchParam-dateRange")return $();if(e==="saves-add")return o&&(o.ctrlKey||o.metaKey||o.button===1)?h.openNewWindow("pmSaveDtl",null,"new"):F();if(e==="saves-excel"){T.show=!0;return}else if(e==="tab-mode"){n.tabMode=o;return}else{if(e==="detailPanel-close")return Y();if(e==="saves-sort")return L(o);if(e==="saves-pager-setPage")return X(o);e==="memberModal-open"?p.isMemberPick=!0:e==="searchParam-memberClear"?(s.memberId="",s.memberNm=""):e==="mdModal-open"?p.isMdPick=!0:e==="searchParam-mdClear"?(s.mdUserId="",s.mdUserNm=""):e==="prodModal-open"?p.isProdPick=!0:e==="searchParam-prodClear"?(s.prodId="",s.prodNm=""):e==="vendorModal-open"?p.isVendorPick=!0:e==="searchParam-vendorClear"?(s.vendorId="",s.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},R=(e,o={})=>{if(e==="saves-pager-sizeChange")return Z();if(e==="saves-rowView")return M(o);console.warn("[handleSelectAction] unknown cmd:",e)},K=(e,o,a,l={})=>{if(e==="saves-cellClick"){if(o==="btn_row_edit")return l&&(l.ctrlKey||l.metaKey||l.button===1)?h.openNewWindow("pmSaveDtl",a.saveId,"edit"):j(a.saveId);if(o==="btn_row_delete")return ee(a);const i=["__no__"];if(l.col&&l.col.link||i.includes(o))return l.ctrlKey||l.metaKey||l.button===1?h.openNewWindow("pmSaveDtl",a.saveId):M(a.saveId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},B=(e,o,a)=>{e==="cmPopup-member-pick"?(s.memberId=(a==null?void 0:a.selId)||"",s.memberNm=(a==null?void 0:a.selName)||"",p.isMemberPick=!1):e==="cmPopup-userMd-pick"?(s.mdUserId=(a==null?void 0:a.selId)||"",s.mdUserNm=(a==null?void 0:a.selName)||"",p.isMdPick=!1):e==="cmPopup-prod-pick"?(s.prodId=(a==null?void 0:a.selId)||"",s.prodNm=(a==null?void 0:a.selName)||"",p.isProdPick=!1):e==="cmPopup-vendor-pick"&&(s.vendorId=(a==null?void 0:a.selId)||"",s.vendorNm=(a==null?void 0:a.selName)||"",p.isVendorPick=!1)},{ref:de,reactive:c,computed:v,watch:ie,onMounted:O}=Vue,_=window.boApp.showToast,V=window.boApp.showConfirm,re=window.boApp.showRefModal,y=c([]),n=c({loading:!1,error:null,saveList:[],tabMode:"list",sortKey:"",sortDir:"asc"}),P=c({save_issue_types:[],date_range_opts:[]}),x=c([]),d=c({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),t=c({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),s=c({searchType:"",searchValue:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:"",saveTypeCd:"",memberId:"",memberNm:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),S={},p=c({isMemberPick:!1,isMdPick:!1,isProdPick:!1,isVendorPick:!1}),z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["SAVE_ISSUE_TYPE_CD","PROMO_STATUS","DATE_RANGE_OPT"],{compNm:"PmSaveMng"});try{P.save_issue_types=e.sgGetGrpCodes("SAVE_ISSUE_TYPE_CD"),P.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(o){console.error("[fnLoadCodes]",o)}x.splice(0,x.length,...await window.boUtil.bofLoadSiteOptions())},I={reg:{asc:"regDate asc",desc:"regDate desc"}},C=()=>{const{sortKey:e,sortDir:o}=n;return!e||!I[e]?{}:{sort:I[e][o]}},L=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),d.pageNo=1,m()},m=async(e="DEFAULT")=>{var o,a,l,i,g,k,D,E,U,G;n.loading=!0;try{const b={pageNo:d.pageNo,pageSize:d.pageSize,...C(),...coUtil.cofOmitEmpty(s)};b.searchValue&&!b.searchType&&(b.searchType="saveNm,saveId");const u=await boApiSvc.pmSave.getPage(b,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uC870\uD68C"),le=((a=(o=u.data)==null?void 0:o.data)==null?void 0:a.pageList)||((i=(l=u.data)==null?void 0:l.data)==null?void 0:i.list)||[];y.splice(0,y.length,...le),d.pageTotalCount=((k=(g=u.data)==null?void 0:g.data)==null?void 0:k.pageTotalCount)||0,d.pageTotalPage=((E=(D=u.data)==null?void 0:D.data)==null?void 0:E.pageTotalPage)||coUtil.cofTotalPage(d),coUtil.cofBuildPagerNums(d),Object.assign(d.pageCond,((G=(U=u.data)==null?void 0:U.data)==null?void 0:G.pageCond)||d.pageCond),n.error=null}catch(b){console.error("[catch-info]",b),n.error=b.message}finally{n.loading=!1}};O(async()=>{const o=new Date().getFullYear();Object.assign(s,{dateRangeType:"reg_date",dateRangeStart:`${o-3}-01-01`,dateRangeEnd:`${o}-12-31`}),await z();const a=new URLSearchParams(window.location.search),l=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(i=>{!l.includes(i)&&a.has(i)&&(s[i]=a.get(i))}),await m("DEFAULT"),Object.assign(S,s)});const $=()=>{boUtil.bofApplyDateRange(s),d.pageNo=1},M=e=>{t.selectedId=e,t.openMode="view",t.active=!0,t.reloadTrigger++},f=()=>{t.selectedId="__new__",t.openMode="view",t.active=!1,t.resetSeq++},j=e=>{t.selectedId=e,t.openMode="edit",t.active=!0,t.reloadTrigger++},F=()=>{t.selectedId="__new__",t.openMode="edit",t.active=!0,t.resetSeq++,t.reloadTrigger++},Y=()=>{f()},q=(e,o={})=>{if(e==="pmSaveMng"){o.reload&&m("RELOAD"),f();return}if(e==="__cancelEdit__"){if(t.selectedId&&t.selectedId!=="__new__"){t.openMode="view";return}f();return}if(e==="__closeDtl__"){f();return}if(e==="__switchToEdit__"){t.openMode="edit";return}h.navigate(e,o)},W=v(()=>t.selectedId==="__new__"?null:t.selectedId),H=v(()=>`${t.selectedId}_${t.openMode}_${t.resetSeq}`),J={\uAD6C\uB9E4\uC801\uB9BD:"badge-green",\uD68C\uC6D0\uAC00\uC785:"badge-blue",\uB9AC\uBDF0\uC801\uB9BD:"badge-orange",\uCD9C\uC11D\uCCB4\uD06C:"badge-purple"},A=e=>coUtil.cofCodeBadge("SAVE_TYPE_KR",e,J[e]||"badge-gray"),Q={\uD65C\uC131:"badge-green",\uBE44\uD65C\uC131:"badge-gray",\uC885\uB8CC:"badge-red"},N=e=>coUtil.cofCodeBadge("PROMO_STATUS",e,Q[e]||"badge-gray"),X=async e=>{e>=1&&e<=d.pageTotalPage&&(d.pageNo=e,await m("PAGE_CLICK"))},Z=()=>{d.pageNo=1,m("DEFAULT")},ee=async e=>{var l,i;if(!await V("\uC0AD\uC81C",`[${e.saveNm}] \uC801\uB9BD\uAE08\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const a=(y||[]).findIndex(g=>g.saveId===e.saveId);a!==-1&&y.splice(a,1),t.selectedId===e.saveId&&f();try{const g=await boApiSvc.pmSave.remove(e.saveId,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uC0AD\uC81C");_&&_("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(g){console.error("[catch-info]",g);const k=((i=(l=g.response)==null?void 0:l.data)==null?void 0:i.message)||g.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";_&&_(k,"error",0)}},T=c({show:!1}),ae=v(()=>"pmSave"),oe=v(()=>"\uC801\uB9BD\uAE08"),te=v(()=>w.baseGrid),se=()=>{const e={...C(),...coUtil.cofOmitEmpty(s)};return e.searchValue&&!e.searchType&&(e.searchType="saveNm,saveId"),e},ne=Vue.toRef(n,"tabMode"),w={};return w.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"saveNm",label:"\uC801\uB9BD\uAE08\uBA85"},{value:"saveId",label:"ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"saveTypeCd",type:"select",label:"\uC720\uD615",options:()=>P.save_issue_types,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>r("memberModal-open"),onClear:()=>r("searchParam-memberClear")},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>r("mdModal-open"),onClear:()=>r("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>r("prodModal-open"),onClear:()=>r("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>r("vendorModal-open"),onClear:()=>r("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uC2DC\uC791\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>P.date_range_opts,onRangeChange:()=>r("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>x,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"saveNm",label:"\uC801\uB9BD\uAE08\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>t.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"saveType",label:"\uC720\uD615",badge:e=>A(e.saveType)},{key:"saveVal",label:"\uC801\uB9BD\uAC12",fmt:e=>(e||0).toLocaleString()},{key:"saveUnit",label:"\uB2E8\uC704",cellStyle:"color:#555",fmt:e=>e||"\uC6D0"},{key:"expireDay",label:"\uC720\uD6A8\uAE30\uAC04",cellStyle:"color:#555",fmt:e=>(e||365)+"\uC77C"},{key:"startDate",label:"\uC2DC\uC791\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"endDate",label:"\uC885\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"saveStatus",label:"\uC0C1\uD0DC",badge:e=>N(e.saveStatus)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8",cellStyle:"color:#2563eb"}],{columns:w,saves:y,uiState:n,searchParam:s,baseGridPager:d,detailPanel:t,handleBtnAction:r,handleSelectAction:R,handleGridCellAction:K,cfDetailEditId:W,cfDetailKey:H,tabMode:ne,fnTypeBadge:A,fnStatusBadge:N,inlineNavigate:q,modals:p,fnCallbackModal:B,excelModal:T,cfExcelDomain:ae,cfExcelAreaNm:oe,cfExcelColumns:te,buildExcelParams:se}},template:`
<bo-page title="\uC801\uB9BD\uAE08\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9\uC601\uC5ED ==================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D\uC601\uC5ED (\uB9AC\uC2A4\uD2B8/\uCE74\uB4DC \uD1A0\uAE00) ======================================== -->
  <bo-container title="\uC801\uB9BD\uAE08\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <!-- ===== \u25A0.\u25A0. \uD234\uBC14 \uC561\uC158: \uD0ED\uBAA8\uB4DC \uD1A0\uAE00 + \uC5D1\uC140/\uC2E0\uADDC =================================== -->
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
        <button class="btn btn_excel" @click="handleBtnAction('saves-excel')">
          \u{1F4E5} \uC5D1\uC140
        </button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('saves-add', $event)"
          @auxclick="handleBtnAction('saves-add', $event)">
          + \uC2E0\uADDC
        </button>
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 (BoGrid) ======================================== -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="saves" row-key="saveId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(s) => detailPanel.selectedId===s.saveId ? 'background:#fff8f9;' : ''" @sort="key => handleBtnAction('saves-sort', key)" grid-id="saves-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: s, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', s, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', s, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', s)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="saves.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(s, idx) in saves" :key="s?.saveId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===s.saveId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('saves-rowView', s.saveId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            <span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span> \uC801\uB9BD\uAE08 #{{ s.saveId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('saves-rowView', s.saveId)" :style="detailPanel.selectedId===s.saveId?{color:'#e8587a'}:{}">
            {{ s.saveNm }}
            <span v-if="detailPanel.selectedId===s.saveId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnTypeBadge(s.saveType)" style="font-size:11px;">
              {{ s.saveType }}
            </span>
            <span class="badge" :class="fnStatusBadge(s.saveStatus)" style="font-size:11px;">
              {{ s.saveStatus }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F3AF} {{ (s.saveVal||0).toLocaleString() }}{{ s.saveUnit || '\uC6D0' }}
            </div>
            <div>
              \u{1F4C5} {{ s.startDate }} ~ {{ s.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \uC720\uD6A8\uAE30\uAC04 {{ s.expireDay || 365 }}\uC77C
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('saves-cellClick', 'btn_row_edit', s, $event)" @auxclick.stop="handleGridCellAction('saves-cellClick', 'btn_row_edit', s, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('saves-cellClick', 'btn_row_delete', s)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ s.saveId }}
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ================================================ -->
    <bo-pager v-if="baseGridPager.pageTotalCount > 0" :pager="baseGridPager" :on-set-page="n => handleBtnAction('saves-pager-setPage', n)" :on-size-change="() => handleSelectAction('saves-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138\uC601\uC5ED: PmSaveDtl \uC778\uB77C\uC778 \uC784\uBCA0\uB4DC ============================== -->
  <pm-save-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uC801\uB9BD\uAE08\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
