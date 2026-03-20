import { PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { discoverySections, gameTabs } from "./home-data";
import { DiscoverySection } from "./DiscoverySection";
import { HomeSearchBar } from "./HomeSearchBar";
import { HomeChip } from "./home-ui";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";
import { TrustStrip } from "./TrustStrip";

export function DiscoverPage() {
  return (
    <PageScaffold
      eyebrow="탐색 허브"
      title="게임별 카드 흐름을 먼저 보고 원하는 방향으로 좁혀갑니다."
      description="인기 카드, 입문 카드, 신뢰 신호가 중요한 카드를 섹션별로 나눠서 빠르게 훑을 수 있게 구성했습니다."
      actions={
        <>
          <SecondaryButton href="/search">통합 검색</SecondaryButton>
          <PrimaryButton href="/search/advanced">고급 검색</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">기본 카테고리</StatusBadge>
          <div className={styles.chipRow}>
            {gameTabs.map((tab, index) => (
              <HomeChip key={tab.key} active={index === 0} href={`/search?q=${encodeURIComponent(tab.label)}`}>
                {tab.label}
              </HomeChip>
            ))}
          </div>
          <p className={styles.infoText}>
            홈에서는 흐름을 잡고, 이 화면에서는 게임별 카드와 입문 묶음을 더 선명하게 확인합니다.
          </p>
        </div>
      }
    >
      <HomeSearchBar />
      {discoverySections.map((section) => (
        <DiscoverySection key={section.key} section={section} />
      ))}
      <TrustStrip />
    </PageScaffold>
  );
}
