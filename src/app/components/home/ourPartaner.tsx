"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import p1 from "../../image/p1.png";
import p2 from "../../image/p2.png";
import p3 from "../../image/p3.svg";
import p4 from "../../image/p4.png";
import p5 from "../../image/p5.png";
import p6 from "../../image/p6.webp";

const partners = [
  { img: p1, name: "شركة تام أويل" },
  { img: p2, name: "شركة النصر للأعمال المدنية" },
  { img: p3, name: "شركة شيفكو للمقاولات" },
  { img: p5, name: "نادي الرياضات البحرية" },
  { img: p4, name: "مكتب العربية للتصميمات والاستشارات الهندسية" },
  { img: p6, name: "شركة وادي النيل للمقاولات والاستثمارات العقارية" },
];

const OurPartaner = () => {
  return (
    <section className="py-24 bg-slate-50 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-red-600 font-bold tracking-[6px] mb-4">
            OUR PARTNERS
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#0B1F3A]">
            شركاء النجاح
          </h2>

          <div className="w-28 h-1 bg-red-600 rounded-full mx-auto mt-6" />

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            نفتخر بالتعاون مع كبرى الشركات والمؤسسات في تنفيذ العديد من
            المشروعات الهندسية والبنية التحتية بأعلى معايير الجودة.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl h-full">
                <div className="h-36 flex items-center justify-center">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    className="object-contain h-28 w-auto transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-center text-lg font-bold text-[#0B1F3A] leading-8">
                    {partner.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartaner;
