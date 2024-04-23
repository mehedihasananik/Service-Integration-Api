import Container from "@/Components/Container/Container";
import AboutUsItems from "@/Components/Utilites/AboutUsItems/AboutUsItems";
import { about_us_homeApi } from "@/config/apis";
import Image from "next/image";

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
  const about = await getAboutUsContent();

  return (
    <div className="py-10 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row   md:gap-[6%] 2xl:gap-[10%]">
          <div className="bg-[#DDFFFB]">
            <Image
              width={1000}
              height={1000}
              className="w-[650px]"
              src={about.image || "/about.png"}
              alt="about-img"
            />
          </div>
          <div className="pt-10">
            <AboutUsItems about={about} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
