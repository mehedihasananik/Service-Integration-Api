import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const CustomCheckoutPinfo = ({ product }) => {
  console.log(product.image);
  return (
    <div>
      <div className=" w-[450px] border border-[#CBD5E1]  transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-lg">
        {/* title */}
        <div className="">
          <div className="space-y-5">
            <div className="flex justify-center">
              <img
                className="w-[100%] h-[250px] rounded-lg"
                src={`${product?.image}`}
                width={500}
                height={200}
                alt=""
              />
            </div>
            <h3 className="font-Raleway text-[25px] text-[#1E293B] font-bold">
              {product?.package_name}
            </h3>
            <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
              {product.package_name}
            </h3>
            <p className="text-[15px] text-[#334155] font-normal">
              {product.description}
            </p>
          </div>
          {/* price */}
          <div className="">
            <h2 className=" md:my-2 text-[32px] font-semibold font-Raleway">
              $ {product.price}
            </h2>
          </div>
        </div>
        {/* order button */}

        {/* order details */}

        {/* delivery date */}
      </div>
    </div>
  );
};

export default CustomCheckoutPinfo;
