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
      title="최근 거래 흐름을 먼저 읽고, 그다음 가격을 판단하는 카드 시세 허브"
      description="복잡한 차트보다 최근 체결가, 거래 건수, 가격 변화만 먼저 읽게 해주는 시세 페이지입니다."
      actions={
        <>
          <SecondaryButton href="/discover">탐색으로 돌아가기</SecondaryButton>
          <PrimaryButton href="/sell/start">판매 준비 보기</PrimaryButton>
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
          <StatusBadge tone="neutral">최근 거래 기준</StatusBadge>
          <h2 className={styles.infoTitle}>호가보다 체결 흐름을 먼저 읽기</h2>
          <p className={styles.infoText}>
            숫자를 많이 보여주기보다, 실제 거래가가 어느 구간에서 형성되는지 먼저 읽게 하는 구성이
            중요합니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="brand">신뢰 신호</StatusBadge>
          <h2 className={styles.infoTitle}>가격 옆에 안전 기준을 같이 배치</h2>
          <p className={styles.infoText}>
            검수 가능 여부와 안전결제 같은 보호 장치가 가격과 멀어지지 않도록 같은 흐름 안에 둡니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="positive">다음 행동</StatusBadge>
          <h2 className={styles.infoTitle}>시세 확인 후 바로 판매 준비로 연결</h2>
          <p className={styles.infoText}>
            가격 감각을 잡은 뒤에는 판매 준비나 검색 확장으로 자연스럽게 이어질 수 있어야 합니다.
          </p>
        </CardPanel>
      </div>

      <TrustStrip />
    </PageScaffold>
  );
}
