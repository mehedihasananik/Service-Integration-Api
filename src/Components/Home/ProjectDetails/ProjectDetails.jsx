"use client";
import Container from "@/Components/Container/Container";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { user_feedbackApi } from "@/config/apis";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ProjectDetails = ({ userContact }) => {
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("Name is required")
      .min(2, "First Name must be at least 2 characters")
      .matches(
        /^[a-zA-Z][a-zA-Z\s]*\d*$/,
        "First Name cannot start with special characters or numbers"
      ),
    user_email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .matches(
        /^[^\d].*\.com$/,
        "Email can't start with a number & must end with .com"
      ),
    message: Yup.string()
      .required("Message is required")
      .max(2000, "Message must not exceed 2000 characters"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaVerified) {
      toast.error(
        "Please complete the reCAPTCHA verification before submitting."
      );
      return;
    }

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await axios.post(user_feedbackApi, formData);

      if (response.data) {
        toast.success(
          "Project details sent successfully, we will contact you",
          {
            duration: 10000, // 10 seconds
          }
        );
        setFormData({
          first_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
        setPhone("");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.name === "ValidationError") {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      user_phone: phone,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handlePhoneOnChange = (value, data) => {
    setPhone(value);
  };

  return (
    <div className="bg-[#F8FAFC] py-5 pb-8 md:py-10 md:pb-[4%] lg:py-10 lg:pb-[4%]">
      <Container>
        <div className="flex md:flex-row justify-center items-center pt-6">
          <div>
            <img
              className="w-[50px] md:w-full"
              src="/assets/projectLogo.svg"
              alt=""
            />
          </div>
          <div id="projectDetails">
            <h2 className="text-[20px] md:text-[32px] lg:text-[48px] font-Raleway font-bold">
              Let&apos;s discuss <span className="project_title"></span> your
              project
            </h2>
          </div>
        </div>
        <div className="text-center py-5">
          <p className=" text-[16px] text-[#475569]">
            Send details of the project and we will provide a quote for the
            project. Let&apos;s make <br /> something new, different, and more
            meaningful.
          </p>
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center  lg:flex-row lg:items-start lg:justify-between gap-10 md:pt-14">
          <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col gap-10 md:pl-10 2xl:pl-0">
            <div className="flex  items-center gap-6 bg-[#FFFFFF] py-8  rounded-lg pl-5">
              <a
                href={`mailto:${userContact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6"
              >
                <div className="bg-[#FFF5F1] p-4 rounded-lg">
                  <img
                    className="w-6 h-6"
                    src="https://i.ibb.co/hVTCYCp/Email.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[16px] text-[#94A3B8]">Email us</h3>
                  <span className="text-[#475569] text-[16px] pt-1">
                    {userContact.email}
                  </span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-6 bg-[#FFFFFF] py-8 rounded-lg pl-5 pr-14">
              <a
                href={`https://wa.me/${userContact.phone_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6"
              >
                <div className="bg-[#FFF5F1] p-4 rounded-lg">
                  <img src="/assets/whatsapp.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-[16px] text-[#94A3B8]">WhatsApp</h3>
                  <span className="text-[#475569] text-[16px] pt-1">
                    {userContact.phone_number}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-[68%] lg:w-[53%] contact"
            id="project_details_input"
          >
            <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col gap-5">
                <div className="flex  lg:flex-row md:gap-x-10">
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px]" htmlFor="firstName">
                        Full Name:
                      </label>
                      <input
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Jhon Doe"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3 ">
                      <label className="text-[16px]" htmlFor="email">
                        Email:
                      </label>
                      <input
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm focus:border-blue-500"
                        type="text"
                        id="user_email"
                        name="user_email"
                        placeholder="jhondoe@email.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5  lg:flex-row md:gap-0">
                  <div className="w-full lg:w-[100%] sm:w-[100%]">
                    <div className="flex flex-col gap-3 lg:w-[100%] sm:w-[100%]">
                      <label
                        className="text-[16px] mt-3 lg:mt-0"
                        htmlFor="user_phone"
                      >
                        Phone (Whatsapp):
                      </label>

                      <PhoneInput
                        name="user_phone"
                        defaultCountry="usa"
                        value={phone}
                        onChange={handlePhoneOnChange}
                        searchPlaceholder="Search country"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-[100%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px]" htmlFor="firstName">
                        Project details
                      </label>
                      <textarea
                        color="gray"
                        className="w-full lg:w-[100%] py-4 border border-[#CBD5E1] px-4 shadow-sm"
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Write your project details..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey="6LeHdPIpAAAAAJoof-1ewzeYES0jvTrJ9_g09hBQ"
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="pt-6">
                  <button
                    className="text-[16px] bg-[#FF693B] px-8 py-2 md:py-4 text-white rounded-lg border border-[#FF693B] hover:bg-white hover:text-[#FF693B] transition-all duration-300"
                    type="submit"
                  >
                    Send project details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
