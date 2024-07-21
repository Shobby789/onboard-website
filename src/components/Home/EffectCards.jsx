import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import EffectCard from "./EffectCard";
import reviews from "../../constants/reviews";

export default function EffectCardsAnimation() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <EffectCard review={review} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
