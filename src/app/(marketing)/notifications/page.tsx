import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function NotificationsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="알림"
      title="가격과 거래 상태 알림을 한곳에서 확인하는 보조 페이지입니다."
      description="상단 아이콘만으로는 부족한 카드 알림과 판매 상태 변화를 별도 화면에서 정리합니다."
      primaryAction={{ label: "시세 보기", href: "/market" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "가격 알림",
          title: "최근 거래가 바뀐 카드",
          description: "관심 카드의 최근 체결가가 바뀌면 어떤 방식으로 다시 보여줄지 정리합니다.",
        },
        {
          label: "관심 카드",
          title: "다시 보고 싶은 카드 묶음",
          description: "위시리스트와 최근 검색을 어떻게 재진입 지점으로 쓸지 정리합니다.",
        },
        {
          label: "판매 상태",
          title: "판매 등록 이후의 변화",
          description: "판매 등록 이후 응답, 상태 변경, 노출 위치 변화를 어떤 문장으로 보여줄지 다룹니다.",
        },
      ]}
    />
  );
}
