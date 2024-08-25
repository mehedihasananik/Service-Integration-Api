import React from 'react'
import { Search, Calendar, ChevronRight, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Modal } from "flowbite-react";

const BlogModal = ({openModal,setOpenModal}) => {
  return (
    <div> 
    <Modal
    show={openModal}
    onClose={() => setOpenModal(false)}
    dismissible={false}
  >
    <div className="relative bg-gradient-to-br from-[#11328F] to-[#11328F] rounded-lg p-6">
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
      >
        <X size={24} />
      </button>
      <Modal.Body>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-white mb-6 text-[30px] capitalize">
            Subscribe to receive our latest newsletters and special offers
          </h2>
          <input
            type="name"
            placeholder="Your Name"
            className="block w-[80%] p-2 mb-4 rounded-md border border-gray-300 text-gray-700"
          />
          <input
            type="email"
            placeholder="Your email"
            className="block w-[80%] p-2 mb-4 rounded-md border border-gray-300 text-gray-700"
          />
          <button className="w-[30%] bg-[#FF693B] text-white hover:bg-[#fff] py-2 rounded-md hover:text-[#000] font-semibold transition-all delay-100">
            SUBSCRIBE
          </button>
        </div>
      </Modal.Body>
    </div>
  </Modal></div>
  )
}

export default BlogModal