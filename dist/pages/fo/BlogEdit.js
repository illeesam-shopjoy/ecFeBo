window.BlogEdit={name:"BlogEdit",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(r){const{computed:f,reactive:i,onMounted:y}=Vue,n=window.foApp.showToast,w=i({loading:!1,error:null}),d=f(()=>!!r.dtlId),a=i({title:"",category:"fashion",excerpt:"",body:"",tags:""}),o=i({}),u=(e,t={})=>{if(e==="form-save")return p();if(e==="form-cancel")return g();if(e==="form-addImage")return m();console.warn("[handleBtnAction] unknown cmd:",e)},x=(e,t={})=>{if(e==="form-rowRemoveImage")return b(t);console.warn("[handleSelectAction] unknown cmd:",e)},v=[{id:"fashion",name:"\uD328\uC158"},{id:"lifestyle",name:"\uB77C\uC774\uD504\uC2A4\uD0C0\uC77C"},{id:"trend",name:"\uD2B8\uB80C\uB4DC"},{id:"howto",name:"\uC2A4\uD0C0\uC77C\uB9C1 \uD301"}],c={};c.baseForm=[{key:"title",label:"\uC81C\uBAA9",type:"text",required:!0,colSpan:2,placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"},{type:"rowBreak"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",type:"select",colSpan:2,nullable:!1,options:()=>v.map(e=>({value:e.id,label:e.name}))},{type:"rowBreak"},{key:"excerpt",label:"\uC694\uC57D",type:"text",colSpan:2,placeholder:"\uD55C \uC904 \uC694\uC57D"},{type:"rowBreak"},{key:"body",label:"\uBCF8\uBB38",type:"textarea",required:!0,colSpan:2,rows:14,placeholder:"\uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694..."}];const h=async(e="DEFAULT")=>{var t;if(d.value)try{const s=await foApiSvc.cmBltn.getById(r.dtlId,"\uBE14\uB85C\uADF8\uD3B8\uC9D1","\uC0C1\uC138\uC870\uD68C");Object.assign(a,((t=s.data)==null?void 0:t.data)||{})}catch{Object.assign(a,{title:"2026 \uBD04 \uD2B8\uB80C\uB4DC \uCEEC\uB7EC \uAC00\uC774\uB4DC",category:"trend",excerpt:"\uC62C \uBD04 \uC8FC\uBAA9\uD574\uC57C \uD560 \uD2B8\uB80C\uB4DC \uCEEC\uB7EC\uC640 \uCEEC\uB7EC \uB9E4\uCE6D \uBC29\uBC95\uC744 \uC54C\uC544\uBD05\uB2C8\uB2E4.",body:`\uC62C \uBD04 \uC8FC\uBAA9\uD574\uC57C \uD560 \uD2B8\uB80C\uB4DC \uCEEC\uB7EC\uB294 \uD30C\uC2A4\uD154 \uB77C\uBCA4\uB354, \uC18C\uD504\uD2B8 \uBBFC\uD2B8, \uCF54\uB784 \uD551\uD06C\uC785\uB2C8\uB2E4.

\uD30C\uC2A4\uD154 \uCEEC\uB7EC\uB294 \uBD80\uB4DC\uB7EC\uC6B4 \uBD84\uC704\uAE30\uB97C \uC5F0\uCD9C\uD558\uBA74\uC11C\uB3C4 \uC138\uB828\uB41C \uB290\uB08C\uC744 \uC90D\uB2C8\uB2E4.`,tags:"\uD2B8\uB80C\uB4DC, \uCEEC\uB7EC, 2026SS"})}},p=()=>{if(Object.keys(o).forEach(e=>delete o[e]),a.title.trim()||(o.title="\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),a.body.trim()||(o.body="\uBCF8\uBB38\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),Object.keys(o).length){n==null||n("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}n==null||n(d.value?"\uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),r.navigate("blog")},g=()=>r.navigate("blog"),l=i([]),m=()=>{l.push({id:Date.now(),name:"image_"+(l.length+1)+".jpg",size:"1.2 MB"})},b=e=>{const t=l.findIndex(s=>s.id===e);t!==-1&&l.splice(t,1)};return y(async()=>{h()}),{columns:c,handleBtnAction:u,handleSelectAction:x,cfIsEdit:d,form:a,errors:o,images:l,handleSave:p,handleCancel:g,handleAddImage:m,handleRemoveImage:b}},template:`
<fo-page eyebrow="ShopJoy"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'Blog', page:'blog' }, { label: cfIsEdit ? '\uAE00 \uC218\uC815' : '\uC0C8 \uAE00 \uC791\uC131' }]"
  @nav="p => navigate(p)">
  <template #title>{{ cfIsEdit ? '\uAE00 \uC218\uC815' : '\uC0C8 \uAE00 \uC791\uC131' }}</template>
  <div style="max-width:760px;margin:0 auto;">
  <!-- ===== \u25A0. \uD3FC ======================================================= -->
  <fo-container card-style="padding:clamp(16px,3vw,28px);">
    <!-- ===== \u25A0.\u25A0. \uC81C\uBAA9 / \uCE74\uD14C\uACE0\uB9AC / \uC694\uC57D / \uBCF8\uBB38 =================================== -->
    <fo-form-area :columns="columns.baseForm" :form="form" :errors="errors" :cols="2" />
    <!-- ===== \u25A0.\u25A0. \uC774\uBBF8\uC9C0 \uCCA8\uBD80 ================================================ -->
    <div style="margin-bottom:20px;">
      <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:8px;">
        \uC774\uBBF8\uC9C0 \uCCA8\uBD80
      </label>
      <button @click="handleBtnAction('form-addImage')" class="btn-outline" style="padding:8px 16px;font-size:0.82rem;margin-bottom:10px;">
        + \uC774\uBBF8\uC9C0 \uCD94\uAC00
      </button>
      <div v-for="img in images" :key="img.id"
        style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--bg-base);border-radius:6px;margin-bottom:6px;border:1px solid var(--border);">
        <span style="font-size:0.82rem;color:var(--text-secondary);flex:1;">
          \u{1F4CE} {{ img.name }} ({{ img.size }})
        </span>
        <button @click="handleSelectAction('form-rowRemoveImage', img.id)"
          style="background:none;border:none;cursor:pointer;color:#ef4444;font-size:0.78rem;font-weight:600;">
          \uC0AD\uC81C
        </button>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC774\uBBF8\uC9C0 \uCCA8\uBD80 ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uD0DC\uADF8 ==================================================== -->
    <div style="margin-bottom:28px;">
      <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:8px;">
        \uD0DC\uADF8 (\uC27C\uD45C\uB85C \uAD6C\uBD84)
      </label>
      <input v-model="form.tags" type="text" placeholder="\uD328\uC158, \uD2B8\uB80C\uB4DC, 2026SS"
        style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:0.88rem;outline:none;background:var(--bg-card);color:var(--text-primary);" />
      <div v-if="form.tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
        <span v-for="tag in form.tags.split(',').map(s=>s.trim()).filter(Boolean)" :key="tag"
          style="padding:3px 10px;background:var(--blue-dim);color:var(--blue);border-radius:20px;font-size:0.72rem;font-weight:600;">
          #{{ tag }}
        </span>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0DC\uADF8 ==================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBC84\uD2BC ==================================================== -->
    <div style="display:flex;gap:10px;justify-content:flex-end;">
      <button class="btn btn_cancel" @click="handleBtnAction('form-cancel')" style="padding:11px 28px;font-size:0.88rem;">
        \uCDE8\uC18C
      </button>
      <button class="btn btn_save" @click="handleBtnAction('form-save')" style="padding:11px 28px;font-size:0.88rem;">
        {{ cfIsEdit ? '\uC218\uC815' : '\uB4F1\uB85D' }}
      </button>
    </div>
  </fo-container>
  <!-- ===== \u25A1. \uD3FC ======================================================= -->
  </div>
</fo-page>
`};
