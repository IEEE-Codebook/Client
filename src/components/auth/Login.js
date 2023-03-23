import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api/authSlice";
import "../../css/Login.css";

function Login() {
  const dispatch = useDispatch();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

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
