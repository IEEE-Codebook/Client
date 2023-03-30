import React from "react";
import "../../css/ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, addAtcoder, addCodeforces } from "../../api/profileSlice";
import { useState } from "react";
import Spinner from "../Spinner";
import Lottie from "lottie-react";
import chill from "../../chill.json";
import {TextField } from "@material-ui/core";

const ProfilePage = () => {
  const [handle, setHandle] = useState("");
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

  const handleAddAtcoder = (e) => {
    e.preventDefault();
    const token = user.token ? user.token : user;
    dispatch(addAtcoder([token, handle]));
    setHandle("");
  };
  const handleAddCodeforces = (e) => {
    e.preventDefault();
    const token = user.token ? user.token : user;
    dispatch(addCodeforces([token, handle]));
    setHandle("");
  };

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");
    dispatch(getProfile(user));
  }, [isError, message, user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
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
          {codeforces ? (
            <span class="handles">Codeforces - {codeforces}</span>
          ) : (
            <div>
              <TextField
                value={handle}
                label="Codeforces"
                onChange={(e) => setHandle(e.target.value)}
                required
              />
              <button
                className="pure-material-button-contained"
                onClick={handleAddCodeforces}
              >
                Link Codeforces
              </button>
            </div>
          )}
          {atcoder ? (
            <span class="handles">Atcoder - {atcoder}</span>
          ) : (
            <div>
              <TextField
                value={handle}
                label="Atcoder"
                onChange={(e) => setHandle(e.target.value)}
                required
              />
              <button
                className="pure-material-button-contained"
                onClick={handleAddAtcoder}
              >
                Link Atcoder
              </button>
            </div>
          )}
        </div>
        <button className="pure-material-button-contained edit-btn" onClick={ navigate("/edit")}>Edit</button>
      </div>
    </div>
  );
};

export default ProfilePage;
