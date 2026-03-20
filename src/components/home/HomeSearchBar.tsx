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
      <div className={styles.searchLead}>
        <div className={styles.searchLeadHeader}>
          <div className={styles.eyebrow}>Search Dock</div>
          <Link className={styles.inlineLink} href="/search/advanced">
            상세 검색
          </Link>
        </div>
        <h2 className={styles.searchTitle}>카드명, 카드번호, 세트명으로 바로 찾기</h2>
        <p className={styles.searchLeadText}>
          번개장터처럼 검색이 시작점이고, KREAM처럼 가격 기준을 빠르게 읽을 수 있게 홈 구조를 다시 잡았습니다.
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
            placeholder="피카츄 ex, OP05-060, 포켓몬 카드 151"
            aria-label="카드 검색"
          />
        </div>
        <div className={styles.searchActions}>
          <button className={styles.searchSubmit} type="submit">
            검색
          </button>
        </div>
      </form>

      <div className={styles.searchMetaRail}>
        <div className={styles.searchMetaBlock}>
          <div className={styles.searchClusterLabel}>추천 검색</div>
          <div className={styles.chipRow} aria-label="추천 검색어">
            {searchSuggestions.map((item, index) => (
              <HomeChip key={item} active={index === 0} href={`/search?q=${encodeURIComponent(item)}`}>
                {item}
              </HomeChip>
            ))}
          </div>
        </div>

        <div className={styles.searchMetaBlock}>
          <div className={styles.searchClusterLabel}>게임 카테고리</div>
          <div className={styles.chipRow} aria-label="게임 필터">
            {gameTabs.map((item, index) => (
              <HomeChip
                key={item.key}
                active={index === 0}
                href={item.key === "all" ? "/search" : `/search?q=${encodeURIComponent(item.label)}`}
              >
                {item.label}
              </HomeChip>
            ))}
          </div>
        </div>

        <div className={styles.inlineLinks}>
          <Link className={styles.inlineLink} href="/discover">
            게임별 탐색 보기
          </Link>
          <Link className={styles.inlineLink} href="/market">
            최근 거래 흐름 보기
          </Link>
          <Link className={styles.inlineLink} href="/sell/start">
            판매 준비 체크
          </Link>
        </div>
      </div>
    </HomeCard>
  );
}
