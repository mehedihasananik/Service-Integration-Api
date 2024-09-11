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
  // const [userData, setUserData] = useState(null);
  // const [isClient, setIsClient] = useState(false);

  const handleMenuItemClick = () => {
    setIsNavbarOpen(false);
  };

  // useEffect(() => {
  //   setIsClient(true);
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const storedUserData = localStorage.getItem("userData");
  //     if (storedUserData) {
  //       setUserData(JSON.parse(storedUserData));
  //     } else {
  //       setUserData(null);
  //     }
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  const { logo, menu } = headers || {};

  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <Container>
        {/* Navbar for large devices */}
        <nav className="hidden lg:flex justify-between items-center pt-5">
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
                className={
                  item.menu_name === "Book An Appointment"
                    ? "bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                    : isLinkActive(item.menu_link)
                    ? "text-[16px] text-[#FF0000] font-normal"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                }
                href={item.menu_link}
                key={index}
              >
                {item.menu_name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>

      {/* Navbar for small devices */}
      <div className="lg:hidden">
  <Navbar fluid rounded className="bg-white ">
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
    <Navbar.Collapse className={`${isNavbarOpen ? "block" : "hidden"} md:block`}>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
        {menu?.map((item, index) => (
          <Navbar.Link
            as={Link}
            href={item.menu_link}
            key={index}
            onClick={handleMenuItemClick}
            className={
              item.menu_name === "Book An Appointment"
                ? "bg-[#FF693B] border border-[#FF693B] text-white md:p-[10px] font-medium px-4 py-1 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300 text-center mb-2 md:mb-0 md:inline-block md:text-sm"
                : isLinkActive(item.menu_link)
                ? "text-[16px] text-[#FF0000] font-normal pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
                : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
            }
          >
            {item.menu_name}
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
