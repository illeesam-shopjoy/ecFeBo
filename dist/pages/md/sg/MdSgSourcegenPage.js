const SG_FILE_GROUPS=[{title:"Backend (JPA)",short:"JPA",prefix:"backend_jpa/"},{title:"Backend (MyBatis)",short:"MyBatis",prefix:"backend_mybatis/"},{title:"Backend (Python)",short:"Python",prefix:"backend_python/"},{title:"Backend (C# EF Core)",short:"C# EF Core",prefix:"backend_csharp_efcore/"},{title:"Backend (C# Dapper)",short:"C# Dapper",prefix:"backend_csharp_dapper/"},{title:"Backend (NestJS 10)",short:"NestJS 10",prefix:"backend_nestjs/"},{title:"Backend (Express 4)",short:"Express 4",prefix:"backend_expressjs/"},{title:"Vue3 CDN (with common)",prefix:"frontend_vue3cdn_with_common/"},{title:"Vue3 CDN (standalone)",prefix:"frontend_vue3cdn_standalone/"},{title:"Vue3 SFC",prefix:"frontend_vue3/"},{title:"React",prefix:"frontend_react/"},{title:"React CDN (standalone)",prefix:"frontend_react_cdn_standalone/"},{title:"Svelte",prefix:"frontend_svelte/"},{title:"Svelte CDN (standalone)",prefix:"frontend_svelte_cdn_standalone/"},{title:"PyScript CDN (standalone)",prefix:"frontend_pyscript_cdn_standalone/"},{title:"Flutter (Mobile)",prefix:"frontend_flutter/"},{title:"React Native (Mobile)",prefix:"frontend_react_native/"},{title:"Android (Compose)",prefix:"frontend_android/"},{title:"iOS (SwiftUI)",prefix:"frontend_ios/"},{title:"Nuxt 4 + Prisma",prefix:"fullstack_nuxt/"},{title:"Next.js 15 + Prisma",prefix:"fullstack_nextjs/"},{title:"DDL",prefix:"ddl/"}],SG_MOBILE_PREFIXES=["frontend_flutter/","frontend_react_native/","frontend_android/","frontend_ios/"],SG_STACK_SECTIONS=[{label:"Backend",items:SG_FILE_GROUPS.filter(s=>s.prefix.startsWith("backend_"))},{label:"Frontend",items:SG_FILE_GROUPS.filter(s=>s.prefix.startsWith("frontend_")&&!SG_MOBILE_PREFIXES.includes(s.prefix))},{label:"Fullstack",items:SG_FILE_GROUPS.filter(s=>s.prefix.startsWith("fullstack_"))},{label:"\uBAA8\uBC14\uC77C \uC571",items:SG_FILE_GROUPS.filter(s=>SG_MOBILE_PREFIXES.includes(s.prefix))},{label:"\uAE30\uD0C0",items:SG_FILE_GROUPS.filter(s=>s.prefix==="ddl/")}];function fnBuildTree(s){const l={path:"",name:"",children:[],tabs:[]},p={"":l},g=m=>{if(p[m])return p[m];const u=m.split("."),a=u[u.length-1],h=g(u.slice(0,-1).join(".")),T={path:m,name:a,children:[],tabs:[]};return h.children.push(T),p[m]=T,T};return s.forEach(m=>{const u=(m.subPackage||"").trim();(u?g(u):l).tabs.push(m)}),l}function fnCountTabs(s){return s.tabs.length+s.children.reduce((l,p)=>l+fnCountTabs(p),0)}function fnFlattenTree(s,l){const p=[],g=(m,u)=>{m.children.forEach(a=>{p.push({kind:"folder",depth:u,path:a.path,name:a.name,count:fnCountTabs(a)}),l[a.path]||g(a,u+1)}),m.tabs.forEach(a=>p.push({kind:"tab",depth:u,tab:a}))};return g(s,0),p}function fnBuildFileTree(s){const l={path:"",name:"",children:[],files:[]},p={"":l},g=u=>{if(p[u])return p[u];const a=u.split("/"),h=a[a.length-1],T=g(a.slice(0,-1).join("/")),c={path:u,name:h,children:[],files:[]};return T.children.push(c),p[u]=c,c},m=new Set;return s.forEach(u=>{if(m.has(u.realPath))return;m.add(u.realPath);const h=u.realPath.split("/").slice(0,-1).join("/");(h?g(h):l).files.push(u)}),l}function fnFlattenFileTree(s,l){const p=[],g=(m,u)=>{m.children.forEach(a=>{p.push({kind:"folder",depth:u,path:a.path,name:a.name}),l[a.path]||g(a,u+1)}),m.files.forEach(a=>p.push({kind:"file",depth:u,entry:a}))};return g(s,0),p}const SG_STACK_STORAGE_KEY="modu-md-sg-selected-stacks",SG_DEFAULT_STACKS=["backend_jpa/","frontend_react/"];function fnLoadSelectedStacks(){try{const s=localStorage.getItem(SG_STACK_STORAGE_KEY);if(!s)return[...SG_DEFAULT_STACKS];const l=JSON.parse(s);if(!Array.isArray(l)||!l.length)return[...SG_DEFAULT_STACKS];const p=l.filter(g=>SG_FILE_GROUPS.some(m=>m.prefix===g));return p.length?p:[...SG_DEFAULT_STACKS]}catch{return[...SG_DEFAULT_STACKS]}}const SG_STACK_VERSION_STORAGE_KEY="modu-md-sg-stack-versions",SG_STACK_VERSION_OPTIONS=["v1","v2","v3"];function fnLoadStackVersions(){try{const s=localStorage.getItem(SG_STACK_VERSION_STORAGE_KEY),l=s?JSON.parse(s):null;return l&&typeof l=="object"&&!Array.isArray(l)?l:{}}catch{return{}}}const SG_ZIP_PATHS=[{p:"backend_python/",to:"be_python/"},{p:"backend_csharp_efcore/",to:"be_csharp_efcore/"},{p:"backend_csharp_dapper/",to:"be_csharp_dapper/"},{p:"backend_nestjs/",to:"be_nestjs10/"},{p:"backend_expressjs/",to:"be_expressjs4/"},{p:"frontend_vue3cdn_with_common/",to:"fe_vue3_cdn/src/with-common/"},{p:"frontend_vue3cdn_standalone/",to:"fe_vue3_cdn/src/standalone/"},{p:"frontend_vue3/",to:"fe_vue3/src/views/"},{p:"frontend_react_cdn_standalone/",to:"fe_react_cdn/src/"},{p:"frontend_react_native/",to:"fe_react_native/"},{p:"frontend_react/",to:"fe_react/src/pages/"},{p:"frontend_svelte_cdn_standalone/",to:"fe_svelte_cdn/src/"},{p:"frontend_svelte/",to:"fe_svelte/"},{p:"frontend_pyscript_cdn_standalone/",to:"fe_pyscript_cdn/src/"},{p:"frontend_flutter/",to:"fe_flutter/"},{p:"frontend_android/",to:"fe_android_compose/"},{p:"frontend_ios/",to:"fe_ios_swiftui/"},{p:"fullstack_nuxt/",to:"full_nuxt4/"},{p:"fullstack_nextjs/",to:"full_nextjs15/"}];function fnZipPath(s,l){if(s.startsWith("ddl/"))return s;if(s.startsWith("backend_jpa/"))return`be_jpa/src/main/java/${l}/`+s.substring(12);if(s.startsWith("backend_mybatis/mapper/")&&s.endsWith(".xml"))return"be_mybatis/src/main/resources/mapper/"+s.substring(23);if(s.startsWith("backend_mybatis/"))return`be_mybatis/src/main/java/${l}/`+s.substring(16);const p=SG_ZIP_PATHS.find(g=>s.startsWith(g.p));return p?p.to+s.substring(p.p.length):`_misc/${s}`}function fnEffectivePkg(s,l){const p=s||"com.exam.app";return l?p+"."+l:p}function fnExtractOpts(s){const l=(s||"").match(/CREATE\s+TABLE\s+(?:(\w+)\.)?(\w+)/i);if(!l)return null;const p=l[2],g=p.toLowerCase().split("_").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(""),m=p.match(/^([a-z]+)_/i);return{schemaNm:l[1]||"",tableNm:p,classNm:g,endpoint:p.replace(/^[a-z]+_/,""),swaggerTag:g,subPackage:m?m[1].toLowerCase():""}}function fnLangOf(s){const l=(s||"").toLowerCase();return l.endsWith(".java")?"java":l.endsWith(".xml")||l.endsWith(".html")||l.endsWith(".vue")?"markup":l.endsWith(".jsx")?"jsx":l.endsWith(".js")?"javascript":l.endsWith(".sql")?"sql":l.endsWith(".py")?"python":l.endsWith(".cs")?"csharp":l.endsWith(".csproj")?"markup":l.endsWith(".json")?"json":l.endsWith(".dart")?"dart":l.endsWith(".tsx")||l.endsWith(".ts")?"jsx":l.endsWith(".yaml")||l.endsWith(".yml")?"yaml":l.endsWith(".kt")||l.endsWith(".kts")?"kotlin":l.endsWith(".swift")?"swift":l.endsWith(".gradle")?"groovy":(l.endsWith(".prisma")||l.endsWith(".env")||l.endsWith(".example"),"none")}function fnTsSuffix(s){s=s||new Date;const l=p=>String(p).padStart(2,"0");return`_${s.getFullYear()}${l(s.getMonth()+1)}${l(s.getDate())}_${l(s.getHours())}${l(s.getMinutes())}`}const SG_THUMB_W=480,SG_THUMB_H=300;function fnEsc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fnBuildDdlThumbSvg(s,l,p,g){const m=SG_THUMB_W,u=SG_THUMB_H,a=s?s.table:l||"sourcegen",h=s?s.cols.slice(0,9):[],T=s&&s.cols.length>9?s.cols.length-9:0;let c="";return h.forEach((R,j)=>{const U=108+j*20,v=R.isPk?'<tspan fill="#c9a96e" font-weight="700">PK </tspan>':"",_=R.sqlType+(R.size?"("+R.size+")":"");c+=`<text x="26" y="${U}" font-size="12" font-family="Consolas,Monaco,monospace" fill="#cfd3dc">${v}${fnEsc(R.name)}</text><text x="${m-26}" y="${U}" font-size="11" font-family="Consolas,Monaco,monospace" fill="#7f8794" text-anchor="end">${fnEsc(_)}</text>`}),T&&(c+=`<text x="26" y="${108+h.length*20}" font-size="11" font-family="Consolas,Monaco,monospace" fill="#6b727e">\u2026 \uC678 ${T}\uAC1C \uCEEC\uB7FC</text>`),s||(c='<text x="26" y="130" font-size="13" fill="#7f8794">DDL \uBBF8\uC785\uB825 \u2014 \uC800\uC7A5 \uD6C4 DDL \uC744 \uB123\uC73C\uBA74 \uC694\uC57D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4</text>'),`<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${u}" viewBox="0 0 ${m} ${u}"><rect width="${m}" height="${u}" fill="#1e222b"/><rect x="0" y="0" width="${m}" height="4" fill="#c9a96e"/><text x="26" y="44" font-size="11" font-weight="700" fill="#c9a96e" letter-spacing="2">SOURCE GENERATOR</text><text x="26" y="74" font-size="20" font-weight="700" fill="#ffffff" font-family="Consolas,Monaco,monospace">${fnEsc(a)}</text><line x1="26" y1="88" x2="${m-26}" y2="88" stroke="#39404d" stroke-width="1"/>`+c+`<text x="26" y="${u-20}" font-size="11" fill="#6b727e" font-family="Consolas,Monaco,monospace">${fnEsc(p||"")}</text><text x="${m-26}" y="${u-20}" font-size="11" fill="#6b727e" text-anchor="end">${fnEsc(g==="ORACLE"?"Oracle":"PostgreSQL")}</text></svg>`}function fnSvgToPngBlob(s,l,p){return new Promise((g,m)=>{const u=URL.createObjectURL(new Blob([s],{type:"image/svg+xml;charset=utf-8"})),a=new Image;a.onload=()=>{const h=document.createElement("canvas");h.width=l,h.height=p;const T=h.getContext("2d");T.fillStyle="#1e222b",T.fillRect(0,0,l,p),T.drawImage(a,0,0,l,p),URL.revokeObjectURL(u),h.toBlob(c=>c?g(c):m(new Error("\uCE94\uBC84\uC2A4 \uBCC0\uD658 \uC2E4\uD328")),"image/png")},a.onerror=h=>{URL.revokeObjectURL(u),m(h)},a.src=u})}const SG_DDL_SY_CODE_GRP=`CREATE TABLE shopjoy_2604.sy_code_grp (
    code_grp_id   VARCHAR(21)  NOT NULL CONSTRAINT sy_code_grp_pk_code_grp_id PRIMARY KEY,
    reg_site_id   VARCHAR(21)  NOT NULL,
    code_grp      VARCHAR(50)  NOT NULL,
    grp_nm        VARCHAR(100) NOT NULL,
    path_id       VARCHAR(21) ,
    code_grp_desc VARCHAR(300),
    use_yn        VARCHAR(1)   DEFAULT 'Y',
    reg_by        VARCHAR(30) ,
    reg_date      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    upd_by        VARCHAR(30) ,
    upd_date      TIMESTAMP
);
COMMENT ON TABLE  shopjoy_2604.sy_code_grp                IS '\uACF5\uD1B5\uCF54\uB4DC \uADF8\uB8F9';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.code_grp_id    IS '\uCF54\uB4DC\uADF8\uB8F9ID (YYMMDDhhmmss+rand4)';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.reg_site_id    IS '\uC0AC\uC774\uD2B8ID (sy_site.site_id)';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.code_grp       IS '\uCF54\uB4DC\uADF8\uB8F9\uCF54\uB4DC (\uC608: MEMBER_GRADE)';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.grp_nm         IS '\uADF8\uB8F9\uBA85';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.path_id        IS '\uC810(.) \uAD6C\uBD84 \uD45C\uC2DC\uACBD\uB85C (\uD2B8\uB9AC \uBE4C\uB4DC\uC6A9)';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.code_grp_desc  IS '\uCF54\uB4DC\uADF8\uB8F9\uC124\uBA85';
COMMENT ON COLUMN shopjoy_2604.sy_code_grp.use_yn         IS '\uC0AC\uC6A9\uC5EC\uBD80 Y/N';
`,SG_DDL_SY_CODE=`CREATE TABLE shopjoy_2604.sy_code (
    code_id           VARCHAR(21)  NOT NULL CONSTRAINT sy_code_pk_code_id PRIMARY KEY,
    reg_site_id       VARCHAR(21)  NOT NULL,
    code_grp_id       VARCHAR(50)  NOT NULL,
    code_value        VARCHAR(50)  NOT NULL,
    code_label        VARCHAR(100) NOT NULL,
    sort_ord          INTEGER      DEFAULT 0,
    use_yn            VARCHAR(1)   DEFAULT 'Y',
    parent_code_value VARCHAR(50) ,
    child_code_values VARCHAR(500),
    code_remark       VARCHAR(300),
    reg_by            VARCHAR(30) ,
    reg_date          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    upd_by            VARCHAR(30) ,
    upd_date          TIMESTAMP   ,
    code_level        INTEGER     ,
    code_opt1         VARCHAR(200),
    CONSTRAINT sy_code_fk_code_grp_id FOREIGN KEY (code_grp_id) REFERENCES shopjoy_2604.sy_code_grp(code_grp_id)
);
COMMENT ON TABLE  shopjoy_2604.sy_code                    IS '\uACF5\uD1B5\uCF54\uB4DC';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_id            IS '\uCF54\uB4DCID (YYMMDDhhmmss+rand4)';
COMMENT ON COLUMN shopjoy_2604.sy_code.reg_site_id        IS '\uC0AC\uC774\uD2B8ID (sy_site.site_id)';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_grp_id        IS '\uCF54\uB4DC\uADF8\uB8F9ID (sy_code_grp.code_grp_id FK)';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_value         IS '\uCF54\uB4DC\uAC12 (\uC800\uC7A5\uAC12)';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_label         IS '\uCF54\uB4DC\uB77C\uBCA8 (\uD45C\uC2DC\uBA85)';
COMMENT ON COLUMN shopjoy_2604.sy_code.sort_ord           IS '\uC815\uB82C\uC21C\uC11C';
COMMENT ON COLUMN shopjoy_2604.sy_code.use_yn             IS '\uC0AC\uC6A9\uC5EC\uBD80 Y/N';
COMMENT ON COLUMN shopjoy_2604.sy_code.parent_code_value  IS '\uBD80\uBAA8 \uCF54\uB4DC\uAC12 (\uD2B8\uB9AC \uAD6C\uC870 \uC2DC \uC0C1\uC704 code_value)';
COMMENT ON COLUMN shopjoy_2604.sy_code.child_code_values  IS '\uD5C8\uC6A9 \uC790\uC2DD/\uC804\uC774 \uCF54\uB4DC\uAC12 \uBAA9\uB85D (^VAL1^VAL2^ \uD615\uC2DD)';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_remark        IS '\uBE44\uACE0';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_level         IS '\uCF54\uB4DC \uD2B8\uB9AC \uB808\uBCA8 (1=\uB8E8\uD2B8, 2=\uC911\uAC04, 3=\uB9AC\uD504 \uB4F1)';
COMMENT ON COLUMN shopjoy_2604.sy_code.code_opt1          IS '\uCF54\uB4DC\uBCC4 \uBD80\uAC00 \uC635\uC158 1 (\uC0C9\uC0C1 hex, \uC544\uC774\uCF58 \uD074\uB798\uC2A4 \uB4F1)';
`,SG_DDL_SY_NOTICE=`CREATE TABLE shopjoy_2604.sy_notice (
    notice_id        VARCHAR(21)  NOT NULL CONSTRAINT sy_notice_pk_notice_id PRIMARY KEY,
    reg_site_id      VARCHAR(21)  NOT NULL,
    notice_title     VARCHAR(200) NOT NULL,
    notice_type_cd   VARCHAR(30) ,
    is_fixed         VARCHAR(1)   DEFAULT 'N',
    content_html     TEXT        ,
    start_date       TIMESTAMP   ,
    end_date         TIMESTAMP   ,
    notice_status_cd VARCHAR(20)  DEFAULT 'ACTIVE',
    view_count       INTEGER      DEFAULT 0,
    reg_by           VARCHAR(30) ,
    reg_date         TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    upd_by           VARCHAR(30) ,
    upd_date         TIMESTAMP
);
COMMENT ON TABLE  shopjoy_2604.sy_notice                  IS '\uACF5\uC9C0\uC0AC\uD56D';
COMMENT ON COLUMN shopjoy_2604.sy_notice.notice_id        IS '\uACF5\uC9C0ID (YYMMDDhhmmss+rand4)';
COMMENT ON COLUMN shopjoy_2604.sy_notice.reg_site_id      IS '\uC0AC\uC774\uD2B8ID (sy_site.site_id)';
COMMENT ON COLUMN shopjoy_2604.sy_notice.notice_title     IS '\uC81C\uBAA9';
COMMENT ON COLUMN shopjoy_2604.sy_notice.notice_type_cd   IS '\uACF5\uC9C0\uC720\uD615 (\uCF54\uB4DC: NOTICE_TYPE)';
COMMENT ON COLUMN shopjoy_2604.sy_notice.is_fixed         IS '\uC0C1\uB2E8\uACE0\uC815 Y/N';
COMMENT ON COLUMN shopjoy_2604.sy_notice.content_html     IS '\uB0B4\uC6A9 (HTML)';
COMMENT ON COLUMN shopjoy_2604.sy_notice.start_date       IS '\uB178\uCD9C\uC2DC\uC791\uC77C';
COMMENT ON COLUMN shopjoy_2604.sy_notice.end_date         IS '\uB178\uCD9C\uC885\uB8CC\uC77C';
COMMENT ON COLUMN shopjoy_2604.sy_notice.notice_status_cd IS '\uC0C1\uD0DC (ACTIVE/INACTIVE)';
COMMENT ON COLUMN shopjoy_2604.sy_notice.view_count       IS '\uC870\uD68C\uC218';
`,SG_SAMPLE_GROUPS=[{db:"POSTGRESQL",dbLabel:"PostgreSQL",items:[{key:"pg1",label:"zz_exam1",desc:"\uB2E8\uC77C PK",text:`CREATE TABLE shopjoy_2604.zz_exam1 (
    exam1_id  VARCHAR(20)   NOT NULL,
    exam1_nm  VARCHAR(20)   NOT NULL,
    col11     VARCHAR(200)  NULL,
    col12     VARCHAR(200)  NULL,
    col13     VARCHAR(200)  NULL,
    reg_id    VARCHAR(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam1 PRIMARY KEY (exam1_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam1            IS 'zz_exam1';
COMMENT ON COLUMN shopjoy_2604.zz_exam1.exam1_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam1.exam1_nm   IS '\uC774\uB984';
`},{key:"pg2",label:"zz_exam2",desc:"\uBCF5\uD569 PK 2\uAC1C",text:`CREATE TABLE shopjoy_2604.zz_exam2 (
    exam1_id  VARCHAR(20)   NOT NULL,
    exam2_id  VARCHAR(20)   NOT NULL,
    exam2_nm  VARCHAR(20)   NOT NULL,
    col21     VARCHAR(200)  NULL,
    col22     VARCHAR(200)  NULL,
    reg_id    VARCHAR(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam2 PRIMARY KEY (exam1_id, exam2_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam2            IS 'zz_exam2';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam1_id   IS 'PK (zz_exam1 \uCC38\uC870)';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam2_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam2_nm   IS '\uC774\uB984';
`},{key:"pg3",label:"zz_exam3",desc:"\uBCF5\uD569 PK 3\uAC1C",text:`CREATE TABLE shopjoy_2604.zz_exam3 (
    exam1_id  VARCHAR(20)   NOT NULL,
    exam2_id  VARCHAR(20)   NOT NULL,
    exam3_id  VARCHAR(20)   NOT NULL,
    exam3_nm  VARCHAR(20)   NOT NULL,
    col31     VARCHAR(200)  NULL,
    col32     VARCHAR(200)  NULL,
    reg_id    VARCHAR(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam3 PRIMARY KEY (exam1_id, exam2_id, exam3_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam3            IS 'zz_exam3';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam1_id   IS 'PK (zz_exam1 \uCC38\uC870)';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam2_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam3_nm   IS '\uC774\uB984';
`},{key:"pgcg",label:"sy_code_grp",desc:"\uACF5\uD1B5\uCF54\uB4DC \uADF8\uB8F9",text:SG_DDL_SY_CODE_GRP},{key:"pgc",label:"sy_code",desc:"FK \uCC38\uC870(\uCF54\uB4DC)",text:SG_DDL_SY_CODE},{key:"pgn",label:"sy_notice",desc:"\uACF5\uC9C0\uC0AC\uD56D",text:SG_DDL_SY_NOTICE},{key:"pgs",label:"ShopJoy \uC2A4\uD0C0\uC77C",desc:"\uC778\uB77C\uC778 PK",text:`CREATE TABLE shopjoy_2604.md_sg_project (
    project_id        VARCHAR(21)  NOT NULL CONSTRAINT md_sg_project_pk_project_id PRIMARY KEY,
    site_id           VARCHAR(21)  NOT NULL,
    reg_site_id       VARCHAR(21)  NOT NULL,
    project_nm        VARCHAR(200) NOT NULL,
    project_desc      VARCHAR(500),
    base_package      VARCHAR(200),
    db_type_cd        VARCHAR(20),
    ddl_count         INTEGER,
    last_gen_date     TIMESTAMP,
    use_yn            VARCHAR(1),
    reg_by            VARCHAR(30),
    reg_date          TIMESTAMP,
    upd_by            VARCHAR(30),
    upd_date          TIMESTAMP
);
COMMENT ON TABLE  shopjoy_2604.md_sg_project              IS '\uC18C\uC2A4\uC820 \uD504\uB85C\uC81D\uD2B8 \uB9C8\uC2A4\uD130';
COMMENT ON COLUMN shopjoy_2604.md_sg_project.project_id   IS '\uD504\uB85C\uC81D\uD2B8ID';
COMMENT ON COLUMN shopjoy_2604.md_sg_project.project_nm   IS '\uD504\uB85C\uC81D\uD2B8\uBA85';
COMMENT ON COLUMN shopjoy_2604.md_sg_project.base_package IS 'Base Package';
`}]},{db:"ORACLE",dbLabel:"Oracle",items:[{key:"or1",label:"zz_exam1",desc:"\uB2E8\uC77C PK",text:`CREATE TABLE shopjoy_2604.zz_exam1 (
    exam1_id  VARCHAR2(20)   NOT NULL,
    exam1_nm  VARCHAR2(20)   NOT NULL,
    col11     VARCHAR2(200)  NULL,
    col12     VARCHAR2(200)  NULL,
    col13     VARCHAR2(200)  NULL,
    reg_id    VARCHAR2(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR2(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam1 PRIMARY KEY (exam1_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam1            IS 'zz_exam1';
COMMENT ON COLUMN shopjoy_2604.zz_exam1.exam1_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam1.exam1_nm   IS '\uC774\uB984';
`},{key:"or2",label:"zz_exam2",desc:"\uBCF5\uD569 PK 2\uAC1C",text:`CREATE TABLE shopjoy_2604.zz_exam2 (
    exam1_id  VARCHAR2(20)   NOT NULL,
    exam2_id  VARCHAR2(20)   NOT NULL,
    exam2_nm  VARCHAR2(20)   NOT NULL,
    col21     VARCHAR2(200)  NULL,
    col22     VARCHAR2(200)  NULL,
    reg_id    VARCHAR2(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR2(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam2 PRIMARY KEY (exam1_id, exam2_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam2            IS 'zz_exam2';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam1_id   IS 'PK (zz_exam1 \uCC38\uC870)';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam2_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam2.exam2_nm   IS '\uC774\uB984';
`},{key:"or3",label:"zz_exam3",desc:"\uBCF5\uD569 PK 3\uAC1C",text:`CREATE TABLE shopjoy_2604.zz_exam3 (
    exam1_id  VARCHAR2(20)   NOT NULL,
    exam2_id  VARCHAR2(20)   NOT NULL,
    exam3_id  VARCHAR2(20)   NOT NULL,
    exam3_nm  VARCHAR2(20)   NOT NULL,
    col31     VARCHAR2(200)  NULL,
    col32     VARCHAR2(200)  NULL,
    reg_id    VARCHAR2(20)   NULL,
    reg_dt    TIMESTAMP     NULL,
    upd_id    VARCHAR2(20)   NULL,
    upd_dt    TIMESTAMP     NULL,
    CONSTRAINT pk_zz_exam3 PRIMARY KEY (exam1_id, exam2_id, exam3_id)
);
COMMENT ON TABLE  shopjoy_2604.zz_exam3            IS 'zz_exam3';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam1_id   IS 'PK (zz_exam1 \uCC38\uC870)';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam2_id   IS 'PK';
COMMENT ON COLUMN shopjoy_2604.zz_exam3.exam3_nm   IS '\uC774\uB984';
`},{key:"orcg",label:"sy_code_grp",desc:"\uACF5\uD1B5\uCF54\uB4DC \uADF8\uB8F9",text:fnPgDdlToOracle(SG_DDL_SY_CODE_GRP)},{key:"orc",label:"sy_code",desc:"FK \uCC38\uC870(\uCF54\uB4DC)",text:fnPgDdlToOracle(SG_DDL_SY_CODE)},{key:"orn",label:"sy_notice",desc:"\uACF5\uC9C0\uC0AC\uD56D",text:fnPgDdlToOracle(SG_DDL_SY_NOTICE)},{key:"ors",label:"ShopJoy \uC2A4\uD0C0\uC77C",desc:"\uC778\uB77C\uC778 PK",text:`CREATE TABLE shopjoy_2604.md_sg_project (
    project_id        VARCHAR2(21)  NOT NULL CONSTRAINT md_sg_project_pk_project_id PRIMARY KEY,
    site_id           VARCHAR2(21)  NOT NULL,
    project_nm        VARCHAR2(200) NOT NULL,
    base_package      VARCHAR2(200),
    ddl_count         NUMBER,
    last_gen_date     TIMESTAMP,
    use_yn            VARCHAR2(1),
    reg_by            VARCHAR2(30),
    reg_date          TIMESTAMP
);
COMMENT ON TABLE  shopjoy_2604.md_sg_project              IS '\uC18C\uC2A4\uC820 \uD504\uB85C\uC81D\uD2B8 \uB9C8\uC2A4\uD130';
COMMENT ON COLUMN shopjoy_2604.md_sg_project.project_nm   IS '\uD504\uB85C\uC81D\uD2B8\uBA85';
`}]}],fnMk=(s,l)=>l.map(p=>({dir:s,fn:p})),SGD_MB=fnMk("ec",["mb_device_token","mb_like","mb_member","mb_member_addr","mb_member_grade","mb_member_group","mb_member_group_map","mb_member_role","mb_member_sns","mbh_member_login_log","mbh_member_token_log"]),SGD_PD=fnMk("ec",["pd_category","pd_category_prod","pd_dliv_tmplt","pd_prod","pd_prod_bundle_item","pd_prod_content","pd_prod_img","pd_prod_opt","pd_prod_plan","pd_prod_qna","pd_prod_rel","pd_prod_set_item","pd_prod_sku","pd_prod_stock","pd_prod_tag","pd_restock_noti","pd_review","pd_review_attach","pd_review_comment","pd_tag","pdh_prod_chg_hist","pdh_prod_content_chg_hist","pdh_prod_sku_chg_hist","pdh_prod_sku_price_hist","pdh_prod_sku_stock_hist","pdh_prod_status_hist","pdh_prod_view_log"]),SGD_OD=fnMk("ec",["od_cart","od_claim","od_claim_item","od_dliv","od_dliv_item","od_order","od_order_discnt","od_order_item","od_order_item_discnt","od_pay","od_pay_method","od_refund","od_refund_method","odh_claim_chg_hist","odh_claim_item_chg_hist","odh_claim_item_status_hist","odh_claim_status_hist","odh_dliv_chg_hist","odh_dliv_item_chg_hist","odh_dliv_status_hist","odh_order_chg_hist","odh_order_item_chg_hist","odh_order_item_status_hist","odh_order_status_hist","odh_pay_chg_hist","odh_pay_status_hist"]),SGD_PM=fnMk("ec",["pm_cache","pm_coupon","pm_coupon_issue","pm_coupon_item","pm_coupon_prod","pm_coupon_usage","pm_discnt","pm_discnt_item","pm_discnt_prod","pm_discnt_usage","pm_event","pm_event_benefit","pm_event_item","pm_event_prod","pm_gift","pm_gift_cond","pm_gift_issue","pm_plan","pm_plan_item","pm_save","pm_save_issue","pm_save_item","pm_save_policy","pm_save_prod","pm_save_usage","pm_voucher","pm_voucher_issue"]),SGD_DP=fnMk("ec",["dp_area","dp_panel","dp_panel_item","dp_ui","dp_widget","dp_widget_lib"]),SGD_ST=fnMk("ec",["st_erp_voucher","st_erp_voucher_line","st_recon","st_settle","st_settle_adj","st_settle_close","st_settle_config","st_settle_etc_adj","st_settle_item","st_settle_pay","st_settle_raw"]),SGD_CM=fnMk("ec",["cm_blog","cm_blog_cate","cm_blog_file","cm_blog_good","cm_blog_reply","cm_blog_tag","cm_chatt","cm_chatt_member","cm_chatt_msg","cm_dashboard","cm_dashboard_item","cm_dashboard_item_data","cm_dashboard_menu","cm_faq","cm_path","cm_popup","cm_popup_item","cmh_push_log"]),SGD_SY=fnMk("sy",["sy_alarm","sy_attach","sy_batch","sy_bbm","sy_bbs","sy_brand","sy_code","sy_code_grp","sy_contact","sy_dept","sy_exceldown","sy_i18n","sy_menu","sy_noti","sy_notice","sy_path","sy_prop","sy_role","sy_role_menu","sy_site","sy_template","sy_user","sy_user_bookmark","sy_user_pref","sy_user_role","sy_vendor","sy_vendor_brand","sy_vendor_content","sy_vendor_user","sy_vendor_user_role","sy_voc","syh_access_error_log","syh_access_log","syh_alarm_send_hist","syh_api_log","syh_batch_hist","syh_batch_log","syh_ext_test_log","syh_send_email_log","syh_send_msg_log","syh_user_login_log","syh_user_token_log"]),SGD_ZZ=[...fnMk("ec",["zz_exam1","zz_exam2","zz_exam3","zz_exmy1","zz_exmy2","zz_exmy3","zz_sample0","zz_sample1","zz_sample2","zz_sample3"]),...fnMk("sy",["zz_sample0","zz_sample1","zz_sample2"])],SGD_MD=[...fnMk("cb",["md_cb_pattern","md_cb_pattern_cell","md_cb_pattern_yarn","md_cb_symbol","md_cb_yarn"]),...fnMk("sg",["md_sg_download_hist","md_sg_project","md_sg_sourcegen","md_sg_sourcegen_hist","md_sg_stack"])],SG_TEMPLATE_DOMAINS=[{key:"all",label:"shopjoy_2604 \uC804\uCCB4",files:[...SGD_MB,...SGD_PD,...SGD_OD,...SGD_PM,...SGD_DP,...SGD_ST,...SGD_CM,...SGD_SY,...SGD_ZZ,...SGD_MD]},{key:"mb",label:"\uD68C\uC6D0\uAD00\uB9AC",files:SGD_MB},{key:"pd",label:"\uC0C1\uD488\uAD00\uB9AC",files:SGD_PD},{key:"od",label:"\uC8FC\uBB38\uAD00\uB9AC",files:SGD_OD},{key:"pm",label:"\uD504\uB85C\uBAA8\uC158\uAD00\uB9AC",files:SGD_PM},{key:"dp",label:"\uC804\uC2DC\uAD00\uB9AC",files:SGD_DP},{key:"st",label:"\uC815\uC0B0\uAD00\uB9AC",files:SGD_ST},{key:"cm",label:"\uACF5\uD1B5\uAD00\uB9AC",files:SGD_CM},{key:"sy",label:"\uC2DC\uC2A4\uD15C\uAD00\uB9AC",files:SGD_SY},{key:"zz",label:"\uC0D8\uD50C(zz)",files:SGD_ZZ},{key:"md",label:"\uBAA8\uB4C8(md)",files:SGD_MD},{key:"sy_cm",label:"\uC2DC\uC2A4\uD15C\uAD00\uB9AC + \uACF5\uD1B5\uAD00\uB9AC",files:[...SGD_SY,...SGD_CM]},{key:"sy_zz",label:"\uC2DC\uC2A4\uD15C\uAD00\uB9AC + \uC0D8\uD50C(zz)",files:[...SGD_SY,...SGD_ZZ]},{key:"sy_zz_cm",label:"\uC2DC\uC2A4\uD15C\uAD00\uB9AC + \uC0D8\uD50C(zz) + \uACF5\uD1B5\uAD00\uB9AC",files:[...SGD_SY,...SGD_ZZ,...SGD_CM]}];function fnDownloadTs(){const s=new Date,l=p=>String(p).padStart(2,"0");return`${s.getFullYear()}${l(s.getMonth()+1)}${l(s.getDate())}_${l(s.getHours())}${l(s.getMinutes())}`}function fnPgDdlToOracle(s){return s.replace(/\bVARCHAR\(/gi,"VARCHAR2(").replace(/\bTEXT\b/g,"CLOB").replace(/\bBOOLEAN\b/gi,"NUMBER(1)").replace(/\bBIGINT\b/gi,"NUMBER(19)").replace(/\bINTEGER\b/gi,"NUMBER(10)").replace(/\bDEFAULT\s+CURRENT_TIMESTAMP\b/gi,"DEFAULT SYSTIMESTAMP").replace(/\s+USING\s+btree\s*/gi," ").replace(/::[a-zA-Z_][a-zA-Z_ ]*/g,"")}window.MdSgSourcegenPage={name:"MdSgSourcegenPage",props:{showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(s){const{reactive:l,ref:p,computed:g,watch:m,onMounted:u}=Vue,a=l({loading:!1,generating:!1,thumbUploading:!1,autoThumb:!0,dtlMode:"edit",activeTabId:null,activeFile:"",resultTabId:null,resultScopeKind:"root",resultScopePath:"",resultTreeCollapsed:{},genFileTreeCollapsed:{},treeNewFolderParent:null,treeNewFolderText:"",treeRenamePath:null,treeRenameText:"",treeDragKind:null,treeDragTabId:null,treeDragFolderPath:null,treeCollapsed:{},copied:!1,genMemo:"",templateModalOpen:!1,templateDbTab:"POSTGRESQL",templateDownloadingKey:"",stackPopOpen:!1,uploadModalOpen:!1,uploadDbType:"POSTGRESQL",uploadReplaceExisting:!0,uploading:!1,autoFolderByPrefix:!0,histTab:"gen"}),h=l(fnLoadSelectedStacks()),T=l(fnLoadStackVersions()),c=l({projectId:null,projectNm:"",projectDesc:"",basePackage:"com.exam.app",dbTypeCd:"POSTGRESQL",thumbnailUrl:"",thumbnailAttachId:null}),R=p(null),j=p(null);let U=0;const v=(e={})=>({tabId:++U,tabNo:0,ddlText:"",schemaNm:"",tableNm:"",classNm:"",endpoint:"",swaggerTag:"",subPackage:"",files:{},error:"",generatedAt:"",...e}),_=l([v()]),M=l([]),C=l({pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[10,20,50]}),A=l({pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[10,20,50]}),$=[{key:"regDate",label:"\uC77C\uC2DC",width:"150px",fmt:e=>coUtil.cofYmdHm(e)||"-"},{key:"projectNm",label:"\uAD6C\uBD84",width:"160px",fmt:e=>e||"(\uC81C\uBAA9\uC5C6\uC74C)"},{key:"selectedStacks",label:"\uC120\uD0DD \uC5B8\uC5B4/\uC2A4\uD0DD",fmt:e=>e||"-",cellTitle:e=>e||"",noEllipsis:!0,cellStyle:"font-size:10.5px;line-height:1.5;white-space:normal;word-break:break-word;"},{key:"fileCount",label:"\uAC74\uC218",width:"80px",align:"center",fmt:e=>e||0},{key:"genMemo",label:"\uBA54\uBAA8",width:"140px",fmt:e=>e||"-"},{key:"memberNm",label:"\uB2E4\uC6B4\uB85C\uB4DC\uC790",width:"100px",fmt:(e,t)=>e||(t==null?void 0:t.regBy)||"-"}];$.push({type:"actions",actions:[{label:"\uB2E4\uC6B4\uB85C\uB4DC",cls:"sg-hist-link",href:e=>e.zipUrl,visible:e=>!!e.zipUrl}]});const K=[{key:"genDate",label:"\uC0DD\uC131\uC77C\uC2DC",width:"150px",fmt:e=>coUtil.cofYmdHm(e)||"-"},{key:"selectedStacks",label:"\uC120\uD0DD \uC5B8\uC5B4/\uC2A4\uD0DD",fmt:e=>e||"-",cellTitle:e=>e||"",noEllipsis:!0,cellStyle:"font-size:10.5px;line-height:1.5;white-space:normal;word-break:break-word;"},{key:"ddlCount",label:"\uD14C\uC774\uBE14",width:"80px",align:"center",fmt:e=>e||0},{key:"fileCount",label:"\uD30C\uC77C\uC218",width:"80px",align:"center",fmt:e=>e||0},{key:"zipFileSize",label:"\uD06C\uAE30",width:"90px",align:"right",fmt:e=>coUtil.cofFileSize(e)},{key:"downloadCount",label:"\uB2E4\uC6B4\uB85C\uB4DC\uC218",width:"90px",align:"center",fmt:e=>e||0},{key:"genMemo",label:"\uBA54\uBAA8",fmt:e=>e||"-"},{key:"regUserNm",label:"\uC0DD\uC131\uC790",width:"100px",fmt:(e,t)=>e||(t==null?void 0:t.memberNm)||(t==null?void 0:t.regBy)||"-"}],k=g(()=>a.dtlMode==="view"),ie=g(()=>!k.value&&a.resultScopeKind==="root"&&w.value>0);K.push({type:"actions",actions:[{label:"\uB2E4\uC6B4\uB85C\uB4DC",cls:"sg-hist-link",onClick:e=>St(e),visible:e=>!!e.zipUrl},{label:"\uBD88\uB7EC\uC624\uAE30",cls:"btn btn-xs btn_detail",onClick:e=>vt(e),visible:e=>!!e.ddlSnapshotJson},{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",onClick:e=>re(e),visible:()=>!k.value}]});const de=g(()=>!c.projectId),I=g(()=>_.find(e=>e.tabId===a.activeTabId)||_[0]),w=g(()=>_.reduce((e,t)=>e+Object.keys(t.files).length,0)),S=g(()=>_.filter(e=>(e.ddlText||"").trim())),z=g(()=>_.filter(e=>Object.keys(e.files).length)),pe=g(()=>fnBuildTree(z.value)),_e=g(()=>fnFlattenTree(pe.value,a.resultTreeCollapsed)),Y=g(()=>{if(a.resultScopeKind==="tab"){const e=_.find(t=>t.tabId===a.resultTabId);return e&&Object.keys(e.files).length?[e]:[]}if(a.resultScopeKind==="folder"){const e=a.resultScopePath;return z.value.filter(t=>(t.subPackage||"")===e||(t.subPackage||"").startsWith(e+"."))}return z.value}),ge=g(()=>{if(a.resultScopeKind==="tab"){const e=_.find(t=>t.tabId===a.resultTabId);return e&&e.tableNm||"\uD14C\uC774\uBE14"}return a.resultScopeKind==="folder"?a.resultScopePath||"\uCD5C\uC0C1\uC704":"\uC804\uCCB4"}),P=g(()=>{const e=Y.value,t=e.length>1,o=[];return e.forEach(n=>{const r=fnEffectivePkg(c.basePackage,n.subPackage).replace(/\./g,"/");Object.keys(n.files).forEach(i=>{o.push({key:n.tabId+"::"+i,fn:i,tableNm:n.tableNm||"(\uC774\uB984\uC5C6\uC74C)",content:n.files[i],multi:t,realPath:fnZipPath(i,r)})})}),o}),ue=g(()=>fnBuildFileTree(P.value)),W=g(()=>fnFlattenFileTree(ue.value,a.genFileTreeCollapsed)),me=g(()=>W.value.filter(e=>e.kind==="file").length),F=g(()=>P.value.find(e=>e.key===a.activeFile)||null),be=g(()=>Y.value.length),fe=g(()=>{if(a.resultScopeKind!=="tab")return"";const e=_.find(t=>t.tabId===a.resultTabId);return e?e.generatedAt:""}),H=e=>{if(!e||a.autoFolderByPrefix)return e;const{subPackage:t,...o}=e;return o},he=()=>{const e=I.value,t=H(fnExtractOpts(e.ddlText));t&&Object.assign(e,t),L()},L=()=>{if(k.value||c.projectNm&&c.projectNm.trim())return;const e=S.value[0];!e||!e.tableNm||(c.projectNm=e.tableNm+fnTsSuffix())},Z=async(e,t)=>{t&&(c.dbTypeCd=t);const o=fnExtractOpts(e.text),n=o&&_.find(d=>d.tableNm===o.tableNm&&(d.ddlText||"").trim());if(n){if(!await s.showConfirm("\uC0D8\uD50C \uB123\uAE30",`[${n.tableNm}] \uD14C\uC774\uBE14\uC774 \uC774\uBBF8 \uC788\uC2B5\uB2C8\uB2E4. \uB36E\uC5B4\uC4F0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;a.activeTabId=n.tabId,Object.assign(n,H(o),{ddlText:e.text,files:{},error:"",generatedAt:""}),L();return}const r=I.value,i=r&&!(r.ddlText||"").trim()?r:v();i!==r&&(_.push(i),a.activeTabId=i.tabId),i.ddlText=e.text,o&&Object.assign(i,H(o)),i.files={},i.error="",i.generatedAt="",L()},ye=async e=>{const t=e.target.value;if(e.target.value="",!t)return;const[o,n]=t.split("::"),r=SG_SAMPLE_GROUPS.find(d=>d.db===o),i=r&&r.items.find(d=>d.key===n);i&&await Z(i,o)},Te=()=>{var e;k.value||a.thumbUploading||(e=R.value)==null||e.click()},Ne=()=>{c.thumbnailUrl="",c.thumbnailAttachId=null},ve=async e=>{var n,r,i;const t=(n=e.target.files)==null?void 0:n[0];if(e.target.value="",!t)return;const o=(t.name.split(".").pop()||"").toLowerCase();if(!["jpg","jpeg","png","gif","webp"].includes(o)){s.showToast("\uC774\uBBF8\uC9C0 \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error");return}if(t.size>5*1024*1024){s.showToast("5MB \uC774\uD558 \uC774\uBBF8\uC9C0\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error");return}a.thumbUploading=!0;try{const d=new FormData;d.append("files",t),d.append("businessCode","md_sg_project");const f=(((i=(r=(await coApiSvc.cmUpload.uploadMulti(d,"\uC18C\uC2A4\uC820","\uB300\uD45C\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC")).data)==null?void 0:r.data)==null?void 0:i.files)||[])[0];f&&(c.thumbnailUrl=f.cdnImgUrl||f.attachUrl||"",c.thumbnailAttachId=f.attachId||null,s.showToast("\uB300\uD45C\uC774\uBBF8\uC9C0\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"))}catch(d){s.showToast(coUtil.cofErrMsg(d,"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{a.thumbUploading=!1}},Se=async()=>{var e,t;try{const o=S.value[0];let n=null;if(o&&typeof gnParseDdl=="function")try{n=gnParseDdl(o.ddlText,c.dbTypeCd==="ORACLE"?"oracle":"postgresql")}catch{n=null}const r=fnBuildDdlThumbSvg(n,c.projectNm,c.basePackage,c.dbTypeCd),i=await fnSvgToPngBlob(r,SG_THUMB_W,SG_THUMB_H),d=new FormData;d.append("files",i,"sg-thumb.png"),d.append("businessCode","md_sg_project");const f=(((t=(e=(await coApiSvc.cmUpload.uploadMulti(d,"\uC18C\uC2A4\uC820","\uB300\uD45C\uC774\uBBF8\uC9C0\uC790\uB3D9\uC0DD\uC131")).data)==null?void 0:e.data)==null?void 0:t.files)||[])[0];f&&(c.thumbnailUrl=f.cdnImgUrl||f.attachUrl||"",c.thumbnailAttachId=f.attachId||null)}catch{}},V=p(null),B=async()=>{if(await Vue.nextTick(),typeof Prism=="undefined"||!V.value)return;const e=V.value.querySelector("code");e&&Prism.highlightElement(e)},x=p(null),Ce=async()=>{if(await Vue.nextTick(),typeof Prism=="undefined"||!x.value)return;const e=x.value.querySelector("code");e&&Prism.highlightElement(e)};m(()=>[k.value,I.value?I.value.ddlText:null],()=>Ce(),{immediate:!0});const Re=e=>{x.value&&(x.value.scrollTop=e.target.scrollTop,x.value.scrollLeft=e.target.scrollLeft)},q=async e=>{var i,d;const o=(i=(await mdSgApiSvc.project.getById(e,"\uC18C\uC2A4\uC820","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:i.data;if(!o){s.showToast("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4.","error");return}Object.assign(c,{projectId:o.projectId,projectNm:o.projectNm,projectDesc:o.projectDesc||"",basePackage:o.basePackage||"com.exam.app",dbTypeCd:o.dbTypeCd||"POSTGRESQL",thumbnailUrl:o.thumbnailUrl||"",thumbnailAttachId:o.thumbnailAttachId||null});const r=((d=(await mdSgApiSvc.ddl.getList(o.projectId,"\uC18C\uC2A4\uC820","DDL\uC870\uD68C")).data)==null?void 0:d.data)||[];_.splice(0,_.length,...r.length?r.map(b=>v({tabNo:b.tabNo||0,ddlText:b.ddlText||"",schemaNm:b.schemaNm||"",tableNm:b.tableNm||"",classNm:b.classNm||"",endpoint:b.endpoint||"",swaggerTag:b.swaggerTag||"",subPackage:b.subPackage||""})):[v()]),await O(o.projectId,!0),a.dtlMode="view",a.activeTabId=_[0].tabId},O=async(e,t)=>{var r;t&&(C.pageNo=1);const n=((r=(await mdSgApiSvc.genHist.getPage({projectId:e,pageNo:C.pageNo,pageSize:C.pageSize},"\uC18C\uC2A4\uC820","\uC0DD\uC131\uC774\uB825\uC870\uD68C")).data)==null?void 0:r.data)||{};M.splice(0,M.length,...n.pageList||[]),C.pageTotalCount=n.pageTotalCount||0,C.pageTotalPage=n.pageTotalPage||1},Ae=e=>{C.pageNo=e,O(c.projectId)},we=()=>{O(c.projectId,!0)},J=()=>{location.href="fo-md-sg-sourcegen.html?view=list"},ke=()=>{Object.assign(c,{projectId:null,projectNm:"",projectDesc:"",basePackage:"com.exam.app",dbTypeCd:"POSTGRESQL",thumbnailUrl:"",thumbnailAttachId:null}),_.splice(0,_.length,v()),M.splice(0,M.length),Object.assign(C,{pageNo:1,pageTotalCount:0,pageTotalPage:1}),a.dtlMode="edit",a.activeTabId=_[0].tabId,a.activeFile="",history.replaceState(null,"","fo-md-sg-sourcegen.html?view=editor")},Le=()=>{a.dtlMode="edit"},xe=async()=>{c.projectId&&await q(c.projectId),a.dtlMode="view"},Oe=()=>{a.templateModalOpen=!0},Ee=()=>{a.templateModalOpen=!1},Me=e=>{a.templateDbTab=e},Ie=()=>{a.uploadModalOpen=!0},Pe=e=>{a.uploadDbType=e},De=()=>{var e;(e=j.value)==null||e.click()},je=e=>{const t=/CREATE\s+TABLE\s+/gi,o=[];let n;for(;n=t.exec(e);)o.push(n.index);return o.length?o.map((r,i)=>e.slice(r,i+1<o.length?o[i+1]:e.length).trim()):[]},Ue=async e=>{var n;const t=(n=e.target.files)==null?void 0:n[0];if(e.target.value="",!t)return;const o=t.name.toLowerCase();if(!/\.(txt|sql|zip)$/.test(o)){s.showToast("txt, sql, zip \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error");return}a.uploading=!0;try{const r=[];if(o.endsWith(".zip")){if(typeof JSZip!="function")throw new Error("JSZip \uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");const f=await JSZip.loadAsync(t),y=Object.values(f.files).filter(N=>!N.dir&&/\.(txt|sql)$/i.test(N.name));if(!y.length)throw new Error("ZIP \uC548\uC5D0 txt/sql \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");for(const N of y)r.push(await N.async("text"))}else r.push(await t.text());const d=a.uploadDbType==="ORACLE"?"oracle":"postgresql",b=[];if(r.forEach(f=>{je(f).forEach(y=>{const N=fnExtractOpts(y);if(N){try{gnParseDdl(y,d)}catch{return}b.push(v({ddlText:y,...H(N)}))}})}),!b.length)throw new Error("CREATE TABLE \uAD6C\uBB38\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");if(a.uploadReplaceExisting){if(S.value.length&&!await s.showConfirm("\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB85C\uB4DC",`\uC5C5\uB85C\uB4DC\uD55C \uB0B4\uC6A9\uC73C\uB85C \uD604\uC7AC DDL \uD0ED\uC744 \uC804\uBD80 \uAD50\uCCB4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
(\uD604\uC7AC \uC785\uB825\uB41C \uB0B4\uC6A9\uC740 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4)`))return;_.splice(0,_.length,...b)}else b.forEach(f=>_.push(f));c.dbTypeCd=a.uploadDbType,a.activeTabId=b[0].tabId,a.uploadModalOpen=!1,L(),s.showToast(`${b.length}\uAC1C \uD14C\uC774\uBE14\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`,"success")}catch(r){s.showToast(r.message||"\uC5C5\uB85C\uB4DC \uD30C\uC77C \uCC98\uB9AC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{a.uploading=!1}},ze=async e=>{if(!a.templateDownloadingKey){if(typeof JSZip!="function"){s.showToast("JSZip \uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}a.templateDownloadingKey=e.key;try{const t=a.templateDbTab==="ORACLE",o={};e.files.forEach(y=>{o[y.fn]=(o[y.fn]||0)+1});const n=await Promise.all(e.files.map(async y=>{const N=await fetch(`_doc/ddl_pgsql/${y.dir}/${y.fn}.sql`);if(!N.ok)throw new Error(`${y.fn}.sql \uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. (${N.status})`);const D=await N.text();return{zipPath:o[y.fn]>1?`${y.dir}/${y.fn}.sql`:`${y.fn}.sql`,text:t?fnPgDdlToOracle(D):D}})),r=new JSZip;n.forEach(({zipPath:y,text:N})=>{r.file(y,N)});const i=await r.generateAsync({type:"blob"}),d=`sourcegen_template_${fnDownloadTs()}_${t?"oracle":"postgresql"}_${e.key}_${e.files.length}.zip`,b=URL.createObjectURL(i),f=document.createElement("a");f.href=b,f.download=d,f.click(),URL.revokeObjectURL(b),s.showToast(`${e.label} \uD15C\uD50C\uB9BF(${e.files.length}\uAC1C \uD14C\uC774\uBE14)\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD588\uC2B5\uB2C8\uB2E4.`,"success"),Fe(e,d)}catch(t){s.showToast(t.message||"\uD15C\uD50C\uB9BF \uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{a.templateDownloadingKey=""}}},He=()=>{if(!S.value.length){s.showToast("\uB2E4\uC6B4\uB85C\uB4DC\uD560 DDL \uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uD14C\uC774\uBE14\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}const e=S.value.map(d=>(d.ddlText||"").trim()).filter(Boolean).join(`

`),o=`${(c.projectNm&&c.projectNm.trim()||"sourcegen").replace(/[^\w가-힣.-]+/g,"_")}_${fnDownloadTs()}.sql`,n=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=o,i.click(),URL.revokeObjectURL(r),s.showToast(`${S.value.length}\uAC1C \uD14C\uC774\uBE14\uC758 DDL \uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD588\uC2B5\uB2C8\uB2E4.`,"success")},Fe=(e,t)=>{mdSgApiSvc.downloadHist.create({projectId:c.projectId||null,projectNm:`[\uD15C\uD50C\uB9BF] ${e.label}`,basePackage:null,zipFileNm:t,ddlCount:e.files.length,fileCount:e.files.length},"\uC18C\uC2A4\uC820","ZIP\uB2E4\uC6B4\uB85C\uB4DC").then(()=>E(!0)).catch(()=>{})},Q=p([]),E=async e=>{var t;e&&(A.pageNo=1);try{const n=((t=(await mdSgApiSvc.downloadHist.getPage({pageNo:A.pageNo,pageSize:A.pageSize},"\uC18C\uC2A4\uC820","\uB2E4\uC6B4\uB85C\uB4DC\uC774\uB825\uC870\uD68C")).data)==null?void 0:t.data)||{};Q.value=n.pageList||[],A.pageTotalCount=n.pageTotalCount||0,A.pageTotalPage=n.pageTotalPage||1}catch{}},Ve=e=>{A.pageNo=e,E()},Be=()=>{E(!0)},Ge=l([{id:"gen",label:"\uC0DD\uC131 \uC774\uB825",icon:"\u{1F4CE}",get count(){return C.pageTotalCount}},{id:"download",label:"\uC0DD\uC131\uACB0\uACFC \uB2E4\uC6B4\uB85C\uB4DC \uC774\uB825",icon:"\u2B07",get count(){return A.pageTotalCount}}]),$e=e=>{a.activeTabId=e},X=g(()=>fnBuildTree(_)),Ke=g(()=>fnFlattenTree(X.value,a.treeCollapsed)),ee=()=>{_.length||_.push(v()),_.some(e=>e.tabId===a.activeTabId)||(a.activeTabId=_[0].tabId)},te=e=>{const t=v({subPackage:e||""});_.push(t),a.activeTabId=t.tabId},Ye=e=>{const t=_.findIndex(o=>o.tabId===e);t<0||(_.splice(t,1),ee())},We=async()=>{await s.showConfirm("\uC804\uCCB4 \uCD08\uAE30\uD654","\uBAA8\uB4E0 DDL \uD0ED\uACFC \uC0DD\uC131 \uACB0\uACFC\uB97C \uC9C0\uC6B0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(_.splice(0,_.length,v()),a.activeTabId=_[0].tabId,a.activeFile="")},Ze=e=>{a.treeCollapsed[e]=!a.treeCollapsed[e]},qe=e=>{a.treeNewFolderParent=e,a.treeNewFolderText=""},Je=()=>{a.treeNewFolderParent=null,a.treeNewFolderText=""},Qe=()=>{const e=(a.treeNewFolderText||"").trim();if(!e){s.showToast("\uD3F4\uB354\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}const t=a.treeNewFolderParent,o=t?`${t}.${e}`:e;te(o),a.treeNewFolderParent=null,a.treeNewFolderText=""},Xe=e=>{a.treeRenamePath=e,a.treeRenameText=e.split(".").pop()},et=()=>{a.treeRenamePath=null,a.treeRenameText=""},tt=()=>{const e=a.treeRenamePath,t=(a.treeRenameText||"").trim();if(!t){s.showToast("\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}const o=e.includes(".")?e.slice(0,e.lastIndexOf(".")):"",n=o?`${o}.${t}`:t;n!==e&&_.forEach(r=>{const i=r.subPackage||"";i===e?r.subPackage=n:i.startsWith(e+".")&&(r.subPackage=n+i.slice(e.length))}),a.treeRenamePath=null,a.treeRenameText=""},at=async e=>{const t=_.filter(o=>o.subPackage===e||(o.subPackage||"").startsWith(e+"."));t.length&&!await s.showConfirm("\uD3F4\uB354 \uC0AD\uC81C",`[${e}] \uD3F4\uB354\uC640 \uADF8 \uC548\uC758 \uD14C\uC774\uBE14 ${t.length}\uAC1C\uB97C \uBAA8\uB450 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||(t.forEach(o=>{const n=_.indexOf(o);n>=0&&_.splice(n,1)}),ee())},st=e=>{a.treeDragKind="tab",a.treeDragTabId=e,a.treeDragFolderPath=null},ot=e=>{a.treeDragKind="folder",a.treeDragFolderPath=e,a.treeDragTabId=null},ae=()=>{a.treeDragKind=null,a.treeDragTabId=null,a.treeDragFolderPath=null},nt=e=>{if(a.treeDragKind==="tab"){const t=_.find(o=>o.tabId===a.treeDragTabId);t&&(t.subPackage=e)}else if(a.treeDragKind==="folder"){const t=a.treeDragFolderPath;if(t&&t!==e&&e!==t&&!e.startsWith(t+".")){const o=t.split(".").pop(),n=e?`${e}.${o}`:o;_.forEach(r=>{const i=r.subPackage||"";i===t?r.subPackage=n:i.startsWith(t+".")&&(r.subPackage=n+i.slice(t.length))})}}ae()},lt=()=>{a.stackPopOpen=!0},ct=()=>{a.stackPopOpen=!1},rt=e=>{const t=h.indexOf(e);t>=0?h.splice(t,1):h.push(e);try{localStorage.setItem(SG_STACK_STORAGE_KEY,JSON.stringify(h))}catch{}},se=e=>T[e]||"v1",it=(e,t)=>{T[e]=t;try{localStorage.setItem(SG_STACK_VERSION_STORAGE_KEY,JSON.stringify(T))}catch{}},dt=()=>{a.stackPopOpen=!1,G()},G=async()=>{if(typeof gnParseDdl!="function"||typeof gnGenerate!="function"){s.showToast("\uC0DD\uC131 \uC5D4\uC9C4(assets/md/sg/sourcegen/*.js)\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}if(!S.value.length){s.showToast("DDL \uC744 \uBA3C\uC800 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}if(!h.length){s.showToast("\uC0DD\uC131\uD560 \uC5B8\uC5B4/\uC2A4\uD0DD\uC744 \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}a.generating=!0;try{const e=c.dbTypeCd==="ORACLE"?"oracle":"postgresql";let t=0;_.forEach(i=>{i.error="";const d=(i.ddlText||"").trim();if(!d){i.files={},i.generatedAt="";return}try{const b=gnParseDdl(d,e),f={basePackage:fnEffectivePkg(c.basePackage,i.subPackage),className:i.classNm||void 0,endpoint:i.endpoint||void 0,tag:i.swaggerTag||void 0,rawDdl:d},y=gnGenerate(b,f);i.files=Object.fromEntries(Object.entries(y).filter(([N])=>h.some(D=>N.startsWith(D)))),i.generatedAt=new Date().toLocaleString("ko-KR"),t++}catch(b){i.files={},i.error=b.message||"DDL \uD30C\uC2F1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."}}),a.resultScopeKind="root";const o=P.value[0];a.activeFile=o?o.key:"",B();const n=_.filter(i=>i.error).length;let r=!1;if(t)try{const i=c.projectId||await Nt();await ce(i,a.genMemo),a.genMemo="",await O(i,!0),r=!0}catch(i){s.showToast("\uC0DD\uC131\uC740 \uC644\uB8CC\uB410\uC9C0\uB9CC \uC774\uB825 \uBCF4\uAD00\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: "+coUtil.cofErrMsg(i,""),"error",0)}s.showToast(n?`${t}\uAC1C \uD0ED \uC0DD\uC131 \uC644\uB8CC (\uC2E4\uD328 ${n}\uAC1C \u2014 \uD0ED\uBCC4 \uC624\uB958 \uBA54\uC2DC\uC9C0 \uD655\uC778)`:`${t}\uAC1C \uD0ED, \uCD1D ${w.value}\uAC1C \uD30C\uC77C\uC744 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4.`+(r?" (\uC774\uB825\uC5D0 \uBCF4\uAD00\uB428)":""),n?"info":"success")}catch(e){s.showToast(e.message||"\uC18C\uC2A4 \uC0DD\uC131 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{a.generating=!1}},pt=(e,t)=>{a.resultScopeKind=e,e==="folder"&&(a.resultScopePath=t),e==="tab"&&(a.resultTabId=t);const o=P.value[0];a.activeFile=o?o.key:"",B()},_t=e=>{a.resultTreeCollapsed[e]=!a.resultTreeCollapsed[e]},gt=e=>{a.genFileTreeCollapsed[e]=!a.genFileTreeCollapsed[e]},ut=e=>{a.activeFile=e,B()},mt=async()=>{var t;const e=((t=F.value)==null?void 0:t.content)||"";try{await navigator.clipboard.writeText(e),a.copied=!0,setTimeout(()=>{a.copied=!1},1500)}catch{s.showToast("\uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error")}},bt=()=>{const e=F.value;if(!e)return;const t=new Blob([e.content||""],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download=e.fn.split("/").pop(),n.click(),URL.revokeObjectURL(o)},oe=async()=>{if(typeof JSZip!="function")throw new Error("JSZip \uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");const e=new JSZip;return _.forEach(t=>{const o=fnEffectivePkg(c.basePackage,t.subPackage).replace(/\./g,"/");Object.entries(t.files).forEach(([n,r])=>{e.file(fnZipPath(n,o),r)})}),e.generateAsync({type:"blob"})},ne=()=>{const e=new Date,t=r=>String(r).padStart(2,"0"),o=`${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}_${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}`;return`sourcegen_${c.projectId?`id${c.projectId}_`:""}cre${o}.zip`},ft=async()=>{if(!w.value){s.showToast("\uBA3C\uC800 [\uC0DD\uC131] \uC744 \uC2E4\uD589\uD574\uC8FC\uC138\uC694.","error");return}try{const e=await oe(),t=ne(),o=URL.createObjectURL(e),n=document.createElement("a");n.href=o,n.download=t,n.click(),URL.revokeObjectURL(o),ht(t,e)}catch(e){s.showToast(e.message||"ZIP \uC0DD\uC131 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},ht=async(e,t)=>{var r,i;let o=null,n=null;try{const d=new FormData;d.append("files",t,e),d.append("businessCode","md_sg_gen");const f=(((i=(r=(await coApiSvc.cmUpload.uploadMulti(d,"\uC18C\uC2A4\uC820","ZIP\uB2E4\uC6B4\uB85C\uB4DC\uC5C5\uB85C\uB4DC")).data)==null?void 0:r.data)==null?void 0:i.files)||[])[0];f&&(o=f.attachId||null,n=f.cdnImgUrl||f.attachUrl||null)}catch{}mdSgApiSvc.downloadHist.create({projectId:c.projectId||null,projectNm:c.projectNm||null,basePackage:c.basePackage||null,zipFileNm:e,ddlCount:S.value.length,fileCount:w.value,attachId:o,zipUrl:n,selectedStacks:le()||null,genMemo:a.genMemo||null},"\uC18C\uC2A4\uC820","ZIP\uB2E4\uC6B4\uB85C\uB4DC").then(()=>E(!0)).catch(()=>{})},yt=()=>JSON.stringify({basePackage:c.basePackage||"",dbTypeCd:c.dbTypeCd||"",tabs:S.value.map(e=>({tabNo:e.tabNo,ddlText:e.ddlText,schemaNm:e.schemaNm,tableNm:e.tableNm,classNm:e.classNm,endpoint:e.endpoint,swaggerTag:e.swaggerTag,subPackage:e.subPackage}))}),le=()=>h.map(e=>{var t;return(((t=SG_FILE_GROUPS.find(o=>o.prefix===e))==null?void 0:t.title)||e)+" "+se(e)}).join(", "),Tt=e=>e?e.split(",").map(t=>t.trim()).filter(Boolean).map(t=>{const o=t.match(/^(.*)\s+(v\d+)$/),n=SG_FILE_GROUPS.find(r=>r.title===(o?o[1]:t));return n?{prefix:n.prefix,version:o?o[2]:"v1"}:null}).filter(Boolean):[],Nt=async()=>{var r,i;L(),(!c.projectNm||!c.projectNm.trim())&&(c.projectNm="sourcegen"+fnTsSuffix());const e={projectNm:c.projectNm,projectDesc:c.projectDesc,basePackage:c.basePackage,dbTypeCd:c.dbTypeCd,thumbnailUrl:c.thumbnailUrl||null,thumbnailAttachId:c.thumbnailAttachId||null},o=(i=(r=(await mdSgApiSvc.project.create(e,"\uC18C\uC2A4\uC820","\uC790\uB3D9\uB4F1\uB85D")).data)==null?void 0:r.data)==null?void 0:i.projectId;c.projectId=o,history.replaceState(null,"","fo-md-sg-sourcegen.html?view=editor&projectId="+encodeURIComponent(o));const n=S.value.map((d,b)=>({tabNo:b+1,ddlText:d.ddlText,schemaNm:d.schemaNm,tableNm:d.tableNm,classNm:d.classNm,endpoint:d.endpoint,swaggerTag:d.swaggerTag,subPackage:d.subPackage||null,sortOrd:b,useYn:"Y"}));return await mdSgApiSvc.ddl.saveList(o,n,"\uC18C\uC2A4\uC820","DDL\uC800\uC7A5"),o},ce=async(e,t)=>{var b,f;const o=await oe(),n=ne(),r=new FormData;r.append("files",o,n),r.append("businessCode","md_sg_gen");const d=(((f=(b=(await coApiSvc.cmUpload.uploadMulti(r,"\uC18C\uC2A4\uC820","\uC0DD\uC131\uACB0\uACFC\uC5C5\uB85C\uB4DC")).data)==null?void 0:b.data)==null?void 0:f.files)||[])[0];if(!d)throw new Error("\uC5C5\uB85C\uB4DC \uACB0\uACFC\uB97C \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");await mdSgApiSvc.genHist.create(e,{ddlCount:S.value.length,fileCount:w.value,attachId:d.attachId||null,zipFileNm:n,zipFileSize:o.size,zipUrl:d.cdnImgUrl||d.attachUrl||null,genMemo:t||null,ddlSnapshotJson:yt(),selectedStacks:le()||null},"\uC18C\uC2A4\uC820","\uC0DD\uC131\uC774\uB825\uB4F1\uB85D")},vt=async e=>{if(!e.ddlSnapshotJson){s.showToast("\uC774 \uC774\uB825\uC5D0\uB294 \uBD88\uB7EC\uC62C DDL \uC2A4\uB0C5\uC0F7\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}let t;try{t=JSON.parse(e.ddlSnapshotJson)}catch{s.showToast("\uC2A4\uB0C5\uC0F7 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}const o=Tt(e.selectedStacks);if(!await s.showConfirm("\uC0DD\uC131\uACB0\uACFC \uBD88\uB7EC\uC624\uAE30",`${coUtil.cofYmdHm(e.genDate)||""} \uC0DD\uC131 \uC2DC\uC810\uC758 DDL \uD0ED \uC785\uB825\uAC12\uC73C\uB85C \uB418\uB3CC\uB9AC\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`+(o.length?`
(\uD604\uC7AC \uD3B8\uC9D1 \uC911\uC778 DDL \uD0ED \uB0B4\uC6A9\uC740 \uB36E\uC5B4\uC368\uC9C0\uACE0, \uADF8 \uC2DC\uC810 \uC120\uD0DD \uC5B8\uC5B4/\uC2A4\uD0DD\uC73C\uB85C \uC790\uB3D9 \uC7AC\uC0DD\uC131\uB429\uB2C8\uB2E4)`:`
(\uD604\uC7AC \uD3B8\uC9D1 \uC911\uC778 DDL \uD0ED \uB0B4\uC6A9\uC740 \uB36E\uC5B4\uC368\uC9D1\uB2C8\uB2E4 \u2014 \uB2E4\uC2DC \uC0DD\uC131\uD558\uB824\uBA74 [\uC18C\uC2A4 \uC0DD\uC131]\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694)`)))return;t.basePackage&&(c.basePackage=t.basePackage),t.dbTypeCd&&(c.dbTypeCd=t.dbTypeCd);const n=(t.tabs||[]).map(r=>v({tabNo:r.tabNo||0,ddlText:r.ddlText||"",schemaNm:r.schemaNm||"",tableNm:r.tableNm||"",classNm:r.classNm||"",endpoint:r.endpoint||"",swaggerTag:r.swaggerTag||"",subPackage:r.subPackage||""}));_.splice(0,_.length,...n.length?n:[v()]),a.activeTabId=_[0].tabId,a.activeFile="",k.value&&(a.dtlMode="edit"),o.length?(h.splice(0,h.length,...o.map(r=>r.prefix)),o.forEach(r=>{T[r.prefix]=r.version}),await G()):s.showToast("DDL \uD0ED\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. [\uC18C\uC2A4 \uC0DD\uC131]\uC744 \uB20C\uB7EC \uB2E4\uC2DC \uC0DD\uC131\uD574\uC8FC\uC138\uC694.","success")},St=async e=>{var t,o;window.open(e.zipUrl,"_blank");try{const n=await mdSgApiSvc.genHist.incrementDownload(e.sourcegenHistId,"\uC18C\uC2A4\uC820","\uC7AC\uB2E4\uC6B4\uB85C\uB4DC");e.downloadCount=(o=(t=n.data)==null?void 0:t.data)!=null?o:(e.downloadCount||0)+1}catch{}try{await mdSgApiSvc.downloadHist.create({projectId:c.projectId||null,projectNm:c.projectNm||null,basePackage:c.basePackage||null,zipFileNm:e.zipFileNm,ddlCount:e.ddlCount,fileCount:e.fileCount,attachId:e.attachId||null,zipUrl:e.zipUrl||null,selectedStacks:e.selectedStacks||null,genMemo:e.genMemo||null},"\uC18C\uC2A4\uC820","\uC0DD\uC131\uC774\uB825\uC7AC\uB2E4\uC6B4\uB85C\uB4DC"),await E(!0)}catch{}},re=async e=>{if(await s.showConfirm("\uC774\uB825 \uC0AD\uC81C",`${e.zipFileNm} \uC774\uB825\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await mdSgApiSvc.genHist.remove(e.sourcegenHistId,"\uC18C\uC2A4\uC820","\uC0DD\uC131\uC774\uB825\uC0AD\uC81C"),await O(c.projectId),s.showToast("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){s.showToast(coUtil.cofErrMsg(t,"\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},Ct=async()=>{var e,t;if(L(),(!c.projectNm||!c.projectNm.trim())&&(c.projectNm="sourcegen"+fnTsSuffix()),!!await s.showConfirm("\uC800\uC7A5","\uD504\uB85C\uC81D\uD2B8\uC640 DDL \uD0ED\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){a.loading=!0;try{!c.thumbnailUrl&&a.autoThumb&&await Se();const o={projectNm:c.projectNm,projectDesc:c.projectDesc,basePackage:c.basePackage,dbTypeCd:c.dbTypeCd,thumbnailUrl:c.thumbnailUrl||null,thumbnailAttachId:c.thumbnailAttachId||null};let n=c.projectId;n?await mdSgApiSvc.project.update(n,o,"\uC18C\uC2A4\uC820","\uC218\uC815"):(n=(t=(e=(await mdSgApiSvc.project.create(o,"\uC18C\uC2A4\uC820","\uB4F1\uB85D")).data)==null?void 0:e.data)==null?void 0:t.projectId,c.projectId=n,history.replaceState(null,"","fo-md-sg-sourcegen.html?view=editor&projectId="+encodeURIComponent(n)));const r=S.value.map((d,b)=>({tabNo:b+1,ddlText:d.ddlText,schemaNm:d.schemaNm,tableNm:d.tableNm,classNm:d.classNm,endpoint:d.endpoint,swaggerTag:d.swaggerTag,subPackage:d.subPackage||null,sortOrd:b,useYn:"Y"}));await mdSgApiSvc.ddl.saveList(n,r,"\uC18C\uC2A4\uC820","DDL\uC800\uC7A5");let i=!1;if(w.value)try{await ce(n,a.genMemo),a.genMemo="",await O(n,!0),i=!0}catch(d){s.showToast("\uC800\uC7A5\uC740 \uC644\uB8CC\uB410\uC9C0\uB9CC \uC0DD\uC131\uACB0\uACFC \uBCF4\uAD00\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: "+coUtil.cofErrMsg(d,""),"info",0)}s.showToast(i?`\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4. (\uC0DD\uC131\uACB0\uACFC ${w.value}\uAC1C \uD30C\uC77C\uB3C4 \uC774\uB825\uC5D0 \uBCF4\uAD00)`:"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(o){s.showToast(coUtil.cofErrMsg(o,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{a.loading=!1}}},Rt=async()=>{if(c.projectId&&await s.showConfirm("\uC0AD\uC81C",`${c.projectNm} \uD504\uB85C\uC81D\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? (DDL \uD0ED\xB7\uC0DD\uC131 \uC774\uB825\uB3C4 \uD568\uAED8 \uC0AD\uC81C\uB429\uB2C8\uB2E4)`))try{await mdSgApiSvc.project.remove(c.projectId,"\uC18C\uC2A4\uC820","\uC0AD\uC81C"),J()}catch(e){s.showToast(coUtil.cofErrMsg(e,"\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}};return u(async()=>{const t=new URLSearchParams(location.search).get("projectId");t&&await q(t),E()}),{uiState:a,form:c,tabs:_,genHists:M,genHistGridColumns:K,genHistPager:C,onSetPageGenHist:Ae,onSizeChangeGenHist:we,templateDlHistPager:A,onSetPageDlHist:Ve,onSizeChangeDlHist:Be,cfReadonly:k,cfShowZipDownload:ie,cfIsNew:de,cfCurTab:I,cfTotalFileCount:w,cfFilledTabs:S,cfResultTabs:z,cfGenFileTreeFlat:W,cfGenFileCount:me,onGenFileTreeToggle:gt,cfTree:X,cfTreeFlat:Ke,cfResultTreeFlat:_e,cfResultScopeLabel:ge,cfActiveEntry:F,cfScopeFileEntries:P,cfResultScopeGeneratedAt:fe,cfResultScopeTabsCount:be,fnLangOf,SG_SAMPLE_GROUPS,onLoadSample:Z,onSampleSelectChange:ye,codeBoxRef:V,ddlCodeBoxRef:x,thumbInputRef:R,onOpenThumbPicker:Te,onThumbFileChange:ve,onRemoveThumb:Ne,onDdlInput:he,onDdlScroll:Re,onBackToList:J,onNewProject:ke,onSwitchToEdit:Le,onCancelEdit:xe,SG_TEMPLATE_DOMAINS,onTemplateModalOpen:Oe,onTemplateModalClose:Ee,onTemplateDbTab:Me,onDownloadTemplate:ze,onDownloadCurrentDdl:He,templateDlHist:Q,templateDlHistGridColumns:$,histTabs:Ge,onProjectUploadStart:Ie,onProjectUploadDbPick:Pe,onProjectUploadFile:Ue,onOpenUploadPicker:De,uploadFileInputRef:j,onSelectTab:$e,onClearAllTabs:We,onGenerate:G,onAddTab:te,onDeleteTab:Ye,onTreeToggle:Ze,onAddFolderStart:qe,onAddFolderCancel:Je,onAddFolderConfirm:Qe,onRenameNodeStart:Xe,onRenameNodeCancel:et,onRenameNodeConfirm:tt,onDeleteFolder:at,onDragStartTab:st,onDragStartFolder:ot,onDragEnd:ae,onDropOnFolder:nt,SG_STACK_SECTIONS,selectedStacks:h,onOpenStackPop:lt,onCloseStackPop:ct,onToggleStack:rt,onGenerateConfirmed:dt,SG_STACK_VERSION_OPTIONS,stackVersions:T,fnStackVersion:se,onChangeVersion:it,onSelectResultScope:pt,onResultTreeToggle:_t,onSelectFile:ut,onCopyCode:mt,onDownloadFile:bt,onDownloadZip:ft,onDeleteGenHist:re,onSave:Ct,onDeleteProject:Rt}},template:`
<div class="sg-page">
  <div class="sg-hero">
    <div class="sg-hero-eyebrow">SOURCE GENERATOR</div>
    <h1 class="sg-hero-title">
      \u2699\uFE0F {{ cfIsNew ? '\uC0C8 \uC18C\uC2A4\uC820 \uD504\uB85C\uC81D\uD2B8' : (cfReadonly ? '\uD504\uB85C\uC81D\uD2B8 \uC0C1\uC138\uBCF4\uAE30' : '\uD504\uB85C\uC81D\uD2B8 \uD3B8\uC9D1') }}
      <span v-if="form.projectId" class="sg-detail-id">#{{ form.projectId }}</span>
    </h1>
    <div class="sg-hero-sub">
      {{ cfIsNew ? 'DDL \uC744 \uB123\uACE0 [\uC0DD\uC131] \uC744 \uB204\uB974\uBA74 20\uC5EC \uAC1C \uC2A4\uD0DD\uC758 \uC18C\uC2A4\uAC00 \uD55C \uBC88\uC5D0 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4'
        : (cfReadonly ? '\uC800\uC7A5\uB41C \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4. \uC218\uC815\uD558\uB824\uBA74 \uC544\uB798 [\uC218\uC815] \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694' : 'DDL \uD0ED\uC744 \uD3B8\uC9D1\uD558\uACE0 [\uC0DD\uC131] \uC73C\uB85C \uACB0\uACFC\uB97C \uD655\uC778\uD558\uC138\uC694') }}
    </div>
  </div>

  <div class="sg-detail-head">
    <button class="btn btn_list sg-back-btn" @click="onBackToList">\u2190 \uBAA9\uB85D\uC73C\uB85C</button>
    <button class="btn btn_new sg-back-btn" @click="onNewProject" style="margin-left:auto;">+ \uC2E0\uADDC \uD504\uB85C\uC81D\uD2B8</button>
  </div>

  <!-- \u2550\u2550\u2550 \uD504\uB85C\uC81D\uD2B8 \uAE30\uBCF8\uC815\uBCF4 \u2550\u2550\u2550 -->
  <div class="sg-panel">
    <div class="sg-opts">
      <div class="sg-opt-row"><label>\uB300\uD45C\uC774\uBBF8\uC9C0</label>
        <div class="sg-thumb-wrap">
          <div class="sg-thumb-box" :class="{ 'sg-locked': cfReadonly }" @click="onOpenThumbPicker"
            title="\uBAA9\uB85D\uC5D0 \uD45C\uC2DC\uB420 \uC774\uBBF8\uC9C0 \u2014 \uBE44\uC6CC\uB450\uBA74 \uC800\uC7A5 \uC2DC DDL \uC815\uBCF4\uB85C \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4">
            <img v-if="form.thumbnailUrl" :src="form.thumbnailUrl" class="sg-thumb-img" />
            <span v-else class="sg-thumb-ph">{{ uiState.thumbUploading ? '\u23F3' : '\uFF0B' }}</span>
            <span v-if="form.thumbnailUrl && !cfReadonly" class="sg-thumb-del" @click.stop="onRemoveThumb" title="\uC81C\uAC70">\u2715</span>
          </div>
          <input ref="thumbInputRef" type="file" accept="image/*" style="display:none" @change="onThumbFileChange" />
          <label v-if="!cfReadonly" class="sg-thumb-chk"
            title="\uCCA8\uBD80\uD55C \uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC73C\uBA74 \uC800\uC7A5\uD560 \uB54C DDL \uC694\uC57D \uCE74\uB4DC\uB97C \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uB300\uD45C\uC774\uBBF8\uC9C0\uB85C \uC501\uB2C8\uB2E4">
            <input type="checkbox" v-model="uiState.autoThumb" /> DDL \uC790\uB3D9\uC0DD\uC131
          </label>
        </div></div>
      <div class="sg-opt-row"><label>\uD504\uB85C\uC81D\uD2B8\uBA85</label>
        <input v-model="form.projectNm" :readonly="cfReadonly" placeholder="\uBE44\uC6B0\uBA74 \uD14C\uC774\uBE14\uBA85_\uB0A0\uC9DC\uC2DC\uAC01 \uC790\uB3D9" class="sg-in-nm" /></div>
      <div class="sg-opt-row"><label>Base Package</label>
        <input v-model="form.basePackage" :readonly="cfReadonly" placeholder="com.exam.app" class="sg-in-pkg sg-mono" /></div>
      <div class="sg-opt-row"><label>DB \uC720\uD615</label>
        <select v-model="form.dbTypeCd" :disabled="cfReadonly" class="sg-in-db">
          <option value="POSTGRESQL">PostgreSQL</option>
          <option value="ORACLE">Oracle</option>
        </select></div>
    </div>
    <div class="sg-opt-row sg-desc-row"><label>\uC124\uBA85</label>
      <textarea v-model="form.projectDesc" :readonly="cfReadonly" rows="2"
        placeholder="\uC124\uBA85(\uC120\uD0DD)" class="sg-desc-ta"></textarea></div>
  </div>

  <!-- \u2550\u2550\u2550 DDL \uD0ED \u2550\u2550\u2550 -->
  <div class="sg-panel">
    <!-- 2026-08-30: \uD328\uB110 \uC81C\uBAA9\uC744 \uD56D\uC0C1 "\uBAA9\uB85D" \uACE0\uC815 \uD45C\uAE30\uD558\uC9C0 \uC54A\uACE0, cfIsNew/cfReadonly \uC0C1\uD0DC\uC5D0 \uB9DE\uCDB0
         \uC18C\uC2A4\uC820 \uC2E0\uADDC(\uB4F1\uB85D \uC804)/\uC18C\uC2A4\uC820 \uC0C1\uC138(\uBCF4\uAE30\uBAA8\uB4DC)/\uC18C\uC2A4\uC820 \uD3B8\uC9D1(\uC218\uC815\uBAA8\uB4DC)\uC73C\uB85C \uAD6C\uBD84 \uD45C\uC2DC -->
    <div class="sg-panel-title">{{ cfIsNew ? '\uC18C\uC2A4\uC820 \uC2E0\uADDC' : (cfReadonly ? '\uC18C\uC2A4\uC820 \uC0C1\uC138' : '\uC18C\uC2A4\uC820 \uD3B8\uC9D1') }} (DDL \uC785\uB825) <span class="sg-panel-sub">(\uC88C\uCE21 \uD2B8\uB9AC\uC5D0\uC11C \uD14C\uC774\uBE14 \uC120\uD0DD. \uC785\uB825\uD558\uBA74 \uC2A4\uD0A4\uB9C8\xB7\uD14C\uC774\uBE14\xB7\uD074\uB798\uC2A4\uBA85\uC774 \uC790\uB3D9 \uCD94\uCD9C\uB429\uB2C8\uB2E4)</span>
      <span style="margin-left:auto;display:flex;gap:6px;align-items:center;">
        <!-- 2026-08-30: [\uD604\uC7AC\uD0ED \uCD08\uAE30\uD654]/[\uC804\uCCB4 \uCD08\uAE30\uD654] \uBC84\uD2BC \uC81C\uAC70(\uC88C\uCE21 \uD2B8\uB9AC \uD234\uBC14\uC758 [\uCD08\uAE30\uD654] \uBC84\uD2BC\uACFC
             \uC911\uBCF5 \u2014 \uADF8\uCABD\uC774 \uC804\uCCB4 \uCD08\uAE30\uD654\uB97C \uC774\uBBF8 \uB2F4\uB2F9). \uC608\uC81C DDL(\uBC84\uD2BC \uADF8\uB9AC\uB4DC \u2192 select \uD2B8\uB9AC)\uB9CC \uC720\uC9C0.
             select \uB294 optgroup(DB \uC720\uD615)\uC73C\uB85C \uD2B8\uB9AC\uCC98\uB7FC \uBB36\uACE0, \uAC12\uC744 \uACE0\uB974\uB294 \uC989\uC2DC \uADF8 \uC608\uC81C\uB85C \uC0C8 \uD0ED\uC744
             \uCD94\uAC00\uD55C \uB4A4 \uB2E4\uC2DC placeholder \uB85C \uB418\uB3CC\uB9B0\uB2E4(\uAC12 \uC790\uCCB4\uB97C \uAE30\uC5B5\uD560 \uD544\uC694 \uC5C6\uB294 "\uC2E4\uD589\uD615" \uC120\uD0DD\uC774\uB77C
             select \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD558\uC9C0 \uC54A\uC74C). -->
        <!-- 2026-08-30: \uD15C\uD50C\uB9BF\uB2E4\uC6B4\uB85C\uB4DC/\uD604\uC7AC\uC815\uBCF4\uB2E4\uC6B4\uB85C\uB4DC/\uD504\uB85C\uC81D\uD2B8\uC5C5\uB85C\uB4DC\uB3C4 \uD3B8\uC9D1\uBAA8\uB4DC \uC804\uC6A9\uC73C\uB85C
             \uD1B5\uC77C \u2014 \uBCF4\uAE30\uBAA8\uB4DC\uB294 \uC870\uD68C\uB9CC \uD558\uB294 \uD654\uBA74\uC774\uB77C \uC774 3\uAC1C(\uC804\uBD80 DDL \uC744 "\uBC14\uAFB8\uB294" \uB3C4\uAD6C)\uB294 \uD544\uC694 \uC5C6\uB2E4. -->
        <template v-if="!cfReadonly">
          <select class="form-control sg-sample-select" style="width:auto;max-width:220px;"
            :value="''" @change="onSampleSelectChange($event)" title="\uC608\uC81C DDL \u2014 \uC120\uD0DD\uD558\uBA74 \uC0C8 \uD0ED\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4(\uBE48 \uD0ED\uC774\uBA74 \uADF8 \uC790\uB9AC\uB97C \uCC44\uC6C0)">
            <option value="" disabled>\uC608\uC81C DDL \uC120\uD0DD\u2026</option>
            <optgroup v-for="grp in SG_SAMPLE_GROUPS" :key="grp.db" :label="grp.dbLabel">
              <option v-for="s in grp.items" :key="grp.db + '::' + s.key" :value="grp.db + '::' + s.key">
                {{ s.label }} \u2014 {{ s.desc }}
              </option>
            </optgroup>
          </select>
          <button type="button" class="sg-btn sg-btn-accent" @click="onTemplateModalOpen">\u{1F4E5} \uD504\uB85C\uC81D\uD2B8\uD15C\uD50C\uB9BF\uB2E4\uC6B4\uB85C\uB4DC</button>
          <button type="button" class="sg-btn sg-btn-accent" @click="onDownloadCurrentDdl">\u{1F4BE} \uD604\uC7AC\uC815\uBCF4\uB2E4\uC6B4\uB85C\uB4DC</button>
          <button type="button" class="sg-btn sg-btn-accent" @click="onProjectUploadStart">\u{1F4E4} \uD504\uB85C\uC81D\uD2B8\uC5C5\uB85C\uB4DC</button>
        </template>
      </span>
    </div>

    <div class="sg-ddl-layout">
      <!-- \u2550\u2550\u2550 \uC88C\uCE21: subPackage \uAE30\uC900 \uD2B8\uB9AC (\uD3F4\uB354=subPackage \uACBD\uB85C, \uB9AC\uD504=\uD14C\uC774\uBE14) \u2550\u2550\u2550 -->
      <div class="sg-ddl-tree">
        <div class="sg-ddl-tree-toolbar">
          <!-- 2026-08-30: \uD2B8\uB9AC \uD3ED(240px \uACE0\uC815)\uC5D0 \uBC84\uD2BC+\uCCB4\uD06C\uBC15\uC2A4\uAC00 \uD55C \uC904\uB85C\uB294 \uB2E4 \uC548 \uB4E4\uC5B4\uC640 \uD14D\uC2A4\uD2B8\uAC00
               \uC798\uB838\uB2E4 \u2014 \uCCB4\uD06C\uBC15\uC2A4\uB294 \uB458\uC9F8 \uC904\uB85C \uB0B4\uB9AC\uACE0, \uBE44\uC5B4\uB09C \uCCAB \uC904 \uC790\uB9AC\uC5D0 [\uCD08\uAE30\uD654] \uBC84\uD2BC \uCD94\uAC00 -->
          <div class="sg-ddl-tree-toolbar-row">
            <button type="button" class="sg-btn sg-btn-ghost sg-btn-xs" :disabled="cfReadonly" @click="onAddFolderStart('')">+ \uD3F4\uB354</button>
            <button type="button" class="sg-btn sg-btn-ghost sg-btn-xs" :disabled="cfReadonly" @click="onAddTab('')">+ \uD14C\uC774\uBE14</button>
            <button type="button" class="sg-btn sg-btn-ghost sg-btn-xs" :disabled="cfReadonly" @click="onClearAllTabs">\uCD08\uAE30\uD654</button>
          </div>
          <div class="sg-ddl-tree-toolbar-row">
            <!-- 2026-08-30: \uCCAB \uC904\uC5D0 \uC788\uB358 \uCD1D\uAC1C\uC218\uAC00 \uBC84\uD2BC 3\uAC1C\uC5D0 \uBC00\uB824 \uC798\uB824 \uBCF4\uC5EC\uC11C \uB458\uC9F8 \uC904 \uB9E8 \uC55E\uC73C\uB85C \uC774\uB3D9 -->
            <span class="sg-ddl-tree-count">{{ tabs.length }}\uAC1C</span>
            <label class="sg-thumb-chk"
              title="\uCF1C\uB450\uBA74 \uC0C8/\uC0D8\uD50C \uD14C\uC774\uBE14\uC774 \uD14C\uC774\uBE14\uBA85 \uC811\uB450\uC5B4(\uC608: sy_code -> sy)\uB85C \uC790\uB3D9 \uD3F4\uB354 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uB044\uBA74 \uB8E8\uD2B8\uC5D0 \uCD94\uAC00\uB418\uBA70, \uD3F4\uB354 \uBC30\uCE58\uB294 \uB4DC\uB798\uADF8\uB85C \uC9C1\uC811 \uD569\uB2C8\uB2E4">
              <input type="checkbox" v-model="uiState.autoFolderByPrefix" :disabled="cfReadonly" /> \uD14C\uC774\uBE14\uC57D\uC5B4\uD3F4\uB354\uAD6C\uBD84
            </label>
          </div>
        </div>
        <div v-if="uiState.treeNewFolderParent !== null" class="sg-tree-new-folder">
          <div class="sg-tree-new-folder-parent">{{ uiState.treeNewFolderParent || '\uCD5C\uC0C1\uC704' }} \uC544\uB798\uC5D0</div>
          <input v-model="uiState.treeNewFolderText" class="sg-mono" placeholder="\uC608: ec.mb (\uC810\uC73C\uB85C \uC5EC\uB7EC \uB2E8\uACC4 \uD55C\uBC88\uC5D0)"
            @keyup.enter="onAddFolderConfirm" @keyup.esc="onAddFolderCancel" />
          <div class="sg-tree-new-folder-actions">
            <button type="button" class="sg-btn sg-btn-dark sg-btn-xs" @click="onAddFolderConfirm">\uD655\uC778</button>
            <button type="button" class="sg-btn sg-btn-ghost sg-btn-xs" @click="onAddFolderCancel">\uCDE8\uC18C</button>
          </div>
        </div>
        <div class="sg-ddl-tree-list" @dragover.prevent @drop="onDropOnFolder('')">
          <div v-if="!cfTreeFlat.length" class="sg-tree-empty">\uD14C\uC774\uBE14\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uD14C\uC774\uBE14] \uB85C \uCD94\uAC00\uD574\uC8FC\uC138\uC694.</div>
          <div v-for="row in cfTreeFlat" :key="row.kind + ':' + (row.kind==='folder' ? row.path : row.tab.tabId)"
            class="sg-tree-row" :class="[row.kind==='folder' ? 'sg-tree-row-folder' : 'sg-tree-row-tab',
              { active: row.kind==='tab' && row.tab.tabId===uiState.activeTabId }]"
            :style="{ paddingLeft: (row.depth*16+8) + 'px' }"
            :draggable="!cfReadonly"
            @dragstart.stop="row.kind==='tab' ? onDragStartTab(row.tab.tabId) : onDragStartFolder(row.path)"
            @dragend="onDragEnd"
            @dragover.prevent
            @drop.stop="row.kind==='folder' ? onDropOnFolder(row.path) : null"
            @click="row.kind==='folder' ? onTreeToggle(row.path) : onSelectTab(row.tab.tabId)">
            <template v-if="row.kind==='folder'">
              <span class="sg-tree-toggle">{{ uiState.treeCollapsed[row.path] ? '\u25B8' : '\u25BE' }}</span>
              <span class="sg-tree-icon">\u{1F4C1}</span>
              <template v-if="uiState.treeRenamePath===row.path">
                <input v-model="uiState.treeRenameText" class="sg-mono sg-tree-rename-input" @click.stop
                  @keyup.enter="onRenameNodeConfirm" @keyup.esc="onRenameNodeCancel" />
                <button type="button" class="sg-tree-mini-btn" title="\uD655\uC778" @click.stop="onRenameNodeConfirm">\u2713</button>
                <button type="button" class="sg-tree-mini-btn" title="\uCDE8\uC18C" @click.stop="onRenameNodeCancel">\u2715</button>
              </template>
              <template v-else>
                <span class="sg-tree-label">{{ row.name }}</span>
                <span class="sg-tree-count">{{ row.count }}</span>
                <span v-if="!cfReadonly" class="sg-tree-actions">
                  <button type="button" class="sg-tree-mini-btn" title="\uC774 \uD3F4\uB354\uC5D0 \uD14C\uC774\uBE14 \uCD94\uAC00" @click.stop="onAddTab(row.path)">\uFF0B</button>
                  <button type="button" class="sg-tree-mini-btn" title="\uC774\uB984\uBCC0\uACBD(\uC810\uC73C\uB85C \uAE4A\uC774 \uC870\uC808)" @click.stop="onRenameNodeStart(row.path)">\u270E</button>
                  <button type="button" class="sg-tree-mini-btn" title="\uD3F4\uB354 \uC0AD\uC81C" @click.stop="onDeleteFolder(row.path)">\u{1F5D1}</button>
                </span>
              </template>
            </template>
            <template v-else>
              <span class="sg-tree-icon">{{ (row.tab.ddlText||'').trim() ? '\u{1F4C4}' : '\u{1F4C3}' }}</span>
              <span class="sg-tree-label">{{ row.tab.tableNm || '(\uC0C8 \uD14C\uC774\uBE14)' }}</span>
              <span v-if="!cfReadonly" class="sg-tree-actions">
                <button type="button" class="sg-tree-mini-btn" title="\uC0AD\uC81C" @click.stop="onDeleteTab(row.tab.tabId)">\u{1F5D1}</button>
              </span>
            </template>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550 \uC6B0\uCE21: \uC120\uD0DD\uB41C \uD14C\uC774\uBE14 \uD3B8\uC9D1 \uC601\uC5ED \u2550\u2550\u2550 -->
      <div class="sg-ddl-editor">
    <div class="sg-opts">
      <div class="sg-opt-row"><label>Schema</label><input v-model="cfCurTab.schemaNm" :readonly="cfReadonly" placeholder="(DDL\uC5D0\uC11C \uC790\uB3D9)" /></div>
      <div class="sg-opt-row"><label>Table</label><input v-model="cfCurTab.tableNm" readonly placeholder="(DDL\uC5D0\uC11C \uC790\uB3D9)" /></div>
      <div class="sg-opt-row"><label>Sub Package</label>
        <input v-model="cfCurTab.subPackage" :readonly="cfReadonly" placeholder="(\uD14C\uC774\uBE14\uBA85 \uC811\uB450\uC5B4 \uC790\uB3D9)"
          title="Base Package \uD558\uC704 \uD3F4\uB354 = \uC88C\uCE21 \uD2B8\uB9AC \uACBD\uB85C. \uC608: ec.mb" class="sg-mono" /></div>
      <div class="sg-opt-row"><label>Class Name</label><input v-model="cfCurTab.classNm" :readonly="cfReadonly" placeholder="(\uD14C\uC774\uBE14\uBA85\uC5D0\uC11C \uC790\uB3D9)" /></div>
      <div class="sg-opt-row"><label>Endpoint</label><input v-model="cfCurTab.endpoint" :readonly="cfReadonly" placeholder="(\uD14C\uC774\uBE14\uBA85\uC5D0\uC11C \uC790\uB3D9)" /></div>
      <div class="sg-opt-row"><label>Swagger Tag</label><input v-model="cfCurTab.swaggerTag" :readonly="cfReadonly" placeholder="(Class Name \uACFC \uB3D9\uC77C)" /></div>
    </div>

    <!-- 2026-08-30: \uD3B8\uC9D1\uBAA8\uB4DC\uB3C4 \uBCF4\uAE30\uBAA8\uB4DC\uC640 \uAC19\uC740 Prism \uCEEC\uB7EC\uB85C \uBCF4\uC774\uAC8C(\uC694\uCCAD: "\uD3B8\uC9D1 \uC758 \uC18C\uC2A4 \uCF54\uB4DC
         \uC2A4\uD0C0\uC77C \uBCF4\uAE30\uBAA8\uB4DC\uCC98\uB7FC \uAC19\uAC8C \uD574\uC918") \u2014 \uC624\uBC84\uB808\uC774 \uC5D0\uB514\uD130 \uAE30\uBC95(Prism \uACF5\uC2DD \uC608\uC81C/
         react-simple-code-editor \uC640 \uB3D9\uC77C): \uC2E4\uC81C \uC785\uB825\uC740 \uC644\uC804\uD788 \uD22C\uBA85\uD55C <textarea>\uAC00 \uBC1B\uACE0, \uADF8
         \uC544\uB798 \uD558\uC774\uB77C\uC774\uD2B8\uB41C <pre> \uAC00 \uACB9\uCCD0\uC11C \uC0C9\uB9CC \uBCF4\uC5EC\uC900\uB2E4. \uB450 \uB808\uC774\uC5B4\uB294 \uD3F0\uD2B8\xB7\uC904\uB192\uC774\xB7\uD328\uB529\uC774 \uD55C
         \uAE00\uC790\uB3C4 \uB2E4\uB974\uBA74 \uCEE4\uC11C\uC640 \uAE00\uC790 \uC904\uC774 \uC5B4\uAE0B\uB098\uBBC0\uB85C CSS(.sg-ddl-code / .sg-ddl-textarea-overlay)
         \uC5D0\uC11C \uBC18\uB4DC\uC2DC \uAC19\uC740 \uAC12\uC744 \uB9DE\uCD98\uB2E4. \uBCF4\uAE30\uBAA8\uB4DC\uB294 textarea \uC5C6\uC774 <pre> \uB9CC \uADF8\uB300\uB85C \uB178\uCD9C(\uD22C\uBA85 \uCC98\uB9AC
         \uBD88\uD544\uC694 \u2014 \uC77D\uAE30 \uC804\uC6A9\uC774\uBBC0\uB85C). :key \uB85C \uD0ED \uC804\uD658\uB9C8\uB2E4 \uC0C8\uB85C \uADF8\uB824 highlightElement \uAC00 \uB2E4\uC2DC
         \uAC78\uB9AC\uAC8C \uD55C\uB2E4(ddlCodeBoxRef watch \uCC38\uC870 \u2014 watch \uB294 \uC774\uC81C \uBAA8\uB4DC \uBB34\uAD00\uD558\uAC8C \uD56D\uC0C1 \uC7AC\uD558\uC774\uB77C\uC774\uD2B8). -->
    <div class="sg-ddl-edit-wrap">
      <pre ref="ddlCodeBoxRef" :key="cfCurTab.tabId" aria-hidden="true"
        class="sg-code sg-ddl-code line-numbers language-sql"><code class="language-sql">{{ cfCurTab.ddlText }}</code></pre>
      <textarea v-if="!cfReadonly" v-model="cfCurTab.ddlText" @input="onDdlInput" @scroll="onDdlScroll"
        class="sg-ddl-textarea-overlay" spellcheck="false" wrap="off"
        placeholder="CREATE TABLE schema.tbl ( ... );"></textarea>
    </div>
    <div v-if="cfCurTab.error" class="sg-msg-error">{{ cfCurTab.error }}</div>

    <!-- 2026-08-30: [\uBA54\uBAA8]+[\uC18C\uC2A4 \uC0DD\uC131] \uC744 \uD558\uB2E8 \uBC84\uD2BC\uB780(\uD654\uBA74 \uC6B0\uCE21 \uAD6C\uC11D)\uC5D0\uC11C \uC774 DDL \uD3B8\uC9D1 \uC601\uC5ED
         \uBC14\uB85C \uC544\uB798\uB85C \uC774\uB3D9 \u2014 \uBC84\uD2BC\uC774 \uD654\uBA74 \uAC00\uC7A5\uC790\uB9AC\uC5D0 \uC788\uC73C\uBA74 \uC5B8\uC5B4/\uC2A4\uD0DD \uD31D\uC624\uBC84\uAC00 \uADF8 \uBC84\uD2BC \uC911\uC2EC\uC73C\uB85C
         \uB728\uB2E4\uAC00 \uBDF0\uD3EC\uD2B8 \uC624\uB978\uCABD \uBC16\uC73C\uB85C \uC798\uB824\uC11C "\uBAA8\uBC14\uC77C \uC571"/"\uAE30\uD0C0" \uCE78\uC774 \uC548 \uBCF4\uC774\uB358 \uBB38\uC81C\uB3C4 \uAC19\uC774
         \uD574\uACB0\uB41C\uB2E4(\uD31D\uC624\uBC84\uAC00 \uC774\uC81C \uD654\uBA74 \uC911\uC559\uC5D0 \uB354 \uAC00\uAE4C\uC6B4 \uC704\uCE58\uC5D0\uC11C \uB72C\uB2E4). -->
    <div v-if="!cfReadonly" style="display:flex;margin-top:12px;">
      <span style="margin-left:auto;display:flex;gap:8px;align-items:center;">
        <input v-model="uiState.genMemo" class="form-control" style="width:220px;"
          placeholder="\uBCF4\uAD00 \uBA54\uBAA8(\uC120\uD0DD) \u2014 \uC608: v1 \uCD08\uC548, \uB9AC\uBDF0 \uBC18\uC601" />
        <div class="sg-gen-wrap">
          <button class="sg-btn sg-btn-dark" @click="onOpenStackPop" :disabled="uiState.generating">
            {{ uiState.generating ? '\uC0DD\uC131 \uC911\u2026' : '\u2699\uFE0F \uC18C\uC2A4\uC0DD\uC131' }}
          </button>
          <template v-if="uiState.stackPopOpen">
            <div class="sg-stack-backdrop" @click="onCloseStackPop"></div>
            <div class="sg-stack-pop">
              <div class="sg-stack-pop-title">\uC0DD\uC131\uD560 \uC5B8\uC5B4/\uC2A4\uD0DD \uC120\uD0DD</div>
              <div class="sg-stack-pop-list">
                <div v-for="sec in SG_STACK_SECTIONS" :key="sec.label" class="sg-stack-section">
                  <div class="sg-stack-section-title">{{ sec.label }}</div>
                  <div class="sg-stack-section-grid">
                    <label v-for="g in sec.items" :key="g.prefix" class="sg-stack-item">
                      <input type="checkbox" :checked="selectedStacks.includes(g.prefix)" @change="onToggleStack(g.prefix)" />
                      <span class="sg-stack-item-label">{{ g.short || g.title }}</span>
                      <select class="sg-stack-version" :value="fnStackVersion(g.prefix)"
                        :disabled="!selectedStacks.includes(g.prefix)" @click.stop
                        @change="onChangeVersion(g.prefix, $event.target.value)">
                        <option v-for="v in SG_STACK_VERSION_OPTIONS" :key="v" :value="v">{{ v }}</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div class="sg-stack-pop-actions">
                <button type="button" class="sg-btn sg-btn-ghost" @click="onCloseStackPop">\uCDE8\uC18C</button>
                <button type="button" class="sg-btn sg-btn-dark" @click="onGenerateConfirmed" :disabled="!selectedStacks.length">\uC0DD\uC131 \uC2DC\uC791</button>
              </div>
            </div>
          </template>
        </div>
      </span>
    </div>

      </div>
      <!-- \u2550\u2550\u2550 \u25A1 \uC6B0\uCE21: \uD3B8\uC9D1 \uC601\uC5ED \u2550\u2550\u2550 -->
    </div>
  </div>

  <!-- \u2550\u2550\u2550 \uC0C1\uB2E8 \uC561\uC158(\uC800\uC7A5/\uC18C\uC2A4\uC0DD\uC131/\uC0AD\uC81C/\uCDE8\uC18C) \u2014 2026-08-30: [\uC0DD\uC131 \uACB0\uACFC] \uB97C \uC2A4\uD06C\uB864\uD574\uC11C \uB0B4\uB824\uAC00\uC9C0
       \uC54A\uC544\uB3C4 \uBC14\uB85C \uBCF4\uC774\uB3C4\uB85D \uADF8 \uC704\uB85C \uC774\uB3D9. ZIP \uB2E4\uC6B4\uB85C\uB4DC\uB9CC [\uC0DD\uC131 \uACB0\uACFC] \uD655\uC778 \uC9C1\uD6C4\uAC00 \uC790\uC5F0\uC2A4\uB7EC\uC6CC
       \uC6D0\uB798 \uC704\uCE58(\uADF8 \uC544\uB798)\uC5D0 \uADF8\uB300\uB85C \uB454\uB2E4. \u2550\u2550\u2550 -->
  <div class="sg-detail-bottom-actions">
    <template v-if="cfReadonly">
      <button class="btn btn_edit" @click="onSwitchToEdit">\uC218\uC815</button>
      <button v-if="form.projectId" class="btn btn_delete" @click="onDeleteProject">\uC0AD\uC81C</button>
    </template>
    <template v-else>
      <button class="btn btn_save" @click="onSave" :disabled="uiState.loading">\uC800\uC7A5</button>
      <!-- 2026-08-30: \uD328\uD134 A \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70(\uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC \uC720\uC9C0, \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uD45C\uC900 \uBCC0\uACBD) -->
      <button v-if="form.projectId" class="btn btn_cancel" @click="onCancelEdit">\uCDE8\uC18C</button>
    </template>
  </div>

  <!-- \u2550\u2550\u2550 \uC0DD\uC131 \uACB0\uACFC \uBDF0\uC5B4 \u2550\u2550\u2550 -->
  <div class="sg-panel" v-if="cfTotalFileCount">
    <div class="sg-panel-title">
      {{ uiState.resultScopeKind === 'root' ? '\uC0DD\uC131 \uACB0\uACFC' : '\uC0DD\uC131 \uACB0\uACFC \u2014 ' + cfResultScopeLabel }}
      <span class="sg-panel-sub">({{ cfScopeFileEntries.length }}\uAC1C \uD30C\uC77C / \uD14C\uC774\uBE14 {{ cfResultScopeTabsCount }}\uAC1C / \uC804\uCCB4 {{ cfTotalFileCount }}\uAC1C)</span>
      <span v-if="cfResultScopeGeneratedAt" class="sg-gen-at">\uC0DD\uC131: {{ cfResultScopeGeneratedAt }}</span>
    </div>

    <div class="sg-result-body">
      <!-- \u2550\u2550\u2550 \u2460 \uD14C\uC774\uBE14\uBAA9\uB85D: \uBC94\uC704 \uC120\uD0DD \uD2B8\uB9AC \u2014 \uC804\uCCB4(root) / \uD3F4\uB354 / \uD14C\uC774\uBE14 \u2550\u2550\u2550 -->
      <div class="sg-result-tree-col">
        <div class="sg-result-col-title">\uD14C\uC774\uBE14\uBAA9\uB85D</div>
        <div class="sg-result-tree">
          <div class="sg-tree-row" :class="{ active: uiState.resultScopeKind==='root' }" @click="onSelectResultScope('root')">
            <span class="sg-tree-icon">\u{1F4E6}</span><span class="sg-tree-label">\uC804\uCCB4</span>
          </div>
          <div v-for="row in cfResultTreeFlat" :key="row.kind + ':' + (row.kind==='folder' ? row.path : row.tab.tabId)"
            class="sg-tree-row" :class="[row.kind==='folder' ? 'sg-tree-row-folder' : 'sg-tree-row-tab',
              { active: (row.kind==='folder' && uiState.resultScopeKind==='folder' && uiState.resultScopePath===row.path)
                     || (row.kind==='tab' && uiState.resultScopeKind==='tab' && uiState.resultTabId===row.tab.tabId) }]"
            :style="{ paddingLeft: (row.depth*16+8) + 'px' }"
            @click="row.kind==='folder' ? onSelectResultScope('folder', row.path) : onSelectResultScope('tab', row.tab.tabId)">
            <template v-if="row.kind==='folder'">
              <span class="sg-tree-toggle" @click.stop="onResultTreeToggle(row.path)">{{ uiState.resultTreeCollapsed[row.path] ? '\u25B8' : '\u25BE' }}</span>
              <span class="sg-tree-icon">\u{1F4C1}</span><span class="sg-tree-label">{{ row.name }}</span>
            </template>
            <template v-else>
              <span class="sg-tree-icon">\u{1F4C4}</span><span class="sg-tree-label">{{ row.tab.tableNm || '\uD14C\uC774\uBE14' }}</span>
            </template>
          </div>
        </div>
      </div>
      <!-- \u2550\u2550\u2550 \u2461 \uC0DD\uC131\uB41C \uC18C\uC2A4\uBAA9\uB85D: \uC2E4\uC81C \uC0DD\uC131 \uACBD\uB85C(realPath) \uADF8\uB300\uB85C\uC758 \uD3F4\uB354 \uD2B8\uB9AC \u2550\u2550\u2550
           2026-08-30: \uC2A4\uD0DD \uAD6C\uBD84 \uD5E4\uB354("Backend - JPA" \uB4F1) \uC5C6\uC774, \uC2E4\uC81C ZIP \uC5D0 \uB2F4\uAE30\uB294 \uACBD\uB85C \uADF8\uB300\uB85C
           \uBCF4\uC5EC\uB2EC\uB77C\uB294 \uC694\uCCAD \u2014 \uD3F4\uB354 \uC790\uCCB4\uAC00 be_jpa/\u2026 \uCC98\uB7FC \uC2A4\uD0DD\uBCC4\uB85C \uC790\uC5F0\uD788 \uB098\uB258\uC5B4 \uBCF4\uC778\uB2E4. -->
      <div class="sg-files-col">
        <div class="sg-result-col-title">\uC0DD\uC131\uB41C \uC18C\uC2A4\uBAA9\uB85D <span class="sg-result-col-count">{{ cfGenFileCount }}\uAC1C</span></div>
        <div class="sg-files">
          <div v-for="row in cfGenFileTreeFlat" :key="row.kind + ':' + (row.kind==='folder' ? row.path : row.entry.key)"
            class="sg-tree-row" :class="[row.kind==='folder' ? 'sg-tree-row-folder' : 'sg-tree-row-tab',
              { active: row.kind==='file' && uiState.activeFile===row.entry.key }]"
            :style="{ paddingLeft: (row.depth*16+8) + 'px' }"
            :title="row.kind==='file' ? row.entry.realPath : row.path"
            @click="row.kind==='folder' ? onGenFileTreeToggle(row.path) : onSelectFile(row.entry.key)">
            <template v-if="row.kind==='folder'">
              <span class="sg-tree-toggle">{{ uiState.genFileTreeCollapsed[row.path] ? '\u25B8' : '\u25BE' }}</span>
              <span class="sg-tree-icon">\u{1F4C1}</span><span class="sg-tree-label">{{ row.name }}</span>
            </template>
            <template v-else>
              <span class="sg-tree-icon">\u{1F4C4}</span><span class="sg-tree-label">{{ row.entry.realPath.split('/').pop() }}</span>
            </template>
          </div>
        </div>
      </div>
      <!-- \u2550\u2550\u2550 \u2462 \uC18C\uC2A4\uC815\uBCF4: \uC120\uD0DD \uD30C\uC77C \uCF54\uB4DC \uBDF0\uC5B4 \u2550\u2550\u2550 -->
      <div class="sg-code-pane">
        <div class="sg-file-info" v-if="cfActiveEntry">
          <span class="sg-file-path">{{ cfActiveEntry.realPath }}</span>
          <div class="sg-file-actions">
            <span v-if="uiState.copied" class="sg-copied">\u2713 \uBCF5\uC0AC\uB428</span>
            <button class="btn btn-sm btn-secondary" @click="onCopyCode">\uBCF5\uC0AC</button>
            <button class="btn btn-sm btn-secondary" @click="onDownloadFile">\uB2E4\uC6B4\uB85C\uB4DC</button>
          </div>
        </div>
        <pre v-if="cfActiveEntry" ref="codeBoxRef" :key="uiState.activeFile"
          class="sg-code line-numbers" :class="'language-' + fnLangOf(cfActiveEntry.fn)"><code
          :class="'language-' + fnLangOf(cfActiveEntry.fn)">{{ cfActiveEntry.content }}</code></pre>
        <div v-else class="sg-empty-hint">\uC88C\uCE21\uC5D0\uC11C \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694</div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550 ZIP \uB2E4\uC6B4\uB85C\uB4DC (2026-08-30: \uC774 \uC704\uCE58 \uC720\uC9C0 \u2014 \uC0DD\uC131 \uACB0\uACFC\uB97C \uD655\uC778\uD55C \uC9C1\uD6C4 \uBC14\uB85C \uB2E4\uC6B4\uB85C\uB4DC).
       cfShowZipDownload \uAC00 \uC774\uBBF8 cfTotalFileCount>0 \uC744 \uD3EC\uD568\uD558\uBBC0\uB85C :disabled \uB294 \uBD88\uD544\uC694(\uD56D\uC0C1 true \uC0C1\uD0DC\uB85C\uB9CC \uB80C\uB354). \u2550\u2550\u2550 -->
  <div class="sg-detail-bottom-actions" v-if="cfShowZipDownload">
    <button class="sg-btn sg-btn-green" @click="onDownloadZip">\u2B07 ZIP \uB2E4\uC6B4\uB85C\uB4DC</button>
  </div>

  <!-- \u2550\u2550\u2550 \uC774\uB825 \uD0ED \u2014 \uC0DD\uC131 \uC774\uB825(DB \uCCA8\uBD80) / \uC0DD\uC131\uACB0\uACFC \uB2E4\uC6B4\uB85C\uB4DC \uC774\uB825(\uD074\uB9AD \uB85C\uADF8) \uD1B5\uD569, 2026-08-28 \u2550\u2550\u2550 -->
  <div class="sg-panel">
    <div class="sg-panel-title">\u{1F552} \uC774\uB825</div>
    <fo-tab-bar :tabs="histTabs" :tab="uiState.histTab"
      @tab-select="id => uiState.histTab = id" />
    <template v-if="uiState.histTab==='gen'">
      <!-- \uBCF4\uAD00 \uBA54\uBAA8 \uC785\uB825\uC740 2026-08-30 \uC0C1\uB2E8 \uC561\uC158\uBC14([\uC18C\uC2A4 \uC0DD\uC131] \uC67C\uCABD)\uB85C \uC774\uB3D9 \u2014 \uC5EC\uAE30 \uC911\uBCF5 \uBC30\uCE58 \uC81C\uAC70. -->
      <!-- 2026-08-30: \uC11C\uBC84\uC0AC\uC774\uB4DC \uD398\uC774\uC9D5 \uC801\uC6A9(\uC815\uCC45: \uD074\uB77C\uC774\uC5B8\uD2B8 \uC0AC\uC774\uB4DC \uD398\uC774\uC9D5 \uAE08\uC9C0) \u2014 :pager \uB97C \uC8FC\uBA74
           fo-grid \uAC00 \uBC88\uD638\uB97C \uD398\uC774\uC9C0 \uAE30\uC900\uC73C\uB85C \uC790\uB3D9 \uACC4\uC0B0\uD55C\uB2E4. class="sg-hist-table" \uC740 \uD589\uAC04\uC744
           \uC881\uD788\uB294 \uC2A4\uCF54\uD504 CSS(\uC804\uC5ED .fo-grid-table \uC5D0\uB294 \uC601\uD5A5 \uC5C6\uC74C). -->
      <div class="sg-list-count">\uCD1D {{ genHistPager.pageTotalCount }}\uAC1C</div>
      <fo-grid class="sg-hist-table" :columns="genHistGridColumns" :rows="genHists" :pager="genHistPager" row-key="sourcegenHistId" bare
        empty-text="\uBCF4\uAD00\uB41C \uC0DD\uC131\uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. [\uC18C\uC2A4 \uC0DD\uC131] \uC744 \uC2E4\uD589\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uBCF4\uAD00\uB429\uB2C8\uB2E4.">
        <!-- 2026-08-30: \uD30C\uC77C\uBA85 \uCEEC\uB7FC \uC81C\uAC70\uB85C \uB113\uC5B4\uC9C4 \uAD00\uB9AC\uC5F4\uC744 \uC881\uC740 \uD3ED + 2\uC904 wrap \uC73C\uB85C \uB2E4\uC2DC \uCD95\uC18C
             (columns \uC758 type:'actions' \uD56D\uBAA9\uC740 \uADF8\uB300\uB85C \uB450\uB418 #row-actions \uC2AC\uB86F\uC774 \uD56D\uC0C1 \uC6B0\uC120\uC774\uBBC0\uB85C
             \uB80C\uB354\uB294 \uC774\uCABD \uB9C8\uD06C\uC5C5\uC774 \uB2F4\uB2F9 \u2014 visible/onClick \uC870\uAC74\uC740 \uADF8 \uBC30\uC5F4\uACFC \uB3D9\uC77C\uD558\uAC8C \uB9DE\uCD98\uB2E4). -->
        <template #row-actions="{ row }">
          <div class="sg-hist-actions">
            <a v-if="row.zipUrl" class="sg-hist-link" @click="onDownloadGenHistZip(row)">\uB2E4\uC6B4\uB85C\uB4DC</a>
            <button v-if="row.ddlSnapshotJson" type="button" class="btn btn-xs btn_detail" @click="onLoadSnapshot(row)">\uBD88\uB7EC\uC624\uAE30</button>
            <button v-if="!cfReadonly" type="button" class="btn btn_row_delete" @click="onDeleteGenHist(row)">\uC0AD\uC81C</button>
          </div>
        </template>
      </fo-grid>
      <fo-pager :pager="genHistPager" :on-set-page="onSetPageGenHist" :on-size-change="onSizeChangeGenHist" />
    </template>
    <template v-else>
      <div class="sg-list-count">\uCD1D {{ templateDlHistPager.pageTotalCount }}\uAC1C</div>
      <fo-grid class="sg-hist-table" :columns="templateDlHistGridColumns" :rows="templateDlHist" :pager="templateDlHistPager" row-key="downloadHistId" bare
        empty-text="\uB2E4\uC6B4\uB85C\uB4DC \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <!-- \uC0DD\uC131\uC774\uB825 \uADF8\uB9AC\uB4DC\uC640 \uAD00\uB9AC\uC5F4 \uD3ED\uC744 \uB9DE\uCD94\uAE30 \uC704\uD574 \uAC19\uC740 wrapper \uC7AC\uC0AC\uC6A9(\uBC84\uD2BC\uC740 1\uAC1C\uBFD0\uC774\uB77C \uC2E4\uC81C\uB85C\uB294 \uC904\uBC14\uAFC8 \uC548 \uB428).
             plain href \uB9C1\uD06C \u2014 \uD074\uB9AD\uD574\uB3C4 \uC774 \uADF8\uB9AC\uB4DC\uC5D0 \uC0C8 \uB85C\uADF8\uB97C \uB0A8\uAE30\uC9C0 \uC54A\uB294\uB2E4(\uAE30\uC874 \uB3D9\uC791 \uADF8\uB300\uB85C). -->
        <template #row-actions="{ row }">
          <div class="sg-hist-actions">
            <a v-if="row.zipUrl" class="sg-hist-link" :href="row.zipUrl" target="_blank" rel="noopener">\uB2E4\uC6B4\uB85C\uB4DC</a>
          </div>
        </template>
      </fo-grid>
      <fo-pager :pager="templateDlHistPager" :on-set-page="onSetPageDlHist" :on-size-change="onSizeChangeDlHist" />
    </template>
  </div>

  <!-- \u2550\u2550\u2550 \uD504\uB85C\uC81D\uD2B8 \uD15C\uD50C\uB9BF \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC \u2014 \uC2E4\uC81C DDL(_doc/ddl_pgsql/)\uC744 \uC5C5\uBB34\uAD6C\uBD84\uBCC4\uB85C \uBB36\uC5B4 ZIP \uB2E4\uC6B4\uB85C\uB4DC \u2550\u2550\u2550 -->
  <fo-modal :show="uiState.templateModalOpen" title="\uD504\uB85C\uC81D\uD2B8 \uD15C\uD50C\uB9BF \uB2E4\uC6B4\uB85C\uB4DC" width="520px"
    box-pad="20px" @close="onTemplateModalClose">
    <div class="sg-view-toggle" style="margin-bottom:6px;">
      <button type="button" :class="{ active: uiState.templateDbTab==='ORACLE' }" @click="onTemplateDbTab('ORACLE')">Oracle</button>
      <button type="button" :class="{ active: uiState.templateDbTab==='POSTGRESQL' }" @click="onTemplateDbTab('POSTGRESQL')">PostgreSQL</button>
    </div>
    <div v-if="uiState.templateDbTab==='ORACLE'" style="font-size:11px;color:var(--text-muted,#999);margin-bottom:10px;">
      \u203B \uC6D0\uBCF8\uC740 PostgreSQL DDL \uC774\uBA70, \uB2E4\uC6B4\uB85C\uB4DC \uC2DC Oracle \uBB38\uBC95\uC73C\uB85C \uC790\uB3D9 \uBCC0\uD658\uD569\uB2C8\uB2E4(\uD0C0\uC785/\uC778\uB371\uC2A4 \uAD6C\uBB38 \uC704\uC8FC \u2014 \uCC38\uACE0\uC6A9, \uBC30\uD3EC \uC804 \uAC80\uD1A0 \uD544\uC694)
    </div>
    <div v-else style="margin-bottom:10px;"></div>
    <div style="display:flex;flex-direction:column;gap:6px;max-height:400px;overflow-y:auto;">
      <div v-for="d in SG_TEMPLATE_DOMAINS" :key="d.key" class="sg-sample-btn"
        style="width:100%;justify-content:space-between;cursor:default;">
        <span>{{ d.label }}<span class="sg-sample-desc">{{ d.files.length }}\uAC1C \uD14C\uC774\uBE14</span></span>
        <button type="button" class="sg-btn sg-btn-dark" style="flex:0 0 auto;"
          :disabled="!!uiState.templateDownloadingKey" @click="onDownloadTemplate(d)">
          {{ uiState.templateDownloadingKey===d.key ? '\uB0B4\uB824\uBC1B\uB294 \uC911\u2026' : '\u2B07 \uB2E4\uC6B4\uB85C\uB4DC' }}
        </button>
      </div>
    </div>
  </fo-modal>

  <!-- \u2550\u2550\u2550 \uD504\uB85C\uC81D\uD2B8\uC5C5\uB85C\uB4DC \uBAA8\uB2EC \u2014 DB \uC720\uD615 \uC0AC\uC804\uC120\uD0DD + txt/sql/zip \uC5C5\uB85C\uB4DC \u2550\u2550\u2550 -->
  <fo-modal :show="uiState.uploadModalOpen" title="\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB85C\uB4DC" width="440px"
    box-pad="20px" @close="uiState.uploadModalOpen = false">
    <div class="sg-view-toggle" style="margin-bottom:10px;">
      <button type="button" :class="{ active: uiState.uploadDbType==='ORACLE' }" @click="onProjectUploadDbPick('ORACLE')">Oracle</button>
      <button type="button" :class="{ active: uiState.uploadDbType==='POSTGRESQL' }" @click="onProjectUploadDbPick('POSTGRESQL')">PostgreSQL</button>
    </div>
    <div style="font-size:11px;color:var(--text-muted,#999);margin-bottom:14px;">
      \uC5C5\uB85C\uB4DC\uD560 \uD30C\uC77C\uC758 DDL \uBC29\uC5B8\uC744 \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694(\uD30C\uC2F1 \uAE30\uC900). txt / sql / zip(txt\xB7sql \uD3EC\uD568) \uD30C\uC77C\uB9CC \uAC00\uB2A5\uD558\uBA70,
      \uD55C \uD30C\uC77C\uC5D0 CREATE TABLE \uC774 \uC5EC\uB7EC \uAC1C \uC788\uC5B4\uB3C4 \uD14C\uC774\uBE14 \uB2E8\uC704\uB85C \uB098\uB220 \uC88C\uCE21 \uD2B8\uB9AC\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4.
    </div>
    <!-- 2026-08-30: \uAE30\uBCF8 \uCCB4\uD06C(\uAD50\uCCB4) \u2014 \uCCB4\uD06C \uD574\uC81C \uC2DC \uAE30\uC874 \uD0ED\uC5D0 \uB204\uC801 \uCD94\uAC00(\uC608\uC804 \uB3D9\uC791) -->
    <label class="sg-thumb-chk" style="margin-bottom:12px;"
      title="\uCCB4\uD06C: \uC5C5\uB85C\uB4DC \uB0B4\uC6A9\uC73C\uB85C \uC88C\uCE21 \uD2B8\uB9AC\uB97C \uC804\uBD80 \uAD50\uCCB4\uD569\uB2C8\uB2E4. \uD574\uC81C: \uAE30\uC874 \uD0ED\uC740 \uADF8\uB300\uB85C \uB450\uACE0 \uB4A4\uC5D0 \uB204\uC801 \uCD94\uAC00\uD569\uB2C8\uB2E4">
      <input type="checkbox" v-model="uiState.uploadReplaceExisting" /> \uAE30\uC874\uC815\uBCF4 \uCD08\uAE30\uD654
    </label>
    <input ref="uploadFileInputRef" type="file" accept=".txt,.sql,.zip" style="display:none" @change="onProjectUploadFile" />
    <button type="button" class="sg-btn sg-btn-dark" style="width:100%;justify-content:center;"
      :disabled="uiState.uploading" @click="onOpenUploadPicker">
      {{ uiState.uploading ? '\uCC98\uB9AC \uC911\u2026' : '\u{1F4C1} \uD30C\uC77C \uC120\uD0DD' }}
    </button>
  </fo-modal>
</div>
`};
