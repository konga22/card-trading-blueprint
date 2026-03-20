# Design Tokens

## 문서 목적

이 문서는 카드 거래 홈과 보조 라우트가 같은 시각 기준으로 움직이도록 토큰을 고정한다.  
이번 토큰은 KREAM의 차분함, 번개장터의 거래형 정보 밀도, 당근의 따뜻한 진입감을 섞되 보라색 AI 마켓플레이스 톤은 버린다.

## Color

### Base

- `bg.canvas`: `#f6f1e8`
- `bg.surface`: `#ffffff`
- `bg.subtle`: `#f2ece1`
- `bg.emphasis`: `#111111`
- `border.default`: `#ded7ca`
- `border.strong`: `#c9c1b3`

### Text

- `text.primary`: `#111111`
- `text.secondary`: `#5a5f66`
- `text.tertiary`: `#8a8f96`
- `text.inverse`: `#ffffff`

### Action

- `action.primary`: `#111111`
- `action.primary-hover`: `#262626`
- `action.secondary`: `#f7f3ec`
- `action.secondary-hover`: `#efe8dc`

### Accent

- `accent.warm`: `#ff6a00`
- `accent.warm-soft`: `#fff1e6`
- `accent.trust`: `#2563eb`
- `accent.trust-soft`: `#eaf2ff`
- `accent.safe`: `#0f9d58`
- `accent.safe-soft`: `#eaf8f0`

## 색상 규칙

- 메인 CTA는 검정 계열로 고정한다.
- 강조는 오렌지 하나, 신뢰는 블루 하나로 끝낸다.
- 카드 이미지는 색이 강하므로 배경은 저채도여야 한다.
- 신뢰 정보는 파랑/초록 계열, 거래 주의는 오렌지 계열을 쓴다.

## Typography

### Font Families

- UI 기본: `Noto Sans KR`
- 숫자/가격/시세: `Space Grotesk`

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| `display` | 52 | 56 | 800 | 홈 메인 타이틀 |
| `hero-subtitle` | 18 | 28 | 500 | 히어로 설명 |
| `headline-1` | 30 | 36 | 800 | 섹션 타이틀 |
| `headline-2` | 22 | 30 | 700 | 카드/모듈 타이틀 |
| `title` | 18 | 26 | 700 | 상품명 |
| `body` | 15 | 24 | 400 | 기본 본문 |
| `body-sm` | 13 | 20 | 400 | 보조 설명 |
| `meta` | 12 | 18 | 700 | 배지, 라벨, 카테고리 |

## Spacing

- `4`
- `8`
- `12`
- `16`
- `20`
- `24`
- `32`
- `40`
- `56`
- `72`

규칙:
- 8px 그리드를 기본으로 쓴다.
- 홈 상단은 24, 32, 40 단위를 중심으로 리듬을 만든다.
- 카드 내부는 12, 16, 20 단위를 우선 사용한다.

## Radius

- `radius.sm`: `10px`
- `radius.md`: `14px`
- `radius.lg`: `18px`
- `radius.xl`: `22px`
- `radius.pill`: `999px`

규칙:
- 이전보다 모서리를 덜 둥글게 가져간다.
- 서비스형 정보 카드에는 `14px`~`18px`만 쓴다.
- 히어로/대형 패널만 `22px`를 허용한다.

## Shadow

```css
--shadow-card: 0 6px 18px rgba(17, 17, 17, 0.06);
--shadow-hover: 0 12px 28px rgba(17, 17, 17, 0.10);
--shadow-soft: 0 1px 2px rgba(17, 17, 17, 0.04);
```

규칙:
- 그림자는 존재감만 주고, 존재 이유가 되면 안 된다.
- 평면에 가까운 카드 위에 얕은 그림자만 사용한다.

## Component Rules

### Search Dock

- 높이: `60px`
- 입력창 배경은 밝은 종이톤
- 검색 버튼은 검정 단색
- 추천 검색과 게임 카테고리를 같은 패널 안에서 바로 읽게 배치

### Hero

- 왼쪽: 큰 카피, 짧은 설명, CTA, 핵심 기준 3개
- 오른쪽: 대표 카드 1장 + 가격/신뢰 정보
- 카드 3장을 동일한 크기로 늘어놓는 방식 금지

### Listing Card

- 상단은 이미지 또는 정보형 플레이스홀더
- 하단은 카드명, 세트, 가격, 최근 거래, 신뢰 배지 순서
- “사진이 없을 때”는 깨진 느낌이 아니라 텍스트 블록으로 의도적으로 처리

### Market Table

- 차트보다 행(row) 기반 시세 테이블이 우선
- 컬럼은 `카드명 / 거래건수 / 현재가격 / 변동률`
- 숫자는 `Space Grotesk` 고정

## Motion

- `120ms` ~ `180ms`
- hover는 색, 테두리, 그림자만 변한다
- 확대/축소 모션은 최소화한다

## Anti-Patterns

- 보라색 중심 마켓플레이스 팔레트
- 과한 글래스모피즘
- 장난감 같은 컬러 블록 레이아웃
- 카드보다 배경이 더 튀는 구성
- 둥근 모서리만 잔뜩 키운 “AI 랜딩” 분위기
