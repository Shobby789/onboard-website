import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full horizontal-padding py-12 h-screen text-white bg-red-800 grid grid-cols-1 xl:grid-cols-2">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[110px] text-center font-semibold uppercase tracking-wide text-white flex justify-center items-center gap-6 group bebas-nue-font">
          Let's Chat{" "}
          <FaArrowRightLong className="text-2xl lg:text-3xl 2xl:text-7xl" />
        </h1>
      </div>
      <div className=""></div>
    </footer>
  );
};

export default Footer;
