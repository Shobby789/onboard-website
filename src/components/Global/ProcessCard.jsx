import { motion } from "framer-motion";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const ProcessCard = ({ heading, count }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-[85%] 2xl::w-[70%] flex flex-col items-center mx-auto relative"
    >
      <div className="lg:h-[50vh] 2xl:h-[35vh] p-8 lg:block lg:w-[35%] 2xl:w-[28%] rounded-[48px] bg-green-500 absolute hidden lg:left-2 2xl:left-10 top-16 2xl:top-20"></div>
      <div className="h-auto lg:h-[70vh] 2xl:h-[50vh] lg:w-[85%] 2xl:w-[65%] rounded-[48px] p-6 xl:p-8 2xl:p-14 custom-shadow-2 mx-auto flex items-center bg-white">
        <div className="w-full lg:w-[90%] 2xl:w-[40%] hidden lg:block"></div>
        <div className="h-full flex flex-col justify-center gap-4 ">
          <span className="text-[#00bf63] font-semibold text-xl">{count}</span>
          <h3 className="text-2xl font-semibold">{heading}</h3>
          <p className="text-base text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            molestiae unde enim atque blanditiis repellendus mollitia porro,
            sequi omnis excepturi.
          </p>

          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#00bf63] rounded-full p-1">
                <FaCheck className="text-white" />
              </div>
              <p className="font-medium text-base">
                Brainstorming and Ideation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#00bf63] rounded-full p-1">
                <FaCheck className="text-white" />
              </div>
              <p className="font-medium text-base">Execution Plan</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#00bf63] rounded-full p-1">
                <FaCheck className="text-white" />
              </div>
              <p className="font-medium text-base">Competitors Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
