window.PlanView={name:"PlanView",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(o){const{reactive:l,computed:i,onMounted:d}=Vue,g=l({loading:!1,error:null}),n=l([]),s=(e,t={})=>{if(e==="page-goPlanList")return o.navigate("plan");console.warn("[handleBtnAction] unknown cmd:",e)},p=async()=>{var e;try{const r=((e=(await foApiSvc.pmPlan.getById(o.dtlId,"\uAE30\uD68D\uC804\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data)||null;if(n.splice(0,n.length,...r?[r]:[]),r){const a=r.planTitle||r.planNm||"";foUtil.fofSetPageMeta({title:a?a+" | ShopJoy":void 0,description:r.planDesc||(a?a+" - ShopJoy \uAE30\uD68D\uC804":void 0)})}}catch(t){console.error("[handleSearchData]",t),n.splice(0,n.length)}},c=i(()=>{const e=n.length>0?n[0]:null;return e?{id:e.planId,title:e.planTitle||e.planNm||"",heroEyebrow:e.planTypeCdNm||e.planTypeCd||"PLAN",heroSub:e.planDesc||"",heroBg:e.bannerUrl?"url("+e.bannerUrl+") center/cover":"linear-gradient(135deg,#5b6cff 0%,#8a4fff 100%)",heroTextColor:"#ffffff",startDate:(e.startDate||"").toString().slice(0,10),endDate:(e.endDate||"").toString().slice(0,10),planItems:(e.planItems||[]).map(t=>({id:t.planItemId,prodId:t.prodId||"",memo:t.planItemMemo||"",isDeal:!!t.dealPoolId,dealPrice:t.dealPrice,remainQty:t.dealRemainQty,totalQty:t.dealTotalQty}))}:null});return d(async()=>{if(!o.dtlId){o.navigate("plan");return}await p()}),{handleBtnAction:s,cfPlan:c}},template:`
<fo-page v-if="cfPlan" bare style="background:var(--bg-base);"
  @nav="p => navigate(p)">
  <!-- ===== \u25A0. \u2460 \uD788\uC5B4\uB85C \uBC30\uB108 ================================================ -->
  <template #banner>
  <div :style="{
    background: cfPlan.heroBg,
    minHeight: '400px',
    display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center',
    textAlign:'center', padding:'clamp(40px,8vw,72px) clamp(16px,4vw,24px) clamp(32px,6vw,60px)',
    position:'relative', overflow:'hidden',
    }">
    <div style="position:relative;z-index:1;max-width:700px;">
      <div style="display:inline-block;padding:4px 16px;border-radius:20px;border:1px solid currentColor;font-size:0.72rem;font-weight:700;letter-spacing:2px;margin-bottom:20px;opacity:0.8;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.heroEyebrow }}
      </div>
      <h1 style="font-size:2.6rem;font-weight:900;line-height:1.25;margin-bottom:18px;letter-spacing:-0.5px;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.title }}
      </h1>
      <p style="font-size:0.95rem;line-height:1.7;opacity:0.8;margin-bottom:24px;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.heroSub }}
      </p>
      <div style="font-size:0.82rem;font-weight:600;opacity:0.65;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.startDate }} ~ {{ cfPlan.endDate }}
      </div>
    </div>
  </div>
  </template>
  <!-- ===== \u25A1. \u2460 \uD788\uC5B4\uB85C \uBC30\uB108 ================================================ -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div class="page-wrap" style="max-width:960px;">
    <!-- ===== \u25A0.\u25A0. \u2461 \uB4A4\uB85C ================================================== -->
    <button @click="handleBtnAction('page-goPlanList')"
      style="display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.82rem;margin-bottom:32px;padding:0;"
      @mouseenter="$event.currentTarget.style.color='var(--blue)'"
      @mouseleave="$event.currentTarget.style.color='var(--text-muted)'">
      \u2190 \uAE30\uD68D\uC804 \uBAA9\uB85D\uC73C\uB85C
    </button>
    <!-- ===== \u25A1.\u25A1. \u2461 \uB4A4\uB85C ================================================== -->
    <!-- ===== \u25A0.\u25A0. \u2462 \uAE30\uD68D\uC804 \uC0C1\uD488 (\uD0C0\uC784\uB51C \uBC43\uC9C0 \uD3EC\uD568) =========================== -->
    <div v-if="cfPlan.planItems?.length" style="margin-bottom:36px;">
    <h2 style="font-size:1.1rem;font-weight:800;color:var(--text-primary);margin-bottom:18px;">
      \uAE30\uD68D\uC804 \uC0C1\uD488
    </h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
      <div v-for="it in cfPlan.planItems" :key="it.id"
          style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:16px;position:relative;">
        <span v-if="it.isDeal" style="position:absolute;top:10px;right:10px;background:#ef4444;color:#fff;font-size:0.68rem;font-weight:800;padding:3px 8px;border-radius:3px;">
          \u26A1 \uD0C0\uC784\uB51C
        </span>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
          \uC0C1\uD488ID
        </div>
        <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);word-break:break-all;margin-bottom:8px;">
          {{ it.prodId }}
        </div>
        <div v-if="it.isDeal" style="font-size:0.8rem;color:#ef4444;font-weight:700;">
          \uD2B9\uAC00 {{ (it.dealPrice || 0).toLocaleString() }}\uC6D0 \xB7 \uC794\uC5EC {{ it.remainQty }}/{{ it.totalQty }}
        </div>
        <div v-else-if="it.memo" style="font-size:0.78rem;color:var(--text-muted);">
          {{ it.memo }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \u2462 \uAE30\uD68D\uC804 \uC0C1\uD488 (\uD0C0\uC784\uB51C \uBC43\uC9C0 \uD3EC\uD568) =========================== -->
  <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D\uC73C\uB85C (\uD558\uB2E8) ============================================= -->
  <div style="text-align:center;padding-bottom:8px;">
    <button @click="handleBtnAction('page-goPlanList')"
        style="padding:11px 32px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-secondary);font-size:0.85rem;cursor:pointer;font-weight:600;"
        @mouseenter="$event.currentTarget.style.borderColor='var(--blue)';$event.currentTarget.style.color='var(--blue)'"
        @mouseleave="$event.currentTarget.style.borderColor='var(--border)';$event.currentTarget.style.color='var(--text-secondary)'">
      \u2190 \uAE30\uD68D\uC804 \uBAA9\uB85D\uC73C\uB85C
    </button>
  </div>
</div>
</fo-page>
<!-- ===== \u25A1.\u25A1. \uBAA9\uB85D\uC73C\uB85C (\uD558\uB2E8) ============================================= -->
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
