import dynamic from "next/dynamic";

const GoogleOneTapLoginComponent = dynamic(
  () =>
    import("../../../Components/Utilites/GoogleSocialLogin/GoogleSocialLogin"),
  {
    ssr: false,
  }
);

const GoogleCallbackPage = () => {
  return <GoogleOneTapLoginComponent />;
};

export default GoogleCallbackPage;
