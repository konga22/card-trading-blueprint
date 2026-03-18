import styles from "./home.module.css";
import { HomeButton } from "./home-ui";

export function HeroSection() {
  return (
    <section className={styles.heroPanel}>
      <div className={styles.heroBadge}>처음 시작해도 쉬워요</div>
      <h1 className={styles.heroTitle}>카드 거래를 시작하는 첫 화면을 더 짧고 분명하게 바꿨습니다</h1>
      <p className={styles.heroDescription}>
        홈은 이제 길게 스크롤하는 소개 페이지가 아니라, 탐색과 시세와 판매 페이지로
        바로 이동시키는 허브 역할만 맡습니다.
      </p>
      <div className={styles.heroCtas}>
        <HomeButton variant="primary" href="/discover">
          카드 탐색 시작
        </HomeButton>
        <HomeButton variant="secondary" href="/beginner">
          입문 가이드 보기
        </HomeButton>
      </div>
      <div className={styles.heroMeta}>홈 · 탐색 · 시세 · 판매를 각각 전용 페이지로 분리했습니다</div>
      <div className={styles.miniDeck} aria-hidden="true">
        <div className={styles.miniCard}>
          <p className={styles.miniCardTitle}>분리된 탐색</p>
          <p className={styles.miniCardText}>인기 카드와 입문 추천은 탐색 페이지에서 더 넓게 이어집니다.</p>
        </div>
        <div className={styles.miniCard}>
          <p className={styles.miniCardTitle}>분리된 행동</p>
          <p className={styles.miniCardText}>시세와 판매 준비는 각각의 화면으로 이동해 깊게 진행합니다.</p>
        </div>
      </div>
    </section>
  );
}
