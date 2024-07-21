import React from "react";
import EncryptButton from "../Global/AnimatedButton";
import Example from "../Global/AnimatedButton";
import EffectCardsAnimation from "./EffectCards";

const SectionFive = () => {
  return (
    <section className="w-full horizontal-padding h-screen section-five grid grid-cols-1 xl:grid-cols-2">
      <div className="flex flex-col gap-y-6 items-start text-start justify-center px-0">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[108px] text-start font-semibold mx-0 px-0 uppercase tracking-tighter text-white">
          Start Today Don’t Wait!
        </h1>
        <p className="text-base px-2 lg:text-xl 2xl:text-2xl font-normal lg:w-[50%] xl:w-[45%] 2xl:w-[95%] text-start tracking-normal xl:leading-9">
          Join onBoard today and streamline your hiring process. Employers find
          top talent fast, and candidates land their dream jobs effortlessly!
        </p>
        <div className="w-full flex justify-start px-0 py-3 gap-x-6">
          <Example
            btnText={"Get a Job"}
            bg_color={"bg-green-500"}
            text_color={"text-white"}
          />
          <Example
            btnText={"Recruit Talent"}
            bg_color={"bg-white"}
            text_color={"text-black"}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <EffectCardsAnimation />
      </div>
    </section>
  );
};

export default SectionFive;
