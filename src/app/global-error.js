"use client";

export default function GlobalError({ error, reset }) {
  const handleRefreshAndNavigate = () => {
    window.location.href = "/"; // Refresh and navigate to "/home"
  };

  return (
    <html>
      <body className="flex items-center justify-center h-screen bg-red-100 text-red-800 font-sans">
        <div className="text-center p-6 rounded-lg bg-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
          <p className="mb-4">Please try again later</p>
          <button
            onClick={handleRefreshAndNavigate}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Please Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
