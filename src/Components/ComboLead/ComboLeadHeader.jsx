"use client";

import { useState } from "react";
import ComboHeaderItems from "../ComboPageSections/ComboHeaderSections/ComboHeaderItems";

const ComboLeadHeader = () => {
  // Static header data
  const headers = {
    logo: "/assets/Frame 404.png",
    menu: [
      { menu_name: "Home", menu_link: "/" },
      { menu_name: "About Us", menu_link: "#about_us" },
      { menu_name: "Offer", menu_link: "#offer" },
      { menu_name: "Portfolio", menu_link: "#portfolio" },
      { menu_name: "Contact Us", menu_link: "#contact_us" },
      { menu_name: "Faq", menu_link: "#faqCombo" },
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

export default ComboLeadHeader;
