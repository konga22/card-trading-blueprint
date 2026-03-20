import type { Metadata } from "next";
import { Noto_Sans_KR, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";

const uiFont = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "700"],
});

const dataFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-data",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Card Trading Blueprint",
  description: "검색, 시세 확인, 판매 준비를 분리해 보여주는 카드 거래 블루프린트.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={`${uiFont.variable} ${dataFont.variable}`}>{children}</body>
    </html>
  );
}
