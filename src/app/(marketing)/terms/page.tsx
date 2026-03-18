import { SimpleInfoPage } from "@/components/home";

export default function TermsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="이용약관"
      title="서비스 이용 원칙을 별도 화면으로 분리합니다"
      description="푸터 링크도 스크롤 이동이 아니라 독립된 정보 페이지로 정리했습니다."
      secondaryAction={{ label: "홈으로", href: "/" }}
      cards={[
        {
          label: "서비스 범위",
          title: "탐색, 거래, 판매 등록",
          description: "이 서비스가 제공하는 주요 범위와 사용자 행동 기준을 안내합니다.",
        },
        {
          label: "거래 기준",
          title: "가격과 상태 정보 해석",
          description: "실거래 시세와 카드 상태 정보가 어떻게 사용되는지 설명합니다.",
        },
        {
          label: "사용자 책임",
          title: "등록 정보 정확성",
          description: "판매 등록과 계정 정보 입력 시 필요한 정확성 기준을 정리합니다.",
        },
      ]}
    />
  );
}

