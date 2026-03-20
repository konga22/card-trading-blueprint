import Link from "next/link";

import styles from "./home.module.css";
import { formatPercent, formatWon, marketRows } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function MarketSnapshot() {
  return (
    <HomeSection
      eyebrow="Market Snapshot"
      title="최근 거래 흐름을 빠르게 읽는 카드"
      description="차트보다 거래 가격, 거래량, 변동폭을 먼저 보여주는 마켓 스냅샷입니다."
      action={
        <Link className={styles.sectionLink} href="/market">
          시세 페이지 보기
        </Link>
      }
    >
      <HomeCard className={styles.marketPanel}>
        <div className={styles.marketGrid}>
          {marketRows.map((row) => {
            const changeClass =
              row.direction === "up"
                ? styles.marketUp
                : row.direction === "down"
                  ? styles.marketDown
                  : styles.marketFlat;

            return (
              <Link key={row.id} className={styles.marketRow} href={`/search?q=${encodeURIComponent(row.name)}`}>
                <div className={styles.marketName}>
                  <p className={styles.marketTitle}>{row.name}</p>
                  <p className={styles.marketMeta}>{row.setName}</p>
                </div>
                <div className={styles.marketNumber}>거래 {row.transactionCount}건</div>
                <div className={styles.marketPrice}>{formatWon(row.price)}</div>
                <div className={`${styles.marketChange} ${changeClass}`}>{formatPercent(row.changePercent)}</div>
              </Link>
            );
          })}
        </div>
      </HomeCard>
    </HomeSection>
  );
}
