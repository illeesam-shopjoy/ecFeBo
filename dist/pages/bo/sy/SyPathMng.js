window.SyPathMng={name:"SyPathMng",props:{navigate:{type:Function,required:!0}},setup(K){const{reactive:h,computed:x,watch:Q,onMounted:T}=Vue,d=window.boApp.showToast,P=window.boApp.showConfirm,y=h({use_yn:[]}),X=h({}),N=(e,t={})=>{if(e==="searchParam-list")return r.pageNo=1,w();if(e==="searchParam-reset")return Object.assign(b,C),g.selectedPathId=null,r.pageNo=1,w();if(e==="paths-add")return U();if(e==="paths-save")return Y();if(e==="pathTree-expandAll"){i.clear(),i.add(null);const n=l=>{i.add(l.pathId),l.children.forEach(n)};m.value.children.forEach(n);return}else if(e==="pathTree-collapseAll"){i.clear(),i.add(null);return}else if(e==="pathTree-toggle"){i.has(t)?i.delete(t):i.add(t);return}else{if(e==="parentModal-close")return S();if(e==="parentModal-toggle"){s.expanded.has(t)?s.expanded.delete(t):s.expanded.add(t);return}else if(e==="paths-pager-setPage"){t>=1&&t<=r.pageTotalPage&&(r.pageNo=t,w());return}else console.warn("[handleBtnAction] unknown cmd:",e)}},R=(e,t={})=>{if(e==="pathTree-select")return g.selectedPathId=g.selectedPathId===t?null:t,r.pageNo=1,w();if(e==="paths-rowCancel")return A(t);if(e==="paths-rowDelete")return O(t);if(e==="paths-pager-sizeChange")return r.pageNo=1,w();if(e==="parentModal-select")return v(t);console.warn("[handleSelectAction] unknown cmd:",e)},L=(e,t,n,l={})=>{if(e==="paths-cellChange")return t==="btn_parent_open"?j(n):t==="btn_parent_clear"?V(n):I(n);console.warn("[handleGridCellAction] unknown cmd:",e)},z=(e,t,n)=>{if(e==="parent-path")return n==null?S():v(n);console.warn("[fnCallbackModal] unknown popCmd:",e)},b=h({searchType:"",searchValue:"",bizCd:"",useYn:"Y"}),C={},p=h([]),i=h(new Set([null])),g=h({selectedPathId:null}),f=h([]),r=h({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}});let D=-1;const s=h({show:!1,targetRow:null,expanded:new Set([null])}),m=x(()=>{const e={};p.forEach(a=>{e[a.pathId]={...a,children:[]}});const t=[];p.forEach(a=>{a.parentPathId!=null&&e[a.parentPathId]?e[a.parentPathId].children.push(e[a.pathId]):t.push(e[a.pathId])});const n=a=>a.sort((u,c)=>(u.sortOrd||0)-(c.sortOrd||0)),l=a=>(n(a).forEach(u=>l(u.children)),a);return l(t),{pathId:null,pathLabel:"\uC804\uCCB4",children:t,count:p.length}}),E=x(()=>{var l;const e=(l=s.targetRow)==null?void 0:l.pathId,t={};p.forEach(a=>{a.pathId!==e&&(t[a.pathId]={...a,children:[]})});const n=[];return p.forEach(a=>{a.pathId!==e&&(a.parentPathId!=null&&t[a.parentPathId]?t[a.parentPathId].children.push(t[a.pathId]):n.push(t[a.pathId]))}),{pathId:null,pathLabel:"\uC804\uCCB4",children:n.sort((a,u)=>(a.sortOrd||0)-(u.sortOrd||0))}}),B=x(()=>f.filter(e=>e._status==="N"||e._status==="U"||e._status==="D")),G=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"SyPathMng"}),y.use_yn=e.sgGetGrpCodes("USE_YN")}catch(e){console.error("[fnLoadCodes]",e)}},_=async()=>{var e,t,n,l;try{const a=await boApiSvc.syPath.getPage({pageNo:1,pageSize:1e4},"\uACBD\uB85C\uAD00\uB9AC","\uD2B8\uB9AC\uC870\uD68C"),u=((t=(e=a.data)==null?void 0:e.data)==null?void 0:t.pageList)||((l=(n=a.data)==null?void 0:n.data)==null?void 0:l.list)||[];p.splice(0,p.length,...u),i.clear(),i.add(null),p.filter(c=>c.parentPathId==null).forEach(c=>i.add(c.pathId))}catch(a){console.error("[handleSearchTree]",a)}},w=async()=>{var e,t,n,l;try{const a={pageNo:r.pageNo,pageSize:r.pageSize,...b};g.selectedPathId!=null&&(a.parentPathId=g.selectedPathId),a.searchValue&&!a.searchType&&(a.searchType="pathLabel,pathRemark");const c=((e=(await boApiSvc.syPath.getPage(a,"\uACBD\uB85C\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)||{},o=c.pageList||c.list||[];f.splice(0,f.length,...o.map(M=>({...M,_status:null,_row_org:{...M}}))),r.pageTotalCount=(n=(t=c.pageTotalCount)!=null?t:c.totalCount)!=null?n:o.length,r.pageTotalPage=(l=c.pageTotalPage)!=null?l:coUtil.cofTotalPage(r),coUtil.cofBuildPagerNums(r)}catch(a){console.error("[handleGridSearch]",a)}};T(async()=>{await G(),await _();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(b).forEach(n=>{!t.includes(n)&&e.has(n)&&(b[n]=e.get(n))}),await w(),Object.assign(C,b)});const I=e=>{e._status||(e._status="U")},U=()=>{f.unshift({pathId:D--,bizCd:b.bizCd||"",parentPathId:g.selectedPathId,pathLabel:"",sortOrd:0,useYn:"Y",pathRemark:"",_status:"N",_row_org:null})},A=e=>{if(e._status==="N"){const t=f.findIndex(n=>n.pathId===e.pathId);t!==-1&&f.splice(t,1)}else e._row_org?Object.assign(e,e._row_org,{_status:null}):e._status=null},O=e=>{if(e._status==="N"){A(e);return}e._status="D"},Y=async()=>{const e=B.value;if(!e.length){d==null||d("\uBCC0\uACBD\uB41C \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","info");return}for(const o of e)if(o._status!=="D"&&!o.pathLabel){d==null||d("\uACBD\uB85C \uB77C\uBCA8\uC740 \uD544\uC218\uC785\uB2C8\uB2E4.","error");return}const t=e.filter(o=>o._status==="D").length,n=e.length-t,l=t?`\uBCC0\uACBD ${n}\uAC74, \uC0AD\uC81C ${t}\uAC74\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`:`${e.length}\uAC74\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`;if(!await(P==null?void 0:P("\uC800\uC7A5",l)))return;const u={N:"I",U:"U",D:"D"},c=e.map(o=>({...o,rowStatus:u[o._status]||o._row_status||o._status}));try{await boApiSvc.syPath.saveList("base",c,"\uACBD\uB85C\uAD00\uB9AC","\uC800\uC7A5"),d==null||d("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await _(),await w()}catch(o){d==null||d(coUtil.cofErrMsg(o),"error",0)}},j=async e=>{s.targetRow=e,s.expanded.clear(),s.expanded.add(null),await _(),p.filter(t=>t.parentPathId==null&&t.pathId!==e.pathId).forEach(t=>s.expanded.add(t.pathId)),s.show=!0},S=()=>{s.show=!1,s.targetRow=null},v=e=>{s.targetRow&&(s.targetRow.parentPathId=e,I(s.targetRow)),S()},V=e=>{e.parentPathId=null,I(e)},q=e=>{var t;return e==null?"(\uB8E8\uD2B8)":((t=p.find(n=>n.pathId===e))==null?void 0:t.pathLabel)||String(e)},k={};k.baseSearch=[{key:"bizCd",type:"text",label:"\uC5C5\uBB34\uCF54\uB4DC",placeholder:"biz_cd \uAC80\uC0C9",width:"180px"},{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"pathLabel",label:"\uB77C\uBCA8"},{value:"pathRemark",label:"\uBE44\uACE0"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"320px"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>y.use_yn,nullLabel:"\uC804\uCCB4"}],k.baseGrid=[{key:"rowStatus",label:"\uC0C1\uD0DC",style:"width:60px;text-align:center;",align:"center",badge:e=>"badge-xs "+(e._status==="N"?"badge-green":e._status==="U"?"badge-orange":e._status==="D"?"badge-red":"badge-gray"),fmt:(e,t)=>t._status||"N"},{key:"pathId",label:"ID",style:"width:60px;text-align:center;",align:"center",cellStyle:"font-size:11px;color:#999;",fmt:(e,t)=>t.pathId>0?t.pathId:"NEW"},{key:"bizCd",label:"\uC5C5\uBB34\uCF54\uB4DC",style:"width:120px;",edit:"text",placeholder:"biz_cd"},{key:"parentPathId",label:"\uBD80\uBAA8\uACBD\uB85C",style:"width:180px;",noEllipsis:!0},{key:"pathLabel",label:"\uACBD\uB85C \uB77C\uBCA8",edit:"text",placeholder:"\uACBD\uB85C \uB77C\uBCA8"},{key:"sortOrd",label:"\uC815\uB82C",style:"width:60px;text-align:center;",edit:"number",align:"center"},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:70px;text-align:center;",edit:"select",options:()=>y.use_yn},{key:"pathRemark",label:"\uBE44\uACE0",style:"width:160px;",edit:"text",placeholder:"\uBE44\uACE0"}];const W={N:"status-I",U:"status-U",D:"status-D"},$=e=>"crud-row "+(W[e._status]||""),F=e=>["N","U","D"].includes(e._status),H=e=>e._status==null||e._status==="U",J=h({show:!1});return{columns:k,uiState:g,searchParam:b,expanded:i,gridRows:f,baseGridPager:r,parentModal:s,excelModal:J,buildExcelParams:()=>{const e={...b};return g.selectedPathId!=null&&(e.parentPathId=g.selectedPathId),e.searchValue&&!e.searchType&&(e.searchType="pathLabel,pathRemark"),e},handleBtnAction:N,handleSelectAction:R,handleGridCellAction:L,fnCallbackModal:z,cfTree:m,cfParentTree:E,fnRowClass:$,getParentLabel:q,fnShowCancel:F,fnShowDelete:H}},template:`
<bo-page title="\uD45C\uC2DC\uACBD\uB85C" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uD2B8\uB9AC ==================================================== -->
    <bo-container bare>
      <bo-local-tree-card title="\uACBD\uB85C \uD2B8\uB9AC" biz-cd="sy_path" :sticky="true"
        max-height="calc(100vh - 320px)"
        :node="cfTree" :expanded="expanded" :selected="uiState.selectedPathId"
        :on-toggle="id => handleBtnAction('pathTree-toggle', id)"
        @select="id => handleSelectAction('pathTree-select', id)" @expand-all="handleBtnAction('pathTree-expandAll')" @collapse-all="handleBtnAction('pathTree-collapseAll')" />
    </bo-container>
    <!-- ===== \u25A1.\u25A1. \uD2B8\uB9AC ==================================================== -->
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC =================================================== -->
    <bo-container title="\uACBD\uB85C \uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" @click="handleBtnAction('paths-add')">
          + \uD589\uCD94\uAC00
        </button>
        <button class="btn btn_save" @click="handleBtnAction('paths-save')">
          \uC800\uC7A5
        </button>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="gridRows" row-key="pathId"
        :row-class="fnRowClass" :row-actions="true"
        grid-id="paths-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uBD80\uBAA8\uACBD\uB85C \uC140: \uAC12 \uBC15\uC2A4 + \u{1F50D} \uB3CB\uBCF4\uAE30(\uBAA8\uB2EC \uC5F4\uAE30) + x(\uBE44\uC6B0\uAE30) ============
             BoPathPickField \uC640 \uB3D9\uC77C\uD55C \uB8E9\uC564\uD544 (\uAC12 \uBC15\uC2A4 + \uB3CB\uBCF4\uAE30 \uBC84\uD2BC + \uC6B0\uCE21 x). \uBAA8\uB2EC\uC740 \uBD80\uBAA8\uD2B8\uB9AC(cfParentTree) \uC804\uC6A9 -->
        <template #cell-parentPathId="{ row }">
          <td style="width:180px;">
            <div style="display:flex;align-items:center;gap:4px;padding:0 4px 0 7px;border:1px solid #e5e7eb;border-radius:5px;background:#f5f5f7;min-height:24px;">
              <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;"
                :style="{ color: row.parentPathId != null ? '#374151' : '#9ca3af', fontWeight: row.parentPathId != null ? 600 : 400 }"
                :title="getParentLabel(row.parentPathId)">
                {{ getParentLabel(row.parentPathId) }}
              </span>
              <span v-if="row.parentPathId != null" title="\uBD80\uBAA8\uACBD\uB85C \uBE44\uC6B0\uAE30"
                style="cursor:pointer;color:#9ca3af;font-size:9px;flex-shrink:0;line-height:1;padding:0;margin-right:-1px;align-self:flex-end;margin-bottom:2px;"
                @click.stop="handleGridCellAction('paths-cellChange', 'btn_parent_clear', row)">
                \u2715
              </span>
              <button type="button" title="\uBD80\uBAA8\uACBD\uB85C \uC120\uD0DD"
                style="cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#fff;border:1px solid #d1d5db;border-radius:4px;font-size:11px;color:#2563eb;flex-shrink:0;padding:0;"
                @click.stop="handleGridCellAction('paths-cellChange', 'btn_parent_open', row)">
                \u{1F50D}
              </button>
            </div>
          </td>
        </template>
        <template #head-actions>
          \uAD00\uB9AC
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uAD00\uB9AC: \uD589\uC0C1\uD0DC\uBCC4 [\uCDE8\uC18C]/[\uC0AD\uC81C] (\uCDE8\uC18C=\uC67C\uCABD, \uC0AD\uC81C=\uC624\uB978\uCABD) ============
             N(\uC2E0\uADDC): [\uCDE8\uC18C](\uD589\uC81C\uAC70) / D(\uC0AD\uC81C\uB9C8\uD0B9): [\uCDE8\uC18C](\uBCF5\uC6D0)+[\uC0AD\uC81C] / \uADF8\uC678: [\uC0AD\uC81C](D\uB9C8\uD0B9). \uC2E4\uC81C \uBC18\uC601\uC740 \uC0C1\uB2E8 [\uC800\uC7A5] -->
        <template #row-actions="{ row }">
          <div style="display:inline-flex;gap:4px;flex-wrap:nowrap;">
            <button v-if="fnShowCancel(row)" class="btn btn_cancel" @click.stop="handleSelectAction('paths-rowCancel', row)">
              \uCDE8\uC18C
            </button>
            <button v-if="fnShowDelete(row)" class="btn btn_row_delete" @click.stop="handleSelectAction('paths-rowDelete', row)">
              \uC0AD\uC81C
            </button>
          </div>
        </template>
      </bo-grid>
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('paths-pager-setPage', n)" :on-size-change="() => handleSelectAction('paths-pager-sizeChange')" />
      <bo-excel-down-modal :show="excelModal.show" domain="syPath" area-nm="\uD45C\uC2DC\uACBD\uB85C"
        :columns="columns.baseGrid" ui-nm="\uACBD\uB85C\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
    <!-- ===== \u25A1.\u25A1. \uADF8\uB9AC\uB4DC =================================================== -->
  </div>
  <!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
  <!-- ===== \u25A0. \uBD80\uBAA8\uACBD\uB85C \uC120\uD0DD \uBAA8\uB2EC (BoTreeSelectorModal) ======================== -->
  <bo-tree-selector-modal :show="parentModal.show" title="\uBD80\uBAA8\uACBD\uB85C \uC120\uD0DD"
    :node="cfParentTree" :expanded="parentModal.expanded"
    :on-toggle="id => handleBtnAction('parentModal-toggle', id)"
    root-label="(\uB8E8\uD2B8 \u2014 \uC0C1\uC704\uC5C6\uC74C)"
    @select="id => handleSelectAction('parentModal-select', id)"
    @close="handleBtnAction('parentModal-close')" />
  <!-- ===== \u25A1. \uBD80\uBAA8\uACBD\uB85C \uC120\uD0DD \uBAA8\uB2EC (BoTreeSelectorModal) ======================== -->
</bo-page>
`};
