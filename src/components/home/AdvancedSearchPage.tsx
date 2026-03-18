import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";
import { CATALOG_DETAIL_FILTERS, CATALOG_SORT_OPTIONS } from "@/features/catalog/taxonomy";

import { DeepSearchPreview } from "./DeepSearchPreview";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function AdvancedSearchPage() {
  return (
    <PageScaffold
      eyebrow="고급 탐색"
      title="상세 필터는 홈이 아니라 별도 페이지에서 엽니다"
      description="세트, 카드번호, 언어, 레어도처럼 깊은 조건은 처음 화면에서 숨기고 여기서 단계적으로 제공합니다."
      actions={
        <>
          <SecondaryButton href="/search">기본 검색</SecondaryButton>
          <PrimaryButton href="/discover">탐색 허브</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">상세 기준</StatusBadge>
          <p className={styles.infoText}>
            입문자에게는 가볍게, 숙련자에게는 정확하게 보이도록 필터를 구분합니다.
          </p>
        </div>
      }
    >
      <DeepSearchPreview />

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>상세 필터</div>
          <h2 className={styles.sectionTitle}>카드를 더 좁히는 기준</h2>
        </div>
        <div className={styles.filterGrid}>
          {CATALOG_DETAIL_FILTERS.map((filter) => (
            <CardPanel key={filter.key} className={styles.infoCard}>
              <div className={styles.infoLabel}>{filter.label}</div>
              <p className={styles.infoText}>{filter.description}</p>
            </CardPanel>
          ))}
        </div>
      </section>

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>정렬</div>
          <h2 className={styles.sectionTitle}>탐색 후 정리 방식</h2>
        </div>
        <div className={styles.infoGrid}>
          {CATALOG_SORT_OPTIONS.map((option) => (
            <CardPanel key={option.key} className={styles.infoCard}>
              <div className={styles.infoLabel}>{option.label}</div>
              <p className={styles.infoText}>{option.description}</p>
            </CardPanel>
          ))}
        </div>
      </section>
    </PageScaffold>
  );
}

