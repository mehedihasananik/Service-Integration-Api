"use client";
import React from "react";
import { Button, Modal } from "flowbite-react";

const CongratsModal = ({ openCongratsModal, setOpenCongratsModal }) => {
  return (
    <Modal show={openCongratsModal} onClose={() => setOpenCongratsModal(false)}>
      <Modal.Header className="border-none"></Modal.Header>
      <div className="flex justify-center">
        <img
          className="h-40"
          src="https://www.shutterstock.com/image-vector/opened-gift-box-surprise-concept-600nw-381117277.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-[#FF693B] font-bold text-[25px]">
          Congratulations!!
        </h3>
      </div>

      <Modal.Body>
        <div className="space-y-6 text-justify">
          Congratulations and thank you for your recent order with us! <br />{" "}
          You can download delivery files from the delivery section. If you
          encounter any issues or have any questions, please contact us on the
          Message page. Have a good day.
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CongratsModal;
