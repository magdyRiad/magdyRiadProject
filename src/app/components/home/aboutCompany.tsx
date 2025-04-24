import React from "react";
import Image from "next/image";
import imageCover from "../../image/L.0-4-APP.png";
import Link from "next/link";
const AboutCompany = () => {
  return (
    <div className="w-full relative h-[85vh] flex items-center pr-4 ">
      <Image
        alt=""
        src={imageCover}
        className="w-full left-0  h-[50vh] lg:h-[80vh]  absolute"
      />
      <div className="z-10  relative left-3/12 md:left-6/12 lg:left-8/12  rounded-lg ">
        <div className="w-full flex justify-end flex-wrap gap-3">
          <h1 className="w-full text-5xl text-end font-bold mb-2">عن الشركة</h1>
          <div className="bg-[#FF3131] w-48 h-1 rounded-lg"></div>
        </div>
        <div className="w-full flex  flex-wrap justify-end">
          <p className="lg:w-1/4 md:w-2/4 w-3/4 text-[#0B1F3A] bg-white/40 p-4 text-sm md:text-xl rounded-md m-1  font-bold ">
            تعتبر شركة ماجتك للاساسات المكانيكية (م/مجدي رياض) من أحد رواد
            الهندسة المدنية ، و تركز في المقام الأول في عملها على البنية التحتية
            و المشاريع الراقية التي تخدم الصالح العام و الخاص بأعلى كفاءة و جودة
            ممكنة .
          </p>
          <div className="w-full flex justify-end mt-10">
            <button className="btn btn-md lg:btn-lg xl:btn-xl bg-[#A12327] hover:bg-[#FF3131] text-white">
              <Link href="/we">تعرف علي المزيد</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
