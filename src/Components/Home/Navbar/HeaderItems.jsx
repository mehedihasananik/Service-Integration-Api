"use client";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();

  return (
    <div>
      <Container>
        {/* navbar for large devices */}
        <div>
          {/* <VisitorsInfo currentPage={currentPage} /> */}
          <nav className="hidden  lg:flex justify-between items-center pt-5 ">
            {/* logo */}
            <Link href={"/"}>
              <div>
                <Image
                  src={`https://admin.envobyte.com/home/1714376088.webp`}
                  width={159}
                  height={49}
                  alt="Picture of the logo"
                  className="relative left-[-8px]"
                />
              </div>
            </Link>
            {/* nav items */}
            <div className="flex items-center gap-10 text-[#1E1E24]">
              {headers?.menu?.map((item, index) => {
                return (
                  <Link
                    className={
                      pathname === item?.menu_link
                        ? "text-[16px] text-[#FF0000] font-normal"
                        : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                    }
                    href={item?.menu_link}
                    key={index}
                  >
                    {item?.menu_name}
                  </Link>
                );
              })}


              {/* nav button */}
              {/* {userData?.email ? (
                <Link
                  href="/dashboard"
                  className=" bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  className=" bg-[#FF693B] border border-[#FF693B] text-white font-medium px-12 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Login
                </Link>
              )} */}
            </div>
          </nav>
        </div>
      </Container>

      {/*navbar for small devices */}
    </div>
  );
};

export default HeaderItems;
