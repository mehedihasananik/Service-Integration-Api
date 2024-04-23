import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[8%] 4xl:px-[4%]">
      {children}
    </div>
  );
};

export default Container;
