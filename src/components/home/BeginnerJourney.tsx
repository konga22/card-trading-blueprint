import styles from "./home.module.css";
import { beginnerSteps } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function BeginnerJourney() {
  return (
    <HomeSection
      eyebrow="입문 가이드"
      title="처음이신가요? 딱 3단계면 돼요"
      description="길게 설명하지 않고 바로 행동할 수 있는 순서만 남겼습니다."
    >
      <div className={styles.journeySteps}>
        {beginnerSteps.map((step, index) => (
          <HomeCard key={step.title} className={styles.journeyStep}>
            <div className={styles.stepBadge}>0{index + 1}</div>
            <p className={styles.stepTitle}>{step.title}</p>
            <p className={styles.stepDescription}>{step.description}</p>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
