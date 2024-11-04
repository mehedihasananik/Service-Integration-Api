"use client";
import { useState, useEffect } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { onBoardingApiData, onBoardingApiForm } from "@/config/apis";
import { useSearchParams } from "next/navigation";

const OnBoardingContent = ({ orderId }) => {
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [fileErrors, setFileErrors] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formId, setFormId] = useState(null);
  const [status, setStatus] = useState();
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(`${onBoardingApiData}/${orderId}`);
        const data = await response.json();
        setFormData(data);
        setFormId(data.id);

        const submissionStatus = localStorage.getItem(
          `form_${orderId}_submitted`
        );
        if (submissionStatus === "true" || data.submission_exists) {
          setStatus(true);
        } else {
          setStatus(false);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchForm();
  }, [orderId]);

  const handleInputChange = (id, value, isCheckbox = false, isFile = false) => {
    setFormValues((prevValues) => {
      if (
        formData?.fields.find((field) => field.id === id)?.field_type ===
        "phone"
      ) {
        const phoneDigitsOnly = value.replace(/\D/g, "");
        if (phoneDigitsOnly.length >= 5) {
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            [id]: null,
          }));
        }
      }

      if (isFile) {
        const filesArray = Array.from(value);
        const fileNames = filesArray.map((file) => file.name);
        let errors = [];

        if (filesArray.length > 4) {
          errors.push("You can upload maximum 4 files.");
        }

        const oversizedFiles = filesArray.filter(
          (file) => file.size > 30 * 1024 * 1024
        );
        if (oversizedFiles.length > 0) {
          oversizedFiles.forEach((file) =>
            errors.push(`${file.name} exceeds the max file size: 30MB limit.`)
          );
        }

        if (errors.length > 0) {
          setFileErrors((prevErrors) => ({ ...prevErrors, [id]: errors }));
          setIsFormValid(false);
          return { ...prevValues, [`field_${id}`]: [] };
        } else {
          setFileErrors((prevErrors) => ({ ...prevErrors, [id]: null }));
          setIsFormValid(true);
          return {
            ...prevValues,
            [`field_${id}`]: filesArray,
            [`fileNames_${id}`]: fileNames,
          };
        }
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

  const validatePhoneNumber = () => {
    const phoneField = formData?.fields.find(
      (field) => field.field_type === "phone"
    );
    if (phoneField) {
      const phoneValue = formValues[`field_${phoneField.id}`] || "";
      const phoneDigitsOnly = phoneValue.replace(/\D/g, "");
      if (phoneDigitsOnly.length < 5) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [phoneField.id]: "Phone number must be at least 5 digits",
        }));
        return false;
      }
    }
    return true;
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
        is_required
          ? "after:content-['*'] after:ml-1 after:text-[#FF693B] py-3"
          : ""
      }
    `;

    switch (field_type) {
      case "text":
      case "email":
      case "number":
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

      case "phone":
        return (
          <div key={id} className="mb-6 group">
            <label htmlFor={id} className={labelClasses}>
              {question}
            </label>
            <PhoneInput
              defaultCountry="us"
              value={formValues[`field_${id}`] || ""}
              onChange={(value) => handleInputChange(id, value)}
              placeholder={placeholder}
              required={is_required === 1}
            />
            {inputErrors[id] && (
              <p className="text-red-500 text-sm mt-1">{inputErrors[id]}</p>
            )}
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
              className={`${baseInputClasses} resize-y`}
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
                name={`field_${id}[]`}
                multiple
                required={is_required === 1}
                className="block w-full text-sm text-gray-500
                border
                  file:mr-4 file:py-2 file:px-4
            
                  file:text-sm file:font-semibold"
                onChange={(e) =>
                  handleInputChange(id, e.target.files, false, true)
                }
              />
              {formValues[`fileNames_${id}`] &&
                formValues[`fileNames_${id}`].length > 1 && (
                  <ul className="mt-2 text-sm text-gray-600">
                    {formValues[`fileNames_${id}`].map((fileName, index) => (
                      <li key={index}>{fileName}</li>
                    ))}
                  </ul>
                )}

              {fileErrors[id] && (
                <ul className="mt-2 text-sm text-red-500">
                  {fileErrors[id].map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isPhoneValid = validatePhoneNumber();
    if (!isPhoneValid) return;

    setIsLoading(true);
    const formDataToSend = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value[0] instanceof File) {
          value.forEach((file) => formDataToSend.append(`${key}[]`, file));
        } else {
          formDataToSend.append(key, JSON.stringify(value));
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch(
        `${onBoardingApiForm}/${formId}/submit/${orderId}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting form");
      }
      const responseData = await response.json();
      console.log("Response data:", responseData);

      setStatus(true);
      localStorage.setItem(`form_${orderId}_submitted`, "true");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === true) {
    return (
      <div className="flex flex-col items-center justify-center h-[40vh] md:h-[70vh] text-center px-5 md:px-0">
        <h2 className="font-bold text-3xl py-2"> #{orderId}</h2>
        <h3 className="text-2xl font-bold text-primary mb-3">
          {formData?.submission_exists
            ? "Requirement already submitted."
            : "Requirement Submitted Successfully!"}
        </h3>
        <p className="text-gray-700">
          {formData?.submission_exists ? (
            <>
              The order requirement has been submitted. If you would like to
              change anything, please contact{" "}
              <a
                href="mailto:support@envobyte.com"
                className="text-primary underline"
              >
                support@envobyte.com
              </a>
              .
            </>
          ) : (
            "Thank you for submitting the requirement. We will start work on the project soon."
          )}
        </p>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-[#FF693B] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-3 py-4 md:py-12 md:px-4 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-[20px] md:text-4xl font-bold text-[#123390] mb-2">
          Onboarding form for {formData.service_name}
        </h1>
        <p className="text-gray-600">
          Please fill out the form below to get started
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white md:rounded-xl md:shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {formData.fields
                .sort((a, b) => a.field_order - b.field_order)
                .map((field) => renderField(field))}

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
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
          <div className="px-6 lg:px-8 mt-0 pb-5 flex items-center justify-start text-sm text-gray-500">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Fields marked with * are required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingContent;
