import React from "react";
import AnimatedText from "../Global/AnimateTextCharacter";
// import AnimatedText from "../Global/AnimateTextCharacter";
// import AnimatedText from "../Global/AnimateTextCharacter";

const SectionTwo = () => {
  return (
    <section className="w-full horizontal-padding 2xl:gap-y-14 h-screen bg-gray-200 grid grid-cols-1 xl:grid-cols-2 relative">
      <div className="flex flex-col items-center justify-start gap-y-8">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[110px] text-start font-semibold uppercase tracking-tighter text-black">
          Proudly Built in Pakistan
        </h1>
        {/* <AnimatedText
        text={"Proudly Built in Pakistan"}
        className={"section-heading"}
      /> */}

        <h2 className="text-base lg:text-xl 2xl:text-2xl font-normal w-[95%] text-start tracking-normal xl:leading-9 text-black">
          From Pakistan to the world—bringing you hassle-free hiring solutions!
        </h2>
      </div>
      <div className=""></div>
    </section>
  );
};

export default SectionTwo;
