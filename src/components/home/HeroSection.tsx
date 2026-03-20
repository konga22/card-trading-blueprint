import styles from "./home.module.css";

import { HomeButton } from "./home-ui";

export function HeroSection() {
  return (
    <section className={styles.heroPanel}>
      <div className={styles.heroBadge}>카드 거래 블루프린트</div>
      <h1 className={styles.heroTitle}>검색부터 시작하고, 시세를 확인한 뒤, 신뢰 신호를 보고 행동합니다.</h1>
      <p className={styles.heroDescription}>
        홈은 전체 기능을 억지로 다 담지 않고, 탐색과 시세, 판매 준비를 분명한 단계로 나눠서 안내합니다.
      </p>
      <div className={styles.heroCtas}>
        <HomeButton variant="primary" href="/discover">
          탐색 시작
        </HomeButton>
        <HomeButton variant="secondary" href="/beginner">
          입문 가이드 보기
        </HomeButton>
      </div>
      <div className={styles.heroMeta}>
        카드 거래를 처음 보는 사람도 다음에 어디로 가야 하는지가 보이도록 흐름을 설계했습니다.
      </div>
      <div className={styles.miniDeck} aria-hidden="true">
        <div className={styles.miniCard}>
          <p className={styles.miniCardTitle}>탐색 분리</p>
          <p className={styles.miniCardText}>게임별 탐색과 입문 추천은 별도 페이지에서 더 선명하게 보여줍니다.</p>
        </div>
        <div className={styles.miniCard}>
          <p className={styles.miniCardTitle}>다음 행동 강조</p>
          <p className={styles.miniCardText}>시세 확인과 판매 준비는 각각 전용 흐름으로 이어져 혼란을 줄입니다.</p>
        </div>
      </div>
    </section>
  );
}
