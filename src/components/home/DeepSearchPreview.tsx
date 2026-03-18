import styles from "./home.module.css";
import { deepSearchItems } from "./home-data";
import { HomeButton, HomeCard, HomeSection } from "./home-ui";

export function DeepSearchPreview() {
  return (
    <HomeSection
      eyebrow="고급 탐색"
      title="세트, 카드번호, 언어까지 깊게 찾을 수 있어요"
      description="초보는 부담 없이, 숙련자는 더 좁고 빠르게 탐색할 수 있게 만든 미리보기입니다."
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
          <p className={styles.mutedText}>언어/레어도/등급 필터는 다음 단계에서 자연스럽게 열 수 있습니다.</p>
          <HomeButton variant="primary" href="/search/advanced">
            고급 탐색 열기
          </HomeButton>
        </div>
      </HomeCard>
    </HomeSection>
  );
}
