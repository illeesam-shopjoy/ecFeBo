window.HelpBoModal={name:"HelpBoModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},topic:{type:String,default:""},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(d,{emit:a}){const{ref:o,watch:l}=Vue,n=[{id:"overview",label:"\u{1F4CB} \uAC1C\uC694"},{id:"member",label:"\u{1F464} \uD68C\uC6D0\uAD00\uB9AC"},{id:"product",label:"\u{1F4E6} \uC0C1\uD488\uAD00\uB9AC"},{id:"prodOpt",label:"\u2699 \uC635\uC158\uC124\uC815"},{id:"order",label:"\u{1F6D2} \uC8FC\uBB38\uAD00\uB9AC"},{id:"claim",label:"\u{1F504} \uD074\uB808\uC784"},{id:"promotion",label:"\u{1F3AB} \uD504\uB85C\uBAA8\uC158"},{id:"display",label:"\u{1F5BC} \uC804\uC2DC\uAD00\uB9AC"},{id:"settle",label:"\u{1F4B0} \uC815\uC0B0\uAD00\uB9AC"},{id:"system",label:"\u{1F527} \uC2DC\uC2A4\uD15C"},{id:"statusCd",label:"\u{1F3F7} \uC0C1\uD0DC\uCF54\uB4DC"}],x=[{grp:"ORDER_STATUS_CD",col:"od_order.order_status_cd",codes:"PENDING(\uC785\uAE08\uB300\uAE30) \xB7 PAID(\uACB0\uC81C\uC644\uB8CC) \xB7 PREPARING(\uC0C1\uD488\uC900\uBE44) \xB7 SHIPPED(\uBC30\uC1A1\uC911) \xB7 DELIVERED(\uBC30\uC1A1\uC644\uB8CC) \xB7 COMPLT(\uAD6C\uB9E4\uD655\uC815) \xB7 CANCELLED(\uC8FC\uBB38\uCDE8\uC18C) \xB7 AUTO_CANCELLED(\uC790\uB3D9\uCDE8\uC18C)"},{grp:"ORDER_ITEM_STATUS_CD",col:"od_order_item.order_item_status_cd",codes:"ORDERED(\uC8FC\uBB38\uC644\uB8CC) \xB7 PAID(\uACB0\uC81C\uC644\uB8CC) \xB7 PREPARING(\uC900\uBE44\uC911) \xB7 SHIPPING(\uBC30\uC1A1\uC911) \xB7 DELIVERED(\uBC30\uC1A1\uC644\uB8CC) \xB7 CONFIRMED(\uAD6C\uB9E4\uD655\uC815) \xB7 CANCELLED(\uCDE8\uC18C)"},{grp:"CLAIM_STATUS_CD",col:"od_claim.claim_status_cd",codes:"REQUESTED(\uC694\uCCAD) \xB7 ACCEPTED/APPROVED(\uC2B9\uC778) \xB7 REJECTED(\uBC18\uB824) \xB7 IN_PICKUP(\uC218\uAC70\uC911) \xB7 PROCESSING(\uCC98\uB9AC\uC911) \xB7 REFUND_WAIT(\uD658\uBD88\uB300\uAE30) \xB7 COMPLT(\uCC98\uB9AC\uC644\uB8CC) \xB7 CANCELLED(\uCCA0\uD68C)"},{grp:"DLIV_STATUS",col:"od_dliv.dliv_status_cd",codes:"READY(\uC900\uBE44\uC911) \xB7 SHIPPED(\uCD9C\uACE0\uC644\uB8CC) \xB7 IN_TRANSIT(\uBC30\uC1A1\uC911) \xB7 DELIVERED(\uBC30\uC1A1\uC644\uB8CC) \xB7 FAILED(\uBC30\uC1A1\uC2E4\uD328)"},{grp:"PROD_STATUS_CD",col:"pd_prod.prod_status_cd",codes:"ACTIVE(\uD310\uB9E4\uC911) \xB7 INACTIVE(\uC911\uC9C0) \xB7 SOLDOUT(\uD488\uC808) \xB7 DRAFT(\uC784\uC2DC\uC800\uC7A5)"},{grp:"EVENT_STATUS_CD",col:"pm_event.event_status_cd",codes:"PENDING(\uB300\uAE30) \xB7 ACTIVE(\uC9C4\uD589\uC911) \xB7 INACTIVE(\uBE44\uD65C\uC131) \xB7 ENDED(\uC885\uB8CC)"},{grp:"SETTLE_STATUS_CD",col:"st_settle.settle_status_cd",codes:"OPEN(\uC9C4\uD589\uC911) \xB7 CONFIRMED(\uC815\uC0B0\uD655\uC815) \xB7 CLOSED(\uB9C8\uAC10\uC644\uB8CC) \xB7 PAID(\uC9C0\uAE09\uC644\uB8CC) \xB7 CANCELLED(\uB9C8\uAC10\uCDE8\uC18C)"},{grp:"CONTACT_STATUS_CD",col:"sy_contact.contact_status_cd",codes:"RECEIVED(\uC811\uC218) \xB7 IN_PROGRESS(\uCC98\uB9AC\uC911) \xB7 DONE(\uC644\uB8CC) \xB7 ON_HOLD(\uBCF4\uB958)"},{grp:"CHATT_STATUS",col:"cm_chatt.chatt_status_cd",codes:"WAITING(\uB300\uAE30) \xB7 ACTIVE(\uC9C4\uD589\uC911) \xB7 DONE(\uC644\uB8CC)"}],f=[{col:"od_order_item.order_item_status_cd",map:"ORDER_COMPLETE \u2192 ORDERED",cnt:"16\uAC74"},{col:"od_claim.claim_status_cd",map:"REQUEST \u2192 REQUESTED, COMPLETE \u2192 COMPLT, WAIT_REFUND \u2192 REFUND_WAIT, COLLECTING \u2192 IN_PICKUP",cnt:"19\uAC74"},{col:"od_order.order_status_cd",map:"COMPLETE \u2192 COMPLT, CANCEL \u2192 CANCELLED, WAIT_PAY \u2192 PENDING, SHIPPING \u2192 SHIPPED",cnt:"10\uAC74"},{col:"od_dliv.dliv_status_cd",map:"PREPARING \u2192 READY, SHIPPING \u2192 IN_TRANSIT",cnt:"3\uAC74"},{col:"pd_prod.prod_status_cd",map:"SELLING \u2192 ACTIVE",cnt:"38\uAC74"},{col:"cm_chatt.chatt_status_cd",map:"OPEN \u2192 ACTIVE, CLOSED \u2192 DONE, PENDING \u2192 WAITING",cnt:"16\uAC74"},{col:"sy_contact.contact_status_cd",map:"\uC694\uCCAD\xB7REQUEST \u2192 RECEIVED, PROCESSING \u2192 IN_PROGRESS, ANSWERED \u2192 DONE",cnt:"29\uAC74"},{col:"sy_notice.notice_status_cd",map:"PUBLISH \u2192 PUBLISHED, END \u2192 ENDED, (\uBE48\uAC12) \u2192 DRAFT",cnt:"9\uAC74"},{col:"sy_bbs.bbs_status_cd",map:"PUBLISH\xB7\uAC8C\uC2DC \u2192 ACTIVE, \uC784\uC2DC \u2192 HIDDEN",cnt:"42\uAC74"},{col:"st_recon.recon_status_cd",map:"MISMATCH \u2192 DIFF",cnt:"1\uAC74"},{col:"od_order.pay_method_cd",map:"TRANSFER \u2192 BANK_TRANSFER",cnt:"23\uAC74"},{col:"sy_bbm.content_type_cd",map:"htmleditor \u2192 HTMLEDITOR, textarea \u2192 TEXTAREA",cnt:"10\uAC74"}],c=[{was:"WIDGET_TYPE(20\uC885)",now:"DISP_WIDGET_TYPE(27\uC885)",note:"\uC804\uC2DC \uC704\uC82F. \uC9C0\uCE68\uC11C \uBA85\uC2DC\uAC12"},{was:"PRODUCT_STATUS",now:"PROD_STATUS_CD",note:"\uC0C1\uD488 \uC0C1\uD0DC"},{was:"PRODUCT_TYPE",now:"PROD_TYPE_CD",note:"\uC0C1\uD488 \uC720\uD615"},{was:"CLAIM_FAULT",now:"FAULT_TYPE_CD",note:"\uADC0\uCC45 \uAD6C\uBD84"},{was:"APPROVAL_STATUS/TARGET",now:"APPR_STATUS/APPR_TARGET",note:"\uC870\uC778\uC774 \uC548 \uB9DE\uC544 \uACB0\uC7AC \uB77C\uBCA8\uC774 \uD56D\uC0C1 \uBE44\uC5B4 \uC788\uC5C8\uC74C"},{was:"USE_YN (\uCE74\uD14C\uACE0\uB9AC)",now:"CATEGORY_STATUS_CD",note:"\uC0C1\uD0DC \uCEEC\uB7FC\uC778\uB370 Y/N \uADF8\uB8F9\uC744 \uCC38\uC870"},{was:"TOKEN_TYPE",now:"APP_TYPE",note:"\uAC12\uC774 BO/FO \u2014 \uC571 \uAD6C\uBD84"},{was:"PAY_METHOD_CD",now:"PAY_METHOD",note:"\uADF8\uB8F9\uBA85 \uC624\uD0C0"},{was:"COUPON/DISCNT/EVENT_ITEM_TARGET",now:"PROMO_TARGET_TYPE",note:"\uD504\uB85C\uBAA8\uC158 \uD0C0\uAE43 \uC815\uBCF8"},{was:"VENDOR_MEMBER_STATUS",now:"VENDOR_USER_STATUS_CD",note:""}],b=[{id:"basic",label:"\uAC1C\uC694"},{id:"clothing",label:"\uC758\uB958 \uC608\uC2DC"},{id:"shoes",label:"\uC2E0\uBC1C \uC608\uC2DC"},{id:"elec",label:"\uC804\uC790\uAE30\uAE30 \uC608\uC2DC"},{id:"single",label:"\uB2E8\uB3C5 \uC635\uC158"},{id:"inputtype",label:"\uC785\uB825 \uBC29\uC2DD"}],g=[{cat:"\uC758\uB958",d1:"\uC0C9\uC0C1",d2:"\uC0AC\uC774\uC988",ex:"\uBE14\uB799xS, \uBE14\uB799xM, \uD654\uC774\uD2B8xS ..."},{cat:"\uC2E0\uBC1C",d1:"\uC0AC\uC774\uC988",d2:"\uC0C9\uC0C1",ex:"260x\uBE14\uB799, 265x\uBE14\uB799 ..."},{cat:"\uAC00\uBC29",d1:"\uC0C9\uC0C1",d2:"\uC18C\uC7AC",ex:"\uBE14\uB799x\uAC00\uC8FD, \uBE14\uB799x\uCE94\uBC84\uC2A4 ..."},{cat:"\uC0C9\uC0C1+\uCEE4\uC2A4\uD140",d1:"\uC0C9\uC0C1",d2:"\uCEE4\uC2A4\uD140",ex:"\uBE14\uB799x256GB, \uBE14\uB799x512GB ..."},{cat:"\uB2E8\uB3C5",d1:"\uD574\uB2F9\uC720\uD615",d2:"-",ex:"\uBE14\uB799, \uD654\uC774\uD2B8, \uB808\uB4DC"}],y=[{d1:"\uBE14\uB799",d2:"S",sku:"\uBE14\uB799-S"},{d1:"\uBE14\uB799",d2:"M",sku:"\uBE14\uB799-M"},{d1:"\uBE14\uB799",d2:"L",sku:"\uBE14\uB799-L"},{d1:"\uD654\uC774\uD2B8",d2:"S",sku:"\uD654\uC774\uD2B8-S"},{d1:"\uD654\uC774\uD2B8",d2:"M",sku:"\uD654\uC774\uD2B8-M"}],v=[{d1:"250",d2:"\uBE14\uB799",sku:"250-\uBE14\uB799"},{d1:"255",d2:"\uBE14\uB799",sku:"255-\uBE14\uB799"},{d1:"260",d2:"\uBE14\uB799",sku:"260-\uBE14\uB799"},{d1:"260",d2:"\uD654\uC774\uD2B8",sku:"260-\uD654\uC774\uD2B8"},{d1:"265",d2:"\uD654\uC774\uD2B8",sku:"265-\uD654\uC774\uD2B8"}],m=[{d1:"\uBE14\uB799",d2:"128GB",sku:"\uBE14\uB799-128GB"},{d1:"\uBE14\uB799",d2:"256GB",sku:"\uBE14\uB799-256GB"},{d1:"\uBE14\uB799",d2:"512GB",sku:"\uBE14\uB799-512GB"},{d1:"\uC2E4\uBC84",d2:"128GB",sku:"\uC2E4\uBC84-128GB"},{d1:"\uC2E4\uBC84",d2:"256GB",sku:"\uC2E4\uBC84-256GB"}],u=[{cat:"\uC0C9\uC0C1 \uB2E8\uB3C5 (COLOR)",type:"1\uB2E8: \uC0C9\uC0C1",ex:"\uBE14\uB799, \uD654\uC774\uD2B8, \uB808\uB4DC, \uBE14\uB8E8"},{cat:"\uC0AC\uC774\uC988 \uB2E8\uB3C5 (SIZE)",type:"1\uB2E8: \uC0AC\uC774\uC988",ex:"S, M, L, XL, XXL"},{cat:"\uC18C\uC7AC \uB2E8\uB3C5 (MATERIAL)",type:"1\uB2E8: \uC18C\uC7AC",ex:"\uBA74, \uD3F4\uB9AC\uC5D0\uC2A4\uD130, \uC6B8, \uB9B0\uB128"},{cat:"\uC9C1\uC811\uC785\uB825 \uB2E8\uB3C5 (CUSTOM)",type:"1\uB2E8: \uCEE4\uC2A4\uD140",ex:"128GB, 256GB, \uB808\uB4DC \uC5D0\uB514\uC158"}],h=[{type:"SELECT",color:"#1677ff",bg:"#e6f4ff",border:"#bae0ff",title:"\uC120\uD0DD\uD615 (SELECT)",desc:"\uB4DC\uB86D\uB2E4\uC6B4\uC5D0\uC11C \uD56D\uBAA9 1\uAC1C\uB9CC \uC120\uD0DD. \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uBC29\uC2DD.",when:"\uC0C9\uC0C1, \uC0AC\uC774\uC988 \uB4F1 \uBA85\uD655\uD558\uAC8C \uC815\uD574\uC9C4 \uC635\uC158",ex:"\uBE14\uB799 / \uD654\uC774\uD2B8 / \uB808\uB4DC \uC911 1\uAC1C \uC120\uD0DD"},{type:"SELECT_INPUT",color:"#fa8c16",bg:"#fff7e6",border:"#ffd591",title:"\uC120\uD0DD+\uC785\uB825\uD615 (SELECT_INPUT)",desc:"\uB4DC\uB86D\uB2E4\uC6B4 \uBAA9\uB85D\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098, \uC9C1\uC811 \uD14D\uC2A4\uD2B8\uB97C \uD0C0\uC774\uD551\uD560 \uC218\uB3C4 \uC788\uC74C.",when:"\uAE30\uBCF8 \uBAA9\uB85D \uC678 \uCD94\uAC00 \uC785\uB825\uC774 \uD544\uC694\uD55C \uACBD\uC6B0",ex:"S / M / L \uC120\uD0DD \uB610\uB294 2XL \uC9C1\uC811 \uC785\uB825"},{type:"MULTI_SELECT",color:"#52c41a",bg:"#f6ffed",border:"#b7eb8f",title:"\uBCF5\uC218\uC120\uD0DD\uD615 (MULTI_SELECT)",desc:"\uCCB4\uD06C\uBC15\uC2A4 \uD615\uD0DC\uB85C \uC5EC\uB7EC \uD56D\uBAA9\uC744 \uB3D9\uC2DC\uC5D0 \uC120\uD0DD \uAC00\uB2A5.",when:"\uBD80\uAC00 \uC635\uC158, \uD1A0\uD551, \uCD94\uAC00 \uAD6C\uC131 \uC120\uD0DD \uB4F1",ex:"\uCD08\uCF54 + \uBC14\uB2D0\uB77C + \uB538\uAE30 \uB3D9\uC2DC \uC120\uD0DD"}],_=[{icon:"\u{1F464}",title:"\uD68C\uC6D0\uAD00\uB9AC",desc:"\uD68C\uC6D0 \uC870\uD68C, \uB4F1\uB85D, \uB4F1\uAE09, \uADF8\uB8F9 \uAD00\uB9AC",tab:"member"},{icon:"\u{1F4E6}",title:"\uC0C1\uD488\uAD00\uB9AC",desc:"\uC0C1\uD488, \uCE74\uD14C\uACE0\uB9AC, \uC635\uC158, SKU \uAD00\uB9AC",tab:"product"},{icon:"\u{1F6D2}",title:"\uC8FC\uBB38\uAD00\uB9AC",desc:"\uC8FC\uBB38, \uBC30\uC1A1, \uD074\uB808\uC784 \uCC98\uB9AC",tab:"order"},{icon:"\u{1F3AB}",title:"\uD504\uB85C\uBAA8\uC158",desc:"\uCFE0\uD3F0, \uCE90\uC26C, \uC774\uBCA4\uD2B8, \uAE30\uD68D\uC804",tab:"promotion"},{icon:"\u{1F5BC}",title:"\uC804\uC2DC\uAD00\uB9AC",desc:"UI, \uC601\uC5ED, \uD328\uB110, \uC704\uC82F \uAD6C\uC131",tab:"display"},{icon:"\u{1F527}",title:"\uC2DC\uC2A4\uD15C",desc:"\uCF54\uB4DC, \uC0AC\uC6A9\uC790, \uBA54\uB274, \uC5ED\uD560 \uAD00\uB9AC",tab:"system"}],E=["\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD","\uAE30\uBCF8\uC815\uBCF4 \uC785\uB825","\uC0C1\uC138\uC124\uC815 (\uAC00\uACA9/\uBC30\uC1A1)","\uC774\uBBF8\uC9C0 \uB4F1\uB85D","\uC635\uC158 \uC124\uC815","\uC0C1\uD488\uC124\uBA85 \uC791\uC131","\uC800\uC7A5"],w=[{tab:"\uAE30\uBCF8\uC815\uBCF4",desc:"\uC0C1\uD488\uBA85, \uCE74\uD14C\uACE0\uB9AC, \uBE0C\uB79C\uB4DC, \uD0DC\uADF8, \uD310\uB9E4\uC0C1\uD0DC, \uB178\uCD9C\uC124\uC815"},{tab:"\uC0C1\uC138\uC124\uC815",desc:"\uAC00\uACA9, \uD560\uC778, \uBC30\uC1A1\uBE44, \uBD80\uAC00\uC138, \uC6D0\uC0B0\uC9C0, \uC7AC\uACE0(\uB2E8\uC77C), \uD310\uB9E4\uAE30\uAC04"},{tab:"\uC774\uBBF8\uC9C0",desc:"\uBA54\uC778/\uC11C\uBE0C \uC774\uBBF8\uC9C0 \uB4F1\uB85D (\uB4DC\uB798\uADF8 \uC815\uB82C)"},{tab:"\uC0C1\uD488\uC124\uBA85",desc:"HTML \uC5D0\uB514\uD130 \uBE14\uB85D + \uBBF8\uB9AC\uBCF4\uAE30 \uBD84\uD560"},{tab:"\uC635\uC158\uC124\uC815",desc:"\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC, \uCC28\uC6D0, \uAC12 \uC124\uC815"},{tab:"\uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)",desc:"SKU\uBCC4 \uCD94\uAC00\uAE08\uC561, \uC7AC\uACE0 \uC77C\uAD04 \uC124\uC815"},{tab:"\uC5F0\uAD00\uC0C1\uD488",desc:"\uD568\uAED8\uAD6C\uB9E4, \uCF54\uB4DC\uC5F0\uACB0 \uC0C1\uD488 \uC9C0\uC815"}],k=["\uAE30\uBCF8\uC815\uBCF4","\uC8FC\uBB38\uB0B4\uC5ED","\uD074\uB808\uC784\uB0B4\uC5ED","\uBC30\uC1A1\uB0B4\uC5ED","\uCFE0\uD3F0","\uCE90\uC26C","\uBB38\uC758","\uCC44\uD305","\uB85C\uADF8\uC778\uC774\uB825"],S=["\uC8FC\uBB38\uC811\uC218","\uACB0\uC81C\uC644\uB8CC","\uBC30\uC1A1\uC900\uBE44","\uBC30\uC1A1\uC911","\uBC30\uC1A1\uC644\uB8CC","\uAD6C\uB9E4\uD655\uC815"],T=[{step:"\uC8FC\uBB38\uC811\uC218",color:"#9ca3af",desc:"\uACE0\uAC1D\uC774 \uC8FC\uBB38 \uC644\uB8CC. \uACB0\uC81C \uB300\uAE30 \uC0C1\uD0DC. \uC7AC\uACE0 \uC120\uC810 \uCC98\uB9AC.",action:"\uC790\uB3D9 \uCC98\uB9AC (\uC2DC\uC2A4\uD15C)"},{step:"\uACB0\uC81C\uC644\uB8CC",color:"#3b82f6",desc:"\uACB0\uC81C \uC2B9\uC778 \uC644\uB8CC. \uD310\uB9E4\uC790\uC5D0\uAC8C \uC8FC\uBB38 \uC54C\uB9BC \uBC1C\uC1A1.",action:"\uD310\uB9E4\uC790 \uC8FC\uBB38 \uD655\uC778 \uC2DC\uC791"},{step:"\uBC30\uC1A1\uC900\uBE44",color:"#f59e0b",desc:"\uC0C1\uD488 \uD53C\uD0B9/\uD328\uD0B9 \uC911. \uC774 \uB2E8\uACC4\uBD80\uD130 \uCDE8\uC18C \uBD88\uAC00.",action:"\uCD9C\uACE0 \uC900\uBE44 \uC791\uC5C5 \uC9C4\uD589"},{step:"\uBC30\uC1A1\uC911",color:"#8b5cf6",desc:"\uD0DD\uBC30\uC0AC \uC778\uC218 \uC644\uB8CC. \uC1A1\uC7A5\uBC88\uD638 \uB4F1\uB85D \uD544\uC218. \uACE0\uAC1D\uC5D0\uAC8C \uBC30\uC1A1 \uC2DC\uC791 \uC54C\uB9BC.",action:"\uC1A1\uC7A5\uBC88\uD638 \uC785\uB825 \uD6C4 \uC0C1\uD0DC \uBCC0\uACBD"},{step:"\uBC30\uC1A1\uC644\uB8CC",color:"#10b981",desc:"\uACE0\uAC1D \uC218\uB839 \uC644\uB8CC. \uAD6C\uB9E4\uD655\uC815 \uB300\uAE30. \uBC18\uD488/\uAD50\uD658 \uC2E0\uCCAD \uAC00\uB2A5 \uC2DC\uC791.",action:"\uC790\uB3D9 \uC804\uD658 or \uC218\uB3D9 \uCC98\uB9AC"},{step:"\uAD6C\uB9E4\uD655\uC815",color:"#6366f1",desc:"\uCD5C\uC885 \uAC70\uB798 \uD655\uC815. \uC801\uB9BD\uAE08 \uC9C0\uAE09. \uB9AC\uBDF0 \uC791\uC131 \uAC00\uB2A5. \uD074\uB808\uC784 \uC885\uB8CC.",action:"\uACE0\uAC1D \uD655\uC815 or 14\uC77C \uD6C4 \uC790\uB3D9 \uD655\uC815"}],R=[{item:"\uC0C1\uD488 A",status:"\uAD6C\uB9E4\uD655\uC815",claimStatus:"\uCDE8\uC18C\uC644\uB8CC",color:"#9ca3af",claimColor:"#ef4444",desc:"\uBC30\uC1A1 \uC804 \uCDE8\uC18C. cancel_qty = order_qty \u2192 CANCELLED \uCC98\uB9AC. \uD658\uBD88 \uC644\uB8CC."},{item:"\uC0C1\uD488 B",status:"\uBC30\uC1A1\uC644\uB8CC",claimStatus:"\uBC18\uD488\uC9C4\uD589\uC911",color:"#10b981",claimColor:"#f97316",desc:"\uBC30\uC1A1\uC644\uB8CC \uD6C4 \uBC18\uD488 \uC2E0\uCCAD. \uC218\uAC70 \uC911 \uC0C1\uD0DC. \uAC80\uC218 \uD6C4 \uD658\uBD88 \uC608\uC815."},{item:"\uC0C1\uD488 C",status:"\uAD6C\uB9E4\uD655\uC815",claimStatus:"\uC5C6\uC74C",color:"#6366f1",claimColor:"#e0e0e0",desc:"\uC815\uC0C1 \uC644\uB8CC. \uC801\uB9BD\uAE08 \uC9C0\uAE09. \uB9AC\uBDF0 \uC791\uC131 \uAC00\uB2A5."}],z=[{rank:"1",method:"\uC801\uB9BD\uAE08 \uC0AC\uC6A9\uBD84",color:"#f59e0b",bg:"#fffbe6",desc:"\uC0AC\uC6A9\uD55C \uC801\uB9BD\uAE08 \uC6D0 \uD615\uD0DC\uB85C \uBCF5\uC6D0 (\uD604\uAE08 \uD658\uBD88 \uC544\uB2D8). \uC989\uC2DC \uCC98\uB9AC."},{rank:"2",method:"\uCE90\uC26C(\uCDA9\uC804\uAE08)",color:"#10b981",bg:"#f0fdf4",desc:"\uC0AC\uC6A9\uD55C \uCE90\uC26C \uC794\uC561 \uBCF5\uC6D0 (\uD604\uAE08 \uD658\uBD88 \uC544\uB2D8). \uC989\uC2DC \uCC98\uB9AC."},{rank:"3",method:"\uBB34\uD1B5\uC7A5/\uAC00\uC0C1\uACC4\uC88C",color:"#3b82f6",bg:"#eff6ff",desc:"\uACE0\uAC1D \uB4F1\uB85D \uACC4\uC88C\uB85C \uC9C1\uC811 \uC774\uCCB4. 1~3 \uC601\uC5C5\uC77C."},{rank:"4",method:"\uAC04\uD3B8\uACB0\uC81C(\uD1A0\uC2A4/\uCE74\uCE74\uC624/\uB124\uC774\uBC84)",color:"#8b5cf6",bg:"#f5f3ff",desc:"PG\uC0AC \uC790\uB3D9 \uD658\uBD88 \uCC98\uB9AC. 1~3 \uC601\uC5C5\uC77C."},{rank:"5",method:"\uD578\uB4DC\uD3F0\uACB0\uC81C",color:"#f97316",bg:"#fff7ed",desc:"\uD1B5\uC2E0\uC0AC \uD658\uBD88. 3~5 \uC601\uC5C5\uC77C."},{rank:"6",method:"\uC2E0\uC6A9/\uCCB4\uD06C\uCE74\uB4DC",color:"#ef4444",bg:"#fef2f2",desc:"\uCE74\uB4DC\uC0AC \uCDE8\uC18C \uCC98\uB9AC. 3~7 \uC601\uC5C5\uC77C."}],C=[{reason:"\uC0C1\uD488 \uBD88\uB7C9/\uD558\uC790",buyer:"-",seller:"100%",note:"\uD310\uB9E4\uC790 \uADC0\uCC45 \u2192 \uC655\uBCF5 \uBC30\uC1A1\uB8CC \uD310\uB9E4\uC790 \uC804\uC561 \uBD80\uB2F4"},{reason:"\uC624\uBC30\uC1A1/\uBC30\uC1A1\uC190\uC0C1",buyer:"-",seller:"100%",note:"\uD310\uB9E4\uC790 \uADC0\uCC45 \u2192 \uC655\uBCF5 \uBC30\uC1A1\uB8CC \uD310\uB9E4\uC790 \uC804\uC561 \uBD80\uB2F4"},{reason:"\uC0AC\uC774\uC988/\uC0C9\uC0C1 \uC624\uB958",buyer:"-",seller:"100%",note:"\uD310\uB9E4\uC790 \uADC0\uCC45 \u2192 \uC655\uBCF5 \uBC30\uC1A1\uB8CC \uD310\uB9E4\uC790 \uC804\uC561 \uBD80\uB2F4"},{reason:"\uB2E8\uC21C\uBCC0\uC2EC",buyer:"50%",seller:"50%",note:"\uC218\uAC70\uBE44 \uACE0\uAC1D/\uD310\uB9E4\uC790 \uBC18\uBC18 \uBD80\uB2F4"}],P=[{type:"\uC8FC\uBB38\uCFE0\uD3F0",rule:"\uC548\uBD84 \uCC28\uAC10 \uD6C4 \uC7AC\uBC1C\uAE09 \uC5C6\uC74C",detail:"\uBC18\uD488 \uC0C1\uD488 \uAE08\uC561 \uBE44\uC728\uB85C \uD560\uC778\uC561 \uC548\uBD84. \uCC28\uAC10\uB41C \uAE08\uC561\uB9CC\uD07C \uD658\uBD88\uC5D0\uC11C \uC81C\uC678."},{type:"\uC0C1\uD488\uCFE0\uD3F0",rule:"\uD574\uB2F9 \uC0C1\uD488 \uD560\uC778\uC561 \uC804\uC561 \uCC28\uAC10",detail:"\uBC18\uD488 \uB300\uC0C1 \uC0C1\uD488\uC5D0 \uC801\uC6A9\uB41C \uC0C1\uD488\uCFE0\uD3F0 \uD560\uC778\uC561 \uD658\uBD88 \uAE08\uC561\uC5D0\uC11C \uC81C\uC678."},{type:"\uC989\uC2DC\uD560\uC778",rule:"\uC548\uBD84 \uCC28\uAC10",detail:"\uD504\uB85C\uBAA8\uC158 \uC989\uC2DC\uD560\uC778\uB3C4 \uBE44\uC728\uB85C \uC548\uBD84\uD558\uC5EC \uD658\uBD88 \uAE08\uC561 \uCC28\uAC10."}],D=[{title:"\uCDE8\uC18C",emoji:"\u{1F534}",color:"#dc2626",bg:"#fff1f1",steps:[{key:"REQUESTED",label:"\uCDE8\uC18C\uC694\uCCAD",icon:"\u{1F4CB}",desc:"\uACE0\uAC1D\uC774 \uCDE8\uC18C \uC2E0\uCCAD. \uC0AC\uC720 \uC785\uB825 \uD544\uC218. \uC2E0\uCCAD \uC9C1\uD6C4 \uCCA0\uD68C \uAC00\uB2A5."},{key:"PROCESSING",label:"\uCDE8\uC18C\uCC98\uB9AC\uC911",icon:"\u23F3",desc:"\uAD00\uB9AC\uC790 \uC2B9\uC778 \uC644\uB8CC. \uACB0\uC81C\uC0AC\uC5D0 \uD658\uBD88 \uC694\uCCAD \uC9C4\uD589 \uC911."},{key:"COMPLT",label:"\uCDE8\uC18C\uC644\uB8CC",icon:"\u2705",desc:"\uD658\uBD88 \uC644\uB8CC. \uC6D0 \uACB0\uC81C\uC218\uB2E8\uC73C\uB85C 3~5 \uC601\uC5C5\uC77C \uB0B4 \uC785\uAE08."}],cancelStep:{key:"CANCELLED",label:"\uCCA0\uD68C",icon:"\u21A9\uFE0F",desc:"REQUESTED \uC0C1\uD0DC\uC5D0\uC11C\uB9CC \uAC00\uB2A5. \uCCA0\uD68C \uC2DC \uC8FC\uBB38 \uBCF5\uC6D0."},period:"\uACB0\uC81C\uC644\uB8CC \uD6C4 ~ \uBC30\uC1A1\uC900\uBE44 \uCC29\uC218 \uC804",refund:"\uC6D0 \uACB0\uC81C\uC218\uB2E8\uC73C\uB85C 3~5 \uC601\uC5C5\uC77C \uB0B4 \uD658\uBD88",notes:["\uBC30\uC1A1\uC900\uBE44(PREPARING) \uC774\uD6C4\uC5D0\uB294 \uCDE8\uC18C \uBD88\uAC00","\uBC30\uC1A1 \uCD9C\uBC1C \uD6C4 \uCDE8\uC18C \uC2DC \uBC18\uD488\uC73C\uB85C \uC804\uD658 \uCC98\uB9AC"]},{title:"\uBC18\uD488",emoji:"\u{1FA77}",color:"#db2777",bg:"#fff0f8",steps:[{key:"REQUESTED",label:"\uBC18\uD488\uC694\uCCAD",icon:"\u{1F4CB}",desc:"\uACE0\uAC1D\uC774 \uBC18\uD488 \uC2E0\uCCAD. \uC0AC\uC720\xB7\uC0AC\uC9C4 \uCCA8\uBD80 \uD544\uC218. \uC2E0\uCCAD \uC9C1\uD6C4 \uCCA0\uD68C \uAC00\uB2A5."},{key:"APPROVED",label:"\uC218\uAC70\uC608\uC815",icon:"\u{1F5D3}\uFE0F",desc:"\uAD00\uB9AC\uC790 \uC2B9\uC778 \uC644\uB8CC. \uD0DD\uBC30\uC0AC \uC9C0\uC815 \uBC0F \uC218\uAC70 \uC77C\uC815 \uD655\uC815."},{key:"IN_PICKUP",label:"\uC218\uAC70\uC911",icon:"\u{1F69A}",desc:"\uD0DD\uBC30\uC0AC\uAC00 \uC0C1\uD488 \uD53D\uC5C5. \uCC3D\uACE0 \uC774\uB3D9 \uC911."},{key:"PROCESSING",label:"\uAC80\uD488\uC911",icon:"\u{1F50D}",desc:"\uCC3D\uACE0 \uC785\uACE0 \uC644\uB8CC. \uC815\uC0C1/\uC190\uC0C1/\uBD88\uB7C9 \uC5EC\uBD80 \uAC80\uC218 \uC9C4\uD589."},{key:"REFUND_WAIT",label:"\uD658\uBD88\uB300\uAE30",icon:"\u{1F4B3}",desc:"\uAC80\uC218 \uC644\uB8CC. \uD658\uBD88 \uAE08\uC561 \uD655\uC815 \uD6C4 \uACB0\uC81C\uC0AC \uD658\uBD88 \uC694\uCCAD."},{key:"COMPLT",label:"\uD658\uBD88\uC644\uB8CC",icon:"\u2705",desc:"\uD658\uBD88 \uCC98\uB9AC \uC644\uB8CC. \uBC30\uC1A1\uB8CC\xB7\uC190\uC0C1 \uACF5\uC81C \uD6C4 \uC785\uAE08."}],cancelStep:{key:"CANCELLED",label:"\uCCA0\uD68C",icon:"\u21A9\uFE0F",desc:"REQUESTED \uC0C1\uD0DC\uC5D0\uC11C\uB9CC \uAC00\uB2A5."},period:"\uBC30\uC1A1\uC644\uB8CC \uD6C4 30\uC77C \uC774\uB0B4 (\uC0C1\uD488\uD558\uC790 180\uC77C, \uBC30\uC1A1\uC190\uC0C1 7\uC77C)",refund:"\uAC80\uD488 \uC644\uB8CC \uD6C4 5~7 \uC601\uC5C5\uC77C \uB0B4 \uD658\uBD88",notes:["\uB2E8\uC21C\uBCC0\uC2EC: \uBC30\uC1A1\uB8CC \uACE0\uAC1D/\uD310\uB9E4\uC790 50% \uBD80\uB2F4","\uC0C1\uD488\uD558\uC790\xB7\uC624\uBC30\uC1A1: \uD310\uB9E4\uC790 100% \uBD80\uB2F4","PROCESSING(\uAC80\uD488) \uB2E8\uACC4\uC5D0\uC11C \uBD88\uB7C9 \uD310\uC815 \uC2DC \uD658\uBD88 \uAE08\uC561 \uC870\uC815 \uAC00\uB2A5"]},{title:"\uAD50\uD658",emoji:"\u{1F535}",color:"#2563eb",bg:"#f0f5ff",steps:[{key:"REQUESTED",label:"\uAD50\uD658\uC694\uCCAD",icon:"\u{1F4CB}",desc:"\uACE0\uAC1D\uC774 \uAD50\uD658 \uC2E0\uCCAD. \uAD50\uD658 \uC635\uC158(\uC0AC\uC774\uC988\xB7\uC0C9\uC0C1) \uC120\uD0DD. \uCC28\uC561 \uBC1C\uC0DD \uC2DC \uCD94\uAC00 \uACB0\uC81C."},{key:"APPROVED",label:"\uC218\uAC70\uC608\uC815",icon:"\u{1F5D3}\uFE0F",desc:"\uAD00\uB9AC\uC790 \uC2B9\uC778 \uC644\uB8CC. \uAE30\uC874 \uC0C1\uD488 \uC218\uAC70 \uD0DD\uBC30\uC0AC \uC9C0\uC815 \uBC0F \uC77C\uC815 \uD655\uC815."},{key:"IN_PICKUP",label:"\uC218\uAC70\uC911",icon:"\u{1F69A}",desc:"\uAE30\uC874 \uC0C1\uD488 \uD53D\uC5C5 \uC644\uB8CC. \uCC3D\uACE0 \uC774\uB3D9 \uC911."},{key:"PROCESSING",label:"\uC7AC\uACE0\uD655\uC778",icon:"\u{1F4E6}",desc:"\uAE30\uC874 \uC0C1\uD488 \uC785\uACE0 \uBC0F \uAC80\uC218. \uAD50\uD658 \uC0C1\uD488 \uC7AC\uACE0 \uD655\uC778 \uBC0F \uD53C\uD0B9\xB7\uD328\uD0B9."},{key:"REFUND_WAIT",label:"\uBC1C\uC1A1\uB300\uAE30",icon:"\u{1F680}",desc:"\uAD50\uD658 \uC0C1\uD488 \uBC1C\uC1A1 \uC900\uBE44 \uC644\uB8CC. \uCD9C\uACE0 \uB300\uAE30 \uC911."},{key:"COMPLT",label:"\uAD50\uD658\uC644\uB8CC",icon:"\u{1F3C1}",desc:"\uAD50\uD658 \uC0C1\uD488 \uBC1C\uC1A1 \uC644\uB8CC \uD655\uC778. \uCD94\uAC00 \uBC18\uD488\xB7\uCDE8\uC18C\uB294 \uC0C8 \uD074\uB808\uC784\uC73C\uB85C \uC2E0\uCCAD."}],cancelStep:{key:"CANCELLED",label:"\uCCA0\uD68C",icon:"\u21A9\uFE0F",desc:"REQUESTED \uC0C1\uD0DC\uC5D0\uC11C\uB9CC \uAC00\uB2A5."},period:"\uBC30\uC1A1\uC644\uB8CC \uD6C4 30\uC77C \uC774\uB0B4 (\uC0C1\uD488\uD558\uC790 180\uC77C, \uBC30\uC1A1\uC190\uC0C1 7\uC77C)",refund:"\uCD1D 7~10\uC77C \uC18C\uC694 (\uC218\uAC70 3~5\uC77C + \uBC1C\uC1A1 3~5\uC77C)",notes:["\uB2E8\uC21C\uBCC0\uC2EC: \uC218\uAC70\uB8CC 50%/50%, \uBC1C\uC1A1\uBE44 \uACE0\uAC1D 100%","\uC0C1\uD488\uD558\uC790\xB7\uC0AC\uC774\uC988\uC624\uB958: \uC655\uBCF5 \uBC30\uC1A1\uB8CC \uD310\uB9E4\uC790 100%","PROCESSING(\uC7AC\uACE0\uD655\uC778)\uC5D0\uC11C \uAD50\uD658 \uBD88\uAC00 \uD310\uC815 \uC2DC \uBC18\uD488 \uC804\uD658"]}],O=[{icon:"\u{1F39F}",title:"\uCFE0\uD3F0",desc:"\uBC1C\uD589, \uBC30\uD3EC, \uC0AC\uC6A9 \uAD00\uB9AC. \uC815\uB960/\uC815\uC561 \uD560\uC778. \uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561, \uC0AC\uC6A9\uAE30\uD55C \uC124\uC815."},{icon:"\u{1F4B0}",title:"\uCE90\uC26C(\uCDA9\uC804\uAE08)",desc:"\uCDA9\uC804, \uC0AC\uC6A9, \uD658\uBD88 \uCC98\uB9AC. \uC720\uD6A8\uAE30\uAC04 \uC124\uC815. \uC790\uB3D9\uC18C\uBA78 \uC815\uCC45."},{icon:"\u{1F3F7}",title:"\uC774\uBCA4\uD2B8",desc:"\uAE30\uAC04, \uB300\uC0C1, \uD61C\uD0DD \uC124\uC815. \uB178\uCD9C \uC601\uC5ED \uC5F0\uACB0."},{icon:"\u{1F4C5}",title:"\uAE30\uD68D\uC804",desc:"\uC0C1\uD488 \uBB36\uC74C \uC804\uC2DC. \uAE30\uAC04 \uD55C\uC815 \uAE30\uD68D \uD398\uC774\uC9C0 \uAD6C\uC131."}],I=[{l:"UI",d:"\uC0AC\uC774\uD2B8 \uC804\uCCB4 \uB808\uC774\uC544\uC6C3"},{l:"Area",d:"\uD654\uBA74 \uAD6C\uC5ED (\uD5E4\uB354/\uBCF8\uBB38/\uD478\uD130)"},{l:"Panel",d:"\uCF58\uD150\uCE20 \uD328\uB110 \uB2E8\uC704"},{l:"Widget",d:"\uAC1C\uBCC4 \uC704\uC82F (\uBC30\uB108/\uC0C1\uD488/\uCC28\uD2B8 \uB4F1)"}],A=["image_banner","product_slider","product","chart_bar","chart_line","chart_pie","text_banner","info_card","popup","coupon","html_editor","event_banner","countdown","barcode"],N=[{title:"\uACF5\uD1B5\uCF54\uB4DC\uAD00\uB9AC",desc:"\uCF54\uB4DC\uADF8\uB8F9, \uCF54\uB4DC\uAC12 \uAD00\uB9AC. OPT_TYPE, ORDER_STATUS \uB4F1 \uC2DC\uC2A4\uD15C \uC804\uC5ED \uCF54\uB4DC."},{title:"\uC0AC\uC6A9\uC790/\uC5ED\uD560",desc:"\uAD00\uB9AC\uC790 \uACC4\uC815 \uB4F1\uB85D, \uC5ED\uD560(RBAC) \uC124\uC815, \uBA54\uB274 \uAD8C\uD55C \uBD80\uC5EC."},{title:"\uBA54\uB274\uAD00\uB9AC",desc:"\uC88C\uCE21 \uBA54\uB274 \uAD6C\uC870 \uD3B8\uC9D1. \uC21C\uC11C, \uB178\uCD9C \uC5EC\uBD80, \uAD8C\uD55C \uC5F0\uACB0."},{title:"\uD15C\uD50C\uB9BF\uAD00\uB9AC",desc:"\uC774\uBA54\uC77C, SMS \uBC1C\uC1A1 \uD15C\uD50C\uB9BF. \uBCC0\uC218 \uCE58\uD658 \uC9C0\uC6D0."},{title:"\uBC30\uCE58\uC2A4\uCF00\uC904",desc:"\uC790\uB3D9\uD654 \uC791\uC5C5 \uB4F1\uB85D, \uC2E4\uD589, \uC774\uB825 \uC870\uD68C."},{title:"\uD45C\uC2DC\uACBD\uB85C(Path)",desc:"biz_cd \uAE30\uC900 \uCE74\uD14C\uACE0\uB9AC, \uBA54\uB274 \uD2B8\uB9AC \uACBD\uB85C \uAD00\uB9AC."}],L=[{code:"DRAFT",label:"\uC791\uC131\uC911",color:"#9ca3af",desc:"\uC815\uC0B0 \uC9D1\uACC4 \uC791\uC131 \uC911. \uC218\uC815 \uAC00\uB2A5.",table:"st_settle",col:"settle_status_cd"},{code:"CONFIRMED",label:"\uD655\uC815",color:"#3b82f6",desc:"\uC815\uC0B0\uC561 \uD655\uC815 \uC644\uB8CC. \uC774\uD6C4 \uC218\uC815 \uBD88\uAC00. \uC774\uC758\uC2E0\uCCAD \uAE30\uAC04 \uC2DC\uC791.",table:"st_settle",col:"settle_status_cd"},{code:"CLOSED",label:"\uB9C8\uAC10",color:"#8b5cf6",desc:"\uC815\uC0B0 \uB9C8\uAC10 \uCC98\uB9AC \uC644\uB8CC. \uC9C0\uAE09 \uB300\uAE30 \uB808\uCF54\uB4DC(PENDING) \uC0DD\uC131.",table:"st_settle",col:"settle_status_cd"},{code:"PAID",label:"\uC9C0\uAE09\uC644\uB8CC",color:"#10b981",desc:"\uC5C5\uCCB4 \uACC4\uC88C \uC1A1\uAE08 \uC644\uB8CC. ERP \uC804\uD45C \uC0DD\uC131 \uBC0F \uD655\uC778.",table:"st_settle",col:"settle_status_cd"}],U=[{item:"\uCD1D\uC8FC\uBB38\uAE08\uC561",field:"total_order_amt",sign:"+",desc:"\uAD6C\uB9E4\uD655\uC815(CONFIRMED) \uAE30\uC900 \uB9E4\uCD9C \uADC0\uC18D\uBD84 \uD569\uACC4"},{item:"\uCD1D\uD658\uBD88\uAE08\uC561",field:"total_return_amt",sign:"-",desc:"\uD658\uBD88 \uD655\uC815 \uC2DC\uC810 \uADC0\uC18D \uC6D4\uC5D0 \uBC18\uC601 (\uBC1C\uC0DD\uC8FC\uC758)"},{item:"\uCD1D\uD560\uC778\uAE08\uC561",field:"total_discnt_amt",sign:"-",desc:"\uCFE0\uD3F0/\uD504\uB85C\uBAA8\uC158 \uD560\uC778 \uD569\uACC4"},{item:"\uC218\uC218\uB8CC",field:"commission_amt",sign:"-",desc:"\uC815\uC0B0\uAE30\uC900 \uC218\uC218\uB8CC\uC728 \xD7 \uC815\uC0B0\uB300\uC0C1\uAE08\uC561"},{item:"\uC870\uC815\uAE08\uC561",field:"adj_amt",sign:"\xB1",desc:"\uBC30\uC1A1\uB8CC \uC870\uC815, \uC774\uC758\uC2E0\uCCAD \uBCF4\uC815 \uB4F1"},{item:"\uAE30\uD0C0\uC870\uC815\uAE08\uC561",field:"etc_adj_amt",sign:"\xB1",desc:"\uC218\uB3D9 \uC870\uC815, \uBD84\uC7C1 \uCC98\uB9AC, \uD658\uC218 \uB4F1"},{item:"\uCD5C\uC885\uC815\uC0B0\uAE08\uC561",field:"final_settle_amt",sign:"=",desc:"\uC5C5\uCCB4 \uACC4\uC88C\uB85C \uC2E4\uC81C \uC9C0\uAE09\uB418\uB294 \uAE08\uC561"}],M=[{code:"ORDER",label:"\uC8FC\uBB38",color:"#10b981",desc:"od_order_item CONFIRMED \uAE30\uC900 \uB9E4\uCD9C \uC218\uC9D1"},{code:"CANCEL",label:"\uCDE8\uC18C",color:"#ef4444",desc:"od_claim_item COMPLT(CANCEL) \uAE30\uC900 \uCC28\uAC10"},{code:"RETURN",label:"\uBC18\uD488",color:"#f97316",desc:"od_claim_item COMPLT(RETURN) \uAE30\uC900 \uCC28\uAC10"},{code:"EXCHANGE",label:"\uAD50\uD658",color:"#8b5cf6",desc:"od_claim_item COMPLT(EXCHANGE) \uAE30\uC900 \uC870\uC815"},{code:"SHIP",label:"\uBC30\uC1A1\uBE44",color:"#0891b2",desc:"od_dliv DELIVERED \uAE30\uC900 \uBC30\uC1A1\uBE44 \uC218\uC775\xB7\uCC28\uAC10"}],G=[{title:"\uC815\uC0B0 \uC8FC\uAE30",desc:"\uC6D4 1\uD68C / \uB9E4\uC6D4 \uB9C8\uC9C0\uB9C9 \uC601\uC5C5\uC77C \uB9C8\uAC10",table:"st_settle",col:"settle_ym"},{title:"\uD0C0\uC6D4 \uD658\uBD88",desc:"\uD658\uBD88 \uD655\uC815 \uC2DC\uC810\uC758 \uADC0\uC18D \uC6D4\uC5D0 \uBC18\uC601 (\uBC1C\uC0DD\uC8FC\uC758). 1\uC6D4 \uC8FC\uBB38 \u2192 3\uC6D4 \uBC18\uD488 \uC644\uB8CC \u2192 3\uC6D4 \uC815\uC0B0 \uCC28\uAC10",table:"st_settle_raw",col:"raw_type_cd / settle_ym"},{title:"\uB9C8\uC774\uB108\uC2A4 \uC815\uC0B0",desc:"final_settle_amt < 0 \uC2DC \uB2E4\uC74C \uB2EC \uC774\uC6D4(adj_amt) \uB610\uB294 \uC218\uB3D9 \uC870\uC815",table:"st_settle",col:"final_settle_amt / adj_amt"},{title:"\uC774\uC758\uC2E0\uCCAD",desc:"CONFIRMED \uD6C4 30\uC77C \uC774\uB0B4. \uC778\uC815 \uC2DC \uBCF4\uC815 \uC815\uC0B0(etc_adj_amt \uBC18\uC601)",table:"st_settle",col:"etc_adj_amt"},{title:"\uC9C0\uAE09 \uBCF4\uB958",desc:"\uAC70\uB798 \uBD84\uC7C1 / \uACC4\uC88C \uC624\uB958 / \uC815\uC0B0\uACC4\uC88C \uBBF8\uD655\uC778 / \uC11C\uB958 \uBBF8\uC81C\uCD9C \uC2DC \uB2E4\uC74C \uC815\uC0B0\uAE4C\uC9C0 \uBCF4\uB958",table:"st_settle_pay",col:"pay_status_cd"},{title:"\uC9C0\uAE09 \uAE30\uD55C",desc:"CLOSED \uD6C4 5 \uC601\uC5C5\uC77C \uC774\uB0B4 \uC790\uB3D9 \uC1A1\uAE08. \uC2E4\uD328 \uC2DC 3\uD68C \uC7AC\uC2DC\uB3C4 \uD6C4 \uB2F4\uB2F9\uC790 \uC5F0\uB77D",table:"st_settle_pay",col:"pay_date / pay_status_cd"}],i=o(d.topic||"overview"),r=o("basic"),p=o("flow"),s=o("overview"),j=o(!1);l(()=>d.topic,e=>{e&&(i.value=e)}),l(()=>d.show,e=>{e&&d.topic&&(i.value=d.topic)});const B=(e,t={})=>{if(e==="modal-close"){a("close"),d.onCallback&&d.onCallback(d.modalName,null,null);return}else console.warn("[handleBtnAction] unknown cmd:",e)},F=(e,t={})=>{if(e==="tab-select"){i.value=t;return}else if(e==="optSubTab-select"){r.value=t;return}else if(e==="orderSubTab-select"){p.value=t;return}else if(e==="settleSubTab-select"){s.value=t;return}else console.warn("[handleSelectAction] unknown cmd:",e)},H=[{type:"ORDER",col:"od_order_item.confirmed_date",desc:"\uAD6C\uB9E4\uD655\uC815 \uC644\uB8CC \uC2DC\uAC01"},{type:"CANCEL / RETURN",col:"od_claim_item.complt_date",desc:"\uD074\uB808\uC784 \uCC98\uB9AC \uC644\uB8CC \uC2DC\uAC01"},{type:"EXCHANGE",col:"od_dliv.delivered_date (\uAD50\uD658\uBC30\uC1A1)",desc:"\uAD50\uD658 \uBC30\uC1A1 \uC644\uB8CC \uC2DC\uAC01"},{type:"SHIP",col:"od_dliv.delivered_date",desc:"\uBC30\uC1A1 \uC644\uB8CC \uC2DC\uAC01"}],W=[{col:"adj_amt",reason:"\uBC30\uC1A1\uB8CC \uC870\uC815 (\uCC29\uBD88\u2192\uC120\uBD88 \uC804\uD658)",amt:"+3,000",how:"\uBC30\uC1A1 \uB2F4\uB2F9\uC790 \uC2B9\uC778 \uD6C4 \uC790\uB3D9 \uBC18\uC601"},{col:"adj_amt",reason:"\uC774\uC758\uC2E0\uCCAD \uC778\uC815 (\uACFC\uB2E4 \uC218\uC218\uB8CC \uBCF4\uC815)",amt:"+5,000",how:"\uC815\uC0B0\uD300 \uC778\uC815 \uCC98\uB9AC \uD6C4 adj_amt \uCD94\uAC00"},{col:"adj_amt",reason:"\uB9C8\uC774\uB108\uC2A4 \uC815\uC0B0 \uC774\uC6D4 (\uC804\uC6D4 \uC801\uC790 \uD68C\uC218)",amt:"-12,000",how:"\uC804\uC6D4 final_settle_amt < 0 \uC774\uC6D4"},{col:"etc_adj_amt",reason:"\uBD84\uC7C1 \uBCF4\uC815 (\uBC30\uC0C1 \uD569\uC758)",amt:"+8,000",how:"\uBC95\uBB34\uD300 \uD655\uC778 \uD6C4 \uC218\uB3D9 \uC785\uB825"},{col:"etc_adj_amt",reason:"\uD658\uC218 (\uD398\uB110\uD2F0 \uBD80\uACFC)",amt:"-20,000",how:"\uC6B4\uC601\uD300 \uC2B9\uC778 \uD6C4 \uC218\uB3D9 \uCC28\uAC10"}],V=[{reason:"\uC815\uC0B0\uACC4\uC88C \uBBF8\uD655\uC778 / \uC624\uB958",release:"\uC5C5\uCCB4\uAC00 \uACC4\uC88C \uC7AC\uB4F1\uB85D \u2192 \uB2E4\uC74C \uC815\uC0B0 \uC9C0\uAE09"},{reason:"\uAC70\uB798 \uBD84\uC7C1 \uC9C4\uD589 \uC911",release:"\uBD84\uC7C1 \uC885\uACB0 \uD6C4 \uBC95\uBB34\uD300 \uD574\uC81C \uC2B9\uC778"},{reason:"\uC11C\uB958 \uBBF8\uC81C\uCD9C (\uC0AC\uC5C5\uC790\uB4F1\uB85D\uC99D \uB4F1)",release:"\uC11C\uB958 \uC81C\uCD9C \uD655\uC778 \uD6C4 \uC989\uC2DC \uD574\uC81C \uAC00\uB2A5"},{reason:"\uD38C\uBC45\uD0B9 \uC624\uB958 (3\uD68C \uC7AC\uC2DC\uB3C4 \uC2E4\uD328)",release:"\uB2F4\uB2F9\uC790 \uC218\uB3D9 \uC1A1\uAE08 \uCC98\uB9AC \uD6C4 PAID \uC804\uD658"},{reason:"\uB9C8\uC774\uB108\uC2A4 \uC815\uC0B0 (\uD658\uC218 \uB300\uAE30)",release:"\uB2E4\uC74C \uB2EC adj_amt \uC774\uC6D4\uB85C \uC790\uB3D9 \uC0C1\uACC4"}],Y={SETTLE_CLOSE:"#10b981",SETTLE_PAY:"#3b82f6",COMMISSION:"#f59e0b",REFUND_ADJ:"#ef4444"};return{handleBtnAction:B,handleSelectAction:F,activeTab:i,optSubTab:r,orderSubTab:p,settleSubTab:s,showExtHelp:j,TABS:n,OPT_SUB_TABS:b,STATUS_GROUPS:x,STATUS_LEGACY:f,STATUS_GRP_FIX:c,OPT_OVERVIEW_ROWS:g,OPT_CLOTHING_ROWS:y,OPT_SHOES_ROWS:v,OPT_ELEC_ROWS:m,OPT_SINGLE_ROWS:u,INPUT_TYPES:h,OVERVIEW_CARDS:_,PRODUCT_STEPS:E,PRODUCT_TABS:w,MEMBER_TABS_LIST:k,ORDER_STEPS:S,ORDER_STEP_DETAILS:T,ORDER_PARTIAL_SCENARIO:R,REFUND_ORDER_ROWS:z,RETURN_FEE_ROWS:C,COUPON_REFUND_ROWS:P,CLAIM_TYPES:D,PROMO_ITEMS:O,DISP_LEVELS:I,DISP_WIDGETS:A,SETTLE_STATUS_STEPS:L,SETTLE_CALC_ROWS:U,SETTLE_RAW_TYPES:M,SETTLE_POLICY_ROWS:G,SYS_ITEMS:N,RAW_TYPE_BASE_ROWS:H,ADJ_AMT_ROWS:W,HOLD_REASON_ROWS:V,ERP_VOUCHER_ROWS:[{type:"SETTLE_CLOSE",when:"\uC815\uC0B0 CLOSED \uC2DC",dr:"\uBBF8\uC9C0\uAE09\uAE08(\uBD80\uCC44)",cr:"\uB9E4\uC785\uCC44\uBB34 \uC815\uC0B0",amt:"final_settle_amt"},{type:"SETTLE_PAY",when:"\uC9C0\uAE09 PAID \uC2DC",dr:"\uBBF8\uC9C0\uAE09\uAE08 \uAC10\uC18C",cr:"\uBCF4\uD1B5\uC608\uAE08(\uC790\uC0B0)",amt:"pay_amt"},{type:"COMMISSION",when:"\uC815\uC0B0 CONFIRMED \uC2DC",dr:"\uC218\uC218\uB8CC\uC218\uC775(\uC218\uC775)",cr:"\uBBF8\uC9C0\uAE09\uAE08 \uAC10\uC18C",amt:"commission_amt"},{type:"REFUND_ADJ",when:"\uD658\uBD88 \uBC18\uC601 \uC2DC",dr:"\uBC18\uD488\uC190\uC2E4(\uBE44\uC6A9)",cr:"\uBBF8\uC9C0\uAE09\uAE08 \uC99D\uAC00",amt:"total_return_amt"}],productTabsColumns:[{key:"tab",label:"\uD0ED",style:"width:110px;",cellStyle:"font-weight:600;color:#333;white-space:nowrap;"},{key:"desc",label:"\uB0B4\uC6A9",cellStyle:"color:#555;"}],optOverviewColumns:[{key:"cat",label:"\uCE74\uD14C\uACE0\uB9AC",style:"width:120px;"},{key:"d1",label:"1\uB2E8",style:"width:80px;",align:"center"},{key:"d2",label:"2\uB2E8",style:"width:80px;",align:"center"},{key:"ex",label:"SKU \uC608\uC2DC",cellStyle:"color:#888;font-size:11px;"}],optSkuColumns:[{key:"d1",label:"1\uB2E8",align:"center"},{key:"d2",label:"2\uB2E8",align:"center"},{key:"sku",label:"\uC0DD\uC131\uB418\uB294 SKU",cellStyle:"font-weight:600;"}],optClothingColumns:[{key:"d1",label:"\uC0C9\uC0C1 (1\uB2E8)",align:"center"},{key:"d2",label:"\uC0AC\uC774\uC988 (2\uB2E8)",align:"center"},{key:"sku",label:"\uC0DD\uC131\uB418\uB294 SKU",cellStyle:"font-weight:600;"}],optShoesColumns:[{key:"d1",label:"\uC0AC\uC774\uC988 (1\uB2E8)",align:"center"},{key:"d2",label:"\uC0C9\uC0C1 (2\uB2E8)",align:"center"},{key:"sku",label:"\uC0DD\uC131\uB418\uB294 SKU",cellStyle:"font-weight:600;"}],optElecColumns:[{key:"d1",label:"\uC0C9\uC0C1 (1\uB2E8)",align:"center"},{key:"d2",label:"\uC6A9\uB7C9 (2\uB2E8/\uCEE4\uC2A4\uD140)",align:"center"},{key:"sku",label:"\uC0DD\uC131\uB418\uB294 SKU",cellStyle:"font-weight:600;"}],optSingleColumns:[{key:"cat",label:"\uCE74\uD14C\uACE0\uB9AC",style:"width:160px;",cellStyle:"font-size:11px;"},{key:"type",label:"\uC0AC\uC6A9 \uC720\uD615",style:"width:130px;"},{key:"ex",label:"\uC608\uC2DC \uAC12",cellStyle:"color:#888;"}],returnFeeColumns:[{key:"reason",label:"\uBC18\uD488 \uC0AC\uC720",cellStyle:"font-weight:600;"},{key:"buyer",label:"\uACE0\uAC1D",style:"width:70px;",align:"center",cellStyle:(e,t)=>t.buyer!=="-"?"color:#ef4444;font-weight:700;":""},{key:"seller",label:"\uD310\uB9E4\uC790",style:"width:70px;",align:"center",cellStyle:(e,t)=>t.seller==="100%"?"color:#3b82f6;font-weight:700;":""},{key:"note",label:"\uBE44\uACE0",cellStyle:"font-size:11px;color:#666;"}],rawTypeBaseColumns:[{key:"type",label:"\uC6D0\uC7A5 \uC720\uD615",style:"width:160px;"},{key:"col",label:"\uADC0\uC18D \uAE30\uC900 \uCEEC\uB7FC",cellStyle:"font-family:monospace;font-size:10px;"},{key:"desc",label:"\uC124\uBA85",cellStyle:"color:#555;"}],adjAdjColumns:[{key:"col",label:"\uC870\uC815 \uCEEC\uB7FC",style:"width:100px;",cellStyle:"font-family:monospace;font-size:11px;"},{key:"reason",label:"\uBC1C\uC0DD \uC6D0\uC778"},{key:"amt",label:"\uAE08\uC561 \uC608\uC2DC",style:"width:90px;",align:"right"},{key:"how",label:"\uCC98\uB9AC \uBC29\uC2DD",cellStyle:"color:#555;"}],holdReasonColumns:[{key:"reason",label:"\uBCF4\uB958 \uC0AC\uC720"},{key:"release",label:"\uD574\uC81C \uC870\uAC74",cellStyle:"color:#555;"}],erpVoucherColumns:[{key:"type",label:"voucher_type_cd",style:"width:150px;",badge:e=>({text:e.type,style:"background:"+(Y[e.type]||"#666")+";color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;"})},{key:"when",label:"\uBC1C\uC0DD \uC2DC\uC810",cellStyle:"color:#555;"},{key:"dr",label:"\uCC28\uBCC0(DR)",cellStyle:"color:#555;"},{key:"cr",label:"\uB300\uBCC0(CR)",cellStyle:"color:#555;"},{key:"amt",label:"\uAE08\uC561",align:"right",cellStyle:"font-family:monospace;font-size:11px;color:#374151;"}]}},template:`
<!-- ===== \u25A0. \uBAA8\uB2EC ====================================================== -->
<bo-modal :show="show" width="960px" max-width="98vw" height="92vh" max-height="92vh"
  box-pad="0" body-pad="0" :z-index="3000" @close="handleBtnAction('modal-close')">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="background:#fff;border-radius:14px;height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <!-- ===== \u25A0.\u25A0. \uD5E4\uB354 ==================================================== -->
    <div style="background:linear-gradient(135deg,#fff0f4,#ffe4ec,#ffd5e1);padding:12px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;border-bottom:1px solid #ffc9d6;">
      <div style="font-size:15px;font-weight:800;color:#9f2946;">
        <span style="color:#e8587a;font-size:9px;margin-right:6px;">
          \u25CF
        </span>
        \uB3C4\uC6C0\uB9D0 \uAC00\uC774\uB4DC
      </div>
      <button @click="handleBtnAction('modal-close')" style="width:28px;height:28px;border-radius:50%;border:none;background:rgba(255,255,255,0.6);color:#9f2946;font-size:14px;cursor:pointer;">
        \u2715
      </button>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD5E4\uB354 ==================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBC14\uB514 ==================================================== -->
    <div style="flex:1;display:flex;overflow:hidden;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC88C\uCE21 \uD0ED ================================================ -->
      <div style="width:176px;flex-shrink:0;background:#f7f8fa;border-right:1px solid #efe0e5;display:flex;flex-direction:column;padding:12px 0;overflow-y:auto;">
        <button v-for="t in TABS" :key="t.id" @click="handleSelectAction('tab-select', t.id)"
          :style="activeTab===t.id
          ? 'display:block;width:100%;text-align:left;padding:9px 16px;font-size:12px;font-weight:700;color:#e8587a;background:#fff;border:none;border-right:3px solid #e8587a;cursor:pointer;line-height:1.4;'
          : 'display:block;width:100%;text-align:left;padding:9px 16px;font-size:12px;font-weight:400;color:#666;background:transparent;border:none;border-right:3px solid transparent;cursor:pointer;line-height:1.4;'">
          {{ t.label }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC6B0\uCE21 \uCF58\uD150\uCE20 ============================================== -->
      <div style="flex:1;overflow-y:auto;padding:24px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uAC1C\uC694 ================================================ -->
        <template v-if="activeTab==='overview'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 12px;">
            ShopJoy \uAD00\uB9AC\uC790 \uC2DC\uC2A4\uD15C \uAC1C\uC694
          </h3>
          <p style="color:#555;font-size:13px;line-height:1.8;margin-bottom:16px;">
            ShopJoy BO\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uD1B5\uD569 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC785\uB2C8\uB2E4. \uC88C\uCE21 \uBA54\uB274\uC5D0\uC11C \uB3C4\uBA54\uC778\uC744 \uC120\uD0DD\uD558\uACE0, \uC0C1\uB2E8 \uD0ED\uC5D0\uC11C \uC5F4\uB9B0 \uD654\uBA74\uB4E4\uC744 \uC804\uD658\uD569\uB2C8\uB2E4.
          </p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;">
            <div v-for="item in OVERVIEW_CARDS" :key="item.tab"
              @click="handleSelectAction('tab-select', item.tab)"
              style="border:1px solid #e8f0ff;border-radius:10px;padding:14px;background:#f8fbff;cursor:pointer;">
              <div style="font-size:22px;margin-bottom:6px;">
                {{ item.icon }}
              </div>
              <div style="font-weight:700;color:#1677ff;font-size:13px;margin-bottom:4px;">
                {{ item.title }}
              </div>
              <div style="font-size:11px;color:#666;line-height:1.5;">
                {{ item.desc }}
              </div>
            </div>
          </div>
          <div style="background:#fffbe6;border:1px solid #ffe58f;border-radius:8px;padding:12px 16px;font-size:12px;color:#7c5500;">
            \uAC01 \uD0ED\uC744 \uD074\uB9AD\uD558\uBA74 \uD574\uB2F9 \uB3C4\uBA54\uC778\uC758 \uC0C1\uC138 \uB3C4\uC6C0\uB9D0\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
          </div>
          <div style="margin-top:12px;border:1px solid #c8e6ff;border-radius:8px;padding:12px 16px;background:#e8f4ff;display:flex;align-items:center;justify-content:space-between;gap:12px;">
            <div>
              <div style="font-size:13px;font-weight:700;color:#0958d9;margin-bottom:3px;">
                \u{1F517} \uC678\uBD80\uC5F0\uB3D9 \uC124\uC815 \uB3C4\uC6C0\uB9D0
              </div>
              <div style="font-size:11px;color:#4a6fa5;line-height:1.5;">
                \uC18C\uC15C\uB85C\uADF8\uC778(Google \xB7 Kakao \xB7 Naver), \uACB0\uC81C(Toss), \uC9C0\uB3C4(Kakao) API \uD0A4 \uBC1C\uAE09 \uBC0F \uC124\uC815 \uC548\uB0B4
              </div>
            </div>
            <button class="btn" @click="showExtHelp=true"
              style="white-space:nowrap;font-size:12px;background:#1677ff;color:#fff;border:none;border-radius:6px;padding:6px 14px;cursor:pointer;flex-shrink:0;">
              \uC124\uC815 \uC548\uB0B4 \uBCF4\uAE30 \u2192
            </button>
          </div>
          <!-- \uC678\uBD80\uC5F0\uB3D9 \uC124\uC815 \uB3C4\uC6C0\uB9D0 \uBAA8\uB2EC (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC) -->
          <co-ext-help-modal v-if="showExtHelp" :show="showExtHelp" @close="showExtHelp=false" />
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0\uAD00\uB9AC ============================================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <template v-else-if="activeTab==='member'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 16px;">
            \u{1F464} \uD68C\uC6D0\uAD00\uB9AC
          </h3>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                \uD68C\uC6D0\uAD00\uB9AC \uAE30\uB2A5
              </div>
              <div style="font-size:12px;color:#555;line-height:1.8;">
                <div>
                  \u2022 \uC804\uCCB4 \uD68C\uC6D0 \uBAA9\uB85D \uC870\uD68C (\uC774\uB984, \uC774\uBA54\uC77C, \uC804\uD654\uBC88\uD638, \uC0C1\uD0DC \uAC80\uC0C9)
                </div>
                <div>
                  \u2022 \uD68C\uC6D0 \uC0C1\uD0DC:
                  <span style="background:#d1fae5;color:#065f46;border-radius:3px;padding:1px 6px;">
                    \uD65C\uC131
                  </span>
                  <span style="background:#fee2e2;color:#991b1b;border-radius:3px;padding:1px 6px;margin-left:4px;">
                    \uC815\uC9C0
                  </span>
                  <span style="background:#f3f4f6;color:#374151;border-radius:3px;padding:1px 6px;margin-left:4px;">
                    \uD0C8\uD1F4
                  </span>
                </div>
                <div>
                  \u2022 \uD589 \uD074\uB9AD - \uC0C1\uC138(Dtl) \uC778\uB77C\uC778 \uC784\uBCA0\uB4DC
                </div>
              </div>
            </div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                \uD68C\uC6D0 \uC0C1\uC138 \uD0ED \uAD6C\uC131
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;font-size:11px;">
                <span v-for="t in MEMBER_TABS_LIST" :key="t"
                  style="background:#e6f4ff;border:1px solid #bae0ff;border-radius:4px;padding:3px 8px;color:#0958d9;">
                  {{ t }}
                </span>
              </div>
            </div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                \uB4F1\uAE09/\uADF8\uB8F9
              </div>
              <div style="font-size:12px;color:#555;line-height:1.8;">
                <div>
                  \u2022
                  <b>
                    \uD68C\uC6D0\uB4F1\uAE09
                  </b>
                  : \uAD6C\uB9E4\uAE08\uC561, \uD69F\uC218 \uAE30\uC900 \uC790\uB3D9 \uC2B9\uAE09 \uC870\uAC74 \uC124\uC815
                </div>
                <div>
                  \u2022
                  <b>
                    \uD68C\uC6D0\uADF8\uB8F9
                  </b>
                  : \uC218\uB3D9 \uBD84\uB958 (\uC608: VIP\uACE0\uAC1D, \uC784\uC9C1\uC6D0, \uBE14\uB799\uB9AC\uC2A4\uD2B8)
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488\uAD00\uB9AC ============================================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <template v-else-if="activeTab==='product'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 16px;">
            \u{1F4E6} \uC0C1\uD488\uAD00\uB9AC
          </h3>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                \uC0C1\uD488 \uB4F1\uB85D \uD750\uB984
              </div>
              <div style="display:flex;align-items:center;gap:6px;font-size:12px;flex-wrap:wrap;">
                <template v-for="(step,i) in PRODUCT_STEPS" :key="step">
                  <span style="background:#1677ff;color:#fff;border-radius:4px;padding:3px 8px;">
                    {{ step }}
                  </span>
                  <span v-if="i < PRODUCT_STEPS.length-1" style="color:#ccc;font-size:11px;">
                    -&gt;
                  </span>
                </template>
              </div>
            </div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                \uC0C1\uD488 \uC0C1\uC138 \uD0ED
              </div>
              <bo-grid bare :columns="productTabsColumns" :rows="PRODUCT_TABS" row-key="tab" style="font-size:12px;" />
            </div>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC635\uC158\uC124\uC815 ============================================== -->
        <template v-else-if="activeTab==='prodOpt'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 4px;">
            \u2699 \uC635\uC158\uC124\uC815 \uC0C1\uC138 \uAC00\uC774\uB4DC
          </h3>
          <p style="font-size:12px;color:#888;margin:0 0 16px;">
            \uC0C1\uD488 \uC0C1\uC138 &gt; \uC635\uC158\uC124\uC815 \uD0ED
          </p>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED \uBC84\uD2BC ========================================== -->
          <div style="display:flex;gap:4px;margin-bottom:16px;flex-wrap:wrap;">
            <button v-for="st in OPT_SUB_TABS" :key="st.id" @click="handleSelectAction('optSubTab-select', st.id)"
              :style="optSubTab===st.id
              ? 'padding:5px 12px;font-size:11px;border:1px solid #1677ff;border-radius:6px;cursor:pointer;background:#e6f4ff;color:#1677ff;font-weight:700;'
              : 'padding:5px 12px;font-size:11px;border:1px solid #e0e0e0;border-radius:6px;cursor:pointer;background:#f5f5f5;color:#555;'">
              {{ st.label }}
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uAC1C\uC694 ========================================= -->
          <template v-if="optSubTab==='basic'">
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                  \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uC635\uC158 \uCC28\uC6D0 \uAD6C\uC131
                </div>
                <bo-grid bare :columns="optOverviewColumns" :rows="OPT_OVERVIEW_ROWS" row-key="cat" style="font-size:12px;" />
              </div>
              <div style="border:1px solid #b7eb8f;border-radius:8px;padding:14px;background:#f6ffed;">
                <div style="font-weight:700;color:#389e0d;margin-bottom:8px;font-size:13px;">
                  \uC785\uB825 \uBC29\uC2DD \uC694\uC57D
                </div>
                <div style="font-size:12px;line-height:2;">
                  <b style="color:#1677ff;">
                    SELECT
                  </b>
                  \u2014 \uB4DC\uB86D\uB2E4\uC6B4 1\uAC1C \uC120\uD0DD (\uAC00\uC7A5 \uC77C\uBC18\uC801)
                </div>
                <div style="font-size:12px;line-height:2;">
                  <b style="color:#fa8c16;">
                    SELECT_INPUT
                  </b>
                  \u2014 \uB4DC\uB86D\uB2E4\uC6B4 \uB610\uB294 \uC9C1\uC811 \uD0C0\uC774\uD551
                </div>
                <div style="font-size:12px;line-height:2;">
                  <b style="color:#52c41a;">
                    MULTI_SELECT
                  </b>
                  \u2014 \uC5EC\uB7EC \uD56D\uBAA9 \uB3D9\uC2DC \uC120\uD0DD
                </div>
              </div>
              <div style="border:1px solid #ffe58f;border-radius:8px;padding:12px;background:#fffbe6;font-size:12px;color:#7c5500;">
                \uC0C1\uC138 \uC608\uC2DC\uB294 \uC704 \uD0ED(\uC758\uB958, \uC2E0\uBC1C, \uC804\uC790\uAE30\uAE30 \uB4F1)\uC744 \uD074\uB9AD\uD558\uC138\uC694.
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uC758\uB958 ========================================= -->
          <template v-else-if="optSubTab==='clothing'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:4px;font-size:13px;">
                  \u{1F457} \uC758\uB958 \u2014 \uC0C9\uC0C1(1\uB2E8) x \uC0AC\uC774\uC988(2\uB2E8)
                </div>
                <div style="font-size:11px;color:#888;margin-bottom:10px;">
                  \uCE74\uD14C\uACE0\uB9AC: CLOTHING
                </div>
                <bo-grid bare :columns="optClothingColumns" :rows="OPT_CLOTHING_ROWS" row-key="sku" style="font-size:12px;" />
              </div>
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;font-size:12px;line-height:1.9;">
                <div style="font-weight:700;margin-bottom:6px;">
                  \uC124\uC815 \uBC29\uBC95
                </div>
                <div>
                  1. \uCE74\uD14C\uACE0\uB9AC: \uC758\uB958 (\uC0C9\uC0C1+\uC0AC\uC774\uC988) \uC120\uD0DD
                </div>
                <div>
                  2. 1\uB2E8 \uAC12 \uCD94\uAC00: \uBE14\uB799, \uD654\uC774\uD2B8, \uB808\uB4DC \uB4F1 \uC0C9\uC0C1 \uC785\uB825
                </div>
                <div>
                  3. 2\uB2E8 \uAC12 \uCD94\uAC00: S, M, L, XL \uB4F1 \uC0AC\uC774\uC988 \uC785\uB825
                </div>
                <div>
                  4. \uC800\uC7A5 \uC2DC \uC0C9\uC0C1x\uC0AC\uC774\uC988 \uC870\uD569\uC73C\uB85C SKU \uC790\uB3D9 \uC0DD\uC131
                </div>
                <div>
                  5. \uAC01 SKU\uBCC4 \uCD94\uAC00\uAE08\uC561, \uC7AC\uACE0 \uC124\uC815 \uAC00\uB2A5
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uC2E0\uBC1C ========================================= -->
          <template v-else-if="optSubTab==='shoes'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:4px;font-size:13px;">
                  \u{1F45F} \uC2E0\uBC1C \u2014 \uC0AC\uC774\uC988(1\uB2E8) x \uC0C9\uC0C1(2\uB2E8)
                </div>
                <div style="font-size:11px;color:#888;margin-bottom:10px;">
                  \uCE74\uD14C\uACE0\uB9AC: SHOES
                </div>
                <bo-grid bare :columns="optShoesColumns" :rows="OPT_SHOES_ROWS" row-key="sku" style="font-size:12px;" />
              </div>
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;font-size:12px;line-height:1.9;">
                <div style="font-weight:700;margin-bottom:6px;">
                  \uC124\uC815 \uBC29\uBC95
                </div>
                <div>
                  1. \uCE74\uD14C\uACE0\uB9AC: \uC2E0\uBC1C (\uC0AC\uC774\uC988+\uC0C9\uC0C1) \uC120\uD0DD
                </div>
                <div>
                  2. 1\uB2E8 \uAC12 \uCD94\uAC00: 250, 255, 260, 265, 270 \uB4F1 \uC0AC\uC774\uC988 \uC785\uB825
                </div>
                <div>
                  3. 2\uB2E8 \uAC12 \uCD94\uAC00: \uBE14\uB799, \uD654\uC774\uD2B8, \uB124\uC774\uBE44 \uB4F1 \uC0C9\uC0C1 \uC785\uB825
                </div>
                <div>
                  4. \uC758\uB958\uC640 \uB2EC\uB9AC \uC0AC\uC774\uC988\uAC00 \uAE30\uC900 \uCC28\uC6D0(1\uB2E8)\uC774 \uB428
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uC804\uC790\uAE30\uAE30 ======================================= -->
          <template v-else-if="optSubTab==='elec'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:4px;font-size:13px;">
                  \u{1F4BB} \uC804\uC790\uAE30\uAE30 \u2014 \uC0C9\uC0C1(1\uB2E8) x \uC800\uC7A5\uC6A9\uB7C9(2\uB2E8)
                </div>
                <div style="font-size:11px;color:#888;margin-bottom:10px;">
                  \uCE74\uD14C\uACE0\uB9AC: \uC0C9\uC0C1+\uCEE4\uC2A4\uD140 (CUSTOM_GRP)
                </div>
                <bo-grid bare :columns="optElecColumns" :rows="OPT_ELEC_ROWS" row-key="sku" style="font-size:12px;" />
              </div>
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;font-size:12px;line-height:1.9;">
                <div style="font-weight:700;margin-bottom:6px;">
                  \uC124\uC815 \uBC29\uBC95
                </div>
                <div>
                  1. \uCE74\uD14C\uACE0\uB9AC: \uC0C9\uC0C1+\uCEE4\uC2A4\uD140 \uC120\uD0DD
                </div>
                <div>
                  2. 1\uB2E8(\uC0C9\uC0C1) \uAC12: \uBE14\uB799, \uC2E4\uBC84, \uACE8\uB4DC \uB4F1 \uC0C9\uC0C1 \uC785\uB825
                </div>
                <div>
                  3. 2\uB2E8(\uCEE4\uC2A4\uD140) \uAC12: 128GB, 256GB, 512GB \uC9C1\uC811 \uC785\uB825
                </div>
                <div>
                  4. \uCEE4\uC2A4\uD140\uC740 \uC0AC\uC804 \uC815\uC758 \uC5C6\uC774 \uC790\uC720 \uD14D\uC2A4\uD2B8 \uC785\uB825 \uAC00\uB2A5
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uB2E8\uB3C5 \uC635\uC158 ====================================== -->
          <template v-else-if="optSubTab==='single'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                  \uB2E8\uB3C5 \uC635\uC158 \u2014 1\uCC28\uC6D0\uB9CC \uC0AC\uC6A9
                </div>
                <bo-grid bare :columns="optSingleColumns" :rows="OPT_SINGLE_ROWS" row-key="cat" style="font-size:12px;" />
              </div>
              <div style="border:1px solid #ffe58f;border-radius:8px;padding:12px;background:#fffbe6;font-size:12px;color:#7c5500;line-height:1.8;">
                \uB2E8\uB3C5 \uC635\uC158\uC740 2\uB2E8 \uCC28\uC6D0 \uC5C6\uC774 1\uCC28\uC6D0 SKU\uB9CC \uC0DD\uC131\uB429\uB2C8\uB2E4.
                <br>
                \uC608) \uC0C9\uC0C1 \uB2E8\uB3C5\uC5D0\uC11C \uBE14\uB799, \uD654\uC774\uD2B8, \uB808\uB4DC \uC785\uB825 \uC2DC SKU 3\uAC1C \uC0DD\uC131
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED: \uC785\uB825 \uBC29\uC2DD ====================================== -->
          <template v-else-if="optSubTab==='inputtype'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div v-for="item in INPUT_TYPES" :key="item.type"
                :style="'border:1px solid '+item.border+';border-radius:8px;padding:14px;background:'+item.bg+';'">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ===================================== -->
                <div :style="'font-weight:700;color:'+item.color+';margin-bottom:6px;font-size:13px;'">
                  {{ item.title }}
                </div>
                <div style="font-size:12px;line-height:1.8;">
                  <div style="margin-bottom:4px;">
                    {{ item.desc }}
                  </div>
                  <div>
                    <b>
                      \uC0AC\uC6A9 \uC2DC\uC810:
                    </b>
                    {{ item.when }}
                  </div>
                  <div>
                    <b>
                      \uC608\uC2DC:
                    </b>
                    {{ item.ex }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uBB38\uAD00\uB9AC ============================================== -->
        <template v-else-if="activeTab==='order'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 4px;">
            \u{1F6D2} \uC8FC\uBB38\uAD00\uB9AC
          </h3>
          <p style="font-size:12px;color:#888;margin:0 0 12px;">
            \uC8FC\uBB38\uC811\uC218\uBD80\uD130 \uAD6C\uB9E4\uD655\uC815\uAE4C\uC9C0. \uC0C1\uD488(order_item) \uB2E8\uC704 \uBD80\uBD84\uCC98\uB9AC \uC9C0\uC6D0.
          </p>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C\uD0ED ============================================= -->
          <div style="display:flex;gap:4px;margin-bottom:16px;flex-wrap:wrap;">
            <button v-for="st in [{id:'lifecycle',label:'\uB77C\uC774\uD504\uC0AC\uC774\uD074 \uC6D0\uCE59'},{id:'flow',label:'\uC0C1\uD0DC \uD750\uB984'},{id:'partial',label:'\uBD80\uBD84\uCC98\uB9AC/\uAD6C\uB9E4\uD655\uC815'},{id:'refund',label:'\uD658\uBD88 \uC21C\uC11C'},{id:'bulk',label:'\uC77C\uAD04 \uC791\uC5C5'}]"
              :key="st.id" @click="handleSelectAction('orderSubTab-select', st.id)"
              :style="orderSubTab===st.id
              ? 'padding:5px 12px;font-size:11px;border:1px solid #1677ff;border-radius:6px;cursor:pointer;background:#e6f4ff;color:#1677ff;font-weight:700;'
              : 'padding:5px 12px;font-size:11px;border:1px solid #e0e0e0;border-radius:6px;cursor:pointer;background:#f5f5f5;color:#555;'">
              {{ st.label }}
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uC6D0\uCE59 ================================== -->
          <template v-if="orderSubTab==='lifecycle'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <!-- \uC774\uC911 \uB808\uBCA8 \uAD6C\uC870 \uAC1C\uC694 -->
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:16px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:10px;font-size:13px;">
                  \uC8FC\uBB38 \uB77C\uC774\uD504\uC0AC\uC774\uD074 \u2014 \uC774\uC911 \uB808\uBCA8 \uAD6C\uC870
                </div>
                <div style="display:flex;flex-direction:column;gap:8px;font-size:12px;color:#333;">
                  <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #d9eaff;border-radius:6px;">
                    <div style="flex-shrink:0;width:120px;font-weight:700;color:#1d4ed8;">
                      od_order_item
                    </div>
                    <div style="flex:1;line-height:1.7;">
                      <b>\uC2E4\uC81C \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uAE30\uC900 (Source of Truth)</b><br>
                      order_item_status_cd \uAC00 \uC0C1\uD488\uBCC4 \uC2E4\uC81C \uCC98\uB9AC \uC0C1\uD0DC\uB97C \uCD94\uC801.<br>
                      \uBD80\uBD84\uBC30\uC1A1\xB7\uBD80\uBD84\uCDE8\uC18C\xB7\uBD80\uBD84\uBC18\uD488 \uB4F1 item \uB2E8\uC704 \uB3C5\uB9BD \uCC98\uB9AC\uAC00 \uAC00\uB2A5.
                    </div>
                  </div>
                  <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #d9eaff;border-radius:6px;">
                    <div style="flex-shrink:0;width:120px;font-weight:700;color:#6b7280;">
                      od_order
                    </div>
                    <div style="flex:1;line-height:1.7;">
                      <b>\uC9D1\uACC4 \uC694\uC57D \uC0C1\uD0DC (\uBE60\uB978 \uC870\uD68C\xB7\uD544\uD130\uC6A9)</b><br>
                      order_status_cd \uB294 \uD65C\uC131 order_item \uC0C1\uD0DC\uB4E4\uC744 \uC9D1\uACC4\uD55C \uC694\uC57D\uAC12.<br>
                      \uBAA9\uB85D \uAC80\uC0C9\xB7\uD1B5\uACC4\xB7\uC54C\uB9BC\uC5D0\uC11C \uC804\uCCB4 \uC8FC\uBB38 \uC0C1\uD0DC\uB97C \uD55C \uBC88\uC5D0 \uD30C\uC545\uD558\uB294 \uC6A9\uB3C4.
                    </div>
                  </div>
                  <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #d9eaff;border-radius:6px;">
                    <div style="flex-shrink:0;width:120px;font-weight:700;color:#b45309;">
                      od_claim_item
                    </div>
                    <div style="flex:1;line-height:1.7;">
                      <b>\uD074\uB808\uC784 \uC0C1\uD0DC \u2014 order_item\uACFC \uB3C5\uB9BD \uACF5\uC874</b><br>
                      \uD074\uB808\uC784 \uC9C4\uD589 \uC911\uC774\uC5B4\uB3C4 order_item_status_cd \uB294 \uADF8\uB300\uB85C \uC720\uC9C0\uB428.<br>
                      claim_item_status_cd \uAC00 \uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658 \uD750\uB984\uC744 \uB3C5\uB9BD \uCD94\uC801.
                    </div>
                  </div>
                </div>
              </div>
              <!-- \uC0C1\uD0DC \uC9D1\uACC4 \uADDC\uCE59 -->
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:16px;background:#fafafa;">
                <div style="font-weight:700;color:#333;margin-bottom:10px;font-size:13px;">
                  order_status_cd \uC9D1\uACC4 \uADDC\uCE59
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;">
                  <div v-for="rule in [
                    {cond:'\uBAA8\uB4E0 item\uC774 CONFIRMED', result:'COMPLT', color:'#10b981'},
                    {cond:'1\uAC1C \uC774\uC0C1 item\uC774 SHIPPING (\uB098\uBA38\uC9C0 DELIVERED/CONFIRMED)', result:'SHIPPED', color:'#8b5cf6'},
                    {cond:'1\uAC1C \uC774\uC0C1 item\uC774 PREPARING', result:'PREPARING', color:'#f59e0b'},
                    {cond:'\uBAA8\uB4E0 item\uC774 CANCELLED', result:'CANCELLED', color:'#9ca3af'},
                    {cond:'\uBAA8\uB4E0 item\uC774 cancel_qty=order_qty (\uCDE8\uC18C+\uBC18\uD488 \uC644\uB8CC)', result:'RETURNED/CANCELLED', color:'#6b7280'},
                  ]" :key="rule.result"
                  style="display:flex;gap:10px;align-items:center;padding:8px 12px;background:#fff;border:1px solid #e8e8e8;border-radius:6px;font-size:12px;">
                    <span style="flex:1;color:#444;">
                      {{ rule.cond }}
                    </span>
                    <span style="flex-shrink:0;font-size:10px;">\u2192</span>
                    <span :style="'flex-shrink:0;background:'+rule.color+';color:#fff;border-radius:3px;padding:2px 8px;font-size:10px;font-weight:700;'">
                      {{ rule.result }}
                    </span>
                  </div>
                </div>
                <div style="margin-top:8px;font-size:11px;color:#888;line-height:1.7;padding:8px 10px;background:#f0f0f0;border-radius:6px;">
                  * \uBD80\uBD84\uCDE8\uC18C/\uBD80\uBD84\uBC18\uD488 \uC9C4\uD589 \uC911: \uCDE8\uC18C\uB418\uC9C0 \uC54A\uC740 \uD65C\uC131 item \uC911 \uAC00\uC7A5 \uC55E\uC120 \uC0C1\uD0DC\uB97C order_status_cd\uC5D0 \uBC18\uC601<br>
                  \uC608) 3\uAC1C \uC911 1\uAC1C \uBC18\uD488 \uC911 \u2192 \uB098\uBA38\uC9C0 2\uAC1C\uAC00 SHIPPED \u2192 order_status_cd = SHIPPED
                </div>
              </div>
              <!-- item \uC0C1\uD0DC\uC640 claim \uC0C1\uD0DC \uACF5\uC874 \uB2E4\uC774\uC5B4\uADF8\uB7A8 -->
              <div style="border:1px solid #d1fae5;border-radius:8px;padding:16px;background:#f0fdf4;">
                <div style="font-weight:700;color:#059669;margin-bottom:10px;font-size:13px;">
                  order_item + claim_item \uC0C1\uD0DC \uACF5\uC874 \uC608\uC2DC
                </div>
                <div style="font-size:11px;color:#555;margin-bottom:10px;line-height:1.6;">
                  \uC8FC\uBB38 \uC218\uB7C9 3\uAC1C \uC911 1\uAC1C \uBC18\uD488 \uC2E0\uCCAD \uC2DC \u2014 \uB450 \uC0C1\uD0DC\uAC00 \uB3D9\uC2DC\uC5D0 \uB3C5\uB9BD \uC874\uC7AC:
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;font-size:12px;">
                  <div style="padding:10px 12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;line-height:1.8;">
                    <div style="font-weight:700;color:#059669;margin-bottom:4px;">od_order_item</div>
                    <div>order_item_status_cd = <b style="color:#10b981">DELIVERED</b> <span style="color:#888;font-size:10px;">(\uC8FC\uBB38 \uD750\uB984 \u2014 \uADF8\uB300\uB85C \uC720\uC9C0)</span></div>
                    <div>order_qty = 3, cancel_qty = 0</div>
                    <div style="font-size:10px;color:#888;">\u2192 \uBC18\uD488 \uC644\uB8CC \uD6C4: cancel_qty = 1, item_cancel_amt += \uBC18\uD488\uAE08\uC561</div>
                  </div>
                  <div style="text-align:center;color:#aaa;font-size:11px;">
                    \u2195 order_item_id (FK) \uC5F0\uACB0
                  </div>
                  <div style="padding:10px 12px;background:#fff;border:1px solid #fed7aa;border-radius:6px;line-height:1.8;">
                    <div style="font-weight:700;color:#f97316;margin-bottom:4px;">od_claim_item</div>
                    <div>claim_item_status_cd = <b style="color:#f97316">IN_PICKUP</b> <span style="color:#888;font-size:10px;">(\uD074\uB808\uC784 \uD750\uB984 \u2014 \uB3C5\uB9BD \uC9C4\uD589)</span></div>
                    <div>claim_qty = 1, claim_type_cd = RETURN</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC0C1\uD0DC \uD750\uB984 ======================================= -->
          <template v-else-if="orderSubTab==='flow'">
            <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;margin-bottom:12px;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:10px;font-size:13px;">
                \uC8FC\uBB38 \uC0C1\uD0DC \uD750\uB984
              </div>
              <div style="display:flex;align-items:center;gap:4px;font-size:11px;flex-wrap:wrap;margin-bottom:6px;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
                <template v-for="(s,i) in ORDER_STEPS" :key="s">
                  <span style="background:#1677ff;color:#fff;border-radius:4px;padding:3px 8px;">
                    {{ s }}
                  </span>
                  <span v-if="i < ORDER_STEPS.length-1" style="color:#bbb;">
                    -&gt;
                  </span>
                </template>
              </div>
              <div style="font-size:11px;color:#888;">
                * \uC8FC\uBB38 \uC804\uCCB4 \uC0C1\uD0DC\uB294 \uD65C\uC131 \uC0C1\uD488(\uBBF8\uCDE8\uC18C) \uC911 \uAC00\uC7A5 \uC55E\uC120 \uC0C1\uD0DC\uB85C \uC9D1\uACC4
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div v-for="sd in ORDER_STEP_DETAILS" :key="sd.step"
                style="border:1px solid #e8e8e8;border-radius:8px;padding:10px 14px;background:#fff;display:flex;gap:12px;align-items:flex-start;">
                <div style="flex-shrink:0;min-width:68px;">
                  <span :style="'display:inline-block;background:'+sd.color+';color:#fff;border-radius:4px;padding:2px 8px;font-size:11px;font-weight:700;text-align:center;width:100%;'">
                    {{ sd.step }}
                  </span>
                </div>
                <div style="flex:1;">
                  <div style="font-size:12px;color:#333;line-height:1.7;">
                    {{ sd.desc }}
                  </div>
                  <div style="font-size:11px;color:#1677ff;margin-top:2px;">
                    \u25B6 {{ sd.action }}
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uBD80\uBD84\uCC98\uB9AC/\uAD6C\uB9E4\uD655\uC815 =================================== -->
          <template v-else-if="orderSubTab==='partial'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD575\uC2EC \uC6D0\uCE59 ======================================= -->
              <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
                <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
                  \uD575\uC2EC \uC6D0\uCE59
                </div>
                <div style="font-size:12px;color:#333;line-height:2;">
                  <div>
                    \u2022 \uD074\uB808\uC784\uC740
                    <b>
                      \uC0C1\uD488(order_item) \uB2E8\uC704
                    </b>
                    \uB85C \uB3C5\uB9BD \uCC98\uB9AC \u2014 \uAC19\uC740 \uC8FC\uBB38\uC758 \uB2E4\uB978 \uC0C1\uD488\uC740 \uC601\uD5A5 \uC5C6\uC74C
                  </div>
                  <div>
                    \u2022 \uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658\uC740
                    <b>
                      \uC218\uB7C9 \uB2E8\uC704
                    </b>
                    \uB85C\uB3C4 \uBD80\uBD84 \uC2E0\uCCAD \uAC00\uB2A5 (\uC608: 3\uAC1C \uC911 1\uAC1C\uB9CC \uBC18\uD488)
                  </div>
                  <div>
                    \u2022
                    <b>
                      \uAD6C\uB9E4\uD655\uC815
                    </b>
                    \uC740 \uC0C1\uD488 \uB2E8\uC704\uB85C \uAC1C\uBCC4 \uCC98\uB9AC (\uBC30\uC1A1\uC644\uB8CC \uD6C4 7\uC77C \uACBD\uACFC \uC2DC \uC790\uB3D9 \uD655\uC815)
                  </div>
                  <div>
                    \u2022 \uD074\uB808\uC784 \uC9C4\uD589 \uC911\uC778 \uC0C1\uD488\uC740 \uC790\uB3D9 \uD655\uC815 \uD0C0\uC774\uBA38
                    <b>
                      \uBCF4\uB958
                    </b>
                    \u2192 \uD074\uB808\uC784 \uC885\uACB0 \uD6C4 \uC7AC\uC0B0\uC815
                  </div>
                  <div>
                    \u2022 \uC8FC\uBB38 \uC804\uCCB4 \uC0C1\uD0DC\uB294
                    <b>
                      \uCDE8\uC18C\uB418\uC9C0 \uC54A\uC740 \uD65C\uC131 \uC0C1\uD488
                    </b>
                    \uB4E4\uC758 \uC0C1\uD0DC \uC911 \uAC00\uC7A5 \uC55E\uC120 \uAC12\uC73C\uB85C \uC9D1\uACC4
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2DC\uB098\uB9AC\uC624 ======================================== -->
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
                <div style="font-weight:700;color:#333;margin-bottom:4px;font-size:13px;">
                  \uC2DC\uB098\uB9AC\uC624: \uC0C1\uD488 3\uAC1C \uC8FC\uBB38 \u2014 1\uAC1C \uCDE8\uC18C, 1\uAC1C \uBC18\uD488\uC9C4\uD589\uC911, 1\uAC1C \uC815\uC0C1\uC644\uB8CC
                </div>
                <div style="font-size:11px;color:#888;margin-bottom:10px;">
                  \uC8FC\uBB38 \uC804\uCCB4 \uC0C1\uD0DC = \uD65C\uC131 \uC0C1\uD488(B,C) \uC911 \uAC00\uC7A5 \uC55E\uC120 \uC0C1\uD0DC = \uBC30\uC1A1\uC644\uB8CC
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
                <div style="display:flex;flex-direction:column;gap:8px;">
                  <div v-for="sc in ORDER_PARTIAL_SCENARIO" :key="sc.item"
                    style="border:1px solid #e8e8e8;border-radius:6px;padding:10px 12px;background:#fff;display:flex;gap:10px;align-items:flex-start;">
                    <div style="flex-shrink:0;width:60px;font-weight:700;font-size:12px;color:#333;">
                      {{ sc.item }}
                    </div>
                    <div style="flex:1;">
                      <div style="display:flex;gap:6px;align-items:center;margin-bottom:4px;flex-wrap:wrap;">
                        <span :style="'background:'+sc.color+';color:#fff;border-radius:3px;padding:1px 7px;font-size:10px;font-weight:700;'">
                          \uC8FC\uBB38: {{ sc.status }}
                        </span>
                        <span :style="'background:'+sc.claimColor+';color:#fff;border-radius:3px;padding:1px 7px;font-size:10px;font-weight:700;'">
                          \uD074\uB808\uC784: {{ sc.claimStatus }}
                        </span>
                      </div>
                      <div style="font-size:11px;color:#555;line-height:1.6;">
                        {{ sc.desc }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAD6C\uB9E4\uD655\uC815 \uC0C1\uC138 ===================================== -->
              <div style="border:1px solid #d9f0e7;border-radius:8px;padding:14px;background:#f0fdf4;">
                <div style="font-weight:700;color:#059669;margin-bottom:8px;font-size:13px;">
                  \uAD6C\uB9E4\uD655\uC815 \uCC98\uB9AC \uBC29\uC2DD
                </div>
                <div style="font-size:12px;color:#333;line-height:2;">
                  <div>
                    \u2022
                    <b>
                      \uC218\uB3D9 \uD655\uC815
                    </b>
                    : \uACE0\uAC1D\uC774 \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uC0C1\uD488\uBCC4 "\uAD6C\uB9E4\uD655\uC815" \uBC84\uD2BC \uD074\uB9AD
                  </div>
                  <div>
                    \u2022
                    <b>
                      \uC790\uB3D9 \uD655\uC815
                    </b>
                    : \uBC30\uC1A1\uC644\uB8CC \uD6C4
                    <b>
                      7\uC77C \uACBD\uACFC
                    </b>
                    \uC2DC \uC2DC\uC2A4\uD15C\uC774 \uC790\uB3D9 CONFIRMED \uC804\uD658
                  </div>
                  <div>
                    \u2022 \uD074\uB808\uC784(\uBC18\uD488/\uAD50\uD658) \uC9C4\uD589 \uC911 \u2192 \uC790\uB3D9 \uD655\uC815
                    <b>
                      \uD0C0\uC774\uBA38 \uC815\uC9C0
                    </b>
                  </div>
                  <div>
                    \u2022 \uD074\uB808\uC784 \uC885\uACB0(\uC644\uB8CC/\uAC70\uBD80/\uCCA0\uD68C) \u2192 \uB0A8\uC740 \uAE30\uAC04\uBD80\uD130 \uD0C0\uC774\uBA38
                    <b>
                      \uC7AC\uC0B0\uC815
                    </b>
                  </div>
                  <div>
                    \u2022 \uAD6C\uB9E4\uD655\uC815 \uC2DC: \uC801\uB9BD\uAE08 \uC9C0\uAE09, \uB9AC\uBDF0 \uC791\uC131 \uAC00\uB2A5, \uCD94\uAC00 \uD074\uB808\uC784 \uBD88\uAC00
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBD80\uBD84\uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658 \uC81C\uC57D =============================== -->
              <div style="border:1px solid #ffe58f;border-radius:8px;padding:12px;background:#fffbe6;font-size:12px;color:#7c5500;line-height:1.9;">
                <div style="font-weight:700;margin-bottom:4px;">
                  \uBD80\uBD84\uCC98\uB9AC \uC81C\uC57D\uC0AC\uD56D
                </div>
                <div>
                  \u2022
                  <b>
                    \uCDE8\uC18C
                  </b>
                  : \uBC30\uC1A1\uC900\uBE44 \uCC29\uC218 \uC804(PREPARING \uC774\uC804)\uB9CC \uAC00\uB2A5. \uC774\uD6C4\uB294 \uBC18\uD488\uC73C\uB85C \uCC98\uB9AC
                </div>
                <div>
                  \u2022
                  <b>
                    \uBC18\uD488/\uAD50\uD658
                  </b>
                  : \uBC30\uC1A1\uC644\uB8CC \uD6C4 30\uC77C \uC774\uB0B4 (\uC0C1\uD488\uD558\uC790 180\uC77C, \uBC30\uC1A1\uC190\uC0C1 7\uC77C)
                </div>
                <div>
                  \u2022 \uB3D9\uC77C \uC0C1\uD488\uC5D0 \uC9C4\uD589 \uC911\uC778 \uD074\uB808\uC784 \uC788\uC73C\uBA74 \uC911\uBCF5 \uC2E0\uCCAD \uBD88\uAC00
                </div>
                <div>
                  \u2022 \uC704\uC0DD\uC0C1\uD488, \uAC1C\uBD09\uC2DD\uD488, \uB514\uC9C0\uD138\uC0C1\uD488, \uC8FC\uBB38\uC81C\uC791\uD488 \uBC18\uD488/\uAD50\uD658 \uBD88\uAC00
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uD658\uBD88 \uC21C\uC11C ======================================= -->
          <template v-else-if="orderSubTab==='refund'">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD658\uBD88 \uC6B0\uC120\uC21C\uC704 ===================================== -->
              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ===================================== -->
                <div style="font-weight:700;color:#333;margin-bottom:10px;font-size:13px;">
                  \uD658\uBD88 \uCC98\uB9AC \uC6B0\uC120\uC21C\uC704
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;">
                  <div v-for="row in REFUND_ORDER_ROWS" :key="row.rank"
                    :style="'border:1px solid #e0e0e0;border-radius:6px;padding:10px 12px;background:'+row.bg+';display:flex;gap:10px;align-items:flex-start;'">
                    <div :style="'flex-shrink:0;width:22px;height:22px;border-radius:50%;background:'+row.color+';color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;'">
                      {{ row.rank }}
                    </div>
                    <div style="flex:1;">
                      <div :style="'font-weight:700;font-size:12px;color:'+row.color+';margin-bottom:2px;'">
                        {{ row.method }}
                      </div>
                      <div style="font-size:11px;color:#555;line-height:1.6;">
                        {{ row.desc }}
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-top:8px;font-size:11px;color:#888;line-height:1.7;">
                  * \uBCF5\uC218 \uACB0\uC81C\uC218\uB2E8 \uD63C\uC6A9 \uC2DC \uC801\uB9BD\uAE08/\uCE90\uC26C \uBA3C\uC800 \uBCF5\uC6D0 \uD6C4 \uB098\uBA38\uC9C0\uB97C \uACB0\uC81C\uC218\uB2E8 \uC5ED\uC21C\uC73C\uB85C \uD658\uBD88
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC18\uD488 \uBC30\uC1A1\uBE44 ====================================== -->
              <div style="border:1px solid #fee2e2;border-radius:8px;padding:14px;background:#fff5f5;">
                <div style="font-weight:700;color:#ef4444;margin-bottom:10px;font-size:13px;">
                  \uBC18\uD488 \uBC30\uC1A1\uBE44 \uBD80\uB2F4 \uAE30\uC900
                </div>
                <bo-grid bare :columns="returnFeeColumns" :rows="RETURN_FEE_ROWS" row-key="reason" style="font-size:12px;" />
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCFE0\uD3F0/\uD560\uC778 \uD658\uBD88 \uCC98\uB9AC ================================= -->
              <div style="border:1px solid #d1fae5;border-radius:8px;padding:14px;background:#f0fdf4;">
                <div style="font-weight:700;color:#059669;margin-bottom:10px;font-size:13px;">
                  \uCFE0\uD3F0/\uD560\uC778 \uD658\uBD88 \uCC98\uB9AC \uBC29\uC2DD
                </div>
                <div style="display:flex;flex-direction:column;gap:8px;">
                  <div v-for="row in COUPON_REFUND_ROWS" :key="row.type"
                    style="border:1px solid #a7f3d0;border-radius:6px;padding:10px 12px;background:#fff;">
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ================================= -->
                    <div style="font-weight:700;font-size:12px;color:#065f46;margin-bottom:4px;">
                      {{ row.type }}
                    </div>
                    <div style="font-size:11px;color:#333;margin-bottom:2px;">
                      <b>
                        \uADDC\uCE59:
                      </b>
                      {{ row.rule }}
                    </div>
                    <div style="font-size:11px;color:#555;">
                      {{ row.detail }}
                    </div>
                  </div>
                </div>
                <div style="margin-top:10px;font-size:11px;color:#065f46;background:#d1fae5;border-radius:6px;padding:8px 10px;line-height:1.7;">
                  <b>
                    \uD658\uBD88\uC561 \uACC4\uC0B0 \uACF5\uC2DD
                  </b>
                  <br>
                  \uD658\uBD88\uC561 = \uBC18\uD488\uC0C1\uD488\uAE08\uC561 - \uCFE0\uD3F0/\uD560\uC778 \uC548\uBD84\uC561 - \uBC18\uD488\uBC30\uC1A1\uBE44(\uACE0\uAC1D\uBD80\uB2F4) - \uC0C1\uD488\uC190\uC0C1 \uAC10\uC561
                  <br>
                  + \uC0AC\uC6A9\uC801\uB9BD\uAE08 \uBCF5\uC6D0 (\uD604\uAE08 \uC544\uB2CC \uC801\uB9BD\uAE08\uC73C\uB85C \uBCF5\uC6D0)
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC77C\uAD04 \uC791\uC5C5 ======================================= -->
          <template v-else-if="orderSubTab==='bulk'">
            <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;">
              <div style="font-weight:700;color:#1677ff;margin-bottom:10px;font-size:13px;">
                \uC77C\uAD04 \uC791\uC5C5 \uBC29\uBC95
              </div>
              <div style="font-size:12px;color:#555;line-height:1.9;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
                <div>
                  \u2022 \uBAA9\uB85D \uC88C\uCE21 \uCCB4\uD06C\uBC15\uC2A4\uB85C \uBCF5\uC218 \uC120\uD0DD \uD6C4
                  <b>
                    [\uBCC0\uACBD\uC791\uC5C5 \uC120\uD0DD]
                  </b>
                  \uBC84\uD2BC \uD074\uB9AD
                </div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">
              <div v-for="item in [
                {title:'\uC0C1\uD0DC\uBCC0\uACBD', color:'#3b82f6', desc:'\uC120\uD0DD\uD55C \uC8FC\uBB38\uB4E4\uC758 \uC8FC\uBB38 \uC0C1\uD0DC\uB97C \uC77C\uAD04 \uC804\uD658. \uBC30\uC1A1\uC900\uBE44 \u2192 \uBC30\uC1A1\uC911 \uB4F1.'},
                {title:'\uACB0\uC81C\uC218\uB2E8', color:'#8b5cf6', desc:'\uACB0\uC81C \uBC29\uC2DD \uC218\uC815. \uC8FC\uB85C \uBB34\uD1B5\uC7A5 \uC785\uAE08 \uD655\uC778 \uD6C4 \uACB0\uC81C\uC644\uB8CC \uCC98\uB9AC\uC5D0 \uC0AC\uC6A9.'},
                {title:'\uD0DD\uBC30\uC815\uBCF4', color:'#10b981', desc:'\uD0DD\uBC30\uC0AC \uC120\uD0DD \uBC0F \uC1A1\uC7A5\uBC88\uD638 \uC77C\uAD04 \uC785\uB825. \uBC30\uC1A1\uC911 \uC0C1\uD0DC\uB85C \uC790\uB3D9 \uC804\uD658.'},
                {title:'\uACB0\uC7AC\uCC98\uB9AC', color:'#f59e0b', desc:'\uB0B4\uBD80 \uACB0\uC7AC \uC2B9\uC778 \uCC98\uB9AC. \uD2B9\uC815 \uAE08\uC561 \uC774\uC0C1 \uC8FC\uBB38\uC758 \uB0B4\uBD80 \uC2B9\uC778 \uC6CC\uD06C\uD50C\uB85C\uC6B0.'},
                {title:'\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD', color:'#ef4444', desc:'\uACE0\uAC1D\uC5D0\uAC8C \uCD94\uAC00 \uAE08\uC561 \uACB0\uC81C \uC694\uCCAD. \uB2F4\uB2F9\uC790/\uC0C1\uD488/\uAE08\uC561/\uC0AC\uC720 \uC785\uB825 \uD6C4 \uC54C\uB9BC \uBC1C\uC1A1.'},
                ]" :key="item.title"
                style="border:1px solid #e8e8e8;border-radius:8px;padding:10px 14px;background:#fff;display:flex;gap:12px;align-items:flex-start;">
                <span :style="'flex-shrink:0;display:inline-block;background:'+item.color+';color:#fff;border-radius:4px;padding:2px 10px;font-size:11px;font-weight:700;white-space:nowrap;'">
                  {{ item.title }}
                </span>
                <span style="font-size:12px;color:#444;line-height:1.7;">
                  {{ item.desc }}
                </span>
              </div>
            </div>
          </template>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD074\uB808\uC784 =============================================== -->
        <template v-else-if="activeTab==='claim'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 4px;">
            \u{1F504} \uD074\uB808\uC784 \uCC98\uB9AC
          </h3>
          <p style="font-size:12px;color:#888;margin:0 0 16px;">
            \uCDE8\uC18C / \uBC18\uD488 / \uAD50\uD658 \u2014 DB \uCF54\uB4DC: <code style="background:#f3f4f6;border-radius:3px;padding:1px 5px;font-size:11px;">CLAIM_STATUS</code>
          </p>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD074\uB808\uC784 \uC720\uD615\uBCC4 \uCE74\uB4DC ===================================== -->
          <div style="display:flex;flex-direction:column;gap:18px;">
            <div v-for="ct in CLAIM_TYPES" :key="ct.title"
              :style="'border:1px solid '+ct.color+'40;border-radius:10px;overflow:hidden;background:'+ct.bg+';'">
              <!-- ===== \uC720\uD615 \uD5E4\uB354 ==================================================== -->
              <div :style="'background:'+ct.color+';padding:9px 14px;display:flex;align-items:center;gap:8px;'">
                <span style="font-size:15px;">
                  {{ ct.emoji }}
                </span>
                <span style="font-weight:800;color:#fff;font-size:13px;">
                  {{ ct.title }}
                </span>
                <span style="font-size:11px;color:rgba(255,255,255,.75);margin-left:4px;">
                  {{ ct.period }}
                </span>
              </div>
              <!-- ===== \uC0C1\uD0DC \uD750\uB984 \uC2DC\uAC01\uD654 ============================================== -->
              <div style="padding:12px 14px 10px;">
                <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD0DC \uBC30\uC9C0 \uD589 ============================= -->
                  <template v-for="(s,i) in ct.steps" :key="s.key">
                    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                      <span :style="'background:'+ct.color+';color:#fff;border-radius:5px;padding:3px 9px;font-size:10px;font-weight:700;white-space:nowrap;'">
                        {{ s.icon }} {{ s.label }}
                      </span>
                      <span style="font-size:9px;color:#999;font-family:monospace;">
                        {{ s.key }}
                      </span>
                    </div>
                    <span v-if="i < ct.steps.length-1" style="color:#bbb;font-size:12px;flex-shrink:0;padding-bottom:12px;">
                      \u2192
                    </span>
                  </template>
                  <!-- ===== \uCCA0\uD68C \uACBD\uB85C ================================================= -->
                  <span v-if="ct.cancelStep" style="color:#d1d5db;font-size:11px;padding-bottom:12px;margin-left:4px;">
                    |
                  </span>
                  <div v-if="ct.cancelStep" style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                    <span style="background:#9ca3af;color:#fff;border-radius:5px;padding:3px 9px;font-size:10px;font-weight:700;white-space:nowrap;">
                      {{ ct.cancelStep.icon }} {{ ct.cancelStep.label }}
                    </span>
                    <span style="font-size:9px;color:#999;font-family:monospace;">
                      {{ ct.cancelStep.key }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- ===== \uB2E8\uACC4\uBCC4 \uC124\uBA85 ================================================== -->
              <div style="padding:0 14px 12px;display:flex;flex-direction:column;gap:5px;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
                <div v-for="s in ct.steps" :key="s.key+'_d'"
                  style="display:flex;gap:10px;align-items:flex-start;font-size:12px;">
                  <span :style="'flex-shrink:0;min-width:60px;border-radius:3px;padding:1px 6px;font-size:10px;font-weight:700;color:#fff;background:'+ct.color+';text-align:center;'">
                    {{ s.label }}
                  </span>
                  <span style="color:#444;line-height:1.65;padding-top:1px;">
                    {{ s.desc }}
                  </span>
                </div>
                <div v-if="ct.cancelStep" style="display:flex;gap:10px;align-items:flex-start;font-size:12px;">
                  <span style="flex-shrink:0;min-width:60px;border-radius:3px;padding:1px 6px;font-size:10px;font-weight:700;color:#fff;background:#9ca3af;text-align:center;">
                    {{ ct.cancelStep.label }}
                  </span>
                  <span style="color:#444;line-height:1.65;padding-top:1px;">
                    {{ ct.cancelStep.desc }}
                  </span>
                </div>
              </div>
              <!-- ===== \uC815\uCC45 \uC694\uC57D ==================================================== -->
              <div :style="'border-top:1px dashed '+ct.color+'40;padding:8px 14px 10px;font-size:11px;color:#555;line-height:1.9;'">
                <span style="font-weight:700;">
                  \uD658\uBD88/\uC644\uB8CC:
                </span>
                {{ ct.refund }}
                <span v-for="note in ct.notes" :key="note" style="display:block;">
                  \u2022 {{ note }}
                </span>
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uACF5\uD1B5 \uC81C\uC57D\uC0AC\uD56D ========================================= -->
          <div style="margin-top:16px;border:1px solid #ffe58f;border-radius:8px;padding:12px;background:#fffbe6;font-size:12px;color:#7c5500;">
            <div style="font-weight:700;margin-bottom:6px;">
              \u26A0 \uACF5\uD1B5 \uC81C\uC57D\uC0AC\uD56D
            </div>
            <div style="line-height:1.9;">
              <div>
                \u2022 \uB3D9\uC77C \uC0C1\uD488\uB2F9 \uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658 \uC911 1\uAC00\uC9C0\uB9CC \uB3D9\uC2DC \uC9C4\uD589 \uBD88\uAC00
              </div>
              <div>
                \u2022 \uC9C4\uD589 \uC911\uC778 \uD074\uB808\uC784\uC774 \uC788\uC73C\uBA74 \uB3D9\uC77C \uC0C1\uD488 \uCD94\uAC00 \uC2E0\uCCAD \uBD88\uAC00
              </div>
              <div>
                \u2022 \uC704\uC0DD\uC0C1\uD488, \uAC1C\uBD09\uC2DD\uD488, \uB514\uC9C0\uD138\uC0C1\uD488, \uC8FC\uBB38\uC81C\uC791\uD488\uC740 \uBC18\uD488/\uAD50\uD658 \uBD88\uAC00
              </div>
              <div>
                \u2022 REQUESTED \uC0C1\uD0DC\uC5D0\uC11C\uB9CC \uCCA0\uD68C(CANCELLED) \uAC00\uB2A5
              </div>
            </div>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD504\uB85C\uBAA8\uC158 ============================================== -->
        <template v-else-if="activeTab==='promotion'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 16px;">
            \u{1F3AB} \uD504\uB85C\uBAA8\uC158
          </h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div v-for="item in PROMO_ITEMS" :key="item.title"
              style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-size:20px;margin-bottom:6px;">
                {{ item.icon }}
              </div>
              <div style="font-weight:700;color:#1677ff;font-size:13px;margin-bottom:4px;">
                {{ item.title }}
              </div>
              <div style="font-size:11px;color:#555;line-height:1.6;">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC804\uC2DC\uAD00\uB9AC ============================================== -->
        <template v-else-if="activeTab==='display'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 16px;">
            \u{1F5BC} \uC804\uC2DC\uAD00\uB9AC
          </h3>
          <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;margin-bottom:14px;">
            <div style="font-weight:700;color:#1677ff;margin-bottom:10px;font-size:13px;">
              \uACC4\uCE35 \uAD6C\uC870
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;flex-wrap:wrap;">
              <template v-for="(lv,i) in DISP_LEVELS" :key="lv.l">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
                <div style="text-align:center;">
                  <div style="background:#1677ff;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;">
                    {{ lv.l }}
                  </div>
                  <div style="font-size:10px;color:#666;margin-top:2px;white-space:nowrap;">
                    {{ lv.d }}
                  </div>
                </div>
                <span v-if="i < DISP_LEVELS.length-1" style="color:#bbb;font-size:16px;">
                  &gt;
                </span>
              </template>
            </div>
          </div>
          <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
            <div style="font-weight:700;color:#1677ff;margin-bottom:8px;font-size:13px;">
              \uC704\uC82F \uD0C0\uC785
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;font-size:11px;">
              <span v-for="w in DISP_WIDGETS" :key="w"
                style="background:#f0f7ff;border:1px solid #bae0ff;border-radius:4px;padding:3px 8px;color:#0958d9;">
                {{ w }}
              </span>
            </div>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC815\uC0B0\uAD00\uB9AC ============================================== -->
        <template v-else-if="activeTab==='settle'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 4px;">
            \u{1F4B0} \uC815\uC0B0\uAD00\uB9AC
          </h3>
          <p style="font-size:12px;color:#888;margin:0 0 10px;">
            \uD310\uB9E4\uC790 \uC6D4\uBCC4 \uC815\uC0B0. \uAD6C\uB9E4\uD655\uC815 \uAE30\uC900 \uC218\uC9D1 \u2192 \uC218\uC218\uB8CC \uCC28\uAC10 \u2192 \uB9C8\uAC10 \u2192 \uC9C0\uAE09.
          </p>
          <!-- \uC11C\uBE0C\uD0ED \uBC84\uD2BC -->
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:14px;">
            <button v-for="st in [{id:'overview',label:'\uAC1C\uC694'},{id:'raw',label:'\uB9E4\uCD9C\uC218\uC9D1\uC608'},{id:'deduct',label:'\uCC28\uAC10\uC608'},{id:'readjust',label:'\uC7AC\uC815\uC0B0 \uC608'},{id:'adjust',label:'\uC815\uC0B0\uC870\uC815\uC608'},{id:'close',label:'\uB9C8\uAC10\uAE30\uC900\uC124\uBA85'},{id:'erp',label:'\uC804\uD45C\uCC98\uB9AC\uC608'},{id:'pay',label:'\uC9C0\uAE09'}]"
              :key="st.id" @click="handleSelectAction('settleSubTab-select', st.id)"
              :style="settleSubTab===st.id
              ? 'padding:5px 12px;font-size:11px;border:1px solid #059669;border-radius:6px;cursor:pointer;background:#ecfdf5;color:#059669;font-weight:700;'
              : 'padding:5px 12px;font-size:11px;border:1px solid #d1d5db;border-radius:6px;cursor:pointer;background:#fff;color:#555;'">
              {{ st.label }}
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uAC1C\uC694 ========================================= -->
          <template v-if="settleSubTab==='overview'">
            <!-- \uC815\uC0B0 \uC0C1\uD0DC \uD750\uB984 -->
            <div style="border:1px solid #d1fae5;border-radius:8px;padding:14px;background:#f0fdf4;margin-bottom:12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-weight:700;color:#059669;font-size:13px;">\uC815\uC0B0 \uC0C1\uD0DC \uD750\uB984</div>
                <span style="font-size:10px;font-family:monospace;color:#059669;background:#fff;border:1px solid #a7f3d0;border-radius:4px;padding:2px 7px;">st_settle.settle_status_cd</span>
              </div>
              <div style="display:flex;align-items:stretch;gap:0;margin-bottom:10px;border:1px solid #a7f3d0;border-radius:6px;overflow:hidden;">
                <div v-for="(s,i) in SETTLE_STATUS_STEPS" :key="s.code"
                  :style="'flex:1;padding:10px 8px;background:'+s.color+'18;border-right:'+(i<SETTLE_STATUS_STEPS.length-1?'1px solid #a7f3d0':'none')+';'">
                  <div :style="'font-size:10px;font-weight:700;color:'+s.color+';margin-bottom:4px;'">
                    <span :style="'display:inline-block;background:'+s.color+';color:#fff;border-radius:3px;padding:1px 6px;margin-right:4px;'">{{ s.code }}</span>
                    {{ s.label }}
                  </div>
                  <div style="font-size:10px;color:#555;line-height:1.5;">{{ s.desc }}</div>
                </div>
              </div>
              <div style="font-size:11px;color:#065f46;line-height:1.7;">
                \u2022 CONFIRMED \uC774\uD6C4 \uC218\uC815 \uBD88\uAC00 &nbsp;\xB7&nbsp; CLOSED \uC2DC \uC9C0\uAE09 \uB300\uAE30(PENDING) \uB808\uCF54\uB4DC \uC790\uB3D9 \uC0DD\uC131 (<code style="background:#fff;border:1px solid #a7f3d0;border-radius:3px;padding:0 4px;">st_settle_pay</code>)
              </div>
            </div>
            <!-- \uC815\uC0B0\uC561 \uACC4\uC0B0\uC2DD -->
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;margin-bottom:12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-weight:700;color:#333;font-size:13px;">\uC815\uC0B0\uC561 \uACC4\uC0B0\uC2DD</div>
                <span style="font-size:10px;font-family:monospace;color:#555;background:#fff;border:1px solid #ddd;border-radius:4px;padding:2px 7px;">\uD14C\uC774\uBE14: st_settle</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div v-for="(row,i) in SETTLE_CALC_ROWS" :key="row.field"
                  :style="'display:flex;gap:8px;align-items:flex-start;padding:7px 10px;border-radius:5px;font-size:12px;'+(i===SETTLE_CALC_ROWS.length-1?'background:#e5f9ee;border:1px solid #a7f3d0;font-weight:700;':'background:#fff;border:1px solid #e8e8e8;')">
                  <span :style="'flex-shrink:0;width:22px;text-align:center;font-weight:700;font-size:13px;color:'+(row.sign==='+'?'#10b981':row.sign==='-'?'#ef4444':row.sign==='='?'#1d4ed8':'#f59e0b')+';'">{{ row.sign }}</span>
                  <span style="flex-shrink:0;width:88px;color:#555;">{{ row.item }}</span>
                  <span style="flex-shrink:0;width:130px;color:#888;font-size:10px;font-family:monospace;">{{ row.field }}</span>
                  <span style="flex:1;color:#666;font-size:11px;line-height:1.5;">{{ row.desc }}</span>
                </div>
              </div>
            </div>
            <!-- \uD575\uC2EC \uC815\uCC45 -->
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#333;margin-bottom:8px;font-size:13px;">\uD575\uC2EC \uC815\uCC45</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div v-for="p in SETTLE_POLICY_ROWS" :key="p.title"
                  style="display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:#fff;border:1px solid #e8e8e8;border-radius:5px;font-size:12px;">
                  <span style="flex-shrink:0;font-weight:700;color:#1d4ed8;min-width:80px;line-height:1.5;">{{ p.title }}</span>
                  <span style="flex:1;color:#444;line-height:1.6;">{{ p.desc }}</span>
                  <span style="flex-shrink:0;font-size:10px;font-family:monospace;color:#888;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;padding:2px 6px;white-space:nowrap;">{{ p.table }}.{{ p.col }}</span>
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uB9E4\uCD9C\uC218\uC9D1\uC608 ===================================== -->
          <template v-else-if="settleSubTab==='raw'">
            <div style="border:1px solid #d1fae5;border-radius:8px;padding:14px;background:#f0fdf4;margin-bottom:12px;">
              <div style="font-weight:700;color:#059669;margin-bottom:8px;font-size:13px;">\uC218\uC9D1\uC6D0\uC7A5 \uC720\uD615 (st_settle_raw.raw_type_cd)</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div v-for="r in SETTLE_RAW_TYPES" :key="r.code"
                  style="display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:#fff;border:1px solid #e8e8e8;border-radius:5px;font-size:12px;">
                  <span :style="'flex-shrink:0;background:'+r.color+';color:#fff;border-radius:3px;padding:1px 8px;font-size:10px;font-weight:700;min-width:56px;text-align:center;'">{{ r.label }}</span>
                  <span style="flex-shrink:0;font-size:10px;font-family:monospace;color:#999;min-width:64px;">{{ r.code }}</span>
                  <span style="flex:1;color:#555;line-height:1.5;">{{ r.desc }}</span>
                </div>
              </div>
            </div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="font-weight:700;color:#333;margin-bottom:10px;font-size:13px;">\uB9E4\uCD9C\uC218\uC9D1 \uC608\uC2DC (3\uC6D4 \uAD6C\uB9E4\uD655\uC815 \uAE30\uC900)</div>
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="background:#f0fdf4;">
                  <th style="padding:7px 10px;border:1px solid #d1fae5;text-align:left;">od_order_item.order_item_id</th>
                  <th style="padding:7px 10px;border:1px solid #d1fae5;text-align:left;">order_item_status_cd</th>
                  <th style="padding:7px 10px;border:1px solid #d1fae5;text-align:right;">order_item_amt</th>
                  <th style="padding:7px 10px;border:1px solid #d1fae5;text-align:left;">raw_type_cd</th>
                  <th style="padding:7px 10px;border:1px solid #d1fae5;text-align:right;">\uC218\uC9D1\uAE08\uC561</th>
                </tr></thead>
                <tbody>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">ITEM-001</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 6px;font-size:10px;">CONFIRMED</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">50,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">ORDER</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#10b981;font-weight:700;">+50,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">ITEM-002</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 6px;font-size:10px;">CONFIRMED</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">30,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">ORDER</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#10b981;font-weight:700;">+30,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">ITEM-003</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#9ca3af;color:#fff;border-radius:3px;padding:1px 6px;font-size:10px;">SHIPPED</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">20,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;color:#9ca3af;">\uBBF8\uC218\uC9D1</td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">-</td></tr>
                  <tr style="background:#f0fdf4;font-weight:700;"><td colspan="4" style="padding:7px 10px;border:1px solid #a7f3d0;text-align:right;">3\uC6D4 ORDER \uC218\uC9D1\uD569\uACC4</td><td style="padding:7px 10px;border:1px solid #a7f3d0;text-align:right;color:#059669;">+80,000</td></tr>
                </tbody>
              </table>
              <div style="font-size:11px;color:#065f46;margin-top:8px;line-height:1.6;">
                \u2022 \uC218\uC9D1 \uAE30\uC900: <code style="background:#d1fae5;padding:1px 4px;border-radius:3px;">order_item_status_cd = 'CONFIRMED'</code> \uD655\uC815 \uC2DC\uC810\uC758 \uADC0\uC18D \uC6D4<br>
                \u2022 \uBC30\uC1A1\uBE44(SHIP)\uB294 od_dliv.dliv_status_cd = 'DELIVERED' \uD655\uC815 \uC2DC \uBCC4\uB3C4 \uC218\uC9D1
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uCC28\uAC10\uC608 ======================================= -->
          <template v-else-if="settleSubTab==='deduct'">
            <div style="border:1px solid #fee2e2;border-radius:8px;padding:14px;background:#fff5f5;margin-bottom:12px;">
              <div style="font-weight:700;color:#dc2626;margin-bottom:8px;font-size:13px;">\uCDE8\uC18C\xB7\uBC18\uD488 \uCC28\uAC10 \uC608\uC2DC</div>
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="background:#fee2e2;">
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:left;">od_claim_item.claim_item_id</th>
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:left;">claim_type_cd</th>
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:left;">claim_item_status_cd</th>
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:right;">refund_amt</th>
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:left;">raw_type_cd</th>
                  <th style="padding:7px 10px;border:1px solid #fecaca;text-align:right;">\uCC28\uAC10\uAE08\uC561</th>
                </tr></thead>
                <tbody>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">CLM-001-1</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#ef4444;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">CANCEL</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#6b7280;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">COMPLT</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">25,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#ef4444;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">CANCEL</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#ef4444;font-weight:700;">-25,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">CLM-002-1</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#f97316;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">RETURN</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#6b7280;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">COMPLT</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">15,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#f97316;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">RETURN</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#f97316;font-weight:700;">-15,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #e8e8e8;">CLM-003-1</td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#8b5cf6;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">EXCHANGE</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;"><span style="background:#9ca3af;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">PROC</span></td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;">10,000</td><td style="padding:6px 10px;border:1px solid #e8e8e8;color:#9ca3af;">\uBBF8\uC218\uC9D1</td><td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">-</td></tr>
                  <tr style="background:#fff5f5;font-weight:700;"><td colspan="5" style="padding:7px 10px;border:1px solid #fecaca;text-align:right;">3\uC6D4 \uCC28\uAC10\uD569\uACC4</td><td style="padding:7px 10px;border:1px solid #fecaca;text-align:right;color:#dc2626;">-40,000</td></tr>
                </tbody>
              </table>
              <div style="font-size:11px;color:#991b1b;margin-top:8px;line-height:1.6;">
                \u2022 \uCC28\uAC10 \uAE30\uC900: <code style="background:#fee2e2;padding:1px 4px;border-radius:3px;">claim_item_status_cd = 'COMPLT'</code> \uC644\uB8CC \uC2DC\uC810\uC758 \uADC0\uC18D \uC6D4<br>
                \u2022 \uAD50\uD658(EXCHANGE)\uC740 COMPLT \uC774\uD6C4 \uAD50\uD658\uBC30\uC1A1 DELIVERED \uD655\uC815 \uC2DC EXCHANGE \uC6D0\uC7A5 \uC218\uC9D1<br>
                \u2022 \uCFE0\uD3F0/\uD560\uC778 \uCC28\uAC10\uC740 total_discnt_amt \uCEEC\uB7FC\uC5D0 \uBCC4\uB3C4 \uC9D1\uACC4
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC7AC\uC815\uC0B0 \uC608 ===================================== -->
          <template v-else-if="settleSubTab==='readjust'">
            <div style="border:1px solid #ede9fe;border-radius:8px;padding:14px;background:#f5f3ff;margin-bottom:12px;">
              <div style="font-weight:700;color:#7c3aed;margin-bottom:8px;font-size:13px;">\uD0C0\uC6D4(\u4ED6\u6708) \uD658\uBD88 \uBC1C\uC0DD \uC2DC \uC7AC\uC815\uC0B0 \uD750\uB984</div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #ddd6fe;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#7c3aed;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">1</span>
                  <div><strong>1\uC6D4</strong> \u2014 ITEM-001 \uAD6C\uB9E4\uD655\uC815(CONFIRMED) \u2192 1\uC6D4 ORDER \uC218\uC9D1 +50,000</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #ddd6fe;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#7c3aed;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">2</span>
                  <div><strong>1\uC6D4 \uB9D0</strong> \u2014 1\uC6D4 \uC815\uC0B0 CONFIRMED(\uD655\uC815). final_settle_amt = 50,000 - \uC218\uC218\uB8CC. \uC218\uC815 \uBD88\uAC00.</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #ddd6fe;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#7c3aed;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</span>
                  <div><strong>3\uC6D4</strong> \u2014 \uACE0\uAC1D \uBC18\uD488 \uC2E0\uCCAD \u2192 \uBC18\uD488 \uC218\uAC70 \u2192 COMPLT \u2192 <code style="background:#ede9fe;padding:1px 4px;border-radius:3px;">3\uC6D4 RETURN \uC6D0\uC7A5</code> \uC218\uC9D1 -50,000</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#f5f3ff;border:1px solid #c4b5fd;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#7c3aed;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">4</span>
                  <div><strong>3\uC6D4 \uB9D0 \uC815\uC0B0</strong> \u2014 total_return_amt += 50,000 \uBC18\uC601 \u2192 3\uC6D4 final_settle_amt \uCC28\uAC10 \uC801\uC6A9<br><span style="color:#7c3aed;font-size:11px;">\u2192 1\uC6D4 \uC815\uC0B0\uC740 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC74C. 3\uC6D4 \uC815\uC0B0\uC5D0 \uBC1C\uC0DD\uC8FC\uC758\uB85C \uBC18\uC601.</span></div>
                </div>
              </div>
              <div style="font-size:11px;color:#5b21b6;margin-top:10px;padding:8px 10px;background:#ede9fe;border-radius:5px;line-height:1.7;">
                \u2B50 <strong>\uBC1C\uC0DD\uC8FC\uC758 \uC6D0\uCE59</strong>: \uBC18\uD488\xB7\uCDE8\uC18C \uC0AC\uAC74\uC774 \uBC1C\uC0DD\uD55C \uC6D4\uC758 \uC815\uC0B0\uC5D0 \uCC28\uAC10. \uCD5C\uCD08 \uB9E4\uCD9C \uADC0\uC18D \uC6D4(1\uC6D4)\uC740 \uC218\uC815\uD558\uC9C0 \uC54A\uB294\uB2E4.<br>
                \u2B50 <strong>\uB9C8\uC774\uB108\uC2A4 \uC815\uC0B0</strong>: final_settle_amt &lt; 0 \uC774\uBA74 \uB2E4\uC74C \uB2EC adj_amt\uB85C \uC774\uC6D4 \uCC98\uB9AC.
              </div>
            </div>
            <!-- \uC8FC\uBB38 1\uAC74 \uCD94\uC801\uD45C -->
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fff;margin-bottom:12px;">
              <div style="font-weight:700;color:#333;margin-bottom:4px;font-size:13px;">\u{1F4E6} \uAC19\uC740 \uC8FC\uBB38 1\uAC74(ITEM-001)\uC744 \uB05D\uAE4C\uC9C0 \uB530\uB77C\uAC00 \uBCF4\uAE30</div>
              <div style="font-size:11px;color:#777;margin-bottom:10px;">"\uD558\uB098\uC758 \uC8FC\uBB38\uC774 \uC5B4\uB290 \uC2DC\uC810\uC5D0 \uC5B4\uB290 \uD14C\uC774\uBE14\xB7\uC815\uC0B0 \uC6D4\uB85C \uBC18\uC601\uB418\uB294\uAC00"\uB97C \uC2DC\uAC04\uC21C\uC73C\uB85C \uD3BC\uCE5C \uD45C\uC785\uB2C8\uB2E4.</div>
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="background:#f3f4f6;">
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:center;">\uC2DC\uC810</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:left;">\uC2E4\uC81C \uC77C\uC5B4\uB09C \uC77C</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:left;">\uB370\uC774\uD130 \uBCC0\uD654</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:center;">\uC815\uC0B0 \uADC0\uC18D \uC6D4</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;white-space:nowrap;">1/15</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;">\uACE0\uAC1D\uC774 50,000\uC6D0 \uC0C1\uD488 \uC8FC\uBB38 \u2192 \uACB0\uC81C \uC644\uB8CC(PAID)</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;font-family:monospace;font-size:11px;">od_order_item.status = PAID</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;color:#9ca3af;">\uC544\uC9C1 \uC5C6\uC74C</td>
                  </tr>
                  <tr style="background:#f9fafb;">
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;white-space:nowrap;">1/18</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;">\uBC30\uC1A1 \uC644\uB8CC + \uAD6C\uB9E4\uD655\uC815(\uC790\uB3D9/\uC218\uB3D9) \u2192 <strong>CONFIRMED</strong></td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;font-family:monospace;font-size:11px;">status = CONFIRMED</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;color:#9ca3af;">\uC544\uC9C1 \uC5C6\uC74C</td>
                  </tr>
                  <tr style="background:#ecfdf5;">
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;text-align:center;white-space:nowrap;font-weight:700;">1/31</td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;">\uC6D4\uB9D0 \uC815\uC0B0 \uBC30\uCE58 \u2192 CONFIRMED \uAC74 \uB9E4\uCD9C\uB85C \uC218\uC9D1</td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;font-family:monospace;font-size:11px;">st_settle_raw(raw_type=ORDER, +50,000)</td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;text-align:center;font-weight:700;color:#059669;">1\uC6D4</td>
                  </tr>
                  <tr style="background:#ecfdf5;">
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;text-align:center;white-space:nowrap;font-weight:700;">2/3</td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;">1\uC6D4 \uC815\uC0B0 \uD655\uC815\xB7\uC9C0\uAE09 \u2192 <strong>PAID(\uBD09\uC778)</strong></td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;font-family:monospace;font-size:11px;">st_settle.status = PAID \u{1F512}</td>
                    <td style="padding:6px 10px;border:1px solid #a7f3d0;text-align:center;font-weight:700;color:#059669;">1\uC6D4</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;white-space:nowrap;">3/5</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;">\uACE0\uAC1D\uC774 <strong>\uB4A4\uB2A6\uAC8C \uBC18\uD488 \uC2E0\uCCAD</strong> (\uAD6C\uB9E4\uD655\uC815 \uD6C4\uC5D0\uB3C4 \uBC18\uD488 \uAC00\uB2A5 \uAE30\uAC04 \uB0B4)</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;font-family:monospace;font-size:11px;">od_claim \uC0DD\uC131 (RETURN)</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;color:#9ca3af;">\uC544\uC9C1 \uBBF8\uBC18\uC601</td>
                  </tr>
                  <tr style="background:#f5f3ff;">
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;white-space:nowrap;font-weight:700;">3/12</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;">\uBC18\uD488 \uC0C1\uD488 \uC218\uAC70 \uC785\uACE0 \uD655\uC778 \u2192 <strong>COMPLT(\uBC18\uD488 \uC644\uB8CC)</strong></td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;font-family:monospace;font-size:11px;">od_claim_item.status = COMPLT</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;color:#9ca3af;">\uC0AC\uAC74 \uBC1C\uC0DD \uC2DC\uC810</td>
                  </tr>
                  <tr style="background:#f5f3ff;">
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;white-space:nowrap;font-weight:700;">3/31</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;">\uC6D4\uB9D0 \uC815\uC0B0 \uBC30\uCE58 \u2192 <strong>3\uC6D4 \uC6D0\uC7A5\uC5D0 \uBC18\uD488 \uCC28\uAC10 \uC218\uC9D1</strong></td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;font-family:monospace;font-size:11px;">st_settle_raw(raw_type=RETURN, -50,000)</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;font-weight:700;color:#7c3aed;">3\uC6D4 \u2B50</td>
                  </tr>
                </tbody>
              </table>
              <div style="font-size:11px;color:#374151;margin-top:8px;padding:8px 10px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:5px;line-height:1.7;">
                \uAC19\uC740 \uC8FC\uBB38 1\uAC74\uC774\uC9C0\uB9CC <strong>\uB9E4\uCD9C(+50,000)\uC740 1\uC6D4 \uC815\uC0B0</strong>\uC5D0, <strong>\uBC18\uD488(-50,000)\uC740 3\uC6D4 \uC815\uC0B0</strong>\uC5D0 \uB530\uB85C \uAE30\uB85D\uB429\uB2C8\uB2E4.
                "\uBC18\uD488\uC774 \uC77C\uC5B4\uB09C \uC0AC\uAC74\uC758 \uB0A0\uC9DC"\uAC00 \uAE30\uC900\uC774\uC9C0, "\uC6D0\uB798 \uC8FC\uBB38\uD588\uB358 \uB0A0\uC9DC"\uAC00 \uAE30\uC900\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. 1\uC6D4 \uC815\uC0B0\uC740 \uC774\uBBF8 \uC9C0\uAE09\uAE4C\uC9C0 \uB05D\uB0AC\uC73C\uBBC0\uB85C(\u{1F512}) \uAC74\uB4DC\uB9B4 \uC218 \uC5C6\uACE0,
                \uAC74\uB4DC\uB9B4 \uD544\uC694\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uC190\uC2E4\uC740 "\uC9C0\uAE08(3\uC6D4)" \uBC1C\uC0DD\uD588\uC73C\uB2C8 "\uC9C0\uAE08(3\uC6D4)" \uC815\uC0B0\uC5D0\uC11C \uCC98\uB9AC\uD558\uB294 \uAC83\uC774 \uBC1C\uC0DD\uC8FC\uC758 \uD68C\uACC4\uC758 \uD575\uC2EC\uC785\uB2C8\uB2E4.
              </div>
            </div>
            <!-- \uAC19\uC740 \uB2EC\uC5D0 \uC5EC\uB7EC \uAC74\uC774 \uACB9\uCE58\uB294 \uACBD\uC6B0 -->
            <div style="border:1px solid #fbcfe8;border-radius:8px;padding:14px;background:#fdf2f8;margin-bottom:12px;">
              <div style="font-weight:700;color:#be185d;margin-bottom:8px;font-size:13px;">\u{1F4A1} \uD55C \uB2EC \uC548\uC5D0 \uB9E4\uCD9C\xB7\uBC18\uD488\uC774 \uB3D9\uC2DC\uC5D0 \uC11E\uC774\uBA74?</div>
              <div style="font-size:12px;color:#555;line-height:1.8;margin-bottom:10px;">
                \uC2E4\uC81C\uB85C\uB294 \uD55C \uC5C5\uCCB4\uAC00 \uD55C \uB2EC\uC5D0 \uC218\uC2ED~\uC218\uBC31 \uAC74\uC744 \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD569\uB2C8\uB2E4. 3\uC6D4 \uD55C \uB2EC \uB3D9\uC548 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC11E\uC5EC \uC788\uB2E4\uACE0 \uAC00\uC815\uD558\uBA74:
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="background:#fce7f3;">
                  <th style="padding:7px 10px;border:1px solid #fbcfe8;text-align:left;">3\uC6D4\uC5D0 \uC77C\uC5B4\uB09C \uC77C</th>
                  <th style="padding:7px 10px;border:1px solid #fbcfe8;text-align:center;">\uAC74\uC218</th>
                  <th style="padding:7px 10px;border:1px solid #fbcfe8;text-align:right;">\uAE08\uC561 \uD569\uACC4</th>
                  <th style="padding:7px 10px;border:1px solid #fbcfe8;text-align:left;">3\uC6D4 \uC6D0\uC7A5 \uBC18\uC601</th>
                </tr></thead>
                <tbody>
                  <tr><td style="padding:6px 10px;border:1px solid #f3d4e4;">3\uC6D4\uC5D0 \uC0C8\uB85C \uC8FC\uBB38\xB7\uAD6C\uB9E4\uD655\uC815\uB41C \uAC74</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:center;">12\uAC74</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:right;color:#10b981;">+30,000</td><td style="padding:6px 10px;border:1px solid #f3d4e4;font-family:monospace;font-size:11px;">ORDER +30,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #f3d4e4;"><strong>1\uC6D4\uC5D0 \uD314\uC558\uC9C0\uB9CC 3\uC6D4\uC5D0 \uBC18\uD488 \uC644\uB8CC\uB41C \uAC74</strong> (ITEM-001 \uD3EC\uD568)</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:center;">3\uAC74</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:right;color:#ef4444;">-50,000</td><td style="padding:6px 10px;border:1px solid #f3d4e4;font-family:monospace;font-size:11px;">RETURN -50,000</td></tr>
                  <tr><td style="padding:6px 10px;border:1px solid #f3d4e4;">2\uC6D4\uC5D0 \uD314\uC558\uC9C0\uB9CC 3\uC6D4\uC5D0 \uCDE8\uC18C \uC644\uB8CC\uB41C \uAC74</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:center;">1\uAC74</td><td style="padding:6px 10px;border:1px solid #f3d4e4;text-align:right;color:#ef4444;">-15,000</td><td style="padding:6px 10px;border:1px solid #f3d4e4;font-family:monospace;font-size:11px;">CANCEL -15,000</td></tr>
                  <tr style="background:#fce7f3;"><td style="padding:6px 10px;border:1px solid #f3d4e4;font-weight:700;" colspan="3">\u2192 3\uC6D4 \uC815\uC0B0 final_settle_amt (\uC218\uC218\uB8CC \uBCC4\uB3C4)</td><td style="padding:6px 10px;border:1px solid #f3d4e4;font-weight:700;color:#dc2626;">30,000 - 50,000 - 15,000 = -35,000</td></tr>
                </tbody>
              </table>
              <div style="font-size:11px;color:#9d174d;margin-top:8px;line-height:1.7;">
                \uD575\uC2EC\uC740 <strong>"3\uC6D4\uC5D0 \uC77C\uC5B4\uB09C \uC0AC\uAC74"\uB9CC \uBAA8\uC544\uC11C 3\uC6D4 \uC6D0\uC7A5 1\uAC1C\uC5D0 \uD569\uC0B0</strong>\uD55C\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uADF8 \uC0AC\uAC74\uC774 \uC6D0\uB798 \uC5B8\uC81C \uD314\uB9B0 \uC0C1\uD488\uC778\uC9C0(1\uC6D4/2\uC6D4/3\uC6D4)\uB294
                3\uC6D4 \uC815\uC0B0 \uACC4\uC0B0\uC5D0 \uC804\uD600 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u2014 \uC624\uC9C1 <code style="background:#fce7f3;padding:1px 4px;border-radius:3px;">CONFIRMED</code>(\uB9E4\uCD9C \uD655\uC815)\xB7
                <code style="background:#fce7f3;padding:1px 4px;border-radius:3px;">COMPLT</code>(\uD074\uB808\uC784 \uC644\uB8CC)\uAC00 <strong>3\uC6D4\uC5D0 \uCC0D\uD614\uB294\uC9C0</strong>\uB9CC \uBD05\uB2C8\uB2E4.
              </div>
            </div>
            <!-- \uB450 \uAC00\uC9C0 \uBC29\uBC95 \uBE44\uAD50 -->
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;margin-bottom:12px;">
              <div style="font-weight:700;color:#333;margin-bottom:10px;font-size:13px;">\uC65C 1\uC6D4 \uC815\uC0B0\uC744 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uB294\uAC00?</div>
              <div style="display:flex;gap:10px;margin-bottom:0;">
                <div style="flex:1;padding:10px 12px;background:#fff0f0;border:1px solid #fecaca;border-radius:6px;font-size:12px;">
                  <div style="font-weight:700;color:#dc2626;margin-bottom:6px;">\u274C \uC18C\uAE09 \uC218\uC815 \uBC29\uC2DD (\uC548 \uD558\uB294 \uBC29\uC2DD)</div>
                  <div style="color:#555;line-height:1.7;">
                    3\uC6D4\uC5D0 \uBC18\uD488 \uC644\uB8CC \u2192 <strong>1\uC6D4 \uC815\uC0B0\uC73C\uB85C \uB3CC\uC544\uAC00\uC11C</strong> -50,000 \uC218\uC815<br>
                    \u2022 \uC774\uBBF8 PAID(\uC9C0\uAE09\uC644\uB8CC)\uB41C \uC815\uC0B0 \uC7AC\uC624\uD508 \uD544\uC694<br>
                    \u2022 ERP \uC804\uD45C \uC774\uBBF8 \uBC1C\uD589\uB428 \u2192 \uD68C\uACC4 \uC5ED\uBD84\uAC1C \uD544\uC694<br>
                    \u2022 \uC5C5\uCCB4\uAC00 \uC774\uBBF8 \uBC1B\uC740 \uB3C8 \uD658\uC218 \u2192 \uBD84\uC7C1 \uC704\uD5D8
                  </div>
                </div>
                <div style="flex:1;padding:10px 12px;background:#f0fdf4;border:1px solid #a7f3d0;border-radius:6px;font-size:12px;">
                  <div style="font-weight:700;color:#059669;margin-bottom:6px;">\u2705 \uBC1C\uC0DD\uC8FC\uC758 \uBC29\uC2DD (\uC6B0\uB9AC \uBC29\uC2DD)</div>
                  <div style="color:#555;line-height:1.7;">
                    3\uC6D4\uC5D0 \uBC18\uD488 \uC644\uB8CC \u2192 <strong>3\uC6D4 \uC815\uC0B0\uC5D0 -50,000 \uCC28\uAC10</strong><br>
                    \u2022 1\uC6D4 \uC815\uC0B0\uC740 \uADF8\uB300\uB85C \uC720\uC9C0 (PAID \uBD09\uC778)<br>
                    \u2022 \uD68C\uACC4 \uC218\uC815 \uC5C6\uC74C, ERP \uC804\uD45C \uC2E0\uADDC \uBC1C\uD589\uB9CC<br>
                    \u2022 \uC5C5\uCCB4\uC640\uC758 \uC815\uC0B0\uC740 3\uC6D4\uBD84\uC5D0\uC11C \uC790\uB3D9 \uC0C1\uACC4
                  </div>
                </div>
              </div>
            </div>
            <!-- \uC22B\uC790 \uC608\uC2DC \uD14C\uC774\uBE14 -->
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-weight:700;color:#333;font-size:13px;">\uC22B\uC790\uB85C \uBCF4\uB294 \uC815\uC0B0 \uD750\uB984 (\uC218\uC218\uB8CC 10% \uAC00\uC815)</div>
                <span style="font-size:10px;font-family:monospace;color:#555;background:#fff;border:1px solid #ddd;border-radius:4px;padding:2px 7px;">\uD14C\uC774\uBE14: st_settle_raw \u2192 st_settle</span>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="background:#f3f4f6;">
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:center;">\uC6D4</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:right;">\uB9E4\uCD9C\uC218\uC9D1<br><span style="font-weight:400;font-size:9px;color:#9ca3af;">raw.ORDER</span></th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:right;">\uBC18\uD488\uCC28\uAC10<br><span style="font-weight:400;font-size:9px;color:#9ca3af;">raw.RETURN</span></th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:right;">\uC218\uC218\uB8CC<br><span style="font-weight:400;font-size:9px;color:#9ca3af;">commission_amt</span></th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:right;">adj_amt</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:right;">final_settle_amt</th>
                  <th style="padding:7px 10px;border:1px solid #e5e7eb;text-align:center;">\uC0C1\uD0DC<br><span style="font-weight:400;font-size:9px;color:#9ca3af;">settle_status_cd</span></th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;font-weight:700;">1\uC6D4</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#10b981;">+50,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#ef4444;">-5,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;font-weight:700;color:#1d4ed8;">+45,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">PAID</span> \u{1F512}</td>
                  </tr>
                  <tr style="background:#f9fafb;">
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;font-weight:700;">2\uC6D4</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#10b981;">+80,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#ef4444;">-8,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:right;font-weight:700;color:#1d4ed8;">+72,000</td>
                    <td style="padding:6px 10px;border:1px solid #e8e8e8;text-align:center;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">PAID</span></td>
                  </tr>
                  <tr style="background:#f5f3ff;">
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;font-weight:700;">3\uC6D4</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:right;color:#10b981;">+30,000</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:right;color:#ef4444;font-weight:700;">-50,000</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:right;color:#ef4444;">-3,000</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:right;font-weight:700;color:#dc2626;">-23,000 \u26A0\uFE0F</td>
                    <td style="padding:6px 10px;border:1px solid #c4b5fd;text-align:center;"><span style="background:#8b5cf6;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">CLOSED</span><br><span style="font-size:10px;color:#7c3aed;">\uC9C0\uAE09 \uC5C6\uC74C \u2192 \uC774\uC6D4</span></td>
                  </tr>
                  <tr style="background:#fef3c7;">
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:center;font-weight:700;">4\uC6D4</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:right;color:#10b981;">+60,000</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:right;color:#9ca3af;">0</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:right;color:#ef4444;">-6,000</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:right;color:#ef4444;font-weight:700;">-23,000</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:right;font-weight:700;color:#059669;">+31,000</td>
                    <td style="padding:6px 10px;border:1px solid #fde68a;text-align:center;"><span style="background:#10b981;color:#fff;border-radius:3px;padding:1px 5px;font-size:10px;">PAID</span><br><span style="font-size:10px;color:#92400e;">3\uC6D4 \uC801\uC790 \uC0C1\uACC4</span></td>
                  </tr>
                </tbody>
              </table>
              <div style="font-size:11px;color:#374151;margin-top:8px;padding:8px 10px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:5px;line-height:1.8;">
                \u{1F512} <strong>1\uC6D4 PAID \uBD09\uC778</strong>: 3\uC6D4\uC5D0 \uBC18\uD488\uC774 \uBC1C\uC0DD\uD574\uB3C4 1\uC6D4 \uC815\uC0B0(+45,000)\uC740 \uC808\uB300 \uC218\uC815\uD558\uC9C0 \uC54A\uC74C.<br>
                \u26A0\uFE0F <strong>3\uC6D4 \uB9C8\uC774\uB108\uC2A4(-23,000)</strong>: 3\uC6D4 \uB9E4\uCD9C(30,000)\uBCF4\uB2E4 \uBC18\uD488(50,000)\uC774 \uB9CE\uC544 \uC801\uC790. 3\uC6D4\uC740 \uC5C5\uCCB4\uC5D0 \uC9C0\uAE09 \uC5C6\uC74C.<br>
                \u{1F504} <strong>4\uC6D4 adj_amt \uC774\uC6D4</strong>: 3\uC6D4 \uC801\uC790 -23,000\uC744 4\uC6D4 adj_amt\uC5D0 \uC790\uB3D9 \uBC18\uC601 \u2192 4\uC6D4 \uC2E4\uC9C0\uAE09 = 60,000 - 6,000 - 23,000 = <strong>+31,000</strong>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC815\uC0B0\uC870\uC815\uC608 ===================================== -->
          <template v-else-if="settleSubTab==='adjust'">
            <div style="border:1px solid #fef3c7;border-radius:8px;padding:14px;background:#fffbeb;margin-bottom:12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <div style="font-weight:700;color:#d97706;font-size:13px;">\uC815\uC0B0 \uC870\uC815 \uD56D\uBAA9 (adj_amt / etc_adj_amt)</div>
                <span style="font-size:10px;font-family:monospace;color:#92400e;background:#fff;border:1px solid #fde68a;border-radius:4px;padding:2px 7px;">\uD14C\uC774\uBE14: st_settle</span>
              </div>
              <bo-grid bare :columns="adjAdjColumns" :rows="ADJ_AMT_ROWS" style="font-size:12px;" />
              <div style="font-size:11px;color:#92400e;margin-top:10px;padding:8px 10px;background:#fef3c7;border-radius:5px;line-height:1.7;">
                \u2022 <strong>adj_amt</strong>: \uC2DC\uC2A4\uD15C \uC5F0\uB3D9 \uC870\uC815 (\uBC30\uC1A1\uB8CC\xB7\uC774\uC6D4\xB7\uC774\uC758\uC2E0\uCCAD). \uC815\uC0B0 \uC9D1\uACC4 \uBC30\uCE58\uAC00 \uC790\uB3D9 \uACC4\uC0B0.<br>
                \u2022 <strong>etc_adj_amt</strong>: \uC218\uB3D9 \uC870\uC815 (\uBD84\uC7C1\xB7\uD658\uC218\xB7\uAE30\uD0C0). \uB2F4\uB2F9\uC790\uAC00 \uC9C1\uC811 st_settle\uC5D0 \uC785\uB825. \uC774\uB825 \uD544\uC218.
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uB9C8\uAC10\uAE30\uC900\uC124\uBA85 ==================================== -->
          <template v-else-if="settleSubTab==='close'">
            <div style="border:1px solid #bae0ff;border-radius:8px;padding:14px;background:#f0f7ff;margin-bottom:12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-weight:700;color:#1677ff;font-size:13px;">\uC815\uC0B0 \uB9C8\uAC10 \uAE30\uC900 \uBC0F \uC808\uCC28</div>
                <span style="font-size:10px;font-family:monospace;color:#0958d9;background:#fff;border:1px solid #91caff;border-radius:4px;padding:2px 7px;">\uD14C\uC774\uBE14: st_settle_raw / st_settle</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="padding:10px 12px;background:#fff;border:1px solid #91caff;border-radius:6px;font-size:12px;">
                  <div style="font-weight:700;color:#0958d9;margin-bottom:4px;">\u{1F4C5} \uB9C8\uAC10 \uC77C\uC815</div>
                  <div style="color:#555;line-height:1.7;">
                    \uB9E4\uC6D4 <strong>\uB9C8\uC9C0\uB9C9 \uC601\uC5C5\uC77C</strong> \uC790\uC815(00:00) \uAE30\uC900\uC73C\uB85C \uD574\uB2F9 \uC6D4 \uADC0\uC18D \uC6D0\uC7A5(st_settle_raw) \uC9D1\uACC4 \uBC30\uCE58 \uC2E4\uD589.<br>
                    \uC9D1\uACC4 \uC644\uB8CC \uD6C4 \uC0C1\uD0DC: <code style="background:#e6f4ff;padding:1px 4px;border-radius:3px;">DRAFT</code> \uC790\uB3D9 \uC0DD\uC131 \u2192 \uC815\uC0B0\uD300 \uAC80\uD1A0 \uD6C4 <code style="background:#e6f4ff;padding:1px 4px;border-radius:3px;">CONFIRMED</code> \uC804\uD658.
                  </div>
                </div>
                <div style="padding:10px 12px;background:#fff;border:1px solid #91caff;border-radius:6px;font-size:12px;">
                  <div style="font-weight:700;color:#0958d9;margin-bottom:4px;">\u{1F4CB} \uADC0\uC18D \uC6D4 \uACB0\uC815 \uAE30\uC900</div>
                  <bo-grid bare :columns="rawTypeBaseColumns" :rows="RAW_TYPE_BASE_ROWS" row-key="type" style="font-size:11px;margin-top:4px;" />
                </div>
                <div style="padding:10px 12px;background:#fff;border:1px solid #91caff;border-radius:6px;font-size:12px;">
                  <div style="font-weight:700;color:#0958d9;margin-bottom:4px;">\u26A0\uFE0F \uB9C8\uAC10 \uD6C4 \uC870\uC815 \uADDC\uCE59</div>
                  <div style="color:#555;line-height:1.7;">
                    \u2022 CONFIRMED \uC774\uD6C4: \uC6D0\uC7A5 \uCD94\uAC00\xB7\uC0AD\uC81C \uBD88\uAC00. adj_amt / etc_adj_amt \uB85C\uB9CC \uBCF4\uC815.<br>
                    \u2022 CLOSED \uC774\uD6C4: \uC815\uC0B0 \uB808\uCF54\uB4DC \uC804\uCCB4 \uC7A0\uAE08. \uBCF4\uC815 \uD544\uC694 \uC2DC \uB2E4\uC74C \uB2EC \uC815\uC0B0\uC5D0 \uC774\uC6D4 \uCC98\uB9AC.<br>
                    \u2022 PAID \uC774\uD6C4: \uC9C0\uAE09 \uCDE8\uC18C \uBD88\uAC00. ERP \uC804\uD45C \uC0DD\uC131 \uC644\uB8CC. \uD658\uC218\uB294 etc_adj_amt \uBCC4\uB3C4 \uB4F1\uB85D.
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC804\uD45C\uCC98\uB9AC\uC608 ===================================== -->
          <template v-else-if="settleSubTab==='erp'">
            <div style="border:1px solid #e0e7ff;border-radius:8px;padding:14px;background:#eef2ff;margin-bottom:12px;">
              <div style="font-weight:700;color:#4338ca;margin-bottom:10px;font-size:13px;">ERP \uC804\uD45C \uCC98\uB9AC \uC608\uC2DC (st_erp_voucher)</div>
              <bo-grid bare :columns="erpVoucherColumns" :rows="ERP_VOUCHER_ROWS" row-key="type" style="font-size:12px;" />
              <div style="font-size:11px;color:#3730a3;margin-top:10px;padding:8px 10px;background:#e0e7ff;border-radius:5px;line-height:1.7;">
                \u2022 ERP \uC804\uC1A1 \uC0C1\uD0DC: <code style="background:#c7d2fe;padding:1px 4px;border-radius:3px;">erp_status_cd</code> \u2014 PENDING \u2192 SENT \u2192 CONFIRMED \u2192 ERROR<br>
                \u2022 \uC804\uC1A1 \uC2E4\uD328 \uC2DC 3\uD68C \uC7AC\uC2DC\uB3C4 \uD6C4 ERROR \uC0C1\uD0DC \uC804\uD658. \uB2F4\uB2F9\uC790 \uC218\uB3D9 \uD655\uC778 \uD544\uC694.<br>
                \u2022 ERP \uC2DC\uC2A4\uD15C: SAP / \uB354\uC874 / \uC138\uAE08\uACC4\uC0B0\uC11C \uC790\uB3D9 \uBC1C\uD589 \uC5F0\uB3D9
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC11C\uBE0C: \uC9C0\uAE09 ========================================= -->
          <template v-else-if="settleSubTab==='pay'">
            <div style="border:1px solid #d1fae5;border-radius:8px;padding:14px;background:#f0fdf4;margin-bottom:12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-weight:700;color:#059669;font-size:13px;">\uC9C0\uAE09 \uC808\uCC28 \uBC0F \uC0C1\uD0DC \uD750\uB984</div>
                <span style="font-size:10px;font-family:monospace;color:#059669;background:#fff;border:1px solid #a7f3d0;border-radius:4px;padding:2px 7px;">\uD14C\uC774\uBE14: st_settle_pay</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#6b7280;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">1</span>
                  <div><strong>CLOSED</strong> \u2192 st_settle_pay \uB808\uCF54\uB4DC <code style="background:#f0fdf4;padding:1px 4px;border-radius:3px;">pay_status_cd=PENDING</code> \uC790\uB3D9 \uC0DD\uC131</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#3b82f6;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">2</span>
                  <div><strong>\uACC4\uC88C \uAC80\uC99D</strong> \u2192 \uC5C5\uCCB4 \uC815\uC0B0\uACC4\uC88C(sy_vendor.bank_acct_no) \uD655\uC778. \uC624\uB958 \uC2DC HOLD \uCC98\uB9AC</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#f59e0b;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</span>
                  <div><strong>\uC790\uB3D9 \uC1A1\uAE08</strong> \u2192 CLOSED \uD6C4 5 \uC601\uC5C5\uC77C \uC774\uB0B4 \uD38C\uBC45\uD0B9 API \uD638\uCD9C. \uC131\uACF5 \uC2DC PAID \uC804\uD658</div>
                </div>
                <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;font-size:12px;">
                  <span style="flex-shrink:0;background:#10b981;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">4</span>
                  <div><strong>PAID</strong> \u2192 ERP SETTLE_PAY \uC804\uD45C \uC790\uB3D9 \uC0DD\uC131. \uC5C5\uCCB4\uC5D0 \uC9C0\uAE09 \uC644\uB8CC \uC54C\uB9BC \uBC1C\uC1A1</div>
                </div>
              </div>
            </div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px;background:#fafafa;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <div style="font-weight:700;color:#333;font-size:13px;">\uC9C0\uAE09 \uBCF4\uB958(HOLD) \uC0AC\uC720 \uBC0F \uCC98\uB9AC</div>
                <span style="font-size:10px;font-family:monospace;color:#555;background:#fff;border:1px solid #ddd;border-radius:4px;padding:2px 7px;">st_settle_pay.pay_status_cd</span>
              </div>
              <bo-grid bare :columns="holdReasonColumns" :rows="HOLD_REASON_ROWS" row-key="reason" style="font-size:12px;" />
            </div>
          </template>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC2DC\uC2A4\uD15C =============================================== -->
        <template v-else-if="activeTab==='system'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 16px;">
            \u{1F527} \uC2DC\uC2A4\uD15C \uAD00\uB9AC
          </h3>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div v-for="item in SYS_ITEMS" :key="item.title"
              style="border:1px solid #e0e0e0;border-radius:8px;padding:12px 14px;background:#fafafa;display:flex;gap:10px;align-items:flex-start;">
              <span style="font-size:12px;font-weight:700;color:#1677ff;white-space:nowrap;min-width:100px;">
                {{ item.title }}
              </span>
              <span style="font-size:12px;color:#555;line-height:1.6;">
                {{ item.desc }}
              </span>
            </div>
          </div>
        </template>

        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD0DC\uCF54\uB4DC \uD45C\uC900 ======================================= -->
        <template v-else-if="activeTab==='statusCd'">
          <h3 style="font-size:15px;font-weight:800;color:#333;margin:0 0 6px;">
            \u{1F3F7} \uC0C1\uD0DC\uCF54\uB4DC \uD45C\uC900
          </h3>
          <div style="font-size:12px;color:#555;line-height:1.7;margin-bottom:14px;">
            \uBAA8\uB4E0 <code style="background:#eef2ff;padding:1px 4px;border-radius:3px;">*_status_cd</code> \uCEEC\uB7FC\uC5D0\uB294
            \uC544\uB798 <b>\uACF5\uD1B5\uCF54\uB4DC(sy_code)\uC5D0 \uB4F1\uB85D\uB41C \uAC12\uB9CC</b> \uC800\uC7A5\uD569\uB2C8\uB2E4.
            \uD45C\uC900\uC5D0 \uC5C6\uB294 \uAC12\uC774 \uB4E4\uC5B4\uAC00\uBA74 \uBAA9\uB85D\uC5D0 \uB77C\uBCA8 \uB300\uC2E0 \uCF54\uB4DC\uAC00 \uADF8\uB300\uB85C \uBCF4\uC774\uACE0,
            <b>\uC8FC\uBB38 \uCE78\uBC18\uC5D0\uC11C\uB294 \uD574\uB2F9 \uD56D\uBAA9 \uCE74\uB4DC\uAC00 \uC544\uC608 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</b>
            (\uC0C1\uD0DC\uB97C \uCEEC\uB7FC\uACFC \uC815\uD655\uD788 \uC77C\uCE58\uC2DC\uCF1C \uADF8\uB9AC\uAE30 \uB54C\uBB38).
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;">
            <div v-for="g in STATUS_GROUPS" :key="g.grp"
              style="border:1px solid #e0e0e0;border-radius:8px;padding:10px 12px;background:#fafafa;">
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:800;color:#1677ff;">{{ g.grp }}</span>
                <code style="font-size:10.5px;color:#888;background:#fff;padding:1px 5px;border-radius:3px;">{{ g.col }}</code>
              </div>
              <div style="font-size:11.5px;color:#444;line-height:1.6;">{{ g.codes }}</div>
            </div>
          </div>

          <h4 style="font-size:13px;font-weight:800;color:#b45309;margin:20px 0 6px;">
            \u26A0 2026-07-31 \uC815\uADDC\uD654 \uC774\uB825
          </h4>
          <div style="font-size:12px;color:#555;line-height:1.7;margin-bottom:10px;">
            \uBE44\uD45C\uC900 \uAC12 198\uAC74\uC744 \uD45C\uC900\uC73C\uB85C \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4. \uC608\uC804 \uC5D1\uC140\xB7\uB85C\uADF8\uC5D0\uC11C \uC544\uB798 <b>\uC88C\uCE21 \uAC12</b>\uC744 \uBCF4\uBA74 \uC61B \uCF54\uB4DC\uC785\uB2C8\uB2E4.
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
              <thead>
                <tr style="background:#f5f6fa;">
                  <th style="text-align:left;padding:6px 8px;border:1px solid #e5e7eb;white-space:nowrap;">\uCEEC\uB7FC</th>
                  <th style="text-align:left;padding:6px 8px;border:1px solid #e5e7eb;">\uBE44\uD45C\uC900 \u2192 \uD45C\uC900</th>
                  <th style="text-align:right;padding:6px 8px;border:1px solid #e5e7eb;white-space:nowrap;">\uAC74\uC218</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in STATUS_LEGACY" :key="r.col">
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;font-family:monospace;font-size:10.5px;white-space:nowrap;">{{ r.col }}</td>
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;">{{ r.map }}</td>
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;text-align:right;white-space:nowrap;">{{ r.cnt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 style="font-size:13px;font-weight:800;color:#b45309;margin:20px 0 6px;">
            \u{1F501} \uCF54\uB4DC\uADF8\uB8F9\uBA85 \uC815\uC815 (2026-07-31)
          </h4>
          <div style="font-size:12px;color:#555;line-height:1.7;margin-bottom:10px;">
            \uAC19\uC740 \uAC1C\uB150\uC758 \uCF54\uB4DC\uADF8\uB8F9\uC774 \uB458\uC529 \uC788\uC5B4 \uCEEC\uB7FC\uC774 <b>\uB0A1\uC740 \uCABD</b>\uC744 \uAC00\uB9AC\uD0A4\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBCF8\uC73C\uB85C \uAD50\uCCB4\uD588\uC2B5\uB2C8\uB2E4.
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
              <thead>
                <tr style="background:#f5f6fa;">
                  <th style="text-align:left;padding:6px 8px;border:1px solid #e5e7eb;white-space:nowrap;">\uAE30\uC874(\uB0A1\uC74C)</th>
                  <th style="text-align:left;padding:6px 8px;border:1px solid #e5e7eb;white-space:nowrap;">\uC815\uBCF8</th>
                  <th style="text-align:left;padding:6px 8px;border:1px solid #e5e7eb;">\uBE44\uACE0</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="f in STATUS_GRP_FIX" :key="f.was">
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;font-family:monospace;font-size:10.5px;">{{ f.was }}</td>
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;font-family:monospace;font-size:10.5px;color:#1677ff;font-weight:700;">{{ f.now }}</td>
                  <td style="padding:6px 8px;border:1px solid #e5e7eb;">{{ f.note }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="font-size:11.5px;color:#888;margin-top:14px;line-height:1.6;">
            \uC774 \uBC16\uC5D0 \uB370\uC774\uD130\uAC00 \uC4F0\uB294\uB370 \uC5C6\uB358 \uCF54\uB4DC <b>123\uAC74 \uB4F1\uB85D</b>, \uC5B4\uB514\uC5D0\uB3C4 \uCC38\uC870 \uC5C6\uB294 \uB0A1\uC740 \uCF54\uB4DC <b>9\uAC74 \uC0AD\uC81C</b>.<br>
            \uC0C1\uC138 \uC815\uCC45 \xB7 \uC810\uAC80 SQL \u2192 \uC815\uCC45\uC11C <code>sy.08 \uACF5\uD1B5\uCF54\uB4DC</code> \xA7\uC0C1\uD0DC\uAC12\uC740 \uBC18\uB4DC\uC2DC sy_code \uC5D0 \uC788\uB294 \uAC12\uB9CC \uC800\uC7A5
          </div>
        </template>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. /\uC6B0\uCE21 \uCF58\uD150\uCE20 ============================================= -->
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC14\uB514 ==================================================== -->
    <!-- ===== \u25A0.\u25A0. /\uBC14\uB514 =================================================== -->
  </div>
</bo-modal>
<!-- ===== \u25A1.\u25A1. /\uBC14\uB514 =================================================== -->
<!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
`};
