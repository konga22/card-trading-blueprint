export type HomeGame = "all" | "pokemon" | "yugioh" | "onepiece" | "other";

export type HomeCardItem = {
  id: string;
  game: Exclude<HomeGame, "all">;
  name: string;
  setName: string;
  cardNumber: string;
  imageUrl: string;
  price: number;
  priceDiffPercent?: number;
  transactionCount?: number;
  badges: string[];
  trust: {
    inspected: boolean;
    safePay: boolean;
    sellerRating?: number;
  };
};

export type DiscoverySectionData = {
  key: string;
  title: string;
  description: string;
  highlight: string;
  gameFilter: HomeGame;
  cards: HomeCardItem[];
};

export type ActionItem = {
  title: string;
  description: string;
  href: string;
  accent: "brand" | "positive" | "warning" | "neutral";
  icon: "spark" | "trend" | "chart" | "sell";
};

export type TrustItem = {
  title: string;
  description: string;
  tone: "neutral" | "positive" | "brand" | "warning";
};

export type MarketRow = {
  id: string;
  name: string;
  setName: string;
  price: number;
  changePercent: number;
  transactionCount: number;
  direction: "up" | "down" | "flat";
};

export type HeroShowcaseCard = {
  id: string;
  title: string;
  note: string;
  imageUrl: string;
};

export const gameTabs: Array<{ key: HomeGame; label: string }> = [
  { key: "all", label: "전체" },
  { key: "pokemon", label: "포켓몬" },
  { key: "yugioh", label: "유희왕" },
  { key: "onepiece", label: "원피스" },
  { key: "other", label: "기타 TCG" },
];

export const searchSuggestions = [
  "피카츄 ex",
  "151 리자몽",
  "PSA 10 피카츄",
  "원피스 리더 패럴렐",
  "블루아이즈 1st",
];

export const heroShowcaseCards: HeroShowcaseCard[] = [
  {
    id: "pokemon-official-card-1",
    title: "공식 카드 이미지",
    note: "pokemoncard.co.kr 카드검색 기준",
    imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_001.png",
  },
  {
    id: "pokemon-official-card-2",
    title: "공식 카드 이미지",
    note: "포켓몬 카드 공식 CDN",
    imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_007.png",
  },
  {
    id: "pokemon-official-card-3",
    title: "공식 카드 이미지",
    note: "상세/카드검색 화면 자산",
    imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_025.png",
  },
];

export const heroStats = [
  {
    label: "첫 행동",
    value: "검색",
    note: "카드명, 카드번호, 시리즈부터 바로 진입",
  },
  {
    label: "판단 기준",
    value: "시세 + 신뢰",
    note: "안전결제, 검수, 판매자 평점을 함께 확인",
  },
  {
    label: "판매 진입",
    value: "준비 항목 중심",
    note: "사진, 상태, 가격 가이드만 먼저 보여줌",
  },
];

export const heroPokemonVisuals = heroShowcaseCards.map((card) => ({
  ...card,
  label: "Official Pokemon Asset",
}));

export const heroProofItems = heroStats;

export const heroSpotlight = {
  imageUrl: heroShowcaseCards[0].imageUrl,
  name: "피카츄 ex 스페셜 아트",
  setName: "SV 시리즈",
  cardNumber: "SVP-001",
  currentPrice: 328000,
  transactionCount: 142,
};

export const heroSignals = [
  { label: "검색 우선", value: "카드명 · 번호 · 시리즈", tone: "brand" as const },
  { label: "시세 기준", value: "최근 거래가 중심", tone: "positive" as const },
  { label: "신뢰 판단", value: "안전결제 · 검수", tone: "warning" as const },
];

