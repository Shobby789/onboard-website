import React from "react";
import PricingCard from "../Global/PricingCard";
import { motion } from "framer-motion";

const SectionThree = () => {
  return (
    <section className="w-full horizontal-padding h-auto py-12 xl:py-24 2xl:py-40 flex flex-col gap-14 2xl:gap-24 relative">
      <div className="flex flex-col gap-y-6 items-center text-center justify-center px-0 col-span-2 lg:col-span-1">
        <motion.h1
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[108px] text-center font-semibold mx-0 px-0 uppercase tracking-tighter text-black"
        >
          Enjoy One Month <br /> Free Trial!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-base px-2 lg:text-xl 2xl:text-2xl font-normal tracking-normal xl:leading-9 text-black lg:w-[50%]"
        >
          Experience seamless hiring with onBoard - shortlisted candidates,
          initial interviews, and no cost for the first month.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:px-48 relative">
        <div className="absolute w-32 h-32 bg-[#00bf63] rounded-full lg:-left-14 lg:-top-14 2xl:top-[-10%] 2xl:left-[8%] z-0 opacity-25" />

        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
};

export default SectionThree;
