/* ShopJoy FO - lazy-load 대상 클래스 맵 (scripts/generate-fo-lazy-classes.js 로 자동 생성 — 손으로 고치지 말 것!)
   FO 화면을 추가할 때 사람이 손대는 파일은 scripts/generate-fo-lazy-classes.js 하나뿐이다:
     1) 화면 소스 작성 (pages/fo/<모듈>/... — 예: pages/fo/ec1/, pages/fo/ec2/)
     2) generate-fo-lazy-classes.js 상단 FO_PAGE_TO_CLASS_STATIC 에 pageId: 'ClassName' 한 줄 추가
        (등록 태그명이 파일 내부 window 전역명과 다르면 FO_REG_TO_GLOBAL 에도 추가)
     3) node scripts/generate-fo-lazy-classes.js (또는 npm run gen-fo-lazy) 실행
   이 파일(foAppLazyClasses.js) 은 그 결과물이라 재생성될 때마다 전체가 덮어써진다.
   아래 각 블록 위 주석에 무슨 용도인지 설명해뒀다. */

/* FO_LAZY_CLASS_FILES_BY_MODULE — 테넌트 모듈(pages/fo/<모듈>/)별 "등록명(태그 PascalCase 기준)
   → 스크립트 파일 경로" 매핑. FO 화면 소스는 모듈마다 통째로 독립이라(같은 클래스명이 모듈마다
   따로 있음) 맵도 모듈별로 따로 만든다. pages/fo/<모듈> 전체를 스캔해서 100% 자동 생성 —
   사람이 직접 추가할 항목 없음. */
