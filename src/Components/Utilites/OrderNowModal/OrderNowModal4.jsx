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

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-secondary md:w-[100%] text-center py-2.5 mx-2"
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
          {/* Header - Fixed */}
          <Modal.Header className="bg-gradient-to-r from-[#123390] to-[#1a4bc1] border-none flex-shrink-0">
            <div className="flex items-center justify-center w-full gap-2">
              <Package className="w-6 h-6 text-white" />
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                {serviceName}
              </h3>
            </div>
          </Modal.Header>

          {/* Body - Scrollable */}
          <Modal.Body className="bg-gradient-to-br from-white to-blue-50 p-4 md:p-6 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Package Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold text-[#123390]">
                    {packageData?.package_name}
                  </h2>
                  <div className="text-left md:text-right">
                    <p className="text-3xl font-bold text-[#FF693B]">
                      ${packageData?.package_price}
                      {packageData?.monthly_subscription === "1" && (
                        <span className="text-lg ml-1 text-gray-600">
                          /monthly
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-6">
                  {packageData?.package_text}
                </p>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-[#123390]" />
                    <h4 className="text-xl font-semibold text-[#123390]">
                      What&apos;s included:
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {packageData?.package_details?.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 animate-fadeIn"
                        style={{ animationDelay: `${index * 150}ms` }}
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

          {/* Footer - Fixed */}
          <Modal.Footer className="bg-gray-50 border-t p-6 flex-shrink-0">
            <div className="w-full space-y-4">
              <div className="flex items-center   gap-3">
                <div>
                  <Checkbox
                    id="agree-terms"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    className="mt-1"
                  />
                </div>
                <div className="mt-1.5">
                  <label
                    htmlFor="agree-terms"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    I confirm that I have read and accepted{" "}
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
