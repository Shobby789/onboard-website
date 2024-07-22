import React from "react";

const SectionThree = () => {
  return (
    <section className="w-full horizontal-padding h-auto py-12 lg:h-screen section-three grid grid-cols-1 lg:grid-cols-2">
      <div className=""></div>
      <div className="flex flex-col gap-y-6 items-start text-start justify-center px-0 col-span-2 lg:col-span-1">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[108px] text-start font-semibold mx-0 px-0 uppercase tracking-tighter text-white">
          Enjoy One Month Free Trial!
        </h1>
        <p className="text-base px-2 lg:text-xl 2xl:text-2xl font-normal text-start tracking-normal xl:leading-9">
          Experience seamless hiring with onBoard - shortlisted candidates,
          initial interviews, and no cost for the first month.
        </p>
      </div>
    </section>
  );
};

export default SectionThree;
