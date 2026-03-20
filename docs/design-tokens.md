# Design Tokens

## 문서 목적

이 문서는 카드 거래 홈과 보조 라우트가 같은 시각 기준으로 움직이도록 토큰을 고정한다.  
이번 토큰은 KREAM처럼 `흰 배경`, `블랙 CTA`, `경계선보다 면 차이`, `정돈된 위계`를 기본으로 한다.

## Color

### Base

- `bg.canvas`: `#ffffff`
- `bg.surface`: `#ffffff`
- `bg.subtle`: `#f5f5f5`
- `bg.muted`: `#efefef`
- `border.default`: `transparent`
- `border.strong`: `transparent`

### Text

- `text.primary`: `#111111`
- `text.secondary`: `#666666`
- `text.tertiary`: `#8c8c8c`
- `text.inverse`: `#ffffff`

### Action

- `action.primary`: `#111111`
- `action.primary-hover`: `#262626`
- `action.secondary`: `#f3f3f3`
- `action.secondary-hover`: `#eaeaea`

### Trust

- `trust.blue`: `#2563eb`
- `trust.blue-soft`: `#eaf2ff`
- `trust.green`: `#0f9d58`
- `trust.green-soft`: `#eaf8f0`

## 색상 규칙

- 배경은 완전한 흰색
- 주요 구분은 선이 아니라 여백과 밝은 회색 면 차이
- 메인 CTA와 활성 상태는 검정
- 신뢰 정보만 파랑/초록을 제한적으로 사용

## Typography

- UI 기본: `Noto Sans KR`
- 숫자/가격/시세: `Space Grotesk`

## Radius

- `radius.sm`: `10px`
- `radius.md`: `14px`
- `radius.lg`: `18px`
- `radius.xl`: `20px`

규칙:
- 모서리는 절제
- 과하게 둥근 AI 랜딩 느낌 금지

## Component Rules

- Search Dock: 흰 배경 위에 회색 필드 하나가 중심
- Hero Spotlight: 대표 카드 1장과 가격/신뢰 정보
- Listing Card: 선보다 배경 면 차이로 그룹을 만든다
- Market Table: 차트보다 행 기반 요약

## Anti-Patterns

- 보라색 중심 팔레트
- 유리판 효과
- 강조선과 경계선을 남발하는 구성
- 카드보다 배경 장식이 강한 화면
