"use client";
import ComboHeaderItems from "./ComboHeaderItems";
import { useState } from "react";

const ComboHeader = () => {
  // Static header data
  const headers = {
    logo: "/assets/envobyteDark.png",
    menu: [
      { menu_name: "Home", menu_link: "/" },
      { menu_name: "Portfolio", menu_link: "#portfolio" },
      { menu_name: "Pricing", menu_link: "#pricing" },
      { menu_name: "Contact Us", menu_link: "#contact_us" },
      { menu_name: "Faq", menu_link: "#faqCombo" },
      { menu_name: "Book An Appointment", menu_link: "/appointment" },
    ],
  };

  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative z-50">
      <ComboHeaderItems
        headers={headers}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </div>
  );
};

export default ComboHeader;
