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
  if (section === "popular") return "거래와 검색이 같이 움직이는 카드";
  if (section === "beginner") return "처음 시작하는 사용자를 위한 묶음";
  return "신뢰 신호가 중요한 카드";
}

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
    title: "탐색부터 시작",
    description: "게임별 카드 흐름을 먼저 보고, 인기 카드와 입문 카드를 빠르게 압축합니다.",
    href: "/discover",
    accent: "brand",
    icon: "spark",
  },
  {
    title: "시세 확인",
    description: "최근 체결가와 거래 건수를 함께 보면서 가격 감각을 먼저 잡습니다.",
    href: "/market",
    accent: "positive",
    icon: "trend",
  },
  {
    title: "고급 검색",
    description: "세트, 카드번호, 언어, 상태처럼 더 촘촘한 조건을 별도 페이지에서 씁니다.",
    href: "/search/advanced",
    accent: "warning",
    icon: "chart",
  },
  {
    title: "판매 시작",
    description: "판매 등록은 홈에서 끌어안지 않고 별도 흐름에서 차분하게 진행합니다.",
    href: "/sell/start",
    accent: "neutral",
    icon: "sell",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "안전결제 우선 노출",
    description: "거래 신뢰를 먼저 확인할 수 있게 결제 신호를 선명하게 둡니다.",
    tone: "brand",
  },
  {
    title: "검수 가능 카드 구분",
    description: "고가 카드와 상태 민감 카드는 검수 가능 여부를 빠르게 드러냅니다.",
    tone: "positive",
  },
  {
    title: "판매자 평점 확인",
    description: "가격만 보지 않도록 평점과 응답 신호를 같이 보여줍니다.",
    tone: "neutral",
  },
  {
    title: "최근 거래 기준 제공",
    description: "호가보다 실제 체결 흐름을 먼저 보고 다음 행동을 고를 수 있습니다.",
    tone: "warning",
  },
];

export const beginnerSteps = [
  {
    title: "카드 이름부터 익히기",
    description: "홈과 탐색 페이지에서 많이 찾는 카드를 먼저 보고 이름과 세트를 익힙니다.",
  },
  {
    title: "최근 거래 흐름 확인",
    description: "시세 페이지에서 가격과 거래량을 같이 보며 과열 구간을 피합니다.",
  },
  {
    title: "신뢰 신호 보고 행동하기",
    description: "검수 가능 여부, 안전결제, 판매자 평점을 보고 구매나 판매를 이어갑니다.",
  },
];

export const deepSearchItems = [
  {
    title: "카드번호로 바로 압축",
    description: "동일 이름 카드가 많을 때 가장 빠르게 원하는 버전으로 좁힙니다.",
  },
  {
    title: "세트와 언어 조합",
    description: "세트와 언어를 함께 사용하면 노이즈를 줄이고 거래 후보를 명확히 만들 수 있습니다.",
  },
  {
    title: "상태와 그레이드 분리",
    description: "민트, 준민트, PSA 10처럼 가격 차이가 큰 조건을 따로 다룹니다.",
  },
  {
    title: "정렬로 우선순위 결정",
    description: "최근 거래순, 낮은 가격순, 인기순을 바꿔보며 다음 행동을 정합니다.",
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
