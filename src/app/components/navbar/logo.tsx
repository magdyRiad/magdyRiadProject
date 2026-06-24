import Image from "next/image";
import Link from "next/link";

import logo from "../../favicon.ico";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src={logo} alt="logo" className="w-12 h-12 rounded-full" />

      <div>
        <h1 className="text-lg md:text-xl font-black text-white">MAGTEC</h1>

        <p className="text-xs md:text-sm text-gray-300">Eng. Magdy Riad</p>
      </div>
    </Link>
  );
};

export default Logo;
