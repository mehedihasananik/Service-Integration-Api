import "/src/styles/globals.css";

export const metadata = {
  title: "Not Found | Envobyte Ltd ",
  description: "This page is not found",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
