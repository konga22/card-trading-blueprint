import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function LoginRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="로그인"
      title="거래와 판매를 시작하기 전에 계정 준비 흐름을 먼저 확인합니다."
      description="이 저장소는 실제 인증 기능보다, 로그인 이후 어떤 화면으로 이어져야 하는지에 집중한 블루프린트입니다."
      primaryAction={{ label: "판매 시작으로 이동", href: "/sell/start" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "계정 준비",
          title: "거래를 위한 기본 인증",
          description: "구매와 판매, 알림을 이어가기 전에 최소한의 계정 준비 흐름을 먼저 정리합니다.",
        },
        {
          label: "신뢰 정보",
          title: "판매자 평점과 거래 이력 연결",
          description: "판매자 프로필, 평점, 거래 이력을 한 흐름으로 어떻게 묶을지 정리합니다.",
        },
        {
          label: "개인화",
          title: "관심 카드와 검색 히스토리",
          description: "로그인 이후 관심 카드와 최근 검색을 어떻게 이어 붙일지 설계합니다.",
        },
      ]}
    />
  );
}
