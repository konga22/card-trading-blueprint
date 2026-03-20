import styles from "./home.module.css";

import { beginnerSteps } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function BeginnerJourney() {
  return (
    <HomeSection
      eyebrow="Beginner Journey"
      title="처음 거래하는 사람을 위한 3단계"
      description="게임 파악, 시세 비교, 신뢰 확인 순서로 따라가면 초반 판단이 쉬워집니다."
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
