# 박준용 프로필 웹사이트

모션 시스템 엔지니어 / R&D 총괄 박준용의 개인 프로필 웹사이트입니다.

## 소개

25년 경력의 모션 시스템 전문가로서의 경험과 기술을 소개하는 단일 페이지 애플리케이션입니다.

## 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 커스텀 스타일링 및 애니메이션
- **JavaScript (ES6+)** - 인터랙티브 기능
- **Tailwind CSS** - 유틸리티 기반 스타일링 (CDN)
- **Font Awesome** - 아이콘
- **Google Fonts (Inter)** - 타이포그래피

## 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완벽 지원
- Mobile-first 접근 방식

### 2. 인터랙티브 네비게이션
- 고정 헤더 (스크롤 시 배경 변화)
- 스무스 스크롤
- 현재 섹션 하이라이트
- 모바일 햄버거 메뉴

### 3. 애니메이션
- Intersection Observer 기반 스크롤 애니메이션
- 페이드 인 효과
- 프로그레스 바 애니메이션
- 카운터 애니메이션 (25년 경력)
- 프로젝트 카드 stagger 효과

### 4. 섹션 구성
- **Hero**: 인상적인 첫 화면
- **About**: 프로필 및 핵심 가치
- **Experience**: 타임라인 형태의 경력 사항
- **Skills**: C++, React, ROS 기술 스택
- **Projects**: 3개의 대표 프로젝트 카드
- **Contact**: 연락처 정보

## 프로젝트 구조

```
my-profile-site/
├── index.html              # 메인 HTML 파일
├── css/
│   └── custom.css         # 커스텀 스타일 (보라색 테마)
├── js/
│   ├── main.js            # 네비게이션 및 메인 기능
│   ├── animations.js      # 스크롤 애니메이션
│   └── projects.js        # 프로젝트 데이터 및 렌더링
├── assets/
│   └── images/
│       ├── profile.jpg    # 프로필 사진 (placeholder)
│       └── projects/      # 프로젝트 이미지
└── README.md              # 이 파일
```

## 로컬 실행 방법

1. 저장소 클론 또는 다운로드
```bash
cd my-profile-site
```

2. 브라우저로 `index.html` 열기
   - 로컬 서버 사용 권장:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server
   ```

3. 브라우저에서 접속
   - http://localhost:8000

## 커스터마이징

### 색상 테마 변경
`css/custom.css` 파일의 CSS 변수 수정:
```css
:root {
    --primary-bg: #1A0B2E;      /* 배경색 */
    --card-bg: #2D1B4E;         /* 카드 배경 */
    --accent-primary: #8B5CF6;  /* 주요 강조색 */
    --accent-secondary: #A78BFA; /* 보조 강조색 */
}
```

### 프로젝트 데이터 수정
`js/projects.js` 파일의 `projects` 배열 수정:
```javascript
const projects = [
    {
        id: 1,
        title: "프로젝트 제목",
        description: "프로젝트 설명",
        image: "이미지 경로",
        tags: ["태그1", "태그2"],
        link: "프로젝트 링크"
    }
];
```

### 개인 정보 수정
`index.html` 파일에서 다음 정보 수정:
- 이름
- 직책
- 경력 연수
- 소개 내용
- 연락처

## 성능 최적화

- Lazy loading 이미지
- Throttled 스크롤 이벤트
- CSS 애니메이션 (GPU 가속)
- CDN 사용 (Tailwind CSS, Font Awesome)
- Intersection Observer (효율적인 애니메이션 트리거)

## 접근성

- 시맨틱 HTML 태그
- ARIA 속성
- 키보드 네비게이션 지원
- Focus 스타일
- Alt 텍스트

## 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

개인 프로젝트로 자유롭게 사용 가능합니다.

## 연락처

- Email: jypark@movensys.com

---

**박준용** | Motion System Engineer | R&D Director
