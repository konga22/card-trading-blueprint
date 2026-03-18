# Figma Setup

## 목표

피그마에서 토스 느낌의 **맑고 짧고 정리된 정보 위계**를 유지하면서,
코드로 바로 옮기기 쉬운 구조를 만든다.

## 1. 파일 기본 세팅

### 프레임 폭
- 기본 mobile frame: `375px`
- 높이는 auto / content-based

### 페이지 권장
- `00_Foundations`
- `01_Components`
- `02_Home`
- `03_Buy`
- `04_Sell`

## 2. 폰트

공식 Toss 가이드에 따라:
- 피그마에서는 `SF Pro`
- Toss Product Sans 설치 시도 금지

## 3. 스타일 만들기

### Color Styles
- bg/default
- bg/subtle
- surface/default
- border/subtle
- text/primary
- text/secondary
- text/tertiary
- brand/default
- brand/soft
- positive/default
- warning/default

### Text Styles
- hero/t1
- section/t2
- title/t3
- body/t5
- body/sub/st10
- meta/st11
- chip/st12
- tiny/st13

## 4. 컴포넌트 우선순위

먼저 아래를 만든다.

1. Navigation
2. SearchBar
3. Button
4. Chip
5. Badge
6. CardPanel
7. MarketCard
8. SectionHeader

## 5. Variant 규칙

### Button
- variant: primary / secondary / ghost
- state: default / hover / pressed / disabled

### Chip
- state: default / active

### Badge
- tone: neutral / brand / positive / warning

### CardPanel
- state: default / hover / skeleton

## 6. 오토레이아웃 규칙

- 상위 프레임은 대부분 vertical auto layout
- 섹션 간 기본 gap: `24`
- 카드 내부 gap: `8` 또는 `12`
- 컴포넌트 padding을 먼저 믿고, gap은 보조로 사용
- 정렬은 시작점 left align 우선

## 7. 홈 화면 섹션 순서

1. Navigation
2. SearchBar
3. Hero
4. QuickActions
5. TrustStrip
6. GameChips
7. Discovery: popular
8. Discovery: beginner
9. Discovery: verified
10. MarketSnapshot
11. BeginnerJourney
12. DeepSearchPreview
13. Footer

## 8. 카드 디자인 규칙

카드 한 장에 넣는 정보는 최대 5개 층으로 제한한다.

1. 대표 정보: 카드명
2. 보조 정보: 세트/번호
3. 가격 정보: 현재가/최근 거래가
4. 신뢰 배지: 검수, 안전결제, 입문추천 등
5. 액션: 상세 보기 또는 구매하기

## 9. 금지사항

- 텍스트 레이어 이름을 그대로 코드 구조로 쓰지 않는다.
- 처음부터 세트/언어/에디션 필터를 캔버스 상단에 모두 띄우지 않는다.
- 홈에서 캐러셀 남용 금지
- 그라디언트/네온/유리질감 금지
- 브랜드 블루 풀배경 큰 면적 남용 금지

## 10. 개발 연결을 위한 레이어 네이밍 예시

```text
HomeScreen
  TopNavigation
  SearchBar
  HeroSection
  QuickActionsGrid
  TrustStrip
  GameChipRow
  DiscoveryPopular
  DiscoveryStarter
  DiscoveryVerified
  MarketSnapshot
  BeginnerJourney
  DeepSearchPreview
  Footer
```

이런 식으로 **화면/섹션/컴포넌트 기준**으로 이름을 짓는다.

## References

- Toss Figma guide: https://developers-apps-in-toss.toss.im/design/prepare/design.html
- TDS Mobile intro: https://tossmini-docs.toss.im/tds-mobile/
