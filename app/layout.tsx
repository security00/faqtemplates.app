import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAQ Templates – AI‑Powered Generator for Websites",
  description: "Create professional FAQ templates with AI. Generate custom FAQ sections for websites, e‑commerce, and more. Start free and optimize for SEO.",
  metadataBase: new URL("https://faqtemplates.app"),
  alternates: {
    canonical: "https://faqtemplates.app/",
  },
  openGraph: {
    type: "website",
    url: "https://faqtemplates.app/",
    title: "FAQ Templates - AI-Powered FAQ Generator",
    description: "Create professional FAQ templates with AI. Generate custom FAQ sections for websites, e-commerce, and more.",
    siteName: "FAQ Templates",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
