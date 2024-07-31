import { Suspense } from "react";
import Container from "@/Components/Container/Container";
import BrandCarousel from "@/Components/Utilites/BrandCarousel/BrandCarousel";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { brandsApi } from "@/config/apis";

async function fetchBrands() {
  const res = await fetch(brandsApi, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}

const Brands = async () => {
  const brands = await fetchBrands();

  return (
    <div className="bg-[#F8FAFC]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 py-5 lg:py-2">
          <h3 className="w-full text-center lg:text-left lg:w-[40%] font-Montserrat text-[#475569] text-[20px] font-bold">
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
