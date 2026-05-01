import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sjakacafilm.vercel.app"),
  title: {
    default: "SJA Kaca Film – Spesialis Pasang Kaca Film Jakarta",
    template: "%s | SJA Kaca Film"
  },
  description:
    "Layanan jasa pasang kaca film panggilan profesional untuk mobil, rumah, dan gedung di Jakarta & sekitarnya. Material premium, tolak panas maksimal, garansi resmi 5 tahun.",
  keywords: [
    "kaca film jakarta",
    "jasa pasang kaca film panggilan",
    "pasang kaca film mobil terdekat",
    "kaca film rumah",
    "kaca film gedung",
    "kaca film tolak panas",
    "nano ceramic",
    "harga kaca film mobil",
    "SJA Kaca Film"
  ],
  authors: [{ name: "SJA Kaca Film" }],
  creator: "SJA Kaca Film",
  publisher: "SJA Kaca Film",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sjacafilm.com",
    siteName: "SJA Kaca Film",
    title: "SJA Kaca Film – Spesialis Pasang Kaca Film Jakarta",
    description:
      "Layanan jasa pasang kaca film panggilan profesional untuk mobil, rumah, dan gedung di Jakarta. Material premium, instalasi tanpa gelembung, garansi 5 tahun.",
    images: [
      {
        url: "/Logo.jpeg",
        width: 800,
        height: 800,
        alt: "SJA Kaca Film - Jasa Pasang Kaca Film Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SJA Kaca Film – Jasa Pasang Kaca Film Profesional",
    description:
      "Solusi kaca film profesional untuk rumah, gedung, dan kendaraan Anda.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sjacafilm.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "AutomotiveBusiness"],
    name: "SJA Kaca Film",
    image: "https://sjakacafilm.vercel.app/Logo.jpeg",
    description: "Jasa spesialis pemasangan kaca film profesional untuk mobil, rumah, dan gedung komersial dengan layanan panggilan (home service).",
    url: "https://sjakacafilm.vercel.app",
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bekasi" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.instagram.com/sjakacafilm?igsh=MWpkNHhxZ2k1dGU4ZA==",
      `https://wa.me/${siteConfig.whatsappNumber}`
    ]
  };

  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        {/* Inject JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
