import React from 'react';
import "../../css/Home_Page.css";

function Home_Page() {
  return (
    <>
          <nav>
        <div className='cbook'>
          <img src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg" className='image' height={"50px"} alt="" />
          <div className='codebook'>
        <a href="#" ><h1>CODEBOOK</h1></a>
        </div>
        
        </div>
        <div className='right'>
          <a href="/profile">Profile</a>
          <a href="/about">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

    <div className="container dark-mode">
      <h1 className="title">Home Page</h1>
      <div className="card-grid">
        <div className="card" id="c1">
          <h2 className="card-title">Upcoming Contests</h2>
          <div className="card-content">
            <a href="/upcomingContests">Upcoming Contests</a>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title">Recent Submissions</h2>
          <div className="card-content">
            <p>Content for Recent Submissions</p>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title">Friends' Activity</h2>
          <div className="card-content">
            <p>Content for Friends' Activity</p>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title">Leaderboard</h2>
          <div className="card-content">
            <p>Content for Leaderboard</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home_Page;
