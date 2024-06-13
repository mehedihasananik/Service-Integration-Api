"use client";
import React, { useState } from "react";
import axios from "axios";
import Revision from "@/Components/Utilites/Revision/Revision";
import { Button, Modal } from "flowbite-react";

const DeliveryRevision = ({ openModal, setOpenModal, modalSize, delivery }) => {
  const [text, setText] = useState(""); // State to hold the textarea value
  const [selectedFiles, setSelectedFiles] = useState([]); // State to hold selected files

  const handleFileChange = (files) => {
    setSelectedFiles(files);
  };

  const handleSendRevisionRequest = async () => {
    console.log(delivery.service_order_id);
    const formData = new FormData();
    formData.append("order", delivery.service_order_id); // Assuming delivery.id is the delivery ID
    formData.append("description", text); // Append the text state correctly

    // Append selected files if available
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i].file;
        formData.append("attachment[]", file);
      }
    }

    try {
      const response = await axios.post(
        "http://192.168.10.16:8000/api/order/revision/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Handle success (e.g., show a success message, close modal, etc.)
      setOpenModal(false);
    } catch (error) {
      console.error("Error sending revision request:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <Modal
        show={openModal}
        size={modalSize}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          <span className="font-bold text-[18px]">Submit Revisions</span>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-bold">
              What kind of revisions would you like to make?
            </p>
            <div>
              <textarea
                className="w-full lg:w-[100%] py-4 border border-[#CBD5E1] px-4 shadow-sm"
                type="text"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={4}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div>
              <Revision onFileChange={handleFileChange} />
            </div>
          </div>
        </Modal.Body>
        <div className="mx-6 space-y-5 pb-5">
          <div>
            <Button
              className="bg-[#FF693B]"
              onClick={handleSendRevisionRequest}
            >
              Send Revision Request
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeliveryRevision;
