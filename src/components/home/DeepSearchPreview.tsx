import styles from "./home.module.css";

import { deepSearchItems } from "./home-data";
import { HomeButton, HomeCard, HomeSection } from "./home-ui";

export function DeepSearchPreview() {
  return (
    <HomeSection
      eyebrow="Advanced Search"
      title="깊은 검색이 필요할 때를 위한 미리보기"
      description="홈에서는 방향만 잡고, 상세 조건은 별도 검색 화면에서 차분하게 좁혀갑니다."
    >
      <HomeCard className={styles.deepPanel}>
        <div className={styles.deepList}>
          {deepSearchItems.map((item, index) => (
            <div key={item.title} className={styles.deepItem}>
              <div className={styles.stepBadge}>0{index + 1}</div>
              <p className={styles.deepTitle}>{item.title}</p>
              <p className={styles.deepDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.deepFooter}>
          <p className={styles.mutedText}>
            카드번호, 세트, 언어, 상태를 함께 고르기 시작하면 전용 검색 화면이 더
            효율적입니다.
          </p>
          <HomeButton variant="primary" href="/search/advanced">
            상세 검색 열기
          </HomeButton>
        </div>
      </HomeCard>
    </HomeSection>
  );
}
