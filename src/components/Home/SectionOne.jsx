import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../Global/AnimateTextCharacter";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

const SectionOne = () => {
  return (
    <main className="w-full bg-white">
      <div className="w-full min-h-screen horizontal-padding relative grid grid-cols-1 xl:grid-cols-2 bg-green-500 ">
        <div className="flex flex-col items-center justify-center relative gap-y-4">
          <AnimatedText
            text={"Hiring Made Easy!"}
            className={
              "text-4xl lg:text-5xl xl:text-7xl 2xl:text-[120px] text-start font-semibold uppercase tracking-tighter text-white lg:pl-1"
            }
          />
          <motion.h2
            initial={{ opacity: 0.6, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="text-sm lg:text-xl 2xl:text-2xl font-normal w-full text-start tracking-normal 2xl:leading-9 pl-3 text-white"
          >
            Struggling to select from thousands of CVs? onBoard makes hiring
            easy by providing only shortlisted candidates after initial
            interviews.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0.6, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="w-full flex items-center pl-3 gap-5 mt-4"
          >
            <Link
              to="/"
              className="bg-white text-black font-semibold px-4 md:px-8 py-4 rounded-full text-[15px] outline-none flex items-center gap-1"
            >
              Get A Job <LuArrowRight className="text-lg" />
            </Link>
            <Link
              to="/"
              className="bg-white text-black font-semibold px-4 md:px-8 py-4 rounded-full text-[15px] outline-none"
            >
              Recruit Talent
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{
              scale: 1,
              rotate: 0,
              borderRadius: "0%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["0%", "0%", "0%", "0%", "0%"],
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-[240px] h-[240px] lg:w-[400px] lg:h-[350px] 2xl:w-[500px] 2xl:h-[500px] border-[15px] border-white absolute left-1/2 top-12 lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-90"
          ></motion.div>
          <img
            src="/onboad-tree-white-1.png"
            alt=""
            className="w-[190px] h-[190px] lg:w-[300px] lg:h-[300px] 2xl:w-[350px] 2xl:h-[350px] absolute left-1/2 top-14 lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-tree opacity-90"
          />
        </div>
      </div>
    </main>
  );
};

export default SectionOne;
