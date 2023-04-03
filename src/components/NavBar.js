import { fontStyle } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../api/authSlice";
import "../css/Navbar.css";

const NavBar = () => {
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleSearch = () => {
    // alert(searchUser);
    navigate(`/profile/${searchUser}`);
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
        <a className="navbar_cb"  href="/">CODEBOOK</a>
      </div>
      <div className="left-navbar">
        <div class="input-group">
          <input
            type="text"
            class="input"
            id="Email"
            name="Email"
            placeholder="username"
            autocomplete="off"
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <buttton
            class="button--submit"
            value="Search"
            onClick={handleSearch}
          >Search</buttton>
        </div>
        {!user ? (
          <div className="nav-links">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </div>
        ) : (
          <div className="nav-links">
            <a href="/mockInterview">Interview</a>
            <a href="/profile/me">Profile</a>
            <a href="#" className="logout_btn" onClick={handleLogout}> Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
