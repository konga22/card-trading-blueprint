import { PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { BeginnerJourney } from "./BeginnerJourney";
import { DiscoverySection } from "./DiscoverySection";
import { TrustStrip } from "./TrustStrip";
import { discoverySections } from "./home-data";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function BeginnerPage() {
  const starterSection = discoverySections.find((section) => section.key === "beginner");

  return (
    <PageScaffold
      eyebrow="입문 전용"
      title="처음 거래할 때 필요한 화면만 따로 모았습니다"
      description="무엇을 먼저 눌러야 하는지, 가격과 상태를 어떤 순서로 봐야 하는지 한 페이지 안에서 짧게 정리했습니다."
      actions={
        <>
          <SecondaryButton href="/discover">인기 카드 보기</SecondaryButton>
          <PrimaryButton href="/market">시세 먼저 보기</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="positive">입문 순서</StatusBadge>
          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>1단계</div>
              <div className={styles.metricValue}>탐색</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>2단계</div>
              <div className={styles.metricValue}>시세</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>3단계</div>
              <div className={styles.metricValue}>거래</div>
            </div>
          </div>
        </div>
      }
    >
      <BeginnerJourney />
      {starterSection ? <DiscoverySection section={starterSection} /> : null}
      <TrustStrip />
    </PageScaffold>
  );
}
