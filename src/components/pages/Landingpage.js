import React from "react";

import "../../css/Landingpage.css"

const Landingpage = () => {
  
  return (
    <div className="App">
      <header>
        <h1>Welcome to CODEBOOK!</h1>
        <h3>Where coding is not just a skill, it's a passion!!</h3>
        <br />

        <h5>Join the amazing community of </h5><h3>10,000+</h3> <h5> coders!!</h5>

      </header>

      {/* User Count */}

      <section className="page-contain">
        <a href="#0" className="data-card">
          <h3 className="head3">10,000+</h3>
          <h4 className="head4">Users</h4>
        </a>
        <a href="#0" class="data-card">
          <h3 className="head3">5,000+</h3>
          <h4 className="head4">Daily Logins</h4>

          <span class="link-text"></span>
        </a>
      </section>

      {/* Features of using our website */}
      <div class="features">
        <h1>Features</h1>
      </div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
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

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>#2</h2>
              <h3>Challenges and Quizzes</h3>
              <p>
                Get to practice challenges and quizzes and get to know your
                rankings amongst your peers
              </p>
              <a href="/UserSubmission">Know More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>#3</h2>
              <h3>Code Collaboration</h3>
              <p>
                Work with others in real time to complete projects and learn
                together
              </p>
              <a href="#0">Know More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Suitable Footer */}

      <footer class="footer-distributed">
        <div class="footer-left">
          <img
            src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
            className="image"
            height={"50px"}
            alt=""
          />
          <h3>CODEBOOK</h3>

          <div class="footer-links">
            <a href="#">Home</a>      ·              <a href="#">Blog</a>   ·   <a href="#">About</a>   ·   
            <a href="#">Faq</a>   ·   <a href="#">Contact</a>
          </div>

          <div class="footer-icons">
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

        <div class="footer-right">
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