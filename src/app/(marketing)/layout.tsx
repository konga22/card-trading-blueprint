import Link from "next/link";
import { Heart, Search } from "lucide-react";
import type { ReactNode } from "react";

import { AppShell, TopNavigation } from "@/components/shared";

type MarketingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <AppShell>
      <TopNavigation
        brand="CARD TRADING"
        tagline="Trading card resale market"
        links={[
          { label: "홈", href: "/" },
          { label: "탐색", href: "/discover" },
          { label: "시세", href: "/market" },
          { label: "상세 검색", href: "/search/advanced" },
          { label: "안전거래", href: "/safety" },
        ]}
        utilityLinks={[
          { label: "관심", href: "/notifications" },
          { label: "로그인", href: "/account/login" },
        ]}
        primaryAction={{ label: "판매 시작", href: "/sell/start" }}
        rightSlot={
          <>
            <Link className="marketing-icon-link" href="/search" aria-label="카드 검색">
              <Search size={18} />
            </Link>
            <Link className="marketing-icon-link" href="/notifications" aria-label="관심 카드">
              <Heart size={18} />
            </Link>
          </>
        }
      />

      <div className="marketing-main">{children}</div>

      <footer className="marketing-footer">
        <div className="marketing-footer-links">
          <Link href="/support">고객 지원</Link>
          <Link href="/safety">안전거래 안내</Link>
          <Link href="/terms">이용 안내</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
        </div>
        <p className="marketing-footer-note">
          카드 거래를 더 빠르게 이해하고, 다음 행동을 분명하게 고르도록 돕는 구조 중심 블루프린트입니다.
        </p>
      </footer>
    </AppShell>
  );
}
