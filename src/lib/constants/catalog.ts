export const CATALOG_GAME_KEYS = [
  "all",
  "pokemon",
  "yugioh",
  "onepiece",
  "other",
] as const;
export type CatalogGameKey = (typeof CATALOG_GAME_KEYS)[number];

export const CATALOG_PURPOSE_KEYS = [
  "beginner",
  "collection",
  "play",
  "rare",
] as const;
export type CatalogPurposeKey = (typeof CATALOG_PURPOSE_KEYS)[number];

export const CATALOG_FORMAT_KEYS = ["single", "graded", "set", "box"] as const;
export type CatalogFormatKey = (typeof CATALOG_FORMAT_KEYS)[number];

export const CATALOG_CONDITION_KEYS = [
  "mint",
  "near_mint",
  "good",
  "graded",
] as const;
export type CatalogConditionKey = (typeof CATALOG_CONDITION_KEYS)[number];

export const CATALOG_LANGUAGE_KEYS = ["ko", "en", "jp", "multi"] as const;
export type CatalogLanguageKey = (typeof CATALOG_LANGUAGE_KEYS)[number];

export const CATALOG_SORT_KEYS = [
  "popular",
  "latest",
  "low_price",
  "high_price",
  "recent_trade",
] as const;
export type CatalogSortKey = (typeof CATALOG_SORT_KEYS)[number];

export const CATALOG_GAME_LABELS: Record<CatalogGameKey, string> = {
  all: "전체",
  pokemon: "포켓몬",
  yugioh: "유희왕",
  onepiece: "원피스",
  other: "기타",
};

export const CATALOG_PURPOSE_LABELS: Record<CatalogPurposeKey, string> = {
  beginner: "입문",
  collection: "수집",
  play: "플레이",
  rare: "희소 카드",
};

export const CATALOG_FORMAT_LABELS: Record<CatalogFormatKey, string> = {
  single: "싱글 카드",
  graded: "그레이딩 카드",
  set: "세트",
  box: "박스",
};

export const CATALOG_CONDITION_LABELS: Record<CatalogConditionKey, string> = {
  mint: "민트급",
  near_mint: "니어 민트",
  good: "사용감 있음",
  graded: "그레이딩",
};

export const CATALOG_LANGUAGE_LABELS: Record<CatalogLanguageKey, string> = {
  ko: "한국어",
  en: "영어",
  jp: "일본어",
  multi: "다국어",
};

export const CATALOG_SORT_LABELS: Record<CatalogSortKey, string> = {
  popular: "인기순",
  latest: "최신순",
  low_price: "낮은 가격순",
  high_price: "높은 가격순",
  recent_trade: "최근 거래순",
};
