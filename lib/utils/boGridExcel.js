/* ============================================================
 * boGridExcel — 화면에 그려진 그리드(<table>)를 "보이는 그대로" 엑셀(.xlsx)로 내려받는 유틸
 *
 * 왜 DOM 을 읽는가:
 *   서버 엑셀(BoExcelDown*)은 DB 조회 결과 전체를 만들지만 화면의 색·정렬·코드명 변환·행 강조까지는
 *   못 담는다. 이 유틸은 사용자가 지금 보고 있는 표(적재된 행)를 그대로 옮긴다 — 값은 화면 텍스트,
 *   스타일은 브라우저의 computed style(배경/글자색/굵기/크기/정렬/테두리)을 셀 서식으로 변환.
 *
 * 스타일을 쓰려고 ExcelJS 를 쓴다(assets/cdn/pkg/exceljs/4.4.0). 기존 xlsx(SheetJS 커뮤니티판)는
 * 셀 서식을 쓰지 못한다. ExcelJS 는 ~950KB 라 첫 다운로드 시점에만 지연 로딩한다.
 *
 * 사용: boGridExcel.exportTable(tableElement, { fileName: '주문목록' })  → Promise
 * 제외되는 열: 체크박스 / 드래그핸들 / 헤더가 비었거나 '관리'인 열 / 버튼·입력만 있는 열(행 액션)
 * 제외되는 행: 행 펼침 상세(.bo-grid-expand-row), 빈 목록 안내행
 * ============================================================ */
