window.MyChatt={name:"MyChatt",props:{navigate:{type:Function,required:!0}},setup(b){const{reactive:r,computed:d,onMounted:s,watch:P}=Vue,c=window.foApp.cart,C=r({loading:!1,error:null}),n=window.useFoMyStore(),l=(e,t={})=>{if(e==="searchParam-dateSearch")return f(t);console.warn("[handleBtnAction] unknown cmd:",e)},g=(e,t={})=>{if(e==="chatts-open")return n.openChat(t);console.warn("[handleSelectAction] unknown cmd:",e)},{chats:p,expandedChat:h}=Pinia.storeToRefs(n),o=r({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),{dateRange:i,onDateSearch:u}=window.myDateFilterHelper(),v=()=>({dateRangeType:"reg_date",dateRangeStart:i.start,dateRangeEnd:i.end}),a=async()=>{await n.loadChatsPage(v(),o)},y=async()=>{await a()},f=async e=>{e&&u(e),o.pageNo=1,await a()},m=async()=>{await a()},x=async()=>{await a()};s(async()=>{await y()});const w=d(()=>c.length);return{handleBtnAction:l,handleSelectAction:g,chats:p,expandedChat:h,chatPager:o,onPageChange:m,onSizeChange:x,cartCount:w}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myChatt">
  <MyDateFilter @search="handleBtnAction('searchParam-dateSearch', $event)" />
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <PagerHeader :total="chatPager.pageTotalCount" :pager="chatPager" @size-change="onSizeChange" />
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="!chats.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
    \uCC44\uD305 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="c in chats" :key="c.chatId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:10px;overflow:hidden;">
    <div style="padding:16px;cursor:pointer;display:flex;align-items:center;gap:12px;" @click="handleSelectAction('chatts-open', c)">
      <div style="width:40px;height:40px;border-radius:50%;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">
        \u{1F4AC}
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-weight:700;font-size:0.9rem;color:var(--text-primary);">
            {{ c.subject }}
          </span>
          <span v-if="c.unread>0" style="background:var(--blue);color:#fff;font-size:0.7rem;padding:1px 7px;border-radius:20px;font-weight:700;">
            {{ c.unread }}
          </span>
          <span style="font-size:0.75rem;padding:2px 8px;border-radius:20px;font-weight:600;"
            :style="c.status==='\uC9C4\uD589\uC911'?'background:#dcfce7;color:#166534;':'background:var(--blue-dim);color:var(--text-muted);'">
            {{ c.status }}
          </span>
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          {{ c.lastMsg || '\uC0C8 \uCC44\uD305' }}
        </div>
      </div>
      <div style="font-size:0.75rem;color:var(--text-muted);white-space:nowrap;flex-shrink:0;">
        {{ c.date }}
      </div>
    </div>
    <div v-if="expandedChat===c.chatId" style="padding:0 16px 16px;border-top:1px solid var(--border);">
      <div v-for="(msg, mi) in c.messages" :key="mi"
        style="display:flex;margin-top:10px;"
        :style="msg.from==='user'?'justify-content:flex-end;':''">
        <div style="max-width:75%;padding:10px 14px;border-radius:16px;font-size:0.85rem;line-height:1.5;"
          :style="msg.from==='user'?'background:var(--blue);color:#fff;border-bottom-right-radius:4px;':'background:var(--bg-base);color:var(--text-primary);border-bottom-left-radius:4px;'">
          <div>
            {{ msg.text }}
          </div>
          <div style="font-size:0.72rem;margin-top:4px;text-align:right;"
            :style="msg.from==='user'?'color:rgba(255,255,255,0.7);':'color:var(--text-muted);'">
            {{ msg.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <Pagination :total="chatPager.pageTotalCount" :pager="chatPager" @set-page="onPageChange" />
</fo-my-layout>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
</fo-page>
`,components:{FoPage:window.FoPage,FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination}};
