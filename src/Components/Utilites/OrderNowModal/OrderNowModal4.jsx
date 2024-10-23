"use client";
import { Button, Modal, Checkbox } from "flowbite-react";
import { useState } from "react";
import { Package, CheckCircle } from "lucide-react";
import Link from "next/link";
import NonSubsCheckout from "@/Components/MyCheckout/NonSubsCheckout";

const OrderNowModal4 = ({
  serviceName,
  packageData,
  itemId,
  package_price,
  sevice_items_id,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [validationError, setValidationError] = useState(false); // Add a validation error state

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-secondary mt-0 mb-4 lg:mt-0 lg:mb-0 md:w-[100%] text-center py-2.5 mx-2"
      >
        Order Now
      </button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="2xl"
        className="!z-50"
      >
        <div className="relative rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
          <Modal.Header className="bg-gradient-to-r from-[#123390] to-[#1a4bc1] border-none flex-shrink-0">
            <div className="flex items-center justify-center w-full gap-2">
              <Package className="w-6 h-6 text-white" />
              <h3 className="text-lg md:text-3xl font-bold text-white text-center">
                {serviceName}
              </h3>
            </div>
          </Modal.Header>

          <Modal.Body className="bg-gradient-to-br from-white to-blue-50 p-4 md:p-6 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg md:text-3xl font-bold text-[#123390]">
                      {packageData?.package_name}
                    </h2>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-lg md:text-3xl font-bold text-[#FF693B]">
                      ${packageData?.package_price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 md:p-5">
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
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="bg-gray-50 border-t p-6 flex-shrink-0">
            <div className="w-full space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <Checkbox
                    id="agree-terms"
                    checked={agreeTerms}
                    onChange={() => {
                      setAgreeTerms(!agreeTerms);
                      setValidationError(false); // Reset validation error when checkbox is toggled
                    }}
                    className="mt-1"
                  />
                </div>
                <div className="mt-1.5">
                  <label
                    htmlFor="agree-terms"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    <span
                      className={`${validationError ? "text-red-600" : ""}`}
                    >
                      I confirm that I have read and accepted
                    </span>{" "}
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

              <div className="flex justify-end gap-4">
                <NonSubsCheckout
                  itemId={itemId}
                  package_price={package_price}
                  sevice_items_id={sevice_items_id}
                  isEnabled={agreeTerms}
                  setValidationError={setValidationError} // Pass down validation state setter
                />
              </div>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default OrderNowModal4;
