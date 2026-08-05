import type { Metadata, Viewport } from "next";
import { Archivo, Karla, Space_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const stamp = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-stamp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "South African Snacks Online in the USA | Treats From",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "South African snacks USA",
    "buy South African snacks online",
    "South African snack box",
    "Ouma rusks USA",
    "Peppermint Crisp USA",
    "biltong online USA",
    "British snacks USA",
    "Japanese snack box USA",
    "imported snacks Canada",
    "expat care package",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "South African Snacks Online in the USA | Treats From",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${stamp.variable}`}
    >
      <body className="font-body antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <CartProvider>
          <a
            href="#main"
            className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
