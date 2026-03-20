import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function SupportRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="고객지원"
      title="문제 상황별로 빠르게 찾아갈 수 있게 정리한 지원 페이지"
      description="하단 링크가 모두 같은 역할을 하지 않도록, 지원 정보와 안내 화면을 분리해 설명합니다."
      primaryAction={{ label: "안전거래 안내", href: "/safety" }}
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "구매 문의",
          title: "거래 진행 중 막힐 때",
          description: "결제, 응답, 거래 확인 과정에서 자주 막히는 흐름을 우선 정리합니다.",
        },
        {
          label: "판매 문의",
          title: "등록과 응답 관리",
          description: "판매 등록 이후 확인해야 할 정보와 다음 행동을 나눠 보여줍니다.",
        },
        {
          label: "검색 문의",
          title: "검색과 필터 사용법",
          description: "카드번호, 세트, 상세 필터를 언제 어떻게 써야 하는지 안내합니다.",
        },
      ]}
    />
  );
}
