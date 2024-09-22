import Image from "next/image";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ClientReviewsContent3 = ({ testimonials }) => {
  return (
    <div className="container mx-auto px-4 py-0">
      {/* Title Section */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 mt-6 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123390] to-[#FF693B]">
          What Our Clients Say
        </span>
        <span className="w-[50%] absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#123390] to-[#FF693B] rounded-full"></span>
      </h1>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col h-full p-6 bg-white rounded-xl border border-gray-200 shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-br from-[#f0f4f8] to-white"
          >
            {/* Card Inner Content */}
            <div className="relative flex flex-col items-center text-center">
              {/* Client Avatar */}
              <div className="relative w-24 h-24 mb-4 rounded-full border-4 border-[#123390] shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name || "Testimonial avatar"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {/* Client Info and Rating */}
              <div className="flex justify-center items-center space-x-4 w-full mb-4">
                {/* Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-xl transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500"
                    />
                  ))}
                </div>

                {/* Fiverr Icon */}
                <div className="ml-0">
                  <Image
                    src="/assets/fiver.png"
                    alt="Fiverr"
                    width={50}
                    height={25}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Client Name and Designation */}
              <h3 className="text-xl font-semibold text-[#123390] mb-1">
                {testimonial?.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {testimonial?.designation}
              </p>

              {/* Testimonial Message */}
              <div className="relative">
                <FaQuoteLeft className="text-5xl text-[#FF693B] opacity-10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8" />
                <p className="text-lg italic text-gray-700 px-4 leading-relaxed">
                  {testimonial?.message?.length > 150
                    ? `${testimonial?.message?.slice(0, 150)}...`
                    : testimonial?.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsContent3;
