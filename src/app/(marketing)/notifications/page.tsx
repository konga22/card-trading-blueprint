import { SimpleInfoPage } from "@/components/home";

export default function NotificationsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="알림"
      title="최근 거래와 저장한 카드 알림을 모아보는 페이지"
      description="홈의 작은 아이콘으로는 부족하니, 별도 페이지에서 거래와 관심 카드 변화를 정리합니다."
      primaryAction={{ label: "시세 보기", href: "/market" }}
      secondaryAction={{ label: "홈으로", href: "/" }}
      cards={[
        {
          label: "가격 알림",
          title: "최근 거래가 변한 카드",
          description: "관심 카드의 최근 체결가 변화와 거래량 변동을 따로 확인합니다.",
        },
        {
          label: "관심 카드",
          title: "저장한 카드 다시 보기",
          description: "위시리스트나 최근 검색에서 다시 보고 싶은 카드를 빠르게 복귀합니다.",
        },
        {
          label: "판매 상태",
          title: "등록 후 확인할 항목",
          description: "판매 등록 이후 응답과 상태 변경을 별도 화면에서 추적합니다.",
        },
      ]}
    />
  );
}

