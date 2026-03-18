# Design Reference

이 문서는 카드 트레이딩 서비스 홈 화면을 설계할 때 **무엇을 어디서 참고했는지**와 **무엇을 그대로 가져오지 말아야 하는지**를 정리한다.

## 1. Tossinvest 메인에서 읽은 핵심

공개된 tossinvest 페이지 텍스트 기준으로 메인에는 아래 같은 짧은 라벨과 필터 구조가 보인다.

- 상단 라벨: `홈`, `피드`, `주식 골라보기`, `내 계좌`
- 검색 진입: `/ 를 눌러 검색하세요`
- 필터: `전체`, `국내`, `해외`
- 차트/정렬 관점: `거래대금`, `거래량`, `급상승`, `급하락`
- 기간: `실시간`, `1일`, `1주일`, `1개월`, `3개월`, `6개월`, `1년`

### 우리 서비스로 번역
- 홈 상단은 짧은 명사형 라벨을 유지한다.
- 검색을 항상 가까운 위치에 둔다.
- 거대한 메뉴 트리보다 “짧은 필터의 단계적 확장”을 사용한다.
- 게임 / 가격 / 상태 / 검수 같은 짧은 필터로 시작한다.

### 가져오지 말 것
- 금융 지표 자체를 카드 서비스에 기계적으로 복제
- 지나친 숫자 밀도
- 복잡한 차트 드릴다운

---

## 2. Toss 공식 문서에서 확정할 수 있는 것

### 폰트
앱인토스 피그마 가이드 기준:
- Figma: `SF Pro`
- 실제 Toss 앱: `Toss Product Sans` 자동 적용
- Toss Product Sans는 별도 자산으로 배포되지 않음

### 타이포
TDS 공식 Typography 토큰 기본값:
- T1: 30 / 40
- T2: 26 / 35
- T3: 22 / 31
- T4: 20 / 29
- T5: 17 / 25.5
- T6: 15 / 22.5
- T7: 13 / 19.5
- ST8: 19 / 28
- ST9: 18 / 27
- ST10: 16 / 24
- ST11: 14 / 21
- ST12: 12 / 18
- ST13: 11 / 16.5

### 색상
TDS 공식 주요 값:
- grey50: `#f9fafb`
- grey100: `#f2f4f6`
- grey200: `#e5e8eb`
- grey600: `#6b7684`
- grey700: `#4e5968`
- grey800: `#333d4b`
- grey900: `#191f28`
- blue500: `#3182f6`
- blue700: `#1b64da`

### 피그마 작업 방식
공식 피그마 가이드 기준:
- 375px 폭 기준 작업 권장
- 최상단 Navigation 사용
- 상단 Top / ListRow 기반 조합 권장
- 컴포넌트 자체 padding을 믿고 gap 남용 자제

---

## 3. 이 프로젝트에서의 해석

### 폰트 해석
웹에서는 Toss Product Sans를 직접 쓰지 못하므로 아래 우선순위로 구현한다.

```css
-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
"Pretendard Variable", Pretendard, "Noto Sans KR", sans-serif
```

이건 **공식 Toss 웹 지정값이 아니라 현실적 대체안**이다.

### 스타일 해석
- 배경은 밝고 공기감 있게
- 텍스트 계층은 명확하게
- 표면은 흰색 카드 중심
- 브랜드 블루는 버튼/포커스/활성 상태에만 제한적으로
- 라벨은 짧고 가벼운 명사형

---

## 4. 카드 서비스에 적용하는 법

### 신규 유입용
- 첫 행동 카드 4개
- 입문 추천 섹션
- 3단계 안내
- 쉬운 카피

### 숙련자용
- 검색 고정
- 카드번호/세트 진입
- 고급 필터 진입 CTA
- 시세/최근 거래 흐름 요약

### 신뢰 설계
- 검수 가능
- 안전결제
- 판매자 평판
- 최근 거래 정보

---

## 5. 디자인 감각 요약

원하는 결과물의 인상은 아래 6개가 동시에 느껴져야 한다.

1. **맑다**
2. **짧다**
3. **빠르다**
4. **정리돼 있다**
5. **안심된다**
6. **깊어질 준비가 돼 있다**

---

## References

- Tossinvest home: https://www.tossinvest.com
- 앱인토스 피그마 가이드: https://developers-apps-in-toss.toss.im/design/prepare/design.html
- TDS Typography: https://tossmini-docs.toss.im/tds-react-native/foundation/typography/
- TDS Colors: https://tossmini-docs.toss.im/tds-react-native/foundation/colors/
