import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const ElegantSubscribeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenSubscribeModal');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setModalOpen(true);
        setTimeout(() => setModalVisible(true), 3000);
        sessionStorage.setItem('hasSeenSubscribeModal', 'true');
      }, 2000); // Delay before showing the modal

      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClose = () => {
    setModalVisible(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  if (!modalOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out flex items-center justify-center z-50 p-4 ${modalVisible ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-auto transform transition-all duration-300 ease-in-out ${modalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className='absolute top-4 right-4'>
              <X className="h-6 w-6" />
            </span>
          </button>

          <div className="text-center">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co/nM2nH6n/android-chrome-256x256.png"
                alt="Decorative"
                className="mx-auto rounded-full h-[100px] w-[100px] shadow-md"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Stay Inspired</h2>
            <p className="text-gray-600 mb-6">
              Join our community and receive weekly insights on business growth, industry trends, and success stories.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              />
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Subscribe Now
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              By subscribing, you agree to our <Link className='text-red-400' href={"/terms-and-conditions"}>Terms & Conditions</Link> and <Link className='text-red-400' href={"/privacy-policy"}> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ElegantSubscribeModal;