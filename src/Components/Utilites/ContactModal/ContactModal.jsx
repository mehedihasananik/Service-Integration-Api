import React, { useState } from "react";
import { Checkbox, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { FiArrowRight } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ContactModal = ({ openModal, setOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    // ... (keep the existing handleLogin logic)
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
            <div className="rounded-lg py-10 px-5 md:px-10">
              {/* title */}
              <div className="text-center pb-10 md:pb-14">
                <h3 className="text-[32px] md:text-[32px] text-[#333333] font-Raleway font-bold">
                  Contact for order description.
                </h3>
                <p className="text-[16px] text-[#032333] font-Raleway font-semibold">
                  There are available channels for placing an order.
                </p>
              </div>

              {/* or break */}
              <div className="flex items-center gap-x-5 md:pt-0">
                <span className="w-[50%] h-[1px] border"></span>
                <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                  Or
                </span>
                <span className="w-[50%] h-[1px] border"></span>
              </div>

              {/* form */}
              <div className="pt-4 md:pt-8">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-4 w-full max-w-2xl mx-auto"
                >
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="name"
                        value="Name"
                      />
                    </div>
                    <TextInput
                      name="name"
                      id="name"
                      type="name"
                      icon={HiMail}
                      placeholder="Enter Your Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="email1"
                        value="Email"
                      />
                    </div>
                    <TextInput
                      name="email"
                      id="email1"
                      type="email"
                      icon={HiMail}
                      placeholder="Enter Your Email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="number"
                        value="Phone"
                      />
                    </div>
                    <TextInput
                      name="phone"
                      id="phone"
                      type="phone"
                      icon={HiMail}
                      placeholder="Enter Your phone"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-[16px] font-Raleway text-[#032333] font-[500]"
                        htmlFor="comment"
                        value="Your message"
                      />
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Leave a comment..."
                      required
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <button
                    className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-3 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300 w-full"
                    type="submit"
                  >
                    Submit
                    <span>
                      <FiArrowRight className="text-[20px] mx-1" />
                    </span>
                  </button>
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
