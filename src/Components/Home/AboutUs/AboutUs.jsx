import Container from "@/Components/Container/Container";
import AboutUsItems from "@/Components/Utilites/AboutUsItems/AboutUsItems";
import { about_us_homeApi } from "@/config/apis";
import Image from "next/image";

// fetching the aboutUs content
async function getAboutUsContent() {
  const res = await fetch(`${about_us_homeApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AboutUs = async () => {
  // getting aboutContent
  const about = await getAboutUsContent();
  // console.log(about);

  return (
    <div className="pb-5  md:pt-0 md:pb-0 xl:pb-10 overflow-hidden">
      <Container>
        {/* about us content */}
        <div className="flex flex-col items-center xl:flex-row   md:gap-[6%] 2xl:gap-[10%]">
          {/* left side image */}
          <div className="bg-[#DDFFFB] relative w-full max-w-[650px] aspect-square">
          <Image
            src={about.image}
            layout="fill"
            objectFit="contain"
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
