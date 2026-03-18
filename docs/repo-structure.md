# Repo Structure

이 문서는 **빈 폴더에서 시작할 때** 추천하는 구조다.

```text
card-trading/
  AGENT.md
  README.md
  docs/
    design-reference.md
    design-tokens.md
    figma-setup.md
    home-wireframe.md
    catalog-taxonomy.md
    repo-structure.md
  skills/
    card-trading-home/
      SKILL.md
  public/
    images/
      cards/
      icons/
      illustrations/
  src/
    app/
      (marketing)/
        layout.tsx
        page.tsx
      globals.css
    components/
      home/
        hero/
        quick-actions/
        search/
        trust/
        discovery/
        market/
        beginner/
        deep-search/
      shared/
        badge/
        button/
        card/
        chip/
        section/
        shell/
    features/
      auth/
      catalog/
      search/
    lib/
      constants/
      mocks/
      utils/
    styles/
      tokens.css
  tests/
    e2e/
    unit/
```

## 폴더 역할

### `app/`
라우팅과 페이지 진입점.
홈 화면은 여기서 시작한다.

### `components/home/`
홈 전용 섹션 컴포넌트.
다른 페이지에서 재사용 가능성이 낮은 것.

### `components/shared/`
버튼, 배지, 칩, 카드 셸 등 공통 컴포넌트.

### `features/catalog/`
카드 카탈로그, 카드 마스터 데이터, 분류 관련 로직.

### `features/search/`
검색창, 자동완성, 최근 검색어, 필터 URL 동기화.

### `features/auth/`
로그인/마이페이지 헤더 상태 제어.

### `lib/mocks/`
초기 홈에 필요한 mock 데이터.
API 붙이기 전까지 여기서 공급한다.

### `styles/`
글로벌 토큰 및 디자인 기반 규칙.
색상/타이포/간격을 하드코딩하지 않는다.

## 파일 생성 순서

1. `src/styles/tokens.css`
2. `src/app/globals.css`
3. `src/components/shared/*`
4. `src/components/home/*`
5. `src/app/(marketing)/page.tsx`

## 홈 페이지 핵심 컴포넌트 목록

- `TopNavigation`
- `HomeSearchBar`
- `HeroSection`
- `QuickActionsGrid`
- `TrustStrip`
- `GameChips`
- `DiscoverySection`
- `MarketSnapshot`
- `BeginnerJourney`
- `DeepSearchPreview`

## 하지 말아야 할 구조

### 피그마 레이어 이름 기반 구조
```text
Group12/
Rectangle4/
Frame23/
Text11/
```

이 구조는 금지.

### 페이지와 공통 컴포넌트 혼합
```text
pages/HomePage.tsx 안에 Header, SearchBar, Card를 전부 인라인 작성
```

이 구조도 금지.

---

## 권장 네이밍

- 섹션: `HeroSection`
- 묶음: `QuickActionsGrid`
- 공통 박스: `CardPanel`
- 상태 배지: `StatusBadge`
- 게임 선택 칩: `GameChip`
- 가격 테이블 줄: `MarketRow`

---

## 향후 확장 대비

홈 다음에 아래가 붙어도 구조가 안 무너지게 설계한다.

- 구매 리스트 페이지
- 판매 등록 플로우
- 카드 상세
- 위시리스트
- 시세 상세
- 판매자 프로필
