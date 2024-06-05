"use client";
import { fetchData } from "@/config/apiRequests.js";
import { apiEndpoint } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashBoardContent = () => {
  const [projects, setProjects] = useState(null);
  const sessionData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  const fetchingData = async () => {
    const data = await fetchData(
      `${apiEndpoint}/service_order_dashboard`,
      "POST",
      {
        user_id: sessionData?.id || sessionData?.user_id,
      }
    );
    setProjects(data);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  console.log(sessionData?.id);

  return (
    <div className="lg:mx-10 bg-[#FCFCFC] mb-5%">
      {/* active project */}
      <div className="bg-white py-4 rounded-md   mb-5 md:px-7">
        <h3 className="text-[#0F172A] text-[24px] font-[600]">
          Active Projects ({projects?.length})
        </h3>
      </div>
      <div className="bg-white pt-5 lg:pb-[10%] w-full">
        {projects?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-7 ">
            {projects
              ?.reverse()
              .slice(0, 4)
              .map((project) => {
                const {
                  sevice_items,
                  order_price,
                  order_status,
                  order_date,
                  service_order_id,
                } = project;
                console.log(order_status);

                return (
                  <Link
                    key={project.id}
                    href={
                      order_status === "Requirement Needed"
                        ? `requirement-page/${service_order_id}`
                        : order_status === "Inprogress"
                        ? `/order-delivery`
                        : "/"
                    }
                  >
                    <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5 mb-5">
                      <div className="flex flex-col">
                        <div className="bg-[#E2E8F0]">
                          <div>
                            <Image
                              width={700}
                              height={700}
                              className="w-full h-[270px]"
                              src={`${sevice_items.image}`}
                              alt=""
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          </div>
                        </div>

                        {/* title & description */}

                        <div className="px-5">
                          <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                            {sevice_items.title}
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
                              <button className="text-[14px] text-[#505050] font-[500]">
                                {order_status}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-[20px] text-[#FF693B] md:text-[32px] lg:text-[48px] font-Raleway font-bold pt-10">
              No Order Yet ! <br /> Please Place An Order.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardContent;
