import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Go</button>
      </div>
      <div className="codebook-info">
        <img
          src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
          className="image"
          height={"50px"}
          alt=""
        />
        <h3 className="mt-3">CodeBook</h3>
        <p className="description">
          CodeBook is your one-stop-shop for tracking your coding progress and
          competing with friends. It consolidates your stats from multiple
          coding platforms and provides updates on upcoming contests. Stay
          up-to-date with your and your friends' activity, compare stats, and
          compete healthily. CodeBook simplifies the process of monitoring your
          coding progress and competition, making it a must-have tool for any
          coding enthusiast.
        </p>
      </div>
      <div className="button-group">
        <a href="/">Home</a>
        <br />
        <a href="/about">About Us</a>
        <br />
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
