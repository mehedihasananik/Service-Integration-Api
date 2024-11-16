import React, { useState, useEffect } from "react";
import { Checkbox, Label, Modal } from "flowbite-react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { user_feedbackApi } from "@/config/apis";
import Link from "next/link";

const ContactModal = ({ openModal, setOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    user_email: "",
    user_phone: "",
    message: "",
    service_name: "",
    package_name: "",
    website: "",
    service_categories: [],
  });

  useEffect(() => {
    if (openModal) {
      const storedItem = JSON.parse(localStorage.getItem("item") || "{}");
      setFormData((prevData) => ({
        ...prevData,
        service_name: storedItem.serviceName || "",
        package_name: storedItem.package_name || "",
      }));
    }
  }, [openModal]);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .matches(
        /^[a-zA-Z][a-zA-Z\s]*\d*$/,
        "Name cannot start with special characters or numbers"
      ),
    user_email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .min(3, "Email must be at least 3 characters")
      .matches(
        /^[^\d].*\.com$/,
        "Email can't start with a number & must end with .com"
      ),
    user_phone: Yup.string()
      .required("Phone number is required")
      .min(5, "Phone number must be at least 5 characters"),
    message: Yup.string()
      .required("Message is required")
      .max(2000, "Message must not exceed 2000 characters"),
    website: Yup.string().url("Invalid URL"),
    service_categories: Yup.array().min(1, "Select at least one service"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!captchaVerified) {
    //   toast.error(
    //     "Please complete the reCAPTCHA verification before submitting."
    //   );
    //   return;
    // }

    try {
      setLoading(true);
      await validationSchema.validate(formData, { abortEarly: false });

      // Convert service_categories array to comma-separated string
      const submissionData = {
        ...formData,
        service_categories: formData.service_categories.join(", "),
      };

      const response = await axios.post(user_feedbackApi, submissionData);

      if (response.data) {
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
          service_name: "",
          package_name: "",
          website: "",
          service_categories: [],
        });
        setPhone("");
        setOpenModal(false);
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
      setLoading(false);
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

  const handlePhoneOnChange = (value) => {
    setPhone(value);
    setFormData((prevData) => ({
      ...prevData,
      user_phone: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const services = [
    "Graphics Design",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Video & Animation",
  ];

  return (
    <div className="overflow-hidden">
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="2xl"
      >
        <Modal.Body>
          <div className="w-full h-fit mx-auto ">
            <div className="rounded-lg pt-0 pb-0 px-5 md:px-5">
              <div className="text-center pb-10 md:pb-3">
                <h3 className="text-[32px] md:text-[32px] text-[#333333] font-Raleway font-bold">
                  Contact for place order
                </h3>
                <p className="text-[16px] text-[#032333] font-Raleway font-medium pt-2">
                  Send your project details through any of the following
                  channels.
                </p>
              </div>
              <div className="w-full flex gap-x-5 justify-center pt-3">
                <a
                  target="_blank"
                  href={`mailto:support@envobyte.com`}
                  className="text-[#475569] text-[16px] pt-1"
                >
                  <div className="flex  items-center gap-6 bg-[#FFFFFF] py-3  rounded-lg shadow-md p-3 border  w-[275px] ">
                    <div className="bg-[#FFF5F1] p-4 rounded-lg">
                      <img className="w-6 h-6" src="/assets/Email.png" alt="" />
                    </div>
                    <div>
                      <h3 className="text-[16px] text-[#94A3B8]">Email us</h3>
                      support@envobyte.com
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  href={`https://wa.me/8801963800900`}
                  className="text-[#475569] text-[16px] pt-1"
                >
                  <div className="flex items-center gap-6 bg-[#FFFFFF] py-3 rounded-lg shadow-md  p-3 pr-10 border  w-[275px]">
                    <div className="bg-[#FFF5F1] p-3.5 rounded-lg">
                      <img src="/assets/whatsapp.svg" alt="" />
                    </div>
                    <div>
                      <h3 className="text-[16px] text-[#94A3B8]">Whatsapp</h3>
                      +8801963800900
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-x-5 md:pt-8 md:pb-4">
                <span className="w-[50%] h-[1px] border"></span>
                <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                  Or
                </span>
                <span className="w-[50%] h-[1px] border"></span>
              </div>

              <div className="pt-4 md:pt-2" id="contact_modal">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-full max-w-2xl mx-auto"
                >
                  <div className="flex gap-x-3  w-[100%]">
                    <div className="w-[50%]">
                      <div className="mb-2 block">
                        <Label
                          className="text-[16px] font-Roboto font-normal  "
                          htmlFor="first_name"
                          value="Full Name:"
                        />
                      </div>
                      <input
                        name="first_name"
                        id="first_name"
                        type="text"
                        placeholder="Jhon Doe"
                        required
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-[50%]">
                      <div className="mb-2 block">
                        <Label
                          className="text-[16px] font-Roboto font-normal"
                          htmlFor="user_email"
                          value="Email:"
                        />
                      </div>
                      <input
                        name="user_email"
                        id="user_email"
                        type="email"
                        placeholder="jhondoe@email.com"
                        required
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        value={formData.user_email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-3 w-[100%]">
                    <div>
                      <div className="w-full lg:w-[50%">
                        <Label
                          className="text-[16px] font-Roboto font-normal"
                          htmlFor="user_phone"
                          value="Phone (Whatsapp):"
                          required
                        />
                      </div>
                      <PhoneInput
                        name="user_phone"
                        defaultCountry="us"
                        value={phone}
                        onChange={handlePhoneOnChange}
                        searchPlaceholder="Search country"
                      />
                    </div>
                    <div className="w-full lg:w-[50%]">
                      <div className="flex flex-col ">
                        <label
                          className="text-[16px] font-Roboto font-normal"
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
                    <h4 className="mb-3 text-[16px] font-Roboto font-normal">
                      Service categories you&apos;re interested In:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
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
                            className="flex font-normal text-[16px] font-Roboto "
                          >
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Roboto font-normal text-[#032333] "
                        htmlFor="message"
                        value="Project details:"
                      />
                    </div>
                    <textarea
                      className="w-full lg:w-[100%]  border border-[#CBD5E1] px-4 shadow-sm rounded-md placeholder-[#C7C7C7]"
                      id="message"
                      name="message"
                      placeholder="Write your project details..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* <div>
                    <ReCAPTCHA
                      sitekey="6LeHdPIpAAAAAJoof-1ewzeYES0jvTrJ9_g09hBQ"
                      onChange={handleCaptchaChange}
                    />
                  </div> */}

                  <div className="flex justify-end">
                    <button
                      className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-0 py-3 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300 w-[28%] font-Roboto font-normal"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                      <span>
                        <FiArrowRight className="text-[20px] mx-1" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
