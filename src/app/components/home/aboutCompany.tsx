"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import imageCover from "../../image/L.0-4-APP.png";

const AboutCompany = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* الصورة بعرض الشاشة */}
      <div className="absolute inset-0">
        <Image
          src={imageCover}
          alt="About Company"
          fill
          priority
          className="object-cover"
        />

        {/* طبقة تغميق */}
        <div className="absolute inset-0 bg-[#0B1F3A]/30" />

        {/* جريدينت */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/50 via-[#0B1F3A]/30 to-transparent" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* العنوان */}

          <p className="text-red-500 font-bold tracking-[6px] mb-4">ABOUT US</p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            عن الشركة
          </h2>

          <div className="w-28 h-1 rounded-full bg-red-500 mb-8"></div>

          {/* الصندوق */}

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-10 shadow-2xl">
            <p className="text-gray-100 text-base md:text-lg leading-9">
              تعتبر شركة ماجتك للأساسات الميكانيكية من الشركات الرائدة في مجال
              الهندسة المدنية والبنية التحتية، حيث نسعى لتقديم حلول هندسية
              متطورة بأعلى معايير الجودة والكفاءة، مع التركيز على تنفيذ
              المشروعات المتخصصة التي تخدم القطاعين العام والخاص.
            </p>

            {/* الأرقام */}

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <h3 className="text-3xl font-black text-red-500">20+</h3>

                <p className="text-gray-300 text-sm">سنوات خبرة</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-black text-red-500">100+</h3>

                <p className="text-gray-300 text-sm">مشروع</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-black text-red-500">100%</h3>

                <p className="text-gray-300 text-sm">جودة تنفيذ</p>
              </div>
            </div>

            <Link
              href="/we"
              className="inline-flex mt-10 items-center justify-center rounded-full bg-red-600 px-8 py-4 text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              تعرف على المزيد
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
