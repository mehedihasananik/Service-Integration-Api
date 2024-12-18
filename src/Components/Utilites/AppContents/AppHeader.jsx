"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";

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
    <header className="bg-transparent sm:px-0">
      <Container>
        <Navbar fluid className="px-0 py-5 bg-transparent sm:px-0  text-white">
          <Navbar.Brand href="/" className="flex items-center">
            <img src="/assets/applogo.svg" className="" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:ring-2 focus:ring-[#FF693B]"
          />
          <Navbar.Collapse
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block md:flex md:items-center md:w-auto`}
          >
            <nav className="md:ml-auto">
              <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white">
                {navItems.map((item) => (
                  <li key={item} className="my-2 md:my-0">
                    <Link
                      to={item.toLowerCase().replace(" ", "")}
                      smooth={true}
                      duration={1000}
                      offset={-70}
                      className="text-[16px] text-white cursor-pointer font-medium hover:text-[#FF693B] transition-colors duration-300 relative group py-2"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default AppHeader;
