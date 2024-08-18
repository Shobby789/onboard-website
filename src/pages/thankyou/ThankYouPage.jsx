import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      {/* <img
        src="/cute-boy-floor-white-background.png"
        alt="cute-boy-floor-white-background"
        className="w-72 rotate-6 relative -bottom-2"
      /> */}
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-7xl mb-4 text-[#00bf63]">
        Thank You
      </h1>
      <p className="font-medium text-center">
        We have received your message. We'll get back to <br /> you as soon as
        possible.
      </p>
      <div className="mt-8">
        <Link to="/" className="text-white bg-[#00bf63] px-8 py-4 rounded-full">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
