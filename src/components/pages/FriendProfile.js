import React from "react";
import "../../css/ProfilePage.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { friendProfile } from "../../api/profileSlice";
import Spinner from "../Spinner";
import Lottie from "lottie-react";
import chill from "../../chill.json";
const FriendProfile = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
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
        <button className="pure-material-button-contained edit-btn">
          Add Friend.
        </button>
      </div>
    </div>
  );
};

export default FriendProfile;
