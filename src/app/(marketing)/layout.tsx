import Link from "next/link";
import { Search } from "lucide-react";
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
        tagline="중고 카드 거래"
        links={[
          { label: "홈", href: "/" },
          { label: "둘러보기", href: "/discover" },
          { label: "시세", href: "/market" },
          { label: "안전거래", href: "/safety" },
        ]}
        secondaryAction={{ label: "로그인", href: "/account/login" }}
        primaryAction={{ label: "판매 등록", href: "/sell/start" }}
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
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보처리방침</Link>
        </div>
        <p className="marketing-footer-note">
          카드 중고거래를 빠르게 판단하도록 돕는 홈입니다.
        </p>
      </footer>
    </AppShell>
  );
}
