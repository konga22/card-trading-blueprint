import { SimpleInfoPage } from "@/components/home";

export default function LoginRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="로그인"
      title="거래와 판매를 시작하기 전에 계정을 준비합니다"
      description="홈에서 바로 입력 폼을 펼치지 않고, 인증과 계정 준비는 분리된 화면에서 처리합니다."
      primaryAction={{ label: "판매 시작으로", href: "/sell/start" }}
      secondaryAction={{ label: "홈으로", href: "/" }}
      cards={[
        {
          label: "계정 준비",
          title: "거래를 위한 기본 인증",
          description: "구매와 판매, 알림 저장을 위해 로그인 플로우가 먼저 준비됩니다.",
        },
        {
          label: "신뢰 정보",
          title: "판매자 평판 연결",
          description: "판매 이력과 응답률 같은 신뢰 정보는 계정과 함께 관리됩니다.",
        },
        {
          label: "개인화",
          title: "관심 게임과 검색 저장",
          description: "로그인 후에는 자주 찾는 게임과 카드 조건을 개인화해서 이어갈 수 있습니다.",
        },
      ]}
    />
  );
}

