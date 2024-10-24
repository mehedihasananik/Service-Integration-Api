"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PaperclipIcon, Send } from "lucide-react";
import { customer_requirements } from "@/config/apis";
import toast from "react-hot-toast";

const ServiceRequirementContent = () => {
  const [attachment, setAttachment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      requirement: "",
    },
  });

  // Handle numeric input for phone
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    // Allow only one + at the start and numbers afterwards
    const newValue = value
      .replace(/[^\d+]/g, "") // Remove any character that's not a digit or +
      .replace(/^\++/, "+") // Replace multiple + at start with single +
      .replace(/(?!^)\+/g, "") // Remove any + that's not at the start
      .replace(/^([^+])/g, "$1"); // If first character isn't +, keep it as is

    e.target.value = newValue;
  };

  // Handle file change
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("company", data.company);
      formData.append("website", data.website);
      formData.append("requirement", data.requirement);
      // Only append attachment if it exists
      if (attachment) {
        formData.append("attachment", attachment);
      }

      // Make API call
      const response = await fetch(customer_requirements, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      await response.json();

      // Show success toast
      toast.success("Requirements submitted successfully!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#123390",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "10px",
        },
      });

      // Reset form
      reset();
      setAttachment(null);
    } catch (error) {
      // Show error toast
      toast.error("Failed to submit requirements. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "10px",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-5xl font-bold text-[#123390]">
            Service <span className="text-[#FF693B]">Requirements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Share your requirements with us and we&apos;ll help bring it to life
            with our expertise
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="+16677772477"
                  onInput={handlePhoneInput}
                  maxLength={16}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?\d+$/,
                      message:
                        "Please enter a valid phone number (only + and numbers allowed)",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                    maxLength: {
                      value: 16,
                      message:
                        "Phone number must not exceed 15 digits (excluding +)",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Company Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.company ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="Your Company"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Website Field - Optional */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Website URL (Optional)
                </label>
                <input
                  type="url"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.website ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="website.com"
                  {...register("website", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message:
                        "Please enter a valid URL starting with http:// or https://",
                    },
                  })}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.website.message}
                  </p>
                )}
              </div>
            </div>

            {/* Requirements Field */}
            <div className="space-y-2 group">
              <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                Project Requirements
              </label>
              <textarea
                rows="8"
                className={`w-full px-4 py-3.5 rounded-xl border ${
                  errors.requirement ? "border-red-500" : "border-gray-200"
                } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                placeholder="Tell us about your project requirements..."
                {...register("requirement", {
                  required: "Project requirements are required",
                })}
              />
              {errors.requirement && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.requirement.message}
                </p>
              )}
            </div>

            {/* File Upload Field - Optional */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#123390]">
                Additional Documents (Optional)
              </label>
              <div className="relative group">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#FF693B] transition-all duration-300 cursor-pointer bg-gray-50/50 group-hover:bg-[#FF693B]/5"
                >
                  <PaperclipIcon className="w-5 h-5 text-gray-400 mr-2 group-hover:text-[#FF693B] transition-colors" />
                  <span className="text-gray-600 group-hover:text-[#FF693B] transition-colors">
                    {attachment
                      ? attachment.name
                      : "Drag files here or click to upload"}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF693B] text-white py-4 px-8 rounded-xl font-medium text-lg hover:shadow-lg hover:bg-[#123390] transition-all duration-300 flex items-center justify-center group relative overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? "Submitting..." : "Submit Requirements"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequirementContent;
