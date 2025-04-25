import React from "react";

const Baner = () => {
  return (
    <div className="h-fit top-3/12 w-[40vh] md:w-[50vw] lg:w-[30vw] rounded-md  left-2/4 lg:left-1/4 -translate-x-2/4 z-40 absolute shadow-lg border border-white/20">
      <div className="text-center space-y-4 p-4 bg-[#5A9BD5]/90 rounded-md w-full">
        <h1 className="text-xs md:text-xl lg:text-3xl font-bold text-white drop-shadow-md">
          Owner & Founder: <span className="text-black">Eng. Magdy Riad</span>
        </h1>
        <h2 className="text-xs md:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
          Deputy General Manager:{" "}
          <span className="text-black">Dr.Sherif Magdy Riad</span>
        </h2>
        <h3 className="text-xs md:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
          Project Manager:{" "}
          <span className="text-black">Eng. Mosaad Abd ElAtty</span>
        </h3>
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-md  uppercase text-yellow-300">
          <span className="text-white">&quot;Quality</span>
          <span className="text-white">...for better buildings&quot;</span>
        </h3>
      </div>
    </div>
  );
};

export default Baner;
