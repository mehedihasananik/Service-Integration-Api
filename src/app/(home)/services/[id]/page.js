import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import {
  singeServiceDetails,
  singleService_package,
  singleSliderPageDetails,
} from "@/config/apis";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const service = await fetch(`${singeServiceDetails}/${id}`).then((res) =>
    res.json()
  );

  // Optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${service.sevice_items_name} || Envobyte`,
    description: service.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

const SinglePage = async ({ params }) => {
  // Fetch data for the page
  const service = await fetch(`${singeServiceDetails}/${params.id}`).then(
    (res) => res.json()
  );
  const sliders = await fetch(`${singleSliderPageDetails}/${params.id}`).then(
    (res) => res.json()
  );
  const packages = await fetch(`${singleService_package}/${params.id}`).then(
    (res) => res.json()
  );

  return (
    <>
      <ServiceDetails service={service} sliders={sliders} packages={packages} />
    </>
  );
};

export default SinglePage;
