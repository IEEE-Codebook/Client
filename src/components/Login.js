import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
function Login() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
  <div>
    <button onClick={login}>
        Login
    </button>
  </div>
  )
}

export default Login;
