import { CardPanel, PrimaryButton, SecondaryButton, StatusBadge } from "@/components/shared";

import { PageScaffold } from "./PageScaffold";
import styles from "./home.module.css";

const sellSteps = [
  {
    label: "STEP 01",
    title: "카드 정보 확인",
    description: "세트, 카드번호, 상태를 먼저 맞추면 등록 흐름이 빨라집니다.",
  },
  {
    label: "STEP 02",
    title: "최근 거래가 비교",
    description: "직전 체결가와 현재 매물 범위를 함께 보고 기준가를 잡습니다.",
  },
  {
    label: "STEP 03",
    title: "안전한 등록 시작",
    description: "검수 가능 여부와 안전결제 노출 포인트를 확인하고 판매를 시작합니다.",
  },
];

export function SellStartPage() {
  return (
    <PageScaffold
      eyebrow="판매 시작"
      title="판매 준비는 홈이 아니라 전용 페이지에서 진행합니다"
      description="판매 플로우는 가격 확인과 카드 정보 입력이 같이 따라와야 해서, 홈 아래가 아니라 독립된 시작 화면으로 분리했습니다."
      actions={
        <>
          <SecondaryButton href="/market">시세 보기</SecondaryButton>
          <PrimaryButton href="/account/login">로그인 후 계속</PrimaryButton>
        </>
      }
      aside={
        <div className={styles.infoStack}>
          <StatusBadge tone="warning">준비 체크</StatusBadge>
          <p className={styles.infoText}>
            카드번호, 상태, 사진, 최근 거래가만 미리 확인해도 등록 전환이 훨씬 빨라집니다.
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

