import Container from "@/Components/Container/Container";
import { footer } from "@/config/apis";
import Image from "next/image";
import Link from "next/link";

// api fetching from sever side
async function getfooterDataContent() {
  const res = await fetch(`${footer}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Footer = async () => {
  const footer = await getfooterDataContent();

  return (
    <Container>
      <div className="flex flex-col py-3 md:py-4 lg:flex-row justify-between items-center lg:pt-4 ">
        {/* left side */}
        <div className="w-full py-4 md:justify-between md:items-center lg:py-10 lg:flex-col lg:justify-start lg:items-start lg:w-[30%]">
          {/* logo & description */}
          <div className="relative left-[-10px]">
            <Image
              className="w-[159px] h-[49px]"
              width={200}
              height={100}
              src={footer?.logo.logo}
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
          {footer.menu.map((item) => {
            console.log(item.sub_menu);
            return (
              <div key={item.id}>
                <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
                  {item.menu_name}
                </h3>
                <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
                  {item.sub_menu.map((sub, index) => {
                    return (
                      <Link
                        key={index}
                        href={sub.menu_sub_link}
                        className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
                      >
                        {sub.menu_sub_name}
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
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <li className="flex items-center gap-3">
                <span>
                  <img src="/assets/mail.svg" alt="" />
                </span>
                <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                  {" "}
                  <a
                    target="_blank"
                    href="mailto:support@envobyte.com"
                    className="text-[#475569] text-[16px] pt-1"
                  >
                    support@envobyte.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <span>
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>{" "}
                <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                  {" "}
                  <a
                    target="_blank"
                    href="https://wa.me/8801711377731"
                    className="text-[#475569] text-[16px] pt-1"
                  >
                    +880 1711-377731
                  </a>
                </span>
              </li>
              <div className="flex gap-4 pt-4">
                {footer.social.map((item) => {
                  return (
                    <Link key={item.id} href={item.link} target="_blank">
                      <img
                        className="transform hover:scale-125 transition-all duration-300"
                        src={item.social_icon}
                        alt="Instagram Logo"
                      />
                    </Link>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-3 ">
        <p className="text-[#444444] text-[14px] font-bold">
          @2024 - ENVOBYTE, All rights are reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
