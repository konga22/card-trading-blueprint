# Design Reference

## 문서 목적

이 문서는 카드 거래 블루프린트의 시각 방향을 다시 정의한다.  
이번 목표는 “예쁜 랜딩”이 아니라 “KREAM에 가까운 리셀 거래 홈”이다.

## 우선순위

1. KREAM
2. 번개장터
3. 당근

이번 리디자인에서 KREAM을 가장 강하게 따른다.  
번개장터와 당근은 구조와 신뢰 태도만 참고하고, 화면 인상은 KREAM 쪽으로 맞춘다.

## 참고한 공식 레퍼런스

- KREAM: `https://kream.co.kr/`
- KREAM 리포트: `https://files.kream.co.kr/service/manual-uploads/7fc32/%5BKREAM%5D%2024_1H_InsightReport.pdf`
- 번개장터 모바일: `https://m.bunjang.co.kr/`
- 번개장터 리포트: `https://static.bunjang.co.kr/press/Bunjang_ESG_report_20230227.pdf`
- 번개장터 검색 결과 예시: `https://mercari.bunjang.co.kr/search/result?q=%EC%BB%A4%EB%B2%84`
- 당근: `https://www.daangn.com/kr/`
- 당근 이용자 보호 보도자료: `https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC-%EA%B2%BD%EC%B0%B0%EC%B2%AD-%EC%A3%BC%EC%B5%9C-%EC%82%AC%EA%B8%B0%EB%B0%A9%EC%A7%80-%EA%B5%AD%EC%A0%9C-%EC%BB%A8%ED%8D%BC%EB%9F%B0%EC%8A%A4%EC%84%9C-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EC%82%AC%EA%B8%B0-%EB%8C%80%EC%9D%91-%EC%A0%84%EB%9E%B5-%EB%B0%9C%ED%91%9C/`
- 포켓몬 공식 사이트: `https://pokemonkorea.co.kr/`
- 포켓몬 카드 공식 사이트: `https://pokemoncard.co.kr/main`

## ui-ux-pro-max 해석

검색기 결과에서는 `Marketplace / Directory`, `Search-first landing`, `Trust & Authority` 패턴이 유효했다.  
하지만 보라색 중심 Marketplace 팔레트와 장난감 같은 블록 스타일은 버린다.

채택:
- 검색이 첫 CTA인 구조
- 카테고리/디렉터리형 진입
- 가격 위계가 강한 카드 레이아웃
- 신뢰 정보가 상품 가까이에 붙는 방식

폐기:
- 보라색 마켓플레이스 팔레트
- AI SaaS 랜딩 같은 유리판/과한 그라데이션
- 카드보다 배경이 더 강한 연출

## 레퍼런스별로 가져올 것

### KREAM에서 가져올 것

- 블랙/화이트 중심의 리셀 톤
- 가격 정보의 강한 위계
- 검수, 정책, 거래 기준이 가격 근처에서 읽히는 구조
- 프리미엄 리셀처럼 보이는 정돈된 카드 밀도

### 번개장터에서 가져올 것

- 검색이 홈의 시작점이라는 점
- 빠르게 좁혀 들어가는 카테고리/칩 구조
- 카드 근처에 붙는 거래 정보의 밀도

### 당근에서 가져올 것

- 부담 없는 진입감
- 안전거래와 보호 장치를 홈에서 먼저 보여주는 태도
- 짧고 인간적인 서비스 카피

### 포켓몬 공식에서 가져올 것

- 포켓몬 캐릭터와 카드 이미지는 공식 출처만 사용
- 비공식 PNG, 팬아트, 위키 이미지 사용 금지
- 카드 아트는 장식이 아니라 상품 정보의 일부로 다룰 것

## 최종 방향

이 프로젝트는 팬페이지처럼 보이면 안 된다.  
`KREAM의 정돈감`을 기본으로 하고, `번개장터의 검색/거래성`, `당근의 안심 톤`을 필요한 범위만 덧댄다.

핵심 원칙:
- 히어로보다 검색이 먼저 읽혀야 한다.
- 색으로 예쁘게 만드는 대신 구조로 신뢰를 만든다.
- 카드 이미지는 크더라도 “상품 카드”처럼 보여야 한다.
- 비포켓몬 카드는 억지 이미지보다 정보형 플레이스홀더가 더 낫다.
- 홈은 설명서가 아니라 거래 입구여야 한다.

## 금지 사항

- 보라색 AI SaaS 톤
- 과한 유리판 효과
- 과한 그라데이션 배경
- 카드보다 배경이 더 눈에 띄는 구성
- 감성 카피만 크고 거래 정보는 약한 화면
- 포켓몬 비공식 이미지 사용
