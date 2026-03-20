import Image from "next/image";

import styles from "./home.module.css";

import { featuredListings, formatWon, heroPokemonVisuals, heroProofItems } from "./home-data";
import { HomeButton, HomeStatusBadge } from "./home-ui";

export function HeroSection() {
  const spotlight = heroPokemonVisuals[0];
  const secondaryVisuals = heroPokemonVisuals.slice(1);
  const spotlightListing = featuredListings[0];

  return (
    <section className={styles.heroPanel}>
      <div className={styles.heroMain}>
        <div className={styles.heroBadge}>Card Trading Desk</div>
        <h1 className={styles.heroTitle}>
          카드 거래 홈은 팬페이지가 아니라 거래 입구처럼 보여야 합니다.
        </h1>
        <p className={styles.heroDescription}>
          검색으로 바로 들어가고, 대표 카드에서 가격과 신뢰 정보를 한눈에 읽고, 필요하면 시세와 판매 준비로 곧장 이동하는 구조로 다시 잡았습니다.
        </p>
        <div className={styles.heroCtas}>
          <HomeButton variant="primary" href="/search">
            카드 검색 시작
          </HomeButton>
          <HomeButton variant="secondary" href="/sell/start">
            판매 준비 보기
          </HomeButton>
        </div>
        <p className={styles.heroMeta}>
          번개장터의 검색성 · KREAM의 가격 위계 · 당근의 안심 톤
        </p>
        <div className={styles.heroProofGrid}>
          {heroProofItems.map((item) => (
            <div key={item.label} className={styles.heroProofCard}>
              <HomeStatusBadge tone="brand">{item.label}</HomeStatusBadge>
              <div className={styles.heroProofValue}>{item.value}</div>
              <p className={styles.heroProofNote}>{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroSpotlight}>
        <div className={styles.heroSpotlightMedia}>
          <Image
            className={styles.heroSpotlightImage}
            src={spotlight.imageUrl}
            alt={spotlight.title}
            width={420}
            height={560}
            priority
          />
        </div>
        <div className={styles.heroSpotlightBody}>
          <div className={styles.heroSpotlightTop}>
            <HomeStatusBadge tone="brand">공식 포켓몬 카드</HomeStatusBadge>
            <HomeStatusBadge tone="positive">검수 가능</HomeStatusBadge>
          </div>
          <div className={styles.heroSpotlightCopy}>
            <h2 className={styles.heroSpotlightTitle}>{spotlightListing.title}</h2>
            <p className={styles.heroSpotlightMeta}>{spotlightListing.hint}</p>
          </div>
          <div className={styles.heroSpotlightPrice}>{formatWon(spotlightListing.price)}</div>
          <p className={styles.heroSpotlightSupport}>{spotlightListing.support}</p>

          <div className={styles.heroMiniList}>
            {secondaryVisuals.map((visual, index) => {
              const listing = featuredListings[index + 1];

              return (
                <div key={visual.id} className={styles.heroMiniRow}>
                  <div className={styles.heroMiniThumb}>
                    <Image
                      className={styles.heroMiniImage}
                      src={visual.imageUrl}
                      alt={visual.title}
                      width={88}
                      height={120}
                    />
                  </div>
                  <div className={styles.heroMiniCopy}>
                    <div className={styles.heroVisualLabel}>{visual.label}</div>
                    <div className={styles.heroMiniTitle}>{listing?.title ?? visual.title}</div>
                    <div className={styles.heroMiniMeta}>{listing?.hint ?? visual.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
