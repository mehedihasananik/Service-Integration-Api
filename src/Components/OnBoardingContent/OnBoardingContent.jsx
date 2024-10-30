"use client";
import { useState, useEffect } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

const OnBoardingContent = () => {
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(
          "http://192.168.10.16:8000/api/onboarding/custom-website-development"
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchForm();
  }, []);

  const renderField = (field) => {
    const { id, field_type, question, placeholder, options, is_required } =
      field;

    const baseInputClasses = `
      w-full px-4 py-3 rounded-lg  border-gray-200 
      focus:border-[#FF693B]  focus:ring-[#FF693B]/20 
      outline-none transition-all duration-200
    `;

    const labelClasses = `
      block text-[#123390] font-medium mb-2 
      ${
        is_required ? "after:content-['*'] after:ml-1 after:text-[#FF693B]" : ""
      }
    `;

    switch (field_type) {
      case "text":
      case "email":
      case "number":
      case "phone":
      case "date":
      case "time":
      case "datetime":
        return (
          <div key={id} className="mb-6 group">
            <label htmlFor={id} className={labelClasses}>
              {question}
            </label>
            <input
              type={field_type}
              id={id}
              name={id}
              placeholder={placeholder}
              required={is_required === 1}
              className={baseInputClasses}
            />
          </div>
        );

      case "textarea":
        return (
          <div key={id} className="mb-6">
            <label htmlFor={id} className={labelClasses}>
              {question}
            </label>
            <textarea
              id={id}
              name={id}
              placeholder={placeholder}
              required={is_required === 1}
              rows={4}
              className={`${baseInputClasses} resize-none`}
            />
          </div>
        );

      case "select":
        return (
          <div key={id} className="mb-6">
            <label htmlFor={id} className={labelClasses}>
              {question}
            </label>
            <select
              id={id}
              name={id}
              required={is_required === 1}
              className={baseInputClasses}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.id} value={option.option_value}>
                  {option.option_text}
                </option>
              ))}
            </select>
          </div>
        );

      case "radio":
        return (
          <div key={id} className="mb-6">
            <p className={labelClasses}>{question}</p>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={id}
                    value={option.option_value}
                    required={is_required === 1}
                    className="w-4 h-4 text-[#FF693B] border-gray-300 focus:ring-[#FF693B]"
                  />
                  <span className="text-gray-700">{option.option_text}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div key={id} className="mb-6">
            <p className={labelClasses}>{question}</p>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`${id}[]`}
                    value={option.option_value}
                    className="w-4 h-4 text-[#FF693B] border-gray-300 rounded focus:ring-[#FF693B]"
                  />
                  <span className="text-gray-700">{option.option_text}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case "file":
        return (
          <div key={id} className="mb-6">
            <label htmlFor={id} className={labelClasses}>
              {question}
            </label>
            <div className="mt-1">
              <input
                type="file"
                id={id}
                name={id}
                required={is_required === 1}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#FF693B] file:text-white
                  hover:file:bg-[#FF693B]/90
                  file:cursor-pointer file:transition-colors"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
  };

  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-[#FF693B] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-3 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#123390] mb-2">
            {formData.form_name}
          </h1>
          <p className="text-gray-600">
            Please fill out the form below to get started
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {formData.fields
                .sort((a, b) => a.field_order - b.field_order)
                .map((field) => renderField(field))}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FF693B] hover:bg-[#FF693B]/90 
                  text-white font-semibold py-3.5 px-6 rounded-lg
                  transform transition-all duration-200 
                  hover:scale-[1.02] active:scale-[0.98]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center space-x-2 my-3 mt-10"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Form</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Required Fields Note */}
        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
          <AlertCircle className="w-4 h-4 mr-2" />
          <span>Required fields are marked with an asterisk (*)</span>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingContent;
