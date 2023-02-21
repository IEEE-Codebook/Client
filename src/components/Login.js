import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "../css/Login.css";
import google_icon from "./images/google_icon.png";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="#">
          Codebook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

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
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <br />
              <h5>Enter Password:</h5>
              <input type="password" placeholder="Password" />
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
              <div>
                <p>
                  Or use Google to sign in
                  <br />
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"
                  >
                    <img
                      src={google_icon}
                      className="google-signin-image-btn"
                    ></img>
                  </button>
                </p>
              </div>
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
