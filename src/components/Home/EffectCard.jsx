import React from "react";

const EffectCard = ({ review }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center h-full px-6 2xl:px-10 bg-black gap-y-6 2xl:gap-8 text-center rounded-[18px]"
      style={{
        background: review?.bg_color,
      }}
    >
      <img
        src={review?.image}
        alt="profile photo"
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
      />
      <p
        className="font-medium text-sm lg:text-base tracking-wide md:leading-6"
        style={{ color: review?.text_color }}
      >
        {review?.text_1}
      </p>
      <p
        className="text-[15px] lg:text-base font-bold"
        style={{ color: review?.text_color }}
      >
        {review?.text_2}
      </p>
    </div>
  );
};

export default EffectCard;
