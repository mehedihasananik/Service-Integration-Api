"use client";
import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import Link from "next/link";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { signupApi } from "@/config/apis";
import { fetchData } from "@/config/apiRequests.js";

const SignUpContent = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .matches(
        /^[a-zA-Z][a-zA-Z\s]*$/,
        "Name cannot start with special characters or numbers"
      ),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .matches(
        /^[^\d].*\.com$/,
        "Email can't start with a number & must end with .com"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
  });
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // console.log("Form submitted"); // Add console log to check if form submission is triggered

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      // console.log("Validation passed"); // Add console log to check if validation passed

      const response = await fetchData(signupApi, "POST", formData); // Using fetchData instead of axios.post // Add console log to check if API call is successful
      // console.log(response.msg); // Add console log to check if API call is successful

      if (response?.msg) {
        setFormData({
          user_name: "",
          email: "",
          password: "",
        });
        toast.success(response?.msg);
      }
      if (response?.resultexist) {
        toast.success(response?.resultexist);
      }

      // if (response?.email[0] === "validation.unique") {
      //   toast.error("User Exits");
      // }
    } catch (error) {
      console.error("Error:", error);

      if (error.name === "ValidationError") {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="login_singUp overflow-hidden  my-5">
      <>
        <div className="w-full h-fit md:flex md:justify-center pt-5 ">
          <div className="shadow-md  border rounded-lg  py-6 px-10  md:py-10 md:px-12">
            <div className="text-center pb-5 md:pb-14">
              <h3
                style={{ whiteSpace: "nowrap" }}
                className="text-[#333333] text-[30px] md:text-[40px] font-Raleway font-bold whitespace-nowrap"
              >
                Create account
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold">
                Let&apos;s create your account
              </p>
            </div>
            <div className="flex flex-col md:flex-row pb-4 gap-y-4 md:gap-10  lg:pb-12">
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200">
                <img src="/assets/gLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Google
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md hover:border-[#FF693B] transition-all duration-200">
                <img src="/assets/fLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Facebook
                </span>
              </button>
            </div>
            <div className="flex items-center gap-x-5  md:pt-0">
              <span className="w-[50%] h-[1px] border"></span>{" "}
              <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                Or
              </span>{" "}
              <span className="w-[50%] h-[1px] border"></span>
            </div>
            <div className="pt-4 md:pt-8">
              <form
                className="flex max-w-md flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500] "
                      htmlFor="name"
                      value="Full Name"
                    />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    icon={MdPerson}
                    placeholder="Enter Your Name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500] "
                      htmlFor="email1"
                      value="Email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    icon={HiMail}
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block relative">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="password1"
                      value="Password"
                    />
                    <TextInput
                      id="password1"
                      type={showPassword ? "text" : "password"} // Toggle password visibility
                      // Show different eye icon based on visibility state
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute top-6 inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                >
                  Create Account{" "}
                  <span>
                    <FiArrowRight className="text-[20px] mx-1" />
                  </span>
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center pt-5  md:pt-8">
              <div className="text-[14px] font-Raleway font-[500] gap-1 ">
                <span className="text-[#032333]">
                  {" "}
                  Already have an account?{" "}
                </span>
                <Link
                  href={"/login"}
                  className=' text-[#FF693B]  border-b border-[#FF693B] border-["1px solid"] font-[500]'
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SignUpContent;
