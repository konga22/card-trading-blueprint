import Image from "next/image";
import Link from "next/link";

import { CATALOG_GAME_LABELS, CATALOG_PURPOSE_LABELS } from "@/lib";

import styles from "./home.module.css";
import type { DiscoverySectionData, HomeCardItem } from "./home-data";
import { formatPercent, formatWon } from "./home-data";
import { HomeCard, HomeSection, HomeStatusBadge } from "./home-ui";

function trustTone(card: HomeCardItem): "neutral" | "brand" | "positive" | "warning" {
  if (card.inspectable) return "positive";
  if (card.safePay) return "brand";
  return "neutral";
}

function getEyebrow(section: DiscoverySectionData["key"]) {
  if (section === "popular") return "Popular Picks";
  if (section === "beginner") return "Starter Picks";
  return "Trust Picks";
}

export function DiscoverySection({ section }: { section: DiscoverySectionData }) {
  return (
    <HomeSection
      eyebrow={getEyebrow(section.key)}
      title={section.title}
      description={section.description}
      action={
        <Link className={styles.sectionLink} href="/discover">
          전체 보기
        </Link>
      }
    >
      <div className={styles.cardGrid}>
        {section.items.map((card, index) => {
          const isPlaceholder = card.imageUrl.endsWith(".svg");

          return (
          <HomeCard key={card.id} href={`/search?q=${encodeURIComponent(card.name)}`}>
            <div className={styles.cardArt}>
              <div className={styles.cardRank}>0{index + 1}</div>
              {isPlaceholder ? (
                <div className={styles.cardPlaceholder}>
                  <div className={styles.cardPlaceholderLabel}>{CATALOG_GAME_LABELS[card.game]}</div>
                  <div className={styles.cardPlaceholderTitle}>{card.name}</div>
                  <div className={styles.cardPlaceholderMeta}>{card.setName}</div>
                </div>
              ) : (
                <Image
                  className={styles.cardArtMedia}
                  src={card.imageUrl}
                  alt={`${card.name} 카드 이미지`}
                  width={280}
                  height={360}
                />
              )}
            </div>

            <div className={styles.cardBadges}>
              <HomeStatusBadge tone="neutral">{CATALOG_GAME_LABELS[card.game]}</HomeStatusBadge>
              <HomeStatusBadge tone="neutral">{CATALOG_PURPOSE_LABELS[card.purpose]}</HomeStatusBadge>
              {card.badges.slice(0, 2).map((badge) => (
                <HomeStatusBadge key={badge} tone="neutral">
                  {badge}
                </HomeStatusBadge>
              ))}
            </div>

            <div className={styles.cardCopy}>
              <p className={styles.cardName}>{card.name}</p>
              <p className={styles.cardSet}>
                {card.setName} · {card.cardNumber}
              </p>
            </div>

            <div className={styles.cardRow}>
              <p className={styles.cardPrice}>{formatWon(card.currentPrice)}</p>
              <p
                className={`${styles.cardChange} ${
                  card.priceChangePercent > 0
                    ? styles.marketUp
                    : card.priceChangePercent < 0
                      ? styles.marketDown
                      : styles.marketFlat
                }`}
              >
                {formatPercent(card.priceChangePercent)}
              </p>
            </div>

            <div className={styles.cardRow}>
              <p className={styles.cardMeta}>최근 거래 {card.transactionCount}건</p>
              <p className={styles.cardMeta}>평점 {card.sellerRating.toFixed(1)}</p>
            </div>

            <div className={styles.cardRow}>
              <HomeStatusBadge tone={trustTone(card)}>
                {card.inspectable ? "검수 가능" : "기본 거래"}
              </HomeStatusBadge>
              <HomeStatusBadge tone={card.safePay ? "brand" : "warning"}>
                {card.safePay ? "안전결제" : "직거래"}
              </HomeStatusBadge>
            </div>
          </HomeCard>
        );
        })}
      </div>
    </HomeSection>
  );
}
