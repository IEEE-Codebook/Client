import React from "react";
import "./App.css";
// import Calendar from "./components/Calendar";
// import GoogleOAuth from "./components/GoogleOAuth";
// import Landingpage from './components/Landingpage';
// import Login from "./components/Login";
// import ProfilePage from "./components/ProfilePage";
// import SignIn from "./components/SignIn";
// import Chat from "./components/Chat";
import "./css/Chat.css";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "./components/Firebase";

function App() {
  async function requestPermission() {
    const persmission = await Notification.requestPermission();
    if (persmission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BPRnzHGshBcD1XgvVp3CeQ0DK6JbZsqqj29hpCWkvEDdI2yXbm_Nqp3T7O4rsa6TOm2LzR7nLBkzc2DUGBnjUlY",
      });
      console.log(token);
    } else if (persmission === "denied") console.log("Permission denied");
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return <div className="App">
    
  </div>;
}

export default App;
