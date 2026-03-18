import { SimpleInfoPage } from "@/components/home";

export default function PrivacyRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="개인정보"
      title="계정과 개인화 정보 처리 기준을 별도 페이지로 분리합니다"
      description="로그인과 알림, 저장한 검색 조건처럼 개인화가 개입되는 영역은 홈에서 떼어냈습니다."
      secondaryAction={{ label: "로그인", href: "/account/login" }}
      cards={[
        {
          label: "계정 정보",
          title: "인증과 기본 프로필",
          description: "거래를 위한 계정 준비 과정에서 필요한 기본 정보 범위를 안내합니다.",
        },
        {
          label: "개인화",
          title: "관심 카드와 검색 조건",
          description: "저장한 카드와 필터, 알림 기준이 어떻게 관리되는지 정리합니다.",
        },
        {
          label: "알림",
          title: "거래 관련 통지",
          description: "가격 알림과 판매 상태 알림처럼 행동과 직접 연결되는 정보 흐름을 다룹니다.",
        },
      ]}
    />
  );
}
