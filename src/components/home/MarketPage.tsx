import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { marketRows } from "./home-data";
import { MarketSnapshot } from "./MarketSnapshot";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";
import { TrustStrip } from "./TrustStrip";

export function MarketPage() {
  return (
    <PageScaffold
      eyebrow="Market"
      title="최근 거래가와 거래 반응을 같이 읽으며 가격 감각을 익히는 시세 화면"
      description="호가보다 최근 거래 흐름을 먼저 읽고, 다음 행동으로 안전하게 이어지도록 설계한 시세 페이지입니다."
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
            복잡한 차트보다 실제 거래 가격과 거래량부터 먼저 보여주도록 정리했습니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="brand">신뢰</StatusBadge>
          <h2 className={styles.infoTitle}>가격 옆의 거래 신호</h2>
          <p className={styles.infoText}>
            안전결제와 검수, 판매자 신호를 가격 판단과 떨어뜨리지 않고 함께 둡니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="positive">다음 행동</StatusBadge>
          <h2 className={styles.infoTitle}>판매 준비로 자연스럽게 연결</h2>
          <p className={styles.infoText}>
            가격 감각을 익힌 뒤 바로 판매 시작 화면으로 이어지도록 흐름을 분리했습니다.
          </p>
        </CardPanel>
      </div>
      <TrustStrip />
    </PageScaffold>
  );
}
