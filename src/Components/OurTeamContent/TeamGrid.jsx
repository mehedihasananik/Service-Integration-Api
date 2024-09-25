"use client";
import React from "react";
import Image from "next/image";

const TeamGrid = ({ heading, members }) => {
  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 md:mt-[7%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Card background with geometric shape */}
              <div
                className="relative p-6 rounded-md mb-4"
                style={{
                  backgroundColor: member.backgroundColor,
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
                  width: "220px", // Adjust card width if needed
                  height: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Team member image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={140}
                  height={140}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Team member info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="text-sm text-gray-400">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
