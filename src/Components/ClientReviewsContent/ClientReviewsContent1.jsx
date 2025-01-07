import Image from "next/image";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const ClientReviewsContent1 = ({ testimonials }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="headings text-center mb-20 mt-0 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123390] to-[#FF693B]">
          What Our Clients Say
        </span>
        <span className="w-[33%] absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#123390] to-[#FF693B] rounded-full"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials?.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col h-full">
            <div className="group h-full flex flex-col p-8 bg-white rounded-xl transition-all duration-700 border border-gray-200 shadow-lg hover:shadow-2xl relative overflow-hidden">
              {/* Pseudo-element for hover border */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#FF693B] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

              {/* Fiverr image in the top right corner */}
              <div>
                {testimonial.source === "fiverr" && (
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/assets/fiver.png"
                      alt="Fiverr"
                      width={30}
                      height={25}
                      className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                )}
                {testimonial.source === "upwork" && (
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/assets/upwork.jpg"
                      alt="Fiverr"
                      width={30}
                      height={25}
                      className="opacity-70 transition-opacity duration-300 group-hover:opacity-100 rounded-full"
                    />
                  </div>
                )}
              </div>

              <div className="relative flex-grow w-full z-10">
                <div className="flex flex-col w-full mb-6">
                  <div className="flex items-center w-full">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#123390] mr-4 flex-shrink-0 shadow-md">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.name || "Testimonial avatar"}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
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
                      </div>
                      <div className="flex items-center mt-2 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <LiaStarSolid
                            key={i}
                            className="text-yellow-400 size-5 transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-[17px] text-gray-700 italic leading-relaxed transition-all duration-300 group-hover:text-gray-900 line-clamp-[7]">
                    {testimonial?.message}
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
