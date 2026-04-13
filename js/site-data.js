window.PORTFOLIO_DATA = {
  profile: {
    name: "황순기",
    role: "AI Engineer · Product Builder",
    tagline: "AI 시스템을 설계하고, 문제를 운영 가능한 구조로 끝까지 연결합니다.",
    summary:
      "연구실의 재현 가능한 실험 설계, 금융 엔진의 정밀한 로직 검증, LLM 기반 AI 시스템 구현을 거치며 분석에서 끝나지 않는 엔지니어링을 해왔습니다. 이 사이트에는 경력, 대표 프로젝트, 연구, 그리고 장기 한수 같은 사이드 프로젝트를 각각 성격에 맞게 정리했습니다.",
    email: "kisdice@gmail.com",
    github: "https://github.com/Sungi-Hwang"
  },
  proofPoints: [
    "AI 솔루션, 금융 평가 엔진, 연구 시스템까지 이어지는 문제 해결 경험",
    "Python · C++ · NLP/RAG · ML · FastAPI 중심의 구현 역량",
    "모델링, 검증, 운영 기준까지 함께 설계하는 시스템 지향 개발 방식"
  ],
  siteRoles: [
    {
      title: "Developer Website",
      body: "공개 가능한 경력, 프로젝트, 연구 배경, 연락 수단을 하나의 정돈된 프로필로 보여줍니다."
    },
    {
      title: "Career Portfolio",
      body: "AI 엔지니어로서의 실무 경험과 대표 프로젝트를 전문적인 흐름으로 정리합니다."
    },
    {
      title: "Side Project Showcase",
      body: "장기 한수처럼 개인 프로젝트에서도 제품 완성도와 신뢰도를 어떻게 다루는지 보여줍니다."
    },
    {
      title: "Policy & Monetization Ready",
      body: "privacy 페이지와 루트 app-ads.txt 템플릿, 운영 전 체크 포인트를 함께 두어 배포 전환을 준비합니다."
    }
  ],
  product: {
    name: "장기 한수",
    oneLiner: "개인적으로 개발 중인 장기 훈련 앱",
    summary:
      "장기 퍼즐과 AI 대국을 한 앱 안에서 연습할 수 있게 만든 개인 프로젝트입니다. 퍼즐을 풀고, 기록을 남기고, AI와 대국하는 흐름을 한곳에 모으는 방향으로 개발하고 있습니다.",
    chips: [
      "2 Rulesets",
      "Puzzle Trust",
      "Attempt/Success/Failure Tracking",
      "AI History Sync",
      "Ad Slot Recovery",
      "Privacy/App-ads Ready"
    ],
    updates: [
      "장기 퍼즐과 AI 대국을 한 앱 안에서 이어서 사용할 수 있도록 구성한 장기 훈련 앱",
      "퍼즐 풀이 기록과 마지막 시도를 남겨 다시 풀거나 복기하기 쉽게 정리한 구조",
      "룰 모드와 판정 기준을 앱 안에서 분리해 학습용으로 쓰기 쉽게 다듬는 중"
    ],
    features: [
      "캐주얼 기본룰과 협회식 룰을 나눠서 원하는 기준으로 연습할 수 있음",
      "퍼즐 판정을 정답 수순 고정보다 실제로 상대 탈출수가 없는지 기준으로 정리함",
      "진행 데이터에 시도, 성공, 실패, 마지막 시도를 함께 저장함",
      "AI/엔진 이력을 맞춰서 사용자가 본 수순과 내부 상태가 어긋나지 않게 정리 중"
    ],
    priorities: [
      "저장된 AI 대국 이어하기는 뒤로 미뤄두고 퍼즐 판정과 기록 구조를 먼저 정리",
      "메인 메뉴 배너 광고는 오버레이 슬롯으로 바꾼 뒤 테스트 광고 기준 표시 확인",
      "운영 전에는 퍼블리셔 ID 반영, app-ads.txt 검증, 스토어 정책 문구 정리 필요"
    ]
  },
  caseStudy: [
    {
      title: "퍼즐 판정",
      body: "퍼즐 성공 조건을 마지막 수 이후 상대가 탈출할 수 없는지 기준으로 다시 정리했습니다.",
      bullets: [
        "정답 수순만 강요하는 방식보다 실제 결과 기준에 가깝게 조정",
        "룰 모드에 따라 기대하는 판정 차이를 더 분명하게 정리",
        "사용자가 왜 성공인지 실패인지 이해하기 쉬운 방향으로 수정"
      ]
    },
    {
      title: "진행 기록",
      body: "퍼즐 진행 데이터는 solved 여부만 남기지 않고 시도와 결과를 함께 기록하도록 확장했습니다.",
      bullets: [
        "시도, 성공, 실패, 마지막 시도까지 함께 저장",
        "다시 풀기나 복기 흐름을 만들기 쉬운 데이터 구조로 정리",
        "이후 통계나 학습 기록 화면으로 확장하기 쉬움"
      ]
    },
    {
      title: "광고 및 운영 준비",
      body: "광고 표시 안정성과 정책 페이지 연결도 함께 정리해 실제 배포 준비에 맞췄습니다.",
      bullets: [
        "메인 메뉴 배너 광고는 별도 오버레이 슬롯으로 재구성",
        "안드로이드 에뮬레이터에서 테스트 광고 표시 확인",
        "privacy 페이지와 app-ads.txt 템플릿을 사이트에 연결"
      ]
    }
  ],
  readiness: [
    {
      title: "제품 완성도",
      body: "룰 모드, 엔진 이력, 진행 데이터 구조를 먼저 정리해 이후 기능 추가가 흔들리지 않는 기반을 만들었습니다."
    },
    {
      title: "신뢰도",
      body: "사용자에게 납득 가능한 퍼즐 판정 기준을 제시하고, 테스트/회귀 관점의 설명이 가능한 상태로 정리했습니다."
    },
    {
      title: "홍보 준비",
      body: "앱 소개, 개발자 소개, 포트폴리오, 케이스 스터디를 한 페이지에서 자연스럽게 연결하도록 구성했습니다."
    },
    {
      title: "수익화 연결",
      body: "메인 메뉴 광고 슬롯 복구, privacy 링크, app-ads.txt 템플릿으로 운영 광고 전환의 최소 구조를 마련했습니다."
    }
  ],
  experience: [
    {
      period: "2025.11 - 현재",
      title: "코그니텀 · AI 솔루션 선임연구원",
      body: "LLM 기반 문서 검색(RAG), NER 기반 개인정보 가명처리, 시계열 이상탐지, AI 플랫폼 아키텍처 제안과 구현을 맡고 있습니다.",
      highlights: [
        "문서 포맷이 다양한 실무 환경에서 데이터 파이프라인과 검색 구조 설계",
        "모델 출력만이 아니라 정책과 운영 기준이 결합된 가명처리 구조 구현",
        "제안서 단계에서도 데이터 레이크, 가드레일, 운영 체계를 포함한 전체 아키텍처 설계"
      ]
    },
    {
      period: "2023.10 - 2024.12",
      title: "NICE P&I · 금융공학연구소 연구원",
      body: "채권 평가 엔진과 구조화 상품 로직을 다루며, 정밀한 계산 로직과 운영 가능한 코드 구조를 함께 검증하는 일을 했습니다.",
      highlights: [
        "원화 전용 평가 엔진을 글로벌 컨벤션 지원 구조로 리팩터링",
        "Hull-White 기반 금리 시나리오, OAS 로직, 현금흐름 계산 검증",
        "장기 만기 회사채 금리 산출의 불확실성을 보완하는 로직 구현"
      ]
    },
    {
      period: "2025.02 - 2025.08",
      title: "휴먼IT교육센터 · AI/ML 시스템 개발자 과정",
      body: "Python, 머신러닝, 딥러닝, SQL, NLP, 컴퓨터 비전, EDA를 실전 과제 중심으로 다시 압축 학습했습니다.",
      highlights: [
        "모델링뿐 아니라 전처리, 평가, 자동화, 서비스 연결 흐름까지 실습",
        "개인/팀 프로젝트를 통해 AI 결과물을 사용 가능한 형태로 전달하는 경험 축적",
        "최근 공개 포트폴리오 프로젝트 다수의 기반이 된 집중 학습 구간"
      ]
    },
    {
      period: "2015 - 2023",
      title: "전남대학교 대학원(물리학) · 한국표준과학연구원",
      body: "광학 제어, 편광 안정화, 원자 간섭계 실험 시스템을 다루며 반복 가능한 측정 환경과 구조적 문제 해결 태도를 익혔습니다.",
      highlights: [
        "석사 논문: Development of a transportable laser system for quantum atom gravimeter",
        "레이저 위상 잡음 안정화 프로젝트 인턴 수행",
        "연구 결과를 SCI 논문과 실험 시스템으로 정리한 경험"
      ]
    }
  ],
  projects: [
    {
      title: "Last Album",
      period: "2025.06 - 2025.08",
      summary: "RVC 음성 변환, Demucs 보컬 분리, Stable Diffusion 이미지 생성, FastAPI 백엔드를 묶어 멀티모달 AI 서비스를 만든 팀 프로젝트입니다.",
      tags: ["RVC", "Stable Diffusion", "FastAPI", "Multimodal"],
      image: "images/lastalbum.png",
      link: "files/Lastalbum.pptx",
      linkLabel: "발표 자료 보기",
      external: false
    },
    {
      title: "Dacon Boost Up AI",
      period: "2025.06 - 2025.08",
      summary: "RDKit 특성과 Morgan Fingerprint를 결합해 CYP3A4 저해율을 예측하는 회귀 모델을 만들었고, CatBoost와 Optuna로 763팀 중 13위를 기록했습니다.",
      tags: ["RDKit", "CatBoost", "Optuna", "Regression"],
      image: "",
      link: "",
      linkLabel: "",
      external: false
    },
    {
      title: "Dacon Hecto 차량 분류",
      period: "2025.05 - 2025.06",
      summary: "EfficientNet 기반 분류기와 distillation, class imbalance 대응, AMP 최적화를 적용해 748팀 중 88위를 기록한 컴퓨터 비전 프로젝트입니다.",
      tags: ["Computer Vision", "Distillation", "ConvNeXt", "AMP"],
      image: "images/car_class.png",
      link: "https://github.com/Sungi-Hwang/Carclassification#readme",
      linkLabel: "GitHub",
      external: true
    },
    {
      title: "Kaggle March Madness 2025",
      period: "2025.02 - 2025.04",
      summary: "favorite-first probability modeling, spline calibration, clipping을 적용해 1,727팀 중 393위를 기록한 스포츠 예측 프로젝트입니다.",
      tags: ["Sports Analytics", "Calibration", "GLM", "Ranking"],
      image: "images/basketball.png",
      link: "https://github.com/Sungi-Hwang/kaggle-march-madness-2025#readme",
      linkLabel: "GitHub",
      external: true
    }
  ],
  papers: [
    {
      title: "Dynamic polarization response of polarization-maintaining fibers by periodic thermal cycling method",
      journal: "AIP Publishing",
      summary: "광섬유 편광 유지 특성을 주기적 열 사이클 환경에서 분석한 연구입니다.",
      link: "https://doi.org/10.1063/5.0096096"
    },
    {
      title: "Characterization of optical phase-locked two distributed-feedback fiber lasers for 87Rb atom interferometry",
      journal: "Current Applied Physics",
      summary: "원자 간섭계용 광원 안정화와 위상 잡음 제어를 다룬 공동 연구입니다.",
      link: "https://doi.org/10.1016/j.cap.2023.04.019"
    },
    {
      title: "Theoretical and Experimental Study of Optimization of Polarization Spectroscopy for the D1 Closed Transition Line of 87Rb Atoms",
      journal: "Applied Sciences",
      summary: "편광 분광 조건 최적화를 이론과 실험으로 함께 검증한 연구입니다.",
      link: "https://doi.org/10.3390/app11167219"
    }
  ],
  contact: {
    blurb:
      "공개 포트폴리오, 대표 프로젝트, 장기 한수 사이드 프로젝트, 정책 URL을 한 구조로 정리해두었습니다. 협업, 제품 개발, AI 시스템 설계 관련 이야기는 이메일이나 GitHub를 통해 편하게 연락 주세요.",
    links: [
      {
        label: "Email",
        value: "kisdice@gmail.com",
        href: "mailto:kisdice@gmail.com"
      },
      {
        label: "GitHub",
        value: "github.com/Sungi-Hwang",
        href: "https://github.com/Sungi-Hwang"
      },
      {
        label: "Privacy",
        value: "장기 한수 개인정보처리방침",
        href: "privacy.html"
      },
      {
        label: "App-ads",
        value: "루트 app-ads.txt 템플릿",
        href: "app-ads.txt"
      }
    ]
  }
};
