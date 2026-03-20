import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";

const headingFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Card Trading Blueprint",
  description: "카드 검색, 시세 확인, 판매 준비 흐름을 분리해 정리한 카드 거래 블루프린트.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
