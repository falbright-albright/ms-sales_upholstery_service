import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCta from "@/components/layout/MobileStickyCta";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessDisplayName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessDisplayName}`,
  },
  description:
    "Professional furniture upholstery, repair and reupholstery in St. Catharines, Ontario. Restore the furniture you love instead of replacing it. Call M.S. for a free estimate.",
  applicationName: siteConfig.businessDisplayName,
  authors: [{ name: siteConfig.businessDisplayName }],
  generator: "Next.js",
  keywords: [
    "upholstery St. Catharines",
    "furniture upholstery St. Catharines",
    "furniture repair St. Catharines",
    "reupholstery St. Catharines",
    "chair upholstery St. Catharines",
    "sofa reupholstery St. Catharines",
    "furniture restoration Niagara",
    "restaurant booth upholstery St. Catharines",
  ],
  verification: siteConfig.analytics.googleSiteVerification
    ? { google: siteConfig.analytics.googleSiteVerification }
    : undefined,
  // Favicon / apple-touch-icon are generated via the Next.js file
  // convention (src/app/icon.tsx, src/app/apple-icon.tsx) and are
  // injected automatically — no manual `icons` field needed here.
};

export const viewport = {
  themeColor: siteConfig.themeColorHex,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <a
          href="#main-content"
          className="sr-only-focusable fixed top-2 left-2 z-[100] rounded bg-brown px-4 py-2 text-cream"
        >
          Skip to main content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
