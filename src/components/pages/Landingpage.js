import React from "react";

import "../../css/Landingpage.css";

const Landingpage = () => {
  return (
    <div className="landing_App">
      <header>
        <h1>Welcome to CODEBOOK!</h1>
        <h3>Where coding is not just a skill, it's a passion!!</h3>
        <br />
        <h5>Join the amazing community of </h5>
        <h3>10,000+</h3> <h5> coders!!</h5>
      </header>

      {/* User Count */}

      <section className="page-contain">
        <a href="#0" className="data-card">
          <h3 className="head3">10,000+</h3>
          <h4 className="head4">Users</h4>
        </a>
        <a href="#0" className="data-card">
          <h3 className="head3">5,000+</h3>
          <h4 className="head4">Daily Logins</h4>

          <span className="link-text"></span>
        </a>
      </section>
      <div className="feature_container">
        <div className="features">
          <h1>Features</h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>#1</h2>
                <h3>Upcoming Contests</h3>
                <p>
                  Get to know the details about upcoming contests happening on
                  various coding platforms
                </p>
                <a href="/upcomingContests">Know More</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>#2</h2>
                <h3>Friends' Recent Submissions</h3>
                <p>
                  Get to know the recent submissions of all your friends
                </p>
                <a href="/login">Know More</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>#3</h2>
                <h3>Code Collaboration</h3>
                <p>
                  Work with others in real time to complete projects and learn
                  together
                </p>
                <a href="/signup">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Suitable Footer */}

      <footer className="footer-distributed">
        <div className="footer-left">
          <img
            src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
            className="image"
            height={"50px"}
            alt=""
          />
          <h3>CODEBOOK</h3>

          <div className="footer-links">
            <a href="#0">Home</a> · <a href="#0">Blog</a> ·{" "}
            <a href="#0">About</a> ·<a href="#0">Faq</a> ·{" "}
            <a href="#0">Contact</a>
          </div>

          <div className="footer-icons">
            <a href="#0">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-round-icon.png"
                height={"50px"}
                alt=""
              />
            </a>
            <a href="#0">
              <img
                src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                height={"50px"}
                alt=""
              />
            </a>
            <a href="#0">
              <img
                src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"
                height={"50px"}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email"></input>
            <textarea name="message" placeholder="Message"></textarea>
            <button className="button-27">Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
