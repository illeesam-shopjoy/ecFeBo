window.MyContact={name:"MyContact",props:{navigate:{type:Function,required:!0}},setup(z){const{reactive:d,computed:y,ref:c,onMounted:f,watch:I}=Vue,v=window.foApp.showToast,m=window.foApp.showConfirm,w=window.foApp.cart,R=d({loading:!1,error:null}),l=c(""),g=c(""),q=async()=>{var t,a;const e=await coUtil.cofGetAttachRefTableOptions();l.value=((t=e.find(n=>n.key==="CONTACT_CONTENT"))==null?void 0:t.value)||"",g.value=((a=e.find(n=>n.key==="CONTACT_ANSWER"))==null?void 0:a.value)||""},i=window.useFoMyStore(),x=(e,t={})=>{if(e==="searchParam-dateSearch")return P(t);console.warn("[handleBtnAction] unknown cmd:",e)},b=(e,t={})=>{if(e==="contacts-toggle")r.value=r.value===t?null:t;else{if(e==="contacts-cancel")return T(t);console.warn("[handleSelectAction] unknown cmd:",e)}},{inquiries:p,expandedInquiry:r}=Pinia.storeToRefs(i),s=d({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),{dateRange:u,onDateSearch:h}=window.myDateFilterHelper(),T=async e=>{if(!await m("\uBB38\uC758 \uCDE8\uC18C","\uC774 \uBB38\uC758\uB97C \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","warning"))return;const a=p.value.find(n=>n.inquiryId===e);a&&(a.status="\uCDE8\uC18C\uB428"),v("\uBB38\uC758\uAC00 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},C=()=>({dateRangeType:"reg_date",dateRangeStart:u.start,dateRangeEnd:u.end}),o=async()=>{await i.loadInquiriesPage(C(),s)},A=async()=>{await o()},P=async e=>{e&&h(e),s.pageNo=1,await o()},S=async()=>{await o()},k=async()=>{await o()};f(async()=>{await q(),await A()});const N=y(()=>w.length);return{handleBtnAction:x,handleSelectAction:b,myStore:i,inquiries:p,expandedInquiry:r,inquiryPager:s,onPageChange:S,onSizeChange:k,cartCount:N,contentRefTableNm:l,answerRefTableNm:g}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myContact">
  <MyDateFilter @search="handleBtnAction('searchParam-dateSearch', $event)" />
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <PagerHeader :total="inquiryPager.pageTotalCount" :pager="inquiryPager" @size-change="onSizeChange" />
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="!inquiries.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
    \uBB38\uC758 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="q in inquiries" :key="q.inquiryId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <div style="flex:1;cursor:pointer;" @click="handleSelectAction('contacts-toggle', q.inquiryId)">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span style="font-size:0.75rem;font-weight:700;padding:3px 8px;border-radius:20px;color:#fff;"
            :style="'background:'+myStore.inquiryStatusColor(q.status)">
            {{ q.status }}
          </span>
          <span style="font-size:0.78rem;color:var(--text-muted);">
            {{ q.category }}
          </span>
          <span style="font-size:0.78rem;color:var(--text-muted);">
            {{ q.date }}
          </span>
        </div>
        <div style="font-weight:600;font-size:0.9rem;color:var(--text-primary);">
          {{ q.title }}
        </div>
      </div>
      <button v-if="q.status==='\uC694\uCCAD'" @click="handleSelectAction('contacts-cancel', q.inquiryId)"
        style="padding:6px 14px;border:1.5px solid #ef4444;border-radius:6px;background:transparent;color:#ef4444;cursor:pointer;font-size:0.8rem;font-weight:600;white-space:nowrap;">
        \uCDE8\uC18C
      </button>
    </div>
    <div v-if="expandedInquiry===q.inquiryId" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
      <div style="background:var(--bg-base);border-radius:6px;padding:12px;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">
        {{ q.content }}
      </div>
      <!-- ===== \u25A0.\u25A0. \uBB38\uC758 \uCCA8\uBD80\uD30C\uC77C ============================================ -->
      <div style="margin-bottom:10px;">
        <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);margin-bottom:4px;">
          \u{1F4CE} \uCCA8\uBD80\uD30C\uC77C
        </div>
        <base-attach-grp :ref-table-nm="contentRefTableNm" :ref-key-id="q.inquiryId" :ref-id="q.inquiryId"
          grp-code="CONTACT_CONTENT_ATTACH" grp-nm="\uBB38\uC758 \uCCA8\uBD80\uD30C\uC77C"
          display-mode="list" :readonly="true" />
      </div>
      <div v-if="q.answer" style="background:var(--blue-dim);border-radius:6px;padding:12px;font-size:0.85rem;color:var(--text-primary);">
        <span style="font-size:0.78rem;font-weight:700;color:var(--blue);display:block;margin-bottom:4px;">
          \u{1F4E9} \uB2F5\uBCC0
        </span>
        {{ q.answer }}
      </div>
      <!-- ===== \u25A0.\u25A0. \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C ============================================ -->
      <div v-if="q.answer" style="margin-top:10px;">
        <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);margin-bottom:4px;">
          \u{1F4CE} \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C
        </div>
        <base-attach-grp :ref-table-nm="answerRefTableNm" :ref-key-id="q.inquiryId" :ref-id="q.inquiryId"
          grp-code="CONTACT_ANSWER_ATTACH" grp-nm="\uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C"
          display-mode="list" :readonly="true" />
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <Pagination :total="inquiryPager.pageTotalCount" :pager="inquiryPager" @set-page="onPageChange" />
</fo-my-layout>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
</fo-page>
`,components:{FoPage:window.FoPage,FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination}};
