# Card Trading Service Blueprint

이 폴더는 **토스증권 메인 경험의 장점**을 카드 트레이딩 서비스 홈 화면으로 번역하기 위한 시작점이에요.

## 포함된 파일

- `AGENT.md`: 레포 전체를 처음부터 세팅하고 방향을 잃지 않게 하는 루트 지침서
- `skills/card-trading-home/SKILL.md`: 메인 홈 화면을 실제로 구현하는 상세 작업서
- `docs/design-reference.md`: 토스/TDS 공식 자료를 기준으로 한 레퍼런스 해설
- `docs/design-tokens.md`: 색상, 타이포, 간격, 라운드, 그림자 규칙
- `docs/repo-structure.md`: 빈 폴더부터 시작할 때의 권장 구조
- `docs/figma-setup.md`: 피그마 작업 방식과 컴포넌트 규칙
- `docs/home-wireframe.md`: 홈 화면 섹션별 텍스트 와이어프레임
- `docs/catalog-taxonomy.md`: 카드 분류 전략과 검색/필터 깊이 설계

## 읽는 순서

1. `AGENT.md`
2. `docs/design-reference.md`
3. `docs/repo-structure.md`
4. `docs/home-wireframe.md`
5. `skills/card-trading-home/SKILL.md`

## 핵심 방향

- **입문은 토스처럼 쉽게**
- **거래는 크림처럼 안심되게**
- **탐색은 TCG 플랫폼처럼 깊게**
- **첫 화면은 카드 백과사전이 아니라 행동 런처처럼**

## 주의

토스의 공식 문서에 따르면 **Toss Product Sans는 별도 자산으로 배포되지 않으며**, 피그마에서는 **SF Pro**를 사용해요. 실제 토스 앱에서는 Toss Product Sans가 자동 적용돼요. 따라서 이 블루프린트는:
- 피그마: `SF Pro`
- 웹 구현: `system-ui + SF Pro 계열 + Pretendard Variable` 조합

으로 작업하는 것을 권장해요. 이 웹 폰트 조합은 **토스 공식 지정값이 아니라, 현실적인 대체 구현 권장안**이에요.

## 실제 시작 체크리스트

- [ ] Next.js + TypeScript 프로젝트 생성
- [ ] `src/` 구조 생성
- [ ] 디자인 토큰과 글로벌 CSS 먼저 작성
- [ ] 공통 레이아웃 컴포넌트 생성
- [ ] 홈 화면부터 구현
- [ ] 이후 구매/판매 화면으로 확장

## 참고 문서

각 문서 하단의 `References` 섹션에서 공식 링크를 확인할 수 있어요.
