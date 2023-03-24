import React from "react";
import "../../css/ProfilePage.css";
import "../ToDoList.js";
import TodoList from "../ToDoList.js";
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
    <div className="main">
      <div className="row">
        <div className="col-md-4 mt-1">
          <div className="card text-center sidebar">
            <div className="card-body">
              <img
                className="rounded-circle"
                src="https://i.imgur.com/cMy8V5j.png"
                alt="user"
              />
              <div className="user-name-profile mt-3">
                <div className="user-name">
                  <h3>Name</h3>

                  <h3>NickName</h3>
                </div>
                <div className="friends mt-5">
                  <h3># of friends</h3>
                </div>
                <div className="rank mt-5">
                  <h3>Rank</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-1">
          <div className="card text-left">
            <div className="todo-list">
              {/* <h4>To-Do list</h4> */}
              <TodoList />
            </div>
            <div className="points mt-1">
              <h3>Points</h3>
            </div>
            <div className="badge mt-1">
              <h3>Badge</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-1">
          <div className="card text-left">
            <div className="ratings">
              <h4>ratings</h4>
            </div>
            <div className="connected-profiles mt-3">
              <h4>connected profiles</h4>
            </div>
            <div className="mail-pref mt-3">
              <h4>mail preferences</h4>
            </div>
            <div className="delete-account mt-2">
              <button className="btn btn-danger-outline">Delete Account</button>
              <button className="btn btn-danger-outline">
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
