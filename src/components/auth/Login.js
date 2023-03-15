import React from "react";
import "../../css/Login.css";
import google_icon from "../../images/google_icon.png";

function Login() {
  return (
    <div>
      <div className="LoginPage">
        <div className="sub-login">
          <div>
            <div className="imgs">
              <div className="container-image">
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
                      alt="goolge login"
                    ></img>
                  </button>
                </p>
              </div>
            </div>
            <div>
              <p className="link">
                Don't have an account? <a href="/signup">Sign Up</a> here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
