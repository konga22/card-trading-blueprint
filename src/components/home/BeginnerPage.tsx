import { PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { BeginnerJourney } from "./BeginnerJourney";
import { discoverySections } from "./home-data";
import { DiscoverySection } from "./DiscoverySection";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";
import { TrustStrip } from "./TrustStrip";

export function BeginnerPage() {
  const starterSection = discoverySections.find((section) => section.key === "beginner");

  return (
    <PageScaffold
      eyebrow="Beginner"
      title="처음 거래할 때 필요한 정보만 골라 모은 입문 가이드"
      description="무엇부터 봐야 하는지, 가격과 상태를 어떤 순서로 읽어야 하는지, 신뢰 신호는 무엇인지 이 페이지에서 먼저 정리합니다."
      actions={
        <>
          <SecondaryButton href="/discover">게임별 카드 보기</SecondaryButton>
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
              <div className={styles.metricValue}>신뢰 확인</div>
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
