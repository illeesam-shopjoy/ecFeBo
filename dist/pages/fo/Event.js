window.EventPage={name:"EventPage",props:{navigate:{type:Function,required:!0}},setup(v){const{ref:f,reactive:l,computed:m,watch:u,onMounted:y}=Vue,n=l({loading:!1,error:null,activeTab:"ongoing",sortBy:"latest",broadened:!1}),r=f(""),i=l([]),a=l({pageNo:1,pageSize:20,pageTotalCount:0,pageTotalPage:1,pageType:"PAGE",pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),h=(e,t={})=>{if(e==="page-goHome")return v.navigate("home");if(e==="tab-change"){n.activeTab=t;return}else if(e==="sort-change"){n.sortBy=t;return}else if(e==="search-submit"){a.pageNo=1,s();return}else if(e==="search-reset"){r.value="",a.pageNo=1,s();return}else console.warn("[handleBtnAction] unknown cmd:",e)},w=(e,t={},o={})=>{if(e==="events-rowView")return o.ctrlKey||o.metaKey||o.button===1?window.foApp.openNewWindow("eventView",t):v.navigate("eventView",{eventId:t});console.warn("[handleSelectAction] unknown cmd:",e)},S=foConsts.EVENT_STATUS_KOR,b=foConsts.EVENT_BANNER_BGS,T=e=>{const t=String(e.eventStatusCd||"").toUpperCase(),o=t==="ENDED"?"ended":"ongoing",c=e.eventTitle||e.eventNm||"";return{id:e.eventId,title:c,status:o,startDate:coUtil.cofYmd(e.startDate),endDate:coUtil.cofYmd(e.endDate),bannerBg:b[coUtil.cofHashIdx(e.eventId,b.length)],bannerText:"#ffffff",bannerLine1:"",bannerLine2:c,tag:S[t]||e.eventTypeCdNm||"\uC774\uBCA4\uD2B8",tagColor:o==="ended"?"#9ca3af":"#ef4444"}},d=async e=>{var x;const t=r.value.trim(),o={pageNo:a.pageNo,pageSize:a.pageSize,...e?{eventStatusCd:e}:{},...n.sortBy==="deadline"?{sort:"endDate asc"}:{},...t?{searchValue:t,searchType:"eventId,eventTitle"}:{}},g=((x=(await foApiSvc.pmEvent.getPage(o,"\uC774\uBCA4\uD2B8","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:x.data)||{};return{list:g.pageList||[],total:g.pageTotalCount||0,totalPage:g.pageTotalPage||1}},s=async(e="DEFAULT")=>{try{if(n.broadened=!1,r.value.trim()){const o=await d(n.activeTab==="ended"?"ENDED":null);p(o);return}if(n.activeTab==="ended"){const o=await d("ENDED");p(o);return}let t=await d("ACTIVE");t.total===0&&(t=await d(null),n.broadened=t.total>0),p(t)}catch(t){console.error("[handleSearchList]",t),i.splice(0,i.length),a.pageTotalCount=0,a.pageTotalPage=1}},p=e=>{a.pageTotalCount=e.total,a.pageTotalPage=e.totalPage,i.splice(0,i.length,...e.list.map(T)),coUtil.cofBuildPagerNums(a)};u(()=>n.activeTab,()=>{a.pageNo=1,s("DEFAULT")}),u(()=>n.sortBy,()=>{a.pageNo=1,s("DEFAULT")});const B=m(()=>n.activeTab!=="ongoing"?i.filter(e=>e.status==="ongoing").length:n.broadened?0:a.pageTotalCount);return y(async()=>{try{const t=(window.location.search||"").match(/[?&]eventId=([^&]+)/);t&&(r.value=decodeURIComponent(t[1]))}catch{}s()}),{uiState:n,searchValue:r,handleBtnAction:h,handleSelectAction:w,events:i,cfOngoingCount:B}},template:`
<fo-page title="\uC774\uBCA4\uD2B8" eyebrow="Promotion"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC774\uBCA4\uD2B8' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uAC80\uC0C9\uCC3D ======================================================= -->
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
    <div style="position:relative;flex:1;max-width:400px;">
      <input
        v-model="searchValue"
        type="text"
        placeholder="ID \uB610\uB294 \uC774\uBCA4\uD2B8\uBA85 \uAC80\uC0C9"
        @keyup.enter="handleBtnAction('search-submit')"
        style="width:100%;padding:9px 40px 9px 14px;border:1px solid var(--border);border-radius:6px;font-size:0.88rem;background:var(--bg-card);color:var(--text-primary);box-sizing:border-box;outline:none;" />
      <button v-if="searchValue"
        @click="handleBtnAction('search-reset')"
        style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;line-height:1;padding:2px 4px;">\u2715</button>
    </div>
    <button @click="handleBtnAction('search-submit')"
      style="padding:9px 20px;background:var(--text-primary);color:#fff;border:none;border-radius:6px;font-size:0.88rem;font-weight:600;cursor:pointer;white-space:nowrap;">
      \uAC80\uC0C9
    </button>
  </div>
  <!-- ===== \u25A1. \uAC80\uC0C9\uCC3D ======================================================= -->
  <!-- ===== \u25A0. \uD0ED + \uC815\uB82C ================================================== -->
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;border-bottom:1px solid var(--border);margin-bottom:28px;">
    <!-- ===== \u25A0.\u25A0. \uD0ED ===================================================== -->
    <div style="display:flex;gap:0;">
      <button @click="handleBtnAction('tab-change', 'ongoing')"
        :style="{
        padding:'12px 24px', background:'none', border:'none', cursor:'pointer',
        fontSize:'0.88rem', fontWeight: uiState.activeTab==='ongoing' ? '700' : '500',
        color: uiState.activeTab==='ongoing' ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: uiState.activeTab==='ongoing' ? '2px solid var(--text-primary)' : '2px solid transparent',
        marginBottom: '-1px',
        }">
        \uC9C4\uD589\uC911 ({{ cfOngoingCount }})
      </button>
      <button @click="handleBtnAction('tab-change', 'ended')"
        :style="{
        padding:'12px 24px', background:'none', border:'none', cursor:'pointer',
        fontSize:'0.88rem', fontWeight: uiState.activeTab==='ended' ? '700' : '500',
        color: uiState.activeTab==='ended' ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: uiState.activeTab==='ended' ? '2px solid var(--text-primary)' : '2px solid transparent',
        marginBottom: '-1px',
        }">
        \uB2F9\uCCA8\uC790 \uBC1C\uD45C
      </button>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0ED ===================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC815\uB82C ==================================================== -->
    <div style="display:flex;gap:0;padding-bottom:2px;">
      <button @click="handleBtnAction('sort-change', 'latest')"
        :style="{
        padding:'6px 14px', background:'none', border:'none', cursor:'pointer',
        fontSize:'0.8rem',
        color: uiState.sortBy==='latest' ? 'var(--text-primary)' : 'var(--text-muted)',
        fontWeight: uiState.sortBy==='latest' ? '700' : '400',
        borderRight:'1px solid var(--border)',
        }">
        \uCD5C\uADFC\uB4F1\uB85D\uC21C
      </button>
      <button @click="handleBtnAction('sort-change', 'deadline')"
        :style="{
        padding:'6px 14px', background:'none', border:'none', cursor:'pointer',
        fontSize:'0.8rem',
        color: uiState.sortBy==='deadline' ? 'var(--text-primary)' : 'var(--text-muted)',
        fontWeight: uiState.sortBy==='deadline' ? '700' : '400',
        }">
        \uB9C8\uAC10\uC784\uBC15\uC21C
      </button>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC815\uB82C ==================================================== -->
  <!-- ===== \u25A1. \uD0ED + \uC815\uB82C ================================================== -->
  <!-- ===== \u25A0. \uD3F4\uBC31 \uC548\uB0B4 (\uC9C4\uD589\uC911 0\uAC74 \u2192 \uC804\uCCB4 \uC774\uBCA4\uD2B8\uB85C \uD655\uC7A5) ========================= -->
  <div v-if="uiState.broadened" style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-bottom:18px;font-size:0.82rem;color:var(--text-secondary);display:flex;align-items:center;gap:8px;">
    <span>\u2139\uFE0F</span>
    <span>\uC9C4\uD589 \uC911\uC778 \uC774\uBCA4\uD2B8\uAC00 \uC5C6\uC5B4 \uC804\uCCB4 \uC774\uBCA4\uD2B8\uB97C \uBCF4\uC5EC\uB4DC\uB9BD\uB2C8\uB2E4.</span>
  </div>
  <!-- ===== \u25A0. \uC774\uBCA4\uD2B8 \uADF8\uB9AC\uB4DC ================================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;">
    <div v-for="ev in events" :key="ev.id"
      style="background:var(--bg-card);border:1px solid var(--border);border-radius:4px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s;"
      title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click="handleSelectAction('events-rowView', ev.id, $event)"
      @auxclick="$event.button===1 ? handleSelectAction('events-rowView', ev.id, $event) : null"
      @mouseenter="$event.currentTarget.style.transform='translateY(-3px)';$event.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)'"
      @mouseleave="$event.currentTarget.style.transform='';$event.currentTarget.style.boxShadow=''">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC774\uBCA4\uD2B8 \uBC30\uB108 \uC378\uB124\uC77C ========================================== -->
      <div :style="{ height:'170px', background: ev.bannerBg, position:'relative', overflow:'hidden',
        display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-end', padding:'16px' }">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uD14D\uC2A4\uD2B8 ============================================ -->
        <div :style="{ color: ev.bannerText, position:'relative', zIndex:1 }">
          <div style="font-size:0.72rem;opacity:0.7;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">
            {{ ev.startDate }} ~ {{ ev.endDate }}
          </div>
          <div :style="{ fontSize:'1.05rem', fontWeight:'900', lineHeight:'1.25', letterSpacing:'-0.5px' }">
            {{ ev.bannerLine1 }}
          </div>
          <div :style="{ fontSize:'1.45rem', fontWeight:'900', lineHeight:'1.2', letterSpacing:'-0.5px' }">
            {{ ev.bannerLine2 }}
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC885\uB8CC \uC624\uBC84\uB808\uC774 =========================================== -->
        <div v-if="ev.status==='ended'"
          style="position:absolute;inset:0;background:rgba(0,0,0,0.52);display:flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-size:0.85rem;font-weight:700;letter-spacing:3px;border:1px solid rgba(255,255,255,0.6);padding:5px 14px;">
            CLOSED
          </span>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uB4DC \uC815\uBCF4 =============================================== -->
      <div style="padding:14px 14px 16px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;">
          <span :style="{ padding:'2px 7px', borderRadius:'2px', fontSize:'0.68rem', fontWeight:'700', color:'#fff', background: ev.tagColor }">
            {{ ev.tag }}
          </span>
        </div>
        <div style="font-size:0.87rem;font-weight:600;color:var(--text-primary);line-height:1.45;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
          {{ ev.title }}
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);">
          {{ ev.startDate }} ~ {{ ev.endDate }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC774\uBCA4\uD2B8 \uADF8\uB9AC\uB4DC ================================================= -->
  <!-- ===== \u25A0. \uBE48 \uC0C1\uD0DC ==================================================== -->
  <div v-if="events.length === 0" style="text-align:center;padding:clamp(32px,6vw,60px) 0;color:var(--text-muted);">
    <div style="font-size:2rem;margin-bottom:12px;">
      \u{1F4ED}
    </div>
    <div style="font-size:0.95rem;">
      {{ searchValue ? '\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : (uiState.activeTab === 'ongoing' ? '\uC9C4\uD589 \uC911\uC778 \uC774\uBCA4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uC885\uB8CC\uB41C \uC774\uBCA4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.') }}
    </div>
  </div>
  <!-- ===== \u25A1. \uBE48 \uC0C1\uD0DC ==================================================== -->
</fo-page>
`};
