import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="w-14 h-auto rounded-full px-2 py-3 bg-[rgb(246,246,246)] fixed left-2 top-1/2 transform -translate-y-1/2 z-50 flex flex-col justify-center gap-2">
      <Link
        to="/"
        className="w-full border border-[#00bf63] rounded-full h-10 flex items-center justify-center bg-[#00bf63]"
      >
        <FaFacebookF className="text-white" />
      </Link>
      <Link
        to="/"
        className="w-full border border-[#00bf63] rounded-full h-10 flex items-center justify-center bg-[#00bf63]"
      >
        <FaFacebookF className="text-white" />
      </Link>
      <Link
        to="/"
        className="w-full border border-[#00bf63] rounded-full h-10 flex items-center justify-center bg-[#00bf63]"
      >
        <FaFacebookF className="text-white" />
      </Link>
      <Link
        to="/"
        className="w-full border border-[#00bf63] rounded-full h-10 flex items-center justify-center bg-[#00bf63]"
      >
        <FaFacebookF className="text-white" />
      </Link>
    </div>
  );
};

export default Socials;
