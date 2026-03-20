import Link from "next/link";

import styles from "./home.module.css";
import type { DiscoverySectionData, HomeCardItem } from "./home-data";
import { formatPercent, formatWon } from "./home-data";
import { HomeCard, HomeSection, HomeStatusBadge } from "./home-ui";

function gameLabel(game: HomeCardItem["game"]) {
  if (game === "pokemon") return "포켓몬";
  if (game === "yugioh") return "유희왕";
  if (game === "onepiece") return "원피스";
  return "스포츠/기타";
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
            <div className={styles.cardArt} aria-hidden="true">
              <div className={styles.cardArtText}>
                <div className={styles.cardGame}>{gameLabel(card.game)}</div>
                <p className={styles.cardName}>{card.name}</p>
                <p className={styles.cardSet}>{card.setName}</p>
              </div>
            </div>
            <div className={styles.cardBadges}>
              {card.badges.map((badge) => (
                <HomeStatusBadge key={badge} tone="neutral">
                  {badge}
                </HomeStatusBadge>
              ))}
            </div>
            <div className={styles.cardRow}>
              <div>
                <p className={styles.cardPrice}>{formatWon(card.price)}</p>
                <p className={styles.cardSet}>카드번호 {card.cardNumber}</p>
              </div>
              <p
                className={`${styles.cardChange} ${
                  card.priceDiffPercent && card.priceDiffPercent > 0 ? styles.marketUp : styles.marketFlat
                }`}
              >
                {card.priceDiffPercent ? formatPercent(card.priceDiffPercent) : "변동 없음"}
              </p>
            </div>
            <div className={styles.cardRow}>
              <HomeStatusBadge tone={trustTone(card)}>
                {card.trust.inspected ? "검수 가능" : "기본 거래"}
              </HomeStatusBadge>
              <HomeStatusBadge tone={card.trust.safePay ? "brand" : "warning"}>
                {card.trust.safePay ? "안전결제" : "직거래"}
              </HomeStatusBadge>
              <HomeStatusBadge tone="neutral">평점 {card.trust.sellerRating?.toFixed(1) ?? "4.8"}</HomeStatusBadge>
            </div>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
