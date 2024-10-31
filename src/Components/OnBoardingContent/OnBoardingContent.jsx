"use client";
import { useState, useEffect } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

const OnBoardingContent = ({ orderId }) => {
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formId, setFormId] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(
          `http://192.168.10.16:8000/api/onboarding/${orderId}`
        );
        const data = await response.json();
        setFormData(data);
        setFormId(data.id);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchForm();
  }, [orderId]);

  const handleInputChange = (id, value, isCheckbox = false, isFile = false) => {
    setFormValues((prevValues) => {
      if (isFile) {
        return { ...prevValues, [`field_${id}`]: value }; // Store file object directly
      } else if (isCheckbox) {
        const updatedValues = prevValues[`field_${id}`] || [];
        const valueIndex = updatedValues.indexOf(value);

        if (valueIndex === -1) {
          updatedValues.push(value);
        } else {
          updatedValues.splice(valueIndex, 1);
        }
        return { ...prevValues, [`field_${id}`]: updatedValues };
      } else {
        return { ...prevValues, [`field_${id}`]: value };
      }
    });
  };

  const renderField = (field) => {
    const { id, field_type, question, placeholder, options, is_required } =
      field;

    const baseInputClasses = `
      w-full px-4 py-3 rounded-lg border border-gray-200 
      focus:border-[#FF693B] focus:ring-[#FF693B]/20 
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
              name={`field_${id}`}
              placeholder={placeholder}
              required={is_required === 1}
              className={baseInputClasses}
              onChange={(e) => handleInputChange(id, e.target.value)}
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
              name={`field_${id}`}
              placeholder={placeholder}
              required={is_required === 1}
              rows={4}
              className={`${baseInputClasses} resize-y`} // Allows vertical resizing
              onChange={(e) => handleInputChange(id, e.target.value)}
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
              name={`field_${id}`}
              required={is_required === 1}
              className={baseInputClasses}
              onChange={(e) => handleInputChange(id, e.target.value)}
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
                    name={`field_${id}`}
                    value={option.option_value}
                    required={is_required === 1}
                    className="w-4 h-4 text-[#FF693B] border-gray-300 focus:ring-[#FF693B]"
                    onChange={(e) => handleInputChange(id, e.target.value)}
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
            <div className="flex items-center gap-x-3">
              {options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`field_${id}[]`}
                    value={option.option_value}
                    className="w-4 h-4 text-[#FF693B] border-gray-300 rounded focus:ring-[#FF693B]"
                    onChange={(e) =>
                      handleInputChange(id, option.option_value, true)
                    }
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
                name={`field_${id}`}
                required={is_required === 1}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                   file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#FF693B] file:text-white
                  hover:file:bg-[#FF693B]/90
                  file:cursor-pointer file:transition-colors"
                onChange={(e) =>
                  handleInputChange(id, e.target.files[0], false, true)
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataToSend.append(key, JSON.stringify(value)); // Convert array to JSON string
      } else {
        formDataToSend.append(key, value); // Append file objects and other values directly
      }
    });

    try {
      const response = await fetch(
        `http://192.168.10.16:8000/api/onboarding-form/${formId}/submit/${orderId}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting form");
      }
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
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
      <div className="text-center mb-8">
        <h1 className="text-lg md:text-4xl font-bold text-[#123390] mb-2">
          Onboarding form for {formData.service_name}
        </h1>
        <p className="text-gray-600">
          Please fill out the form below to get started
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
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
                  <span>Submit your requirements</span>
                )}
              </button>
            </form>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 mt-0 pb-5 flex items-center justify-start text-sm text-gray-500">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Fields marked with * are required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingContent;
