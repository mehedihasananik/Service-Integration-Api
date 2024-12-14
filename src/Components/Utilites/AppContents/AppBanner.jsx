import Image from "next/image";
import GlobalButtonColored from "../GlobalButton/GlobalButtonColored";
import GlobalButtonHovered from "../GlobalButton/GlobalButtonHovered";
import Container from "@/Components/Container/Container";

const AppBanner = ({ appData }) => {
  console.log(appData);
  return (
    <Container>
      <div className=" h-full app_space flex  justify-center items-center">
        <div className="container mx-auto px-0 lg:px-8">
          <div className="flex flex-col-reverse xxl:flex-row mx-auto xxl:items-start gap-8 md:gap-12">
            <div className="w-full xxl:w-1/2 order-2 md:order-1 text-center md:text-left ">
              <p className="text-[#173792] font-semibold mb-3 sm:mb-4 text-paragraphLarge md:text-paragraphExtraLarge">
                Join 1 Million users worldwide!
              </p>
              <h1 className="text-2xl  lg:text-[60px] font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2]">
                {/* Welcome to{" "}
                <span className="text-[#FF693B] relative">Envobyte</span> Your
                One-Stop Solution for Custom App Development */}

                {appData.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    style={{
                      color: word === "Envobyte" ? "#FF693B" : "",
                    }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-gray-700 text-paragraphMedium md:text-paragraphExtraLarge mb-4 mt-6 sm:mt-8 max-w-2xl mx-auto md:mx-0 ">
                {appData.description}
              </p>
              <div className="flex flex-col xs:flex-row  justify-center xxl:justify-start gap-4 md:gap-6 lg:py-2">
                <GlobalButtonColored
                  path="https://play.google.com/store/apps/dev?id=8045723784298228141"
                  title="Playstore"
                  className="btn btn-primary lg:w-[30%] text-center"
                />
                <GlobalButtonHovered
                  path="/services"
                  title="Our Services"
                  className="btn btn-secondary lg:w-[30%] text-center"
                />
              </div>
            </div>
            <div className="w-full xxl:w-1/2 order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0 pt-[5%]">
              <div className="relative w-full lg:max-w-full   aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/app_banner.png"
                  alt="Friends connecting online"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppBanner;
