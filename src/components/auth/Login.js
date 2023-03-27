import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { login, reset } from "../../api/authSlice";
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

    dispatch(reset());
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
    <div className="main-login">
      <div className="LoginPage">
        <div className="sub-login">
          <div>
            <div className="imgs">
              <div className="container-image"></div>
            </div>
            <h1>Welcome to CodeBook!</h1>
            <br />
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Enter email:</h5>
                <input
                  className="input"
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
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                />
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
            </form>
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
