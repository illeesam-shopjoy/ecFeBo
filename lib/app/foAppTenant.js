/* ShopJoy FO - 멀티테넌트 모듈 결정 (foAppTenant)
 * ─────────────────────────────────────────────────────────────────────────
 * FO 화면 소스는 모듈별 폴더(pages/fo/ec1, pages/fo/ec2, ...)로 나뉘어 있고, 각 모듈이 화면
 * 전체를 독립적으로 가진다(공통은 lib/**, components/**, assets/** 뿐). 이 파일은 "지금 이
 * 배포가 어느 모듈을 쓰는지" 를 한 번 결정해서 전역에 올려둔다.
 *
 *   window.FO_TENANT_MODULE     예) 'ec1'
 *   window.FO_TENANT_PAGES_DIR  예) 'pages/fo/ec1/'  (끝에 슬래시 포함)
 *
 * 결정 규칙 — "배포별 고정" 이다(런타임 감지 아님):
 *   1) window.envFoConsts.tenantModule (lib/env/envFoConsts.js = local 원본,
 *      lib/env/profiles/envFoConsts.{dev,prod}.js = 배포 빌드 시 덮어씀). 없으면 'ec1'.
 *   2) runMode 가 'local' 일 때만 — 로컬에서 다른 모듈을 쉽게 확인하기 위한 오버라이드.
 *      URL 에 ?TENANT_MODULE=ec2 를 붙이면 localStorage('modu-fo-sy-tenantModule')에 저장하고
 *      이후 새로고침에도 유지한다. ?TENANT_MODULE= (빈 값)으로 열면 저장값을 지우고 1)로 복귀.
 *      dev/prod 에서는 URL·localStorage 값을 전혀 보지 않는다(방문자가 모듈을 바꿀 수 없게).
 *
 * 로드 순서: lib/env/envFoConsts.js 다음, lib/app/foAppLazyClasses.js(및 pages/fo 를 직접
 * 참조하는 모든 <script>)보다 먼저. envFoConsts.js 가 없는 화면에서 로드되면 'ec1' 로 동작한다.
 * ───────────────────────────────────────────────────────────────────────── */
(function () {
  var DEFAULT_MODULE = 'ec1';
  var LS_KEY = 'modu-fo-sy-tenantModule';
  var isValid = function (v) { return /^[a-z][a-z0-9]*$/.test(String(v || '')); };

  var env = window.envFoConsts || {};
  var mod = isValid(env.tenantModule) ? env.tenantModule : DEFAULT_MODULE;

  if (env.runMode === 'local') {
    try {
      var qs = new URLSearchParams(window.location.search);
      if (qs.has('TENANT_MODULE')) {
        var v = String(qs.get('TENANT_MODULE') || '').trim();
        if (isValid(v)) localStorage.setItem(LS_KEY, v);
        else localStorage.removeItem(LS_KEY);
        /* SITE_NO 와 같은 방식 — 주소창에서 파라미터만 걷어낸다(해시/나머지 쿼리는 유지) */
        try {
          qs.delete('TENANT_MODULE');
          var newSearch = qs.toString();
          history.replaceState(null, '', window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash);
        } catch (_) {}
      }
      var saved = localStorage.getItem(LS_KEY);
      if (isValid(saved)) mod = saved;
    } catch (_) {}
  }

  window.FO_TENANT_MODULE = mod;
  window.FO_TENANT_PAGES_DIR = 'pages/fo/' + mod + '/';
})();
