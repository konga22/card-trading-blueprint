import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function PrivacyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="개인정보"
      title="계정과 개인화 데이터가 어디에 쓰이는지 분리해서 설명합니다."
      description="로그인, 알림, 관심 카드처럼 개인 데이터가 개입하는 흐름은 별도 안내 페이지에서 책임을 분리합니다."
      secondaryAction={{ label: "로그인 보기", href: "/account/login" }}
      cards={[
        {
          label: "계정 정보",
          title: "기본 프로필과 인증 범위",
          description: "거래를 위해 어떤 계정 정보가 필요한지, 어느 단계에서 입력되는지 정리합니다.",
        },
        {
          label: "개인화",
          title: "관심 카드와 검색 기록",
          description: "개인화 데이터가 검색과 알림 경험에 어떻게 연결되는지 설명합니다.",
        },
        {
          label: "알림",
          title: "거래 관련 알림 데이터",
          description: "가격 알림, 판매 상태 알림처럼 거래와 직접 연결된 데이터 흐름을 구분합니다.",
        },
      ]}
    />
  );
}
