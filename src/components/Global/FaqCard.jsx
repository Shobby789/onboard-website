import { motion } from "framer-motion";
import React, { useState } from "react";
import { LuArrowDownLeft } from "react-icons/lu";

const FaqCard = ({ question, answer, index, isOpen, handleOpen }) => {
  return (
    <motion.button
      initial={{ opacity: 0.5, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      type="button"
      onClick={() => handleOpen(index)}
      className={`w-full custom-shadow rounded-2xl p-6 2xl:p-8 flex flex-col items-start gap-4 ${
        isOpen ? "bg-white" : "bg-white"
      }`}
    >
      <div className="w-full flex items-center justify-between gap-6">
        <h2 className="text-start font-semibold lg:text-base 2xl:text-xl w-[90%]">
          {question}
        </h2>
        <div className="w-[10%] flex justify-end">
          <div
            className={`w-5 h-5 2xl:w-7 2xl:h-7 border-2 border-green-500 rounded-full flex items-center justify-center ${
              isOpen && "bg-green-500"
            }`}
          >
            <LuArrowDownLeft
              className={`${isOpen ? "text-white" : "text-green-500"} text-xl`}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <p className="text-start text-[15px] text-gray-500">{answer}</p>
      )}
    </motion.button>
  );
};

export default FaqCard;
