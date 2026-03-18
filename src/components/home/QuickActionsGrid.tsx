import styles from "./home.module.css";
import { quickActions } from "./home-data";
import { AccentIcon, HomeCard, HomeSection } from "./home-ui";

const toneMap = {
  brand: "brand",
  positive: "positive",
  warning: "warning",
  neutral: "neutral",
} as const;

export function QuickActionsGrid() {
  return (
    <HomeSection title="바로 시작" description="홈에서 가장 많이 쓰는 행동만 먼저 꺼냈습니다.">
      <div className={styles.actionsGrid}>
        {quickActions.map((action) => (
          <HomeCard key={action.title} className={styles.actionCard} href={action.href}>
            <AccentIcon icon={action.icon} tone={toneMap[action.accent]} />
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
