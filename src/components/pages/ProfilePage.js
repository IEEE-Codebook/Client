import React from "react";
import "../../css/ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/profileSlice";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {isError,message } =
    useSelector((state) => state.profile);

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");
    dispatch(getProfile(user));
  }, [isError, message, user, navigate, dispatch]);
  return (
    <div className="profilePage_main">
      <div className="profilePage_row">
        <div className="profilePage_col-md-4 mt-1">
          <div className="profilePage_card text-center sidebar">
            <div className="profilePage_card-body">
              <img
                className="profilePage_rounded-circle"
                src="https://i.imgur.com/cMy8V5j.png"
                alt="user"
              />
              <div className="profilePage_user-name-profile mt-3">
                <div className="profilePage_user-name">
                  <h3>Name</h3>

                  <h3>NickName</h3>
                </div>
                <div className="profilePage_friends mt-5">
                  <h3># of friends</h3>
                </div>
                <div className="profilePage_rank mt-5">
                  <h3>Rank</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profilePage_col-md-4 mt-1">
          <div className="profilePage_card text-left">
            <div className="profilePage_recent-submissions">
              <h4>recent subs</h4>
            </div>
            <div className="profilePage_points mt-5">
              <h3>Points</h3>
            </div>
            <div className="profilePage_badge mt-5">
              <h3>Badge</h3>
            </div>
          </div>
        </div>
        <div className="profilePage_col-md-4 mt-1">
          <div className="profilePage_card text-left">
            <div className="profilePage_ratings">
              <h4>ratings</h4>
            </div>
            <div className="profilePage_connected-profiles mt-3">
              <h4>connected profiles</h4>
            </div>
            <div className="profilePage_mail-pref mt-3">
              <h4>mail preferences</h4>
            </div>
            <div className="profilePage_delete-account mt-2">
              <button className="profilePage_btn profilePage_btn-danger-outline">Delete Account</button>
              <button className="profilePage_btn profilePage_btn-danger-outline">
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
