window.OrderDetailModal={name:"OrderDetailModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},order:{type:Object,default:()=>({})},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(e,{emit:r}){const{reactive:l,computed:x}=Vue,a=l({loading:!1,error:""}),n=l({}),s=x(()=>boUtil.bofGetSiteNm());return{uiState:a,codes:n,cfSiteNm:s,handleBtnAction:(d,u={})=>{if(d==="modal-close"){r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else console.warn("[handleBtnAction] unknown cmd:",d)},handleSelectAction:(d,u={})=>{console.warn("[handleSelectAction] unknown cmd:",d)},fnStatusColor:d=>({\uC8FC\uBB38\uC644\uB8CC:"#3b82f6",\uACB0\uC81C\uC644\uB8CC:"#8b5cf6",\uBC30\uC1A1\uC900\uBE44\uC911:"#f59e0b",\uBC30\uC1A1\uC911:"#f97316",\uBC30\uC1A1\uC644\uB8CC:"#22c55e",\uC644\uB8CC:"#6b7280",\uCDE8\uC18C\uB428:"#9ca3af"})[d]||"#9ca3af",fnStatusLabel:d=>d==="\uC644\uB8CC"?"\uAD6C\uB9E4\uD655\uC815":d}},template:`
<fo-modal :show="show" max-width="520px" max-height="90vh" box-pad="0" :z-index="400" @close="handleBtnAction('modal-close')">
  <div style="background:var(--bg-card);border-radius:var(--radius);width:100%;display:flex;flex-direction:column;box-shadow:0 24px 64px rgba(0,0,0,0.28);border:1px solid var(--border);overflow:hidden;height:100%;"
    role="dialog" aria-modal="true">
    <!-- \uD5E4\uB354 -->
    <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div>
        <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
          \u{1F4E6} \uC8FC\uBB38 \uC0C1\uC138
          <span style="font-size:11px;color:#2563eb;font-weight:500;margin-left:8px;">
            {{ cfSiteNm }}
          </span>
        </div>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">
          {{ order && order.orderId }}
        </div>
      </div>
      <button type="button" @click="handleBtnAction('modal-close')" aria-label="\uB2EB\uAE30"
        style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px;line-height:1;">
        \u2715
      </button>
    </div>
    <!-- \uCF58\uD150\uCE20 -->
    <div v-if="order" style="padding:18px 20px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px;">
      <!-- \uC8FC\uBB38\uC77C / \uC0C1\uD0DC -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.82rem;color:var(--text-muted);">
          {{ order.orderDate }}
        </span>
        <span style="font-size:0.78rem;font-weight:700;padding:4px 12px;border-radius:20px;color:#fff;"
          :style="'background:' + fnStatusColor(order.status)">
          {{ fnStatusLabel(order.status) }}
        </span>
      </div>
      <!-- \uC0C1\uD488 \uBAA9\uB85D -->
      <div>
        <div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">
          \uC8FC\uBB38 \uC0C1\uD488
        </div>
        <div v-for="(item, i) in order.orderItems" :key="i"
          style="display:flex;align-items:center;gap:10px;padding:8px 0;"
          :style="i < order.orderItems.length-1 ? 'border-bottom:1px dashed var(--border);' : ''">
          <span style="font-size:1.4rem;flex-shrink:0;">
            {{ item.emoji }}
          </span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);">
              {{ item.prodNm }}
            </div>
            <div style="font-size:0.78rem;color:var(--text-muted);">
              {{ item.color }} / {{ item.size }} / {{ item.qty }}\uAC1C
            </div>
            <div v-if="item.productCoupon ? (item.productCoupon.discount) : false" style="margin-top:2px;font-size:0.7rem;color:#16a34a;">
            \u{1F39F} {{ item.productCoupon.name }} -{{ Number(item.productCoupon.discount).toLocaleString() }}\uC6D0
          </div>
        </div>
        <div style="font-size:0.88rem;font-weight:700;color:var(--blue);flex-shrink:0;">
          {{ item.price.toLocaleString() }}\uC6D0
        </div>
      </div>
    </div>
    <!-- \uACB0\uC81C \uC815\uBCF4 -->
    <div style="background:var(--bg-base);border-radius:8px;padding:12px 14px;font-size:0.82rem;display:flex;flex-direction:column;gap:6px;">
      <div v-if="order.shippingFee > 0" style="display:flex;justify-content:space-between;">
        <span style="color:var(--text-muted);">
          \uBC30\uC1A1\uBE44
        </span>
        <span style="font-weight:600;color:var(--text-primary);">
          {{ order.shippingFee.toLocaleString() }}\uC6D0
        </span>
      </div>
      <div v-if="order.shippingCoupon ? (Number(order.shippingCoupon.discount) > 0) : false" style="display:flex;justify-content:space-between;">
      <span style="color:var(--text-muted);">
        \u{1F69A} \uBC30\uC1A1\uBE44 \uCFE0\uD3F0
      </span>
      <span style="font-weight:700;color:var(--blue);">
        -{{ Number(order.shippingCoupon.discount).toLocaleString() }}\uC6D0
      </span>
    </div>
    <div v-if="Number(order.cashPaid) > 0" style="display:flex;justify-content:space-between;">
      <span style="color:var(--text-muted);">
        \u{1F4B0} \uCE90\uC26C \uACB0\uC81C
      </span>
      <span style="font-weight:600;color:var(--text-primary);">
        {{ Number(order.cashPaid).toLocaleString() }}\uC6D0
      </span>
    </div>
    <div v-if="Number(order.transferPaid) > 0" style="display:flex;justify-content:space-between;">
      <span style="color:var(--text-muted);">
        \u{1F3E6} \uACC4\uC88C\uC774\uCCB4
      </span>
      <span style="font-weight:600;color:var(--text-primary);">
        {{ Number(order.transferPaid).toLocaleString() }}\uC6D0
      </span>
    </div>
    <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);padding-top:8px;margin-top:2px;">
      <span style="font-weight:700;color:var(--text-primary);">
        \uCD1D \uACB0\uC81C\uAE08\uC561
      </span>
      <span style="font-size:0.95rem;font-weight:800;color:var(--blue);">
        {{ order.totalPrice.toLocaleString() }}\uC6D0
      </span>
    </div>
  </div>
  <!-- \uD0DD\uBC30 \uC815\uBCF4 -->
  <div v-if="order.courier ? (order.trackingNo) : false" style="display:flex;align-items:center;gap:8px;font-size:0.8rem;padding:10px 14px;background:var(--bg-base);border-radius:8px;">
  <span style="color:var(--text-muted);">
    \u{1F69A} {{ order.courier }}
  </span>
  <span style="font-weight:600;color:var(--text-primary);">
    {{ order.trackingNo }}
  </span>
