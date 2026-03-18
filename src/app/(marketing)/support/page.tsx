import { SimpleInfoPage } from "@/components/home";

export default function SupportRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="고객지원"
      title="도움이 필요한 상황을 별도 페이지에서 정리합니다"
      description="홈 하단 링크도 모두 독립 페이지로 분리해, 필요한 정보만 빠르게 찾을 수 있게 바꿨습니다."
      primaryAction={{ label: "안전거래 안내", href: "/safety" }}
      secondaryAction={{ label: "홈으로", href: "/" }}
      cards={[
        {
          label: "구매 문의",
          title: "거래 진행 중 도움이 필요할 때",
          description: "구매 과정에서 막히는 부분이나 결제 흐름 관련 도움을 찾을 수 있습니다.",
        },
        {
          label: "판매 문의",
          title: "등록과 응답 관리",
          description: "판매 등록 전후에 자주 확인하는 항목을 따로 지원합니다.",
        },
        {
          label: "탐색 문의",
          title: "검색과 필터 사용법",
          description: "카드번호와 세트, 고급 필터를 어떻게 쓰는지 빠르게 안내합니다.",
        },
      ]}
    />
  );
}

