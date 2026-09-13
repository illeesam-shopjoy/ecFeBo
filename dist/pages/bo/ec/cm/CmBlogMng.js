window.CmBlogMng={name:"CmBlogMng",props:{navigate:{type:Function,required:!0}},setup(ue){const{ref:pe,reactive:g,computed:I,watch:fe,onMounted:D}=Vue,d=window.boApp.showToast,x=window.boApp.showConfirm,y=g([]),c=g({loading:!1,error:null,selectedId:null,sortKey:"",sortDir:"asc"}),b=g({OPEN_YN:[],NOTICE_YN:[],BLOG_TYPE:[]}),N={nm:{asc:"blogTitle asc",desc:"blogTitle desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},M=(e,t={})=>{if(e==="searchParam-list")return r.pageNo=1,w("SEARCH");if(e==="searchParam-reset")return Object.assign(m,B),c.sortKey="",c.sortDir="asc",r.pageNo=1,T(),w("SEARCH");if(e==="blogs-add")return q();if(e==="detailPanel-save")return W();if(e==="detailPanel-delete")return J();if(e==="detailPanel-close")return k();if(e==="detailPanel-edit")return $();if(e==="detailPanel-cancel")return H();if(e==="blogs-sort")return F(t);if(e==="blogs-pager-setPage")return V(t);if(e==="attach-add")return X();console.warn("[handleBtnAction] unknown cmd:",e)},A=(e,t={})=>{if(e==="blogs-pager-sizeChange")return z();if(e==="blogs-rowToggleUse")return Q(t);if(e==="blogs-rowDelete")return G(t);if(e==="attach-deleteChecked")return Z();if(e==="attach-cancelChecked")return ee();if(e==="attach-reorder")return te(t);console.warn("[handleSelectAction] unknown cmd:",e)},S=(e,t,l,s={})=>{if(e==="blogs-cellClick"){if(t==="btn_row_edit")return K(l);const a=["__no__"];if(s.col&&s.col.link||a.includes(t))return U(l)}else{if(e==="attach-cellChange")return le(l,t);console.warn("[handleGridCellAction] unknown cmd:",e)}},m=g({searchType:"",searchValue:"",useYn:"",isNotice:"",blogTypeCd:""}),B={},r=g({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),C=()=>({blogId:null,siteId:null,blogCateId:null,blogTypeCd:"BLOG",blogTitle:"",blogSummary:"",blogContent:"",blogAuthor:"",viewCount:0,useYn:"Y",isNotice:"N"}),o=g({show:!0,active:!1,isNew:!1,dtlMode:"view",dtlId:null,form:C()}),h=g({}),R=I(()=>o.dtlMode==="view"),n=g([]),u=g({focusedIdx:null,checkAll:!1});let j=-1;const O=()=>{const{sortKey:e,sortDir:t}=c;return!e||!N[e]?{}:{sort:N[e][t]}},F=e=>{c.sortKey===e?c.sortDir==="asc"?c.sortDir="desc":(c.sortKey="",c.sortDir="asc"):(c.sortKey=e,c.sortDir="asc"),r.pageNo=1,w()},w=async(e="DEFAULT")=>{var t;c.loading=!0;try{const l={pageNo:r.pageNo,pageSize:r.pageSize,...O(),...coUtil.cofOmitEmpty(m)};l.searchValue&&!l.searchType&&(l.searchType="blogTitle,blogAuthor");const a=(t=(await boApiSvc.cmBlog.getPage(l,"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;y.splice(0,y.length,...(a==null?void 0:a.pageList)||[]),r.pageTotalCount=(a==null?void 0:a.pageTotalCount)||0,r.pageTotalPage=(a==null?void 0:a.pageTotalPage)||coUtil.cofTotalPage(r),coUtil.cofBuildPagerNums(r),Object.assign(r.pageCond,(a==null?void 0:a.pageCond)||r.pageCond),c.error=null}catch(l){console.error("[catch-info]",l),c.error=l.message}finally{c.loading=!1}},V=e=>{e>=1&&e<=r.pageTotalPage&&(r.pageNo=e,w("PAGE_CLICK"))},z=()=>{r.pageNo=1,w("DEFAULT")},T=()=>{Object.assign(o.form,C()),o.dtlId=null,o.isNew=!1,o.show=!0,o.active=!1,o.dtlMode="view",n.splice(0,n.length),u.focusedIdx=null,u.checkAll=!1,Object.keys(h).forEach(e=>delete h[e])},Y=e=>{const t=(Array.isArray(e)?e:[]).map(l=>{var s;return{blogFileId:l.blogFileId,blogId:l.blogId,imgUrl:l.imgUrl||"",thumbUrl:l.thumbUrl||"",imgAltText:l.imgAltText||"",sortOrd:(s=l.sortOrd)!=null?s:0,_row_status:"N",_row_check:!1,_row_org:null}});t.forEach(l=>{l._row_org={...l}}),n.splice(0,n.length,...t),u.focusedIdx=null,u.checkAll=!1},E=(e,t)=>{Object.assign(o.form,C(),{...e}),o.form.blogContent=coUtil.cofHtmlCdnToAsset(o.form.blogContent),o.dtlId=e.blogId,o.isNew=!1,o.show=!0,o.active=!0,o.dtlMode=t,Y(e.files),Object.keys(h).forEach(l=>delete h[l])},U=e=>E(e,"view"),K=e=>E(e,"edit"),$=()=>{o.dtlMode="edit"},q=()=>{Object.assign(o.form,C()),o.dtlId="__new__",o.isNew=!0,o.show=!0,o.active=!0,o.dtlMode="edit",Y([]),Object.keys(h).forEach(e=>delete h[e])},k=()=>{T()},H=()=>{if(o.isNew)return k();const e=P.value;return e?U(e):k()},W=async()=>{var l,s,a,i,_,L;if(Object.keys(h).forEach(p=>delete h[p]),!o.form.blogTitle){h.blogTitle="\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",d("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const e=o.isNew;if(await x("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const p={...o.form,blogContent:coUtil.cofHtmlAssetToCdn(o.form.blogContent)},f=await(e?boApiSvc.cmBlog.create(p,"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.cmBlog.update(o.form.blogId,p,"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uC800\uC7A5")),be=((s=(l=f==null?void 0:f.data)==null?void 0:l.data)==null?void 0:s.blogId)||o.form.blogId,he=((i=(a=f==null?void 0:f.data)==null?void 0:a.data)==null?void 0:i.siteId)||o.form.siteId;await oe(be,he),d&&d("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),T(),await w()}catch(p){console.error("[catch-info]",p);const f=((L=(_=p.response)==null?void 0:_.data)==null?void 0:L.message)||p.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";d&&d(f,"error",0)}},J=async()=>{if(P.value)return G(P.value)},G=async e=>{var s,a;if(!e||!e.blogId||!await x("\uC0AD\uC81C",`[${e.blogTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const l=y.findIndex(i=>i.blogId===e.blogId);l!==-1&&y.splice(l,1),o.dtlId===e.blogId&&k();try{const i=await boApiSvc.cmBlog.remove(e.blogId,"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uC0AD\uC81C");d&&d("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(i){console.error("[catch-info]",i);const _=((a=(s=i.response)==null?void 0:s.data)==null?void 0:a.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";d&&d(_,"error",0)}},Q=async e=>{var s,a;const t=e.useYn==="Y"?"N":"Y";if(await x("\uACF5\uAC1C\uC124\uC815",`[${e.blogTitle}]\uC744 ${t==="Y"?"\uACF5\uAC1C":"\uBE44\uACF5\uAC1C"} \uCC98\uB9AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){e.useYn=t,o.form.blogId===e.blogId&&(o.form.useYn=t);try{const i=await boApiSvc.cmBlog.setUse(e.blogId,{useYn:t},"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uC0C1\uD0DC\uBCC0\uACBD");d&&d("\uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(i){console.error("[catch-info]",i);const _=((a=(s=i.response)==null?void 0:s.data)==null?void 0:a.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";d&&d(_,"error",0)}}},X=()=>{const e={blogFileId:j--,blogId:o.form.blogId||null,imgUrl:"",thumbUrl:"",imgAltText:"",sortOrd:n.length+1,_row_status:"I",_row_check:!1,_row_org:null},t=u.focusedIdx!==null?u.focusedIdx+1:n.length;n.splice(t,0,e),u.focusedIdx=t},Z=()=>{for(let e=n.length-1;e>=0;e--)n[e]._row_check&&(n[e]._row_status==="I"?n.splice(e,1):n[e]._row_status="D");u.checkAll=!1},ee=()=>{for(let e=n.length-1;e>=0;e--){const t=n[e];t._row_check&&(t._row_status==="I"?n.splice(e,1):t._row_org&&(Object.assign(t,t._row_org),t._row_status="N",t._row_check=!1))}u.checkAll=!1},te=()=>{n.forEach((e,t)=>{const l=t+1;e.sortOrd!==l&&(e.sortOrd=l,e._row_status==="N"&&(e._row_status="U"))})},le=()=>{},oe=async(e,t)=>{const l=n.filter(a=>a._row_status==="I"||a._row_status==="U"||a._row_status==="D");if(!l.length)return;const s=l.map(a=>({blogFileId:a._row_status==="I"?null:a.blogFileId,blogId:e,siteId:t,imgUrl:a.imgUrl,thumbUrl:a.thumbUrl||a.imgUrl,imgAltText:a.imgAltText,sortOrd:a.sortOrd,rowStatus:a._row_status}));await boApiSvc.cmBlogFile.saveList("base",s,"\uBE14\uB85C\uADF8\uAD00\uB9AC","\uCCA8\uBD80\uC800\uC7A5")},ae=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["BLOG_TYPE","OPEN_YN","NOTICE_YN"],{compNm:"CmBlogMng"}),b.BLOG_TYPE=e.sgGetGrpCodes("BLOG_TYPE"),b.OPEN_YN=e.sgGetGrpCodes("OPEN_YN"),b.NOTICE_YN=e.sgGetGrpCodes("NOTICE_YN")};D(async()=>{await ae();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(m).forEach(l=>{!t.includes(l)&&e.has(l)&&(m[l]=e.get(l))}),await w("DEFAULT"),Object.assign(B,m)});const P=I(()=>y.find(e=>e.blogId===o.dtlId)||null),se=e=>e==="Y"?"badge-green":"badge-gray",ne=e=>(b.BLOG_TYPE.find(t=>t.codeValue===e)||{}).codeLabel||e||"-",ce=e=>e==="NEWS"?"badge-blue":"badge-purple",re=e=>{const t=Array.isArray(e.files)&&e.files.length?e.files[0]:null,l=t&&(t.thumbUrl||t.imgUrl)||"";return l?coUtil.cofImgSrc(l):""},ie=e=>{const t=e&&(e.thumbUrl||e.imgUrl)||"";return t?coUtil.cofImgSrc(t):""},de=e=>o.dtlId===e.blogId?"active":"",v={};v.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"blogTitle",label:"\uC81C\uBAA9"},{value:"blogAuthor",label:"\uC791\uC131\uC790"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"blogTypeCd",type:"select",label:"\uAD6C\uBD84",options:()=>b.BLOG_TYPE,nullLabel:"\uC804\uCCB4"},{key:"useYn",type:"select",label:"\uACF5\uAC1C\uC5EC\uBD80",options:()=>b.OPEN_YN,nullLabel:"\uC804\uCCB4"},{key:"isNotice",type:"select",label:"\uACF5\uC9C0\uC5EC\uBD80",options:()=>b.NOTICE_YN,nullLabel:"\uC804\uCCB4"}],v.baseGrid=[{key:"_thumb",label:"\uC774\uBBF8\uC9C0",style:"width:64px;",align:"center"},{key:"blogTypeCd",label:"\uAD6C\uBD84",style:"width:70px;",align:"center",badge:e=>ce(e.blogTypeCd),fmt:e=>ne(e)},{key:"blogTitle",label:"\uC81C\uBAA9",sortKey:"nm",link:!0,cellInnerClass:"title-link",fmt:(e,t)=>{const l=t.isNotice==="Y"?"[\uACF5\uC9C0] ":"",s=t.blogSummary?` / ${t.blogSummary}`:"";return`${l}${t.blogTitle||""}${s}`}},{key:"blogAuthor",label:"\uC791\uC131\uC790",style:"width:80px;"},{key:"viewCount",label:"\uC870\uD68C\uC218",style:"width:80px;",align:"right",fmt:e=>(e||0).toLocaleString()},{key:"isNotice",label:"\uACF5\uC9C0",style:"width:70px;",align:"center",badge:e=>e.isNotice==="Y"?"badge-orange":"badge-gray"},{key:"useYn",label:"\uACF5\uAC1C",style:"width:70px;",align:"center",badge:e=>se(e.useYn),fmt:e=>e==="Y"?"\uACF5\uAC1C":"\uBE44\uACF5\uAC1C"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",style:"width:140px;",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{type:"actions",actions:[{label:"\uC218\uC815",cls:"btn btn_row_edit btn-sm",onClick:e=>S("blogs-cellClick","btn_row_edit",e)},{label:"\uC0AD\uC81C",cls:"btn btn_row_delete btn-sm",onClick:e=>A("blogs-rowDelete",e)},{label:e=>e.useYn==="Y"?"\uBE44\uACF5\uAC1C":"\uACF5\uAC1C",cls:e=>["btn","btn-sm",e.useYn==="Y"?"btn-secondary":"btn-green"],onClick:e=>A("blogs-rowToggleUse",e)}]}],v.blogForm=[{key:"blogTypeCd",label:"\uAD6C\uBD84",type:"select",required:!0,options:()=>(b.BLOG_TYPE||[]).map(e=>({value:e.codeValue,label:e.codeLabel}))},{key:"blogTitle",label:"\uC81C\uBAA9",type:"text",required:!0,colSpan:2},{key:"blogAuthor",label:"\uC791\uC131\uC790",type:"text"},{key:"isNotice",label:"\uACF5\uC9C0\uC5EC\uBD80",type:"select",options:()=>(b.NOTICE_YN||[]).map(e=>({value:e.codeValue,label:e.codeValue+" ("+e.codeLabel+")"}))},{key:"useYn",label:"\uACF5\uAC1C\uC5EC\uBD80",type:"select",options:()=>(b.OPEN_YN||[]).map(e=>({value:e.codeValue,label:e.codeValue+" ("+e.codeLabel+")"}))},{type:"rowBreak"},{key:"blogSummary",label:"\uC694\uC57D",type:"text",placeholder:"\uBAA9\uB85D\uC5D0 \uD45C\uC2DC\uB420 \uC694\uC57D \uB0B4\uC6A9",colSpan:3},{type:"rowBreak"},{key:"blogContent",label:"\uBCF8\uBB38",type:"slot",name:"blogContent",colSpan:3}],v.attachGrid=[{key:"_preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",style:"width:64px;",align:"center"},{key:"imgUrl",label:"\uC774\uBBF8\uC9C0 URL",edit:"text",placeholder:"/cdn/prod/img/blog/blog-1.jpg"},{key:"thumbUrl",label:"\uC378\uB124\uC77C URL",edit:"text",placeholder:"\uBE44\uC6B0\uBA74 \uC774\uBBF8\uC9C0 URL \uC0AC\uC6A9"},{key:"imgAltText",label:"\uB300\uCCB4\uD14D\uC2A4\uD2B8",edit:"text"},{key:"sortOrd",label:"\uC815\uB82C",edit:"number",style:"width:70px;",align:"right"}];const ge=g({show:!1});return{columns:v,blogs:y,uiState:c,searchParam:m,baseGridPager:r,detailPanel:o,errors:h,cfDtlMode:R,excelModal:ge,buildExcelParams:()=>{const e={...O(),...coUtil.cofOmitEmpty(m)};return e.searchValue&&!e.searchType&&(e.searchType="blogTitle,blogAuthor"),e},attachRows:n,attachUi:u,handleBtnAction:M,handleSelectAction:A,handleGridCellAction:S,fnGridRowClass:de,fnRowThumb:re,fnAttachPreview:ie}},template:`
<bo-page title="\uB274\uC2A4&\uBE14\uB85C\uADF8\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ======================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ======================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uAC8C\uC2DC\uAE00 \uBAA9\uB85D" :count-text="'\uCD1D ' + baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
      <button class="btn btn_new" @click="handleBtnAction('blogs-add')">
        + \uC2E0\uADDC
      </button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="blogs" row-key="blogId" :selected-key="detailPanel.dtlId"
      :sort-state="uiState"
      :row-class="fnGridRowClass" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('blogs-sort', key)"
      grid-id="blogs-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #cell-_thumb="{ row }">
        <img v-if="fnRowThumb(row)" :src="fnRowThumb(row)" :alt="row.blogTitle"
          style="width:44px;height:44px;object-fit:cover;border-radius:6px;border:1px solid #eee;" />
        <span v-else style="color:#ccc;font-size:11px;">\uC5C6\uC74C</span>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('blogs-pager-setPage', n)" :on-size-change="() => handleSelectAction('blogs-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="cmBlog" area-nm="\uBE14\uB85C\uADF8"
      :columns="columns.baseGrid" ui-nm="\uBE14\uB85C\uADF8\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uD56D\uC0C1 \uD45C\uC2DC, active=false \uBA74 \uC548\uB0B4\uBB38\uAD6C) ===================== -->
  <bo-container bare>
    <div class="card">
      <div class="toolbar">
        <span class="list-title">
          {{ !detailPanel.active ? '\uAC8C\uC2DC\uD310&\uBE14\uB85C\uADF8 \uC0C1\uC138' : (detailPanel.isNew ? '\uAC8C\uC2DC\uD310&\uBE14\uB85C\uADF8 \uC2E0\uADDC' : (cfDtlMode ? '\uAC8C\uC2DC\uD310&\uBE14\uB85C\uADF8 \uC0C1\uC138' : '\uAC8C\uC2DC\uD310&\uBE14\uB85C\uADF8 \uC218\uC815')) }}
          <span v-if="detailPanel.active ? (!detailPanel.isNew ? (detailPanel.form.blogId) : false) : false" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
            #{{ detailPanel.form.blogId }}
          </span>
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0. \uD589 \uBBF8\uC120\uD0DD \uC548\uB0B4 (active=false) ============================== -->
      <div v-if="!detailPanel.active" style="padding:40px 12px;text-align:center;color:#999;">
        \uBAA9\uB85D\uC5D0\uC11C \uD589\uC744 \uC120\uD0DD\uD558\uAC70\uB098 [+\uC2E0\uADDC]\uB97C \uB204\uB974\uC138\uC694
      </div>
      <!-- ===== \u25A0.\u25A0. \uBE14\uB85C\uADF8 detail \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======================= -->
      <div v-else style="padding:12px">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
        <bo-form-area :columns="columns.blogForm" :form="detailPanel.form" :errors="errors"
          :cols="3" compact :show-actions="false" :readonly="cfDtlMode" plain-readonly>
          <template #blogContent>
            <div v-if="cfDtlMode" class="readonly-field-plain" v-html="detailPanel.form.blogContent || '-'"></div>
            <base-html-editor v-else v-model="detailPanel.form.blogContent" height="320px" />
          </template>
        </bo-form-area>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uCCA8\uBD80 \uC774\uBBF8\uC9C0 \uAD00\uB9AC (\uBAA9\uB85D \uC378\uB124\uC77C\xB7\uC0C1\uC138 \uC774\uBBF8\uC9C0 \uC18C\uC2A4) ============= -->
        <div style="margin-top:16px;">
          <template v-if="cfDtlMode">
            <div class="list-title" style="margin-bottom:6px;">\uCCA8\uBD80 \uC774\uBBF8\uC9C0</div>
            <div v-if="attachRows.length" style="display:flex;flex-wrap:wrap;gap:8px;">
              <img v-for="row in attachRows.filter(r => fnAttachPreview(r))" :key="row.blogFileId"
                :src="fnAttachPreview(row)" :alt="row.imgAltText"
                style="width:64px;height:64px;object-fit:cover;border-radius:6px;border:1px solid #eee;" />
            </div>
            <div v-else class="readonly-field-plain">-</div>
          </template>
          <bo-grid-crud v-else
            list-title="\uCCA8\uBD80 \uC774\uBBF8\uC9C0"
            :columns="columns.attachGrid" :rows="attachRows" row-key="blogFileId"
            grid-id="attach-cellChange"
            v-model:focused-idx="attachUi.focusedIdx" v-model:check-all="attachUi.checkAll"
            :show-row-id="false" max-height="280px"
            @add="handleBtnAction('attach-add')"
            @delete-checked="handleSelectAction('attach-deleteChecked')"
            @cancel-checked="handleSelectAction('attach-cancelChecked')"
            @reorder="e => handleSelectAction('attach-reorder', e)"
            :show-save="false"
            @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
            <template #cell-_preview="{ row }">
              <img v-if="fnAttachPreview(row)" :src="fnAttachPreview(row)" :alt="row.imgAltText"
                style="width:44px;height:44px;object-fit:cover;border-radius:6px;border:1px solid #eee;" />
              <span v-else style="color:#ccc;font-size:11px;">-</span>
            </template>
          </bo-grid-crud>
          <div v-if="!cfDtlMode" style="font-size:11px;color:#999;margin-top:4px;">
            * \uCCAB \uBC88\uC9F8 \uD589(\uC815\uB82C \uAC00\uC7A5 \uC704)\uC758 \uC774\uBBF8\uC9C0\uAC00 \uBAA9\uB85D \uC378\uB124\uC77C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC800\uC7A5\uC740 \uD558\uB2E8 [\uC800\uC7A5] \uBC84\uD2BC\uC73C\uB85C \uBCF8\uBB38\uACFC \uD568\uAED8 \uBC18\uC601\uB429\uB2C8\uB2E4.
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uD558\uB2E8 \uC561\uC158 \u2014 \uBCF4\uAE30\uBAA8\uB4DC=[\uC218\uC815][\uB2EB\uAE30] / \uC218\uC815\uBAA8\uB4DC=[\uC800\uC7A5][\uC0AD\uC81C][\uCDE8\uC18C] (.form-actions \uC911\uC559 \uC815\uB82C) ===== -->
        <bo-form-actions :readonly="cfDtlMode" :show-delete="!detailPanel.isNew" :show-cancel="!detailPanel.isNew"
          :edit-click="() => handleBtnAction('detailPanel-edit')"
          :save-click="() => handleBtnAction('detailPanel-save')"
          :delete-click="() => handleBtnAction('detailPanel-delete')"
          :cancel-click="() => handleBtnAction('detailPanel-cancel')"
          :close-click="() => handleBtnAction('detailPanel-close')" />
      </div>
      <!-- ===== \u25A1.\u25A0. \uBE14\uB85C\uADF8 detail \uD3FC ========================================== -->
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 =================================================== -->
</bo-page>
`};
