"use client";
import { fetchData } from "@/config/apiRequests.js";
import { dashboardApis } from "@/config/apis";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashBoardContent = () => {
  const [projects, setProjects] = useState(null);
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const fetchingData = async () => {
    const data = await fetchData(`${dashboardApis}`, "POST", {
      user_id: userData.id,
    });
    setProjects(data);
  };

  useEffect(() => {
    fetchingData();
  }, []);
  console.log(projects);
  return (
    <div className="lg:mx-10 bg-[#FCFCFC]">
      {/* active project */}
      <div className="bg-white py-4 rounded-md   mb-5 md:px-7">
        <h3 className="text-[#0F172A] text-[24px] font-[600]">
          Active Projects ({projects?.length})
        </h3>
      </div>
      <div className="bg-white pt-5 lg:pb-[10%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-7 ">
          {projects
            ?.slice()
            .reverse()
            .map((project) => {
              const {
                sevice_items,
                order_price,
                order_status,
                order_date,
                service_order_id,
              } = project;

              return (
                <Link key={project.id} href={"#"}>
                  <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0]">
                        <div>
                          <Image
                            width={700}
                            height={700}
                            className="w-full h-[270px]"
                            src={sevice_items[0].image}
                            alt=""
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>
                      </div>

                      {/* title & description */}

                      <div className="px-5">
                        <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                          {sevice_items[0].title}
                        </h3>
                        <span className="flex w-[100%] h-[1px] border border-[#E2E2E2]"></span>
                      </div>
                      <div className="pt-5 space-y-3">
                        <div className="flex justify-between px-5">
                          <div>
                            <h3 className="text-[14px] text-[#505050] font-[500]">
                              Order Place Date
                            </h3>
                          </div>
                          <div>
                            <h2 className="text-[14px] text-[#505050]">
                              {order_date}
                            </h2>
                          </div>
                        </div>
                        <div className="flex justify-between px-5">
                          <div>
                            <h3 className="text-[14px] text-[#505050] font-[500]">
                              Price
                            </h3>
                          </div>
                          <div>
                            <h2 className="text-[14px] text-[#3371F2] font-[500]">
                              {order_price}
                            </h2>
                          </div>
                        </div>
                        <div className="flex justify-between px-5">
                          <div>
                            <h3 className="text-[14px] text-[#505050] font-[500]">
                              Order Status
                            </h3>
                          </div>
                          <div>
                            <Link
                              href={`/requirement-page/${service_order_id}`}
                              className="text-[14px] text-[#505050] font-[500]"
                            >
                              {order_status}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
