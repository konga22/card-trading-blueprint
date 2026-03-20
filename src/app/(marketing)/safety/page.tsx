import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function SafetyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="안전거래"
      title="거래 전에 꼭 확인해야 할 신뢰 기준을 한곳에 모은 페이지"
      description="짧은 배지보다 조금 더 구체적으로 검수, 안전결제, 판매자 평점 확인 흐름을 설명합니다."
      primaryAction={{ label: "시세 페이지 보기", href: "/market" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "검수",
          title: "고가 카드일수록 상태 확인 우선",
          description: "상태가 중요한 카드일수록 검수 가능 여부를 먼저 보게 하는 흐름을 제안합니다.",
        },
        {
          label: "안전결제",
          title: "결제 단계 분리",
          description: "가격만 보고 바로 거래하지 않도록 결제와 정산 흐름을 분리해서 설명합니다.",
        },
        {
          label: "판매자 평점",
          title: "가격 옆의 신뢰 정보",
          description: "판매자 평점과 거래 이력을 가격 판단과 떨어뜨리지 않고 함께 보여주는 기준입니다.",
        },
      ]}
    />
  );
}
