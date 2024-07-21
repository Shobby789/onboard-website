import React from "react";
import SectionOne from "../../components/Home/SectionOne";
import SectionTwo from "../../components/Home/SectionTwo";
import SectionThree from "../../components/Home/SectionThree";
import SectionFive from "../../components/Home/SectionFive";
// import HomeAnimation from "../../components/Home/HomeAnimation";

const Home = () => {
  return (
    <div>
      {/* <HomeAnimation /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFour /> */}
      <SectionFive />
    </div>
  );
};

export default Home;
