import React from "react";
import Logo from "./logo";
import Link from "next/link";
import MobileNavBar from "./mobileNavBar";

const Navbar = () => {
  return (
    <div className="flex justify-between md:fixed w-full md:w-3/4 lg:w-11/12 xl:w-2/4 md:top-4 md:left-2/4 md:-translate-x-2/4 bg-black/80 text-white  p-2 md:rounded-md text-xl z-[7337]">
      <ul className="md:flex hidden gap-5 items-center text-sm lg:text-lg ">
        <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/"
          >
            الرئيسية
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/we"
          >
            عن الشركة
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/projects"
          >
            المشروعات
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/clients"
          >
            عملاءنا
          </Link>
        </li>
        {/* 
        <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/services"
          >
            خدماتنا
          </Link>
        </li> */}

        {/* <li>
          <Link
            className="hover:text-2xl duration-300 hover:font-bold"
            href="/contact"
          >
            الاتصال بنا
          </Link>
        </li> */}
      </ul>
      <MobileNavBar />
      <Logo />
    </div>
  );
};

export default Navbar;
