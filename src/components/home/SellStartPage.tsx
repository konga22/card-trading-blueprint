import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

const sellSteps = [
  {
    label: "STEP 01",
    title: "카드 정보 정리",
    description: "세트, 카드번호, 상태를 먼저 정리해두면 등록 흐름에서 멈추는 지점을 크게 줄일 수 있습니다.",
  },
  {
    label: "STEP 02",
    title: "최근 거래가 비교",
    description: "직전 체결가와 현재 거래 범위를 같이 보며 판매 시작가의 기준을 먼저 잡습니다.",
  },
  {
    label: "STEP 03",
    title: "신뢰 정보와 함께 등록",
    description: "검수 가능 여부와 안전결제 노출 신호를 확인한 뒤 판매 진입으로 넘어갑니다.",
  },
];

export function SellStartPage() {
  return (
    <PageScaffold
      eyebrow="Sell"
      title="판매 준비는 검색과 분리해, 필요한 정보만 차분하게 정리하는 흐름으로"
      description="가격 확인과 카드 정보 입력을 섞지 않고, 별도 준비 화면에서 단계별로 판매 시작 기준을 정리합니다."
      actions={
        <>
          <SecondaryButton href="/market">시세 보기</SecondaryButton>
          <PrimaryButton href="/account/login">로그인하고 계속</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="warning">준비 체크</StatusBadge>
          <p className={styles.infoText}>
            카드번호, 상태, 사진, 최근 거래가를 미리 정리해두면 판매 등록의 흐름이 훨씬 안정적으로
            이어집니다.
          </p>
        </div>
      }
    >
      <div className={styles.infoGrid}>
        {sellSteps.map((step) => (
          <CardPanel key={step.title} className={styles.infoCard}>
            <div className={styles.infoLabel}>{step.label}</div>
            <h2 className={styles.infoTitle}>{step.title}</h2>
            <p className={styles.infoText}>{step.description}</p>
          </CardPanel>
        ))}
      </div>
    </PageScaffold>
  );
}
