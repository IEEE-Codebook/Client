import React, { useState } from 'react';
import contests from "./Contests"
import "../css/Landing_page.css";


const Landing_page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const[uc,suc]=useState(false)


function handleClick(event){
  // const ad=event.target.value
  // suc(true)
<contests />
}

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav>
        <div className='cbook'>
          <img src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg" className='image' height={"50px"} alt="" />
          <div className='codebook'>
        <a href="#" ><h1>CODEBOOK</h1></a>
        </div>
        
        </div>
        <div className='navbar'>
        <a href= '#'>About</a>
        <a href="#">SignUp</a>
        {isLoggedIn ? (
          <a href="#" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </a>
        ) : (
          <a href="#" onClick={() => setIsLoggedIn(true)}>
            Log In
          </a>
        )}
        </div>
      </nav>

      {/* Landing Header */}
      <header>
        <h1>Welcome to CODEBOOK!</h1>
          <h5>Join the amazing community of 10,000+ coders!!</h5>
      </header>

      {/* User Count */}
        




        <section class="page-contain">
  <a href="#" class="data-card">
    <h3 className='head3'>10,000+</h3>
    <h4 className='head4'>Users</h4>
</a>
  <a href="#" class="data-card">
    <h3 className='head3'>5,000+</h3>
    <h4 className='head4'>Daily Logins</h4>
    
    <span class="link-text">
     
      
    </span>
  </a>
</section>
     

      {/* Features of using our website */}
      <div class='features'>
     <h1 >
      Features
     </h1>
     </div>
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>#1</h2>
        <h3>Upcoming Contests</h3>
        <p>Get to know the details about upcoming contests happening on various coding platforms</p>
        <a href="../public/index2.html">Know More</a>
        {/* <button onClick={handleClick}>Know More</button> */}
        
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>#2</h2>
        <h3>Challenges and Quizzes</h3>
        <p>Get to practice challenges and quizzes and get to know your rankings amongst your peers</p>
        <a href="#">Know More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>#3</h2>
        <h3>Code Collaboration</h3>
        <p>Work with others in real time to complete projects and learn together</p>
        <a href="#">Know More</a>
      </div>
    </div>
  </div>
</div>
    
      {/* Suitable Footer */}
      

<footer class="footer-distributed">

			<div class="footer-left">
          <img src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg" className='image' height={"50px"} alt="" />
				<h3>CODEBOOK</h3>

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					
					
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>

				

				<div class="footer-icons">

					<a href="#"><img src="https://thumbs.dreamstime.com/b/black-white-twitter-logo-icon-high-resolution-black-white-twitter-logo-white-background-vector-eps-file-available-175771728.jpg" height={"50px"}  alt="" /></a>
					<a href="#"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height={"50px"} alt="" /></a>
          <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRCcMZuMyCiIAOk0lKeQQoRWmgMV9sY330Yd7JSI&s" height={"50px"} alt="" /></a>
				</div>

			</div>

			<div class="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email"></input>
					<textarea name="message" placeholder="Message"></textarea>
					<button className='bttn'>Send</button>

				</form>

			</div>

		</footer>
    </div>
    
  );
}

export default Landing_page