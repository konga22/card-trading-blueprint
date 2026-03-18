"use client";

import { useState } from "react";

import { HomeButton } from "./home-ui";
import { landingVariants, type LandingVariantKey } from "./landing-variants";
import styles from "./home.module.css";

const variantOrder: LandingVariantKey[] = [
  "professional",
  "creative",
  "minimalist",
];

export function HomePage() {
  const [activeVariant, setActiveVariant] =
    useState<LandingVariantKey>("professional");

  const variant = landingVariants[activeVariant];

  return (
    <div
      className={`${styles.landingRoot} ${
        activeVariant === "professional"
          ? styles.themeProfessional
          : activeVariant === "creative"
            ? styles.themeCreative
            : styles.themeMinimalist
      }`}
    >
      <main className={styles.landingMain}>
        <section className={styles.variantBar}>
          <div className={styles.variantBarCopy}>
            <p className={styles.variantLabel}>메인 랜딩 비교</p>
            <h1 className={styles.variantTitle}>카드 거래 랜딩 3안 비교</h1>
            <p className={styles.variantDescription}>
              메타몽 계열 컬러를 기준으로, 같은 콘텐츠를 세 가지 서로 다른
              스타일로 전환해 바로 비교할 수 있게 만들었습니다.
            </p>
          </div>

          <div
            className={styles.variantButtons}
            role="group"
            aria-label="랜딩 스타일 선택"
          >
            {variantOrder.map((key) => (
              <button
                key={key}
                type="button"
                className={`${styles.variantButton} ${
                  activeVariant === key ? styles.variantButtonActive : ""
                }`}
                aria-pressed={activeVariant === key}
                onClick={() => setActiveVariant(key)}
              >
                {landingVariants[key].label}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.landingHero}>
          <div className={styles.landingCopy}>
            <div className={styles.landingEyebrow}>{variant.eyebrow}</div>
            <h2 className={styles.landingHeadline}>{variant.title}</h2>
            <p className={styles.landingDescription}>{variant.description}</p>

            <div className={styles.landingCtas}>
              <HomeButton variant="primary" href="/discover">
                {variant.ctaPrimary}
              </HomeButton>
              <HomeButton variant="secondary" href="/market">
                {variant.ctaSecondary}
              </HomeButton>
            </div>
          </div>

          <div className={styles.dashboardMock}>
            <div className={styles.dashboardHeroCard}>
              <div className={styles.dashboardHeader}>
                <div>
                  <p className={styles.dashboardOverline}>
                    {variant.dashboardTitle}
                  </p>
                  <h3 className={styles.dashboardTitle}>
                    {variant.dashboardDescription}
                  </h3>
                </div>
                <span className={styles.dashboardBadge}>Ditto Theme</span>
              </div>

              <div className={styles.dashboardMetrics}>
                {variant.metrics.map((metric) => (
                  <div key={metric.label} className={styles.dashboardMetric}>
                    <span className={styles.dashboardMetricLabel}>
                      {metric.label}
                    </span>
                    <strong className={styles.dashboardMetricValue}>
                      {metric.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.dashboardGrid}>
              <div className={styles.dashboardRail}>
                {variant.activities.map((activity) => (
                  <div
                    key={activity.title}
                    className={`${styles.dashboardActivity} ${
                      activity.tone === "brand"
                        ? styles.dashboardActivityBrand
                        : activity.tone === "soft"
                          ? styles.dashboardActivitySoft
                          : styles.dashboardActivityNeutral
                    }`}
                  >
                    <span className={styles.dashboardActivityTitle}>
                      {activity.title}
                    </span>
                    <span className={styles.dashboardActivityMeta}>
                      {activity.meta}
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.dashboardPreview}>
                <div className={styles.dashboardPriceRow}>
                  <span className={styles.dashboardPriceLabel}>
                    최근 거래 구간
                  </span>
                  <strong className={styles.dashboardPriceValue}>
                    298,000원
                  </strong>
                </div>

                <div className={styles.dashboardBars}>
                  <span className={styles.dashboardBarShort} />
                  <span className={styles.dashboardBarTall} />
                  <span className={styles.dashboardBarMid} />
                  <span className={styles.dashboardBarTall} />
                  <span className={styles.dashboardBarShort} />
                </div>

                <div className={styles.dashboardFooterRow}>
                  <span>검수 가능</span>
                  <span>안전결제</span>
                  <span>응답 9분</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.landingSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionIntroLabel}>{variant.storyTitle}</p>
            <h3 className={styles.sectionIntroTitle}>플랫폼처럼 보이게 하는 핵심 구조</h3>
            <p className={styles.sectionIntroBody}>
              {variant.storyDescription}
            </p>
          </div>

          <div className={styles.storyGrid}>
            {variant.storyCards.map((card) => (
              <article key={card.title} className={styles.storyCard}>
                <span className={styles.storyStat}>{card.stat}</span>
                <h4 className={styles.storyTitle}>{card.title}</h4>
                <p className={styles.storyBody}>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.landingShowcase}>
          <article className={styles.showcaseFeature}>
            <p className={styles.showcaseLabel}>{variant.insightTitle}</p>
            <h3 className={styles.showcaseTitle}>대시보드로 신뢰를 먼저 만듭니다</h3>
            <p className={styles.showcaseBody}>{variant.insightBody}</p>
          </article>

          <article className={styles.showcaseList}>
            {variant.insightPoints.map((point) => (
              <div key={point} className={styles.showcaseItem}>
                {point}
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
