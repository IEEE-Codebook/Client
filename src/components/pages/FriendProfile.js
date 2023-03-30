import React from "react";
import "../../css/ProfilePage.css";
import "../ToDoList.js";
import TodoList from "../ToDoList.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { friendProfile } from "../../api/profileSlice";
import { useState } from "react";
import Spinner from "../Spinner";
import Lottie from "lottie-react"
import chill from "../../chill.json";
const FriendProfile = () => {
  const { search } = useParams();
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    name,
    email,
    codeforces,
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
          
            <Lottie animationData={chill} loop={true} />
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
  );
};

export default FriendProfile;
