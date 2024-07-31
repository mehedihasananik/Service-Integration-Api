import Link from "next/link";
import React from "react";

const ViewAllButton = () => {
  return (
    <div className="py-8 lg:py-5 text-center lg:text-left lg:mt-3 hidden md:block">
      <Link
        href="/services"
        className="bg-[#FF693B] text-white text-[16px] font-semibold py-4 px-14 rounded-lg border border-[#FF693B] hover:bg-white hover:text-[#FF693B] transition-all duration-300"
      >
        View all
      </Link>
    </div>
  );
};

export default ViewAllButton;
