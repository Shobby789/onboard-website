import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-x-1">
        <img
          src="/loader-logo.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-32"
        />
        <h1 className="font-normal text-xl 2xl:text-5xl text-black">onBoard</h1>
      </div>
    </div>
  );
};

export default Loader;
