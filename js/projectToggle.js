// projectToggle.js

// 1) Grid 컨테이너
const grid = document.getElementById('projects-grid');

// 2) 카드 래퍼와 섹션 매핑
const wrappers = {
  birdclef: document.getElementById('card-birdclef-wrapper'),
  llm:      document.getElementById('card-llm-wrapper'),
  tumor:    document.getElementById('card-tumor-wrapper'),
};
const sections = {
  birdclef: document.getElementById('section-birdclef'),
  llm:      document.getElementById('section-llm'),
  tumor:    document.getElementById('section-tumor'),
};

// 3) 토글 버튼 모두
const toggleButtons = Array.from(document.querySelectorAll('.toggle-btn'));

/**
 * 프로젝트 상세 토글 + 레이아웃 재배치
 * @param {string} project - 'birdclef' | 'llm' | 'tumor'
 * @param {string} [url]   - 상세 HTML 경로 (없으면 단순 토글)
 */
function toggleSectionWithFetch(project, url) {
  const sec    = sections[project];
  const isOpen = !sec.classList.contains('hidden');

  // --- 1) 모두 닫기 + order 초기화 + 버튼 텍스트 초기화 ---
  Object.values(sections).forEach(s => {
    s.classList.add('hidden');
    s.style.order = '';
  });
  Object.values(wrappers).forEach(w => {
    w.style.order = '';
  });
  toggleButtons.forEach(btn => {
    btn.textContent = '🔍 View Details ▼';
  });

  if (isOpen) {
    // 이미 열려 있던 프로젝트면 닫고 종료
    return;
  }

  // --- 2) 외부 HTML 로드 (url이 있을 때만) ---
  if (url) {
    const contentDiv = document.getElementById(`content-${project}`);
    fetch(url)
      .then(res => res.text())
      .then(html => { contentDiv.innerHTML = html; })
      .catch(() => { contentDiv.innerHTML = 'Failed to load.'; });
  }

  // --- 3) 해당 섹션 열기 ---
  sec.classList.remove('hidden');

  // --- 4) 레이아웃용 order 재배치 (PC vs 모바일 구분) ---
  const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
  let orderMap = {};

  if (isMobile) {
    // **모바일**: birdclef만 섹션을 두 번째에, 나머지는 기본 순서
    switch (project) {
      case 'birdclef':
        orderMap = {
          'card-birdclef-wrapper': 1,
          'section-birdclef':      2,
          'card-llm-wrapper':      3,
          'card-tumor-wrapper':    4,
        };
        break;
      case 'llm':
        orderMap = {
          'card-birdclef-wrapper': 1,
          'card-llm-wrapper':      2,
          'section-llm':           3,
          'card-tumor-wrapper':    4,
        };
        break;
      case 'tumor':
        orderMap = {
          'card-birdclef-wrapper': 1,
          'card-llm-wrapper':      2,
          'card-tumor-wrapper':    3,
          'section-tumor':         4,
        };
        break;
    }
  } else {
    // **PC (md 이상)**: 요구하신 1-1,1-2,1-3 레이아웃
    switch (project) {
      case 'birdclef':
      case 'llm':
        orderMap = {
          'card-birdclef-wrapper': 1,
          'card-llm-wrapper':      2,
          [`section-${project}`]:  3,
          'card-tumor-wrapper':    4,
        };
        break;
      case 'tumor':
        orderMap = {
          'card-birdclef-wrapper': 1,
          'card-llm-wrapper':      2,
          'card-tumor-wrapper':    3,
          'section-tumor':         4,
        };
        break;
    }
  }

  // order 적용
  Object.entries(orderMap).forEach(([id, ord]) => {
    const el = document.getElementById(id);
    if (el) el.style.order = ord;
  });

  // --- 5) 해당 프로젝트 버튼만 "Close ▲"로 변경 ---
  toggleButtons
    .filter(btn => btn.dataset.project === project)
    .forEach(btn => btn.textContent = 'Close ▲');
}
