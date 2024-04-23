"use client";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/providers/AuthProviders";

const Header = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const [cleared, setCleared] = useState(false);
  const user = useContext(AuthContext);

  const clearSession = () => {
    // Remove the userData from sessionStorage
    sessionStorage.removeItem("userData");
    // Set the state to indicate that session has been cleared
    setCleared(true);
  };

  const pathname = usePathname();

  // demo nav menus
  const menus = [
    { name: "Home", link: "/", activeClassName: "active" },
    { name: "Services", link: "/services", activeClassName: "active" },
    { name: "Portfolio", link: "/portfolio", activeClassName: "active" },
    { name: "About Us", link: "/about-us", activeClassName: "active" },
  ];

  return (
    <div>
      <Container>
        {/* navbar for large devices */}
        <div>
          <nav className="hidden  lg:flex justify-between items-center pt-5 ">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src="/assets/logo.png"
                width={159}
                height={49}
                alt="Picture of the logo"
                priority={false}
                className="relative left-[-8px]"
              />
            </Link>
            {/* nav items */}
            <div className="flex items-center gap-10 text-[#1E1E24]">
              <ul className="flex gap-10">
                {menus.map((item, index) => {
                  return (
                    <Link
                      className={
                        pathname === item.link
                          ? "text-[16px] text-[#FF0000] font-normal"
                          : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                      }
                      href={item.link}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
              {/* nav button */}
              {userData ? (
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
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={
                  pathname === item.link ? "text-[#FF0000] my-2" : "my-2"
                }
              >
                {item.name}
              </Link>
            ))}
            {/* login button */}
            <Link
              href={"/login"}
              className=" flex items-center justify-center px-4 py-2 md:py-1 bg-[#FF693B] border border-[#FF693B]  text-white font-medium  rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
            >
              Login
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
