"use client";
import React, { useContext, useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { fetchData } from "@/config/apiRequests.js";
import { checkoutApi } from "@/config/apis";
import Image from "next/image";
import UserLoading from "../UserLoading/UserLoading";
import ServiceProductInfo from "../ServiceProductInfo/ServiceProductInfo";
import CustomCheckoutPinfo from "../CustomCheckoutPinfo/CustomCheckoutPinfo";

const userDataString =
  typeof window !== "undefined"
    ? window.localStorage.getItem("userData")
    : null;
const userData = userDataString ? JSON.parse(userDataString) : null;

const CheckoutProductInfo = ({ productInfo, setProductInfo }) => {
  const [product, setProduct] = useState([]);

  const storedItemId =
    typeof window !== "undefined"
      ? window.localStorage.getItem("itemId")
      : null;

  const customItemId =
    typeof window !== "undefined"
      ? window.localStorage.getItem("customId")
      : null;

  useEffect(() => {
    if (storedItemId) {
      const fetchingItemData = async () => {
        try {
          const data = await fetchData(`${checkoutApi}`, "POST", {
            sevice_package_id: storedItemId,
            user_id: userData?.id,
          });
          setProductInfo(data);
        } catch (error) {
          console.error("Error fetching item data:", error);
        }
      };
      fetchingItemData();
    }
  }, [storedItemId]);

  useEffect(() => {
    if (customItemId) {
      const fetchingItemData = async () => {
        try {
          const data = await fetchData(
            `http://192.168.10.14:8000/api/custom_offer_checkout`,
            "POST",
            {
              custom_offer_id: customItemId,
              user_id: userData?.id,
            }
          );
          setProduct(data);
        } catch (error) {
          console.error("Error fetching item data:", error);
        }
      };
      fetchingItemData();
    }
  }, [customItemId]);
  // Only re-run the effect if storedItemId changes
  console.log();
  return (
    <div>
      <div>
        {customItemId ? (
          <div>{product && <CustomCheckoutPinfo product={product} />}</div>
        ) : (
          <>{productInfo && <ServiceProductInfo productInfo={productInfo} />}</>
        )}
      </div>
    </div>
  );
};

export default CheckoutProductInfo;
