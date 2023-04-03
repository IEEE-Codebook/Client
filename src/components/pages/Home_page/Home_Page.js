import React, { useEffect, useState } from "react";
import "../../../css/Home_Page.css";
import HomePageSubmissions from "./Home_Page_Submissions";
import HomePageContests from "./Home_Page_Contests";
import FriendsSubmission from "./FriendsSubmission";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../../api/leaderboardSlice";
import { useNavigate } from "react-router-dom";

function Home_Page() {
  const [platform, setPlatform] = useState("");
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const { board, isLoaded ,isLoading, isError, message } = useSelector(
    (state) => state.board
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (platform == "") {
      alert("Enter Platform");
    } else {
      e.preventDefault();
      const pl = platform;
      dispatch(getBoard(pl));
      setDisplay(true);
      setPlatform("");
    }
  };

  useEffect(() => {
    if (board && isLoaded) {
      navigate("/leadresults");
    }
    setDisplay(false);
  }, [display, board, setDisplay, navigate]);

  return (
    <div className="cbook_container cbook_dark-mode">
      <h1 className="cbook_title">Home Page</h1>
      <div className="cbook_card-grid">
        <div className="cbook_card" id="c1">
          <h2 className="cbook_card-title">Upcoming Contests</h2>
          <HomePageContests />
          <div className="cbook_card-content">
            <a href="/upcomingContests">Show More</a>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Recent Submissions</h2>
          <HomePageSubmissions />
          <div className="cbook_card-content">
            <a href="/userSubmissions">Show More</a>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Friends' Activity</h2>
          <FriendsSubmission />
          <div className="cbook_card-content">
            <a href="/friendSubmissions">Show More</a>
          </div>
        </div>
        <div className="cbook_card">
          <h2 className="cbook_card-title">Leaderboard</h2>
          
          <form className="cbook_form" id="contact" action="" method="post" onSubmit={handleSubmit}>
            
             <div>
                
                
                <h4>Enter Platform name</h4>
                <input
                  className="cbook_input"
                  type="text"
                  tabIndex="1"
                  placeholder="Platform name"
                  value={platform}
                  required
                  autofocus
                  onChange={(e) => setPlatform(e.target.value)}
                />
              </div>
              <div className="login_login-button">
                <br />
                <button name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending" class="cbook_blue ">Submit</button>
                <br />
                <br />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home_Page;
