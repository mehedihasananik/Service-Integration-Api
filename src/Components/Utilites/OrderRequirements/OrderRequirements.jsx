"use client";
import { fetchData } from "@/config/apiRequests.js";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "flowbite-react";
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
  console.log(deliveryDetails);

  return (
    <div className="grid gap-y-5 grid-cols-1 md:grid-cols-1   h-[50vh] px-4 md:pt-5 md:pb-3">
      {/* 1st */}
      <div className="flex justify-center">
        <Card className="w-[90%] ">
          <div>
            <div className="flex justify-center">
              <img className="w-20 h-20" src="/assets/giphy.gif" alt="" />
            </div>
            <div className="text-center border border-[#E2E2E2] py-4 rounded-lg">
              <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
                {order_basic?.service} | {order_basic?.package_name}
              </h2>
              <p className="text-[#444] font-Raleway text-[16px] font-[600] py-1">
                Order No.{" "}
                <span className="font-bold text-[#FF693B]">
                  #{order_basic?.order_id}
                </span>
              </p>
              <p class="text-muted mb-0 flex justify-center items-center gap-x-2 mt-1 ">
                <span className="text-[#444] font-Raleway text-[16px] font-[600]">
                  {" "}
                  Status :{" "}
                </span>
                <span class="text-[14px] font-[600] font-Roboto text-[#FFF] bg-[#FF8F5A] px-2 py-[2px] rounded-sm">
                  {order_basic?.order_status}
                </span>
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="w-[90%] ">
          <div className="max-w-[330px] h-[80px] flex  items-start gap-x-3   border border-[#E2E2E2]    bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img
                className="w-[40px] h-full"
                src="/assets/ui.png"
                alt="ui ux design"
              />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
                Total Amount
              </h2>
              <p className="text-[#666] text-[14px] font-[400] whitespace-nowrap ">
                User: Anik
              </p>
            </div>
            <div>
              <h3 className="text-[#3371F2] text-[20px] font-[600] m-0 p-0 ">
                ${order_basic?.order_price}
              </h3>
            </div>
          </div>
          {/* 2nd */}
          <div className="max-w-[330px] h-[80px] flex items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img
                className="w-[40px] h-full"
                src="/assets/date.png"
                alt="ui ux design"
              />
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
          <div className="max-w-[330px] h-[80px] flex items-start gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img
                className="w-[40px] h-full"
                src="/assets/date.png"
                alt="ui ux design"
              />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[16px] font-[600]">
                Expected Delivery
              </h2>
              <p className="text-[#666] text-[14px] font-[400] ">
                {order_basic?.order_placed}
              </p>
            </div>
          </div>
          {/* 4th */}
          <div className="max-w-[330px] h-[90px] flex justify-between items-center gap-x-3  border border-[#E2E2E2] bg-[#FDFDFD] rounded-md p-3">
            <div>
              <img
                className="w-[50px] h-full"
                src="/assets/pin.png"
                alt="ui ux design"
              />
            </div>
            <div>
              <h2 className="text-[#444] font-Raleway text-[14px] font-[600] ">
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
        </Card>
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
                      className="w-full flex flex-col space-y-4 justify-center items-start"
                      key={index}
                    >
                      <div className="w-[70%]">
                        <h3>
                          {index + 1}. {requirement.questions}
                        </h3>
                        <p className="ml-1">- {requirement.answer}</p>
                      </div>
                      <div className=" w-[30%]">
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
