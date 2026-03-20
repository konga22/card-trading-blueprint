# Design System Master

이 문서는 `card-trading-blueprint`의 전역 디자인 기준이다.  
페이지별 예외가 있으면 `design-system/card-trading-blueprint/pages/*.md`가 이 문서를 덮어쓴다.

## Source Stack

이 프로젝트는 아래 네 축을 조합한다.

- 번개장터: 검색 중심 장터 구조, 정보 밀도, 안전결제 문맥
- KREAM: 프리미엄 리셀 톤, 정갈한 타이포 위계, 정책/검수 신뢰
- 당근: 따뜻한 진입감, 근거리 거래 문맥, 신뢰를 홈에 배치하는 방식
- 포켓몬 공식 사이트: 캐릭터 및 카드 이미지의 공식 출처

## Product Personality

- 한국형 카드 리셀 마켓
- 정갈하지만 차갑기만 하진 않은 화면
- 귀엽기보다 신뢰 가능한 화면
- 팬 감성보다 거래 판단이 우선되는 화면

## Visual Direction

- 배경은 웜 뉴트럴
- 기본 액션은 블랙 계열
- 신뢰 정보는 블루
- 가벼운 온기와 입문 흐름은 오렌지
- 장식보다 타이포와 간격으로 분위기를 만든다

## Palette

| Role | Value |
|---|---|
| Canvas | `#F5F4F1` |
| Surface | `#FFFFFF` |
| Subtle Surface | `#F0EEE8` |
| Border | `#E4E1D8` |
| Strong Border | `#CBC5B7` |
| Text Primary | `#111111` |
| Text Secondary | `#4B5563` |
| Text Tertiary | `#7A7F87` |
| Action Primary | `#111111` |
| Warm Accent | `#FF6F0F` |
| Trust Accent | `#2563EB` |
| Success | `#0F9D58` |
| Warning | `#F59E0B` |
| Danger | `#D64545` |

## Typography

- UI font: `Pretendard Variable`
- Fallback: `Noto Sans KR`
- Numeric/data font: `Space Grotesk`

사용 원칙:

- 제목은 짧고 강하게
- 본문은 읽기 쉬운 폭 유지
- 가격과 시세는 tabular numerals 사용

## Layout Rules

- Mobile-first
- 기본 단위는 `8px`
- radius는 `10 / 14 / 18`
- 넓은 여백보다 빠른 정보 스캔이 우선
- 첫 화면에서 검색과 주요 행동이 보여야 함

## Interaction Rules

- hover는 색, border, shadow 변화만 사용
- layout shift 금지
- duration은 `120ms - 180ms`
- focus ring은 항상 보여야 함
- `prefers-reduced-motion` 지원

## Search Rules

- 검색은 보조 기능이 아니라 핵심 행동이다
- 홈, 검색 허브, 리스트 어디서나 검색 진입이 쉬워야 한다
- 플레이스홀더는 검색 가능한 필드를 말해야 한다
- 결과 없음 상태는 다음 행동을 제안해야 한다

## Listing Rules

- 카드 한 장에서 최소한 아래 정보를 읽을 수 있어야 한다
  - 카드명
  - 카드번호 또는 시리즈
  - 상태/등급
  - 현재 가격 또는 최근 거래가
  - 안전결제/검수/배송 같은 신뢰 신호

- 상품 카드보다 장식이 더 크면 안 된다
- 첫 화면의 카드 섹션은 이유 있는 큐레이션이어야 한다

## Trust Rules

- 안전결제, 검수, 보호 장치는 첫 화면에도 등장해야 한다
- 정책은 약관 링크로만 숨기지 않는다
- 판매자 신뢰 정보는 가격 근처에 배치한다

## Image Rules

- 포켓몬 캐릭터/도감 이미지는 `pokemonkorea.co.kr`만 사용
- 카드 이미지는 `pokemoncard.co.kr`만 사용
- 비공식 이미지 사용 금지
- 이미지에 과한 효과를 씌우지 않는다

## Accessibility Rules

- 텍스트 대비 4.5:1 이상
- 터치 영역 최소 `44x44`
- 색만으로 상태를 구분하지 않음
- 의미 있는 이미지에는 alt text 필수

## Anti-Patterns

- AI SaaS처럼 보이는 보라색 그라데이션
- 유리 패널 남발
- 장식용 3D 렌더
- 히어로 한가운데 큰 슬로건만 있고 검색은 밑으로 내려가는 구조
- 팬 커뮤니티처럼 보이는 과한 캐릭터 사용
- 차트와 수치를 이유 없이 많이 보여주는 첫 화면
