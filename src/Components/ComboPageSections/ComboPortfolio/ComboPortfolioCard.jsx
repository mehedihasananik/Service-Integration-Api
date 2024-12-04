import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComboPortfolioCard = ({ service }) => {
  return (
    <div>
      <div className="">
        <div className="">
          <div
            style={{ border: "1px solid rgba(10, 44, 140, 0.25)" }}
            className="relative w-[345px] h-[370px] md:w-[300px] md:h-[320px] lg:w-[345px] lg:h-[370px] overflow-hidden rounded-lg"
          >
            <Image
              src={service?.image}
              fill
              style={{ objectFit: "fill" }}
              quality={80}
              className=""
              alt={service?.alt_text || "Service image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPortfolioCard;
