import { headerApi } from "@/config/apis";
import React from "react";

// api fetching from sever side
async function getheaderContent() {
  const res = await fetch(`${headerApi}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HeaderItems = async () => {
  const header = await getheaderContent();
  console.log(header);

  return <div>HeaderItems</div>;
};

export default HeaderItems;
