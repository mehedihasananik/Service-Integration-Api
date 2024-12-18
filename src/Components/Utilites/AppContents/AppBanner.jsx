import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import Container from "@/Components/Container/Container";

const AppBanner = ({ appData }) => {
  return (
    <Container>
      <div className="flex flex-col gap-y-7 lg:gap-y-0 lg:flex-row w-[100%] pt-[4.5%] relative">
        <div className="w-[100%] lg:w-[50%] ">
          <div className="p-0 lg:pt-[5%]">
            <h3 className="text-center lg:text-left text-[#FF693B] font-Poppins text-[14px] md:text-[28px] font-semibold md:leading-[85px] capitalize">
              Join 1 Million users worldwide!
            </h3>
            <div>
              <h1 className="hidden md:block text-[#fff] text-center lg:text-left font-Poppins text-[25px] xll:text-[50px] font-bold xll:leading-[58px] capitalize">
                Welcome to Envobyte <br /> Your One-Stop{" "}
                <span className="text-[#FF693B]">Solution</span> for{" "}
                <span className="text-[#FF693B]"> Custom App</span> Development
              </h1>
              <h1 className="block md:hidden text-center md:text-left text-[#fff] font-Poppins text-[22px] md:text-[52px] font-bold leading-tight md:leading-[58px] capitalize pt-3">
                Welcome to Envobyte Your One-Stop{" "}
                <span className="text-[#FF693B]">Solution</span> for{" "}
                <span className="text-[#FF693B]"> Custom App</span> Development
              </h1>
            </div>
            <p className=" text-center lg:text-left font-Inter text-[14px] md:text-[24px] font-normal md:leading-[36px] tracking-normal md:tracking-[-0.48px] text-white py-3 md:py-10 lg:w-[120%]">
              {appData.description}
            </p>
          </div>
          <div className="flex gap-x-6 justify-center lg:justify-start pt-3 md:pt-0">
            <GlobalButtonColored
              path="https://play.google.com/store/apps/dev?id=8045723784298228141"
              title="Playstore"
              className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
            />
            <GlobalButtonColored
              path="/services"
              title="Our Services"
              className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-5 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-transparent hover:border-[#fff] border border-[#FFF] hover:bg-[#fff] hover:text-[#001655]"
            />
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%] relative">
          <div className="engine lg:right-[42%] lg:bottom-[-18%] 2lg:bottom-[-28%] xlll:bottom-[-5px] xlll:right-[210px] "></div>
          <img
            src="/assets/bannerApp.png"
            alt="Banner App"
            className="relative z-[1]"
          />
        </div>
      </div>
    </Container>
  );
};

export default AppBanner;
