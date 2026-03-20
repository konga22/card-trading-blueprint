import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function SafetyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="안전 거래"
      title="거래 전에 꼭 봐야 할 신뢰 기준을 따로 모아 둔 페이지입니다."
      description="요약 배지보다 조금 더 구체적으로 검수, 안전결제, 판매자 평점 확인 흐름을 설명합니다."
      primaryAction={{ label: "시세 페이지 보기", href: "/market" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "검수",
          title: "고가 카드일수록 상태 확인 우선",
          description: "상태가 중요한 카드일수록 검수 가능 여부를 가장 먼저 확인하는 흐름을 제안합니다.",
        },
        {
          label: "안전결제",
          title: "결제 단계 분리",
          description: "가격만 보고 바로 거래하지 않도록 결제와 정산 흐름을 분리해서 설명합니다.",
        },
        {
          label: "평점",
          title: "판매자 신뢰 정보 함께 보기",
          description: "평점과 거래 이력을 가격 옆에서 함께 보도록 유도합니다.",
        },
      ]}
    />
  );
}
