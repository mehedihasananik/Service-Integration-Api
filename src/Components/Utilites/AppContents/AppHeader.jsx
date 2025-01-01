"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Container from "@/Components/Container/Container";

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Experience",
    "Apps",
    "Services",
    "Business Consulting",
    "Contact Us",
  ];

  return (
    <>
      {/* Mobile Navbar - Below MD Breakpoint */}
      <header className="md:hidden relative top-0 left-0 w-full bg-[#001656] z-50">
        <div className="flex justify-between items-center p-4">
          {/* Mobile Logo */}
          <a href="/">
            <Image
              src="/assets/applogo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-8"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#001656] shadow-lg">
              <nav className="p-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item} className="text-center">
                      <Link
                        to={item.toLowerCase().replace(/\s+/g, "")}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setIsMenuOpen(false)}
                        className="
                          block 
                          text-white 
                          py-2 
                          hover:bg-[#FF693B] 
                          hover:bg-opacity-20 
                          rounded 
                          transition-colors 
                          duration-300
                        "
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Navbar - MD and Above */}
      <header className="hidden md:block bg-transparent">
        <Container>
          <nav className="flex items-center justify-between py-5 text-white">
            {/* Desktop Logo */}
            <div className="flex items-center">
              <a href="/">
                {" "}
                <Image
                  src="/assets/applogo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(/\s+/g, "")}
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    className="
                      text-[16px] 
                      text-white 
                      cursor-pointer 
                      font-medium 
                      hover:text-[#FF693B] 
                      transition-colors 
                      duration-300 
                      relative 
                      group 
                      py-2
                    "
                  >
                    {item}
                    <span
                      className="
                      absolute 
                      left-0 
                      bottom-0 
                      w-full 
                      h-0.5 
                      bg-[#FF693B] 
                      transform 
                      scale-x-0 
                      group-hover:scale-x-100 
                      transition-transform 
                      duration-300
                    "
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default AppHeader;
