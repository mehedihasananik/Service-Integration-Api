"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Extrea = () => {
  const [headerData, setHeaderData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.softpixe.com/api/header"
        );
        setHeaderData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!headerData) {
    return <div>Loading...</div>;
  }
  console.log(headerData);

  return (
    <div>
      <h1>Header Data</h1>
    </div>
  );
};

export default Extrea;
