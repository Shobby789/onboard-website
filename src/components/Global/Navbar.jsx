import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 2xl:py-10 flex items-center justify-between horizontal-padding fixed top-0 z-50">
      {/* <h1 className="text-2xl font-semibold">Navbar</h1> */}
      <div className="flex items-center gap-x-1">
        <img
          src="/onboard-logo-1.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-20"
        />
        <h1 className="font-normal text-xl 2xl:text-3xl">onBoard</h1>
      </div>
      <div className="hidden lg:flex items-center gap-x-14">
        <Link
          to={"/about-us"}
          className="text-lg 2xl:text-xl font-normal outline-none"
        >
          About
        </Link>
        <Link to={"/"} className="text-lg 2xl:text-xl font-normal outline-none">
          Team
        </Link>
        <Link to={"/"} className="text-lg 2xl:text-xl font-normal outline-none">
          Careers
        </Link>
        <Link
          to={"/contact-us"}
          className="text-lg 2xl:text-xl font-normal outline-none"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
