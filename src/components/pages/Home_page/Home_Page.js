import React from 'react';
import "../../../css/Home_Page.css";
import Home_Page_Submissions from './Home_Page_Submissions';
import Home_Page_Contests from './Home_Page_Contests';
function Home_Page() {
  return (
  
    <div className="container dark-mode">
      <h1 className="title">Home Page</h1>
      <div className="card-grid">
        <div className="card" id="c1">
          <h2 className="card-title">Upcoming Contests</h2>
          <Home_Page_Contests />
          <div className="card-content">
            <a href="/upcomingContests">Show More</a>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title">Recent Submissions</h2>
          <Home_Page_Submissions />
          <div className="card-content">
          <a href="/userSubmissions">Show More</a>
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
  );
}

export default Home_Page;
