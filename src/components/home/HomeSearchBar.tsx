import Link from "next/link";
import styles from "./home.module.css";
import { HomeCard, HomeChip } from "./home-ui";
import { searchSuggestions } from "./home-data";

function SearchIcon() {
  return (
    <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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
        <form action="/search" className={styles.searchForm}>
          <div className={styles.searchInputWrap}>
            <SearchIcon />
            <input
              className={styles.searchInput}
              type="search"
              name="q"
              defaultValue={initialQuery}
              placeholder="카드명, 카드번호, 세트를 검색해보세요"
              aria-label="카드 검색"
            />
          </div>
          <div className={styles.searchActions}>
            <button className={styles.searchSubmit} type="submit">
              검색
            </button>
          </div>
        </form>
        <div className={styles.chipRow} aria-label="검색 추천">
          {searchSuggestions.map((item, index) => (
            <HomeChip
              key={item}
              active={index === 0}
              href={`/search?q=${encodeURIComponent(item)}`}
            >
              {item}
            </HomeChip>
          ))}
        </div>
        <div className={styles.inlineLinks}>
          <Link className={styles.inlineLink} href="/search/advanced">
            고급 탐색 열기
          </Link>
        </div>
      </div>
    </HomeCard>
  );
}