</div>
</div>
<!-- \uD478\uD130 -->
<div style="padding:12px 20px;border-top:1px solid var(--border);flex-shrink:0;">
  <button type="button" @click="handleBtnAction('modal-close')" class="btn btn_close"
        style="width:100%;padding:10px;border:none;border-radius:8px;cursor:pointer;font-size:0.88rem;font-weight:700;">
    \uB2EB\uAE30
  </button>
</div>
</div>
</fo-modal>
`},window.ProductModal={name:"ProductModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},product:{type:Object,default:()=>({})},navigate:{type:Function,default:()=>{}},toggleLike:{type:Function,default:()=>{}},isLiked:{type:Function,default:()=>!1},addToCart:{type:Function,default:null},cartMode:{type:[Boolean,String],default:!0},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(e,{emit:r}){const{ref:l,watch:x,computed:a,reactive:n}=Vue,s=n({loading:!1,error:""}),c=n({}),i=l(null),g=l(null),p=l(1),d=l(!1),u=l(0),k=l(""),w=l(!1),z=l(!1),S=l(!1),A=t=>{t.value=!1,requestAnimationFrame(()=>{t.value=!0,setTimeout(()=>{t.value=!1},2e3)})},I=(t,o,v,f)=>{var h;const m=e.addToCart||((h=window.foApp)==null?void 0:h.addToCart);m&&m(t,o,v,f)},M=(t,o={})=>{if(t==="modal-close"){r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else{if(t==="modal-like")return O();if(t==="modal-cart")return L();if(t==="modal-cart-close"){L()&&r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else if(t==="modal-buy-now-close"){D(e.navigate)&&r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else if(t==="modal-go-prod-view"){e.navigate&&e.navigate("prodView"),r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else if(t==="modal-qty-dec"){p.value>1&&p.value--;return}else if(t==="modal-qty-inc"){p.value++;return}else console.warn("[handleBtnAction] unknown cmd:",t)}},P=(t,o={})=>{if(t==="modal-sel-thumb"){u.value=o;return}else if(t==="modal-sel-color"){i.value=o,b.value=!1,u.value=0;return}else if(t==="modal-sel-size"){g.value=o,y.value=!1;return}else console.warn("[handleSelectAction] unknown cmd:",t)};let C=null;const N=t=>{k.value=t,w.value=!0,clearTimeout(C),C=setTimeout(()=>{w.value=!1},2400)};x(()=>e.product,t=>{var o;i.value=((o=t==null?void 0:t.opt1s)==null?void 0:o[0])||null,g.value=null,p.value=1,d.value=!1,u.value=0},{immediate:!0});const T=a(()=>{const t=e.product;if(!t)return[];const o="assets/cdn/prod/img/shop/product",v=Math.max(0,(t.opt1s||[]).findIndex(m=>m===i.value)),f=parseInt(t.productId)||1;if(f<=12)return[0,1,2].map(m=>{const h=(f-1+v+m)%12+1;return`${o}/fashion/fashion-${h}.webp`});{const m=(f-1)%23+1;return[0,1,2].map(h=>{const $=(m-1+v+h)%23+1;return`${o}/product_${$}.png`})}}),B=a(()=>{var f;const t=[4.8,4.5,4.7,4.2,4.9,4.3,4.6,4.1,4.4,4.8,4.7,4.5],o=[24,18,31,9,42,15,27,8,33,19,11,28],v=((parseInt((f=e.product)==null?void 0:f.productId)||1)-1)%12;return{score:t[v],count:o[v]}}),F=a(()=>{const t=Math.round(B.value.score);return"\u2605".repeat(t)+"\u2606".repeat(5-t)}),O=()=>{if(!e.product)return;const t=e.isLiked&&e.isLiked(e.product.prodId);e.toggleLike&&e.toggleLike(e.product.prodId),N(t?"\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0\uC11C \uC81C\uAC70\uD588\uC2B5\uB2C8\uB2E4.":"\uC704\uC2DC\uB9AC\uC2A4\uD2B8\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."),A(z)},b=l(!1),y=l(!1),R=()=>{var t,o;return((o=(t=e.product)==null?void 0:t.opt1s)==null?void 0:o.length)>0},q=()=>{var o;const t=(o=e.product)==null?void 0:o.opt2s;return t&&t.length>0&&!(t.length===1&&t[0]==="FREE")},j=()=>{if(b.value=R()&&!i.value,y.value=q()&&!g.value,b.value||y.value){const t=[b.value&&"\uC0C9\uC0C1",y.value&&"\uC0AC\uC774\uC988"].filter(Boolean).join(", ");return N(`${t}\uC744(\uB97C) \uC120\uD0DD\uD574\uC8FC\uC138\uC694.`),!1}return!0},L=()=>j()?(I(e.product,i.value,g.value,p.value),d.value=!0,A(S),!0):!1,D=t=>j()?(t&&t("order",{instantOrder:{product:e.product,color:i.value,size:g.value,qty:p.value}}),!0):!1;return{uiState:s,codes:c,selColor:i,selSize:g,qty:p,inCart:d,selThumb:u,cfThumbImgs:T,cfRating:B,cfStarStr:F,toastMsg:k,toastShow:w,errColor:b,errSize:y,likeShaking:z,cartShaking:S,handleBtnAction:M,handleSelectAction:P}},template:`
<fo-modal :show="show" max-width="840px" max-height="90vh" box-pad="0" :z-index="400" @close="handleBtnAction('modal-close')">
  <!-- \uB0B4\uBD80 \uD1A0\uC2A4\uD2B8 -->
  <transition name="fade">
    <div v-if="toastShow"
      style="position:fixed;bottom:36px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:10px 28px;border-radius:4px;font-size:0.84rem;z-index:500;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.3);pointer-events:none;">
      {{ toastMsg }}
    </div>
  </transition>
  <div style="background:#fff;border-radius:8px;width:100%;height:100%;overflow:hidden;display:flex;"
    role="dialog" aria-modal="true">
    <!-- \uC88C: \uC774\uBBF8\uC9C0 + \uC378\uB124\uC77C -->
    <div v-if="product" style="flex:0 0 360px;background:#f5f5f5;display:flex;flex-direction:column;padding:28px 24px 20px;">
      <!-- \uBA54\uC778 \uC774\uBBF8\uC9C0 -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:280px;">
        <img v-if="cfThumbImgs[selThumb]" :src="cfThumbImgs[selThumb]" :alt="product.prodNm"
          style="max-width:100%;max-height:300px;object-fit:contain;" />
      </div>
      <!-- \uC378\uB124\uC77C \uBAA9\uB85D -->
      <div style="display:flex;gap:8px;justify-content:center;margin-top:16px;">
        <div v-for="(img, i) in cfThumbImgs" :key="i" @click="handleSelectAction('modal-sel-thumb', i)"
          :style="{
          width:'68px', height:'68px', background:'#fff', cursor:'pointer', boxSizing:'border-box',
          border: selThumb===i ? '2px solid #1a1a1a' : '2px solid transparent',
          padding:'4px', borderRadius:'2px', transition:'border-color .15s',
          }">
          <img :src="img" style="width:100%;height:100%;object-fit:contain;" />
        </div>
      </div>
    </div>
    <!-- \uC6B0: \uC815\uBCF4 -->
    <div v-if="product" style="flex:1;min-width:0;padding:28px 28px 24px;position:relative;display:flex;flex-direction:column;overflow-y:auto;">
      <button @click="handleBtnAction('modal-close')"
        style="position:absolute;top:14px;right:14px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#bbb;line-height:1;">
        \u2715
      </button>
      <!-- \uC0C1\uD488\uBA85 -->
      <h2 style="font-size:1.15rem;font-weight:700;color:#1a1a1a;margin-bottom:6px;padding-right:28px;line-height:1.4;">
        {{ product.prodNm }}
      </h2>
      <!-- \uD3C9\uC810 -->
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
        <span style="color:#f59e0b;font-size:0.88rem;letter-spacing:1px;">
          {{ cfStarStr }}
        </span>
        <span style="font-size:0.78rem;font-weight:600;color:#555;">
          {{ cfRating.score }}
        </span>
        <span style="font-size:0.75rem;color:#aaa;">
          ({{ cfRating.count }}\uAC1C \uB9AC\uBDF0)
        </span>
      </div>
      <!-- \uAC00\uACA9 -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #f0f0f0;">
        <span style="font-size:1.3rem;font-weight:800;color:#1a1a1a;">
          {{ product.price }}
        </span>
        <span v-if="product.originalPrice" style="font-size:0.85rem;color:#bbb;text-decoration:line-through;">
          {{ product.originalPrice.toLocaleString ? product.originalPrice.toLocaleString() + '\uC6D0' : product.originalPrice }}
        </span>
        <span v-if="product.originalPrice ? (product.priceNum) : false" style="font-size:0.8rem;font-weight:700;color:#ef4444;">
        {{ Math.round((1 - product.priceNum / product.originalPrice) * 100) }}%
      </span>
    </div>
    <!-- \uC124\uBA85 -->
    <p style="font-size:0.84rem;color:#666;line-height:1.75;margin-bottom:16px;">
      {{ product.desc }}
    </p>
    <!-- \uC0C9\uC0C1 -->
    <div v-if="product.opt1s ? (product.opt1s.length) : false" style="margin-bottom:14px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-size:0.75rem;font-weight:600;color:#999;letter-spacing:0.5px;">
        \uC0C9\uC0C1
      </span>
      <span v-if="selColor" style="font-size:0.75rem;color:#555;">
        {{ selColor.name }}
      </span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button v-for="c in product.opt1s" :key="c.name" @click="handleSelectAction('modal-sel-color', c)" :style="{ width:'28px', height:'28px', borderRadius:'50%', background:c.hex, cursor:'pointer', border: selColor?.name===c.name ? '3px solid #1a1a1a' : '2px solid rgba(0,0,0,0.12)', outline: selColor?.name===c.name ? '2px solid #fff' : 'none', outlineOffset: '-4px', boxSizing:'border-box', transition:'border .15s', }" :title="c.name">
    </button>
  </div>
  <p v-if="errColor" style="margin:6px 0 0;font-size:0.75rem;color:#ef4444;">
    \uC0C9\uC0C1\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.
  </p>
