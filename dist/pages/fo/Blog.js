window.Blog={name:"Blog",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(p){const{reactive:i,computed:b,onMounted:y}=Vue,r=i({loading:!1,error:null}),n=i({searchValue:"",blogCateId:""}),h={},d=i([{blogCateId:"",blogCateNm:"\uC804\uCCB4",blogCnt:0}]),c=i([]),l=i([]),a=i({pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageType:"PAGE",pageSizes:[5,10,20,30,50,100],pageCond:{}}),u=(e,t={})=>{if(e==="page-goHome")return p.navigate("home");if(e==="category-select")return n.blogCateId=t,a.pageNo=1,s();console.warn("[handleBtnAction] unknown cmd:",e)},x=(e,t={},o={})=>{if(e==="blogs-rowView")return o.ctrlKey||o.metaKey||o.button===1?window.foApp.openNewWindow("blogView",t):p.navigate("blogView",{dtlId:t});if(e==="blogs-pager-setPage")return C(t);if(e==="blogs-pager-sizeChange")return S();console.warn("[handleSelectAction] unknown cmd:",e)},w=e=>{const t=Array.isArray(e.files)&&e.files.length?e.files[0]:null,o=t&&(t.thumbUrl||t.imgUrl)||e.thumbUrl||e.imgUrl||"";return o?coUtil.cofImgSrc(o):""},v=e=>({id:e.blogId,title:e.blogTitle||"",excerpt:e.blogSummary||coUtil.cofStripHtml(e.blogContent,120),author:e.blogAuthor||"",date:coUtil.cofYmd(e.regDate),category:e.blogCateId||"",thumb:w(e),readTime:coUtil.cofReadTime(e.blogContent),viewCount:e.viewCount||0,fileCount:Array.isArray(e.files)?e.files.length:0}),s=async()=>{var e;r.loading=!0;try{const t={...Object.fromEntries(Object.entries(n).filter(([,m])=>m)),pageNo:a.pageNo,pageSize:a.pageSize},g=((e=(await foApiSvc.cmBltn.getPage(t,"\uBE14\uB85C\uADF8","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)||{};a.pageTotalCount=g.pageTotalCount||0,a.pageTotalPage=g.pageTotalPage||1,c.splice(0,c.length,...(g.pageList||[]).map(v)),coUtil.cofBuildPagerNums(a),r.error=null}catch(t){console.error("[handleSearchList]",t),c.splice(0,c.length),r.error=t.message}finally{r.loading=!1}},C=e=>{e>=1&&e<=a.pageTotalPage&&e!==a.pageNo&&(a.pageNo=e,s())},S=()=>{a.pageNo=1,s()},P=async()=>{var e;try{const o=((e=(await foApiSvc.cmBltn.getCate({},"\uBE14\uB85C\uADF8","\uCE74\uD14C\uACE0\uB9AC\uC870\uD68C")).data)==null?void 0:e.data)||[];d.splice(1,d.length-1,...o),d[0].blogCnt=o.reduce((g,m)=>g+(m.blogCnt||0),0)}catch(t){console.error("[loadCategories]",t)}},A=async()=>{var e;try{const o=((e=(await foApiSvc.cmBltn.getPage({pageNo:1,pageSize:4},"\uBE14\uB85C\uADF8","\uCD5C\uC2E0\uAE00\uC870\uD68C")).data)==null?void 0:e.data)||{};l.splice(0,l.length,...(o.pageList||[]).map(v))}catch(t){console.error("[loadLatestPosts]",t),l.splice(0,l.length)}},I=async()=>{a.pageNo=1,await s()},z=async()=>{Object.assign(n,h),a.pageNo=1,await s()},k=b(()=>l);y(async()=>{p.dtlId&&(n.blogCateId=p.dtlId);const e=new URLSearchParams(window.location.search);Object.keys(n).forEach(t=>{e.has(t)&&(n[t]=e.get(t))}),P(),A(),s(),Object.assign(h,n)});const f={};return f.baseSearch=[{key:"searchValue",type:"text",label:"\uAC80\uC0C9",placeholder:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694..."}],{columns:f,handleBtnAction:u,handleSelectAction:x,searchParam:n,uiState:r,pager:a,categories:d,posts:c,latestPosts:l,cfLatestPosts:k,onSearch:I,onReset:z}},template:`
<fo-page title="News &amp; Blog" eyebrow="ShopJoy"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :share-query="searchParam"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'Blog' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <div style="display:flex;justify-content:center;margin-bottom:32px;">
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <fo-search-area bar-style="max-width:640px;width:100%;justify-content:center;"
      :columns="columns.baseSearch" :param="searchParam" :loading="uiState.loading"
      @search="onSearch" @reset="onReset" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uB808\uC774\uC544\uC6C3: \uC0AC\uC774\uB4DC\uBC14 + \uBCF8\uBB38 ========================================= -->
  <div style="display:grid;grid-template-columns:minmax(0,3fr) minmax(0,7fr);gap:clamp(16px,3vw,32px);align-items:start;" class="blog-grid">
    <!-- ===== \u25A0.\u25A0. \uC0AC\uC774\uB4DC\uBC14 ================================================== -->
    <aside>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC ================================================ -->
      <div style="margin-bottom:28px;">
        <h3 style="font-size:0.88rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;padding-bottom:10px;border-bottom:1.5px solid var(--border);">
          Prod Categories
        </h3>
        <ul style="list-style:none;padding:0;margin:0;">
          <li v-for="cat in categories" :key="cat.blogCateId || 'all'"
            @click="handleBtnAction('category-select', cat.blogCateId)"
            :style="{
            display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px',
            padding:'8px 0', cursor:'pointer', fontSize:'0.84rem',
            color: searchParam.blogCateId===cat.blogCateId ? 'var(--blue)' : 'var(--text-secondary)',
            fontWeight: searchParam.blogCateId===cat.blogCateId ? '700' : '400',
            borderLeft: searchParam.blogCateId===cat.blogCateId ? '2px solid var(--blue)' : '2px solid transparent',
            paddingLeft: '12px', transition:'all .15s',
            }">
            <span>{{ cat.blogCateNm }}</span>
            <span style="font-size:0.78rem;color:var(--text-muted);font-weight:400;">({{ cat.blogCnt || 0 }})</span>
          </li>
        </ul>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCD5C\uC2E0 \uAE00 ================================================ -->
      <div>
        <h3 style="font-size:0.88rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;padding-bottom:10px;border-bottom:1.5px solid var(--border);">
          Latest Posts
        </h3>
        <div v-for="p in cfLatestPosts" :key="p.id" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click="handleSelectAction('blogs-rowView', p.id, $event)"
          @auxclick="$event.button===1 ? handleSelectAction('blogs-rowView', p.id, $event) : null"
          style="display:flex;gap:10px;margin-bottom:14px;cursor:pointer;padding:6px 0;"
          @mouseenter="$event.currentTarget.style.opacity='0.7'"
          @mouseleave="$event.currentTarget.style.opacity='1'">
          <div style="width:50px;height:50px;border-radius:6px;flex-shrink:0;overflow:hidden;background:var(--bg-base);">
            <img v-if="p.thumb" :src="p.thumb" style="width:100%;height:100%;object-fit:cover;" />
          </div>
          <div style="min-width:0;">
            <div style="font-size:0.78rem;font-weight:600;color:var(--text-primary);line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              {{ p.title }}
            </div>
            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:3px;">
              {{ p.date }}
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- ===== \u25A1.\u25A1. \uC0AC\uC774\uB4DC\uBC14 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uD3EC\uC2A4\uD2B8 \uBAA9\uB85D ================================================ -->
    <div>
      <div v-for="post in posts" :key="post.id"
        class="card" style="display:flex;flex-wrap:wrap;gap:clamp(12px,2vw,24px);padding:0;margin-bottom:clamp(12px,2vw,24px);overflow:hidden;cursor:pointer;transition:box-shadow .2s;"
        title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click="handleSelectAction('blogs-rowView', post.id, $event)"
        @auxclick="$event.button===1 ? handleSelectAction('blogs-rowView', post.id, $event) : null"
        @mouseenter="$event.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.1)'"
        @mouseleave="$event.currentTarget.style.boxShadow=''">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC378\uB124\uC77C =============================================== -->
        <div style="width:clamp(200px,30%,280px);min-height:180px;flex-shrink:0;overflow:hidden;background:var(--bg-base);">
          <img v-if="post.thumb" :src="post.thumb" :alt="post.title" style="width:100%;height:100%;object-fit:cover;transition:transform .3s;"
            @mouseenter="$event.target.style.transform='scale(1.05)'" @mouseleave="$event.target.style.transform=''" />
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB0B4\uC6A9 ================================================ -->
        <div style="flex:1;min-width:200px;padding:clamp(14px,2vw,24px) clamp(14px,2vw,24px) clamp(14px,2vw,24px) 0;display:flex;flex-direction:column;justify-content:center;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="font-size:0.72rem;color:var(--blue);font-weight:600;">
              {{ categories.find(c => c.blogCateId === post.category)?.blogCateNm || post.category }}
            </span>
          </div>
          <h2 style="font-size:1.1rem;font-weight:800;color:var(--text-primary);margin-bottom:10px;line-height:1.4;">
            {{ post.title }}
          </h2>
          <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
            {{ post.excerpt }}
          </p>
          <div style="display:flex;align-items:center;gap:12px;font-size:0.75rem;color:var(--text-muted);">
            <span>
              By {{ post.author }}
            </span>
            <span>
              \xB7
            </span>
            <span>
              {{ post.date }}
            </span>
            <span>
              \xB7
            </span>
            <span>
              {{ post.readTime }} \uC77D\uAE30
            </span>
            <span v-if="post.fileCount > 0">
              \xB7
            </span>
            <span v-if="post.fileCount > 0" style="display:inline-flex;align-items:center;gap:3px;">
              \u{1F4CE} {{ post.fileCount }}
            </span>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBE48 \uC0C1\uD0DC ================================================ -->
      <div v-if="posts.length === 0" style="text-align:center;padding:60px 0;color:var(--text-muted);">
        <div style="font-size:2rem;margin-bottom:12px;">
          \u{1F4DD}
        </div>
        <div style="font-size:0.95rem;">
          \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ============================================ -->
      <div v-if="posts.length > 0" style="display:flex;justify-content:center;margin-top:24px;">
        <fo-pager :pager="pager"
          :on-set-page="n => handleSelectAction('blogs-pager-setPage', n)"
          :on-size-change="() => handleSelectAction('blogs-pager-sizeChange')" />
      </div>
    </div>
  </div>
</fo-page>
<!-- ===== \u25A1.\u25A1. \uD3EC\uC2A4\uD2B8 \uBAA9\uB85D ================================================ -->
<!-- ===== \u25A1. \uB808\uC774\uC544\uC6C3: \uC0AC\uC774\uB4DC\uBC14 + \uBCF8\uBB38 ========================================= -->
`};
