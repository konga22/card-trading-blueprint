# Figma Setup

## 목적

이 문서는 디자인 파일을 실제 구현과 바로 연결하기 위한 운영 규칙이다.  
이번 프로젝트의 Figma는 “아트보드”보다 “거래 UI 설계 문서”에 가깝게 운영한다.

## 파일 구조

권장 페이지:

- `00_Reference`
- `01_Foundations`
- `02_Core Components`
- `03_Home`
- `04_Search`
- `05_Market`
- `06_Sell`
- `07_States`

## Reference 페이지 운영

이 페이지에는 아래 네 묶음만 둔다.

- 번개장터 참고 메모
- KREAM 참고 메모
- 당근 참고 메모
- 포켓몬 공식 자산 메모

규칙:

- 스크린샷만 붙이지 말고, “왜 참고하는지”를 한 줄로 적는다.
- 예쁜 요소보다 구조와 정보 위계를 메모한다.

## 포켓몬 자산 규칙

- 도감/캐릭터 이미지는 `pokemonkorea.co.kr/pokedex` 출처만 사용
- 카드 이미지는 `pokemoncard.co.kr` 출처만 사용
- 각 이미지 프레임 설명에 원본 URL을 남긴다
- 비공식 팬아트는 파일에 넣지 않는다

## Foundations

정의할 스타일:

- Color styles
- Text styles
- Effect styles
- Grid styles

필수 스타일 이름:

- `bg/canvas`
- `bg/surface`
- `bg/subtle`
- `border/default`
- `border/strong`
- `text/primary`
- `text/secondary`
- `text/tertiary`
- `action/primary`
- `accent/warm`
- `accent/trust`
- `state/success`
- `state/warning`
- `state/danger`

텍스트 스타일:

- `display`
- `headline-1`
- `headline-2`
- `title`
- `body`
- `body-sm`
- `meta`

## 프레임 기준

- Mobile: `390px`
- Tablet: `768px`
- Desktop: `1440px`

그리드:

- 모바일은 4열보다 간격 우선
- 데스크톱은 12열
- 좌우 여백은 레이아웃보다 읽기 편한 폭을 우선

## 먼저 만들 컴포넌트

1. Header
2. Search dock
3. Primary button
4. Secondary button
5. Game chip
6. Trust badge
7. Product card
8. Market row
9. Section header
10. Footer block

## 컴포넌트 규칙

- 시각 variation보다 상태 variation을 먼저 정의한다.
- 카드 컴포넌트에는 이미지 없음 상태도 포함한다.
- 검색 컴포넌트에는 기본, 포커스, 자동완성, 결과 없음 상태를 포함한다.

## 페이지별 우선순위

### Home

- 검색 도크
- 히어로
- 게임 탭
- 퀵패스
- 트러스트 스트립
- 마켓 스냅샷

### Search

- 필터 바
- 결과 리스트
- 정렬
- 빈 상태
- 결과 없음 상태

### Market

- 가격 행
- 상승/하락 상태
- 시세 요약 패널

### Sell

- 등록 준비 패널
- 단계 가이드
- 주의사항

## 네이밍 규칙

- 페이지: `Home/Desktop`, `Search/Mobile`
- 컴포넌트: `Card/Product/Default`
- 상태: `Search/Input/Focused`
- 변형: `Chip/Game/Active`

## 핸드오프 규칙

- 모든 텍스트는 실제 서비스 문장처럼 쓴다.
- 숫자는 더미라도 일관된 단위를 사용한다.
- 가격, 거래 수, 등급은 시안마다 제멋대로 바꾸지 않는다.
- 구현자가 읽어야 할 메모는 프레임 오른쪽에 짧게 남긴다.

## 체크리스트

- 첫 화면에서 검색이 가장 먼저 보이는가
- 홈이 팬페이지가 아니라 거래 서비스처럼 보이는가
- 포켓몬 이미지는 전부 공식 출처인가
- 안전/검수/결제 정보가 충분히 앞에 나오는가
- 과한 그라데이션과 장식 요소가 제거되었는가
