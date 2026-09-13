(function(){const{ref:we,reactive:ve,computed:ke,watch:Se,onMounted:Ce}=Vue,J=[{id:"member",label:"\uACE0\uAC1D \uAC80\uC0C9"},{id:"order",label:"\uC8FC\uBB38\uACE0\uAC1D\uAC80\uC0C9"},{id:"claim",label:"\uD074\uB808\uC784\uACE0\uAC1D\uAC80\uC0C9"}],g=b=>({\uD65C\uC131:"badge-green",\uD310\uB9E4\uC911:"badge-green",\uC9C4\uD589\uC911:"badge-blue",\uCC98\uB9AC\uC911:"badge-blue",\uC644\uB8CC:"badge-gray",\uC885\uB8CC:"badge-gray",\uBC30\uC1A1\uC644\uB8CC:"badge-gray",\uAD50\uD658\uC644\uB8CC:"badge-gray",\uD658\uBD88\uC644\uB8CC:"badge-gray",\uCDE8\uC18C\uC644\uB8CC:"badge-gray",\uB2F5\uBCC0\uC644\uB8CC:"badge-gray",\uCDE8\uC18C\uB428:"badge-red",\uC815\uC9C0:"badge-red",\uD488\uC808:"badge-red",\uB9CC\uB8CC:"badge-red",\uC2E4\uD328:"badge-red",\uBC30\uC1A1\uC911:"badge-orange",\uBC30\uC1A1\uC900\uBE44\uC911:"badge-orange",\uACB0\uC81C\uC644\uB8CC:"badge-orange",\uCDE8\uC18C\uCC98\uB9AC\uC911:"badge-orange",\uC218\uAC70\uC608\uC815:"badge-orange",\uC218\uAC70\uC644\uB8CC:"badge-orange",\uD658\uBD88\uCC98\uB9AC\uC911:"badge-orange",\uC8FC\uBB38\uC644\uB8CC:"badge-blue",\uCDE8\uC18C\uC694\uCCAD:"badge-orange",\uBC18\uD488\uC694\uCCAD:"badge-orange",\uAD50\uD658\uC694\uCCAD:"badge-orange",\uC694\uCCAD:"badge-orange",\uC608\uC815:"badge-purple",\uBC1C\uC1A1\uC644\uB8CC:"badge-green",\uC131\uACF5:"badge-green"})[b]||"badge-gray",Q=b=>({SMS:"badge-orange",\uC774\uBA54\uC77C:"badge-blue",\uCE74\uCE74\uC624:"badge-purple"})[b]||"badge-gray",m=b=>b!=null?Number(b).toLocaleString()+"\uC6D0":"-",X=()=>coUtil.cofToYmd(new Date);window._mbCustInfoState=window._mbCustInfoState||{tab:"orders",tabMode:"3col"},window.MbCustInfoMng={name:"MbCustInfoMng",props:{navigate:{type:Function,required:!0}},setup(b){const{reactive:r,ref:ee,computed:ae,watch:P,onMounted:te}=Vue,oe=window.boApp.showRefModal,B=r([]),l=r({loading:!1,error:null,customer:null,searchMode:"member",searchInput:"",tab:window._mbCustInfoState.tab||"orders",tabMode2:window._mbCustInfoState.tabMode||"3col"}),_e=r([]),O=r([]),U=r([]),j=r([]),k=r([]),K=r([]),q=r([]),H=r([]),V=r([]),F=r([]),Y=r({member_statuses:[],member_grades:[]}),h=r(new Set),t=(e,a)=>{var o,p,L,y,v,S,C,x,_;return`${e}:${(_=(x=(C=(S=(v=(y=(L=(p=(o=a.orderId)!=null?o:a.claimId)!=null?p:a.dlivId)!=null?L:a.cacheId)!=null?y:a.inquiryId)!=null?v:a.chatId)!=null?S:a.loginId)!=null?C:a.usageId)!=null?x:a.sendId)!=null?_:""}`},s=e=>{h.has(e)?h.delete(e):h.add(e)},d=e=>h.has(e),f=r({dateRangeType:"reg_date",dateRangeStart:"",dateRangeEnd:"",_dateRange:""}),le=r({dateRangeType:"reg_date",dateRangeStart:"",dateRangeEnd:"",_dateRange:""}),ne=10,i=()=>r({pageNo:1,pageSize:ne,pageTotalCount:0,pageTotalPage:1,pageNums:[1],pageSizes:[5,10,20,30,50,100,200,500]}),I=i(),T=i(),z=i(),R=i(),M=i(),D=i(),A=i(),E=i(),G=i(),w=ee(!1),W=(e,a={})=>{if(e==="searchParam-list")return pe();if(e==="searchParam-clearCustomer")return ce();if(e==="searchParam-mode"){l.searchMode=a,l.searchInput="";return}else{if(e==="searchParam-dateRange")return window.boUtil.bofApplyDateRange(f,void 0,"dateRangeStart","dateRangeEnd","_dateRange");if(e==="memberModal-open"){w.value=!0;return}else console.warn("[handleBtnAction] unknown cmd:",e)}},re=(e,a={})=>{if(e==="tab-select"){l.tab=a;return}else if(e==="tab-mode"){l.tabMode2=a;return}else{if(e==="row-ref")return oe(a.type,a.id);console.warn("[handleSelectAction] unknown cmd:",e)}},de=(e,a,o,p={})=>{console.warn("[handleGridCellAction] unknown cmd:",e)},se=(e,a,o)=>{if(e==="cmPopup-member-pick"){w.value=!1,o&&ge(o);return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},u={orders:{api:boApiSvc.odOrder,dateRangeType:"order_date",pager:I,rows:O,label:"\uC8FC\uBB38\uC870\uD68C"},claims:{api:boApiSvc.odClaim,dateRangeType:"request_date",pager:T,rows:U,label:"\uD074\uB808\uC784\uC870\uD68C"},dliv:{api:boApiSvc.odDliv,dateRangeType:"reg_date",pager:z,rows:j,label:"\uBC30\uC1A1\uC870\uD68C"},cache:{api:boApiSvc.pmCache,dateRangeType:"reg_date",pager:R,rows:k,label:"\uCE90\uC26C\uC870\uD68C"},contacts:{api:boApiSvc.syContact,dateRangeType:"reg_date",pager:M,rows:K,label:"\uBB38\uC758\uC870\uD68C"},chats:{api:boApiSvc.cmChatt,dateRangeType:"reg_date",pager:D,rows:q,label:"\uCC44\uD305\uC870\uD68C"},login:{api:boApiSvc.syUserLoginLog,dateRangeType:"reg_date",pager:A,rows:H,label:"\uB85C\uADF8\uC778\uC870\uD68C"},coupon:{api:boApiSvc.pmCouponUsage,dateRangeType:"reg_date",pager:E,rows:V,label:"\uCFE0\uD3F0\uC870\uD68C"},send:{api:boApiSvc.syAlarm,dateRangeType:"reg_date",pager:G,rows:F,label:"\uBC1C\uC1A1\uC870\uD68C"}},$=e=>{var a;return((a=u[e])==null?void 0:a.pager)||null},ie=e=>f.dateRangeStart?{dateRangeType:e,dateRangeStart:f.dateRangeStart,dateRangeEnd:f.dateRangeEnd||X()}:{},N=async e=>{var o;if(!l.customer)return;const a=u[e];if(a)try{const p={pageNo:a.pager.pageNo,pageSize:a.pager.pageSize,userId:l.customer.userId,...ie(a.dateRangeType)},y=((o=(await a.api.getPage(p,"\uACE0\uAC1D\uC885\uD569\uC815\uBCF4",a.label)).data)==null?void 0:o.data)||{},v=y.pageList||y.list||[];a.rows.splice(0,a.rows.length,...v),a.pager.pageTotalCount=y.pageTotalCount||v.length,a.pager.pageTotalPage=y.pageTotalPage||coUtil.cofTotalPage(a.pager);const S=a.pager.pageNo,C=a.pager.pageTotalPage,x=Math.max(1,S-2),_=Math.min(C,x+4);a.pager.pageNums=Array.from({length:_-x+1},(Ie,he)=>x+he)}catch(p){console.error("[fnLoadHist:"+e+"]",p)}},Z=async()=>{var e,a;if(l.customer){l.loading=!0;try{Object.values(u).forEach(o=>{o.pager.pageNo=1}),await Promise.all(Object.keys(u).map(N));try{const o=await boApiSvc.mbCustInfo.getPage({pageNo:1,pageSize:1,userId:l.customer.userId},"\uACE0\uAC1D\uC885\uD569\uC815\uBCF4","\uC870\uD68C");B.splice(0,B.length,...((a=(e=o.data)==null?void 0:e.data)==null?void 0:a.pageList)||[])}catch{}l.error=null}catch(o){console.error("[catch-info]",o),l.error=o.message}finally{l.loading=!1}}},pe=async()=>{l.customer?await Z():w.value=!0},ce=()=>{l.customer=null,l.searchInput="",Object.values(u).forEach(e=>{e.rows.splice(0,e.rows.length),e.pager.pageTotalCount=0})},ge=e=>{l.customer=e,w.value=!1,l.searchInput=""},be=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["MEMBER_STATUS_CD","MEMBER_GRADE"],{compNm:"MbCustInfoMng"});try{Y.member_statuses=e.sgGetGrpCodes("MEMBER_STATUS_CD"),Y.member_grades=e.sgGetGrpCodes("MEMBER_GRADE")}catch(a){console.error("[fnLoadCodes]",a)}};te(async()=>{await be(),window.boUtil.bofApplyDateRange(f,"1year","dateRangeStart","dateRangeEnd","_dateRange"),Object.assign(le,f)}),P(()=>{var e;return(e=l.customer)==null?void 0:e.userId},async e=>{h.clear(),e?await Z():Object.values(u).forEach(a=>{a.rows.splice(0,a.rows.length),a.pager.pageTotalCount=0})}),P(()=>l.tab,e=>{window._mbCustInfoState.tab=e}),P(()=>l.tabMode2,e=>{window._mbCustInfoState.tabMode=e});const fe=e=>l.tabMode2!=="tab"||l.tab===e,ye=r([{id:"orders",label:"\uC8FC\uBB38\uC774\uB825",icon:"\u{1F6D2}",get count(){return I.pageTotalCount}},{id:"claims",label:"\uD074\uB808\uC784\uC774\uB825",icon:"\u21A9",get count(){return T.pageTotalCount}},{id:"dliv",label:"\uBC30\uC1A1\uC774\uB825",icon:"\u{1F69A}",get count(){return z.pageTotalCount}},{id:"cache",label:"\uCE90\uC26C\uB0B4\uC5ED",icon:"\u{1F4B0}",get count(){return R.pageTotalCount}},{id:"contacts",label:"\uBB38\uC758\uC774\uB825",icon:"\u{1F4CB}",get count(){return M.pageTotalCount}},{id:"chats",label:"\uCC44\uD305\uC774\uB825",icon:"\u{1F4AC}",get count(){return D.pageTotalCount}},{id:"login",label:"\uB85C\uADF8\uC778",icon:"\u{1F510}",get count(){return A.pageTotalCount}},{id:"coupon",label:"\uCFE0\uD3F0",icon:"\u{1F39F}",get count(){return E.pageTotalCount}},{id:"send",label:"\uBC1C\uC1A1",icon:"\u{1F4E8}",get count(){return G.pageTotalCount}}]),ue=ae(()=>{var e,a;return!l.customer||!k.length?0:(a=(e=k.slice().sort((o,p)=>o.cacheId-p.cacheId).at(-1))==null?void 0:e.balance)!=null?a:0}),xe=(e,a)=>{const o=$(e);!o||a<1||a>o.pageTotalPage||(o.pageNo=a,N(e))},me=e=>{const a=$(e);a&&(a.pageNo=1,N(e))},c=(e,a)=>"max-width:"+e+"px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"+(a||""),n={};return n.orderGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("orders",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("orders",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("orders",a))?"\u25B2":"\u25BC"},{key:"orderId",label:"\uC8FC\uBB38\uBC88\uD638",refLink:"order"},{key:"orderDate",label:"\uC77C\uC2DC",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>e?String(e).slice(0,16):"-"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",cellStyle:c(150),cellTitle:!0},{key:"totalPrice",label:"\uAE08\uC561",style:"text-align:right;",align:"right",cellStyle:"font-weight:600;",fmt:e=>m(e)},{key:"status",label:"\uC0C1\uD0DC",badge:e=>g(e.status)}],n.claimGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("claims",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("claims",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("claims",a))?"\u25B2":"\u25BC"},{key:"claimId",label:"\uD074\uB808\uC784\uBC88\uD638",refLink:"claim"},{key:"type",label:"\uC720\uD615"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",cellStyle:c(130),cellTitle:!0},{key:"status",label:"\uC0C1\uD0DC",badge:e=>g(e.status)},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",style:"white-space:nowrap;",fmt:e=>e?e.slice(0,10):""}],n.dlivGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("dliv",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("dliv",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("dliv",a))?"\u25B2":"\u25BC"},{key:"dlivId",label:"\uBC30\uC1A1\uBC88\uD638",cellStyle:"font-weight:500;"},{key:"orderId",label:"\uC8FC\uBB38\uBC88\uD638"},{key:"courier",label:"\uD0DD\uBC30\uC0AC",fmt:e=>e||"-"},{key:"trackingNo",label:"\uC6B4\uC1A1\uC7A5\uBC88\uD638",cellStyle:"color:#888;",fmt:e=>e||"-"},{key:"status",label:"\uC0C1\uD0DC",badge:e=>g(e.status)}],n.cacheGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("cache",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("cache",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("cache",a))?"\u25B2":"\u25BC"},{key:"date",label:"\uC77C\uC2DC",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;"},{key:"type",label:"\uAD6C\uBD84",badge:e=>e.type==="\uCDA9\uC804"?"badge-blue":"badge-orange"},{key:"amount",label:"\uAE08\uC561",style:"text-align:right;",align:"right",cellStyle:(e,a)=>"font-weight:600;"+(a.amount>0?"color:#1565c0;":"color:#c62828;"),fmt:(e,a)=>(a.amount>0?"+":"")+a.amount.toLocaleString()+"\uC6D0"},{key:"balance",label:"\uC794\uC561",style:"text-align:right;",align:"right",cellStyle:"color:#555;",fmt:e=>m(e)},{key:"desc",label:"\uC0AC\uC720",cellStyle:c(150,"color:#666;"),cellTitle:!0}],n.contactGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("contacts",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("contacts",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("contacts",a))?"\u25B2":"\u25BC"},{key:"date",label:"\uC811\uC218\uC77C",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>e?e.slice(0,10):""},{key:"category",label:"\uBD84\uB958",cellStyle:"white-space:nowrap;"},{key:"title",label:"\uC81C\uBAA9",cellStyle:c(200),cellTitle:!0},{key:"status",label:"\uC0C1\uD0DC",badge:e=>g(e.status)}],n.chatGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("chats",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("chats",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("chats",a))?"\u25B2":"\u25BC"},{key:"date",label:"\uC77C\uC2DC",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>e?e.slice(0,10):""},{key:"subject",label:"\uC81C\uBAA9",cellStyle:c(130),cellTitle:!0},{key:"lastMsg",label:"\uB9C8\uC9C0\uB9C9 \uBA54\uC2DC\uC9C0",cellStyle:c(180,"color:#666;"),cellTitle:!0},{key:"status",label:"\uC0C1\uD0DC",badge:e=>g(e.status)}],n.loginGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("login",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("login",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("login",a))?"\u25B2":"\u25BC"},{key:"loginDate",label:"\uC77C\uC2DC",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>e?String(e).slice(0,16):"-"},{key:"ip",label:"IP",cellStyle:"color:#666;font-family:monospace;"},{key:"device",label:"\uAE30\uAE30/\uBE0C\uB77C\uC6B0\uC800",cellStyle:"color:#555;"},{key:"result",label:"\uACB0\uACFC",badge:e=>g(e.result)}],n.couponGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("coupon",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("coupon",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("coupon",a))?"\u25B2":"\u25BC"},{key:"usedDate",label:"\uC0AC\uC6A9\uC77C",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"couponNm",label:"\uCFE0\uD3F0\uBA85",cellStyle:c(150),cellTitle:!0},{key:"couponCode",label:"\uCF54\uB4DC",cellStyle:"font-family:monospace;color:#666;"},{key:"orderId",label:"\uC8FC\uBB38\uBC88\uD638",refLink:"order"},{key:"discountAmt",label:"\uD560\uC778\uAE08\uC561",style:"text-align:right;",align:"right",cellStyle:"font-weight:600;color:#e91e63;",fmt:(e,a)=>"-"+coUtil.cofWon(a.discountAmt)}],n.sendGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:e=>d(t("send",e)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:e=>s(t("send",e)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,a)=>d(t("send",a))?"\u25B2":"\u25BC"},{key:"sendDate",label:"\uBC1C\uC1A1\uC77C\uC2DC",style:"white-space:nowrap;",cellStyle:"color:#888;white-space:nowrap;",fmt:e=>e?String(e).slice(0,16):"-"},{key:"channelCd",label:"\uCC44\uB110",badge:e=>Q(e.channelCd)},{key:"title",label:"\uC81C\uBAA9/\uB0B4\uC6A9",cellStyle:c(220,"color:#333;"),cellTitle:!0},{key:"statusCd",label:"\uACB0\uACFC",badge:e=>g(e.statusCd)}],n.orderGridRowDetail=[{key:"_orderId",label:"\uC8FC\uBB38\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.orderId||"-"},{key:"_orderDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(e,a)=>a.orderDate?String(a.orderDate).slice(0,16):"-"},{key:"_prodNm",label:"\uC0C1\uD488\uBA85",type:"readonly",fmt:(e,a)=>a.prodNm||"-"},{key:"_totalPrice",label:"\uAE08\uC561",type:"readonly",fmt:(e,a)=>m(a.totalPrice)},{key:"_status",label:"\uC0C1\uD0DC",type:"readonly",fmt:(e,a)=>a.statusNm||a.status||"-"},{key:"_memberId",label:"\uD68C\uC6D0ID",type:"readonly",fmt:(e,a)=>a.memberId||a.userId||"-"}],n.claimGridRowDetail=[{key:"_claimId",label:"\uD074\uB808\uC784\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.claimId||"-"},{key:"_type",label:"\uC720\uD615",type:"readonly",fmt:(e,a)=>a.typeNm||a.type||"-"},{key:"_prodNm",label:"\uC0C1\uD488\uBA85",type:"readonly",fmt:(e,a)=>a.prodNm||"-"},{key:"_status",label:"\uC0C1\uD0DC",type:"readonly",fmt:(e,a)=>a.statusNm||a.status||"-"},{key:"_requestDate",label:"\uC2E0\uCCAD\uC77C",type:"readonly",fmt:(e,a)=>a.requestDate?String(a.requestDate).slice(0,10):"-"},{key:"_orderId",label:"\uC8FC\uBB38\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.orderId||"-"}],n.dlivGridRowDetail=[{key:"_dlivId",label:"\uBC30\uC1A1\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.dlivId||"-"},{key:"_orderId",label:"\uC8FC\uBB38\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.orderId||"-"},{key:"_courier",label:"\uD0DD\uBC30\uC0AC",type:"readonly",fmt:(e,a)=>a.courier||"-"},{key:"_trackingNo",label:"\uC6B4\uC1A1\uC7A5\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.trackingNo||"-"},{key:"_status",label:"\uC0C1\uD0DC",type:"readonly",fmt:(e,a)=>a.statusNm||a.status||"-"}],n.cacheGridRowDetail=[{key:"_cacheId",label:"\uCE90\uC26CID",type:"readonly",fmt:(e,a)=>a.cacheId||"-"},{key:"_date",label:"\uC77C\uC2DC",type:"readonly",fmt:(e,a)=>a.date||"-"},{key:"_type",label:"\uAD6C\uBD84",type:"readonly",fmt:(e,a)=>a.typeNm||a.type||"-"},{key:"_amount",label:"\uAE08\uC561",type:"readonly",fmt:(e,a)=>a.amount!=null?(a.amount>0?"+":"")+Number(a.amount).toLocaleString()+"\uC6D0":"-"},{key:"_balance",label:"\uC794\uC561",type:"readonly",fmt:(e,a)=>m(a.balance)},{key:"_desc",label:"\uC0AC\uC720",type:"readonly",colSpan:2,fmt:(e,a)=>a.desc||"-"}],n.contactGridRowDetail=[{key:"_inquiryId",label:"\uBB38\uC758ID",type:"readonly",fmt:(e,a)=>a.inquiryId||"-"},{key:"_date",label:"\uC811\uC218\uC77C",type:"readonly",fmt:(e,a)=>a.date?String(a.date).slice(0,10):"-"},{key:"_category",label:"\uBD84\uB958",type:"readonly",fmt:(e,a)=>a.categoryNm||a.category||"-"},{key:"_status",label:"\uC0C1\uD0DC",type:"readonly",fmt:(e,a)=>a.statusNm||a.status||"-"},{key:"_title",label:"\uC81C\uBAA9",type:"readonly",colSpan:2,fmt:(e,a)=>a.title||"-"}],n.chatGridRowDetail=[{key:"_chatId",label:"\uCC44\uD305ID",type:"readonly",fmt:(e,a)=>a.chatId||"-"},{key:"_date",label:"\uC77C\uC2DC",type:"readonly",fmt:(e,a)=>a.date?String(a.date).slice(0,10):"-"},{key:"_subject",label:"\uC81C\uBAA9",type:"readonly",fmt:(e,a)=>a.subject||"-"},{key:"_status",label:"\uC0C1\uD0DC",type:"readonly",fmt:(e,a)=>a.statusNm||a.status||"-"},{key:"_lastMsg",label:"\uB9C8\uC9C0\uB9C9 \uBA54\uC2DC\uC9C0",type:"readonly",colSpan:2,fmt:(e,a)=>a.lastMsg||"-"}],n.loginGridRowDetail=[{key:"_loginId",label:"\uB85C\uADF8\uC778ID",type:"readonly",fmt:(e,a)=>a.loginId||"-"},{key:"_loginDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(e,a)=>a.loginDate?String(a.loginDate).slice(0,16):"-"},{key:"_ip",label:"IP",type:"readonly",fmt:(e,a)=>a.ip||"-"},{key:"_device",label:"\uAE30\uAE30/\uBE0C\uB77C\uC6B0\uC800",type:"readonly",fmt:(e,a)=>a.device||"-"},{key:"_result",label:"\uACB0\uACFC",type:"readonly",fmt:(e,a)=>a.resultNm||a.result||"-"}],n.couponGridRowDetail=[{key:"_usageId",label:"\uC0AC\uC6A9ID",type:"readonly",fmt:(e,a)=>a.usageId||"-"},{key:"_usedDate",label:"\uC0AC\uC6A9\uC77C",type:"readonly",fmt:(e,a)=>coUtil.cofYmd(a.usedDate)||"-"},{key:"_couponNm",label:"\uCFE0\uD3F0\uBA85",type:"readonly",fmt:(e,a)=>a.couponNm||"-"},{key:"_couponCode",label:"\uCF54\uB4DC",type:"readonly",fmt:(e,a)=>a.couponCode||"-"},{key:"_orderId",label:"\uC8FC\uBB38\uBC88\uD638",type:"readonly",fmt:(e,a)=>a.orderId||"-"},{key:"_discountAmt",label:"\uD560\uC778\uAE08\uC561",type:"readonly",fmt:(e,a)=>a.discountAmt!=null?"-"+Number(a.discountAmt).toLocaleString()+"\uC6D0":"-"}],n.sendGridRowDetail=[{key:"_sendId",label:"\uBC1C\uC1A1ID",type:"readonly",fmt:(e,a)=>a.sendId||"-"},{key:"_sendDate",label:"\uBC1C\uC1A1\uC77C\uC2DC",type:"readonly",fmt:(e,a)=>a.sendDate?String(a.sendDate).slice(0,16):"-"},{key:"_channel",label:"\uCC44\uB110",type:"readonly",fmt:(e,a)=>a.channelNm||a.channelCd||"-"},{key:"_status",label:"\uACB0\uACFC",type:"readonly",fmt:(e,a)=>a.statusNm||a.statusCd||"-"},{key:"_title",label:"\uC81C\uBAA9/\uB0B4\uC6A9",type:"readonly",colSpan:2,fmt:(e,a)=>a.title||"-"}],n.periodSearch=[{key:"_dateRange",type:"dateRange",dateWidth:"136px",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>[{value:"reg_date",label:"\uB4F1\uB85D\uC77C\uC790"}],rangeOptions:()=>window.boUtil.bofDateRangeOptions,onRangeChange:()=>W("searchParam-dateRange")}],{columns:n,uiState:l,searchParam:f,memberModalOpen:w,orders:O,claims:U,deliveries:j,caches:k,contacts:K,chats:q,loginHistories:H,couponUsages:V,sendHistories:F,SEARCH_MODES:J,ordersPager:I,claimsPager:T,dlivPager:z,cachePager:R,contactsPager:M,chatsPager:D,loginPager:A,couponPager:E,sendPager:G,onSetPage:xe,onSizeChange:me,handleBtnAction:W,handleSelectAction:re,handleGridCellAction:de,fnCallbackModal:se,cfCustCacheBalance:ue,tabs:ye,showTab:fe,fnFmtPrice:m,toggleRow:s,isExpanded:d,fnExpKey:t}},template:`
<bo-page title="\uACE0\uAC1D\uC885\uD569\uC815\uBCF4">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uBC14 ==================================================== -->
  <bo-container>
   <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <!-- ===== \u25A0.\u25A0. \uBAA8\uB4DC \uC138\uADF8\uBA3C\uD2B8 =============================================== -->
    <div style="display:flex;background:#f0f2f5;border-radius:8px;padding:3px;gap:2px;flex-shrink:0;">
      <button v-for="m in SEARCH_MODES" :key="m?.id"
        @click="handleBtnAction('searchParam-mode', m.id)"
        :style="uiState.searchMode===m.id
        ? 'background:#1976d2;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:13px;font-weight:600;transition:all .15s;'
        : 'background:transparent;color:#666;border:none;border-radius:6px;padding:6px 16px;font-size:13px;transition:all .15s;'">
        {{ m.label }}
      </button>
    </div>
    <!-- ===== \u25A1.\u25A0. \uBAA8\uB4DC \uC138\uADF8\uBA3C\uD2B8 =============================================== -->
    <!-- ===== \u25A0.\u25A0. \uACE0\uAC1D \uC120\uD0DD ================================================= -->
    <template v-if="uiState.searchMode==='member'">
      <button @click="handleBtnAction('memberModal-open')"
        style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #1976d2;color:#1976d2;border-radius:8px;padding:7px 18px;font-size:13px;font-weight:600;">
        \u{1F50D} \uACE0\uAC1D \uC120\uD0DD
      </button>
      <span style="font-size:12px;color:#aaa;">
        \uC774\uB984 \xB7 \uC774\uBA54\uC77C \xB7 \uC804\uD654\uBC88\uD638\uB85C \uAC80\uC0C9
      </span>
    </template>
    <!-- ===== \u25A1.\u25A0. \uACE0\uAC1D \uC120\uD0DD ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uBC88\uD638 \uC785\uB825 ================================================= -->
    <template v-else>
      <div style="display:flex;align-items:center;gap:0;background:#f8f9fa;border:1.5px solid #ddd;border-radius:8px;overflow:hidden;flex:1;max-width:360px;">
        <input type="text" v-model="uiState.searchInput"
          :placeholder="uiState.searchMode==='order'?'\uC8FC\uBB38\uBC88\uD638  ex) ORD-2026-025':'\uD074\uB808\uC784\uBC88\uD638  ex) CLM-2026-013'"
          style="border:none;background:transparent;padding:8px 14px;font-size:13px;outline:none;flex:1;min-width:0;"
          @keyup.enter="handleBtnAction('searchParam-list')" />
        <button class="btn btn_search" @click="handleBtnAction('searchParam-list')"
          style="white-space:nowrap;">
          \uC870\uD68C
        </button>
      </div>
    </template>
    <button v-if="uiState.customer" @click="handleBtnAction('searchParam-clearCustomer')"
      style="margin-left:auto;background:#f5f5f5;border:1px solid #ddd;color:#666;border-radius:8px;padding:7px 16px;font-size:12px;">
      \u2715 \uCD08\uAE30\uD654
    </button>
    <!-- ===== \u25A1.\u25A0. \uBC88\uD638 \uC785\uB825 ================================================= -->
   </div>
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uAE30\uAC04 \uD544\uD130 \uBC14 (BoSearchArea, \uC8FC\uBB38\uD56D\uBAA9\uAD00\uB9AC\uC640 \uB3D9\uC77C\uD55C dateRange \uD544\uB4DC) ============ -->
  <bo-container>
    <bo-search-area :columns="columns.periodSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" :show-reset="false" />
  </bo-container>
  <!-- ===== \u25A1. \uAE30\uAC04 \uD544\uD130 \uBC14 ================================================= -->
  <!-- ===== \u25A0. \uACE0\uAC1D \uC5C6\uC74C \uC548\uB0B4 ================================================ -->
  <div v-if="!uiState.customer"
    style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 0;color:#ccc;gap:12px;">
    <div style="font-size:48px;line-height:1;">
      \u{1F464}
    </div>
    <div style="font-size:15px;color:#bbb;">
      \uACE0\uAC1D\uC744 \uAC80\uC0C9\uD558\uC5EC \uC120\uD0DD\uD558\uBA74 \uC885\uD569 \uC815\uBCF4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
    </div>
    <div style="font-size:12px;color:#d0d0d0;">
      \uACE0\uAC1D \uC120\uD0DD \xB7 \uC8FC\uBB38\uBC88\uD638 \xB7 \uD074\uB808\uC784\uBC88\uD638 \uC138 \uAC00\uC9C0 \uBC29\uBC95\uC73C\uB85C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    </div>
  </div>
  <!-- ===== \u25A1. \uACE0\uAC1D \uC5C6\uC74C \uC548\uB0B4 ================================================ -->
  <!-- ===== \u25A0. \uACE0\uAC1D \uC815\uBCF4 \uC601\uC5ED ================================================ -->
  <template v-else>
    <!-- ===== \u25A0.\u25A0. \uACE0\uAC1D \uD504\uB85C\uD544 \uCE74\uB4DC ============================================ -->
    <div style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;margin-bottom:14px;box-shadow:0 1px 4px rgba(0,0,0,.05);overflow:hidden;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uB2E8 \uCEEC\uB7EC \uBC30\uB108 ============================================ -->
      <div :style="'height:6px;background:'+(uiState.customer.grade==='VIP'?'linear-gradient(90deg,#9c27b0,#e040fb)':uiState.customer.grade==='\uC6B0\uC218'?'linear-gradient(90deg,#1976d2,#42a5f5)':'linear-gradient(90deg,#78909c,#b0bec5)')">
      </div>
      <div style="display:flex;align-items:flex-start;gap:20px;padding:20px 24px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC544\uBC14\uD0C0 =============================================== -->
        <div :style="'width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;flex-shrink:0;'+(uiState.customer.grade==='VIP'?'background:linear-gradient(135deg,#9c27b0,#e040fb);':uiState.customer.grade==='\uC6B0\uC218'?'background:linear-gradient(135deg,#1976d2,#42a5f5);':'background:linear-gradient(135deg,#78909c,#b0bec5);')">
          {{ uiState.customer.memberNm ? uiState.customer.memberNm[0] : '' }}
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC774\uB984/\uB4F1\uAE09/\uC0C1\uD0DC ========================================== -->
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="font-size:20px;font-weight:700;color:#212121;">
              {{ uiState.customer.memberNm }}
            </span>
            <span :class="'badge '+(uiState.customer.grade==='VIP'?'badge-purple':uiState.customer.grade==='\uC6B0\uC218'?'badge-blue':'badge-gray')" style="font-size:12px;">
              {{ uiState.customer.grade }}
            </span>
            <span :class="'badge '+(uiState.customer.status==='\uD65C\uC131'?'badge-green':'badge-red')" style="font-size:12px;">
              {{ uiState.customer.status }}
            </span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:12px 24px;font-size:13px;color:#555;">
            <span>
              \u2709 {{ uiState.customer.email }}
            </span>
            <span>
              \u{1F4DE} {{ uiState.customer.phone || '-' }}
            </span>
            <span style="color:#999;">
              \uAC00\uC785 {{ uiState.customer.joinDate }}
            </span>
            <span style="color:#999;">
              \uCD5C\uADFC\uB85C\uADF8\uC778 {{ uiState.customer.lastLogin }}
            </span>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD575\uC2EC \uC9C0\uD45C ============================================= -->
        <div style="display:flex;gap:10px;flex-shrink:0;flex-wrap:wrap;">
          <div style="background:#f0f7ff;border:1px solid #bbdefb;border-radius:8px;padding:10px 18px;text-align:center;min-width:88px;">
            <div style="font-size:11px;color:#1976d2;font-weight:600;margin-bottom:2px;">
              \uCD1D \uC8FC\uBB38
            </div>
            <div style="font-size:20px;font-weight:700;color:#1976d2;">
              {{ uiState.customer.orderCount }}
            </div>
            <div style="font-size:10px;color:#90a4ae;">
              \uAC74
            </div>
          </div>
          <div style="background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:10px 18px;text-align:center;min-width:110px;">
            <div style="font-size:11px;color:#f57f17;font-weight:600;margin-bottom:2px;">
              \uCD1D \uAD6C\uB9E4\uC561
            </div>
            <div style="font-size:17px;font-weight:700;color:#f57f17;">
              {{ (uiState.customer.totalPurchase||0).toLocaleString() }}
            </div>
            <div style="font-size:10px;color:#90a4ae;">
              \uC6D0
            </div>
          </div>
          <div style="background:#f3e5f5;border:1px solid #ce93d8;border-radius:8px;padding:10px 18px;text-align:center;min-width:100px;">
            <div style="font-size:11px;color:#7b1fa2;font-weight:600;margin-bottom:2px;">
              \uCE90\uC26C \uC794\uC561
            </div>
            <div style="font-size:17px;font-weight:700;color:#7b1fa2;">
              {{ cfCustCacheBalance.toLocaleString() }}
            </div>
            <div style="font-size:10px;color:#90a4ae;">
              \uC6D0
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A0. \uACE0\uAC1D \uD504\uB85C\uD544 \uCE74\uB4DC ============================================ -->
    <!-- ===== \u25A0.\u25A0. \uC774\uB825 \uD0ED\uBC14 + \uBDF0\uBAA8\uB4DC =========================================== -->
    <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :tab-mode="uiState.tabMode2"
      @tab-select="id => handleSelectAction('tab-select', id)"
      @mode-select="m => handleSelectAction('tab-mode', m)" />
    <!-- ===== \u25A1.\u25A0. \uC774\uB825 \uD0ED\uBC14 + \uBDF0\uBAA8\uB4DC =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC774\uB825 \uD328\uB110 ================================================= -->
    <div :class="uiState.tabMode2!=='tab' ? 'dtl-tab-grid cols-'+uiState.tabMode2.charAt(0) : ''">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uBB38\uC774\uB825 ================================================ -->
      <div v-show="showTab('orders')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#1976d2;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uC8FC\uBB38\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#e3f2fd;color:#1565c0;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ ordersPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.orderGrid" :rows="orders" :pager="ordersPager" row-key="orderId" empty-text="\uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            @ref-click="ref => handleSelectAction('row-ref', ref)" :is-expanded="(row) => isExpanded(fnExpKey('orders', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.orderGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="ordersPager.pageTotalCount > 0" :pager="ordersPager" :on-set-page="n => onSetPage('orders', n)" :on-size-change="() => onSizeChange('orders')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD074\uB808\uC784\uC774\uB825 =============================================== -->
      <div v-show="showTab('claims')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#ef5350;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uD074\uB808\uC784\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#ffebee;color:#c62828;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ claimsPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.claimGrid" :rows="claims" :pager="claimsPager" row-key="claimId" empty-text="\uD074\uB808\uC784 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            @ref-click="ref => handleSelectAction('row-ref', ref)" :is-expanded="(row) => isExpanded(fnExpKey('claims', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.claimGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="claimsPager.pageTotalCount > 0" :pager="claimsPager" :on-set-page="n => onSetPage('claims', n)" :on-size-change="() => onSizeChange('claims')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uC1A1\uC774\uB825 ================================================ -->
      <div v-show="showTab('dliv')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#00897b;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uBC30\uC1A1\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#e0f2f1;color:#00695c;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ dlivPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.dlivGrid" :rows="deliveries" :pager="dlivPager" row-key="dlivId" empty-text="\uBC30\uC1A1 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('dliv', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.dlivGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="dlivPager.pageTotalCount > 0" :pager="dlivPager" :on-set-page="n => onSetPage('dliv', n)" :on-size-change="() => onSizeChange('dliv')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE90\uC26C\uB0B4\uC5ED ================================================ -->
      <div v-show="showTab('cache')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#f57c00;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uCE90\uC26C\uB0B4\uC5ED
          </span>
          <span style="margin-left:2px;background:#fff3e0;color:#e65100;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ cachePager.pageTotalCount }}\uAC74
          </span>
          <span style="margin-left:auto;font-size:12px;color:#7b1fa2;font-weight:600;">
            \uC794\uC561 {{ fnFmtPrice(cfCustCacheBalance) }}
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.cacheGrid" :rows="caches" :pager="cachePager" row-key="cacheId" empty-text="\uCE90\uC26C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('cache', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.cacheGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="cachePager.pageTotalCount > 0" :pager="cachePager" :on-set-page="n => onSetPage('cache', n)" :on-size-change="() => onSizeChange('cache')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBB38\uC758\uC774\uB825 ================================================ -->
      <div v-show="showTab('contacts')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#5c6bc0;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uBB38\uC758\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#e8eaf6;color:#283593;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ contactsPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.contactGrid" :rows="contacts" :pager="contactsPager" row-key="inquiryId" empty-text="\uBB38\uC758 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('contacts', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.contactGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="contactsPager.pageTotalCount > 0" :pager="contactsPager" :on-set-page="n => onSetPage('contacts', n)" :on-size-change="() => onSizeChange('contacts')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCC44\uD305\uC774\uB825 ================================================ -->
      <div v-show="showTab('chats')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#26a69a;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uCC44\uD305\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#e0f2f1;color:#004d40;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ chatsPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.chatGrid" :rows="chats" :pager="chatsPager" row-key="chatId" empty-text="\uCC44\uD305 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('chats', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.chatGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="chatsPager.pageTotalCount > 0" :pager="chatsPager" :on-set-page="n => onSetPage('chats', n)" :on-size-change="() => onSizeChange('chats')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB85C\uADF8\uC778\uC774\uB825 =============================================== -->
      <div v-show="showTab('login')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#546e7a;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uB85C\uADF8\uC778\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#eceff1;color:#37474f;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ loginPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.loginGrid" :rows="loginHistories" :pager="loginPager" row-key="loginId" empty-text="\uB85C\uADF8\uC778 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('login', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.loginGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="loginPager.pageTotalCount > 0" :pager="loginPager" :on-set-page="n => onSetPage('login', n)" :on-size-change="() => onSizeChange('login')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCFE0\uD3F0\uC0AC\uC6A9\uC774\uB825 ============================================== -->
      <div v-show="showTab('coupon')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#e91e63;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uCFE0\uD3F0\uC0AC\uC6A9\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#fce4ec;color:#880e4f;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ couponPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.couponGrid" :rows="couponUsages" :pager="couponPager" row-key="usageId" empty-text="\uCFE0\uD3F0 \uC0AC\uC6A9 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            @ref-click="ref => handleSelectAction('row-ref', ref)" :is-expanded="(row) => isExpanded(fnExpKey('coupon', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.couponGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="couponPager.pageTotalCount > 0" :pager="couponPager" :on-set-page="n => onSetPage('coupon', n)" :on-size-change="() => onSizeChange('coupon')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC1C\uC1A1\uC774\uB825 ================================================ -->
      <div v-show="showTab('send')" style="background:#fff;border:1px solid #e5e8ed;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);overflow:hidden;">
        <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafbfc;">
          <span style="width:4px;height:18px;background:#ff7043;border-radius:2px;display:inline-block;">
          </span>
          <span style="font-weight:600;font-size:13px;color:#333;">
            \uBC1C\uC1A1\uC774\uB825
          </span>
          <span style="margin-left:2px;background:#fbe9e7;color:#bf360c;font-size:11px;font-weight:600;padding:1px 8px;border-radius:10px;">
            {{ sendPager.pageTotalCount }}\uAC74
          </span>
        </div>
        <div style="overflow:auto;max-height:340px;">
          <bo-grid bare :columns="columns.sendGrid" :rows="sendHistories" :pager="sendPager" row-key="sendId" empty-text="\uBC1C\uC1A1 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            :is-expanded="(row) => isExpanded(fnExpKey('send', row))">
            <template #row-expand="{ row, colspan }">
              <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
                <bo-form-area plain-readonly :columns="columns.sendGridRowDetail" :form="row" :cols="2" readonly label-left compact :show-actions="false" />
              </td>
            </template>
          </bo-grid>
        </div>
        <bo-pager v-if="sendPager.pageTotalCount > 0" :pager="sendPager" :on-set-page="n => onSetPage('send', n)" :on-size-change="() => onSizeChange('send')" />
      </div>
    </div>
    <!-- ===== \u25A1.\u25A0. \uC774\uB825 \uD328\uB110 ================================================= -->
  </template>
  <!-- ===== \u25A1. \uACE0\uAC1D \uC815\uBCF4 \uC601\uC5ED ================================================ -->
  <!-- ===== \u25A0. \uACE0\uAC1D \uC120\uD0DD \uBAA8\uB2EC ================================================ -->
  <bo-cm-popup-modal v-if="memberModalOpen" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uACE0\uAC1D \uC120\uD0DD \uBAA8\uB2EC ================================================ -->
</bo-page>
`}})();
