import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-green-50 text-black py-12 xl:py-24 2xl:py-32 grid grid-cols-1 md:lg:grid-cols-5 gap-6 horizontal-padding">
      <div className="col-span-1 lg:col-span-2 2xl:pr-28 flex flex-col items-start justify-start gap-6 2xl:gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/file.png"
            alt=""
            className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
          />
          <span className="font-normal text-xl 2xl:text-3xl text-black">
            onBoard
          </span>
        </Link>

        <p className="font-normal text-[16px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea
          excepturi vero saepe autem inventore!
        </p>

        <div className="flex items-center gap-4">
          <Link className="">
            <TiSocialFacebook className="w-full h-full text-[#00bf63] text-2xl" />
          </Link>
          <Link className="">
            <FaInstagram className="w-full h-full text-[#00bf63] text-xl" />
          </Link>
          <Link className="">
            <TiSocialTwitter className="w-full h-full text-[#00bf63] text-2xl" />
          </Link>
          <Link className="">
            <TiSocialLinkedin className="w-full h-full text-[#00bf63] text-2xl" />
          </Link>
        </div>
        {/* <Link
          to="/contact-us"
          className="text-4xl lg:text-5xl xl:text-6xl text-center font-semibold uppercase tracking-wide text-black flex justify-center items-center gap-6 group bebas-nue-font"
        >
          Let's Chat{" "}
          <FaArrowRightLong className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" />
        </Link> */}
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-lg font-semibold">Company</h3>
        <ul className="flex flex-col items-start gap-3">
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Home
          </Link>
          <Link
            to="/about-us"
            className="font-medium text-[15px] text-gray-600"
          >
            About Us
          </Link>
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Team
          </Link>
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Careers
          </Link>
          <Link
            to="/contact-us"
            className="font-medium text-[15px] text-gray-600"
          >
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-lg font-semibold">Explore</h3>
        <ul className="flex flex-col items-start gap-3">
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            FAQs
          </Link>
          <Link
            to="/about-us"
            className="font-medium text-[15px] text-gray-600"
          >
            How it Works
          </Link>
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Qualifications
          </Link>
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Tool Kits
          </Link>
          <Link
            to="/contact-us"
            className="font-medium text-[15px] text-gray-600"
          >
            Market Place
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="flex flex-col items-start gap-3">
          <Link to="/" className="font-medium text-[15px] text-gray-600">
            Get a job
          </Link>
          <Link
            to="/about-us"
            className="font-medium text-[15px] text-gray-600"
          >
            Recruit Talent
          </Link>
          <Link
            to="/contact-us"
            className="font-medium text-[15px] text-gray-600"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
// bg-red-800 - left side div
// bg-red-900 - right side div
