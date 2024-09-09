"use client";

import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();
  const [userData, setUserData] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    setIsClient(true);
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      } else {
        setUserData(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
                  isLinkActive(item.menu_link)
                    ? "text-[16px] text-[#FF0000] font-normal"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                }
                href={item.menu_link}
                key={index}
              >
                {item.menu_name}
              </Link>
            ))}

            <Link
              href="/schedule-meeting"
              className={`bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300`}
            >
              Book An Appointment
            </Link>
          </div>
        </nav>
      </Container>

      {/* Navbar for small devices */}
      <div className="lg:hidden">
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="/">
            <Image
              src={logo?.logo || "/assets/logo.png"}
              width={100}
              height={49}
              alt="Logo"
              priority={false}
            />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
          <Navbar.Collapse className={isNavbarOpen ? "block" : "hidden"}>
            {menu?.map((item, index) => (
              <Navbar.Link
                as={Link}
                href={item.menu_link}
                key={index}
                onClick={handleMenuItemClick}
                className={
                  isLinkActive(item.menu_link)
                    ? "text-[16px] text-[#FF0000] font-normal pb-1 transition delay-700 duration-300 ease-in-out"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] pb-1 transition delay-700 duration-300 ease-in-out"
                }
              >
                {item.menu_name}
              </Navbar.Link>
            ))}
            <Navbar.Link
              as={Link}
              href="/schedule-meeting"
              onClick={handleMenuItemClick}
              className={`w-[53%] text-white bg-[#FF693B] text-[16px] cursor-pointer font-normal pb-1 transition delay-700 duration-300 ease-in-out  border border-[#FF693B] hover:bg-white hover:text-[#FF693B] px-3 py-1 rounded-md mt-2`}
            >
              Book An Appointment
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderItems;
