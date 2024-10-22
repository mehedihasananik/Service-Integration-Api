import React, { useState } from "react";
import { Modal, Checkbox } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubsCheckout from "@/Components/MyCheckout/SubsCheckout";

const OrderNowModal = ({
  serviceName,
  packageData,
  itemId,
  package_price,
  sevice_items_id,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [validationError, setValidationError] = useState(false); // Validation error state
  const [email, setEmail] = useState(""); // Email state
  const [emailError, setEmailError] = useState(""); // Email error state

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

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCheckoutValidation = () => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      return true;
    }
    return false;
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpenModal(true)}
        className="btn btn-secondary md:w-[100%] text-center py-2.5 mx-2"
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
                  className="text-3xl font-bold flex justify-center items-center text-white"
                >
                  {serviceName}
                </motion.h3>
              </Modal.Header>
              <Modal.Body className="p-8 bg-gradient-to-br from-blue-50 to-orange-50">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-white p-8 rounded-xl shadow-lg"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-3xl font-bold text-[#123390] mb-4">
                        {packageData?.package_name}
                      </h2>
                      <div className="text-right">
                        <motion.p
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="text-4xl font-bold text-[#FF693B]"
                        >
                          ${packageData?.package_price}
                          {packageData?.monthly_subscription === "1" && (
                            <span className="text-lg ml-1">/monthly</span>
                          )}
                        </motion.p>
                      </div>
                    </div>

                    <motion.p
                      variants={itemVariants}
                      className="text-xl text-gray-700 mb-6"
                    >
                      {packageData?.package_text}
                    </motion.p>

                    {/* Email Input Field */}
                    <motion.div variants={itemVariants} className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-xl text-gray-700 mb-2"
                      >
                        Enter Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="yourname@example.com"
                        value={email} // Bind the value to the email state
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(""); // Reset error on change
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
                    <div className="flex items-center">
                      <Checkbox
                        id="agree-terms"
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                        className="mr-2 h-5 w-5"
                      />
                      <label
                        htmlFor="agree-terms"
                        className="text-sm text-gray-700"
                      >
                        You confirm that you have read and accepted our{" "}
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
                    {validationError && (
                      <p className="text-red-500 mt-2">
                        Please accept the Terms & Conditions before proceeding.
                      </p>
                    )}
                  </div>
                  <div className="flex gap-x-8 justify-end">
                    <SubsCheckout
                      itemId={itemId}
                      package_price={package_price}
                      sevice_items_id={sevice_items_id}
                      isEnabled={agreeTerms}
                      setValidationError={setValidationError} // Pass the setValidationError prop
                      email={email} // Pass the email state as a prop
                      handleCheckoutValidation={handleCheckoutValidation} // Pass the validation function
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
