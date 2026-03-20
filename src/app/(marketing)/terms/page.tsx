import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function TermsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="이용안내"
      title="서비스 범위와 사용자 책임을 거래 흐름 중심으로 정리합니다"
      description="긴 텍스트 약관 대신, 사용자의 행동과 직접 연결되는 범위를 카드 단위로 설명하는 페이지입니다."
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "서비스 범위",
          title: "탐색, 시세 확인, 판매 준비",
          description: "이 블루프린트가 다루는 화면 범위와 책임 경계를 먼저 구분합니다.",
        },
        {
          label: "거래 기준",
          title: "가격과 상태 정보 해석",
          description: "호가와 최근 거래가, 상태 정보가 어떤 의미로 보이는지 설명합니다.",
        },
        {
          label: "사용자 책임",
          title: "등록 정보의 정확성",
          description: "판매 등록과 계정 정보 입력에서 사용자가 책임져야 하는 최소 기준을 정리합니다.",
        },
      ]}
    />
  );
}
