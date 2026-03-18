import Link from "next/link";
import { Bell, Search, UserRound } from "lucide-react";
import type { ReactNode } from "react";

import { AppShell, TopNavigation } from "@/components/shared";

type MarketingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <AppShell>
      <TopNavigation
        brand="Card Trading Blueprint"
        tagline="플랫한 카드 거래 홈"
        links={[
          { label: "홈", href: "/" },
          { label: "탐색", href: "/discover" },
          { label: "입문", href: "/beginner" },
          { label: "시세", href: "/market" },
        ]}
        secondaryAction={{ label: "로그인", href: "/account/login" }}
        primaryAction={{ label: "판매 시작", href: "/sell/start" }}
        rightSlot={
          <div className="marketing-nav-icons">
            <Link className="marketing-icon-link" href="/search" aria-label="검색">
              <Search size={18} />
            </Link>
            <Link className="marketing-icon-link" href="/notifications" aria-label="알림">
              <Bell size={18} />
            </Link>
            <Link className="marketing-icon-link" href="/account/login" aria-label="계정">
              <UserRound size={18} />
            </Link>
          </div>
        }
      />

      <div className="marketing-main">{children}</div>

      <footer className="marketing-footer">
        <div className="marketing-footer-links">
          <Link href="/support">고객지원</Link>
          <Link href="/safety">안전거래 안내</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보처리방침</Link>
        </div>
        <p className="marketing-footer-note">
          홈은 탐색 허브 역할만 맡고, 실제 행동은 각각의 전용 페이지에서 이어집니다.
        </p>
      </footer>
    </AppShell>
  );
}
