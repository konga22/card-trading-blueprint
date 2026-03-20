# Design System Master

이 문서는 `Card Trading Blueprint`의 공통 디자인 기준이다. 페이지별 차이가 있으면 `design-system/card-trading-blueprint/pages/*.md`가 이 문서를 덮어쓴다.

## Source Mix

`ui-ux-pro-max` 로컬 데이터셋에서 아래 조합을 기준으로 선택했다.

- Product fit: `Marketplace (P2P)`, `Service Landing Page`, `B2B Service`
- Style fit: `Swiss Modernism 2.0`, `Accessible & Ethical`, `Trust & Authority`
- Landing fit: `Hero + Features + CTA`, `Funnel (3-Step Conversion)`
- Typography fit: `Financial Trust`, `Korean Modern`

## Brand Personality

- 빠르다
- 분명하다
- 신뢰를 먼저 보여준다
- 거래 판단을 돕는다

## Core Palette

| Role | Value |
|---|---|
| Background | `#F8FAFC` |
| Surface | `#FFFFFF` |
| Surface subtle | `#EFF6FF` |
| Border | `#E2E8F0` |
| Text primary | `#020617` |
| Text secondary | `#334155` |
| Text tertiary | `#64748B` |
| Brand primary | `#1E40AF` |
| Brand secondary | `#3B82F6` |
| Brand soft | `#DBEAFE` |
| Positive | `#059669` |
| Attention | `#F97316` |
| Danger | `#DC2626` |

## Typography

- Primary: `IBM Plex Sans`
- Korean fallback: `Noto Sans KR`
- Weights: `400`, `500`, `600`, `700`

Recommended usage:
- Hero title: `32/40`, `700`
- Section title: `24/32`, `700`
- Card title: `20/28`, `600`
- Body: `16/24`, `400`
- Secondary body: `14/20`, `400`
- Meta: `12/18`, `500`

## Layout System

- Base unit: `8px`
- Radius: `12`, `16`, `20`, `999`
- Mobile-first
- Desktop grid can expand to 12 columns, but content hierarchy matters more than decorative layout

## Interaction Rules

- Motion duration: `150ms` to `220ms`
- Hover: border, background, shadow, or color change only
- No layout-shifting hover
- Visible focus styles required
- `prefers-reduced-motion` support required

## Component Rules

### Buttons

- Height: `44-48px`
- Primary button carries the main action
- Secondary button stays visually quieter than the primary

### Search

- Search is a first-class action, not a footer utility
- Input height: `48-52px`
- Placeholder must describe searchable attributes, not marketing copy

### Chips

- Default: neutral surface
- Active: brand soft background with brand text
- Use chips for narrowing, not for explaining

### Cards

- Card content should balance price and trust signals
- Avoid overly tall cards with large empty decoration
- Show only the numbers that help immediate judgment

## Accessibility Rules

- Minimum interactive target: `44x44`
- High contrast on text and primary actions
- State should not rely on color alone
- Keyboard access and focus visibility required

## Anti-Patterns

- Neon or entertainment-first palettes
- Overbuilt chart surfaces on the first screen
- Trust information hidden until the detail page
- Decorative gradients competing with transaction data
- Giant hero copy that pushes search below the fold
