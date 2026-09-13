window.MdCbPatternListPage={name:"MdCbPatternListPage",props:{showToast:{type:Function,default:()=>{}}},setup(T){const{reactive:o,ref:p,onMounted:g}=Vue,c=o({searchValue:""}),a=o({pageNo:1,pageSize:12,pageTotalCount:0,pageTotalPage:1,pageSizes:[12,24,48]}),r=o([]),i=p(!1),d=p(localStorage.getItem("modu-md-cb-pattern-viewmode")||"list"),u=e=>{d.value=e,localStorage.setItem("modu-md-cb-pattern-viewmode",e)},l=async()=>{var e;i.value=!0;try{const t={pageNo:a.pageNo,pageSize:a.pageSize};c.searchValue&&(t.searchValue=c.searchValue);const s=((e=(await mdCbApiSvc.pattern.getPage(t,"\uCF54\uBC14\uB298\uB3C4\uC548\uBAA9\uB85D","\uC870\uD68C")).data)==null?void 0:e.data)||{};r.splice(0,r.length,...s.pageList||[]),a.pageTotalCount=s.pageTotalCount||0,a.pageTotalPage=s.pageTotalPage||1}finally{i.value=!1}},h=()=>{a.pageNo=1,l()},v=e=>{a.pageNo=e,l()},f=()=>{a.pageNo=1,l()},w=e=>{location.href="fo-md-cb-cobanul.html?view=editor&patternId="+encodeURIComponent(e.patternId)},y=()=>{location.href="fo-md-cb-cobanul.html?view=editor"},b=e=>e?String(e).slice(0,10):"-",C=e=>{let t=0;for(let n=0;n<(e||"").length;n++)t=(t*31+e.charCodeAt(n))%360;return"background:linear-gradient(135deg, hsl("+t+",72%,90%), hsl("+(t+40)%360+",68%,80%));"},S=e=>e.roundDescText&&e.roundDescText.trim()?{icon:"\u{1F300}",label:"\uC6D0\uD615 \uB3C4\uC548",cls:"round"}:Number(e.distinctColorCount)>=2?{icon:"\u{1F3A8}",label:"\uBC30\uC0C9 \uB3C4\uC548",cls:"color"}:{icon:"\u{1F9E9}",label:"\uAE30\uD638 \uB3C4\uC548",cls:"symbol"};return g(()=>{var t,n,s;if(new URLSearchParams(location.search).get("mine")==="1"){const m=(s=(n=(t=window.foAuth)==null?void 0:t.state)==null?void 0:n.user)==null?void 0:s.memberNm;m&&(c.searchValue=m)}l()}),{searchParam:c,pager:a,rows:r,loading:i,onSearch:h,onSetPage:v,onSizeChange:f,onOpen:w,onNew:y,fnFmtDate:b,fnThumbStyle:C,fnPatternType:S,viewMode:d,onSetViewMode:u,baseGridColumns:[{key:"_thumb",label:"",width:"44px"},{key:"patternNm",label:"\uB3C4\uC548\uBA85"},{key:"_size",label:"\uADDC\uACA9",width:"110px",fmt:(e,t)=>t.rowCount+"\uB2E8 \xD7 "+t.maxStitchCount+"\uCF54"},{key:"_author",label:"\uC791\uC131\uC790",width:"120px",fmt:(e,t)=>t.regUserNm||t.memberNm||"\uC54C \uC218 \uC5C6\uC74C"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",width:"100px",fmt:e=>b(e)},{key:"_arrow",label:"",width:"28px",cellClass:"cb-list-table-arrow",fmt:()=>"\u203A"}]}},template:`
<div class="cb-page">
  <div class="cb-hero">
    <div class="cb-hero-eyebrow">CROCHET PATTERN</div>
    <h1 class="cb-hero-title">\u{1F9F6} \uCF54\uBC14\uB298 \uB3C4\uC548</h1>
    <div class="cb-hero-sub">\uAE30\uD638\uB85C \uB3C4\uC548\uC744 \uADF8\uB9AC\uACE0, \uD55C\uAE00 \uC124\uBA85\uAE4C\uC9C0 \uC790\uB3D9\uC73C\uB85C \uC644\uC131\uD574\uBCF4\uC138\uC694</div>
  </div>

  <div class="cb-list-head">
    <div class="cb-search-bar">
      <input v-model="searchParam.searchValue" @keyup.enter="onSearch" placeholder="\uB3C4\uC548\uBA85, \uC124\uBA85, \uC791\uC131\uC790\uB85C \uAC80\uC0C9" class="form-control cb-search-input" />
      <button class="btn btn_search" @click="onSearch" :disabled="loading">\uC870\uD68C</button>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="cb-view-toggle">
        <button :class="{active: viewMode==='list'}" title="\uC77C\uBC18\uBAA9\uB85D" @click="onSetViewMode('list')">\u2630</button>
        <button :class="{active: viewMode==='card'}" title="\uCE74\uB4DC\uD615\uC2DD" @click="onSetViewMode('card')">\u25A6</button>
      </div>
      <button class="btn btn_new" @click="onNew">+ \uC2E0\uADDC \uB3C4\uC548</button>
    </div>
  </div>

  <div class="cb-list-count">\uCD1D {{ pager.pageTotalCount }}\uAC1C \uB3C4\uC548</div>

  <!-- \uCE74\uB4DC\uD615\uC2DD \u2014 fo-grid layout="card" \uC804\uD658(2026-08-25). \uCE74\uB4DC \uB0B4\uC6A9\uC740 \uADF8\uB300\uB85C #card \uC2AC\uB86F\uC73C\uB85C,
       \uCEE8\uD14C\uC774\uB108(\uBC18\uC751\uD615 \uADF8\uB9AC\uB4DC)\xB7\uB85C\uB529\xB7\uBE48\uC0C1\uD0DC\uB294 fo-grid \uAC00 \uB2F4\uB2F9\uD55C\uB2E4. -->
  <fo-grid v-if="viewMode==='card'" layout="card" card-min-width="240px" card-class="cb-pattern-card"
    :columns="baseGridColumns" :rows="rows" row-key="patternId" bare
    :loading="loading" :row-click="onOpen" empty-text="\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
    <template #card="{ row: p }">
      <div class="cb-pattern-thumb" :style="p.thumbnailUrl ? '' : fnThumbStyle(p.patternId)">
        <img v-if="p.thumbnailUrl" :src="p.thumbnailUrl" class="cb-pattern-thumb-img" />
        <span v-else class="cb-pattern-thumb-icon">\u{1F9F6}</span>
      </div>
      <div class="cb-pattern-card-body">
        <div class="cb-pattern-badges">
          <span class="cb-badge cb-badge-mono">#{{ p.patternId }}</span>
          <span class="cb-badge">{{ p.rowCount }}\uB2E8 \xD7 {{ p.maxStitchCount }}\uCF54</span>
          <span class="cb-badge" :class="'cb-badge-' + fnPatternType(p).cls">{{ fnPatternType(p).icon }} {{ fnPatternType(p).label }}</span>
        </div>
        <div class="cb-pattern-card-nm">{{ p.patternNm }}</div>
        <div class="cb-pattern-card-meta">
          <span class="cb-pattern-card-author">\u270D {{ p.regUserNm || p.memberNm || '\uC54C \uC218 \uC5C6\uC74C' }}</span>
          <span class="cb-pattern-card-date">{{ fnFmtDate(p.regDate) }}</span>
        </div>
        <button class="btn btn_detail cb-card-btn" @click.stop="onOpen(p)">\uC0C1\uC138\uBCF4\uAE30</button>
      </div>
    </template>
  </fo-grid>

  <!-- \uC77C\uBC18\uBAA9\uB85D(\uAE30\uBCF8) \u2014 fo-grid \uC804\uD658(2026-08-25). \uD589 \uC804\uCCB4 \uD074\uB9AD\uC740 row-click, \uBC88\uD638\uB294 pager \uB85C \uC790\uB3D9. -->
  <fo-grid v-else :columns="baseGridColumns" :rows="rows" row-key="patternId" :pager="pager"
    bare :row-click="onOpen" empty-text="\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
    <template #cell-_thumb="{ row: p }">
      <div class="cb-list-thumb" :style="p.thumbnailUrl ? '' : fnThumbStyle(p.patternId)">
        <img v-if="p.thumbnailUrl" :src="p.thumbnailUrl" class="cb-list-thumb-img" />
        <span v-else class="cb-list-thumb-icon">\u{1F9F6}</span>
      </div>
    </template>
    <template #cell-patternNm="{ row: p }">
      <span class="cb-list-table-nm">
        {{ p.patternNm }}
        <span class="cb-badge cb-badge-inline" :class="'cb-badge-' + fnPatternType(p).cls">{{ fnPatternType(p).icon }} {{ fnPatternType(p).label }}</span>
      </span>
    </template>
  </fo-grid>

  <fo-pager :pager="pager" :on-set-page="onSetPage" :on-size-change="onSizeChange" />
</div>
`};
