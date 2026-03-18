import type {
  CatalogConditionKey,
  CatalogFormatKey,
  CatalogGameKey,
  CatalogLanguageKey,
  CatalogPurposeKey,
} from './constants/catalog';

export type PriceTrendDirection = 'up' | 'down' | 'flat';

export type HomeCardItem = {
  id: string;
  game: Exclude<CatalogGameKey, 'all'>;
  name: string;
  setName: string;
  cardNumber: string;
  language: CatalogLanguageKey;
  rarity: string;
  imageUrl: string;
  currentPrice: number;
  recentTradePrice: number;
  priceChangePercent: number;
  transactionCount: number;
  badges: readonly string[];
  purpose: CatalogPurposeKey;
  format: CatalogFormatKey;
  condition: CatalogConditionKey;
  safePay: boolean;
  inspectable: boolean;
  sellerRating: number;
  gradingCompany?: string;
  gradeScore?: number;
};

export type DiscoverySectionKey = 'popular' | 'beginner' | 'inspection';

export type DiscoverySection = {
  key: DiscoverySectionKey;
  title: string;
  description: string;
  items: readonly HomeCardItem[];
};

export type MarketSnapshotItem = {
  id: string;
  game: Exclude<CatalogGameKey, 'all'>;
  name: string;
  setName: string;
  cardNumber: string;
  currentPrice: number;
  recentTradePrice: number;
  priceChangePercent: number;
  transactionCount: number;
  direction: PriceTrendDirection;
  badges: readonly string[];
};

export type SearchShortcutKey = 'popular' | 'recent' | 'photo';

export type SearchShortcut = {
  key: SearchShortcutKey;
  label: string;
  query: string;
  description: string;
};

export type SearchSuggestionKind = 'shortcut' | 'card' | 'filter';

export type SearchSuggestion = {
  id: string;
  label: string;
  hint: string;
  query: string;
  kind: SearchSuggestionKind;
  score: number;
};

export type SearchFilterChip = {
  key: string;
  label: string;
  value: string;
  tone: 'neutral' | 'brand';
};

