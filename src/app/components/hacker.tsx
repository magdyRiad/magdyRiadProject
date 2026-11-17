import React from "react";
import Image from "next/image";
import hackImage from "../image/hack.jpg";
const Hacker = () => {
  return (
    <div>
      <Image
        src={hackImage}
        width={1000}
        height={1000}
        alt="hack"
        className="w-screen h-screen fixed  left-0 z-[9990]"
      />
    </div>
  );
};

export default Hacker;
