import React from 'react'
import "../css/Mock_Interview.css";
const Mock_Interview = () => {
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
        <div className='right'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        
      </nav>

      {/* Landing Header */}
      <header>
        <h1>Welcome to our Mock Interview Platform</h1>
        <p>Practice and prepare for your next interview with our virtual platform.</p>
        <div className="button-container">
          <a href="#" className="schedule-button">
            Schedule an Interview
          </a>
          <a href="#" className="start-button">
            Start Interview Now
          </a>
        </div>
      </header>

      {/* Suitable Footer */}
      <footer>
        <p>CODEBOOK Mock Interview Platform.</p>
      </footer>
    </div>
  );
};

export default Mock_Interview