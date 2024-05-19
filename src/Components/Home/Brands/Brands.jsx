import Container from "@/Components/Container/Container";

import { brandsApi } from "@/config/apis";
import Image from "next/image";

async function brandsContent() {
  const res = await fetch(`${brandsApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Brands = async () => {
  const brands = await brandsContent();

  return (
    <div className="bg-[#F8FAFC] ">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 py-5 lg:py-2">
          {/* left side */}
          <div className="w-full text-center lg:text-left lg:w-[40%] font-Montserrat text-[#475569] text-[20px] font-bold">
            <h3>TRUSTED BY GLOBAL BRANDS</h3>
          </div>
          {/* right side */}
          <div className=" w-full lg:w-[60%] lg:flex lg:justify-end ">
            <div className="w-[100%] flex gap-x-3 sm:gap-x-3 lsm:gap-x-5 lg:gap-x-10 justify-center items-center lg:justify-end">
              {brands?.map((brand) => {
                return (
                  <Image
                    key={brand.id}
                    width={500}
                    height={500}
                    className="w-[60px] h-[50px] md:w-[101px] md:h-[70px] "
                    src={brand.logo}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
