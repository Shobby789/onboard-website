import React from "react";
import { FaCheck } from "react-icons/fa6";

const PricingCard = () => {
  return (
    <div className="custom-shadow py-8 px-6 2xl:px-10 2xl:py-10 rounded-[28px] h-auto w-full flex flex-col items-start gap-2 bg-white group hover:bg-[#00bf63] hover:text-white hover:scale-[1.01] transition-all duration-300 relative z-30">
      <img
        src="/onboard-tree-white.png"
        alt="onboard-tree-white"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-50 transition-all duration-500 z-0"
      />
      <h1 className="font-semibold text-xl z-10">Day Pass</h1>
      <h2 className="text-gray-400 group-hover:text-gray-200 transition-all duration-300 z-10">
        What You'll Get
      </h2>

      <div className="flex flex-col items-start gap-3 mt-3 border-dashed border-t border-b border-gray-300 py-5 z-10">
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full p-1 group-hover:bg-white group-hover:text-[#00bf63] transition-all duration-300">
            <FaCheck className="text-white group-hover:text-[#00bf63] transition-all duration-300 w-full h-full" />
          </div>
          <p className="text-[16px]">8 hours usage of our coworking space</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full p-1 group-hover:bg-white group-hover:text-[#00bf63] transition-all duration-300">
            <FaCheck className="text-white group-hover:text-[#00bf63] transition-all duration-300 w-full h-full" />
          </div>
          <p className="text-[16px]">8 hours usage of our coworking space</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full p-1 group-hover:bg-white group-hover:text-[#00bf63] transition-all duration-300">
            <FaCheck className="text-white group-hover:text-[#00bf63] transition-all duration-300 w-full h-full" />
          </div>
          <p className="text-[16px]">8 hours usage of our coworking space</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full p-1 group-hover:bg-white group-hover:text-[#00bf63] transition-all duration-300">
            <FaCheck className="text-white group-hover:text-[#00bf63] transition-all duration-300 w-full h-full" />
          </div>
          <p className="text-[16px]">8 hours usage of our coworking space</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-1 z-10">
        $100<sub className="font-normal text-sm">/month</sub>
      </h2>
      <button className="w-full green-bg group-hover:bg-white group-hover:text-[#00bf63] transition-all duration-300 text-white rounded-2xl font-medium py-3 mt-2 z-10">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
