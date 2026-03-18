import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { MarketSnapshot } from "./MarketSnapshot";
import { TrustStrip } from "./TrustStrip";
import { marketRows } from "./home-data";
import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

export function MarketPage() {
  return (
    <PageScaffold
      eyebrow="시세 페이지"
      title="거래량과 최근 체결가를 별도 화면에서 확인하세요"
      description="홈에서는 요약만 보여주고, 실제 가격 감을 잡는 행위는 이 페이지에서 이어지도록 분리했습니다."
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
            복잡한 차트 대신, 실제 거래량과 최근 체결가를 우선 노출합니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="brand">신뢰</StatusBadge>
          <h2 className={styles.infoTitle}>가격 옆에 신뢰 정보</h2>
          <p className={styles.infoText}>
            시세만 따로 떼지 않고, 검수와 판매자 평판으로 바로 이어지게 구성합니다.
          </p>
        </CardPanel>
        <CardPanel className={styles.infoCard}>
          <StatusBadge tone="positive">다음 행동</StatusBadge>
          <h2 className={styles.infoTitle}>바로 판매로 이어짐</h2>
          <p className={styles.infoText}>
            가격 감을 잡은 뒤 판매 준비 페이지로 넘어가도록 동선을 짧게 유지합니다.
          </p>
        </CardPanel>
      </div>
      <TrustStrip />
    </PageScaffold>
  );
}

