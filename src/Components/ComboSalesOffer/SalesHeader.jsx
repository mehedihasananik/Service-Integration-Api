"use client";

import { useState } from "react";
import SalesHeaderItems from "./SalesHeaderItems";

const SalesHeader = () => {
  // Static header data
  const headers = {
    logo: "/assets/Frame 404.png",
    menu: [
      { menu_name: "Home", menu_link: "/" },
      { menu_name: "About us", menu_link: "#portfolio" },
      { menu_name: "Offer", menu_link: "#portfolio" },
      { menu_name: "Combo", menu_link: "#pricing" },
      { menu_name: "Portfolio", menu_link: "#pricing" },
      { menu_name: "Pricing", menu_link: "#contact_us" },
      { menu_name: "FAQ", menu_link: "#faqCombo" },
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
      <SalesHeaderItems
        headers={headers}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </div>
  );
};

export default SalesHeader;
