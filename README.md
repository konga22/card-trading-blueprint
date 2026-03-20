# Card Trading Blueprint

카드 거래 서비스의 공개 화면 구조, 탐색 흐름, 검색 모델, 컴포넌트 분리를 정리해 둔 Next.js 기반 블루프린트 저장소다.

## 먼저 읽을 문서

1. [AGENT.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/AGENT.md)
2. [docs/repo-structure.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/repo-structure.md)
3. [docs/catalog-taxonomy.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/catalog-taxonomy.md)
4. [docs/home-wireframe.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/home-wireframe.md)

디자인 기준이 필요하면 아래 문서를 별도로 본다.
- [docs/design-reference.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/design-reference.md)
- [docs/design-tokens.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/design-tokens.md)
- [design-system/card-trading-blueprint/MASTER.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/design-system/card-trading-blueprint/MASTER.md)

## 저장소 구조

- `src/app/(marketing)/`: 공개 라우트 엔트리
- `src/components/home/`: 홈과 마케팅 라우트 전용 UI
- `src/components/shared/`: 공용 UI 프리미티브
- `src/features/`: 검색, 카탈로그, 계정 보조 로직
- `src/lib/`: 타입, 상수, 목데이터, 유틸
- `src/styles/`: 전역 스타일과 토큰
- `docs/`: 제품, 구조, 디자인 문서
- `tests/`: 단위 테스트와 E2E 테스트

## 자주 쓰는 스크립트

- `npm run lint`
- `npm test`
- `npm run build`
- `npm run test:e2e`

## 문서 운영 원칙

- 제품 문서는 제품 책임과 흐름만 다룬다.
- 디자인 문서는 `docs/`와 `design-system/` 아래에서만 관리한다.
- 폴더별 README는 해당 디렉터리의 책임과 파일 배치 규칙만 설명한다.
