import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function LoginRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="로그인"
      title="거래를 시작하기 전에 계정 준비 흐름을 먼저 확인하세요"
      description="이 저장소는 실제 인증 기능보다 로그인 이후 어떤 화면으로 이어져야 하는지 정리하는 블루프린트입니다."
      primaryAction={{ label: "판매 시작으로 이동", href: "/sell/start" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "계정 준비",
          title: "거래를 위한 기본 인증",
          description: "구매, 판매, 알림으로 이어지기 전에 필요한 최소 계정 단계를 먼저 정리합니다.",
        },
        {
          label: "신뢰 정보",
          title: "판매자 평점과 거래 이력 연결",
          description: "프로필에 어떤 신뢰 정보가 붙는지와 어디서 보여야 하는지 설명합니다.",
        },
        {
          label: "관심 카드",
          title: "최근 검색과 저장 흐름",
          description: "로그인 이후 관심 카드와 최근 검색이 어떤 화면으로 이어질지 정리합니다.",
        },
      ]}
    />
  );
}
