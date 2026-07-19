import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/content/company";
import { htmlLanguage } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dictionary = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalUrl),
  ...createPageMetadata(dictionary.home.seo, "/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLanguage}>
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-3 font-bold text-blue-800 shadow-lg transition focus:translate-y-0"
        >
          {dictionary.global.common.skipToContent}
        </a>
        <SiteHeader copy={dictionary.global} />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <SiteFooter copy={dictionary.global} />
      </body>
    </html>
  );
}
