"use client";
import Container from "@/Components/Container/Container";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { user_feedbackApi } from "@/config/apis";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { motion } from "framer-motion";

const ContactUsPageContent = ({ userContact }) => {
  const [phone, setPhone] = useState("");
  const [recaptchaSize, setRecaptchaSize] = useState("normal");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setRecaptchaSize(window.innerWidth < 400 ? "compact" : "normal");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            duration: 10000,
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF] min-h-screen pt-0 pb-2 lg:pb-28"
    >
      <Container>
        <motion.div
          variants={stagger}
          className="text-center mb-8 lg:mb-20 mt-4"
        >
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="relative top-0 lg:top-0 mb-4 lg:mb-0">
              <motion.img
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                src="/assets/projectLogo.svg"
                alt="Project Logo"
                className="w-16 lg:w-24"
              />
            </div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#2C3E50] mb-2 lg:mb-0"
            >
              Let&apos;s Craft Your{" "}
              <span className="text-[#FF693B]">Vision</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-xl text-[#34495E] max-w-3xl mx-auto px-4"
          >
            Share your project ideas, and we&apos;ll transform them into
            reality. Let&apos;s create something extraordinary together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          className="flex flex-col justify-center items-center xl:flex-row xl:items-start gap-8 lg:gap-16 md:px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="w-full lg:1/3 xl:w-1/2 space-y-4 lg:space-y-8"
          >
            {[
              {
                icon: "/assets/Email.png",
                title: "Email us",
                value: userContact.email,
                link: `mailto:${userContact.email}`,
              },
              {
                icon: "/assets/whatsapp.svg",
                title: "WhatsApp",
                value: userContact.phone_number,
                link: `https://wa.me/${userContact.phone_number}`,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="bg-[#ECF0F1] p-3 lg:p-5 rounded-full mr-4 lg:mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/fallback-icon.png"; // Provide a fallback icon
                    }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg lg:text-xl mb-1">{item.title}</h3>
                  <span className="text-base lg:text-2xl font-semibold text-[#2C3E50]">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-4 md:p-6 lg:p-10 md:rounded-3xl md:shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label
                    className="text-[#34495E] font-medium"
                    htmlFor="first_name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full p-3 lg:p-4 border border-[#BDC3C7] rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition"
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="John Doe"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label
                    className="text-[#34495E] font-medium"
                    htmlFor="user_email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-3 lg:p-4 border border-[#BDC3C7] rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition"
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="johndoe@email.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-4 lg:mt-8 space-y-2"
              >
                <label
                  className="text-[#34495E] font-medium"
                  htmlFor="user_phone"
                >
                  Phone (WhatsApp)
                </label>
                <PhoneInput
                  style={{
                    border: "none",
                    padding: "0",
                    marginTop: "10px !important",
                  }}
                  name="user_phone"
                  defaultCountry="usa"
                  value={phone}
                  onChange={handlePhoneOnChange}
                  className="w-full p-3 lg:p-4 border border-[#BDC3C7] rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-4 lg:mt-8 space-y-2"
              >
                <label className="text-[#34495E] font-medium" htmlFor="message">
                  Project details
                </label>
                <textarea
                  className="w-full p-3 lg:p-4 border border-[#BDC3C7] rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition"
                  id="message"
                  name="message"
                  placeholder="Describe your project vision..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <div className="mt-4 lg:mt-8 flex justify-center md:justify-start">
                <ReCAPTCHA
                  sitekey="6LeHdPIpAAAAAJoof-1ewzeYES0jvTrJ9_g09hBQ"
                  onChange={handleCaptchaChange}
                  size={recaptchaSize}
                />
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(63,105,219)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 lg:mt-10 w-full lg:w-[35%] bg-[#FF693B] text-white font-bold py-3 lg:py-5 px-4 lg:px-8 rounded-lg hover:bg-[#3d5bab] transition-all duration-300"
                type="submit"
              >
                Send Project Details
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ContactUsPageContent;
