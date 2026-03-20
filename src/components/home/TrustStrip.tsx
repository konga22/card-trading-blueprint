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
      title="가격 옆에서 바로 읽히는 신뢰 정보"
      description="안전결제, 검수, 판매자 평점, 최근 거래 흐름을 첫 화면에서 먼저 보여줍니다."
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
