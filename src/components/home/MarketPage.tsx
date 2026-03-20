import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { marketRows } from "./home-data";
import { MarketSnapshot } from "./MarketSnapshot";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";
import { TrustStrip } from "./TrustStrip";

export function MarketPage() {
  return (
    <PageScaffold
      eyebrow="시세 페이지"
      title="최근 체결가와 거래 반응을 따로 모아 가격 감각을 먼저 잡습니다."
      description="홈에서는 요약만 보고, 이 화면에서는 실제 거래 흐름과 다음 행동을 더 차분하게 확인합니다."
      actions={
        <>
          <SecondaryButton href="/discover">탐색으로 돌아가기</SecondaryButton>
          <PrimaryButton href="/sell/start">판매 시작</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.metricGrid}>
          {marketRows.slice(0, 3).map((row) => (
            <div key={row.id} className={styles.metricCard}>
              <div className={styles.metricLabel}>{row.name}</div>
              <div className={styles.metricValue}>{row.transactionCount}건</div>
            </div>
          ))}
        </div>
      }
    >
      <MarketSnapshot />
      <div className={styles.infoGrid}>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="neutral">기준</StatusBadge>
          <h2 className={styles.infoTitle}>최근 거래 중심</h2>
          <p className={styles.infoText}>
            복잡한 차트보다 실제 거래량과 체결 흐름을 먼저 보여줘서 판단을 빠르게 돕습니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="brand">신뢰</StatusBadge>
          <h2 className={styles.infoTitle}>가격 옆에 신뢰 정보</h2>
          <p className={styles.infoText}>
            시세만 보지 않도록 검수 가능 여부와 안전결제, 판매자 신호를 함께 배치합니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="positive">다음 행동</StatusBadge>
          <h2 className={styles.infoTitle}>판매 준비로 자연스럽게 연결</h2>
          <p className={styles.infoText}>
            가격 감각을 잡은 뒤에는 바로 판매 시작 페이지로 넘어갈 수 있게 흐름을 이어 둡니다.
          </p>
        </CardPanel>
      </div>
      <TrustStrip />
    </PageScaffold>
  );
}
