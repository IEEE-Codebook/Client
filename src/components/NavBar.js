import React from "react";
import "../css/Navbar.css"
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav>
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
          <a href="#0">About</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      ) : (
        <div className="nav-links">
          <a href="/profile">profile</a>

          <a href="/signup">logout</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
