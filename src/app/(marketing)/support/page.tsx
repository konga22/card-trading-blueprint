import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function SupportRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="고객 지원"
      title="도움이 필요한 상황을 별도 페이지에서 빠르게 찾을 수 있게 정리합니다."
      description="하단 링크들이 모두 같은 역할을 하지 않도록, 지원 정보는 독립된 안내 화면으로 모았습니다."
      primaryAction={{ label: "안전 거래 안내", href: "/safety" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "구매 문의",
          title: "거래 진행 중 도움이 필요한 경우",
          description: "구매 과정에서 막히기 쉬운 결제, 응답, 거래 확인 흐름을 정리합니다.",
        },
        {
          label: "판매 문의",
          title: "등록과 응답 관리",
          description: "판매 등록 이후 자주 확인하는 정보와 다음 행동을 구분합니다.",
        },
        {
          label: "검색 문의",
          title: "검색과 필터 사용법",
          description: "카드번호, 세트, 고급 필터를 언제 어떻게 써야 하는지 안내합니다.",
        },
      ]}
    />
  );
}
