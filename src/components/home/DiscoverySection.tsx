import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";
import type { DiscoverySectionData, HomeCardItem } from "./home-data";
import { formatPercent, formatWon } from "./home-data";
import { HomeCard, HomeSection, HomeStatusBadge } from "./home-ui";

function gameLabel(game: HomeCardItem["game"]) {
  if (game === "pokemon") return "Pokemon";
  if (game === "yugioh") return "Yu-Gi-Oh!";
  if (game === "onepiece") return "One Piece";
  return "Other";
}

function trustTone(item: HomeCardItem): "neutral" | "brand" | "positive" | "warning" {
  if (item.trust.inspected) return "positive";
  if (item.trust.safePay) return "brand";
  return "neutral";
}

export function DiscoverySection({ section }: { section: DiscoverySectionData }) {
  return (
    <HomeSection
      eyebrow={section.highlight}
      title={section.title}
      description={section.description}
      action={
        <Link className={styles.sectionLink} href="/discover">
          전체 보기
        </Link>
      }
    >
      <div className={styles.cardGrid}>
        {section.cards.map((card) => (
          <HomeCard key={card.id} href={`/search?q=${encodeURIComponent(card.name)}`}>
            <div className={styles.cardArt}>
              <Image
                className={styles.cardArtMedia}
                src={card.imageUrl}
                alt={`${card.name} 대표 이미지`}
                width={280}
                height={360}
              />
            </div>

            <div className={styles.cardBadges}>
              <HomeStatusBadge tone="neutral">{gameLabel(card.game)}</HomeStatusBadge>
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
              <p className={styles.cardPrice}>{formatWon(card.price)}</p>
              <p
                className={`${styles.cardChange} ${
                  card.priceDiffPercent && card.priceDiffPercent > 0
                    ? styles.marketUp
                    : card.priceDiffPercent && card.priceDiffPercent < 0
                      ? styles.marketDown
                      : styles.marketFlat
                }`}
              >
                {card.priceDiffPercent ? formatPercent(card.priceDiffPercent) : "변동 없음"}
              </p>
            </div>

            <div className={styles.cardRow}>
              <p className={styles.cardMeta}>최근 거래 {card.transactionCount ?? 0}건</p>
              <p className={styles.cardMeta}>평점 {card.trust.sellerRating?.toFixed(1) ?? "4.8"}</p>
            </div>

            <div className={styles.cardRow}>
              <HomeStatusBadge tone={trustTone(card)}>
                {card.trust.inspected ? "검수 가능" : "기본 거래"}
              </HomeStatusBadge>
              <HomeStatusBadge tone={card.trust.safePay ? "brand" : "warning"}>
                {card.trust.safePay ? "안전결제" : "직거래"}
              </HomeStatusBadge>
            </div>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
