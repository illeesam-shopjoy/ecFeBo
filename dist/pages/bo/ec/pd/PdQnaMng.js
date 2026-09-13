window.PdQnaMng={name:"PdQnaMng",props:{navigate:{type:Function,required:!0}},setup(U){const{ref:K,reactive:r,computed:P,watch:j,onMounted:N}=Vue,x=r([]),D=r([]),p=r([]),t=r({loading:!1,error:null,sortKey:"",sortDir:"asc",selectedId:null,isNew:!1,dtlMode:"view"}),k=P(()=>t.dtlMode==="view"),b=r({qna_statuses:[]}),m=r([]),f={reg:{asc:"regDate asc",desc:"regDate desc"}},c=r({qnaId:null,siteId:null,prodId:null,memberId:null,qnaTitle:"",qnaContent:"",answYn:"N",answContent:"",scrtYn:"N",regDate:null,answDate:null}),M=(e,n={})=>{if(e==="searchParam-list")return s.pageNo=1,d("DEFAULT");if(e==="searchParam-reset")return Object.assign(i,A),t.sortKey="",t.sortDir="asc",s.pageNo=1,d();if(e==="form-save")return B();if(e==="form-close")return y();if(e==="form-edit")return Y();if(e==="form-cancel")return L();if(e==="qnas-sort")return Q(n);if(e==="qnas-pager-setPage"){n>=1&&n<=s.pageTotalPage&&(s.pageNo=n,d("PAGE_CLICK"));return}else console.warn("[handleBtnAction] unknown cmd:",e)},_=(e,n={})=>{if(e==="qnas-pager-sizeChange")return s.pageNo=1,d("DEFAULT");console.warn("[handleSelectAction] unknown cmd:",e)},u=(e,n,a,o={})=>{if(e==="qnas-cellClick"){if(n==="btn_row_edit")return T(a);const l=["__no__"];if(o.col&&o.col.link||l.includes(n))return h(a)}else console.warn("[handleGridCellAction] unknown cmd:",e)},w=async(e,n)=>{var a;if(!(!e||!e.qnaId))try{const l=((a=(await boApiSvc.pdQna.getById(e.qnaId,"\uC0C1\uD488Q&A\uAD00\uB9AC","\uB2E8\uAC74\uC870\uD68C")).data)==null?void 0:a.data)||e;Object.assign(c,{qnaId:l.qnaId,siteId:l.siteId,prodId:l.prodId,memberId:l.memberId,qnaTitle:l.qnaTitle||"",qnaContent:l.qnaContent||"",answYn:l.answYn||"N",answContent:l.answContent||"",scrtYn:l.scrtYn||"N",regDate:l.regDate,answDate:l.answDate}),t.selectedId=l.qnaId,t.isNew=!1,t.dtlMode=n}catch(o){console.error("[handleLoadDetail]",o)}},h=e=>w(e,"view"),T=e=>w(e,"edit"),Y=()=>{t.dtlMode="edit"},L=()=>{const e=p.find(n=>n.qnaId===t.selectedId);return e?h(e):y()},B=async()=>{if(c.qnaId)try{await boApiSvc.pdQna.answer(c.qnaId,{answContent:c.answContent,answYn:c.answContent?"Y":"N"},"\uC0C1\uD488Q&A\uAD00\uB9AC","\uB2F5\uBCC0\uC800\uC7A5"),c.answYn=c.answContent?"Y":"N",t.dtlMode="view",await d("RELOAD")}catch(e){console.error("[handleSaveAnswer]",e)}},y=()=>{t.selectedId=null,t.isNew=!1,t.dtlMode="view"},i=r({answYn:"",prodId:""}),A={},s=r({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),I=()=>{const{sortKey:e,sortDir:n}=t;return!e||!f[e]?{}:{sort:f[e][n]}},Q=e=>{t.sortKey===e?t.sortDir==="asc"?t.sortDir="desc":(t.sortKey="",t.sortDir="asc"):(t.sortKey=e,t.sortDir="asc"),s.pageNo=1,d()},d=async(e="DEFAULT")=>{var n;t.loading=!0;try{const o=(n=(await boApiSvc.pdQna.getPage({pageNo:s.pageNo,pageSize:s.pageSize,...I(),...coUtil.cofOmitEmpty(i)},"\uC0C1\uD488Q&A\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:n.data;p.splice(0,p.length,...(o==null?void 0:o.pageList)||[]),s.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,s.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(s),coUtil.cofBuildPagerNums(s),Object.assign(s.pageCond,(o==null?void 0:o.pageCond)||s.pageCond),t.error=null}catch(a){console.error("[catch-info]",a),t.error=a.message}finally{t.loading=!1}},C=e=>{const n=(x||[]).find(a=>a.prodId===e);return n?n.prodNm:e||""},E=C,q=e=>{const n=(D||[]).find(a=>a.memberId===e);return n?n.memberNm:e||""},G=q,v=e=>e==="Y"?"badge-green":"badge-orange",S=e=>e==="Y"?"\uB2F5\uBCC0\uC644\uB8CC":"\uBBF8\uB2F5\uBCC0",O=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ANSW_YN"],{compNm:"PdQnaMng"});try{b.qna_statuses=e.sgGetGrpCodes("ANSW_YN")}catch(n){console.error("[fnLoadCodes]",n)}m.splice(0,m.length,...await window.boUtil.bofLoadSiteOptions())};N(async()=>{await O();const e=new URLSearchParams(window.location.search),n=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(a=>{!n.includes(a)&&e.has(a)&&(i[a]=e.get(a))}),await d("DEFAULT"),Object.assign(A,i)});const g={};g.baseSearch=[{key:"searchValue",label:"\uD0A4\uC6CC\uB4DC",type:"text",placeholder:"\uC81C\uBAA9 \uAC80\uC0C9"},{key:"answYn",label:"\uC0C1\uD0DC",type:"select",options:()=>b.qna_statuses,nullLabel:"\uC804\uCCB4"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>m,nullLabel:"\uC804\uCCB4"}],g.answerForm=[{key:"_qnaContent",label:"\uC9C8\uBB38 \uB0B4\uC6A9",type:"slot",name:"qnaContent",colSpan:3},{key:"answContent",label:"\uB2F5\uBCC0",type:"textarea",rows:6,colSpan:3,placeholder:"\uB2F5\uBCC0\uC744 \uC785\uB825\uD558\uC138\uC694"}],g.baseGrid=[{key:"siteNm",label:"\uC0AC\uC774\uD2B8"},{key:"prodId",label:"\uC0C1\uD488\uBA85",fmt:e=>E(e)},{key:"qnaTitle",label:"\uC81C\uBAA9",link:!0},{key:"memberId",label:"\uC791\uC131\uC790",fmt:e=>G(e)},{key:"answYn",label:"\uC0C1\uD0DC",badge:e=>v(e.answYn),fmt:e=>S(e)},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>(e||"").slice(0,10)},{type:"actions",actions:[{label:"\uC218\uC815",cls:"btn btn_row_edit btn-sm",onClick:e=>u("qnas-cellClick","btn_row_edit",e)}]}];const z=r({show:!1});return{columns:g,qnas:p,uiState:t,cfDtlMode:k,baseGridPager:s,searchParam:i,form:c,excelModal:z,buildExcelParams:()=>({...I(),...coUtil.cofOmitEmpty(i)}),handleBtnAction:M,handleSelectAction:_,handleGridCellAction:u,fnStatusBadge:v,fnAnswLabel:S,fnProdNm:C,fnMemNm:q}},template:`
<bo-page :share-query="searchParam">
  <template #title>\uC0C1\uD488 Q&A \uAD00\uB9AC</template>
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" search-label="\u{1F50D} \uC870\uD68C" reset-label="\u21BA \uCD08\uAE30\uD654" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uADF8\uB9AC\uB4DC =================================================== -->
  <bo-container title="Q&amp;A \uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <bo-grid bare
      :columns="columns.baseGrid" :rows="qnas" row-key="qnaId" :selected-key="uiState.selectedId"
      :loading="uiState.loading"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      empty-text="\uC870\uD68C\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('qnas-sort', key)"
      grid-id="qnas-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('qnas-pager-setPage', n)" :on-size-change="() => handleSelectAction('qnas-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="pdQna" area-nm="\uC0C1\uD488\uBB38\uC758"
      :columns="columns.baseGrid" ui-nm="\uC0C1\uD488Q&A\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uADF8\uB9AC\uB4DC =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC9C8\uBB38/\uB2F5\uBCC0 \u2014 \uD56D\uC0C1 \uD45C\uC2DC, \uBBF8\uC120\uD0DD \uC2DC \uC548\uB0B4) ==================== -->
  <bo-container bare>
    <div class="card" style="margin-top:14px;">
      <div class="toolbar">
        <span class="list-title">
          {{ !uiState.selectedId ? '\uC0C1\uD488\uBB38\uC758 \uC0C1\uC138' : (cfDtlMode ? '\uC0C1\uD488\uBB38\uC758 \uC0C1\uC138' : '\uC0C1\uD488\uBB38\uC758 \uC218\uC815') }}
          <span v-if="uiState.selectedId ? (form.qnaId) : false" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
            #{{ form.qnaId }}
          </span>
          <span v-if="!uiState.selectedId" style="font-size:12px;color:#bbb;margin-left:8px;font-weight:400;">
            \uBAA9\uB85D\uC5D0\uC11C \uD589\uC744 \uC120\uD0DD\uD558\uC138\uC694
          </span>
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0. \uBBF8\uC120\uD0DD \uC548\uB0B4 (\uC601\uC5ED\uC740 \uD56D\uC0C1 \uD45C\uC2DC) ================================= -->
      <div v-if="!uiState.selectedId" style="text-align:center;color:#bbb;font-size:13px;padding:32px 16px;">
        \uBAA9\uB85D\uC5D0\uC11C Q&A \uD589\uC744 \uC120\uD0DD\uD558\uBA74 \uC0C1\uC138/\uB2F5\uBCC0\uC744 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
      </div>
      <!-- ===== \u25A0.\u25A0. \uC0C1\uC138/\uB2F5\uBCC0 \uC785\uB825 (\uD589 \uC120\uD0DD \uC2DC) ================================= -->
      <div v-else style="padding:12px;">
        <!-- \uBA54\uD0C0\uC815\uBCF4 (\uC77D\uAE30 \uC804\uC6A9) -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px 16px;font-size:13px;margin-bottom:14px;">
          <div><span style="color:#999;">\uC0C1\uD488: </span><b>{{ fnProdNm(form.prodId) }}</b></div>
          <div><span style="color:#999;">\uC791\uC131\uC790: </span><b>{{ fnMemNm(form.memberId) }}</b></div>
          <div><span style="color:#999;">\uC0C1\uD0DC: </span>
            <span class="badge" :class="fnStatusBadge(form.answYn)">{{ fnAnswLabel(form.answYn) }}</span>
          </div>
          <div style="grid-column:1/-1;"><span style="color:#999;">\uC81C\uBAA9: </span><b>{{ form.qnaTitle }}</b></div>
        </div>
        <!-- \uB2F5\uBCC0 \uD3FC -->
        <bo-form-area :columns="columns.answerForm" :form="form" :errors="{}"
          :cols="3" :show-actions="false" :readonly="cfDtlMode" plain-readonly>
          <template #qnaContent>
            <div style="padding:12px;background:#fafafa;border:1px solid #e5e7eb;border-radius:6px;min-height:80px;white-space:pre-wrap;">
              {{ form.qnaContent || '(\uB0B4\uC6A9 \uC5C6\uC74C)' }}
            </div>
          </template>
        </bo-form-area>
        <!-- \uD558\uB2E8 \uC561\uC158 \u2014 \uBCF4\uAE30\uBAA8\uB4DC=[\uC218\uC815][\uB2EB\uAE30] / \uC218\uC815\uBAA8\uB4DC=[\uB2F5\uBCC0\uC800\uC7A5][\uCDE8\uC18C] -->
        <bo-form-actions :readonly="cfDtlMode" :show-delete="false" save-label="\uB2F5\uBCC0 \uC800\uC7A5" :edit-click="() => handleBtnAction('form-edit')"
 :save-click="() => handleBtnAction('form-save')"
 :delete-click="() => handleBtnAction('form-delete')"
 :cancel-click="() => handleBtnAction('form-cancel')"
 :close-click="() => handleBtnAction('form-close')" />
      </div>
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 =================================================== -->
</bo-page>
`};
