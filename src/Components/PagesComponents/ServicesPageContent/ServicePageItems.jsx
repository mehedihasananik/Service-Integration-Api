import Image from "next/image";
import React from "react";

const ServicePageItems = ({
  title,
  start_price,
  image,
  service_summery,
  alt_text,
}) => {
  return (
    <div>
      <div className="group w-[330px] md:w-[330px] h-[550px] shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer mb-5 lg:mb-5 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="bg-[#E2E8F0]">
            <div>
              <Image
                width={700}
                height={700}
                className="w-[330px] h-[305px]  overflow-hidden rounded-t-md"
                src={image}
                alt={alt_text}
              />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="px-3 flex-grow group-hover:bg-primary transition-all duration-300">
              <h3 className="text-headingSmall md:text-subheading font-bold font-Raleway pt-5 pb-2 whitespace-nowrap group-hover:text-white transition-all duration-300">
                {title}
              </h3>
              <p className="text-paragraphSmall text-slateBlueGray group-hover:text-white transition-all duration-300 line-clamp-5">
                {service_summery}
              </p>
            </div>
            <div className="flex items-center justify-between px-3 h-[50px] pt-10 pb-12 group-hover:bg-primary transition-all duration-300">
              <div className="font-Raleway">
                <span className="font-bold text-paragraph text-[#1E293B] group-hover:text-white transition-all duration-300">
                  Start From
                </span>
              </div>
              <div>
                <h3 className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-secondary group-hover:text-white transition-all duration-300">
                  <span>$</span> <span>{start_price}</span>
                </h3>
              </div>
              <div>
                <button className="text-[14px] bg-primary rounded-md px-8 py-[5px] text-white border border-primary group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageItems;
