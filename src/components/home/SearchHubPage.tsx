import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";
import { SEARCH_FILTER_CHIPS, createHomepageSearchSuggestions } from "@/features/search";
import { HOME_CARD_FIXTURES, normalizeSearchTerm, scoreCardMatch } from "@/lib";

import { HomeSearchBar } from "./HomeSearchBar";
import { formatWon } from "./home-data";
import { HomeChip } from "./home-ui";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

type SearchHubPageProps = {
  query?: string;
};

export function SearchHubPage({ query = "" }: SearchHubPageProps) {
  const normalizedQuery = normalizeSearchTerm(query);
  const suggestions = createHomepageSearchSuggestions(query);
  const results = (normalizedQuery
    ? HOME_CARD_FIXTURES
        .map((card) => ({
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
      eyebrow="검색"
      title={normalizedQuery ? `"${query}" 검색 결과` : "검색 허브"}
      description={
        normalizedQuery
          ? "카드명과 세트, 카드번호 기준으로 맞는 후보를 먼저 정리했습니다."
          : "홈에서 바로 내려가지 않고, 검색은 전용 페이지에서 계속 진행합니다."
      }
      actions={
        <>
          <SecondaryButton href="/discover">탐색 페이지</SecondaryButton>
          <PrimaryButton href="/search/advanced">고급 탐색</PrimaryButton>
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
        </div>
      }
    >
      <HomeSearchBar initialQuery={query} />

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>추천 검색</div>
          <h2 className={styles.sectionTitle}>바로 이어서 볼 수 있는 후보</h2>
        </div>
        <div className={styles.infoGrid}>
          {suggestions.slice(0, 4).map((suggestion) => (
            <CardPanel
              key={suggestion.id}
              className={styles.infoCard}
              interactive
              href={`/search?q=${encodeURIComponent(suggestion.query)}`}
            >
              <div className={styles.infoLabel}>{suggestion.kind}</div>
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
                  {card.inspectable ? "검수 가능" : "일반 카드"}
                </StatusBadge>
              </div>
              <div className={styles.resultMeta}>
                <span>{formatWon(card.currentPrice)}원</span>
                <span>최근 거래 {card.transactionCount}건</span>
                <span>평점 {card.sellerRating.toFixed(1)}</span>
              </div>
            </CardPanel>
          ))}
        </div>
      </section>
    </PageScaffold>
  );
}

