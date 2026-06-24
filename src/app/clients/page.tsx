"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import titleImage from "../image/title_image.jpg";

import c1 from "../image/p1.png";
import c2 from "../image/p2.png";
import c3 from "../image/p3.svg";
import c4 from "../image/p4.png";
import c5 from "../image/p5.png";
import c6 from "../image/p6.webp";

const clients = [
  { img: c1, name: "شركة تام أويل" },
  { img: c2, name: "شركة النصر للأعمال المدنية" },
  { img: c3, name: "شركة شيفكو للمقاولات" },
  { img: c4, name: "مكتب العربية للتصميمات" },
  { img: c5, name: "نادي الرياضات البحرية" },
  { img: c6, name: "شركة وادي النيل للمقاولات" },
];

const ClientsPage = () => {
  return (
    <div>
      {/* Hero */}

      <section className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <Image
          src={titleImage}
          alt="cover"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/30 to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5"
        >
          <p className="tracking-[6px] text-red-500 font-bold mb-4">
            OUR CLIENTS
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-white">
            عملاؤنا الذين نعتز بهم
          </h1>

          <div className="w-28 h-1 bg-red-600 rounded-full mt-6"></div>
        </motion.div>
      </section>

      {/* Clients */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1F3A]">
              شركاء النجاح
            </h2>

            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              نفتخر بالتعاون مع العديد من المؤسسات والشركات الكبرى في تنفيذ
              المشروعات الهندسية والبنية التحتية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
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
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="h-40 flex items-center justify-center">
                    <Image
                      src={client.img}
                      alt={client.name}
                      className="object-contain h-28 w-auto transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-center text-lg font-bold text-[#0B1F3A] mt-8 leading-8">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
