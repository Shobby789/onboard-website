import React from "react";
import { IoPlayForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const OfficeLocationTiming = () => {
  return (
    <section className="horizontal-padding w-full py-20">
      <div className="w-full text-center flex flex-col items-center justify-center gap-10">
        <div className="w-full flex items-center justify-center gap-2">
          <IoPlayForwardSharp className="green-text text-lg" />
          <h1 className="green-text font-medium text-sm uppercase">
            Corporate office
          </h1>
        </div>

        <h2 className="text-3xl lg:text-5xl font-semibold">
          Ready to Assist — Contact Now
        </h2>
      </div>

      <div className="w-full lg:w-[90%] 2xl:3/4 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-2 justify-center group hover:border-[#00bf63] transition-all duration-300 border rounded-lg px-6 py-10 2xl:px-10 2xl:py-14">
          <div className="bg-white rounded-lg flex items-center justify-center shadow-xl p-6">
            <img src="/location-icon.png" alt="" />
          </div>
          <h2 className="text-lg font-medium mt-6 group-hover:text-[#00bf63]">
            Office Location
          </h2>
          <p className="text-gray-500 text-[15px]">
            Discover innovation at our doorstep.
          </p>
          <Link
            to="/"
            className="uppercase font-medium my-3 text-[15px] flex items-center gap-1 group-hover:text-[#00bf63]"
          >
            View on map <RiArrowRightSLine className="text-2xl" />
          </Link>

          <div className="w-full p-5 text-center bg-green-50 rounded">
            <p className="text-sm">
              54 Berrick 2nd St Boston, MCA 02115, United States.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center group hover:border-[#00bf63] transition-all duration-300 border rounded-lg px-6 py-10 2xl:px-10 2xl:py-14">
          <div className="bg-white rounded-lg flex items-center justify-center shadow-xl p-6">
            <img
              src="/contact-icon.png"
              alt="contact-icon"
              title="contact-icon"
            />
          </div>
          <h2 className="text-lg font-medium mt-6 group-hover:text-[#00bf63]">
            Quick Contact
          </h2>
          <p className="text-gray-500 text-[15px]">
            Call or email us for immediate help.
          </p>
          <Link
            to="/"
            className="uppercase font-medium my-3 text-[15px] flex items-center gap-1 group-hover:text-[#00bf63]"
          >
            Get callback <RiArrowRightSLine className="text-2xl" />
          </Link>

          <div className="w-full p-5 text-center bg-green-50 rounded">
            <p className="text-sm">
              +1.888.56.7890 <br />
              info@example.com
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center group hover:border-[#00bf63] transition-all duration-300 border rounded-lg px-6 py-10 2xl:px-10 2xl:py-14">
          <div className="bg-white rounded-lg flex items-center justify-center shadow-xl p-6">
            <img src="/clock-icon.png" alt="clock-icon" title="clock-icon" />
          </div>
          <h2 className="text-lg font-medium mt-6 group-hover:text-[#00bf63]">
            Office Hours
          </h2>
          <p className="text-gray-500 text-[15px]">
            Visit us during our office hours.
          </p>
          <Link
            to="/"
            className="uppercase font-medium my-3 text-[15px] flex items-center gap-1 group-hover:text-[#00bf63]"
          >
            Appointment <RiArrowRightSLine className="text-2xl" />
          </Link>

          <div className="w-full p-5 text-center bg-green-50 rounded">
            <p className="text-sm">
              Mon - Satday: 9am to 6.30pm Sunday: Closed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationTiming;
