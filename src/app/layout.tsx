import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import FooterPage from "./components/home/footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.magdyriad.net"),

  title: "Magtec Foundations | شركة مقاولات وخوازيق وأساسات في مصر",

  description:
    "Magtec Foundations شركة متخصصة في أعمال المقاولات العامة، الخوازيق الحديد، الأساسات العميقة، وأعمال البناء في مصر.",

  keywords: [
    "مقاولات",
    "شركات مقاولات",
    "خوازيق حديد",
    "أساسات",
    "مقاولين",
    "أعمال حفر",
    "شركات بناء",
    "مقاولات عامة",
  ],

  openGraph: {
    title: "Magtec Foundations | شركة مقاولات وخوازيق وأساسات في مصر",

    description:
      "خدمات المقاولات العامة والخوازيق الحديد والأساسات العميقة وأعمال البناء في مصر.",

    url: "https://www.magdyriad.net/",

    siteName: "Magtec Foundations",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "https://www.magdyriad.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magtec Foundations - شركة مقاولات وخوازيق وأساسات",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Magtec Foundations | شركة مقاولات وخوازيق وأساسات في مصر",

    description:
      "خدمات المقاولات العامة والخوازيق الحديد والأساسات العميقة وأعمال البناء في مصر.",

    images: ["https://www.magdyriad.net/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.magdyriad.net/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
