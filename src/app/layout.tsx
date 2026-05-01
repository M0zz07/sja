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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sjacafilm.com"),
  title: "SJA Kaca Film – Jasa Pasang Kaca Film Profesional",
  description:
    "SJA Kaca Film – Jasa pasang kaca film profesional untuk gedung, rumah, dan mobil. Material berkualitas, harga transparan, garansi terpercaya.",
  keywords:
    "kaca film, jasa pasang kaca film, kaca film mobil, kaca film rumah, kaca film gedung, SJA Kaca Film",
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
    title: "SJA Kaca Film – Jasa Pasang Kaca Film Profesional",
    description:
      "Solusi kaca film profesional untuk rumah, gedung, dan kendaraan Anda. Material berkualitas, instalasi profesional, garansi 5 tahun.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
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
    "@type": "HomeAndConstructionBusiness",
    name: "SJA Kaca Film",
    image: "https://sjacafilm.com/Logo.jpeg",
    description: "Jasa pasang kaca film profesional untuk gedung, rumah, dan mobil.",
    url: "https://sjacafilm.com",
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    priceRange: "$$",
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
