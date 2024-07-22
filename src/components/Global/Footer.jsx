import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full  h-screen text-white bg-red-800 flex items-start flex-wrap">
      <div className="flex items-center justify-center horizontal-padding w-full xl:w-[60%] xl:h-full">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[110px] text-center font-semibold uppercase tracking-wide text-white flex justify-center items-center gap-6 group bebas-nue-font">
          Let's Chat{" "}
          <FaArrowRightLong className="text-2xl lg:text-3xl 2xl:text-7xl" />
        </h1>
      </div>
      <div className="bg-red-900 py-12 horizontal-padding w-full xl:w-[40%] xl:h-full"></div>
    </footer>
  );
};

export default Footer;
