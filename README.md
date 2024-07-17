# Cat Gallery App (Next.js 14 + TypeScript + Zustand + Tailwind CSS)

이 프로젝트는 다양한 고양이 이미지를 무한 스크롤로 보여주는 Cat Gallery 웹 애플리케이션입니다. Next.js 14, TypeScript, Zustand, Tailwind CSS를 사용하여 개발되었습니다.

- [DEMO](https://main.de4cbd1a6bijp.amplifyapp.com/)

![DEMO PAGE](./public/sample1.png)

## 주요 기능

- 무한 스크롤: 스크롤을 내리면 자동으로 추가 페이지의 고양이 이미지를 불러옵니다.
- 즐겨찾기 기능: 마음에 드는 고양이를 즐겨찾기에 추가하고 해제할 수 있습니다.
- 다크 모드: 다크 모드를 지원하여 사용자에게 보다 나은 경험을 제공합니다.

## 설치 및 실행 방법

1. 저장소를 클론합니다.

```bash
git clone https://github.com/fromnowwon/next-ts-cat-gallery-app
```

2. 프로젝트 폴더로 이동합니다.

```bash
cd nex-ts-cat-gallery-app
```

3. 필요한 패키지를 설치합니다.

```bash
npm install
```

4. 개발 서버를 실행합니다.

```bash
npm run dev
```

5. 웹 브라우저에서 `http://localhost:3000`을 엽니다.

## 사용 기술

- **프론트엔드:** Next.js, TypeScript
- **상태관리**: Zustand
- **UI 프레임워크**: Tailwind CSS
- **배포:** AWS Amplify

## 사용된 API

- The Cat API: 고양이 이미지를 가져오는 데 사용됩니다.

## 폴더 및 파일 구조

```plaintext
├── public/
├── app/
│   │   ├── favorites/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   ├── components/
│   ├── lib/
│   │   ├── api.ts
│   ├── store/
│   ├── types/
├── package.json
├── README.md
└── ...
```

- **app/**: 페이지, 레이아웃 관리
  - **favorites/**: 즐겨찾기 페이지
- **components/**: 컴포넌트 파일들
- **lib/**: API 호출 및 유틸리티 함수들이 모여 있는 디렉토리
  - **api.ts/**: 외부 API와의 통신을 위한 함수들이 정의된 파일
- **store/**: Zustand 상태 관리
- **types/**: TypeScript 타입 정의

## 저자

- [Chaewon Jeong](https://github.com/fromnowwon)

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

```

위 README.md 예시는 프로젝트의 구조, 설치 및 실행 방법, 주요 기능, 기여 방법, 저자 정보, 라이센스 등을 포함하고 있습니다. 프로젝트의 특성에 맞게 세부적으로 수정하여 사용하시면 됩니다.
```
