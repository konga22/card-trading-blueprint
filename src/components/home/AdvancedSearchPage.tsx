import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";
import { CATALOG_DETAIL_FILTERS, CATALOG_SORT_OPTIONS } from "@/features/catalog/taxonomy";

import { DeepSearchPreview } from "./DeepSearchPreview";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function AdvancedSearchPage() {
  return (
    <PageScaffold
      eyebrow="Advanced Search"
      title="필요한 순간에만 깊게 들어가는 상세 검색"
      description="세트, 카드번호, 언어, 상태, 그레이딩 점수처럼 홈 검색만으로 부족한 조건을 차분하게 좁혀갑니다."
      actions={
        <>
          <SecondaryButton href="/search">기본 검색</SecondaryButton>
          <PrimaryButton href="/discover">탐색 허브</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">정밀 검색</StatusBadge>
          <p className={styles.infoText}>
            입문자에게는 과하지 않게, 숙련 사용자에게는 충분히 정교하게 보이도록 조건을
            단계별로 나눴습니다.
          </p>
        </div>
      }
    >
      <DeepSearchPreview />

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>상세 필터</div>
          <h2 className={styles.sectionTitle}>찾고 싶은 카드만 남기는 조건</h2>
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
          <div className={styles.eyebrow}>정렬 방식</div>
          <h2 className={styles.sectionTitle}>검색 결과를 읽는 우선순위</h2>
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
