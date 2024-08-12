"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Rocket, X } from "lucide-react";

const WebsiteScore = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = useState({});

  function onCloseModal() {
    setOpenModal(false);
    setFormData({ name: "", email: "", phone: "", website: "" });
    setErrors({});
  }

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

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      // Here you would typically send the data to your server
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF693B] focus:border-[#FF693B] transition-colors duration-200";

  return (
    <>
      {/* Keep the existing button code */}
      <div className="flex justify-center items-center px-4 pb-3">
        <button
          className="relative overflow-hidden group bg-gradient-to-r from-[#FF693B] via-[#FF8C39] to-[#FF693B] text-white text-lg font-bold py-6 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105"
          onClick={() => setOpenModal(true)}
        >
          <span className="relative z-10 flex items-center">
            <Rocket className="w-8 h-8 mr-3 animate-launch" />
            <span className="animate-pulse">Check Your Website Score</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF693B] via-yellow-500 to-[#FF693B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-30 transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></span>
          <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white rounded-full animate-ripple"></span>
          <span className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-pulse"></span>
        </button>
      </div>
      <Modal show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Body className="p-8 bg-gradient-to-br from-white to-gray-100">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-5xl font-bold text-gray-800">
                Get Your Website Score
              </h3>
              <button
                onClick={onCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 italic">
              Submit your website for a free audit by experts.
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
                  type="text"
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
                  type="text"
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
                  type="text"
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
                  className="w-full bg-gradient-to-r from-[#FF693B] to-[#FF8C39] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF693B]"
                >
                  <span className="flex items-center justify-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Website Score
                  </span>
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebsiteScore;
