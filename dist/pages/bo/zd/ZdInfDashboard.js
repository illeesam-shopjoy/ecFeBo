window.ZdInfDashboard={name:"ZdInfDashboard",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(O){var D;const{reactive:y,ref:x,onMounted:I}=Vue,A=O.showToast||((D=window.boApp)==null?void 0:D.showToast)||(()=>{}),z=y({}),b=x(!1),N=x("channel"),R=x("tab"),B=e=>e==="tab"?"":"cols-"+e.replace("col",""),U=y([{id:"channel",label:"\uC5F0\uB3D9 \uCC44\uB110 \uBAA9\uB85D",icon:"\u{1F50C}"},{id:"env",label:"\uD658\uACBD\uAC12\uC815\uBCF4",icon:"\u2699\uFE0F"},{id:"ref",label:"\uC678\uBD80\uC5F0\uB3D9\uAD6C\uC870",icon:"\u{1F4CB}"}]),J=[],t=(e,a,l,s,o,i,r,p,u,_)=>{let c="";return p&&(p==="__envFoConsts__"?c="envFoConsts":p==="__envBoConsts__"?c="envBoConsts":p.startsWith("spring.")?c="sy_prop + yml":p.startsWith("app.")&&(c="sy_prop")),{_svc:e,_app:a||"",_level:l||"",_kind:s,_val:o,_applied:i||"",_note:r||"",_propKey:p||"",_where:c,_color:u||"gray",_configUrl:_||""}},C=[t("YouTube","\uC18C\uC15C\uB85C\uADF8\uC778","-","\uAC15\uC88C\uB9C1\uD06C","\uC18C\uC15C\uB85C\uADF8\uC778 \uAD6C\uD604 \uC6D0\uB9AC (\uB124\uC774\uBC84/\uCE74\uCE74\uC624/\uAE43\uD5D9)","\uCC38\uACE0","https://www.youtube.com/watch?v=Aa6oqanyOHY","","red"),t("YouTube","\uC18C\uC15C\uB85C\uADF8\uC778","-","\uAC15\uC88C\uB9C1\uD06C","\uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uC124\uC815 \uBC0F \uC900\uBE44","\uCC38\uACE0","https://www.youtube.com/watch?v=Aa6oqanyOHY","","red"),t("YouTube","\uC18C\uC15C\uB85C\uADF8\uC778","-","\uAC15\uC88C\uB9C1\uD06C","\uB124\uC774\uBC84 \uC18C\uC15C \uB85C\uADF8\uC778 \uAD6C\uD604","\uCC38\uACE0","https://www.youtube.com/watch?v=NrMUyA47gdU","","red"),t("YouTube","\uC18C\uC15C\uB85C\uADF8\uC778","-","\uAC15\uC88C\uB9C1\uD06C","Google OAuth \uAD6C\uAE00 \uC18C\uC15C \uB85C\uADF8\uC778","\uCC38\uACE0","https://www.youtube.com/watch?v=olnJzoa4A68","","red"),t("YouTube","\uACB0\uC81C","-","\uAC15\uC88C\uB9C1\uD06C","\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 5\uBD84 \uACB0\uC81C \uC5F0\uB3D9","\uCC38\uACE0","https://www.youtube.com/watch?v=HtwLMwzTG5c","","red"),t("YouTube","\uBA54\uC77C","-","\uAC15\uC88C\uB9C1\uD06C","\uC2A4\uD504\uB9C1 SMTP / \uAD6C\uAE00 \uC571 \uBE44\uBC00\uBC88\uD638 \uC2E0\uCCAD","\uCC38\uACE0","https://www.youtube.com/watch?v=Sedf9uO7W4E","","red"),t("Kakao","illeesam_netlify (1429368)","Lv1 \uC571","REST API \uD0A4","44074b1c358f60292145b3068460f37d","\uBBF8\uC124\uC815","","","green","https://developers.kakao.com/console/app/1429368"),t("Kakao","illeesam_netlify (1429368)","Lv1 \uC571","JavaScript \uD0A4","797a116c08880d3865a89cf4f70b91f5","\uBBF8\uC124\uC815","Kakao.init() / \uCE74\uCE74\uC624\uB9F5 \uACF5\uC6A9","","blue","https://developers.kakao.com/console/app/1429368"),t("Kakao","illeesam_netlify (1429368)","Lv1 \uC571","\uB124\uC774\uD2F0\uBE0C \uC571 \uD0A4","96e57663db167a8e7a78345c9d0cf9d2","\uBBF8\uC0AC\uC6A9","","","purple","https://developers.kakao.com/console/app/1429368"),t("Kakao","illeesam_netlify (1429368)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uB85C\uADF8\uC778)","1gV3lHvBP6KNju9P5E6I4TbchWByfPIh","\uBBF8\uC124\uC815","\uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1429368/product/login"),t("Kakao","illeesam_netlify (1429368)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uBE44\uC988)","ZyuNrjSOp2yilmTv9MSxDlXRdwPFXDTB","\uBBF8\uC124\uC815","Redirect: /login/oauth2/code/kakao | \uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1429368/product/login"),t("Kakao","illeesam_netlify (1429368)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uB2C9\uB124\uC784","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_netlify (1429368)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uD504\uB85C\uD544\uC0AC\uC9C4","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_netlify (1429368)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uCE5C\uAD6C\uBAA9\uB85D","","\uC774\uC6A9\uC911\uB3D9\uC758","\uCE74\uCE74\uC624\uC11C\uBE44\uC2A4\uB0B4 \uCE5C\uAD6C\uBAA9\uB85D","","gray"),t("Kakao","illeesam_netlify (1429368)","Lv3 \uC811\uADFC\uAD8C\uD55C","\uCE74\uCE74\uC624\uD1A1 \uBA54\uC2DC\uC9C0 \uC804\uC1A1","","\uC120\uD0DD\uB3D9\uC758","","","gray"),t("Kakao","illeesam_synology (1491354)","Lv1 \uC571","REST API \uD0A4","63d491e61a4caacf2fc90ee252f2d644","\uBBF8\uC124\uC815","","","green","https://developers.kakao.com/console/app/1491354"),t("Kakao","illeesam_synology (1491354)","Lv1 \uC571","JavaScript \uD0A4","a2990e41aa57c3a4ad1fe97a210938d7","\uC801\uC6A9\uB428","app.auth.social.kakao-js-key / app.map.kakao-js-key","app.auth.social.kakao-js-key","blue","https://developers.kakao.com/console/app/1491354"),t("Kakao","illeesam_synology (1491354)","Lv1 \uC571","\uB124\uC774\uD2F0\uBE0C \uC571 \uD0A4","4f43ddc38e22c79280d18595a31ff27b","\uBBF8\uC0AC\uC6A9","","","purple","https://developers.kakao.com/console/app/1491354"),t("Kakao","illeesam_synology (1491354)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uB85C\uADF8\uC778)","7gxUHEectTM7qYSDmhnXUJc3ZE1ymqRO","\uBBF8\uC124\uC815","\uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1491354/product/login"),t("Kakao","illeesam_synology (1491354)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uBE44\uC988)","Q6d7uCUnJBXCXQ2qINFWt2wSZ0sEzpB2","\uBBF8\uC124\uC815","Redirect: /login/oauth2/code/kakao | \uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1491354/product/login"),t("Kakao","illeesam_synology (1491354)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uB2C9\uB124\uC784","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_synology (1491354)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uD504\uB85C\uD544\uC0AC\uC9C4","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_synology (1491354)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uCE5C\uAD6C\uBAA9\uB85D","","\uC774\uC6A9\uC911\uB3D9\uC758","","","gray"),t("Kakao","illeesam_synology (1491354)","Lv3 \uC811\uADFC\uAD8C\uD55C","\uCE74\uCE74\uC624\uD1A1 \uBA54\uC2DC\uC9C0 \uC804\uC1A1","","\uC120\uD0DD\uB3D9\uC758","","","gray"),t("Kakao","illeesam_localhost (1491909)","Lv1 \uC571","REST API \uD0A4","2e8671b1cc341f7d4d92724a2d4eee2c","\uBBF8\uC124\uC815","","","green","https://developers.kakao.com/console/app/1491909"),t("Kakao","illeesam_localhost (1491909)","Lv1 \uC571","JavaScript \uD0A4","2e8671b1cc341f7d4d92724a2d4eee2c","\uBBF8\uC124\uC815","","","blue","https://developers.kakao.com/console/app/1491909"),t("Kakao","illeesam_localhost (1491909)","Lv1 \uC571","\uB124\uC774\uD2F0\uBE0C \uC571 \uD0A4","4f43ddc38e22c79280d18595a31ff27b","\uBBF8\uC0AC\uC6A9","","","purple","https://developers.kakao.com/console/app/1491909"),t("Kakao","illeesam_localhost (1491909)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uB85C\uADF8\uC778)","7gxUHEectTM7qYSDmhnXUJc3ZE1ymqRO","\uBBF8\uC124\uC815","\uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1491909/product/login"),t("Kakao","illeesam_localhost (1491909)","Lv2 \uB85C\uADF8\uC778","\uC2DC\uD06C\uB9BF(\uBE44\uC988)","Q6d7uCUnJBXCXQ2qINFWt2wSZ0sEzpB2","\uBBF8\uC124\uC815","\uD65C\uC131\uD654:ON","","yellow","https://developers.kakao.com/console/app/1491909/product/login"),t("Kakao","illeesam_localhost (1491909)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uB2C9\uB124\uC784","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_localhost (1491909)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uD504\uB85C\uD544\uC0AC\uC9C4","","\uD544\uC218\uB3D9\uC758","","","gray"),t("Kakao","illeesam_localhost (1491909)","Lv3 \uB3D9\uC758\uD56D\uBAA9","\uCE5C\uAD6C\uBAA9\uB85D","","\uC774\uC6A9\uC911\uB3D9\uC758","","","gray"),t("Kakao","illeesam_localhost (1491909)","Lv3 \uC811\uADFC\uAD8C\uD55C","\uCE74\uCE74\uC624\uD1A1 \uBA54\uC2DC\uC9C0 \uC804\uC1A1","","\uC120\uD0DD\uB3D9\uC758","","","gray"),t("Naver","illeesam_netlify","Lv1 \uC571","Client ID","r6RWBr2qMOCZbGPFALrA","\uBBF8\uC124\uC815","","","green","https://developers.naver.com/apps"),t("Naver","illeesam_netlify","Lv1 \uC571","Client Secret","c_V0sjmlR5","\uBBF8\uC124\uC815","Callback: /oauth/callback/naver","","yellow","https://developers.naver.com/apps"),t("Naver","illeesam_netlify","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uD68C\uC6D0\uC774\uB984","","\uD544\uC218","","","gray"),t("Naver","illeesam_netlify","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uC774\uBA54\uC77C","","\uD544\uC218","","","gray"),t("Naver","illeesam_synology","Lv1 \uC571","Client ID","jWtLT9SUfE2JWEji2XGq","\uC801\uC6A9\uB428","","app.auth.social.naver-client-id","green","https://developers.naver.com/apps"),t("Naver","illeesam_synology","Lv1 \uC571","Client Secret","QOX2GZO1uk","\uC801\uC6A9\uB428","Callback: /oauth/callback/naver","app.auth.social.naver-client-secret","yellow","https://developers.naver.com/apps"),t("Naver","illeesam_synology","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uD68C\uC6D0\uC774\uB984","","\uD544\uC218","","","gray"),t("Naver","illeesam_synology","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uC774\uBA54\uC77C","","\uD544\uC218","","","gray"),t("Naver","illeesam_localhost","Lv1 \uC571","Client ID","01sBNJ_R7mdQDl5_d3AM","\uBBF8\uC124\uC815","","","green","https://developers.naver.com/apps"),t("Naver","illeesam_localhost","Lv1 \uC571","Client Secret","c5cSSSZCaF","\uBBF8\uC124\uC815","Callback: /oauth/callback/naver","","yellow","https://developers.naver.com/apps"),t("Naver","illeesam_localhost","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uD68C\uC6D0\uC774\uB984","","\uD544\uC218","","","gray"),t("Naver","illeesam_localhost","Lv2 \uB3D9\uC758\uD56D\uBAA9","\uC774\uBA54\uC77C","","\uD544\uC218","","","gray"),t("Google","\uACF5\uD1B5 \uACC4\uC815","Lv1 \uACC4\uC815","Client ID","207844440856-5ib9mk6frvt7rfpt8823e48c3c0lavth.apps.googleusercontent.com","\uC801\uC6A9\uB428","OAuth 2.0 \uC0AC\uC6A9\uC790 \uC778\uC99D \uC815\uBCF4","app.auth.social.google-client-id","blue","https://console.cloud.google.com/apis/credentials"),t("Google","Play Console","Lv1","Console URL","developer.android.com/distribute/console","\uCC38\uACE0","","","blue","https://play.google.com/console"),t("\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20","\uBB38\uC11C\uC6A9 \uD14C\uC2A4\uD2B8\uD0A4","Lv1 FE","\uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4 (sy_prop)","test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm","\uC801\uC6A9\uB428","\uACB0\uC81C\uC704\uC82F \uC5F0\uB3D9","app.pay.toss.widget-client-key","green","https://developers.tosspayments.com/"),t("\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20","\uBB38\uC11C\uC6A9 \uD14C\uC2A4\uD2B8\uD0A4","Lv1 FE","\uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4 (\uD558\uB4DC\uCF54\uB529)","test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm","\uC801\uC6A9\uB428","envFoConsts.toss.TEST_CLIENT_KEY (\uD3F4\uBC31)","__envFoConsts__","green","https://developers.tosspayments.com/"),t("\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20","\uBB38\uC11C\uC6A9 \uD14C\uC2A4\uD2B8\uD0A4","Lv1 BE","\uC2DC\uD06C\uB9BF \uD0A4 (sy_prop)","test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6","\uC801\uC6A9\uB428","\uACB0\uC81C \uC5F0\uB3D9\uD558\uAE30 \uAC00\uC774\uB4DC","app.pay.toss.secret-key","yellow","https://developers.tosspayments.com/"),t("\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20","\uBB38\uC11C\uC6A9 \uD14C\uC2A4\uD2B8\uD0A4","Lv1 BE","\uC2DC\uD06C\uB9BF \uD0A4 (\uD558\uB4DC\uCF54\uB529)","test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6","\uC801\uC6A9\uB428","fo/envBoConsts.toss.TEST_SECRET_KEY (\uD3F4\uBC31)","__envFoConsts__","yellow","https://developers.tosspayments.com/"),t("SMTP/Gmail","illeesam4app","Lv1","\uACC4\uC815","illeesam4@gmail.com","\uC0AC\uC6A9\uC911","","spring.mail.username","blue","https://myaccount.google.com/apppasswords"),t("SMTP/Gmail","illeesam4app","Lv1","\uBE44\uBC00\uBC88\uD638","sxxx5xx4x!","\uC0AC\uC6A9\uC911","\uAD6C\uAE00 \uACC4\uC815 \uBE44\uBC00\uBC88\uD638","","red"),t("SMTP/Gmail","illeesam4app","Lv1","\uC571 \uBE44\uBC00\uBC88\uD638","wqji ylpf pcwt vhnh","\uC0AC\uC6A9\uC911","2\uB2E8\uACC4 \uC778\uC99D \uD65C\uC131\uD654 \uD544\uC218","spring.mail.password","yellow","https://myaccount.google.com/apppasswords")],w=(()=>{const e={};return C.forEach((a,l)=>{const s=a._svc,o=a._app||"(\uACF5\uD1B5)",i=a._level||"-";e[s]||(e[s]={label:s,color:a._color,apps:{}});const r=e[s];r.apps[o]||(r.apps[o]={label:o,levels:{}});const p=r.apps[o];p.levels[i]||(p.levels[i]={label:i,rows:[]}),p.levels[i].rows.push({...a,_idx:l})}),Object.values(e).map(a=>({...a,apps:Object.values(a.apps).map(l=>({...l,levels:Object.values(l.levels)}))}))})(),h=y({}),f=y({}),G=e=>{h[e]=h[e]===!1},j=e=>{f[e]=f[e]===!1},H=e=>h[e]!==!1,W=e=>f[e]!==!1,q=()=>{w.forEach(e=>{h[e.label]=!0,e.apps.forEach(a=>{f[e.label+"|"+a.label]=!0})})},V=()=>{w.forEach(e=>{h[e.label]=!1,e.apps.forEach(a=>{f[e.label+"|"+a.label]=!1})})},Y=[{key:"channelCode",label:"\uCF54\uB4DC",width:"110px",mono:!0},{key:"category",label:"\uBD84\uB958",width:"80px"},{key:"channel",label:"\uCC44\uB110 / \uC11C\uBE44\uC2A4",width:"130px"},{key:"beStat",label:"BE \uC124\uC815",width:"240px",align:"center"},{key:"feStat",label:"FE \uC124\uC815",width:"200px",align:"center"},{key:"_test",label:"\uD14C\uC2A4\uD2B8",width:"90px",align:"center"},{key:"testResultCd",label:"\uC5F0\uB3D9\uACB0\uACFC",width:"150px",align:"center"},{key:"testMsg",label:"\uD14C\uC2A4\uD2B8 \uACB0\uACFC",width:"180px"}],v=y([]),E=e=>{var o;if(!e)return null;const a=(o=window.sfGetBoAppStore)==null?void 0:o.call(window);if(!a)return null;const l="sv"+e.charAt(0).toUpperCase()+e.slice(1),s=a[l];return s&&s!==""&&s!=="-"?s:null},m=y({}),M=e=>e?"\uC124\uC815\uB428":"\uBBF8\uC124\uC815",X=[{channelCode:"SOCIAL_GOOGLE",category:"\uC18C\uC15C\uB85C\uADF8\uC778",channel:"Google \uB85C\uADF8\uC778",feKey:"googleClientId",beKey:"app.auth.social.google-client-id",remark:"OAuth2 \uD074\uB77C\uC774\uC5B8\uD2B8 ID",testFn:"google",desc:"Google OAuth 2.0 \uC18C\uC15C \uB85C\uADF8\uC778\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Google Cloud Console\uC5D0\uC11C OAuth \uD074\uB77C\uC774\uC5B8\uD2B8 ID\uB97C \uBC1C\uAE09\uBC1B\uC544 \uB4F1\uB85D\uD558\uC138\uC694.",guideUrl:"https://console.cloud.google.com/apis/credentials",guideLabel:"Google Cloud Console",feDesc:"FE\uC5D0\uC11C Google Sign-In \uBC84\uD2BC \uCD08\uAE30\uD654\uC5D0 \uC0AC\uC6A9 (window.google.accounts.id.initialize) | {illeesam@gmail.com, \uC571\uC774\uB984:illeesam_app_260628, \uBE44\uBC88:ndem vvnt xwpu hswa } ",feFile:"sy_prop:app.auth.social.google-client-id",beDesc:"BE\uC5D0\uC11C Google \uD1A0\uD070 \uAC80\uC99D \uBC0F \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uC870\uD68C \uC2DC \uC0AC\uC6A9",beFile:"sy_prop:app.auth.social.google-client-id",dbTable:"mb_member_sns (sns_type=GOOGLE)"},{channelCode:"SOCIAL_KAKAO",category:"\uC18C\uC15C\uB85C\uADF8\uC778",channel:"Kakao \uB85C\uADF8\uC778",feKey:"kakaoJsKey",beKey:"app.auth.social.kakao-js-key",remark:"JavaScript \uD0A4",testFn:"kakao",desc:"Kakao \uC18C\uC15C \uB85C\uADF8\uC778\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Kakao Developers\uC5D0\uC11C \uC571\uC744 \uC0DD\uC131\uD558\uACE0 JavaScript \uD0A4\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://developers.kakao.com/console/app",guideLabel:"Kakao Developers",feDesc:"FE\uC5D0\uC11C Kakao.init() \uD638\uCD9C \uC2DC \uC0AC\uC6A9\uD558\uB294 JavaScript \uC571 \uD0A4 (FE\xB7BE \uB3D9\uC77C \uD0A4)",feFile:"sy_prop:app.auth.social.kakao-js-key",beDesc:"BE\uC5D0\uC11C Kakao \uC0AC\uC6A9\uC790\uC815\uBCF4 API \uD638\uCD9C \uC2DC \uC0AC\uC6A9 (JavaScript \uD0A4)",beFile:"sy_prop:app.auth.social.kakao-js-key",dbTable:"mb_member_sns (sns_type=KAKAO)"},{channelCode:"SOCIAL_NAVER",category:"\uC18C\uC15C\uB85C\uADF8\uC778",channel:"Naver \uB85C\uADF8\uC778",feKey:"naverClientId",beKey:"app.auth.social.naver-client-id",remark:"\uD074\uB77C\uC774\uC5B8\uD2B8 ID",testFn:"naver",desc:"Naver \uC18C\uC15C \uB85C\uADF8\uC778\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Naver Developers\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB4F1\uB85D\uD558\uACE0 \uD074\uB77C\uC774\uC5B8\uD2B8 ID\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://developers.naver.com/apps",guideLabel:"Naver Developers",feDesc:"FE\uC5D0\uC11C Naver \uB85C\uADF8\uC778 \uBC84\uD2BC \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9 (naver.LoginWithNaverId)",feFile:"sy_prop:app.auth.social.naver-client-id",beDesc:"BE\uC5D0\uC11C Naver \uC561\uC138\uC2A4 \uD1A0\uD070 \uAC80\uC99D \uBC0F \uC0AC\uC6A9\uC790 \uD504\uB85C\uD544 \uC870\uD68C \uC2DC \uC0AC\uC6A9",beFile:"sy_prop:app.auth.social.naver-client-id",dbTable:"mb_member_sns (sns_type=NAVER)"},{channelCode:"PAY_TOSS",category:"\uACB0\uC81C",channel:"\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20",feKey:"tossClientKey",beKey:"app.pay.toss.widget-client-key",remark:"FE:\uD074\uB77C\uC774\uC5B8\uD2B8\uD0A4 / BE:\uC2DC\uD06C\uB9BF\uD0A4(app.pay.toss.secret-key)",testFn:"toss",desc:"\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uACB0\uC81C \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uAC1C\uBC1C\uC790 \uC13C\uD130\uC5D0\uC11C \uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4(FE)\uC640 \uC2DC\uD06C\uB9BF \uD0A4(BE)\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://developers.tosspayments.com/",guideLabel:"\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uAC1C\uBC1C\uC790\uC13C\uD130",feDesc:"FE\uC5D0\uC11C \uACB0\uC81C\uCC3D \uCD08\uAE30\uD654 \uC2DC \uC0AC\uC6A9\uD558\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4 (test_gck_docs_* \uB610\uB294 live_ck_* \uC811\uB450\uC5B4)",feFile:"sy_prop:app.pay.toss.widget-client-key",beDesc:"BE\uC5D0\uC11C \uACB0\uC81C \uC2B9\uC778/\uCDE8\uC18C API \uD638\uCD9C \uC2DC HTTP Basic Auth \uBE44\uBC00\uBC88\uD638\uB85C \uC0AC\uC6A9\uD558\uB294 \uC2DC\uD06C\uB9BF \uD0A4",beFile:"sy_prop:app.pay.toss.secret-key",dbTable:"od_pay, od_pay_method, od_refund"},{channelCode:"MAP_KAKAO",category:"\uC9C0\uB3C4",channel:"Kakao \uC9C0\uB3C4",feKey:"kakaoMapJsKey",beKey:"app.map.kakao-js-key",remark:"JavaScript \uD0A4 (\uCE74\uCE74\uC624\uB9F5)",testFn:"kakaoMap",desc:"Kakao Maps API \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Kakao Developers\uC5D0\uC11C \uC571 > \uCE74\uCE74\uC624\uB9F5 \uC0AC\uC6A9 \uC124\uC815\uC744 ON\uC73C\uB85C \uBCC0\uACBD\uD558\uACE0 JavaScript \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",guideUrl:"https://developers.kakao.com/console/app",guideLabel:"Kakao Developers",feDesc:"FE\uC5D0\uC11C Kakao.maps \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB4DC \uC2DC appkey \uD30C\uB77C\uBBF8\uD130\uB85C \uC0AC\uC6A9 (\uC18C\uC15C \uB85C\uADF8\uC778\uACFC \uB3D9\uC77C JavaScript \uD0A4)",feFile:"sy_prop:app.map.kakao-js-key",beDesc:"\uD604\uC7AC BE \uC11C\uBC84 \uC0AC\uC774\uB4DC Kakao \uC9C0\uB3C4 API \uD638\uCD9C \uC5C6\uC74C (FE \uC804\uC6A9)",beFile:"sy_prop:app.map.kakao-js-key",dbTable:"sy_site (site_address \uC88C\uD45C\uBCC0\uD658 \uC2DC \uC0AC\uC6A9)"},{channelCode:"MAP_NAVER",category:"\uC9C0\uB3C4",channel:"Naver \uC9C0\uB3C4",feKey:"naverMapClientId",beKey:"app.map.naver-map-client-id",remark:"NCP \uD074\uB77C\uC774\uC5B8\uD2B8 ID",testFn:"naverMap",desc:"Naver Cloud Platform Maps API \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. NCP Console\uC5D0\uC11C Maps \uC11C\uBE44\uC2A4\uB97C \uD65C\uC131\uD654\uD558\uACE0 \uD074\uB77C\uC774\uC5B8\uD2B8 ID\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://console.ncloud.com/naver-service/application",guideLabel:"Naver Cloud Platform Console",feDesc:"FE \uC9C0\uB3C4 \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB4DC \uC2DC ncpClientId \uD30C\uB77C\uBBF8\uD130\uB85C \uC0AC\uC6A9",feFile:"sy_prop:app.map.naver-map-client-id",beDesc:"BE\uC5D0\uC11C \uC8FC\uC18C \u2192 \uC88C\uD45C \uBCC0\uD658(Geocoding) \uB4F1 \uC11C\uBC84 \uC0AC\uC774\uB4DC Maps API \uD638\uCD9C \uC2DC \uC0AC\uC6A9",beFile:"sy_prop:app.map.naver-map-client-id",dbTable:"sy_site (site_address \uC88C\uD45C\uBCC0\uD658 \uC2DC \uC0AC\uC6A9)"},{channelCode:"MAP_GOOGLE",category:"\uC9C0\uB3C4",channel:"Google \uC9C0\uB3C4",feKey:"googleMapApiKey",beKey:"app.map.google-api-key",remark:"Maps JavaScript API \uD0A4",testFn:"googleMap",desc:"Google Maps Platform \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Google Cloud Console\uC5D0\uC11C Maps JavaScript API\uC640 Geocoding API\uB97C \uD65C\uC131\uD654\uD558\uACE0 API \uD0A4\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://console.cloud.google.com/google/maps-apis",guideLabel:"Google Maps Platform Console",feDesc:"FE \uC9C0\uB3C4 \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB4DC \uC2DC key \uD30C\uB77C\uBBF8\uD130\uB85C \uC0AC\uC6A9 (Maps JavaScript API)",feFile:"sy_prop:app.map.google-api-key",beDesc:"BE\uC5D0\uC11C \uC11C\uBC84 \uC0AC\uC774\uB4DC Geocoding / Places API \uD638\uCD9C \uC2DC \uC0AC\uC6A9",beFile:"sy_prop:app.map.google-api-key",dbTable:"sy_site (site_address \uC88C\uD45C\uBCC0\uD658 \uC2DC \uC0AC\uC6A9)"},{channelCode:"MAIL_SMTP",category:"\uBA54\uC77C",channel:"SMTP",feKey:null,beKey:"spring.mail.host",remark:"SMTP \uD638\uC2A4\uD2B8",testFn:"smtp",desc:"\uC774\uBA54\uC77C \uBC1C\uC1A1\uC5D0 \uC0AC\uC6A9\uD558\uB294 SMTP \uC11C\uBC84 \uC124\uC815\uC785\uB2C8\uB2E4. Gmail \uC0AC\uC6A9 \uC2DC \uC571 \uBE44\uBC00\uBC88\uD638\uB97C \uBCC4\uB3C4 \uBC1C\uAE09\uD574\uC57C \uD569\uB2C8\uB2E4.",guideUrl:"https://myaccount.google.com/apppasswords",guideLabel:"Gmail \uC571 \uBE44\uBC00\uBC88\uD638 \uBC1C\uAE09",feDesc:null,feFile:null,beDesc:"application.yml\uC758 spring.mail.host / port / username / password \uAC12\uC73C\uB85C \uC124\uC815",beFile:"yml:spring.mail.host / port",dbTable:"cmh_push_log (channel=EMAIL)"},{channelCode:"MSG_SMS",category:"SMS",channel:"SMS \uBC1C\uC1A1",feKey:null,beKey:"app.sms.api-key",remark:"API \uD0A4",testFn:"sms",desc:"SMS \uBB38\uC790 \uBC1C\uC1A1 \uC11C\uBE44\uC2A4 API \uD0A4\uC785\uB2C8\uB2E4. \uD604\uC7AC \uC5F0\uB3D9\uB41C SMS \uACF5\uAE09\uC0AC\uC758 \uCF58\uC194\uC5D0\uC11C API \uD0A4\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:null,guideLabel:null,feDesc:null,feFile:null,beDesc:"BE SMS \uBC1C\uC1A1 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC778\uC99D \uD5E4\uB354 \uB610\uB294 \uD30C\uB77C\uBBF8\uD130\uB85C \uC0AC\uC6A9",beFile:"sy_prop:app.sms.api-key",dbTable:"cmh_push_log (channel=SMS)"},{channelCode:"PUSH_FCM",category:"\uD478\uC2DC",channel:"FCM",feKey:"fcmProjectId",beKey:"app.push.fcm.project-id",remark:"\uD504\uB85C\uC81D\uD2B8 ID",testFn:"fcm",desc:"Firebase Cloud Messaging(FCM) \uD478\uC2DC \uC54C\uB9BC \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Firebase Console\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uACE0 \uC11C\uBE44\uC2A4 \uACC4\uC815 \uD0A4\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC138\uC694.",guideUrl:"https://console.firebase.google.com/",guideLabel:"Firebase Console",feDesc:"FE Web Push \uCD08\uAE30\uD654 \uC2DC Firebase \uD504\uB85C\uC81D\uD2B8 ID\uB85C \uC0AC\uC6A9",feFile:"sy_prop:app.push.fcm.project-id",beDesc:"BE\uC5D0\uC11C FCM v1 API \uD638\uCD9C \uC2DC \uD504\uB85C\uC81D\uD2B8 ID (\uC11C\uBE44\uC2A4 \uACC4\uC815 JSON \uD30C\uC77C\uB3C4 \uBCC4\uB3C4 \uD544\uC694)",beFile:"sy_prop:app.push.fcm.project-id",dbTable:"mb_device_token, cmh_push_log (channel=FCM)"},{channelCode:"PUSH_APNS",category:"\uD478\uC2DC",channel:"APNs",feKey:null,beKey:"app.push.apns.key-id",remark:"\uD0A4 ID",testFn:"apns",desc:"Apple Push Notification service(APNs) iOS \uD478\uC2DC \uC54C\uB9BC \uC5F0\uB3D9\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Apple Developer \uACC4\uC815\uC5D0\uC11C APNs \uD0A4\uB97C \uC0DD\uC131\uD558\uC138\uC694.",guideUrl:"https://developer.apple.com/account/resources/authkeys/list",guideLabel:"Apple Developer \uACC4\uC815",feDesc:null,feFile:null,beDesc:"BE\uC5D0\uC11C APNs JWT \uD1A0\uD070 \uC0DD\uC131 \uC2DC \uC0AC\uC6A9\uD558\uB294 \uD0A4 ID (.p8 \uC778\uC99D\uC11C \uD30C\uC77C\uB3C4 \uBCC4\uB3C4 \uD544\uC694)",beFile:"sy_prop:app.push.apns.key-id",dbTable:"mb_device_token, cmh_push_log (channel=APNS)"},{channelCode:"KAKAO_ALIM",category:"\uCE74\uCE74\uC624",channel:"\uC54C\uB9BC\uD1A1",feKey:null,beKey:"app.kakao.alimtalk.sender-key",remark:"\uBC1C\uC2E0 \uD504\uB85C\uD544 \uD0A4",testFn:"kakaoAlim",desc:"\uCE74\uCE74\uC624 \uC54C\uB9BC\uD1A1 \uBC1C\uC1A1\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uBE44\uC988\uB2C8\uC2A4 \uCC44\uB110\uC744 \uAC1C\uC124\uD558\uACE0 \uBC1C\uC2E0 \uD504\uB85C\uD544 \uD0A4\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:"https://business.kakao.com/",guideLabel:"\uCE74\uCE74\uC624\uBE44\uC988\uB2C8\uC2A4",feDesc:null,feFile:null,beDesc:"BE\uC5D0\uC11C \uC54C\uB9BC\uD1A1 API \uD638\uCD9C \uC2DC \uC778\uC99D \uD5E4\uB354\uB85C \uC0AC\uC6A9\uD558\uB294 \uBC1C\uC2E0 \uD504\uB85C\uD544 \uD0A4",beFile:"yml:app.kakao.alimtalk.sender-key",dbTable:"cmh_push_log (channel=KAKAO)"},{channelCode:"KAKAO_SHARE",category:"\uCE74\uCE74\uC624",channel:"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720",feKey:"kakaoJsKey",beKey:"app.auth.social.kakao-js-key",remark:"JavaScript \uD0A4 (\uC18C\uC15C \uB85C\uADF8\uC778\uACFC \uB3D9\uC77C)",testFn:"kakaoShare",desc:"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uAE30\uB2A5\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC18C\uC15C \uB85C\uADF8\uC778\uACFC \uB3D9\uC77C\uD55C JavaScript \uD0A4\uB97C \uC0AC\uC6A9\uD558\uBA70, Kakao Developers \uC5D0\uC11C Web \uD50C\uB7AB\uD3FC\uC5D0 \uB3C4\uBA54\uC778\uC744 \uB4F1\uB85D\uD574\uC57C \uD569\uB2C8\uB2E4.",guideUrl:"https://developers.kakao.com/console/app",guideLabel:"Kakao Developers",feDesc:"FE\uC5D0\uC11C Kakao.Share.sendDefault() \uD638\uCD9C \uC2DC Kakao.init() \uC5D0 \uC0AC\uC6A9\uD558\uB294 JavaScript \uC571 \uD0A4",feFile:"sy_prop:app.auth.social.kakao-js-key",beDesc:"BE \uC11C\uBC84 \uC0AC\uC774\uB4DC \uCE74\uCE74\uC624 \uACF5\uC720 API \uC5C6\uC74C (FE \uC804\uC6A9, Kakao SDK 2.x)",beFile:"sy_prop:app.auth.social.kakao-js-key",dbTable:"\uC5C6\uC74C (\uD074\uB77C\uC774\uC5B8\uD2B8 \uACF5\uC720, \uC11C\uBC84 \uC800\uC7A5 \uC5C6\uC74C)"},{channelCode:"AI_CHATBOT",category:"AI/\uCC57\uBD07",channel:"AI \uCC57\uBD07",feKey:null,beKey:"app.chat.ai.api-key",remark:"API \uD0A4",testFn:"ai",desc:"AI \uCC57\uBD07 \uC11C\uBE44\uC2A4 \uC5F0\uB3D9 API \uD0A4\uC785\uB2C8\uB2E4. \uC5F0\uB3D9\uD55C AI \uC11C\uBE44\uC2A4(OpenAI / Claude \uB4F1) \uCF58\uC194\uC5D0\uC11C API \uD0A4\uB97C \uBC1C\uAE09\uBC1B\uC73C\uC138\uC694.",guideUrl:null,guideLabel:null,feDesc:null,feFile:null,beDesc:"BE AI \uCC57\uBD07 \uC11C\uBE44\uC2A4\uC5D0\uC11C API \uC778\uC99D \uD5E4\uB354\uB85C \uC0AC\uC6A9",beFile:"sy_prop:app.chat.ai.api-key",dbTable:"cm_chatt_room, cm_chatt_msg"}],n=y({show:!0,channelKey:"",channelLabel:"\uC804\uCCB4",logs:[],loading:!1,pageNo:1,pageSize:5,total:0,searchWord:"",get pageTotalPage(){return Math.max(1,Math.ceil(this.total/this.pageSize))}}),T=()=>{v.length=0,X.forEach(e=>{var o;const a=E(e.feKey),l=e.beKey&&(o=m[e.beKey])!=null?o:null,s=e.testFn||e.feKey||e.beKey||"-";v.push({channelCode:e.channelCode||s.toUpperCase(),category:e.category,channel:e.channel,keyName:s,feStat:e.feKey?M(a):"-",beStat:e.beKey?M(l):"-",feRawVal:a?String(a).slice(0,6)+"\u2022\u2022\u2022\u2022\u2022\u2022":null,beRawVal:l?String(l).slice(0,6)+"\u2022\u2022\u2022\u2022\u2022\u2022":null,testResultCd:"-",testMsg:"",lastTestDate:null,lastTestOk:null,remark:e.remark,_testFn:e.testFn,_testing:!1,_desc:e.desc,_guideUrl:e.guideUrl,_guideLabel:e.guideLabel,_feKey:e.feKey,_beKey:e.beKey,_feDesc:e.feDesc,_feFile:e.feFile?e.feFile.replace("propKey",e.feKey||""):null,_beDesc:e.beDesc,_beFile:e.beFile||null,_dbTable:e.dbTable||null})})},K=async()=>{var e;try{const l=((e=(await boApi.get("/bo/sy/ext-test-log/latest",coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC","\uCD5C\uC2E0\uC774\uB825\uC870\uD68C"))).data)==null?void 0:e.data)||[],s={};l.forEach(o=>{s[o.channelKey]=o}),v.forEach(o=>{const i=s[o.keyName];i&&(o.lastTestDate=i.regDate,o.lastTestOk=i.testResultCd==="SUCCESS")})}catch{}},Z=e=>{if(!e)return"-";const a=new Date(e),l=s=>String(s).padStart(2,"0");return a.getFullYear()+"-"+l(a.getMonth()+1)+"-"+l(a.getDate())+" "+l(a.getHours())+":"+l(a.getMinutes())+":"+l(a.getSeconds())},S=e=>{if(!e)return null;try{const a=JSON.parse(e);return typeof a!="object"||a===null?null:Object.entries(a).map(([l,s])=>({k:l,v:typeof s=="object"&&s!==null?JSON.stringify(s):String(s==null?"":s)}))}catch{return null}},Q=e=>{if(e.testAccount){const a=S(e.testAccount);return a||[{k:"\uB300\uC0C1",v:e.testAccount}]}if(e.testMsg&&e.testMsg.startsWith("[\uC694\uCCAD]"))try{const a=e.testMsg.match(/^\[요청\]\s*(\{[\s\S]*?\})\s*\[결과\]/);if(a){const l=JSON.parse(a[1]),s=[];return l.toEmail&&s.push({k:"toEmail",v:l.toEmail}),l.toPhone&&s.push({k:"toPhone",v:l.toPhone}),l.deviceToken&&s.push({k:"deviceToken",v:l.deviceToken.slice(0,20)+"\u2026"}),l.targetValue&&s.push({k:"target",v:(l.targetType||"")+":"+l.targetValue}),s.length?s:null}}catch{}return null},$=e=>{if(e.testReqBody){const a=S(e.testReqBody);return a||[{k:"\uB0B4\uC6A9",v:e.testReqBody}]}if(e.testMsg&&e.testMsg.startsWith("[\uC694\uCCAD]"))try{const a=e.testMsg.match(/^\[요청\]\s*(\{[\s\S]*?\})\s*\[결과\]/);if(a)return S(a[1])||[{k:"\uB0B4\uC6A9",v:a[1]}]}catch{}return null},ee=e=>{if(!e.testMsg)return null;if(e.testMsg.startsWith("[\uC694\uCCAD]")){const a=e.testMsg.indexOf("[\uACB0\uACFC]");return a>=0?e.testMsg.slice(a+4).trim():e.testMsg}return e.testMsg},k=async()=>{var e,a;n.loading=!0;try{const l={pageNo:n.pageNo,pageSize:n.pageSize};n.channelKey&&(l.channelKey=n.channelKey),n.searchWord&&(l.searchWord=n.searchWord);const o=((e=(await boApi.get("/bo/sy/ext-test-log/list",{params:l,...coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC","\uC774\uB825\uC870\uD68C")})).data)==null?void 0:e.data)||{};n.logs=o.pageList||(Array.isArray(o)?o:[]),n.total=(a=o.pageTotalCount)!=null?a:n.logs.length}catch{n.logs=[],n.total=0}finally{n.loading=!1}},ae=async e=>{n.show=!0,n.channelKey=e.keyName,n.channelLabel=e.channel,n.pageNo=1,n.logs=[],n.total=0,await k()},te=()=>{n.show=!1},le=async e=>{n.pageNo=e,await k()},se=async()=>{n.pageNo=1,await k()},L=async()=>{var e,a,l;try{(((a=(e=(await boApi.get("/bo/sy/app-config/all",coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC","yml\uC870\uD68C"))).data)==null?void 0:e.data)==null?void 0:a.items)||[]).forEach(p=>{p.ymlKey&&p.ymlValue&&p.ymlValue!=="(\uBBF8\uC124\uC815)"&&(m[p.ymlKey]=p.ymlValue)});const r=((l=(await boApi.get("/bo/sy/prop",{params:{pageSize:999},...coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC","\uC124\uC815\uC870\uD68C")})).data)==null?void 0:l.data)||[];Array.isArray(r)&&r.forEach(p=>{p.propKey&&p.propValue&&!m[p.propKey]&&(m[p.propKey]=p.propValue)})}catch{}},oe={google:{method:"key-check",label:"Google OAuth",checkBeKey:"app.auth.social.google-client-id",checkFeKey:"googleClientId"},kakao:{method:"key-check",label:"Kakao OAuth",checkBeKey:"app.auth.social.kakao-js-key",checkFeKey:"kakaoJsKey"},naver:{method:"key-check",label:"Naver OAuth",checkBeKey:"app.auth.social.naver-client-id",checkFeKey:"naverClientId"},toss:{method:"key-check",label:"\uD1A0\uC2A4 \uACB0\uC81C",checkBeKey:"app.pay.toss.widget-client-key",checkFeKey:"tossClientKey"},kakaoMap:{method:"key-check",label:"Kakao \uC9C0\uB3C4",checkBeKey:"app.map.kakao-js-key",checkFeKey:"kakaoMapJsKey"},naverMap:{method:"key-check",label:"Naver \uC9C0\uB3C4",checkBeKey:"app.map.naver-map-client-id",checkFeKey:"naverMapClientId"},googleMap:{method:"key-check",label:"Google \uC9C0\uB3C4",checkBeKey:"app.map.google-api-key",checkFeKey:"googleMapApiKey"},kakaoShare:{method:"key-check",label:"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720",checkBeKey:"app.auth.social.kakao-js-key",checkFeKey:"kakaoJsKey"},smtp:{method:"post",url:"/co/ext/mail-send/send",label:"SMTP",body:{toEmail:"test@example.com",toName:"\uD14C\uC2A4\uD2B8",subject:"[ShopJoy] \uC5F0\uB3D9 \uD14C\uC2A4\uD2B8",body:"\uC5F0\uB3D9 \uC124\uC815 \uB300\uC2DC\uBCF4\uB4DC \uD14C\uC2A4\uD2B8 \uBC1C\uC1A1"}},sms:{method:"post",url:"/co/ext/sms-send/send",label:"SMS",body:{toPhone:"01000000000",message:"[ShopJoy] SMS \uC5F0\uB3D9 \uD14C\uC2A4\uD2B8"}},fcm:{method:"post",url:"/co/ext/push-fcm-send/send",label:"FCM",body:{targetType:"topic",targetValue:"test_ping",title:"[ShopJoy] FCM \uD14C\uC2A4\uD2B8",body:"\uC5F0\uB3D9 \uD655\uC778"}},apns:{method:"post",url:"/co/ext/push-apns-send/send",label:"APNs",body:{deviceToken:"TEST_TOKEN",title:"[ShopJoy] APNs \uD14C\uC2A4\uD2B8",body:"\uC5F0\uB3D9 \uD655\uC778"}},kakaoAlim:{method:"post",url:"/co/ext/kakao-send/send",label:"\uCE74\uCE74\uC624 \uC54C\uB9BC\uD1A1",body:{msgType:"alimtalk",toPhone:"01000000000",templateCode:"TEST_TMPL",variables:{}}},ai:{method:"post",url:"/co/ext/ai-chat/chat",label:"AI \uCC57\uBD07",body:{provider:"openai",message:"\uC5F0\uB3D9 \uD14C\uC2A4\uD2B8: \uC548\uB155\uD558\uC138\uC694"}}},P=async e=>{var i,r,p,u,_;if(e._testing)return;const a=oe[e._testFn];if(!a){e.testResultCd="\uC2E4\uD328",e.testMsg="\uD14C\uC2A4\uD2B8 \uBBF8\uC815\uC758";return}e._testing=!0,e.testResultCd="-",e.testMsg="\uD655\uC778 \uC911...";let l=!1,s="",o=null;try{if(a.method==="key-check"){const c=!a.checkBeKey||!!m[a.checkBeKey],d=!a.checkFeKey||!!E(a.checkFeKey),g=[];a.checkBeKey&&g.push("BE("+a.checkBeKey+"): "+(c?"\uC124\uC815\uB428":"\uBBF8\uC124\uC815")),a.checkFeKey&&g.push("FE("+a.checkFeKey+"): "+(d?"\uC124\uC815\uB428":"\uBBF8\uC124\uC815")),l=(a.checkBeKey?c:!0)&&(a.checkFeKey?d:!0),s=g.join(" / ")}else{let c;a.method==="post"?(o=a.body||{},c=await boApi.post(a.url,o,coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC",a.label+" \uD14C\uC2A4\uD2B8"))):c=await boApi.get(a.url,coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC",a.label+" \uD14C\uC2A4\uD2B8")),l=((i=c.data)==null?void 0:i.success)!==!1,s=((p=(r=c.data)==null?void 0:r.data)==null?void 0:p.message)||((u=c.data)==null?void 0:u.message)||(l?"\uC815\uC0C1":"\uC624\uB958")}e.testResultCd=l?"\uC131\uACF5":"\uC2E4\uD328",e.testMsg=s}catch(c){l=!1,s=coUtil.cofErrMsg(c,"\uC5F0\uACB0 \uC2E4\uD328"),e.testResultCd="\uC2E4\uD328",e.testMsg=s}finally{e._testing=!1}try{const c=new Date().toISOString();e.lastTestDate=c,e.lastTestOk=l;let d=null;o&&(o.toEmail?d=o.toEmail:o.toPhone?d=o.toPhone:o.deviceToken?d=o.deviceToken.slice(0,40)+(o.deviceToken.length>40?"\u2026":""):o.targetValue&&(d=o.targetType+":"+o.targetValue));let g=null;if(a.method==="key-check"){const F=[];a.checkBeKey&&F.push("BE:"+a.checkBeKey),a.checkFeKey&&F.push("FE:"+a.checkFeKey),g=F.join(" / ")}else o&&Object.keys(o).length&&(g=JSON.stringify(o,null,0).slice(0,2e3));await boApi.post("/bo/sy/ext-test-log/save",{siteId:((_=window.boCommonFilter)==null?void 0:_.siteId)||"",channelKey:e.keyName,channelLabel:e.channel,testResultCd:l?"SUCCESS":"FAIL",testMsg:s.slice(0,2e3),testUrl:a.url||null,testReqBody:g,testAccount:d},coUtil.cofApiHdr("\uC5F0\uB3D9\uC124\uC815\uB300\uC2DC\uBCF4\uB4DC","\uC774\uB825\uC800\uC7A5")),n.show=!0,n.channelKey=e.keyName,n.channelLabel=e.channel,n.pageNo=1,await k()}catch{}},ne=async()=>{b.value=!0,await L(),T(),b.value=!1,K(),A("\uC5F0\uB3D9 \uC124\uC815 \uD604\uD669\uC744 \uC0C8\uB85C\uACE0\uCE68\uD588\uC2B5\uB2C8\uB2E4.","success")},pe=async()=>{for(const e of v)await P(e);A("\uC804\uCCB4 \uD14C\uC2A4\uD2B8 \uC644\uB8CC.","success")};return I(async()=>{b.value=!0,await L(),T(),b.value=!1,K(),k()}),{codes:z,loading:b,tab:N,tabMode:R,tabs:U,fnTabModeClass:B,refGridColumns:J,refRows:C,cfRefTree:w,refOpenSvc:h,refOpenApp:f,fnRefToggleSvc:G,fnRefToggleApp:j,fnRefSvcOpen:H,fnRefAppOpen:W,fnRefExpandAll:q,fnRefCollapseAll:V,baseGridColumns:Y,rows:v,histState:n,fnFmtDatetime:Z,fnFmtAccount:Q,fnFmtReq:$,fnFmtResp:ee,handleHistOpen:ae,handleHistClose:te,handleHistPage:le,handleHistSearch:se,handleTest:P,handleRefresh:ne,handleTestAll:pe,_fetchLatestResults:K}},template:`
<div>
  <bo-page title="\uC5F0\uB3D9\uC124\uC815 \uB300\uC2DC\uBCF4\uB4DC" desc-summary="\uC678\uBD80 \uC11C\uBE44\uC2A4 \uC5F0\uB3D9 \uD0A4 \uC124\uC815 \uD604\uD669 \uBC0F \uD14C\uC2A4\uD2B8. \uD589 \uD074\uB9AD \uC2DC \uD558\uB2E8\uC5D0 \uC774\uB825\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.">
    <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode" :show-modes="true" @tab-select="id => tab = id" @mode-select="m => tabMode = m" />

    <div :class="'dtl-tab-grid ' + fnTabModeClass(tabMode)">
    <div v-show="tab === 'channel' || tabMode !== 'tab'">
    <bo-container>
      <bo-grid
        :columns="baseGridColumns"
        :rows="rows"
        :loading="loading"
        list-title="\uC5F0\uB3D9 \uCC44\uB110 \uBAA9\uB85D"
        empty-text="\uC5F0\uB3D9 \uC124\uC815 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
        table-max-height="720px"
      >
        <template #toolbar-actions>
          <button class="btn btn_reset btn-sm" @click="handleRefresh">\uC0C8\uB85C\uACE0\uCE68</button>
          <button class="btn btn_search btn-sm" @click="handleTestAll">\uC804\uCCB4 \uD14C\uC2A4\uD2B8</button>
        </template>

        <!-- BE \uC124\uC815 \uC0C1\uD0DC -->
        <template #cell-beStat="{ row }">
          <td style="text-align:center;vertical-align:middle;padding:5px 8px;">
            <span v-if="row.beStat === '\uC124\uC815\uB428'" class="badge badge-green">\uC124\uC815\uB428</span>
            <span v-else-if="row.beStat === '\uBBF8\uC124\uC815'" class="badge badge-red">\uBBF8\uC124\uC815</span>
            <span v-else class="badge badge-gray">-</span>
            <div v-if="row._beFile &amp;&amp; row.beStat !== '-'"
              style="margin-top:4px;display:flex;align-items:center;gap:3px;overflow:hidden;max-width:100%;"
              :title="row._beFile.replace(/^(yml:|sy_prop:)/, '')">
              <span style="flex-shrink:0;" :style="row._beFile.startsWith('yml:') ? 'font-weight:600;color:#0284c7;background:#bae6fd;border-radius:3px;padding:1px 4px;font-family:sans-serif;font-size:10px;' : 'font-weight:600;color:#1e40af;background:#dbeafe;border-radius:3px;padding:1px 4px;font-family:sans-serif;font-size:10px;'">
                {{ row._beFile.startsWith('yml:') ? 'app~.yml' : 'sy_prop' }}
              </span>
              <span style="font-family:monospace;font-size:11px;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;">
                {{ row._beFile.replace(/^(yml:|sy_prop:)/, '') }}
              </span>
            </div>
          </td>
        </template>

        <!-- FE \uC124\uC815 \uC0C1\uD0DC -->
        <template #cell-feStat="{ row }">
          <td style="text-align:center;vertical-align:middle;padding:5px 8px;">
            <span v-if="row.feStat === '\uC124\uC815\uB428'" class="badge badge-green">\uC124\uC815\uB428</span>
            <span v-else-if="row.feStat === '\uBBF8\uC124\uC815'" class="badge badge-red">\uBBF8\uC124\uC815</span>
            <span v-else class="badge badge-gray">-</span>
            <div v-if="row._feFile &amp;&amp; row.feStat !== '-'"
              style="margin-top:4px;display:flex;align-items:center;gap:3px;overflow:hidden;max-width:100%;"
              :title="row._feFile.replace(/^(yml:|sy_prop:)/, '')">
              <span style="flex-shrink:0;" :style="row._feFile.startsWith('yml:') ? 'font-weight:600;color:#0284c7;background:#bae6fd;border-radius:3px;padding:1px 4px;font-family:sans-serif;font-size:10px;' : 'font-weight:600;color:#6d28d9;background:#ede9fe;border-radius:3px;padding:1px 4px;font-family:sans-serif;font-size:10px;'">
                {{ row._feFile.startsWith('yml:') ? 'app~.yml' : 'sy_prop' }}
              </span>
              <span style="font-family:monospace;font-size:11px;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;">
                {{ row._feFile.replace(/^(yml:|sy_prop:)/, '') }}
              </span>
            </div>
          </td>
        </template>

        <!-- \uD14C\uC2A4\uD2B8 + \uC774\uB825\uC870\uD68C \uBC84\uD2BC -->
        <template #cell-_test="{ row }">
          <td style="text-align:center;padding:4px 6px;" @click.stop>
            <button class="btn btn-xs" style="display:block;width:72px;margin:0 auto 4px;"
              :disabled="row._testing"
              :style="row._testing ? 'opacity:.5' : ''"
              @click="handleTest(row)">
              {{ row._testing ? '\uD655\uC778\uC911\u2026' : '\uD14C\uC2A4\uD2B8' }}
            </button>
            <button class="btn btn-xs" style="display:block;width:72px;margin:0 auto;"
              :style="histState.show &amp;&amp; histState.channelKey === row.keyName ? 'background:#6366f1;color:#fff;border-color:#6366f1;' : ''"
              @click="handleHistOpen(row)">
              \uC774\uB825\uC870\uD68C
            </button>
          </td>
        </template>

        <!-- \uC5F0\uB3D9\uACB0\uACFC: \uB9C8\uC9C0\uB9C9 \uD14C\uC2A4\uD2B8 \uC77C\uC2DC + \uACB0\uACFC -->
        <template #cell-testResultCd="{ row }">
          <td style="text-align:center;padding:4px 6px;">
            <div v-if="row.lastTestDate" style="font-size:11px;line-height:1.5;">
              <div style="color:#6b7280;font-size:10px;">{{ fnFmtDatetime(row.lastTestDate) }}</div>
              <span v-if="row.lastTestOk" style="color:#059669;font-weight:600;">\u2705 \uC131\uACF5</span>
              <span v-else style="color:#dc2626;font-weight:600;">\u274C \uC2E4\uD328</span>
            </div>
            <span v-else style="color:#ccc;font-size:13px;">-</span>
          </td>
        </template>
      </bo-grid>
    </bo-container>

    <!-- \uC774\uB825 \uBAA9\uB85D \uD328\uB110 -->
    <bo-container v-if="histState.show"
      :title="'\uD14C\uC2A4\uD2B8 \uC774\uB825 \u2014 ' + histState.channelLabel"
      :count-text="histState.total + '\uAC74'">
      <template #toolbar-actions>
        <input v-model="histState.searchWord" class="form-control" style="width:180px;" placeholder="\uAC80\uC0C9\uC5B4 \uC785\uB825" @keyup.enter="handleHistSearch" />
        <button class="btn btn_search btn-sm" @click="handleHistSearch">\uAC80\uC0C9</button>
        <button class="btn btn_close btn-sm" @click="handleHistClose">\uB2EB\uAE30</button>
      </template>
      <div v-if="histState.loading" style="padding:20px;text-align:center;color:#aaa;font-size:13px;">\uC870\uD68C \uC911...</div>
      <div v-else-if="!histState.logs.length" style="padding:20px;text-align:center;color:#aaa;font-size:13px;">\uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      <template v-else>
        <div style="overflow-x:auto;">
          <table class="bo-table" style="width:100%;min-width:960px;table-layout:fixed;">
            <colgroup>
              <col style="width:36px;">
              <col style="width:138px;">
              <col style="width:56px;">
              <col style="width:170px;">
              <col style="width:150px;">
              <col style="width:30%;">
              <col>
            </colgroup>
            <thead>
              <tr>
                <th style="text-align:center;">\uBC88\uD638</th>
                <th style="text-align:center;">\uC77C\uC2DC</th>
                <th style="text-align:center;">\uACB0\uACFC</th>
                <th>URL</th>
                <th>\uACC4\uC815\uC815\uBCF4</th>
                <th>\uC694\uCCAD\uB0B4\uC6A9</th>
                <th>\uC751\uB2F5\uB0B4\uC6A9</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lg, li) in histState.logs" :key="lg.logId">
                <td style="text-align:center;color:#aaa;vertical-align:top;padding-top:8px;">{{ histState.total - (histState.pageNo - 1) * histState.pageSize - li }}</td>
                <td style="text-align:center;white-space:nowrap;color:#6b7280;font-size:11px;vertical-align:top;padding-top:8px;">{{ fnFmtDatetime(lg.regDate) }}</td>
                <td style="text-align:center;vertical-align:top;padding-top:8px;">
                  <span v-if="lg.testResultCd === 'SUCCESS'" class="badge badge-green">\uC131\uACF5</span>
                  <span v-else class="badge badge-red">\uC2E4\uD328</span>
                </td>
                <td style="font-family:monospace;font-size:10px;color:#0284c7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:top;padding-top:8px;" :title="lg.testUrl">{{ lg.testUrl || '-' }}</td>
                <td style="vertical-align:top;padding:6px 8px;">
                  <template v-if="fnFmtAccount(lg)">
                    <div v-for="(item, ii) in fnFmtAccount(lg)" :key="ii"
                      style="font-size:11px;line-height:1.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                      <span style="color:#9ca3af;font-size:10px;">{{ item.k }}:</span>
                      <span style="font-family:monospace;color:#1e40af;margin-left:3px;">{{ item.v }}</span>
                    </div>
                  </template>
                  <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                </td>
                <td style="vertical-align:top;padding:6px 8px;">
                  <template v-if="fnFmtReq(lg)">
                    <div v-for="(item, ri) in fnFmtReq(lg)" :key="ri"
                      style="font-size:11px;line-height:1.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                      <span style="color:#9ca3af;font-size:10px;">{{ item.k }}:</span>
                      <span style="font-family:monospace;color:#374151;margin-left:3px;">{{ item.v }}</span>
                    </div>
                  </template>
                  <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                </td>
                <td style="vertical-align:top;padding:6px 8px;">
                  <span v-if="fnFmtResp(lg)"
                    style="font-size:11px;color:#374151;white-space:pre-wrap;word-break:break-all;line-height:1.7;">{{ fnFmtResp(lg) }}</span>
                  <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <bo-pager :pager="histState" :on-set-page="handleHistPage" />
      </template>
    </bo-container>
    </div><!-- /tab channel -->

    <div v-show="tab === 'env' || tabMode !== 'tab'">
      <bo-zd-sy-prop-grid />
      <bo-zd-yml-grid />
    </div><!-- /tab env -->

    <div v-show="tab === 'ref' || tabMode !== 'tab'">
    <bo-container title="\uC678\uBD80 \uC5F0\uB3D9 \uCC38\uACE0\uC790\uB8CC" :count-text="refRows.length + '\uAC74'">
      <template #toolbar>
        <button class="btn btn_expand_all"   @click="fnRefExpandAll">\uC804\uCCB4\uD3BC\uCE58\uAE30</button>
        <button class="btn btn_collapse_all" @click="fnRefCollapseAll">\uC804\uCCB4\uC811\uAE30</button>
      </template>
      <div style="overflow-x:auto;">
        <table class="bo-table" style="width:100%;min-width:1000px;">
          <colgroup>
            <col style="width:260px;">
            <col style="width:265px;">
            <col style="width:200px;">
            <col style="width:90px;">
            <col style="width:76px;">
            <col style="width:200px;">
          </colgroup>
          <thead>
            <tr>
              <th>\uD0A4 \uAD6C\uBD84</th>
              <th>\uAC12</th>
              <th>\uC801\uC6A9 prop</th>
              <th style="text-align:center;">\uC801\uC6A9\uC704\uCE58</th>
              <th style="text-align:center;">\uC801\uC6A9\uC5EC\uBD80</th>
              <th>\uBE44\uACE0</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="svc in cfRefTree" :key="svc.label">
              <!-- Lv0 \u2500\u2500 \uC11C\uBE44\uC2A4 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
              <tr style="background:#eff6ff;cursor:pointer;" @click="fnRefToggleSvc(svc.label)">
                <td colspan="6" style="padding:5px 10px;font-weight:700;font-size:13px;border-left:4px solid #3b82f6;">
                  <span style="margin-right:6px;font-size:9px;color:#3b82f6;line-height:1;">{{ fnRefSvcOpen(svc.label) ? '\u25BC' : '\u25B6' }}</span>
                  <span :class="{
                    'badge badge-red':    svc.color === 'red',
                    'badge badge-green':  svc.color === 'green',
                    'badge badge-blue':   svc.color === 'blue',
                    'badge badge-purple': svc.color === 'purple',
                    'badge badge-orange': svc.color === 'yellow',
                    'badge badge-gray':   svc.color === 'gray'
                  }" style="margin-right:8px;font-size:12px;">{{ svc.label }}</span>
                  <span style="font-size:11px;font-weight:400;color:#6b7280;">{{ svc.apps.length }}\uAC1C \uC571</span>
                </td>
              </tr>
              <template v-if="fnRefSvcOpen(svc.label)" v-for="app in svc.apps" :key="svc.label + '|' + app.label">
                <!-- Lv1 \u2500\u2500 \uC571 / \uD658\uACBD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
                <tr style="background:#f8fafc;cursor:pointer;" @click="fnRefToggleApp(svc.label + '|' + app.label)">
                  <td colspan="6" style="padding:4px 10px 4px 22px;font-size:12px;border-left:4px solid #93c5fd;">
                    <span style="margin-right:6px;font-size:9px;color:#60a5fa;line-height:1;">{{ fnRefAppOpen(svc.label + '|' + app.label) ? '\u25BC' : '\u25B6' }}</span>
                    <span style="background:#e0f2fe;color:#0369a1;border-radius:4px;padding:1px 8px;font-family:monospace;font-size:11px;font-weight:600;">{{ app.label }}</span>
                    <span style="font-size:10px;color:#9ca3af;margin-left:8px;">{{ app.levels.reduce((s, l) => s + l.rows.length, 0) }}\uAC1C \uD56D\uBAA9</span>
                  </td>
                </tr>
                <template v-if="fnRefAppOpen(svc.label + '|' + app.label)" v-for="lv in app.levels" :key="svc.label + '|' + app.label + '|' + lv.label">
                  <!-- Lv2 \u2500\u2500 \uB808\uBCA8 \uADF8\uB8F9 (\uBCF5\uC218\uC77C \uB54C\uB9CC) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
                  <tr v-if="app.levels.length > 1" style="background:#fafafa;">
                    <td colspan="6" style="padding:2px 10px 2px 40px;font-size:10px;color:#9ca3af;letter-spacing:.4px;border-left:4px solid #e2e8f0;">
                      \u25B8 {{ lv.label }}
                    </td>
                  </tr>
                  <!-- Lv3 \u2500\u2500 \uD0A4 \uB370\uC774\uD130 \uD589 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
                  <tr v-for="r in lv.rows" :key="r._idx" style="background:#fff;">
                    <td style="padding-left:56px;font-size:12px;border-left:4px solid #e2e8f0;"
                      :style="r._where ? 'font-weight:700;color:#1e40af;' : 'font-weight:400;color:#6b7280;'">
                      {{ r._kind }}
                    </td>
                    <td style="font-family:monospace;font-size:11px;color:#374151;word-break:break-all;">
                      <a v-if="r._val &amp;&amp; r._val.startsWith('http')" :href="r._val" target="_blank"
                        style="color:#2563eb;text-decoration:underline;word-break:break-all;">{{ r._val }}</a>
                      <span v-else-if="r._val">{{ r._val }}</span>
                      <span v-else style="color:#d1d5db;">-</span>
                    </td>
                    <td>
                      <span v-if="r._propKey"
                        style="font-size:10px;background:#dbeafe;color:#1e40af;border-radius:3px;padding:1px 5px;font-family:monospace;word-break:break-all;">{{ r._propKey }}</span>
                      <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                    </td>
                    <td style="text-align:center;">
                      <span v-if="r._where === 'sy_prop'"       class="badge badge-blue"   style="font-size:10px;">sy_prop</span>
                      <span v-else-if="r._where === 'sy_prop + yml'" class="badge badge-purple" style="font-size:10px;">sy_prop+yml</span>
                      <span v-else-if="r._where === 'envFoConsts'" class="badge badge-orange" style="font-size:10px;">envFoConsts</span>
                      <span v-else-if="r._where === 'envBoConsts'" class="badge badge-orange" style="font-size:10px;">envBoConsts</span>
                      <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                    </td>
                    <td style="text-align:center;">
                      <span v-if="r._applied === '\uC801\uC6A9\uB428'"      class="badge badge-green"  style="font-size:10px;">\uC801\uC6A9\uB428</span>
                      <span v-else-if="r._applied === '\uD14C\uC2A4\uD2B8 \uC801\uC6A9'" class="badge badge-blue"  style="font-size:10px;">\uD14C\uC2A4\uD2B8</span>
                      <span v-else-if="r._applied === '\uC0AC\uC6A9\uC911'"      class="badge badge-green"  style="font-size:10px;">\uC0AC\uC6A9\uC911</span>
                      <span v-else-if="r._applied === '\uBBF8\uC124\uC815'"      class="badge badge-red"    style="font-size:10px;">\uBBF8\uC124\uC815</span>
                      <span v-else-if="r._applied === '\uBBF8\uC0AC\uC6A9'"      class="badge badge-gray"   style="font-size:10px;">\uBBF8\uC0AC\uC6A9</span>
                      <span v-else-if="r._applied === '\uD544\uC218\uB3D9\uC758'"    class="badge badge-orange" style="font-size:10px;">\uD544\uC218\uB3D9\uC758</span>
                      <span v-else-if="r._applied === '\uC774\uC6A9\uC911\uB3D9\uC758'"  class="badge badge-orange" style="font-size:10px;">\uC774\uC6A9\uC911</span>
                      <span v-else-if="r._applied === '\uC120\uD0DD\uB3D9\uC758'"    class="badge badge-gray"   style="font-size:10px;">\uC120\uD0DD\uB3D9\uC758</span>
                      <span v-else-if="r._applied === '\uD544\uC218'"        class="badge badge-orange" style="font-size:10px;">\uD544\uC218</span>
                      <span v-else-if="r._applied === '\uCC38\uACE0'"        class="badge badge-gray"   style="font-size:10px;">\uCC38\uACE0</span>
                      <span v-else style="color:#d1d5db;font-size:11px;">-</span>
                    </td>
                    <td style="font-size:11px;color:#6b7280;word-break:break-all;">
                      <a v-if="r._note &amp;&amp; r._note.startsWith('http')" :href="r._note" target="_blank"
                        style="color:#2563eb;text-decoration:underline;">{{ r._note }}</a>
                      <span v-else-if="r._note">{{ r._note }}</span>
                      <span v-else style="color:#d1d5db;">-</span>
                      <a v-if="r._configUrl" :href="r._configUrl" target="_blank"
                        style="display:inline-block;margin-left:6px;padding:1px 6px;border-radius:4px;background:#eff6ff;color:#2563eb;font-size:10px;text-decoration:none;border:1px solid #bfdbfe;white-space:nowrap;">\u2699 \uC124\uC815</a>
                    </td>
                  </tr>
                </template>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </bo-container>
    </div><!-- /tab ref -->
    </div><!-- /dtl-tab-grid -->

  </bo-page>
</div>
`};
