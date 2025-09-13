import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientRedirect from "@/components/ClientRedirect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sertalp - Premium PVC Windows & Doors",
  description: "High-performance PVC windows and doors with 10-year guarantee. Energy efficient solutions with nationwide installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientRedirect />
        {children}
      </body>
    </html>
  );
}
