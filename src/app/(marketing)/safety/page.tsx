import { SimpleInfoPage } from "@/components/home";

export default function SafetyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="안전거래"
      title="가격 정보 가까이에 붙는 신뢰 기준을 모아둔 페이지"
      description="홈 요약보다 더 구체적으로 검수, 안전결제, 판매자 평판 기준을 확인할 수 있습니다."
      primaryAction={{ label: "시세 페이지", href: "/market" }}
      secondaryAction={{ label: "홈으로", href: "/" }}
      cards={[
        {
          label: "검수",
          title: "고가 카드일수록 먼저 확인",
          description: "상태가 중요한 카드일수록 검수 가능 여부를 우선적으로 확인합니다.",
        },
        {
          label: "안전결제",
          title: "결제 단계 분리",
          description: "가격만 보고 바로 거래하지 않도록, 결제 신뢰 단계를 별도로 안내합니다.",
        },
        {
          label: "평판",
          title: "판매자 신뢰도 함께 보기",
          description: "평점과 응답 이력은 시세 옆에서 같이 판단할 수 있어야 합니다.",
        },
      ]}
    />
  );
}

