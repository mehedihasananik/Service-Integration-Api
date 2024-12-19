"use client";
import ComboContainer from "@/Components/Container/ComboContainer";
import { user_feedbackApi } from "@/config/apis";
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
  const [isLoading, setIsLoading] = useState(false); // State for loading

  // Handle form submission
  const onSubmit = async (data) => {
    // Set loading to true when the form is being submitted
    setIsLoading(true);
    setResponseMessage(""); // Reset any previous message

    // Create FormData object
    const form = new FormData();
    form.append("first_name", data.first_name);
    form.append("user_email", data.user_email);
    form.append("user_phone", data.user_phone);
    form.append("website", data.website);
    form.append("message", data.message);

    try {
      // Send the POST request
      const response = await fetch(user_feedbackApi, {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      console.log(result);

      // Check if the response was successful
      if (result.success) {
        setIsSuccess(true);
        setResponseMessage("Your form has been successfully submitted!"); // Success message

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
    } finally {
      // Set loading to false once the request is complete
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact_us"
      className="contactusbg text-white py-10 md:py-[5%]"
    >
      <ComboContainer>
        <div className="w-full mx-auto px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0 md:gap-y-10 lg:gap-y-0">
          {/* Left Side: Contact Form */}
          <div className="space-y-6 md:border md:border-[#E1E4ED26]  md:p-7 rounded-lg">
            <div className="space-y-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 font-Inter">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        id="first_name"
                        type="text"
                        placeholder="John Smith"
                        {...register("first_name", {
                          required: "Name is required",
                        })}
                        className="mt-2 p-3 w-full bg-transparent  text-[rgba(255, 255, 255, 0.50)]  transition-all duration-300 rounded-lg border border-[rgba(241,243,247,0.30)] placeholder:text-[#919497]"
                      />

                      {errors.first_name && (
                        <p className="text-red-500 text-sm">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="user_email"
                        className="block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="user_email"
                        type="email"
                        placeholder="support@envobyte.com"
                        {...register("user_email", {
                          required: "Email is required",
                        })}
                        className="mt-2 p-3 w-full bg-transparent  text-[rgba(255, 255, 255, 0.50)]  transition-all duration-300 rounded-lg border border-[rgba(241,243,247,0.30)] placeholder:text-[#919497]"
                      />
                      {errors.user_email && (
                        <p className="text-red-500 text-sm">
                          {errors.user_email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="user_phone"
                        className="block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        id="user_phone"
                        type="text"
                        placeholder="+1 (667) 777 2477"
                        {...register("user_phone", {
                          required: "Phone is required",
                        })}
                        className="mt-2 p-3 w-full bg-transparent  text-[rgba(255, 255, 255, 0.50)]  transition-all duration-300 rounded-lg border border-[rgba(241,243,247,0.30)] placeholder:text-[#919497]"
                      />
                      {errors.user_phone && (
                        <p className="text-red-500 text-sm">
                          {errors.user_phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium"
                      >
                        Website
                      </label>
                      <input
                        id="website"
                        type="text"
                        placeholder="www.envobyte.com"
                        {...register("website", {
                          required: "Website is required",
                        })}
                        className="mt-2 p-3 w-full bg-transparent  text-[rgba(255, 255, 255, 0.50)]  transition-all duration-300 rounded-lg border border-[rgba(241,243,247,0.30)] placeholder:text-[#919497]"
                      />
                      {errors.website && (
                        <p className="text-red-500 text-sm">
                          {errors.website.message}
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
                      className="mt-2 p-3 w-full bg-transparent  text-[rgba(255, 255, 255, 0.50)]  transition-all duration-300 rounded-lg border border-[rgba(241,243,247,0.30)] placeholder:text-[#919497]"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-4 bg-white whitespace-nowrap cursor-pointer text-[#0A2C8C] font-bold  hover:bg-transparent border hover:text-white hover:border-white font-Inter text-[14px] py-3 px-6 rounded-lg   transition"
                    disabled={isLoading} // Disable the button during loading
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        Submitting...
                      </div>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </form>

              {responseMessage && (
                <div
                  className={`mt-4 text-lg font-semibold ${
                    isSuccess ? "text-white" : "text-red-500"
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="space-y-3 mt-3 md:mt-7 lg:mt-0">
            <h2 className="text-[25px] md:text-[48px] font-bold leading-[50px] xll:w-[60%]">
              Let us know what you think!
            </h2>
            <p className="text-[16px] ">
              Got something on your mind? Share it with us! Drop a message, and
              we&apos;ll respond quickly to assist you.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@envobyte.com" // Mailto link to send an email
                className="flex gap-x-5 items-center"
              >
                <div className=" w-[46px] h-[46px]">
                  <img
                    className="w-[46px] h-[46px]"
                    src="/assets/email3.png"
                    alt="Email Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email:</h3>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-sm">support@envobyte.com</p>
                    <img src="/assets/External_Link.png" alt="" />
                  </div>
                </div>
              </a>
              <div className="w-[70%]  border-[1px] border-[#E1E4ED26]  " />
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/16677772477" // WhatsApp link to initiate chat
                target="_blank"
                rel="noopener noreferrer" // Open link in a new tab safely
                className="flex gap-x-5 items-center"
              >
                <div className=" w-[46px] h-[46px] ">
                  <img
                    className="w-[46px] h-[46px]"
                    src="/assets/combowhatsapp.png"
                    alt="WhatsApp Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Whatsapp:</h3>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-sm">+1 (667) 777 2477</p>
                    <img src="/assets/External_Link.png" alt="" />
                  </div>
                </div>
              </a>
              <div className="w-[70%]  border-[1px] border-[#E1E4ED26]  " />
            </div>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/envobyte" // LinkedIn URL
                target="_blank"
                rel="noopener noreferrer" // Open link in a new tab safely
                className="flex gap-x-5 items-center"
              >
                <div className=" w-[46px] h-[46px] ">
                  <img
                    className="w-[46px] h-[46px]"
                    src="/assets/linkedinCombo.png"
                    alt="LinkedIn Icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LinkedIn:</h3>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-sm">www.linkedin.com/company/envobyte</p>
                    <img src="/assets/External_Link.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </ComboContainer>
    </section>
  );
}
