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
    "مقاولات عامة",
    "شركات مقاولات في مصر",
    "أعمال خوازيق حديد",
    "تنفيذ أساسات عميقة",
    "بناء حديث",
    "مقاولين أساسات",
    "أعمال حفر",
    "شركات بناء في مصر",
    "مقاولات إنشائية",
    "خوازيق خرسانية",
    "أساسات قوية",
    "بناء عالي الجودة",
    "حلول جيوتقنية",
    "أعمال التربة",
    "صيانة المنشآت",
    "ترميم مباني",
    "تشطيبات مباني",
    "تصميم إنشائي",
    "استشارات هندسية",
    "إدارة مشاريع",
    "تكلفة البناء",
    "أسعار المقاولات",
    "مقاولات صناعية",
    "مقاولات تجارية",
    "مقاولات سكنية",
    "خوازيق حفر دوار",
    "خوازيق بريمة مستمرة",
    "شدادات أرضية",
    "مشاكل التربة وحلولها",
    "اختبارات التربة",
    "تقنيات البناء الحديث",
    "مواد بناء عالية الجودة",
    "مشاريع قومية مصر",
    "سابقة أعمال مقاولات",
    "أفضل شركات المقاولات",
    "مقاولات موثوقة",
    "مهندسون مدنيون",
    "شركات هندسية في مصر",
    "بناء مستدام",
    "تطوير عقاري",
    "استثمار عقاري",
    "تصميم معماري",
    "مخططات هندسية",
    "تراخيص البناء",
    "السلامة الإنشائية",
    "جودة التنفيذ",
    "التزام بالمواعيد",
    "رضا العملاء",
    "حلول هندسية مبتكرة",
    "تقنيات الحفر المتقدمة",
    "General contracting",
    "Construction companies in Egypt",
    "Steel pile works",
    "Deep foundation execution",
    "Modern construction",
    "Foundation contractors",
    "Excavation works",
    "Building companies in Egypt",
    "Construction contracting",
    "Concrete piles",
    "Strong foundations",
    "High-quality construction",
    "Geotechnical solutions",
    "Soil works",
    "Building maintenance",
    "Building renovation",
    "Building finishing",
    "Structural design",
    "Engineering consultancy",
    "Project management",
    "Construction cost",
    "Contracting prices",
    "Industrial contracting",
    "Commercial contracting",
    "Residential contracting",
    "Bored piles",
    "Continuous flight auger piles (CFA piles)",
    "Ground anchors",
    "Soil problems and solutions",
    "Soil testing",
    "Modern building technologies",
    "High-quality building materials",
    "Egyptian national projects",
    "Contracting portfolio",
    "Best construction companies",
    "Reliable contractors",
    "Civil engineers",
    "Engineering companies in Egypt",
    "Sustainable construction",
    "Real estate development",
    "Real estate investment",
    "Architectural design",
    "Engineering plans",
    "Building permits",
    "Structural safety",
    "Quality of execution",
    "Timely completion",
    "Customer satisfaction",
    "Innovative engineering solutions",
    "Advanced drilling techniques",
  ],
  openGraph: {
    title: "أفضل شركات المقاولات في مصر | خوازيق حديد وأعمال الأساسات",
    description:
      "خدماتنا تشمل جميع أنواع المقاولات: من الخوازيق الحديد والأساسات حتى التشطيب الكامل للمشاريع السكنية والتجارية.",
    url: "https://www.magdyriad.net", // غيّره لنطاقك الحقيقي
    type: "website",
  },
  alternates: {
    canonical: "https://www.magdyriad.net", // غيّره لنطاقك الحقيقي
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
