window.Contact={name:"Contact",props:{navigate:{type:Function,required:!0},config:{type:Object,default:()=>({})}},emits:[],setup(n){const{ref:s,reactive:r,computed:p,watch:h,onMounted:x,onBeforeUnmount:w}=Vue,i=window.foApp.showToast,c=r({isOrderModal:!1}),d=r({loading:!1,error:null}),k=p(()=>n.config&&Object.keys(n.config).length?n.config:window.SITE_CONFIG||{}),N=(e,t={})=>{if(e==="page-goHome")return n.navigate("home");if(e==="form-submit")return y();if(e==="orderModal-open")return O();console.warn("[handleBtnAction] unknown cmd:",e)},T=(e,t={})=>{if(e==="orderNo-clear"){o.orderNo="";return}else console.warn("[handleSelectAction] unknown cmd:",e)},C=(e,t,l)=>{if(e==="cmPopup-myMemberOrder-pick"){c.isOrderModal=!1,l&&(o.orderNo=l.selId);return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},A=[{icon:"\u{1F4E8}",title:"\uC811\uC218",desc:"\uBB38\uC758 \uC591\uC2DD\uC744 \uC81C\uCD9C\uD558\uBA74 \uC989\uC2DC \uC811\uC218\uB429\uB2C8\uB2E4.",color:"#3b82f6"},{icon:"\u{1F50D}",title:"\uD655\uC778 / \uCC98\uB9AC\uC911",desc:"\uB2F4\uB2F9\uC790\uAC00 \uB0B4\uC6A9\uC744 \uD655\uC778\uD558\uACE0 \uCC98\uB9AC\uD569\uB2C8\uB2E4.",color:"#f59e0b"},{icon:"\u2705",title:"\uB2F5\uBCC0 \uC644\uB8CC",desc:"\uB9C8\uC774\uD398\uC774\uC9C0 > \uBB38\uC758\uC5D0\uC11C \uB2F5\uBCC0\uC744 \uD655\uC778\uD558\uC138\uC694.",color:"#22c55e"}],O=()=>{var t,l;const e=(l=(t=window.foAuth)==null?void 0:t.state)==null?void 0:l.user;if(!e||!e.authId){i("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694.","error");return}c.isOrderModal=!0},M=p(()=>coUtil.cofCodesByGroup(window.SITE_CONFIG||{},"shopjoy_contact_inquiry")),o=r({name:"",email:"",tel:"",orderNo:"",inquiryType:"",desc:""}),a=r({}),f=s(null),m=s(0),u=s(""),S=async()=>{var t;const e=await coUtil.cofGetAttachRefTableOptions();u.value=((t=e.find(l=>l.key==="CONTACT_CONTENT"))==null?void 0:t.value)||""},E=()=>{var e,t;try{const l=(t=(e=window.foAuth)==null?void 0:e.state)==null?void 0:t.user;if(!l)return;o.name||(o.name=l.memberNm||l.authNm||l.name||""),o.email||(o.email=l.memberEmail||l.email||l.loginId||""),o.tel||(o.tel=l.memberHpNo||l.phone||l.memberPhone||"")}catch(l){console.error("[fnPrefillUser]",l)}},g=e=>{const t=e.detail||{};t.name!=null&&(o.name=t.name),t.email!=null&&(o.email=t.email),t.tel!=null&&(o.tel=t.tel)};x(async()=>{await E(),await S(),window.addEventListener("fo-dev-autofill",g)}),w(()=>window.removeEventListener("fo-dev-autofill",g));const v=()=>String(o.desc||"").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").trim(),j=()=>{Object.keys(a).forEach(t=>delete a[t]);let e=!0;return(!o.name.trim()||o.name.trim().length<2)&&(a.name="\uC774\uB984\uC744 2\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),(!o.email.trim()||!coUtil.cofIsValidEmail(o.email))&&(a.email="\uC720\uD6A8\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),o.tel&&!coUtil.cofIsValidPhone(o.tel)&&(a.tel="\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)",e=!1),v().length<10&&(a.desc="\uBB38\uC758 \uB0B4\uC6A9\uC744 \uCD5C\uC18C 10\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),e};h(()=>o.desc,()=>{a.desc&&v().length>=10&&delete a.desc});const y=async()=>{var e;if(!j()){const t=a.name||a.email||a.desc||"\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.";i(t,"error");return}d.loading=!0;try{const t=((e=f.value)==null?void 0:e.pendingChanges)||[];await foApiSvc.myInquiry.create({inquiryType:o.inquiryType,name:o.name,email:o.email,tel:o.tel,orderNo:o.orderNo,message:o.desc,blogAuthor:o.name,attachFiles:t},"\uBB38\uC758","\uC800\uC7A5"),i("\uBB38\uC758\uAC00 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBE60\uB974\uAC8C \uB2F5\uBCC0\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4!","success"),Object.assign(o,{name:"",email:"",tel:"",orderNo:"",inquiryType:"",desc:""}),m.value++}catch(t){const l=coUtil.cofErrMsg(t,"\uBB38\uC758 \uC811\uC218 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");i(l,"error",0)}finally{d.loading=!1}},b={};return b.baseForm=[{key:"name",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uD64D\uAE38\uB3D9"},{key:"email",label:"\uC774\uBA54\uC77C",type:"email",required:!0,placeholder:"hello@example.com",validate:e=>e&&!coUtil.cofIsValidEmail(e)?"\uC720\uD6A8\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.":null},{key:"tel",label:"\uC5F0\uB77D\uCC98",type:"tel",placeholder:"010-1234-5678",validate:e=>coUtil.cofIsValidPhone(e)?null:"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"},{key:"orderNo",label:"\uC8FC\uBB38\uBC88\uD638",type:"slot",name:"orderNoPick"},{type:"rowBreak"},{key:"inquiryType",label:"\uBB38\uC758 \uC720\uD615",type:"select",colSpan:2,options:()=>M.value,nullLabel:"\uC120\uD0DD\uD574\uC8FC\uC138\uC694 (\uC120\uD0DD\uC0AC\uD56D)"},{type:"rowBreak"},{key:"desc",label:"\uBB38\uC758 \uB0B4\uC6A9",type:"slot",name:"descEditor",required:!0,colSpan:2}],{modals:c,columns:b,config:k,contactSteps:A,uiState:d,showToast:i,handleBtnAction:N,handleSelectAction:T,fnCallbackModal:C,form:o,errors:a,attachGrpRef:f,attachResetKey:m,refTableNm:u,handleSubmit:y}},template:`
<fo-page title="\uACE0\uAC1D\uC13C\uD130" eyebrow="Support"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uACE0\uAC1D\uC13C\uD130' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:grid;grid-template-columns:minmax(0,7fr) minmax(0,3fr);gap:clamp(14px,2.5vw,28px);align-items:start;" class="contact-grid">
    <!-- ===== \u25A0.\u25A0. \uBB38\uC758 \uD3FC ================================================== -->
    <fo-container title="\u2709\uFE0F \uBB38\uC758 \uC591\uC2DD" card-style="padding:clamp(16px,4vw,32px);">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <fo-form-area :columns="columns.baseForm" :form="form" :errors="errors" :cols="2">
        <template #orderNoPick>
          <label class="form-label">\uC8FC\uBB38\uBC88\uD638</label>
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="form-input" v-model="form.orderNo"
              placeholder="\uC9C1\uC811 \uC785\uB825 \uB610\uB294 \uC8FC\uBB38 \uC120\uD0DD" style="flex:1;" />
            <button type="button" title="\uB0B4 \uC8FC\uBB38\uC5D0\uC11C \uC120\uD0DD"
              @click="handleBtnAction('orderModal-open')"
              style="flex-shrink:0;width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;font-size:1.1rem;">
              \u{1F4CB}
            </button>
          </div>
        </template>
        <template #descEditor>
          <label class="form-label">
            \uBB38\uC758 \uB0B4\uC6A9 <span class="form-required">*</span>
          </label>
          <base-html-editor v-model="form.desc" height="220px" />
          <div v-if="errors.desc" class="field-error" style="color:#ef4444;font-size:0.78rem;margin-top:4px;">
            {{ errors.desc }}
          </div>
        </template>
      </fo-form-area>
      <div style="margin-bottom:22px;">
        <label class="form-label">
          \uCCA8\uBD80\uD30C\uC77C
        </label>
        <base-attach-grp :key="attachResetKey" ref="attachGrpRef"
          :ref-table-nm="refTableNm"
          :show-toast="showToast"
          grp-code="CONTACT_CONTENT_ATTACH"
          grp-nm="\uBB38\uC758 \uCCA8\uBD80\uD30C\uC77C"
          :max-count="5"
          :max-size-mb="10"
          allow-ext="jpg,jpeg,png,gif,pdf,xlsx,docx,zip" />
      </div>
      <button class="btn-blue" @click="handleBtnAction('form-submit')" :disabled="uiState.loading" style="width:100%;padding:13px;">
        {{ uiState.loading ? '\uC811\uC218 \uC911...' : '\uBB38\uC758 \uC811\uC218\uD558\uAE30' }}
      </button>
    </fo-container>
    <!-- ===== \u25A1.\u25A1. \uBB38\uC758 \uD3FC ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC5F0\uB77D\uCC98 + \uCC98\uB9AC\uC808\uCC28 \uC548\uB0B4 ========================================== -->
    <div style="display:flex;flex-direction:column;gap:18px;">
      <fo-container title="\u{1F4CB} \uC5F0\uB77D\uCC98" card-style="padding:24px;">
        <div class="info-row">
          <span class="info-icon">
            \u{1F4DE}
          </span>
          <div>
            <div class="info-label">
              \uC804\uD654
            </div>
            <div class="info-val">
              {{ config.tel }}
            </div>
          </div>
        </div>
        <div class="info-row">
          <span class="info-icon">
            \u{1F4E7}
          </span>
          <div>
            <div class="info-label">
              \uC774\uBA54\uC77C
            </div>
            <div class="info-val">
              {{ config.email }}
            </div>
          </div>
        </div>
        <div class="info-row">
          <span class="info-icon">
            \u{1F558}
          </span>
          <div>
            <div class="info-label">
              \uC6B4\uC601 \uC2DC\uAC04
            </div>
            <div class="info-val">
              \uD3C9\uC77C 09:00 \u2013 18:00
            </div>
          </div>
        </div>
        <div class="info-row">
          <span class="info-icon">
            \u{1F69A}
          </span>
          <div>
            <div class="info-label">
              \uBC30\uC1A1 \uC548\uB0B4
            </div>
            <div class="info-val">
              \uACB0\uC81C \uD655\uC778 \uD6C4 1~2 \uC601\uC5C5\uC77C \uCD9C\uACE0
            </div>
          </div>
        </div>
      </fo-container>
      <fo-container title="\u{1F9ED} \uBB38\uC758 \uCC98\uB9AC \uC808\uCC28" card-style="padding:24px;">
        <!-- 3\uB2E8\uACC4 \uD0C0\uC784\uB77C\uC778 -->
        <div style="display:flex;flex-direction:column;gap:0;">
          <div v-for="(step, i) in contactSteps" :key="i"
            style="display:flex;gap:14px;align-items:flex-start;">
            <!-- \uC88C: \uBC88\uD638 \uC6D0 + \uC5F0\uACB0\uC120 -->
            <div style="display:flex;flex-direction:column;align-items:center;align-self:stretch;">
              <div style="width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:800;color:#fff;flex-shrink:0;"
                :style="'background:' + step.color">
                {{ i + 1 }}
              </div>
              <div v-if="i < contactSteps.length - 1" style="width:2px;flex:1;min-height:24px;background:var(--border);margin:2px 0;"></div>
            </div>
            <!-- \uC6B0: \uC81C\uBAA9 + \uC124\uBA85 -->
            <div style="padding-bottom:16px;">
              <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">
                {{ step.icon }} {{ step.title }}
              </div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin-top:3px;line-height:1.5;">
                {{ step.desc }}
              </div>
            </div>
          </div>
        </div>
        <!-- \uC751\uB2F5 \uC548\uB0B4 \uBC15\uC2A4 -->
        <div style="margin-top:6px;padding:12px 14px;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;gap:8px;">
          <span style="font-size:1.1rem;">\u23F1</span>
          <span style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">
            \uD3C9\uADE0 \uC751\uB2F5 <b style="color:var(--text-primary);">\uC601\uC5C5\uC77C \uAE30\uC900 1\uC77C \uC774\uB0B4</b> \xB7
            \uB2F5\uBCC0\uC740 <b style="color:var(--text-primary);">\uB9C8\uC774\uD398\uC774\uC9C0 &gt; \uBB38\uC758</b>\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
          </span>
        </div>
      </fo-container>
    </div>
  </div>
  <!-- ===== \u25A0. \uC8FC\uBB38 \uC120\uD0DD \uBAA8\uB2EC (\uACF5\uD1B5\uD31D\uC5C5 \u2014 myMemberOrder \uB294 \uC138\uC158\uC870\uAC74 \uB85C \uBCF8\uC778 \uC8FC\uBB38\uB9CC) ==== -->
  <fo-cm-popup-modal popup-cmd="cmPopup-myMemberOrder-pick" popup-code="myMemberOrder"
    :show="modals.isOrderModal" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC8FC\uBB38 \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
</fo-page>
<!-- ===== \u25A1.\u25A1. \uC5F0\uB77D\uCC98 + \uCC98\uB9AC\uC808\uCC28 \uC548\uB0B4 ========================================== -->
<!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
`};
