window.Faq={name:"Faq",props:{navigate:{type:Function,required:!0}},emits:[],setup(h){const{ref:v,reactive:d,computed:b,watch:z,onMounted:x}=Vue,s=d({loading:!1,error:null,openFaq:null}),i=d([]),p=d([]),c=d([]),g=v(null),u=new Set,l=d({pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50]}),q=v(""),y=async()=>{var e;const t=await coUtil.cofGetAttachRefTableOptions();q.value=((e=t.find(a=>a.key==="FAQ"))==null?void 0:e.value)||""},w=(t,e={})=>{if(t==="page-goHome")return h.navigate("home");if(t==="page-goContact")return h.navigate("contact");console.warn("[handleBtnAction] unknown cmd:",t)},A=(t,e={})=>{if(t==="faqs-rowToggle"){const a=s.openFaq!==e;s.openFaq=a?e:null,a&&S(e);return}else if(t==="tree-select"){g.value=e,s.openFaq=null,l.pageNo=1,f();return}else if(t==="pager-setPage"){e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,s.openFaq=null,f());return}else if(t==="pager-sizeChange"){l.pageNo=1,s.openFaq=null,f();return}else console.warn("[handleSelectAction] unknown cmd:",t)},I=async()=>{var t;try{const a=(t=(await coApiSvc.syPath.getPage({bizCd:"cm_faq"},"FAQ\uBD84\uB958","\uC870\uD68C")).data)==null?void 0:t.data,o=Array.isArray(a)?a:(a==null?void 0:a.pageList)||[];c.splice(0,c.length,...o)}catch(e){console.error("[handleLoadTree]",e),c.splice(0,c.length)}},f=async()=>{var t;s.loading=!0;try{const e={pageNo:l.pageNo,pageSize:l.pageSize,...g.value!=null?{pathId:g.value}:{}},o=((t=(await foApiSvc.cmFaq.getPage(e,"FAQ","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data)||{},n=o.pageList||[];i.splice(0,i.length,...n.map(r=>({faqId:r.faqId,q:r.faqQuestion,a:r.faqAnswer,viewCount:r.viewCount||0,pathId:r.pathId!=null?String(r.pathId):"",cate:r.pathLabel||""}))),l.pageTotalCount=o.pageTotalCount||0,l.pageTotalPage=o.pageTotalPage||1}catch(e){console.error("[handleLoadFaqs]",e);const a=window.SITE_CONFIG&&window.SITE_CONFIG.faqs||[];i.splice(0,i.length,...a.map((o,n)=>({faqId:"fb"+n,q:o.q,a:o.a,viewCount:0,pathId:"",cate:""}))),l.pageTotalCount=i.length,l.pageTotalPage=1}finally{s.loading=!1}},S=async t=>{var e;if(!(!t||t.startsWith("fb")||u.has(t))){u.add(t);try{const o=(e=(await foApiSvc.cmFaq.incrView(t,"FAQ","\uC870\uD68C\uC218\uC99D\uAC00")).data)==null?void 0:e.data;if(o!=null){const n=i.find(r=>r.faqId===t);n&&(n.viewCount=o)}}catch(a){console.error("[handleIncrView]",a),u.delete(t)}}},F=async()=>{var t;try{const a=((t=(await foApiSvc.cmFaq.getList({},"FAQ","\uBD84\uB958\uCE74\uC6B4\uD2B8")).data)==null?void 0:t.data)||[];p.splice(0,p.length,...a.map(o=>({faqId:o.faqId,pathId:o.pathId!=null?String(o.pathId):""})))}catch(e){console.error("[handleLoadFaqCounts]",e)}};x(async()=>{y(),I(),F(),f()});const T=b(()=>{const t=c.map(n=>({id:String(n.pathId),parentId:n.parentPathId!=null?String(n.parentPathId):null,label:n.pathLabel,sortOrd:n.sortOrd||0})),e={};t.forEach(n=>{(e[n.parentId||"__root__"]=e[n.parentId||"__root__"]||[]).push(n)});const a=(n,r)=>n.sortOrd-r.sortOrd||n.label.localeCompare(r.label,"ko");return(e.__root__||[]).slice().sort(a).map(n=>({id:n.id,label:n.label,count:m(n.id),children:(e[n.id]||[]).slice().sort(a).map(r=>({id:r.id,label:r.label,count:m(r.id)}))}))}),k=t=>{const e=new Set([String(t)]);let a=!0;for(;a;)a=!1,c.forEach(o=>{const n=o.parentPathId!=null?String(o.parentPathId):null;n&&e.has(n)&&!e.has(String(o.pathId))&&(e.add(String(o.pathId)),a=!0)});return e},m=t=>{const e=k(t);return p.filter(a=>e.has(a.pathId)).length},C=b(()=>p.length);return{uiState:s,faqs:i,selectedPathId:g,pager:l,refTableNm:q,cfTree:T,cfTotalCount:C,handleBtnAction:w,handleSelectAction:A}},template:`
<fo-page title="FAQ" eyebrow="Support"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'FAQ' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uBCF8\uBB38: \uBD84\uB958 \uD2B8\uB9AC + \uBAA9\uB85D 2\uB2E8 ================================== -->
  <div class="faq-layout" style="display:grid;grid-template-columns:230px 1fr;gap:20px;align-items:start;">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uBD84\uB958 \uD2B8\uB9AC ============================================ -->
    <aside class="faq-tree" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 8px;position:sticky;top:80px;">
      <div style="font-size:0.78rem;font-weight:800;color:var(--text-secondary);padding:4px 10px 10px;border-bottom:1px solid var(--border);margin-bottom:6px;">
        \u{1F4C2} \uBD84\uB958
      </div>
      <!-- \uC804\uCCB4 -->
      <button class="faq-tree-node" @click="handleSelectAction('tree-select', null)"
        style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:7px 10px;border:none;background:none;cursor:pointer;border-radius:6px;font-size:0.85rem;text-align:left;"
        :style="selectedPathId===null ? 'background:var(--accent);color:#fff;font-weight:700;' : 'color:var(--text-primary);'">
        <span>\uC804\uCCB4</span>
        <span style="font-size:0.72rem;opacity:0.85;">{{ cfTotalCount }}</span>
      </button>
      <!-- \uB300\uBD84\uB958 + \uC911\uBD84\uB958 -->
      <template v-for="root in cfTree" :key="root.id">
        <button class="faq-tree-node" @click="handleSelectAction('tree-select', root.id)"
          style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:7px 10px;margin-top:2px;border:none;background:none;cursor:pointer;border-radius:6px;font-size:0.85rem;font-weight:600;text-align:left;"
          :style="selectedPathId===root.id ? 'background:var(--accent);color:#fff;' : 'color:var(--text-primary);'">
          <span>{{ root.label }}</span>
          <span style="font-size:0.72rem;opacity:0.85;">{{ root.count }}</span>
        </button>
        <button v-for="ch in root.children" :key="ch.id" class="faq-tree-node"
          @click="handleSelectAction('tree-select', ch.id)"
          style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px 5px 24px;border:none;background:none;cursor:pointer;border-radius:6px;font-size:0.8rem;text-align:left;"
          :style="selectedPathId===ch.id ? 'background:var(--accent);color:#fff;font-weight:700;' : 'color:var(--text-secondary);'">
          <span>{{ ch.label }}</span>
          <span style="font-size:0.7rem;opacity:0.8;">{{ ch.count }}</span>
        </button>
      </template>
    </aside>
    <!-- ===== \u25A0.\u25A0. \uC6B0: FAQ \uBAA9\uB85D ============================================= -->
    <div>
      <fo-container card-style="padding:8px clamp(14px,3vw,28px);margin-bottom:16px;">
        <div v-if="!faqs.length" style="text-align:center;padding:48px 0;color:var(--text-muted);font-size:0.9rem;">
          {{ uiState.loading ? '\uBD88\uB7EC\uC624\uB294 \uC911...' : '\uD574\uB2F9 \uBD84\uB958\uC758 FAQ\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
        </div>
        <div v-for="(faq, idx) in faqs" :key="faq.faqId" class="faq-item">
          <button class="faq-question" @click="handleSelectAction('faqs-rowToggle', faq.faqId)">
            <span style="flex-shrink:0;margin-right:12px;min-width:24px;text-align:right;font-size:0.85rem;font-weight:700;color:var(--text-muted);">
              {{ (pager.pageNo - 1) * pager.pageSize + idx + 1 }}
            </span>
            <span style="flex:1;">
              {{ faq.q }}
            </span>
            <span class="faq-views" title="\uC77D\uC74C \uC218" style="flex-shrink:0;margin-right:10px;font-size:0.72rem;color:var(--text-muted);font-weight:500;">
              \u{1F441} {{ (faq.viewCount || 0).toLocaleString() }}
            </span>
            <span class="chevron" :class="{open: uiState.openFaq===faq.faqId}">
              \u25BC
            </span>
          </button>
          <div v-show="uiState.openFaq===faq.faqId" class="faq-answer">
            <div v-if="faq.a" class="faq-answer-html" v-html="faq.a"></div>
            <!-- \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C -->
            <div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--border);">
              <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);margin-bottom:6px;">
                \u{1F4CE} \uCCA8\uBD80\uD30C\uC77C
              </div>
              <base-attach-grp :ref-table-nm="refTableNm" :ref-key-id="faq.faqId" :ref-id="faq.faqId"
                grp-code="FAQ_ANSWER_ATTACH" grp-nm="FAQ \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C"
                display-mode="list" :readonly="true" />
            </div>
          </div>
        </div>
      </fo-container>
      <!-- ===== \u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 (\uCD5C\uB300 10\uAC74/\uD398\uC774\uC9C0) ============================ -->
      <fo-pager v-if="faqs.length" :pager="pager"
        :on-set-page="n => handleSelectAction('pager-setPage', n)"
        :on-size-change="() => handleSelectAction('pager-sizeChange')" />
      <!-- ===== \u25A1. \uD398\uC774\uC9C0\uB124\uC774\uC158 =============================================== -->
      <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED (\uBB38\uC758 \uC720\uB3C4) ===================================== -->
      <div style="text-align:center;padding:clamp(12px,3vw,24px) 0;">
        <p style="color:var(--text-muted);font-size:0.875rem;margin-bottom:16px;">
          \uC6D0\uD558\uC2DC\uB294 \uB2F5\uBCC0\uC744 \uCC3E\uC9C0 \uBABB\uD558\uC168\uB098\uC694?
        </p>
        <button class="btn-blue" @click="handleBtnAction('page-goContact')">
          1:1 \uBB38\uC758\uD558\uAE30
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38 =================================================== -->
</fo-page>
`};