</div>
<!-- \uC0AC\uC774\uC988 -->
<div v-if="product.opt2s ? (product.opt2s.length ? (!(product.opt2s.length===1 ? (product.opt2s[0]==='FREE') : false)) : false) : false" style="margin-bottom:14px;">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
  <span :style="{ fontSize:'0.75rem', fontWeight:'600', letterSpacing:'0.5px', color: errSize ? '#ef4444' : '#999' }">
    \uC0AC\uC774\uC988
  </span>
  <span v-if="errSize" style="font-size:0.72rem;color:#ef4444;font-weight:500;">
    \uD544\uC218 \uC120\uD0DD
  </span>
</div>
<div :style="{
          display:'flex', gap:'6px', flexWrap:'wrap', padding:'8px',
          border: errSize ? '1px solid #ef4444' : '1px solid transparent',
          borderRadius:'3px', transition:'border-color .2s',
          }">
  <button v-for="s in product.opt2s" :key="s" @click="handleSelectAction('modal-sel-size', s)"
            :style="{
            padding:'5px 14px', borderRadius:'2px', cursor:'pointer', fontSize:'0.8rem',
            border: selSize===s ? '2px solid #1a1a1a' : '2px solid #ddd',
            background: selSize===s ? '#1a1a1a' : '#fff',
            color: selSize===s ? '#fff' : '#555',
            fontWeight: selSize===s ? '700' : '400', transition:'all .15s',
            }">
    {{ s }}
  </button>
