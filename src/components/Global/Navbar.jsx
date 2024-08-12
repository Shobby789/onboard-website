import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full py-4 2xl:py-10 flex items-center justify-between horizontal-padding fixed top-0 z-50 ${
        scrolled && "custom-shadow bg-white"
      }`}
    >
      {/* <h1 className="text-2xl font-semibold">Navbar</h1> */}
      <Link to="/" className="flex items-center gap-x-2">
        {scrolled ? (
          <img
            src="/file.png"
            alt=""
            className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
          />
        ) : (
          <img
            src="/onboard-logo-1.png"
            alt=""
            className="block w-12 lg:w-14 2xl:w-16"
          />
        )}
        {/* <img
          src="/file.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-20 rounded-2xl"
        /> */}
        <span
          className={`font-normal text-xl 2xl:text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          onBoard
        </span>
      </Link>
      <div className="hidden lg:flex items-center gap-x-14">
        <Link
          to={"/about-us"}
          className={`text-lg 2xl:text-xl font-normal outline-none ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          About
        </Link>
        <Link
          to={"/"}
          className={`text-lg 2xl:text-xl font-normal outline-none ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Team
        </Link>
        <Link
          to={"/"}
          className={`text-lg 2xl:text-xl font-normal outline-none ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Careers
        </Link>
        <Link
          to={"/contact-us"}
          className={`text-lg 2xl:text-xl font-normal outline-none ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
