import Container from "@/Components/Container/Container";
import AboutUsItems from "@/Components/Utilites/AboutUsItems/AboutUsItems";
import { about_us_homeApi } from "@/config/apis";
import Image from "next/image";
import { fetchData } from "@/config/fetchData";

const AboutUs = async () => {
  // getting aboutContent
  let about = await fetchData(about_us_homeApi);
  // console.log(about);

  return (
    <div className="pb-5 md:pt-0 md:pb-0 xl:pb-10 overflow-hidden">
      <Container>
        {/* about us content */}
        <div className="flex flex-col items-center xl:flex-row md:gap-[6%] 2xl:gap-[10%]">
          {/* left side image */}
          <div className="bg-[#DDFFFB] relative w-full max-w-[650px] aspect-square">
            <Image
              src={about.image}
              fill // Replaces layout="fill"
              sizes="(max-width: 650px) 100vw, 650px" // Tells the browser how much space the image should occupy
              style={{ objectFit: "contain" }} // Replaces objectFit="contain"
              quality={80}
              alt="about-img"
            />
          </div>

          {/* right side counters */}
          <div className="pt-4 md:pt-10">
            <AboutUsItems about={about} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
