"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { HOME_CARD_FIXTURES, type HomeCardItem } from "@/lib";

import styles from "./home.module.css";
import { HomeButton, HomeCard, HomeStatusBadge } from "./home-ui";

type PromoStory = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
};

const AUTO_ADVANCE_MS = 5800;

const promoStories: PromoStory[] = [
  {
    eyebrow: "Featured Drop",
    title: "지금 가장 많이 보는 포켓몬 카드 흐름",
    description:
      "홈 첫 화면에서 대표 카드와 최근 거래가를 바로 보여주고, 곧바로 검색과 시세 탐색으로 이어지게 만든 대형 프로모션 영역입니다.",
    note: "최근 검색과 거래 반응이 가장 빠르게 움직이는 카드",
  },
  {
    eyebrow: "Inspection Focus",
    title: "검수 가능한 카드만 먼저 좁혀서 보기",
    description:
      "KREAM처럼 큰 배너 한 장에서 카드 상태, 검수 가능 여부, 최근 흐름을 같이 읽고 다음 행동을 고르게 구성했습니다.",
    note: "상태 확인이 중요한 카드부터 안전하게 비교",
  },
  {
    eyebrow: "Collector Pick",
    title: "그레이디드 카드까지 이어지는 수집 흐름",
    description:
      "실거래 가격, 세트 정보, 판매자 신뢰 정보를 하나의 프로모션 안에 모아서 리셀 플랫폼처럼 보이도록 정리했습니다.",
    note: "희소 카드와 그레이디드 카드 탐색으로 바로 연결",
  },
];

function formatWon(value: number) {
  return `${new Intl.NumberFormat("ko-KR").format(value)}원`;
}

function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function getPromoCards(): HomeCardItem[] {
  const officialPokemonCards = HOME_CARD_FIXTURES.filter((card) =>
    card.imageUrl.includes("pokemon-official"),
  );

  if (officialPokemonCards.length >= 3) {
    return officialPokemonCards.slice(0, 3);
  }

  return HOME_CARD_FIXTURES.slice(0, 3);
}

const promoCards = getPromoCards();

