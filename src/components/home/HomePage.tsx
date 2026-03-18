"use client";

import Link from "next/link";
import { useState } from "react";

import { HomeButton } from "./home-ui";
import {
  landingVariants,
  type LandingVariant,
  type LandingVariantKey,
} from "./landing-variants";
import styles from "./home.module.css";

const variantOrder: LandingVariantKey[] = [
  "professional",
  "creative",
  "minimalist",
];

const quickSearches = [
  { label: "피카츄 VMAX", query: "피카츄 VMAX" },
  { label: "리자몽 ex SAR", query: "리자몽 ex SAR" },
  { label: "검수 가능 매물", query: "검수 가능" },
  { label: "최근 거래 순", query: "최근 거래" },
];

const proofItems = [
  { label: "검수 완료 거래", value: "12,840건" },
  { label: "응답 평균", value: "9분" },
  { label: "안전결제 사용률", value: "91%" },
  { label: "찜 등록 카드", value: "2.7k" },
];

const themeClassName: Record<LandingVariantKey, string> = {
  professional: styles.themeProfessional,
  creative: styles.themeCreative,
  minimalist: styles.themeMinimalist,
};

function SceneCopy({ variant }: { variant: LandingVariant }) {
  return (
    <div className={styles.sceneCopy}>
      <p className={styles.sceneEyebrow}>{variant.eyebrow}</p>
      <h2 className={styles.sceneHeadline}>{variant.title}</h2>
      <p className={styles.sceneDescription}>{variant.description}</p>

      <div className={styles.sceneSearch}>
        <div className={styles.sceneSearchCard}>
          <div className={styles.sceneSearchCopy}>
            <span className={styles.sceneSearchLabel}>빠른 거래 탐색</span>
            <strong className={styles.sceneSearchPrompt}>
              카드명, 등급, 최근 거래가로 바로 찾기
            </strong>
          </div>
          <HomeButton variant="primary" href="/search">
            거래 탐색
          </HomeButton>
        </div>

        <div className={styles.sceneSearchChips}>
          {quickSearches.map((item) => (
            <Link
              key={item.label}
              className={styles.sceneSearchChip}
              href={`/search?q=${encodeURIComponent(item.query)}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.sceneCtas}>
        <HomeButton variant="primary" href="/discover">
          {variant.ctaPrimary}
        </HomeButton>
        <HomeButton variant="secondary" href="/market">
          {variant.ctaSecondary}
        </HomeButton>
      </div>
    </div>
  );
}

function ProfessionalScene({ variant }: { variant: LandingVariant }) {
  return (
    <div className={styles.sceneStack}>
      <section className={styles.sceneHero}>
        <SceneCopy variant={variant} />

        <div className={styles.professionalMetaStrip}>
          <div className={styles.professionalMetaCell}>
            <span className={styles.professionalMetaLabel}>운영 흐름</span>
            <strong className={styles.professionalMetaValue}>
              검수, 응답, 정산이 바로 읽히는 화면
            </strong>
          </div>
          <div className={styles.professionalMetaCell}>
            <span className={styles.professionalMetaLabel}>신뢰 기준</span>
            <strong className={styles.professionalMetaValue}>
              거래 전 확인 포인트를 상단에서 정리
            </strong>
          </div>
          <div className={styles.professionalMetaCell}>
            <span className={styles.professionalMetaLabel}>전환 경로</span>
            <strong className={styles.professionalMetaValue}>
              탐색과 시세로 바로 이어지는 랜딩
            </strong>
          </div>
        </div>
      </section>

      <section className={styles.professionalBoard}>
        <div className={styles.professionalBoardHeader}>
          <div>
            <p className={styles.boardLabel}>{variant.dashboardTitle}</p>
            <h3 className={styles.boardTitle}>{variant.dashboardDescription}</h3>
          </div>
          <span className={styles.boardBadge}>운영 시나리오</span>
        </div>

        <div className={styles.professionalMetricRow}>
          {variant.metrics.map((metric) => (
            <article key={metric.label} className={styles.professionalMetricCard}>
              <span className={styles.metricCardLabel}>{metric.label}</span>
              <strong className={styles.metricCardValue}>{metric.value}</strong>
            </article>
          ))}
        </div>

        <div className={styles.professionalBoardGrid}>
          <div className={styles.professionalLedger}>
            {variant.activities.map((activity, index) => (
              <div key={activity.title} className={styles.professionalLedgerRow}>
                <span className={styles.professionalLedgerIndex}>
                  0{index + 1}
                </span>
                <div className={styles.professionalLedgerCopy}>
                  <strong className={styles.professionalLedgerTitle}>
                    {activity.title}
                  </strong>
                  <span className={styles.professionalLedgerMeta}>
                    {activity.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.professionalChartPanel}>
            <div className={styles.professionalChartHeader}>
              <span className={styles.professionalChartLabel}>최근 거래 구간</span>
              <strong className={styles.professionalChartValue}>298,000원</strong>
            </div>
            <div className={styles.dashboardBars}>
              <span className={styles.dashboardBarShort} />
              <span className={styles.dashboardBarTall} />
              <span className={styles.dashboardBarMid} />
              <span className={styles.dashboardBarTall} />
              <span className={styles.dashboardBarShort} />
            </div>
            <div className={styles.professionalChartFooter}>
              <span>검수 가능</span>
              <span>안전결제</span>
              <span>응답 9분</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.professionalStorySection}>
        <article className={styles.storyLeadCard}>
          <p className={styles.storyLeadLabel}>{variant.storyTitle}</p>
          <h3 className={styles.storyLeadTitle}>거래 흐름이 먼저 보이는 구조</h3>
          <p className={styles.storyLeadBody}>{variant.storyDescription}</p>
        </article>

        <div className={styles.professionalStoryGrid}>
          {variant.storyCards.map((card) => (
            <article key={card.title} className={styles.professionalStoryCard}>
              <span className={styles.storyCardStat}>{card.stat}</span>
              <h4 className={styles.storyCardTitle}>{card.title}</h4>
              <p className={styles.storyCardBody}>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function CreativeScene({ variant }: { variant: LandingVariant }) {
  return (
    <div className={styles.sceneStack}>
      <section className={styles.sceneHero}>
        <SceneCopy variant={variant} />

        <div className={styles.creativeRibbonRow}>
          {["Collection Mood", "Ditto Pick", "Fast Response"].map((item) => (
            <span key={item} className={styles.creativeRibbon}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.creativeBoard}>
        <article className={styles.creativeMainPanel}>
          <div className={styles.creativeMainHeader}>
            <p className={styles.boardLabel}>{variant.dashboardTitle}</p>
            <span className={styles.creativeStamp}>Curated View</span>
          </div>
          <h3 className={styles.boardTitle}>{variant.dashboardDescription}</h3>

          <div className={styles.creativePriceBlock}>
            <span className={styles.creativePriceLabel}>오늘의 기준 거래가</span>
            <strong className={styles.creativePriceValue}>298,000원</strong>
          </div>

          <div className={styles.creativeMetricCloud}>
            {variant.metrics.map((metric) => (
              <div key={metric.label} className={styles.creativeMetricChip}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.dashboardBars}>
            <span className={styles.dashboardBarShort} />
            <span className={styles.dashboardBarMid} />
            <span className={styles.dashboardBarTall} />
            <span className={styles.dashboardBarMid} />
            <span className={styles.dashboardBarShort} />
          </div>
        </article>

        <div className={styles.creativeStack}>
          {variant.activities.map((activity) => (
            <article key={activity.title} className={styles.creativeNoteCard}>
              <span className={styles.creativeNoteTone}>{activity.tone}</span>
              <h4 className={styles.creativeNoteTitle}>{activity.title}</h4>
              <p className={styles.creativeNoteBody}>{activity.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.creativeEditorial}>
        <article className={styles.creativeEditorialLead}>
          <p className={styles.storyLeadLabel}>{variant.insightTitle}</p>
          <h3 className={styles.storyLeadTitle}>정보보다 분위기가 먼저 읽히는 연출</h3>
          <p className={styles.storyLeadBody}>{variant.insightBody}</p>
        </article>

        <div className={styles.creativeStoryLane}>
          {variant.storyCards.map((card) => (
            <article key={card.title} className={styles.creativeStoryCard}>
              <span className={styles.storyCardStat}>{card.stat}</span>
              <h4 className={styles.storyCardTitle}>{card.title}</h4>
              <p className={styles.storyCardBody}>{card.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.creativePointRow}>
          {variant.insightPoints.map((point) => (
            <div key={point} className={styles.creativePoint}>
              {point}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MinimalistScene({ variant }: { variant: LandingVariant }) {
  return (
    <div className={styles.sceneStack}>
      <section className={`${styles.sceneHero} ${styles.minimalistHero}`}>
        <SceneCopy variant={variant} />
      </section>

      <section className={styles.minimalistBoard}>
        <div className={styles.minimalistBoardHead}>
          <p className={styles.boardLabel}>{variant.dashboardTitle}</p>
          <strong className={styles.minimalistBoardValue}>298,000원</strong>
        </div>
        <p className={styles.minimalistBoardBody}>{variant.dashboardDescription}</p>

        <div className={styles.minimalistMetricRow}>
          {variant.metrics.map((metric) => (
            <div key={metric.label} className={styles.minimalistMetricCell}>
              <span className={styles.metricCardLabel}>{metric.label}</span>
              <strong className={styles.metricCardValue}>{metric.value}</strong>
            </div>
          ))}
        </div>

        <div className={styles.minimalistActivityList}>
          {variant.activities.map((activity, index) => (
            <div key={activity.title} className={styles.minimalistActivityRow}>
              <span className={styles.minimalistActivityIndex}>0{index + 1}</span>
              <div className={styles.minimalistActivityCopy}>
                <strong>{activity.title}</strong>
                <span>{activity.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.minimalistNarrative}>
        <article className={styles.minimalistLead}>
          <p className={styles.storyLeadLabel}>{variant.insightTitle}</p>
          <h3 className={styles.storyLeadTitle}>남겨야 할 것만 남긴 랜딩</h3>
          <p className={styles.storyLeadBody}>{variant.insightBody}</p>
        </article>

        <div className={styles.minimalistStoryList}>
          {variant.storyCards.map((card) => (
            <article key={card.title} className={styles.minimalistStoryRow}>
              <span className={styles.storyCardStat}>{card.stat}</span>
              <div className={styles.minimalistStoryCopy}>
                <h4 className={styles.storyCardTitle}>{card.title}</h4>
                <p className={styles.storyCardBody}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.minimalistPointList}>
          {variant.insightPoints.map((point) => (
            <div key={point} className={styles.minimalistPoint}>
              {point}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function VariantScene({ variant }: { variant: LandingVariant }) {
  if (variant.key === "creative") return <CreativeScene variant={variant} />;
  if (variant.key === "minimalist") return <MinimalistScene variant={variant} />;
  return <ProfessionalScene variant={variant} />;
}

function ProofStrip() {
  return (
    <section className={styles.proofStrip} aria-label="신뢰 지표">
      {proofItems.map((item) => (
        <article key={item.label} className={styles.proofItem}>
          <span className={styles.proofLabel}>{item.label}</span>
          <strong className={styles.proofValue}>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}

export function HomePage() {
  const [activeVariant, setActiveVariant] =
    useState<LandingVariantKey>("professional");

  const variant = landingVariants[activeVariant];

  return (
    <div className={`${styles.landingRoot} ${themeClassName[activeVariant]}`}>
      <main className={styles.landingMain}>
        <section className={styles.variantBar}>
          <div className={styles.variantBarCopy}>
            <p className={styles.variantLabel}>메인 랜딩 비교</p>
            <h1 className={styles.variantTitle}>카드 거래 랜딩 3안 비교</h1>
            <p className={styles.variantDescription}>
              같은 서비스라도 구조와 비율이 달라지면 전혀 다른 브랜드처럼
              보입니다. 먼저 메인페이지 방향을 고정할 수 있게 세 안을 완전히
              다르게 분리했습니다.
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
                <span className={styles.variantButtonText}>
                  {landingVariants[key].label}
                </span>
                <span className={styles.variantButtonNote}>
                  {landingVariants[key].switcherNote}
                </span>
              </button>
            ))}
          </div>
        </section>

        <VariantScene variant={variant} />
        <ProofStrip />
      </main>
    </div>
  );
}

export default HomePage;
