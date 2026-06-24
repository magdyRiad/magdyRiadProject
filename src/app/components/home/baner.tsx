"use client";

import { motion } from "framer-motion";

const Baner = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }} // تقليل مسافة الـ bounce عشان تكون أنعم
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center" // تقليل الماكس ويدث عشان الكلام ميبقاش عريض بزيادة
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl">
          {/* اسم الشركة */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-3 text-xs sm:text-sm font-bold tracking-[4px] sm:tracking-[6px] text-red-500"
          >
            MAGTEC FOUNDATIONS
          </motion.p>

          {/* العنوان الرئيسي */}
          <h1 className="mb-4 text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            هندسة الأساسات
            <br />
            وبناء المستقبل
          </h1>

          {/* الخط الفاصل */}
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-red-600" />

          {/* الإدارة والأسماء */}
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-200">
            <p>
              Owner & Founder:{" "}
              <span className="font-semibold text-yellow-400">
                Eng. Magdy Riad
              </span>
            </p>

            <p>
              Deputy General Manager:{" "}
              <span className="font-semibold text-yellow-400">
                Dr. Sherif Magdy Riad
              </span>
            </p>

            <p>
              Project Manager:{" "}
              <span className="font-semibold text-yellow-400">
                Eng. Mosaad Abd ElAtty
              </span>
            </p>
          </div>

          {/* الشعار النصي */}
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium tracking-wide text-white/90">
            Quality... For Better Buildings
          </p>

          {/* الأزرار */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => (window.location.href = "/projects")}
              className="w-full sm:w-auto rounded-full bg-red-600 px-6 py-2.5 text-sm sm:text-base text-white font-bold transition hover:scale-105 hover:bg-red-700 active:scale-95"
            >
              مشاريعنا
            </button>

            <button
              onClick={() => (window.location.href = "#footer")}
              className="w-full sm:w-auto rounded-full border border-white/80 px-6 py-2.5 text-sm sm:text-base text-white font-bold transition hover:bg-white hover:text-[#0B1F3A] active:scale-95"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Baner;
