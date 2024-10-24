"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRightIcon, PaperclipIcon, CheckCircle, Send } from "lucide-react";

const ServiceRequirementContent = () => {
  const [attachment, setAttachment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      requirement: "",
    },
  });

  // Handle file change
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company);
      formData.append("website", data.website);
      formData.append("requirement", data.requirement);
      if (attachment) {
        formData.append("attachment", attachment);
      }

      // Make API call
      const response = await fetch(
        "https://v2admin.envobyte.com/api/customer/requirement",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();
      setSubmitStatus({
        type: "success",
        message: "Requirements submitted successfully!",
      });

      // Reset form
      reset();
      setAttachment(null);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit requirements. Please try again.",
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
            {/* Status message */}
            {submitStatus.message && (
              <div
                className={`p-4 rounded-xl ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

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

              {/* Website Field */}
              <div className="space-y-2 group">
                <label className="block text-sm font-medium text-[#123390] group-hover:text-[#FF693B] transition-colors">
                  Website URL
                </label>
                <input
                  type="url"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.website ? "border-red-500" : "border-gray-200"
                  } focus:border-[#FF693B] focus:ring-4 focus:ring-[#FF693B]/10 transition-all duration-300 bg-gray-50/50 hover:border-[#FF693B]/50`}
                  placeholder="https://example.com"
                  {...register("website", {
                    required: "Website URL is required",
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
                rows="4"
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

            {/* File Upload Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#123390]">
                Additional Documents
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
              className="w-full bg-gradient-to-r from-[#FF693B] to-[#123390] text-white py-4 px-8 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-[#FF693B]/20 transition-all duration-300 flex items-center justify-center group relative overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? "Submitting..." : "Submit Requirements"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#123390] to-[#FF693B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>

        <div className="text-center mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[#123390]">
            <CheckCircle className="w-5 h-5" />
            <p className="text-sm font-medium">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequirementContent;
