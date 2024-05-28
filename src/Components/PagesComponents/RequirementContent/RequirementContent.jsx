"use client";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const RequirementContent = ({ requireMent, requirementId }) => {
  const fileInputRefs = useRef([]);
  const [answers, setAnswers] = useState(Array(requireMent.length).fill(""));
  const [attachments, setAttachments] = useState(
    Array(requireMent.length).fill(null)
  );
  const [attachmentNames, setAttachmentNames] = useState(
    Array(requireMent.length).fill("")
  );

  const userData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  const handleButtonClick = (index) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleFileInputChange = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setAttachments((prevAttachments) => {
        const newAttachments = [...prevAttachments];
        newAttachments[index] = files[0];
        return newAttachments;
      });
      setAttachmentNames((prevNames) => {
        const newNames = [...prevNames];
        newNames[index] = files[0].name;
        return newNames;
      });
    }
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    requireMent.forEach((item, index) => {
      formData.append(`attachment[${index + 1}]`, attachments[index]);
      formData.append(`questions[${index + 1}]`, item.questions);
      formData.append(`answer[${index + 1}]`, answers[index]);
    });
    // Add other form data like user_id, service_order_id if available
    formData.append("user_id", userData?.id);
    formData.append("service_order_id", requirementId);

    try {
      const response = await fetch(
        "http://192.168.10.14:8000/api/requirements_store",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("Response:", response); // Log response from the server
      // Handle response
      console.log("Form submitted successfully", response);
      toast.success("Requirements submitted successfully");
      // Clear input fields
      setAnswers(Array(requireMent.length).fill(""));
      setAttachments(Array(requireMent.length).fill(null));
      setAttachmentNames(Array(requireMent.length).fill(""));
    } catch (error) {
      // Handle error
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="pt-5">
      <div className="max-w-[1680px] mx-auto px-[4%] md:px-[10%]">
        <div className="bg-[#F4F4F4] p-5 md:px-10 md:py-7 rounded-md">
          <div>
            <h3 className="text-[36px] font-Raleway font-[600] text-[#333333] px-4">
              Requirements
            </h3>
          </div>
          <div className="pt-5">
            <form className="bg-[#FFFFFF] rounded-md" onSubmit={handleSubmit}>
              {requireMent.map((item, index) => {
                return (
                  <div key={index} className="mb-4 px-5 pt-5 pb-1 rounded-t-md">
                    <label
                      htmlFor={`question-${index}`}
                      className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1"
                    >
                      <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px] px-[8px] rounded-full font-Raleway text-center">
                        <span> {index + 1}</span>
                      </span>{" "}
                      <span>
                        {item.questions}
                        <span
                          className={
                            item.field_type === "optional"
                              ? "text-[#0A2C8C]"
                              : ""
                          }
                        >
                          {item.field_type === "optional" ? "(Optional)" : ""}
                        </span>
                      </span>
                    </label>
                    <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                      <textarea
                        type="text"
                        id={`question-${index}`}
                        className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway text-[#323941] font-[400]"
                        placeholder="Write your answer here"
                        rows={1}
                        value={answers[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => handleButtonClick(index)}
                        className="h-[45px] bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                      >
                        Attach file
                      </button>
                      <input
                        ref={(el) => (fileInputRefs.current[index] = el)}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(event) =>
                          handleFileInputChange(index, event)
                        }
                      />
                    </div>
                    <div className="attachName flex justify-end px-[5%] pt-4">
                      {attachmentNames[index] && (
                        <span className="text-sm">
                          {attachmentNames[index]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="text-center md:text-left md:px-12 md:pt-5">
                <button
                  type="submit"
                  className="bg-[#FF693B] border border-[#FF693B] text-[16px] font-[600] text-white px-5 py-2.5 rounded-md hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                >
                  Submit Requirement
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center px-5 pb-5 md:flex-row md:justify-start md:items-start md:px-12 bg-[#FFFFFF] py-5 md:pb-20 text-[#484848] font-Raleway text-[12px] gap-x-1 italic rounded-b-md">
            <span className="font-[600]">Note:</span>
            <span>
              Please submit the complete requirements of the project. Change
              requirements in the middle of the project may be subject to extra
              charges.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementContent;
