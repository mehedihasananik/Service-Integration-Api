"use client";

import { Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="login_singUp">
      <Container>
        {/* login */}
        <div className="w-full h-[90vh] flex justify-center items-center">
          <div className="shadow-md  border rounded-lg py-10 px-10  md:py-10 md:px-12">
            {/* title */}
            <div className="text-center pb-5 md:pb-10">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Reset Your Password
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold pt-3">
                You can reset your password here.
              </p>
            </div>

            {/* form */}
            <div className="pt-2 md:pt-2">
              <form className="flex max-w-md flex-col gap-4">
                <div>
                  <div className="mb-2 block relative">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="password1"
                      value="Password"
                    />
                    <TextInput
                      id="password1"
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle password visibility
                      placeholder="Enter your password"
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
                </div>{" "}
                <div>
                  <div className="mb-2 block relative">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="confirmPassword"
                      value="Confirm Password"
                    />
                    <TextInput
                      id="confirmPassword1"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute top-6 inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                >
                  Reset Password Now{" "}
                  <span>
                    <FiArrowRight className="text-[20px] mx-1" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResetPassword;
