# Design Tokens

## 문서 목적

이 문서는 구현과 디자인 문서가 같은 기준을 보도록 토큰을 정리한다. 값은 `ui-ux-pro-max` 데이터에서 선택한 서비스 랜딩, 마켓플레이스, 신뢰형 스타일 조합을 바탕으로 정리했다.

## 색상

### Core

- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Surface subtle: `#EFF6FF`
- Border: `#E2E8F0`

### Text

- Text primary: `#020617`
- Text secondary: `#334155`
- Text tertiary: `#64748B`

### Brand

- Brand primary: `#1E40AF`
- Brand secondary: `#3B82F6`
- Brand soft: `#DBEAFE`

### Semantic

- Positive: `#059669`
- Attention: `#F97316`
- Danger: `#DC2626`

## 타이포그래피

### 폰트 방향

- Primary UI font: `IBM Plex Sans`
- Korean fallback: `Noto Sans KR`
- System fallback: `system-ui`, `sans-serif`

권장 구현:

```css
font-family:
  "IBM Plex Sans",
  "Noto Sans KR",
  system-ui,
  sans-serif;
```

### 크기 스케일

| Token | Size | Line Height | Usage |
|---|---:|---:|---|
| `display` | 32 | 40 | 메인 히어로 제목 |
| `heading-1` | 24 | 32 | 섹션 대표 제목 |
| `heading-2` | 20 | 28 | 카드/패널 제목 |
| `body-lg` | 16 | 24 | 본문 기본 |
| `body-sm` | 14 | 20 | 보조 설명 |
| `meta` | 12 | 18 | 칩, 배지, 메타 |

### 굵기

- `700`: 주요 제목, 핵심 수치
- `600`: 섹션 제목, 카드 제목, 버튼
- `500`: 메타와 보조 강조
- `400`: 일반 본문

## 간격

- `4px`
- `8px`
- `12px`
- `16px`
- `20px`
- `24px`
- `32px`
- `40px`
- `48px`

기본 단위는 `8px`로 본다.

## 반경

- Small: `12px`
- Medium: `16px`
- Large: `20px`
- Pill: `999px`

## 그림자

그림자는 약하게만 사용한다.

```css
--shadow-soft: 0 2px 8px rgba(15, 23, 42, 0.05);
--shadow-card: 0 4px 12px rgba(15, 23, 42, 0.08);
--shadow-hover: 0 10px 24px rgba(15, 23, 42, 0.10);
```

## 컴포넌트 토큰

### Buttons

- Height: `44px` to `48px`
- Radius: `14px` to `16px`
- Primary: `brand primary` 배경 + 흰색 텍스트
- Secondary: `surface` 배경 + `text primary`

### Search Field

- Height: `48px` to `52px`
- Radius: `16px`
- Border: `1px solid border`
- Background: `surface`

### Chips

- Height: `32px` to `36px`
- Radius: `pill`
- Default bg: `surface`
- Active bg: `brand soft`
- Active text: `brand primary`

### Cards

- Radius: `16px` to `20px`
- Border: `1px solid border`
- Background: `surface`
- Shadow: `shadow-card` 이하만 사용

## 모션

- Duration: `150ms` to `220ms`
- Timing: `ease-out`
- Hover는 색상, 테두리, 그림자 변화 위주로 제한
- `prefers-reduced-motion` 지원 필수
