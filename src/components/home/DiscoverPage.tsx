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
      eyebrow="Discover"
      title="게임별 흐름을 먼저 고르고, 그다음 검색으로 깊게 들어가는 탐색 허브"
      description="포켓몬, 유희왕, 원피스처럼 게임 기준으로 먼저 범위를 좁히고, 입문용과 거래 활발 카드부터 빠르게 확인합니다."
      actions={
        <>
          <SecondaryButton href="/search">통합 검색</SecondaryButton>
          <PrimaryButton href="/search/advanced">상세 검색</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">게임 필터</StatusBadge>
          <div className={styles.chipRow}>
            {gameTabs.map((tab, index) => (
              <HomeChip key={tab.key} active={index === 0} href={`/search?q=${encodeURIComponent(tab.label)}`}>
                {tab.label}
              </HomeChip>
            ))}
          </div>
          <p className={styles.infoText}>
            이 페이지는 넓게 훑어보는 공간입니다. 더 정확한 카드번호나 세트 기준 검색은
            검색 화면으로 넘깁니다.
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
