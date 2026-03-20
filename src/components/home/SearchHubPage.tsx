import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";
import {
  createHomepageSearchSuggestions,
  createSearchHint,
  SEARCH_FILTER_CHIPS,
} from "@/features/search";
import { HOME_CARD_FIXTURES, normalizeSearchTerm, scoreCardMatch } from "@/lib";

import { formatWon } from "./home-data";
import { HomeSearchBar } from "./HomeSearchBar";
import { HomeChip } from "./home-ui";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

type SearchHubPageProps = {
  query?: string;
};

function getSuggestionKindLabel(kind: string) {
  if (kind === "shortcut") return "바로가기";
  if (kind === "filter") return "필터";
  return "카드";
}

export function SearchHubPage({ query = "" }: SearchHubPageProps) {
  const normalizedQuery = normalizeSearchTerm(query);
  const suggestions = createHomepageSearchSuggestions(query);
  const results = (
    normalizedQuery
      ? HOME_CARD_FIXTURES.map((card) => ({
          card,
          score: scoreCardMatch(normalizedQuery, card),
        }))
          .filter((entry) => entry.score > 0)
          .sort((left, right) => right.score - left.score)
          .map((entry) => entry.card)
      : HOME_CARD_FIXTURES.slice(0, 6)
  ).slice(0, 6);

  return (
    <PageScaffold
      eyebrow="Search"
      title={normalizedQuery ? `"${query}" 검색 결과` : "카드 검색을 시작하는 허브"}
      description={createSearchHint(query)}
      actions={
        <>
          <SecondaryButton href="/discover">탐색 보기</SecondaryButton>
          <PrimaryButton href="/search/advanced">상세 검색 열기</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">빠른 필터</StatusBadge>
          <div className={styles.chipRow}>
            {SEARCH_FILTER_CHIPS.map((chip) => (
              <HomeChip
                key={chip.key}
                active={chip.tone === "brand"}
                href={`/search?q=${encodeURIComponent(chip.label)}`}
              >
                {chip.label}
              </HomeChip>
            ))}
          </div>
          <p className={styles.infoText}>
            검색 허브는 빠른 추천, 필터 진입, 결과 확인을 한 화면에서 이어주는 역할을 합니다.
          </p>
        </div>
      }
    >
      <HomeSearchBar initialQuery={query} />

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>추천 검색</div>
          <h2 className={styles.sectionTitle}>바로 이어서 볼 수 있는 카드와 필터</h2>
        </div>
        <div className={styles.infoGrid}>
          {suggestions.slice(0, 4).map((suggestion) => (
            <CardPanel
              key={suggestion.id}
              className={styles.infoCard}
              interactive
              href={`/search?q=${encodeURIComponent(suggestion.query)}`}
            >
              <div className={styles.infoLabel}>{getSuggestionKindLabel(suggestion.kind)}</div>
              <h3 className={styles.infoTitle}>{suggestion.label}</h3>
              <p className={styles.infoText}>{suggestion.hint}</p>
            </CardPanel>
          ))}
        </div>
      </section>

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>검색 결과</div>
          <h2 className={styles.sectionTitle}>조건에 맞는 카드</h2>
        </div>
        {results.length ? (
          <div className={styles.resultsGrid}>
            {results.map((card) => (
              <CardPanel key={card.id} className={styles.infoCard}>
                <div className={styles.cardRow}>
                  <div>
                    <h3 className={styles.resultTitle}>{card.name}</h3>
                    <p className={styles.resultHint}>
                      {card.setName} · {card.cardNumber}
                    </p>
                  </div>
                  <StatusBadge tone={card.inspectable ? "positive" : "neutral"}>
                    {card.inspectable ? "검수 가능" : "기본 거래"}
                  </StatusBadge>
                </div>
                <div className={styles.resultMeta}>
                  <span>{formatWon(card.currentPrice)}</span>
                  <span>최근 거래 {card.transactionCount}건</span>
                  <span>평점 {card.sellerRating.toFixed(1)}</span>
                </div>
              </CardPanel>
            ))}
          </div>
        ) : (
          <CardPanel className={styles.infoCard}>
            <div className={styles.infoLabel}>검색 결과 없음</div>
            <h3 className={styles.infoTitle}>다른 조합으로 다시 찾아보세요</h3>
            <p className={styles.infoText}>
              카드번호, 세트명, 언어, 상태 중 하나를 바꿔 검색하면 결과를 더 정확하게 좁힐 수 있습니다.
            </p>
          </CardPanel>
        )}
      </section>
    </PageScaffold>
  );
}
