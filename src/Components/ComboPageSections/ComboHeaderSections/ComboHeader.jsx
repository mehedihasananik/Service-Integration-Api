import { headerApi } from "@/config/apis";
import HeaderItems from "@/Components/Utilites/HeaderItems/HeaderItems";
import { fetchData } from "@/config/fetchData";
import ComboHeaderItems from "./ComboHeaderItems";

async function getHeaderContent() {
  try {
    return await fetchData(`${headerApi}`);
  } catch (error) {
    console.error("Error fetching header content:", error);
    throw error;
  }
}

const ComboHeader = async () => {
  try {
    const headers = await getHeaderContent();
    return <ComboHeaderItems headers={headers} />;
  } catch (error) {
    console.error("Error in Header component:", error);
    return <></>;
  }
};

export default ComboHeader;
