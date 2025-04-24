"use client";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";

const MobileNavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="block md:hidden">
      <BiMenuAltRight
        className={`${
          active ? " rotate-180" : ""
        } duration-300 text-4xl cursor-pointer`}
        onClick={() => setActive((prev) => !prev)}
      />
      {active && (
        <ul className="menu bg-base-200  rounded-box w-44 absolute z-50 right-0 top-14 text-black ">
          <li className=" ">
            <Link href="/" className="">
              الرئيسية
            </Link>
          </li>
          <li className=" ">
            <Link href="/we">عن الشركة</Link>
          </li>
          <li className=" ">
            <Link href="/projects">المشروعات</Link>
          </li>
          <li className=" ">
            <Link href="/clients">عملاءنا</Link>
          </li>
          {/* <li className=" ">
            <Link href="/contact">الاتصال بنا</Link>
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default MobileNavBar;
