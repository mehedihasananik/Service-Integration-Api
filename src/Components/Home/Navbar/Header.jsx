import { headerApi } from "@/config/apis";
import HeaderItems from "@/Components/Utilites/HeaderItems/HeaderItems";

async function getHeaderContent() {
  const res = await fetch(`${headerApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Header = async () => {
  const headers = await getHeaderContent();

  return <HeaderItems headers={headers} />;
};

export default Header;
