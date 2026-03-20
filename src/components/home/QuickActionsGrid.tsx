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
      title="바로 고를 수 있는 네 가지 시작점"
      description="무엇을 눌러야 할지 모를 때를 해결하는 빠른 진입 카드입니다."
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
