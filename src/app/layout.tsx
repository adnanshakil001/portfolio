import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adnan - Software Developer",
  description: "Portfolio of Adnan, Software Developer & Final Year B.Tech Student at VIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Floating sticky light/dark mode toggler at top of screen */}
        <div className="fixed top-4 right-4 sm:top-5 sm:right-6 md:top-6 md:right-8 z-50">
          <AnimatedThemeToggler />
        </div>
        <div className="overflow-x-hidden">
          {children}
          <Analytics debug={true} />
          <Footer />
        </div>
      </body>
    </html>
  );
}
