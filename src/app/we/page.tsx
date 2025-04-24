import React from "react";
import Image from "next/image";
import titls from "../image/title_image.jpg";
import machine1 from "../image/20.jpeg";
import machine2 from "../image/21.jpeg";
import machine3 from "../image/20.jpeg";

const WeAre = () => {
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
          شركة ماجتك
        </div>
      </div>
      <div className="bg-white">
        {/* About Us Section */}
        <div className="px-6 md:px-20 py-10 text-right">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">من نحن؟</h2>
          <p className="m-3">
            تعد شركة ماجتك للأساسات الميكانيكيه و المقاولات العامه ( المهندس /
            مجدي رياض ) واحده من اقدم و اعرق شركات الاساسات و الخوازيق في مصر
            لما تتمتع به من خبرات واسعه تعود لمالكها و مؤسسها المهندس مجدي رياض
            <p className="bg-[#FF3131]/ my-2 font-bold rounded-md p-1">
              {" "}
              . - تتخصص الشركه في جميع انواع الخوازيق الميكانيكيه و جميع انواع
              تجارب التحميل بما في ذلك تجارب التكامل للخوازيق ( P.I.T ) PILE
              INTEGRITY TEST .
            </p>
          </p>
          <p>
            -الخوازيق الميكانيكيه انواعها كثيره لكن اشهرها علي الاطلاق -
            الخوازيق بنظام الحفر الدوار (BORED PILES) و هو الأفضل علي الاطلاق من
            حيث الامان و الجوده و اعلي نتيجة في اختبارات التحميل
            <p className="m-3">
              -تنصح شركتنا - كما في كبري شركات الاساسات بمصر (اوراسكوم - عثمان
              احمد عثمان- مصر ريموند - باور ) - دائما بالخوازيق بنظام الحفر
              الدوار (Bored piles ) .
            </p>
            - هذا النوع من الخوازيق هو أفضل انواع الخوازيق لما تضمنه من كفاءه
            عاليه و ضمان شبه تام لنتيجة اي تجربة تحميل او حتي اختبارات الفوق
            صوتيه ( Ultra-sound) التي تقوم شركتنا ايضا بتقديمها للسادة العملاء .
          </p>
        </div>

        {/* Clients Section */}
        {/* <div className="px-6 md:px-20 pb-10 text-right">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">عملاؤنا</h2>
          <p className="text-lg text-gray-700 leading-loose">
            نفتخر بأننا قدمنا خدماتنا لمجموعة من أكبر الشركات والمؤسسات في مصر،
            من بينها شركات مقاولات كبرى، مصانع، وجهات حكومية، وشركات تطوير عقاري
            مرموقة.
          </p>
        </div> */}

        {/* Machines Gallery */}
        <div className="px-6 md:px-20 pb-10">
          <h2 className="text-3xl font-bold text-[#0B1F3A] text-right mb-6">
            معداتنا وتقنياتنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              src={machine1}
              alt="machine 1"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
            <Image
              src={machine2}
              alt="machine 2"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
            <Image
              src={machine3}
              alt="machine 3"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
