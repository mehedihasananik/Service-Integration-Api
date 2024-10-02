"use client";

export default function GlobalError({ error, reset }) {
  const handleRefreshAndNavigate = () => {
    window.location.href = "/"; // Refresh and navigate to "/home"
  };

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={handleRefreshAndNavigate}>Try again</button>
      </body>
    </html>
  );
}
