import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../api/authSlice";
import "../css/Navbar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="navbar navbar-fixed-top">
      <div className="logo-text">
        <a href="/">
          <img
            src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
            alt="Logo"
          />
        </a>
        <a href="/">CODEBOOK</a>
      </div>
      {!user ? (
        <div className="nav-links">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      ) : (
        <div className="nav-links">
          <a href="/profile/me">profile</a>
          <button onClick={handleLogout}> logout</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
