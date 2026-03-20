import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";
import { CATALOG_DETAIL_FILTERS, CATALOG_SORT_OPTIONS } from "@/features/catalog/taxonomy";

import { DeepSearchPreview } from "./DeepSearchPreview";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function AdvancedSearchPage() {
  return (
    <PageScaffold
      eyebrow="Advanced search"
      title="카드번호, 세트, 언어, 상태를 조합해 원하는 카드만 정밀하게 찾기"
      description="홈과 기본 검색에서 방향을 잡고, 이 화면에서는 여러 조건을 조합해 결과를 차분하게 좁혀 갑니다."
      actions={
        <>
          <SecondaryButton href="/search">기본 검색으로 이동</SecondaryButton>
          <PrimaryButton href="/discover">탐색 허브 보기</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">정밀 검색</StatusBadge>
          <p className={styles.infoText}>
            입문자에게 과하게 보이지 않도록 조건은 그룹으로 나누고, 숙련자는 필요한 조합을 빠르게 고를
            수 있게 하는 것이 목표입니다.
          </p>
        </div>
      }
    >
      <DeepSearchPreview />

      <section className={styles.routePanel}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>상세 필터</div>
          <h2 className={styles.sectionTitle}>결과를 정밀하게 좁히는 조건</h2>
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
          <div className={styles.eyebrow}>정렬 기준</div>
          <h2 className={styles.sectionTitle}>어떤 우선순위로 결과를 읽을지 정하기</h2>
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
