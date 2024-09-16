import AppHeader from "@/Components/Utilites/AppContents/AppHeader";
import "../globals.css";
import AppFooter from "@/Components/Utilites/AppContents/AppFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
