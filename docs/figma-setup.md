# Figma Setup

## 목적

이 문서는 디자인 파일을 코드와 쉽게 연결하기 위한 운영 규칙을 정리한다. 시각 방향 자체는 `design-reference`와 `design-tokens`를 따른다.

## 파일 구조

권장 페이지:

- `00_Foundations`
- `01_Components`
- `02_Home`
- `03_Discover`
- `04_Search`
- `05_Supporting Routes`

## 프레임과 그리드

- 모바일 기준 프레임: `375px`
- 태블릿/데스크톱 확장은 별도 프레임으로 관리
- 기본 간격 단위: `8px`
- 데스크톱은 12열 그리드 사용 가능

## 스타일 세트

### Color Styles

- `bg/default`
- `surface/default`
- `surface/subtle`
- `border/default`
- `text/primary`
- `text/secondary`
- `text/tertiary`
- `brand/primary`
- `brand/secondary`
- `state/positive`
- `state/attention`
- `state/danger`

### Text Styles

- `display`
- `heading-1`
- `heading-2`
- `body-lg`
- `body-sm`
- `meta`

### Effects

- `shadow/soft`
- `shadow/card`
- `shadow/hover`

## 컴포넌트 우선순위

먼저 만드는 컴포넌트:

1. Top navigation
2. Search field
3. Primary button
4. Secondary button
5. Filter chip
6. Status badge
7. Card panel
8. Listing card
9. Market row
10. Section shell

## 네이밍 규칙

- 페이지: `Home`, `Discover`, `Market`, `SearchHub`
- 섹션: `Home/Hero`, `Home/QuickActions`, `Home/TrustStrip`
- 공용 컴포넌트: `Shared/Button/Primary`
- 상태 variant는 `Component/Variant/State` 순서로 둔다.

## 핸드오프 규칙

- 텍스트는 실제 서비스 카피에 가까운 짧은 문장으로 작성한다.
- 간격과 반경은 숫자 토큰으로 남긴다.
- 컴포넌트 내부 패딩과 섹션 간 간격을 구분해서 기록한다.
- 구현자가 추측해야 하는 애매한 상태 이름은 피한다.

## 확인 체크리스트

- 컴포넌트가 재사용 가능한 단위로 나뉘어 있는가
- 상태 변화가 variant로 정리되어 있는가
- 모바일 기준 화면이 먼저 정리되어 있는가
- 디자인 파일 이름과 코드 컴포넌트 이름이 지나치게 다르지 않은가
