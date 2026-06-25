"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdEngineering } from "react-icons/md";

import titleImage from "../image/title_image.jpg";

import project1 from "../image/1.jpeg";
import project2 from "../image/2.jpeg";
import project3 from "../image/3.jpeg";
import project4 from "../image/4.jpeg";
import project5 from "../image/5.jpeg";
import project6 from "../image/6.jpeg";
import project7 from "../image/7.jpeg";
import project8 from "../image/13.jpeg";

const projects = [
  {
    title: "نفق عدلي منصور",
    year: "2020",
    client: "عدلي منصور",
    piles: null,
    diameter: "17 م - قطر 60 سم",
    image: project1,
  },

  {
    title: "تطوير المريوطية",
    year: "2022",
    client: "مكتب محرم باخوم و Spectrum",
    piles: "35 خازوق",
    diameter: "18 م - قطر 60 سم",
    image: project2,
  },

  {
    title: "توسعات الطريق الدائري",
    year: "2022",
    client: "أبناء حسن علام",
    piles: null,
    diameter: "18 م - قطر 60 سم",
    image: project6,
  },

  {
    title: "كوبري حياة كريمة",
    year: "2022",
    client: "غير محدد",
    piles: "80 خازوق",
    diameter: "18 م - قطر 60 سم",
    image: project7,
  },

  {
    title: "أفران مصنع حديد عز",
    year: "2022",
    client: "غير محدد",
    piles: null,
    diameter: "16 م - قطر 60 سم",
    image: project5,
  },

  {
    title: "بيت الزكاة المصري",
    year: "2023",
    client: "مشيخة الأزهر الشريف",
    piles: "70 خازوق",
    diameter: "17 م - قطر 60 سم",
    image: project3,
  },

  {
    title: "وزارة الإنتاج الحربي",
    year: "2024",
    client: "غير محدد",
    piles: "58 خازوق",
    diameter: "13 م - قطر 60 سم",
    image: project4,
  },
  {
    title: "مشروع مترو ابو قير داخل محطة سيدي جابر بالاسكندريه",
    year: "2026",
    client: "شركة اوراسكوم للانشائات",
    piles: null,
    diameter: "18 م - قطر 40 سم",
    image: project8,
  },
];

const ProjectsApp = () => {
  return (
    <section>
      {/* Hero */}

      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src={titleImage}
          alt="projects"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/30 to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-5"
        >
          <p className="tracking-[6px] text-red-500 font-bold mb-4">
            OUR PROJECTS
          </p>

          <h1 className="text-4xl md:text-6xl font-black">أهم المشروعات</h1>

          <div className="w-28 h-1 bg-red-600 rounded-full mt-6"></div>
        </motion.div>
      </div>

      {/* Cards */}

      <div className="bg-slate-50 py-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-7 text-right">
                  <h2 className="text-2xl font-black text-[#0B1F3A] mb-6">
                    {proj.title}
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      📅 <span className="font-bold">السنة :</span> {proj.year}
                    </p>

                    <p className="flex justify-start items-center gap-2">
                      <MdEngineering className="text-red-600 text-xl" />
                      <span>
                        <span className="font-bold ">العميل :</span>{" "}
                        {proj.client}
                      </span>
                    </p>
                    {proj.piles !== null ? (
                      <p>
                        🔢 <span className="font-bold">عدد الخوازيق :</span>{" "}
                        {proj.piles}
                      </p>
                    ) : (
                      ""
                    )}

                    <p>
                      📏 <span className="font-bold">الأبعاد :</span>{" "}
                      {proj.diameter}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsApp;
