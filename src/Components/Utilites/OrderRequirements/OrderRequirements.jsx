"use client";
import { fetchData } from "@/config/apiRequests.js";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import Loading from "../Loading/Loading";
import UserLoading from "../UserLoading/UserLoading";

const OrderRequirements = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalSize, setModalSize] = useState("4xl");
  const [imageLoaded, setImageLoaded] = useState(false); // New state for tracking image loading

  const orderID =
    typeof window !== "undefined"
      ? window.localStorage.getItem("orderID")
      : null;

  const fetchingData = async () => {
    setLoading(true);
    try {
      const data = await fetchData(
        `http://192.168.10.14:8000/api/order_delivery`,
        "POST",
        {
          order_id: orderID,
        }
      );
      setDeliveryDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const order_basic = deliveryDetails?.order_basic;
  const user_requirements = deliveryDetails?.user_requirements;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1   h-[50vh] px-4 md:pt-5 md:pb-3">
      {/* 1st */}
      <div className="max-w-[330px] h-[80px] flex  items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/ui.png" alt="ui ux design" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
            {order_basic?.service}
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            Order No. #{order_basic?.order_id}
          </p>
        </div>
        <div>
          <h3 className="text-[#3371F2] text-[20px] font-[600] ">
            ${order_basic?.order_price}
          </h3>
        </div>
      </div>
      {/* 2nd */}
      <div className="max-w-[330px] h-[80px] flex items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/date.png" alt="ui ux design" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
            Order Placed
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            {order_basic?.order_placed}
          </p>
        </div>
      </div>
      {/* 3rd */}
      <div className="max-w-[330px] h-[80px] flex items-center gap-x-5  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
        <div>
          <img src="/assets/pin.png" alt="ui ux design" />
        </div>
        <div>
          <h2 className="text-[#444] font-Raleway text-[14px] font-[600] whitespace-nowrap">
            Requirement Submitted
          </h2>
          <p className="text-[#666] text-[14px] font-[400] ">
            {order_basic?.requirement_submitted}
          </p>
        </div>
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-[#FF693B] text-[14px] font-[600] border border-[#FF693B] text-white px-4 py-1 rounded-md hover:text-[#FF693B] hover:bg-[#fff] transition-all duration-200"
          >
            View
          </button>
        </div>
      </div>
      <div className="px-20">
        <Modal
          size={modalSize}
          className="px-20"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>Requirement Submitted</Modal.Header>
          <Modal.Body>
            {loading ? (
              <Loading />
            ) : (
              <div className="space-y-6">
                {user_requirements?.map((requirement, index) => {
                  return (
                    <div
                      className="w-full flex justify-center items-center"
                      key={index}
                    >
                      <div className="w-[70%]">
                        <h3>
                          {index + 1}. {requirement.questions}
                        </h3>
                        <p>- {requirement.answer}</p>
                      </div>
                      <div className="flex justify-end w-[30%]">
                        {!imageLoaded && <UserLoading />}{" "}
                        {/* Show loading indicator if image is not loaded */}
                        <img
                          className={`w-32 ${imageLoaded ? "" : "hidden"}`} // Hide image until loaded
                          src={requirement.attachment}
                          alt=""
                          onLoad={() => setImageLoaded(true)} // Set imageLoaded state to true when image loads
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default OrderRequirements;
