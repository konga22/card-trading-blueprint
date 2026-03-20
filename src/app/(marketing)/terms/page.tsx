import { SimpleInfoPage } from "@/components/home/SimpleInfoPage";

export default function TermsRoutePage() {
  return (
    <SimpleInfoPage
      eyebrow="이용 안내"
      title="서비스 범위와 사용자 책임을 거래 흐름 중심으로 정리합니다"
      description="긴 법률 문구보다 먼저, 사용자가 어떤 화면에서 어떤 책임을 갖는지 이해할 수 있게 구성합니다."
      secondaryAction={{ label: "홈으로 돌아가기", href: "/" }}
      cards={[
        {
          label: "서비스 범위",
          title: "탐색, 시세 확인, 판매 준비",
          description: "현재 블루프린트가 다루는 화면 범위와 책임 경계를 먼저 구분합니다.",
        },
        {
          label: "거래 기준",
          title: "가격과 상태 정보 해석",
          description: "호가와 최근 거래가, 상태 설명이 어떻게 읽혀야 하는지 기본 기준을 정리합니다.",
        },
        {
          label: "사용자 책임",
          title: "등록 정보의 정확성",
          description: "판매 등록과 계정 정보 입력에서 사용자가 책임져야 할 최소 항목을 정리합니다.",
        },
      ]}
    />
  );
}
