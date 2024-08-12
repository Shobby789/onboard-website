import React from "react";
import SectionOne from "../../components/Home/SectionOne";
import SectionTwo from "../../components/Home/SectionTwo";
import SectionThree from "../../components/Home/SectionThree";
import SectionFive from "../../components/Home/SectionFive";
import SectionFaqs from "../../components/Home/SectionFaqs";
import OurProcessSection from "../../components/Home/OurProcessSection";

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <OurProcessSection />
      <SectionThree />
      <SectionFive />
      <SectionFaqs />
    </div>
  );
};

export default Home;
