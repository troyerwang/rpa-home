import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RPA应用商店-精选最佳自动化应用",
  description: "RPA应用商店汇集各行业最优质、最高效的自动化应用，涵盖财务、运营、电商、客服、数据处理等多个领域。我们严格筛选每款应用，确保稳定性、兼容性和易用性，助力企业和个人高效完成重复性工作，让自动化触手可及。无需复杂配置，即装即用，让你的工作更智能、更轻松！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
