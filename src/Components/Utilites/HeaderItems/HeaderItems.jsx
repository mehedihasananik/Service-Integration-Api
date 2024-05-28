"use client";
import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

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
                  src={headers?.logo?.logo}
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
                console.log(item);
                return (
                  <Link
                    className={
                      pathname === item.menu_link
                        ? "text-[16px] text-[#FF0000] font-normal"
                        : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                    }
                    href={item.menu_link}
                    key={index}
                  >
                    {item.menu_name}
                  </Link>
                );
              })}

              {/* nav button */}
              {userData?.email ? (
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
              )}
            </div>
          </nav>
        </div>
      </Container>

      {/*navbar for small devices */}
      <div className=" lg:hidden">
        <Navbar>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/assets/logo.png"
              width={100}
              height={49}
              alt="Picture of the logo"
              priority={false}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="">
            {headers?.menu?.map((item, index) => {
              console.log(item);
              return (
                <Link
                  className={
                    pathname === item.menu_link
                      ? "text-[16px] text-[#FF0000] font-normal"
                      : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                  }
                  href={item.menu_link}
                  key={index}
                >
                  {item.menu_name}
                </Link>
              );
            })}
            {/* login button */}
            <div className="mt-3">
              {userData ? (
                <Link
                  href="/dashboard"
                  className="flex justify-center bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  className="flex justify-center bg-[#FF693B] border border-[#FF693B] text-white font-medium px-12 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default HeaderItems;