const promoSlides = promoCards.map((card, index) => ({
  card,
  story: promoStories[index % promoStories.length],
}));

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = promoSlides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % promoSlides.length);
      });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleSlides]);

  function moveSlide(direction: "prev" | "next") {
    startTransition(() => {
      setActiveIndex((current) => {
        if (direction === "prev") {
          return current === 0 ? promoSlides.length - 1 : current - 1;
        }

        return (current + 1) % promoSlides.length;
      });
    });
  }

  function selectSlide(index: number) {
    startTransition(() => {
      setActiveIndex(index);
    });
  }

  return (
    <section className={styles.heroDeck}>
      <div className={styles.heroCarousel}>
        <div className={styles.heroCarouselFrame}>
          <div
            className={styles.heroCarouselTrack}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {promoSlides.map((slide, index) => (
              <article
                key={slide.card.id}
                className={styles.heroCarouselSlide}
                aria-hidden={index !== activeIndex}
              >
                <div className={styles.heroCarouselCopy}>
                  <div className={styles.heroCarouselEyebrow}>{slide.story.eyebrow}</div>
                  <h1 className={styles.heroCarouselTitle}>{slide.story.title}</h1>
                  <p className={styles.heroCarouselDescription}>{slide.story.description}</p>

                  <div className={styles.heroCarouselMetrics}>
                    <div className={styles.heroCarouselMetric}>
                      <span className={styles.heroCarouselMetricLabel}>대표 카드</span>
                      <strong className={styles.heroCarouselMetricValue}>{slide.card.name}</strong>
                    </div>
                    <div className={styles.heroCarouselMetric}>
                      <span className={styles.heroCarouselMetricLabel}>최근 거래가</span>
                      <strong className={styles.heroCarouselMetricValue}>
                        {formatWon(slide.card.currentPrice)}
                      </strong>
                    </div>
                    <div className={styles.heroCarouselMetric}>
                      <span className={styles.heroCarouselMetricLabel}>변동</span>
                      <strong className={styles.heroCarouselMetricValue}>
                        {formatPercent(slide.card.priceChangePercent)}
                      </strong>
                    </div>
                  </div>

                  <div className={styles.heroCarouselBadges}>
                    <HomeStatusBadge tone="brand">안전결제</HomeStatusBadge>
                    {slide.card.inspectable ? (
                      <HomeStatusBadge tone="positive">검수 가능</HomeStatusBadge>
                    ) : null}
                    <HomeStatusBadge tone="neutral">
                      거래 {slide.card.transactionCount}건
                    </HomeStatusBadge>
                  </div>

                  <div className={styles.heroCtas}>
                    <HomeButton
                      variant="primary"
                      href={`/search?q=${encodeURIComponent(slide.card.name)}`}
                    >
                      이 카드 검색
                    </HomeButton>
                    <HomeButton variant="secondary" href="/market">
                      실거래 흐름 보기
                    </HomeButton>
                  </div>

                  <p className={styles.heroCarouselNote}>{slide.story.note}</p>
                </div>

                <div className={styles.heroCarouselVisual}>
                  <div className={styles.heroCarouselVisualFrame}>
                    <Image
                      className={styles.heroCarouselImage}
                      src={slide.card.imageUrl}
                      alt={slide.card.name}
                      width={420}
                      height={560}
                      priority={index === 0}
                    />
                  </div>
                  <div className={styles.heroCarouselSummary}>
                    <div className={styles.heroCarouselSummarySet}>{slide.card.setName}</div>
                    <div className={styles.heroCarouselSummaryName}>{slide.card.name}</div>
                    <div className={styles.heroCarouselSummaryMeta}>
                      {slide.card.cardNumber} · 판매자 평점 {slide.card.sellerRating.toFixed(1)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.heroCarouselControls}>
          <div className={styles.heroCarouselArrows}>
            <button
              type="button"
              className={styles.heroCarouselArrow}
              onClick={() => moveSlide("prev")}
              aria-label="이전 프로모션"
            >
              이전
            </button>
            <button
              type="button"
              className={styles.heroCarouselArrow}
              onClick={() => moveSlide("next")}
              aria-label="다음 프로모션"
            >
              다음
            </button>
          </div>

          <div className={styles.heroCarouselTabs} role="tablist" aria-label="프로모션 선택">
            {promoSlides.map((slide, index) => (
              <button
                key={slide.card.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={
                  activeIndex === index
                    ? `${styles.heroCarouselTab} ${styles.heroCarouselTabActive}`
                    : styles.heroCarouselTab
                }
                onClick={() => selectSlide(index)}
              >
                <span className={styles.heroCarouselTabEyebrow}>{slide.story.eyebrow}</span>
                <strong className={styles.heroCarouselTabTitle}>{slide.card.name}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.heroShelf}>
        <div className={styles.heroShelfHeader}>
          <div className={styles.heroShelfHeading}>
            <div className={styles.eyebrow}>Featured Listings</div>
            <h2 className={styles.heroShelfTitle}>지금 많이 보는 공식 포켓몬 카드</h2>
          </div>
          <Link className={styles.sectionLink} href="/discover">
            전체 탐색 보기
          </Link>
        </div>

        <div className={styles.heroShelfGrid}>
          {promoSlides.map((slide) => (
            <HomeCard
              key={slide.card.id}
              className={styles.heroShelfCard}
              href={`/search?q=${encodeURIComponent(slide.card.name)}`}
            >
              <div className={styles.heroShelfMedia}>
                <Image
                  className={styles.heroShelfImage}
                  src={slide.card.imageUrl}
                  alt={slide.card.name}
                  width={180}
                  height={240}
                />
              </div>
              <div className={styles.heroShelfBody}>
                <div className={styles.heroShelfSet}>{slide.card.setName}</div>
                <p className={styles.heroShelfName}>{slide.card.name}</p>
                <p className={styles.heroShelfMeta}>
                  {slide.card.cardNumber} · 거래 {slide.card.transactionCount}건
                </p>
                <div className={styles.heroShelfFooter}>
                  <strong className={styles.heroShelfPrice}>{formatWon(slide.card.currentPrice)}</strong>
                  <span className={styles.heroShelfChange}>
                    {formatPercent(slide.card.priceChangePercent)}
                  </span>
                </div>
              </div>
            </HomeCard>
          ))}
        </div>
      </div>
    </section>
  );
}
