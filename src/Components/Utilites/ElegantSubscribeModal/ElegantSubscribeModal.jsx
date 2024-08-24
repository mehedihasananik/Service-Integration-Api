import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ElegantSubscribeModal = ({ isOpen, setOpenModal }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClose={() => setOpenModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 15 }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
             onClose={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-white text-3xl font-bold mb-4">
                  Subscribe Now
                </h2>
                <p className="text-blue-100 mb-6">
                  Get our latest newsletters and special offers!
                </p>
                
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 mb-4 rounded-md border border-blue-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 mb-6 rounded-md border border-blue-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 font-semibold py-3 rounded-md hover:bg-blue-50 transition-colors duration-300"
                >
                  SUBSCRIBE ME
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ElegantSubscribeModal;