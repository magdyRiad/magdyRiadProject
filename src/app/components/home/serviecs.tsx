"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image15 from "../../image/15.jpg";

const ServiecsPage = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-red-600 font-bold tracking-[6px] mb-4">
            OUR SERVICES
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900">
            خدماتنا
          </h1>

          <div className="w-32 h-1 bg-red-600 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={image15}
              alt=""
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                حلول الأساسات والهندسة الجيوتقنية
              </h2>

              <p className="leading-10 text-slate-600 text-lg">
                تعتبر شركة ماجتك من الشركات المتخصصة في تقديم الحلول الجيوتقنية
                وأعمال التربة والأساسات باستخدام أحدث التقنيات الهندسية مثل
                Bored Piles و CFA Piles والشدادات الأرضية ومعالجة مشاكل التربة
                وتنفيذ المشروعات القومية بأعلى معايير الجودة والكفاءة.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiecsPage;
