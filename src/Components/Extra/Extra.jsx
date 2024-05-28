"use client";

import React, { useEffect, useState } from "react";

const Extra = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    fetch("https://admin.softpixe.com/api/header")
      .then((response) => response.json())
      .then((data) => setHeaderData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(headerData);

  return <div>Extra</div>;
};

export default Extra;
