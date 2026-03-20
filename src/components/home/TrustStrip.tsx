import styles from "./home.module.css";

import { trustItems } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

const toneClassMap = {
  brand: styles.toneBrand,
  positive: styles.tonePositive,
  warning: styles.toneWarning,
  neutral: "",
} as const;

export function TrustStrip() {
  return (
    <HomeSection
      title="거래 전에 꼭 확인할 신뢰 신호"
      description="가격만 보지 않도록 안전결제, 검수, 최근 거래, 판매자 평점을 같이 배치합니다."
    >
      <div className={styles.trustList}>
        {trustItems.map((item) => (
          <HomeCard key={item.title} className={`${styles.trustItem} ${toneClassMap[item.tone]}`}>
            <p className={styles.trustTitle}>{item.title}</p>
            <p className={styles.trustDescription}>{item.description}</p>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