export const quickActions: ActionItem[] = [
  {
    title: "탐색부터 시작",
    description: "게임별로 카드 흐름을 보고, 지금 많이 비교되는 카드부터 빠르게 고른다.",
    href: "/discover",
    accent: "brand",
    icon: "spark",
  },
  {
    title: "시세 먼저 확인",
    description: "최근 거래가와 거래 건수를 함께 보고 과열 여부를 먼저 판단한다.",
    href: "/market",
    accent: "positive",
    icon: "trend",
  },
  {
    title: "상세 조건 검색",
    description: "카드번호, 시리즈, 상태, 등급으로 좁혀서 정확한 결과만 본다.",
    href: "/search/advanced",
    accent: "warning",
    icon: "chart",
  },
  {
    title: "판매 시작 준비",
    description: "등록 전에 필요한 사진, 상태, 가격 기준을 짧게 확인하고 넘어간다.",
    href: "/sell/start",
    accent: "neutral",
    icon: "sell",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "안전결제 우선 노출",
    description: "결제 방식은 상세 페이지 뒤가 아니라 가격을 보기 전부터 함께 보여준다.",
    tone: "brand",
  },
  {
    title: "검수 필요 카드 분리",
    description: "상태 민감 카드와 고가 카드는 검수 필요 여부를 더 먼저 보여준다.",
    tone: "positive",
  },
  {
    title: "판매자 신뢰 근처 배치",
    description: "평점과 거래 수는 가격과 멀어지지 않게 같은 시야 안에 둔다.",
    tone: "neutral",
  },
  {
    title: "최근 거래 기준 제공",
    description: "호가보다 최근 거래와 거래량을 우선해 가격 판단을 돕는다.",
    tone: "warning",
  },
];

export const beginnerSteps = [
  {
    title: "찾고 싶은 카드 범위 정하기",
    description: "게임 탭과 추천 검색어로 범위를 줄이고, 카드명과 번호를 같이 익힌다.",
  },
  {
    title: "가격과 상태를 같이 보기",
    description: "최근 거래가, 거래량, 상태, 등급을 한 번에 보고 예산을 먼저 정한다.",
  },
  {
    title: "안전거래 신호 확인 후 행동",
    description: "안전결제, 검수 가능 여부, 판매자 평점을 보고 구매나 판매를 결정한다.",
  },
];

export const deepSearchItems = [
  {
    title: "카드번호로 빠르게 좁히기",
    description: "이름이 비슷한 카드가 많아도 번호로 정확히 걸러낸다.",
  },
  {
    title: "시리즈와 세트 기준 분리",
    description: "같은 캐릭터라도 어떤 세트인지 먼저 나눠야 가격 비교가 쉬워진다.",
  },
  {
    title: "상태와 등급을 따로 보기",
    description: "민트, 니어민트, PSA/BGS처럼 실제 거래 차이를 만드는 조건을 먼저 분리한다.",
  },
  {
    title: "정렬로 우선순위 바꾸기",
    description: "최신 거래, 낮은 가격, 거래량 순으로 바꿔 보며 목적에 맞는 결과를 찾는다.",
  },
];

