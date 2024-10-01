import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="w-[330px] h-[550px]  group shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer hover:bg-[#FF693B] hover:text-white">
        <div className="flex flex-col h-full">
          <div className="bg-[#E2E8F0] transition-all duration-300">
            <div className="relative w-full max-w-[330px] aspect-[330/305] overflow-hidden rounded-t-md">
              <Image
                src={service?.image}
                fill
                sizes="(max-width: 768px) 100vw, 330px"
                style={{ objectFit: "cover" }}
                quality={80}
                className="rounded-t-md"
                alt={service?.alt_text || "Service image"}
              />
            </div>
          </div>
          <div className="px-5 h-[155px] group-hover:bg-[#FF693B] group-hover:h-[155px] transition-all duration-300 flex-grow">
            <h3 className="line-clamp-1 text-headingSmall md:text-subheading font-bold text-blackish font-Raleway whitespace-nowrap pt-5 pb-2 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-paragraphSmall line-clamp-5 text-slateBlueGray group-hover:text-white transition-all duration-300">
              {service?.service_summery}
            </p>
          </div>
          <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300 group-hover:rounded-b-md">
            <span className="font-bold text-paragraph text-[#1E293B] group-hover:text-white">
              Start From
            </span>
            <div className="flex items-center space-x-[1px] font-Raleway text-paragraphLarge font-bold text-secondary group-hover:text-white transition-all duration-200">
              <span>$</span>
              <span>{service.start_price}</span>
            </div>
            <button className="btn-service">View</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
