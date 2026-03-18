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
    <HomeSection title="안심 포인트" description="가격 정보 가까이에 거래 신뢰 요소를 배치했습니다.">
      <div className={styles.trustList}>
        {trustItems.map((item) => (
          <HomeCard key={item.title} className={styles.trustItem + " " + toneClassMap[item.tone]}>
            <p className={styles.trustTitle}>{item.title}</p>
            <p className={styles.trustDescription}>{item.description}</p>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
