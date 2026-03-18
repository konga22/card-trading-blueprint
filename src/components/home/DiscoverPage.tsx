import { PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { DiscoverySection } from "./DiscoverySection";
import { HomeSearchBar } from "./HomeSearchBar";
import { TrustStrip } from "./TrustStrip";
import { discoverySections, gameTabs } from "./home-data";
import { HomeChip } from "./home-ui";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function DiscoverPage() {
  return (
    <PageScaffold
      eyebrow="탐색 허브"
      title="카드를 더 분명하게 좁혀보세요"
      description="인기 카드, 입문 추천, 검수 가능한 카드까지 카테고리별로 나눠서 살펴볼 수 있습니다."
      actions={
        <>
          <SecondaryButton href="/search">통합 검색</SecondaryButton>
          <PrimaryButton href="/search/advanced">고급 탐색</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">기본 분류</StatusBadge>
          <div className={styles.chipRow}>
            {gameTabs.map((tab, index) => (
              <HomeChip
                key={tab.key}
                active={index === 0}
                href={`/search?q=${encodeURIComponent(tab.label)}`}
              >
                {tab.label}
              </HomeChip>
            ))}
          </div>
          <p className={styles.infoText}>
            홈보다 더 넓게 보되, 처음부터 모든 상세 필터를 펼치지 않는 구조를 유지했습니다.
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

