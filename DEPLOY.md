# 배포 가이드 (GitHub → Render)

초보자도 따라할 수 있도록 처음부터 끝까지 순서대로 정리했습니다.

## 1단계. GitHub에 코드 올리기

### 1-1. GitHub에 새 저장소(repository) 만들기

1. [github.com](https://github.com) 로그인 후 우측 상단 `+` → `New repository`
2. Repository name: `seed-magic` (원하는 이름으로 변경 가능)
3. Public 선택 (포트폴리오 제출용이라면 공개 추천)
4. `Add a README file` 체크는 **하지 않습니다** (이미 프로젝트에 README가 있음)
5. `Create repository` 클릭

### 1-2. 로컬 프로젝트를 GitHub에 연결하고 업로드

터미널에서 프로젝트 폴더로 이동한 뒤 아래 명령을 순서대로 실행합니다.
(`YOUR_USERNAME`은 실제 깃허브 아이디로 바꿔주세요)

```bash
cd seed-magic
git init
git add .
git commit -m "Initial commit: 씨앗 하나가 마을을 바꾸는 마법"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/seed-magic.git
git push -u origin main
```

> 만약 `git`이 사용자 정보를 요구하면:
> ```bash
> git config --global user.email "you@example.com"
> git config --global user.name "Your Name"
> ```
> 를 먼저 실행한 뒤 다시 시도하세요.

업로드가 끝나면 GitHub 저장소 페이지를 새로고침해서 파일들이 잘 올라갔는지 확인합니다.

---

## 2단계. Render에 배포하기

### 2-1. Render 가입 및 GitHub 연결

1. [render.com](https://render.com) 접속 후 GitHub 계정으로 가입/로그인
2. 처음 로그인 시 GitHub 저장소 접근 권한을 요청하면 허용합니다 (`seed-magic` 저장소 포함)

### 2-2. 새 Static Site 만들기

1. Render 대시보드에서 `New +` → `Static Site` 선택
2. 방금 만든 `seed-magic` 저장소를 선택 → `Connect`
3. 아래와 같이 설정합니다.

| 항목 | 값 |
|---|---|
| Name | `seed-magic` (원하는 이름) |
| Branch | `main` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

4. `Create Static Site` 클릭

### 2-3. 배포 확인

- 빌드 로그가 자동으로 표시되며, `Build successful` 메시지가 뜨면 완료
- 화면 상단에 `https://seed-magic-xxxx.onrender.com` 형태의 주소가 생성됨
- 이 주소가 실제 배포된 웹사이트 URL입니다

### 2-4. 라우팅 문제 해결 (중요)

이 프로젝트는 React Router를 사용하는 SPA이기 때문에,
`/seeds/agriculture/intro` 같은 경로를 새로고침하거나 직접 주소로 접속하면
**Render가 해당 파일을 못 찾아 404가 뜰 수 있습니다.**

이를 방지하려면 `Redirects/Rewrites` 설정이 필요합니다.

1. Render 대시보드 → 해당 Static Site → `Redirects/Rewrites` 탭
2. `Add Rule` 클릭 후 아래처럼 입력:

| Source | Destination | Action |
|---|---|---|
| `/*` | `/index.html` | `Rewrite` |

3. 저장하면 모든 경로 요청이 `index.html`로 전달되어, React Router가 정상적으로 화면을 그려줍니다.

> 이 저장소에는 `public/_redirects` 파일도 포함되어 있어 Render가 이를 자동으로 인식하는 경우도 있지만,
> 위 대시보드 설정으로 직접 등록하는 것이 가장 확실합니다.

---

## 3단계. 이후 수정사항 반영하기

코드를 수정한 뒤에는 아래 명령으로 GitHub에 다시 올리면,
Render가 자동으로 새 버전을 감지해 재배포합니다.

```bash
git add .
git commit -m "수정 내용 설명"
git push
```

---

## 자주 발생하는 문제

**Q. 빌드가 실패해요.**
A. Render 빌드 로그에서 에러 메시지를 확인하세요. 대부분 `package.json`의
   의존성 버전 문제이거나, Node 버전 문제입니다. Render 환경변수에
   `NODE_VERSION`을 `20`으로 설정해보세요 (Settings → Environment).

**Q. 화면은 나오는데 특정 경로에서 새로고침하면 빈 화면이 나와요.**
A. 위 "2-4. 라우팅 문제 해결"을 적용했는지 확인하세요.

**Q. 모바일에서 폰트가 이상하게 보여요.**
A. Pretendard 폰트는 CDN에서 불러오므로, 첫 로딩 시 네트워크 상태에 따라
   잠깐 기본 폰트로 보일 수 있습니다. 정상 동작입니다.
