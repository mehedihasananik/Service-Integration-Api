import { Suspense } from "react";
import Container from "@/Components/Container/Container";
import BrandCarousel from "@/Components/Utilites/BrandCarousel/BrandCarousel";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { brandsApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";

const Brands = async () => {
  let brands = await fetchData(brandsApi);
  // console.log(brands);

  return (
    <div className="bg-[#F8FAFC]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 py-5 lg:py-2">
          <h3 className="w-full text-center lg:text-left lg:w-[40%] font-Montserrat text-[#475569] text-headingSmall font-bold">
            TRUSTED BY GLOBAL BRANDS
          </h3>
          <div className="w-full lg:w-[45%] lg:flex lg:justify-end">
            <Suspense fallback={<UserLoading />}>
              <BrandCarousel brands={brands} />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
