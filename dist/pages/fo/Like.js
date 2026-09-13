window.Like={name:"Like",props:{navigate:{type:Function,required:!0}},setup(i){const{reactive:n,computed:l,onMounted:s}=Vue,r=window.foApp.prods,c=n({loading:!1,error:null}),d=(e,t={})=>{if(e==="page-goHome")return i.navigate("home");if(e==="page-goProdList")return i.navigate("prodList");console.warn("[handleBtnAction] unknown cmd:",e)},a=(e,t={},o={})=>{if(e==="likes-rowSelect")return o.ctrlKey||o.metaKey||o.button===1?window.foApp.openNewWindow("prodView",t.prodId):window.foApp.selectProd(t);if(e==="likes-rowToggleLike")return window.foApp.toggleLike(t);console.warn("[handleSelectAction] unknown cmd:",e)},p=l(()=>(r||[]).filter(e=>window.foApp.isLiked(e.prodId)));return{handleBtnAction:d,handleSelectAction:a,cfLikedProds:p}},template:`
<fo-page title="\uC704\uC2DC\uB9AC\uC2A4\uD2B8" eyebrow="My"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC704\uC2DC\uB9AC\uC2A4\uD2B8' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uC0C1\uD488 \uBAA9\uB85D =================================================== -->
  <div v-if="cfLikedProds.length" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:20px;">
    <div v-for="p in cfLikedProds" :key="p.prodId"
      style="background:var(--bg-card);border:1px solid var(--border);border-radius:4px;overflow:hidden;cursor:pointer;transition:box-shadow .2s;"
      @mouseenter="$event.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'"
      @mouseleave="$event.currentTarget.style.boxShadow=''">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC774\uBBF8\uC9C0 ================================================= -->
      <div style="position:relative;aspect-ratio:1;background:#fff;padding:clamp(8px,2vw,16px);overflow:hidden;" @click="handleSelectAction('likes-rowSelect', p, $event)" @auxclick="$event.button===1 ? handleSelectAction('likes-rowSelect', p, $event) : null">
        <img :src="p.image || window.NO_IMAGE" :alt="p.prodNm" style="width:100%;height:100%;object-fit:contain;" />
        <span v-if="p.badge" style="position:absolute;top:10px;left:10px;font-size:0.68rem;font-weight:600;padding:3px 8px;border-radius:2px;color:#fff;"
          :style="{ background: p.badge==='NEW' ? '#1a1a1a' : '#8b7355' }">
          {{ p.badge }}
        </span>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88B\uC544\uC694 \uD574\uC81C ============================================ -->
        <button @click.stop="handleSelectAction('likes-rowToggleLike', p.prodId)"
          style="position:absolute;top:10px;right:10px;width:32px;height:32px;border-radius:50%;border:1px solid #ddd;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
            </path>
          </svg>
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC815\uBCF4 ================================================== -->
      <div style="padding:14px 16px;" @click="handleSelectAction('likes-rowSelect', p, $event)" @auxclick="$event.button===1 ? handleSelectAction('likes-rowSelect', p, $event) : null">
        <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);margin-bottom:4px;">
          {{ p.prodNm }}
        </div>
        <div style="font-size:0.85rem;color:var(--text-muted);">
          {{ p.price }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC0C1\uD488 \uBAA9\uB85D =================================================== -->
  <!-- ===== \u25A0. \uBE48 \uC0C1\uD0DC ==================================================== -->
  <div v-else style="text-align:center;padding:clamp(40px,8vw,80px) 0;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin-bottom:16px;">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
      </path>
    </svg>
    <div style="font-size:0.95rem;color:var(--text-muted);margin-bottom:20px;">
      \uC88B\uC544\uC694\uD55C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4
    </div>
    <button class="btn-outline" @click="handleBtnAction('page-goProdList')" style="padding:10px 24px;">
      \uC0C1\uD488 \uB458\uB7EC\uBCF4\uAE30
    </button>
  </div>
  <!-- ===== \u25A1. \uBE48 \uC0C1\uD0DC ==================================================== -->
</fo-page>
`};
