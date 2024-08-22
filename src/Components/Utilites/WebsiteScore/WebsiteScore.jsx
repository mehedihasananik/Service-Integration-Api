"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Rocket, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WebsiteScore = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    resetForm();
  }

  function onCloseFeedbackModal() {
    setOpenFeedbackModal(false);
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", website: "" });
    setErrors({});
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    if (errors[id]) setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim())
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://v2admin.envobyte.com/api/web-score",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setOpenModal(false);
        resetForm();
        setOpenFeedbackModal(true);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF693B] focus:border-[#FF693B] transition-colors duration-200";

  return (
    <>
      <div className="flex justify-center items-center px-4 pb-3">
        <button
          className="relative overflow-hidden group bg-gradient-to-r from-[#FF693B] via-[#FF8C39] to-[#FF693B] text-white font-bold py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105"
          onClick={() => setOpenModal(true)}
        >
          <span className="relative z-10 flex items-center">
            <Rocket className="w-6 h-6 mr-3 animate-launch md:w-6 md:h-6" />
            <span className="animate-pulse text-sm md:text-base lg:text-lg">
              Check Your Website Score
            </span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF693B] via-yellow-500 to-[#FF693B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-30 transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-3xl animate-ping"></span>
          <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-300 rounded-3xl animate-ping"></span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white rounded-3xl animate-ripple"></span>
          <span className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-3xl animate-pulse"></span>
        </button>
      </div>

      {/* Form Modal */}
      <Modal show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Body className="p-8 bg-gradient-to-br from-white to-gray-100">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-[30px] font-bold text-gray-800">
                Discover Your Website&apos;s Potential
              </h3>
              <button
                onClick={onCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 italic">
              Take the first step towards enhancing your digital footprint with
              a free website audit from our expert team at Envobyte. Submit your
              site now and let us help you unlock its full potential!
            </p>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="https://www.example.com"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
                {errors.website && (
                  <p className="text-red-500 text-xs mt-1">{errors.website}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#FF693B] to-[#FF8C39] text-white font-bold py-3 px-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF693B] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Rocket className="w-5 h-5 mr-2" />
                        Get Website Score
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/* Animated Feedback Modal */}
      <AnimatePresence>
        {openFeedbackModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.5, y: -100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-5 text-2xl font-bold text-gray-800"
                >
                  Submitted!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600"
                >
                  Thanks for submitting your website. We will audit your website
                  and get back to you soon.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <button
                    onClick={onCloseFeedbackModal}
                    className="px-4 py-2 bg-[#FF693B] text-white rounded-3xl hover:bg-[#FF8C39] transition-colors duration-300"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebsiteScore;
