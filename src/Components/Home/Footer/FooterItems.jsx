"use client";
import Container from "@/Components/Container/Container";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const FooterItems = ({ footer, userContact }) => {
  const currentDate = format(new Date(), "yyyy");
  // console.log(userContact);
  return (
    <div>
      <Container>
        <div className="flex flex-col py-3 md:py-4 lg:flex-row justify-between items-center lg:pt-4  ">
          {/* left side */}

          <div className="w-full py-4 md:justify-between md:items-center lg:py-10 lg:flex-col lg:justify-start lg:items-start lg:w-[30%]">
            {/* logo & description */}
            <div className="relative left-[-10px]">
              <Image
                className="w-[159px] h-[49px]"
                width={200}
                height={100}
                src={footer?.logo?.logo}
                alt=""
              />
            </div>
            <div className="w-[250px] py-5">
              <h3 className="text-[16px] text-[#444444] ">
                We are an IT Company. We help businesses to bring ideas to life
                easily and affordably.
              </h3>
            </div>
          </div>

          {/* right side */}
          <div className="w-full  lg:w-[70%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {/* footer links */}
            {/* 1st col */}
            {footer?.menu?.map((item) => {
              return (
                <div key={item?.id}>
                  <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
                    {item?.menu_name}
                  </h3>
                  <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
                    {item?.sub_menu?.map((sub, index) => {
                      return (
                        <Link
                          key={index}
                          href={sub?.menu_sub_link}
                          className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
                        >
                          {sub?.menu_sub_name}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div>
              <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
                <div className="flex items-center gap-3">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/Email.png"
                    alt=""
                  />
                  <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto:${userContact?.email}`}
                      className="text-[#475569] text-[16px] xl:text-[15px] xxl:text-[16px] pt-1"
                    >
                      {userContact?.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <Image
                    width={24}
                    height={24}
                    src="/assets/whatsapp.svg"
                    alt=""
                  />
                  <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                    {" "}
                    <a
                      target="_blank"
                      href={`https://wa.me/${userContact?.phone_number} `}
                      className="text-[#475569] text-[16px] pt-1"
                    >
                      {userContact?.phone_number}
                    </a>
                  </span>
                </div>
                <div className="flex gap-4 pt-4">
                  {footer?.social?.map((item) => {
                    return (
                      <Link key={item?.id} href={item?.link} target="_blank">
                        <Image
                          className="transform hover:scale-125 transition-all duration-300 h-[28px] w-[30px]"
                          src={item?.social_icon}
                          alt="Instagram Logo"
                          width={30}
                          height={30}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center py-3 ">
          <p className="text-[#513939] text-[14px] font-bold">
            @{currentDate} - ENVOBYTE, All rights are reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FooterItems;
