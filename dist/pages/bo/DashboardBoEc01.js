window.DashboardBoEc01={name:"DashboardBoEc01",props:{navigate:{type:Function,required:!0}},setup(){const{ref:U,reactive:O,computed:a,onMounted:Y,onUnmounted:j}=Vue,b=coUtil.cofFmt,L=coUtil.cofToYmd,I=coUtil.cofAddMonths,$=coUtil.cofEndOfMonth,k=new Date,D=L($(k)),R=L(new Date(I(k,-13).getFullYear(),I(k,-13).getMonth(),1)),M=boConsts.DASHBOARD_CHANNELS.map(t=>t.codeLabel),C=boConsts.DASHBOARD_AGES.map(t=>t.codeLabel),z=boConsts.DASHBOARD_GENDERS.map(t=>t.codeLabel),A=boConsts.DASHBOARD_MEMBER_TYPES.map(t=>t.codeLabel),T=boConsts.DASHBOARD_CATEGORIES.map(t=>t.codeLabel),J=boConsts.DASHBOARD_CHANNEL_COLORS,s=O({startDt:R,endDt:D,channels:[...M],ages:[...C],genders:[...z],memberTypes:[...A],categories:[...T]}),l=O({filterExpand:!1,activeTab:"sales",tabMode:"4col",loading:!1,infoPanel:null,dailyStatsLoading:!1,pdfExporting:!1}),B=U(null),V=async()=>{var t;l.pdfExporting=!0;try{const e=coUtil.cofBuildExportFilename("EC\uB300\uC2DC\uBCF4\uB4DC.pdf");await window.boUtil.bofExportPdf(B.value,e,(t=window.boApp)==null?void 0:t.showToast)}finally{l.pdfExporting=!1}},X=()=>{var t,e;try{window.coExtSdk.shareKakao({title:"\uC628\uB77C\uC778 \uC1FC\uD551\uBAB0 \uB9E4\uCD9C \uBC0F \uD310\uB9E4\uD604\uD669 - ShopJoy BO",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:window.location.href})}catch(o){(e=(t=window.boApp)==null?void 0:t.showToast)==null||e.call(t,o.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},q=async()=>{var t,e,o,c;try{await navigator.clipboard.writeText(window.location.href),(e=(t=window.boApp)==null?void 0:t.showToast)==null||e.call(t,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(p){(c=(o=window.boApp)==null?void 0:o.showToast)==null||c.call(o,p.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},_=O({dateLabel:"",orderCount:0,totalAmt:0,avgAmt:0,totalDiscount:0,totalShipping:0,totalClaims:0,claimRate:0,newMembers:0,withdrawnMembers:0,activeMembers:0,loginCount:0,topProducts:[],payMethods:[],categories:[]}),Q=["COMP0101","COMP0102","COMP0103","COMP0104","COMP0201","COMP0202","COMP0203","COMP0204","COMP0301","COMP0302","COMP0303","COMP0304","COMP0401","COMP0402","COMP0403"],Z={COMP0101:"chart036",COMP0102:"chart039",COMP0103:"chart040",COMP0104:"chart041",COMP0201:"chart042",COMP0202:"chart043",COMP0203:"chart044",COMP0204:"chart038",COMP0301:"chart045",COMP0302:"chart046",COMP0303:"chart047",COMP0304:"chart048",COMP0401:"chart049",COMP0402:"chart050",COMP0403:"chart051"},i=O({info0101:[],info0102:[],info0103:[],info0104:[],info0201:[],info0202:[],info0203:[],info0204:[],info0301:[],info0302:[],info0303:[],info0304:[],info0401:[],info0402:[],info0403:[]}),tt=[{id:"sales",label:"\uC6D4\uBCC4 \uB9E4\uCD9C",icon:"\u{1F4B0}"},{id:"member",label:"\uAC00\uC785/\uD0C8\uD1F4",icon:"\u{1F465}"},{id:"click",label:"\uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD",icon:"\u{1F5B1}"},{id:"order",label:"\uC8FC\uBB38\uC644\uB8CC",icon:"\u{1F4CB}"},{id:"channel",label:"\uD310\uB9E4\uCC44\uB110\uBCC4 \uB9E4\uCD9C",icon:"\u{1F4FA}"},{id:"kpi",label:"\uD575\uC2EC\uC9C0\uD45C",icon:"\u{1F3AF}"},{id:"topProducts",label:"\uC0C1\uD488 TOP 7",icon:"\u{1F4E6}"},{id:"channelMix",label:"\uCC44\uB110 \uBE44\uC911",icon:"\u{1F4F1}"},{id:"deviceMix",label:"\uB514\uBC14\uC774\uC2A4 \uBE44\uC911",icon:"\u{1F4BB}"},{id:"timeMix",label:"\uC2DC\uAC04\uB300 \uBE44\uC911",icon:"\u23F0"},{id:"region",label:"\uC9C0\uC5ED\uBCC4",icon:"\u{1F5FA}"},{id:"hourly",label:"\uC2DC\uAC04\uB300 \uCD94\uC774",icon:"\u23F1"},{id:"radar",label:"\uC601\uC5C5\uC9C0\uD45C",icon:"\u26A1"},{id:"economy",label:"\uACBD\uC81C \uC218\uC900\uBCC4",icon:"\u{1F4BC}"},{id:"shipping",label:"\uBC30\uC1A1 \uC870\uAC74",icon:"\u{1F69A}"}],et=(t,e={})=>{if(t==="filters-search")return xt();if(t==="filters-reset")return ht();if(t==="stats-excel")return yt();if(t==="filters-toggleExpand"){l.filterExpand=!l.filterExpand;return}if(t==="filters-toggleAll")return it(e.key,e.all);if(t==="filters-toggle")return at(s[e.key],e.v);if(t==="info-close"){l.infoPanel=null;return}if(t==="infoTab-set"){l.infoPanel&&(l.infoPanel.tab=e);return}if(t==="clipboard-copy"){e&&navigator.clipboard.writeText(e);return}console.warn("[handleBtnAction] unknown cmd:",t)},ot=(t,e={})=>{if(t==="tabs-select"){l.tabMode==="tab"&&(l.activeTab=e);return}if(t==="tabMode-set"){l.tabMode=e;return}console.warn("[handleSelectAction] unknown cmd:",t)},at=(t,e)=>{const o=t.indexOf(e);o>=0?t.splice(o,1):t.push(e)},it=(t,e)=>{s[t]=s[t].length===e.length?[]:[...e]},nt=(t,e)=>t.includes(e),lt={COMP0101:{compId:"COMP0101",chartType:"bar (\uC138\uB85C \uB9C9\uB300)",url:"POST /api/bo/ec/cm/dashboard/data",dataKey:"info0101",fields:"col1Nm(\uC6D4\uB77C\uBCA8) / col1Num(\uB9E4\uCD9C\uC561)",desc:"\uC6D4\uBCC4 \uB9E4\uCD9C \uD569\uACC4. 14\uAC1C\uC6D4 \uAE30\uAC04 \uAE30\uC900 \uC9D1\uACC4.",tag:`<co-echart
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
/>`,attrs:[{k:":option",v:"cfOpt0403",d:"pie series \u2014 \uBC30\uC1A1\uC720\uD615 4\uC885 \uC0C9\uC0C1"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]}},K=t=>({compId:t,uiNm:"DashboardBoEc01",startYmd:(s.startDt||"").replace(/-/g,""),endYmd:(s.endDt||"").replace(/-/g,"")}),rt=(t,e,o,c,p,r)=>{t.stopPropagation();const n=t.currentTarget.getBoundingClientRect(),f=window.scrollY||0,d=window.scrollX||0;if(l.infoPanel&&l.infoPanel.title===e){l.infoPanel=null;return}let h=null;try{if(o){const y=o();h=y!==null&&typeof y=="object"&&"value"in y?y.value:y}}catch{}const S=p!==void 0?p:c?i[c]:null,g=r?lt[r]:null,P=g&&g.compId!=="(\uC5C6\uC74C)"?K(g.compId):null;l.infoPanel={title:e,optJson:h?JSON.stringify(h,null,2):"(\uC5C6\uC74C)",dataJson:S?JSON.stringify(S,null,2):"(\uC5C6\uC74C)",src:g,apiParams:P,tab:"opt",top:n.bottom+f+6,left:Math.min(n.left+d,window.innerWidth-560)}},ct=t=>{l.infoPanel&&(l.infoPanel.tab=t)},H=()=>{l.infoPanel=null},x=["20250501","20250601","20250701","20250801","20250901","20251001","20251101","20251201","20260101","20260201","20260301","20260401","20260501","20260601"],m=["25-05","25-06","25-07","25-08","25-09","25-10","25-11","25-12","26-01","26-02","26-03","26-04","26-05","26-06"],W=[982e5,1125e5,1347e5,1283e5,1196e5,142e6,1558e5,1874e5,1412e5,1287e5,1389e5,1512e5,1728e5,140372550],st=[312,428,387,465,398,512,488,621,401,356,419,487,552,370],pt=[87,102,94,118,109,131,125,153,111,98,107,128,142,95],dt=[28400,33200,41100,38700,35900,44200,47600,59300,42100,37800,41500,46900,53200,40772],ft=[1820,2150,2690,2530,2380,2870,3020,3810,2740,2490,2680,3010,3420,2540],bt=["\uC790\uC0AC\uBAB0","\uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4","\uCFE0\uD321","11\uBC88\uAC00","G\uB9C8\uCF13","Auction","GS\uC0F5","TMON","\uC704\uBA54\uD504","\uB86F\uB370\uC628","\uD648\uC564\uC1FC\uD551","\uD604\uB300H\uBAB0"],mt=[38,22,14,9,6,4,2,1.5,1.2,1,.8,.5],ut=()=>{const t={};t.info0101=x.map((r,n)=>({col1Nm:m[n],col1Num:W[n]})),t.info0102=x.map((r,n)=>({col1Nm:m[n],col1Num:st[n],col2Nm:m[n],col2Num:pt[n]})),t.info0103=x.map((r,n)=>({col1Nm:m[n],col1Num:dt[n]})),t.info0104=x.map((r,n)=>({col1Nm:m[n],col1Num:ft[n]})),t.info0201=[],bt.forEach((r,n)=>{x.forEach((f,d)=>{t.info0201.push({col1Nm:r,col2Nm:m[d],col2Num:Math.round(W[d]*mt[n]/100)})})}),t.info0202=[{col1Nm:"\uCD1D \uB9E4\uCD9C\uD604\uD669",col1Num:1951772550,col2Nm:"\uCD1D \uAD6C\uB9E4\uC218\uB7C9",col2Num:30033,col3Nm:"\uD3C9\uADE0 \uB9C8\uC9C4\uC728",col3Num:7.7,col4Nm:"\uD3C9\uADE0 \uACB0\uC81C\uAE08\uC561",col4Num:64988}],t.info0203=[{col1Nm:"\uC6B8 \uBE14\uB80C\uB4DC \uCF54\uD2B8",col1Num:595e5},{col1Nm:"\uAE00\uB85C\uBC8C \uBBF8\uB514 \uB4DC\uB808\uC2A4",col1Num:423e5},{col1Nm:"\uC2AC\uB9BC\uD54F \uB370\uB2D8 \uC9C4",col1Num:389e5},{col1Nm:"\uCE74\uACE0 \uC640\uC774\uB4DC \uD32C\uCE20",col1Num:312e5},{col1Nm:"\uCE90\uC2DC\uBBF8\uC5B4 \uB2C8\uD2B8 \uC2A4\uC6E8\uD130",col1Num:275e5},{col1Nm:"\uC624\uBC84\uC0AC\uC774\uC988 \uCF54\uD2B8",col1Num:241e5},{col1Nm:"\uC2A4\uD2B8\uB77C\uC774\uD504 \uD2F0\uC154\uCE20",col1Num:198e5}],t.info0204=[{col1Nm:"\uC790\uC0AC\uBAB0",col1Num:48},{col1Nm:"\uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4",col1Num:22},{col1Nm:"\uCFE0\uD321",col1Num:14},{col1Nm:"11\uBC88\uAC00",col1Num:9},{col1Nm:"G\uB9C8\uCF13",col1Num:4},{col1Nm:"Auction",col1Num:2},{col1Nm:"\uAE30\uD0C0",col1Num:1}],t.info0301=[{col1Nm:"Mobile",col1Num:58},{col1Nm:"Desktop",col1Num:32},{col1Nm:"Tablet",col1Num:10}],t.info0302=[{col1Nm:"\uC544\uCE68 (06-12)",col1Num:15},{col1Nm:"\uC810\uC2EC (12-18)",col1Num:22},{col1Nm:"\uC800\uB141 (18-24)",col1Num:38},{col1Nm:"\uC57C\uAC04 (00-06)",col1Num:25}],t.info0303=[{col1Nm:"\uC11C\uC6B8",col1Num:58e6},{col1Nm:"\uACBD\uAE30",col1Num:42e6},{col1Nm:"\uBD80\uC0B0",col1Num:21e6},{col1Nm:"\uC778\uCC9C",col1Num:16e6},{col1Nm:"\uB300\uAD6C",col1Num:12e6},{col1Nm:"\uAD11\uC8FC",col1Num:9e6},{col1Nm:"\uB300\uC804",col1Num:85e5},{col1Nm:"\uAE30\uD0C0",col1Num:6e6}];const e=[42,28,19,14,11,13,21,38,65,89,102,118,135,128,119,124,138,156,187,212,198,176,143,87];t.info0304=e.map((r,n)=>({col1Nm:String(n).padStart(2,"0"),col1Num:r})),t.info0401=[{col1Nm:"\uB9E4\uCD9C\uC131\uC7A5",col1Num:78},{col1Nm:"\uACE0\uAC1D\uB9CC\uC871",col1Num:82},{col1Nm:"\uC7AC\uAD6C\uB9E4\uC728",col1Num:65},{col1Nm:"\uC2E0\uADDC\uACE0\uAC1D",col1Num:55},{col1Nm:"\uB9C8\uC9C4\uC728",col1Num:42},{col1Nm:"\uCC44\uB110\uD655\uC7A5",col1Num:70}];const o=[42,47,52,49.5,46,55,58,71,51,47,53,57,62,40].map(r=>r*1e6),c=[55,61,67,64,59,72,75,92,66,61,69,74,81,52].map(r=>r*1e6),p=[21.5,24,26.8,25.7,23.7,28.3,29.4,35.6,26.1,23.9,26.2,29.5,31.8,20.97].map(r=>r*1e6);return t.info0402=x.map((r,n)=>({col1Nm:m[n],col1Num:o[n],col2Num:c[n],col3Num:p[n]})),t.info0403=[{col1Nm:"\uBB34\uB8CC\uBC30\uC1A1",col1Num:48},{col1Nm:"\uC720\uB8CC\uBC30\uC1A1",col1Num:27},{col1Nm:"\uC870\uAC74\uBD80\uBB34\uB8CC",col1Num:18},{col1Nm:"\uC0C8\uBCBD\uBC30\uC1A1",col1Num:7}],t},gt=async()=>{var t;l.dailyStatsLoading=!0;try{const o=((t=(await boApiSvc.cmDashboard.getDailyStats(null,"\uB300\uC2DC\uBCF4\uB4DC","\uC77C\uBCC4\uD604\uD669")).data)==null?void 0:t.data)||{};Object.assign(_,{dateLabel:o.dateLabel||"",orderCount:o.orderCount||0,totalAmt:o.totalAmt||0,avgAmt:o.avgAmt||0,totalDiscount:o.totalDiscount||0,totalShipping:o.totalShipping||0,totalClaims:o.totalClaims||0,claimRate:o.claimRate||0,newMembers:o.newMembers||0,withdrawnMembers:o.withdrawnMembers||0,activeMembers:o.activeMembers||0,loginCount:o.loginCount||0,topProducts:o.topProducts||[],payMethods:o.payMethods||[],categories:o.categories||[]})}catch(e){console.warn("[\uC77C\uBCC4\uD604\uD669 \uC870\uD68C \uC624\uB958]",e)}finally{l.dailyStatsLoading=!1}},E=async()=>{var t,e;l.loading=!0;try{const o=(s.startDt||"").replace(/-/g,""),c=(s.endDt||"").replace(/-/g,""),p=((t=window.boCommonFilter)==null?void 0:t.siteId)||"",r=Q.map(d=>({compId:d,itemKey:Z[d],uiNm:"DashboardBoEc01",siteId:p,startYmd:o,endYmd:c})),f=((e=(await boApiSvc.cmDashboard.getData(r,"\uB300\uC2DC\uBCF4\uB4DC","\uC870\uD68C")).data)==null?void 0:e.data)||{};Object.keys(i).forEach(d=>{i[d]=f[d]||[]})}catch(o){console.error("[\uB300\uC2DC\uBCF4\uB4DC \uC870\uD68C \uC624\uB958]",o);const c=ut();Object.keys(i).forEach(p=>{i[p]=c[p]||[]})}finally{l.loading=!1}},xt=()=>E(),ht=()=>{s.startDt=R,s.endDt=D,s.channels=[...M],s.ages=[...C],s.genders=[...z],s.memberTypes=[...A],s.categories=[...T],E()},yt=()=>{const t=i.info0101.map(n=>n.col1Nm||""),e=[["\uC6D4","\uB9E4\uCD9C","\uAC00\uC785","\uD0C8\uD1F4","\uD074\uB9AD","\uC8FC\uBB38\uC644\uB8CC"]];t.forEach((n,f)=>{var d,h,S,g,P;e.push([n,((d=i.info0101[f])==null?void 0:d.col1Num)||0,((h=i.info0102[f])==null?void 0:h.col1Num)||0,((S=i.info0102[f])==null?void 0:S.col2Num)||0,((g=i.info0103[f])==null?void 0:g.col1Num)||0,((P=i.info0104[f])==null?void 0:P.col1Num)||0])});const o=e.map(n=>n.map(f=>'"'+String(f).replace(/"/g,'""')+'"').join(",")).join(`
`),c=new Blob(["\uFEFF"+o],{type:"text/csv;charset=utf-8;"}),p=URL.createObjectURL(c),r=document.createElement("a");r.href=p,r.download=coUtil.cofBuildExportFilename("\uB300\uC2DC\uBCF4\uB4DC.csv"),r.click(),URL.revokeObjectURL(p)},u=a(()=>i.info0101.map(t=>t.col1Nm||"")),vt=a(()=>i.info0101.map(t=>t.col1Num||0)),St=a(()=>i.info0102.map(t=>t.col1Num||0)),Ot=a(()=>i.info0102.map(t=>t.col2Num||0)),Nt=a(()=>i.info0103.map(t=>t.col1Num||0)),wt=a(()=>i.info0104.map(t=>t.col1Num||0)),N=a(()=>i.info0202[0]||{}),Pt=a(()=>N.value.col1Num||0),kt=a(()=>N.value.col2Num||0),Mt=a(()=>N.value.col3Num||0),Ct=a(()=>N.value.col4Num||0),zt=t=>(Math.round(t*10)/10).toFixed(1)+"%",At=t=>l.tabMode==="tab"?l.activeTab===t:!0,Tt=a(()=>l.tabMode==="tab"?"1fr":"repeat("+parseInt(l.tabMode)+",minmax(0,1fr))"),v={top:36,right:16,bottom:36,left:60},Et=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uB9E4\uCD9C: "+b(t[0].value)+"\uC6D0"},grid:v,xAxis:{type:"category",data:u.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:[{type:"bar",data:vt.value,barMaxWidth:36,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#e8587a"},{offset:1,color:"#ff8aa5"}]},borderRadius:[4,4,0,0]},emphasis:{itemStyle:{color:"#c73060"}},label:{show:!0,position:"top",fontSize:9,color:"#c73060",formatter:t=>(t.value/1e4).toFixed(0)+"\uB9CC"}}]})),Lt=a(()=>({tooltip:{trigger:"axis"},legend:{top:4,right:8,textStyle:{fontSize:10}},grid:{...v,top:44},xAxis:{type:"category",data:u.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{name:"\uAC00\uC785",type:"bar",data:St.value,barMaxWidth:20,itemStyle:{color:"#3b82f6",borderRadius:[3,3,0,0]},label:{show:!0,position:"top",fontSize:9,color:"#3b82f6"}},{name:"\uD0C8\uD1F4",type:"bar",data:Ot.value,barMaxWidth:20,itemStyle:{color:"#ef4444",borderRadius:[3,3,0,0]},label:{show:!0,position:"top",fontSize:9,color:"#ef4444"}}]})),It=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uD074\uB9AD: "+b(t[0].value)+"\uD68C"},grid:v,xAxis:{type:"category",data:u.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"line",data:Nt.value,smooth:!0,symbol:"circle",symbolSize:5,lineStyle:{color:"#10b981",width:2.5},itemStyle:{color:"#10b981"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(16,185,129,0.35)"},{offset:1,color:"rgba(16,185,129,0.02)"}]}},label:{show:!0,position:"top",fontSize:9,color:"#10b981"}}]})),Dt=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+"<br/>\uC8FC\uBB38: "+b(t[0].value)+"\uAC74"},grid:v,xAxis:{type:"category",data:u.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"bar",data:wt.value,barMaxWidth:36,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#7b1fa2"},{offset:1,color:"#a855f7"}]},borderRadius:[4,4,0,0]},label:{show:!0,position:"top",fontSize:9,color:"#7b1fa2"}}]})),Rt=a(()=>{const t={};i.info0201.forEach(o=>{const c=o.col1Nm||"";t[c]||(t[c]={name:c,color:J[c]||"#999",values:{}}),t[c].values[o.col2Nm||""]=o.col2Num||0});const e=u.value;return Object.values(t).map(o=>({name:o.name,color:o.color,values:e.map(c=>o.values[c]||0)}))}),Bt=a(()=>({tooltip:{trigger:"axis"},legend:{type:"scroll",bottom:0,textStyle:{fontSize:9}},grid:{top:36,right:16,bottom:60,left:70},xAxis:{type:"category",data:u.value,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:Rt.value.map(t=>({name:t.name,type:"line",data:t.values,smooth:!0,symbolSize:4,lineStyle:{color:t.color,width:2},itemStyle:{color:t.color}}))})),G=a(()=>i.info0203.map(t=>({name:t.col1Nm||"",value:t.col1Num||0}))),_t=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+": "+b(t[0].value)+"\uC6D0"},grid:{top:8,right:80,bottom:8,left:130},xAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},yAxis:{type:"category",data:G.value.map(t=>t.name).reverse(),axisLabel:{fontSize:10,color:"#555"}},series:[{type:"bar",data:G.value.map(t=>t.value).reverse(),barMaxWidth:18,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#7b1fa2"},{offset:1,color:"#e8587a"}]},borderRadius:[0,4,4,0]},label:{show:!0,position:"right",formatter:t=>b(t.value)+"\uC6D0",fontSize:10,color:"#555"}}]})),Kt=a(()=>{const t=["#e8587a","#7b1fa2","#3b82f6","#10b981","#f59e0b","#ef4444","#6366f1"];return i.info0204.map((e,o)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[o%t.length]}}))}),Ht=a(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Kt.value,label:{show:!0,position:"inside",formatter:"{c}%",fontSize:10,color:"#fff",fontWeight:"bold"},emphasis:{label:{show:!0,fontSize:12,fontWeight:"bold"}}}]})),Wt=a(()=>{const t=["#3b82f6","#10b981","#f59e0b"];return i.info0301.map((e,o)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[o%t.length]}}))}),Gt=a(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Wt.value,label:{show:!0,position:"inside",formatter:"{c}%",fontSize:10,color:"#fff",fontWeight:"bold"},emphasis:{label:{show:!0,fontSize:11,fontWeight:"bold"}}}]})),Ft=a(()=>{const t=["#fbbf24","#f97316","#e8587a","#6366f1"];return i.info0302.map((e,o)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[o%t.length]}}))}),Ut=a(()=>({tooltip:{trigger:"item",formatter:t=>t.name+": "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:9}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Ft.value,label:{show:!0,position:"inside",formatter:"{c}%",fontSize:9,color:"#fff",fontWeight:"bold"},emphasis:{label:{show:!0,fontSize:11}}}]})),F=a(()=>i.info0303.map(t=>({name:t.col1Nm||"",value:t.col1Num||0}))),Yt=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].name+": "+b(t[0].value)},grid:{top:8,right:60,bottom:8,left:50},xAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},yAxis:{type:"category",data:F.value.map(t=>t.name).reverse(),axisLabel:{fontSize:10,color:"#555"}},series:[{type:"bar",data:F.value.map(t=>t.value).reverse(),barMaxWidth:16,itemStyle:{color:"#3b82f6",borderRadius:[0,4,4,0]},label:{show:!0,position:"right",formatter:t=>b(t.value),fontSize:10,color:"#555"}}]})),jt=a(()=>i.info0304.map(t=>t.col1Num||0)),$t=a(()=>({tooltip:{trigger:"axis",formatter:t=>t[0].axisValue+"\uC2DC: "+t[0].value+"\uAC74"},grid:{top:20,right:16,bottom:28,left:44},xAxis:{type:"category",data:Array.from({length:24},(t,e)=>String(e).padStart(2,"0")),axisLabel:{fontSize:10,color:"#888",interval:5}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"}},series:[{type:"line",data:jt.value,smooth:!0,symbol:"circle",symbolSize:4,lineStyle:{color:"#10b981",width:2},itemStyle:{color:"#10b981"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(16,185,129,0.3)"},{offset:1,color:"rgba(16,185,129,0.02)"}]}},label:{show:!0,position:"top",fontSize:8,color:"#0d9668"}}]})),Jt=a(()=>i.info0401.map(t=>({label:t.col1Nm||"",value:t.col1Num||0}))),Vt=[{name:"",max:100},{name:"",max:100},{name:"",max:100}],Xt=a(()=>{const t=Jt.value;return{tooltip:{trigger:"item"},radar:{indicator:t.length?t.map(e=>({name:e.label,max:100})):Vt,center:["50%","52%"],radius:"68%",axisName:{fontSize:11,color:"#555"},splitArea:{areaStyle:{color:["rgba(232,88,122,0.04)","rgba(232,88,122,0.08)"]}},splitLine:{lineStyle:{color:"#e5e7eb"}}},series:t.length?[{type:"radar",data:[{value:t.map(e=>e.value),name:"\uC601\uC5C5\uC9C0\uD45C",areaStyle:{color:"rgba(232,88,122,0.2)"},lineStyle:{color:"#e8587a",width:2},itemStyle:{color:"#e8587a"},label:{show:!0,fontSize:9,color:"#c73060",formatter:e=>e.value}}]}]:[]}}),w=a(()=>({labels:i.info0402.map(t=>t.col1Nm||""),high:i.info0402.map(t=>t.col1Num||0),middle:i.info0402.map(t=>t.col2Num||0),low:i.info0402.map(t=>t.col3Num||0)})),qt=a(()=>({tooltip:{trigger:"axis"},legend:{top:4,right:8,textStyle:{fontSize:10}},grid:{...v,top:44},xAxis:{type:"category",data:w.value.labels,axisLabel:{fontSize:10,color:"#888"}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:t=>(t/1e6).toFixed(0)+"M"}},series:[{name:"\uC0C1\uC704",type:"line",data:w.value.high,smooth:!0,symbolSize:4,lineStyle:{color:"#7b1fa2"},itemStyle:{color:"#7b1fa2"},areaStyle:{color:"rgba(123,31,162,0.15)"},label:{show:!0,position:"top",fontSize:8,color:"#7b1fa2"}},{name:"\uC911\uC704",type:"line",data:w.value.middle,smooth:!0,symbolSize:4,lineStyle:{color:"#3b82f6"},itemStyle:{color:"#3b82f6"},areaStyle:{color:"rgba(59,130,246,0.12)"},label:{show:!0,position:"bottom",fontSize:8,color:"#3b82f6"}},{name:"\uD558\uC704",type:"line",data:w.value.low,smooth:!0,symbolSize:4,lineStyle:{color:"#10b981"},itemStyle:{color:"#10b981"},areaStyle:{color:"rgba(16,185,129,0.10)"},label:{show:!0,position:"bottom",fontSize:8,color:"#10b981"}}]})),Qt=a(()=>{const t=["#10b981","#9ca3af","#3b82f6","#f59e0b"];return i.info0403.map((e,o)=>({name:e.col1Nm||"",value:e.col1Num||0,itemStyle:{color:t[o%t.length]}}))}),Zt=a(()=>({tooltip:{trigger:"item",formatter:t=>t.name+"\uBC30\uC1A1: "+t.value+"%"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:Qt.value,label:{show:!0,position:"inside",formatter:"{c}%",fontSize:9,color:"#fff",fontWeight:"bold"},emphasis:{label:{show:!0,fontSize:11}}}]}));return Y(async()=>{document.addEventListener("click",H),gt(),E()}),j(()=>{document.removeEventListener("click",H)}),{uiState:l,filters:s,dash:i,dailyStats:_,handleBtnAction:et,handleSelectAction:ot,cfBaseGridColumns:Tt,showPanel:At,isSel:nt,attrsGridColumns:[{key:"k",label:"\uC18D\uC131",style:"width:38%;",cellStyle:"color:#7dd3fc;font-size:10.5px;white-space:nowrap;font-weight:700;"},{key:"v",label:"\uAC12",style:"width:28%;",cellStyle:"color:#fbbf24;font-size:10.5px;white-space:nowrap;"},{key:"d",label:"\uC124\uBA85",cellStyle:"color:#9ca3af;font-size:10px;"}],TABS:tt,CHANNELS:M,AGES:C,GENDERS:z,MEMBER_TYPES:A,CATEGORIES:T,fmt:b,pct:zt,cfMonthLabels:u,cfTotalSales:Pt,cfTotalQtyComp:kt,marginRate:Mt,cfAvgOrderValue:Ct,cfOpt0101:Et,cfOpt0102:Lt,cfOpt0103:It,cfOpt0104:Dt,cfOpt0201:Bt,cfOpt0203:_t,cfOpt0204:Ht,cfOpt0301:Gt,cfOpt0302:Ut,cfOpt0303:Yt,cfOpt0304:$t,cfOpt0401:Xt,cfOpt0402:qt,cfOpt0403:Zt,fnOpenInfo:rt,fnInfoTab:ct,fnBuildApiParams:K,pdfAreaRef:B,handleExportPdf:V,handleShareKakao:X,handleCopyLink:q}},template:`
<div :class="(uiState.tabMode==='3col'||uiState.tabMode==='4col') ? 'dash-wide' : 'bo-wrap'" ref="pdfAreaRef">

  <!-- \uD5E4\uB354 -->
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:12px 16px;background:linear-gradient(135deg,#1a1a2e 0%,#2d2d44 100%);border-radius:10px;color:#fff;">
    <div style="width:6px;height:24px;background:#e8587a;border-radius:3px;"></div>
    <span style="font-size:17px;font-weight:800;letter-spacing:-0.5px;">\uC628\uB77C\uC778 \uC1FC\uD551\uBAB0 \uB9E4\uCD9C \uBC0F \uD310\uB9E4\uD604\uD669</span>
    <span style="flex:1;"></span>
    <span style="font-size:11px;color:#aaa;">{{ cfMonthLabels.length }}\uAC1C\uC6D4 \uAE30\uC900 \xB7 {{ cfMonthLabels.length > 0 ? (cfMonthLabels[0] + ' ~ ' + cfMonthLabels[cfMonthLabels.length-1]) : '-' }}</span>
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

  <!-- \uC5B4\uC81C\uC758 \uD604\uD669 KPI -->
  <bo-container card-style="padding:14px 16px;margin-bottom:14px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:12px;font-weight:800;color:#444;">\u{1F4CA} \uC5B4\uC81C\uC758 \uD604\uD669</span>
      <span v-if="dailyStats.dateLabel" style="font-size:11px;color:#888;background:#f3f4f6;padding:2px 8px;border-radius:10px;">{{ dailyStats.dateLabel }}</span>
      <span v-if="uiState.dailyStatsLoading" style="font-size:11px;color:#aaa;">\u23F3 \uC9D1\uACC4 \uC911...</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px;">
      <div v-for="kpi in [
          {label:'\uC8FC\uBB38 \uAC74\uC218',   value:fmt(dailyStats.orderCount),   unit:'\uAC74', icon:'\u{1F4CB}', color:'#7b1fa2', bg:'#f5f0ff'},
          {label:'\uACB0\uC81C \uAE08\uC561',   value:fmt(dailyStats.totalAmt),     unit:'\uC6D0', icon:'\u{1F4B0}', color:'#e8587a', bg:'#fff0f4'},
          {label:'\uD3C9\uADE0 \uACB0\uC81C\uC561', value:fmt(dailyStats.avgAmt),       unit:'\uC6D0', icon:'\u{1F4B3}', color:'#f59e0b', bg:'#fffbeb'},
          {label:'\uD074\uB808\uC784\uC728',    value:dailyStats.claimRate,         unit:'%',  icon:'\u26A0\uFE0F', color:'#ef4444', bg:'#fff5f5'},
        ]" :key="kpi.label"
        :style="{background:kpi.bg,border:'1px solid #eef0f3',borderRadius:'8px',padding:'10px 12px',display:'flex',alignItems:'center',gap:'8px'}">
        <div :style="{fontSize:'18px',width:'32px',height:'32px',borderRadius:'7px',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}">{{ kpi.icon }}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:10px;color:#666;font-weight:600;">{{ kpi.label }}</div>
          <div :style="{fontSize:'14px',fontWeight:800,color:kpi.color,marginTop:'2px'}">
            {{ kpi.value }}<span style="font-size:10px;margin-left:2px;color:#999;">{{ kpi.unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <div v-for="kpi in [
          {label:'\uC2E0\uADDC \uAC00\uC785',   value:fmt(dailyStats.newMembers),       unit:'\uBA85', icon:'\u{1F464}', color:'#10b981', bg:'#f0fdf4'},
          {label:'\uB85C\uADF8\uC778 \uC218',   value:fmt(dailyStats.loginCount),       unit:'\uAC74', icon:'\u{1F511}', color:'#3b82f6', bg:'#eff6ff'},
          {label:'\uD560\uC778 \uAE08\uC561',   value:fmt(dailyStats.totalDiscount),    unit:'\uC6D0', icon:'\u{1F3F7}', color:'#6366f1', bg:'#f0f0ff'},
          {label:'\uBC30\uC1A1\uBE44 \uD569\uACC4', value:fmt(dailyStats.totalShipping),    unit:'\uC6D0', icon:'\u{1F69A}', color:'#64748b', bg:'#f8fafc'},
        ]" :key="kpi.label"
        :style="{background:kpi.bg,border:'1px solid #eef0f3',borderRadius:'8px',padding:'10px 12px',display:'flex',alignItems:'center',gap:'8px'}">
        <div :style="{fontSize:'18px',width:'32px',height:'32px',borderRadius:'7px',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}">{{ kpi.icon }}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:10px;color:#666;font-weight:600;">{{ kpi.label }}</div>
          <div :style="{fontSize:'14px',fontWeight:800,color:kpi.color,marginTop:'2px'}">
            {{ kpi.value }}<span style="font-size:10px;margin-left:2px;color:#999;">{{ kpi.unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="dailyStats.topProducts.length > 0" style="margin-top:10px;border-top:1px dashed #eee;padding-top:10px;">
      <div style="font-size:10.5px;font-weight:700;color:#666;margin-bottom:6px;">\uD310\uB9E4 Top {{ dailyStats.topProducts.length }}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <span v-for="p in dailyStats.topProducts.slice(0,5)" :key="p.rank"
          style="font-size:10.5px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:3px 8px;color:#444;">
          {{ p.rank }}\uC704 {{ p.prodNm }} <span style="color:#888;">{{ fmt(p.qty) }}\uAC1C</span>
        </span>
      </div>
    </div>
  </bo-container>

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
        \uC6D4\uBCC4 \uB9E4\uCD9C\uD604\uD669 ({{ cfMonthLabels.length }}\uAC1C\uC6D4)
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#888;font-weight:500;">\uCD1D {{ fmt(dash.info0101.reduce((a,r)=>a+(r.col1Num||0),0)) }}\uC6D0</span>
      </div>
      <co-echart :option="cfOpt0101" height="260px" />
    </bo-container>

    <!-- 2) \uAC00\uC785/\uD0C8\uD1F4 -->
    <bo-container v-show="showPanel('member')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uAC00\uC785/\uD0C8\uD1F4 \uD604\uD669',()=>cfOpt0102,'info0102',undefined,'COMP0102')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F465}</button>
        \uC6D4\uBCC4 \uACE0\uAC1D \uAC00\uC785/\uD0C8\uD1F4\uC790 \uD604\uD669 ({{ cfMonthLabels.length }}\uAC1C\uC6D4)
      </div>
      <co-echart :option="cfOpt0102" height="260px" />
    </bo-container>

    <!-- 3) \uC0C1\uD488 \uD074\uB9AD -->
    <bo-container v-show="showPanel('click')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD',()=>cfOpt0103,'info0103',undefined,'COMP0103')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F5B1}</button>
        \uC6D4\uBCC4 \uC0C1\uD488\uC0C1\uC138 \uD074\uB9AD \uD604\uD669 ({{ cfMonthLabels.length }}\uAC1C\uC6D4)
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#888;">\uCD1D {{ fmt(dash.info0103.reduce((a,r)=>a+(r.col1Num||0),0)) }}\uD68C</span>
      </div>
      <co-echart :option="cfOpt0103" height="260px" />
    </bo-container>

    <!-- 4) \uC8FC\uBB38\uC644\uB8CC -->
    <bo-container v-show="showPanel('order')" card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC8FC\uBB38\uC644\uB8CC \uD604\uD669',()=>cfOpt0104,'info0104',undefined,'COMP0104')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4CB}</button>
        \uC6D4\uBCC4 \uC8FC\uBB38\uC644\uB8CC \uD604\uD669 ({{ cfMonthLabels.length }}\uAC1C\uC6D4)
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
        <div v-if="coUtil.cofAnd(uiState.infoPanel.tab==='data', uiState.infoPanel.src)" style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:#f8fafc;border-bottom:1px solid #e5e7eb;font-size:10.5px;">
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
