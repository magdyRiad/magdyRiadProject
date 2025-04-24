import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-10 pb-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-between items-start">
        {/* Contact Info */}
        <div className="flex-1 space-y-4 text-end">
          <h2 className="text-xl font-bold border-b-2 border-[#5A9BD5] pb-2">
            تواصل معنا
          </h2>

          <div className="flex items-center justify-end gap-2 text-sm md:text-lg">
            <span>201222476493</span>
            <FaPhoneAlt className="text-[#5A9BD5]" />
          </div>

          <div className="flex items-center justify-end gap-2 text-sm md:text-lg">
            <span>magdyriadfoundation@gmail.com</span>
            <FaEnvelope className="text-[#5A9BD5]" />
          </div>

          {/* <div className="flex items-center justify-end gap-2 text-sm md:text-lg">
            <span>شارع محمد علي، يشسيب من شايب</span>
            <FaMapMarkerAlt className="text-[#5A9BD5]" />
          </div> */}
        </div>

        {/* Google Map */}
        {/* <div className="flex-1">
          <Link
            href="https://www.google.com/maps/place/Cairo+Festival+City+Mall/@30.0218055,31.4154445,14z/data=!4m6!3m5!1s0x14583dd9f831b247:0xa7848c6a8c566be8!8m2!3d30.0288362!4d31.4075861!16s%2Fg%2F11f6k5qwql?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={map}
              alt="location"
              className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div> */}
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركة مجدي رياض
        للمقاولات.
      </div>
    </footer>
  );
};

export default FooterPage;
