import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/custom/layout/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MandaPlan",
  description: "Create and manage your goals with MandaPlan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
