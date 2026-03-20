import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function NotificationsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="알림"
      title="가격과 거래 상태 알림을 한 묶음으로 보는 보조 페이지"
      description="상단 아이콘 하나만으로 부족한 카드 알림과 판매 상태 변화를 별도 화면에서 설명합니다."
      primaryAction={{ label: "시세 보기", href: "/market" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "가격 알림",
          title: "최근 거래가 바뀐 카드",
          description: "관심 카드의 최근 거래가가 움직였을 때 어떤 방식으로 다시 보여줄지 정리합니다.",
        },
        {
          label: "관심 카드",
          title: "나중에 다시 볼 카드 묶음",
          description: "검색 중 저장한 카드와 최근 본 카드가 어떤 흐름으로 연결되는지 설명합니다.",
        },
        {
          label: "판매 상태",
          title: "등록 이후의 변화",
          description: "판매 등록 뒤 응답, 상태 변경, 확인이 필요한 지점을 별도 카드로 나눕니다.",
        },
      ]}
    />
  );
}
