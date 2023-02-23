import "./App.css";
import Calendar from "./components/Calendar";
import GoogleOAuth from "./components/GoogleOAuth";
import Landingpage from './components/Landingpage';
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import "./css/Chat.css"

function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      {/* <GoogleOAuth/>
      <Calendar /> */}
      {/* <Login /> */}
      {/* <SignIn /> */}
      {/* <ProfilePage /> */}
      <Chat />
    </div>
  );
}

export default App;
