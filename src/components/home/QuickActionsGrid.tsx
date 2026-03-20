import styles from "./home.module.css";

import { quickActions } from "./home-data";
import { HomeActionIcon, HomeCard, HomeSection } from "./home-ui";

const toneMap = {
  brand: "brand",
  positive: "positive",
  warning: "warning",
  neutral: "neutral",
} as const;

export function QuickActionsGrid() {
  return (
    <HomeSection
      title="바로 시작할 수 있는 네 가지 흐름"
      description="홈에서는 설명보다 다음 행동을 먼저 제안합니다."
    >
      <div className={styles.actionsGrid}>
        {quickActions.map((action) => (
          <HomeCard key={action.title} className={styles.actionCard} href={action.href}>
            <HomeActionIcon kind={action.icon} tone={toneMap[action.accent]} />
            <div>
              <p className={styles.actionTitle}>{action.title}</p>
              <p className={styles.actionDescription}>{action.description}</p>
            </div>
            <div className={styles.actionLinkRow}>페이지 열기</div>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
