import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footer = [
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About Us", link: "/about-us" },
  ];

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
              src="/assets/footer.png"
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
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Company
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <Link
                href={"/privacy-policy"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms-and-conditions"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Terms And Conditions
              </Link>
              <Link
                href={"/refund-policy"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Refund Policy
              </Link>
            </ul>
          </div>
          {/* 2nd col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Learn More
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <Link
                href={"#"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Faq
              </Link>
              <Link
                href={"/order-delivery"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Order Delivery
              </Link>
              <Link
                href={""}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Demo
              </Link>
            </ul>
          </div>
          {/* 3rd col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Support
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <Link
                href={"/about-us"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                href={"/services"}
                className="cursor-pointer hover:text-[#FF693B] transition-all duration-200"
              >
                Services
              </Link>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Terms & Conditions
              </li>
            </ul>
          </div>
          {/* 4th col */}
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
                <Link
                  href={"https://www.instagram.com/envobyte"}
                  target="_blank"
                >
                  <img
                    className="transform hover:scale-125 transition-all duration-300"
                    src="assets/insta.svg"
                    alt="Instagram Logo"
                  />
                </Link>

                <Link
                  href={"https://www.facebook.com/envobyte"}
                  target="_blank"
                >
                  <img
                    className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                    src="assets/facebook.svg"
                    alt=""
                  />
                </Link>
                <img
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                  src="/assets/twitter-color-svgrepo-com 1.svg"
                  alt=""
                />
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/envobyte"}
                >
                  <img
                    className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                    src="/assets/linkedin.svg"
                    alt=""
                  />
                </Link>
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