</div>
</div>
<!-- \uD0DC\uADF8 -->
<div v-if="product.tags ? (product.tags.length) : false" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">
<span v-for="t in product.tags" :key="t"
          style="padding:2px 10px;background:#f5f5f5;border-radius:20px;font-size:0.72rem;color:#888;">
  #{{ t }}
</span>
</div>
<!-- \uC218\uB7C9 -->
<div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-top:4px;">
  <span style="font-size:0.75rem;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px;">
    \uC218\uB7C9
  </span>
  <div style="display:flex;align-items:center;border:1.5px solid #ddd;border-radius:2px;">
    <button @click="handleBtnAction('modal-qty-dec')"
            style="width:34px;height:34px;border:none;background:transparent;cursor:pointer;font-size:1.1rem;color:#555;line-height:1;">
      \u2212
    </button>
    <span style="min-width:36px;text-align:center;font-size:0.88rem;font-weight:600;color:#1a1a1a;padding:0 4px;">
      {{ qty }}
    </span>
    <button @click="handleBtnAction('modal-qty-inc')"
            style="width:34px;height:34px;border:none;background:transparent;cursor:pointer;font-size:1.1rem;color:#555;line-height:1;">
      +
    </button>
  </div>
</div>
<!-- \uD558\uB2E8 \uBC84\uD2BC -->
<div style="margin-top:auto;">
  <!-- \uC7A5\uBC14\uAD6C\uB2C8 \uBAA8\uB4DC: \uC7A5\uBC14\uAD6C\uB2C8 \uCD94\uAC00 \uBC84\uD2BC\uB9CC -->
  <template v-if="cartMode">
    <button @click="handleBtnAction('modal-cart-close')" :class="{ 'fo-shake': cartShaking }"
            style="width:100%;padding:13px;font-size:0.9rem;font-weight:700;background:#1a1a1a;color:#fff;border:none;border-radius:2px;cursor:pointer;letter-spacing:0.3px;">
      \u{1F6D2} \uC7A5\uBC14\uAD6C\uB2C8 \uCD94\uAC00
    </button>
  </template>
  <!-- \uC77C\uBC18 \uBAA8\uB4DC: \uC804\uCCB4 \uBC84\uD2BC -->
  <template v-else>
    <div style="display:flex;gap:8px;">
      <button class="btn-blue" @click="handleBtnAction('modal-go-prod-view')"
              style="flex:1;padding:12px;font-size:0.85rem;">
        \uC0C1\uC138\uBCF4\uAE30
      </button>
      <button class="btn-outline" @click="handleBtnAction('modal-buy-now-close')"
              style="flex:1;padding:12px;font-size:0.85rem;">
        \uBC14\uB85C\uAD6C\uB9E4
      </button>
      <!-- \uC88B\uC544\uC694 \uD1A0\uAE00 -->
      <button @click="handleBtnAction('modal-like')" :class="{ 'fo-shake': likeShaking }" :style="{ width:'44px', height:'44px', borderRadius:'4px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all .15s', border: isLiked?.(product.prodId) ? '1.5px solid #ef4444' : '1.5px solid #ddd', background: isLiked?.(product.prodId) ? '#fff5f5' : '#fff', }">
      <svg width="18" height="18" viewBox="0 0 24 24" :fill="isLiked?.(product.prodId) ? '#ef4444' : 'none'" :stroke="isLiked?.(product.prodId) ? '#ef4444' : '#999'" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
      </path>
    </svg>
  </button>
  <!-- \uC7A5\uBC14\uAD6C\uB2C8 \uD1A0\uAE00 -->
  <button @click="handleBtnAction('modal-cart')" :class="{ 'fo-shake': cartShaking }"
              :style="{
              width:'44px', height:'44px', borderRadius:'4px', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all .15s',
              border: inCart ? '1.5px solid #1a1a1a' : '1.5px solid #ddd',
              background: inCart ? '#1a1a1a' : '#fff',
              }">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :stroke="inCart ? '#fff' : '#999'" stroke-width="2">
      <circle cx="9" cy="21" r="1">
      </circle>
      <circle cx="20" cy="21" r="1">
      </circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
      </path>
    </svg>
  </button>
