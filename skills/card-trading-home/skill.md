# SKILL.md — Build the Card Trading Home Page

## 목적

이 스킬은 **빈 폴더에서 시작해도** 카드 트레이딩 서비스의 홈 화면을 구현할 수 있게 한다.
대상 화면은 다음 성격을 가져야 한다.

- 첫 화면은 쉽다.
- 거래는 안심된다.
- 탐색은 깊어질 준비가 되어 있다.
- 정보는 많아 보여도 사용자는 복잡하다고 느끼지 않는다.

---

## 언제 이 스킬을 쓰는가

아래 상황이면 이 스킬을 사용한다.

- 레포를 막 시작했고 홈 화면부터 만들고 싶다.
- 피그마와 코드를 동시에 정리해야 한다.
- 토스증권 같은 **짧은 라벨, 맑은 위계, 검색 중심** 감각을 카드 거래 홈에 번역하고 싶다.
- 신규 유입과 숙련자 모두를 잡는 카드 서비스 랜딩/홈 구조가 필요하다.

---

## 이 스킬의 결과물

이 스킬을 완료하면 아래가 생겨야 한다.

1. 홈 페이지 레이아웃
2. 디자인 토큰
3. 공통 컴포넌트 초안
4. 홈 섹션 컴포넌트
5. mock data
6. 모바일 우선 반응형
7. 접근성/빈 상태/스켈레톤 처리

---

## 사전 규칙

1. **처음부터 너무 많은 필터를 노출하지 않는다.**
2. **검색창은 항상 위에 둔다.**
3. **신뢰 정보는 가격 정보 근처에 둔다.**
4. **카드 전체 카탈로그를 홈에 펼치지 않는다.**
5. **첫 화면은 교육 문서가 아니라 행동 런처다.**
6. **토큰 하드코딩을 최소화한다.**
7. **Toss Product Sans를 로컬 자산으로 넣지 않는다.**

---

## 0단계 — 프로젝트 초기화

### 권장 커맨드 예시

```bash
npx create-next-app@latest card-trading
cd card-trading
npm install clsx tailwind-merge lucide-react
```

### 바로 만들 폴더

```text
src/
  app/
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
public/
tests/
docs/
skills/
```

### 첫 파일 우선순위

1. `src/app/globals.css`
2. `src/styles/tokens.css`
3. `src/app/(marketing)/layout.tsx`
4. `src/app/(marketing)/page.tsx`

---

## 1단계 — 디자인 토큰부터 만든다

### 1-1. 색상 토큰

토스 공식 TDS 색상을 기준으로 아래처럼 매핑한다.

```css
:root {
  --bg: #f9fafb;           /* grey50 */
  --surface: #ffffff;
  --surface-subtle: #f2f4f6; /* grey100 */
  --border: #e5e8eb;       /* grey200 */
  --text-primary: #191f28; /* grey900 */
  --text-secondary: #4e5968; /* grey700 */
  --text-tertiary: #6b7684;  /* grey600 */
  --brand: #3182f6;        /* blue500 */
  --brand-strong: #1b64da; /* blue700 */
  --positive: #03b26c;
  --warning: #f66570;
}
```

### 1-2. 타이포 토큰

토스 공식 TDS의 기본 계층을 홈 화면용으로 아래처럼 쓰면 된다.

```css
:root {
  --t1-size: 30px;
  --t1-line: 40px;

  --t2-size: 26px;
  --t2-line: 35px;

  --t3-size: 22px;
  --t3-line: 31px;

  --t4-size: 20px;
  --t4-line: 29px;

  --t5-size: 17px;
  --t5-line: 25.5px;

  --t6-size: 15px;
  --t6-line: 22.5px;

  --t7-size: 13px;
  --t7-line: 19.5px;

  --st9-size: 18px;
  --st9-line: 27px;

  --st10-size: 16px;
  --st10-line: 24px;

  --st11-size: 14px;
  --st11-line: 21px;

  --st12-size: 12px;
  --st12-line: 18px;

  --st13-size: 11px;
  --st13-line: 16.5px;
}
```

### 1-3. 폰트

```css
body {
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
}
```

