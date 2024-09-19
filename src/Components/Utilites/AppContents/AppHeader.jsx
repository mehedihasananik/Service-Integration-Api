"use client";

import { useState } from "react";
import Container from "@/Components/Container/Container";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <Container>
        <Navbar fluid className="px-4 py-5">
          <Navbar.Brand href="/app" className="flex items-center">
            <img
              src="/assets/footer.png"
              className="mr-3 h-10 sm:h-12"
              alt="Logo"
            />
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
              <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                {["Experience", "Apps", "Services", "Business Consulting"].map(
                  (item) => (
                    <li key={item} className="my-2 md:my-0">
                      <Link
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-[16px] text-[#0F172A] cursor-pointer font-medium hover:text-[#FF693B] transition-colors duration-300 relative group py-2"
                      >
                        {item}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF693B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default AppHeader;
