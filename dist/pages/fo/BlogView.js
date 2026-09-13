window.BlogView={name:"BlogView",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(l){const{ref:b,reactive:n,computed:d,onMounted:u,watch:w}=Vue,V=n({loading:!1,error:null}),s=n([]),p=n([]),g=n([]),m=n([]),i=n({openId:null,loading:!1,posts:[]}),k=(t,e={})=>{if(t==="page-goBlogList")return l.navigate("blog");if(t==="category-select")return I(e);if(t==="category-viewAll")return l.navigate("blog",{dtlId:e||""});if(t==="comments-add")return S();console.warn("[handleBtnAction] unknown cmd:",t)},z=(t,e={})=>{if(t==="blogs-rowView")return l.navigate("blogView",{dtlId:e});console.warn("[handleSelectAction] unknown cmd:",t)},v=t=>{const e=Array.isArray(t.files)&&t.files.length?t.files[0]:null,o=e&&(e.thumbUrl||e.imgUrl)||"";return{id:t.blogId,title:t.blogTitle||"",author:t.blogAuthor||"",date:coUtil.cofYmdDot(t.regDate||""),imgSm:o?coUtil.cofImgSrc(o):"",img:o?coUtil.cofImgSrc(o):""}},x=async()=>{var t;try{const o=((t=(await foApiSvc.cmBltn.getById(l.dtlId,"\uBE14\uB85C\uADF8\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:t.data)||null;s.splice(0,s.length,...o?[o]:[]),o&&B(o.blogCateId)}catch(e){console.error("[handleSearchData]",e),s.splice(0,s.length)}},A=async()=>{var t;try{const e=await foApiSvc.cmBltn.getCate({},"\uBE14\uB85C\uADF8\uC0C1\uC138","\uCE74\uD14C\uACE0\uB9AC\uC870\uD68C");p.splice(0,p.length,...((t=e.data)==null?void 0:t.data)||[])}catch(e){console.error("[loadCategories]",e)}},h=async()=>{var t,e;try{const r=(((e=(t=(await foApiSvc.cmBltn.getPage({pageNo:1,pageSize:5},"\uBE14\uB85C\uADF8\uC0C1\uC138","\uCD5C\uC2E0\uAE00\uC870\uD68C")).data)==null?void 0:t.data)==null?void 0:e.pageList)||[]).map(v).filter(a=>a.id!==l.dtlId).slice(0,4);g.splice(0,g.length,...r)}catch(o){console.error("[loadLatest]",o)}},B=async t=>{var e,o;try{const r={pageNo:1,pageSize:6};t&&(r.blogCateId=t);const j=(((o=(e=(await foApiSvc.cmBltn.getPage(r,"\uBE14\uB85C\uADF8\uC0C1\uC138","\uAD00\uB828\uAE00\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:o.pageList)||[]).map(v).filter(L=>L.id!==l.dtlId).slice(0,3);m.splice(0,m.length,...j)}catch(r){console.error("[loadRelated]",r)}},I=async t=>{var e,o;if(i.openId===t){i.openId=null,i.posts.splice(0,i.posts.length);return}i.openId=t,i.loading=!0,i.posts.splice(0,i.posts.length);try{const a=(((o=(e=(await foApiSvc.cmBltn.getPage({pageNo:1,pageSize:10,blogCateId:t},"\uBE14\uB85C\uADF8\uC0C1\uC138","\uCE74\uD14C\uACE0\uB9AC\uAE00\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:o.pageList)||[]).map(v);i.posts.splice(0,i.posts.length,...a)}catch(r){console.error("[toggleCatExpand]",r)}finally{i.loading=!1}},c=d(()=>{var o,r;const t=s.length>0?s[0]:null;if(!t)return{id:"",title:"",category:"",author:"",date:"",readTime:"",tags:[],files:[],viewCount:0,img:"",imgMid:"",body:"",comments:[]};const e=t.files||[];return{id:t.blogId,title:t.blogTitle||"",category:t.blogCateId||"",author:t.blogAuthor||"",date:coUtil.cofYmdDot(t.regDate||""),readTime:"",viewCount:t.viewCount||0,body:String(t.blogContent||t.blogSummary||"").replace(/(src|href)=(['"])\/cdn\//g,"$1=$2assets/cdn/"),img:(o=e[0])!=null&&o.imgUrl?coUtil.cofImgSrc(e[0].imgUrl):"",imgMid:(r=e[1])!=null&&r.imgUrl?coUtil.cofImgSrc(e[1].imgUrl):"",files:e,tags:(t.tags||[]).map(a=>a.tagNm).filter(Boolean),comments:(t.replies||[]).map(a=>({id:a.blogReplyId,author:a.writerNm||a.writerId||"\uC775\uBA85",date:coUtil.cofYmdDot(a.regDate||""),text:a.blogCommentContent||""}))}}),P=d(()=>(c.value.body||"").split(`

`).filter(Boolean)),f=b(""),y=n([]),C=d(()=>[...c.value.comments||[],...y]),S=()=>{const t=f.value.trim();t&&(y.push({id:Date.now(),author:"\uD64D\uAE38\uB3D9",date:coUtil.cofYmdDot(new Date().toISOString()),text:t}),f.value="")},U=n({searchValue:""}),T=d(()=>(c.value.comments||[]).slice(-3).reverse());return u(async()=>{if(!l.dtlId){l.navigate("blog");return}await x(),await A(),await h()}),w(()=>l.dtlId,()=>{x(),h()}),{handleBtnAction:k,handleSelectAction:z,cfPost:c,cfBodyParagraphs:P,cfAllComments:C,latestPosts:g,relatedPosts:m,cfRecentComments:T,catExpand:i,commentText:f,searchParam:U,categories:p}},template:`
<fo-page>
  <!-- ===== \u25A0. \u2550\u2550 2\uCEEC\uB7FC \uB808\uC774\uC544\uC6C3 \u2550\u2550 ========================================== -->
  <div style="display:grid;grid-template-columns:minmax(0,7fr) minmax(0,3fr);gap:clamp(20px,4vw,48px);align-items:start;" class="blog-view-grid">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uBCF8\uBB38 \uC601\uC5ED ============================================== -->
    <div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB4A4\uB85C ================================================== -->
      <button @click="handleBtnAction('page-goBlogList')"
        style="display:flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.8rem;margin-bottom:20px;padding:0;">
        \u2190 \uBE14\uB85C\uADF8 \uBAA9\uB85D\uC73C\uB85C
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC + \uBA54\uD0C0 =========================================== -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:0.75rem;">
        <span style="background:var(--blue);color:#fff;padding:2px 10px;border-radius:2px;font-weight:600;">
          {{ cfPost.category }}
        </span>
        <span style="color:var(--text-muted);">
          By
          <strong style="color:var(--text-secondary);">
            {{ cfPost.author }}
          </strong>
        </span>
        <span style="color:var(--text-muted);">
          \xB7
        </span>
        <span style="color:var(--text-muted);">
          {{ cfPost.date }}
        </span>
        <span style="color:var(--text-muted);">
          \xB7
        </span>
        <span style="color:var(--text-muted);">
          {{ cfPost.readTime }} \uC77D\uAE30
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC81C\uBAA9 ================================================== -->
      <h1 style="font-size:1.8rem;font-weight:900;color:var(--text-primary);line-height:1.35;margin-bottom:24px;">
        {{ cfPost.title }}
      </h1>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD788\uC5B4\uB85C \uC774\uBBF8\uC9C0 ============================================= -->
      <div v-if="cfPost.img" style="width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:4px;margin-bottom:28px;background:var(--bg-base);">
        <img :src="cfPost.img" :alt="cfPost.title" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBCF8\uBB38 \uCCAB \uB2E8\uB77D ============================================= -->
      <div v-if="cfBodyParagraphs[0]"
        style="font-size:0.92rem;color:var(--text-secondary);line-height:1.95;margin-bottom:24px;"
        v-html="cfBodyParagraphs[0]">
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC911\uAC04 \uC774\uBBF8\uC9C0 ============================================== -->
      <div v-if="cfPost.imgMid" style="width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:4px;margin-bottom:24px;background:var(--bg-base);">
        <img :src="cfPost.imgMid" :alt="cfPost.title" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB098\uBA38\uC9C0 \uBCF8\uBB38 \uB2E8\uB77D =========================================== -->
      <div v-for="(para, i) in cfBodyParagraphs.slice(1)" :key="i"
        style="font-size:0.92rem;color:var(--text-secondary);line-height:1.95;margin-bottom:20px;"
        v-html="para">
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD0DC\uADF8 + \uACF5\uC720 ============================================= -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:20px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:36px;">
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          <span style="font-size:0.78rem;font-weight:600;color:var(--text-muted);margin-right:4px;">
            Tags:
          </span>
          <span v-for="tag in cfPost.tags" :key="tag"
            style="padding:3px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:2px;font-size:0.75rem;color:var(--text-secondary);cursor:pointer;">
            #{{ tag }}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:0.78rem;font-weight:600;color:var(--text-muted);">
            Share:
          </span>
          <a href="#" style="width:30px;height:30px;border-radius:50%;background:#1877f2;display:flex;align-items:center;justify-content:center;text-decoration:none;"
            @click.prevent>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
              </path>
            </svg>
          </a>
          <a href="#" style="width:30px;height:30px;border-radius:50%;background:#1da1f2;display:flex;align-items:center;justify-content:center;text-decoration:none;"
            @click.prevent>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
              </path>
            </svg>
          </a>
          <a href="#" style="width:30px;height:30px;border-radius:50%;background:#e60023;display:flex;align-items:center;justify-content:center;text-decoration:none;"
            @click.prevent>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCCA8\uBD80 \uD30C\uC77C =============================================== -->
      <div v-if="cfPost.files?.length" style="margin-bottom:36px;">
      <h3 style="font-size:0.95rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;">
        \uCCA8\uBD80 ({{ cfPost.files.length }})
      </h3>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a v-for="f in cfPost.files" :key="f.blogFileId" :href="f.imgUrl" target="_blank" rel="noopener"
            style="display:flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid var(--border);border-radius:4px;font-size:0.8rem;color:var(--text-secondary);text-decoration:none;background:var(--bg-card);">
          <span>
            \u{1F4CE}
          </span>
          <span>
            {{ f.imgAltText || f.imgUrl }}
          </span>
        </a>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uB313\uAE00 ================================================== -->
    <div style="margin-bottom:40px;">
      <h3 style="font-size:1rem;font-weight:700;color:var(--text-primary);margin-bottom:20px;padding-bottom:10px;border-bottom:2px solid var(--blue);">
        \uB313\uAE00
        <span style="color:var(--blue);">
          ({{ cfAllComments.length }})
        </span>
      </h3>
      <div v-for="c in cfAllComments" :key="c.id" style="padding:16px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:0.82rem;font-weight:700;color:var(--blue);flex-shrink:0;">
            {{ c.author[0] }}
          </div>
          <div>
            <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);">
              {{ c.author }}
            </div>
            <div style="font-size:0.72rem;color:var(--text-muted);">
              {{ c.date }}
            </div>
          </div>
        </div>
        <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;padding-left:46px;">
          {{ c.text }}
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB313\uAE00 \uC785\uB825 ============================================= -->
      <div style="margin-top:24px;">
        <h4 style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:12px;">
          \uB313\uAE00 \uB0A8\uAE30\uAE30
        </h4>
        <div style="display:flex;gap:10px;">
          <input v-model="commentText" type="text" placeholder="\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694..."
              @keyup.enter="handleBtnAction('comments-add')"
              style="flex:1;padding:11px 14px;border:1.5px solid var(--border);border-radius:4px;font-size:0.85rem;outline:none;background:var(--bg-card);color:var(--text-primary);" />
          <button class="btn-blue" @click="handleBtnAction('comments-add')" style="padding:11px 20px;font-size:0.85rem;white-space:nowrap;border-radius:4px;">
            \uB4F1\uB85D
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC88C: \uBCF8\uBB38 \uC601\uC5ED ============================================== -->
  <!-- ===== \u25A0.\u25A0. \uC6B0: \uC0AC\uC774\uB4DC\uBC14 =============================================== -->
  <div style="position:sticky;top:80px;display:flex;flex-direction:column;gap:clamp(16px,2.5vw,32px);">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uAC80\uC0C9 (Enter \u2192 \uBAA9\uB85D \uD654\uBA74\uC73C\uB85C \uC774\uB3D9) ============================ -->
    <div>
      <div style="position:relative;">
        <input v-model="searchParam.searchValue" type="text" placeholder="\uBE14\uB85C\uADF8 \uAC80\uC0C9..."
            @keyup.enter="handleBtnAction('page-goBlogList')"
            style="width:100%;padding:10px 42px 10px 14px;border:1.5px solid var(--border);border-radius:4px;font-size:0.85rem;outline:none;background:var(--bg-card);color:var(--text-primary);box-sizing:border-box;" />
        <span @click="handleBtnAction('page-goBlogList')"
            style="position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);cursor:pointer;">
          \u{1F50D}
        </span>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC (\uC2E4 cm_blog_cate + count, \uD074\uB9AD \u2192 \uBAA9\uB85D \uD544\uD130) ============ -->
    <div>
      <h4 style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--blue);">
        \uCE74\uD14C\uACE0\uB9AC
      </h4>
      <div style="display:flex;flex-direction:column;gap:0;">
        <template v-for="cat in categories" :key="cat.blogCateId">
          <!-- \uCE74\uD14C\uACE0\uB9AC \uD589 (\uD074\uB9AD \u2192 \uD3BC\uCE68 \uD1A0\uAE00) -->
          <div @click="handleBtnAction('category-select', cat.blogCateId)"
              :style="{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'9px 0', borderBottom:'1px solid var(--border)', cursor:'pointer', color: catExpand.openId===cat.blogCateId ? 'var(--blue)' : '' }"
              @mouseenter="$event.currentTarget.style.color='var(--blue)'"
              @mouseleave="$event.currentTarget.style.color = (catExpand.openId===cat.blogCateId ? 'var(--blue)' : '')">
            <span style="font-size:0.85rem;display:inline-flex;align-items:center;gap:6px;">
              <span style="font-size:0.7rem;transition:transform .15s;" :style="{ transform: catExpand.openId===cat.blogCateId ? 'rotate(90deg)' : 'rotate(0)' }">\u25B6</span>
              {{ cat.blogCateNm }}
            </span>
            <span style="font-size:0.75rem;color:var(--text-muted);">
              ({{ cat.blogCnt || 0 }})
            </span>
          </div>
          <!-- \uD3BC\uCE68 \uD328\uB110: \uD574\uB2F9 \uCE74\uD14C\uACE0\uB9AC \uAE00 \uBAA9\uB85D (API \uC870\uD68C \uACB0\uACFC) -->
          <div v-if="catExpand.openId===cat.blogCateId"
              style="padding:6px 0 10px 16px;border-bottom:1px solid var(--border);background:var(--bg-base);">
            <div v-if="catExpand.loading" style="font-size:0.78rem;color:var(--text-muted);padding:6px 0;">
              \uBD88\uB7EC\uC624\uB294 \uC911\u2026
            </div>
            <template v-else>
              <div v-for="cp in catExpand.posts" :key="cp.id"
                  @click.stop="handleSelectAction('blogs-rowView', cp.id)"
                  style="display:flex;gap:8px;align-items:center;padding:6px 0;cursor:pointer;"
                  @mouseenter="$event.currentTarget.style.opacity='0.7'"
                  @mouseleave="$event.currentTarget.style.opacity='1'">
                <div style="width:34px;height:34px;border-radius:4px;overflow:hidden;flex-shrink:0;background:var(--bg-card);">
                  <img v-if="cp.imgSm" :src="cp.imgSm" :alt="cp.title" style="width:100%;height:100%;object-fit:cover;" />
                </div>
                <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
                  {{ cp.title }}
                </div>
              </div>
              <div v-if="catExpand.posts.length===0" style="font-size:0.78rem;color:var(--text-muted);padding:6px 0;">
                \uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
              </div>
              <div v-if="catExpand.posts.length>0" @click.stop="handleBtnAction('category-viewAll', cat.blogCateId)"
                  style="font-size:0.75rem;color:var(--blue);cursor:pointer;padding:8px 0 2px;font-weight:600;">
                \uC804\uCCB4\uBCF4\uAE30 \u2192
              </div>
            </template>
          </div>
        </template>
        <div v-if="categories.length === 0" style="font-size:0.82rem;color:var(--text-muted);padding:9px 0;">
          \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. Latest Posts ======================================== -->
    <div>
      <h4 style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--blue);">
        Latest Posts
      </h4>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div v-for="lp in latestPosts" :key="lp.id"
            style="display:flex;gap:12px;cursor:pointer;"
            @click="handleSelectAction('blogs-rowView', lp.id)">
          <div style="width:64px;height:64px;border-radius:4px;overflow:hidden;flex-shrink:0;background:var(--bg-base);">
            <img v-if="lp.imgSm" :src="lp.imgSm" :alt="lp.title" style="width:100%;height:100%;object-fit:cover;" />
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:0.82rem;font-weight:600;color:var(--text-primary);line-height:1.4;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              {{ lp.title }}
            </div>
            <div style="font-size:0.72rem;color:var(--text-muted);">
              {{ lp.date }}
            </div>
          </div>
        </div>
        <div v-if="latestPosts.length === 0" style="font-size:0.82rem;color:var(--text-muted);">
          \uCD5C\uC2E0 \uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. Recent Comments ===================================== -->
    <div>
      <h4 style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--blue);">
        Recent Comments
      </h4>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div v-for="c in cfRecentComments" :key="c.id" style="display:flex;gap:10px;align-items:flex-start;">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:var(--blue);flex-shrink:0;">
            {{ c.author[0] }}
          </div>
          <div>
            <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5;">
              {{ c.text.slice(0,40) }}{{ c.text.length>40?'\u2026':'' }}
            </div>
            <div style="font-size:0.7rem;color:var(--text-muted);margin-top:2px;">
              {{ c.author }} \xB7 {{ c.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC6B0: \uC0AC\uC774\uB4DC\uBC14 =============================================== -->
<!-- ===== \u25A1. \u2550\u2550 2\uCEEC\uB7FC \uB808\uC774\uC544\uC6C3 \u2550\u2550 ========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uD558\uB2E8: You Might Also Like \u2550\u2550 =========================== -->
<div v-if="relatedPosts.length" style="margin-top:64px;padding-top:40px;border-top:1px solid var(--border);">
  <h2 style="font-size:1.3rem;font-weight:800;color:var(--text-primary);margin-bottom:28px;text-align:center;">
    You Might Also Like
  </h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:clamp(14px,2vw,28px);">
    <div v-for="rp in relatedPosts" :key="rp.id"
        style="cursor:pointer;transition:transform .25s;"
        @mouseenter="$event.currentTarget.style.transform='translateY(-4px)'"
        @mouseleave="$event.currentTarget.style.transform=''"
        @click="handleSelectAction('blogs-rowView', rp.id)">
      <div style="aspect-ratio:4/3;overflow:hidden;border-radius:4px;margin-bottom:14px;background:var(--bg-base);">
        <img v-if="rp.img" :src="rp.img" :alt="rp.title"
            style="width:100%;height:100%;object-fit:cover;transition:transform .35s;"
            @mouseenter="$event.target.style.transform='scale(1.04)'"
            @mouseleave="$event.target.style.transform=''" />
      </div>
      <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
        {{ rp.date }}
      </div>
      <h3 style="font-size:0.95rem;font-weight:700;color:var(--text-primary);line-height:1.4;margin-bottom:6px;">
        {{ rp.title }}
      </h3>
      <div style="font-size:0.78rem;color:var(--text-muted);">
        By {{ rp.author }}
      </div>
    </div>
  </div>
</div>
</fo-page>
<!-- ===== \u25A1. \u2550\u2550 \uD558\uB2E8: You Might Also Like \u2550\u2550 =========================== -->
`};
