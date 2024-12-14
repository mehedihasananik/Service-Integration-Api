import AppHeader from "@/Components/Utilites/AppContents/AppHeader";
import "/src/styles/globals.css";
import AppFooter from "@/Components/Utilites/AppContents/AppFooter";

export const metadata = {
  title: "Envobyte Apps",
  description:
    "Looking for custom app development? Envobyte delivers scalable and secure apps that drive business growth, available on the Play Store with no financial barrier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://i.ibb.co/nM2nH6n/android-chrome-256x256.png"
          sizes="16x16"
        />
      </head>
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
