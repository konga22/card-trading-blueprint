import { CATALOG_GAME_FILTERS, CATALOG_PURPOSE_FILTERS } from '../catalog/taxonomy';
import { HOME_CARD_FIXTURES } from '../../lib/mocks/home';
import type { HomeCardItem, SearchFilterChip, SearchShortcut, SearchSuggestion } from '../../lib/types';
import { buildCardSearchLabel, createCardSearchSuggestions, normalizeSearchTerm } from '../../lib/utils/search';

export const SEARCH_SHORTCUTS: readonly SearchShortcut[] = [
  {
    key: 'popular',
    label: '인기 검색',
    query: '피카츄',
    description: '많이 찾는 카드부터 빠르게 확인해요',
  },
  {
    key: 'recent',
    label: '최근 검색',
    query: '리자몽 ex',
    description: '최근 본 카드로 다시 돌아가요',
  },
  {
    key: 'photo',
    label: '사진으로 찾기',
    query: 'photo-search',
    description: '이미지 검색 진입점을 노출해요',
  },
];

export const SEARCH_FILTER_CHIPS: readonly SearchFilterChip[] = [
  ...CATALOG_GAME_FILTERS.map((filter) => ({
    key: `game:${filter.key}`,
    label: filter.label,
    value: filter.key,
    tone: filter.key === 'all' ? ('brand' as const) : ('neutral' as const),
  })),
  ...CATALOG_PURPOSE_FILTERS.slice(0, 2).map((filter) => ({
    key: `purpose:${filter.key}`,
    label: filter.label,
    value: filter.key,
    tone: 'neutral' as const,
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
      kind: 'card',
      score: 100 - index,
    }));
  }

  return createCardSearchSuggestions(normalizedQuery, cards, limit);
}

export function createSearchHint(query: string): string {
  const normalizedQuery = normalizeSearchTerm(query);

  if (!normalizedQuery) {
    return '카드명, 카드번호, 세트를 검색해보세요';
  }

  return `${normalizedQuery}에 대한 검색 결과`;
}
