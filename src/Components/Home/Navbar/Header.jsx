import { headerApi } from "@/config/apis";
import HeaderItems from "@/Components/Utilites/HeaderItems/HeaderItems";

async function getHeaderContentContent() {
  const res = await fetch(`${headerApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Header = async () => {
  const headers = await getHeaderContentContent();

  return (
    <div>
      <HeaderItems headers={headers} />
    </div>
  );
};

export default Header;
