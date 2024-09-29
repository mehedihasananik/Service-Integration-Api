import Container from "@/Components/Container/Container";
import BannerItems from "@/Components/Utilites/BannerItems/BannerItems";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { bannerApi } from "@/config/apis";
import { fetchData } from "@/config/fetchData";
import { Suspense } from "react";

const Banner = async () => {
  // getting the banner data
  let banner = await fetchData(bannerApi);
  return (
    <Container>
      <Suspense fallback={<UserLoading />}>
        <BannerItems banner={banner.HomeBanner} />
      </Suspense>
    </Container>
  );
};

export default Banner;
