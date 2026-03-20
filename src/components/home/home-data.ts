import { CATALOG_GAME_FILTERS } from "@/features/catalog";
import { SEARCH_SHORTCUTS } from "@/features/search";
import {
  DISCOVERY_SECTIONS,
  HOME_CARD_FIXTURES,
  MARKET_SNAPSHOT_ITEMS,
  type CatalogGameKey,
  type DiscoverySection as LibraryDiscoverySection,
  type HomeCardItem as LibraryHomeCardItem,
} from "@/lib";

export type HomeGame = CatalogGameKey;
export type HomeCardItem = LibraryHomeCardItem;
export type DiscoverySectionData = LibraryDiscoverySection;

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

export const heroPokemonVisuals: HeroVisual[] = [
  {
    id: "hero-card-001",
    label: "Pokemon Korea Official",
    title: "공식 포켓몬 카드 이미지 001",
    note: "포켓몬 공식 사이트 자산만 로컬 이미지로 사용합니다.",
    imageUrl: "/images/cards/pokemon-official-m3-001.png",
  },
  {
    id: "hero-card-007",
    label: "Pokemon Korea Official",
    title: "공식 포켓몬 카드 이미지 007",
    note: "랜딩 전반의 대표 비주얼은 공식 출처만 유지합니다.",
    imageUrl: "/images/cards/pokemon-official-m3-007.png",
  },
  {
    id: "hero-card-025",
    label: "Pokemon Korea Official",
    title: "공식 포켓몬 카드 이미지 025",
    note: "검색과 거래 정보가 먼저 보이도록 카드 아트는 보조로 사용합니다.",
    imageUrl: "/images/cards/pokemon-official-m3-025.png",
  },
];

export const heroProofItems: HeroProof[] = [
  {
    label: "검색 우선",
    value: "카드명 · 번호 · 세트",
    note: "배너보다 검색 입력과 추천어가 먼저 읽히는 구조입니다.",
  },
  {
    label: "거래 판단",
    value: "최근 거래 · 안전결제",
    note: "가격 옆에서 바로 신뢰 신호를 확인할 수 있습니다.",
  },
  {
    label: "판매 진입",
    value: "체크리스트 중심 시작",
    note: "판매 흐름은 별도 단계로 분리해 부담을 줄였습니다.",
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
    description: "게임을 먼저 고르고, 처음 보기 쉬운 카드부터 천천히 비교합니다.",
    href: "/discover",
    accent: "brand",
    icon: "spark",
  },
  {
    title: "시세 먼저 보기",
    description: "최근 거래와 가격 흐름을 같이 보면서 감을 먼저 잡습니다.",
    href: "/market",
    accent: "positive",
    icon: "trend",
  },
  {
    title: "상세 검색 열기",
    description: "카드번호, 세트, 언어, 상태 기준으로 결과를 더 좁힙니다.",
    href: "/search/advanced",
    accent: "warning",
    icon: "chart",
  },
  {
    title: "판매 준비 체크",
    description: "사진, 상태, 가격 기준을 먼저 보고 판매를 시작합니다.",
    href: "/sell/start",
    accent: "neutral",
    icon: "sell",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "안전결제 여부를 먼저 노출",
    description: "가격만 보지 않도록 결제 보호 여부를 상품 가까이에 둡니다.",
    tone: "brand",
  },
  {
    title: "검수 가능 카드 구분",
    description: "상태 민감도가 높은 카드일수록 검수 여부를 먼저 확인하게 합니다.",
    tone: "positive",
  },
  {
    title: "판매자 신뢰 정보 묶음",
    description: "평점과 거래 이력을 가격 근처에서 함께 읽을 수 있습니다.",
    tone: "neutral",
  },
  {
    title: "최근 거래 중심 판단",
    description: "호가보다 실제 거래 흐름을 먼저 보도록 화면을 설계했습니다.",
    tone: "warning",
  },
];

export const beginnerSteps = [
  {
    title: "게임과 카드 이름 익히기",
    description: "탐색 화면에서 자주 찾는 카드와 대표 세트를 먼저 훑습니다.",
  },
  {
    title: "최근 거래와 상태 비교",
    description: "시세 페이지에서 거래량과 상태 차이에 따른 가격을 읽습니다.",
  },
  {
    title: "신뢰 신호 확인 후 이동",
    description: "안전결제, 검수 가능, 판매자 평점을 본 뒤 다음 행동을 정합니다.",
  },
];

export const deepSearchItems = [
  {
    title: "카드번호로 바로 좁히기",
    description: "이름이 비슷한 카드가 많을수록 카드번호가 가장 빠른 기준이 됩니다.",
  },
  {
    title: "세트와 언어 조합",
    description: "확장팩과 언어를 함께 고르면 원하는 판본만 빠르게 남깁니다.",
  },
  {
    title: "상태와 그레이딩 분리",
    description: "민트급과 PSA 같은 평가 정보는 별도 기준으로 나눠 봅니다.",
  },
  {
    title: "정렬 기준 바꾸기",
    description: "최근 거래순과 가격순을 오가며 지금 필요한 판단을 돕습니다.",
  },
];

export const discoverySections: DiscoverySectionData[] = [...DISCOVERY_SECTIONS];

export const marketRows: MarketRow[] = MARKET_SNAPSHOT_ITEMS.map((item) => ({
  id: item.id,
  name: item.name,
  setName: item.setName,
  price: item.currentPrice,
  changePercent: item.priceChangePercent,
  transactionCount: item.transactionCount,
  direction: item.direction,
}));

export const featuredListings = HOME_CARD_FIXTURES.slice(0, 3).map((card) => ({
  id: card.id,
  title: card.name,
  hint: `${card.setName} · ${card.cardNumber}`,
  price: card.currentPrice,
  support: `최근 거래 ${card.transactionCount}건 · 평점 ${card.sellerRating.toFixed(1)}`,
  href: `/search?q=${encodeURIComponent(card.name)}`,
}));

export function formatWon(value: number) {
  return `${new Intl.NumberFormat("ko-KR").format(value)}원`;
}

export function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}
