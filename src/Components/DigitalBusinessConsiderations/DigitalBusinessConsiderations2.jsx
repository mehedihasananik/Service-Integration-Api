import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import WebsiteScore from "../Utilites/WebsiteScore/WebsiteScore";
import Link from "next/link";
import { apiEndpoint } from "@/config/config";

async function fetchConsiderations() {
  const res = await fetch(`${apiEndpoint}/businessdev`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}

const DigitalBusinessConsiderations2 = async () => {
  const considerations = await fetchConsiderations();

  // Array of background colors for cards
  const cardColors = [
    "#E6F3FF",
    "#E6FFE6",
    "#FFF9E6",
    "#FFE6F3",
    "#F3E6FF",
    "#E6E6FF",
    "#FFE6E6",
    "#FFF0E6",
    "#E6FFF9",
    "#E6FCFF",
    "#F2FFE6",
    "#E6FFF0",
    "#E6F9FF",
    "#FFE6FF",
    "#FFE6EE",
    "#FFF6E6",
  ];

  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] xl:px-[8%] 4xl:px-[4%] md:pt-8  md:pb-3 ">
      <div className="mb-6 md:mb-10">
        <h3 className="text-[20px] md:text-[30px] lg:text-[48px] font-Raleway font-bold text-center pb-1 md:pb-2">
          Before Starting A Business Consider A Few Things
        </h3>
        <p className="text-[16px] md:text-xl text-gray-700 mb-4 md:mb-8 text-center">
          In today&apos;s fast-paced digital landscape, ensure your business has
          a strong foundation with these key considerations:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {considerations.map((item, index) => {
            return (
              <Link key={item.id} href={"/services"}>
                <div
                  style={{
                    backgroundColor: cardColors[index % cardColors.length],
                    transition: "all 0.3s ease",
                  }}
                  className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.03] hover:bg-white hover:shadow-lg h-[220px]"
                >
                  <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white bg-opacity-30 rounded-bl-full"></div>
                    <div className="relative z-10">
                      <CheckCircle className="w-8 h-8 text-gray-700 mb-4" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center text-orange-500 text-sm font-medium group">
                      Learn more{" "}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-3">
        <WebsiteScore />
      </div>
    </div>
  );
};

export default DigitalBusinessConsiderations2;
