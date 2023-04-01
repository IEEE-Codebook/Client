import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column-1">
        <div className="logo-container">
          <img
            className="logo"
            src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
            alt="CodeBook Logo"
          />

          <h1>CodeBook</h1>
        </div>
        <p className="info">
          CodeBook is your one-stop-shop for tracking your coding progress and
          competing with friends. It consolidates your stats from multiple
          coding platforms and provides updates on upcoming contests. Stay
          up-to-date with your and your friends' activity, compare stats, and
          compete healthily.
        </p>
      </div>
      <div className="footer-column">
        <p className="headline-1">Your One-Stop place!</p>
      </div>
      <div className="footer-column-links">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <h1></h1>
          </li>
          <li>
            <a href="https://github.com/IEEE-Codebook">GitHub repo</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <p className="headline">Elevate your Coding Game with CodeBook!</p>
      </div>
    </footer>
  );
}

export default Footer;
