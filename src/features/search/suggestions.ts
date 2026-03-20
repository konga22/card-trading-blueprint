import { CATALOG_GAME_FILTERS, CATALOG_PURPOSE_FILTERS } from "../catalog/taxonomy";
import { HOME_CARD_FIXTURES } from "../../lib/mocks/home";
import type {
  HomeCardItem,
  SearchFilterChip,
  SearchShortcut,
  SearchSuggestion,
} from "../../lib/types";
import {
  buildCardSearchLabel,
  createCardSearchSuggestions,
  normalizeSearchTerm,
} from "../../lib/utils/search";

export const SEARCH_SHORTCUTS: readonly SearchShortcut[] = [
  {
    key: "popular",
    label: "인기 검색",
    query: "피카츄",
    description: "가장 자주 찾는 카드부터 빠르게 살펴봅니다.",
  },
  {
    key: "recent",
    label: "최근 거래",
    query: "리자몽 ex",
    description: "최근 시세 흐름이 빠른 카드를 다시 확인합니다.",
  },
  {
    key: "photo",
    label: "사진 검색 준비",
    query: "photo-search",
    description: "이미지 기반 검색이 들어올 자리를 안내합니다.",
  },
];

export const SEARCH_FILTER_CHIPS: readonly SearchFilterChip[] = [
  ...CATALOG_GAME_FILTERS.map((filter) => ({
    key: `game:${filter.key}`,
    label: filter.label,
    value: filter.key,
    tone: filter.key === "all" ? ("brand" as const) : ("neutral" as const),
  })),
  ...CATALOG_PURPOSE_FILTERS.slice(0, 2).map((filter) => ({
    key: `purpose:${filter.key}`,
    label: filter.label,
    value: filter.key,
    tone: "neutral" as const,
  })),
];

export function createHomepageSearchSuggestions(
  query: string,
  cards: readonly HomeCardItem[] = HOME_CARD_FIXTURES,
  limit = 5,
): SearchSuggestion[] {
  const normalizedQuery = normalizeSearchTerm(query);

  if (!normalizedQuery) {
    return cards.slice(0, limit).map((card, index) => ({
      id: card.id,
      label: card.name,
      hint: buildCardSearchLabel(card),
      query: card.name,
      kind: "card",
      score: 100 - index,
    }));
  }

  return createCardSearchSuggestions(normalizedQuery, cards, limit);
}

export function createSearchHint(query: string): string {
  const normalizedQuery = normalizeSearchTerm(query);

  if (!normalizedQuery) {
    return "카드명, 카드 번호, 세트명을 입력해 검색해 보세요.";
  }

  return `"${query}" 기준으로 카드와 거래 흐름을 정리했습니다.`;
}
