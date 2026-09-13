(function(){const{ref:m,reactive:n,computed:u,onMounted:b}=Vue,r={\uD68C\uC6D0:"zdSimulMember",\uC0C1\uD488:"zdSimulProd",\uC8FC\uBB38:"zdSimulOrder",\uD074\uB808\uC784:"zdSimulClaim",\uD504\uB85C\uBAA8\uC158:"zdSimulPromo",\uC801\uB9BD\uAE08:"zdSimulSave",\uAE30\uD68D\uC804:"zdSimulPlan",\uC774\uBCA4\uD2B8:"zdSimulEvent",\uC815\uC0B0:"zdSimulSettle"},c=["\uC804\uCCB4","\uD68C\uC6D0","\uC0C1\uD488","\uC8FC\uBB38","\uD074\uB808\uC784","\uD504\uB85C\uBAA8\uC158","\uC801\uB9BD\uAE08","\uAE30\uD68D\uC804","\uC774\uBCA4\uD2B8","\uC815\uC0B0"];window.ZdSimulLogMng={name:"ZdSimulLogMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(i){const g=()=>coUtil.cofToYmd(new Date),p=()=>{const e=new Date;return e.setFullYear(e.getFullYear()-1),coUtil.cofToYmd(e)},a=n({domain:"\uC804\uCCB4",mode:"\uC804\uCCB4",status:"\uC804\uCCB4",keyword:"",dateFrom:p(),dateTo:g()}),o=n({pageNo:1,pageSize:20,pageTotalPage:1,pageTotalCount:0}),s=m([]),y=n({}),l=async()=>{var e;try{const t={pageNo:o.pageNo,pageSize:o.pageSize};a.domain!=="\uC804\uCCB4"&&(t.domain=a.domain),a.mode!=="\uC804\uCCB4"&&(t.mode=a.mode),a.status==="\uC131\uACF5"?t.status="SUCCESS":a.status==="\uC2E4\uD328"&&(t.status="FAIL"),a.dateFrom&&(t.dateFrom=a.dateFrom),a.dateTo&&(t.dateTo=a.dateTo),a.keyword&&(t.desc=a.keyword);const d=((e=(await boApiSvc.zdSimulLog.getPage(t)).data)==null?void 0:e.data)||{};s.value=d.pageList||[],o.pageTotalCount=d.pageTotalCount||0,o.pageTotalPage=d.pageTotalPage||1}catch{s.value=[]}},f=()=>{o.pageNo=1,l()},S=()=>{a.domain="\uC804\uCCB4",a.mode="\uC804\uCCB4",a.status="\uC804\uCCB4",a.keyword="",a.dateFrom=p(),a.dateTo=g(),o.pageNo=1,l()};b(l);const v=u(()=>{const e=window._zdSimulStats||{};return Object.keys(e).map(t=>({domain:t,total:e[t].total||0,ok:e[t].ok||0,fail:e[t].fail||0,rate:e[t].total?Math.round(e[t].ok/e[t].total*100):0}))}),x=e=>{o.pageNo=e,l()},h=async()=>{await i.showConfirm("\uB85C\uADF8 \uC0AD\uC81C","\uC804\uCCB4 \uC2DC\uBBAC\uB85C\uADF8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(window._zdSimulStats={},l(),i.showToast("\uC804\uCCB4 \uB85C\uADF8\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"))},w=e=>{const t=r[e];t&&i.navigate(t)},k=[{key:"regDate",label:"\uC2DC\uAC01",width:"148px",cellStyle:"font-family:monospace;font-size:11px;color:#64748b;"},{key:"domain",label:"\uB3C4\uBA54\uC778",width:"64px",align:"center",badge:e=>({\uD68C\uC6D0:"badge-blue",\uC0C1\uD488:"badge-green",\uC8FC\uBB38:"badge-purple",\uD074\uB808\uC784:"badge-orange",\uD504\uB85C\uBAA8\uC158:"badge-purple",\uAE30\uD68D\uC804:"badge-orange",\uC774\uBCA4\uD2B8:"badge-blue",\uC815\uC0B0:"badge-green"})[e.domain]||"badge-gray"},{key:"simulMode",label:"\uC720\uD615",width:"40px",align:"center",badge:e=>e.simulMode==="\uC0DD\uC131"?"badge-blue":"badge-orange"},{key:"simulStatusCd",label:"\uACB0\uACFC",width:"36px",align:"center",fmt:e=>e==="SUCCESS"?"\u2713":"\u2717",cellStyle:e=>"font-weight:700;font-size:14px;color:"+(e==="SUCCESS"?"#16a34a":"#dc2626")},{key:"uiNm",label:"\uD654\uBA74\uBA85",width:"110px"},{key:"userNm",label:"\uB4F1\uB85D\uC790",width:"72px",align:"center"},{key:"descTxt",label:"\uB0B4\uC6A9",cellStyle:(e,t)=>t.simulStatusCd!=="SUCCESS"?"background:#fff5f5;":""},{key:"reasonTxt",label:"\uC2E4\uD328 \uC0AC\uC720",width:"200px",cellStyle:"color:#ef4444;font-size:11px;"},{key:"targetId",label:"\uB370\uC774\uD130ID",width:"160px",cellStyle:"font-family:monospace;font-size:10px;color:#64748b;"}],C=[{key:"domain",label:"\uB3C4\uBA54\uC778",width:"80px"},{key:"total",label:"\uCD1D \uC2E4\uD589",width:"70px",align:"right"},{key:"ok",label:"\uC131\uACF5",width:"60px",align:"right",cellStyle:"color:#16a34a;font-weight:600;"},{key:"fail",label:"\uC2E4\uD328",width:"60px",align:"right",cellStyle:"color:#dc2626;font-weight:600;"},{key:"rate",label:"\uC131\uACF5\uB960",width:"60px",align:"right",fmt:e=>e+"%"},{key:"_goto",label:"\uC7AC\uC0DD\uC131",width:"60px",align:"center",type:"slot",name:"gotoBtn"}],z=[{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uAE30\uAC04",startKey:"dateFrom",endKey:"dateTo",typeKey:null},{key:"domain",type:"select",label:"\uB3C4\uBA54\uC778",options:c.map(e=>({value:e,label:e}))},{key:"mode",type:"select",label:"\uC720\uD615",options:[{value:"\uC804\uCCB4",label:"\uC804\uCCB4"},{value:"\uC0DD\uC131",label:"\uC0DD\uC131"},{value:"\uC218\uC815",label:"\uC218\uC815"}]},{key:"status",type:"select",label:"\uACB0\uACFC",options:[{value:"\uC804\uCCB4",label:"\uC804\uCCB4"},{value:"\uC131\uACF5",label:"\u2713 \uC131\uACF5"},{value:"\uC2E4\uD328",label:"\u2717 \uC2E4\uD328"}]},{key:"keyword",type:"text",label:"\uB0B4\uC6A9 \uAC80\uC0C9",placeholder:"\uB0B4\uC6A9 \uB610\uB294 \uC0AC\uC720 \uC785\uB825"}];return{searchParam:a,pager:o,allLogs:s,codes:y,cfStats:v,baseGridColumns:k,statGridColumns:C,baseSearchColumns:z,onSearch:f,onReset:S,onClearAll:h,onGoSimul:w,onSetPage:x,handleSearchList:l,DOMAINS_ALL:c,DOMAIN_PAGE_MAP:r}},template:`
<div>
  <div class="page-title">\u{1F4CA} \uC2DC\uBBAC\uB808\uC774\uC158 \uB85C\uADF8</div>

  <!-- \uD1B5\uACC4 \uCE74\uB4DC -->
  <div v-if="cfStats.length > 0" class="card" style="padding:14px 16px;margin-bottom:12px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div class="list-title">\u{1F4C8} \uB3C4\uBA54\uC778\uBCC4 \uD1B5\uACC4</div>
      <button class="btn btn_delete btn-sm" @click="onClearAll">\u{1F5D1} \uC804\uCCB4 \uC0AD\uC81C</button>
    </div>
    <bo-grid :rows="cfStats" :columns="statGridColumns" style="font-size:12px;">
      <template #gotoBtn="{ row }">
        <button v-if="DOMAIN_PAGE_MAP[row.domain]" class="btn btn_preview" style="font-size:10px;padding:2px 8px;" @click="onGoSimul(row.domain)">\u25B6 \uC774\uB3D9</button>
      </template>
    </bo-grid>
  </div>

  <!-- \uAC80\uC0C9\uBC14 -->
  <div class="card" style="padding:12px 16px;margin-bottom:12px;">
    <bo-search-area :columns="baseSearchColumns" :param="searchParam" @search="onSearch" @reset="onReset" />
  </div>

  <!-- \uB85C\uADF8 \uADF8\uB9AC\uB4DC -->
  <div class="card" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div class="list-title">\u{1F4CB} \uC2E4\uD589 \uB85C\uADF8 <span class="list-count">{{ pager.pageTotalCount }}\uAC74</span></div>
      <div style="display:flex;gap:6px;align-items:center;">
        <button class="btn btn_reset btn-sm" @click="onSearch">\u{1F504} \uC0C8\uB85C\uACE0\uCE68</button>
        <button v-if="pager.pageTotalCount > 0" class="btn btn_delete btn-sm" @click="onClearAll">\uC804\uCCB4 \uC0AD\uC81C</button>
      </div>
    </div>

    <div v-if="allLogs.length === 0" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:300px;color:#cbd5e1;border:1px solid #f1f5f9;border-radius:6px;">
      <div style="font-size:40px;margin-bottom:12px;">\u{1F4ED}</div>
      <div style="font-size:14px;margin-bottom:6px;">{{ pager.pageTotalCount === 0 ? '\uC2DC\uBBAC\uB808\uC774\uC158 \uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uAC80\uC0C9 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' }}</div>
      <div v-if="pager.pageTotalCount === 0" style="font-size:12px;color:#94a3b8;">\uAC01 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC2E4\uD589\uD558\uBA74 \uC774\uACF3\uC5D0 \uAE30\uB85D\uB429\uB2C8\uB2E4.</div>
    </div>

    <bo-grid v-else :rows="allLogs" :columns="baseGridColumns" :pager="pager" style="font-size:11px;" />

    <bo-pager :pager="pager" :on-set-page="onSetPage" :on-size-change="onSearch" />
  </div>
</div>`}})();
