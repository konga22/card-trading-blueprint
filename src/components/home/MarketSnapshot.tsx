import Link from "next/link";

import styles from "./home.module.css";
import { formatPercent, formatWon, marketRows } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function MarketSnapshot() {
  return (
    <HomeSection
      eyebrow="시장 스냅샷"
      title="최근 거래 반응이 빠른 카드"
      description="최근 체결가와 거래 건수를 같이 보면서 과열 여부를 빠르게 읽습니다."
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
