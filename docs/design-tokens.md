# Design Tokens

## 1. Fonts

### Figma
- Primary: SF Pro Display / SF Pro Text

### Web implementation
```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Display",
  "SF Pro Text",
  "Pretendard Variable",
  Pretendard,
  "Noto Sans KR",
  "Segoe UI",
  sans-serif;
```

## 2. Typography

| Token | Font Size | Line Height | Usage |
|---|---:|---:|---|
| T1 | 30 | 40 | Hero title |
| T2 | 26 | 35 | Section main title |
| T3 | 22 | 31 | Content title |
| T4 | 20 | 29 | Small title |
| T5 | 17 | 25.5 | Main body |
| T6 | 15 | 22.5 | Sub body |
| T7 | 13 | 19.5 | Caption |
| ST9 | 18 | 27 | Strong body |
| ST10 | 16 | 24 | Card description |
| ST11 | 14 | 21 | Secondary text |
| ST12 | 12 | 18 | Chip / meta |
| ST13 | 11 | 16.5 | Tiny meta |

### Weight guidance
- 700: hero, major CTA emphasis
- 600: section title, card title
- 500: body, chip label
- 400: rarely; avoid weak visual rhythm

## 3. Colors

### Core neutrals
- Background: `#f9fafb`
- Surface: `#ffffff`
- Surface subtle: `#f2f4f6`
- Border: `#e5e8eb`

### Text
- Primary: `#191f28`
- Secondary: `#4e5968`
- Tertiary: `#6b7684`

### Brand
- Brand: `#3182f6`
- Brand strong: `#1b64da`
- Brand soft bg: `#e8f3ff`

### Semantic
- Positive: `#03b26c`
- Warning / hot: `#f04452`
- Caution bg: `#ffeeee`

## 4. Radius

- Small: `12px`
- Medium: `16px`
- Large: `20px`
- Pill: `999px`

## 5. Space scale

- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48

## 6. Shadows

```css
--shadow-card: 0 6px 18px rgba(2, 32, 71, 0.06);
--shadow-soft: 0 2px 8px rgba(2, 32, 71, 0.05);
```

Use shadows sparingly.
If a section already has border + contrast separation, remove shadow.

## 7. Component style rules

### Buttons
- Height: 44~48px
- Radius: 14~16px
- Primary: brand fill + white text
- Secondary: subtle surface + primary text
- Ghost: transparent + secondary text

### Search field
- Height: 48~52px
- Radius: 16px
- Background: surface
- Border: subtle border or none + soft shadow

### Chips
- Height: 32~36px
- Radius: pill
- Default bg: surface subtle
- Active bg: brand soft bg
- Active text: brand strong

### Cards
- Background: surface
- Radius: 16~20px
- Border: 1px subtle or none
- Shadow: low only

## 8. Motion

- Transition duration: 160~220ms
- Ease: standard ease-out
- Avoid springy or playful motion on primary finance-like surfaces
- Hover should feel precise, not bouncy

## References

- TDS Typography: https://tossmini-docs.toss.im/tds-react-native/foundation/typography/
- TDS Colors: https://tossmini-docs.toss.im/tds-react-native/foundation/colors/
- Toss Figma guide: https://developers-apps-in-toss.toss.im/design/prepare/design.html
