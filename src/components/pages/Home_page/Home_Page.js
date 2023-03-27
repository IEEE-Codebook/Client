import React from 'react';
import "../../../css/Home_Page.css";
import Home_Page_Submissions from './Home_Page_Submissions';
import Home_Page_Contests from './Home_Page_Contests';
function Home_Page() {
  return (
    <div className="cbook_container cbook_dark-mode">
      <h1 className="cbook_title">Home Page</h1>
      <div className="cbook_card-grid">
        <div className="cbook_card" id="c1">
          <h2 className="cbook_card-title">Upcoming Contests</h2>
          <Home_Page_Contests />
          <div className="cbook_card-content">
            <a href="/upcomingContests">Show More</a>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Recent Submissions</h2>
          <Home_Page_Submissions />
          <div className="cbook_card-content">
          <a href="/userSubmissions">Show More</a>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Friends' Activity</h2>
          <div className="cbook_card-content">
            <p>Content for Friends' Activity</p>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Leaderboard</h2>
          <div className="cbook_card-content">
            <p>Content for Leaderboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Page;
