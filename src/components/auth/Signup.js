import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signup } from "../../api/authSlice";
import "../../css/SignIn.css";
import "../../images/code-bg.jpg";

const Signup = () => {
  const [name,setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [cf_handle, setCF_handle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name:name,
      email:email,
      password:password,
      codeforces:cf_handle,
    }
    dispatch(signup(user));
    console.log(user);
    setName("");
    setPasword("");
    setEmail("");
    setCF_handle("");
    navigate("/home")
  };

  return (
    <div className="signIn_main-signup">
      <div className="signIn_SignInPage">
        <div className="signIn_sub-signin">
          <div className="signIn_welcome">
            <h1>Welcome to CodeBook!</h1>
            <br />
            <h1>SignUp</h1>
            <br />
            <form onSubmit={handleSubmit}>
            <div>
              <br />
              <h5>Enter your name:</h5>
              <input
                type="name"
                className="signIn_input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
            </div>
            <div>
              <br />
              <h5>Enter your email:</h5>
              <input
                type="email"
                className="signIn_input"
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
                className="signIn_input"
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
                  className="signIn_input"
                  value={cf_handle}
                  onChange={(e) => setCF_handle(e.target.value)}
                />
              </div>
              <br />

              <button
                  className="signIn_btn signIn_btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  Sign Up
                </button>
            </div>
            </form>
            <div>
              <br />
              <h5>
                <a href="/login">Already have an account ?</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

<div>
  <div>
    <h2>CodeBook</h2>
  </div>
</div>;
