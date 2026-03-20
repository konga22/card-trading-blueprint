import {
  CATALOG_CONDITION_LABELS,
  CATALOG_FORMAT_KEYS,
  CATALOG_FORMAT_LABELS,
  CATALOG_GAME_KEYS,
  CATALOG_GAME_LABELS,
  CATALOG_PURPOSE_KEYS,
  CATALOG_PURPOSE_LABELS,
  CATALOG_SORT_KEYS,
  CATALOG_SORT_LABELS,
  type CatalogConditionKey,
  type CatalogFormatKey,
  type CatalogGameKey,
  type CatalogPurposeKey,
  type CatalogSortKey,
} from "../../lib/constants/catalog";

export type CatalogFilterOption<Key extends string> = {
  key: Key;
  label: string;
  description: string;
};

export const CATALOG_GAME_FILTERS: readonly CatalogFilterOption<CatalogGameKey>[] =
  CATALOG_GAME_KEYS.map((key) => ({
    key,
    label: CATALOG_GAME_LABELS[key],
    description:
      key === "all"
        ? "모든 카드 게임을 한 화면에서 비교합니다."
        : `${CATALOG_GAME_LABELS[key]} 카드만 따로 살펴봅니다.`,
  }));

export const CATALOG_PURPOSE_FILTERS: readonly CatalogFilterOption<CatalogPurposeKey>[] =
  CATALOG_PURPOSE_KEYS.map((key) => ({
    key,
    label: CATALOG_PURPOSE_LABELS[key],
    description:
      key === "beginner"
        ? "처음 시작하는 사용자를 위한 추천 카드 흐름입니다."
        : `${CATALOG_PURPOSE_LABELS[key]} 목적에 맞는 카드를 모아봅니다.`,
  }));

export const CATALOG_FORMAT_FILTERS: readonly CatalogFilterOption<CatalogFormatKey>[] =
  CATALOG_FORMAT_KEYS.map((key) => ({
    key,
    label: CATALOG_FORMAT_LABELS[key],
    description: `${CATALOG_FORMAT_LABELS[key]} 형식으로 결과를 좁힙니다.`,
  }));

export const CATALOG_DETAIL_FILTERS = [
  { key: "set", label: "세트", description: "출시 세트 기준으로 결과를 구분합니다." },
  { key: "cardNumber", label: "카드 번호", description: "정확한 카드 번호로 대상을 찾습니다." },
  { key: "language", label: "언어", description: "한국어, 영어, 일본어 등 언어별로 나눕니다." },
  { key: "rarity", label: "희귀도", description: "희귀도 기준으로 카드를 다시 정렬합니다." },
  { key: "edition", label: "에디션", description: "초판과 재판, 프로모 판본을 구분합니다." },
  { key: "holoType", label: "홀로 타입", description: "광택과 표면 처리 방식으로 필터링합니다." },
  { key: "condition", label: "상태", description: "미개봉급, 상태 좋음, 보통 등 상태를 고릅니다." },
  { key: "gradingCompany", label: "그레이드 회사", description: "PSA, BGS 같은 감정 회사를 선택합니다." },
  { key: "gradeScore", label: "그레이드 점수", description: "감정 점수 기준으로 카드를 비교합니다." },
] as const;

export const CATALOG_SORT_OPTIONS: readonly CatalogFilterOption<CatalogSortKey>[] =
  CATALOG_SORT_KEYS.map((key) => ({
    key,
    label: CATALOG_SORT_LABELS[key],
    description:
      key === "recent_trade"
        ? "최근 체결이 활발한 카드부터 보여줍니다."
        : `${CATALOG_SORT_LABELS[key]} 기준으로 결과를 정렬합니다.`,
  }));

export const CATALOG_HOMEPAGE_PRIMARY_FILTERS = [
  CATALOG_GAME_FILTERS[0],
  CATALOG_PURPOSE_FILTERS[0],
  CATALOG_FORMAT_FILTERS[0],
  CATALOG_DETAIL_FILTERS[6],
] as const;

export function getCatalogGameLabel(key: CatalogGameKey): string {
  return CATALOG_GAME_LABELS[key];
}

export function getCatalogPurposeLabel(key: CatalogPurposeKey): string {
  return CATALOG_PURPOSE_LABELS[key];
}

export function getCatalogFormatLabel(key: CatalogFormatKey): string {
  return CATALOG_FORMAT_LABELS[key];
}

export function getCatalogConditionLabel(key: CatalogConditionKey): string {
  return CATALOG_CONDITION_LABELS[key];
}
