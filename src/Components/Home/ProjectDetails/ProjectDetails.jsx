"use client";
import React, { useState } from "react";
import Container from "@/Components/Container/Container";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import { user_feedbackApi } from "@/config/apis";
import Image from "next/image";

const ProjectDetails = ({ userContact }) => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    user_email: "",
    user_phone: "",
    message: "",
    website: "",
    service_categories: [],
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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
    user_phone: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number must be at least 10 digits"),
    message: Yup.string()
      .required("Message is required")
      .max(2000, "Message must not exceed 2000 characters"),
    website: Yup.string().required("Need a URL"),
    service_categories: Yup.array().min(1, "Select at least one service"),
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
      setIsLoading(true); // Set loading state to true
      await validationSchema.validate(formData, { abortEarly: false });

      // Convert service_categories array to comma-separated string
      const submissionData = {
        ...formData,
        service_categories: formData.service_categories.join(", "),
      };

      const response = await axios.post(user_feedbackApi, submissionData);

      if (response.data) {
        console.log("Form submission result:", response.data);
        toast.success(
          "Project details sent successfully, we will contact you",
          {
            duration: 10000,
          }
        );
        setFormData({
          first_name: "",
          user_email: "",
          user_phone: "",
          message: "",
          website: "",
          service_categories: [],
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
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        service_categories: checked
          ? [...prevData.service_categories, value]
          : prevData.service_categories.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handlePhoneOnChange = (value) => {
    setPhone(value);
    setFormData((prevData) => ({
      ...prevData,
      user_phone: value,
    }));
  };

  const services = [
    "Graphics Design",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Video & Animation",
  ];

  return (
    <div className="bg-[#F8FAFC] py-0 pb-8 md:py-0 md:pb-[4%] lg:py-10 lg:pb-[4%]">
      <Container>
        <div className="flex md:flex-row justify-center items-center pt-6">
          <div>
            <Image
              width={76}
              height={76}
              src="/assets/projectLogo.svg"
              alt=""
            />
          </div>
          <div id="projectDetails">
            <h2 className="headings">
              Let&apos;s discuss your{" "}
              <span className="text-[#FF693B]"> project</span>
            </h2>
          </div>
        </div>
        <div className="text-center py-2 pb-3 md:pb-0 md:py-5">
          <p className="text-[16px] text-[#475569]">
            Send details of the project and we will provide a quote for the
            project. Let&apos;s make <br /> something new, different, and more
            meaningful.
          </p>
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between gap-10 md:pt-14">
          <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col gap-5 md:gap-10 md:pl-10 2xl:pl-0">
            <div className="flex items-center gap-6 bg-[#FFFFFF] py-8 rounded-lg pl-5">
              <a
                href={`mailto:${userContact?.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6"
              >
                <div className="bg-[#FFF5F1] p-4 rounded-lg">
                  <Image
                    width={24}
                    height={24}
                    src="https://i.ibb.co/hVTCYCp/Email.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[16px] text-[#94A3B8]">Email us</h3>
                  <span className="text-[#475569] text-[16px] pt-1">
                    {userContact?.email}
                  </span>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-6 bg-[#FFFFFF] py-8 rounded-lg pl-5 pr-14">
              <a
                href={`https://wa.me/${userContact?.phone_number.replace(
                  /[^\d+]/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6"
              >
                <div className="bg-[#FFF5F1] p-4 rounded-lg">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/whatsapp.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[16px] text-[#94A3B8]">WhatsApp</h3>
                  <span className="text-[#475569] text-[16px] pt-1">
                    {userContact?.phone_number}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div
            className="w-full md:w-[68%] lg:w-[53%] contact"
            id="project_details_input"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row md:gap-x-10">
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label
                        className="text-[16px] font-Roboto"
                        htmlFor="first_name"
                      >
                        Full Name:
                      </label>
                      <input
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="John Doe"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label
                        className="text-[16px] font-Roboto mt-3 md:mt-5  lg:mt-0"
                        htmlFor="user_email"
                      >
                        Email:
                      </label>
                      <input
                        className=" w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm focus:border-blue-500"
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="johndoe@email.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row md:gap-x-10">
                  <div className="flex flex-col gap-3 lg:w-[50%] sm:w-[100%]">
                    <label
                      className="text-[16px] mt-3 md:mt-0 lg:mt-0 font-Roboto"
                      htmlFor="user_phone"
                    >
                      Phone/WhatsApp:
                    </label>
                    <PhoneInput
                      name="user_phone"
                      defaultCountry="us"
                      value={phone}
                      onChange={handlePhoneOnChange}
                      searchPlaceholder="Search country"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label
                        className="text-[16px] font-Roboto"
                        htmlFor="website"
                      >
                        Do you have a website?
                      </label>
                      <input
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="website"
                        name="website"
                        placeholder="envobyte.com"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-[16px] font-Roboto">
                    Service categories you&apos;re interested In:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 ">
                        <Checkbox
                          id={`service-${index}`}
                          name="service_categories"
                          value={service}
                          onChange={handleChange}
                          checked={formData.service_categories.includes(
                            service
                          )}
                        />
                        <Label
                          htmlFor={`service-${index}`}
                          className="flex font-normal text-[16px] font-Roboto"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="flex flex-col gap-3">
                    <label
                      className="text-[16px] font-Roboto"
                      htmlFor="message"
                    >
                      How may we help you?
                    </label>
                    <textarea
                      className="w-full lg:w-[100%] py-4 border border-[#CBD5E1] px-4 shadow-sm outline-none"
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
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <label
                    htmlFor="accept"
                    className="text-sm text-gray-700 leading-tight font-Roboto"
                  >
                    You agree that you have read, acknowledge and accept our{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="text-[#FF693B] hover:text-[#FF8D6B] underline font-semibold transition-colors duration-300"
                    >
                      Terms and conditions
                    </Link>
                    .
                  </label>
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
                    disabled={isLoading} // Disable button while loading
                  >
                    {isLoading
                      ? "Sending requirements..."
                      : "Send project details"}{" "}
                    {/* Conditional text */}
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
