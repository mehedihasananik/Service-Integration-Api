import axios from "axios";
import Container from "@/Components/Container/Container";
import BannerItems from "@/Components/Utilites/BannerItems/BannerItems";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { bannerApi } from "@/config/apis";
import { Suspense } from "react";

async function getBannerContent() {
  try {
    const res = await axios.get(bannerApi);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch banner data");
  }
}

const Banner = async () => {
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
