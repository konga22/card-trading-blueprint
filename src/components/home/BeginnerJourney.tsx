import styles from "./home.module.css";

import { beginnerSteps } from "./home-data";
import { HomeCard, HomeSection } from "./home-ui";

export function BeginnerJourney() {
  return (
    <HomeSection
      eyebrow="입문 가이드"
      title="처음 거래하는 사람을 위한 3단계"
      description="탐색, 시세 확인, 신뢰 체크를 순서대로 따라가면 초반 혼란을 크게 줄일 수 있습니다."
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
