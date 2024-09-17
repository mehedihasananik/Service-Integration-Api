"use client";

import React, { useContext, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AuthContext } from "@/providers/AuthProviders";
import { usePathname, useRouter } from "next/navigation";
// import { useSession, signOut } from "next-auth/react";

const DashBoardSideNav = ({ height }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [cleared, setCleared] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { dashboardMenus } = useContext(AuthContext);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const clearSession = () => {
    // Remove the userData from localStorage
    localStorage.removeItem("userData");
    // signOut();
    // Set the state to indicate that session has been cleared
    setCleared(true);
    router.push("/");
  };
  return (
    <div className="relative bg-[#8CD3FB1A]  ">
      <div className="hidden md:block">
        <div className="lg:flex lg:justify-end h-full">
          <HiMenuAlt3
            size={26}
            className="relative top-[20px] left-[10px] lg:left-0 lg:top-0 lg:relative cursor-pointer block lg:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <div className="hidden lg:block">
          <section className="flex gap-6">
            <div
              style={{ height: height }}
              className={`h-[${height}] flex flex-col justify-between w-44 lg:w-72 duration-500 text-[16px] text-[#444444] px-6`}
            >
              <div>
                <div className="mt-4 flex flex-col justify-between gap-4 relative">
                  <div className="lg:pl-[13%] pt-1">
                    <Link href="/">
                      <img src="/assets/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="w-full">
                    {dashboardMenus?.map((menu, i) => (
                      <Link key={i} href={menu?.link}>
                        <div
                          className={`${
                            menu?.margin && "mt-6"
                          } group flex items-center text-sm gap-3.5 font-[400] p-2  rounded-md transition-all duration-200 group ${
                            pathname === menu.link
                              ? "bg-[#FFFFFF] text-[#FF693B] "
                              : "" // Highlight active link based on pathname
                          }`}
                        >
                          <div className="group-hover:text-[#FF693B] ">
                            {React.createElement(menu?.icon, { size: "20" })}
                          </div>

                          <span
                            className={`whitespace-pre text-[16px]  py-[2%] group-hover:text-[#FF693B] `}
                          >
                            {" "}
                            {menu?.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={clearSession}
                  className="flex justify-left items-center mb-10 gap-3 text-[16px] text-[#444444] hover:bg-[#FFFFFF] hover:text-[#FF693B] w-full py-2 px-2 "
                >
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

      {/* for small device */}
      <div className="absolute top-[24px] md:hidden z-50">
        <button className="absolute left-[20px]">
          <RiBarChartHorizontalLine
            className="text-[20px]"
            onClick={toggleSidebar}
          />
        </button>
        <div className="h-[100vh] ">
          {showSidebar && (
            <Sidebar
              style={{ margin: "0" }}
              className="pt-[15%]"
              aria-label="Default sidebar example p-0 m-0"
            >
              <div className="w-full">
                {dashboardMenus?.map((menu, i) => (
                  <div
                    key={i}
                    className={`${
                      menu?.margin && "mt-6"
                    } group flex items-center text-sm gap-3.5 font-[400] p-2 hover:bg-[#FFFFFF] hover:text-[#FF693B] rounded-md ${
                      pathname === menu.link
                        ? "bg-[#FFFFFF] text-[#FF693B]"
                        : "" // Highlight active link based on pathname
                    }`}
                  >
                    <div className="">
                      {React.createElement(menu?.icon, { size: "20" })}
                    </div>
                    <Link
                      href={menu?.link}
                      onClick={closeSidebar}
                      className={`whitespace-pre text-[16px] py-[2%] group-hover:text-[#FF693B] `}
                    >
                      {menu?.name}
                    </Link>
                  </div>
                ))}
              </div>
            </Sidebar>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideNav;
