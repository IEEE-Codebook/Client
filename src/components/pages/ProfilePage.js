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
import { TextField } from "@material-ui/core";
import Heatmap from "../Heatmap"

const ProfilePage = () => {
  const [handle_atcoder, setHandle_Atcoder] = useState("");
  const [handle_codeforces,setHandle_Codeforces] = useState("")
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
    dispatch(addAtcoder([token, handle_atcoder]));
    setHandle_Atcoder("");
  };
  const handleAddCodeforces = (e) => {
    e.preventDefault();
    const token = user.token ? user.token : user;
    dispatch(addCodeforces([token, handle_codeforces]));
    setHandle_Codeforces("");
  };
  const handleEdit = () => {
    navigate("/profile/edit");
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
    <div class="profile_wrapper">
      <div class="profile">
        <div class="profile_info">
          <div class="info">
            <p class="name">{name}</p>
            <Lottie className="profile_lottie" animationData={chill} loop={true} />
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
                value={handle_codeforces}
                label="Codeforces"
                onChange={(e) => setHandle_Codeforces(e.target.value)}
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
                value={handle_atcoder}
                label="Atcoder"
                onChange={(e) => setHandle_Atcoder(e.target.value)}
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
        <button
          className="pure-material-button-contained edit-btn"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <div id="right">
        {codeforces?<Heatmap></Heatmap>:<div/>}
      </div>
    </div>
  );
};

export default ProfilePage;
