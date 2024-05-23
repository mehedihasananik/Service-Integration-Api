"use client";

import { Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import React, { useState, useEffect } from "react";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    const tokenParam = url.searchParams.get("token");
    setToken(tokenParam);
  }, [router]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        "http://192.168.10.16:8000/api/new-password",
        {
          email,
          password,
          confirmPassword,
          token,
        }
      );
      if (response.status === 200) {
        alert("Password reset successfully");
      }
    } catch (error) {
      console.error("There was an error resetting the password!", error);
      alert("Failed to reset password.");
    }
  };

  return (
    <div className="login_singUp">
      <Container>
        <div className="w-full h-[90vh] flex justify-center items-center">
          <div className="shadow-md border rounded-lg py-10 px-10 md:py-10 md:px-12">
            <div className="text-center pb-5 md:pb-10">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Reset Your Password
              </h3>
              <p className="text-[16px] text-[#032333] font-Raleway font-semibold pt-3">
                You can reset your password here.
              </p>
            </div>
            <div className="pt-2 md:pt-2">
              <form
                className="flex max-w-md flex-col gap-4"
                onSubmit={handleSubmit}
              >
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
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Reset Password Now
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
