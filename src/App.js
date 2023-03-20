import React from "react";
import NavBar from "./components/NavBar"
import Landingpage from "./components/pages/Landingpage"
import Home_Page from "./components/pages/Home_Page"
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup"
import ProfilePage from "./components/pages/ProfilePage"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <NavBar />
       <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/home" element={<Home_Page/>}></Route>
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
