import React from "react";
import Image from "next/image";
import titls from "../image/title_image.jpg";
import { MdEngineering } from "react-icons/md";

// استبدل الصور المؤقتة دي بصور المشاريع الحقيقية
import project1 from "../image/1.jpeg";
import project2 from "../image/2.jpeg";
import project3 from "../image/3.jpeg";
import project4 from "../image/4.jpeg";
import project5 from "../image/5.jpeg";
import project6 from "../image/6.jpeg";
import project7 from "../image/7.jpeg";

const projects = [
  {
    title: "نفق عدلي منصور",
    year: "2020",
    client: "عدلي منصور",
    piles: "غير محدد",
    diameter: "17 م - قطر 60 سم ",
    image: project1,
  },
  {
    title: "تطوير المريوطية",
    year: "2022",
    client: "اشراف مكتب محرم باخوم ومكتب  specturm ",
    piles: "كباري 35 خازوق",
    diameter: "18 م - قطر 60سم",
    image: project2,
  },
  {
    title: "توسعات كوبري الدائري",
    year: "2022",
    client: "شركة ابناء حسن علام ",
    piles: "غير محدد",
    diameter: "18 م - قطر 60سم",
    image: project6,
  },
  {
    title: "كوبري حياة كريمة",
    client: "غير محدد",
    year: "2022",
    piles: "80 خازوق",
    diameter: "18 م - قطر 60سم",
    image: project7,
  },
  {
    title: "أفران مصنع حديد عز",
    client: "غير محدد",
    year: "2022",
    piles: "غير محدد",
    diameter: "16 م - قطر 60سم",
    image: project5,
  },
  {
    title: " بيت الزكاة المصري بمشيخة الازهر الشريف",
    year: "2023",
    client: "ادارة الهندسيه للمشيخة و مكتب استاذ دكتور /شادي دخان",
    piles: "70 خازوق",
    diameter: "17 م - قطر 60سم",
    image: project3,
  },
  {
    title: "مقر الجديد لوزارة الإنتاج الحربي",
    year: "2024",
    client: "غير محدد",
    piles: "58 خازوق",
    diameter: "13 م – قطر 60 سم",
    image: project4,
  },
];

const ProjectsApp = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={titls}
          alt="cover"
          className="fixed top-0 left-0 w-screen h-[50vh] object-cover -z-10"
        />
        <div className="z-20 w-screen h-[50vh] text-white text-3xl md:text-5xl  font-bold flex justify-center items-center bg-black/40">
          اهم المشروعات
        </div>
      </div>

      {/* Projects Cards */}
      <div className="bg-white py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🏗️ {proj.title}
              </h2>
              <p className="text-gray-700 mb-1">📅 السنة: {proj.year}</p>
              <p className="text-gray-700 mb-1 flex gap-1 items-center">
                <MdEngineering />
                العميل: {proj.client}
              </p>
              <p className="text-gray-700 mb-1">
                🔢 عدد الخوازيق: {proj.piles}
              </p>
              <p className="text-gray-700">📏 الطول: {proj.diameter}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsApp;
