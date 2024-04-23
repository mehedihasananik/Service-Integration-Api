"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";

const ForgetPassword = () => {
  return (
    <div className="login_singUp">
      <Container>
        {/* login */}
        <div className="w-full h-[90vh] flex justify-center items-center">
          <div className="shadow-md  border rounded-lg py-10 px-10  md:py-10 md:px-12">
            {/* title */}
            <div className="text-center pb-5 md:pb-10">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Forgot password?
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold pt-3">
                You can reset your password here.
              </p>
            </div>

            {/* form */}
            <div className="pt-2 md:pt-2">
              <form className="flex max-w-md flex-col gap-4">
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
                    placeholder="Your email address"
                    required
                  />
                </div>

                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                >
                  Reset Password{" "}
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
                 Have an account?{" "}
                </span>
                <Link
                  href={"/login"}
                  className=' text-[#FF693B]  border-b border-[#FF693B] border-["1px solid"] font-[500]'
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
