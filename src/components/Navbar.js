import React from "react";

const NavBar = () => {

  return (
    <nav>
      <div class="logo-text">
        <a href="/">
          <img
            src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
            alt="Logo"
          />
        </a>
        <a href="/">CODEBOOK</a>
      </div>
      <div class="nav-links">
        <a href="#0">About</a>
        <a href="/login">Login</a>

        <a href="/signup">Signup</a>
      </div>
    </nav>
  );
};

export default NavBar;
