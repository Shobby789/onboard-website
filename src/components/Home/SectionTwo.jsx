import React from "react";
import AnimatedText from "../Global/AnimateTextCharacter";
// import AnimatedText from "../Global/AnimateTextCharacter";
// import AnimatedText from "../Global/AnimateTextCharacter";

const SectionTwo = () => {
  return (
    <section className="w-full horizontal-padding flex flex-col items-center justify-center gap-y-8 2xl:gap-y-14 h-screen bg-blue-600 relative">
      <h1 className="section-heading">Proudly Built in Pakistan</h1>
      {/* <AnimatedText
        text={"Proudly Built in Pakistan"}
        className={"section-heading"}
      /> */}

      <h2 className="text-base lg:text-xl 2xl:text-2xl font-normal lg:w-[50%] xl:w-[45%] 2xl:w-[35%] text-center tracking-normal xl:leading-9">
        From Pakistan to the world—bringing you hassle-free hiring solutions!
      </h2>
    </section>
  );
};

export default SectionTwo;
