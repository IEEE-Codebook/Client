import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Landingpage from "./components/pages/Landingpage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfilePage from "./components/pages/ProfilePage";

import Contests from "./components/pages/Upcoming_Contest/Contests";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home_Page from "./components/pages/Home_page/Home_Page";
import UserSubmission from "./components/pages/userSubmissions";
import Mock_Interview from "./components/pages/Mock_Interview";
import Interview_Home from "./components/Interview/home.jsx";
import Room from "./components/Interview/Room";
import { io } from 'socket.io-client';
import { socket } from "./socket";
import { useSelector } from "react-redux";
import axios from "axios";

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://localhost:8000';

function App() {
  const [socket, setSocket] = useState(io(URL));
  const [nameOfUser, setNameOfUser] = useState("abc")
  const [isDisconnected, setIsDisconnected] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  

  useEffect(() => {
		if (isDisconnected===true) {
			const s = io(URL);
			setSocket(s);
			window.location.reload();
			setIsDisconnected(false);

			return () => {
				s.disconnect();
			}
		}
		
	}, [isDisconnected]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/home" element={<Home_Page />}></Route>
          <Route path="/userSubmissions" element={<UserSubmission />}></Route>
          <Route path="/upcomingContests" element={<Contests />} />
          <Route path="/interview" element={<Mock_Interview />} />
          <Route path="/rooms" element={<Interview_Home socket={socket} setNameOfUser={setNameOfUser}></Interview_Home>} />
          <Route path="/room/:id" element={<Room socket={socket} nameOfUser={nameOfUser} setIsDisconnected={setIsDisconnected}> </Room>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
