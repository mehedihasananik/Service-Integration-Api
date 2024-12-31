"use client";
import Container from "@/Components/Container/Container";
import React, { useEffect, useState } from "react";
import { SalesPricingBtn } from "../SalesBtn/SalesBtn";

const SaleSubVideoSection = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Use window.location.pathname to get the current route
    const path = window?.location?.pathname.replace(/\/$/, ""); // Remove trailing slash
    setCurrentPath(path);
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[16px] md:text-[16px] lg:text-[16px] font-normal leading-[24px] text-[#001246] mt-[5%] font-Inter ">
            Check what is Envobyte
          </h3>
          <div className="flex justify-center pt-[1.5%] pb-[1%]">
            <p className="lg:text-[48px] text-center pt-3 lg:w-[100%] font-Inter text-[#001246] font-bold leading-[24px] tracking-[0.96px]">
              Introducing to Envobyte
            </p>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center my-8">
          <iframe
            style={{
              borderRadius: "4px",
              border: "1px solid #FFF",
              background:
                "url(<path-to-image>) lightgray 50% / cover no-repeat",
              boxShadow: "-38px 38px 91px 0px rgba(4, 19, 91, 0.40)",
            }}
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
            title="YouTube video player"
            className="rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="w-full flex lg:hidden justify-center my-8">
          <div
            className="relative w-full flex justify-center items-center"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/N73NyNDq-ZY?si=W2VUBjMkee8TGkv6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Conditional Rendering Based on Route */}
        <div className="flex flex-col md:flex-row justify-center text-[16px] font-bold gap-x-5 gap-y-5 md:gap-y-0">
          <SalesPricingBtn />
        </div>
      </Container>
    </div>
  );
};

export default SaleSubVideoSection;
