"use client";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelevantServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/sevice_items`);
        const data = await response.json();
        setServices(data);
        setLoading(false); // Set loading to false after data is fetched
        setTotalSlides(data.length);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-5 md:pt-3 md:pb-8">
      <div className="text-center font-Raleway ">
        <h3 className="text-[32px] font-bold md:text-[48px]">
          Relevant Services
        </h3>
      </div>
      <div>
        {/* one */}
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-items-center place-items-center gap-8 pb-8 md:gap-16 mt-5 md:mt-10 ">
            {services.slice(0, 4).map((service) => {
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug.replace(/\s+/g, "")}`}
                >
                  <div className="group w-[330px] shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
                    <div className="bg-[#E2E8F0]">
                      <div>
                        <Image
                          width={700}
                          height={700}
                          className="w-full h-[270px]"
                          src={service.image || "/assets/service1.jpeg"}
                          alt=""
                        />
                      </div>
                    </div>

                    {/* title & description */}

                    <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                      <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                        {service.details}
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                      <div className="font-Raleway">
                        <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                          Start From
                        </span>
                      </div>
                      <div>
                        <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                          {service.start_price} $
                        </span>
                      </div>
                      <div>
                        <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};

export default RelevantServices;
