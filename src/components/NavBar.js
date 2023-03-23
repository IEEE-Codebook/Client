import React from "react";

const NavBar = () => {

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
      <div className="nav-links">
        <a href="/">About</a>
        <a href="/login">Login</a>

        <a href="/signup">Signup</a>
      </div>
    </nav>
  );
};

export default NavBar;