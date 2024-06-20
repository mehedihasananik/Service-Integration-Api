import dynamic from "next/dynamic";

// Use dynamic import to import the component only on the client side
const GoogleOneTapLoginComponent = dynamic(
  () => import("./GoogleOneTapLogin"),
  { ssr: false }
);

const GoogleOneTapLoginWrapper = () => {
  return <GoogleOneTapLoginComponent />;
};

export default GoogleOneTapLoginWrapper;
