import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChevronRight,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { PrimaryButton, SecondaryButton } from "@/components/shared";

import styles from "./marketplace-landing.module.css";

type Listing = {
  title: string;
  price: string;
  meta: string;
  support: string;
  href: string;
  accent: "neutral" | "brand";
};

type Category = {
  title: string;
  meta: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type ServiceLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const quickQueries = [
  "피카츄 VMAX CSR",
  "푸른눈의 백룡 1st",
  "루피 리더 패러렐",
  "PSA 10",
];

const marketStats = [
  { label: "실거래 기준", value: "12,840건" },
  { label: "중간 응답", value: "9분" },
  { label: "안전결제 사용", value: "91%" },
];

const liveListings: Listing[] = [
  {
    title: "피카츄 VMAX CSR",
    price: "318,000원",
    meta: "최근 체결 기준이 선명한 대표 매물",
    support: "검수 가능 · 응답 6분",
    href: `/search?q=${encodeURIComponent("피카츄 VMAX CSR")}`,
    accent: "brand",
  },
  {
    title: "푸른눈의 백룡 1st",
    price: "452,000원",
    meta: "신뢰 판매자 지표가 높은 매물",
    support: "안전결제 사용 · 판매자 평점 4.9",
    href: `/search?q=${encodeURIComponent("푸른눈의 백룡 1st")}`,
    accent: "neutral",
  },
  {
    title: "루피 리더 패러렐",
    price: "229,000원",
    meta: "당일 반응이 빠른 카드",
    support: "오늘 거래 27건 · 조회 상승",
    href: `/search?q=${encodeURIComponent("루피 리더 패러렐")}`,
    accent: "neutral",
  },
];

const categories: Category[] = [
  {
    title: "Pokemon",
    meta: "인기 매물 1,204건",
    description: "등급 카드와 실거래 흐름을 가장 빠르게 비교하는 구간입니다.",
    href: "/discover?category=pokemon",
    icon: Sparkles,
  },
  {
    title: "Yu-Gi-Oh!",
    meta: "오늘 거래 328건",
    description: "초판과 레어리티 기준이 중요한 매물을 중심으로 탐색합니다.",
    href: "/discover?category=yugioh",
    icon: ShieldCheck,
  },
  {
    title: "One Piece",
    meta: "조회 상승 4.1배",
    description: "패러렐과 리더 카드처럼 반응이 빠른 카드 흐름을 보여줍니다.",
    href: "/discover?category=onepiece",
    icon: TrendingUp,
  },
  {
    title: "Sports",
    meta: "검수 가능 비율 73%",
    description: "상태 판단이 중요한 스포츠 카드 거래를 별도 기준으로 모았습니다.",
    href: "/discover?category=sports",
    icon: BadgeCheck,
  },
];

const serviceLinks: ServiceLink[] = [
  {
    title: "안전결제 기준 보기",
    description: "처음 거래하는 사람도 결제와 정산 흐름을 쉽게 이해할 수 있습니다.",
    href: "/safety",
    icon: Wallet,
  },
  {
    title: "시세 페이지 바로 열기",
    description: "최근 거래와 응답 속도를 같이 보여줘 가격 판단이 더 빨라집니다.",
    href: "/market",
    icon: TrendingUp,
  },
  {
    title: "입문 가이드로 시작",
    description: "카드명과 거래 순서를 잘 몰라도 따라갈 수 있는 흐름을 제공합니다.",
    href: "/beginner",
    icon: BookOpen,
  },
];

const sellerNotes = [
  "사진과 가격만 넣어도 바로 판매를 시작할 수 있습니다.",
  "시세를 먼저 본 뒤 근거 있는 가격으로 등록할 수 있습니다.",
  "검수와 안전결제 기준이 함께 보여 더 신뢰 있게 노출됩니다.",
];

export function MarketplaceLandingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroLead}>
          <p className={styles.kicker}>중고 카드 거래</p>
          <h1 className={styles.heroTitle}>요즘 거래 잘 되는 카드부터 바로 찾는 마켓</h1>
          <p className={styles.heroDescription}>
            실거래가, 응답 속도, 안전결제 여부를 한 자리에서 보고 빠르게 판단할 수
            있게 홈 구조를 다시 정리했습니다.
          </p>

          <form className={styles.searchBar} action="/search" method="get">
            <label className={styles.srOnly} htmlFor="trade-search">
              카드 검색
            </label>
            <div className={styles.searchField}>
              <Search size={18} aria-hidden="true" />
              <input
                id="trade-search"
                name="q"
                className={styles.searchInput}
                type="search"
                placeholder="카드명, 등급, 최근 거래가 검색"
              />
            </div>
            <PrimaryButton className={styles.primaryCta} type="submit">
              검색하기
              <ArrowRight size={16} aria-hidden="true" />
            </PrimaryButton>
          </form>

          <div className={styles.quickRow} aria-label="빠른 검색">
            {quickQueries.map((query) => (
              <Link
                key={query}
                className={styles.quickChip}
                href={`/search?q=${encodeURIComponent(query)}`}
              >
                {query}
              </Link>
            ))}
          </div>

          <div className={styles.statRow}>
            {marketStats.map((item) => (
              <article key={item.label} className={styles.statCard}>
                <span className={styles.statLabel}>{item.label}</span>
                <strong className={styles.statValue}>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.marketCard}>
          <div className={styles.panelHead}>
            <div>
              <p className={styles.sectionLabel}>오늘 많이 비교하는 매물</p>
              <h2 className={styles.panelTitle}>지금 바로 가격 감을 잡는 카드</h2>
            </div>
            <Link className={styles.inlineAction} href="/search/advanced">
              고급 탐색
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.feedList}>
            {liveListings.map((item) => (
              <Link
                key={item.title}
                className={`${styles.feedRow} ${
                  item.accent === "brand" ? styles.feedRowAccent : ""
                }`}
                href={item.href}
              >
                <div className={styles.feedCopy}>
                  <strong>{item.title}</strong>
                  <p>{item.meta}</p>
                  <span>{item.support}</span>
                </div>
                <strong className={styles.feedPrice}>{item.price}</strong>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.mainGrid}>
        <div className={styles.sectionPanel}>
          <div className={styles.panelHead}>
            <div>
              <p className={styles.sectionLabel}>게임별 입구</p>
              <h2 className={styles.panelTitle}>자주 찾는 카드군부터 바로 들어가기</h2>
            </div>
            <Link className={styles.inlineAction} href="/discover">
              전체 카테고리 보기
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link key={category.title} className={styles.categoryCard} href={category.href}>
                  <div className={styles.cardIcon}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className={styles.cardCopy}>
                    <span className={styles.cardMeta}>{category.meta}</span>
                    <h3 className={styles.cardTitle}>{category.title}</h3>
                    <p className={styles.cardDescription}>{category.description}</p>
                  </div>
                  <span className={styles.cardAction}>
                    탐색 열기
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.sideStack}>
          <section className={styles.sidePanel}>
            <div className={styles.panelHeadCompact}>
              <div>
                <p className={styles.sectionLabel}>거래 전에 보기</p>
                <h2 className={styles.panelTitle}>기준 페이지</h2>
              </div>
            </div>

            <div className={styles.utilityList}>
              {serviceLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.title} className={styles.utilityRow} href={item.href}>
                    <span className={styles.utilityIcon}>
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className={styles.utilityCopy}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className={styles.sidePanel}>
            <div className={styles.panelHeadCompact}>
              <div>
                <p className={styles.sectionLabel}>판매 시작</p>
                <h2 className={styles.panelTitle}>등록은 빠르게</h2>
              </div>
            </div>

            <div className={styles.noteList}>
              {sellerNotes.map((item) => (
                <div key={item} className={styles.noteRow}>
                  <span className={styles.noteBullet} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <PrimaryButton href="/sell/start" className={styles.primaryCta}>
                판매 등록
                <ArrowRight size={16} aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton href="/market" className={styles.secondaryCta}>
                시세 먼저 보기
              </SecondaryButton>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default MarketplaceLandingPage;
