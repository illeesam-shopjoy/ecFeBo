window.EventView={name:"EventView",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(o){const{reactive:a,computed:d,onMounted:s}=Vue,v=a({loading:!1,error:null}),n=a([]),p=(e,t={})=>{if(e==="page-goEventList")return o.navigate("event");if(e==="tab-change"){v.activeTab=t;return}else console.warn("[handleBtnAction] unknown cmd:",e)},c=(e,t={})=>{if(e==="relatedEvents-rowView")return o.navigate("eventView",{eventId:t});console.warn("[handleSelectAction] unknown cmd:",e)},g=async(e="DEFAULT")=>{var t;try{const r=((t=(await foApiSvc.pmEvent.getById(o.dtlId,"\uC774\uBCA4\uD2B8\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:t.data)||null;if(n.splice(0,n.length,...r?[r]:[]),r){const i=r.eventTitle||r.eventNm||"";foUtil.fofSetPageMeta({title:i?i+" | ShopJoy":void 0,description:r.eventDesc||(i?i+" - ShopJoy \uC774\uBCA4\uD2B8/\uAE30\uD68D\uC804":void 0)})}}catch(l){console.error("[handleSearchData]",l),n.splice(0,n.length)}},b=d(()=>{const e=n.length>0?n[0]:null;return e?{id:e.eventId,title:e.eventTitle||e.eventNm||"",heroEyebrow:e.eventTypeCd||"EVENT",heroSub:e.eventDesc||"",heroBg:"linear-gradient(135deg,#5b6cff 0%,#8a4fff 100%)",heroTextColor:"#ffffff",startDate:(e.startDate||"").toString().slice(0,10),endDate:(e.endDate||"").toString().slice(0,10),body:e.eventContent||"",benefits:(e.benefits||[]).map(t=>({label:t.benefitNm||t.benefitTypeCd||"\uD61C\uD0DD",value:t.benefitValue||"",desc:t.conditionDesc||"",btn:"\uC790\uC138\uD788"})),eventItems:(e.eventItems||[]).map(t=>({id:t.eventItemId,targetType:t.targetTypeCd||"",targetId:t.targetId||""})),notice:(e.eventDesc||"").split(`
`).filter(Boolean)}:null});return s(async()=>{if(!o.dtlId){o.navigate("event");return}await g()}),{handleBtnAction:p,handleSelectAction:c,cfEvent:b}},template:`
<fo-page v-if="cfEvent" bare style="background:var(--bg-base);"
  @nav="p => navigate(p)">
  <!-- ===== \u25A0. \u2460 \uD788\uC5B4\uB85C \uBC30\uB108 (\uB3D9\uC801 \uB370\uC774\uD130 \u2192 #banner \uC2AC\uB86F \uC720\uC9C0) ================ -->
  <template #banner>
  <div :style="{
    background: cfEvent.heroBg,
    minHeight: '400px',
    display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center',
    textAlign:'center', padding:'clamp(40px,8vw,72px) clamp(16px,4vw,24px) clamp(32px,6vw,60px)',
    position:'relative', overflow:'hidden',
    }">
    <!-- ===== \u25A0.\u25A0. \uC7A5\uC2DD \uC6D0 ================================================== -->
    <div style="position:absolute;top:-60px;right:-60px;width:240px;height:240px;border-radius:50%;background:rgba(255,255,255,0.18);">
    </div>
    <div style="position:absolute;bottom:-40px;left:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,0.12);">
    </div>
    <div style="position:relative;z-index:1;max-width:700px;">
      <div style="display:inline-block;padding:4px 16px;border-radius:20px;border:1px solid currentColor;font-size:0.72rem;font-weight:700;letter-spacing:2px;margin-bottom:20px;opacity:0.8;"
        :style="{ color: cfEvent.heroTextColor }">
        {{ cfEvent.heroEyebrow }}
      </div>
      <h1 style="font-size:2.6rem;font-weight:900;line-height:1.25;margin-bottom:18px;letter-spacing:-0.5px;"
        :style="{ color: cfEvent.heroTextColor }">
        {{ cfEvent.title }}
      </h1>
      <p style="font-size:0.95rem;line-height:1.7;opacity:0.8;margin-bottom:24px;"
        :style="{ color: cfEvent.heroTextColor }">
        {{ cfEvent.heroSub }}
      </p>
      <div style="font-size:0.82rem;font-weight:600;opacity:0.65;"
        :style="{ color: cfEvent.heroTextColor }">
        {{ cfEvent.startDate }} ~ {{ cfEvent.endDate }}
      </div>
    </div>
  </div>
  </template>
  <!-- ===== \u25A1.\u25A1. \uC7A5\uC2DD \uC6D0 ================================================== -->
  <!-- ===== \u25A1. \u2460 \uD788\uC5B4\uB85C \uBC30\uB108 ================================================ -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div class="page-wrap" style="max-width:960px;">
    <!-- ===== \u25A0.\u25A0. \u2461 \uB4A4\uB85C ================================================== -->
    <button @click="handleBtnAction('page-goEventList')"
      style="display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.82rem;margin-bottom:32px;padding:0;"
      @mouseenter="$event.currentTarget.style.color='var(--blue)'"
      @mouseleave="$event.currentTarget.style.color='var(--text-muted)'">
      \u2190 \uC774\uBCA4\uD2B8 \uBAA9\uB85D\uC73C\uB85C
    </button>
    <!-- ===== \u25A1.\u25A1. \u2461 \uB4A4\uB85C ================================================== -->
    <!-- ===== \u25A0.\u25A0. \u2462 \uD61C\uD0DD \uCE74\uB4DC =============================================== -->
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:clamp(20px,4vw,36px) clamp(16px,3vw,32px);margin-bottom:36px;text-align:center;">
      <div style="font-size:0.72rem;font-weight:700;color:var(--blue);letter-spacing:2px;margin-bottom:10px;">
        SHOPJOY BENEFIT
      </div>
      <h2 style="font-size:1.4rem;font-weight:900;color:var(--text-primary);margin-bottom:6px;">
        \uC774\uBCA4\uD2B8 \uD61C\uD0DD
      </h2>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:28px;">
        {{ cfEvent.heroSub }}
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
        <div v-for="(b, bi) in cfEvent.benefits" :key="bi"
          style="border:1px solid var(--border);border-radius:12px;padding:24px 16px;">
          <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:10px;">
            {{ b.label }}
          </div>
          <div style="font-size:1.45rem;font-weight:900;color:var(--text-primary);margin-bottom:8px;">
            {{ b.value }}
          </div>
          <div v-if="b.desc" style="font-size:0.74rem;color:var(--text-muted);margin-bottom:16px;line-height:1.5;">
            {{ b.desc }}
          </div>
          <button class="btn-blue" style="padding:9px 28px;font-size:0.82rem;border-radius:6px;border:none;cursor:pointer;">
            {{ b.btn }}
          </button>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \u2462 \uD61C\uD0DD \uCE74\uB4DC =============================================== -->
    <!-- ===== \u25A0.\u25A0. \u2463 \uC774\uBCA4\uD2B8 \uB300\uC0C1 (eventItems) ================================= -->
    <div v-if="cfEvent.eventItems?.length" style="margin-bottom:36px;">
    <h2 style="font-size:1.1rem;font-weight:800;color:var(--text-primary);margin-bottom:18px;">
      \uC774\uBCA4\uD2B8 \uB300\uC0C1
    </h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
      <div v-for="it in cfEvent.eventItems" :key="it.id"
          style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:16px;">
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
          {{ it.targetType }}
        </div>
        <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);word-break:break-all;">
          {{ it.targetId }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \u2463 \uC774\uBCA4\uD2B8 \uB300\uC0C1 (eventItems) ================================= -->
  <!-- ===== \u25A1.\u25A1. \u2464 \uB354 \uB9CE\uC740 \uD504\uB85C\uBAA8\uC158 (\uB2E8\uAC74 \uC0C1\uC138\uB9CC \uC81C\uACF5, \uBBF8\uC0AC\uC6A9) =================== -->
  <!-- ===== \u25A0.\u25A0. \u2465 \uC720\uC758\uC0AC\uD56D ================================================ -->
  <div style="background:var(--bg-base);border:1px solid var(--border);border-radius:12px;padding:clamp(16px,3vw,24px) clamp(16px,3vw,28px);margin-bottom:32px;">
    <h3 style="font-size:0.85rem;font-weight:700;color:var(--text-secondary);margin-bottom:14px;">
      \uC720\uC758\uC0AC\uD56D
    </h3>
    <ul style="list-style:none;padding:0;margin:0;">
      <li v-for="(line, li) in cfEvent.notice" :key="li"
          style="font-size:0.8rem;color:var(--text-muted);line-height:1.9;padding-left:14px;position:relative;">
        <span style="position:absolute;left:0;">
          \xB7
        </span>
        {{ line }}
      </li>
    </ul>
  </div>
  <!-- ===== \u25A1.\u25A1. \u2465 \uC720\uC758\uC0AC\uD56D ================================================ -->
  <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D\uC73C\uB85C (\uD558\uB2E8) ============================================= -->
  <div style="text-align:center;padding-bottom:8px;">
    <button @click="handleBtnAction('page-goEventList')"
        style="padding:11px 32px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-secondary);font-size:0.85rem;cursor:pointer;font-weight:600;"
        @mouseenter="$event.currentTarget.style.borderColor='var(--blue)';$event.currentTarget.style.color='var(--blue)'"
        @mouseleave="$event.currentTarget.style.borderColor='var(--border)';$event.currentTarget.style.color='var(--text-secondary)'">
      \u2190 \uC774\uBCA4\uD2B8 \uBAA9\uB85D\uC73C\uB85C
    </button>
  </div>
</div>
</fo-page>
<!-- ===== \u25A1.\u25A1. \uBAA9\uB85D\uC73C\uB85C (\uD558\uB2E8) ============================================= -->
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
