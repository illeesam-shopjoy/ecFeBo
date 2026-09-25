window.MbMemberDtl={name:"MbMemberDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},detailModal:{type:Object,default:()=>({})},errors:{type:Object,default:()=>({})},active:{type:Boolean,default:!0},handleSave:{type:Function,default:()=>{}},handleDelete:{type:Function,default:()=>{}},closeDetail:{type:Function,default:()=>{}},switchToEdit:{type:Function,default:()=>{}},dtlMode:{type:String,default:"view"},reloadTrigger:{type:Number,default:0}},setup(t){const{watch:p,ref:b,reactive:m,computed:s,onMounted:y}=Vue,w=b(t.detailModal.dtlId),f=m({member_grades:[],member_statuses:[]}),a=window.boApp.showToast,v=window.boApp.showConfirm,l=s(()=>!t.detailModal||Object.keys(t.detailModal).length===0),o=m({}),n=m({}),M=b(!1),h=async e=>{var d;if(e)try{const i=await window.boApiSvc.mbMember.getById(e,"\uD68C\uC6D0\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),c=((d=i.data)==null?void 0:d.data)||i.data;c&&Object.assign(o,c)}catch(i){console.error("[MbMemberDtl fnLoadStandalone]",i)}};y(()=>{l.value&&h(t.dtlId)}),p(()=>t.dtlId,e=>{l.value&&h(e)}),p(()=>t.dtlMode,e=>{M.value=e==="edit"},{immediate:!0});const g=s(()=>l.value?o:t.detailModal.form||{}),D=s(()=>l.value?n:t.errors),r=s(()=>l.value?t.dtlId:t.detailModal.dtlId),A=s(()=>l.value?!t.dtlId:!!t.detailModal.isNew),E=s(()=>l.value?M.value:t.active),S=()=>{const e=new URLSearchParams;return e.set("page","mbMemberDtl"),e.set("id",r.value),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},N=()=>{try{window.coExtSdk.shareKakao({title:`\uD68C\uC6D0 ${r.value} - ShopJoy BO`,description:g.value.memberNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:S()})}catch(e){a(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},B=async()=>{try{await navigator.clipboard.writeText(S()),a("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){a(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},I=b(null),u=b(!1),C=async()=>{u.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uD68C\uC6D0\uC0C1\uC138_${r.value||"new"}.pdf`);await window.boUtil.bofExportPdf(I.value,e,a)}finally{u.value=!1}},F=async()=>{if(Object.keys(n).forEach(d=>delete n[d]),o.loginId?coUtil.cofIsValidLoginId(o.loginId)||(n.loginId="\uB85C\uADF8\uC778ID\uB294 \uC601\uBB38 2\uC790\xB7\uC22B\uC790 1\uC790\xB7\uD2B9\uC218\uAE30\uD638 1\uC790 \uC774\uC0C1\uC744 \uD3EC\uD568\uD574 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."):n.loginId="\uB85C\uADF8\uC778ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",o.memberNm||(n.memberNm="\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),coUtil.cofIsValidEmail(o.memberEmail)||(n.memberEmail="\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."),coUtil.cofIsValidMobile(o.memberPhone)||(n.memberPhone="\uC62C\uBC14\uB978 \uD734\uB300\uC804\uD654 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"),Object.keys(n).length){a("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(await v("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{await window.boApiSvc.mbMember.update(o.memberId,o,"\uD68C\uC6D0\uAD00\uB9AC","\uC800\uC7A5"),a("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),t.navigate("__cancelEdit__"),await h(t.dtlId)}catch(d){a(coUtil.cofErrMsg(d),"error",0)}},L=async()=>{if(await v("\uC0AD\uC81C",`[${o.memberNm||r.value}] \uD68C\uC6D0\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await window.boApiSvc.mbMember.remove(o.memberId,"\uD68C\uC6D0\uAD00\uB9AC","\uC0AD\uC81C"),a("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success");try{window.close()}catch{}}catch(d){a(coUtil.cofErrMsg(d),"error",0)}},U=(e,d={})=>{if(e==="form-save")return l.value?F():t.handleSave();if(e==="form-delete")return l.value?L():t.handleDelete();if(e==="form-cancel")return l.value?t.navigate("__cancelEdit__"):t.closeDetail();if(e==="form-close")return l.value?t.navigate("__closeDtl__"):t.closeDetail();if(e==="form-switch-edit")return l.value?t.navigate("__switchToEdit__"):t.switchToEdit();console.warn("[handleBtnAction] unknown cmd:",e)};p(()=>t.detailModal.dtlId,e=>{e&&(w.value=e)},{immediate:!0}),y(async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["MEMBER_GRADE","MEMBER_STATUS_CD"],{compNm:"MbMemberDtl"}),f.member_grades=e.sgGetGrpCodes("MEMBER_GRADE"),f.member_statuses=e.sgGetGrpCodes("MEMBER_STATUS_CD")}),p(()=>t.reloadTrigger,async(e,d)=>{var c;if(e===d||e===0)return;const i=t.detailModal&&t.detailModal.dtlId;if(!(!i||i==="__new__"))try{const x=await window.boApiSvc.mbMember.getById(i,"\uD68C\uC6D0\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),_=((c=x.data)==null?void 0:c.data)||x.data;_&&t.detailModal&&t.detailModal.form&&Object.assign(t.detailModal.form,_)}catch(x){console.error("[MbMemberDtl reloadTrigger]",x)}});const k={};k.baseForm=[{type:"group",label:"\uAE30\uBCF8\uC815\uBCF4"},{key:"loginId",label:"\uB85C\uADF8\uC778ID",type:"text",required:!0,placeholder:"\uC601\uBB38 2\uC790\xB7\uC22B\uC790 1\uC790\xB7\uD2B9\uC218\uAE30\uD638 1\uC790 \uC774\uC0C1, 8\uC790 \uC774\uC0C1",validate:e=>e&&!coUtil.cofIsValidLoginId(e)?"\uB85C\uADF8\uC778ID\uB294 \uC601\uBB38 2\uC790\xB7\uC22B\uC790 1\uC790\xB7\uD2B9\uC218\uAE30\uD638 1\uC790 \uC774\uC0C1\uC744 \uD3EC\uD568\uD574 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.":null},{key:"memberEmail",label:"\uC774\uBA54\uC77C",type:"text",placeholder:"\uC218\uC2E0\uC6A9 \uC774\uBA54\uC77C",validate:e=>coUtil.cofIsValidEmail(e)?null:"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."},{key:"memberNm",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uC774\uB984"},{key:"memberPhone",label:"\uC5F0\uB77D\uCC98",type:"text",placeholder:"010-0000-0000",validate:e=>coUtil.cofIsValidMobile(e)?null:"\uC62C\uBC14\uB978 \uD734\uB300\uC804\uD654 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"},{type:"group",label:"\uC778\uC99D\uC815\uBCF4"},{key:"gradeCd",label:"\uB4F1\uAE09",type:"select",options:()=>f.member_grades},{key:"memberStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>f.member_statuses},{type:"group",label:"\uC0DD\uC131\uC815\uBCF4"},{key:"joinDate",label:"\uAC00\uC785\uC77C",type:"date"},{key:"memberMemo",label:"\uBA54\uBAA8",type:"textarea",rows:6,placeholder:"\uAD00\uB9AC\uC790 \uBA54\uBAA8"}];const T=s(()=>g.value.snsList||[]);return{columns:k,currentId:w,cfSnsList:T,fnSnsGender:e=>e==="M"?"\uB0A8":e==="F"?"\uC5EC":"",fnSnsBirth:(e,d)=>[e||"",d?d.slice(0,2)+"-"+d.slice(2):""].filter(Boolean).join(" / "),fnDt:e=>e?String(e).replace("T"," ").slice(0,16):"",cfStandalone:l,cfForm:g,cfErrors:D,cfDtlId:r,cfIsNew:A,cfActive:E,handleShareKakao:N,handleCopyLink:B,pdfAreaRef:I,pdfExporting:u,handleExportPdf:C,handleBtnAction:U}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138/\uC218\uC815 \uCE74\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC) ====================================== -->
<bo-container body-style="padding:12px;"
  :title="!cfActive ? '\uD68C\uC6D0 \uC0C1\uC138' : (cfIsNew ? '\uD68C\uC6D0 \uB4F1\uB85D' : '\uD68C\uC6D0 \uC218\uC815')"
  :title-id="!cfActive ? '' : (cfIsNew ? '' : (cfForm.memberId || ''))">
  <template #toolbar-actions>
    <button v-if="!cfActive ? !cfIsNew : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button v-if="!cfActive ? !cfIsNew : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
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
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================== -->
  <!-- cfForm \u2014 \uC778\uB77C\uC778\uC740 detailModal.form(\uBD80\uBAA8 \uC81C\uACF5), \uB3C5\uB9BD \uC9C4\uC785\uC740 \uC774 \uD654\uBA74\uC774 \uC9C1\uC811 \uC870\uD68C\uD55C standaloneForm -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="cfForm" :errors="cfErrors"
    :readonly="!cfActive" :cols="3" compact :show-actions="false" />
  <!-- ===== \u25A1.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0.\u25A0. \uC18C\uC15C(SNS) \uC5F0\uB3D9 \u2014 \uCE74\uCE74\uC624/\uB124\uC774\uBC84/\uAD6C\uAE00. \uC5F0\uB3D9\uC5EC\uBD80\xB7\uC5F0\uB3D9/\uC778\uC99D\uC77C\xB7SNS \uAC00 \uC900 \uC815\uBCF4\xB7SNS \uC571 \uD0A4\uC815\uBCF4 (\uC77D\uAE30 \uC804\uC6A9) ====== -->
  <div v-if="cfDtlId && !cfIsNew" style="margin-top:14px;">
    <div style="font-weight:600;margin-bottom:6px;">\uC18C\uC15C \uC5F0\uB3D9 <span style="font-weight:400;color:#888;font-size:12px;">({{ cfSnsList.length }}\uAC74)</span></div>
    <div v-if="!cfSnsList.length" style="padding:10px;color:#888;font-size:12px;border:1px dashed #ddd;border-radius:6px;">\uC5F0\uB3D9\uB41C \uC18C\uC15C \uACC4\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
    <div v-else style="overflow-x:auto;">
      <table style="border-collapse:collapse;font-size:12px;min-width:1100px;width:100%;">
        <thead>
          <tr style="background:#f5f5f5;text-align:left;">
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uCC44\uB110</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC5F0\uB3D9\uC5EC\uBD80</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uB4F1\uB85D\uC77C</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC5F0\uB3D9/\uC778\uC99D\uC77C</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uD574\uC81C\uC77C</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uB2C9\uB124\uC784</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC774\uB984</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC774\uBA54\uC77C</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC131\uBCC4</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC5F0\uB839\uB300</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uCD9C\uC0DD/\uC0DD\uC77C</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uD734\uB300\uD3F0</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">CI</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uBC1B\uC740 \uD56D\uBAA9</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">SNS \uC0AC\uC6A9\uC790ID</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC571ID</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uC571\uBA85</th>
            <th style="padding:6px 8px;border:1px solid #e5e5e5;">\uD074\uB77C\uC774\uC5B8\uD2B8\uD0A4</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in cfSnsList" :key="s.memberSnsId" :style="s.snsLinkYn === 'N' ? 'color:#999;background:#fafafa;' : ''">
            <td style="padding:6px 8px;border:1px solid #e5e5e5;white-space:nowrap;">{{ s.snsChannelCdNm || s.snsChannelCd }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsLinkYn === 'N' ? '\uD574\uC81C' : '\uC5F0\uB3D9\uC911' }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;white-space:nowrap;">{{ fnDt(s.regDate) }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;white-space:nowrap;">{{ fnDt(s.snsLinkDate) }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;white-space:nowrap;">{{ fnDt(s.snsUnlinkDate) }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsNickNm }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsName }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsEmail }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ fnSnsGender(s.snsGender) }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsAgeRange }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ fnSnsBirth(s.snsBirthYear, s.snsBirthDay) }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsPhoneNo }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsCi }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsScope }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsUserId }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsAppId }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;">{{ s.snsAppNm }}</td>
            <td style="padding:6px 8px;border:1px solid #e5e5e5;word-break:break-all;">{{ s.snsClientKey }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A0. \uC18C\uC15C(SNS) \uC5F0\uB3D9 ================================================ -->
  <!-- ===== \u25A0.\u25A0. \uD558\uB2E8 \uC561\uC158 (Mng \uC778\uB77C\uC778 \uC0C1\uC138 \uD328\uB110 \uD45C\uC900 \u2014 \uCC98\uB9AC\uBC84\uD2BC\uC740 \uD558\uB2E8 \uC911\uC559 \uC815\uB82C) ============== -->
  <div v-if="cfDtlId" class="form-actions">
    <template v-if="!cfActive">
      <button class="btn btn_edit" @click="handleBtnAction('form-switch-edit')">\uC218\uC815</button>
      <!-- 2026-08-30: \uC815\uCC45 \uD45C\uC900(\uBCF4\uAE30\uBAA8\uB4DC [\uC218\uC815][\uC0AD\uC81C][\uB2EB\uAE30])\uC5D0 \uB9DE\uCDB0 \uB204\uB77D\uB3FC \uC788\uB358 [\uC0AD\uC81C] \uCD94\uAC00.
           \uD328\uD134 A \uC804\uD658\uC73C\uB85C \uD3B8\uC9D1\uBAA8\uB4DC\uC5D0\uC11C [\uC0AD\uC81C]\uB97C \uBE90\uC73C\uB2C8, \uBCF4\uAE30\uBAA8\uB4DC\uC5D0 \uC5C6\uC73C\uBA74 \uC774 \uD654\uBA74\uC5D0\uC11C \uD68C\uC6D0
           \uC0AD\uC81C \uC790\uCCB4\uAC00 \uC544\uC608 \uBD88\uAC00\uB2A5\uD574\uC9C0\uB294 \uD68C\uADC0\uB77C \uC5EC\uAE30\uC11C \uAC19\uC774 \uCC44\uC6B4\uB2E4. -->
      <button v-if="!cfIsNew" class="btn btn_delete" @click="handleBtnAction('form-delete')">\uC0AD\uC81C</button>
      <button class="btn btn_close" @click="handleBtnAction('form-close')">\uB2EB\uAE30</button>
    </template>
    <template v-if="cfActive">
      <button class="btn btn_save" @click="handleBtnAction('form-save')">\uC800\uC7A5</button>
      <!-- 2026-08-30: \uD328\uD134 A \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70(\uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC \uC720\uC9C0) -->
      <button class="btn btn_cancel" @click="handleBtnAction('form-cancel')">\uCDE8\uC18C</button>
      <button class="btn btn_close" @click="handleBtnAction('form-close')">\uB2EB\uAE30</button>
    </template>
  </div>
  <!-- ===== \u25A1.\u25A0. \uD558\uB2E8 \uC561\uC158 ================================================= -->
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138/\uC218\uC815 \uCE74\uB4DC ================================================ -->
<!-- \uC774\uB825\uC815\uBCF4\uB294 \uBAA9\uB85D(MbMemberMng) \uAD00\uB9AC\uCEEC\uB7FC\uC758 [\uC774\uB825] \uBC84\uD2BC\uC73C\uB85C\uB9CC \uB178\uCD9C\uB41C\uB2E4 \u2014 \uC0C1\uC138 \uD558\uB2E8 \uC0C1\uC2DC \uB80C\uB354 \uD3D0\uC9C0(2026-08-16) -->
`};
