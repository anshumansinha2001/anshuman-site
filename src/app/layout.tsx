import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";
import {
  siteDescription,
  siteHome,
  siteTitle,
  siteUrl,
  structuredData,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anshuman Sinha",
  },
  description: siteDescription,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Anshuman Sinha",
    "SEO Specialist",
    "SEO Specialist Bengaluru",
    "Technical SEO",
    "Programmatic SEO",
    "SaaS SEO",
    "AEO",
    "GEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI Search Optimization",
    "SEO Automation",
    "AI Agents",
    "Next.js SEO",
    "SEO Consultant India",
  ],
  authors: [{ name: profile.name, url: siteHome }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: siteHome,
  },
  openGraph: {
    type: "profile",
    firstName: profile.first,
    lastName: profile.last,
    username: "theanshumansinha",
    url: siteHome,
    siteName: `${profile.name} Portfolio`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  // Paste the token from Google Search Console (HTML tag method) to verify:
  // verification: { google: "your-verification-token" },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
