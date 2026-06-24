"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import titleImage from "../image/title_image.jpg";

import machine1 from "../image/20.jpeg";
import machine2 from "../image/21.jpeg";
import machine3 from "../image/20.jpeg";

const WeAre = () => {
  return (
    <div>
      {/* Hero */}

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={titleImage}
          alt="cover"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/30" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white"
        >
          <p className="tracking-[6px] text-red-500 font-bold mb-4">
            MAGTEC FOUNDATIONS
          </p>

          <h1 className="text-4xl md:text-6xl font-black">شركة ماجتك</h1>

          <div className="w-28 h-1 bg-red-600 rounded-full mt-5"></div>
        </motion.div>
      </section>

      {/* الفيديو */}

      {/* <section className="relative h-[45vh] md:h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/djtp5oepp/video/upload/v1781770377/magtic1_ozmlza.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              نبني المستقبل بأسس قوية
            </h2>

            <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-lg">
              خبرة طويلة في تنفيذ أعمال الخوازيق والأساسات الميكانيكية
              والمشروعات الهندسية المتخصصة.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* من نحن */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-14"
          >
            <h2 className="text-4xl font-black text-[#0B1F3A] text-right mb-8">
              من نحن ؟
            </h2>

            <div className="space-y-6 text-gray-700 leading-10 text-base md:text-lg text-right">
              <p>
                تعد شركة ماجتك للأساسات الميكانيكية والمقاولات العامة واحدة من
                أعرق الشركات المتخصصة في مجال الخوازيق والأساسات داخل مصر.
              </p>

              <div className="bg-[#0B1F3A] text-white p-6 rounded-2xl">
                تتخصص الشركة في جميع أنواع الخوازيق الميكانيكية وجميع أنواع
                تجارب التحميل بما في ذلك اختبارات التكامل للخوازيق (P.I.T).
              </div>

              <p>
                يعد نظام الحفر الدوار (Bored Piles) من أفضل أنظمة الخوازيق من
                حيث الأمان والجودة وتحقيق أعلى نتائج اختبارات التحميل.
              </p>

              <p>
                كما توفر الشركة اختبارات الـ Ultra-Sound والحلول الهندسية
                المتقدمة بأحدث المعدات.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* معداتنا */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="tracking-[6px] text-red-500 font-bold mb-4">
              OUR EQUIPMENT
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#0B1F3A]">
              معداتنا وتقنياتنا
            </h2>

            <div className="w-28 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[machine1, machine2, machine3].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="overflow-hidden rounded-3xl shadow-xl"
              >
                <Image
                  src={img}
                  alt={`machine-${index}`}
                  className="w-full h-80 object-cover transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAre;
