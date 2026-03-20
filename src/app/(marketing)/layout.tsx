import Link from "next/link";
import { Search } from "lucide-react";
import type { ReactNode } from "react";

import { AppShell, TopNavigation } from "@/components/shared";

type MarketingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <AppShell>
      <TopNavigation
        brand="Card Trading Blueprint"
        tagline="검색, 시세 확인, 판매 준비를 분리해 보여주는 카드 거래 홈"
        links={[
          { label: "홈", href: "/" },
          { label: "탐색", href: "/discover" },
          { label: "시세", href: "/market" },
          { label: "안전거래", href: "/safety" },
        ]}
        secondaryAction={{ label: "로그인", href: "/account/login" }}
        primaryAction={{ label: "판매 시작", href: "/sell/start" }}
        rightSlot={
          <Link className="marketing-icon-link" href="/search" aria-label="검색">
            <Search size={18} />
          </Link>
        }
      />

      <div className="marketing-main">{children}</div>

      <footer className="marketing-footer">
        <div className="marketing-footer-links">
          <Link href="/support">고객지원</Link>
          <Link href="/safety">안전거래 안내</Link>
          <Link href="/terms">이용안내</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
        </div>
        <p className="marketing-footer-note">
          카드 거래를 더 빠르게 이해하고, 다음 행동을 분명하게 고르도록 설계한
          블루프린트입니다.
        </p>
      </footer>
    </AppShell>
  );
}
