import Link from "next/link";
import styles from "./home.module.css";
import { marketRows, formatPercent, formatWon } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function MarketSnapshot() {
  return (
    <HomeSection
      eyebrow="오늘의 시세"
      title="오늘 거래가 많은 카드"
      description="최근 체결과 거래량을 한눈에 볼 수 있게 정리했습니다."
      action={
        <Link className={styles.sectionLink} href="/market">
          전체 시세 보기
        </Link>
      }
    >
      <HomeCard className={styles.marketPanel}>
        <div className={styles.marketGrid}>
          {marketRows.map((row) => {
            const changeClass =
              row.direction === "up" ? styles.marketUp : row.direction === "down" ? styles.marketDown : styles.marketFlat;
            return (
              <Link
                key={row.id}
                className={styles.marketRow}
                href={`/search?q=${encodeURIComponent(row.name)}`}
              >
                <div className={styles.marketName}>
                  <p className={styles.marketTitle}>{row.name}</p>
                  <p className={styles.marketMeta}>{row.setName}</p>
                </div>
                <div className={styles.marketNumber}>거래 {row.transactionCount}건</div>
                <div className={styles.marketPrice}>{formatWon(row.price)}원</div>
                <div className={styles.marketChange + " " + changeClass}>{formatPercent(row.changePercent)}</div>
              </Link>
            );
          })}
        </div>
      </HomeCard>
    </HomeSection>
  );
}
