window.MdSgGenHistListPage={name:"MdSgGenHistListPage",props:{showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(l){const{reactive:i,ref:m,onMounted:h}=Vue,s=i({searchValue:"",projectId:""}),t=i({pageNo:1,pageSize:20,pageTotalCount:0,pageTotalPage:1,pageSizes:[20,50,100]}),n=i([]),c=m(!1),o=async()=>{var e;c.value=!0;try{const a={pageNo:t.pageNo,pageSize:t.pageSize};s.searchValue&&(a.searchValue=s.searchValue),s.projectId&&(a.projectId=s.projectId);const r=((e=(await mdSgApiSvc.genHist.getPage(a,"\uC18C\uC2A4\uC820\uC774\uB825","\uC870\uD68C")).data)==null?void 0:e.data)||{};n.splice(0,n.length,...r.pageList||[]),t.pageTotalCount=r.pageTotalCount||0,t.pageTotalPage=r.pageTotalPage||1}catch(a){l.showToast(coUtil.cofErrMsg(a,"\uC774\uB825 \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{c.value=!1}},u=()=>{t.pageNo=1,o()},f=e=>{t.pageNo=e,o()},v=()=>{t.pageNo=1,o()},b=e=>{e==="list"&&(location.href="fo-md-sg-sourcegen.html?view=list")},g=e=>{e.projectId&&(location.href="fo-md-sg-sourcegen.html?view=editor&projectId="+encodeURIComponent(e.projectId))},d=async e=>{if(await l.showConfirm("\uC774\uB825 \uC0AD\uC81C",`${e.zipFileNm} \uC774\uB825\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await mdSgApiSvc.genHist.remove(e.sourcegenHistId,"\uC18C\uC2A4\uC820\uC774\uB825","\uC0AD\uC81C"),await o(),l.showToast("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(a){l.showToast(coUtil.cofErrMsg(a,"\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},w=[{key:"genDate",label:"\uC0DD\uC131\uC77C\uC2DC",align:"center",fmt:e=>coUtil.cofYmdHm(e)||"-"},{key:"projectNm",label:"\uD504\uB85C\uC81D\uD2B8\uBA85",cellClass:"sg-hist-link",cellTitle:e=>"\uD504\uB85C\uC81D\uD2B8 \uC5F4\uAE30: "+(e||""),fmt:e=>e||"(\uC0AD\uC81C\uB41C \uD504\uB85C\uC81D\uD2B8)"},{key:"zipFileNm",label:"\uD30C\uC77C\uBA85",cellClass:"sg-list-mono"},{key:"basePackage",label:"Base Package",cellClass:"sg-list-mono",fmt:e=>e||"-"},{key:"ddlCount",label:"\uD14C\uC774\uBE14",align:"center",fmt:e=>e||0},{key:"fileCount",label:"\uD30C\uC77C\uC218",align:"center",fmt:e=>e||0},{key:"zipFileSize",label:"\uD06C\uAE30",align:"right",fmt:e=>coUtil.cofFileSize(e)},{key:"genMemo",label:"\uBA54\uBAA8",fmt:e=>e||"-"},{key:"regUserNm",label:"\uC791\uC131\uC790",fmt:(e,a)=>e||a.memberNm||"\uC54C \uC218 \uC5C6\uC74C"},{type:"actions",actions:[{label:"\uB2E4\uC6B4\uB85C\uB4DC",cls:"btn btn_detail",href:e=>e.zipUrl,visible:e=>!!e.zipUrl},{label:"\uC0AD\uC81C",cls:"btn btn_delete",onClick:e=>d(e)}]}],y=(e,a,p)=>{a==="projectNm"&&g(p)};return h(()=>{const a=new URLSearchParams(location.search).get("projectId");a&&(s.projectId=a),o()}),{baseGridColumns:w,searchParam:s,pager:t,rows:n,loading:c,onSearch:u,onSetPage:f,onSizeChange:v,onChangeView:b,onOpenProject:g,onDelete:d,onCellClick:y}},template:`
<div class="sg-page">
  <div class="sg-hero">
    <div class="sg-hero-eyebrow">SOURCE GENERATOR</div>
    <h1 class="sg-hero-title">\u{1F4CE} \uC18C\uC2A4\uC820 \uC0DD\uC131\uC774\uB825</h1>
    <div class="sg-hero-sub">\uC0DD\uC131\uD55C \uC18C\uC2A4 ZIP \uC774 \uCCA8\uBD80\uB85C \uBCF4\uAD00\uB41C \uB0B4\uC5ED\uC785\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uB0B4\uB824\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4</div>
  </div>

  <div class="sg-list-head">
    <div class="sg-search-bar">
      <input v-model="searchParam.searchValue" @keyup.enter="onSearch"
        placeholder="\uD504\uB85C\uC81D\uD2B8\uBA85, \uD30C\uC77C\uBA85, \uBA54\uBAA8, \uD328\uD0A4\uC9C0, \uC791\uC131\uC790\uB85C \uAC80\uC0C9" class="form-control sg-search-input" />
      <button class="btn btn_search" @click="onSearch" :disabled="loading">\uC870\uD68C</button>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <select class="sg-view-select" :value="'hist'" @change="onChangeView($event.target.value)" title="\uD654\uBA74 \uC804\uD658">
        <option value="list">\u{1F4CB} \uBAA9\uB85D</option>
        <option value="hist">\u{1F4CE} \uC774\uB825</option>
      </select>
    </div>
  </div>

  <div class="sg-list-count">
    \uCD1D {{ pager.pageTotalCount }}\uAC1C
    <span v-if="searchParam.projectId" class="sg-badge sg-badge-mono" style="margin-left:6px;">
      #{{ searchParam.projectId }} \uC774\uB825\uB9CC
    </span>
  </div>

  <fo-grid :columns="baseGridColumns" :rows="rows" row-key="sourcegenHistId" :loading="loading"
    list-title="\uC0DD\uC131\uC774\uB825" bare min-width="1100px"
    empty-text="\uBCF4\uAD00\uB41C \uC0DD\uC131\uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uC0C1\uC138\uC5D0\uC11C [\uC18C\uC2A4 \uC0DD\uC131] \uD6C4 [\uC0DD\uC131\uACB0\uACFC \uBCF4\uAD00] \uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC5D0 \uC313\uC785\uB2C8\uB2E4."
    @cell-click="onCellClick" />
  <fo-pager :pager="pager" :on-set-page="onSetPage" :on-size-change="onSizeChange" />
</div>
`};
