import Container from "@/Components/Container/Container";
import BannerItems from "@/Components/Utilites/BannerItems/BannerItems";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { bannerApi } from "@/config/apis";
import { Suspense } from "react";

// api fetching from sever side
async function getBannerContent() {
  const res = await fetch(`${bannerApi}`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Banner = async () => {
  // getting the banner data
  const banner = await getBannerContent();
  return (
    <Container>
      <Suspense fallback={<UserLoading />}>
        <BannerItems banner={banner.HomeBanner} />
      </Suspense>
    </Container>
  );
};

export default Banner;