(function (global) {
  const EXCELJS_SRC = 'assets/cdn/pkg/exceljs/4.4.0/exceljs.min.js';
  let _loading = null;

  /* loadExcelJS — 최초 1회만 스크립트를 주입해 로드 (이후엔 즉시 resolve) */
  function loadExcelJS() {
    if (global.ExcelJS) return Promise.resolve();
    if (_loading) return _loading;
    _loading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = new URL(EXCELJS_SRC, document.baseURI).href;
      s.onload = () => (global.ExcelJS ? resolve() : reject(new Error('ExcelJS 로드 실패')));
      s.onerror = () => { _loading = null; reject(new Error('ExcelJS 파일을 불러오지 못했습니다: ' + EXCELJS_SRC)); };
      document.head.appendChild(s);
    });
    return _loading;
  }

  /* ── 색상 변환 ─────────────────────────────────────────────── */
  const RGB_RE = /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\s*\)/;
  const hex2 = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0').toUpperCase();
  /* toArgb — 'rgb(1,2,3)' / 'rgba(1,2,3,.5)' → 'FF010203'. 투명(알파 0)·미인식은 null */
  function toArgb(css) {
    const m = RGB_RE.exec(css || '');
    if (!m) return null;
    const a = m[4] === undefined ? 1 : parseFloat(m[4]);
    if (!(a > 0.05)) return null;
    /* 반투명은 흰 배경 위에 합성한 색으로 근사 */
    const mix = (c) => (a >= 1 ? +c : +c * a + 255 * (1 - a));
    return 'FF' + hex2(mix(m[1])) + hex2(mix(m[2])) + hex2(mix(m[3]));
  }

  /* bgOf — 요소의 배경색. 배경색이 투명하면 그라디언트(헤더 linear-gradient)의 첫 색을 쓴다 */
  function bgOf(el) {
    const cs = getComputedStyle(el);
    const solid = toArgb(cs.backgroundColor);
    if (solid) return solid;
    if (cs.backgroundImage && cs.backgroundImage !== 'none') return toArgb(cs.backgroundImage);
    return null;
  }

  /* effectiveBg — 셀 배경 → 없으면 행(tr) 배경. 줄무늬/행 강조가 tr 이나 td 어느 쪽에 걸려도 잡는다 */
  function effectiveBg(td) {
    return bgOf(td) || (td.parentElement ? bgOf(td.parentElement) : null);
  }

  /* ── 셀 값/스타일 원천 요소 ─────────────────────────────────── */
  /* innerMost — 셀 텍스트를 통째로 감싸는 가장 안쪽 요소(배지 <span>, 링크 <a> 등).
     글자색·굵기·배지 배경은 td 가 아니라 이 요소에 있는 경우가 대부분이다. */
  function innerMost(td) {
    let el = td;
    for (let i = 0; i < 6; i++) {
      const kids = [...el.children].filter((c) => !/^(SCRIPT|STYLE)$/.test(c.tagName));
      const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim() !== '');
      if (kids.length === 1 && !ownText && !isControl(kids[0])) el = kids[0]; // 입력/선택 컨트롤 안으로는 내려가지 않는다(기본 흰 배경·13px 글자가 셀 서식을 덮어씀)
      else break;
    }
    return el;
  }

  const isControl = (el) => /^(BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName);

  /* cellText — 화면에 보이는 텍스트. select/input 은 선택·입력된 값으로, 버튼은 제외 */
  function cellText(cell, isHead) {
    const hasCtl = cell.querySelector('button,input,select,textarea');
    if (!hasCtl) {
      let t = (cell.innerText || '').replace(/ /g, ' ');
      if (isHead) t = t.replace(/\s*[⇅↑↓]\s*$/g, ''); // 헤더 정렬 아이콘 제거
      return t.split('\n').map((s) => s.trim()).filter(Boolean).join('\n');
    }
    const clone = cell.cloneNode(true);
    clone.querySelectorAll('select').forEach((s) => s.replaceWith(document.createTextNode(s.selectedOptions[0] ? s.selectedOptions[0].text : '')));
    clone.querySelectorAll('input').forEach((i) => {
      const isChk = i.type === 'checkbox' || i.type === 'radio';
      i.replaceWith(document.createTextNode(isChk ? '' : (i.value || '')));
    });
    clone.querySelectorAll('textarea').forEach((i) => i.replaceWith(document.createTextNode(i.value || '')));
    clone.querySelectorAll('button').forEach((b) => b.remove());
    return (clone.textContent || '').replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* isControlOnly — 버튼/입력만 있고 글자가 없는 셀(행 액션 등) */
  function isControlOnly(td) {
    if (!td.querySelector('button,input,select,textarea')) return false;
    const clone = td.cloneNode(true);
    clone.querySelectorAll('button,input,select,textarea').forEach((e) => e.remove());
    return (clone.textContent || '').trim() === '';
  }

  /* toValue — 순수 숫자는 숫자 셀로(엑셀에서 합계·정렬 가능), 그 외(ID·날짜·0 시작 코드·15자리 초과)는 문자열 유지 */
  function toValue(text) {
    const t = text.replace(/,/g, '');
    /* 콤마가 있으면 올바른 천단위 표기(1,234,567)일 때만 숫자로 본다 — "1,2" 같은 건 문자열 유지 */
    const commaOk = !text.includes(',') || /^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(text);
    if (commaOk && /^-?(0|[1-9]\d{0,14})(\.\d+)?$/.test(t)) {
      return { value: Number(t), numFmt: /\./.test(t) ? '#,##0.00' : '#,##0' };
    }
    return { value: text };
  }

  const px2pt = (px) => Math.round(parseFloat(px) * 0.75 * 10) / 10;
  const firstFont = (ff) => ((ff || '').split(',')[0] || '').replace(/["']/g, '').trim();
  const H_ALIGN = { left: 'left', start: 'left', center: 'center', right: 'right', end: 'right', justify: 'left' };
  const THIN = (argb) => ({ style: 'thin', color: { argb: argb || 'FFD9DEE7' } });

  /* styleCell — computed style → ExcelJS 셀 서식 */
  function styleCell(xc, td, isHead) {
    const src = innerMost(td);
    const csTd = getComputedStyle(td);
    const csSrc = getComputedStyle(src);

    /* 글자: 색/굵기/크기/기울임은 안쪽 요소 기준(없으면 td 가 곧 src) */
    xc.font = {
      name: firstFont(csTd.fontFamily) || 'Malgun Gothic',
      size: px2pt(csSrc.fontSize) || 10,
      bold: parseInt(csSrc.fontWeight, 10) >= 600,
      italic: csSrc.fontStyle === 'italic',
      underline: /underline/.test(csSrc.textDecorationLine || ''),
      color: { argb: toArgb(csSrc.color) || 'FF000000' },
    };

    /* 배경: 배지(안쪽 요소)가 색을 갖고 있으면 그 색, 아니면 셀/행 배경 */
    const innerFill = src !== td ? bgOf(src) : null;
    const fill = (innerFill && innerFill !== 'FFFFFFFF') ? innerFill : effectiveBg(td);
    if (fill && fill !== 'FFFFFFFF') xc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: fill } };

    /* 정렬: 헤더는 가운데, 본문은 화면의 text-align 그대로 */
    xc.alignment = {
      horizontal: isHead ? 'center' : (H_ALIGN[csTd.textAlign] || 'left'),
      vertical: 'middle',
      wrapText: isHead || !/nowrap/.test(csTd.whiteSpace),
    };

    /* 테두리: 화면 테두리 색을 따라가되 없으면 옅은 회색 실선 */
    const bColor = toArgb(csTd.borderBottomColor);
    const bw = parseFloat(csTd.borderBottomWidth) || 0;
    const line = THIN(bw > 0 ? bColor : null);
    xc.border = { top: line, left: line, bottom: line, right: line };
  }

  /* safeSheetName — 엑셀 시트명 제약(31자, \ / ? * [ ] :) */
  const safeSheetName = (s) => (String(s || 'Sheet1').replace(/[\\/?*[\]:]/g, ' ').trim().slice(0, 31)) || 'Sheet1';

  /* exportTable — 본체 */
  async function exportTable(table, opts) {
    opts = opts || {};
    if (!table) throw new Error('내보낼 표를 찾지 못했습니다.');
    await loadExcelJS();

    const headRow = table.querySelector('thead tr');
    if (!headRow) throw new Error('표 머리글이 없습니다.');
    const heads = [...headRow.children];
    const bodyRows = [...table.querySelectorAll('tbody > tr')].filter((tr) =>
      !tr.classList.contains('bo-grid-expand-row') && !tr.querySelector('td[colspan]:only-child'));

    /* 제외할 열 판정 (머리글/본문 모두 같은 인덱스로 봄) */
    const skip = heads.map((th, ci) => {
      if (th.querySelector('input[type=checkbox]')) return true;
      const label = cellText(th, true);
      if (label === '' || label === '관리') return true;
      if (!bodyRows.length) return false;
      return bodyRows.every((tr) => { const td = tr.children[ci]; return !td || isControlOnly(td); });
    });
    const cols = heads.map((_, i) => i).filter((i) => !skip[i]);

    const wb = new global.ExcelJS.Workbook();
    wb.creator = 'ShopJoy BO';
    wb.created = new Date();
    const fileBase = opts.fileName || 'grid';
    const ws = wb.addWorksheet(safeSheetName(opts.sheetName || fileBase), { views: [{ state: 'frozen', ySplit: 1 }] });

    /* 열 폭: 화면 폭(px) → 엑셀 문자수 근사 */
    ws.columns = cols.map((ci) => ({ width: Math.max(6, Math.min(70, Math.round((heads[ci].offsetWidth || 80) / 6.5))) }));

    /* 머리글 */
    const hr = ws.addRow(cols.map((ci) => cellText(heads[ci], true)));
    hr.height = Math.max(20, px2pt(headRow.offsetHeight || 30));
    cols.forEach((ci, k) => styleCell(hr.getCell(k + 1), heads[ci], true));

    /* 본문 */
    bodyRows.forEach((tr) => {
      const vals = cols.map((ci) => (tr.children[ci] ? toValue(cellText(tr.children[ci], false)) : { value: '' }));
      const row = ws.addRow(vals.map((v) => v.value));
      cols.forEach((ci, k) => {
        const td = tr.children[ci];
        if (!td) return;
        const xc = row.getCell(k + 1);
        styleCell(xc, td, false);
        if (vals[k].numFmt) xc.numFmt = vals[k].numFmt;
      });
    });

    ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: cols.length } };

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const name = global.coUtil && global.coUtil.cofBuildExportFilename
      ? global.coUtil.cofBuildExportFilename(fileBase + '.xlsx') : (fileBase + '.xlsx');
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return { fileName: name, rows: bodyRows.length, cols: cols.length };
  }

  global.boGridExcel = { exportTable, loadExcelJS };
})(window);
