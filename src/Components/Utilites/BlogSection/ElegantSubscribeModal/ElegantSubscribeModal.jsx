"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { apiEndpoint } from "@/config/config";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .matches(
      /^[a-zA-Z][a-zA-Z\s]*\d*$/,
      "Name cannot start with special characters or numbers"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .matches(
      /^[^\d].*\.com$/,
      "Email can't start with a number & must end with .com"
    ),
});

const ElegantSubscribeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const subscriptionData = localStorage.getItem("subscriptionData");
    if (subscriptionData) {
      // User has already subscribed, don't show the modal
      return;
    }

    const hasSeenModal = sessionStorage.getItem("hasSeenSubscribeModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setModalOpen(true);
        setTimeout(() => setModalVisible(true), 300);
        sessionStorage.setItem("hasSeenSubscribeModal", "true");
      }, 2000); // Delay before showing the modal

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  const handleOutsideClick = () => {
    // Don't close the modal when clicking outside
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const formData = { name, email };

    try {
      // Validate the form data using the Yup validation schema
      await validationSchema.validate(formData, { abortEarly: false });

      const response = await fetch(`${apiEndpoint}/subscribe/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Save subscription data to localStorage
        localStorage.setItem(
          "subscriptionData",
          JSON.stringify({
            name,
            email,
            subscribedAt: new Date().toISOString(),
          })
        );

        toast.success("Thank you for subscribing!");
        setName("");
        setEmail("");
        handleClose(); // Close modal after a delay
      } else {
        const errorData = await response.json();
        setError(` ${errorData.errors?.email?.[0] || "Failed to subscribe."}`);
        toast.error(
          ` ${errorData.errors?.email?.[0] || "Failed to subscribe."}`
        );
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        err.inner.forEach((validationError) => {
          toast.error(validationError.message);
        });
      } else {
        setError("Network error. Please try again later.");
        toast.error("Network error. Please try again later.");
      }
    }
  };

  if (!modalOpen) return null;

  return (
    <>
      <Toaster />
      <div
        className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out flex items-center justify-center z-50 p-4 ${
          modalVisible ? "bg-opacity-50 backdrop-blur-sm" : "bg-opacity-0"
        }`}
      >
        <div className="absolute inset-0" onClick={handleOutsideClick} />
        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-auto transform transition-all duration-300 ease-in-out ${
            modalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-6">
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="absolute top-4 right-4">
                <X className="h-6 w-6" />
              </span>
            </button>

            <div className="text-center">
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://i.ibb.co/nM2nH6n/android-chrome-256x256.png"
                  alt="Decorative"
                  className="mx-auto rounded-full h-[100px] w-[100px] shadow-md"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                Stay Inspired
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community and receive weekly insights on business
                growth, industry trends, and success stories.
              </p>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-xs text-gray-500">
                By subscribing, you agree to our{" "}
                <Link className="text-red-400" href={"/terms-and-conditions"}>
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link className="text-red-400" href={"/privacy-policy"}>
                  {" "}
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElegantSubscribeModal;