### 1-4. 간격과 반지름

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;

  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
}
```

### 1-5. 그림자

그림자는 낮게 유지한다.

```css
:root {
  --shadow-card: 0 6px 18px rgba(2, 32, 71, 0.06);
  --shadow-soft: 0 2px 8px rgba(2, 32, 71, 0.05);
}
```

---

## 2단계 — 전역 레이아웃을 만든다

### 필요한 공통 컴포넌트

- `AppShell`
- `TopNavigation`
- `SearchBar`
- `SectionHeader`
- `Chip`
- `StatusBadge`
- `PrimaryButton`
- `SecondaryButton`
- `CardPanel`

### 규칙

- `AppShell`은 최대 너비를 고정하되 모바일 기준으로 시작한다.
- 375px 기준에서 먼저 안정화한다.
- 데스크톱은 단순히 좌우 여백을 늘리는 식으로 대응한다.
- 홈 전체에 동일한 수직 rhythm을 유지한다.

---

## 3단계 — 홈 화면 섹션을 순서대로 만든다

---

### 섹션 A. Top Navigation

#### 목적
- 브랜드 인지
- 검색/알림/마이페이지 진입
- 앱 같은 명확한 시작점 제공

#### 구성
- 왼쪽: 로고 또는 서비스명
- 오른쪽: 검색 아이콘, 알림 아이콘, 마이 메뉴
- 로그인 전이면: `로그인`
- 로그인 후면: 프로필/마이페이지

#### 스타일
- 높이 56~64px
- 바탕은 흰색
- 하단 border 1px 또는 매우 얕은 그림자

---

### 섹션 B. 고정 검색 영역

#### 목적
- 숙련자에게 즉시 직행선 제공
- 초보에게 “이 사이트에서 무엇을 찾을 수 있는지” 알려줌

#### 플레이스홀더 문구 예시
- `카드명, 카드번호, 세트를 검색해보세요`
- `예: 피카츄 001, 푸른눈의 백룡`

#### 보조 기능
- 최근 검색어
- 인기 검색어 5개
- 사진으로 찾기 버튼(초기엔 disabled 가능)

#### 구현 팁
- 상단 Hero 바로 아래에 위치
- 모바일에서 전체 너비
- 검색창 안 왼쪽 아이콘, 오른쪽 clear/icon 가능

---

### 섹션 C. Hero

#### 목적
신규 유입이 **겁먹지 않게** 하고,
서비스가 하는 일을 한 문장으로 이해시키는 것.

#### 구조
- 상단 작은 배지: `처음 시작해도 쉬워요`
- 메인 제목
- 부제
- 핵심 CTA 2개
- 보조 텍스트 1줄

#### 예시 카피
- 제목: `처음 카드 거래해도, 한눈에 보고 시작해요`
- 부제: `실거래 시세와 안심 거래 정보를 같이 보여줘서 부담 없이 살펴볼 수 있어요`
- CTA1: `30초로 입문하기`
- CTA2: `지금 인기 카드 보기`

#### 디자인 규칙
- 제목은 `t1` 또는 `t2`
- 부제는 `t6` 또는 `st10`
- 긴 설명을 넣지 않는다.
- 배경은 흰색 또는 아주 연한 블루/그레이 tint 1개만 허용
- 큰 일러스트보다 작은 카드 모티프 2~3개로 가볍게 표현

---

### 섹션 D. Quick Actions (핵심 행동 카드 4개)

#### 목적
홈 화면의 진짜 중심.
사용자에게 “무엇을 할 수 있는지”를 읽지 않고 고르게 만든다.

#### 카드 4개 고정
1. `처음 시작해요`
2. `인기 카드 보기`
3. `실거래 시세 확인`
4. `카드 판매 시작`

#### 카드 구성
- 아이콘
- 제목 1줄
- 보조 설명 1줄
- 우측 화살표 또는 하단 CTA

#### 스타일
- 2x2 그리드
- 카드 배경 흰색
- radius 16~20px
- 그림자 낮게
- hover/press 시 살짝 brand tint

---

### 섹션 E. Trust Strip

#### 목적
카드 거래 특유의 불안을 줄인다.

#### 포함할 항목
- `안전결제 지원`
- `검수 가능 카드`
- `판매자 평판 표시`
- `최근 거래가 기준`

#### UI 패턴
가로 스크롤 칩/배지 또는 2열 아이템 리스트

#### 금지
- 장문의 정책 문구
- 법률 문구식 복잡한 설명

---

### 섹션 F. Game Chips

#### 목적
초보에게 게임 선택을 쉽게 하고,
숙련자에게 좁혀 들어갈 출발점을 준다.

#### 1차 칩
- `전체`
- `포켓몬`
- `유희왕`
- `원피스`
- `기타`

#### 규칙
- 1차 칩만 기본 노출
- 세트/언어/레어도는 절대 여기서 다 열지 않는다

---

### 섹션 G. Discovery Sections

홈에서 최소 3개의 발견 섹션을 둔다.

#### G-1. 지금 많이 찾는 카드
- 최근 검색/조회/거래량 기준 mock 데이터
- 카드 4~8개

#### G-2. 처음 사기 좋은 카드
- 낮은 가격대
- 설명이 쉬운 카드
- 입문 추천 배지

#### G-3. 검수 가능한 카드
- 비교적 고가
- 신뢰가 중요한 상품

#### 카드 UI 필수 요소
- 카드명
- 세트/번호 보조 정보
- 가격
- 가격 변화 또는 최근 거래가
- 배지 1~2개
- 판매자/검수 신뢰 정보

#### 카드 수치 우선순위
모든 숫자를 다 넣지 말고 아래 중 최대 3개만 쓴다.
- 현재 최저가
- 최근 체결가
- 일주일 변동
- 거래 건수

---

### 섹션 H. Market Snapshot

#### 목적
주식 앱 느낌을 카드 거래에 과도하게 끌고 오지 않으면서도,
“시세를 보고 움직일 수 있다”는 확신을 준다.

#### 보여줄 것
- 오늘 거래 많은 카드 3개
- 최근 가격 상승 카드 3개
- 가격 안정 카드 3개

#### 금지
- 캔들 차트
- 복잡한 주식형 차트 인터랙션
- 홈 첫 버전에서 드릴다운 많은 그래프

#### 추천 패턴
TableRow 또는 compact list 형태

---

### 섹션 I. Beginner Journey

#### 목적
입문자 불안을 줄인다.
홈에서 바로 “어떻게 시작하는지”를 3단계로 설명한다.

#### 3단계 예시
1. `마음에 드는 카드 찾기`
2. `최근 거래가와 상태 확인`
3. `안심하고 구매하거나 바로 판매하기`

#### 규칙
- 각 단계는 아이콘 + 제목 + 한 줄 설명
- 3단계를 넘기지 않는다

---

### 섹션 J. Deep Search Preview

#### 목적
고인물에게 “이 서비스, 깊게 찾을 수도 있네?”라는 확신을 준다.

#### 노출 내용
- `카드번호로 찾기`
- `세트로 좁히기`
- `언어/레어도/등급 필터`
- `위시리스트 저장`

#### UI
- 가벼운 리스트/카드 3~4개
- 각 항목 눌렀을 때 구매 페이지 고급 필터로 연결

---

### 섹션 K. Footer / Service Info

#### 목적
브랜드 마감 + 안전감

#### 최소 항목
- 고객지원
- 안전거래 안내
- 이용약관 / 개인정보
- 서비스 소개

---

## 4단계 — 모바일 우선 반응형

### 기본 폭
- 모바일 기준 375px
- 콘텐츠 영역 좌우 패딩 20px 권장

### 브레이크포인트 예시
- mobile: < 768
- tablet: 768+
- desktop: 1200+

### 반응형 규칙
- Hero 버튼은 모바일 1열 또는 2열 자동 전환
- 카드 그리드는 mobile 1~2열, tablet 2~3열, desktop 4열
- Trust strip은 mobile 가로 스크롤 허용
- 검색창과 quick action은 첫 화면 안에 들어오게 유지

---

## 5단계 — 접근성

1. 모든 아이콘 버튼에는 `aria-label`을 넣는다.
2. 가격 변동을 색만으로 전달하지 않는다.
3. 배지는 텍스트로 의미가 드러나야 한다.
4. 카드 전체 클릭 가능 영역은 최소 44px 기준을 지킨다.
5. 포커스 상태를 숨기지 않는다.
6. skeleton과 empty state를 모두 준비한다.

---

## 6단계 — mock data 설계

초기 홈은 API 없이도 돌아야 한다.
아래 구조의 mock JSON을 만든다.

```ts
type HomeCardItem = {
  id: string;
  game: "pokemon" | "yugioh" | "onepiece" | "etc";
  name: string;
  setName: string;
  cardNumber: string;
  imageUrl: string;
  price: number;
  recentPrice?: number;
  priceDiffPercent?: number;
  transactionCount?: number;
  badges: string[];
  trust: {
    inspected: boolean;
    safePay: boolean;
    sellerRating?: number;
  };
};
```

카드 12~24개 정도면 홈 섹션 구현에 충분하다.

---

## 7단계 — 컴포넌트 권장 트리

```text
src/components/home/
  HomePage.tsx
  hero/
    HeroSection.tsx
  quick-actions/
    QuickActionsGrid.tsx
  search/
    HomeSearchBar.tsx
  trust/
    TrustStrip.tsx
  discovery/
    DiscoverySection.tsx
    DiscoveryTabs.tsx
  market/
    MarketSnapshot.tsx
  beginner/
    BeginnerJourney.tsx
  deep-search/
    DeepSearchPreview.tsx
