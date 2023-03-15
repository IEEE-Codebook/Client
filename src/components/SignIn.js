import React, { useState } from "react";
import "../css/SignIn.css";
import "../assets/images/code-bg.jpg";
import { Navbar } from "./Navbar";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [cf_handle, setCF_handle] = useState("");

  const uploadFields = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-signup">
      <Navbar />
      <div className="SignInPage">
        <div className="sub-signin">
          <div className="welcome">
            <h1>Welcome to CodeBook!</h1>
            <br />
            <h1>SignUp</h1>
            <br />
            <div>
              <h5>Enter your Name:</h5>
              <input
                className="input"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <br />
              <h5>Enter your email:</h5>

              <input
                type="text"
                className="input"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
            </div>
            <div>
              <br />
              <h5>Choose a strong password:</h5>
              <input
                type="password"
                className="input"
                placeholder="password"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />

              <div>
                <br />
                <h5>Enter your Codeforces handle:</h5>
                <input
                  type="text"
                  placeholder="CodeForces handle"
                  className="input"
                  value={cf_handle}
                  onChange={(e) => setCF_handle(e.target.value)}
                />
              </div>
              <br />

              <button
                className="btn btn-primary-outline"
                onClick={() => uploadFields()}
              >
                SignUp
              </button>
            </div>
            <div>
              <br />
              <h5>
                <a href="/signin">Already have an account ?</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

<div>
  <div>
    <h2>CodeBook</h2>
  </div>
</div>;