</div>
</template>
</div>
</div>
</div>
</fo-modal>
`},window.CustomerModal={name:"CustomerModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},user:{type:Object,default:()=>({})},order:{type:Object,default:()=>({})},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(e,{emit:r}){return{handleBtnAction:(a,n={})=>{if(a==="modal-close"){r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else console.warn("[handleBtnAction] unknown cmd:",a)},handleSelectAction:(a,n={})=>{console.warn("[handleSelectAction] unknown cmd:",a)}}},template:`
<fo-modal :show="show" max-width="380px" max-height="90vh" box-pad="0" :z-index="400" @close="handleBtnAction('modal-close')">
  <div style="background:var(--bg-card);border-radius:var(--radius);width:100%;height:100%;display:flex;flex-direction:column;box-shadow:0 24px 64px rgba(0,0,0,0.28);border:1px solid var(--border);overflow:hidden;"
    role="dialog" aria-modal="true">
    <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:38px;height:38px;border-radius:50%;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">
          \u{1F464}
        </div>
        <div>
          <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
            \uC8FC\uBB38\uC790 \uC815\uBCF4
          </div>
          <div v-if="order" style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
            {{ order.orderId }}
          </div>
        </div>
      </div>
      <button type="button" @click="handleBtnAction('modal-close')" aria-label="\uB2EB\uAE30" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px;line-height:1;">
        \u2715
      </button>
    </div>
    <div v-if="user" style="padding:18px 20px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:10px;">
      <div style="background:var(--bg-base);border-radius:8px;padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="min-width:52px;color:var(--text-muted);font-size:0.78rem;font-weight:600;">
            \uC774\uB984
          </span>
          <span style="font-weight:700;color:var(--text-primary);font-size:0.88rem;">
            {{ user.name }}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="min-width:52px;color:var(--text-muted);font-size:0.78rem;font-weight:600;">
            \uC5F0\uB77D\uCC98
          </span>
          <span style="font-weight:600;color:var(--text-primary);font-size:0.88rem;">
            {{ user.phone || '-' }}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="min-width:52px;color:var(--text-muted);font-size:0.78rem;font-weight:600;">
            \uC774\uBA54\uC77C
          </span>
          <span style="font-weight:600;color:var(--text-primary);font-size:0.85rem;">
            {{ user.email || '-' }}
          </span>
        </div>
      </div>
      <div v-if="order ? (order.paymentDetails ? (order.paymentDetails.length) : false) : false" style="background:var(--bg-base);border-radius:8px;padding:14px 16px;">
      <div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);letter-spacing:0.04em;margin-bottom:8px;">
        \uC785\uAE08 \uC815\uBCF4
      </div>
      <div v-for="(pd, i) in order.paymentDetails" :key="i"
          style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"
          :style="i>0?'border-top:1px dashed var(--border);padding-top:6px;margin-top:3px;':''">
        <span style="padding:1px 7px;border-radius:4px;font-size:0.72rem;font-weight:700;"
            :style="pd.type==='\uACC4\uC88C\uC774\uCCB4'||pd.type==='\uACC4\uC88C\uD658\uBD88'?'background:#dcfce7;color:#16a34a;':pd.type==='\uCE90\uC26C'?'background:#fef3c7;color:#d97706;':'background:#dbeafe;color:#1d4ed8;'">
          {{ pd.type }}
        </span>
        <span style="font-weight:600;color:var(--text-primary);font-size:0.85rem;">
          {{ pd.amount.toLocaleString() }}\uC6D0
        </span>
        <span v-if="pd.account" style="color:var(--text-muted);font-size:0.78rem;">
          {{ pd.account }}
        </span>
      </div>
    </div>
  </div>
  <div style="padding:12px 20px;border-top:1px solid var(--border);flex-shrink:0;">
    <button type="button" @click="handleBtnAction('modal-close')" class="btn btn_close" style="width:100%;padding:10px;border:none;border-radius:8px;cursor:pointer;font-size:0.88rem;font-weight:700;">
      \uB2EB\uAE30
    </button>
  </div>
