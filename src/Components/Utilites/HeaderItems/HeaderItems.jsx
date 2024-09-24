"use client";

import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const HeaderItems = ({ headers }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (href) => {
    setIsDropdownOpen(false);
    handleMenuItemClick();
    router.push(href);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <div
                key={index}
                className="relative group"
                ref={item.menu_name === "About Us" ? dropdownRef : null}
              >
                {item.menu_name === "About Us" ? (
                  <div
                    className={`
                      ${
                        isLinkActive(item.menu_link)
                          ? "text-[16px] text-[#FF0000] font-medium"
                          : "text-[16px] text-[#0F172A] cursor-pointer font-medium hover:text-[#FF693B] transition-colors duration-300"
                      }
                      flex items-center
                    `}
                    onClick={toggleDropdown}
                  >
                    {item.menu_name}
                    <FaChevronDown className="inline ml-1" />
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </div>
                ) : (
                  <Link
                    className={`
                      ${
                        item.menu_name === "Book An Appointment"
                          ? "bg-[#FF693B] border border-[#FF693B] text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                          : isLinkActive(item.menu_link)
                          ? "text-[16px] text-[#FF0000] font-medium"
                          : "text-[16px] text-[#0F172A] cursor-pointer font-medium hover:text-[#FF693B] transition-colors duration-300"
                      }
                    `}
                    href={item.menu_link}
                  >
                    {item.menu_name}
                    {item.menu_name !== "Book An Appointment" && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    )}
                  </Link>
                )}
                {item.menu_name === "About Us" && isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleDropdownItemClick("/our-team")}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Our Team
                    </button>

                    <button
                      onClick={() => handleDropdownItemClick("/about-us")}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      About Company
                    </button>
                  </div>
                )}
              </div>
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
          <Navbar.Collapse
            className={`${isNavbarOpen ? "block" : "hidden"} md:block`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
              {menu?.map((item, index) => (
                <div key={index} className="relative group">
                  {item.menu_name === "About Us" ? (
                    <div
                      className={`
                        ${
                          isLinkActive(item.menu_link)
                            ? "text-[16px] text-[#FF0000] font-normal pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
                            : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
                        }
                        flex items-center
                      `}
                      onClick={toggleDropdown}
                    >
                      {item.menu_name}
                      <FaChevronDown className="inline ml-1" />
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </div>
                  ) : (
                    <Navbar.Link
                      as={Link}
                      href={item.menu_link}
                      onClick={handleMenuItemClick}
                      className={`
                        ${
                          item.menu_name === "Book An Appointment"
                            ? "bg-[#FF693B] border border-[#FF693B] text-white md:p-[10px] font-medium px-4 py-1 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300 text-center mb-2 md:mb-0 md:inline-block md:text-sm"
                            : isLinkActive(item.menu_link)
                            ? "text-[16px] text-[#FF0000] font-normal pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
                            : "text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] pb-1 transition duration-300 ease-in-out mb-2 md:mb-0"
                        }
                      `}
                    >
                      {item.menu_name}
                      {item.menu_name !== "Book An Appointment" && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      )}
                    </Navbar.Link>
                  )}
                  {item.menu_name === "About Us" && isDropdownOpen && (
                    <div className="ml-4 mt-2">
                      <button
                        onClick={() =>
                          handleDropdownItemClick("/about-company")
                        }
                        className="block w-full text-left py-2 text-gray-800 hover:text-[#FF693B]"
                      >
                        About Company
                      </button>
                      <button
                        onClick={() => handleDropdownItemClick("/our-team")}
                        className="block w-full text-left py-2 text-gray-800 hover:text-[#FF693B]"
                      >
                        Our Team
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderItems;