```

공통 컴포넌트는 아래로 분리한다.

```text
src/components/shared/
  button/
    PrimaryButton.tsx
    SecondaryButton.tsx
  chip/
    FilterChip.tsx
  badge/
    StatusBadge.tsx
  card/
    CardPanel.tsx
    MarketCard.tsx
  section/
    SectionHeader.tsx
  shell/
    AppShell.tsx
    TopNavigation.tsx
```

---

## 8단계 — 홈 카피 기본 세트

### Hero
- `처음 카드 거래해도 한눈에 보고 시작해요`
- `실거래 시세와 안심 정보까지 함께 보여줘요`

### Quick Actions
- `처음 시작해요`
- `지금 인기 카드`
- `실거래 시세`
- `카드 판매 시작`

### Discovery
- `지금 많이 찾는 카드`
- `처음 사기 좋은 카드`
- `검수 가능 카드`

### Beginner Journey
- `처음이신가요? 딱 3단계면 돼요`

### Deep Search
- `세트, 카드번호, 언어까지 깊게 찾을 수 있어요`

---

## 9단계 — 피그마로 옮길 때 규칙

1. 375px 프레임으로 먼저 작업한다.
2. 상단에는 Navigation, 검색창, Hero 순으로 둔다.
3. ListRow 느낌의 카드 패턴을 적극 활용한다.
4. gap 남용보다 컴포넌트 자체 패딩을 믿는다.
5. variant는 아래부터 만든다.
   - 버튼: primary / secondary / ghost
   - 칩: default / active
   - 배지: neutral / brand / positive / warning
   - 카드: default / hover / pressed / skeleton

---

## 10단계 — 반드시 피해야 할 실수

- 홈에 게임별 세트를 전부 노출
- 홈에 차트 위주 화면 구성
- 카드 한 장에 숫자 5개 이상 노출
- 모든 배지를 브랜드 블루로 칠하기
- 첫 화면에 업계 용어 설명 장문 삽입
- 카드 상태/검수 정보를 상세 페이지로만 미루기
- 모바일에서 카드 그리드를 너무 조밀하게 만들기

---

## 11단계 — 완료 검증 질문

아래 질문에 모두 “예”여야 한다.

1. 첫 화면만 보고 초보가 “무엇을 할 수 있는지” 안다.
2. 검색창이 바로 보인다.
3. 안심하고 거래할 수 있다는 느낌이 든다.
4. 인기 카드 / 입문 추천 / 시세 / 판매 시작 중 하나를 바로 누를 수 있다.
5. 숙련자가 세트/번호 검색으로 들어갈 수 있을 것 같다는 인상을 준다.
6. 라벨이 짧고 부담이 없다.
7. 폰트/간격/색상이 통일돼 있다.
8. 다음 단계인 구매/판매/상세로 자연스럽게 확장 가능하다.

---

## 12단계 — 다음 확장 작업

홈이 끝나면 아래 순서로 확장한다.

1. 구매 리스트 페이지
2. 판매 등록 플로우
3. 카드 상세 페이지
4. 마이페이지 / 위시리스트
5. 검색 결과 + 고급 필터
6. 실거래 시세 상세

---

## References

- Tossinvest home: https://www.tossinvest.com
- 앱인토스 피그마 가이드: https://developers-apps-in-toss.toss.im/design/prepare/design.html
- TDS Typography: https://tossmini-docs.toss.im/tds-react-native/foundation/typography/
- TDS Colors: https://tossmini-docs.toss.im/tds-react-native/foundation/colors/
- TDS Mobile SearchField: https://tossmini-docs.toss.im/tds-mobile/components/search-field/
- TDS Mobile ListRow: https://tossmini-docs.toss.im/tds-mobile/components/ListRow/list-row-components/