</div>
</fo-modal>
`},window.CompareModal={name:"CompareModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},items:{type:Array,default:()=>[]},selectProd:{type:Function,default:()=>{}},removeItem:{type:Function,default:()=>{}},clearAll:{type:Function,default:()=>{}},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(e,{emit:r}){return{handleBtnAction:(n,s={},c={})=>{if(n==="modal-close"){r("close"),e.onCallback&&e.onCallback(e.modalName,null,null);return}else if(n==="compare-clear"){e.clearAll(),r("close");return}else if(n==="compare-view"){if(c.ctrlKey||c.metaKey||c.button===1){window.foApp.openNewWindow("prodView",s.prodId);return}e.selectProd&&e.selectProd(s),r("close");return}else{if(n==="compare-remove")return e.removeItem(s);console.warn("[handleBtnAction] unknown cmd:",n)}},fnColorNames:n=>(n.opt1s||[]).map(s=>s.name).join(", ")||"-",fnSizeNames:n=>(n.opt2s||[]).join(", ")||"-"}},template:`
<fo-modal :show="show" max-width="920px" max-height="88vh" box-pad="0" :z-index="400" @close="handleBtnAction('modal-close')">
  <div style="background:var(--bg-card);border-radius:var(--radius);width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;"
    role="dialog" aria-modal="true">
    <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:1.1rem;">
          \u2696\uFE0F
        </span>
        <span style="font-size:1rem;font-weight:800;color:var(--text-primary);">
          \uC0C1\uD488 \uBE44\uAD50\uD568
        </span>
        <span style="font-size:0.78rem;color:var(--text-muted);">
          ({{ items.length }}/4)
        </span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <button v-if="items.length" type="button" @click="handleBtnAction('compare-clear')"
            style="background:none;border:none;cursor:pointer;font-size:0.8rem;color:#ef4444;font-weight:600;">
          \uC804\uCCB4 \uBE44\uC6B0\uAE30
        </button>
        <button type="button" @click="handleBtnAction('modal-close')" aria-label="\uB2EB\uAE30" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px;line-height:1;">
          \u2715
        </button>
      </div>
    </div>
    <!-- \uBE44\uC5B4\uC788\uC74C -->
    <div v-if="!items.length" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--text-muted);padding:40px;">
      <span style="font-size:2.4rem;">
        \u2696\uFE0F
      </span>
      <span style="font-size:0.9rem;">
        \uBE44\uAD50\uD568\uC774 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.
      </span>
      <span style="font-size:0.78rem;">
        \uC0C1\uD488 \uCE74\uB4DC\uC758 \u2696\uFE0F \uC544\uC774\uCF58\uC73C\uB85C \uCD5C\uB300 4\uAC1C\uAE4C\uC9C0 \uB2F4\uC744 \uC218 \uC788\uC5B4\uC694.
      </span>
    </div>
    <!-- \uBE44\uAD50 \uD45C -->
    <div v-else style="flex:1;overflow:auto;padding:16px 20px;">
      <div style="display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));">
        <div v-for="p in items" :key="p.prodId"
            style="border:1px solid var(--border);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px;position:relative;">
          <button type="button" @click="handleBtnAction('compare-remove', p.prodId)"
              title="\uBE44\uAD50\uD568\uC5D0\uC11C \uC81C\uAC70"
              style="position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,0.06);cursor:pointer;font-size:0.78rem;color:#666;line-height:1;">
            \u2715
          </button>
          <div style="height:130px;background:var(--bg-base);border-radius:6px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
            <img :src="p.image || window.NO_IMAGE" :alt="p.prodNm" style="width:100%;height:100%;object-fit:contain;" />
          </div>
          <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);line-height:1.35;min-height:2.6em;">
            {{ p.prodNm }}
          </div>
          <div style="display:flex;align-items:baseline;gap:6px;">
            <span style="font-size:0.92rem;font-weight:800;color:var(--blue);">
              {{ p.price }}
            </span>
            <span v-if="p.originalPrice" style="font-size:0.72rem;color:var(--text-muted);text-decoration:line-through;">
              {{ p.originalPrice.toLocaleString ? p.originalPrice.toLocaleString() + '\uC6D0' : p.originalPrice }}
            </span>
          </div>
          <div style="font-size:0.76rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:4px;border-top:1px dashed var(--border);padding-top:8px;">
            <div>
              <span style="color:var(--text-muted);">
                \uC0C9\uC0C1
              </span>
              : {{ fnColorNames(p) }}
            </div>
            <div>
              <span style="color:var(--text-muted);">
                \uC0AC\uC774\uC988
              </span>
              : {{ fnSizeNames(p) }}
            </div>
          </div>
          <p style="font-size:0.75rem;color:var(--text-secondary);line-height:1.5;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;flex:1;">
            {{ p.desc }}
          </p>
          <button class="btn-outline" style="width:100%;padding:7px;font-size:0.78rem;" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click="handleBtnAction('compare-view', p, $event)"
            @auxclick="$event.button===1 ? handleBtnAction('compare-view', p, $event) : null">
            \uC0C1\uC138\uBCF4\uAE30
          </button>
        </div>
      </div>
    </div>
  </div>
