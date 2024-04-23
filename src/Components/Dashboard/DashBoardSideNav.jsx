"use client";

import React, { useContext, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AuthContext } from "@/providers/AuthProviders";

const DashBoardSideNav = ({ height }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { dashboardMenus } = useContext(AuthContext);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="relative   ">
      <div className="  hidden md:block">
        <div className=" lg:flex lg:justify-end h-full  ">
          <HiMenuAlt3
            size={26}
            className="relative top-[20px] left-[10px] lg:left-0 lg:top-0 lg:relative cursor-pointer block lg:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <div className=" hidden lg:block">
          <section className="flex gap-6  ">
            <div
              style={{ height: height }}
              className={` h-[${height}] flex flex-col justify-between w-44 lg:w-72 duration-500 text-[16px] text-[#444444] px-6`}
            >
              <div>
                <div className="mt-4 flex flex-col justify-between gap-4 relative">
                  <div className="lg:pl-[13%] pt-1">
                    <Link href={"/"}>
                      {" "}
                      <img src="/assets/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="w-full">
                    {dashboardMenus?.map((menu, i) => (
                      <div
                        key={i}
                        className={` ${
                          menu?.margin && "mt-6"
                        } group flex items-center text-sm  gap-3.5 font-[400] p-2 hover:bg-[#FFFFFF] hover:text-[#FF693B] rounded-md`}
                      >
                        <div>
                          {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <Link
                          href={menu?.link}
                          className={`whitespace-pre  text-[16px] hover:bg-[#FFFFFF] hover:text-[#FF693B] py-[2%] `}
                        >
                          {menu?.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button className="flex justify-left items-center mb-10 gap-3 text-[16px] text-[#444444] hover:bg-[#FFFFFF] hover:text-[#FF693B] w-full py-2 px-2 ">
                  <span>
                    <LuLogOut />
                  </span>{" "}
                  Logout
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="md:hidden z-50   ">
        <button className="absolute top-[1.8%] left-[20px]">
          <RiBarChartHorizontalLine
            className="text-[20px]"
            onClick={toggleSidebar}
          />
        </button>
        <div className=" ">
          {showSidebar && (
            <Sidebar
              style={{ margin: "0" }}
              className="pt-[32%]  "
              aria-label="Default sidebar example p-0 m-0"
            >
              <Sidebar.Items className="  ">
                <Sidebar.ItemGroup>
                  {dashboardMenus.map((item, index) => {
                    return (
                      <Sidebar.Item key={index} href="#" icon={item.icon}>
                        {item.name}
                      </Sidebar.Item>
                    );
                  })}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideNav;
