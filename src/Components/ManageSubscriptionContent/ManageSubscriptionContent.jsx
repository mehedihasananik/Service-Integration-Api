import React from "react";
import Container from "../Container/Container";

const ManageSubscriptionContent = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] space-y-8 md:space-y-0 md:space-x-[5%]">
        {/* Subscribe Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-md w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
            Subscribe to Our Newsletter
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 text-gray-800"
              >
                Your Name
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-800"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-[60%] py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Unsubscribe Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-md w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
            Unsubscribe from Emails
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Enter your email address to unsubscribe.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="unsubscribe-email"
                className="block text-sm font-medium mb-2 text-gray-800"
              >
                Your Email
              </label>
              <input
                type="email"
                id="unsubscribe-email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-[60%] py-3 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-200"
              >
                Unsubscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ManageSubscriptionContent;
