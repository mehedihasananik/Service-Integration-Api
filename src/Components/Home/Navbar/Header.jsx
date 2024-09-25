import { headerApi } from "@/config/apis";
import HeaderItems from "@/Components/Utilites/HeaderItems/HeaderItems";

async function getHeaderContent() {
  try {
    const res = await fetch(`${headerApi}`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching header content:", error);
    throw error;
  }
}

const Header = async () => {
  try {
    const headers = await getHeaderContent();
    return <HeaderItems headers={headers} />;
  } catch (error) {
    console.error("Error in Header component:", error);
    return <></>;
  }
};

export default Header;
