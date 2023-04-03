import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { useEffect } from "react";
import { getProfile, editDetails } from "../../api/profileSlice";
import { useNavigate } from "react-router";
import "../../css/ProfilePage.css"


function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { name, email, codeforces, atcoder, isError, message } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");
    dispatch(getProfile(user));
  }, [isError, message, user, navigate, dispatch]);
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userCodeforces, setUserCodeforces] = useState(codeforces);
  const [userAtcoder, setUserAtcoder] = useState(atcoder);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const token = user.token ? user.token : user;
    const detail = {
      token: token,
      name: userName,
      email: userEmail,
      codeforces: userCodeforces,
      atcoder: userAtcoder,
    };
    dispatch(editDetails(detail));
  };
  return (
    <div>
      <form onSubmit={handleEditSubmit}>
        <div className="edit-form">
          <TextField
            className="edit-input"
            value={userName}
            defaultValue={name}
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            className="edit-input"
            value={userEmail}
            defaultValue={email}
            label="Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            className="edit-input"
            value={userAtcoder}
            defaultValue={atcoder}
            label="Atcoder"
            onChange={(e) => setUserAtcoder(e.target.value)}
          />
          <TextField
            className="edit-input"
            value={userCodeforces}
            defaultValue={codeforces}
            label="Codeforces"
            onChange={(e) => setUserCodeforces(e.target.value)}
          />
          <button type="submit" className="editform-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
