import "./App.css";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import GoogleOAuth from "./components/GoogleOAuth";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      {/* <GoogleOAuth/>
      <Calendar /> */}
      {/* <Login /> */}
      <SignIn />
      {/* <ProfilePage /> */}
      <Footer />
    </div>
  );
}

export default App;
