"use client";
import React from "react";
import Image from "next/image";
import titls from "../image/title_image.jpg";
import c1 from "../image/p1.png";
import c2 from "../image/p2.png";
import c3 from "../image/p3.svg";
import c4 from "../image/p4.png";
import c5 from "../image/p5.png";
import c6 from "../image/p6.webp";
import b1 from "../image/c1.jpeg";
import b2 from "../image/c2.jpeg";
import b3 from "../image/c3.jpeg";
import b4 from "../image/c4.jpeg";
import b5 from "../image/c5.jpeg";
import b6 from "../image/c6.jpeg";
import b7 from "../image/c7.jpeg";
import b9 from "../image/c9.jpeg";
import b10 from "../image/c10.jpeg";
import b11 from "../image/c11.jpeg";
import b12 from "../image/c12.jpeg";

// Import Swiper styles
import "swiper/css";

const clients = [
  { img: c1, name: "شركة تام اويل" },
  { img: c2, name: "شركة النصر للأعمال المدنية" },
  { img: c3, name: "شركة شيميكو للمقاولات" },
  { img: c4, name: "مكتب العربية للتصميمات" },
  { img: c5, name: "نادي الرياضات البحرية" },
  { img: c6, name: "شركة وادي النيل للمقاولات" },
];

const certificates = [
  { img: b1, title: "شهادة من شركة تام اويل" },
  { img: b2, title: "شهادة من شركة النصر للأعمال المدنية" },
  { img: b3, title: "شهادة من شركة شيميكو للمقاولات" },
  { img: b4, title: "شهادة من مكتب العربية للتصميمات" },
  { img: b5, title: "شهادة من نادي الرياضات البحرية" },
  { img: b6, title: "شهادة من شركة وادي النيل للمقاولات" },
  { img: b7, title: "شهادة من شركة وادي النيل للمقاولات" },
  { img: b9, title: "شهادة من المكتب الدولي " },
  { img: b10, title: "شهادة من شركة شيميكو" },
  { img: b11, title: "شهادة من شركة اديك " },
  { img: b12, title: "شهادة من شركة الدلتا للتنمية العمرانية" },
];

const ClientsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={titls}
          alt="cover"
          className="fixed top-0 left-0 w-screen h-[50vh] object-cover -z-10"
        />
        <div className="z-20 w-screen h-[50vh] text-white text-3xl md:text-5xl font-bold flex justify-center items-center bg-black/40">
          عملاؤنا الذين نعتز بهم
        </div>
      </div>

      {/* Clients Grid */}
      <div className="px-4 py-12 bg-white">
        <div className="w-full flex justify-center mb-10">
          <h2 className="text-4xl font-bold border-b-4 border-b-[#5A9BD5] px-6 py-2 text-center">
            عملاؤنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative w-60 h-60 overflow-hidden group rounded-lg shadow-md"
            >
              <Image
                src={client.img}
                alt={client.name}
                className="object-contain w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold transition-opacity duration-300 text-center px-4">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-12 bg-gray-50">
        <div className="w-full flex justify-center mb-10">
          <h2 className="text-4xl font-bold border-b-4 border-b-[#5A9BD5] px-6 py-2 text-center">
            شهادات الخبرة
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative w-72 h-96 overflow-hidden group rounded-xl shadow-md"
            >
              <Image
                src={cert.img}
                alt={cert.title}
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">
                {cert.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
