// UnsubscribeContent.jsx
import Container from "../Container/Container";

const ManageSubscriptionContent = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-[70vh] space-x-[15%]">
        {/* Subscribe Form */}
        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full h-[400px] flex flex-col justify-between">
          {" "}
          {/* Set fixed height */}
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
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
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[50%] py-3 rounded-md text-white bg-primary hover:bg-secondary transition duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Unsubscribe Form */}
        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full h-[400px] flex flex-col justify-between">
          {" "}
          {/* Set fixed height */}
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
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
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[50%] py-3 rounded-md text-white bg-orange-500 hover:bg-secondary transition duration-200"
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
