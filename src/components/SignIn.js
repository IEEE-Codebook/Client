import React, { useState } from "react";
import "../css/SignIn.css";
import google_icon from "./images/google_icon.png";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

      <div className="SignInPage">
        <div className="sub-signin">
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
            <h1>SignUp</h1>
            <br />
            <div>
              <h5>Enter your Name:</h5>
              <input
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
                placeholder="password"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />
              <br />
              <br />
              <button onClick={() => uploadFields()}>SignUp</button>
              <div>
                <p>
                  <br />
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
