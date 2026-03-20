import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function PrivacyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="개인정보"
      title="계정과 개인 정보 흐름을 별도 화면에서 분리해 설명합니다"
      description="로그인, 알림, 관심 카드처럼 개인 정보가 개입되는 경로를 보조 페이지에서 차분하게 안내합니다."
      secondaryAction={{ label: "로그인 보기", href: "/account/login" }}
      cards={[
        {
          label: "계정 정보",
          title: "기본 프로필과 인증 범위",
          description: "거래를 위해 어떤 계정 정보가 필요한지와 입력 범위를 먼저 구분합니다.",
        },
        {
          label: "검색 데이터",
          title: "관심 카드와 검색 기록",
          description: "개인 정보가 검색 경험과 어떻게 연결되는지 설명합니다.",
        },
        {
          label: "알림 데이터",
          title: "거래 관련 알림 범위",
          description: "가격 알림과 판매 상태 알림처럼 직접 연결되는 데이터만 분리해 안내합니다.",
        },
      ]}
    />
  );
}
