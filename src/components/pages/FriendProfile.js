import React from "react";
import "../../css/ProfilePage.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { friendProfile, addFriend } from "../../api/profileSlice";
import Spinner from "../Spinner";
import Lottie from "lottie-react";
import chill from "../../chill.json";
import Heatmap from "../Heatmap";
const FriendProfile = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {
    name,
    email,
    codeforces,
    atcoder,
    following,
    isError,
    isLoading,
    message,
  } = useSelector((state) => state.profile);
  const addNewFriend = async () => {
    const token = user.token ? user.token : user;
    if (!token) {
      navigate("/login");
    }
    dispatch( addFriend([token, search]));
    alert("Friend Added");
  };
  useEffect(() => {
    if (isError) console.log(message);
    dispatch(friendProfile(search));
  }, [isError, alert, message, search, friendProfile, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>No User Found</h1>;
  }
  return (
    <div class="wrapper">
      <div class="profile">
        <div class="profile_info">
          <div class="info">
            <p class="name">{name}</p>
            <Lottie className="lottie" animationData={chill} loop={true} />
          </div>
        </div>
        <div class="profile_skills">
          <span class="title">Friends - {following.length}</span>
          <span class="title">Mail - {email}</span>
          <span class="handles">Codeforces - {codeforces}</span>
          <span class="handles">Atcoder - {atcoder}</span>
        </div>
        <button
          className="pure-material-button-contained edit-btn"
          onClick={addNewFriend}
        >
          Add Friend.
        </button>
      </div>
      <Heatmap />
    </div>
  );
};

export default FriendProfile;
