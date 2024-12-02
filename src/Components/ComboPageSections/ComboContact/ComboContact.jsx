"use client";
import ComboContainer from "@/Components/Container/ComboContainer";
import Container from "@/Components/Container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ComboContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    // Create FormData object
    const form = new FormData();
    form.append("name", data.name);
    form.append("email", data.email);
    form.append("phone", data.phone);
    form.append("company", data.company);
    form.append("message", data.message);

    try {
      // Send the POST request
      const response = await fetch(
        "http://192.168.10.16:8000/api/comboservices/contact-us/",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();
      console.log(result);

      // Check if the response was successful
      if (result.success) {
        setIsSuccess(true);
        setResponseMessage(result.message); // Display the success message from response

        // Reset the form fields after successful submission
        reset();
      } else {
        setIsSuccess(false);
        setResponseMessage("There was an issue submitting your form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact_us"
      className="bg-[#0A2C8C] text-white py-10 md:py-[5%]"
    >
      <ComboContainer>
        <div className="w-full mx-auto px-0 grid grid-cols-1 md:grid-cols-2 gap-x-20">
          {/* Left Side: Contact Form */}
          <div className="space-y-6 border border-gray-600  md:p-7 rounded-lg">
            <div className="space-y-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                        className="mt-1 p-3 w-full bg-white text-black rounded-lg border border-gray-300"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="support@envobyte.com"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        className="mt-1 p-3 w-full bg-white text-black rounded-lg border border-gray-300"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="+1 (667) 777 2477"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        className="mt-1 p-3 w-full bg-white text-black rounded-lg border border-gray-300"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Envobyte"
                        {...register("company", {
                          required: "Company is required",
                        })}
                        className="mt-1 p-3 w-full bg-white text-black rounded-lg border border-gray-300"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      id="message"
                      placeholder="Type your message here..."
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="mt-1 p-3 w-full bg-white text-black rounded-lg border border-gray-300"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-4 bg-[#536BAE] text-white font-bold py-3 px-6 rounded-lg hover:text-black hover:bg-white transition"
                  >
                    Send message
                  </button>
                </div>
              </form>

              {responseMessage && (
                <div
                  className={`mt-4 text-lg font-semibold ${
                    isSuccess ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="space-y-6">
            <h2 className="text-[25px] md:text-[48px] font-bold leading-none">
              Let us know what <br /> you think!
            </h2>
            <p className="text-[16px] ">
              Got something on your mind? Share it with us! Drop a message, and
              we'll respond quickly to assist you.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@envobyte.com" // Mailto link to send an email
                className="flex gap-x-5 items-center"
              >
                <div className="border border-gray-600 h-[45px] w-[45px] flex items-center justify-center rounded-md">
                  <img
                    className="w-[24px] h-[24px]"
                    src="/assets/Emailbg.png"
                    alt="Email Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Business:</h3>
                  <p className="text-sm">support@envobyte.com</p>
                </div>
              </a>
              <hr className="w-[70%] border-[0.5px] border-gray-400" />
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/16677772477" // WhatsApp link to initiate chat
                target="_blank"
                rel="noopener noreferrer" // Open link in a new tab safely
                className="flex gap-x-5 items-center"
              >
                <div className="border border-gray-600 h-[45px] w-[45px] flex items-center justify-center rounded-md">
                  <img
                    className="w-[24px] h-[24px]"
                    src="/assets/combowhatsapp.png"
                    alt="WhatsApp Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Whatsapp:</h3>
                  <p className="text-sm">+1 (667) 777 2477</p>
                </div>
              </a>
              <hr className="w-[70%] border-[0.5px] border-gray-400" />
            </div>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/envobyte" // LinkedIn URL
                target="_blank"
                rel="noopener noreferrer" // Open link in a new tab safely
                className="flex gap-x-5 items-center"
              >
                <div className="border border-gray-600 h-[45px] w-[45px] flex items-center justify-center rounded-md">
                  <img
                    className="w-[24px] h-[24px]"
                    src="/assets/linkedinCombo.png"
                    alt="LinkedIn Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LinkedIn:</h3>
                  <p className="text-sm">www.linkedin.com/company/envobyte</p>
                </div>
              </a>
              <hr className="w-[70%] border-[0.5px] border-gray-400" />
            </div>
          </div>
        </div>
      </ComboContainer>
    </section>
  );
}
