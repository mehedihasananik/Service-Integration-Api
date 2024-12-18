import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import Container from "@/Components/Container/Container";

const AppBanner = ({ appData }) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-[100%] pt-[4.5%] relative">
        <div className="w-[50%]">
          <div>
            <h3 className="text-[#FF693B] font-Poppins text-[22px] md:text-[28px] font-semibold md:leading-[85px] capitalize">
              Join 1 Million users worldwide!
            </h3>
            <h1 className="text-[#fff] font-Poppins text-[25px] md:text-[52px] font-bold md:leading-[58px] capitalize">
              Welcome to Envobyte <br /> Your One-Stop{" "}
              <span className="text-[#FF693B]">Solution</span> for{" "}
              <span className="text-[#FF693B]"> Custom App</span> Development
            </h1>
            <p className="font-Inter text-[14px] md:text-[24px] font-normal md:leading-[36px] tracking-[-0.48px] text-white py-10 w-[120%]">
              Apps make things easier to access. At Envobyte, we don&apos;t just
              build apps we bring your vision to life. We always aim to provide
              real value to our users and clients. That&apos;s why we have made
              our custom app development which is available on the Play Store.
            </p>
          </div>
          <div className="flex gap-x-6">
            <GlobalButtonColored
              path="https://play.google.com/store/apps/dev?id=8045723784298228141"
              title="Playstore"
              className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-11 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-[#FF693B] border border-[#FF693B] hover:bg-white hover:text-[#FF693B]"
            />
            <GlobalButtonColored
              path="/services"
              title="Our Services"
              className="font-Inter flex items-center font-semibold md:leading-[20px] text-[14px] md:text-[16px] whitespace-nowrap px-4 py-2.5 md:px-5 md:py-3.5 rounded-lg transition-all duration-300 text-white bg-transparent hover:border-[#FF693B] border border-[#FFF] hover:bg-[#FF693B] hover:text-[#fff]"
            />
          </div>
        </div>

        <div className="w-[50%] relative">
          <div className="engine"></div>
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
