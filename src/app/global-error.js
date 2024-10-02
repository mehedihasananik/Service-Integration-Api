"use client";

export default function GlobalError({ error, reset }) {
  const handleHardRefreshAndNavigate = () => {
    window.location.replace("/"); // Hard refresh and navigate to "/"
  };

  return (
    <html>
      <body className="">
        <div className="w-full  h-screen flex items-center justify-center bg-red-200 text-red-800 font-sans">
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
            <p className="mb-4">Please refresh the page from below:</p>
            <button
              onClick={handleHardRefreshAndNavigate}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Refresh Now
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
