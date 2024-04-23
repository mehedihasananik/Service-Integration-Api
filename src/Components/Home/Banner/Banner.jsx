import Container from "@/Components/Container/Container";
import { bannerApi } from "@/config/apis";
import Image from "next/image";
import Link from "next/link";

async function getBannerContent() {
  const res = await fetch(`${bannerApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Banner = async () => {
  const banner = await getBannerContent();
  return (
    <Container>
      <div className="flex flex-col  lg:flex-row items-center justify-between gap-11 pt-5 xl:pt-10 pb-10 ">
        {/* left side description */}
        <div className="flex flex-col ">
          {/* title starts*/}
          <div className="w-full lg:w-[450px] lg:pt-14  px-5 md:px-0">
            <h3 className="font-Raleway font-bold text-[30px] md:text-[40px] xl:text-[48px] xl:leading-[63.98px]">
              Creative Design <span className="line-break"></span> and{" "}
              <span className="custom-rotate">Development </span> <br />
              for your product
            </h3>
          </div>
          {/* title ends*/}
          {/* description starts */}
          <div className="w-full lg:w-[450px] pt-4 text-[16px]  px-5 md:px-0">
            <p>{banner.details}</p>
          </div>
          {/* description ends */}
          {/* buttons starts */}
          <div className="flex gap-6 py-6 justify-center lg:justify-start ">
            {/* quote button */}
            <Link
              href={"#projectDetails"}
              className="text-[16px] whitespace-nowrap text-white bg-[#FF693B]  border border-[#FF693B] px-6 py-2 md:px-10 md:py-4 font-[600] rounded-lg  hover:bg-[#fff] hover:text-[#FF693B] transition-all duration-300"
            >
              Get a Quote
            </Link>
            {/* our services */}
            <Link
              href={"/services"}
              className="text-[16px]  whitespace-nowrap text-[#FF693B] border border-[#FF693B] px-6 py-2 md:px-10 md:py-4 font-[600] rounded-lg  hover:bg-[#FF693B] hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
          {/* buttons ends */}
        </div>
        <div>
          {/* right side image */}
          <div>
            <Image
              className="md:w-[742px] md:h-[554px]"
              width={500}
              height={500}
              src={banner.banner}
              quality={100}
              alt="banner image"
              priority={false}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
