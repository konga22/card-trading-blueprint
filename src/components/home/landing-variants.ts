export type LandingVariantKey = "professional" | "creative" | "minimalist";

type Metric = {
  label: string;
  value: string;
};

type Activity = {
  title: string;
  meta: string;
  tone: "brand" | "soft" | "neutral";
};

type StoryCard = {
  title: string;
  description: string;
  stat: string;
};

export type LandingVariant = {
  key: LandingVariantKey;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  dashboardTitle: string;
  dashboardDescription: string;
  metrics: Metric[];
  activities: Activity[];
  storyTitle: string;
  storyDescription: string;
  storyCards: StoryCard[];
  insightTitle: string;
  insightBody: string;
  insightPoints: string[];
};

export const landingVariants: Record<LandingVariantKey, LandingVariant> = {
  professional: {
    key: "professional",
    label: "Professional",
    eyebrow: "프로페셔널 방향",
    title: "가격과 신뢰를 정리한 카드 거래 플랫폼",
    description:
      "처음 들어온 사용자도 바로 가격 감을 잡고, 숙련자는 곧바로 탐색과 거래로 이어질 수 있는 정돈된 랜딩 구조입니다.",
    ctaPrimary: "탐색 시작",
    ctaSecondary: "시세 보기",
    dashboardTitle: "정제형 거래 대시보드",
    dashboardDescription: "최근 거래가, 검수 여부, 응답률을 동시에 보여주는 운영형 목업입니다.",
    metrics: [
      { label: "실시간 매물", value: "1,284" },
      { label: "최근 거래", value: "328건" },
      { label: "검수 가능", value: "72%" },
    ],
    activities: [
      { title: "피카츄 VMAX", meta: "최근 체결 318,000원", tone: "brand" },
      { title: "리자몽 ex SAR", meta: "신뢰 판매자 4.9", tone: "soft" },
      { title: "푸른눈의 백룡", meta: "오늘 조회 4.2배", tone: "neutral" },
    ],
    storyTitle: "플랫폼 중심의 메시지",
    storyDescription: "탐색, 시세, 판매 등록이 각각의 흐름으로 정리되는 플랫폼 인상을 줍니다.",
    storyCards: [
      {
        title: "탐색 흐름 분리",
        description: "홈은 랜딩에 집중하고, 실제 필터링은 전용 페이지로 넘깁니다.",
        stat: "/discover",
      },
      {
        title: "시세 기준 제시",
        description: "최근 거래량과 검수 가능 여부를 같이 보여줘 판단 속도를 높입니다.",
        stat: "/market",
      },
      {
        title: "판매 등록 유도",
        description: "판매 플로우는 별도 페이지에서 더 밀도 있게 이어집니다.",
        stat: "/sell/start",
      },
    ],
    insightTitle: "왜 이 방향이 플랫폼답게 보이는가",
    insightBody:
      "콘텐츠보다 정보 흐름이 먼저 보이도록 구성해, 카드 거래 서비스가 운영형 제품처럼 느껴지게 합니다.",
    insightPoints: [
      "랜딩에서 설명보다 행동 우선",
      "가격과 신뢰를 같은 레이어에 배치",
      "다음 페이지로 이동하는 경로를 명확히 노출",
    ],
  },
  creative: {
    key: "creative",
    label: "Creative",
    eyebrow: "크리에이티브 방향",
    title: "수집의 재미를 살린 카드 거래 플랫폼",
    description:
      "메타몽 컬러를 더 전면에 세우고, 카드가 움직이는 느낌의 목업으로 커뮤니티와 컬렉션 감도를 강조한 랜딩 시안입니다.",
    ctaPrimary: "인기 카드 보기",
    ctaSecondary: "고급 탐색 열기",
    dashboardTitle: "컬렉션 보드",
    dashboardDescription: "가격판, 즐겨찾기, 실시간 반응이 겹쳐 보이는 감각적인 모션형 목업 구조입니다.",
    metrics: [
      { label: "관심 카드", value: "9,412" },
      { label: "위시리스트", value: "2.7k" },
      { label: "즉시 판매", value: "164건" },
    ],
    activities: [
      { title: "Ditto Pick", meta: "오늘 급상승 카드", tone: "brand" },
      { title: "Wish Alert", meta: "저장 카드 가격 하락", tone: "soft" },
      { title: "Seller Pulse", meta: "응답 빠른 판매자", tone: "neutral" },
    ],
    storyTitle: "브랜드 감도 중심의 메시지",
    storyDescription: "컬렉션과 발견의 재미를 더 강하게 드러내는 스타일입니다.",
    storyCards: [
      {
        title: "카드 발견 경험",
        description: "스크롤보다 시각적인 레이어가 먼저 시선을 끌도록 설계합니다.",
        stat: "Picks",
      },
      {
        title: "시세와 반응성",
        description: "거래량과 반응 속도, 저장 수를 조합해 활기를 표현합니다.",
        stat: "Signals",
      },
      {
        title: "브랜드 캐릭터",
        description: "메타몽 톤을 중심에 두고 랜딩의 캐릭터를 또렷하게 만듭니다.",
        stat: "Ditto",
      },
    ],
    insightTitle: "왜 이 방향이 더 창의적으로 보이는가",
    insightBody:
      "동일한 정보라도 레이어와 비율을 과감하게 써서, 카드 거래가 단순한 마켓보다 더 문화적인 공간처럼 보입니다.",
    insightPoints: [
      "비대칭 레이아웃과 겹침 효과",
      "브랜드 컬러를 강조색이 아니라 분위기로 활용",
      "대시보드를 카드 수집 보드처럼 연출",
    ],
  },
  minimalist: {
    key: "minimalist",
    label: "Minimalist",
    eyebrow: "미니멀 방향",
    title: "핵심만 남긴 카드 거래 플랫폼",
    description:
      "공백을 넓게 쓰고 장식을 거의 제거해, 가격과 거래 흐름이 가장 맑게 읽히는 미니멀한 랜딩 방향입니다.",
    ctaPrimary: "가격부터 보기",
    ctaSecondary: "입문 흐름 보기",
    dashboardTitle: "절제된 대시보드",
    dashboardDescription: "숫자와 상태만 조용히 배치해, 제품의 신뢰감과 절제를 우선하는 목업입니다.",
    metrics: [
      { label: "체결 기준", value: "최근 24h" },
      { label: "평균 응답", value: "9분" },
      { label: "안전결제", value: "기본 제공" },
    ],
    activities: [
      { title: "Top Match", meta: "피카츄 V 312,000원", tone: "brand" },
      { title: "Safe Trade", meta: "검수 가능 매물 증가", tone: "soft" },
      { title: "Seller Score", meta: "평점 4.9 유지", tone: "neutral" },
    ],
    storyTitle: "절제된 랜딩 메시지",
    storyDescription: "카드 거래에 필요한 최소한의 정보만 남겨 가장 깔끔한 첫인상을 만듭니다.",
    storyCards: [
      {
        title: "설명보다 구조",
        description: "카피 양을 줄이고 정보 위계를 더 크게 드러냅니다.",
        stat: "Clear",
      },
      {
        title: "가격 중심",
        description: "최근 거래와 신뢰 정보만 조용히 보여줘 판단 피로를 줄입니다.",
        stat: "Price",
      },
      {
        title: "다음 행동 최소화",
        description: "홈에서는 가장 중요한 두세 개 이동만 열어둡니다.",
        stat: "Focus",
      },
    ],
    insightTitle: "왜 이 방향이 더 미니멀하게 보이는가",
    insightBody:
      "배경과 표면을 거의 같은 톤으로 정리하고, 카드 거래에서 중요한 숫자와 행동 버튼만 또렷하게 남깁니다.",
    insightPoints: [
      "과한 장식과 구분선 제거",
      "넓은 여백으로 텍스트 밀도 감소",
      "색보다 간격과 타이포로 계층 표현",
    ],
  },
};
