import { CATALOG_GAME_FILTERS } from "@/features/catalog";
import { CATALOG_GAME_LABELS } from "@/lib/constants/catalog";
import { SEARCH_SHORTCUTS } from "@/features/search";
import { DISCOVERY_SECTIONS, MARKET_SNAPSHOT_ITEMS } from "@/lib/mocks/home";
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
  if (section === "popular") return "검색량 + 거래량 기준";
  if (section === "beginner") return "입문 추천";
  return "검수 가능";
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
    title: "처음 시작해요",
    description: "입문자가 보기 쉬운 카드부터 추천해요",
    href: "/beginner",
    accent: "brand",
    icon: "spark",
  },
  {
    title: "지금 인기 카드",
    description: "최근 많이 찾고 거래한 카드를 모아봤어요",
    href: "/discover",
    accent: "positive",
    icon: "trend",
  },
  {
    title: "실거래 시세",
    description: "최근 거래가 기준으로 가격 감을 잡아보세요",
    href: "/market",
    accent: "warning",
    icon: "chart",
  },
  {
    title: "카드 판매 시작",
    description: "내 카드 정보만 맞추면 바로 올릴 수 있어요",
    href: "/sell/start",
    accent: "neutral",
    icon: "sell",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "안전결제 지원",
    description: "거래 리스크를 줄이는 결제 흐름을 우선합니다.",
    tone: "brand",
  },
  {
    title: "검수 가능 카드",
    description: "고가 카드도 상태 확인 경로를 바로 볼 수 있어요.",
    tone: "positive",
  },
  {
    title: "판매자 평판 표시",
    description: "평점과 거래 이력을 함께 확인할 수 있어요.",
    tone: "neutral",
  },
  {
    title: "최근 거래가 기준",
    description: "실제 체결가 중심으로 가격 감을 잡아보세요.",
    tone: "warning",
  },
];

export const beginnerSteps = [
  {
    title: "마음에 드는 카드 찾기",
    description: "검색과 추천 카드에서 출발하면 처음도 어렵지 않아요.",
  },
  {
    title: "최근 거래가와 상태 확인",
    description: "가격 흐름과 검수 정보를 같이 보면 판단이 쉬워집니다.",
  },
  {
    title: "안심하고 구매하거나 판매 시작",
    description: "확신이 서면 바로 구매하거나 내 카드를 올릴 수 있어요.",
  },
];

export const deepSearchItems = [
  {
    title: "카드번호로 찾기",
    description: "같은 카드라도 번호가 다른 버전을 빠르게 분리해요.",
  },
  {
    title: "세트로 좁히기",
    description: "원하는 출시 세트 중심으로 범위를 줄일 수 있어요.",
  },
  {
    title: "언어/레어도 필터",
    description: "깊은 탐색에 필요한 핵심 필터만 단정하게 제공합니다.",
  },
  {
    title: "위시리스트 저장",
    description: "나중에 다시 보고 싶은 카드를 바로 모아둘 수 있어요.",
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
  setName: `${item.setName} · ${CATALOG_GAME_LABELS[item.game]}`,
  price: item.currentPrice,
  changePercent: item.priceChangePercent,
  transactionCount: item.transactionCount,
  direction: item.direction,
}));

export function formatWon(value: number) {
  return new Intl.NumberFormat("ko-KR").format(value);
}

export function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}
