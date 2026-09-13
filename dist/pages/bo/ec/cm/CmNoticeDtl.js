window.CmNoticeDtl={name:"CmNoticeDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(t){const{ref:r,reactive:d,computed:f,onMounted:k,watch:N}=Vue,m=r(null),{showToast:c,showConfirm:u}=window.boApp,x=d({loading:!1,error:null}),i=d({noticeTypes:[],noticeStatuses:[]}),b=(e=0)=>{const a=new Date;return a.setDate(a.getDate()+e),coUtil.cofToYmd(a)},n=d({noticeId:null,noticeTitle:"",noticeTypeCd:"",isFixed:"",startDate:"",endDate:"",noticeStatusCd:"",contentHtml:""}),I=()=>{Object.assign(n,{isFixed:"N",startDate:b(),endDate:b(7)})},l=d({}),S=yup.object({noticeTitle:yup.string().required("\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),s=f(()=>t.dtlId==null),F=f(()=>t.dtlMode==="view"),C=f(()=>t.dtlId?"NOTICE-"+t.dtlId:""),y=r(""),E=async()=>{var a;const e=await coUtil.cofGetAttachRefTableOptions();y.value=((a=e.find(o=>o.key==="NOTICE"))==null?void 0:a.value)||""},_=e=>{if(e==="baseForm-save")return D();if(e==="baseForm-cancel")return t.navigate("__cancelEdit__");if(e==="baseForm-edit")return t.navigate("__switchToEdit__");if(e==="baseForm-close")return t.navigate("__closeDtl__");if(e==="baseForm-delete")return R();console.warn("[handleBtnAction] unknown cmd:",e)},A=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["NOTICE_TYPE_CD","NOTICE_STATUS"],{compNm:"CmNoticeDtl"}),i.noticeTypes=e.sgGetGrpCodes("NOTICE_TYPE_CD"),i.noticeStatuses=e.sgGetGrpCodes("NOTICE_STATUS")};k(async()=>{await A(),await E(),t.active&&s.value&&I(),await p()}),N(()=>t.reloadTrigger,(e,a)=>{e===a||e===0||(Object.keys(l).forEach(o=>delete l[o]),p())});const p=async()=>{var e;if(!s.value)try{const a=await boApiSvc.cmNotice.getById(t.dtlId,"\uACF5\uC9C0\uC0AC\uD56D\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C");Object.assign(n,((e=a.data)==null?void 0:e.data)||{})}catch(a){console.error("[handleSearchDetail]",a)}},D=async()=>{var a;Object.keys(l).forEach(o=>delete l[o]);try{await S.validate(n,{abortEarly:!1})}catch(o){o.inner.forEach(T=>{l[T.path]=T.message}),coUtil.cofValidationToast(l,c);return}const e=s.value;if(await u(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const o=((a=m.value)==null?void 0:a.pendingChanges)||[];await(e?boApiSvc.cmNotice.create({...n,attachFiles:o},"\uACF5\uC9C0\uC0AC\uD56D\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.cmNotice.update(t.dtlId,{...n,attachFiles:o},"\uACF5\uC9C0\uC0AC\uD56D\uAD00\uB9AC","\uC800\uC7A5")),c(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),t.navigate("cmNoticeMng",{reload:!0})}catch(o){c(coUtil.cofErrMsg(o),"error",0)}},R=async()=>{if(!(s.value||!t.dtlId)&&await u("\uC0AD\uC81C",`[${n.noticeTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApiSvc.cmNotice.remove(t.dtlId,"\uACF5\uC9C0\uC0AC\uD56D\uAD00\uB9AC","\uC0AD\uC81C"),c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),t.navigate("cmNoticeMng",{reload:!0})}catch(e){c(coUtil.cofErrMsg(e),"error",0)}},w=()=>{const e=new URLSearchParams;return e.set("page","cmNoticeDtl"),e.set("id",n.noticeId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},B=()=>{try{window.coExtSdk.shareKakao({title:`\uACF5\uC9C0\uC0AC\uD56D ${n.noticeId} - ShopJoy BO`,description:n.noticeTitle||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:w()})}catch(e){c(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},L=async()=>{try{await navigator.clipboard.writeText(w()),c("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){c(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},g=r(null),h=r(!1),O=async()=>{h.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uACF5\uC9C0\uC0AC\uD56D\uC0C1\uC138_${n.noticeId}.pdf`);await window.boUtil.bofExportPdf(g.value,e,c)}finally{h.value=!1}},v={};return v.baseForm=[{key:"noticeTitle",label:"\uC81C\uBAA9",type:"text",required:!0,placeholder:"\uACF5\uC9C0 \uC81C\uBAA9"},{key:"noticeTypeCd",label:"\uC720\uD615",type:"select",options:()=>i.noticeTypes,nullLabel:"\uC120\uD0DD"},{key:"noticeStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>i.noticeStatuses,nullLabel:"\uC120\uD0DD"},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"isFixed",label:"\uC0C1\uB2E8\uACE0\uC815",type:"checkbox",checkboxLabel:"\uC0C1\uB2E8\uACE0\uC815",hideLabel:!0,checkedValue:"Y",uncheckedValue:"N"},{key:"contentHtml",label:"\uB0B4\uC6A9",type:"slot",name:"content",colSpan:3},{key:"attachFiles",label:"\uCCA8\uBD80\uD30C\uC77C",type:"slot",name:"attachGrp",colSpan:3}],{columns:v,uiState:x,codes:i,baseForm:n,errors:l,handleBtnAction:_,cfIsNew:s,cfReadonly:F,cfAttachRefId:C,attachGrpRef:m,refTableNm:y,showToast:c,handleShareKakao:B,handleCopyLink:L,pdfAreaRef:g,pdfExporting:h,handleExportPdf:O}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uD3FC \uC601\uC5ED (\uC81C\uBAA9/\uD3FC \uBAA8\uB450 \uCEE8\uD14C\uC774\uB108 \uC548\uC5D0) ============================= -->
<bo-container :title="!active ? '\uACF5\uC9C0\uC0AC\uD56D \uC0C1\uC138' : (cfIsNew ? '\uACF5\uC9C0\uC0AC\uD56D \uB4F1\uB85D' : (cfReadonly ? '\uACF5\uC9C0\uC0AC\uD56D \uC0C1\uC138' : '\uACF5\uC9C0\uC0AC\uD56D \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : baseForm.noticeId)">
  <template #toolbar-actions>
    <button v-if="active ? (cfReadonly ? !cfIsNew : false) : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button v-if="active ? (cfReadonly ? !cfIsNew : false) : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
    <button class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting" @click="handleExportPdf">
      <span v-if="pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
    </button>
  </template>
  <!-- ===== \u25A0.\u25A0. \uCEE8\uD14C\uC774\uB108 \uD5E4\uB354 (\uC81C\uBAA9 = list-title, \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uC544\uB2D8) ========= -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="baseForm" :errors="errors"
    :readonly="cfReadonly" :cols="3" compact :show-actions="false">
    <!-- \uB0B4\uC6A9 (HtmlEditor \uB610\uB294 view \uBAA8\uB4DC HTML) -->
    <template #content>
      <div v-if="cfReadonly" class="form-control" style="min-height:200px;line-height:1.6;overflow:auto;">
        <div v-if="baseForm.contentHtml" v-html="baseForm.contentHtml"></div>
        <span v-else style="color:#bbb;">-</span>
      </div>
      <base-html-editor v-else v-model="baseForm.contentHtml" height="280px" />
    </template>
    <template #attachGrp>
      <base-attach-grp ref="attachGrpRef" :ref-table-nm="refTableNm" :ref-key-id="dtlId"
        :ref-id="cfAttachRefId" :show-toast="showToast" :readonly="cfReadonly"
        grp-code="NOTICE_ATTACH" grp-nm="\uACF5\uC9C0 \uCCA8\uBD80\uD30C\uC77C"
        :max-count="5" :max-size-mb="10" allow-ext="jpg,png,gif,pdf,xlsx,docx" />
    </template>
  </bo-form-area>
  <!-- \uD3FC \uC561\uC158 (\uD589 \uC120\uD0DD/\uC2E0\uADDC \uC2DC\uC5D0\uB9CC \uB178\uCD9C) -->
  <bo-form-actions v-if="active" :readonly="cfReadonly" :is-new="cfIsNew"
    :edit-click="() => handleBtnAction('baseForm-edit')"
    :save-click="() => handleBtnAction('baseForm-save')"
    :delete-click="() => handleBtnAction('baseForm-delete')"
    :cancel-click="() => handleBtnAction('baseForm-cancel')"
    :close-click="() => handleBtnAction('baseForm-close')" />
</bo-container>
</div>
`};
