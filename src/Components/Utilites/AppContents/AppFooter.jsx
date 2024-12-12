"use client";

import React from "react";
import Container from "@/Components/Container/Container";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialIcon = ({ Icon, label, link }) => {
  return (
    <a
      href={link}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
    >
      <Icon className="text-xl" />
    </a>
  );
};

const AppFooter = () => {
  return (
    <footer className="bg-[#fff]">
      <Container>
        <div className="pt-6 pb-2 px-4 mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center">
            <div className="flex space-x-8 mb-8">
              <SocialIcon
                Icon={FaFacebook}
                label="Facebook"
                link="https://www.facebook.com/envobyte"
              />
              <SocialIcon
                Icon={FaTwitter}
                label="Twitter"
                link="https://x.com/envobyte"
              />
              <SocialIcon
                Icon={FaLinkedin}
                label="LinkedIn"
                link="https://www.linkedin.com/company/envobyte/"
              />
              <SocialIcon
                Icon={FaInstagram}
                label="Instagram"
                link="https://www.instagram.com/envobyte/"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 font-light tracking-wider">
                © 2024 Envobyte. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
