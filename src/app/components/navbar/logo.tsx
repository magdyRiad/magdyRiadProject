import React from "react";
import Image from "next/image";
import logo from "../../favicon.ico";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div>
        <div className="text-base font-bold">Magtec Foundations</div>
        <div className="text-sm text-center">Eng.Magdy Riad</div>
      </div>
      <Image src={logo} alt="logo" className="w-7 h-7" />
    </Link>
  );
};

export default Logo;
