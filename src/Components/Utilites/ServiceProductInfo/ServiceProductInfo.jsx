import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import UserLoading from "../UserLoading/UserLoading";

const ServiceProductInfo = ({ productInfo }) => {
  return (
    <div>
      <div>
        {productInfo ? (
          <div className=" h-[640px] border border-[#CBD5E1]  transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-lg">
            {/* title */}
            <div className="">
              <div className="space-y-5">
                <div className="flex justify-center">
                  <img
                    className="w-[70%] h-[250px] rounded-lg"
                    src={`${productInfo?.service_item?.image}`}
                    width={500}
                    height={200}
                    alt=""
                  />
                </div>
                <h3 className="font-Raleway text-[25px] text-[#1E293B] font-bold">
                  {productInfo?.service_item?.title}
                </h3>
                <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
                  {productInfo.package_name}
                </h3>
                <p className="text-[15px] text-[#334155] font-normal">
                  {productInfo.package_text}
                </p>
              </div>
              {/* price */}
              <div className="">
                <h2 className=" md:my-2 text-[32px] font-semibold font-Raleway">
                  $ {productInfo.package_price}
                </h2>
              </div>
            </div>
            {/* order button */}

            {/* order details */}
            <div className="space-y-5 ">
              {productInfo?.package_details?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-5"
                  >
                    <span>
                      <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                    </span>
                    <span className="text-[#646464] text-[16px] font-Roboto">
                      {item.package_item}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* delivery date */}
          </div>
        ) : (
          <UserLoading />
        )}
      </div>
    </div>
  );
};

export default ServiceProductInfo;
