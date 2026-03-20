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
      title="바로 골라 들어가는 네 가지 시작점"
      description="무엇부터 봐야 할지 헤매지 않도록 홈에서 첫 행동을 분명하게 나눴습니다."
    >
      <div className={styles.actionsGrid}>
        {quickActions.map((action) => (
          <HomeCard key={action.title} className={styles.actionCard} href={action.href}>
            <HomeActionIcon kind={action.icon} tone={toneMap[action.accent]} />
            <div>
              <p className={styles.actionTitle}>{action.title}</p>
              <p className={styles.actionDescription}>{action.description}</p>
            </div>
            <div className={styles.actionLinkRow}>바로 이동</div>
          </HomeCard>
        ))}
      </div>
    </HomeSection>
  );
}
