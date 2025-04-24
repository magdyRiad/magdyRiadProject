import React from "react";

const Baner = () => {
  return (
    <div className="h-[30vh] md:h-[70vh] w-[60vh] p-5 left-2/4 md:left-1/4 -translate-x-2/4 z-40 absolute flex items-center justify-center overflow-x-hidden">
      <div className="text-center space-y-4 bg-[#5A9BD5]/80 rounded-md">
        <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow-md">
          Owner & Founder: <span className="text-black">Eng. Magdy Riad</span>
        </h1>
        <h2 className="text-base md:text-2xl font-semibold text-white drop-shadow-md">
          Deputy General Manager:{" "}
          <span className="text-black">Dr.Sherif Magdy Riad</span>
        </h2>
        <h3 className="text-base md:text-2xl font-semibold text-white drop-shadow-md">
          Project Manager:{" "}
          <span className="text-black">Eng. Mosaad Abd ElAtty</span>
        </h3>
        <h3 className="text-base md:text-2xl font-semibold drop-shadow-md  uppercase ">
          <span className="text-white">&quot;Quality</span>
          <span className="text-white">...for better buildings&quot;</span>
        </h3>
      </div>
    </div>
  );
};

export default Baner;
