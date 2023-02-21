import React from "react";
import "../css/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="#">
          CodeBook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="profile">
        <h3>Profile</h3>
        <div className="profile-pic"></div>

        <div className="credentials">
          <p>
            <h5>Name</h5> @username <br /># of Friends
          </p>
          <button className="btn btn-warning">Edit Profile</button>
        </div>

        <div className="blue-box">
          <div className="rank">
            <h4>Rank</h4>
          </div>

          <div className="points">
            <h4>Points</h4>
          </div>
          <div className="badges">
            <h4>Badges</h4>
          </div>
        </div>
      </div>
      <div className="recent-sub">
        <h4>Recent Submissions</h4>

        <div className="daily-activity">
          <h5>Daily Activity</h5>
        </div>

        <div className="delete-account">
          <button className="btn btn-danger">Delete Account</button>
          <h1> | </h1>
          <button className="btn btn-outline-danger">Deactivate Account</button>
        </div>
      </div>

      <div className="ratings">
        <h3>Ratings</h3>
      </div>

      <div className="connected-profiles">
        <h3>Connected Profiles</h3>
      </div>

      <div className="mail-pref">
        <h3>Manage Mail Preferences</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
