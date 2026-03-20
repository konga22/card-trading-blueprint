import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

const sellSteps = [
  {
    label: "STEP 01",
    title: "카드 정보 확인",
    description: "세트, 카드번호, 상태를 먼저 정리하면 판매 등록 흐름이 훨씬 빨라집니다.",
  },
  {
    label: "STEP 02",
    title: "최근 거래가 비교",
    description: "직전 체결가와 현재 거래 범위를 같이 보고 기준 가격을 먼저 잡습니다.",
  },
  {
    label: "STEP 03",
    title: "신뢰 정보와 함께 등록",
    description: "검수 가능 여부와 안전결제 노출 신호를 확인한 뒤 판매를 시작합니다.",
  },
];

export function SellStartPage() {
  return (
    <PageScaffold
      eyebrow="판매 시작"
      title="판매 준비는 검색과 분리해서 더 차분하게 진행합니다."
      description="가격 확인과 카드 정보 입력이 함께 따라오는 흐름이라, 홈이 아닌 전용 페이지에서 시작하도록 분리했습니다."
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
            카드번호, 상태, 사진, 최근 거래가를 미리 정리해 두면 등록 전환이 훨씬 자연스럽습니다.
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
