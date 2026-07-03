import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/shared/animation/SmoothScroll";
import { SiteNav } from "@/shared/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ricardoramirez-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ricardo Ramirez — Frontend Developer",
  description:
    "Frontend Developer specialized in React, Next.js, TypeScript and the TanStack ecosystem. Case studies with real metrics: geospatial platforms, data-heavy dashboards, animation work and a product in daily use.",
  openGraph: {
    title: "Ricardo Ramirez — Frontend Developer",
    description:
      "Case studies with real metrics: geospatial platforms, data-heavy dashboards, animation work and a product in daily use.",
    url: SITE_URL,
    siteName: "Ricardo Ramirez",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricardo Ramirez",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/rramirezgit",
    "https://linkedin.com/in/ricardoramirez-",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "TanStack", "Web Performance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="hub-bg" aria-hidden />
        <SiteNav />
        <SmoothScroll>{children}</SmoothScroll>
        <div className="hub-grain" aria-hidden />
      </body>
    </html>
  );
}
