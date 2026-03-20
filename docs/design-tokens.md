# Design Tokens

## 문서 목적

이 문서는 구현과 디자인이 같은 기준으로 움직이도록 토큰을 고정한다.  
현재 토큰의 목표는 “KREAM처럼 정갈하고, 번개장터처럼 정보가 빠르며, 당근처럼 부담 없고, 포켓몬 자산과도 충돌하지 않는 화면”이다.

## Color

### Base

- `bg.canvas`: `#F5F4F1`
- `bg.surface`: `#FFFFFF`
- `bg.subtle`: `#F0EEE8`
- `border.default`: `#E4E1D8`
- `border.strong`: `#CBC5B7`

### Text

- `text.primary`: `#111111`
- `text.secondary`: `#4B5563`
- `text.tertiary`: `#7A7F87`
- `text.inverse`: `#FFFFFF`

### Action

- `action.primary`: `#111111`
- `action.primary-hover`: `#262626`
- `action.secondary`: `#F3F4F6`
- `action.secondary-hover`: `#E5E7EB`

### Accent

- `accent.warm`: `#FF6F0F`
- `accent.warm-soft`: `#FFF1E7`
- `accent.trust`: `#2563EB`
- `accent.trust-soft`: `#EAF2FF`

### State

- `state.success`: `#0F9D58`
- `state.success-soft`: `#EAF8F0`
- `state.warning`: `#F59E0B`
- `state.warning-soft`: `#FFF7E6`
- `state.danger`: `#D64545`
- `state.danger-soft`: `#FDECEC`

## Color Rules

- 기본 화면은 뉴트럴 톤 위주로 유지한다.
- 메인 CTA는 검정 계열을 기본으로 쓴다.
- `accent.warm`은 입문, 근처 거래, 가벼운 추천, 판매 유도에 사용한다.
- `accent.trust`는 인증, 안전결제, 검수, 보호 장치에 사용한다.
- 포켓몬 이미지는 자체 색이 강하므로, 배경은 채도를 올리지 않는다.

## Typography

### Font Families

- UI 기본: `Pretendard Variable`
- 보조 fallback: `Noto Sans KR`
- 숫자/시세 모듈: `Space Grotesk`

권장 선언:

```css
font-family:
  "Pretendard Variable",
  "Noto Sans KR",
  system-ui,
  sans-serif;
```

가격/시세 행:

```css
font-family:
  "Space Grotesk",
  "Pretendard Variable",
  "Noto Sans KR",
  sans-serif;
font-variant-numeric: tabular-nums;
```

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| `display` | 40 | 46 | 700 | 메인 히어로 제목 |
| `headline-1` | 28 | 34 | 700 | 섹션 대표 제목 |
| `headline-2` | 22 | 30 | 700 | 카드/모듈 제목 |
| `title` | 18 | 26 | 600 | 카드명, 검색 블록 제목 |
| `body` | 16 | 24 | 400 | 기본 본문 |
| `body-sm` | 14 | 20 | 400 | 보조 설명 |
| `meta` | 12 | 18 | 500 | 배지, 상태, 보조 수치 |

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

기본 리듬은 `8px` 단위다.  
모바일에서는 `16`, `20`, `24`를 중심으로 쓰고, 데스크톱에서만 `40` 이상을 넓힌다.

## Radius

- `radius.sm`: `10px`
- `radius.md`: `14px`
- `radius.lg`: `18px`
- `radius.pill`: `999px`

규칙:

- 카드와 패널은 둥글지만 말랑하게 보이면 안 된다.
- 현재 프로젝트에는 `24px` 이상 큰 radius를 쓰지 않는다.

## Shadow

```css
--shadow-rest: 0 1px 2px rgba(17, 17, 17, 0.04);
--shadow-card: 0 6px 18px rgba(17, 17, 17, 0.06);
--shadow-hover: 0 10px 28px rgba(17, 17, 17, 0.10);
```

규칙:

- 그림자는 보조 수단이다.
- 정보 카드의 기본 강조는 border와 간격으로 해결한다.

## Component Tokens

### Search Field

- Height: `52px`
- Radius: `14px`
- Padding X: `16px`
- Background: `bg.surface`
- Border: `1px solid border.default`

규칙:

- 플레이스홀더는 마케팅 문구 대신 검색 가능한 속성을 말해야 한다.
- 예: `카드명, 카드번호, 시리즈, 등급으로 검색`

### Primary Button

- Height: `48px`
- Radius: `14px`
- Background: `action.primary`
- Text: `text.inverse`

### Secondary Button

- Height: `48px`
- Radius: `14px`
- Background: `action.secondary`
- Text: `text.primary`

### Chips

- Height: `34px`
- Padding X: `14px`
- Radius: `pill`
- Default: `bg.surface + border.default`
- Active: `accent.warm-soft + accent.warm`

### Cards

- Image area ratio: `4:5` 또는 `1:1`
- Radius: `14px` 또는 `18px`
- Border: `1px solid border.default`
- Background: `bg.surface`

카드 내부에서 항상 우선되는 정보:

1. 카드명
2. 번호/등급/상태
3. 현재 가격 또는 최근 거래 정보
4. 검수/안전/판매 방식 힌트

## Motion

- Duration: `120ms` to `180ms`
- Timing: `ease-out`
- Hover는 색, border, shadow 변화 중심
- 위아래로 크게 움직이는 애니메이션 금지

## Image Rules

- 포켓몬 도감/캐릭터 이미지는 `pokemonkorea.co.kr`에서만 가져온다.
- 카드 이미지는 `pokemoncard.co.kr`에서만 가져온다.
- 카드 이미지는 프레임 잘라먹기 없이 정면 기준으로 다룬다.
- 배경 합성, 과한 drop-shadow, 비공식 outline 처리 금지

## Anti-Patterns

- 보라색 중심 AI SaaS 팔레트
- 채도 높은 그라데이션 위에 작은 회색 텍스트
- 지나치게 큰 라운드와 쿠션감
- 의미 없이 떠다니는 glass panel
