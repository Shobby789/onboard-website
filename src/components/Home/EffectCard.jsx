import React from "react";

const EffectCard = ({ review }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center h-full px-6 2xl:px-10 bg-black gap-y-6 2xl:gap-8 text-center"
      style={{
        background: review?.bg_color,
      }}
    >
      <img
        src={review?.image}
        alt="profile photo"
        className="w-32 h-32 object-cover rounded-full"
      />
      <p
        className="font-medium text-base tracking-wide leading-6"
        style={{ color: review?.text_color }}
      >
        {review?.text_1}
      </p>
      <p className="text-base font-bold" style={{ color: review?.text_color }}>
        {review?.text_2}
      </p>
    </div>
  );
};

export default EffectCard;
