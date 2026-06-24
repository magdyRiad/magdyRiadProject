"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./logo";
import MobileNavBar from "./mobileNavBar";

const links = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "عن الشركة",
    href: "/we",
  },
  {
    title: "المشروعات",
    href: "/projects",
  },
  {
    title: "عملاؤنا",
    href: "/clients",
  },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-[9999] w-full px-4 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="h-20 px-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-[#08172D]/80 shadow-2xl flex items-center justify-between">
          {/* Desktop */}

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="relative text-gray-200 font-semibold transition duration-300 hover:text-red-500 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:duration-300 hover:after:w-full"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile */}

          <MobileNavBar />

          {/* Logo */}

          <Logo />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
