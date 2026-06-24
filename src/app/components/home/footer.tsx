"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer
      className="relative overflow-hidden bg-[#08172B] text-white"
      id="footer"
    >
      {/* Background */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-600 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-yellow-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}

          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[6px] mb-4">
              CONTACT US
            </p>

            <h2 className="text-4xl md:text-5xl font-black">تواصل معنا</h2>

            <div className="w-28 h-1 bg-red-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-1">رقم الهاتف</p>
                  <p
                    dir="ltr"
                    className="font-bold text-lg text-center tracking-wider"
                  >
                    +20 122 247 6493
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-1">البريد الإلكتروني</p>

                  <p className="font-bold text-sm md:text-lg break-all">
                    magdyriadfoundation@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Name */}

          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <h3 className="text-2xl font-black mb-2">MAGTEC FOUNDATIONS</h3>

            <p className="text-gray-400">هندسة الأساسات وبناء المستقبل</p>
          </div>

          {/* Copyright */}

          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة مجدي رياض
            للمقاولات
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterPage;
