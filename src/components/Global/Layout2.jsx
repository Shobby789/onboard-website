import React from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const Layout2 = ({ pages }) => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar2 />
      {pages}
      <Footer />
    </div>
  );
};

export default Layout2;
