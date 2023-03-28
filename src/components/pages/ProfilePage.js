import React from "react";
import axios from "axios";
import "../../css/ProfilePage.css";
import "../ToDoList.js";
import TodoList from "../ToDoList.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/profileSlice";
import { useState } from "react";
import Spinner from "../Spinner";
const ProfilePage = () => {
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { name, email, codeforces, following, isError,isLoading, message } = useSelector(
    (state) => state.profile
  );
  const handleUpload = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");
    dispatch(getProfile(user));
  }, [isError, message, user, navigate, dispatch]);

  if(isLoading)
  {
    return <Spinner />
  }
  return (
    <div class="wrapper">
      <div class="profile">
        <div class="profile_info">
          <div class="info">
            <p class="name">{name}</p>
            <p class="place">{codeforces}</p>
            <img src={image} alt="image" className="profile_img"></img>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <button onClick={handleUpload}>upload new proile photo</button>
          </div>
        </div>
        <div class="profile_skills">
          <div class="skills">
            <p>Skills</p>
            <ul>
              <li>
                <span class="title">Friends - {following.length}</span>
              </li>
              <li>
                <span class="title">Mail - {email}</span>
              </li>
              <li>
                <span class="handles">codeforces</span>
                <br></br>
                <span class="handles">atcoder</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className="profilePage_main">
    //   <div className="profilePage_row">
    //     <div className="profilePage_col-md-4 mt-1">
    //       <div className="profilePage_card text-center sidebar">
    //         <div className="profilePage_card-body">
    //           <img
    //             className="profilePage_rounded-circle"
    //             src="https://i.imgur.com/cMy8V5j.png"
    //             alt="user"
    //           />
    //           <div className="profilePage_user-name-profile mt-3">
    //             <div className="profilePage_user-name">
    //               <h3>{name}</h3>
    //             </div>
    //             <div className="profilePage_friends mt-5">
    //               <h3>{following.length}</h3>
    //             </div>
    //             <div className="profilePage_rank mt-5">
    //               <h3>Rank</h3>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="profilePage_col-md-4 mt-1">
    //       <div className="profilePage_card text-left">
    //         <div className="profilePage_recent-submissions">
    //           <h4>recent subs</h4>
    //         </div>
    //         <div className="profilePage_points mt-5">
    //           <h3>Points</h3>
    //         </div>
    //         <div className="profilePage_badge mt-5">
    //           <h3>Badge</h3>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="profilePage_col-md-4 mt-1">
    //       <div className="profilePage_card text-left">
    //         <div className="profilePage_ratings">
    //           <h4>ratings</h4>
    //         </div>
    //         <div className="profilePage_connected-profiles mt-3">
    //           <h4>{codeforces}</h4>
    //         </div>
    //         <div className="profilePage_mail-pref mt-3">
    //           <h4>email = {email}</h4>
    //         </div>
    //         <div className="profilePage_delete-account mt-2">
    //           <button className="profilePage_btn profilePage_btn-danger-outline">
    //             Delete Account
    //           </button>
    //           <button className="profilePage_btn profilePage_btn-danger-outline">
    //             Deactivate Account
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfilePage;