window.FO_LAZY_CLASS_FILES_BY_MODULE = {
  "ec1": {
    AboutPage: "pages/fo/ec1/About.js",
    BlogEdit: "pages/fo/ec1/BlogEdit.js",
    BlogPage: "pages/fo/ec1/Blog.js",
    BlogView: "pages/fo/ec1/BlogView.js",
    Cart: "pages/fo/ec1/Cart.js",
    Contact: "pages/fo/ec1/Contact.js",
    DispUiPage: "pages/fo/ec1/xd/DispUiPage.js",
    EventPage: "pages/fo/ec1/Event.js",
    EventView: "pages/fo/ec1/EventView.js",
    Faq: "pages/fo/ec1/Faq.js",
    LikePage: "pages/fo/ec1/Like.js",
    LocationPage: "pages/fo/ec1/Location.js",
    Login: "pages/fo/ec1/Login.js",
    MyCache: "pages/fo/ec1/my/MyCache.js",
    MyChatt: "pages/fo/ec1/my/MyChatt.js",
    MyClaim: "pages/fo/ec1/my/MyClaim.js",
    MyContact: "pages/fo/ec1/my/MyContact.js",
    MyCoupon: "pages/fo/ec1/my/MyCoupon.js",
    MyOrder: "pages/fo/ec1/my/MyOrder.js",
    Order: "pages/fo/ec1/Order.js",
    PlanPage: "pages/fo/ec1/Plan.js",
    PlanView: "pages/fo/ec1/PlanView.js",
    XdDispUi01: "pages/fo/ec1/xd/DispUi01.js",
    XdDispUi02: "pages/fo/ec1/xd/DispUi02.js",
    XdDispUi03: "pages/fo/ec1/xd/DispUi03.js",
    XdDispUi04: "pages/fo/ec1/xd/DispUi04.js",
    XdDispUi05: "pages/fo/ec1/xd/DispUi05.js",
    XdDispUi06: "pages/fo/ec1/xd/DispUi06.js",
    XsLocalStorage: "pages/fo/ec1/xs/XsLocalStorage.js",
    XsSample01: "pages/fo/ec1/xs/Sample01.js",
    XsSample02: "pages/fo/ec1/xs/Sample02.js",
    XsSample03: "pages/fo/ec1/xs/Sample03.js",
    XsSample04: "pages/fo/ec1/xs/Sample04.js",
    XsSample05: "pages/fo/ec1/xs/Sample05.js",
    XsSample06: "pages/fo/ec1/xs/Sample06.js",
    XsSample07: "pages/fo/ec1/xs/Sample07.js",
    XsSample11: "pages/fo/ec1/xs/Sample11.js",
    XsSample12: "pages/fo/ec1/xs/Sample12.js",
    XsSample13: "pages/fo/ec1/xs/Sample13.js",
    XsSample14: "pages/fo/ec1/xs/Sample14.js",
    XsSample21: "pages/fo/ec1/xs/Sample21.js",
    XsSample22: "pages/fo/ec1/xs/Sample22.js",
    XsSample23: "pages/fo/ec1/xs/Sample23.js",
    XsStore: "pages/fo/ec1/xs/XsStore.js",
  },
  "ec2": {
    AboutPage: "pages/fo/ec2/About.js",
    BlogEdit: "pages/fo/ec2/BlogEdit.js",
    BlogPage: "pages/fo/ec2/Blog.js",
    BlogView: "pages/fo/ec2/BlogView.js",
    Cart: "pages/fo/ec2/Cart.js",
    Contact: "pages/fo/ec2/Contact.js",
    DispUiPage: "pages/fo/ec2/xd/DispUiPage.js",
    EventPage: "pages/fo/ec2/Event.js",
    EventView: "pages/fo/ec2/EventView.js",
    Faq: "pages/fo/ec2/Faq.js",
    LikePage: "pages/fo/ec2/Like.js",
    LocationPage: "pages/fo/ec2/Location.js",
    Login: "pages/fo/ec2/Login.js",
    MyCache: "pages/fo/ec2/my/MyCache.js",
    MyChatt: "pages/fo/ec2/my/MyChatt.js",
    MyClaim: "pages/fo/ec2/my/MyClaim.js",
    MyContact: "pages/fo/ec2/my/MyContact.js",
    MyCoupon: "pages/fo/ec2/my/MyCoupon.js",
    MyOrder: "pages/fo/ec2/my/MyOrder.js",
    Order: "pages/fo/ec2/Order.js",
    PlanPage: "pages/fo/ec2/Plan.js",
    PlanView: "pages/fo/ec2/PlanView.js",
    XdDispUi01: "pages/fo/ec2/xd/DispUi01.js",
    XdDispUi02: "pages/fo/ec2/xd/DispUi02.js",
    XdDispUi03: "pages/fo/ec2/xd/DispUi03.js",
    XdDispUi04: "pages/fo/ec2/xd/DispUi04.js",
    XdDispUi05: "pages/fo/ec2/xd/DispUi05.js",
    XdDispUi06: "pages/fo/ec2/xd/DispUi06.js",
    XsLocalStorage: "pages/fo/ec2/xs/XsLocalStorage.js",
    XsSample01: "pages/fo/ec2/xs/Sample01.js",
    XsSample02: "pages/fo/ec2/xs/Sample02.js",
    XsSample03: "pages/fo/ec2/xs/Sample03.js",
    XsSample04: "pages/fo/ec2/xs/Sample04.js",
    XsSample05: "pages/fo/ec2/xs/Sample05.js",
    XsSample06: "pages/fo/ec2/xs/Sample06.js",
    XsSample07: "pages/fo/ec2/xs/Sample07.js",
    XsSample11: "pages/fo/ec2/xs/Sample11.js",
    XsSample12: "pages/fo/ec2/xs/Sample12.js",
    XsSample13: "pages/fo/ec2/xs/Sample13.js",
    XsSample14: "pages/fo/ec2/xs/Sample14.js",
    XsSample21: "pages/fo/ec2/xs/Sample21.js",
    XsSample22: "pages/fo/ec2/xs/Sample22.js",
    XsSample23: "pages/fo/ec2/xs/Sample23.js",
    XsStore: "pages/fo/ec2/xs/XsStore.js",
  },
};

/* FO_LAZY_CLASS_FILES — 이 배포가 쓰는 모듈 하나의 맵만 골라 올린다.
   foAppBase.js 의 lazy 로더(fnEnsurePageLoaded/fnCollectClasses)가 화면을 처음 열 때
   이 맵을 보고 어떤 파일을 loadModule()(동적 import())로 불러올지 찾는다.
   모듈은 lib/app/foAppTenant.js 가 정한 window.FO_TENANT_MODULE(= envFoConsts.tenantModule,
   배포별 고정) — 그래서 index.html 에서 envFoConsts.js → foAppTenant.js → 이 파일 순서여야 한다. */
(function () {
  var DEFAULT_MODULE = "ec1";
  var byModule = window.FO_LAZY_CLASS_FILES_BY_MODULE;
  var M = window.FO_TENANT_MODULE || DEFAULT_MODULE;
  if (!byModule[M]) {
    console.warn('[foAppLazyClasses] 알 수 없는 테넌트 모듈 "' + M + '" — ' + DEFAULT_MODULE + ' 로 대체합니다. (pages/fo/' + M + '/ 폴더가 있는지, npm run gen-fo-lazy 를 다시 돌렸는지 확인)');
    M = DEFAULT_MODULE;
  }
  window.FO_TENANT_MODULE = M;
  window.FO_TENANT_PAGES_DIR = 'pages/fo/' + M + '/';
  window.FO_LAZY_CLASS_FILES = byModule[M] || {};
})();

