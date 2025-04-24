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
  title: "Magtec Foundations",
  description:
    "شركتنا تقدم خدمات المقاولات العامة، أعمال الخوازيق الحديد، الأساسات العميقة، والبناء الحديث بأفضل جودة وسعر في السوق المصري.",
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
    title: "أفضل شركات المقاولات في مصر | خوازيق حديد وأعمال الأساسات",
    description:
      "خدماتنا تشمل جميع أنواع المقاولات: من الخوازيق الحديد والأساسات حتى التشطيب الكامل للمشاريع السكنية والتجارية.",
    // url: "https://yourdomain.com", // غيّره لنطاقك الحقيقي
    type: "website",
  },
  // alternates: {
  //   canonical: "https://yourdomain.com", // غيّره لنطاقك الحقيقي
  // },
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
