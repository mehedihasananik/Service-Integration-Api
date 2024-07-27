import React, { useState } from "react";
import { Checkbox, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { FiArrowRight } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaPhone, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactModal = ({ openModal, setOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleLogin = async (e) => {
    // ... (keep the existing handleLogin logic)
  };

  const handlePhoneOnChange = (value, data) => {
    setPhone(value);
  };

  return (
    <div className="overflow-hidden">
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="2xl"
      >
        <Modal.Body>
          <div className="w-full h-fit mx-auto ">
            <div className="rounded-lg pt-0 pb-0 px-5 md:px-5">
              {/* title */}
              <div className="text-center pb-10 md:pb-3">
                <h3 className="text-[32px] md:text-[32px] text-[#333333] font-Raleway font-bold">
                  Contact for place order
                </h3>
                <p className="text-[16px] text-[#032333] font-Raleway font-medium pt-2">
                  Send your project details through any of the following
                  channels.
                </p>
              </div>
              <div className="w-full flex gap-x-5 justify-center pt-3">
                <a
                  target="_blank"
                  href={`mailto:support@envobyte.com`}
                  className="text-[#475569] text-[16px] pt-1"
                >
                  <div className="flex  items-center gap-6 bg-[#FFFFFF] py-3  rounded-lg shadow-md p-3 border  w-[275px] ">
                    <div className="bg-[#FFF5F1] p-4 rounded-lg">
                      <img
                        className="w-6 h-6"
                        src="https://i.ibb.co/hVTCYCp/Email.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] text-[#94A3B8]">Email us</h3>
                      support@envobyte.com
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  href={`https://wa.me/8801963800900`}
                  className="text-[#475569] text-[16px] pt-1"
                >
                  <div className="flex items-center gap-6 bg-[#FFFFFF] py-3 rounded-lg shadow-md  p-3 pr-10 border  w-[275px]">
                    <div className="bg-[#FFF5F1] p-3.5 rounded-lg">
                      <img src="/assets/whatsapp.svg" alt="" />
                    </div>
                    <div>
                      <h3 className="text-[16px] text-[#94A3B8]">Whatsapp</h3>
                      +8801963800900
                    </div>
                  </div>
                </a>
              </div>

              {/* or break */}
              <div className="flex items-center gap-x-5 md:pt-8 md:pb-4">
                <span className="w-[50%] h-[1px] border"></span>
                <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                  Or
                </span>
                <span className="w-[50%] h-[1px] border"></span>
              </div>

              {/* form */}
              <div className="pt-4 md:pt-2" id="contact_modal">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-4 w-full max-w-2xl mx-auto"
                >
                  <div className="flex gap-x-3  w-[100%]">
                    <div className="w-[50%]">
                      <div className="mb-2 block">
                        <Label
                          className="text-[16px] font-Raleway text-[#032333] font-[500]"
                          htmlFor="name"
                          value="Name"
                        />
                      </div>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        icon={HiMail}
                        placeholder="Jhon Doe"
                        required
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                      />
                    </div>
                    <div className="w-[50%]">
                      <div className="mb-2 block">
                        <Label
                          className="text-[16px] font-Raleway text-[#032333] font-[500]"
                          htmlFor="email1"
                          value="Email"
                        />
                      </div>
                      <input
                        name="email"
                        id="email1"
                        type="email"
                        icon={HiMail}
                        placeholder="jhondoe@email.com"
                        required
                        className="w-full py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="number"
                        value="Phone (Whatsapp)"
                      />
                    </div>
                    <PhoneInput
                      name="user_phone"
                      defaultCountry="us"
                      value={phone}
                      onChange={handlePhoneOnChange}
                      searchPlaceholder="Search country"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="comment"
                        value="Project details"
                      />
                    </div>
                    <textarea
                      className="w-full lg:w-[100%]  border border-[#CBD5E1] px-4 shadow-sm rounded-md placeholder-[#C7C7C7]"
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Write your project details"
                      rows={4}
                      // value={formData.message}
                      // onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="bg-[#FF693B]  text-[16px] font-semibold font-Raleway md:mt-0 py-3 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300 w-[28%]"
                      type="submit"
                    >
                      Submit
                      <span>
                        <FiArrowRight className="text-[20px] mx-1" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
