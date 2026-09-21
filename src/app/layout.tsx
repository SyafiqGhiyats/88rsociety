import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://88rsociety.id"),
  title: {
    default: "88rsociety • Komunitas Lari Urban Jakarta",
    template: "%s | 88rsociety"
  },
  description:
    "Website resmi 88rsociety — komunitas lari urban terkemuka di Jakarta. Tuesday Night Run (TNR) di GBK Senayan & Sunday Long Run (SLR) di sepanjang Sudirman. Gratis diikuti, terbuka untuk semua kalangan.",
  keywords: [
    "88rsociety",
    "running club jakarta",
    "komunitas lari jakarta",
    "tuesday night run",
    "night run gbk",
    "sudirman runners",
    "marathon training",
    "komunitas lari gratis"
  ],
  authors: [{ name: "Komunitas 88rsociety" }],
  creator: "88rsociety",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://88rsociety.id",
    siteName: "88rsociety",
    title: "88rsociety • Komunitas Lari Urban Jakarta",
    description:
      "Bergabunglah bersama komunitas lari urban terdepan di Jakarta. Tuesday Night Run (GBK) • Sunday Long Run (Sudirman). Terbuka untuk semua kecepatan. 100% Gratis.",
    images: [
      {
        url: "/images/hero-runner.jpg",
        width: 1200,
        height: 630,
        alt: "Komunitas Lari Urban 88rsociety Jakarta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "88rsociety • Komunitas Lari Urban Jakarta",
    description:
      "Bergabunglah bersama komunitas lari urban terdepan di Jakarta. Tuesday Night Run (GBK) • Sunday Long Run (Sudirman). Gratis untuk semua.",
    images: ["/images/hero-runner.jpg"],
    creator: "@88rsociety"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "88rsociety",
    sport: "Lari",
    description:
      "Komunitas lari urban terkemuka di Jakarta yang menyatukan pelari dari segala kecepatan. Sesi lari mingguan gratis, panduan rute terorganisir, dan arsip foto dokumentasi.",
    url: "https://88rsociety.id",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta Pusat",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID"
    },
    location: {
      "@type": "Place",
      name: "Gelora Bung Karno (Plaza Timur)",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Senayan, Jakarta"
      }
    },
    founder: {
      "@type": "Organization",
      name: "88rsociety"
    },
    sameAs: [
      "https://instagram.com/88rsociety",
      "https://tiktok.com/@88rsociety",
      "https://strava.com/clubs/88rsociety"
    ]
  };

  return (
    <html lang="id" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-matte-black text-slate-50 antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
