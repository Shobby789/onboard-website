import React, { useState } from "react";
import ProcessCard from "../Global/ProcessCard";
import OurProcessSlider from "./OurProcessSlider";

// Sample data for your cards
const cards = [
  {
    count: "01",
    title: "Marketing Plan",
    description:
      "Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.",
    image: "/path-to-your-image1.jpg",
  },
  {
    count: "02",
    title: "Execution",
    description:
      "Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.",
    image: "/path-to-your-image2.jpg",
  },
  {
    count: "03",
    title: "Growth & Scale",
    description:
      "Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.",
    image: "/path-to-your-image3.jpg",
  },
];

const OurProcessSection = () => {
  return (
    <section className="w-full py-12 xl:py-24 2xl:py-32 horizontal-padding bg-green-50">
      <h2 className="text-center font-semibold text-xl text-[#00bf63] uppercase">
        Our Process
      </h2>
      <h3 className="section-heading mt-6">
        A simple, yet effective <br /> three step process
      </h3>

      {/* <div className="w-full  mt-8 2xl:mt-20 relative">
        <ProcessCard count={"01"} heading={"Marketing"} />
      </div> */}
      <OurProcessSlider />
    </section>
  );
};

export default OurProcessSection;