export const discoverySections: DiscoverySectionData[] = [
  {
    key: "popular",
    title: "지금 많이 찾는 카드",
    description: "검색 반응과 거래 회전이 같이 올라가는 카드부터 확인한다.",
    highlight: "거래와 검색이 같이 움직이는 카드",
    gameFilter: "all",
    cards: [
      {
        id: "pokemon-pikachu-ex",
        game: "pokemon",
        name: "피카츄 ex 스페셜 아트",
        setName: "SV 시리즈",
        cardNumber: "SVP-001",
        imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_001.png",
        price: 328000,
        priceDiffPercent: 3.2,
        transactionCount: 142,
        badges: ["포켓몬", "급상승"],
        trust: { inspected: true, safePay: true, sellerRating: 4.9 },
      },
      {
        id: "pokemon-charizard-151",
        game: "pokemon",
        name: "리자몽 ex 151",
        setName: "포켓몬 151",
        cardNumber: "151-006",
        imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_007.png",
        price: 219000,
        priceDiffPercent: -1.1,
        transactionCount: 88,
        badges: ["포켓몬", "최근거래"],
        trust: { inspected: true, safePay: true, sellerRating: 4.8 },
      },
      {
        id: "onepiece-luffy-leader",
        game: "onepiece",
        name: "루피 리더 패럴렐",
        setName: "OP05",
        cardNumber: "OP05-060",
        imageUrl: "/images/cards/placeholder-card.svg",
        price: 184000,
        priceDiffPercent: 2.4,
        transactionCount: 76,
        badges: ["원피스", "리더"],
        trust: { inspected: false, safePay: true, sellerRating: 4.7 },
      },
    ],
  },
  {
    key: "beginner",
    title: "입문 예산으로 보기 쉬운 카드",
    description: "가격과 비교 포인트가 명확한 카드부터 시작할 수 있게 묶었다.",
    highlight: "처음 시작하는 사람을 위한 묶음",
    gameFilter: "all",
    cards: [
      {
        id: "pokemon-mew-ex",
        game: "pokemon",
        name: "뮤 ex 엔트리 카드",
        setName: "배틀 파트너즈",
        cardNumber: "BP-011",
        imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_025.png",
        price: 48000,
        priceDiffPercent: 0.7,
        transactionCount: 61,
        badges: ["입문", "포켓몬"],
        trust: { inspected: false, safePay: true, sellerRating: 4.9 },
      },
      {
        id: "yugioh-blue-eyes",
        game: "yugioh",
        name: "블루아이즈 화이트 드래곤",
        setName: "듀얼리스트 팩",
        cardNumber: "DP-KR001",
        imageUrl: "/images/cards/placeholder-card.svg",
        price: 92000,
        priceDiffPercent: 1.9,
        transactionCount: 54,
        badges: ["유희왕", "클래식"],
        trust: { inspected: false, safePay: true, sellerRating: 4.6 },
      },
      {
        id: "pokemon-eevee-promo",
        game: "pokemon",
        name: "이브이 프로모",
        setName: "프로모",
        cardNumber: "PR-114",
        imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_014.png",
        price: 39000,
        priceDiffPercent: -0.4,
        transactionCount: 49,
        badges: ["프로모", "입문"],
        trust: { inspected: false, safePay: true, sellerRating: 4.8 },
      },
    ],
  },
  {
    key: "inspection",
    title: "신뢰 신호가 중요한 카드",
    description: "검수 가능 여부와 안전결제가 실제 판단에 큰 영향을 주는 카드다.",
    highlight: "검수와 안전거래를 먼저 봐야 하는 카드",
    gameFilter: "all",
    cards: [
      {
        id: "pokemon-graded-pikachu",
        game: "pokemon",
        name: "피카츄 PSA 10",
        setName: "그레이딩",
        cardNumber: "GR-025",
        imageUrl: "https://cards.image.pokemonkorea.co.kr/data/wmimages/MEGA/M3/M3_018.png",
        price: 488000,
        priceDiffPercent: 1.1,
        transactionCount: 27,
        badges: ["그레이딩", "고가"],
        trust: { inspected: true, safePay: true, sellerRating: 5.0 },
      },
      {
        id: "onepiece-premium-promo",
        game: "onepiece",
        name: "프리미엄 프로모",
        setName: "한정판",
        cardNumber: "PR-022",
        imageUrl: "/images/cards/placeholder-card.svg",
        price: 266000,
        priceDiffPercent: 2.6,
        transactionCount: 18,
        badges: ["한정", "프리미엄"],
        trust: { inspected: true, safePay: true, sellerRating: 4.9 },
      },
      {
        id: "other-sports-auto",
        game: "other",
        name: "루키 오토 카드",
        setName: "Premier Edition",
        cardNumber: "RC-07",
        imageUrl: "/images/cards/placeholder-card.svg",
        price: 171000,
        priceDiffPercent: 0.8,
        transactionCount: 12,
        badges: ["기타 TCG", "희소"],
        trust: { inspected: true, safePay: false, sellerRating: 4.5 },
      },
    ],
  },
];

export const marketRows: MarketRow[] = [
  {
    id: "market-pikachu",
    name: "피카츄 ex 스페셜 아트",
    setName: "SV 시리즈",
    price: 328000,
    changePercent: 3.2,
    transactionCount: 142,
    direction: "up",
  },
  {
    id: "market-charizard",
    name: "리자몽 ex 151",
    setName: "포켓몬 151",
    price: 219000,
    changePercent: -1.1,
    transactionCount: 88,
    direction: "down",
  },
  {
    id: "market-luffy",
    name: "루피 리더 패럴렐",
    setName: "OP05",
    price: 184000,
    changePercent: 2.4,
    transactionCount: 76,
    direction: "up",
  },
  {
    id: "market-blue-eyes",
    name: "블루아이즈 화이트 드래곤",
    setName: "듀얼리스트 팩",
    price: 92000,
    changePercent: 1.9,
    transactionCount: 54,
    direction: "flat",
  },
];

export const featuredListings = discoverySections.flatMap((section) =>
  section.cards.slice(0, 1).map((card) => ({
    id: card.id,
    title: card.name,
    hint: `${card.setName} · ${card.cardNumber}`,
    price: card.price,
    href: `/search?q=${encodeURIComponent(card.name)}`,
  })),
);

export function formatWon(value: number) {
  return `${new Intl.NumberFormat("ko-KR").format(value)}원`;
}

export function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}
