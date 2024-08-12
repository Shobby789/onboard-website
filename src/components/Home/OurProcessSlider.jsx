import React from "react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ProcessCard from "../Global/ProcessCard";

const OurProcessSlider = () => {
  return (
    <Swiper className="mySwiper bg-transparent" spaceBetween={50}>
      <SliderButtons />
      <SwiperSlide
        className="pb-16 mt-16 mx-4"
        style={{ background: "transparent" }}
      >
        <ProcessCard count={"01"} heading={"Marketing"} />
      </SwiperSlide>
      <SwiperSlide
        className="pb-16 mt-16 mx-4"
        style={{ background: "transparent" }}
      >
        <ProcessCard count={"02"} heading={"Execution"} />
      </SwiperSlide>
      <SwiperSlide
        className="pb-16 mt-16 mx-4"
        style={{ background: "transparent" }}
      >
        <ProcessCard count={"03"} heading={"Growth & Scale"} />
      </SwiperSlide>
    </Swiper>
  );
};

export const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full lg:flex justify-between hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 px-10">
      <button
        className="w-10 h-10 bg-white hover:bg-[#00bf63] hover:text-white transition-all duration-300 text-xl custom-shadow rounded-full flex items-center justify-center"
        onClick={() => swiper.slidePrev()}
      >
        {"<"}
      </button>
      <button
        className="w-10 h-10 bg-white hover:bg-[#00bf63] hover:text-white transition-all duration-300 text-xl custom-shadow rounded-full flex items-center justify-center"
        onClick={() => swiper.slideNext()}
      >
        {">"}
      </button>
    </div>
  );
};

export default OurProcessSlider;
