import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import axios from "axios";

const GoogleOneTapLogin = () => {
  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    onSuccess: (response) => {
      // console.log(response);
      axios
        .post("https://admin.envobyte.com/api/auth/google-onetap", {
          userData: response,
        })
        .then((res) => {
          console.log("Response from backend:", res.data);
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
        });
    },
    googleAccountConfigs: {
      client_id:
        "432851075453-f8vjmfovd52kgev2v35l8q7df1sv3080.apps.googleusercontent.com",
      cancel_on_tap_outside: false,
    },
  });

  return null;
};

export default GoogleOneTapLogin;