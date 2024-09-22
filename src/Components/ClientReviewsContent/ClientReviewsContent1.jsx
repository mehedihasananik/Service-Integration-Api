import Image from "next/image";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ClientReviewsContent1 = ({ testimonials }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 mt-6 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123390] to-[#FF693B]">
          What Our Clients Say
        </span>
        <span className="w-[50%] absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#123390] to-[#FF693B] rounded-full"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials?.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col h-full">
            <div className="group h-full flex flex-col p-8 bg-white rounded-xl transition-all duration-700 border border-gray-200 hover:border-[#FF693B] hover:scale-105 shadow-lg hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-br from-[#f0f4f8] to-white">
              <div className="relative flex-grow w-full">
                <div className="flex flex-col w-full mb-6">
                  <div className="flex items-center w-full">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#123390] mr-4 flex-shrink-0 shadow-md">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.name || "Testimonial avatar"}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full transition-transform duration-300 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl text-[#123390] font-bold mb-1">
                        {testimonial?.name}{" "}
                      </h3>
                      <div className="w-full flex justify-between items-center">
                        <p className="text-sm text-gray-600 ">
                          {testimonial?.designation}
                        </p>
                        <div className="w-10">
                          <Image
                            src="/assets/fiver.png"
                            alt="Fiverr"
                            width={30}
                            height={25}
                            className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                          />
                        </div>
                      </div>
                      <div className="flex items-center mt-2 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400 text-[14px] transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-base text-gray-700 italic leading-relaxed transition-all duration-300 group-hover:text-gray-900">
                    {testimonial?.message?.length > 150
                      ? `${testimonial?.message?.slice(0, 150)}...`
                      : testimonial?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsContent1;
