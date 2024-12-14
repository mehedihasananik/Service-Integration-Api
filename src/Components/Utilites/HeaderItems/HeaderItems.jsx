"use client";

import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsNavbarOpen(false);
  };

  const { logo, menu } = headers || {};

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className="max-w-[1520px] mx-auto px-[6%] md:px-[4%] lg:px-[1%] 2lg:px-[4%] xl:px-[8%] 4xl:px-[4%] ">
        {/* Navbar for large devices */}
        <nav className="hidden lg:flex justify-between items-center pt-5 bg-[#FFFFFF]">
          {/* Logo */}
          <Link href="/">
            <div>
              {logo && (
                <Image
                  src={logo.logo}
                  width={159}
                  height={49}
                  alt="Picture of the logo"
                  className="relative left-[-8px]"
                />
              )}
            </div>
          </Link>
          {/* Nav items */}
          <div className="flex items-center gap-10 text-[#1E1E24]">
            {menu?.map((item, index) => (
              <Link
                className={`
                  ${
                    item.menu_name === "Book An Appointment"
                      ? "bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                      : isLinkActive(item.menu_link)
                      ? "text-[16px] text-[#FF0000] font-medium"
                      : "text-[16px] text-[#0F172A] cursor-pointer font-medium hover:text-[#FF693B] transition-colors duration-300"
                  }
                  ${
                    item.menu_name !== "Book An Appointment"
                      ? "relative group"
                      : ""
                  }
                `}
                href={item.menu_link}
                key={index}
              >
                {item.menu_name}
                {item.menu_name !== "Book An Appointment" && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Navbar for small devices */}
      <div className="lg:hidden md:py-4">
        <Navbar fluid className="bg-white ">
          <Navbar.Brand as={Link} href="/">
            <Image
              src={logo?.logo || "/assets/logo.png"}
              width={100}
              height={49}
              alt="Logo"
              priority={false}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className="focus:ring-2 focus:ring-[#FF693B]"
          />
          <Navbar.Collapse
            className={`${isNavbarOpen ? "block" : "hidden"} md:block`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-0 md:mt-0">
              {menu?.map((item, index) => (
                <Navbar.Link
                  as={Link}
                  href={item.menu_link}
                  key={index}
                  onClick={handleMenuItemClick}
                  className={`
                    ${
                      item.menu_name === "Book An Appointment"
                        ? "bg-[#FF693B] font-bold py-2 border border-[#FF693B] text-white md:p-[10px]  px-4 rounded-md hover:bg-white hover:text-[#FF693B] transition-all duration-300 text-center mb-2 md:mb-0 md:inline-block md:text-sm"
                        : isLinkActive(item.menu_link)
                        ? "text-subheading text-[#FF0000]  pb-1 transition duration-300 ease-in-out mb-2 md:mb-0 font-bold"
                        : "text-subheading text-[#0F172A] cursor-pointer hover:text-[#FF693B] pb-1 transition duration-300 ease-in-out mb-2 md:mb-0 font-bold"
                    }
                    ${
                      item.menu_name !== "Book An Appointment"
                        ? "relative group"
                        : ""
                    }
                  `}
                >
                  {item.menu_name}
                  {item.menu_name !== "Book An Appointment" && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  )}
                </Navbar.Link>
              ))}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderItems;
