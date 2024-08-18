import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav
      className={`w-full py-4 2xl:py-10 flex items-center justify-between horizontal-padding fixed top-0 z-50 custom-shadow bg-white`}
    >
      {/* <h1 className="text-2xl font-semibold">Navbar</h1> */}
      <Link to="/" className="flex items-center gap-x-2">
        <img
          src="/file.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
        />

        {/* <img
          src="/file.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-20 rounded-2xl"
        /> */}
        <span className={`font-normal text-xl 2xl:text-3xl text-black`}>
          onBoard
        </span>
      </Link>
      <div className="hidden lg:flex items-center gap-x-14">
        <Link
          to={"/about-us"}
          className={`text-lg 2xl:text-xl font-normal outline-none text-black`}
        >
          About
        </Link>
        <Link
          to={"/"}
          className={`text-lg 2xl:text-xl font-normal outline-none text-black`}
        >
          Team
        </Link>
        <Link
          to={"/"}
          className={`text-lg 2xl:text-xl font-normal outline-none text-black`}
        >
          Careers
        </Link>
        <Link
          to={"/contact-us"}
          className={`text-lg 2xl:text-xl font-normal outline-none text-black`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
