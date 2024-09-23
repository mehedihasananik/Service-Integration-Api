import Container from "@/Components/Container/Container";
import BannerItems from "@/Components/Utilites/BannerItems/BannerItems";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { bannerApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import { Suspense } from "react";

// api fetching from server side
async function getBannerContent() {
  try {
    return await fetchData(bannerApi);
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
    throw error;
  }
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