</fo-modal>
`},window.FoAddrSearchModal={name:"FoAddrSearchModal",inheritAttrs:!1,props:{modalName:{type:String,default:"addr-search"},onCallback:{type:Function,default:null}},emits:["select","close"],setup(e,{emit:r}){const{ref:l,onMounted:x}=Vue,a=l(null),n=i=>{e.onCallback?e.onCallback(e.modalName,null,{zonecode:i.zonecode,address:i.roadAddress||i.jibunAddress}):r("select",{zonecode:i.zonecode,address:i.roadAddress||i.jibunAddress})},s=()=>{e.onCallback?e.onCallback(e.modalName,null,null):r("close")},c=()=>{a.value&&new window.daum.Postcode({oncomplete:n}).embed(a.value)};return x(()=>{if(window.daum&&window.daum.Postcode){c();return}const i=document.createElement("script");i.src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",i.onload=c,document.head.appendChild(i)}),{layerRef:a,onClose:s}},template:`
<fo-modal :show="true" title="\uC8FC\uC18C \uAC80\uC0C9" width="520px" height="540px" body-pad="0" @close="onClose">
  <template #header-extra>
    <span style="font-size:11px;color:#bbb;">https://postcode.map.kakao.com/search</span>
  </template>
  <div ref="layerRef" style="width:100%;height:100%;overflow:hidden;"></div>
</fo-modal>
`};
