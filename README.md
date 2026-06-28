# 🌱 씨앗 하나가 마을을 바꾸는 마법

> KOICA WeKO 8기 서포터즈 지원 포트폴리오 콘텐츠

당신의 전공·관심사를 닮은 씨앗을 찾고, 그 씨앗을 심어 마을이 변화하는 과정을
선택형 스토리로 경험하는 인터랙티브 웹입니다.
이야기의 끝에는 실제 KOICA ODA 사업과의 연결, 그리고 하나의 메시지가 기다립니다.

> "ODA는 국제학과만의 것이 아닙니다.
> 당신의 전공과 관심사가 누군가의 마을을 바꾸는 씨앗이 될 수 있습니다."

## 기획 의도

농업경제학을 전공하면서 "농업국제개발협력과 ODA" 수업을 듣기 전까지,
저 역시 ODA를 국제학·정치외교학 전공자들의 영역으로만 생각했습니다.
하지만 실제로는 농업, 보건, 환경, 기술, 교육 등 훨씬 다양한 분야가
ODA와 연결되어 있습니다. 이 프로젝트는 사람들이 "내 전공도 개발협력과
연결될 수 있구나"를 5분 안에 직접 체험하도록 만든 콘텐츠입니다.

## 사용자 플로우

```
인트로 → 관심사 질문 → 씨앗 매칭(+전공 태그 공개)
       → 씨앗 소개 → 선택형 스토리 3단계
       → 실제 KOICA ODA 사례 연결 → 결과 카드(공유 가능)
```

5개 씨앗: 🌱 농업 · ❤️ 보건 · 🌍 환경 · 💻 기술 · 📚 교육

## 기술 스택

- React 19 + Vite
- React Router (화면 전환)
- Framer Motion (모션/트랜지션)
- 순수 CSS (디자인 토큰 기반, 외부 UI 라이브러리 없음)

## 로컬 실행

```bash
npm install
npm run dev       # http://localhost:5173
```

## 빌드

```bash
npm run build     # dist/ 폴더에 정적 파일 생성
npm run preview    # 빌드 결과 미리보기
```

## 프로젝트 구조

```
src/
├── data/
│   ├── seeds.js       # 5개 씨앗 정의 (전공 태그, 컬러 테마, 공통 핵심 메시지)
│   ├── stories.js     # 씨앗별 3단계 분기 스토리 (선택 경로별 결과 문구)
│   └── odaCases.js     # KOICA 실제 ODA 사례 (⚠️ 현재 placeholder, 실 자료로 교체 필요)
├── context/
│   └── JourneyContext.jsx  # 사용자의 선택 경로를 추적하는 전역 상태
├── components/
│   ├── StoryCard.jsx        # 선택지 카드
│   └── ProgressSprout.jsx   # 씨앗→나무 성장 진행 표시
└── pages/
    ├── IntroScreen.jsx
    ├── InterestScreen.jsx
    ├── SeedRevealScreen.jsx
    ├── SeedIntroScreen.jsx
    ├── StoryScreen.jsx
    ├── ODACaseScreen.jsx
    ├── ResultScreen.jsx
    └── AboutScreen.jsx
```

## ⚠️ 배포 전 확인할 것

`src/data/odaCases.js`에는 농업·보건·환경·기술·교육 5개 분야의 실제 KOICA ODA 사례가
채워져 있습니다. 각 사례는 검색을 통해 확인 가능한 출처를 `sourceUrl`로 연결해두었으니,
배포 전에 출처 링크를 한 번씩 직접 클릭해서 확인해보는 것을 권장합니다.

다만 `environment`(환경) 항목은 사업 자체(KOICA 내부 사후평가보고서, 2018)의
실존은 확인됐지만, 보고서로의 직접 공개 링크가 없어 이를 인용한 학술논문 페이지를
출처로 연결해두었습니다. 더 정확한 1차 출처(KOICA ODA 도서관 등)를 찾으면 교체해주세요.

## 배포 (Render)

[배포 가이드](./DEPLOY.md) 참고.

## 라이선스 / 출처

- 콘텐츠 내 ODA 사례는 KOICA 공개 자료를 기반으로 작성되어야 하며, 출처를 명시합니다.
- 본 프로젝트는 KOICA WeKO 8기 서포터즈 지원용으로 제작되었습니다.
