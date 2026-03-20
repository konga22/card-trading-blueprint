import type { HomeCardItem, SearchSuggestion } from "../types";

export function normalizeSearchTerm(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, " ");
}

export function buildCardSearchLabel(card: Pick<HomeCardItem, "name" | "setName" | "cardNumber">): string {
  return [card.name, card.setName, card.cardNumber].join(" · ");
}

function scoreStringMatch(source: string, query: string): number {
  const normalizedSource = normalizeSearchTerm(source);
  const normalizedQuery = normalizeSearchTerm(query);

  if (!normalizedQuery) {
    return 0;
  }

  if (normalizedSource === normalizedQuery) {
    return 100;
  }

  if (normalizedSource.startsWith(normalizedQuery)) {
    return 90;
  }

  if (normalizedSource.includes(normalizedQuery)) {
    return 70;
  }

  return 0;
}

export function scoreCardMatch(query: string, card: HomeCardItem): number {
  const nameScore = scoreStringMatch(card.name, query);
  const setScore = scoreStringMatch(card.setName, query);
  const numberScore = scoreStringMatch(card.cardNumber, query);

  return Math.max(nameScore, setScore, numberScore);
}

export function createCardSearchSuggestions(
  query: string,
  cards: readonly HomeCardItem[],
  limit = 5,
): SearchSuggestion[] {
  const normalizedQuery = normalizeSearchTerm(query);

  return cards
    .map((card) => ({
      card,
      score: scoreCardMatch(normalizedQuery, card),
    }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ card, score }) => ({
      id: card.id,
      label: card.name,
      hint: buildCardSearchLabel(card),
      query: card.name,
      kind: "card",
      score,
    }));
}
