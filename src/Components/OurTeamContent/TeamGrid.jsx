"use client";
import React from "react";
import Image from "next/image";

const TeamGrid = ({ heading, members }) => {
  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 md:mt-[7%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-left mb-12 text-gray-800 border-b-2 border-gray-200 pb-4">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl">
                <div className="relative w-full h-[370px] aspect-[3/2]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    className="transition-transform duration-300"
                    priority
                    quality={80}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
