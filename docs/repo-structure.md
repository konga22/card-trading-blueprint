# Repo Structure

## 목적

이 문서는 이 저장소에서 파일을 어디에 두고 어떤 책임으로 나눌지 정리한다. 기준은 “라우트는 얇게, 화면 조합은 컴포넌트로, 도메인 로직은 기능 폴더로”다.

## 권장 트리

```text
card-trading-blueprint/
  AGENT.md
  README.md
  docs/
  design-system/
  public/
  src/
    app/
      (marketing)/
    components/
      home/
      shared/
    features/
      auth/
      catalog/
      search/
    lib/
      constants/
      mocks/
      utils/
    styles/
  tests/
    e2e/
    unit/
```

## 폴더 책임

### `src/app/`

라우트 엔트리와 레이아웃을 둔다. 라우트 파일은 최대한 얇게 유지하고 실제 화면 조합은 컴포넌트로 위임한다.

### `src/components/home/`

홈, 탐색, 시세, 검색 허브, 입문, 판매 준비처럼 마케팅 라우트 전용 UI를 둔다. 다른 도메인에서 재사용할 계획이 없는 컴포넌트는 여기 둔다.

### `src/components/shared/`

버튼, 배지, 칩, 카드, 섹션 헤더, 쉘처럼 여러 라우트에서 재사용 가능한 UI를 둔다. 비즈니스 로직은 넣지 않는다.

### `src/features/catalog/`

카드 분류 체계, 정렬, 사용자 노출 필터, 카탈로그 해석 규칙을 둔다.

### `src/features/search/`

검색 제안, 검색어 정규화, URL 상태 해석, 추천 검색어 규칙을 둔다.

### `src/features/auth/`

로그인과 계정 보조 상태처럼 계정 관련 흐름을 둔다. 현재는 보조 라우트 수준의 구조만 가진다.

### `src/lib/`

공용 타입, 상수, 목데이터, 유틸을 둔다. 프레임워크 의존이 없는 값과 함수는 가능하면 여기 둔다.

### `src/styles/`

토큰과 전역 스타일 엔트리를 둔다. 실제 시각 규칙의 근거 문서는 `docs/`와 `design-system/`에 둔다.

### `tests/unit/`

순수 함수, 분류 규칙, 검색 헬퍼, 가벼운 컴포넌트 동작을 검증한다.

### `tests/e2e/`

사용자 흐름 단위의 라우트 동작을 검증한다.

## 파일 배치 규칙

- 새 공용 UI는 `src/components/shared/` 아래에 둔다.
- 홈 전용 섹션은 `src/components/home/` 아래에 둔다.
- 라우트에서만 쓰는 조합 로직은 페이지 컴포넌트 파일에 두고, 반복되는 UI는 분리한다.
- 도메인 상수와 키 문자열은 가능한 한 `src/lib/constants/` 또는 `src/features/*`에서 한 번만 정의한다.
- 백엔드가 없을 때는 `src/lib/mocks/`를 단일 진입점으로 삼는다.

## 피해야 할 구조

- 하나의 페이지 파일 안에 전체 UI와 데이터 규칙을 모두 넣는 구조
- 공용 컴포넌트와 특정 라우트 전용 컴포넌트를 한 폴더에 섞는 구조
- 사용하지 않는 프로토타입 페이지를 배럴 export로 계속 노출하는 구조
- 같은 책임을 가진 라우트 조합 파일을 두 개 이상 유지하는 구조
