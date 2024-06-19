"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceProductInfo from "@/Components/Utilites/ServiceProductInfo/ServiceProductInfo";
import PaymentInfo from "@/Components/Utilites/PaymentInfo/PaymentInfo";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";

const SinglePage = ({ params }) => {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const userDataString =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleCheckout = async () => {
    try {
      const result = await axios.post(
        "http://192.168.10.14:8000/api/checkout",
        {
          user_id: userData?.id,
          order_id: params.id,
        }
      );
      setServices(result.data);
      setLoading(false); // Set loading to false once data is fetched
      console.log(result.data);
    } catch (err) {
      setError(err.message);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    if (userData && params.id) {
      handleCheckout();
    } else {
      setError("User data or params.id is missing.");
      setLoading(false); // Set loading to false if there's missing data
    }
  }, []);

  if (loading) {
    return <UserLoading />; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center space-x-16 my-20 px-32">
      <ServiceProductInfo productInfo={services} />
      <PaymentInfo productInfo={services} />
    </div>
  );
};

export default SinglePage;