/* FO_REG_TO_GLOBAL — "등록명(태그 기준) → 실제 window 전역 변수명" 매핑.
   대부분은 등록명과 파일 내부 window 전역명이 같아서(예: Cart → window.Cart) 필요 없지만,
   극소수(예: <blog-page> 태그인데 파일은 window.Blog) 는 다를 수 있어 여기서 보정한다.
   자동 계산 불가 — 새로 이런 케이스가 생기면 generate-fo-lazy-classes.js 상단에 직접 추가. */
window.FO_REG_TO_GLOBAL = {
  AboutPage: "About",
  BlogPage: "Blog",
  LikePage: "Like",
  XdDispUi01: "DispUi01",
  XdDispUi02: "DispUi02",
  XdDispUi03: "DispUi03",
  XdDispUi04: "DispUi04",
  XdDispUi05: "DispUi05",
  XdDispUi06: "DispUi06",
};

/* FO_PAGE_TO_CLASS — "pageId(화면 식별자) → 진입 등록명" 매핑.
   foAppBase.js 가 navigate()/URL 복원 시 이 값으로 어떤 클래스를 로드해야 할지 찾는다.
   BO 의 BO_APP_COMP_PAGE 와 같은 역할이지만, FO 는 kebab 태그 매핑 테이블이 따로 없어서
   pageId 가 바로 등록명으로 연결된다. 새 "최상위 페이지" 추가 시 사람이 결정해서 넣는
   유일한 정보 — 이 파일 말고 scripts/generate-fo-lazy-classes.js 상단의
   FO_PAGE_TO_CLASS_STATIC 에 추가할 것(하위 임베드 컴포넌트는 여기 안 넣어도 자동탐지됨). */
window.FO_PAGE_TO_CLASS = {
  about: "AboutPage",
  blog: "BlogPage",
  blogEdit: "BlogEdit",
  blogView: "BlogView",
  cart: "Cart",
  contact: "Contact",
  dispUi01: "XdDispUi01",
  dispUi02: "XdDispUi02",
  dispUi03: "XdDispUi03",
  dispUi04: "XdDispUi04",
  dispUi05: "XdDispUi05",
  dispUi06: "XdDispUi06",
  event: "EventPage",
  eventView: "EventView",
  faq: "Faq",
  like: "LikePage",
  location: "LocationPage",
  myCache: "MyCache",
  myChatt: "MyChatt",
  myClaim: "MyClaim",
  myContact: "MyContact",
  myCoupon: "MyCoupon",
  myOrder: "MyOrder",
  order: "Order",
  plan: "PlanPage",
  planView: "PlanView",
  sample01: "XsSample01",
  sample02: "XsSample02",
  sample03: "XsSample03",
  sample04: "XsSample04",
  sample05: "XsSample05",
  sample06: "XsSample06",
  sample07: "XsSample07",
  sample11: "XsSample11",
  sample12: "XsSample12",
  sample13: "XsSample13",
  sample14: "XsSample14",
  sample21: "XsSample21",
  sample22: "XsSample22",
  sample23: "XsSample23",
  xsLocalStorage: "XsLocalStorage",
  xsStore: "XsStore",
};

/* home/prodList/prodView — FO_SITE_NO 별 동적 이름(Home01/Prod01List/Prod01View 등)이라
   위 정적 객체엔 못 적어서 부팅 시점의 window.FO_SITE_NO 를 읽어 여기서 직접 추가한다.
   파일은 위에서 고른 모듈 폴더(FO_TENANT_PAGES_DIR) 최상위에서 찾는다. */
(function () {
  var N = window.FO_SITE_NO || '01';
  var D = window.FO_TENANT_PAGES_DIR;
  window.FO_LAZY_CLASS_FILES['Home' + N]          = D + 'Home' + N + '.js';
  window.FO_LAZY_CLASS_FILES['Prod' + N + 'List'] = D + 'Prod' + N + 'List.js';
  window.FO_LAZY_CLASS_FILES['Prod' + N + 'View'] = D + 'Prod' + N + 'View.js';
  window.FO_PAGE_TO_CLASS.home     = 'Home' + N;
  window.FO_PAGE_TO_CLASS.prodList = 'Prod' + N + 'List';
  window.FO_PAGE_TO_CLASS.prodView = 'Prod' + N + 'View';
})();
