import React from "react";
import Image from "next/image";
import p1 from "../../image/p1.png";
import p2 from "../../image/p2.png";
import p3 from "../../image/p3.svg";
import p4 from "../../image/p4.png";
import p5 from "../../image/p5.png";
import p6 from "../../image/p6.webp";

const partners = [
  { img: p1, name: "شركة تام اويل " },
  { img: p2, name: "شركة النصر للاعملال المدنية" },
  { img: p3, name: " شركة شيفكو للمقاولات" },
  { img: p5, name: "نادي الرياضات البحرية" },
  { img: p4, name: "مكتب العربية للتصميمات و الاستشارات الهندسية" },
  { img: p6, name: "شركة وادي النيل للمقاولات و الاستثمارات العقارية" },
];

const OurPartaner = () => {
  return (
    <div className="px-4">
      <div className="w-full flex justify-center flex-wrap mb-8">
        <h1 className="text-4xl border-b-4 px-8 py-4 border-b-[#FF3131] font-bold text-center">
          شركاء النجاح
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative w-60 h-60 overflow-hidden group shadow-md rounded-lg"
          >
            <Image
              src={partner.img}
              alt={`partner-${index + 1}`}
              className="object-contain w-full h-full"
            />
            {/* Overlay with name */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold transition-opacity duration-300">
              {partner.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartaner;
