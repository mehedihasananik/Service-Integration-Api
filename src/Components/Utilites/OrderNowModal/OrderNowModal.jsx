import React, { useState } from "react";
import { Modal, Checkbox, Tooltip, Button } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubsCheckout from "@/Components/MyCheckout/SubsCheckout";
import { Package } from "lucide-react";
import { VscQuestion } from "react-icons/vsc";

const OrderNowModal = ({
  serviceName,
  packageData,
  itemId,
  package_price,
  sevice_items_id,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCheckoutValidation = () => {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleTermsChange = () => {
    const newAgreeTerms = !agreeTerms;
    setAgreeTerms(newAgreeTerms);
    if (newAgreeTerms) {
      setValidationError(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpenModal(true)}
        className="btn btn-secondary my-4 lg:my-0 md:w-[100%] text-center py-2.5 mx-2"
      >
        Order Now
      </motion.button>
      <AnimatePresence>
        {openModal && (
          <Modal
            show={true}
            onClose={() => setOpenModal(false)}
            className="shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Modal.Header className="bg-[#123390] text-white p-6 text-center">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-3xl font-bold flex justify-center items-center text-white gap-x-2"
                >
                  <Package className="w-6 h-6 text-white" />
                  {serviceName}
                </motion.h3>
              </Modal.Header>
              <Modal.Body className="p-0 md:p-8 bg-gradient-to-br from-blue-50 to-orange-50">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-white p-4 md:p-8 md:rounded-xl shadow-lg"
                  >
                    <div className="flex justify-between items-center pb-4">
                      <div>
                        <h2 className="text-lg md:text-3xl font-bold text-[#123390]">
                          {packageData?.package_name}
                        </h2>
                      </div>
                      <div className="text-right p-0 m-0">
                        <motion.p
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="text-lg md:text-3xl font-bold text-[#FF693B] p-0 m-0"
                        >
                          ${packageData?.package_price}
                          {packageData?.monthly_subscription === 1 && (
                            <span className="text-lg ml-1">/monthly</span>
                          )}
                        </motion.p>
                      </div>
                    </div>

                    <motion.p
                      variants={itemVariants}
                      className="text-lg md:text-xl text-gray-700 mb-6"
                    >
                      {packageData?.package_text}
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-6">
                      <label
                        htmlFor="email"
                        className="text-lg md:text-xl text-gray-700 mb-2 font-bold flex items-center gap-x-2"
                      >
                        <span>
                          Please share your email for monthly subscription
                        </span>
                        <div className="">
                          <Tooltip
                            className="w-[170px] md:w-[170px]"
                            content={
                              <div>
                                <span>
                                  This email will be used only for subscription
                                  purpose, your data will be safe and protected.
                                </span>
                              </div>
                            }
                          >
                            <VscQuestion className="cursor-pointer mt-1" />
                          </Tooltip>
                        </div>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        className={`w-full px-4 py-2 border ${
                          emailError ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {emailError && (
                        <p className="text-red-500 mt-2">{emailError}</p>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Modal.Body>

              <Modal.Footer className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-b-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col w-full"
                >
                  <div className="w-full flex flex-col items-start mb-4">
                    <div className="relative min-h-[20px]">
                      <div className="flex items-center">
                        <Checkbox
                          id="agree-terms"
                          checked={agreeTerms}
                          onChange={handleTermsChange}
                          className={`${
                            validationError ? "border-red-500" : ""
                          } mr-2 h-5 w-5`}
                        />
                        <label
                          htmlFor="agree-terms"
                          className="text-sm text-gray-700"
                        >
                          <span>
                            You confirm that you have read and accepted our
                          </span>{" "}
                          <Link
                            className="text-[#123390] font-semibold transition-colors duration-300"
                            href="/terms-and-conditions"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          &{" "}
                          <Link
                            className="text-[#123390] font-semibold transition-colors duration-300"
                            href="/refund-policy"
                          >
                            Refund Policy.
                          </Link>
                        </label>
                      </div>
                      <AnimatePresence>
                        {validationError && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-7 top-full text-sm text-red-700 mt-1"
                          >
                            Please accept the Terms & Conditions.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex gap-x-8 justify-end">
                    <SubsCheckout
                      itemId={itemId}
                      package_price={package_price}
                      sevice_items_id={sevice_items_id}
                      isEnabled={agreeTerms}
                      setValidationError={setValidationError}
                      email={email}
                      handleCheckoutValidation={handleCheckoutValidation}
                      setEmailError={setEmailError} // Add this prop
                    />
                  </div>
                </motion.div>
              </Modal.Footer>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderNowModal;
