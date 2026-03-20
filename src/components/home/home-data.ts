import { CATALOG_GAME_FILTERS } from "@/features/catalog";
import { SEARCH_SHORTCUTS } from "@/features/search";
import { DISCOVERY_SECTIONS, HOME_CARD_FIXTURES, MARKET_SNAPSHOT_ITEMS } from "@/lib/mocks/home";
import type { DiscoverySection, HomeCardItem as LibraryHomeCardItem } from "@/lib/types";

export type HomeGame = "all" | "pokemon" | "yugioh" | "onepiece" | "other";

export type HomeCardItem = {
  id: string;
  game: Exclude<HomeGame, "all">;
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

export type HeroVisual = {
  id: string;
  label: string;
  title: string;
  note: string;
  imageUrl: string;
};

export type HeroProof = {
  label: string;
  value: string;
  note: string;
};

function toHomeCardItem(card: LibraryHomeCardItem): HomeCardItem {
  return {
    id: card.id,
    game: card.game,
    name: card.name,
    setName: card.setName,
    cardNumber: card.cardNumber,
    imageUrl: card.imageUrl,
    price: card.currentPrice,
    recentPrice: card.recentTradePrice,
    priceDiffPercent: card.priceChangePercent,
    transactionCount: card.transactionCount,
    badges: [...card.badges],
    trust: {
      inspected: card.inspectable,
      safePay: card.safePay,
      sellerRating: card.sellerRating,
    },
  };
}

function getDiscoveryHighlight(section: DiscoverySection["key"]) {
  if (section === "popular") return "검색과 거래가 같이 움직이는 카드";
  if (section === "beginner") return "처음 시작하는 사용자를 위한 묶음";
  return "신뢰 신호를 먼저 봐야 하는 카드";
}

export const heroPokemonVisuals: HeroVisual[] = [
  {
    id: "hero-card-001",
    label: "Pokemon Korea Official",
    title: "공식 카드 이미지 001",
    note: "포켓몬코리아 카드 CDN 원본을 로컬 자산으로 고정",
    imageUrl: "/images/cards/pokemon-official-m3-001.png",
  },
  {
    id: "hero-card-007",
    label: "Pokemon Korea Official",
    title: "공식 카드 이미지 007",
    note: "공식 카드 사이트에서 받은 비주얼만 사용",
    imageUrl: "/images/cards/pokemon-official-m3-007.png",
  },
  {
    id: "hero-card-025",
    label: "Pokemon Korea Official",
    title: "공식 카드 이미지 025",
    note: "배포 환경에서도 흔들리지 않도록 로컬에 보관",
    imageUrl: "/images/cards/pokemon-official-m3-025.png",
  },
];

export const heroProofItems: HeroProof[] = [
  {
    label: "검색 우선",
    value: "카드명 · 번호 · 세트",
    note: "홈에서 바로 찾고 비교할 수 있는 구조",
  },
  {
    label: "신뢰 정보",
    value: "안전결제 · 검수 · 거래량",
    note: "가격 옆에서 바로 읽히는 거래 신호",
  },
  {
    label: "판매 진입",
    value: "준비물부터 안내",
    note: "초보 판매자도 막히지 않는 시작 흐름",
  },
];

export const gameTabs: Array<{ key: HomeGame; label: string }> = CATALOG_GAME_FILTERS.map(
  (filter) => ({
    key: filter.key,
    label: filter.label,
  }),
);

export const searchSuggestions = SEARCH_SHORTCUTS.map((shortcut) =>
  shortcut.query === "photo-search" ? shortcut.label : shortcut.query,
);

export const quickActions: ActionItem[] = [
  {
    title: "입문부터 시작",
    description: "처음 보는 카드도 게임별 큐레이션과 쉬운 흐름으로 빠르게 파악합니다.",
    href: "/discover",
    accent: "brand",
    icon: "spark",
  },
  {
    title: "시세 먼저 보기",
    description: "최근 거래가와 거래량을 같이 보면서 가격 감각부터 익힙니다.",
    href: "/market",
    accent: "positive",
    icon: "trend",
  },
  {
    title: "상세 검색 열기",
    description: "카드번호, 세트, 상태, 언어처럼 세부 조건으로 깊게 좁혀갑니다.",
    href: "/search/advanced",
    accent: "warning",
    icon: "chart",
  },
  {
    title: "판매 준비하기",
    description: "사진, 상태, 가격 기준을 먼저 보고 무리 없이 판매를 시작합니다.",
    href: "/sell/start",
    accent: "neutral",
    icon: "sell",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "안전결제 우선 표시",
    description: "가격만 보지 않도록 안전결제 가능 여부를 상품 가까이 배치합니다.",
    tone: "brand",
  },
  {
    title: "검수 가능 카드 분리",
    description: "상태에 민감한 카드일수록 검수 가능 여부를 먼저 확인하게 합니다.",
    tone: "positive",
  },
  {
    title: "판매자 신뢰 신호",
    description: "평점과 거래 히스토리를 가격 근처에서 같이 읽을 수 있게 둡니다.",
    tone: "neutral",
  },
  {
    title: "최근 거래 기준",
    description: "호가보다 실제 거래 흐름을 먼저 보게 만들어 판단을 돕습니다.",
    tone: "warning",
  },
];

export const beginnerSteps = [
  {
    title: "게임과 카드 이름 익히기",
    description: "탐색 페이지에서 자주 찾는 카드와 대표 세트를 먼저 익힙니다.",
  },
  {
    title: "최근 거래와 상태 비교",
    description: "시세 페이지에서 거래량과 상태 차이에 따른 가격 흐름을 봅니다.",
  },
  {
    title: "신뢰 신호 보고 행동하기",
    description: "안전결제, 검수, 판매자 평점을 본 뒤 구매나 판매로 이동합니다.",
  },
];

export const deepSearchItems = [
  {
    title: "카드번호로 바로 좁히기",
    description: "이름이 비슷한 카드가 많을 때 카드번호로 정확하게 좁혀 찾습니다.",
  },
  {
    title: "세트와 언어 조합",
    description: "확장팩과 언어를 함께 걸면 원하는 판본만 빠르게 남길 수 있습니다.",
  },
  {
    title: "상태와 그레이딩 분리",
    description: "민트급, 사용감 있음, PSA처럼 가격 차이를 만드는 기준을 나눕니다.",
  },
  {
    title: "정렬 기준 바꾸기",
    description: "최근 거래순과 가격순을 오가며 지금 필요한 판단 기준을 고릅니다.",
  },
];

export const discoverySections: DiscoverySectionData[] = DISCOVERY_SECTIONS.map((section) => ({
  key: section.key,
  title: section.title,
  description: section.description,
  highlight: getDiscoveryHighlight(section.key),
  gameFilter: "all",
  cards: section.items.map(toHomeCardItem),
}));

export const marketRows: MarketRow[] = MARKET_SNAPSHOT_ITEMS.map((item) => ({
  id: item.id,
  name: item.name,
  setName: item.setName,
  price: item.currentPrice,
  changePercent: item.priceChangePercent,
  transactionCount: item.transactionCount,
  direction: item.direction,
}));

export const featuredListings = HOME_CARD_FIXTURES.slice(0, 4).map((card) => ({
  id: card.id,
  title: card.name,
  hint: `${card.setName} · ${card.cardNumber}`,
  price: card.currentPrice,
  support: `${card.transactionCount}건 거래 · 평점 ${card.sellerRating.toFixed(1)}`,
  href: `/search?q=${encodeURIComponent(card.name)}`,
}));

export function formatWon(value: number) {
  return `${new Intl.NumberFormat("ko-KR").format(value)}원`;
}

export function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}
