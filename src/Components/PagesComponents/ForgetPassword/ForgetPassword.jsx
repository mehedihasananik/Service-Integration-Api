"use client";
import React, { useState } from "react";
import { Label, Spinner, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import { FiArrowRight } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true while data is being fetched

    try {
      const response = await axios.post(
        "http://192.168.5.239:8000/api/reset_password",
        {
          email,
        }
      );
      toast.success(response.data.msg);
    } catch (error) {
      // console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading back to false after response or error
      setEmail(""); // Clear the input field
    }
  };

  return (
    <div className="login_singUp">
      <Container>
        <div className="w-full h-[90vh] flex justify-center items-center">
          <div className="shadow-md border rounded-lg py-10 px-10 md:py-10 md:px-12">
            <div className="text-center pb-5 md:pb-10">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Forgot password?
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
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="email1"
                      value="Email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    icon={HiMail}
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <>
                      {" "}
                      <Spinner aria-label="Default status example" />{" "}
                      <h3 className="mx-3">Sending mail</h3>{" "}
                    </>
                  ) : (
                    "Reset Password"
                  )}{" "}
                  {/* Show "Loading..." text while loading */}
                  <span>
                    <FiArrowRight className="text-[20px] mx-1" />
                  </span>
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center pt-5 md:pt-8">
              <div className="text-[14px] font-Raleway font-[500] gap-1">
                <span className="text-[#032333]"> Have an account? </span>
                <Link
                  href="/login"
                  className='text-[#FF693B] border-b border-[#FF693B] border-["1px solid"] font-[500]'
                >
                  Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
