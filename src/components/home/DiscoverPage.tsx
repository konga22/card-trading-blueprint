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
      title="게임별 탐색, 입문 흐름, 안전거래 기준을 한 번에 훑는 탐색 허브"
      description="홈보다 조금 더 넓게 보여주되, 여전히 빠른 선택이 먼저 보이도록 구성한 탐색 페이지입니다."
      actions={
        <>
          <SecondaryButton href="/search">통합 검색으로 이동</SecondaryButton>
          <PrimaryButton href="/search/advanced">상세 검색 열기</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="brand">빠른 필터</StatusBadge>
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
            이 페이지는 카탈로그를 전부 쏟아놓는 대신, 게임과 거래 문맥을 먼저 고르게 만드는
            탐색용 허브입니다.
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
