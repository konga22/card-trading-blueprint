# Design Reference

## 문서 목적

이 문서는 카드 거래 블루프린트의 시각 방향을 실제 한국 서비스 레퍼런스에 맞춰 다시 정의한다.  
목표는 “예쁜 랜딩”이 아니라 “실제로 거래가 일어날 것 같은 홈”이다.

## 참고한 공식 레퍼런스

- 번개장터 모바일/검색 흐름: `https://m.bunjang.co.kr/`
- 번개장터 거래 맥락 참고 자료: `https://static.bunjang.co.kr/press/Bunjang_ESG_report_20230227.pdf`
- 번개장터 검색 결과 예시: `https://mercari.bunjang.co.kr/search/result?q=%EC%BB%A4%EB%B2%84`
- KREAM 서비스: `https://kream.co.kr/`
- KREAM 인사이트 리포트: `https://files.kream.co.kr/service/manual-uploads/7fc32/%5BKREAM%5D%2024_1H_InsightReport.pdf`
- 당근 서비스 소개: `https://www.daangn.com/kr/`
- 당근 안전거래/이용자 보호 보도자료: `https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC-%EA%B2%BD%EC%B0%B0%EC%B2%AD-%EC%A3%BC%EC%B5%9C-%EC%82%AC%EA%B8%B0%EB%B0%A9%EC%A7%80-%EA%B5%AD%EC%A0%9C-%EC%BB%A8%ED%8D%BC%EB%9F%B0%EC%8A%A4%EC%84%9C-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EC%82%AC%EA%B8%B0-%EB%8C%80%EC%9D%91-%EC%A0%84%EB%9E%B5-%EB%B0%9C%ED%91%9C/`
- 포켓몬 공식 사이트: `https://pokemonkorea.co.kr/`
- 포켓몬 카드 공식 사이트: `https://pokemoncard.co.kr/main`

## ui-ux-pro-max 결과 해석

`ui-ux-pro-max` 검색기에서는 `Marketplace / Directory`, `Search-first landing`, `Swiss Modernism 2.0`, `Trust & Authority` 패턴이 유효했다.

채택:
- 검색이 첫 CTA인 구조
- 카테고리/디렉터리형 진입
- 강한 정보 위계
- 신뢰 배지와 거래 기준을 카드 가까이에 붙이는 방식

폐기:
- 보라색 중심 Marketplace 팔레트
- “Vibrant & Block-based”의 과한 하이콘트라스트 장난감 톤
- 과한 그라데이션, 유리판, AI SaaS 랜딩 느낌

## 레퍼런스별로 가져올 것

### 번개장터에서 가져올 것

- 검색이 홈의 시작점이라는 점
- 빠르게 좁혀 들어가는 카테고리/칩 구조
- 카드 근처에 붙는 거래 정보의 밀도
- “둘러보다가 바로 거래로 들어가는” 흐름

### KREAM에서 가져올 것

- 가격 정보의 위계
- 과장 없는 블랙/화이트 중심 화면
- 검수, 정책, 거래 기준이 가격 근처에서 읽히는 구조
- 프리미엄 리셀처럼 보이는 단정한 카드 밀도

### 당근에서 가져올 것

- 부담 없는 첫 진입감
- 안전거래와 보호 장치를 홈에서 먼저 보여주는 태도
- 서비스 카피가 짧고 인간적인 톤
- “이 화면에서 뭘 해야 하는지”가 즉시 읽히는 구조

### 포켓몬 공식에서 가져올 것

- 포켓몬 캐릭터와 카드 이미지는 공식 출처만 사용
- 비공식 PNG, 팬아트, 위키 이미지 사용 금지
- 카드 아트는 장식이 아니라 상품 정보의 일부로 다룰 것

## 최종 방향

이 프로젝트는 팬페이지처럼 보이면 안 된다.  
`KREAM의 정돈감 + 번개장터의 검색/거래성 + 당근의 안심 톤`을 카드 거래 도메인으로 옮긴다.

핵심 원칙:
- 히어로보다 검색이 먼저 읽혀야 한다.
- 색으로 예쁘게 만드는 대신 구조로 신뢰를 만든다.
- 카드 이미지는 크더라도 “상품 카드”처럼 보여야 한다.
- 비포켓몬 카드는 억지 이미지보다 정보형 플레이스홀더가 더 낫다.
- 홈은 설명서가 아니라 거래 입구여야 한다.

## 금지 사항

- 보라색 AI SaaS 톤
- 의미 없는 유리판 효과
- 과한 그라데이션 배경
- 카드보다 배경이 더 눈에 띄는 구성
- 감성 카피만 크고 거래 정보는 약한 화면
- 포켓몬 비공식 이미지 사용

## 연결 문서

- [docs/design-tokens.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/design-tokens.md)
- [docs/home-wireframe.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/home-wireframe.md)
- [docs/figma-setup.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/figma-setup.md)
- [MASTER.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/design-system/card-trading-blueprint/MASTER.md)
- [landing.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/design-system/card-trading-blueprint/pages/landing.md)
