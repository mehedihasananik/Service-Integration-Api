"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Spinner } from "flowbite-react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";

const DeliveryRevision = ({ openModal, setOpenModal, modalSize, delivery }) => {
  const [text, setText] = useState(""); // State to hold the textarea value
  const [selectedFiles, setSelectedFiles] = useState([]); // State to hold selected files
  const [filePreviews, setFilePreviews] = useState([]); // State to hold file previews
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length + selectedFiles.length > 6) {
      toast.error("You can only upload up to 6 files.");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...files]);

    const previews = files.map((file) => {
      return {
        url: URL.createObjectURL(file),
        type: file.type,
        name: file.name,
      };
    });
    setFilePreviews((prev) => [...prev, ...previews]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSendRevisionRequest = async () => {
    if (!text.trim()) {
      toast.error(
        "Please enter a message before sending the revision request."
      );
      return;
    }

    setIsLoading(true); // Set loading to true when the request starts
    const formData = new FormData();
    formData.append("order", delivery.service_order_id); // Assuming delivery.id is the delivery ID
    formData.append("description", text); // Append the text state correctly
    formData.append("sender_id", 19);
    formData.append("receiver_id", 18);
    // Append selected files if available
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
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
      // Reset the states to clear the inputs
      setText("");
      setSelectedFiles([]);
      setFilePreviews([]);
      setOpenModal(false);
    } catch (error) {
      console.error("Error sending revision request:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setIsLoading(false); // Set loading to false when the request ends
    }
  };

  const removeImage = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
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
              <input
                type="file"
                id="fileInput"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                className="w-full flex justify-center text-[16px] font-bold  border-[2px] border-dashed py-5 mt-3"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <label
                  htmlFor="fileInput"
                  className=" text-black py-2 px-4 rounded cursor-pointer "
                >
                  Drag or Drop Your files
                </label>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2">
              {filePreviews.map((file, index) => (
                <div key={index} className="relative mr-[10px]">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={file.url}
                      alt={`Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "application/pdf" ? (
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/muksis/128/pdf-512.png"
                      alt={`PDF Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "image/vnd.adobe.photoshop" ? (
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/muksis/128/psd-512.png"
                      alt={`PSD Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "application/vnd.adobe.xd" ? (
                    <img
                      src="http://192.168.10.16:8000/js/icons/xd.png"
                      alt={`XD Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "application/msword" ||
                    file.type ===
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                    <img
                      src="http://192.168.10.16:8000/js/icons/doc.png"
                      alt={`Word Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "application/vnd.ms-excel" ||
                    file.type ===
                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                    <img
                      src="http://192.168.10.16:8000/js/icons/excel.png"
                      alt={`Excel Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "text/plain" ? (
                    <img
                      src="http://192.168.10.16:8000/js/icons/txt.png"
                      alt={`Text Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type === "application/zip" ||
                    file.type === "application/x-zip-compressed" ? (
                    <img
                      src="/assets/zipFile.jpg"
                      alt={`Zip Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : file.type.startsWith("video/") ? (
                    <img
                      src="http://192.168.10.16:8000/js/icons/video.png"
                      alt={`Video Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1388/1388902.png"
                      alt={`Unsupported Preview ${index}`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  )}
                  <FaTimes
                    className="absolute top-[5px] right-[5px] cursor-pointer text-[15px] text-white bg-[#95AFC0] rounded-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      removeImage(index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <div className="mx-6 space-y-5 pb-5">
          <div>
            <Button
              className="bg-[#FF693B] flex items-center"
              onClick={handleSendRevisionRequest}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading && <Spinner size="sm" className="mr-2" />}
              {isLoading ? "Sending..." : "Send Revision Request"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeliveryRevision;
