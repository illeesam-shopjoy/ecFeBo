window.DashboardBoEc02={name:"DashboardBoEc02",props:{navigate:{type:Function,required:!0}},setup(){const{ref:R,reactive:M,computed:i,onMounted:j,onUnmounted:J}=Vue,b=coUtil.cofFmt,B=coUtil.cofToYmd,_=coUtil.cofAddMonths,Z=coUtil.cofEndOfMonth,C=new Date,K=B(Z(C)),X=B(new Date(_(C,-13).getFullYear(),_(C,-13).getMonth(),1)),z=boConsts.DASHBOARD_CHANNELS.map(t=>t.codeLabel),A=boConsts.DASHBOARD_AGES.map(t=>t.codeLabel),T=boConsts.DASHBOARD_GENDERS.map(t=>t.codeLabel),E=boConsts.DASHBOARD_MEMBER_TYPES.map(t=>t.codeLabel),D=boConsts.DASHBOARD_CATEGORIES.map(t=>t.codeLabel),Q=boConsts.DASHBOARD_CHANNEL_COLORS,f=M({startDt:X,endDt:K,channels:[...z],ages:[...A],genders:[...T],memberTypes:[...E],categories:[...D]}),p=M({filterExpand:!1,activeTab:"sales",tabMode:"4col",loading:!1,xviewDrillRows:[],xviewDrillVisible:!1,infoPanel:null,pdfExporting:!1}),H=R(null),q=async()=>{var t;p.pdfExporting=!0;try{const e=coUtil.cofBuildExportFilename("EC\uB300\uC2DC\uBCF4\uB4DC.pdf");await window.boUtil.bofExportPdf(H.value,e,(t=window.boApp)==null?void 0:t.showToast)}finally{p.pdfExporting=!1}},tt=()=>{var t,e;try{window.coExtSdk.shareKakao({title:"\uC628\uB77C\uC778 \uC1FC\uD551\uBAB0 \uB9E4\uCD9C \uBC0F \uD310\uB9E4\uD604\uD669 - ShopJoy BO",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:window.location.href})}catch(a){(e=(t=window.boApp)==null?void 0:t.showToast)==null||e.call(t,a.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},et=async()=>{var t,e,a,o;try{await navigator.clipboard.writeText(window.location.href),(e=(t=window.boApp)==null?void 0:t.showToast)==null||e.call(t,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(s){(o=(a=window.boApp)==null?void 0:a.showToast)==null||o.call(a,s.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},ot=["COMP0101","COMP0102","COMP0103","COMP0104","COMP0201","COMP0202","COMP0203","COMP0204","COMP0301","COMP0302","COMP0303","COMP0304","COMP0401","COMP0402","COMP0403"],at={COMP0101:"chart052",COMP0102:"chart053",COMP0103:"chart054",COMP0104:"chart055",COMP0201:"chart056",COMP0202:"chart057",COMP0203:"chart058",COMP0204:"chart059",COMP0301:"chart060",COMP0302:"chart061",COMP0303:"chart062",COMP0304:"chart063",COMP0401:"chart064",COMP0402:"chart065",COMP0403:"chart066"},r=M({info0101:[],info0102:[],info0103:[],info0104:[],info0201:[],info0202:[],info0203:[],info0204:[],info0301:[],info0302:[],info0303:[],info0304:[],info0401:[],info0402:[],info0403:[]}),nt=[{id:"sales",label:"\uC6D4\uBCC4 \uB9E4\uCD9C",icon:"\u{1F4B0}"},{id:"member",label:"\uAC00\uC785/\uD0C8\uD1F4",icon:"\u{1F465}"},{id:"click",label:"\uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD",icon:"\u{1F5B1}"},{id:"order",label:"\uC8FC\uBB38\uC644\uB8CC",icon:"\u{1F4CB}"},{id:"channel",label:"\uD310\uB9E4\uCC44\uB110\uBCC4 \uB9E4\uCD9C",icon:"\u{1F4FA}"},{id:"kpi",label:"\uD575\uC2EC\uC9C0\uD45C",icon:"\u{1F3AF}"},{id:"topProducts",label:"\uC0C1\uD488 TOP 7",icon:"\u{1F4E6}"},{id:"channelMix",label:"\uCC44\uB110 \uBE44\uC911",icon:"\u{1F4F1}"},{id:"deviceMix",label:"\uB514\uBC14\uC774\uC2A4 \uBE44\uC911",icon:"\u{1F4BB}"},{id:"timeMix",label:"\uC2DC\uAC04\uB300 \uBE44\uC911",icon:"\u23F0"},{id:"region",label:"\uC9C0\uC5ED\uBCC4",icon:"\u{1F5FA}"},{id:"hourly",label:"\uC2DC\uAC04\uB300 \uCD94\uC774",icon:"\u23F1"},{id:"radar",label:"\uC601\uC5C5\uC9C0\uD45C",icon:"\u26A1"},{id:"economy",label:"\uACBD\uC81C \uC218\uC900\uBCC4",icon:"\u{1F4BC}"},{id:"shipping",label:"\uBC30\uC1A1 \uC870\uAC74",icon:"\u{1F69A}"},{id:"xview",label:"X-View",icon:"\u{1F525}"}],it=(t,e={})=>{if(t==="filters-search")return vt();if(t==="filters-reset")return Nt();if(t==="stats-excel")return St();if(t==="filters-toggleExpand"){p.filterExpand=!p.filterExpand;return}if(t==="filters-toggleAll")return ct(e.key,e.all);if(t==="filters-toggle")return rt(f[e.key],e.v);if(t==="xview-drill-close"){p.xviewDrillVisible=!1;return}if(t==="info-close"){p.infoPanel=null;return}if(t==="infoTab-set"){p.infoPanel&&(p.infoPanel.tab=e);return}if(t==="clipboard-copy"){e&&navigator.clipboard.writeText(e);return}console.warn("[handleBtnAction] unknown cmd:",t)},lt=(t,e={})=>{if(t==="tabs-select"){p.tabMode==="tab"&&(p.activeTab=e);return}if(t==="tabMode-set"){p.tabMode=e;return}console.warn("[handleSelectAction] unknown cmd:",t)},rt=(t,e)=>{const a=t.indexOf(e);a>=0?t.splice(a,1):t.push(e)},ct=(t,e)=>{f[t]=f[t].length===e.length?[]:[...e]},st=(t,e)=>t.includes(e),pt={COMP0101:{compId:"COMP0101",chartType:"bar (\uC138\uB85C \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0101",fields:"col1Nm(\uC6D4\uB77C\uBCA8) / col1Num(\uB9E4\uCD9C\uC561)",desc:"\uC6D4\uBCC4 \uB9E4\uCD9C \uD569\uACC4. 14\uAC1C\uC6D4 \uAE30\uAC04 \uAE30\uC900 \uC9D1\uACC4.",tag:`<co-echart
  :option="cfOpt0101"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOpt0101",d:"ECharts option computed \u2014 series/xAxis/yAxis \uD3EC\uD568"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774 (\uACE0\uC815\uAC12)"}]},COMP0102:{compId:"COMP0102",chartType:"bar grouped (\uADF8\uB8F9 \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0102",fields:"col1Nm(\uC6D4) / col1Num(\uAC00\uC785) / col2Nm(\uC6D4) / col2Num(\uD0C8\uD1F4)",desc:"\uC6D4\uBCC4 \uACE0\uAC1D \uAC00\uC785\xB7\uD0C8\uD1F4 \uBCD1\uB82C \uD45C\uC2DC.",tag:`<co-echart
  :option="cfOpt0102"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOpt0102",d:"\uAC00\uC785(\uD30C\uB791)/\uD0C8\uD1F4(\uBE68\uAC15) grouped bar series"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0103:{compId:"COMP0103",chartType:"line + area (\uBA74\uC801 \uAEBE\uC740\uC120)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0103",fields:"col1Nm(\uC6D4) / col1Num(\uD074\uB9AD\uC218)",desc:"\uC0C1\uD488\uC0C1\uC138 \uD398\uC774\uC9C0 \uC6D4\uBCC4 \uD074\uB9AD \uD69F\uC218.",tag:`<co-echart
  :option="cfOpt0103"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOpt0103",d:"areaStyle \uADF8\uB77C\uB370\uC774\uC158 line \uC2DC\uB9AC\uC988"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0104:{compId:"COMP0104",chartType:"line + area (\uBA74\uC801 \uAEBE\uC740\uC120)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0104",fields:"col1Nm(\uC6D4) / col1Num(\uC8FC\uBB38\uAC74\uC218)",desc:"\uC6D4\uBCC4 \uC8FC\uBB38\uC644\uB8CC \uAC74\uC218.",tag:`<co-echart
  :option="cfOpt0104"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOpt0104",d:"areaStyle \uADF8\uB77C\uB370\uC774\uC158 line \uC2DC\uB9AC\uC988"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0201:{compId:"COMP0201",chartType:"line multi (\uCC44\uB110\uBCC4 \uAEBE\uC740\uC120)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0201",fields:"col1Nm(\uCC44\uB110\uBA85) / col2Nm(\uC6D4) / col2Num(\uCC44\uB110\uB9E4\uCD9C)",desc:"12\uAC1C \uD310\uB9E4\uCC44\uB110\uBCC4 \uC6D4\uBCC4 \uB9E4\uCD9C \uCD94\uC774.",tag:`<co-echart
  :option="cfOpt0201"
  height="300px"
/>`,attrs:[{k:":option",v:"cfOpt0201",d:"\uCC44\uB110\uBCC4 12\uAC1C line series, CHANNEL_COLORS \uB9E4\uD551"},{k:"height",v:'"300px"',d:"\uBA40\uD2F0\uB77C\uC778 \uAC00\uB3C5\uC131 \uD655\uBCF4 \uB192\uC774"}]},COMP0202:{compId:"COMP0202",chartType:"KPI \uCE74\uB4DC (\uCC28\uD2B8 \uC5C6\uC74C)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0202",fields:"col1Num(\uCD1D\uB9E4\uCD9C) / col2Num(\uAD6C\uB9E4\uC218\uB7C9) / col3Num(\uB9C8\uC9C4\uC728%) / col4Num(\uD3C9\uADE0\uACB0\uC81C\uC561)",desc:"\uAE30\uAC04 \uB0B4 \uD575\uC2EC KPI \uB2E8\uC77C \uC9D1\uACC4\uAC12.",tag:`<div class="kpi-grid">
  <div v-for="k in cfKpi">
    {{ k.label }}: {{ k.value }}
  </div>
</div>`,attrs:[{k:"cfKpi",v:"computed",d:"info0202[0] \uC758 col1~4Num \uC744 \uB77C\uBCA8+\uAC12 \uBC30\uC5F4\uB85C \uBCC0\uD658"}]},COMP0203:{compId:"COMP0203",chartType:"bar horizontal (\uAC00\uB85C \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0203",fields:"col1Nm(\uC0C1\uD488\uBA85) / col1Num(\uB9E4\uCD9C\uC561)",desc:"\uC0C1\uD488\uBCC4 \uB9E4\uCD9C TOP 7 \uB7AD\uD0B9.",tag:`<co-echart
  :option="cfOpt0203"
  height="240px"
/>`,attrs:[{k:":option",v:"cfOpt0203",d:"yAxis category(\uC0C1\uD488\uBA85\uC5ED\uC21C) + xAxis value \uAC00\uB85C \uB9C9\uB300"},{k:"height",v:'"240px"',d:"7\uD589 \uAE30\uC900 \uB192\uC774"}]},COMP0204:{compId:"COMP0204",chartType:"pie (\uD30C\uC774 \uCC28\uD2B8)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0204",fields:"col1Nm(\uCC44\uB110\uBA85) / col1Num(\uBE44\uC911%)",desc:"\uCC44\uB110\uBCC4 \uB9E4\uCD9C \uAD6C\uC131 \uBE44\uC911.",tag:`<co-echart
  :option="cfOpt0204"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0204",d:'pie series, radius:["35%","65%"] \uB3C4\uB11B\uD615'},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0301:{compId:"COMP0301",chartType:"pie (\uD30C\uC774 \uCC28\uD2B8)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0301",fields:"col1Nm(\uB514\uBC14\uC774\uC2A4) / col1Num(\uBE44\uC911%)",desc:"Mobile\xB7Desktop\xB7Tablet \uC811\uC18D \uBE44\uC911.",tag:`<co-echart
  :option="cfOpt0301"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0301",d:"pie series \u2014 Mobile/Desktop/Tablet 3\uC0C9"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0302:{compId:"COMP0302",chartType:"pie (\uD30C\uC774 \uCC28\uD2B8)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0302",fields:"col1Nm(\uC2DC\uAC04\uB300) / col1Num(\uBE44\uC911%)",desc:"\uC544\uCE68\xB7\uC810\uC2EC\xB7\uC800\uB141\xB7\uC57C\uAC04 \uC2DC\uAC04\uB300\uBCC4 \uBE44\uC911.",tag:`<co-echart
  :option="cfOpt0302"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0302",d:"pie series \u2014 \uC2DC\uAC04\uB300 4\uAD6C\uAC04 \uC0C9\uC0C1"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0303:{compId:"COMP0303",chartType:"bar horizontal (\uAC00\uB85C \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0303",fields:"col1Nm(\uC9C0\uC5ED\uBA85) / col1Num(\uB9E4\uCD9C\uC561)",desc:"\uC2DC\uB3C4\uBCC4 \uB9E4\uCD9C \uC21C\uC704.",tag:`<co-echart
  :option="cfOpt0303"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0303",d:"yAxis category(\uC9C0\uC5ED\uBA85\uC5ED\uC21C) + xAxis value"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0304:{compId:"COMP0304",chartType:"line (\uAEBE\uC740\uC120)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0304",fields:"col1Nm(\uC2DC\uAC01 00~23) / col1Num(\uC8FC\uBB38\uAC74\uC218)",desc:"24\uC2DC\uAC04 \uC2DC\uAC04\uB300\uBCC4 \uC8FC\uBB38 \uBD84\uD3EC.",tag:`<co-echart
  :option="cfOpt0304"
  height="180px"
/>`,attrs:[{k:":option",v:"cfOpt0304",d:"xAxis 0~23\uC2DC 24\uD3EC\uC778\uD2B8 line"},{k:"height",v:'"180px"',d:"\uC881\uC740 \uCE74\uB4DC \uAE30\uC900 \uB192\uC774"}]},COMP0401:{compId:"COMP0401",chartType:"radar (\uB808\uC774\uB354 \uCC28\uD2B8)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0401",fields:"col1Nm(\uC9C0\uD45C\uBA85) / col1Num(\uC810\uC218 0~100)",desc:"\uB9E4\uCD9C\uC131\uC7A5\xB7\uACE0\uAC1D\uB9CC\uC871\xB7\uC7AC\uAD6C\uB9E4\uC728\xB7\uC2E0\uADDC\uACE0\uAC1D\xB7\uB9C8\uC9C4\uC728\xB7\uCC44\uB110\uD655\uC7A5 6\uAC1C \uC9C0\uD45C.",tag:`<co-echart
  :option="cfOpt0401"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0401",d:"radar indicator 6\uCD95 + areaStyle \uBC18\uD22C\uBA85"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0402:{compId:"COMP0402",chartType:"bar stacked (\uB204\uC801 \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0402",fields:"col1Nm(\uC6D4) / col1Num(\uACE0\uC18C\uB4DD) / col2Num(\uC911\uAC04) / col3Num(\uC800\uC18C\uB4DD)",desc:"\uC6D4\uBCC4 \uC18C\uB4DD\uC218\uC900 3\uB2E8\uACC4 \uB204\uC801 \uB9E4\uCD9C.",tag:`<co-echart
  :option="cfOpt0402"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0402",d:'stack:"total" bar 3 series \u2014 \uACE0\uC18C\uB4DD/\uC911\uAC04/\uC800\uC18C\uB4DD'},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},COMP0403:{compId:"COMP0403",chartType:"pie (\uD30C\uC774 \uCC28\uD2B8)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0403",fields:"col1Nm(\uBC30\uC1A1\uC720\uD615) / col1Num(\uBE44\uC911%)",desc:"\uBB34\uB8CC\xB7\uC720\uB8CC\xB7\uC870\uAC74\uBD80\uBB34\uB8CC\xB7\uC0C8\uBCBD\uBC30\uC1A1 \uBE44\uC911.",tag:`<co-echart
  :option="cfOpt0403"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOpt0403",d:"pie series \u2014 \uBC30\uC1A1\uC720\uD615 4\uC885 \uC0C9\uC0C1"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},XVIEW:{compId:"(\uC5C6\uC74C)",chartType:"scatter + brush (X-View \uD788\uD2B8\uB9F5)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 \uC2E4\uC2DC\uAC04 \uC0DD\uC131)",dataKey:"xviewData",fields:"t(timestamp ms) / rt(\uC751\uB2F5\uC2DC\uAC04ms) / err(boolean)",desc:"\uBE0C\uB77C\uC6B0\uC800 \uB85C\uCEEC\uC5D0\uC11C 800\uAC1C \uB79C\uB364 \uD3EC\uC778\uD2B8 \uC0DD\uC131. 10\uCD08\uB9C8\uB2E4 \uC0C8 \uD3EC\uC778\uD2B8 \uCD94\uAC00. \uC2E4\uC81C \uAD6C\uD604 \uC2DC APM \uC5D0\uC774\uC804\uD2B8 \uB370\uC774\uD130 \uC5F0\uB3D9 \uD544\uC694.",tag:`<co-echart
  :option="cfOptXview"
  height="360px"
  @brush-selected="onXviewBrush"
/>`,attrs:[{k:":option",v:"cfOptXview",d:"scatter series \u2014 \uC815\uC0C1(\uD30C\uB791)/\uC5D0\uB7EC(\uBE68\uAC15), brush toolbox \uD3EC\uD568"},{k:"height",v:'"360px"',d:"\uB4DC\uB9B4\uB2E4\uC6B4 \uC601\uC5ED \uD3EC\uD568 \uB192\uC774"},{k:"@brush-selected",v:"onXviewBrush",d:"\uBE0C\uB7EC\uC2DC \uC120\uD0DD \uC2DC \uB4DC\uB9B4\uB2E4\uC6B4 \uD14C\uC774\uBE14 \uAC31\uC2E0 emit \uD578\uB4E4\uB7EC"}]}},V=t=>({compId:t,uiNm:"DashboardBoEc02",startYmd:(f.startDt||"").replace(/-/g,""),endYmd:(f.endDt||"").replace(/-/g,"")}),U=(t,e,a,o,s,c)=>{t.stopPropagation();const n=t.currentTarget.getBoundingClientRect(),l=window.scrollY||0,d=window.scrollX||0;if(p.infoPanel&&p.infoPanel.title===e){p.infoPanel=null;return}let m=null;try{if(a){const y=a();m=y!==null&&typeof y=="object"&&"value"in y?y.value:y}}catch{}const S=s!==void 0?s:o?r[o]:null,h=c?pt[c]:null,k=h&&h.compId!=="(\uC5C6\uC74C)"?V(h.compId):null;p.infoPanel={title:e,optJson:m?JSON.stringify(m,null,2):"(\uC5C6\uC74C)",dataJson:S?JSON.stringify(S,null,2):"(\uC5C6\uC74C)",src:h,apiParams:k,tab:"opt",top:n.bottom+l+6,left:Math.min(n.left+d,window.innerWidth-560)}},dt=t=>{U(t,"X-View \uD788\uD2B8\uB9F5",()=>Y,null,v.value.slice(0,10),"XVIEW")},ft=t=>{p.infoPanel&&(p.infoPanel.tab=t)},F=()=>{p.infoPanel=null},g=["20250501","20250601","20250701","20250801","20250901","20251001","20251101","20251201","20260101","20260201","20260301","20260401","20260501","20260601"],u=["25-05","25-06","25-07","25-08","25-09","25-10","25-11","25-12","26-01","26-02","26-03","26-04","26-05","26-06"],G=[982e5,1125e5,1347e5,1283e5,1196e5,142e6,1558e5,1874e5,1412e5,1287e5,1389e5,1512e5,1728e5,140372550],mt=[312,428,387,465,398,512,488,621,401,356,419,487,552,370],bt=[87,102,94,118,109,131,125,153,111,98,107,128,142,95],ut=[28400,33200,41100,38700,35900,44200,47600,59300,42100,37800,41500,46900,53200,40772],xt=[1820,2150,2690,2530,2380,2870,3020,3810,2740,2490,2680,3010,3420,2540],ht=["\uC790\uC0AC\uBAB0","\uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4","\uCFE0\uD321","11\uBC88\uAC00","G\uB9C8\uCF13","Auction","GS\uC0F5","TMON","\uC704\uBA54\uD504","\uB86F\uB370\uC628","\uD648\uC564\uC1FC\uD551","\uD604\uB300H\uBAB0"],gt=[38,22,14,9,6,4,2,1.5,1.2,1,.8,.5],yt=()=>{const t={};t.info0101=g.map((c,n)=>({col1Nm:u[n],col1Num:G[n]})),t.info0102=g.map((c,n)=>({col1Nm:u[n],col1Num:mt[n],col2Nm:u[n],col2Num:bt[n]})),t.info0103=g.map((c,n)=>({col1Nm:u[n],col1Num:ut[n]})),t.info0104=g.map((c,n)=>({col1Nm:u[n],col1Num:xt[n]})),t.info0201=[],ht.forEach((c,n)=>{g.forEach((l,d)=>{t.info0201.push({col1Nm:c,col2Nm:u[d],col2Num:Math.round(G[d]*gt[n]/100)})})}),t.info0202=[{col1Nm:"\uCD1D \uB9E4\uCD9C\uD604\uD669",col1Num:1951772550,col2Nm:"\uCD1D \uAD6C\uB9E4\uC218\uB7C9",col2Num:30033,col3Nm:"\uD3C9\uADE0 \uB9C8\uC9C4\uC728",col3Num:7.7,col4Nm:"\uD3C9\uADE0 \uACB0\uC81C\uAE08\uC561",col4Num:64988}],t.info0203=[{col1Nm:"\uC6B8 \uBE14\uB80C\uB4DC \uCF54\uD2B8",col1Num:595e5},{col1Nm:"\uAE00\uB85C\uBC8C \uBBF8\uB514 \uB4DC\uB808\uC2A4",col1Num:423e5},{col1Nm:"\uC2AC\uB9BC\uD54F \uB370\uB2D8 \uC9C4",col1Num:389e5},{col1Nm:"\uCE74\uACE0 \uC640\uC774\uB4DC \uD32C\uCE20",col1Num:312e5},{col1Nm:"\uCE90\uC2DC\uBBF8\uC5B4 \uB2C8\uD2B8 \uC2A4\uC6E8\uD130",col1Num:275e5},{col1Nm:"\uC624\uBC84\uC0AC\uC774\uC988 \uCF54\uD2B8",col1Num:241e5},{col1Nm:"\uC2A4\uD2B8\uB77C\uC774\uD504 \uD2F0\uC154\uCE20",col1Num:198e5}],t.info0204=[{col1Nm:"\uC790\uC0AC\uBAB0",col1Num:48},{col1Nm:"\uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4",col1Num:22},{col1Nm:"\uCFE0\uD321",col1Num:14},{col1Nm:"11\uBC88\uAC00",col1Num:9},{col1Nm:"G\uB9C8\uCF13",col1Num:4},{col1Nm:"Auction",col1Num:2},{col1Nm:"\uAE30\uD0C0",col1Num:1}],t.info0301=[{col1Nm:"Mobile",col1Num:58},{col1Nm:"Desktop",col1Num:32},{col1Nm:"Tablet",col1Num:10}],t.info0302=[{col1Nm:"\uC544\uCE68 (06-12)",col1Num:15},{col1Nm:"\uC810\uC2EC (12-18)",col1Num:22},{col1Nm:"\uC800\uB141 (18-24)",col1Num:38},{col1Nm:"\uC57C\uAC04 (00-06)",col1Num:25}],t.info0303=[{col1Nm:"\uC11C\uC6B8",col1Num:58e6},{col1Nm:"\uACBD\uAE30",col1Num:42e6},{col1Nm:"\uBD80\uC0B0",col1Num:21e6},{col1Nm:"\uC778\uCC9C",col1Num:16e6},{col1Nm:"\uB300\uAD6C",col1Num:12e6},{col1Nm:"\uAD11\uC8FC",col1Num:9e6},{col1Nm:"\uB300\uC804",col1Num:85e5},{col1Nm:"\uAE30\uD0C0",col1Num:6e6}];const e=[42,28,19,14,11,13,21,38,65,89,102,118,135,128,119,124,138,156,187,212,198,176,143,87];t.info0304=e.map((c,n)=>({col1Nm:String(n).padStart(2,"0"),col1Num:c})),t.info0401=[{col1Nm:"\uB9E4\uCD9C\uC131\uC7A5",col1Num:78},{col1Nm:"\uACE0\uAC1D\uB9CC\uC871",col1Num:82},{col1Nm:"\uC7AC\uAD6C\uB9E4\uC728",col1Num:65},{col1Nm:"\uC2E0\uADDC\uACE0\uAC1D",col1Num:55},{col1Nm:"\uB9C8\uC9C4\uC728",col1Num:42},{col1Nm:"\uCC44\uB110\uD655\uC7A5",col1Num:70}];const a=[42,47,52,49.5,46,55,58,71,51,47,53,57,62,40].map(c=>c*1e6),o=[55,61,67,64,59,72,75,92,66,61,69,74,81,52].map(c=>c*1e6),s=[21.5,24,26.8,25.7,23.7,28.3,29.4,35.6,26.1,23.9,26.2,29.5,31.8,20.97].map(c=>c*1e6);return t.info0402=g.map((c,n)=>({col1Nm:u[n],col1Num:a[n],col2Num:o[n],col3Num:s[n]})),t.info0403=[{col1Nm:"\uBB34\uB8CC\uBC30\uC1A1",col1Num:48},{col1Nm:"\uC720\uB8CC\uBC30\uC1A1",col1Num:27},{col1Nm:"\uC870\uAC74\uBD80\uBB34\uB8CC",col1Num:18},{col1Nm:"\uC0C8\uBCBD\uBC30\uC1A1",col1Num:7}],t},w=[{url:"/bo/ec/mb/member/page",uiNm:"\uD68C\uC6D0\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/pd/prod/page",uiNm:"\uC0C1\uD488\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/od/order/page",uiNm:"\uC8FC\uBB38\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/od/claim/page",uiNm:"\uD074\uB808\uC784\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/pm/coupon/page",uiNm:"\uCFE0\uD3F0\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/cm/dashboard/data",uiNm:"\uB300\uC2DC\uBCF4\uB4DC",cmdNm:"\uC870\uD68C"},{url:"/bo/sy/user/page",uiNm:"\uC0AC\uC6A9\uC790\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/sy/code/list",uiNm:"\uCF54\uB4DC\uAD00\uB9AC",cmdNm:"\uCF54\uB4DC\uBAA9\uB85D"},{url:"/bo/ec/pd/prod/save/base",uiNm:"\uC0C1\uD488\uAD00\uB9AC",cmdNm:"\uC800\uC7A5"},{url:"/bo/ec/od/order/save/base",uiNm:"\uC8FC\uBB38\uAD00\uB9AC",cmdNm:"\uC800\uC7A5"},{url:"/bo/ec/mb/member/save/base",uiNm:"\uD68C\uC6D0\uAD00\uB9AC",cmdNm:"\uC800\uC7A5"},{url:"/bo/ec/dp/ui/list",uiNm:"\uC804\uC2DC\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/bo/ec/pm/event/page",uiNm:"\uC774\uBCA4\uD2B8\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"},{url:"/co/sy/code/grp-codes",uiNm:"\uACF5\uD1B5",cmdNm:"\uCF54\uB4DC\uC870\uD68C"},{url:"/bo/sy/menu/list",uiNm:"\uBA54\uB274\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C"}],v=R((()=>{const t=Date.now(),e=[];for(let a=0;a<800;a++){const o=t-Math.random()*10*60*1e3,s=Math.random()<.75?Math.random()*500:Math.random()<.7?500+Math.random()*2500:3e3+Math.random()*5e3,c=s>5e3&&Math.random()<.3,n=w[Math.floor(Math.random()*w.length)];e.push({t:o,rt:Math.round(s),err:c,url:n.url,uiNm:n.uiNm,cmdNm:n.cmdNm})}return e})());let I=null;const L=async()=>{var t,e;p.loading=!0;try{const a=(f.startDt||"").replace(/-/g,""),o=(f.endDt||"").replace(/-/g,""),s=((t=window.boCommonFilter)==null?void 0:t.siteId)||"",c=ot.map(d=>({compId:d,itemKey:at[d],uiNm:"DashboardBoEc02",siteId:s,startYmd:a,endYmd:o})),l=((e=(await boApiSvc.cmDashboard.getData(c,"\uB300\uC2DC\uBCF4\uB4DC","\uC870\uD68C")).data)==null?void 0:e.data)||{};Object.keys(r).forEach(d=>{r[d]=l[d]||[]})}catch(a){console.error("[\uB300\uC2DC\uBCF4\uB4DC \uC870\uD68C \uC624\uB958]",a);const o=yt();Object.keys(r).forEach(s=>{r[s]=o[s]||[]})}finally{p.loading=!1}},vt=()=>L(),Nt=()=>{f.startDt=X,f.endDt=K,f.channels=[...z],f.ages=[...A],f.genders=[...T],f.memberTypes=[...E],f.categories=[...D],L()},St=()=>{const t=r.info0101.map(n=>n.col1Nm||""),e=[["\uC6D4","\uB9E4\uCD9C","\uAC00\uC785","\uD0C8\uD1F4","\uD074\uB9AD","\uC8FC\uBB38\uC644\uB8CC"]];t.forEach((n,l)=>{var d,m,S,h,k;e.push([n,((d=r.info0101[l])==null?void 0:d.col1Num)||0,((m=r.info0102[l])==null?void 0:m.col1Num)||0,((S=r.info0102[l])==null?void 0:S.col2Num)||0,((h=r.info0103[l])==null?void 0:h.col1Num)||0,((k=r.info0104[l])==null?void 0:k.col1Num)||0])});const a=e.map(n=>n.map(l=>'"'+String(l).replace(/"/g,'""')+'"').join(",")).join(`
`),o=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(o),c=document.createElement("a");c.href=s,c.download=coUtil.cofBuildExportFilename("\uB300\uC2DC\uBCF4\uB4DC.csv"),c.click(),URL.revokeObjectURL(s)},x=i(()=>r.info0101.map(t=>t.col1Nm||"")),wt=i(()=>r.info0101.map(t=>t.col1Num||0)),Ot=i(()=>r.info0102.map(t=>t.col1Num||0)),Pt=i(()=>r.info0102.map(t=>t.col2Num||0)),kt=i(()=>r.info0103.map(t=>t.col1Num||0)),Mt=i(()=>r.info0104.map(t=>t.col1Num||0)),O=i(()=>r.info0202[0]||{}),Ct=i(()=>O.value.col1Num||0),zt=i(()=>O.value.col2Num||0),At=i(()=>O.value.col3Num||0),Tt=i(()=>O.value.col4Num||0),Et=t=>(Math.round(t*10)/10).toFixed(1)+"%",Dt=t=>p.tabMode==="tab"?p.activeTab===t:!0,It=i(()=>p.tabMode==="tab"?"1fr":"repeat("+parseInt(p.tabMode)+",minmax(0,1fr))"),N={top:36,right:16,bottom:36,left:60},Lt=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uB9E4\uCD9C: "+b(t[0].value)+"\uC6D0"},grid:N,xAxis:{type:"category",data:x.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:[{type:"bar",data:wt.value,barMaxWidth:36,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#e8587a"},{offset:1,color:"#ff8aa5"}]},borderRadius:[4,4,0,0]},emphasis:{itemStyle:{color:"#c73060"}}}]})),Rt=i(()=>({tooltip:{trigger:"axis"},legend:{top:4,right:8,textStyle:{fontSize:10}},grid:{...N,top:44},xAxis:{type:"category",data:x.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{name:"\uAC00\uC785",type:"bar",data:Ot.value,barMaxWidth:20,itemStyle:{color:"#3b82f6",borderRadius:[3,3,0,0]}},{name:"\uD0C8\uD1F4",type:"bar",data:Pt.value,barMaxWidth:20,itemStyle:{color:"#ef4444",borderRadius:[3,3,0,0]}}]})),Bt=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uD074\uB9AD: "+b(t[0].value)+"\uD68C"},grid:N,xAxis:{type:"category",data:x.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"line",data:kt.value,smooth:!0,symbol:"circle",symbolSize:5,lineStyle:{color:"#10b981",width:2.5},itemStyle:{color:"#10b981"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(16,185,129,0.35)"},{offset:1,color:"rgba(16,185,129,0.02)"}]}}}]})),_t=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uC8FC\uBB38: "+b(t[0].value)+"\uAC74"},grid:N,xAxis:{type:"category",data:x.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"bar",data:Mt.value,barMaxWidth:36,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#7b1fa2"},{offset:1,color:"#a855f7"}]},borderRadius:[4,4,0,0]}}]})),Kt=i(()=>{const t={};r.info0201.forEach(a=>{const o=a.col1Nm||"";t[o]||(t[o]={name:o,color:Q[o]||"#999",values:{}}),t[o].values[a.col2Nm||""]=a.col2Num||0});const e=x.value;return Object.values(t).map(a=>({name:a.name,color:a.color,values:e.map(o=>a.values[o]||0)}))}),Xt=i(()=>({tooltip:{trigger:"axis"},legend:{type:"scroll",bottom:0,textStyle:{fontSize:9}},grid:{top:36,right:16,bottom:60,left:70},xAxis:{type:"category",data:x.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:Kt.value.map(t=>({name:t.name,type:"line",data:t.values,smooth:!0,symbolSize:4,lineStyle:{color:t.color,width:2},itemStyle:{color:t.color}}))})),W=i(()=>r.info0203.map(t=>({name:t.col1Nm||"",value:t.col1Num||0}))),Ht=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+": "+b(t[0].value)+"\uC6D0"},grid:{top:8,right:80,bottom:8,left:130},xAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},yAxis:{type:"category",data:W.value.map(t=>t.name).reverse(),axisLabel:{fontSize:10,color:"#555"}},series:[{type:"bar",data:W.value.map(t=>t.value).reverse(),barMaxWidth:18,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#7b1fa2"},{offset:1,color:"#e8587a"}]},borderRadius:[0,4,4,0]},label:{show:!0,position:"right",formatter:t=>b(t.value)+"\uC6D0",fontSize:10,color:"#555"}}]})),Vt=i(()=>{const t=["#e8587a","#7b1fa2","#3b82f6","#10b981","#f59e0b","#ef4444","#6366f1"];return r.info0204.map((e,a)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[a%t.length]}}))}),Ut=i(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Vt.value,label:{show:!1},emphasis:{label:{show:!0,fontSize:12,fontWeight:"bold"}}}]})),Ft=i(()=>{const t=["#3b82f6","#10b981","#f59e0b"];return r.info0301.map((e,a)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[a%t.length]}}))}),Gt=i(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Ft.value,label:{show:!1},emphasis:{label:{show:!0,fontSize:11,fontWeight:"bold"}}}]})),Wt=i(()=>{const t=["#fbbf24","#f97316","#e8587a","#6366f1"];return r.info0302.map((e,a)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[a%t.length]}}))}),$t=i(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:9}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Wt.value,label:{show:!1},emphasis:{label:{show:!0,fontSize:11}}}]})),$=i(()=>r.info0303.map(t=>({name:t.col1Nm||"",value:t.col1Num||0}))),Yt=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+": "+b(t[0].value)},grid:{top:8,right:60,bottom:8,left:50},xAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},yAxis:{type:"category",data:$.value.map(t=>t.name).reverse(),axisLabel:{fontSize:10,color:"#555"}},series:[{type:"bar",data:$.value.map(t=>t.value).reverse(),barMaxWidth:16,itemStyle:{color:"#3b82f6",borderRadius:[0,4,4,0]},label:{show:!0,position:"right",formatter:t=>b(t.value),fontSize:10,color:"#555"}}]})),jt=i(()=>r.info0304.map(t=>t.col1Num||0)),Jt=i(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].axisValue+"\uC2DC: "+t[0].value+"\uAC74"},grid:{top:20,right:16,bottom:28,left:44},xAxis:{type:"category",data:Array.from({length:24},(t,e)=>String(e).padStart(2,"0")),axisLabel:{fontSize:10,color:"#888",interval:5}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"line",data:jt.value,smooth:!0,symbol:"circle",symbolSize:4,lineStyle:{color:"#10b981",width:2},itemStyle:{color:"#10b981"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(16,185,129,0.3)"},{offset:1,color:"rgba(16,185,129,0.02)"}]}}}]})),Zt=i(()=>r.info0401.map(t=>({label:t.col1Nm||"",value:t.col1Num||0}))),Qt=[{name:"",max:100},{name:"",max:100},{name:"",max:100}],qt=i(()=>{const t=Zt.value;return{tooltip:{trigger:"item"},radar:{indicator:t.length?t.map(e=>({name:e.label,max:100})):Qt,center:["50%","52%"],radius:"68%",axisName:{fontSize:11,color:"#555"},splitArea:{areaStyle:{color:["rgba(232,88,122,0.04)","rgba(232,88,122,0.08)"]}},splitLine:{lineStyle:{color:"#e5e7eb"}}},series:t.length?[{type:"radar",data:[{value:t.map(e=>e.value),name:"\uC601\uC5C5\uC9C0\uD45C",areaStyle:{color:"rgba(232,88,122,0.2)"},lineStyle:{color:"#e8587a",width:2},itemStyle:{color:"#e8587a"}}]}]:[]}}),P=i(()=>({labels:r.info0402.map(t=>t.col1Nm||""),high:r.info0402.map(t=>t.col1Num||0),middle:r.info0402.map(t=>t.col2Num||0),low:r.info0402.map(t=>t.col3Num||0)})),te=i(()=>({tooltip:{trigger:"axis"},legend:{top:4,right:8,textStyle:{fontSize:10}},grid:{...N,top:44},xAxis:{type:"category",data:P.value.labels,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:[{name:"\uC0C1\uC704",type:"line",data:P.value.high,smooth:!0,symbolSize:4,lineStyle:{color:"#7b1fa2"},itemStyle:{color:"#7b1fa2"},areaStyle:{color:"rgba(123,31,162,0.15)"}},{name:"\uC911\uC704",type:"line",data:P.value.middle,smooth:!0,symbolSize:4,lineStyle:{color:"#3b82f6"},itemStyle:{color:"#3b82f6"},areaStyle:{color:"rgba(59,130,246,0.12)"}},{name:"\uD558\uC704",type:"line",data:P.value.low,smooth:!0,symbolSize:4,lineStyle:{color:"#10b981"},itemStyle:{color:"#10b981"},areaStyle:{color:"rgba(16,185,129,0.10)"}}]})),ee=i(()=>{const t=["#10b981","#9ca3af","#3b82f6","#f59e0b"];return r.info0403.map((e,a)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[a%t.length]}}))}),oe=i(()=>({tooltip:{trigger:"item",formatter:t=>t.name+"\uBC30\uC1A1: "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:ee.value,label:{show:!1},emphasis:{label:{show:!0,fontSize:11}}}]})),Y=i(()=>{const t=Date.now(),e=t-600*1e3,a=v.value.map(o=>[o.t,o.rt,o.err||o.rt>3e3?2:o.rt>500?1:0,o.url||"",o.uiNm||"",o.cmdNm||""]);return{tooltip:{trigger:"item",formatter:o=>{const s=new Date(o.data[0]),c=s.getHours()+":"+String(s.getMinutes()).padStart(2,"0")+":"+String(s.getSeconds()).padStart(2,"0"),n=["\uC815\uC0C1","\uB290\uB9BC","\uC624\uB958"][o.data[2]]||"",l=o.data[3]||"",d=o.data[4]||"",m=o.data[5]||"";return c+"<br/>\uC751\uB2F5\uC2DC\uAC04: <b>"+o.data[1].toFixed(0)+"ms</b><br/>\uC0C1\uD0DC: "+n+(l?'<br/><span style="color:#7dd3fc;font-family:monospace;font-size:11px;">'+l+"</span>":"")+(d?'<br/><span style="color:#c4b5fd;">X-UI-Nm: <b>'+d+"</b></span>":"")+(m?' &nbsp;<span style="color:#6ee7b7;">X-Cmd-Nm: <b>'+m+"</b></span>":"")}},toolbox:{feature:{dataZoom:{yAxisIndex:"none",title:{zoom:"\uBC94\uC704 \uB4DC\uB798\uADF8",back:"\uCD08\uAE30\uD654"}},restore:{title:"\uCD08\uAE30\uD654"}},right:16,top:6},brush:{toolbox:["rect","clear"],xAxisIndex:0,throttleType:"debounce",throttleDelay:300},grid:{top:48,right:24,bottom:48,left:64},xAxis:{type:"time",min:e,max:t,axisLabel:{fontSize:10,color:"#888",formatter:o=>{const s=new Date(o);return s.getHours()+":"+String(s.getMinutes()).padStart(2,"0")}},splitLine:{lineStyle:{color:"#f0f0f0"}}},yAxis:{type:"value",name:"\uC751\uB2F5\uC2DC\uAC04(ms)",nameTextStyle:{fontSize:10,color:"#888"},min:0,axisLabel:{fontSize:10,color:"#888",formatter:o=>o+"ms"},splitLine:{lineStyle:{color:"#f0f0f0"}}},visualMap:{show:!0,type:"piecewise",categories:[0,1,2],dimension:2,pieces:[{value:0,label:"\uC815\uC0C1 (<500ms)",color:"#3b82f6"},{value:1,label:"\uB290\uB9BC (<3000ms)",color:"#f59e0b"},{value:2,label:"\uC624\uB958 / \uB9E4\uC6B0 \uB290\uB9BC",color:"#ef4444"}],right:16,bottom:48,textStyle:{fontSize:10}},series:[{type:"line",data:[[e,500],[t,500]],lineStyle:{type:"dashed",color:"#f59e0b",width:1.5},symbol:"none",tooltip:{show:!1},z:5},{type:"line",data:[[e,3e3],[t,3e3]],lineStyle:{type:"dashed",color:"#ef4444",width:1.5},symbol:"none",tooltip:{show:!1},z:5},{type:"scatter",data:a,symbolSize:4,large:!0,largeThreshold:200,encode:{x:0,y:1,itemName:0}}]}}),ae=t=>{if(!t.areas||!t.areas.length)return;const e=t.areas[0];if(!e.coordRange||!e.coordRange[0])return;const[a,o]=e.coordRange[0],[s,c]=e.coordRange[1]||[0,99999],n=v.value.filter(l=>l.t>=a&&l.t<=o&&l.rt>=s&&l.rt<=c);p.xviewDrillRows=n.map(l=>{const d=new Date(l.t);return{time:d.getHours()+":"+String(d.getMinutes()).padStart(2,"0")+":"+String(d.getSeconds()).padStart(2,"0"),rt:l.rt,status:l.err?"\uC624\uB958":l.rt>3e3?"\uB9E4\uC6B0 \uB290\uB9BC":l.rt>500?"\uB290\uB9BC":"\uC815\uC0C1",statusColor:l.err||l.rt>3e3?"#ef4444":l.rt>500?"#f59e0b":"#10b981",url:l.url||"",uiNm:l.uiNm||"",cmdNm:l.cmdNm||""}}).sort((l,d)=>d.rt-l.rt),p.xviewDrillVisible=!0};return j(async()=>{document.addEventListener("click",F),L(),I=setInterval(()=>{const t=Date.now(),e=Math.random()<.75?Math.random()*500:Math.random()<.7?500+Math.random()*2500:3e3+Math.random()*5e3,a=e>5e3&&Math.random()<.3,o=w[Math.floor(Math.random()*w.length)];v.value=[...v.value.filter(s=>s.t>t-600*1e3),{t,rt:Math.round(e),err:a,url:o.url,uiNm:o.uiNm,cmdNm:o.cmdNm}]},2e3)}),J(()=>{I&&clearInterval(I),document.removeEventListener("click",F)}),{uiState:p,filters:f,dash:r,handleBtnAction:it,handleSelectAction:lt,cfBaseGridColumns:It,showPanel:Dt,isSel:st,xviewDrillColumns:[{key:"time",label:"\uC2DC\uAC01",style:"width:72px;",cellStyle:"white-space:nowrap;"},{key:"rt",label:"\uC751\uB2F5\uC2DC\uAC04",style:"width:88px;",align:"right",fmt:t=>t+"ms",cellStyle:"font-weight:700;"},{key:"status",label:"\uC0C1\uD0DC",style:"width:76px;",align:"center",badge:t=>({text:t.status,style:`background:${t.statusColor};color:#fff;font-size:10px;`})},{key:"url",label:"URL",cellStyle:"font-family:monospace;font-size:10.5px;color:#3b82f6;white-space:nowrap;"},{key:"uiNm",label:"X-UI-Nm",style:"width:90px;",cellStyle:"font-size:10.5px;color:#6366f1;white-space:nowrap;"},{key:"cmdNm",label:"X-Cmd-Nm",style:"width:90px;",cellStyle:"font-size:10.5px;color:#10b981;white-space:nowrap;"}],attrsGridColumns:[{key:"k",label:"\uC18D\uC131",style:"width:38%;",cellStyle:"color:#7dd3fc;font-size:10.5px;white-space:nowrap;font-weight:700;"},{key:"v",label:"\uAC12",style:"width:28%;",cellStyle:"color:#fbbf24;font-size:10.5px;white-space:nowrap;"},{key:"d",label:"\uC124\uBA85",cellStyle:"color:#9ca3af;font-size:10px;"}],TABS:nt,CHANNELS:z,AGES:A,GENDERS:T,MEMBER_TYPES:E,CATEGORIES:D,fmt:b,pct:Et,cfMonthLabels:x,cfTotalSales:Ct,cfTotalQtyComp:zt,marginRate:At,cfAvgOrderValue:Tt,cfOpt0101:Lt,cfOpt0102:Rt,cfOpt0103:Bt,cfOpt0104:_t,cfOpt0201:Xt,cfOpt0203:Ht,cfOpt0204:Ut,cfOpt0301:Gt,cfOpt0302:$t,cfOpt0303:Yt,cfOpt0304:Jt,cfOpt0401:qt,cfOpt0402:te,cfOpt0403:oe,cfOptXview:Y,onXviewBrush:ae,fnOpenInfo:U,fnOpenXviewInfo:dt,fnInfoTab:ft,fnBuildApiParams:V,pdfAreaRef:H,handleExportPdf:q,handleShareKakao:tt,handleCopyLink:et}},template:`
<div :class="(uiState.tabMode==='3col'||uiState.tabMode==='4col') ? 'dash-wide' : 'bo-wrap'" ref="pdfAreaRef">

  <!-- \uD5E4\uB354 -->
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:12px 16px;background:linear-gradient(135deg,#1a1a2e 0%,#2d2d44 100%);border-radius:10px;color:#fff;">
    <div style="width:6px;height:24px;background:#e8587a;border-radius:3px;"></div>
    <span style="font-size:17px;font-weight:800;letter-spacing:-0.5px;">\uC628\uB77C\uC778 \uC1FC\uD551\uBAB0 \uB9E4\uCD9C \uBC0F \uD310\uB9E4\uD604\uD669</span>
    <span style="flex:1;"></span>
    <span style="font-size:11px;color:#aaa;">14\uAC1C\uC6D4 \uAE30\uC900 \xB7 {{ cfMonthLabels.length > 0 ? (cfMonthLabels[0] + ' ~ ' + cfMonthLabels[cfMonthLabels.length-1]) : '-' }}</span>
    <button class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
    <button class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="uiState.pdfExporting" @click="handleExportPdf">
      <span v-if="uiState.pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg></button>
  </div>

  <!-- \uD544\uD130 -->
  <bo-container card-style="padding:12px 14px;margin-bottom:14px;display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <span style="font-size:11px;font-weight:700;color:#666;width:74px;">\uC870\uD68C\uAE30\uAC04</span>
      <input type="date" v-model="filters.startDt" class="form-control" style="width:150px;height:30px;font-size:12px;">
      <span style="color:#999;">~</span>
      <input type="date" v-model="filters.endDt" class="form-control" style="width:150px;height:30px;font-size:12px;">
      <button class="btn_filter_toggle" @click="handleBtnAction('filters-toggleExpand')" style="padding:0 8px;" :title="uiState.filterExpand?'\uC0C1\uC138\uD544\uD130 \uC811\uAE30':'\uC0C1\uC138\uD544\uD130 \uD3BC\uCE58\uAE30'">
        {{ uiState.filterExpand ? '\u25B2' : '\u25BC' }}
      </button>
      <span style="flex:1;"></span>
      <button class="btn btn_search"  @click="handleBtnAction('filters-search')" style="font-size:11px;">\u{1F50D} \uAC80\uC0C9</button>
      <button class="btn btn_excel"   @click="handleBtnAction('stats-excel')" style="font-size:11px;background:#e8f5e9;color:#2e7d32;border-color:#a5d6a7;">\u{1F4E5} \uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC</button>
      <button class="btn btn_reset"   @click="handleBtnAction('filters-reset')" style="font-size:11px;">\u{1F504} \uCD08\uAE30\uD654</button>
    </div>
    <div v-if="uiState.filterExpand" style="display:flex;flex-direction:column;gap:8px;border-top:1px dashed #eee;padding-top:10px;">
      <div v-for="grp in [{key:'channels',label:'\uD310\uB9E4\uCC44\uB110',all:CHANNELS},{key:'ages',label:'\uB098\uC774\uB300',all:AGES},{key:'genders',label:'\uC131\uBCC4',all:GENDERS},{key:'memberTypes',label:'\uD68C\uC6D0\uC720\uD615',all:MEMBER_TYPES},{key:'categories',label:'\uCE74\uD14C\uACE0\uB9AC',all:CATEGORIES}]" :key="grp.key" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <span style="font-size:11px;font-weight:700;color:#666;width:74px;">{{ grp.label }}</span>
        <button @click="handleBtnAction('filters-toggleAll',{key:grp.key,all:grp.all})"
          :style="{fontSize:'11px',padding:'3px 10px',borderRadius:'12px',border:'1px solid',cursor:'pointer',background:filters[grp.key].length===grp.all.length?'#1a1a2e':'#fff',color:filters[grp.key].length===grp.all.length?'#fff':'#555',borderColor:filters[grp.key].length===grp.all.length?'#1a1a2e':'#ddd'}">\uC804\uCCB4</button>
        <button v-for="v in grp.all" :key="v" @click="handleBtnAction('filters-toggle',{key:grp.key,v})"
          :style="{fontSize:'11px',padding:'3px 10px',borderRadius:'12px',border:'1px solid',cursor:'pointer',background:isSel(filters[grp.key],v)?'#fff0f4':'#fafbfc',color:isSel(filters[grp.key],v)?'#e8587a':'#888',borderColor:isSel(filters[grp.key],v)?'#e8587a':'#e5e7eb',fontWeight:isSel(filters[grp.key],v)?700:400}">{{ v }}</button>
      </div>
    </div>
  </bo-container>

  <!-- \uD0ED \uBC14 + \uBDF0\uBAA8\uB4DC -->
  <bo-tab-bar :tabs="TABS" :tab="uiState.activeTab" :tab-mode="uiState.tabMode" bg="#f0fdf4"
    @tab-select="id => handleSelectAction('tabs-select', id)"
    @mode-select="m => handleSelectAction('tabMode-set', m)" />

  <!-- \uCC28\uD2B8 \uADF8\uB9AC\uB4DC -->
  <div :style="{display:'grid',gridTemplateColumns:cfBaseGridColumns,gap:'12px'}">

    <!-- 1) \uC6D4\uBCC4 \uB9E4\uCD9C \uB9C9\uB300 -->
    <bo-container v-show="showPanel('sales')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC6D4\uBCC4 \uB9E4\uCD9C\uD604\uD669',()=>cfOpt0101,'info0101',undefined,'COMP0101')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4B0}</button>
        \uC6D4\uBCC4 \uB9E4\uCD9C\uD604\uD669 (14\uAC1C\uC6D4)
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#888;font-weight:500;">\uCD1D {{ fmt(dash.info0101.reduce((a,r)=>a+(r.col1Num||0),0)) }}\uC6D0</span>
      </div>
      <co-echart :option="cfOpt0101" height="260px" />
    </bo-container>

    <!-- 2) \uAC00\uC785/\uD0C8\uD1F4 -->
    <bo-container v-show="showPanel('member')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uAC00\uC785/\uD0C8\uD1F4 \uD604\uD669',()=>cfOpt0102,'info0102',undefined,'COMP0102')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F465}</button>
        \uC6D4\uBCC4 \uACE0\uAC1D \uAC00\uC785/\uD0C8\uD1F4\uC790 \uD604\uD669 (14\uAC1C\uC6D4)
      </div>
      <co-echart :option="cfOpt0102" height="260px" />
    </bo-container>

    <!-- 3) \uC0C1\uD488 \uD074\uB9AD -->
    <bo-container v-show="showPanel('click')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD',()=>cfOpt0103,'info0103',undefined,'COMP0103')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F5B1}</button>
        \uC6D4\uBCC4 \uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD \uD604\uD669 (14\uAC1C\uC6D4)
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#888;">\uCD1D {{ fmt(dash.info0103.reduce((a,r)=>a+(r.col1Num||0),0)) }}\uD68C</span>
      </div>
      <co-echart :option="cfOpt0103" height="260px" />
    </bo-container>

    <!-- 4) \uC8FC\uBB38\uC644\uB8CC -->
    <bo-container v-show="showPanel('order')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC8FC\uBB38\uC644\uB8CC \uD604\uD669',()=>cfOpt0104,'info0104',undefined,'COMP0104')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4CB}</button>
        \uC6D4\uBCC4 \uC8FC\uBB38\uC644\uB8CC \uD604\uD669 (14\uAC1C\uC6D4)
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#888;">\uCD1D {{ fmt(dash.info0104.reduce((a,r)=>a+(r.col1Num||0),0)) }}\uAC74</span>
      </div>
      <co-echart :option="cfOpt0104" height="260px" />
    </bo-container>

    <!-- 5) \uCC44\uB110\uBCC4 \uB9E4\uCD9C \uBA40\uD2F0\uB77C\uC778 -->
    <bo-container v-show="showPanel('channel')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uCC44\uB110\uBCC4 \uB9E4\uCD9C',()=>cfOpt0201,'info0201',undefined,'COMP0201')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4FA}</button>
        \uC6D4\uBCC4 \uD310\uB9E4\uCC44\uB110\uBCC4 \uB9E4\uCD9C\uD604\uD669 (14\uAC1C\uC6D4)
      </div>
      <co-echart :option="cfOpt0201" height="300px" />
    </bo-container>

    <!-- 6) \uD575\uC2EC\uC9C0\uD45C KPI -->
    <bo-container v-show="showPanel('kpi')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:10px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uD575\uC2EC\uC9C0\uD45C KPI',null,'info0202',undefined,'COMP0202')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F3AF}</button>
        \uD575\uC2EC\uC9C0\uD45C
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
        <div v-for="kpi in [
            {label:'\uC804\uCCB4 \uB9E4\uCD9C\uD604\uD669',value:fmt(cfTotalSales),unit:'\uC6D0',color:'#e8587a',icon:'\u{1F4B0}',bg:'#fff0f4'},
            {label:'\uC804\uCCB4 \uAD6C\uB9E4\uC218\uB7C9',value:fmt(cfTotalQtyComp),unit:'\uAC74',color:'#3b82f6',icon:'\u{1F6D2}',bg:'#eff6ff'},
            {label:'\uD3C9\uADE0 \uB9C8\uC9C4\uC728',value:pct(marginRate),unit:'',color:'#10b981',icon:'\u{1F4C8}',bg:'#f0fdf4'},
            {label:'\uD3C9\uADE0 \uACB0\uC81C\uAE08\uC561',value:fmt(cfAvgOrderValue),unit:'\uC6D0',color:'#f59e0b',icon:'\u{1F4B3}',bg:'#fffbeb'},
          ]" :key="kpi.label"
          :style="{background:kpi.bg,border:'1px solid #eef0f3',borderRadius:'8px',padding:'12px',display:'flex',alignItems:'center',gap:'10px'}">
          <div :style="{fontSize:'22px',width:'36px',height:'36px',borderRadius:'8px',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}">{{ kpi.icon }}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:10.5px;color:#666;font-weight:600;">{{ kpi.label }}</div>
            <div :style="{fontSize:'15px',fontWeight:800,color:kpi.color,marginTop:'2px'}">
              {{ kpi.value }}<span style="font-size:10px;margin-left:2px;color:#999;">{{ kpi.unit }}</span>
            </div>
          </div>
        </div>
      </div>
    </bo-container>

    <!-- 7) \uC0C1\uD488 TOP 7 \uC218\uD3C9 \uB9C9\uB300 -->
    <bo-container v-show="showPanel('topProducts')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC0C1\uD488 TOP 7',()=>cfOpt0203,'info0203',undefined,'COMP0203')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4E6}</button>
        \uC0C1\uD488\uBCC4 \uB9E4\uCD9C TOP 7
      </div>
      <co-echart :option="cfOpt0203" height="240px" />
    </bo-container>

    <!-- 8) \uCC44\uB110 \uB3C4\uB11B -->
    <bo-container v-show="showPanel('channelMix')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uD310\uB9E4 \uCC44\uB110\uBCC4',()=>cfOpt0204,'info0204',undefined,'COMP0204')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4F1}</button>
        \uD310\uB9E4 \uCC44\uB110\uBCC4
      </div>
      <co-echart :option="cfOpt0204" height="220px" />
    </bo-container>

    <!-- 9) \uB514\uBC14\uC774\uC2A4 \uB3C4\uB11B -->
    <bo-container v-show="showPanel('deviceMix')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uB514\uBC14\uC774\uC2A4\uBCC4',()=>cfOpt0301,'info0301',undefined,'COMP0301')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4BB}</button>
        \uB514\uBC14\uC774\uC2A4\uBCC4
      </div>
      <co-echart :option="cfOpt0301" height="220px" />
    </bo-container>

    <!-- 10) \uC2DC\uAC04\uB300 \uB3C4\uB11B -->
    <bo-container v-show="showPanel('timeMix')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC2DC\uAC04\uB300\uBCC4',()=>cfOpt0302,'info0302',undefined,'COMP0302')" title="\uD56D\uBAA9 \uC815\uBCF4">\u23F0</button>
        \uC2DC\uAC04\uB300\uBCC4
      </div>
      <co-echart :option="cfOpt0302" height="220px" />
    </bo-container>

    <!-- 11) \uC9C0\uC5ED\uBCC4 \uC218\uD3C9 \uB9C9\uB300 -->
    <bo-container v-show="showPanel('region')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC9C0\uC5ED\uBCC4 \uB9E4\uCD9C',()=>cfOpt0303,'info0303',undefined,'COMP0303')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F5FA}</button>
        \uC9C0\uC5ED\uBCC4 \uB9E4\uCD9C\uD604\uD669
      </div>
      <co-echart :option="cfOpt0303" height="220px" />
    </bo-container>

    <!-- 12) \uC2DC\uAC04\uB300 \uCD94\uC774 \uAEBE\uC740\uC120 -->
    <bo-container v-show="showPanel('hourly')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC2DC\uAC04\uB300\uBCC4 \uC8FC\uBB38 \uCD94\uC774',()=>cfOpt0304,'info0304',undefined,'COMP0304')" title="\uD56D\uBAA9 \uC815\uBCF4">\u23F1</button>
        \uC2DC\uAC04\uB300\uBCC4 \uC8FC\uBB38 \uCD94\uC774 (24H)
      </div>
      <co-echart :option="cfOpt0304" height="180px" />
    </bo-container>

    <!-- 13) \uC601\uC5C5\uC9C0\uD45C \uB808\uC774\uB354 -->
    <bo-container v-show="showPanel('radar')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC601\uC5C5 \uC9C0\uD45C',()=>cfOpt0401,'info0401',undefined,'COMP0401')" title="\uD56D\uBAA9 \uC815\uBCF4">\u26A1</button>
        \uC601\uC5C5 \uC9C0\uD45C \uBE44\uAD50
      </div>
      <co-echart :option="cfOpt0401" height="220px" />
    </bo-container>

    <!-- 14) \uACBD\uC81C \uC218\uC900\uBCC4 \uBA74\uC801 -->
    <bo-container v-show="showPanel('economy')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uACBD\uC81C \uC218\uC900\uBCC4 \uB9E4\uCD9C',()=>cfOpt0402,'info0402',undefined,'COMP0402')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4BC}</button>
        \uACBD\uC81C \uC218\uC900\uBCC4 \uB9E4\uCD9C\uD604\uD669
      </div>
      <co-echart :option="cfOpt0402" height="220px" />
    </bo-container>

    <!-- 15) \uBC30\uC1A1 \uC870\uAC74 \uB3C4\uB11B -->
    <bo-container v-show="showPanel('shipping')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uBC30\uC1A1 \uC870\uAC74\uBCC4 \uB9E4\uCD9C',()=>cfOpt0403,'info0403',undefined,'COMP0403')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F69A}</button>
        \uBC30\uC1A1 \uC870\uAC74\uBCC4 \uB9E4\uCD9C\uD604\uD669
      </div>
      <co-echart :option="cfOpt0403" height="220px" />
    </bo-container>

    <!-- 16) X-View \uC2E4\uC2DC\uAC04 \uD788\uD2B8\uB9F5 -->
    <bo-container v-show="showPanel('xview')" card-style="padding:14px;" style="grid-column:1/-1;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:8px;">
        <button class="dash-info-btn" @click.stop="fnOpenXviewInfo($event)" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F525}</button>
        X-View \uC2E4\uC2DC\uAC04 \uD2B8\uB79C\uC7AD\uC158 \uD788\uD2B8\uB9F5
        <span style="font-size:10px;font-weight:400;color:#10b981;background:#f0fdf4;padding:2px 8px;border-radius:10px;border:1px solid #bbf7d0;">\u25CF LIVE</span>
        <span style="flex:1;"></span>
        <span style="font-size:10px;color:#888;">\uB4DC\uB798\uADF8\uD558\uC5EC \uBC94\uC704 \uC120\uD0DD \u2192 \uD2B8\uB79C\uC7AD\uC158 \uC0C1\uC138</span>
        <span style="font-size:10px;color:#888;">\u2501 \u2501 500ms \uACBD\uACE0 &amp; \u2501 \u2501 3000ms \uC624\uB958</span>
      </div>
      <co-echart :option="cfOptXview" height="360px" @brush-selected="onXviewBrush" />

      <!-- X-View \uB4DC\uB9B4\uB2E4\uC6B4 \uD14C\uC774\uBE14 -->
      <div v-if="uiState.xviewDrillVisible" style="margin-top:12px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <div style="display:flex;align-items:center;padding:8px 12px;background:#f8fafc;border-bottom:1px solid #e5e7eb;">
          <span style="font-size:12px;font-weight:700;color:#444;">\uC120\uD0DD \uBC94\uC704 \uD2B8\uB79C\uC7AD\uC158 <span style="color:#e8587a;">{{ uiState.xviewDrillRows.length }}\uAC74</span></span>
          <span style="flex:1;"></span>
          <button class="btn btn_close" @click="handleBtnAction('xview-drill-close')" style="font-size:11px;padding:3px 10px;">\u2715 \uB2EB\uAE30</button>
        </div>
        <div style="max-height:260px;overflow-y:auto;overflow-x:auto;">
          <bo-grid bare :columns="xviewDrillColumns" :rows="uiState.xviewDrillRows"
            empty-text="\uC120\uD0DD \uBC94\uC704\uC5D0 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
            style="font-size:11px;min-width:640px;" />
        </div>
      </div>
    </bo-container>

  </div>

  <!-- \uD56D\uBAA9 \uC815\uBCF4 \uD31D\uC624\uBC84 -->
  <teleport to="body">
    <div v-if="uiState.infoPanel"
      @click.stop
      :style="{position:'absolute',top:uiState.infoPanel.top+'px',left:uiState.infoPanel.left+'px',width:'560px',background:'#fff',borderRadius:'10px',boxShadow:'0 8px 32px rgba(0,0,0,0.18)',border:'1px solid #e5e7eb',zIndex:9999,fontFamily:'monospace',overflow:'hidden'}">
      <!-- \uD31D\uC624\uBC84 \uD5E4\uB354 -->
      <div style="display:flex;align-items:center;padding:10px 14px;background:linear-gradient(135deg,#1a1a2e,#2d2d44);color:#fff;gap:8px;">
        <span style="font-size:13px;font-weight:700;">\u{1F50D} {{ uiState.infoPanel.title }}</span>
        <span style="flex:1;"></span>
        <button @click="handleBtnAction('info-close')"
          style="background:rgba(255,255,255,0.15);border:none;color:#fff;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;">\u2715</button>
      </div>
      <!-- \uD0ED \uBC14 (3\uD0ED) -->
      <div style="display:flex;border-bottom:1px solid #e5e7eb;background:#f8fafc;">
        <button @click="handleBtnAction('infoTab-set', 'src')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='src'?'2px solid #10b981':'2px solid transparent',color:uiState.infoPanel.tab==='src'?'#10b981':'#666',background:'transparent'}">
          \u{1F4DD} \uC18C\uC2A4\uC815\uBCF4
        </button>
        <button @click="handleBtnAction('infoTab-set', 'opt')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='opt'?'2px solid #e8587a':'2px solid transparent',color:uiState.infoPanel.tab==='opt'?'#e8587a':'#666',background:'transparent'}">
          \u2699 ECharts Option
        </button>
        <button @click="handleBtnAction('infoTab-set', 'data')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='data'?'2px solid #3b82f6':'2px solid transparent',color:uiState.infoPanel.tab==='data'?'#3b82f6':'#666',background:'transparent'}">
          \u{1F4CA} \uC6D0\uC2DC \uB370\uC774\uD130
        </button>
      </div>
      <!-- \uC18C\uC2A4\uC815\uBCF4 \uD0ED \uBCF8\uBB38 -->
      <div v-if="uiState.infoPanel.tab==='src'" style="padding:14px 16px;font-size:11px;line-height:1.7;max-height:400px;overflow-y:auto;background:#fafbfc;display:flex;flex-direction:column;gap:12px;">
        <template v-if="uiState.infoPanel.src">
          <!-- API \uC139\uC158 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">API \uC5D4\uB4DC\uD3EC\uC778\uD2B8</div>
            <div style="background:#1e1e2e;color:#7dd3fc;border-radius:6px;padding:8px 12px;font-size:11px;">{{ uiState.infoPanel.src.url }}</div>
          </div>
          <!-- \uC694\uCCAD \uD30C\uB77C\uBBF8\uD130 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uC694\uCCAD \uD30C\uB77C\uBBF8\uD130 (\uD604\uC7AC \uD544\uD130 \uAE30\uC900)</div>
            <div v-if="uiState.infoPanel.apiParams" style="background:#1e1e2e;border-radius:6px;overflow:hidden;">
              <table style="width:100%;border-collapse:collapse;">
                <tr v-for="(v,k) in uiState.infoPanel.apiParams" :key="k">
                  <td style="padding:4px 10px;color:#a78bfa;font-size:10.5px;border-bottom:1px solid rgba(255,255,255,0.06);white-space:nowrap;width:40%;">{{ k }}</td>
                  <td style="padding:4px 10px;color:#cdd6f4;font-size:10.5px;border-bottom:1px solid rgba(255,255,255,0.06);">{{ v }}</td>
                </tr>
              </table>
            </div>
            <div v-else style="color:#aaa;font-size:11px;padding:6px 0;">(\uC2E4\uC2DC\uAC04 \uB85C\uCEEC \uC0DD\uC131 \u2014 API \uBBF8\uC0AC\uC6A9)</div>
          </div>
          <!-- \uCC28\uD2B8 \uC720\uD615 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uCC28\uD2B8 \uC720\uD615</div>
            <div style="display:inline-flex;align-items:center;gap:6px;background:#fff0f4;border:1px solid #fecdd3;border-radius:6px;padding:5px 12px;color:#e8587a;font-size:11px;font-weight:700;">
              \u{1F4CA} {{ uiState.infoPanel.src.chartType }}
            </div>
          </div>
          <!-- \uB370\uC774\uD130 \uD544\uB4DC -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uC751\uB2F5 \uB370\uC774\uD130 \uD544\uB4DC (data.{{ uiState.infoPanel.src.dataKey }})</div>
            <div style="background:#1e1e2e;color:#86efac;border-radius:6px;padding:8px 12px;font-size:10.5px;line-height:1.8;">{{ uiState.infoPanel.src.fields }}</div>
          </div>
          <!-- \uC124\uBA85 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uD56D\uBAA9 \uC124\uBA85</div>
            <div style="background:#f0fdf4;border-left:3px solid #10b981;border-radius:0 6px 6px 0;padding:8px 12px;color:#065f46;font-size:11px;line-height:1.7;font-family:sans-serif;">{{ uiState.infoPanel.src.desc }}</div>
          </div>
          <!-- \uD15C\uD50C\uB9BF \uB9C8\uD06C\uC5C5 -->
          <div v-if="uiState.infoPanel.src.tag">
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uD15C\uD50C\uB9BF \uB9C8\uD06C\uC5C5</div>
            <div style="background:#1e1e2e;border-radius:6px;overflow:hidden;">
              <pre style="margin:0;padding:10px 14px;font-size:11px;line-height:1.7;color:#e2a7f0;white-space:pre;overflow-x:auto;">{{ uiState.infoPanel.src.tag }}</pre>
            </div>
            <!-- \uC18D\uC131 \uB9E4\uD551 \uD14C\uC774\uBE14 -->
            <div v-if="uiState.infoPanel.src.attrs" style="margin-top:8px;background:#1e1e2e;border-radius:6px;overflow:hidden;">
              <div style="padding:5px 12px;background:rgba(255,255,255,0.05);font-size:9.5px;font-weight:700;color:#888;letter-spacing:0.5px;text-transform:uppercase;">\uC18D\uC131 \uB9E4\uD551</div>
              <bo-grid bare :columns="attrsGridColumns" :rows="uiState.infoPanel.src.attrs" row-key="k" />
            </div>
          </div>
        </template>
        <div v-else style="color:#aaa;padding:20px;text-align:center;">\uC18C\uC2A4\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      </div>
      <!-- ECharts Option / \uC6D0\uC2DC \uB370\uC774\uD130 \uD0ED \uBCF8\uBB38 -->
      <div v-if="uiState.infoPanel.tab==='opt' || uiState.infoPanel.tab==='data'" style="position:relative;">
        <!-- \uC6D0\uC2DC \uB370\uC774\uD130 \uD0ED\uC77C \uB54C API \uC815\uBCF4 \uD5E4\uB354 -->
        <div v-if="uiState.infoPanel.tab==='data' &amp;&amp; uiState.infoPanel.src" style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:#f8fafc;border-bottom:1px solid #e5e7eb;font-size:10.5px;">
          <span style="color:#888;">URL</span>
          <span style="color:#3b82f6;font-weight:700;">{{ uiState.infoPanel.src.url }}</span>
          <span style="color:#aaa;margin-left:4px;">\u2192</span>
          <span style="color:#10b981;font-weight:700;">data.{{ uiState.infoPanel.src.dataKey }}</span>
        </div>
        <pre :style="{margin:0,padding:'12px 14px',fontSize:'10.5px',lineHeight:'1.55',maxHeight:'360px',overflowY:'auto',overflowX:'auto',background:'#1e1e2e',color:'#cdd6f4',whiteSpace:'pre',tabSize:2}">{{ uiState.infoPanel.tab==='opt' ? uiState.infoPanel.optJson : uiState.infoPanel.dataJson }}</pre>
        <button @click="handleBtnAction('clipboard-copy', uiState.infoPanel.tab==='opt'?uiState.infoPanel.optJson:uiState.infoPanel.dataJson)"
          title="\uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC"
          style="position:absolute;top:8px;right:10px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#aaa;border-radius:5px;padding:2px 8px;font-size:10px;cursor:pointer;">
          \u{1F4CB} \uBCF5\uC0AC
        </button>
      </div>
    </div>
  </teleport>

</div>

<style>
.dash-info-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0 2px;
  line-height: 1;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  flex-shrink: 0;
}
.dash-info-btn:hover {
  transform: scale(1.25);
  background: rgba(232,88,122,0.10);
}
.dash-info-btn:active {
  transform: scale(0.95);
}
</style>
`};
