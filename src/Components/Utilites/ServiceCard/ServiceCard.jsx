import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="w-[330px] h-[550px]  group shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer hover:bg-[#FF693B] hover:text-white">
        <div className="flex flex-col h-full">
          <div className="bg-[#E2E8F0] transition-all duration-300">
            <Image
              width={700}
              height={700}
              className="w-[330px] h-[305px] overflow-hidden rounded-t-md"
              src={service?.image}
              alt={service.title}
            />
          </div>
          <div className="px-5 h-[155px] group-hover:bg-[#FF693B] group-hover:h-[155px] transition-all duration-300 flex-grow">
            <h3 className="line-clamp-1 text-[20px] font-bold text-[#1E293B] font-Raleway whitespace-nowrap pt-5 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-[14px] line-clamp-5 text-[#475569] group-hover:text-white transition-all duration-300">
              {service?.service_summery}
            </p>
          </div>
          <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300 group-hover:rounded-b-md">
            <span className="font-bold text-[16px] text-[#1E293B] group-hover:text-white">
              Start From
            </span>
            <div className="flex items-center space-x-[1px] font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
              <span>$</span>
              <span>{service.start_price}</span>
            </div>
            <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B] group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
