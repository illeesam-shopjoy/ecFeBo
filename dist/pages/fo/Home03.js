window.Home03={name:"Home",props:{navigate:{type:Function,required:!0}},emits:[],setup(r){const{reactive:f,computed:a,onMounted:x,onBeforeUnmount:m}=Vue,l=window.foApp.prods,s=e=>window.foApp.selectProd(e),p=e=>window.foApp.toggleLike(e),u=e=>{var t,o,g;return(g=(o=(t=window.foApp).isLiked)==null?void 0:o.call(t,e))!=null?g:!1},v=window.foApp.addToCart,d=coUtil.cofShakeCtl(),i=f({loading:!1,error:null,quickViewProduct:null,bannerIdx:0,cartModalMode:!1}),c=[{img:"assets/cdn/prod/img/slider/slider-1.jpg",title:"\uB098\uB9CC\uC758 \uC2A4\uD0C0\uC77C\uC744",sub:"\uC644\uC131\uD558\uC138\uC694",desc:"\uD2B8\uB80C\uB514\uD55C \uC758\uB958\uB97C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C. \uC0C9\uC0C1\uACFC \uC0AC\uC774\uC988\uB97C \uC9C1\uC811 \uC120\uD0DD\uD574 \uB098\uB9CC\uC758 \uC2A4\uD0C0\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."},{img:"assets/cdn/prod/img/slider/slider-2.jpg",title:"2026 S/S",sub:"\uC2E0\uC0C1\uD488 \uCEEC\uB809\uC158",desc:"\uC62C \uBD04\xB7\uC5EC\uB984 \uC2DC\uC98C\uC744 \uBE5B\uB0BC \uC0C8\uB85C\uC6B4 \uCEEC\uB809\uC158\uC774 \uB3C4\uCC29\uD588\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uB9CC\uB098\uBCF4\uC138\uC694."},{img:"assets/cdn/prod/img/slider/slider-3.jpg",title:"\uD2B9\uBCC4\uD55C \uD61C\uD0DD",sub:"\uC2DC\uC98C \uC138\uC77C \uC9C4\uD589\uC911",desc:"\uC778\uAE30 \uC0C1\uD488 \uCD5C\uB300 50% \uD560\uC778! \uD55C\uC815 \uC218\uB7C9\uC73C\uB85C \uC900\uBE44\uB41C \uD2B9\uBCC4 \uD61C\uD0DD\uC744 \uB193\uCE58\uC9C0 \uB9C8\uC138\uC694."}],n=coUtil.cofBannerTimer(e=>{i.bannerIdx=e},()=>i.bannerIdx,c.length,2e4),h=window.SITE_CONFIG||{},b=(e,t={})=>{if(e==="page-goHome")return r.navigate("home");if(e==="page-goProdList")return r.navigate("prodList");if(e==="page-goBlog")return r.navigate("blog");if(e==="hero-set")return k(t);if(e==="quickViewModal-openCart"){i.quickViewProduct=t,i.cartModalMode=!0;return}else if(e==="quickViewModal-openView"){i.quickViewProduct=t,i.cartModalMode=!1;return}else if(e==="quickViewModal-close"){i.quickViewProduct=null,i.cartModalMode=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)},y=(e,t={},o={})=>{if(e==="categories-rowSelect")return r.navigate("prodList");if(e==="prods-rowSelect")return o.ctrlKey||o.metaKey||o.button===1?window.foApp.openNewWindow("prodView",t.prodId):s(t);if(e==="prods-rowLike")return d.fire(t),p(t);console.warn("[handleSelectAction] unknown cmd:",e)},w=(e,t,o)=>{if(e==="quick-view"){if(o==null){i.quickViewProduct=null,i.cartModalMode=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},k=e=>n.set(e);x(async()=>{if(!document.getElementById("home-grid-styles")){const e=document.createElement("style");e.id="home-grid-styles",e.textContent=`
          .home-cat-grid  { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px; }
          .home-prod-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:20px; }
          .home-sale-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:20px; }
          .home-blog-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }
        `,document.head.appendChild(e)}n.start()}),m(()=>n.stop());const S=a(()=>(l||[]).filter(e=>e.originalPrice&&e.priceNum&&e.originalPrice>e.priceNum).slice(0,4)),z=a(()=>(l||[]).slice(0,8));return{uiState:i,banners:c,siteConfig:h,handleBtnAction:b,handleSelectAction:y,fnCallbackModal:w,cfAllHomeProds:z,cfSaleProds:S,isLiked:u,likeShake:d,selectProd:s,toggleLike:p,addToCart:v}},template:`
<fo-page bare>
  <!-- ===== \u25A0. \u2550\u2550 Site 03 Edition Ribbon \u2550\u2550 ============================ -->
  <div style="background:linear-gradient(135deg,#4a148c 0%,#7b1fa2 50%,#9c27b0 100%);color:#fff;padding:14px 24px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;box-shadow:0 2px 8px rgba(80,30,130,0.15);">
    <span style="font-size:10px;letter-spacing:3px;padding:3px 10px;border:1px solid rgba(255,255,255,0.5);border-radius:2px;">
      \u{1F451} LUXE EDITION
    </span>
    <span style="font-size:13px;font-weight:600;letter-spacing:0.5px;">
      \u2728 \uB85C\uC584 \uD37C\uD50C \uD504\uB9AC\uBBF8\uC5C4 \uCEEC\uB809\uC158 \u2014 \uD55C\uC815 \uC218\uB7C9
    </span>
    <span style="margin-left:auto;font-size:11px;opacity:0.9;">
      FO_SITE_NO=03
    </span>
  </div>
  <!-- ===== \u25A1. \u2550\u2550 Site 03 Edition Ribbon \u2550\u2550 ============================ -->
  <!-- ===== \u25A0. \u2550\u2550 Hero Banner Slider \u2550\u2550 ================================ -->
  <section style="position:relative;overflow:hidden;background:#faf7fd;min-height:320px;display:flex;align-items:center;flex-wrap:wrap;">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uD14D\uC2A4\uD2B8 (\uC2AC\uB77C\uC774\uB4DC\uBCC4) ======================================== -->
    <div style="position:relative;z-index:2;flex:1 1 260px;padding:clamp(28px,6vw,80px) clamp(20px,5vw,60px) clamp(28px,6vw,80px) clamp(20px,5vw,48px);min-width:0;">
      <h1 style="font-size:clamp(1.4rem,3.5vw,2.6rem);font-weight:300;line-height:1.3;color:#1a1a1a;margin-bottom:16px;letter-spacing:-0.5px;">
        {{ banners[uiState.bannerIdx].title }}
        <br>
        <span style="font-weight:700;">
          {{ banners[uiState.bannerIdx].sub }}
        </span>
      </h1>
      <p style="font-size:0.85rem;color:#888;line-height:1.8;margin-bottom:28px;max-width:360px;">
        {{ banners[uiState.bannerIdx].desc }}
      </p>
      <button @click="handleBtnAction('page-goProdList')"
        style="padding:12px 28px;font-size:0.82rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;border:1.5px solid #1a1a1a;background:transparent;color:#1a1a1a;cursor:pointer;transition:all .25s;"
        @mouseenter="$event.target.style.background='#1a1a1a';$event.target.style.color='#fff'"
        @mouseleave="$event.target.style.background='transparent';$event.target.style.color='#1a1a1a'">
        \uC1FC\uD551 \uC2DC\uC791\uD558\uAE30
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC778\uB514\uCF00\uC774\uD130 (\uD074\uB9AD \uAC00\uB2A5) ======================================= -->
      <div style="display:flex;gap:8px;margin-top:28px;">
        <span v-for="(b, i) in banners" :key="i" @click="handleBtnAction('hero-set', i)"
          :style="{
          width: '24px', height: '3px', borderRadius: '2px', cursor: 'pointer', transition: 'background .3s',
          background: uiState.bannerIdx === i ? '#1a1a1a' : '#ccc',
          }">
        </span>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC88C: \uD14D\uC2A4\uD2B8 (\uC2AC\uB77C\uC774\uB4DC\uBCC4) ======================================== -->
    <!-- ===== \u25A0.\u25A0. \uC6B0: \uC774\uBBF8\uC9C0 (\uD398\uC774\uB4DC \uC804\uD658) ======================================= -->
    <div style="flex:1 1 160px;position:relative;min-height:280px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <img v-for="(b, i) in banners" :key="i" :src="b.img" :alt="b.title"
        :style="{
        position: i === 0 ? 'relative' : 'absolute',
        maxHeight: '420px', maxWidth: '100%', objectFit: 'contain', zIndex: 1,
        opacity: uiState.bannerIdx === i ? '1' : '0',
        transition: 'opacity 0.8s ease',
        }" />
    </div>
  </section>
  <!-- ===== \u25A1.\u25A1. \uC6B0: \uC774\uBBF8\uC9C0 (\uD398\uC774\uB4DC \uC804\uD658) ======================================= -->
  <!-- ===== \u25A1. \u2550\u2550 Hero Banner Slider \u2550\u2550 ================================ -->
  <!-- ===== \u25A0. \u2550\u2550 Category Cards (Outstock \uC2A4\uD0C0\uC77C) \u2550\u2550 ===================== -->
  <div style="padding:0 clamp(12px,3vw,32px);margin:-40px auto 0;max-width:820px;position:relative;z-index:3;">
    <div class="home-cat-grid">
      <div v-for="(cat, ci) in (siteConfig.categorys || []).slice(0,3)" :key="cat.categoryId"
        @click="handleSelectAction('categories-rowSelect', cat)"
        style="background:#fff;border-radius:14px;padding:clamp(14px,3vw,24px);cursor:pointer;box-shadow:0 4px 24px rgba(0,0,0,0.09);display:flex;align-items:center;gap:clamp(10px,2vw,20px);transition:transform .2s,box-shadow .2s;"
        @mouseenter="$event.currentTarget.style.transform='translateY(-3px)';$event.currentTarget.style.boxShadow='0 8px 30px rgba(0,0,0,0.14)'"
        @mouseleave="$event.currentTarget.style.transform='';$event.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.09)'">
        <div style="width:clamp(56px,8vw,88px);height:clamp(56px,8vw,88px);border-radius:50%;overflow:hidden;flex-shrink:0;background:var(--bg-base);">
          <img :src="'assets/cdn/prod/img/shop/prod/sm/pro-sm-' + (ci*3+1) + '.jpg'" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div>
          <div style="font-size:clamp(0.88rem,2vw,1.05rem);font-weight:700;color:#1a1a1a;margin-bottom:4px;">
            {{ cat.categoryNm }}
          </div>
          <div style="font-size:clamp(0.7rem,1.5vw,0.8rem);color:#999;">
            \uBC14\uB85C\uAC00\uAE30 \u2192
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \u2550\u2550 Category Cards (Outstock \uC2A4\uD0C0\uC77C) \u2550\u2550 ===================== -->
  <!-- ===== \u25A0. \u2550\u2550 \uC778\uAE30 \uC0C1\uD488 (8\uAC1C) \u2550\u2550 ======================================== -->
  <div style="max-width:1080px;margin:0 auto;padding:48px clamp(12px,3vw,32px) 40px;">
    <div style="text-align:center;margin-bottom:28px;">
      <h2 style="font-size:1.5rem;font-weight:700;color:#1a1a1a;margin-bottom:8px;">
        \uC778\uAE30 \uC0C1\uD488
      </h2>
      <p style="font-size:0.85rem;color:#999;">
        \uACE0\uAC1D\uB4E4\uC774 \uC0AC\uB791\uD558\uB294 \uD2B8\uB80C\uB514\uD55C \uC544\uC774\uD15C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694
      </p>
    </div>
    <div class="home-prod-grid">
      <div v-for="p in cfAllHomeProds" :key="p.prodId"
        style="cursor:pointer;transition:transform .25s,box-shadow .25s;" title="Ctrl+\uD074\uB9AD: \uC0C8\uCC3D"
        @mouseenter="$event.currentTarget.style.transform='translateY(-6px)';$event.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'"
        @mouseleave="$event.currentTarget.style.transform='';$event.currentTarget.style.boxShadow=''"
        @click="handleSelectAction('prods-rowSelect', p, $event)"
        @auxclick="$event.button===1 ? handleSelectAction('prods-rowSelect', p, $event) : null">
        <div style="background:#f5f5f5;padding:24px;margin-bottom:14px;overflow:hidden;position:relative;aspect-ratio:1;"
          @mouseenter="$event.currentTarget.querySelector('.prod-hover').style.opacity='1'"
          @mouseleave="$event.currentTarget.querySelector('.prod-hover').style.opacity='0'">
          <img :src="p.image || window.NO_IMAGE" :alt="p.prodNm" style="width:100%;height:100%;object-fit:contain;" />
          <span v-if="p.badge" style="position:absolute;top:10px;left:10px;font-size:0.68rem;font-weight:600;padding:3px 8px;border-radius:2px;"
            :style="{ background: p.badge==='NEW' ? '#1a1a1a' : '#8b7355', color:'#fff' }">
            {{ p.badge }}
          </span>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC88B\uC544\uC694 (\uC88B\uC544\uC694 \uC0C1\uD0DC\uBA74 \uD56D\uC0C1 \uD45C\uC2DC) ============================= -->
          <button @click.stop="handleSelectAction('prods-rowLike', p.prodId)"
            :class="{ 'fo-shake': likeShake.isActive(p.prodId) }"
            :style="{ position:'absolute', right:'12px', top:'12px', width:'32px', height:'32px', borderRadius:'50%', border:'none', background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2 }"
            class="prod-like" title="\uC704\uC2DC\uB9AC\uC2A4\uD2B8">
            <svg width="16" height="16" viewBox="0 0 24 24" :fill="isLiked(p.prodId)?'#ef4444':'none'" :stroke="isLiked(p.prodId)?'#ef4444':'#555'" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </button>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC7A5\uBC14\uAD6C\uB2C8 + \uBE60\uB978\uBCF4\uAE30 (hover \uC2DC\uC5D0\uB9CC) ========================= -->
          <div class="prod-hover" style="opacity:0;transition:opacity .25s;position:absolute;right:12px;top:48px;display:flex;flex-direction:column;gap:6px;">
            <button @click.stop="handleBtnAction('quickViewModal-openCart', p)" style="width:32px;height:32px;border-radius:50%;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="\uC7A5\uBC14\uAD6C\uB2C8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2">
                <circle cx="9" cy="21" r="1">
                </circle>
                <circle cx="20" cy="21" r="1">
                </circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                </path>
              </svg>
            </button>
            <button @click.stop="handleBtnAction('quickViewModal-openView', p)" style="width:32px;height:32px;border-radius:50%;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="\uBE60\uB978\uBCF4\uAE30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2">
                <circle cx="11" cy="11" r="8">
                </circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65">
                </line>
              </svg>
            </button>
          </div>
        </div>
        <div style="font-size:0.88rem;font-weight:500;color:#1a1a1a;margin-bottom:4px;">
          {{ p.prodNm }}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:0.88rem;font-weight:700;color:#1a1a1a;">
            {{ p.price }}
          </span>
          <span v-if="p.originalPrice" style="font-size:0.78rem;color:#bbb;text-decoration:line-through;">
            {{ p.originalPrice.toLocaleString ? p.originalPrice.toLocaleString() + '\uC6D0' : p.originalPrice }}
          </span>
          <span v-if="p.originalPrice ? p.priceNum : false" style="font-size:0.75rem;font-weight:700;color:#ef4444;">
          {{ Math.round((1 - p.priceNum / p.originalPrice) * 100) }}%
        </span>
      </div>
    </div>
  </div>
  <div style="text-align:center;margin-top:32px;">
    <button @click="handleBtnAction('page-goProdList')"
        style="padding:12px 40px;font-size:0.82rem;font-weight:600;letter-spacing:0.5px;border:1.5px solid #ddd;background:transparent;color:#666;cursor:pointer;transition:all .2s;"
        @mouseenter="$event.target.style.borderColor='#1a1a1a';$event.target.style.color='#1a1a1a'"
        @mouseleave="$event.target.style.borderColor='#ddd';$event.target.style.color='#666'">
      \uB354 \uBCF4\uAE30
    </button>
  </div>
</div>
<!-- ===== \u25A1. \u2550\u2550 \uC778\uAE30 \uC0C1\uD488 (8\uAC1C) \u2550\u2550 ======================================== -->
<!-- ===== \u25A0. \u2550\u2550 2\uC5F4 \uD504\uB85C\uBAA8\uC158 \uBC30\uB108 \u2550\u2550 ======================================== -->
<div style="max-width:1100px;margin:0 auto;padding:0 clamp(12px,3vw,32px) 48px;">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(12px,2vw,24px);">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uB108 1 ================================================ -->
    <div style="position:relative;overflow:hidden;border-radius:4px;display:flex;align-items:flex-end;min-height:300px;">
      <img src="assets/cdn/prod/img/shop/banner/banner-big-1.jpg" alt="\uD504\uB85C\uBAA8\uC158"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
      <div style="position:relative;z-index:1;padding:40px;background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 100%);width:100%;">
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;">
          \uD504\uB9AC\uBBF8\uC5C4 \uCEEC\uB809\uC158
        </div>
        <h3 style="font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:10px;line-height:1.3;">
          \uD578\uB4DC\uBA54\uC774\uB4DC
          <br>
          \uD504\uB9AC\uBBF8\uC5C4 \uC544\uC774\uD15C
        </h3>
        <p style="font-size:0.85rem;color:rgba(255,255,255,0.8);margin-bottom:20px;line-height:1.6;">
          \uC7A5\uC778\uC758 \uC190\uAE38\uC774 \uB2F4\uAE34
          <br>
          \uD2B9\uBCC4\uD55C \uCEEC\uB809\uC158\uC744 \uB9CC\uB098\uBCF4\uC138\uC694.
        </p>
        <button @click="handleBtnAction('page-goProdList')"
            style="padding:10px 24px;font-size:0.8rem;font-weight:600;border:1.5px solid #fff;background:transparent;color:#fff;cursor:pointer;transition:all .2s;"
            @mouseenter="$event.target.style.background='#fff';$event.target.style.color='#1a1a1a'"
            @mouseleave="$event.target.style.background='transparent';$event.target.style.color='#fff'">
          \uC1FC\uD551\uD558\uAE30 \u2192
        </button>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uB108 2 ================================================ -->
    <div style="position:relative;overflow:hidden;border-radius:4px;display:flex;align-items:flex-end;min-height:300px;">
      <img src="assets/cdn/prod/img/shop/banner/banner-big-2.jpg" alt="\uD504\uB85C\uBAA8\uC158"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
      <div style="position:relative;z-index:1;padding:40px;background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 100%);width:100%;">
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;">
          \uC2DC\uC98C \uD55C\uC815 \uC0C1\uD488
        </div>
        <h3 style="font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:10px;line-height:1.3;">
          2026 S/S
          <br>
          \uC2E0\uC0C1\uD488 \uCEEC\uB809\uC158
        </h3>
        <p style="font-size:0.85rem;color:rgba(255,255,255,0.8);margin-bottom:20px;line-height:1.6;">
          \uC62C \uBD04\xB7\uC5EC\uB984 \uC2DC\uC98C\uC744 \uBE5B\uB0BC
          <br>
          \uC0C8\uB85C\uC6B4 \uC544\uC774\uD15C\uC774 \uB3C4\uCC29\uD588\uC2B5\uB2C8\uB2E4.
        </p>
        <button @click="handleBtnAction('page-goProdList')"
            style="padding:10px 24px;font-size:0.8rem;font-weight:600;border:1.5px solid #fff;background:transparent;color:#fff;cursor:pointer;transition:all .2s;"
            @mouseenter="$event.target.style.background='#fff';$event.target.style.color='#1a1a1a'"
            @mouseleave="$event.target.style.background='transparent';$event.target.style.color='#fff'">
          \uC1FC\uD551\uD558\uAE30 \u2192
        </button>
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \u2550\u2550 2\uC5F4 \uD504\uB85C\uBAA8\uC158 \uBC30\uB108 \u2550\u2550 ======================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uD560\uC778 \uC0C1\uD488 (Sale Off) \u2550\u2550 ================================== -->
<div style="max-width:1080px;margin:0 auto;padding:0 clamp(12px,3vw,32px) 40px;">
  <div style="text-align:center;margin-bottom:28px;">
    <h2 style="font-size:1.5rem;font-weight:700;color:#1a1a1a;font-style:italic;margin-bottom:8px;">
      \uD560\uC778 \uC0C1\uD488
    </h2>
    <p style="font-size:0.85rem;color:#999;">
      \uD2B9\uBCC4 \uD560\uC778 \uC911\uC778 \uC778\uAE30 \uC0C1\uD488\uC744 \uB193\uCE58\uC9C0 \uB9C8\uC138\uC694
    </p>
  </div>
  <div class="home-sale-grid">
    <div v-for="p in cfSaleProds" :key="'sale'+p.prodId"
        style="cursor:pointer;text-align:center;transition:transform .25s;" title="Ctrl+\uD074\uB9AD: \uC0C8\uCC3D"
        @mouseenter="$event.currentTarget.style.transform='translateY(-4px)'"
        @mouseleave="$event.currentTarget.style.transform=''"
        @click="handleSelectAction('prods-rowSelect', p, $event)"
        @auxclick="$event.button===1 ? handleSelectAction('prods-rowSelect', p, $event) : null">
      <div style="background:#f5f5f5;padding:20px;margin-bottom:12px;position:relative;aspect-ratio:1;overflow:hidden;">
        <img :src="p.image || window.NO_IMAGE" :alt="p.prodNm" style="width:100%;height:100%;object-fit:contain;" />
        <span v-if="p.originalPrice ? p.priceNum : false" style="position:absolute;top:8px;left:8px;font-size:0.68rem;font-weight:700;padding:3px 8px;border-radius:2px;background:#ef4444;color:#fff;">
        -{{ Math.round((1 - p.priceNum / p.originalPrice) * 100) }}%
      </span>
    </div>
    <div style="font-size:0.85rem;font-weight:500;color:#1a1a1a;margin-bottom:4px;">
      {{ p.prodNm }}
    </div>
    <div style="display:flex;align-items:center;justify-content:center;gap:6px;">
      <span style="font-size:0.85rem;font-weight:700;color:#1a1a1a;">
        {{ p.price }}
      </span>
      <span style="font-size:0.75rem;color:#bbb;text-decoration:line-through;">
        {{ p.originalPrice.toLocaleString ? p.originalPrice.toLocaleString() + '\uC6D0' : p.originalPrice }}
      </span>
    </div>
  </div>
</div>
</div>
<!-- ===== \u25A1. \u2550\u2550 \uD560\uC778 \uC0C1\uD488 (Sale Off) \u2550\u2550 ================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uBE0C\uB79C\uB4DC \uB85C\uACE0 \u2550\u2550 ============================================ -->
<div style="max-width:900px;margin:0 auto;padding:20px clamp(12px,3vw,32px) 40px;border-top:1px solid #eee;border-bottom:1px solid #eee;">
  <div style="display:flex;align-items:center;justify-content:center;gap:clamp(20px,5vw,48px);flex-wrap:wrap;opacity:0.45;">
    <img v-for="i in 5" :key="i" :src="'assets/cdn/prod/img/client/brand-' + i + '.webp'" style="height:30px;object-fit:contain;filter:grayscale(1);" />
  </div>
</div>
<!-- ===== \u25A1. \u2550\u2550 \uBE0C\uB79C\uB4DC \uB85C\uACE0 \u2550\u2550 ============================================ -->
<!-- ===== \u25A0. \u2550\u2550 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8 \u2550\u2550 =========================================== -->
<div style="max-width:1080px;margin:0 auto;padding:40px clamp(12px,3vw,32px) 48px;">
  <div style="text-align:center;margin-bottom:28px;">
    <h2 style="font-size:1.5rem;font-weight:700;color:#1a1a1a;font-style:italic;margin-bottom:8px;">
      \uBE14\uB85C\uADF8
    </h2>
    <p style="font-size:0.85rem;color:#999;">
      \uC2A4\uD0C0\uC77C\uB9C1 \uD301\uACFC \uD328\uC158 \uD2B8\uB80C\uB4DC\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694
    </p>
  </div>
  <div class="home-blog-grid">
    <div v-for="i in 3" :key="'blog'+i"
        style="cursor:pointer;transition:transform .25s;"
        @mouseenter="$event.currentTarget.style.transform='translateY(-4px)'"
        @mouseleave="$event.currentTarget.style.transform=''"
        @click="handleBtnAction('page-goBlog')">
      <div style="aspect-ratio:4/3;overflow:hidden;border-radius:4px;margin-bottom:14px;">
        <img :src="'assets/cdn/prod/img/blog/blog-' + i + '.jpg'" :alt="'\uBE14\uB85C\uADF8 ' + i"
            style="width:100%;height:100%;object-fit:cover;transition:transform .3s;"
            @mouseenter="$event.target.style.transform='scale(1.05)'"
            @mouseleave="$event.target.style.transform=''" />
      </div>
      <div style="font-size:0.72rem;color:#999;margin-bottom:6px;">
        {{ ['2026.04.10', '2026.04.08', '2026.04.05'][i-1] }}
      </div>
      <h3 style="font-size:0.95rem;font-weight:600;color:#1a1a1a;margin-bottom:8px;line-height:1.4;">
        {{ ['\uBD04 \uC2DC\uC98C \uC2A4\uD0C0\uC77C\uB9C1 \uAC00\uC774\uB4DC', '\uD2B8\uB80C\uB4DC \uCEEC\uB7EC \uD65C\uC6A9\uBC95', '\uBBF8\uB2C8\uBA40 \uC637\uC7A5 \uC815\uB9AC\uBC95'][i-1] }}
      </h3>
      <p style="font-size:0.8rem;color:#888;line-height:1.6;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
        {{ ['\uC62C\uBD04 \uD2B8\uB80C\uB514\uD55C \uCF54\uB514\uB97C \uC644\uC131\uD558\uB294 \uD575\uC2EC \uC544\uC774\uD15C\uACFC \uC2A4\uD0C0\uC77C\uB9C1 \uD301\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4.', '\uC2DC\uC98C \uCEEC\uB7EC\uB97C \uD65C\uC6A9\uD55C \uB2E4\uC591\uD55C \uCF54\uB514 \uBC29\uBC95\uC744 \uC54C\uC544\uBD05\uB2C8\uB2E4.', '\uD6A8\uC728\uC801\uC778 \uC637\uC7A5 \uC815\uB9AC\uBC95\uACFC \uCEA1\uC290 \uC6CC\uB4DC\uB85C\uBE0C \uAD6C\uC131 \uD301\uC744 \uACF5\uAC1C\uD569\uB2C8\uB2E4.'][i-1] }}
      </p>
      <span style="font-size:0.78rem;font-weight:600;color:#1a1a1a;text-decoration:underline;">
        \uC790\uC138\uD788 \uBCF4\uAE30 \u2192
      </span>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \u2550\u2550 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8 \u2550\u2550 =========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uBE60\uB978\uBCF4\uAE30 \uBAA8\uB2EC (ProductModal \uCEF4\uD3EC\uB10C\uD2B8) \u2550\u2550 ======================= -->
<product-modal :show="!!uiState.quickViewProduct" :product="uiState.quickViewProduct" :cart-mode="uiState.cartModalMode" :navigate="(page, opts) => { if(opts?.instantOrder){ navigate('order',opts); uiState.quickViewProduct=null; } else { selectProd(uiState.quickViewProduct); uiState.quickViewProduct=null; } }" :toggle-like="toggleLike" :is-liked="isLiked" :add-to-cart="addToCart" modal-name="quick-view" :on-callback="fnCallbackModal" />
</fo-page>
<!-- ===== \u25A1. \u2550\u2550 \uBE60\uB978\uBCF4\uAE30 \uBAA8\uB2EC (ProductModal \uCEF4\uD3EC\uB10C\uD2B8) \u2550\u2550 ======================= -->
`};
