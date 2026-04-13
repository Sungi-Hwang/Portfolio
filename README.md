# Portfolio

정적 포트폴리오 사이트이자 개발자 웹사이트, 장기 한수 앱 랜딩, 케이스 스터디, 정책 URL을 함께 담는 저장소입니다.

## 구조

- `index.html`: 메인 랜딩 페이지
- `privacy.html`: 장기 한수 개인정보처리방침 페이지
- `app-ads.txt`: 운영 광고 전환 전 교체할 루트 템플릿
- `robots.txt`: 기본 크롤링 허용 설정
- `styles/main.css`: 공통 스타일
- `js/site-data.js`: 사이트 콘텐츠 데이터
- `js/site.js`: 데이터 렌더링 스크립트

## 로컬 확인

```bash
python -m http.server 4173
```

브라우저에서 `http://127.0.0.1:4173/` 로 확인할 수 있습니다.

## app-ads.txt 주의

Google AdMob은 개발자 웹사이트 URL의 **도메인 루트**에서 `app-ads.txt`를 확인합니다.  
현재처럼 GitHub Pages 프로젝트 경로(`https://sungi-hwang.github.io/Portfolio/`)만 사용하는 경우에는
`/Portfolio/app-ads.txt`가 아니라 도메인 루트(`https://sungi-hwang.github.io/app-ads.txt`)를 찾기 때문에,
실제 검증을 위해서는 커스텀 도메인 또는 루트 Pages 배포가 필요합니다.
