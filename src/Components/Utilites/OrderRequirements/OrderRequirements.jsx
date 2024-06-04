import React from "react";

const OrderRequirements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-4 md:pt-5 md:pb-3">
      {/* 1st */}
      <div className="max-w-[330px] flex  items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/ui.png" alt="ui ux desing" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
            UI/UX Design
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            Order No. #F06CE0914A11
          </p>
        </div>
        <div>
          <h3 className="text-[#3371F2] text-[20px] font-[600] ">$50</h3>
        </div>
      </div>
      {/* 2nd */}
      <div className="max-w-[330px] flex items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/date.png" alt="ui ux desing" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
            Order Placed
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            Dec 07, 03:03 AM
          </p>
        </div>
      </div>
      {/* 3rd */}
      <div className="max-w-[400px] flex items-center gap-x-5  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/pin.png" alt="ui ux desing" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[14px] font-[600] whitespace-nowrap">
            Requirement Submitted
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            Order No. #F06CE0914A11
          </p>
        </div>
        <div>
          <button className="bg-[#FF693B] text-[14px] font-[600] border border-[#FF693B] text-white px-4 py-1 rounded-md hover:text-[#FF693B] hover:bg-[#fff] transition-all duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderRequirements;
