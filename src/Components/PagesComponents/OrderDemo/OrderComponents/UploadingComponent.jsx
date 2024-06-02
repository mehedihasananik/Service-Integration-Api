"use client";
import FilePondComponent from "@/Components/Utilites/FilePondComponet/FilePondComponet";
import React, { useState, useRef } from "react";
import { FilePond } from "react-filepond";
import { CiFaceSmile } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";

const UploadingComponent = ({
  inputtedMessage,
  setInputtedMessage,
  textareaRef,
  setText,
  selectedFile,
  handleFileChange,
  setShowEmoji,
  showEmoji,
  sendMessageToAPI,
  handleSendButtonClick,
  setSelectedFile,
}) => {
  const [files, setFiles] = useState([]);
  const filePondRef = useRef(null);

  const handleButtonClick = () => {
    const inputElement = document.querySelector(".filepond--browser");
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div>
      <div className="bg-[#FFFFFF  pb-8 flex w-[85%] items-center gap-5 px-10  fixed left-[14%] -bottom-6">
        <div className="w-[90%] relative">
          <textarea
            ref={textareaRef}
            className="w-full border border-[#E2E2E2] rounded-md py-2.5  resize-none pr-[4%] pl-[2%] overflow-hidden"
            placeholder="Write a message..."
            value={inputtedMessage}
            maxLength={1000}
            onChange={(e) => {
              setInputtedMessage(e.target.value);
              setText(e.target.value);
            }}
          />

          {/* Attachment and Emoji icons */}
          <div className="flex gap-2 absolute right-3 top-[13px]">
            <label htmlFor="file-upload" className="cursor-pointer">
              {selectedFile ? (
                <span>{selectedFile.name}</span>
              ) : (
                <span>
                  <button onClick={handleButtonClick}>
                    <GoPaperclip />
                  </button>
                </span>
              )}
            </label>
            {/* Input for file upload */}
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .gif, .pdf, .xlsx, .xls, .txt, .zip, .docx, .rtf, .ppt"
            />
            {/* Emoji button */}
            <button onClick={() => setShowEmoji(!showEmoji)}>
              <CiFaceSmile className="text-[20px]" />
            </button>
          </div>
        </div>
        {/* Send button */}
        <div className="w-[8%]">
          <button
            onClick={() => {
              sendMessageToAPI(inputtedMessage);
              setInputtedMessage("");
              handleSendButtonClick();
              setSelectedFile("");
            }}
            className="w-full font-[600] bg-[#FF693B] border border-[#FF693B] text-white hover:text-[#FF693B] hover:bg-[#ffff] transition-all duration-200  text-[16px]  mx-[10%] py-2.5 rounded-[4px]"
          >
            Send
          </button>
        </div>
      </div>
      {/* Conditionally render FilePondComponent */}
      <div className="">
        <FilePond
          ref={filePondRef}
          files={files}
          allowReorder={true}
          allowMultiple={true}
          onupdatefiles={setFiles}
          labelIdle={``}
          allowImagePreview={true}
          imagePreviewMaxHeight={256}
          imagePreviewMaxWidth={256}
          imagePreviewHeight={150}
          allowFileTypeValidation={true}
          acceptedFileTypes={["image/*"]}
          allowFileSizeValidation={true}
          maxFileSize={60}
        />
      </div>
    </div>
  );
};

export default UploadingComponent;
