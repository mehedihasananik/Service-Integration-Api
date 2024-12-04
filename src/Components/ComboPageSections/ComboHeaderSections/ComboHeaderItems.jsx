"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const ComboHeaderItems = ({ headers, isMobileMenuOpen, toggleMobileMenu }) => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="max-w-[1520px] mx-auto px-[6%] md:px-[0%] xl:px-[8%] 4xl:px-[4%] pt-3 ">
      <header className="relative z-50">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center px-4 lg:px-0 py-4">
          {/* Logo - Left Side */}
          <Link href="/">
            <Image src={headers.logo} alt="Logo" width={120} height={30} />
          </Link>

          {/* Menu Items - Center */}
          <div className="flex space-x-6 items-center font-Inter font-semibold text-[14px] lg:text-[16px] ">
            {headers.menu
              .filter((item) => item.menu_name !== "Book An Appointment")
              .map((item, index) => (
                <Link
                  key={index}
                  href={item.menu_link}
                  className="text-white hover:text-primary transition-colors font-semibold uppercase tracking-[.5px]"
                >
                  {item.menu_name}
                </Link>
              ))}
          </div>

          {/* Book Appointment - Right Side */}
          <div>
            <a
              onClick={handleSmoothScroll}
              href="#appointment"
              className="bg-white  text-[#0A2C8C] px-5 py-3 rounded-md hover:bg-[#0A2C8C] hover:text-white transition-colors font-semibold font-Inter "
            >
              Book an appointment
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden relative z-50">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4">
            <Image
              src={headers.logo}
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="text-white z-50 relative"
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-6">
              {headers.menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.menu_link}
                  onClick={toggleMobileMenu}
                  className="text-white text-2xl hover:text-primary transition-colors"
                >
                  {item.menu_name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default ComboHeaderItems;
