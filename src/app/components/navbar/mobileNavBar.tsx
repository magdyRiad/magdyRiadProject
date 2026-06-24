"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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

const MobileNavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setActive(!active)}>
        {active ? (
          <IoClose className="text-4xl text-white" />
        ) : (
          <BiMenuAltRight className="text-4xl text-white" />
        )}
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-4 right-4 rounded-2xl bg-[#0B1F3A]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col p-5 gap-5 text-center">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setActive(false)}
                    className="block text-lg font-semibold text-white hover:text-red-500 duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
