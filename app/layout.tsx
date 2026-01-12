import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/custom/layout/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mandaplan.app"),
  title: {
    default: "MandaPlan - 만다라트로 목표를 구조화하세요",
    template: "%s | MandaPlan",
  },
  description:
    "만다라트 기반 목표 관리 앱. 목표를 8개의 하위 목표로 나누고, 각각을 64개의 실행 과제로 세분화하여 목표 달성을 체계적으로 관리하세요. 할일관리, 루틴, 투두리스트, 자기계발을 위한 최적의 도구.",
  keywords: [
    "만다라트",
    "목표관리",
    "계획",
    "자기계발",
    "할일관리",
    "루틴",
    "투두리스트",
    "성장",
    "ai추천",
    "습관형성",
    "목표달성",
    "목표앱",
    "productivity",
    "mandalart",
    "만다라트 앱",
    "목표 설정",
    "생산성 도구",
    "계획 앱",
  ],
  authors: [{ name: "MandaPlan Team" }],
  creator: "Jung Hae Kyoung",
  publisher: "MandaPlan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "MandaPlan",
    title: "MandaPlan - 만다라트로 목표를 구조화하세요",
    description:
      "만다라트 기반 목표 관리 앱. 목표를 체계적으로 구조화하고 실행으로 연결하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MandaPlan - 만다라트 목표 관리",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MandaPlan - 만다라트로 목표를 구조화하세요",
    description:
      "만다라트 기반 목표 관리 앱. 목표를 체계적으로 구조화하고 실행으로 연결하세요.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mandaplan.app";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MandaPlan",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    description:
      "만다라트 기반 목표 관리 앱. 목표를 8개의 하위 목표로 나누고, 각각을 64개의 실행 과제로 세분화하여 목표 달성을 체계적으로 관리하세요.",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: "Jung Hae Kyoung",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    keywords:
      "만다라트, 목표관리, 계획, 자기계발, 할일관리, 루틴, 투두리스트, 성장, 습관형성, 목표달성, 목표앱, productivity, mandalart",
  };

  return (
    <html lang="ko">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        {/* GA 기본 스크립트 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-EVWKG5GN72`}
          strategy="afterInteractive"
        />

        {/* GA 초기화 */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVWKG5GN72');
          `}
        </Script>
      </body>
    </html>
  );
}
