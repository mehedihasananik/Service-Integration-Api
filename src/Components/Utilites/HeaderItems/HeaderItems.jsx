"use client";
import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserLoading from "../UserLoading/UserLoading";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    setLoading(false);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("storage", () => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    });
  }

  const { logo, menu } = headers || {};

  const NavButton = () => {
    if (loading) return <UserLoading />;

    return userData?.email ? (
      <Link
        href="/dashboard"
        className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
      >
        Dashboard
      </Link>
    ) : (
      <Link
        href="/login"
        className="bg-[#FF693B] border border-[#FF693B] text-white font-medium px-12 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
      >
        Login
      </Link>
    );
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
            {/* Nav button */}
            <NavButton />
          </div>
        </nav>
      </Container>

      {/* Navbar for small devices */}
      <div className="lg:hidden">
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
          <Navbar.Collapse>
            {menu?.map((item, index) => (
              <Link
                className={
                  pathname === item.menu_link
                    ? "text-[16px] text-[#FF0000] font-normal pb-1 transition delay-700  duration-300 ease-in-out"
                    : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300 pb-1 transition delay-700  duration-300 ease-in-out"
                }
                href={item.menu_link}
                key={index}
              >
                {item.menu_name}
              </Link>
            ))}
            {/* Login button */}
            <div className="mt-3">
              <NavButton />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderItems;
