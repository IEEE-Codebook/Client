import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Landingpage from "./components/pages/Landingpage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfilePage from "./components/pages/ProfilePage";
import Contests from "./components/pages/Upcoming_Contest/Contests";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/Home_page/Home_Page";
import UserSubmission from "./components/pages/userSubmissions";
import MockInterview from "./components/pages/Mock_Interview";
import FriendProfile from "./components/pages/FriendProfile";
import FriendsSubmissionsFull from "./components/pages/FriendsSubmissionsFull";
import EditProfile from "./components/pages/EditProfile";
import Interview_Home from "./components/Interview/home.jsx";
import Room from "./components/Interview/Room";
import Results from "./components/pages/LeaderboardResult";
import { io } from 'socket.io-client';

const URL = 'http://localhost:8000';

function App() {
  const [socket, setSocket] = useState(io(URL));
  const [isDisconnected, setIsDisconnected] = useState(false);

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
          <Route path="/profile/me" element={<ProfilePage />}></Route>
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/:search" element={<FriendProfile />} />
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/userSubmissions" element={<UserSubmission />}></Route>
          <Route path="/friendSubmissions" element={<FriendsSubmissionsFull />} />
          <Route path="/upcomingContests" element={<Contests />} />
          <Route path="/mockInterview" element={<MockInterview />} />
          <Route path="/leadresults" element={<Results />} />
          <Route path="/rooms" element={<Interview_Home socket={socket} ></Interview_Home>} />
          <Route path="/room/:id" element={<Room socket={socket}  setIsDisconnected={setIsDisconnected}> </Room>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
