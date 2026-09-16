window.Cart={name:"Cart",props:{navigate:{type:Function,required:!0}},emits:[],setup(c){const{computed:i,reactive:y,onMounted:N}=Vue,h=window.foApp.showConfirm,b=window.foApp.clearCart,k=window.foApp.removeFromCart,w=window.foApp.updateCartQty,n=window.foApp.cart,r=y({loading:!1,error:null,checkedIdxs:new Set,sortKey:"",sortDir:"asc"}),I=(e,t={})=>{if(e==="cart-toggleAll")return B();if(e==="cart-clearAll")return P();if(e==="cart-sort")return S(t);if(e==="summary-goOrder")return K();if(e==="page-goHome")return c.navigate("home");if(e==="page-goProdList")return c.navigate("prodList");console.warn("[handleBtnAction] unknown cmd:",e)},z=(e,t={})=>{if(e==="cart-rowToggle")return C(t);if(e==="cart-rowQty")return q(t.idx,t.delta);if(e==="cart-rowRemove")return l(t);console.warn("[handleSelectAction] unknown cmd:",e)},S=e=>{r.sortKey===e?r.sortDir==="asc"?r.sortDir="desc":(r.sortKey="",r.sortDir="asc"):(r.sortKey=e,r.sortDir="asc")},A=e=>r.checkedIdxs.has(e),C=e=>{r.checkedIdxs.has(e)?r.checkedIdxs.delete(e):r.checkedIdxs.add(e)},B=()=>{p.value?r.checkedIdxs.clear():(r.checkedIdxs.clear(),n.forEach((e,t)=>r.checkedIdxs.add(t)))},l=e=>{k(e);const t=new Set;r.checkedIdxs.forEach(o=>{o<e?t.add(o):o>e&&t.add(o-1)}),r.checkedIdxs.clear(),t.forEach(o=>r.checkedIdxs.add(o))},q=(e,t)=>{const o=n[e];if(o){if(o.qty+t<=0){l(e);return}w(e,t)}},K=()=>{if(r.checkedIdxs.size===0)c.navigate("order");else{const e=[...r.checkedIdxs].sort((t,o)=>t-o).map(t=>n[t]).filter(Boolean).map(t=>t.cartId);c.navigate("order",{cartIds:e})}},P=async()=>{await h("\uC7A5\uBC14\uAD6C\uB2C8 \uBE44\uC6B0\uAE30","\uC7A5\uBC14\uAD6C\uB2C8\uC758 \uBAA8\uB4E0 \uC0C1\uD488\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","warning")&&(b(),r.checkedIdxs.clear())};function d(e){if(!e)return 0;const t=e.replace(/[^0-9]/g,"");return t?parseInt(t,10):0}function j(e,t){const o=d(e);return o?(o*(t||1)).toLocaleString("ko-KR")+"\uC6D0":e}const _=e=>r.sortKey!==e?"\u21C5":r.sortDir==="asc"?"\u2191":"\u2193",D=i(()=>{const e=[...n||[]].map((t,o)=>({...t,_origIdx:o}));return r.sortKey?e.sort((t,o)=>{var m,f,u,v;let a,s;return r.sortKey==="nm"?(a=((m=t.prod)==null?void 0:m.prodNm)||"",s=((f=o.prod)==null?void 0:f.prodNm)||"",r.sortDir==="asc"?a.localeCompare(s,"ko"):s.localeCompare(a,"ko")):r.sortKey==="price"?(a=d((u=t.prod)==null?void 0:u.price)*t.qty,s=d((v=o.prod)==null?void 0:v.price)*o.qty,r.sortDir==="asc"?a-s:s-a):0}):e}),p=i(()=>n.length>0&&r.checkedIdxs.size===n.length),T=i(()=>r.checkedIdxs.size>0&&r.checkedIdxs.size<n.length),g=i(()=>r.checkedIdxs.size>0?[...r.checkedIdxs].sort((e,t)=>e-t).map(e=>n[e]).filter(Boolean):n||[]),x=i(()=>g.value.reduce((e,t)=>{var o;return e+d((o=t.prod)==null?void 0:o.price)*t.qty},0)),L=i(()=>x.value?x.value.toLocaleString("ko-KR")+"\uC6D0":"-"),Q=i(()=>r.checkedIdxs.size>0?r.checkedIdxs.size:n.length);return{uiState:r,cart:n,handleBtnAction:I,handleSelectAction:z,cfSortedCart:D,cfAllChecked:p,cfSomeChecked:T,cfSummaryItems:g,cfTotalPriceStr:L,cfOrderCount:Q,isChecked:A,cartSortIcon:_,formatPrice:j}},template:`
<fo-page title="Cart" eyebrow="Shopping"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 60%"
  :crumbs="[{ label: '\uD648', page: 'home' }, { label: '\uC7A5\uBC14\uAD6C\uB2C8' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uBE48 \uC7A5\uBC14\uAD6C\uB2C8 ================================================== -->
  <div v-if="cart.length===0" style="text-align:center;padding:80px 20px;">
    <div style="font-size:4rem;margin-bottom:20px;">
      \u{1F6D2}
    </div>
    <p style="color:var(--text-muted);font-size:1rem;margin-bottom:24px;">
      \uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694
    </p>
    <button class="btn-blue" @click="handleBtnAction('page-goProdList')" style="padding:12px 28px;">
      \uC1FC\uD551\uD558\uB7EC \uAC00\uAE30
    </button>
  </div>
  <!-- ===== \u25A1. \uBE48 \uC7A5\uBC14\uAD6C\uB2C8 ================================================== -->
  <!-- ===== \u25A0. \uC7A5\uBC14\uAD6C\uB2C8 \uBAA9\uB85D ================================================= -->
  <template v-else>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(12px,2vw,24px);align-items:start;" class="order-grid">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC67C\uCABD: \uC0C1\uD488 \uBAA9\uB85D =========================================== -->
      <div>
        <fo-container card-style="padding:0;overflow:hidden;margin-bottom:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC804\uCCB4 \uC120\uD0DD/\uC0AD\uC81C + \uC815\uB82C \uD5E4\uB354 ================================ -->
          <div style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;">
              <input type="checkbox" :checked="cfAllChecked" :indeterminate.prop="cfSomeChecked"
                @change="handleBtnAction('cart-toggleAll')"
                style="width:17px;height:17px;cursor:pointer;accent-color:var(--blue);" />
              <span style="font-weight:700;font-size:0.9rem;color:var(--text-primary);">
                \uC804\uCCB4 \uC120\uD0DD
                <span v-if="uiState.checkedIdxs.size>0" style="font-weight:400;color:var(--blue);font-size:0.82rem;">
                  ({{ uiState.checkedIdxs.size }}\uAC1C \uC120\uD0DD\uB428)
                </span>
                <span v-else style="font-weight:400;color:var(--text-muted);font-size:0.82rem;">
                  (\uCD1D {{ cart.length }}\uAC1C)
                </span>
              </span>
            </label>
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:0.75rem;color:var(--text-muted);">
                \uC815\uB82C:
              </span>
              <button @click="handleBtnAction('cart-sort', 'nm')"
                :style="uiState.sortKey==='nm' ? 'background:var(--blue);color:#fff;border:none;border-radius:12px;padding:3px 10px;font-size:0.75rem;cursor:pointer;font-weight:700;' : 'background:var(--bg-base);color:var(--text-muted);border:1px solid var(--border);border-radius:12px;padding:3px 10px;font-size:0.75rem;cursor:pointer;'">
                \uC0C1\uD488\uBA85 {{ cartSortIcon('nm') }}
              </button>
              <button @click="handleBtnAction('cart-sort', 'price')"
                :style="uiState.sortKey==='price' ? 'background:var(--blue);color:#fff;border:none;border-radius:12px;padding:3px 10px;font-size:0.75rem;cursor:pointer;font-weight:700;' : 'background:var(--bg-base);color:var(--text-muted);border:1px solid var(--border);border-radius:12px;padding:3px 10px;font-size:0.75rem;cursor:pointer;'">
                \uAC00\uACA9 {{ cartSortIcon('price') }}
              </button>
              <button @click="handleBtnAction('cart-clearAll')"
                style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.8rem;text-decoration:underline;padding:0;margin-left:4px;">
                \uC804\uCCB4 \uC0AD\uC81C
              </button>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC01 \uC0C1\uD488 ============================================ -->
          <div v-for="(item, idx) in cfSortedCart" :key="item._origIdx"
            style="padding:20px;display:flex;gap:12px;align-items:flex-start;"
            :style="{ borderBottom: idx===cfSortedCart.length-1 ? 'none' : '1px solid var(--border)',
            background: isChecked(item._origIdx) ? 'var(--blue-dim)' : '' }">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCCB4\uD06C\uBC15\uC2A4 ========================================== -->
            <div style="padding-top:4px;flex-shrink:0;">
              <input type="checkbox" :checked="isChecked(item._origIdx)" @change="handleSelectAction('cart-rowToggle', item._origIdx)"
                style="width:17px;height:17px;cursor:pointer;accent-color:var(--blue);" />
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uC774\uBBF8\uC9C0 ======================================== -->
            <div style="width:80px;height:80px;border-radius:12px;flex-shrink:0;overflow:hidden;background:var(--bg-base);">
              <img v-if="item.prod.image" :src="item.prod.image" :alt="item.prod.prodNm" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uC815\uBCF4 ========================================= -->
            <div style="flex:1;min-width:0;">
              <div style="font-weight:700;color:var(--text-primary);font-size:0.95rem;margin-bottom:4px;">
                {{ item.prod.prodNm }}
              </div>
              <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
                <span style="display:inline-flex;align-items:center;gap:4px;padding:2px 10px;border-radius:12px;background:var(--blue-dim);color:var(--blue);font-size:0.75rem;font-weight:600;">
                  <span :style="{ display:'inline-block', width:'10px', height:'10px', borderRadius:'50%', background:item.color.hex, border:'1px solid rgba(0,0,0,0.1)', flexShrink:0 }">
                  </span>
                  {{ item.color.name }}
                </span>
                <span style="padding:2px 10px;border-radius:12px;background:var(--purple-dim);color:var(--purple);font-size:0.75rem;font-weight:600;">
                  {{ item.size }}
                </span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <button class="qty-btn" @click="handleSelectAction('cart-rowQty', { idx: item._origIdx, delta: -1 })">
                    \u2212
                  </button>
                  <span class="qty-val">
                    {{ item.qty }}
                  </span>
                  <button class="qty-btn" @click="handleSelectAction('cart-rowQty', { idx: item._origIdx, delta: 1 })">
                    +
                  </button>
                </div>
                <div style="font-size:0.95rem;font-weight:800;color:var(--blue);">
                  {{ formatPrice(item.prod.price, item.qty) }}
                </div>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0AD\uC81C \uBC84\uD2BC ========================================= -->
            <button @click="handleSelectAction('cart-rowRemove', item._origIdx)"
              style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.2rem;padding:0;flex-shrink:0;transition:color 0.2s;"
              @mouseenter="$event.currentTarget.style.color='#e53e3e'"
              @mouseleave="$event.currentTarget.style.color='var(--text-muted)'"
              title="\uC0AD\uC81C">
              \u2715
            </button>
          </div>
        </fo-container>
        <button class="btn-outline" @click="handleBtnAction('page-goProdList')" style="padding:10px 20px;">
          \u2190 \uACC4\uC18D \uC1FC\uD551\uD558\uAE30
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC624\uB978\uCABD: \uC8FC\uBB38 \uC694\uC57D ========================================== -->
      <div>
        <fo-container title="\u{1F4CB} \uC8FC\uBB38 \uC694\uC57D" card-style="padding:clamp(12px,3vw,24px);position:sticky;top:76px;">
          <div v-if="uiState.checkedIdxs.size>0" style="margin-bottom:8px;padding:6px 10px;border-radius:6px;background:var(--blue-dim);color:var(--blue);font-size:0.78rem;font-weight:600;">
            \u2714 \uC120\uD0DD {{ uiState.checkedIdxs.size }}\uAC1C \uC0C1\uD488\uB9CC \uC8FC\uBB38\uD569\uB2C8\uB2E4
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px;font-size:0.875rem;">
            <div v-for="(item, idx) in cfSummaryItems" :key="idx"
              style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
              <span style="color:var(--text-secondary);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ item.prod.prodNm }} ({{ item.color.name }}/{{ item.size }}) \xD7 {{ item.qty }}
              </span>
              <span style="font-weight:600;flex-shrink:0;color:var(--text-primary);">
                {{ formatPrice(item.prod.price, item.qty) }}
              </span>
            </div>
          </div>
          <div style="border-top:1px solid var(--border);padding-top:14px;margin-bottom:18px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.875rem;">
              <span style="color:var(--text-secondary);">
                \uC0C1\uD488\uAE08\uC561
              </span>
              <span style="font-weight:600;">
                {{ cfTotalPriceStr }}
              </span>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.875rem;">
              <span style="color:var(--text-secondary);">
                \uBC30\uC1A1\uBE44
              </span>
              <span style="color:var(--blue);font-weight:600;">
                \uBB34\uB8CC
              </span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;color:var(--text-primary);margin-top:10px;">
              <span>
                \uCD1D \uACB0\uC81C\uAE08\uC561
              </span>
              <span style="color:var(--blue);">
                {{ cfTotalPriceStr }}
              </span>
            </div>
          </div>
          <button class="btn-blue" @click="handleBtnAction('summary-goOrder')" style="width:100%;padding:14px;font-size:0.95rem;">
            \uC8FC\uBB38\uD558\uAE30 ({{ cfOrderCount }}\uAC1C)
          </button>
          <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin-top:10px;">
            \u{1F4B3} \uD1A0\uC2A4 \uCE74\uB4DC\uACB0\uC81C \xB7 \uACC4\uC88C\uC774\uCCB4 \uC911 \uC120\uD0DD \uAC00\uB2A5
          </p>
        </fo-container>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC7A5\uBC14\uAD6C\uB2C8 \uBAA9\uB85D ================================================= -->
</fo-page>
`};
