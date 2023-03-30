import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { login } from "../../api/authSlice";
import Spinner from "../Spinner";
import "../../css/Login.css";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    console.log(user);
    if (isError) {
      alert(message);
    }
    if (user) navigate("/home");
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(login(user));
    setEmail("");
    setPasword("");
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="login_main-login">
      <div className="login_LoginPage">
        <div className="login_sub-login">
          <div>
            <div className="login_imgs">
              <div className="login_container-image"></div>
            </div>
            <h1>Welcome to CodeBook!</h1>
            <br />
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Enter email:</h5>
                <input
                  className="login_input"
                  type="Email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <br />
                <h5>Enter Password:</h5>
                <input
                  className="login_input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                />
              </div>
              <div className="login_login-button">
                <br />
                <button
                  className="login_btn login_btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  Login
                </button>
                <br />
                <br />
              </div>
            </form>
            <div>
              <p className="login_link">
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
