import React from "react";
import EffectCardsAnimation from "./EffectCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionFive = () => {
  return (
    <section className="w-full horizontal-padding h-auto py-12 xl:py-24 2xl:py-40 section-five grid grid-cols-1 lg:grid-cols-2 gap-y-8 bg-green-50">
      <div className="flex flex-col gap-y-6 items-start text-start justify-center px-0 col-span-2 lg:col-span-1">
        <motion.h1
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[108px] text-start font-semibold mx-0 px-0 uppercase tracking-tighter text-black"
        >
          Start Today Don’t Wait!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-base text-black px-2 lg:text-xl 2xl:text-2xl font-normal w-[95%] text-start tracking-normal xl:leading-9"
        >
          Join onBoard today and streamline your hiring process. Employers find
          top talent fast, and candidates land their dream jobs effortlessly!
        </motion.p>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center pl-3 gap-5 mt-4"
        >
          <Link
            to="/"
            className="bg-green-500 text-white font-semibold px-4 md:px-8 py-4 rounded-full text-[15px] outline-none"
          >
            Get A Job
          </Link>
          <Link
            to="/"
            className="bg-black text-white font-semibold px-4 md:px-8 py-4 rounded-full text-[15px] outline-none"
          >
            Recruit Talent
          </Link>
        </motion.div>
      </div>

      <div className="flex justify-center items-center col-span-2 lg:col-span-1">
        <EffectCardsAnimation />
      </div>
    </section>
  );
};

export default SectionFive;
