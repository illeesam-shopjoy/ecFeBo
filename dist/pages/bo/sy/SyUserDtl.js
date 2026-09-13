window.SyUserDtl={name:"SyUserDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(s){const{reactive:f,computed:y,watch:A,onMounted:M,ref:m}=Vue,r=window.boApp.showToast,v=window.boApp.showConfirm,c=f({isAddrSearchModal:!1,isDeptModal:!1}),p=f({loading:!1,error:null}),u=f({active_statuses:[],user_roles:[]}),t=f({userId:null,loginId:"",userNm:"",userEmail:"",userPhone:"",deptNm:"",deptId:null,roleId:null,zipcode:"",address:"",addressDetail:"",userStatusCd:"ACTIVE",password:"",profileAttachId:null}),i=f({}),h=m(null),D=yup.object({loginId:yup.string().required("\uB85C\uADF8\uC778ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),userNm:yup.string().required("\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),userEmail:yup.string().required("\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.").matches(coUtil.REGEX_EMAIL,"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."),userPhone:yup.string().matches(coUtil.REGEX_PHONE,"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"),password:yup.string().matches(coUtil.REGEX_PASSWORD,"\uBE44\uBC00\uBC88\uD638\uB294 8\uC790 \uC774\uC0C1\uC774\uBA70 \uC601\uBB38 \uB300/\uC18C\uBB38\uC790\xB7\uC22B\uC790\xB7\uD2B9\uC218\uBB38\uC790\uB97C \uBAA8\uB450 \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.")}),n=y(()=>s.dtlId===null||s.dtlId===void 0),E=y(()=>boUtil.bofGetSiteNm()),k=y(()=>s.dtlMode==="view"),x=()=>{const e=new URLSearchParams;return e.set("page","syUserDtl"),e.set("id",t.userId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},U=()=>{try{window.coExtSdk.shareKakao({title:`\uC0AC\uC6A9\uC790 ${t.userId} - ShopJoy BO`,description:t.userNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:x()})}catch(e){r(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},_=async()=>{try{await navigator.clipboard.writeText(x()),r("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},S=m(null),g=m(!1),N=async()=>{g.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC0AC\uC6A9\uC790\uC0C1\uC138_${t.userId}.pdf`);await window.boUtil.bofExportPdf(S.value,e,r)}finally{g.value=!1}},B=(e,a={})=>{if(e==="form-save")return C();if(e==="form-cancel")return s.navigate("__cancelEdit__");if(e==="form-edit")return s.navigate("__switchToEdit__");if(e==="form-close")return s.navigate("__closeDtl__");if(e==="form-delete")return T();if(e==="addr-search"){c.isAddrSearchModal=!0;return}else if(e==="addr-clear"){t.zipcode="",t.address="";return}else if(e==="deptModal-open"){c.isDeptModal=!0;return}else if(e==="deptModal-clear"){t.deptId=null,t.deptNm="";return}else console.warn("[handleBtnAction] unknown cmd:",e)},P=(e,a={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},R=(e,a,l)=>{if(e==="cmPopup-dept-pick"){if(l==null){c.isDeptModal=!1;return}t.deptId=l.selId,t.deptNm=l.selName,c.isDeptModal=!1;return}else if(e==="addr-search"){if(c.isAddrSearchModal=!1,l==null)return;t.zipcode=l.zonecode,t.address=l.address,h.value&&h.value.focus();return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},I=async()=>{var e;if(!n.value){p.loading=!0;try{const l=(e=(await boApiSvc.syUser.getById(s.dtlId,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;l&&Object.assign(t,{...l,password:""}),p.error=null}catch(a){console.error("[catch-info]",a),p.error=a.message}finally{p.loading=!1}}},C=async()=>{var a,l;Object.keys(i).forEach(o=>delete i[o]);try{await D.validate(t,{abortEarly:!1})}catch(o){console.error("[catch-info]",o),o.inner.forEach(d=>{i[d.path]=d.message})}if(n.value&&!t.password&&(i.password="\uC2E0\uADDC \uB4F1\uB85D \uC2DC \uBE44\uBC00\uBC88\uD638\uB294 \uD544\uC218\uC785\uB2C8\uB2E4."),Object.keys(i).length){coUtil.cofValidationToast(i,r);return}if(await v(n.value?"\uB4F1\uB85D":"\uC800\uC7A5",n.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const{password:o,...d}=t,w={...d};o&&(w.loginPwdHash=o),await(n.value?boApiSvc.syUser.create(w,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.syUser.update(t.userId,w,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC800\uC7A5")),r&&r(n.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s.navigate&&s.navigate("syUserMng",{reload:!0})}catch(o){console.error("[catch-info]",o);const d=((l=(a=o.response)==null?void 0:a.data)==null?void 0:l.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(d,"error",0)}},T=async()=>{var a,l;if(!(n.value||!t.userId||!await v("\uC0AD\uC81C",`[${t.userNm}] \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.syUser.remove(t.userId,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC0AD\uC81C"),r("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s.navigate("syUserMng",{reload:!0})}catch(o){console.error("[catch-info]",o);const d=((l=(a=o.response)==null?void 0:a.data)==null?void 0:l.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(d,"error",0)}},z=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ACTIVE_STATUS","USER_ROLE"],{compNm:"SyUserDtl"}),u.active_statuses=e.sgGetGrpCodes("ACTIVE_STATUS"),u.user_roles=e.sgGetGrpCodes("USER_ROLE")}catch(e){console.error("[fnLoadCodes]",e)}};M(async()=>{await z(),n.value||await I()}),A(()=>s.reloadTrigger,async(e,a)=>{if(!(e===a||e===0)){try{Object.keys(i).forEach(l=>delete i[l])}catch{}await I()}});const L=e=>({\uC2DC\uC2A4\uD15C:"badge-purple",\uC5C5\uBB34:"badge-blue",\uAE30\uD0C0:"badge-gray"})[e]||"badge-gray",j=[],b={};return b.userRoleGrid=[{key:"roleId",label:"ID",style:"width:50px;text-align:center;",align:"center",cellStyle:"color:#888;"},{key:"roleCode",label:"\uC5ED\uD560\uCF54\uB4DC",style:"width:130px;",mono:!0,cellStyle:"font-size:11px;color:#2563eb;"},{key:"roleNm",label:"\uC5ED\uD560\uBA85",cellStyle:"font-weight:600;"},{key:"roleType",label:"\uC720\uD615",style:"width:80px;text-align:center;",align:"center",badge:e=>L(e.roleType)},{key:"restrictPerm",label:"\uC81C\uD55C",style:"width:80px;text-align:center;",align:"center",badge:e=>e.restrictPerm==="\uC5C6\uC74C"?"badge-green":e.restrictPerm==="\uC77D\uAE30"?"badge-orange":"badge-red"},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:60px;text-align:center;",align:"center",badge:e=>e.useYn==="Y"?"badge-green":"badge-red"},{key:"remark",label:"\uBE44\uACE0",cellStyle:"color:#666;"}],b.baseForm=[{type:"group",label:"\uACC4\uC815 \xB7 \uC5F0\uB77D\uCC98\uC815\uBCF4"},{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>E.value,colSpan:2},{key:"loginId",label:"\uB85C\uADF8\uC778ID",type:"text",required:!0,placeholder:"\uB85C\uADF8\uC778 \uC544\uC774\uB514",readonly:!n.value},{key:"password",label:"\uBE44\uBC00\uBC88\uD638",type:"password",required:n.value,placeholder:"\uBE44\uBC00\uBC88\uD638",visible:()=>!k.value,hint:n.value?"":"\uBCC0\uACBD \uC2DC\uC5D0\uB9CC \uC785\uB825",validate:e=>e&&!coUtil.cofIsValidPassword(e)?"8\uC790 \uC774\uC0C1, \uC601\uBB38 \uB300/\uC18C\uBB38\uC790\xB7\uC22B\uC790\xB7\uD2B9\uC218\uBB38\uC790\uB97C \uBAA8\uB450 \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.":null},{key:"userNm",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uC774\uB984"},{key:"userEmail",label:"\uC774\uBA54\uC77C",type:"text",required:!0,placeholder:"\uC774\uBA54\uC77C",validate:e=>coUtil.cofIsValidEmail(e)?null:"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."},{key:"userPhone",label:"\uC5F0\uB77D\uCC98",type:"text",placeholder:"010-0000-0000",validate:e=>coUtil.cofIsValidPhone(e)?null:"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"},{key:"deptNm",label:"\uBD80\uC11C",type:"slot",name:"dept"},{key:"roleId",label:"\uC5ED\uD560",type:"select",options:()=>u.user_roles},{key:"userStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>u.active_statuses},{key:"_addr",label:"\uC8FC\uC18C",type:"slot",name:"addr",colSpan:3},{key:"profileAttachId",label:"\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",type:"slot",name:"profile",colSpan:3}],{modals:c,columns:b,form:t,errors:i,addrDetailRef:h,cfUserRoles:j,handleBtnAction:B,handleSelectAction:P,fnCallbackModal:R,handleShareKakao:U,handleCopyLink:_,pdfAreaRef:S,pdfExporting:g,handleExportPdf:N,cfIsNew:n,cfDtlMode:k,showToast:r}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
<bo-container :title="!active ? '\uC0AC\uC6A9\uC790 \uC0C1\uC138' : (cfIsNew ? '\uC0AC\uC6A9\uC790 \uB4F1\uB85D' : (cfDtlMode ? '\uC0AC\uC6A9\uC790 \uC0C1\uC138' : '\uC0AC\uC6A9\uC790 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.userId)">
  <template #toolbar-actions>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
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
  <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD3FC ============================================== -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBD80\uC11C: picker ========================================== -->
    <template #dept>
      <div v-if="cfDtlMode" class="readonly-field">{{ form.deptNm || '-' }}</div>
      <div v-else style="display:flex;gap:8px;align-items:flex-end;">
        <div class="form-control" style="flex:1;background:#fafafa;display:flex;align-items:center;min-height:28px;padding:4px 10px;font-size:13px;"
          @click="handleBtnAction('deptModal-open')">
          <span v-if="form.deptNm" style="color:#1a1a2e;">{{ form.deptNm }}</span>
          <span v-else style="color:#bbb;font-size:12px;">\uBD80\uC11C\uB97C \uC120\uD0DD\uD558\uC138\uC694</span>
        </div>
        <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('deptModal-open')" style="white-space:nowrap;">
          \u{1F3E2} \uC120\uD0DD
        </button>
        <button v-if="form.deptId" type="button" title="\uC120\uD0DD \uD574\uC81C" @click="handleBtnAction('deptModal-clear')"
          style="background:none;border:none;padding:0 2px 2px;margin-left:-4px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;align-self:flex-end;">
          x
        </button>
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uC18C: \uC6B0\uD3B8\uBC88\uD638 + \uC8FC\uC18C\uAC80\uC0C9 + \uAE30\uBCF8\uC8FC\uC18C + \uC0C1\uC138\uC8FC\uC18C ============== -->
    <template #addr>
      <div v-if="cfDtlMode" class="readonly-field-plain">
        {{ [form.zipcode ? '('+form.zipcode+')' : '', form.address, form.addressDetail].filter(Boolean).join(' ') || '-' }}
      </div>
      <div v-else style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <input class="form-control" style="width:130px;" :value="form.zipcode" readonly placeholder="\uC6B0\uD3B8\uBC88\uD638" />
          <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('addr-search')" style="white-space:nowrap;">
            \u{1F50D} \uC8FC\uC18C \uAC80\uC0C9
          </button>
          <button v-if="form.zipcode || form.address" type="button" title="\uC8FC\uC18C \uCD08\uAE30\uD654" @click="handleBtnAction('addr-clear')"
            style="background:none;border:none;padding:0 2px 2px;margin-left:-4px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;">
            x
          </button>
        </div>
        <input class="form-control" :value="form.address" readonly placeholder="\uAE30\uBCF8\uC8FC\uC18C (\uC8FC\uC18C \uAC80\uC0C9 \uD6C4 \uC790\uB3D9 \uC785\uB825)" />
        <input ref="addrDetailRef" class="form-control" v-model="form.addressDetail" placeholder="\uC0C1\uC138\uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)" />
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0: BaseAttachOne (\uB2E8\uC77C \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC) ============= -->
    <template #profile>
      <base-attach-one v-model="form.profileAttachId" grp-code="USER_PROFILE" grp-nm="\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"
        :max-size-mb="5" allow-ext="jpg,jpeg,png,gif,webp" width="120px" height="120px" :show-toast="showToast"
        :readonly="cfDtlMode" />
    </template>
  </bo-form-area>
  <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 \uD3FC (\uC8FC\uC18C/\uD504\uB85C\uD544 \uD3EC\uD568, \uB2E8\uC77C BoFormArea) ================== -->
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC561\uC158 (active \uC77C \uB54C\uB9CC \uB178\uCD9C) ================================ -->
  <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
    :edit-click="() => handleBtnAction('form-edit')"
    :save-click="() => handleBtnAction('form-save')"
    :delete-click="() => handleBtnAction('form-delete')"
    :cancel-click="() => handleBtnAction('form-cancel')"
    :close-click="() => handleBtnAction('form-close')" />
  <!-- ===== \u25A1.\u25A1. \uD3FC \uC561\uC158 ================================================== -->
</bo-container>
<!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
<!-- ===== \u25A0. \uC801\uC6A9 \uC5ED\uD560 \uBAA9\uB85D ================================================ -->
<bo-container v-if="!cfIsNew" title="\uC801\uC6A9 \uC5ED\uD560 \uBAA9\uB85D" :count-text="cfUserRoles.length + '\uAC74'">
  <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
  <bo-grid bare :columns="columns.userRoleGrid" :rows="cfUserRoles" row-key="roleId"
    empty-text="\uBC30\uC815\uB41C \uC5ED\uD560\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
  <!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
</bo-container>
<!-- ===== \u25A1. \uC801\uC6A9 \uC5ED\uD560 \uBAA9\uB85D ================================================ -->
</div>
<!-- ===== \u25A0. \uBD80\uC11C \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
<bo-cm-popup-modal v-if="modals.isDeptModal" popup-cmd="cmPopup-dept-pick" popup-code="dept" clearable :exclude-id="null" :on-callback="fnCallbackModal" />
<!-- ===== \u25A0. \uC8FC\uC18C \uAC80\uC0C9 \uBAA8\uB2EC (\uCE74\uCE74\uC624 \uC6B0\uD3B8\uBC88\uD638, \uC778\uB77C\uC778 \uB808\uC774\uC5B4) ============================ -->
<bo-addr-search-modal v-if="modals.isAddrSearchModal" modal-name="addr-search" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uBD80\uC11C \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
`};
