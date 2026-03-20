import Image from "next/image";

import styles from "./home.module.css";

import { featuredListings, formatWon, heroSignals, heroSpotlight } from "./home-data";
import { HomeButton, HomeStatusBadge } from "./home-ui";

export function HeroSection() {
  return (
    <section className={styles.heroPanel}>
      <div className={styles.heroSplit}>
        <div className={styles.heroCopy}>
          <div className={styles.heroBadge}>검색이 먼저 보이는 카드 거래 홈</div>
          <h1 className={styles.heroTitle}>
            카드 검색, 실거래 시세, 안전거래 기준을 한 흐름으로 정리했습니다.
          </h1>
          <p className={styles.heroDescription}>
            번개장터처럼 바로 찾고, KREAM처럼 가격과 정책을 읽고, 당근처럼 부담 없이
            시작하는 카드 거래 인터페이스를 목표로 잡았습니다.
          </p>
          <div className={styles.heroCtas}>
            <HomeButton variant="primary" href="/search">
              카드 검색 시작
            </HomeButton>
            <HomeButton variant="secondary" href="/sell/start">
              판매 준비 보기
            </HomeButton>
          </div>
          <div className={styles.heroHighlights}>
            <div className={styles.heroHighlight}>
              <strong>홈의 첫 행동은 검색</strong>
              <span>카드명, 카드번호, 세트명으로 바로 찾고, 필요하면 상세 검색으로 이동합니다.</span>
            </div>
            <div className={styles.heroHighlight}>
              <strong>시세는 최근 거래 기준</strong>
              <span>호가보다 최근 체결 흐름과 거래 건수를 먼저 보여줘 판단을 빠르게 돕습니다.</span>
            </div>
            <div className={styles.heroHighlight}>
              <strong>포켓몬 자산은 공식 출처만</strong>
              <span>포켓몬 비주얼은 공식 사이트 기준으로만 운영하고, 비공식 이미지 사용을 막습니다.</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroSpotlight}>
            <div className={styles.heroSpotlightArt}>
              <Image
                className={styles.cardArtImage}
                src={heroSpotlight.imageUrl}
                alt=""
                width={320}
                height={420}
                priority
              />
            </div>
            <div className={styles.heroSpotlightBody}>
              <div className={styles.heroSpotlightTop}>
                <HomeStatusBadge tone="brand">공식 자산 기준 시안</HomeStatusBadge>
                <HomeStatusBadge tone="positive">검수 가능</HomeStatusBadge>
              </div>
              <div>
                <h2 className={styles.heroSpotlightTitle}>{heroSpotlight.name}</h2>
                <p className={styles.heroSpotlightMeta}>
                  {heroSpotlight.setName} · {heroSpotlight.cardNumber}
                </p>
              </div>
              <div className={styles.heroSpotlightPrice}>{formatWon(heroSpotlight.currentPrice)}</div>
              <p className={styles.heroSpotlightNote}>
                최근 거래 {heroSpotlight.transactionCount}건 · 안전결제 노출 기준 포함
              </p>
            </div>
          </div>

          <div className={styles.heroSignalGrid}>
            {heroSignals.map((signal) => (
              <div key={signal.label} className={styles.heroSignalCard}>
                <HomeStatusBadge tone={signal.tone}>{signal.label}</HomeStatusBadge>
                <div className={styles.heroSignalValue}>{signal.value}</div>
              </div>
            ))}
          </div>

          <div className={styles.heroFeatureList}>
            {featuredListings.slice(0, 2).map((item) => (
              <a key={item.id} className={styles.heroFeatureRow} href={item.href}>
                <div>
                  <div className={styles.heroFeatureTitle}>{item.title}</div>
                  <div className={styles.heroFeatureMeta}>{item.hint}</div>
                </div>
                <div className={styles.heroFeaturePrice}>{formatWon(item.price)}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
