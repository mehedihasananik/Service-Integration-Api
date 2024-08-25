import React from 'react';
import { X } from 'lucide-react';

const ElegantSubscribeModal = ({ isOpen, setOpenModal }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setOpenModal(false)}
    >
      <div
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8">
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Subscribe Now
            </h2>
            <p className="text-blue-100 mb-6">
              Get our latest newsletters and special offers!
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md border border-blue-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-6 rounded-md border border-blue-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full bg-white text-blue-600 font-semibold py-3 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              SUBSCRIBE ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantSubscribeModal;