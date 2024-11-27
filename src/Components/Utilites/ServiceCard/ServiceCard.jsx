import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="  group shadow-lg rounded-md border border-[#E2E8F0] cursor-pointer hover:bg-[#FF693B] hover:text-white">
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
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
