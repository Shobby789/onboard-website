import React from "react";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <section className="w-full horizontal-padding 2xl:gap-y-14 grid grid-cols-1 xl:grid-cols-2 gap-y-0 relative py-12 h-[60vh] lg:min-h-screen">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <h2 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-[110px] text-start font-semibold uppercase tracking-tighter text-black pl-3">
          Proudly Built in Pakistan
        </h2>

        <h3 className="text-sm lg:text-xl 2xl:text-2xl font-normal w-[95%] text-start tracking-normal xl:leading-9 text-black">
          From Pakistan to the world—bringing you hassle-free hiring solutions!
        </h3>

        <div className="w-full flex items-center pl-3 gap-5 mt-4">
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
        </div>
      </div>

      <div className="flex items-center justify-start relative">
        <img
          src="/office-interview-2.jfif"
          alt=""
          className="rounded-2xl custom-shadow-2 w-2/3 absolute top-[15%] 2xl:ml-20"
        />
        <img
          src="/office-interview-3.jpg"
          alt=""
          className="rounded-2xl custom-shadow-2 w-[60%] absolute z-20 top-[50%] left-[10%] transform translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
