window.MdSgProjectListPage={name:"MdSgProjectListPage",props:{showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(m){const{reactive:n,ref:d,onMounted:u}=Vue,l=n({searchValue:""}),s=n({pageNo:1,pageSize:12,pageTotalCount:0,pageTotalPage:1,pageSizes:[12,24,48]}),i=n([]),r=d(!1),g=d(localStorage.getItem("modu-md-sg-project-viewmode")||"list"),h=e=>{g.value=e,localStorage.setItem("modu-md-sg-project-viewmode",e)},c=async()=>{var e;r.value=!0;try{const t={pageNo:s.pageNo,pageSize:s.pageSize};l.searchValue&&(t.searchValue=l.searchValue);const o=((e=(await mdSgApiSvc.project.getPage(t,"\uC18C\uC2A4\uC820\uBAA9\uB85D","\uC870\uD68C")).data)==null?void 0:e.data)||{};i.splice(0,i.length,...o.pageList||[]),s.pageTotalCount=o.pageTotalCount||0,s.pageTotalPage=o.pageTotalPage||1}catch(t){m.showToast(coUtil.cofErrMsg(t,"\uBAA9\uB85D \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{r.value=!1}},b=()=>{s.pageNo=1,c()},v=e=>{s.pageNo=e,c()},w=()=>{s.pageNo=1,c()},f=e=>{location.href="fo-md-sg-sourcegen.html?view=editor&projectId="+encodeURIComponent(e.projectId)},S=()=>{location.href="fo-md-sg-sourcegen.html?view=editor"},y=e=>{e==="hist"&&(location.href="fo-md-sg-sourcegen.html?view=hist")},j=e=>e?String(e).slice(0,10):"-",C=[{key:"_thumb",label:"",width:"44px",align:"center"},{key:"projectNm",label:"\uD504\uB85C\uC81D\uD2B8\uBA85"},{key:"basePackage",label:"Base Package",width:"220px",cellClass:"sg-list-mono",fmt:e=>e||"-"},{key:"dbTypeCd",label:"DB",width:"90px",fmt:(e,t)=>t.dbTypeCdNm||e||"-"},{key:"ddlCount",label:"\uD14C\uC774\uBE14",width:"80px",align:"center",fmt:e=>e||0},{key:"genHistCount",label:"\uC0DD\uC131\uC774\uB825",width:"80px",align:"center",fmt:e=>e||0},{key:"lastGenDate",label:"\uCD5C\uADFC \uC0DD\uC131",width:"140px",fmt:e=>coUtil.cofYmdHm(e)||"-"},{key:"regUserNm",label:"\uC791\uC131\uC790",width:"120px",fmt:(e,t)=>e||t.memberNm||"\uC54C \uC218 \uC5C6\uC74C"}],N=e=>{let t=0;for(let a=0;a<(e||"").length;a++)t=(t*31+e.charCodeAt(a))%360;return"background:linear-gradient(135deg, hsl("+t+",72%,90%), hsl("+(t+40)%360+",68%,80%));"},k=e=>e.projectStatusCd==="DONE"?{icon:"\u2705",label:e.projectStatusCdNm||"\uC0DD\uC131\uC644\uB8CC",cls:"done"}:{icon:"\u270F\uFE0F",label:e.projectStatusCdNm||"\uC791\uC131\uC911",cls:"draft"};return u(()=>{var t,a,o;if(new URLSearchParams(location.search).get("mine")==="1"){const p=(o=(a=(t=window.foAuth)==null?void 0:t.state)==null?void 0:a.user)==null?void 0:o.memberNm;p&&(l.searchValue=p)}c()}),{baseGridColumns:C,searchParam:l,pager:s,rows:i,loading:r,onSearch:b,onSetPage:v,onSizeChange:w,onOpen:f,onNew:S,onChangeView:y,fnFmtDate:j,fnThumbStyle:N,fnStatusBadge:k,viewMode:g,onSetViewMode:h}},template:`
<div class="sg-page">
  <div class="sg-hero">
    <div class="sg-hero-eyebrow">SOURCE GENERATOR</div>
    <h1 class="sg-hero-title">\u2699\uFE0F \uC18C\uC2A4\uC820 \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D</h1>
    <div class="sg-hero-sub">DDL \uC744 \uB123\uC73C\uBA74 \uBC31\uC5D4\uB4DC\xB7\uD504\uB860\uD2B8\xB7\uD480\uC2A4\uD0DD \uC18C\uC2A4\uB97C \uD55C \uBC88\uC5D0 \uC0DD\uC131\uD569\uB2C8\uB2E4</div>
  </div>

  <div class="sg-list-head">
    <div class="sg-search-bar">
      <input v-model="searchParam.searchValue" @keyup.enter="onSearch" placeholder="\uD504\uB85C\uC81D\uD2B8\uBA85, \uC124\uBA85, \uD328\uD0A4\uC9C0, \uC791\uC131\uC790\uB85C \uAC80\uC0C9" class="form-control sg-search-input" />
      <button class="btn btn_search" @click="onSearch" :disabled="loading">\uC870\uD68C</button>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="sg-view-toggle">
        <button :class="{active: viewMode==='list'}" title="\uC77C\uBC18\uBAA9\uB85D" @click="onSetViewMode('list')">\u2630</button>
        <button :class="{active: viewMode==='card'}" title="\uCE74\uB4DC\uD615\uC2DD" @click="onSetViewMode('card')">\u25A6</button>
      </div>
      <select class="sg-view-select" :value="'list'" @change="onChangeView($event.target.value)" title="\uD654\uBA74 \uC804\uD658">
        <option value="list">\u{1F4CB} \uBAA9\uB85D</option>
        <option value="hist">\u{1F4CE} \uC774\uB825</option>
      </select>
      <button class="btn btn_new" @click="onNew">+ \uC2E0\uADDC \uD504\uB85C\uC81D\uD2B8</button>
    </div>
  </div>

  <div class="sg-list-count">\uCD1D {{ pager.pageTotalCount }}\uAC1C \uD504\uB85C\uC81D\uD2B8</div>

  <!-- \uCE74\uB4DC\uD615\uC2DD -->
  <div v-if="viewMode==='card'" class="sg-card-grid">
    <div v-for="p in rows" :key="p.projectId" class="sg-project-card" @click="onOpen(p)">
      <div class="sg-project-thumb" :style="p.thumbnailUrl ? '' : fnThumbStyle(p.projectId)">
        <img v-if="p.thumbnailUrl" :src="p.thumbnailUrl" class="sg-project-thumb-img" />
        <span v-else class="sg-project-thumb-icon">\u2699\uFE0F</span>
      </div>
      <div class="sg-project-card-body">
        <div class="sg-project-badges">
          <span class="sg-badge sg-badge-mono">#{{ p.projectId }}</span>
          <span class="sg-badge">{{ p.ddlCount || 0 }}\uAC1C \uD14C\uC774\uBE14</span>
          <span class="sg-badge" :class="'sg-badge-' + fnStatusBadge(p).cls">{{ fnStatusBadge(p).icon }} {{ fnStatusBadge(p).label }}</span>
        </div>
        <div class="sg-project-card-nm">{{ p.projectNm }}</div>
        <div class="sg-project-card-pkg">{{ p.basePackage || '(\uD328\uD0A4\uC9C0 \uBBF8\uC9C0\uC815)' }} \xB7 {{ p.dbTypeCdNm || p.dbTypeCd }}</div>
        <div class="sg-project-card-meta">
          <span class="sg-project-card-author">\u270D {{ p.regUserNm || p.memberNm || '\uC54C \uC218 \uC5C6\uC74C' }}</span>
          <span class="sg-project-card-date">{{ fnFmtDate(p.regDate) }}</span>
        </div>
        <button class="btn btn_detail sg-card-btn" @click.stop="onOpen(p)">\uC0C1\uC138\uBCF4\uAE30</button>
      </div>
    </div>
    <div v-if="!loading && !rows.length" class="sg-empty-hint" style="grid-column:1/-1;">\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
  </div>

  <!-- \uC77C\uBC18\uBAA9\uB85D(\uAE30\uBCF8) -->
  <div v-else class="sg-list-table-wrap">
    <fo-grid :columns="baseGridColumns" :rows="rows" row-key="projectId" :loading="loading"
      list-title="\uD504\uB85C\uC81D\uD2B8\uBAA9\uB85D" bare min-width="1000px" :row-click="onOpen"
      empty-text="\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
      <!-- \uC378\uB124\uC77C: \uC774\uBBF8\uC9C0 + \uC5C6\uC744 \uB54C \uD504\uB85C\uC81D\uD2B8ID \uD574\uC2DC \uADF8\uB77C\uB370\uC774\uC158 \u2014 \uB2E8\uC21C fmt \uB85C\uB294 \uD45C\uD604 \uBD88\uAC00\uB77C \uC2AC\uB86F \uC720\uC9C0 -->
      <template #cell-_thumb="{ row }">
        <div class="sg-list-thumb" :style="row.thumbnailUrl ? '' : fnThumbStyle(row.projectId)">
          <img v-if="row.thumbnailUrl" :src="row.thumbnailUrl" class="sg-list-thumb-img" />
          <span v-else class="sg-list-thumb-icon">\u2699\uFE0F</span>
        </div>
      </template>
      <!-- \uD504\uB85C\uC81D\uD2B8\uBA85 + \uC0C1\uD0DC \uBC30\uC9C0(\uC544\uC774\uCF58\xB7\uB77C\uBCA8\xB7\uC0C9 3\uC694\uC18C) -->
      <template #cell-projectNm="{ row }">
        <span class="sg-list-table-nm">{{ row.projectNm }}</span>
        <span class="sg-badge sg-badge-inline" :class="'sg-badge-' + fnStatusBadge(row).cls">
          {{ fnStatusBadge(row).icon }} {{ fnStatusBadge(row).label }}
        </span>
      </template>
    </fo-grid>
  </div>

  <fo-pager :pager="pager" :on-set-page="onSetPage" :on-size-change="onSizeChange" />
</div>
`};
