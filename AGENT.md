# AGENT.md

## 프로젝트 정의

이 저장소는 카드 거래 서비스를 실제로 운영하기 전에 제품 구조, 화면 흐름, 컴포넌트 경계, 목데이터 방향을 정리하기 위한 블루프린트다. 목적은 예쁜 시안 자체가 아니라, 사용자가 어디서 시작하고 어떤 정보로 판단하며 다음 행동으로 어떻게 이동하는지를 코드와 문서로 맞춰 두는 데 있다.

## 핵심 제품 목표

1. 첫 화면에서 사용자가 몇 초 안에 다음 행동을 고를 수 있어야 한다.
2. 가격 정보 옆에 신뢰 판단에 필요한 정보가 함께 보여야 한다.
3. 검색은 카드명만이 아니라 카드번호, 세트, 상태 같은 조건으로도 확장되어야 한다.
4. 홈, 탐색, 시세, 판매 준비, 계정 보조 페이지의 역할이 분리되어야 한다.

## 주요 사용자

- 처음 거래를 시작하는 입문 사용자
- 여러 매물을 빠르게 비교하려는 수집가
- 판매 준비를 빠르게 끝내고 등록 단계로 가려는 사용자

## 주요 사용자 작업

- 어디서 시작해야 할지 결정하기
- 게임이나 목적별로 카드를 훑어보기
- 최근 거래와 판매자 신뢰 단서를 함께 확인하기
- 판매 전 준비해야 할 정보를 파악하기
- 상세 조건으로 검색 범위를 좁히기

## 제품 원칙

- 홈은 거대한 카탈로그가 아니라 행동 선택 화면이어야 한다.
- 짧고 행동 중심적인 문구를 우선한다.
- 검색과 필터 상태는 가능하면 URL로 표현한다.
- 기본 탐색과 상세 탐색의 밀도를 분리한다.
- 백엔드 계약이 생기기 전까지는 `src/lib/mocks/`의 데이터로 흐름을 만든다.
- 페이지 책임과 공용 컴포넌트 책임을 섞지 않는다.

## 라우트 책임

- `/`: 행동 선택과 서비스 방향 설명
- `/discover`: 게임, 목적, 발견형 섹션 중심의 탐색
- `/market`: 가격과 최근 거래 스냅샷
- `/search`: 일반 검색 진입과 검색 결과 허브
- `/search/advanced`: 상세 조건 탐색
- `/beginner`: 입문 사용자를 위한 순서 안내
- `/sell/start`: 판매 준비와 진입 안내
- `/account/login`, `/notifications`, `/support`, `/safety`, `/terms`, `/privacy`: 보조 정보 라우트

## 데이터와 아키텍처 규칙

- 프레임워크는 `Next.js App Router + TypeScript`를 기준으로 한다.
- 공용 UI는 `src/components/shared/`에 둔다.
- 홈 전용 UI는 `src/components/home/`에 둔다.
- 도메인 로직은 `src/features/`에 둔다.
- 타입, 상수, 목데이터, 유틸은 `src/lib/`에 둔다.
- 라우트 파일은 최대한 얇게 유지하고 실제 조합은 컴포넌트로 위임한다.
- 사용하지 않는 프로토타입 페이지나 중복 엔트리 포인트는 남기지 않는다.

## 비목표

- 실제 인증, 결제, 메시징, 백엔드 연동
- 운영자용 관리자 화면
- 완전한 판매 등록 플로우
- 실거래 서비스 수준의 법적 문서 완성

## 문서 맵

- [README.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/README.md): 저장소 입문 문서
- [docs/catalog-taxonomy.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/catalog-taxonomy.md): 분류와 검색 모델
- [docs/repo-structure.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/repo-structure.md): 폴더 구조와 파일 배치
- [docs/design-reference.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/design-reference.md): 디자인 방향 문서
- [docs/design-tokens.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/design-tokens.md): 디자인 토큰 문서
- [docs/home-wireframe.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/home-wireframe.md): 홈 정보 구조
- [docs/figma-setup.md](/Users/USER/Contacts/찌르레기/card-trading-blueprint/docs/figma-setup.md): 디자인 파일 운영 규칙
