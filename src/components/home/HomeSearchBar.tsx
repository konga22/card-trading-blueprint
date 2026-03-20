import Link from "next/link";

import styles from "./home.module.css";
import { gameTabs, searchSuggestions } from "./home-data";
import { HomeCard, HomeChip } from "./home-ui";

function SearchIcon() {
  return (
    <svg
      className={styles.searchIcon}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.8 11.8L15.2 15.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type HomeSearchBarProps = {
  initialQuery?: string;
};

export function HomeSearchBar({ initialQuery = "" }: HomeSearchBarProps) {
  return (
    <HomeCard className={styles.searchPanel}>
      <div className={styles.searchBar}>
        <div className={styles.searchIntro}>
          <div className={styles.eyebrow}>Search Dock</div>
          <h2 className={styles.sectionTitle}>카드명, 카드번호, 세트명으로 바로 찾기</h2>
          <p className={styles.sectionDescription}>
            홈에서 가장 먼저 해야 할 행동은 검색입니다. 예쁜 배너보다 빠른 입력이 먼저
            보이도록 설계했습니다.
          </p>
        </div>

        <form action="/search" className={styles.searchForm}>
          <div className={styles.searchInputWrap}>
            <SearchIcon />
            <input
              className={styles.searchInput}
              type="search"
              name="q"
              defaultValue={initialQuery}
              placeholder="카드명, 카드번호, 세트명으로 검색"
              aria-label="카드 검색"
            />
          </div>
          <div className={styles.searchActions}>
            <button className={styles.searchSubmit} type="submit">
              검색
            </button>
          </div>
        </form>

        <div className={styles.searchClusters}>
          <div className={styles.searchCluster}>
            <div className={styles.searchClusterLabel}>빠른 검색</div>
            <div className={styles.chipRow} aria-label="추천 검색어">
              {searchSuggestions.map((item, index) => (
                <HomeChip key={item} active={index === 0} href={`/search?q=${encodeURIComponent(item)}`}>
                  {item}
                </HomeChip>
              ))}
            </div>
          </div>

          <div className={styles.searchCluster}>
            <div className={styles.searchClusterLabel}>게임 선택</div>
            <div className={styles.chipRow} aria-label="게임 필터">
              {gameTabs.map((item, index) => (
                <HomeChip
                  key={item.key}
                  active={index === 0}
                  href={`/search?q=${encodeURIComponent(item.label)}`}
                >
                  {item.label}
                </HomeChip>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.inlineLinks}>
          <Link className={styles.inlineLink} href="/search/advanced">
            상세 검색 열기
          </Link>
          <Link className={styles.inlineLink} href="/discover">
            게임별 큐레이션 보기
          </Link>
        </div>
      </div>
    </HomeCard>
  );
}
