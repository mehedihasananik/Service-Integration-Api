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
                  pathname === item.menu_link
                    ? "text-[16px] text-[#FF0000] font-normal"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                }
                href={item.menu_link}
                key={index}
              >
                {item.menu_name}
              </Link>
            ))}
            <Link href={"/blogs"}>Blogs</Link>
            {/* Nav button */}
            {/* {isClient &&
              (userData?.email ? (
                <Link
                  href="/dashboard"
                  className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/"
                  className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-12 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Login
                </Link>
              ))} */}
          </div>
        </nav>
      </Container>

      {/* Navbar for small devices */}
      <div className="lg:hidden">
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/assets/logo.png"
              width={100}
              height={49}
              alt="Picture of the logo"
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
                  pathname === item.menu_link
                    ? "text-[16px] text-[#FF0000] font-normal pb-1 transition delay-700 duration-300 ease-in-out"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] pb-1 transition delay-700 duration-300 ease-in-out"
                }
              >
                {item.menu_name}
              </Navbar.Link>
            ))}
            {/* Login button */}
            <div className="mt-4 md:mt-0">
              {isClient &&
                (userData?.email ? (
                  <Link
                    href="/dashboard"
                    className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-3 py-1.5 rounded-md hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-1 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Login
                  </Link>
                ))}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderItems;
