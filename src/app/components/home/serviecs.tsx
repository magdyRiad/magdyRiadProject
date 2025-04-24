import React from "react";
import Image from "next/image";
import image15 from "../../image/15.jpg";
const ServiecsPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full flex justify-center items-center flex-wrap gap-1">
        <h1 className="w-full text-5xl text-center font-bold text-[#0B1F3A]">
          خدماتنا
        </h1>
        <div className="bg-[#FF3131] w-44 h-1 rounded-lg"></div>
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap items-center gap-10 w-full p-4 lg:w-9/12 xl:w-8/12 ">
        <Image alt="" src={image15} className="w-96 h-96 rounded-lg" />
        <div className="text-black text-sm md:text-xl">
          <p className="m-3">
            تعتبر هذه الخدمة أحد أهم الخدمات والبنود التي تقوم الشركة ماجتك
            للاساسات الميكانيكية (المهندس : مجدي رياض) بتنفيذها حيث أننا نمتلك
            الدقة والأحتراف في مجال تقديم الحلول الجيوتقنية وأعمال التربة
            والأساسات وذلك بإستخدام التقنيات المختلفة مثل الحقن والأساسات
            العميقة مثل خوازيق الحفر الدوار (Bored Piles)و خوازيق البريمة
            المستمرة(C.F.A Piles)، الشدادات الارضيه (Anchors)، مشاكل التربة .
            وإنه لمن دواعي الفخر أن لدينا سابقة أعمال في المشروعات القومية
            وغيرها كما أننا نقوم بتطبيق أحدث الطرق العلمية الحديثة في حفظ وصيانة
            المنشأت وذلك من أجل تلبية جميع إحتياجات العملاء ، ونسعي دائما لتتميز
            في تنفيذ تلك الاعمال المتخصصة والصعبة لنكون من أكبر وأهم المنافسين
            للشركات التي تعمل في هذا المجال بأذن الله في المستقبل القريب .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiecsPage;
