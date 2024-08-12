import React from "react";

const CustomScrollbar = ({ scrollPosition }) => {
  return (
    <div className="custom-scrollbar">
      <div
        className="scrollbar-thumb"
        style={{ height: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default CustomScrollbar;
