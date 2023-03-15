import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "../css/Login.css";
import { Navbar } from "./Navbar";

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
    <div className="main-login">
      <Navbar />

      <div className="LoginPage">
        <div className="sub-login">
          <div>
            <div className="imgs">
              <div className="container-image">
                {/* <img
                  src={profile}
                  alt="....image"
                  className="profile-image"
                ></img> */}
              </div>
            </div>
            <h1>Welcome to CodeBook!</h1>
            <br />
            <h1>Login</h1>
            <br />
            <div>
              <h5>Enter Username:</h5>
              <input className="input" type="text" placeholder="Username" />
            </div>
            <div>
              <br />
              <h5>Enter Password:</h5>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="login-button">
              <br />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
              <br />
              <br />
            </div>
            <div>
              <p className="link">
                Don't have an account? <a href="#">Sign Up</a> here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
