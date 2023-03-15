import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset} from "../api/authSlice";
const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    dispatch(reset);
  }
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
        {user ? (
          <a href="/" onClick={handleLogout()}>logout</a>
        ) : (
          <div className="flex-navbar">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
