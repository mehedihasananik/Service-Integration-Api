"use client";
import { useState } from "react";
import { Modal, Checkbox } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NonSubsCheckout from "@/Components/MyCheckout/NonSubsCheckout";
import { Package, CheckCircle } from "lucide-react";

const OrderNowModal4 = ({
  serviceName,
  packageData,
  itemId,
  package_price,
  sevice_items_id,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [addToCart, setAddToCart] = useState("add_to_cart");
  const [checkout, setCheckout] = useState("begin_checkout");

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
  const handleOrderClick = (addToCart) => {
    // Push event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: addToCart,
      ecommerce: {
        currency: "USD",
        value: Number(packageData?.package_price),
        items: [
          {
            item_id: itemId || "",
            item_name: serviceName,
            package_name: packageData?.package_name,
            item_brand: "Envobyte Ltd",
            price: Number(packageData?.package_price),
            price_period: packageData?.monthly_subscription
              ? "monthly"
              : "one-time",
          },
        ],
      },
      "gtm.uniqueEventId": Date.now(),
    });
    // Open the modal
    setOpenModal(true);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleOrderClick(addToCart)}
        className="btn btn-secondary mt-0 mb-4 w-[100%] lg:mt-0 lg:mb-0 md:w-[100%] text-center py-2.5 mx-2"
      >
        Order Now
      </motion.button>

      <AnimatePresence>
        {openModal && (
          <Modal
            show={true}
            onClose={() => setOpenModal(false)}
            size="2xl"
            className="!z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden max-h-[90vh] flex flex-col"
            >
              <Modal.Header className="bg-gradient-to-r from-[#123390] to-[#1a4bc1] border-none flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center w-full gap-2"
                >
                  <Package className="w-6 h-6 text-white" />
                  <h3 className="text-lg md:text-3xl font-bold text-white text-center">
                    {serviceName}
                  </h3>
                </motion.div>
              </Modal.Header>

              <Modal.Body className="bg-gradient-to-br from-white to-blue-50 p-4 md:p-6 overflow-y-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <motion.div
                    variants={itemVariants}
                    className="p-6 border-b border-gray-100"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-lg md:text-3xl font-bold text-[#123390]">
                          {packageData?.package_name}
                        </h2>
                      </div>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-left md:text-right"
                      >
                        <p className="text-lg md:text-3xl font-bold text-[#FF693B]">
                          ${packageData?.package_price}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="p-3 md:p-5">
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                      {packageData?.package_text}
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#123390]" />
                        <h4 className="text-lg md:text-xl font-semibold text-[#123390]">
                          What&apos;s included:
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {packageData?.package_details?.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700 animate-fadeIn"
                          >
                            <div className="min-w-2 mt-2">
                              <div className="w-2 h-2 rounded-full bg-[#123390]" />
                            </div>
                            <span className="text-base leading-relaxed">
                              {detail.package_item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </Modal.Body>

              <Modal.Footer className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-b-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-x-2">
                    <div>
                      <Checkbox
                        id="agree-terms"
                        checked={agreeTerms}
                        onChange={() => {
                          setAgreeTerms(!agreeTerms);
                          setValidationError(false);
                        }}
                        className={`${
                          validationError ? "border-red-500" : ""
                        } mt-1.5 h-5 w-5 `}
                      />
                    </div>
                    <div className="mt-1.5">
                      <label
                        htmlFor="agree-terms"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        <span
                          className={`${
                            validationError ? "text-red-500" : ""
                          } text-[14px]`}
                        >
                          You confirm that you have read and accepted our{" "}
                        </span>
                        <Link
                          href="/terms-and-conditions"
                          className="text-[#123390] hover:text-[#1a4bc1] font-semibold 
            transition-colors duration-500 hover:underline underline-offset-4"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/refund-policy"
                          className="text-[#123390] hover:text-[#1a4bc1] font-semibold 
            transition-colors duration-500 hover:underline underline-offset-4"
                        >
                          Refund Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="h-6 pt-1">
                    {" "}
                    {/* Fixed height container for error message */}
                    <AnimatePresence>
                      {validationError && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-7  text-sm text-red-700  font-[500]"
                        >
                          Please accept the Terms & Conditions.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-end gap-4 mt-5 md:mt-0">
                    <NonSubsCheckout
                      itemId={itemId}
                      package_price={package_price}
                      sevice_items_id={sevice_items_id}
                      isEnabled={agreeTerms}
                      setValidationError={setValidationError}
                      handleOrderClick={() => handleOrderClick(checkout)}
                      checkout={checkout} // Add this prop
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

export default OrderNowModal4;
