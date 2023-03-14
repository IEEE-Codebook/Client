import React from "react";
import Landingpage from "./components/pages/Landingpage"
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup"
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
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
