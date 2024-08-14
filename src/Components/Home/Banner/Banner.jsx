import Container from "@/Components/Container/Container";
import BannerItems from "@/Components/Utilites/BannerItems/BannerItems";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { bannerApi } from "@/config/apis";
import { Suspense } from "react";

async function getBannerContent() {
  const res = await fetch(`${bannerApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res?.json();

  if (!data || !data?.HomeBanner) {
    throw new Error("Invalid banner data");
  }

  return data?.HomeBanner;
}

const Banner = async () => {
  try {
    const banner = await getBannerContent();
    return (
      <Container>
        <Suspense fallback={<UserLoading />}>
          <BannerItems banner={banner} />
        </Suspense>
      </Container>
    );
  } catch (error) {
    // Handle errors here, e.g., display an error message
    console.error("Error fetching banner:", error);
    return <div>An error occurred while loading the banner.</div>;
  }
};

export default Banner;
