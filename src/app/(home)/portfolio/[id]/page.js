import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import { singlePortfolio } from "@/config/apis";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  // Fetch data for generating metadata
  const service = await fetch(`${singlePortfolio}/${id}`).then((res) =>
    res.json()
  );
  console.log(service);

  // Optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${service[0]?.title} || Envobyte`,
    description: service.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
const SinglePage = async ({ params }) => {
  const singlePortfolioItem = await fetch(
    `${singlePortfolio}/${params.id}`
  ).then((res) => res.json());
  console.log(singlePortfolioItem);

  return (
    <div>
      <PortfolioDetails singlePortfolioItem={singlePortfolioItem} />
    </div>
  );
};

export default SinglePage;
